/* Baklava zonder oven: uit de airfryer of de OptiGrill-bak, met pistache en walnoten,
   alleen pistache (fıstıklı) of alleen walnoten (cevizli). */
RECEPTEN.push(
{
  id: 'baklava', toegevoegd: '2026-10-28', naam: 'Baklava met pistache en walnoten', gerecht: 'Baklava', variant: 'Pistache & walnoot',
  ook: ['baklava', 'baklawa', 'turkse baklava', 'griekse baklava', 'baklava met noten', 'filodeeg met noten'],
  keuken: 'Turks', soort: 'Dessert',
  tijd: 75, wacht: '4 uur laten intrekken', pers: 16, stuks: 'stukjes', niveau: 'Gemiddeld', vega: true,
  intro: 'Laagjes boterig, knapperig filodeeg met een vulling van fijngehakte pistache en walnoten, overgoten met koude citroen-honingsiroop. Je bakt hem in een kleine vorm in de airfryer of in de OptiGrill-bak, dus geen oven nodig. Eén vorm geeft 16 stukjes: baklava is zoet, één of twee is genoeg.',
  methodes: [ { id: 'airfryer', naam: 'Airfryer' }, { id: 'optigrill-bak', naam: 'OptiGrill-bak' } ],
  gerei: [
    { tool: 'kookpan', tekst: 'Steelpan voor de siroop en de boter' },
    { tool: 'staafmixer', tekst: 'Hakmolen van de staafmixer voor de noten', of: 'Geen hakmolen: hak de noten fijn met een groot mes op een plank.' },
    { tool: 'bakvorm', tekst: 'Vierkant bakblik of aluminium bakje van ca. 18 × 18 cm dat in de airfryer-mand past, plus een kwast', m: 'airfryer' },
    { tool: 'optigrill-bak', tekst: 'OptiGrill-bak (Snacking & Baking, 1,6 liter) in plaats van de onderste plaat, plus een kwast', m: 'optigrill-bak' }
  ],
  ingr: [
    { kop: 'Siroop' },
    { n: 'suiker', q: 200, u: 'g' },
    { n: 'water', q: 150, u: 'ml' },
    { n: 'honing', q: 2, u: 'el' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { n: 'kaneelstokje', p: 'kaneelstokjes', q: 1, u: 'st', x: 'heel', opt: true },
    { kop: 'Noten' },
    { n: 'walnoten', q: 100, u: 'g', x: 'gepeld' },
    { n: 'pistachenoten', q: 100, u: 'g', x: 'gepeld en ongezouten' },
    { n: 'suiker', q: 2, u: 'el' },
    { n: 'kaneel', q: 1, u: 'tl', x: 'gemalen (kaneelpoeder)' },
    { kop: 'Deeg' },
    { n: 'filodeeg', q: 10, u: 'vel', x: 'ca. 250 g (1 pak), ontdooid' },
    { n: 'roomboter', q: 150, u: 'g', x: 'ongezouten, gesmolten' },
    { kop: 'Erover' },
    { n: 'pistachenoten', q: 15, u: 'g', x: 'heel fijngehakt', opt: true }
  ],
  stappen: [
    { t: 'Siroop: breng suiker, water en het kaneelstokje in de steelpan aan de kook en roer tot de suiker is opgelost. Laat 8 minuten zachtjes koken, tot het iets stroperig is (als dunne limonadesiroop). Haal van het vuur, roer honing en citroensap erdoor en laat helemaal afkoelen. De siroop moet koud zijn als de baklava uit de airfryer komt.', min: 8 },
    { t: 'Doe de noten in de hakmolen en hak ze met korte stootjes fijn, tot grof zand met hier en daar een stukje. Niet te lang, anders wordt het notenpasta. Meng met 2 el suiker en de kaneel.' },
    { t: 'Smelt de boter in de schoongespoelde steelpan op laag vuur (of in de magnetron). Leg de vellen filodeeg op elkaar en snijd ze met een scherp mes op de maat van je vorm (18 × 18 cm): uit elk vel krijg je 2 of 3 velletjes, samen 20 à 30. Restjes zijn niet erg, die gebruik je in de middelste laag. Leg er een vochtige theedoek over, anders droogt het deeg uit.' },
    { t: 'Bestrijk de vorm vanbinnen met boter. Leg er een velletje in en bestrijk het dun met boter. Herhaal tot ongeveer een derde van de velletjes erin ligt (ca. 8).' },
    { t: 'Strooi de helft van de noten gelijkmatig erover. Leg er 4 velletjes op, elk dun bestreken met boter (hier kun je de restjes kwijt), en strooi de rest van de noten erover.' },
    { t: 'Leg de laatste velletjes erop, elk met boter. Bestrijk de bovenste extra goed en druk de baklava met je handpalm overal licht aan.' },
    { t: 'Snijd de baklava vóór het bakken met een scherp mes in 16 vierkantjes of ruitjes, helemaal tot op de bodem. Schenk de rest van de boter erover, ook in de sneden. Zet de vorm 10 minuten in de koelkast: dan wordt de boter stevig en blijven de bovenste vellen liggen als de ventilator van de airfryer blaast.', min: 10 },
    { t: 'Verwarm de airfryer voor op 160 °C. Zet de vorm in de mand en bak 35 à 40 minuten, tot de baklava diep goudbruin is. Kijk na 20 minuten: kleurt de bovenkant al te snel, leg er dan een stuk aluminiumfolie op en vouw het om de randen van de vorm, zodat het niet wegwaait.', m: 'airfryer', min: 40 },
    { t: 'Zet de bak in de OptiGrill in plaats van de onderste plaat, kies de handmatige modus, stel 160 °C in en sluit de deksel. Bak 30 à 35 minuten, tot de baklava diep goudbruin is. Kijk na 15 minuten: de bovenplaat zit dichtbij, dus kleurt hij al te donker, leg er dan een vel bakpapier op.', m: 'optigrill-bak', min: 35 },
    { t: 'Schenk de koude siroop meteen over de hete baklava, langzaam en vooral in de sneden. Het moet sissen. Haal eerst het kaneelstokje eruit.' },
    { t: 'Strooi de fijngehakte pistache erover en laat de baklava minstens 4 uur onafgedekt staan (op het aanrecht, niet in de koelkast), zodat de siroop helemaal intrekt. Snijd de stukjes daarna nog een keer los.' }
  ],
  tips: [
    'Koude siroop op hete baklava, of hete siroop op koude baklava: nooit allebei warm, anders wordt het deeg slap in plaats van knapperig.',
    'Afgedekt op het aanrecht blijft baklava 5 dagen goed en wordt hij de tweede dag nog lekkerder. Niet in de koelkast: daar wordt hij taai.',
    'Gepelde, ongezouten pistache vind je het makkelijkst en het goedkoopst bij een Turkse supermarkt. Alleen gezouten pistache in de dop? Pel ze, spoel het zout eraf en dep ze goed droog.'
  ],
  alt: [
    'Minder zoet: gebruik 150 g suiker en 100 ml water voor de siroop.',
    'Zoals in Griekenland: vervang de honing door een el extra suiker en voeg een reepje citroenschil en 2 kruidnagels toe aan de siroop.'
  ]
},
{
  id: 'baklava-pistache', toegevoegd: '2026-10-28', variantVan: 'baklava', variant: 'Pistache', naam: 'Baklava met pistache (fıstıklı)',
  ook: ['fıstıklı baklava', 'fistikli baklava', 'pistache baklava', 'baklava met pistache', 'groene baklava'],
  intro: 'De Turkse klassieker uit Gaziantep: alleen pistache, felgroen tussen de knapperige laagjes filodeeg, met koude citroen-honingsiroop. Uit de airfryer of de OptiGrill-bak. Iets duurder dan met walnoten, maar het mooist om te zien.',
  vervang: {
    walnoten: null,
    pistachenoten: { n: 'pistachenoten', q: 200, u: 'g', x: 'gepeld en ongezouten' }
  }
},
{
  id: 'baklava-walnoot', toegevoegd: '2026-10-28', variantVan: 'baklava', variant: 'Walnoot', naam: 'Baklava met walnoten (cevizli)',
  ook: ['cevizli baklava', 'baklava met walnoten', 'walnoten baklava', 'walnoot baklava'],
  intro: 'Baklava met alleen walnoten, zoals in Griekenland en veel Turkse huiskeukens: voller en iets bitterder van smaak dan met pistache, en een stuk goedkoper. Alles uit de supermarkt, uit de airfryer of de OptiGrill-bak.',
  vervang: {
    walnoten: { n: 'walnoten', q: 200, u: 'g', x: 'gepeld' },
    pistachenoten: null
  }
}
);
