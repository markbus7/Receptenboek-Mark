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
UA = 'ReceptenboekMark/1.0 (https://github.com/markbus7/Receptenboek-Mark; persoonlijk receptenboek)'
THUMB = 960      # een van de standaardformaten van Wikimedia (https://w.wiki/GHai)
BREEDTE = 800    # opgeslagen breedte
PAUZE = 1.5      # seconden tussen downloads

# Recept-id -> Wikipedia-artikel ("nl:" voor de Nederlandse Wikipedia) of "File:..." op Commons.
ARTIKELEN = {
    'spaghetti-carbonara': 'Carbonara', 'lasagne-bolognese': 'Lasagna', 'risotto-paddenstoelen': 'Risotto',
    'pizza-margherita': 'Pizza Margherita', 'penne-arrabbiata': 'Arrabbiata sauce', 'pasta-pesto-kip': 'Pesto',
    'tiramisu': 'Tiramisu', 'hutspot-rookworst': 'Hutspot', 'erwtensoep': 'Snert',
    'boerenkool-stamppot': 'nl:Boerenkoolstamppot', 'pannenkoeken': 'nl:Pannenkoek', 'draadjesvlees': 'nl:Draadjesvlees',
    'appeltaart': 'nl:Appeltaart', 'gehaktballen-jus': 'nl:Gehaktbal', 'nasi-goreng': 'Nasi goreng',
    'sate-ajam': 'Satay', 'pad-thai': 'Pad thai', 'groene-curry': 'Green curry', 'tom-kha-kai': 'Tom kha kai',
    'kung-pao-kip': 'Kung Pao chicken', 'teriyaki-zalm': 'Teriyaki', 'butter-chicken': 'Butter chicken',
    'chana-masala': 'Chana masala', 'dal': 'Dal', 'chili-con-carne': 'Chili con carne', 'kip-fajitas': 'Fajita',
    'quesadillas': 'Quesadilla', 'chicken-katsu': 'Katsu curry', 'bibimbap': 'Bibimbap', 'shakshuka': 'Shakshouka',
    'falafel': 'Falafel', 'kip-shoarma': 'Shawarma', 'souvlaki-tzatziki': 'Souvlaki', 'moussaka': 'Moussaka',
    'kip-tajine': 'Tajine', 'griekse-salade': 'Greek salad', 'quiche-lorraine': 'Quiche', 'ratatouille': 'Ratatouille',
    'franse-uiensoep': 'French onion soup', 'paella': 'Paella', 'patatas-bravas': 'Patatas bravas',
    'smash-burgers': 'Hamburger', 'mac-and-cheese': 'Macaroni and cheese', 'american-pancakes': 'Pancake',
    'chocolade-lavacake': 'Molten chocolate cake', 'curry-madras': 'Madras curry',
    'chicken-tikka-masala': 'Chicken tikka masala', 'kip-korma': 'Korma', 'kip-biryani': 'Biryani',
    'saag-paneer': 'Saag', 'tandoori-kip': 'Tandoori chicken', 'naan': 'Naan', 'aloo-gobi': 'Aloo gobi',
    'rendang': 'Rendang', 'babi-ketjap': 'nl:Babi ketjap', 'gado-gado': 'Gado-gado', 'bami-goreng': 'Mie goreng',
    'sajoer-lodeh': 'Sayur lodeh', 'ajam-pedis': 'nl:Ajam pedis', 'perkedel-djagung': 'Perkedel jagung',
    'no-knead-brood': 'No-knead bread', 'vlaamse-stoverij': 'Carbonade flamande', 'boeuf-bourguignon': 'Beef bourguignon',
    'hongaarse-goulash': 'Goulash', 'coq-au-vin': 'Coq au vin', 'pulled-pork': 'Pulled pork',
    'kip-dutch-oven': 'Roast chicken', 'ossobuco': 'Ossobuco', 'roti-kip': 'nl:Roti (gerecht)',
    'bakabana': 'nl:Bakabana', 'linzensoep-mercimek': 'Lentil soup', 'kofte': 'Kofta', 'pho-bo': 'Pho',
    'bun-cha-gio': 'Bún thịt nướng', 'harira': 'Harira', 'shepherds-pie': 'Shepherd\'s pie',
}

VRIJ = re.compile(r'^(cc0|public domain|pd|cc by(-sa)? [\d.]+)', re.I)


def haal(url, pogingen=6):
    """GET met nette User-Agent; wacht en probeert opnieuw bij 429/503 of een haperende verbinding."""
    for poging in range(pogingen):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=60) as r:
                return r.read()
        except urllib.error.HTTPError as fout:
            if fout.code not in (429, 500, 502, 503, 504) or poging == pogingen - 1:
                raise
            wacht = int(fout.headers.get('Retry-After') or 0) or 10 * 2 ** poging
        except urllib.error.URLError:
            if poging == pogingen - 1:
                raise
            wacht = 5 * (poging + 1)
        print(f'   … even wachten ({wacht}s)')
        time.sleep(min(wacht, 120))


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
        data = api('commons.wikimedia.org', action='query', prop='imageinfo', iiprop='url|extmetadata|mime',
                   iiurlwidth=THUMB, titles='|'.join('File:' + b for b in groep))['query']
        for pagina in data.get('pages', []):
            ii = (pagina.get('imageinfo') or [None])[0]
            if not ii:
                continue
            meta = ii.get('extmetadata', {})
            waarde = lambda k: unescape(re.sub(r'<[^>]+>', '', meta.get(k, {}).get('value', ''))).strip()
            naam = pagina['title'].split(':', 1)[1]
            resultaat[naam.replace(' ', '_')] = {
                'url': ii.get('thumburl') or ii['url'],
                'mime': ii.get('mime', ''),
                'licentie': waarde('LicenseShortName'),
                'auteur': re.sub(r'\s+', ' ', waarde('Artist'))[:80] or 'Onbekend',
                'bron': ii.get('descriptionurl', ''),
            }
        time.sleep(1)
    return resultaat


def bewaar_foto(data, pad):
    """Schaal naar BREEDTE en sla op als compacte JPEG (valt terug op het origineel zonder Pillow)."""
    try:
        from PIL import Image
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
    print(f'{len(nodig)} recepten zonder foto. Bestanden zoeken…')
    bestanden = zoek_bestanden(nodig)
    for rid in nodig:
        if rid not in bestanden:
            print(f'-  {rid}: geen afbeelding bij "{ARTIKELEN[rid]}"')
    info = info_per_bestand(bestanden.values())

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
            bewaar_foto(haal(meta['url']), pad)
            fotos[rid] = {'src': f'img/{rid}.jpg', 'auteur': meta['auteur'], 'licentie': meta['licentie'], 'bron': meta['bron']}
            schrijf(fotos)
            print(f'ok {rid}: {bestand} ({meta["licentie"]})')
        except Exception as fout:  # één mislukte foto mag de rest niet tegenhouden
            print(f'!  {rid}: {fout}')
        time.sleep(PAUZE)

    schrijf(fotos)
    print(f'\n{len(fotos)} van {len(ARTIKELEN)} recepten hebben een foto. Controleer ze even in de app.')


if __name__ == '__main__':
    main()
