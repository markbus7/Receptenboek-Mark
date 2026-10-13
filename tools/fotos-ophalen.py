#!/usr/bin/env python3
"""Haalt per recept een foto op van Wikimedia Commons, met auteur en licentie.

Gebruik:  python3 tools/fotos-ophalen.py            (alleen ontbrekende foto's)
          python3 tools/fotos-ophalen.py --opnieuw  (alles opnieuw)

Schrijft img/<recept-id>.jpg en js/data/fotos.js. Alleen vrije licenties
(CC0, publiek domein, CC BY, CC BY-SA) worden gebruikt; de bronvermelding
verschijnt in de app onder de foto.
"""
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / 'img'
UIT = ROOT / 'js' / 'data' / 'fotos.js'
UA = 'ReceptenboekMark/1.0 (https://github.com/markbus7/Receptenboek-Mark; persoonlijk receptenboek)'
BREEDTE = 800

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


def api(host, **params):
    params.update(format='json', formatversion='2')
    url = f'https://{host}/w/api.php?' + urllib.parse.urlencode(params)
    with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=30) as r:
        return json.load(r)


def bestandsnaam(artikel):
    """Geeft de hoofdafbeelding van een Wikipedia-artikel, of zoekt het beste artikel."""
    if artikel.startswith('File:'):
        return artikel[5:]
    taal, titel = ('nl', artikel[3:]) if artikel.startswith('nl:') else ('en', artikel)
    host = f'{taal}.wikipedia.org'
    data = api(host, action='query', prop='pageimages', piprop='name', titles=titel, redirects=1)
    pagina = data['query']['pages'][0]
    if pagina.get('pageimage'):
        return pagina['pageimage']
    data = api(host, action='query', generator='search', gsrsearch=titel, gsrlimit=1, prop='pageimages', piprop='name')
    paginas = data.get('query', {}).get('pages', [])
    return paginas[0].get('pageimage') if paginas else None


def info(bestand):
    data = api('commons.wikimedia.org', action='query', titles='File:' + bestand, prop='imageinfo',
               iiprop='url|extmetadata|mime', iiurlwidth=BREEDTE)
    ii = data['query']['pages'][0].get('imageinfo')
    if not ii:
        return None
    ii = ii[0]
    meta = ii.get('extmetadata', {})
    waarde = lambda k: unescape(re.sub(r'<[^>]+>', '', meta.get(k, {}).get('value', ''))).strip()
    return {
        'url': ii.get('thumburl') or ii['url'],
        'mime': ii.get('mime', ''),
        'licentie': waarde('LicenseShortName'),
        'auteur': re.sub(r'\s+', ' ', waarde('Artist'))[:80] or 'Onbekend',
        'bron': ii.get('descriptionurl', ''),
    }


def download(url, pad):
    with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=60) as r:
        pad.write_bytes(r.read())


def main():
    opnieuw = '--opnieuw' in sys.argv
    IMG.mkdir(exist_ok=True)
    bestaand = {}
    if UIT.exists() and not opnieuw:
        m = re.search(r'window\.FOTOS = (\{.*\});', UIT.read_text(encoding='utf-8'), re.S)
        if m:
            bestaand = json.loads(m.group(1))

    fotos = dict(bestaand)
    for rid, artikel in ARTIKELEN.items():
        if rid in fotos and (ROOT / fotos[rid]['src']).exists():
            continue
        try:
            bestand = bestandsnaam(artikel)
            if not bestand:
                print(f'-  {rid}: geen afbeelding bij "{artikel}"')
                continue
            meta = info(bestand)
            if not meta or not meta['mime'].startswith('image/') or meta['mime'] == 'image/svg+xml':
                print(f'-  {rid}: geen bruikbare foto ({bestand})')
                continue
            if not VRIJ.match(meta['licentie']):
                print(f'-  {rid}: licentie "{meta["licentie"]}" overgeslagen')
                continue
            ext = '.png' if meta['mime'] == 'image/png' else '.jpg'
            pad = IMG / f'{rid}{ext}'
            download(meta['url'], pad)
            fotos[rid] = {'src': f'img/{rid}{ext}', 'auteur': meta['auteur'], 'licentie': meta['licentie'], 'bron': meta['bron']}
            print(f'ok {rid}: {bestand} ({meta["licentie"]})')
            time.sleep(0.5)
        except Exception as fout:  # één mislukte foto mag de rest niet tegenhouden
            print(f'!  {rid}: {fout}')

    UIT.write_text(
        "/* Foto's per recept. Wordt gevuld door tools/fotos-ophalen.py; zonder foto toont een recept het tegeltje. */\n"
        'window.FOTOS = ' + json.dumps(dict(sorted(fotos.items())), ensure_ascii=False, indent=1) + ';\n',
        encoding='utf-8')
    print(f'\n{len(fotos)} van {len(ARTIKELEN)} recepten hebben een foto. Controleer ze even in de app.')


if __name__ == '__main__':
    main()
