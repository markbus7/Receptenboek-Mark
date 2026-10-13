#!/usr/bin/env python3
"""Zet een nieuw versienummer: python3 tools/nieuwe-versie.py 1.2.1

Werkt js/versie.js bij en geeft alle eigen CSS- en JS-bestanden in index.html
een ?v=<versie>, zodat browsers na een update meteen de nieuwe bestanden laden
in plaats van een oude kopie uit hun cache.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def main():
    if len(sys.argv) != 2 or not re.fullmatch(r'\d+\.\d+\.\d+', sys.argv[1]):
        sys.exit('Gebruik: python3 tools/nieuwe-versie.py 1.2.1')
    versie = sys.argv[1]
    (ROOT / 'js' / 'versie.js').write_text(
        '/* Versie van het receptenboek. Pas aan met: python3 tools/nieuwe-versie.py x.y.z */\n'
        f"window.VERSIE = '{versie}';\n", encoding='utf-8')
    index = ROOT / 'index.html'
    html = index.read_text(encoding='utf-8')
    html = re.sub(r'((?:src|href)="(?:js|css)/[^"?]+)(?:\?v=[^"]*)?"', rf'\1?v={versie}"', html)
    index.write_text(html, encoding='utf-8')
    print(f'Versie {versie} ingesteld. Vergeet de README (Versies) niet.')


if __name__ == '__main__':
    main()
