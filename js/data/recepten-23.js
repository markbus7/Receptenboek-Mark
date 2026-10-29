/* Krokante kip zonder oven: kiptenders met vier marinades, zelfgemaakte kipnuggets, popcorn chicken,
   kippenvleugels met vier sauzen en Japanse karaage. Alles uit de airfryer, de koekenpan of de OptiGrill.
   De varianten ruilen alleen de marinade (of saus) om; de bereiding blijft hetzelfde. */
RECEPTEN.push(
{
  id: 'kiptenders', toegevoegd: '2026-10-29', naam: 'Kiptenders in karnemelk', gerecht: 'Kiptenders', variant: 'Karnemelk',
  ook: ['kiptenders', 'chicken tenders', 'tenders', 'kipstrips', 'chicken strips', 'chicken fingers', 'kipfingers', 'krokante kipreepjes', 'buttermilk tenders'],
  keuken: 'Amerikaans', soort: 'Hoofdgerecht',
  tijd: 35, wacht: '1 à 4 uur marineren', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Repen kipfilet die eerst in gekruide karnemelk liggen en daarna door een knapperig jasje van bloem en panko gaan. Sappig vanbinnen, krokant vanbuiten, en ze komen gewoon uit de airfryer. Kies hierboven een andere marinade: cajun, knoflook en Parmezaan of yoghurt-tandoori.',
  methodes: [ { id: 'airfryer', naam: 'Airfryer' }, { id: 'koekenpan', naam: 'Koekenpan' } ],
  gerei: [
    { tool: 'airfryer', tekst: 'Airfryer en een oliespuit of -verstuiver', m: 'airfryer' },
    { tool: 'koekenpan', tekst: 'Koekenpan (28 cm) met een hoge rand, voor een laag olie van 1 cm', m: 'koekenpan', of: 'Een hapjespan of de Dutch oven werkt ook.' },
    { tool: 'bakplaat', tekst: 'Twee brede schalen of borden voor de marinade en het jasje, en een rooster of bord met keukenpapier' }
  ],
  ingr: [
    { n: 'kipfilet', q: 600, u: 'g', x: 'in repen van 2 cm breed, of kipfilethaasjes' },
    { kop: 'Marinade' },
    { n: 'karnemelk', q: 500, u: 'ml' },
    { n: 'zout', q: 1.5, u: 'tl' },
    { n: 'paprikapoeder', q: 1, u: 'tl' },
    { n: 'knoflookpoeder', q: 1, u: 'tl' },
    { kop: 'Jasje' },
    { n: 'bloem', q: 100, u: 'g' },
    { n: 'panko', q: 100, u: 'g' },
    { n: 'paprikapoeder', q: 2, u: 'tl' },
    { n: 'knoflookpoeder', q: 1, u: 'tl' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'zwarte peper', q: 0.5, u: 'tl', x: 'gemalen' },
    { kop: 'Bakken' },
    { n: 'zonnebloemolie', q: 300, u: 'ml', x: 'voor de koekenpan; voor de airfryer 2 el in een verstuiver' }
  ],
  stappen: [
    { t: 'Snijd de kipfilet in de lengte in repen van ongeveer 2 cm breed. Kipfilethaasjes (het kleine reepje onder de filet) zijn al de goede vorm; trek of snijd dan alleen het witte peesje eruit.' },
    { kop: 'Marinade', t: 'Meng alle ingrediënten voor de marinade in een kom of diepvrieszak. Doe de kip erbij, zorg dat alles onder staat en laat minstens 1 uur, liefst 4 uur, in de koelkast marineren. Een nacht mag ook, langer niet: dan wordt de kip zacht en draderig.', min: 60 },
    { kop: 'Jasje', t: 'Meng in een brede schaal de bloem, panko en de kruiden voor het jasje. Sprenkel er 2 el van de marinade over en wrijf het met je vingers door: die kleine klontjes worden extra knapperig.' },
    { t: 'Haal de repen een voor een uit de marinade, laat ze even uitlekken en druk ze rondom stevig in het jasje. Leg ze naast elkaar op een rooster of bord en laat 10 minuten rusten, dan blijft het jasje beter zitten.', min: 10 },
    { kop: 'Bakken', t: 'Verwarm de airfryer voor op 200 °C. Spuit de tenders rondom in met olie tot er geen droge, witte plekken meer te zien zijn. Leg ze in één laag in de mand, met wat ruimte ertussen; bak zo nodig in 2 rondes.', m: 'airfryer' },
    { t: 'Bak 10 à 12 minuten. Keer ze na 6 minuten en spuit droge plekken nog eens in. Ze zijn klaar als ze goudbruin zijn en vanbinnen wit (kerntemperatuur 75 °C).', m: 'airfryer', min: 11 },
    { kop: 'Bakken', t: 'Verhit een laag olie van 1 cm in de koekenpan op middelhoog vuur tot 170 °C. Geen thermometer? Steek de steel van een houten lepel in de olie: komen er meteen belletjes langs, dan is hij heet genoeg.', m: 'koekenpan', min: 5 },
    { t: 'Bak de tenders in 2 rondes 3 à 4 minuten per kant, tot ze goudbruin en gaar zijn (kerntemperatuur 75 °C). Wordt de korst te snel donker, zet het vuur dan iets lager. Laat uitlekken op keukenpapier.', m: 'koekenpan', min: 8 },
    { t: 'Strooi er meteen een snufje zout over en eet ze warm, met een dipsaus erbij.' }
  ],
  tips: [
    'Honing-mosterddip: roer 4 el mayonaise, 1 el mosterd en 1 el honing door elkaar. Ook lekker: knoflooksaus of barbecuesaus.',
    'Gepaneerde tenders kun je rauw invriezen: leg ze los van elkaar op een bord in de vriezer en doe ze na een uur in een zak. Bak ze bevroren in de airfryer, 14 à 16 minuten op 200 °C, en keer halverwege.',
    'Restjes worden in de airfryer weer krokant: 4 minuten op 180 °C. In de magnetron worden ze slap.'
  ],
  alt: [
    'Geen karnemelk? Neem 450 ml melk met 2 el citroensap of azijn, en laat 5 minuten staan.',
    'Met kippendijfilet worden ze nog sappiger: snijd elke dijfilet in 3 repen en bak 1 à 2 minuten langer.'
  ],
  bij: ['knoflooksaus', 'barbecuesaus']
},
{
  id: 'kiptenders-cajun', toegevoegd: '2026-10-29', variantVan: 'kiptenders', variant: 'Cajun (pittig)', naam: 'Pittige cajun kiptenders',
  ook: ['cajun tenders', 'cajun kip', 'pittige kiptenders', 'spicy chicken tenders', 'hot tenders', 'spicy kipstrips'],
  pit: 2,
  intro: 'Dezelfde krokante tenders, maar de karnemelk krijgt cajunkruiden en een scheut hete saus mee. Pittig, een beetje rokerig, en lekker met een koele dip van zure room of mayonaise.',
  vervang: {
    Marinade: [
      { kop: 'Marinade' },
      { n: 'karnemelk', q: 500, u: 'ml' },
      { n: 'cajunkruiden', q: 1, u: 'el' },
      { n: 'hete saus', q: 2, u: 'el', x: 'zoals Frank\'s RedHot; of 1 tl sambal oelek' },
      { n: 'zout', q: 1, u: 'tl' }
    ],
    karnemelk: null, zout: null, paprikapoeder: null, knoflookpoeder: null,
    'zwarte peper': { n: 'cayennepeper', q: 0.5, u: 'tl', x: 'minder als je niet van pittig houdt' }
  }
},
{
  id: 'kiptenders-knoflook', toegevoegd: '2026-10-29', variantVan: 'kiptenders', variant: 'Knoflook & Parmezaan', naam: 'Kiptenders met knoflook en Parmezaan',
  ook: ['knoflook tenders', 'parmezaan tenders', 'garlic parmesan tenders', 'kiptenders met kaas', 'knoflookkip'],
  intro: 'De karnemelk krijgt verse knoflook en oregano mee, en door het jasje gaat geraspte Parmezaanse kaas. Die smelt in de airfryer tot een hartig, extra knapperig korstje.',
  vervang: {
    Marinade: [
      { kop: 'Marinade' },
      { n: 'karnemelk', q: 500, u: 'ml' },
      { n: 'knoflook', q: 3, u: 'teen', x: 'geperst of geraspt' },
      { n: 'gedroogde oregano', q: 1, u: 'tl' },
      { n: 'zout', q: 1.5, u: 'tl' }
    ],
    karnemelk: null, zout: null, paprikapoeder: null, knoflookpoeder: null,
    panko: [
      { n: 'panko', q: 80, u: 'g' },
      { n: 'Parmezaanse kaas', q: 40, u: 'g', x: 'heel fijn geraspt' }
    ]
  },
  tips: [
    'Parmezaan kleurt snel. Worden ze in de airfryer al donker voordat de 10 minuten om zijn, zet hem dan op 190 °C.',
    'Lekker met een dip van 4 el mayonaise, 1 geperst teentje knoflook en een kneepje citroen.',
    'Gepaneerde tenders kun je rauw invriezen: leg ze los van elkaar op een bord in de vriezer en doe ze na een uur in een zak. Bak ze bevroren in de airfryer, 14 à 16 minuten op 190 °C, en keer halverwege.'
  ]
},
{
  id: 'kiptenders-tandoori', toegevoegd: '2026-10-29', variantVan: 'kiptenders', variant: 'Yoghurt-tandoori', naam: 'Kiptenders in yoghurt-tandoorimarinade',
  ook: ['tandoori tenders', 'tandoori kipstrips', 'yoghurt kip', 'indiase kiptenders'],
  pit: 1,
  intro: 'In plaats van karnemelk ligt de kip in Griekse yoghurt met tandoori masala, knoflook en citroen, zoals bij tandoori kip. De yoghurt maakt de kip heel mals; het panko-jasje maakt hem krokant. Lekker met een frisse yoghurt-muntdip.',
  vervang: {
    Marinade: [
      { kop: 'Marinade' },
      { n: 'Griekse yoghurt', q: 250, u: 'g', x: 'vol (10% vet)' },
      { n: 'tandoori masala', q: 1, u: 'el' },
      { n: 'knoflook', q: 2, u: 'teen', x: 'geraspt' },
      { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
      { n: 'zout', q: 1, u: 'tl' }
    ],
    karnemelk: null, zout: null, paprikapoeder: null, knoflookpoeder: null
  },
  tips: [
    'Yoghurt-muntdip: roer 150 g Griekse yoghurt met 1 tl gedroogde munt (of een paar blaadjes verse), een snuf zout en een kneepje citroen.',
    'De yoghurt is dikker dan karnemelk: schraap het meeste eraf voordat je de repen door het jasje haalt, anders wordt het jasje papperig.'
  ]
},

{
  id: 'kipnuggets', toegevoegd: '2026-10-29', naam: 'Zelfgemaakte kipnuggets', gerecht: 'Kipnuggets', variant: 'Panko',
  ook: ['kipnuggets', 'nuggets', 'chicken nuggets', 'kipnugget', 'nuggets van kip'],
  keuken: 'Amerikaans', soort: 'Hoofdgerecht',
  tijd: 40, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Nuggets zoals van de snackbar, maar dan van echte kipfilet die je zelf fijnhakt en kruidt. Je vormt ze, haalt ze door bloem, ei en panko en bakt ze knapperig in de airfryer of de pan. Maak er meteen een dubbele portie van: ze zijn perfect om in te vriezen.',
  methodes: [ { id: 'airfryer', naam: 'Airfryer' }, { id: 'koekenpan', naam: 'Koekenpan' } ],
  gerei: [
    { tool: 'staafmixer', tekst: 'Hakmolen van de staafmixer of een keukenmachine', of: 'Geen hakmolen: koop 500 g kipgehakt, of snijd de kip met een groot mes heel fijn.' },
    { tool: 'airfryer', tekst: 'Airfryer en een oliespuit of -verstuiver', m: 'airfryer' },
    { tool: 'koekenpan', tekst: 'Koekenpan (28 cm), voor een laag olie van 1 cm', m: 'koekenpan' },
    { tool: 'bakplaat', tekst: 'Drie diepe borden om te paneren, en een bord of plank met bakpapier' }
  ],
  ingr: [
    { kop: 'Nuggets' },
    { n: 'kipfilet', q: 500, u: 'g', x: 'in grove stukken' },
    { n: 'paneermeel', q: 2, u: 'el' },
    { n: 'knoflookpoeder', q: 0.5, u: 'tl' },
    { n: 'uienpoeder', q: 0.5, u: 'tl' },
    { n: 'paprikapoeder', q: 0.5, u: 'tl' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'zwarte peper', q: 0.25, u: 'tl', x: 'gemalen' },
    { kop: 'Paneren' },
    { n: 'bloem', q: 50, u: 'g' },
    { n: 'ei', p: 'eieren', q: 2, u: 'st' },
    { n: 'panko', q: 120, u: 'g' },
    { kop: 'Bakken' },
    { n: 'zonnebloemolie', q: 300, u: 'ml', x: 'voor de koekenpan; voor de airfryer 2 el in een verstuiver' }
  ],
  stappen: [
    { kop: 'Nuggets', t: 'Doe de kip met paneermeel, knoflookpoeder, uienpoeder, paprikapoeder, zout en peper in de hakmolen. Hak met korte stootjes tot een grove, plakkerige massa. Niet tot een gladde pasta: kleine stukjes geven de bite van een echte nugget.' },
    { t: 'Maak je handen nat en vorm er ongeveer 24 platte nuggets van, zo groot als een walnoot en 1,5 cm dik. Leg ze op het bakpapier. Plakt het te veel, zet de massa dan eerst 15 minuten in de koelkast.' },
    { kop: 'Paneren', t: 'Zet drie borden klaar: een met bloem en een snufje zout, een met de losgeklopte eieren en een met de panko. Haal elke nugget eerst door de bloem, dan door het ei en druk hem rondom in de panko. Leg ze terug op het bakpapier.' },
    { kop: 'Bakken', t: 'Verwarm de airfryer voor op 200 °C. Spuit de nuggets aan beide kanten in met olie en leg ze in één laag in de mand. Bak 10 à 12 minuten en keer ze na 6 minuten, tot ze goudbruin en gaar zijn (snijd er een door: vanbinnen wit). Bak in 2 rondes als ze niet in één laag passen.', m: 'airfryer', min: 11 },
    { kop: 'Bakken', t: 'Verhit een laag olie van 1 cm in de koekenpan op middelhoog vuur tot 170 °C (een broodkruimel moet meteen gaan sissen). Bak de nuggets in 2 of 3 rondes 2 à 3 minuten per kant, tot ze goudbruin en gaar zijn. Laat uitlekken op keukenpapier.', m: 'koekenpan', min: 6 },
    { t: 'Eet ze warm, met ketchup, mayonaise, barbecuesaus of de honing-mosterddip uit de tips.' }
  ],
  tips: [
    'Invriezen: leg de gepaneerde, rauwe nuggets los van elkaar op het bakpapier in de vriezer. Na een uur zijn ze hard en doe je ze in een zak; ze blijven 3 maanden goed. Bak ze bevroren in de airfryer, 13 à 15 minuten op 200 °C, en keer halverwege.',
    'Honing-mosterddip: roer 4 el mayonaise, 1 el mosterd en 1 el honing door elkaar.',
    'Wil je ze echt glad, zoals uit de fabriek? Hak de kip dan langer, tot een pasta, en vorm de nuggets met een natte lepel.'
  ],
  alt: [
    'Met kippendijfilet worden ze sappiger en smaakvoller. Hak ze even fijn als de kipfilet.',
    'Met kaas: meng 50 g geraspte belegen kaas door de kipmassa.'
  ],
  bij: ['barbecuesaus', 'mayonaise']
},
{
  id: 'kipnuggets-cornflakes', toegevoegd: '2026-10-29', variantVan: 'kipnuggets', variant: 'Cornflakes', naam: 'Kipnuggets met cornflakeskorst',
  ook: ['cornflakes kip', 'cornflakes nuggets', 'kip in cornflakes', 'crunchy nuggets'],
  intro: 'Dezelfde zelfgemaakte nuggets, maar met een jasje van fijngestampte cornflakes in plaats van panko. Dat wordt nog knapperiger en een tikje zoet, en het kleurt prachtig goudbruin in de airfryer.',
  vervang: {
    panko: { n: 'cornflakes', q: 100, u: 'g', x: 'ongezoet, in een zak fijngestampt tot grove kruimels' }
  },
  tips: [
    'Stamp de cornflakes in een dichte diepvrieszak met een deegroller of een pan tot kruimels zo groot als rijstkorrels. Te fijn wordt stoffig, te grof valt eraf.',
    'Cornflakes kleuren sneller dan panko. Kijk in de airfryer na 8 minuten; zijn ze al donker, zet hem dan op 190 °C.',
    'Invriezen: leg de gepaneerde, rauwe nuggets los van elkaar op het bakpapier in de vriezer. Na een uur doe je ze in een zak; ze blijven 3 maanden goed. Bak ze bevroren in de airfryer, 13 à 15 minuten op 190 °C, en keer halverwege.'
  ]
},

{
  id: 'popcorn-chicken', toegevoegd: '2026-10-29', naam: 'Popcorn chicken', gerecht: 'Popcorn chicken', variant: 'Karnemelk',
  ook: ['popcorn kip', 'kipbites', 'chicken bites', 'krokante kipblokjes', 'kip popcorn'],
  keuken: 'Amerikaans', soort: 'Hoofdgerecht',
  tijd: 35, wacht: '30 min marineren', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Kleine, knapperige hapjes kippendij, om zo uit de bak te eten. Eerst kort in gekruide karnemelk, dan door een licht jasje van bloem en maïzena. Of kies de Taiwanese versie: met sojasaus, knoflook en vijfkruidenpoeder, en een zout-pepermix erover.',
  methodes: [ { id: 'airfryer', naam: 'Airfryer' }, { id: 'koekenpan', naam: 'Koekenpan' } ],
  gerei: [
    { tool: 'airfryer', tekst: 'Airfryer en een oliespuit of -verstuiver', m: 'airfryer' },
    { tool: 'koekenpan', tekst: 'Koekenpan (28 cm) met een hoge rand, voor een laag olie van 1,5 cm, en een schuimspaan', m: 'koekenpan', of: 'Een hapjespan of de Dutch oven werkt ook.' },
    { tool: 'bakplaat', tekst: 'Een kom, een grote diepvrieszak voor het jasje en een rooster of bord met keukenpapier' }
  ],
  ingr: [
    { n: 'kippendijfilet', q: 600, u: 'g', x: 'in blokjes van 2 cm' },
    { kop: 'Marinade' },
    { n: 'karnemelk', q: 250, u: 'ml' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'knoflookpoeder', q: 0.5, u: 'tl' },
    { kop: 'Jasje' },
    { n: 'bloem', q: 80, u: 'g' },
    { n: 'maïzena', q: 40, u: 'g' },
    { n: 'paprikapoeder', q: 1, u: 'tl' },
    { n: 'zwarte peper', q: 0.5, u: 'tl', x: 'gemalen' },
    { n: 'bakpoeder', q: 0.5, u: 'tl' },
    { kop: 'Erover' },
    { n: 'zeezout', x: 'een snufje' },
    { kop: 'Bakken' },
    { n: 'zonnebloemolie', q: 400, u: 'ml', x: 'voor de koekenpan; voor de airfryer 2 el in een verstuiver' }
  ],
  stappen: [
    { kop: 'Marinade', t: 'Meng de kip in een kom met alle ingrediënten voor de marinade en laat minstens 30 minuten (of tot een nacht) in de koelkast staan.', min: 30 },
    { kop: 'Jasje', t: 'Doe alle ingrediënten voor het jasje in een grote diepvrieszak en schud ze door elkaar. Laat de kip uitlekken in een vergiet, doe hem in de zak, knoop hem dicht en schud tot elk blokje bedekt is. Laat 5 minuten liggen tot het jasje vochtig wordt, en schud de blokjes dan los van het teveel aan meel.', min: 5 },
    { kop: 'Bakken', t: 'Verwarm de airfryer voor op 200 °C. Spuit de blokjes rondom in met olie tot er geen droge, witte plekken meer zijn en leg ze in één laag in de mand. Bak 12 à 14 minuten en schud de mand na 6 en na 10 minuten; spuit droge plekken nog eens in. Ze zijn klaar als ze goudbruin en knapperig zijn.', m: 'airfryer', min: 13 },
    { kop: 'Bakken', t: 'Verhit een laag olie van 1,5 cm in de koekenpan tot 170 °C (een houten lepelsteel in de olie geeft meteen een krans van belletjes). Bak de blokjes in 3 rondes 4 à 5 minuten, en draai ze steeds om met de schuimspaan, tot ze goudbruin en gaar zijn. Laat uitlekken op keukenpapier.', m: 'koekenpan', min: 14 },
    { kop: 'Erover', t: 'Doe de kip in een kom, strooi er meteen alles over wat bij Erover staat en schud om. Eet warm.' }
  ],
  tips: [
    'Kippendij blijft sappiger dan kipfilet en droogt niet uit, ook niet in de airfryer. Kipfilet kan wel, maar bak dan 2 minuten korter.',
    'Lekker met sriracha-mayo (1 el sriracha door 3 el mayonaise), barbecuesaus of de honing-mosterddip van de kiptenders.'
  ],
  alt: ['Geen karnemelk? Neem 250 ml melk met 1 el citroensap, en laat 5 minuten staan.'],
  bij: ['barbecuesaus']
},
{
  id: 'popcorn-chicken-taiwanees', toegevoegd: '2026-10-29', variantVan: 'popcorn-chicken', variant: 'Taiwanees (vijfkruiden)', naam: 'Taiwanese popcorn chicken (yan su ji)',
  ook: ['yan su ji', 'taiwanese popcorn chicken', 'taiwanese kip', 'salt and pepper chicken', 'zout en peper kip', 'vijfkruiden kip'],
  pit: 1,
  intro: 'De beroemde snack van de Taiwanese nachtmarkt: kippendij in sojasaus, knoflook en vijfkruidenpoeder, met een luchtig, extra knapperig jasje van alleen maïzena. Na het bakken gaat er een mix van zout, witte peper en vijfkruidenpoeder overheen. Een beetje peperig, heel verslavend.',
  vervang: {
    Marinade: [
      { kop: 'Marinade' },
      { n: 'sojasaus', q: 2, u: 'el' },
      { n: 'shaoxing rijstwijn', q: 1, u: 'el', x: 'of mirin' },
      { n: 'knoflook', q: 3, u: 'teen', x: 'geraspt' },
      { n: 'gember', q: 5, u: 'g', x: 'vers, geraspt' },
      { n: 'suiker', q: 1, u: 'tl' },
      { n: 'vijfkruidenpoeder', q: 0.5, u: 'tl' }
    ],
    karnemelk: null, zout: null, knoflookpoeder: null,
    bloem: null, paprikapoeder: null, 'zwarte peper': null, bakpoeder: null,
    'maïzena': { n: 'maïzena', q: 120, u: 'g', x: 'of tapiocameel, dat wordt nog luchtiger' },
    zeezout: [
      { n: 'zout', q: 0.5, u: 'tl' },
      { n: 'witte peper', q: 0.5, u: 'tl', x: 'gemalen' },
      { n: 'vijfkruidenpoeder', q: 0.25, u: 'tl' },
      { n: 'chilipoeder', q: 0.25, u: 'tl', opt: true }
    ]
  },
  tips: [
    'Op de nachtmarkt frituren ze er op het laatst een handvol blaadjes basilicum bij, 10 seconden tot ze knisperen. Thuis in de pan: leg 10 blaadjes verse basilicum heel droog in de hete olie (pas op, het spat) en schep ze over de kip.',
    'Shaoxing rijstwijn en vijfkruidenpoeder vind je bij de toko of de Aziatische producten. Geen rijstwijn? Een el mirin of droge sherry doet hetzelfde.'
  ],
  alt: ['Geen witte peper? Zwarte peper kan ook; witte peper smaakt scherper en wat aardser, zoals het hoort.']
},

{
  id: 'kippenvleugels-buffalo', toegevoegd: '2026-10-29', naam: 'Krokante buffalo wings', gerecht: 'Krokante kippenvleugels', variant: 'Buffalo (pittig)',
  ook: ['kippenvleugels', 'kipvleugels', 'chicken wings', 'wings', 'buffalo wings', 'hot wings', 'kippenvleugeltjes', 'vleugeltjes'],
  keuken: 'Amerikaans', soort: 'Hoofdgerecht',
  tijd: 45, wacht: 'liefst 1 uur drogen in de koelkast', pers: 4, niveau: 'Makkelijk', vega: false, pit: 2,
  intro: 'Kippenvleugels met een vel zo knapperig als chips, zonder frituren: het geheim is een snufje bakpoeder in de kruidenmix. Daarna gaan ze door een saus. Hier de klassieke buffalo-saus van hete saus en boter; kies hierboven ook honing-knoflook, teriyaki of barbecue.',
  methodes: [ { id: 'airfryer', naam: 'Airfryer' }, { id: 'contactgrill', naam: 'OptiGrill' } ],
  gerei: [
    { tool: 'airfryer', tekst: 'Airfryer', m: 'airfryer' },
    { tool: 'contactgrill', tekst: 'Tefal OptiGrill met de gewone grillplaten', m: 'contactgrill' },
    { tool: 'kookpan', tekst: 'Steelpan voor de saus, en een grote kom om de vleugels in om te scheppen' }
  ],
  ingr: [
    { n: 'kippenvleugels', q: 1.2, u: 'kg', x: 'door het gewricht gesneden, puntjes eraf' },
    { kop: 'Kruidenmix' },
    { n: 'bakpoeder', q: 1, u: 'el', x: 'bakpoeder, geen zuiveringszout' },
    { n: 'zout', q: 1.5, u: 'tl' },
    { n: 'knoflookpoeder', q: 1, u: 'tl' },
    { n: 'paprikapoeder', q: 1, u: 'tl' },
    { n: 'zwarte peper', q: 0.5, u: 'tl', x: 'gemalen' },
    { kop: 'Saus' },
    { n: 'hete saus', q: 100, u: 'ml', x: 'zoals Frank\'s RedHot' },
    { n: 'roomboter', q: 50, u: 'g' },
    { n: 'honing', q: 1, u: 'el', opt: true }
  ],
  stappen: [
    { t: 'Snijd de vleugels door het gewricht in een drumette (het pootje) en een vleugeltje; de dunne puntjes gooi je weg of bewaar je in de vriezer voor bouillon. Dep ze heel goed droog met keukenpapier: hoe droger, hoe knapperiger.' },
    { kop: 'Kruidenmix', t: 'Meng bakpoeder, zout en de kruiden in een grote kom, doe de vleugels erbij en schep om tot ze overal een dun laagje hebben. Leg ze naast elkaar op een rooster of bord en zet ze onafgedekt minstens 1 uur (of een nacht) in de koelkast. Geen tijd? Dan kun je ook meteen bakken; ze worden dan net iets minder knapperig.', min: 60 },
    { kop: 'Bakken', t: 'Leg de vleugels in één laag in de koude airfryer, met de velkant naar boven en wat ruimte ertussen; bak zo nodig in 2 rondes. Bak 20 minuten op 180 °C en schud de mand na 10 minuten.', m: 'airfryer', min: 20 },
    { t: 'Zet de airfryer op 200 °C en bak nog 6 à 8 minuten, tot het vel diep goudbruin en knapperig is en de kerntemperatuur bij het bot minstens 75 °C is.', m: 'airfryer', min: 7 },
    { kop: 'Bakken', t: 'Kies op de OptiGrill de handmatige modus, stand oranje (ongeveer 225 °C), en laat hem voorverwarmen. Leg de helft van de vleugels in één laag op de plaat en sluit de deksel. Grill 16 à 20 minuten, tot het vel goudbruin is en de kerntemperatuur bij het bot 75 °C is. Ze worden op de grill minder knapperig dan in de airfryer, maar krijgen mooie grillstrepen.', m: 'contactgrill', min: 18 },
    { kop: 'Saus', t: 'Doe intussen alles voor de saus in de steelpan en verwarm op laag vuur tot de boter is gesmolten. Roer goed door en laat 1 minuut zachtjes borrelen.', min: 2 },
    { t: 'Doe de hete vleugels in de grote kom, giet de warme saus erover en schep om tot alles glanst. Eet meteen, voordat het vel zacht wordt.' }
  ],
  tips: [
    'Klassiek erbij: stengels bleekselderij en wortel, en een blauwe-kaasdip: prak 50 g blauwe kaas (gorgonzola of Danablu) door 4 el zure room en 2 el mayonaise.',
    'Liever knapperig zonder saus? Zet de saus apart als dip; dan blijft het vel langer knapperig.',
    'Losse vleugels uit de vriezer: helemaal laten ontdooien en goed droogdeppen, anders worden ze niet knapperig.'
  ],
  alt: ['Minder pittig: neem de helft hete saus en de helft ketchup, en doe de honing er wel in.'],
  bij: ['barbecuesaus']
},
{
  id: 'kippenvleugels-honing-knoflook', toegevoegd: '2026-10-29', variantVan: 'kippenvleugels-buffalo', variant: 'Honing-knoflook', naam: 'Kippenvleugels met honing en knoflook',
  ook: ['honey garlic wings', 'honing knoflook kip', 'honingvleugels', 'zoete kippenvleugels', 'kleverige kippenvleugels'],
  pit: 0,
  intro: 'De knapperige vleugels uit de airfryer gaan door een kleverige saus van honing, knoflook, sojasaus en boter. Zoet en hartig, niet pittig. Het lievelingetje van de hele tafel.',
  vervang: {
    Saus: [
      { kop: 'Saus' },
      { n: 'honing', q: 4, u: 'el' },
      { n: 'sojasaus', q: 2, u: 'el' },
      { n: 'knoflook', q: 4, u: 'teen', x: 'fijngehakt of geperst' },
      { n: 'roomboter', q: 30, u: 'g' },
      { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' }
    ],
    'hete saus': null, roomboter: null, honing: null
  },
  stappen: [
    { t: 'Snijd de vleugels door het gewricht in een drumette (het pootje) en een vleugeltje; de dunne puntjes gooi je weg of bewaar je in de vriezer voor bouillon. Dep ze heel goed droog met keukenpapier: hoe droger, hoe knapperiger.' },
    { kop: 'Kruidenmix', t: 'Meng bakpoeder, zout en de kruiden in een grote kom, doe de vleugels erbij en schep om tot ze overal een dun laagje hebben. Leg ze naast elkaar op een rooster of bord en zet ze onafgedekt minstens 1 uur (of een nacht) in de koelkast. Geen tijd? Dan kun je ook meteen bakken; ze worden dan net iets minder knapperig.', min: 60 },
    { kop: 'Bakken', t: 'Leg de vleugels in één laag in de koude airfryer, met de velkant naar boven en wat ruimte ertussen; bak zo nodig in 2 rondes. Bak 20 minuten op 180 °C en schud de mand na 10 minuten.', m: 'airfryer', min: 20 },
    { t: 'Zet de airfryer op 200 °C en bak nog 6 à 8 minuten, tot het vel diep goudbruin en knapperig is en de kerntemperatuur bij het bot minstens 75 °C is.', m: 'airfryer', min: 7 },
    { kop: 'Bakken', t: 'Kies op de OptiGrill de handmatige modus, stand oranje (ongeveer 225 °C), en laat hem voorverwarmen. Leg de helft van de vleugels in één laag op de plaat en sluit de deksel. Grill 16 à 20 minuten, tot het vel goudbruin is en de kerntemperatuur bij het bot 75 °C is.', m: 'contactgrill', min: 18 },
    { kop: 'Saus', t: 'Smelt intussen de boter in de steelpan op laag vuur en bak de knoflook er 1 minuut in, tot hij geurt maar nog niet kleurt. Roer honing, sojasaus en citroensap erdoor en laat 2 à 3 minuten zachtjes borrelen tot de saus stroperig wordt.', min: 3 },
    { t: 'Doe de hete vleugels in de grote kom, giet de warme saus erover en schep om tot alles glanst. Eet meteen, met wat sesamzaad of lente-ui erover als je dat hebt.' }
  ],
  tips: ['Honing brandt snel aan. Houd het vuur laag en roer, en haal de pan van het vuur zodra de saus als dunne stroop van de lepel loopt; afgekoeld wordt hij dikker.'],
  alt: ['Pittig: roer 1 tl sambal oelek of sriracha door de saus.']
},
{
  id: 'kippenvleugels-teriyaki', toegevoegd: '2026-10-29', variantVan: 'kippenvleugels-buffalo', variant: 'Teriyaki', naam: 'Teriyaki kippenvleugels',
  ook: ['teriyaki wings', 'teriyaki kip', 'japanse kippenvleugels', 'teba shio'],
  pit: 0,
  intro: 'Knapperige vleugels met een glanzende Japanse teriyakisaus van sojasaus, mirin, honing en gember, met sesamzaad en lente-ui erover. Zoet-zout en vol van smaak.',
  vervang: {
    Saus: [
      { kop: 'Saus' },
      { n: 'sojasaus', q: 4, u: 'el' },
      { n: 'mirin', q: 3, u: 'el' },
      { n: 'honing', q: 2, u: 'el' },
      { n: 'knoflook', q: 2, u: 'teen', x: 'geraspt' },
      { n: 'gember', q: 10, u: 'g', x: 'vers, geraspt' },
      { kop: 'Erover' },
      { n: 'sesamzaad', q: 1, u: 'el' },
      { n: 'lente-ui', p: 'lente-uien', q: 2, u: 'st', x: 'in ringetjes' }
    ],
    'hete saus': null, roomboter: null, honing: null
  },
  stappen: [
    { t: 'Snijd de vleugels door het gewricht in een drumette (het pootje) en een vleugeltje; de dunne puntjes gooi je weg of bewaar je in de vriezer voor bouillon. Dep ze heel goed droog met keukenpapier: hoe droger, hoe knapperiger.' },
    { kop: 'Kruidenmix', t: 'Meng bakpoeder, zout en de kruiden in een grote kom, doe de vleugels erbij en schep om tot ze overal een dun laagje hebben. Leg ze naast elkaar op een rooster of bord en zet ze onafgedekt minstens 1 uur (of een nacht) in de koelkast. Geen tijd? Dan kun je ook meteen bakken; ze worden dan net iets minder knapperig.', min: 60 },
    { kop: 'Bakken', t: 'Leg de vleugels in één laag in de koude airfryer, met de velkant naar boven en wat ruimte ertussen; bak zo nodig in 2 rondes. Bak 20 minuten op 180 °C en schud de mand na 10 minuten.', m: 'airfryer', min: 20 },
    { t: 'Zet de airfryer op 200 °C en bak nog 6 à 8 minuten, tot het vel diep goudbruin en knapperig is en de kerntemperatuur bij het bot minstens 75 °C is.', m: 'airfryer', min: 7 },
    { kop: 'Bakken', t: 'Kies op de OptiGrill de handmatige modus, stand oranje (ongeveer 225 °C), en laat hem voorverwarmen. Leg de helft van de vleugels in één laag op de plaat en sluit de deksel. Grill 16 à 20 minuten, tot het vel goudbruin is en de kerntemperatuur bij het bot 75 °C is.', m: 'contactgrill', min: 18 },
    { kop: 'Saus', t: 'Doe sojasaus, mirin, honing, knoflook en gember in de steelpan en laat op middelhoog vuur 3 à 4 minuten inkoken, tot de saus glanst en een beetje stroperig is. Pas op dat hij niet aanbrandt.', min: 4 },
    { t: 'Doe de hete vleugels in de grote kom, giet de warme saus erover en schep om tot alles glanst. Strooi sesamzaad en lente-ui erover en eet meteen.' }
  ],
  tips: ['Dikker, zoals bij de afhaal: roer 1 tl maïzena los in 1 el koud water en roer dat door de borrelende saus. Na een halve minuut is hij gebonden.'],
  alt: ['Geen mirin? Neem 2 el water met 1 el extra honing.']
},
{
  id: 'kippenvleugels-bbq', toegevoegd: '2026-10-29', variantVan: 'kippenvleugels-buffalo', variant: 'Barbecue', naam: 'Sticky barbecue kippenvleugels',
  ook: ['bbq wings', 'barbecue wings', 'bbq kippenvleugels', 'sticky wings', 'barbecue kip'],
  pit: 0,
  intro: 'Knapperige vleugels die op het laatst door een kleverige, rokerige barbecuesaus gaan. Neem je eigen barbecuesaus uit het boek of een fles uit de supermarkt.',
  vervang: {
    Saus: [
      { kop: 'Saus' },
      { n: 'barbecuesaus', q: 150, u: 'ml', x: 'zelfgemaakt of uit de fles' },
      { n: 'honing', q: 1, u: 'el' },
      { n: 'appelazijn', q: 1, u: 'el' },
      { n: 'roomboter', q: 20, u: 'g' }
    ],
    'hete saus': null, roomboter: null, honing: null,
    paprikapoeder: { n: 'gerookt paprikapoeder', q: 1, u: 'tl' }
  },
  tips: [
    'Extra kleverig: leg de vleugels na het omscheppen nog 2 minuten terug in de airfryer op 200 °C, dan brandt de saus er een beetje in. Leg er wel een stuk bakpapier onder, anders wordt de mand een plakboel.',
    'Lekker met coleslaw en maïskolven, of gewoon met friet.'
  ]
},

{
  id: 'karaage', toegevoegd: '2026-10-29', naam: 'Kara-age (Japanse krokante kip)',
  ook: ['karaage', 'kara age', 'tori karaage', 'japanse gefrituurde kip', 'japanse fried chicken', 'japanse kip'],
  keuken: 'Japans', soort: 'Hoofdgerecht',
  tijd: 35, wacht: '30 min marineren', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'De Japanse versie van krokante kip: stukken kippendij in sojasaus, gember en knoflook, door aardappelzetmeel en twee keer kort gebakken. Het korstje wordt dun, licht en glazig knapperig. Met een partje citroen en mayonaise, als snack of met rijst.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan (28 cm) met een hoge rand, voor een laag olie van 1,5 cm, en een schuimspaan', m: 'koekenpan', of: 'Een hapjespan of de Dutch oven werkt ook.' },
    { tool: 'airfryer', tekst: 'Airfryer en een oliespuit of -verstuiver', m: 'airfryer' },
    { tool: 'bakplaat', tekst: 'Een kom, een diep bord voor het zetmeel en een rooster of bord met keukenpapier' }
  ],
  ingr: [
    { n: 'kippendijfilet', q: 600, u: 'g', x: 'in stukken van 4 cm' },
    { kop: 'Marinade' },
    { n: 'sojasaus', q: 3, u: 'el' },
    { n: 'mirin', q: 1, u: 'el' },
    { n: 'gember', q: 15, u: 'g', x: 'vers, geraspt' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'geraspt' },
    { n: 'sesamolie', q: 1, u: 'tl' },
    { kop: 'Jasje' },
    { n: 'aardappelzetmeel', q: 80, u: 'g', x: 'of maïzena' },
    { n: 'bloem', q: 2, u: 'el' },
    { kop: 'Bakken' },
    { n: 'zonnebloemolie', q: 400, u: 'ml', x: 'voor de koekenpan; voor de airfryer 2 el in een verstuiver' },
    { kop: 'Erbij' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'in partjes' },
    { n: 'mayonaise', q: 4, u: 'el', x: 'liefst Japanse (Kewpie)' }
  ],
  stappen: [
    { kop: 'Marinade', t: 'Meng de kip in een kom met alle ingrediënten voor de marinade en laat 30 minuten (of tot 4 uur in de koelkast) staan. Langer niet: dan trekt de sojasaus te veel in en wordt het zout.', min: 30 },
    { kop: 'Jasje', t: 'Meng aardappelzetmeel en bloem in een diep bord. Laat de kip kort uitlekken en rol elk stuk door het zetmeel tot het helemaal wit is. Druk het niet glad: een ruw, onregelmatig laagje wordt het knapperigst. Laat 5 minuten rusten tot het zetmeel vochtig wordt.', min: 5 },
    { kop: 'Bakken', t: 'Verhit een laag olie van 1,5 cm in de koekenpan tot 170 °C (een houten lepelsteel in de olie geeft meteen een krans van belletjes). Bak de kip in 2 rondes 3 minuten, en draai de stukken halverwege om. Ze zijn dan lichtgoud en nog niet helemaal gaar. Leg ze op een rooster en laat 4 minuten rusten: de hitte gaart ze vanbinnen verder.', m: 'koekenpan', min: 7 },
    { t: 'Maak de olie heter, tot 190 °C, en bak alle kip nog een keer 1 à 2 minuten tot hij diep goudbruin en knapperig is. Die tweede ronde maakt het korstje glazig en houdt de kip sappig. Laat uitlekken op keukenpapier.', m: 'koekenpan', min: 2 },
    { kop: 'Bakken', t: 'Verwarm de airfryer voor op 200 °C. Spuit de kip rondom in met olie tot er geen witte, droge plekken zetmeel meer zijn en leg de stukken in één laag in de mand. Bak 12 à 14 minuten, keer ze na 7 minuten en spuit droge plekken nog eens in, tot ze goudbruin en gaar zijn.', m: 'airfryer', min: 13 },
    { kop: 'Erbij', t: 'Eet de kara-age meteen, met een partje citroen om over te knijpen en mayonaise om in te dippen.' }
  ],
  tips: [
    'Aardappelzetmeel geeft een lichter, knapperiger korstje dan maïzena, maar maïzena werkt ook goed.',
    'Japanse mayonaise (Kewpie, uit de toko) is romiger en wat zuurder dan de onze. Gewone mayonaise met een paar druppels rijstazijn komt in de buurt.',
    'Kara-age is ook koud lekker, in een bentobox of lunchtrommel.'
  ],
  alt: ['Pittig: roer 1 tl sambal oelek of een snuf chilivlokken door de mayonaise.', 'Geen mirin? Neem 1 tl suiker en 1 el water.']
}
);
