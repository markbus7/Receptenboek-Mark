/* Gebak: cake */
RECEPTEN.push(
{
  id: 'botercake', toegevoegd: '2026-10-18', naam: 'Hollandse botercake', ook: ['cake', 'boter cake', 'marmercake', 'pondcake', 'cake bakken'],
  keuken: 'Nederlands', soort: 'Dessert',
  tijd: 20, wacht: '1 uur bakken', pers: 12, stuks: 'plakken', niveau: 'Makkelijk', vega: true,
  intro: 'Ouderwetse cake met een goudbruine scheur bovenop: luchtig, boterig en precies goed bij de koffie. Met een variant voor marmercake.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'bakvorm', tekst: 'Cakevorm van ca. 25 cm, ingevet en bestoven met bloem of bekleed met bakpapier' },
    { tool: 'mixer', tekst: 'Handmixer met gardes en een grote kom', of: 'Zonder mixer: klop de zachte boter en suiker 10 minuten flink met een houten lepel.' },
    { tool: 'airfryer', tekst: 'Airfryer waar een kleinere cakevorm (ca. 20 cm) in past', m: 'airfryer' }
  ],
  ingr: [
    { n: 'boter', q: 200, u: 'g', x: 'op kamertemperatuur, zacht' },
    { n: 'suiker', q: 200, u: 'g', x: 'fijne kristalsuiker' },
    { n: 'vanillesuiker', q: 8, u: 'g' },
    { n: 'ei', p: 'eieren', q: 4, u: 'st', x: 'op kamertemperatuur' },
    { n: 'zelfrijzend bakmeel', q: 200, u: 'g', x: 'of 200 g bloem met 2 tl bakpoeder' },
    { n: 'zout', q: 1, u: 'snuf' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'alleen de geraspte schil', opt: true },
    { n: 'melk', q: 2, u: 'el', opt: true },
    { n: 'cacaopoeder', q: 2, u: 'el', x: 'alleen voor marmercake', opt: true }
  ],
  stappen: [
    { t: 'Verwarm de oven voor op 175 °C (hetelucht 160 °C). Vet de cakevorm in en bestuif hem met bloem.', m: 'oven' },
    { t: 'Verwarm de airfryer voor op 160 °C. Gebruik ¾ van het beslag voor een kleinere vorm; bak de rest als muffins.', m: 'airfryer' },
    { t: 'Klop de zachte boter met de suiker, vanillesuiker en het zout in 5 minuten tot een lichte, bleke en luchtige massa. Dit is het geheim van een luchtige cake.', min: 5 },
    { t: 'Klop de eieren er één voor één door; wacht steeds tot het vorige ei helemaal is opgenomen. Gaat het schiften, klop dan een eetlepel van het bakmeel mee.' },
    { t: 'Zeef het bakmeel erboven en spatel het met de citroenrasp en eventueel de melk kort door het beslag, tot je geen meel meer ziet. Niet langer mixen, anders wordt de cake taai.' },
    { t: 'Marmercake: schep een derde van het beslag in een andere kom en roer de cacao erdoor. Schep beide beslagen om en om in de vorm en trek er met een vork een paar keer een slinger doorheen.' },
    { t: 'Schep het beslag in de vorm en strijk glad. Trek met een in boter gedoopt mes een lijn in de lengte over het midden: daar scheurt de cake mooi open.' },
    { t: 'Bak de cake 55 à 65 minuten in het midden van de oven. Hij is gaar als een satéprikker er droog uitkomt.', m: 'oven', min: 60 },
    { t: 'Bak de cake 40 à 45 minuten in de airfryer. Kleurt de bovenkant te snel, leg er dan na 25 minuten een stukje aluminiumfolie op.', m: 'airfryer', min: 42 },
    { t: 'Laat de cake 10 minuten in de vorm afkoelen en stort hem dan op een rooster. Pas aansnijden als hij lauw is.', min: 10 }
  ],
  tips: ['Alles op kamertemperatuur is het halve werk: koude eieren laten het beslag schiften. Goed ingepakt blijft de cake 4 dagen lekker en hij is prima in te vriezen.'],
  alt: ['Citroencake: roer na het bakken 75 g poedersuiker met 2 el citroensap tot een glazuur en schenk dat over de lauwe cake.', 'Met fruit: schep 150 g blauwe bessen of blokjes appel, licht door bloem gehaald, door het beslag.']
}
);
/* Spareribs: lang gegaard tot het vlees van het bot valt, daarna gelakt */
RECEPTEN.push(
{
  id: 'spareribs', toegevoegd: '2026-10-20', naam: 'Sweet spareribs', gerecht: 'Spareribs', variant: 'Sweet',
  ook: ['spareribs', 'spare ribs', 'ribs', 'zoete spareribs', 'spareribs sweet', 'spareribs express', 'spareribs uit de oven', 'fall off the bone ribs', 'sticky ribs'],
  keuken: 'Nederlands', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '3 uur in de oven', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Spareribs zoals in het spareribsrestaurant: eerst 3 uur langzaam gegaard in folie, tot het vlees van het bot valt, en dan gelakt met een plakkerige, zoete saus van ketjap, honing en knoflook. Met friet, knoflooksaus en koolsla.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'slowcooker', naam: 'Slowcooker' } ],
  gerei: [
    { tool: 'bakplaat', tekst: 'Diepe bakplaat met bakpapier, en extra brede aluminiumfolie' },
    { tool: 'oven', tekst: 'Oven', m: 'oven' },
    { tool: 'slowcooker', tekst: 'Slowcooker van minimaal 5 liter', m: 'slowcooker' },
    { tool: 'oven', tekst: 'Oven om de spareribs af te lakken', m: 'slowcooker', of: 'Airfryer: lak de stukken 8 à 10 minuten op 200 °C, in twee rondes.' },
    { tool: 'kookpan', tekst: 'Steelpan voor de saus' }
  ],
  ingr: [
    { n: 'spareribs', q: 2, u: 'kg', x: 'naturel, niet gemarineerd; in hele stukken (racks)' },
    { n: 'appelsap', q: 100, u: 'ml' },
    { kop: 'Rub' },
    { n: 'bruine suiker', q: 2, u: 'el' },
    { n: 'paprikapoeder', q: 2, u: 'tl', x: 'edelzoet' },
    { n: 'knoflookpoeder', q: 1, u: 'tl' },
    { n: 'uienpoeder', q: 1, u: 'tl' },
    { n: 'zout', q: 2, u: 'tl' },
    { n: 'zwarte peper', q: 1, u: 'tl', x: 'versgemalen' },
    { kop: 'Sweet saus' },
    { n: 'ketjap manis', q: 6, u: 'el' },
    { n: 'honing', q: 4, u: 'el' },
    { n: 'ketchup', q: 4, u: 'el' },
    { n: 'sojasaus', q: 2, u: 'el' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'geperst' },
    { n: 'gember', q: 10, u: 'g', x: 'geraspt' },
    { n: 'appelazijn', q: 1, u: 'el' },
    { kop: 'Erbij' },
    { n: 'knoflooksaus', x: 'zelfgemaakt of uit een fles', opt: true }
  ],
  stappen: [
    { t: 'Draai de spareribs om, met de botkant naar boven. Wrik met een botermesje het dunne vliesje los bij één van de botjes, pak het vast met keukenpapier en trek het er in één keer af. Dep het vlees droog.' },
    { t: 'Meng de bruine suiker, paprikapoeder, knoflookpoeder, uienpoeder, zout en peper en wrijf de spareribs er rondom mee in. Heb je tijd, laat ze dan afgedekt een nacht in de koelkast intrekken.' },
    { t: 'Verwarm de oven voor op 150 °C. Leg elk stuk op een dubbele laag aluminiumfolie, met de botkant naar boven, verdeel de appelsap erover en vouw de folie strak dicht tot een pakketje. Leg de pakketjes op de bakplaat.', m: 'oven' },
    { t: 'Gaar de spareribs 2½ à 3 uur in de oven. Ze zijn goed als je een botje er met twee vingers uit kunt draaien. Is dat nog niet zo, geef ze dan nog een half uur.', m: 'oven', min: 165 },
    { t: 'Snijd de spareribs in stukken van 3 à 4 botjes. Zet ze rechtop langs de wand van de slowcooker, met de vlezige kant naar buiten, en schenk de appelsap erbij.', m: 'slowcooker' },
    { t: 'Gaar de spareribs 7 à 8 uur op LOW, tot je een botje er met twee vingers uit kunt draaien.', m: 'slowcooker', min: 450 },
    { t: 'Haal de spareribs voorzichtig uit de folie of de slowcooker; ze zijn nu zo mals dat ze kunnen breken. Vang 100 ml van het vocht op.' },
    { t: 'Doe ketjap, honing, ketchup, sojasaus, knoflook, gember en appelazijn met het opgevangen vocht in de steelpan. Laat 8 à 10 minuten zachtjes inkoken tot een stroperige saus die aan je lepel blijft plakken.', min: 9 },
    { t: 'Zet de oven op 220 °C. Leg de spareribs met de vlezige kant naar boven op de bakplaat met bakpapier en smeer ze dik in met de helft van de saus. Lak ze 10 minuten, smeer er nog een laag over en geef ze nog 5 à 10 minuten, tot de saus plakkerig is en de randjes donker karamelliseren. Houd ze in de gaten: door de honing verbranden ze snel.', min: 18 },
    { t: 'Laat 5 minuten rusten en snijd ze tussen de botjes door. Serveer met de rest van de saus, friet, knoflooksaus en koolsla.', min: 5 }
  ],
  tips: [
    'Het vliesje aan de botkant wordt taai en houdt de rub tegen. Trek het er altijd af; dat is het verschil tussen ribs die van het bot vallen en ribs waar je aan moet trekken.',
    'Van het bot vallen gaat niet op de minuut maar op gevoel: het vlees is klaar als het van het bot wijkt en een botje er zonder kracht uit draait (kerntemperatuur rond 93 °C). Liever een half uur te lang dan te kort.',
    'Je kunt de spareribs een dag van tevoren garen en in hun folie in de koelkast bewaren. Lak ze dan 5 minuten langer, tot ze ook vanbinnen warm zijn.'
  ],
  alt: [
    'Op de barbecue: gaar ze in de oven en lak ze op het laatst 10 minuten boven indirecte hitte, met de deksel dicht.',
    'Classic bbq: lak ze met de zelfgemaakte barbecuesaus uit dit boek in plaats van de sweet saus.',
    'Heb je geen appelsap, gebruik dan 100 ml water met 1 el appelazijn.'
  ],
  bij: ['knoflooksaus', 'barbecuesaus']
},
{
  id: 'spareribs-spicy', toegevoegd: '2026-10-20', variantVan: 'spareribs', variant: 'Spicy', pit: 2, naam: 'Spicy spareribs',
  ook: ['pittige spareribs', 'spareribs spicy', 'hot spareribs', 'spicy ribs', 'spareribs met sambal'],
  intro: 'Dezelfde spareribs die van het bot vallen, maar gelakt met een pittige saus van sambal, ketchup en een beetje honing, met cayenne in de rub en verse rode peper erover. Heet, maar je proeft het vlees nog.',
  vervang: {
    paprikapoeder: [{ n: 'gerookt paprikapoeder', q: 2, u: 'tl' }, { n: 'cayennepeper', q: 1, u: 'tl' }],
    'Sweet saus': { kop: 'Spicy saus' },
    'ketjap manis': [{ n: 'ketjap manis', q: 3, u: 'el' }, { n: 'sambal oelek', q: 3, u: 'el' }],
    honing: { n: 'honing', q: 2, u: 'el' },
    ketchup: { n: 'ketchup', q: 5, u: 'el' },
    gember: [{ n: 'gember', q: 10, u: 'g', x: 'geraspt' }, { n: 'rode peper', p: 'rode pepers', q: 1, u: 'st', x: 'in dunne ringetjes, om over te strooien' }]
  },
  stappen: [
    { t: 'Draai de spareribs om, met de botkant naar boven. Wrik met een botermesje het dunne vliesje los bij één van de botjes, pak het vast met keukenpapier en trek het er in één keer af. Dep het vlees droog.' },
    { t: 'Meng de bruine suiker, gerookt paprikapoeder, cayennepeper, knoflookpoeder, uienpoeder, zout en peper en wrijf de spareribs er rondom mee in. Heb je tijd, laat ze dan afgedekt een nacht in de koelkast intrekken.' },
    { t: 'Verwarm de oven voor op 150 °C. Leg elk stuk op een dubbele laag aluminiumfolie, met de botkant naar boven, verdeel de appelsap erover en vouw de folie strak dicht tot een pakketje. Leg de pakketjes op de bakplaat.', m: 'oven' },
    { t: 'Gaar de spareribs 2½ à 3 uur in de oven. Ze zijn goed als je een botje er met twee vingers uit kunt draaien. Is dat nog niet zo, geef ze dan nog een half uur.', m: 'oven', min: 165 },
    { t: 'Snijd de spareribs in stukken van 3 à 4 botjes. Zet ze rechtop langs de wand van de slowcooker, met de vlezige kant naar buiten, en schenk de appelsap erbij.', m: 'slowcooker' },
    { t: 'Gaar de spareribs 7 à 8 uur op LOW, tot je een botje er met twee vingers uit kunt draaien.', m: 'slowcooker', min: 450 },
    { t: 'Haal de spareribs voorzichtig uit de folie of de slowcooker; ze zijn nu zo mals dat ze kunnen breken. Vang 100 ml van het vocht op.' },
    { t: 'Doe ketjap, sambal, honing, ketchup, sojasaus, knoflook, gember en appelazijn met het opgevangen vocht in de steelpan. Laat 8 à 10 minuten zachtjes inkoken tot een stroperige saus die aan je lepel blijft plakken. Proef: wil je hem heter, roer er dan nog 1 el sambal door.', min: 9 },
    { t: 'Zet de oven op 220 °C. Leg de spareribs met de vlezige kant naar boven op de bakplaat met bakpapier en smeer ze dik in met de helft van de saus. Lak ze 10 minuten, smeer er nog een laag over en geef ze nog 5 à 10 minuten, tot de saus plakkerig is en de randjes donker karamelliseren.', min: 18 },
    { t: 'Laat 5 minuten rusten, strooi de rode peper erover en snijd ze tussen de botjes door. Serveer met de rest van de saus, friet, knoflooksaus en koolsla: de knoflooksaus blust het vuur.', min: 5 }
  ],
  alt: [
    'Minder pittig: laat de cayenne weg en gebruik 1 el sambal. Nog heter: 1 tl chilivlokken in de rub en 2 el sriracha door de saus.',
    'Liever zoet met een beetje pit? Kies de variant sweet & spicy.',
    'Op de barbecue: gaar ze in de oven en lak ze op het laatst 10 minuten boven indirecte hitte, met de deksel dicht.'
  ]
},
{
  id: 'spareribs-sweet-spicy', toegevoegd: '2026-10-21', variantVan: 'spareribs', variant: 'Sweet & spicy', pit: 1, naam: 'Sweet & spicy spareribs',
  ook: ['sweet and spicy spareribs', 'sweet & spicy ribs', 'zoet pittige spareribs', 'zoetpittige spareribs', 'spareribs sweet spicy'],
  intro: 'Het beste van allebei: dezelfde spareribs die van het bot vallen, gelakt met de plakkerige, zoete saus van ketjap en honing, met sambal en een snufje cayenne erdoor. Eerst zoet, daarna een warme gloed.',
  vervang: {
    paprikapoeder: [{ n: 'paprikapoeder', q: 2, u: 'tl', x: 'edelzoet' }, { n: 'cayennepeper', q: 0.5, u: 'tl' }],
    'Sweet saus': { kop: 'Sweet & spicy saus' },
    'ketjap manis': [{ n: 'ketjap manis', q: 6, u: 'el' }, { n: 'sambal oelek', q: 2, u: 'el' }]
  },
  stappen: [
    { t: 'Draai de spareribs om, met de botkant naar boven. Wrik met een botermesje het dunne vliesje los bij één van de botjes, pak het vast met keukenpapier en trek het er in één keer af. Dep het vlees droog.' },
    { t: 'Meng de bruine suiker, paprikapoeder, cayennepeper, knoflookpoeder, uienpoeder, zout en peper en wrijf de spareribs er rondom mee in. Heb je tijd, laat ze dan afgedekt een nacht in de koelkast intrekken.' },
    { t: 'Verwarm de oven voor op 150 °C. Leg elk stuk op een dubbele laag aluminiumfolie, met de botkant naar boven, verdeel de appelsap erover en vouw de folie strak dicht tot een pakketje. Leg de pakketjes op de bakplaat.', m: 'oven' },
    { t: 'Gaar de spareribs 2½ à 3 uur in de oven. Ze zijn goed als je een botje er met twee vingers uit kunt draaien. Is dat nog niet zo, geef ze dan nog een half uur.', m: 'oven', min: 165 },
    { t: 'Snijd de spareribs in stukken van 3 à 4 botjes. Zet ze rechtop langs de wand van de slowcooker, met de vlezige kant naar buiten, en schenk de appelsap erbij.', m: 'slowcooker' },
    { t: 'Gaar de spareribs 7 à 8 uur op LOW, tot je een botje er met twee vingers uit kunt draaien.', m: 'slowcooker', min: 450 },
    { t: 'Haal de spareribs voorzichtig uit de folie of de slowcooker; ze zijn nu zo mals dat ze kunnen breken. Vang 100 ml van het vocht op.' },
    { t: 'Doe ketjap, sambal, honing, ketchup, sojasaus, knoflook, gember en appelazijn met het opgevangen vocht in de steelpan. Laat 8 à 10 minuten zachtjes inkoken tot een stroperige saus die aan je lepel blijft plakken. Proef: zoeter met 1 el honing, pittiger met 1 el sambal.', min: 9 },
    { t: 'Zet de oven op 220 °C. Leg de spareribs met de vlezige kant naar boven op de bakplaat met bakpapier en smeer ze dik in met de helft van de saus. Lak ze 10 minuten, smeer er nog een laag over en geef ze nog 5 à 10 minuten, tot de saus plakkerig is en de randjes donker karamelliseren. Houd ze in de gaten: door de honing verbranden ze snel.', min: 18 },
    { t: 'Laat 5 minuten rusten en snijd ze tussen de botjes door. Serveer met de rest van de saus, friet, knoflooksaus en koolsla.', min: 5 }
  ],
  alt: [
    'Wil je het precies zo pittig als je lekker vindt, maak dan de sweet saus en schep er aan tafel sambal bij.',
    'Op de barbecue: gaar ze in de oven en lak ze op het laatst 10 minuten boven indirecte hitte, met de deksel dicht.'
  ]
}
);
