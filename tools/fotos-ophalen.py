#!/usr/bin/env python3
"""Haalt per recept een foto op van Wikimedia Commons, met auteur en licentie.

Gebruik:  python3 tools/fotos-ophalen.py            (alleen ontbrekende foto's)
          python3 tools/fotos-ophalen.py --opnieuw  (alles opnieuw)

Schrijft img/<recept-id>.jpg en js/data/fotos.js. Alleen vrije licenties
(CC0, publiek domein, CC BY, CC BY-SA) worden gebruikt; de bronvermelding
verschijnt in de app onder de foto. Vraagt de API in groepen aan en wacht
tussen downloads, zoals Wikimedia vraagt.
"""
import io
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / 'img'
UIT = ROOT / 'js' / 'data' / 'fotos.js'
CACHE = ROOT / 'tools' / '.fotos-cache.json'   # zoekresultaten, zodat een herstart de API niet opnieuw belast
UA = 'ReceptenboekMark/1.0 (https://github.com/markbus7/Receptenboek-Mark; persoonlijk receptenboek)'
THUMB = 960      # een van de standaardformaten van Wikimedia (https://w.wiki/GHai)
BREEDTE = 800    # opgeslagen breedte
PAUZE = 1.5      # seconden tussen downloads

# Recept-id -> Wikipedia-artikel ("nl:" voor de Nederlandse Wikipedia) of "File:..." op Commons.
# Een "File:" is met de hand gekozen omdat de foto van het artikel niet het gerecht liet zien.
ARTIKELEN = {
    'spaghetti-carbonara': 'Carbonara', 'lasagne-bolognese': 'Lasagna', 'risotto-paddenstoelen': 'Risotto',
    'pizza-margherita': 'Pizza Margherita', 'penne-arrabbiata': 'Arrabbiata sauce', 'pasta-pesto-kip': 'File:Trofie al pesto .jpg',
    'tiramisu': 'Tiramisu', 'hutspot-rookworst': 'Hutspot', 'erwtensoep': 'File:Andersens Pea Soup.jpg',
    'boerenkool-stamppot': 'nl:Boerenkoolstamppot', 'pannenkoeken': 'nl:Pannenkoek', 'draadjesvlees': 'File:Stewed beef.jpg',
    'appeltaart': 'nl:Appeltaart', 'gehaktballen-jus': 'nl:Gehaktbal', 'nasi-goreng': 'Nasi goreng',
    'sate-ajam': 'File:Chicken Satay With Peanut Sauce.jpg', 'pad-thai': 'Pad thai', 'groene-curry': 'Green curry', 'tom-kha-kai': 'Tom kha kai',
    'kung-pao-kip': 'Kung Pao chicken', 'teriyaki-zalm': 'File:Salmon Teriyaki.jpg', 'butter-chicken': 'Butter chicken',
    'chana-masala': 'Chana masala', 'dal': 'File:Dal Tadka-Delhi.jpg', 'chili-con-carne': 'Chili con carne', 'kip-fajitas': 'Fajita',
    'quesadillas': 'Quesadilla', 'chicken-katsu': 'Katsu curry', 'bibimbap': 'Bibimbap', 'shakshuka': 'Shakshouka',
    'falafel': 'Falafel', 'kip-shoarma': 'Shawarma', 'souvlaki-tzatziki': 'Souvlaki', 'moussaka': 'Moussaka',
    'kip-tajine': 'Tajine', 'griekse-salade': 'Greek salad', 'quiche-lorraine': 'Quiche', 'ratatouille': 'Ratatouille',
    'franse-uiensoep': 'French onion soup', 'paella': 'Paella', 'patatas-bravas': 'Patatas bravas',
    'smash-burgers': 'Hamburger', 'mac-and-cheese': 'Macaroni and cheese', 'american-pancakes': 'Pancake',
    'chocolade-lavacake': 'Molten chocolate cake', 'curry-madras': 'Madras curry',
    'chicken-tikka-masala': 'Chicken tikka masala', 'kip-korma': 'Korma', 'kip-biryani': 'Biryani',
    'saag-paneer': 'Saag', 'tandoori-kip': 'Tandoori chicken', 'naan': 'Naan', 'aloo-gobi': 'Aloo gobi',
    'rendang': 'Rendang', 'babi-ketjap': 'nl:Babi ketjap', 'gado-gado': 'Gado-gado', 'bami-goreng': 'Mie goreng',
    'sajoer-lodeh': 'Sayur lodeh', 'ajam-pedis': 'File:Ayam Rica-rica.JPG', 'perkedel-djagung': 'Perkedel jagung',
    'no-knead-brood': 'No-knead bread', 'vlaamse-stoverij': 'Carbonade flamande', 'boeuf-bourguignon': 'Beef bourguignon',
    'hongaarse-goulash': 'Goulash', 'coq-au-vin': 'Coq au vin', 'pulled-pork': 'Pulled pork',
    'kip-dutch-oven': 'Roast chicken', 'ossobuco': 'Ossobuco', 'roti-kip': 'nl:Roti (gerecht)',
    'bakabana': 'File:Pisang Goreng.jpg', 'linzensoep-mercimek': 'Lentil soup', 'kofte': 'Kofta', 'pho-bo': 'Pho',
    'franse-omelet': 'Omelette', 'boerenomelet': 'nl:Boerenomelet', 'uitsmijter': 'Uitsmijter',
    'roerei-toast': 'Scrambled eggs', 'tortilla-patatas': 'Spanish omelette', 'frittata': "File:Frittata - Bam's Kitchen 2024-04-02.jpg",
    'menemen': 'Menemen (food)', 'tamagoyaki': 'Tamagoyaki', 'eggs-benedict': 'Eggs Benedict',
    'huevos-rancheros': 'Huevos rancheros', 'eieren-koken': 'Boiled egg',
    'kip-madras': 'File:Madras chicken curry @ New Delhi @ Annecy (31691503017).jpg',
    'bun-cha-gio': 'Bún thịt nướng', 'harira': 'Harira', 'shepherds-pie': 'Shepherd\'s pie',
    # 1.9.0
    'wentelteefjes': 'French toast', 'stoofpeertjes': 'nl:Stoofpeer', 'appelflappen': 'nl:Appelflap',
    'poffertjes': 'Poffertjes', 'oliebollen': 'Oliebol', 'zuurkoolstamppot': 'File:Zuurkool op bord.jpg',
    'andijviestamppot': 'nl:Andijviestamppot', 'hachee': 'Hachee', 'hollandse-macaroni': 'File:Pasta al Forno 01.jpg',
    'groentesoep-balletjes': 'nl:Groentesoep', 'kapsalon': 'Kapsalon', 'kaassaus': 'File:Cauliflower-cheese.jpg', 'jus': 'Gravy',
    'mosselen': 'Moules-frites', 'gentse-waterzooi': 'Waterzooi', 'vol-au-vent': 'Vol-au-vent', 'stoemp': 'Stoemp',
    'luikse-wafels': 'nl:Luikse wafel', 'steak-frites': 'Steak frites', 'mayonaise': 'Mayonnaise',
    'wiener-schnitzel': 'Wiener schnitzel', 'apfelstrudel': 'Apple strudel', 'kaiserschmarrn': 'Kaiserschmarrn',
    'currywurst': 'Currywurst', 'kartoffelsalat': 'Potato salad',
    'crepes': 'Crêpe', 'croque-monsieur': 'Croque monsieur', 'creme-brulee': 'Crème brûlée',
    'pepersaus': 'Peppercorn sauce', 'champignonsaus': 'Mushroom sauce', 'bearnaise': 'Béarnaise sauce',
    'hollandaise': 'Hollandaise sauce', 'bechamel': 'Béchamel sauce', 'spaghetti-bolognese': 'Bolognese sauce',
    'minestrone': 'Minestrone', 'panna-cotta': 'Panna cotta', 'spaghetti-aglio-olio': 'Spaghetti aglio e olio',
    'tomatensaus': 'Tomato sauce', 'pesto': 'Pesto',
    'gambas-al-ajillo': 'Gambas al ajillo', 'gazpacho': 'Gazpacho', 'churros': 'Churro', 'gyros': 'Gyros',
    'spanakopita': 'Spanakopita', 'paprikas-csirke': 'Chicken paprikash', 'gulyasleves': 'nl:Goulashsoep',
    'langos': 'Lángos', 'toltott-paprika': 'Stuffed peppers', 'lahmacun': 'Lahmacun', 'karniyarik': 'Karnıyarık',
    'hummus': 'Hummus', 'tabouleh': 'Tabbouleh', 'knoflooksaus': 'Garlic sauce', 'groentecouscous': 'Couscous',
    'kefta-tajine': 'File:Tajine de boulettes de viande hachée aux oeufs.jpg', 'zaalouk': 'Zaalouk',
    'pindasaus': 'Peanut sauce', 'saoto-soep': 'Soto (food)', 'pom': 'Pom (dish)', 'bara': 'File:Vada 2.jpg',
    'pad-kra-pao': 'Phat kaphrao', 'pad-see-ew': 'Pad see ew', 'massaman-curry': 'Massaman curry',
    'kip-cashew': 'Cashew chicken', 'banh-mi': 'Bánh mì', 'goi-cuon': 'Gỏi cuốn', 'bo-luc-lac': 'Shaking beef',
    'fish-and-chips': 'Fish and chips', 'full-english-breakfast': 'Full breakfast',
    'sticky-toffee-pudding': 'Sticky toffee pudding', 'apple-crumble': 'Crumble',
    'foe-yong-hai': 'File:Nasi Fuyong Hai.jpg', 'tjap-tjoy': 'Chop suey', 'babi-pangang': 'nl:Babi pangang',
    'zoetzure-kip': "File:9681KIng's Special and Sweet & Sour Chicken 08.jpg", 'egg-fried-rice': 'Fried rice', 'beef-broccoli': 'Beef and broccoli',
    'bulgogi': 'Bulgogi', 'kimchi-fried-rice': 'Kimchi fried rice', 'japchae': 'Japchae',
    'korean-fried-chicken': 'Korean fried chicken', 'ramen': 'Ramen', 'yakisoba': 'Yakisoba', 'gyoza': 'File:Baked gyoza of Gyoza-no-Manshu.jpg',
    # Kruiden en specerijen (tabblad Kruiden), met de hand gekozen foto's van het product
    'kruid-peterselie': 'File:Parsley leaves (89358).jpg',
    'kruid-koriander': 'File:Bunches of coriander leaves.jpg',
    'kruid-basilicum': 'File:L Basil 1.jpg',
    'kruid-tijm': 'File:Thyme-spice.jpg',
    'kruid-oregano': 'File:Dried Oregano.JPG',
    'kruid-laurier': 'File:Dried bay leaves.jpg',
    'kruid-munt': 'File:Mint leaves raster.jpg',
    'kruid-dille': 'File:Chopping Fresh Herbs.jpg',
    'kruid-bieslook': 'File:Cut Garlic Chives.jpg',
    'kruid-dragon': 'File:Dried Taragon.JPG',
    'kruid-citroengras': 'File:Foto Resep Bumbu Rawon.jpg',
    'kruid-djeroek': 'File:C hystrix kaffir lime leaves.jpg',
    'kruid-fenegriek': 'File:Dried leaves of Fenugreek-Kasuri Methi.jpg',
    'kruid-peper': 'File:Tellicherry Black Peppercorns.jpg',
    'kruid-paprikapoeder': 'File:Aleva paprika.jpg',
    'kruid-komijn': 'File:Seeds of Cumin.jpg',
    'kruid-korianderzaad': 'File:Coriander Seeds.jpg',
    'kruid-kurkuma': 'File:Curcuma longa roots.jpg',
    'kruid-laos': 'File:Galangal.jpg',
    'kruid-kaneel': 'File:Canelle Cinnamomum burmanni Luc Viatour.jpg',
    'kruid-nootmuskaat': 'File:Nutmeg seed and skin.JPG',
    'kruid-kruidnagel': 'File:2023 Goździki.jpg',
    'kruid-kardemom': 'File:Green Cardamom Pods.jpg',
    'kruid-steranijs': 'File:Dried Star Anise Fruit Seeds.jpg',
    'kruid-knoflookpoeder': 'File:Garlic Powder, Penzeys Spices, Arlington Heights MA.jpg',
    'kruid-chili': 'File:Red Chili Powder (Lall Mirch) (49695826571).jpg',
    'kruid-saffraan': 'File:Iran saffron threads.jpg',
    'kruid-karwij': 'File:Caraway Seed.jpg',
    'kruid-mosterdzaad': 'File:Senf-Variationen.jpg',
    'kruid-vanille': 'File:Vanilla 6beans (rot. 90 deg.).JPG',
    'kruid-zuiveringszout': 'File:Sodium bicarbonate.jpg',
    'kruid-garam-masala': 'File:Garam Masala.JPG',
    'kruid-ras-el-hanout': 'File:Ras.el.hanout.jpg',
    'kruid-vijfkruiden': 'File:Five spices detailed.jpg',
    'kruid-shoarmakruiden': 'File:Types of spices being shown.jpg',
    'kruid-nasikruiden': 'File:Bumbu dan Rempah-rempah.jpg',
    'kruid-tandoori': 'File:Tandoori Masala (3594429661).jpg',
    'kruid-currypasta': 'File:Curry pastes Thailand (cropped).JPG',
    'kruid-italiaanse-kruiden': 'File:Italian Herb Mix, Penzeys Spices, Arlington Heights MA.jpg',
    'kruid-patatkruiden': 'File:Seasoned Salt, Penzeys Spices, Arlington Heights MA.jpg',
    'kruid-thaise-basilicum': 'File:9262-Horapa Flower Leaves.jpg',
    'kruid-gember': 'File:Ginger rhizomes.jpg',
    'kruid-jeneverbes': 'File:Blue and green juniper berries in a branch in Norrkila 3.jpg',
    'kruid-zout': 'File:Table salt with salt shaker V1.jpg',
    'kruid-tex-mex': 'File:Byadgi chili powder.jpg',
    'kruid-vleesmixen': 'File:Applying a spice rub to pork ribs for a barbecue - 20080329.jpg',
    'kruid-kerriepoeder': 'File:Nahrungsmittel 2012-07-08-9517.jpg',
    'kruid-cajun': 'File:Cajunkruiden-spice.jpg',
    # Sauzen en smaakmakers (tabblad Sauzen), met de hand gekozen foto's van het product
    'smaak-sojasaus': 'File:Kikkoman soysauce.jpg',
    'smaak-donkere-sojasaus': 'File:HK Parkn Shop Pearl River Bridge Dark Soy Sauce glass bottles Jan-2013.jpg',
    'smaak-ketjap-manis': 'File:Kecap.jpg',
    'smaak-vissaus': 'File:Thaifishsauce0609.jpg',
    'smaak-oestersaus': 'File:OysterSauce2.jpg',
    'smaak-hoisinsaus': 'File:Hoisin sauce 1.jpg',
    'smaak-worcestershiresaus': 'File:Lea & Perrins worcestershire sauce 150ml.jpg',
    'smaak-sriracha': 'File:Flying goose sriracha th.jpg',
    'smaak-ketchup': 'File:Ketchup 20160918 181342.jpg',
    'smaak-mayonaise': 'File:Zaanse mayonaise.jpg',
    'smaak-barbecuesaus': 'File:Barbecuesauces.jpg',
    'smaak-maggi': 'File:Maggiflasche.jpg',
    'smaak-tomatenpuree': 'File:Tomato paste on spoon.jpg',
    'smaak-sambal-oelek': 'File:Sambal oelek (210379470).jpg',
    'smaak-gochujang': 'File:Gochujang (chilli paste).jpg',
    'smaak-harissa': 'File:Harissa in a jar.jpg',
    'smaak-tamarinde': 'File:Tamarind paste.jpg',
    'smaak-nam-prik-pao': 'File:Thai chilli paste in oil, Thai roasted chilli jam.jpg',
    'smaak-chipotle': 'File:Chipotlesenadobo.jpg',
    'smaak-pindakaas': 'File:Peanut butter glass.jpg',
    'smaak-tahin': 'File:Tahini with oil.JPG',
    'smaak-mosterd': 'File:Dijon mustard on a spoon - 20051218.jpg',
    'smaak-azijn': 'File:Synthetic vinegar bottles.jpg',
    'smaak-rijstazijn': 'File:Rice vinegar.jpg',
    'smaak-zwarte-rijstazijn': 'File:Chinkiang vinegar.jpg',
    'smaak-appelazijn': 'File:Apple Cider Vinegar (4108653248).jpg',
    'smaak-rode-wijnazijn': 'File:Red wine vinegar.jpg',
    'smaak-sherry-azijn': 'File:Sherryvinegar.jpg',
    'smaak-sesamolie': 'File:Sesame oil.jpg',
    'smaak-chili-olie': 'File:Chili oil.jpg',
    'smaak-mirin': 'File:Japanese Mirin.JPG',
    'smaak-shaoxing': 'File:Shaoxing cooking rice wine by renbucholz.jpg',
    'smaak-kippenbouillon': 'File:Pot of chicken broth.jpg',
    'smaak-runderbouillon': 'File:Bulion Wolowy - 1.jpg',
    'smaak-groentebouillon': 'File:Vegan Vegetable Stock (8530528590).jpg',
    'smaak-visbouillon': 'File:Fumet (Lubina).jpg',
    'smaak-kalfsbouillon': 'File:Broth.jpg',
    'smaak-dashi': 'File:JapaneseKatsuobushiAndKombu.jpg',
    'botercake': 'nl:Cake (gebak)',
    'sushi-maki': 'File:Homemade sushi rolls, 2009.jpg',
    'burritos': 'Burrito', 'tacos': 'Taco', 'enchiladas': 'Enchilada', 'guisado-carne-molida': 'Picadillo',
    'nachos': 'Nachos', 'salsa-fresca': 'Pico de gallo', 'brownies': 'Chocolate brownie', 'ny-cheesecake': 'Cheesecake',
    'fried-chicken': 'Fried chicken', 'chocolate-chip-cookies': 'Chocolate chip cookie', 'barbecuesaus': 'File:Ribs with Asian Barbecue Sauce 3of3 (8735180329).jpg',
    # 1.12.0
    'gehaktballen-tomatensaus': 'File:Polpette Al Sugo - Nanninella.jpg',
    # 1.19.0: er is geen vrije foto van kip kerrie met perzik; deze kip kerrie met rijst lijkt er het meest op
    'kip-kerrie-perzik': 'File:Chicken curry rice.jpg',
    # 1.38.0
    # (kimchi jjigae en Surinaamse pastei: geen vrije foto gevonden, dus het tegeltje)
    'rakott-krumpli': 'Rakott krumpli', 'mechoui': 'Méchoui', 'sutlac': 'File:Sütlaç (Turkish rice pudding).jpeg',
    'spareribs': 'Spare ribs',
}

