/* Hoofdstukken van het boek: één per keuken, in leesvolgorde (van dichtbij huis naar verder weg).
   De kleur komt terug op het tabblad, de hoofdstukkop, de kaarten en de receptpagina.
   Elk hoofdstuk hoort bij een deel (regio): de delen zijn de grote tabbladen, de keukens de subtabs. */
window.DELEN = [
  { regio: 'Europa',                 kleur: '#2B4C9B' },
  { regio: 'Midden-Oosten & Afrika', kleur: '#0E7C80' },
  { regio: 'Azië',                   kleur: '#2F7A35' },
  { regio: 'Amerika',                kleur: '#B0185A' }
];
window.HOOFDSTUKKEN = [
  { keuken: 'Nederlands',          regio: 'Europa',  kleur: '#2B4C9B' }, // Delfts blauw
  { keuken: 'Belgisch',            regio: 'Europa',  kleur: '#8A5A12' }, // donker bier
  { keuken: 'Duits & Oostenrijks', regio: 'Europa',  kleur: '#4E5D6C' }, // leisteen van de Alpen
  { keuken: 'Frans',               regio: 'Europa',  kleur: '#6B2D4A' }, // bordeaux
  { keuken: 'Italiaans',           regio: 'Europa',  kleur: '#C1311B' }, // tomaat
  { keuken: 'Spaans',              regio: 'Europa',  kleur: '#C2491A' }, // paprika
  { keuken: 'Grieks',              regio: 'Europa',  kleur: '#1F66A8' }, // Egeïsche zee
  { keuken: 'Brits',               regio: 'Europa',  kleur: '#2E4B3C' }, // racing green
  { keuken: 'Hongaars',            regio: 'Europa',  kleur: '#9E1B1F' }, // paprikapoeder
  { keuken: 'Turks',               regio: 'Midden-Oosten & Afrika', kleur: '#0E7C80' }, // turkoois
  { keuken: 'Midden-Oosters',      regio: 'Midden-Oosten & Afrika', kleur: '#8A2E4A' }, // sumak
  { keuken: 'Marokkaans',          regio: 'Midden-Oosten & Afrika', kleur: '#A0521C' }, // ras el hanout
  { keuken: 'Indiaas',             regio: 'Azië',    kleur: '#9C6B00' }, // kurkuma
  { keuken: 'Indonesisch',         regio: 'Azië',    kleur: '#2F7A35' }, // pandan
  { keuken: 'Thais',               regio: 'Azië',    kleur: '#557F10' }, // limoenblad
  { keuken: 'Vietnamees',          regio: 'Azië',    kleur: '#23845C' }, // munt
  { keuken: 'Chinees',             regio: 'Azië',    kleur: '#A8232E' }, // rood lakwerk
  { keuken: 'Koreaans',            regio: 'Azië',    kleur: '#B23A2A' }, // gochujang
  { keuken: 'Japans',              regio: 'Azië',    kleur: '#2E3B5E' }, // indigo
  { keuken: 'Surinaams',           regio: 'Amerika', kleur: '#B5470F' }, // madame jeanette
  { keuken: 'Mexicaans',           regio: 'Amerika', kleur: '#B0185A' }, // chili
  { keuken: 'Zuid-Amerikaans',     regio: 'Amerika', kleur: '#6A3D8F' }, // paarse maïs
  { keuken: 'Amerikaans',          regio: 'Amerika', kleur: '#8C6A14' }  // mosterd
];
