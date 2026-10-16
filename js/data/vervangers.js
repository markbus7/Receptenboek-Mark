/* Geen vers ingrediënt in huis? Wat je in plaats daarvan pakt, uit de voorraadkast of de vriezer.
   De app zet het onder het ingrediënt ("of ½ tl gemberpoeder"), rekent mee met het aantal personen
   en toont het ook op het boodschappenlijstje.

   n:     ingrediëntnamen zoals ze in de recepten staan (kleine letters)
   per:   hoeveel van de vervanger per eenheid van het verse ingrediënt, bijv. { g: 0.04 } = 1 tl per 25 g
   u/wat: eenheid en naam van de vervanger (3 tl of meer wordt vanzelf in el getoond)
   tekst: advies zonder hoeveelheid, voor als er geen goede vervanger is
   tenzij: toon niets als de notitie (x) bij het ingrediënt een van deze woorden al noemt
   alleenAls: toon alleen iets als de notitie hierop past (citroen: alleen als je het sap gebruikt)
   versAls: de notitie zegt dat je iets nodig hebt dat alleen vers kan (de rasp van een citroen)

   In een recept kan een ingrediënt dit zelf regelen:
   vers: true of 'reden'   hier moet het echt vers ("vers nodig: ...")
   of: { q, u, n }          een eigen vervanger voor dit recept, rekent mee met het aantal personen
   of: 'tekst'              een eigen vervanger zonder hoeveelheid */
window.VERVANGERS = [
  /* Gember, knoflook, citroengras */
  { n: ['gember'], per: { g: 0.04 }, u: 'tl', wat: 'gemberpoeder', tenzij: ['poeder'] },
  { n: ['knoflook'], per: { teen: 0.125, bol: 1.5 }, u: 'tl', wat: 'knoflookpoeder', tenzij: ['poeder'] },
  { n: ['citroengras'], per: { stengel: 1 }, u: 'tl', wat: 'gemalen sereh', tenzij: ['gemalen', 'gedroogd'] },
  { n: ['djeroekbladeren'], tekst: 'gedroogde of diepvriesblaadjes werken ook, evenveel' },

  /* Pepers */
  { n: ['rode peper', 'groene peper'], per: { st: 0.5 }, u: 'tl', wat: 'chilivlokken', tenzij: ['chili', 'sambal', 'cayenne', 'paprikapoeder'] },
  { n: ['jalapeño'], per: { st: 2 }, u: 'el', wat: 'jalapeño uit een pot', tenzij: ['pot'] },

  /* Citroen en limoen: een citroen of limoen geeft ongeveer 2 el sap */
  { n: ['citroen'], per: { st: 2 }, u: 'el', wat: 'citroensap uit een fles', alleenAls: /sap/, versAls: /rasp|schil/, versTekst: 'vers nodig voor de rasp of schil', tenzij: ['partjes'] },
  { n: ['limoen'], per: { st: 2 }, u: 'el', wat: 'limoensap uit een fles', alleenAls: /sap/, versAls: /rasp|schil/, versTekst: 'vers nodig voor de rasp of schil', tenzij: ['partjes'] },

  /* Groente */
  { n: ['spinazie'], per: { g: 0.6 }, u: 'g', wat: 'diepvries bladspinazie', tenzij: ['diepvries', 'savooiekool'] },
  { n: ['sjalot'], per: { st: 0.5 }, u: 'st', wat: 'ui', mv: 'uien' },

  /* Verse kruiden: gedroogd is sterker, dus minder. Werkt goed in alles wat meekookt;
     over een gerecht strooien kan ook, maar vers is daar mooier. */
  { n: ['verse peterselie'], per: { el: 1, handje: 2, bos: 3 }, u: 'tl', wat: 'gedroogde peterselie' },
  { n: ['verse basilicum'], per: { el: 1, handje: 2, bos: 3 }, u: 'tl', wat: 'gedroogde basilicum' },
  { n: ['verse dille'], per: { el: 1, handje: 2, bos: 3 }, u: 'tl', wat: 'gedroogde dille', tenzij: ['munt'] },
  { n: ['verse munt'], per: { el: 1, handje: 2, bos: 3, takje: 0.25 }, u: 'tl', wat: 'gedroogde munt' },
  { n: ['verse selderij'], per: { el: 1, handje: 2, bos: 3 }, u: 'tl', wat: 'gedroogde selderij' },
  { n: ['verse dragon'], per: { bos: 3 }, u: 'tl', wat: 'gedroogde dragon' },
  { n: ['bieslook'], per: { el: 1, handje: 2, bos: 3 }, u: 'tl', wat: 'gedroogde bieslook' },
  { n: ['verse tijm'], per: { takje: 0.25 }, u: 'tl', wat: 'gedroogde tijm', tenzij: ['gedroogd'] },
  { n: ['verse koriander'], tekst: 'gedroogd smaakt naar weinig: laat hem weg of neem verse peterselie' },
  { n: ['thaise basilicum'], tekst: 'of gewone verse basilicum', tenzij: ['basilicum'] }
];
