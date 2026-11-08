/* Bioscoop popcorn uit de pan, zout en zoet. Zonder oven of popcornmachine: in een RVS-kookpan met deksel
   (Mark heeft er een) of in een antiaanbakpan. Het bioscoopgeheim: kokosolie, heel fijn zout dat al in de
   olie gaat, en een snufje kurkuma voor de gele kleur. */
RECEPTEN.push(
{
  id: 'popcorn-bioscoop', toegevoegd: '2026-11-08', naam: 'Bioscoop popcorn uit de pan (zout)', gerecht: 'Bioscoop popcorn uit de pan', variant: 'Zout',
  ook: ['popcorn', 'zoute popcorn', 'popcorn zout', 'bioscooppopcorn', 'bioscoop popcorn', 'popcorn maken', 'popcorn uit de pan', 'movie popcorn', 'boterpopcorn', 'popcorn met boter'],
  keuken: 'Amerikaans', soort: 'Bijgerecht & snack',
  tijd: 10, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Popcorn zoals in de bioscoop: knapperig, licht geel en zout tot in elk hoekje, met bijna geen ongepofte korrels. Het geheim zit in drie dingen: kokosolie, heel fijn zout dat al in de olie gaat, en de korrels eerst even laten opwarmen van het vuur af, zodat ze allemaal tegelijk poffen. Kies hierboven ook de zoete versie.',
  methodes: [ { id: 'kookpan', naam: 'RVS-pan' }, { id: 'hapjespan', naam: 'Antiaanbakpan' }, { id: 'magnetron', naam: 'Magnetron' } ],
  gerei: [
    { tool: 'kookpan', tekst: 'RVS-kookpan van 24 cm of groter (minstens 4 liter) met deksel, liefst met een dikke bodem', m: 'kookpan', of: 'Een RVS-hapjespan met deksel werkt ook; een glazen deksel is handig, dan zie je wanneer het stopt.' },
    { tool: 'hapjespan', tekst: 'Antiaanbak hapjespan of kookpan van 24 à 28 cm met deksel', m: 'hapjespan' },
    { tool: 'magnetron', tekst: 'Magnetron en 2 bruine papieren boterhamzakjes, zonder plastic venster of nietje', m: 'magnetron' },
    { tool: 'kookpan', tekst: 'Een heel grote kom, ovenwanten of een theedoek om de pan te schudden, en een diepvrieszakje om het zout fijn te rollen' }
  ],
  ingr: [
    { kop: 'Popcorn' },
    { n: 'popcornmais', q: 100, u: 'g', x: 'geeft ongeveer 4 liter popcorn' },
    { n: 'kokosolie', q: 3, u: 'el', x: 'reukloos', of: { q: 3, u: 'el', n: 'zonnebloemolie' } },
    { n: 'kurkuma', q: 1, u: 'snuf', x: 'gemalen, voor de gele bioscoopkleur', opt: true },
    { n: 'zout', q: 1, u: 'tl', x: 'fijn tafelzout' },
    { kop: 'Erover' },
    { n: 'ghee', q: 2, u: 'el', x: 'gesmolten; of roomboter', opt: true }
  ],
  stappen: [
    { kop: 'Popcorn', t: 'Neem fijn tafelzout (keukenzout uit de bus), geen grof zeezout: grove korrels rollen van de popcorn af, fijn zout blijft plakken, zoals in de bioscoop. Nog fijner wordt het in een diepvrieszakje: rol er een paar keer stevig overheen met een deegroller of de bodem van een pan. Een vijzel of de hakmolen van de staafmixer kan ook. Zet de grote kom klaar.', min: 2 },
    { t: 'Doe de kokosolie, de kurkuma en 3 maïskorrels in de RVS-pan en leg het deksel erop. Zet hem op middelhoog vuur (stand 7 van 9 op inductie, of een middelgrote vlam). RVS met een dikke bodem verdeelt de hitte goed; wacht tot alle 3 de korrels zijn geknald, na 2 à 4 minuten. Dan is de olie precies heet genoeg.', m: 'kookpan', min: 3 },
    { t: 'Doe de kokosolie, de kurkuma en 3 maïskorrels in de antiaanbakpan en leg het deksel erop. Zet hem op middelhoog vuur, niet hoger (stand 6 van 9 op inductie): een antiaanbaklaag kan niet tegen de hoogste stand. Wacht tot alle 3 de korrels zijn geknald, na 3 à 5 minuten.', m: 'hapjespan', min: 4 },
    { t: 'Haal de pan van het vuur. Strooi alle popcornmais en de helft van het fijne zout erin, schud tot elke korrel glanst van de olie, en leg het deksel er weer op. Laat de pan 30 seconden van het vuur af staan: zo worden alle korrels even warm en poffen ze straks tegelijk, met bijna geen ongepofte korrels.', m: 'kookpan', min: 1 },
    { t: 'Zet de pan terug op hetzelfde vuur en leg het deksel er een klein beetje schuin op, zodat de stoom weg kan (dan wordt de popcorn knapperig en niet taai). Zodra het knallen begint, schud je de pan om de paar seconden kort heen en weer over de pit, met de ovenwanten op het deksel. Wordt het stil, met 2 à 3 seconden tussen de knallen, schep de popcorn dan meteen in de kom: in de hete pan verbrandt hij verder.', m: 'kookpan', min: 3 },
    { t: 'Haal de pan van het vuur. Strooi alle popcornmais en de helft van het fijne zout erin, schud tot elke korrel glanst van de olie, en leg het deksel er weer op. Laat de pan 30 seconden van het vuur af staan: zo worden alle korrels even warm en poffen ze straks tegelijk, met bijna geen ongepofte korrels.', m: 'hapjespan', min: 1 },
    { t: 'Zet de pan terug op hetzelfde vuur en leg het deksel er een klein beetje schuin op, zodat de stoom weg kan (dan wordt de popcorn knapperig en niet taai). Zodra het knallen begint, schud je de pan om de paar seconden kort heen en weer over de pit, met de ovenwanten op het deksel. Wordt het stil, met 2 à 3 seconden tussen de knallen, schep de popcorn dan meteen in de kom: in de hete pan verbrandt hij verder.', m: 'hapjespan', min: 3 },
    { t: 'Smelt de kokosolie 20 seconden in de magnetron. Meng in een kom de popcornmais met 2 el van de gesmolten olie, de kurkuma en de helft van het fijne zout. Verdeel het over de 2 papieren zakjes, vouw de bovenkant van elk zakje 2 keer stevig om en leg er een plat in de magnetron, met de vouw naar onderen.', m: 'magnetron', min: 2 },
    { t: 'Zet de magnetron op vol vermogen (800 à 1000 watt) en blijf erbij. Na ongeveer 1½ minuut begint het knallen; zet hem uit zodra er 2 à 3 seconden tussen de knallen zitten, na 2½ à 3½ minuut in totaal. Open het zakje voorzichtig van je af (hete stoom) en schud de popcorn in de kom. Doe daarna het tweede zakje.', m: 'magnetron', min: 6 },
    { kop: 'Erover', t: 'Schenk de gesmolten ghee in een dun straaltje over de popcorn terwijl je de kom schudt, strooi de rest van het zout erover en schud nog eens goed. Proef en doe er eventueel nog een snufje zout bij. Eet meteen.' }
  ],
  tips: [
    'Bioscopen poppen in kokosolie met een gekleurd, superfijn zout erin. Reukloze kokosolie (staat zo op de pot) smaakt neutraal; extra vierge kokosolie geeft een lichte kokossmaak, ook lekker.',
    'Kokosolie is hard als boter onder de 24 °C. Schep hem gewoon met een eetlepel uit de pot; in de pan smelt hij meteen.',
    'Te veel ongepofte korrels? Dan was de olie nog niet heet genoeg, of de mais is oud en uitgedroogd. Bewaar popcornmais in een goed afgesloten pot.',
    'Bewaren: helemaal afgekoeld in een afgesloten zak of trommel blijft popcorn 2 à 3 dagen knapperig.',
    'Magnetron: gebruik geen aluminiumfolie (dat vonkt) en geen zakje met een nietje. Popcorn uit de magnetron is iets minder knapperig dan uit de pan, maar je hoeft niets te schudden of af te wassen. De zoete versie lukt alleen in de pan; in de magnetron verbrandt de suiker.',
    'Airfryer raad ik af: losse korrels waaien tegen het verwarmingselement en verbranden. Het kan alleen in een dichtgevouwen pakketje aluminiumfolie (10 minuten op 200 °C), maar dan blijft de helft vaak ongepoft.'
  ],
  alt: ['Geen ghee? Smelt 30 g roomboter en schep het witte schuim eraf, dan wordt de popcorn niet zacht.']
},
{
  id: 'popcorn-bioscoop-zoet', toegevoegd: '2026-11-08', variantVan: 'popcorn-bioscoop', variant: 'Zoet', naam: 'Zoete bioscoop popcorn uit de pan',
  ook: ['zoete popcorn', 'popcorn zoet', 'suikerpopcorn', 'popcorn met suiker', 'kettle corn'],
  intro: 'De zoete popcorn uit de bioscoop: elke korrel met een dun, knapperig suikerlaagje, met een snufje zout zodat hij niet té zoet wordt. De suiker gaat tegelijk met de mais in de pan en smelt eromheen terwijl hij popt. Blijf goed schudden, dan brandt er niets aan.',
  vervang: {
    kurkuma: null,
    zout: [
      { n: 'suiker', q: 60, u: 'g', x: 'kristalsuiker' },
      { n: 'zout', q: 1, u: 'snuf', x: 'fijn' }
    ],
    Erover: null, ghee: null
  },
  methodes: [ { id: 'kookpan', naam: 'RVS-pan' }, { id: 'hapjespan', naam: 'Antiaanbakpan' } ],
  gerei: [
    { tool: 'kookpan', tekst: 'RVS-kookpan van 24 cm of groter (minstens 4 liter) met deksel, liefst met een dikke bodem', m: 'kookpan', of: 'Een RVS-hapjespan met deksel werkt ook; een glazen deksel is handig, dan zie je wanneer het stopt.' },
    { tool: 'hapjespan', tekst: 'Antiaanbak hapjespan of kookpan van 24 à 28 cm met deksel', m: 'hapjespan' },
    { tool: 'kookpan', tekst: 'Een heel grote kom, een vel bakpapier, ovenwanten of een theedoek om de pan te schudden, en een houten lepel' }
  ],
  stappen: [
    { kop: 'Popcorn', t: 'Zet de grote kom klaar en leg er een vel bakpapier naast. Meet de suiker af; straks gaat het snel.' },
    { t: 'Doe de kokosolie en 3 maïskorrels in de RVS-pan en leg het deksel erop. Zet hem op middelhoog vuur (stand 7 van 9 op inductie, of een middelgrote vlam). Wacht tot alle 3 de korrels zijn geknald, na 2 à 4 minuten.', m: 'kookpan', min: 3 },
    { t: 'Doe de kokosolie en 3 maïskorrels in de antiaanbakpan en leg het deksel erop. Zet hem op middelhoog vuur, niet hoger (stand 6 van 9 op inductie). Wacht tot alle 3 de korrels zijn geknald, na 3 à 5 minuten. Suiker plakt minder aan een antiaanbaklaag, dus dit is de makkelijkste pan voor zoete popcorn.', m: 'hapjespan', min: 4 },
    { t: 'Haal de pan van het vuur. Strooi alle popcornmais, de suiker en het zout erin, roer even met een houten lepel tot alles glanst, en leg het deksel er weer op. Laat de pan 30 seconden van het vuur af staan.', min: 1 },
    { t: 'Zet de pan terug op hetzelfde vuur, met het deksel een klein beetje schuin. Schud de pan nu onafgebroken heen en weer over de pit, met de ovenwanten op het deksel: zo blijft de suiker in beweging en brandt hij niet aan. Wordt het stil, met 2 à 3 seconden tussen de knallen, stort de popcorn dan meteen op het bakpapier. Ruik je iets aanbranden, haal de pan dan direct van het vuur.', min: 3 },
    { t: 'Haal met twee vorken de klontjes uit elkaar zolang de popcorn nog warm is. Laat 2 minuten afkoelen, dan wordt het suikerlaagje knapperig. Doe hem in de kom.', min: 2 }
  ],
  tips: [
    'Zet de pan meteen na gebruik in de week met heet water: na een kwartier lost de suiker vanzelf op. Plakt er nog wat in de RVS-pan, kook er dan een laagje water in, dan gaat het er zo af.',
    'Liever een karamelsmaak? Neem lichtbruine basterdsuiker in plaats van kristalsuiker.',
    'Half zoet, half zout? Strooi na het afkoelen nog een snufje fijn zout over de zoete popcorn: dat is kettle corn, zoals op de Amerikaanse kermis.'
  ],
  alt: []
}
);