VRIJ = re.compile(r'^(cc0|public domain|pd|cc by(-sa)? [\d.]+)', re.I)


def haal(url, pogingen=25):
    """GET met nette User-Agent; wacht en probeert opnieuw bij 429/503 of een haperende verbinding.

    Vanaf een gedeeld IP-adres (zoals een cloudomgeving) geeft Wikimedia vaak 429; dan volgen we
    Retry-After en proberen we het rustig opnieuw."""
    for poging in range(pogingen):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=60) as r:
                return r.read()
        except urllib.error.HTTPError as fout:
            if fout.code not in (429, 500, 502, 503, 504) or poging == pogingen - 1:
                raise
            wacht = min(int(fout.headers.get('Retry-After') or 20), 60)
        except urllib.error.URLError:
            if poging == pogingen - 1:
                raise
            wacht = 10
        print(f'   … even wachten ({wacht}s)', flush=True)
        time.sleep(wacht)


def api(host, **params):
    params.update(format='json', formatversion='2')
    return json.loads(haal(f'https://{host}/w/api.php?' + urllib.parse.urlencode(params)))


def groepen(lijst, n=40):
    for i in range(0, len(lijst), n):
        yield lijst[i:i + n]


def zoek_bestanden(ids):
    """Recept-id -> bestandsnaam op Commons, met één API-aanvraag per 40 artikelen."""
    gevonden, per_wiki = {}, {}
    for rid in ids:
        artikel = ARTIKELEN[rid]
        if artikel.startswith('File:'):
            gevonden[rid] = artikel[5:]
            continue
        taal, titel = ('nl', artikel[3:]) if artikel.startswith('nl:') else ('en', artikel)
        per_wiki.setdefault(taal, []).append((rid, titel))

    for taal, paren in per_wiki.items():
        host = f'{taal}.wikipedia.org'
        for groep in groepen(paren):
            data = api(host, action='query', prop='pageimages', piprop='name', redirects=1,
                       titles='|'.join(t for _, t in groep))['query']
            # Volg normalisatie en doorverwijzingen terug naar de oorspronkelijke titel.
            naar = {}
            for stap in data.get('normalized', []) + data.get('redirects', []):
                naar[stap['from']] = stap['to']
            beeld = {p['title']: p.get('pageimage') for p in data.get('pages', [])}
            for rid, titel in groep:
                t = titel
                while t in naar:
                    t = naar[t]
                if beeld.get(t):
                    gevonden[rid] = beeld[t]
            time.sleep(1)
        # Artikelen zonder hoofdafbeelding: probeer het beste zoekresultaat.
        for rid, titel in paren:
            if rid in gevonden:
                continue
            data = api(host, action='query', generator='search', gsrsearch=titel, gsrlimit=1, prop='pageimages', piprop='name')
            paginas = data.get('query', {}).get('pages', [])
            if paginas and paginas[0].get('pageimage'):
                gevonden[rid] = paginas[0]['pageimage']
            time.sleep(1)
    return gevonden


def info_per_bestand(bestanden):
    """Bestandsnaam -> thumbnail-url, licentie, auteur en bronpagina."""
    resultaat = {}
    for groep in groepen(sorted(set(bestanden))):
        data = api('commons.wikimedia.org', action='query', prop='imageinfo', iiprop='url|extmetadata|mime|size|user',
                   iiurlwidth=THUMB, titles='|'.join('File:' + b for b in groep))['query']
        for pagina in data.get('pages', []):
            ii = (pagina.get('imageinfo') or [None])[0]
            if not ii:
                continue
            meta = ii.get('extmetadata', {})
            waarde = lambda k: unescape(re.sub(r'<[^>]+>', '', meta.get(k, {}).get('value', ''))).strip()
            naam = pagina['title'].split(':', 1)[1]
            resultaat[naam.replace(' ', '_')] = {
                'thumb': ii.get('thumburl') or ii['url'],
                'origineel': ii['url'],
                'grootte': ii.get('size', 0),
                'mime': ii.get('mime', ''),
                'licentie': waarde('LicenseShortName'),
                # Maker uit de metadata, ingekort tot de naam; anders de uploader van het bestand.
                'auteur': re.split(r';| from ', re.sub(r'\s+', ' ', waarde('Artist')))[0].strip()[:60] or ii.get('user') or 'Onbekend',
                'bron': ii.get('descriptionurl', ''),
            }
        time.sleep(1)
    return resultaat


def kleiner(meta):
    """Url van de verkleinde versie. Is het origineel smaller dan THUMB, dan geeft de API het origineel
    terug; dat weigert upload.wikimedia.org vaak (429), dus vragen we een standaardformaat van 500 px."""
    if 'thumbnail_unscaled' not in meta['thumb']:
        return meta['thumb']
    pad = meta['origineel'].split('/wikipedia/commons/', 1)[1].split('?')[0]
    return f"https://thumb.wikimedia.org/wikipedia/commons/thumb/{pad}/500px-{pad.rsplit('/', 1)[1]}"


def bewaar_foto(data, pad):
    """Schaal naar BREEDTE en sla op als compacte JPEG (valt terug op het origineel zonder Pillow)."""
    try:
        from PIL import Image
        Image.MAX_IMAGE_PIXELS = 200_000_000
        beeld = Image.open(io.BytesIO(data)).convert('RGB')
        if beeld.width > BREEDTE:
            beeld = beeld.resize((BREEDTE, round(beeld.height * BREEDTE / beeld.width)), Image.LANCZOS)
        beeld.save(pad, 'JPEG', quality=80, optimize=True, progressive=True)
    except ImportError:
        pad.write_bytes(data)


def schrijf(fotos):
    UIT.write_text(
        "/* Foto's per recept. Wordt gevuld door tools/fotos-ophalen.py; zonder foto toont een recept het tegeltje. */\n"
        'window.FOTOS = ' + json.dumps(dict(sorted(fotos.items())), ensure_ascii=False, indent=1) + ';\n',
        encoding='utf-8')


def main():
    opnieuw = '--opnieuw' in sys.argv
    IMG.mkdir(exist_ok=True)
    fotos = {}
    if UIT.exists() and not opnieuw:
        m = re.search(r'window\.FOTOS = (\{.*\});', UIT.read_text(encoding='utf-8'), re.S)
        if m:
            fotos = {k: v for k, v in json.loads(m.group(1)).items() if (ROOT / v['src']).exists()}

    nodig = [rid for rid in ARTIKELEN if rid not in fotos]
    cache = json.loads(CACHE.read_text(encoding='utf-8')) if CACHE.exists() and not opnieuw else {}
    if all(rid in cache.get('gezocht', []) for rid in nodig) and cache.get('info'):
        bestanden, info = {r: cache['bestanden'][r] for r in nodig if r in cache['bestanden']}, cache['info']
        # Vaste keuzes ("File:...") gaan voor op eerdere zoekresultaten.
        bestanden.update({r: ARTIKELEN[r][5:] for r in nodig if ARTIKELEN[r].startswith('File:')})
        ontbrekend = [b for b in bestanden.values() if b.replace(' ', '_') not in info]
        if ontbrekend:
            info.update(info_per_bestand(ontbrekend))
            cache.update(bestanden={**cache['bestanden'], **bestanden}, info=info)
            CACHE.write_text(json.dumps(cache, ensure_ascii=False), encoding='utf-8')
        print(f'{len(nodig)} recepten zonder foto (zoekresultaten uit de cache).', flush=True)
    else:
        print(f'{len(nodig)} recepten zonder foto. Bestanden zoeken…', flush=True)
        bestanden = zoek_bestanden(nodig)
        for rid in nodig:
            if rid not in bestanden:
                print(f'-  {rid}: geen afbeelding bij "{ARTIKELEN[rid]}"')
        info = info_per_bestand(bestanden.values())
        CACHE.write_text(json.dumps({
            'gezocht': sorted(set(cache.get('gezocht', [])) | set(nodig)),
            'bestanden': {**cache.get('bestanden', {}), **bestanden},
            'info': {**cache.get('info', {}), **info},
        }, ensure_ascii=False), encoding='utf-8')

    thumbs_bereikbaar = True
    for rid, bestand in bestanden.items():
        meta = info.get(bestand.replace(' ', '_'))
        if not meta or not meta['mime'].startswith('image/') or meta['mime'] == 'image/svg+xml':
            print(f'-  {rid}: geen bruikbare foto ({bestand})')
            continue
        if not VRIJ.match(meta['licentie']):
            print(f'-  {rid}: licentie "{meta["licentie"]}" overgeslagen')
            continue
        try:
            pad = IMG / f'{rid}.jpg'
            # Verkleinde versies komen van thumb.wikimedia.org; is dat niet bereikbaar, dan
            # halen we het origineel van upload.wikimedia.org en verkleinen we het zelf.
            data = None
            if thumbs_bereikbaar:
                try:
                    data = haal(kleiner(meta), pogingen=8)
                except urllib.error.HTTPError:
                    raise  # server bereikbaar maar weigert: niet terugvallen op het (zwaardere) origineel
                except urllib.error.URLError:
                    thumbs_bereikbaar = False
                    print('   verkleinde versies niet bereikbaar; originelen worden gebruikt', flush=True)
            if data is None:
                if meta['grootte'] > 25_000_000:
                    raise ValueError('origineel groter dan 25 MB')
                data = haal(meta['origineel'], pogingen=8)
            bewaar_foto(data, pad)
            fotos[rid] = {'src': f'img/{rid}.jpg', 'auteur': meta['auteur'], 'licentie': meta['licentie'], 'bron': meta['bron']}
            schrijf(fotos)
            print(f'ok {rid}: {bestand} ({meta["licentie"]})', flush=True)
        except Exception as fout:  # één mislukte foto mag de rest niet tegenhouden
            print(f'!  {rid}: {fout}')
        time.sleep(PAUZE)

    schrijf(fotos)
    print(f'\n{len(fotos)} van {len(ARTIKELEN)} recepten hebben een foto. Controleer ze even in de app.')


if __name__ == '__main__':
    main()
