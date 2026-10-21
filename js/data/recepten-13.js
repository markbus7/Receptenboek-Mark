/* Belgisch en Duits & Oostenrijks: mosselen, waterzooi, vol-au-vent, stoemp, wafels, steak frites,
   mayonaise, schnitzel, strudel, kaiserschmarrn, currywurst en kartoffelsalat */
RECEPTEN.push(
{
  id: 'mosselen', naam: 'Mosselen in witte wijn', ook: ['moules marinières', 'mosselen met friet', 'moules frites'],
  keuken: 'Belgisch', soort: 'Hoofdgerecht',
  tijd: 30, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Een dampende pan mosselen met witte wijn, selderij en prei, in tien minuten gaar. Met friet en mayonaise erbij heb je het Belgische nationale gerecht.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven van 26 à 28 cm met goed sluitende deksel: daar passen ca. 2 kg mosselen in' },
    { tool: 'kookpan', tekst: 'Tweede grote kookpan met deksel voor de andere 2 kg', of: 'Maar één pan? Kook de mosselen in twee porties en houd de eerste warm onder de deksel.' }
  ],
  ingr: [
    { n: 'mosselen', q: 4, u: 'kg', x: 'Zeeuwse, 1 kg per persoon' },
    { n: 'bleekselderij', q: 3, u: 'stengel', x: 'in schuine plakjes, met het blad' },
    { n: 'prei', p: 'preien', q: 1, u: 'st', x: 'in dunne ringen' },
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'in halve ringen' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'in plakjes' },
    { n: 'witte wijn', q: 300, u: 'ml', x: 'droog' },
    { n: 'boter', q: 50, u: 'g' },
    { n: 'verse tijm', q: 2, u: 'takje' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 2, u: 'st' },
    { n: 'verse peterselie', q: 10, u: 'g', x: 'grof gehakt' },
    { n: 'peper' },
    { kop: 'Erbij' },
    { n: 'mayonaise', x: 'zelfgemaakt of uit een pot' },
    { n: 'stokbrood', q: 1, u: 'st', opt: true, x: 'als je geen friet maakt' }
  ],
  stappen: [
    { t: 'Spoel de mosselen in een vergiet onder koud stromend water. Gooi mosselen met een gebroken schelp weg, net als open mosselen die niet dichtgaan als je ze even tegen het aanrecht tikt. Trek uitstekende baardjes eruit.' },
    { t: 'Smelt de boter in de Dutch oven op middelhoog vuur. Fruit ui, selderij, prei en knoflook 5 minuten tot ze zacht zijn maar niet bruin. Kook je in twee pannen, schep dan de helft van de groente over in de tweede pan.', min: 5 },
    { t: 'Voeg tijm, laurier, flink wat peper en de wijn toe (verdeeld over de pannen) en breng op hoog vuur aan de kook. Zout is niet nodig: mosselen zijn van zichzelf zout.' },
    { t: 'Doe de mosselen erin en leg de deksel erop. Kook 4 à 5 minuten op hoog vuur. Pak de pan na 2 minuten met beide handen vast, houd de deksel stevig dicht en schud hem een paar keer op en neer, zodat alle mosselen door elkaar gaan.', min: 5 },
    { t: 'De mosselen zijn klaar als vrijwel alle schelpen open staan. Kook niet langer door, anders worden ze taai en krimpen ze. Gooi de mosselen weg die dicht blijven.' },
    { t: 'Strooi de peterselie erover en zet de pan op tafel, met een lege kom voor de schelpen. Eet de mosselen met een lege schelp als knijpertje en schep het kookvocht erover.' }
  ],
  tips: [
    'Friet erbij? Maak de friet uit het recept Steak frites in de oven of airfryer en begin daar eerst mee: de mosselen zijn pas op het laatst aan de beurt en staan in 10 minuten op tafel.',
    'Dip brood of friet in het kookvocht, dat is het lekkerste deel. Laat de laatste lepel in de pan: daar zit soms nog wat zand in.'
  ],
  alt: [
    'Mosselen met room: roer na het koken 150 ml kookroom en 1 el mosterd door het kookvocht en laat even meewarmen.',
    'Geen wijn? Gebruik een blond Belgisch bier, of half water en half groentebouillon met 1 el azijn.'
  ]
},
{
  id: 'gentse-waterzooi', naam: 'Gentse waterzooi met kip', gerecht: 'Gentse waterzooi', variant: 'Kip', ook: ['waterzooi'],
  keuken: 'Belgisch', soort: 'Hoofdgerecht',
  tijd: 35, wacht: '35 min trekken', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Een romige soep-stoof uit Gent met kip, reepjes groente en aardappel, gebonden met room en eidooier. Je eet hem uit een diep bord, met een lepel én een vork.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of grote braadpan (minimaal 4 liter) met deksel, en een garde' }
  ],
  ingr: [
    { n: 'kippenpoten', q: 1200, u: 'g', x: '4 stuks, dij en drumstick met bot' },
    { n: 'kippenbouillon', q: 1200, u: 'ml' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'gehalveerd' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 2, u: 'st' },
    { n: 'verse tijm', q: 3, u: 'takje' },
    { n: 'prei', p: 'preien', q: 2, u: 'st', x: 'het wit en lichtgroen in dunne reepjes' },
    { n: 'wortel', p: 'wortels', q: 3, u: 'st', x: 'in luciferdunne reepjes' },
    { n: 'bleekselderij', q: 3, u: 'stengel', x: 'in dunne reepjes' },
    { n: 'vastkokende aardappelen', q: 600, u: 'g', x: 'geschild, in blokjes van 1½ cm' },
    { kop: 'Binding' },
    { n: 'slagroom', q: 200, u: 'ml', x: 'vloeibaar, uit een pak (geen spuitbus); of kookroom' },
    { n: 'eidooier', p: 'eidooiers', q: 2, u: 'st' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { n: 'verse peterselie', q: 10, u: 'g', x: 'fijngehakt' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Bestrooi de kippenpoten met zout. Leg ze in de Dutch oven met de bouillon, de ui, laurier en tijm. Breng aan de kook en schep het schuim eraf.' },
    { t: 'Zet het vuur laag, leg de deksel schuin op de pan en laat de kip 35 minuten zachtjes trekken. Het vocht mag net borrelen, niet hard koken.', min: 35 },
    { t: 'Haal de kip, de ui en de kruiden uit de pan. Doe de aardappelblokjes in de bouillon en kook 5 minuten. Voeg dan prei, wortel en selderij toe en kook nog 8 à 10 minuten, tot alles gaar is.', min: 14 },
    { t: 'Pluk intussen het kippenvlees van de botten in grove stukken. Gooi vel en botten weg.' },
    { t: 'Klop in een kom de room, de eidooiers en het citroensap los. Zet het vuur onder de pan laag. Klop er 2 soeplepels hete bouillon door en giet het mengsel dan al roerend terug in de pan.' },
    { t: 'Doe de kip terug en warm 2 à 3 minuten door tot de soep licht gebonden is. Laat hem niet meer koken, anders schift de eidooier. Breng op smaak met zout en peper en strooi de peterselie erover.', min: 3 }
  ],
  tips: [
    'Waterzooi werd in Gent oorspronkelijk met riviervis gemaakt; kip werd pas later de standaard.',
    'Maak je hem vooruit? Bewaar de soep zonder binding en voeg room en eidooier pas toe als je hem opwarmt.'
  ],
  alt: [
    'Sneller: gebruik 600 g kippendijfilet in blokken en laat die 15 minuten in de bouillon trekken. Dan hoef je niets te plukken.'
  ]
},
{
  id: 'waterzooi-vis', variantVan: 'gentse-waterzooi', variant: 'Vis', naam: 'Gentse waterzooi met vis', ook: ['viswaterzooi', 'waterzooi met vis'],
  tijd: 40, wacht: null,
  intro: 'De oorspronkelijke waterzooi: grote stukken vis die zachtjes garen in een romige bouillon met reepjes groente en aardappel, gebonden met room en eidooier.',
  ingr: [
    { n: 'kabeljauwfilet', q: 400, u: 'g', x: 'in grote stukken; of een andere stevige witte vis' },
    { n: 'zalmfilet', q: 200, u: 'g', x: 'zonder vel, in grote stukken' },
    { n: 'visbouillon', q: 1200, u: 'ml', x: 'of groentebouillon' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'gehalveerd' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 2, u: 'st' },
    { n: 'verse tijm', q: 3, u: 'takje' },
    { n: 'prei', p: 'preien', q: 2, u: 'st', x: 'het wit en lichtgroen in dunne reepjes' },
    { n: 'wortel', p: 'wortels', q: 3, u: 'st', x: 'in luciferdunne reepjes' },
    { n: 'bleekselderij', q: 3, u: 'stengel', x: 'in dunne reepjes' },
    { n: 'vastkokende aardappelen', q: 600, u: 'g', x: 'geschild, in blokjes van 1½ cm' },
    { kop: 'Binding' },
    { n: 'slagroom', q: 200, u: 'ml', x: 'vloeibaar, uit een pak (geen spuitbus); of kookroom' },
    { n: 'eidooier', p: 'eidooiers', q: 2, u: 'st' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { n: 'verse peterselie', q: 10, u: 'g', x: 'fijngehakt' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Breng de bouillon met de ui, laurier en tijm aan de kook in de Dutch oven. Laat 10 minuten zachtjes trekken en haal ui en kruiden eruit.', min: 10 },
    { t: 'Doe de aardappelblokjes in de bouillon en kook 5 minuten. Voeg dan prei, wortel en selderij toe en kook nog 8 à 10 minuten, tot alles gaar is.', min: 14 },
    { t: 'Bestrooi de vis met zout. Zet het vuur laag, leg de vis in de bouillon en laat hem 4 à 5 minuten garen zonder dat de soep kookt, tot hij net uit elkaar valt. Schep de vis voorzichtig uit de pan en houd hem warm.', min: 5 },
    { t: 'Klop in een kom de room, de eidooiers en het citroensap los. Klop er 2 soeplepels hete bouillon door en giet het mengsel dan al roerend terug in de pan.' },
    { t: 'Warm 2 à 3 minuten door tot de soep licht gebonden is. Laat hem niet meer koken, anders schift de eidooier. Breng op smaak met zout en peper.', min: 3 },
    { t: 'Verdeel de vis over diepe borden, schep de soep met de groente erover en strooi de peterselie erop.' }
  ],
  tips: ['Waterzooi werd in Gent oorspronkelijk met riviervis gemaakt; kip werd pas later de standaard.', 'Vis valt snel uit elkaar: roer niet meer zodra hij in de pan ligt en schep hem met een schuimspaan uit.'],
  alt: ['Feestelijker: laat de laatste 2 minuten 200 g gepelde garnalen meewarmen in de soep.']
},
{
  id: 'vol-au-vent', naam: 'Vol-au-vent', ook: ['koninginnenhapje', 'pasteitjes', 'pasteitje met ragout', 'pasteitjes met ragout', 'ragout', 'ragoutpasteitje', 'kippenragout'],
  keuken: 'Belgisch', soort: 'Hoofdgerecht',
  tijd: 50, pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Kip, kleine gehaktballetjes en champignons in een fluweelzachte roomsaus, in een krokant pasteitje van bladerdeeg. In België eet je het met friet.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan met deksel, en een garde voor de saus' },
    { tool: 'oven', tekst: 'Oven om de pasteitjes op te warmen', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer om de pasteitjes op te warmen', m: 'airfryer' }
  ],
  ingr: [
    { kop: 'Kip en balletjes' },
    { n: 'kipfilet', q: 500, u: 'g', x: 'heel, of kippendijfilet' },
    { n: 'kippenbouillon', q: 1, u: 'l' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 1, u: 'st' },
    { n: 'verse tijm', q: 2, u: 'takje' },
    { n: 'half-om-half gehakt', q: 300, u: 'g', x: 'of kalfsgehakt' },
    { n: 'paneermeel', q: 2, u: 'el' },
    { n: 'nootmuskaat', q: 2, u: 'snuf' },
    { n: 'champignons', q: 250, u: 'g', x: 'in kwarten' },
    { kop: 'Saus' },
    { n: 'boter', q: 60, u: 'g' },
    { n: 'bloem', q: 60, u: 'g' },
    { n: 'slagroom', q: 200, u: 'ml', x: 'vloeibaar, uit een pak (geen spuitbus); of kookroom' },
    { n: 'eidooier', p: 'eidooiers', q: 1, u: 'st' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { kop: 'Erbij' },
    { n: 'pasteibakje', p: 'pasteibakjes', q: 8, u: 'st', x: 'kant-en-klaar, van bladerdeeg' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Breng de bouillon met laurier en tijm aan de kook in de Dutch oven. Leg de kipfilet erin, zet het vuur laag en laat de kip met de deksel erop 15 minuten zachtjes trekken.', min: 15 },
    { t: 'Meng intussen het gehakt met het paneermeel, een snuf nootmuskaat, zout en peper. Draai er met natte handen balletjes van zo groot als een knikker (ca. 30 stuks).' },
    { t: 'Haal de kip uit de pan. Pocheer de balletjes en de champignons 5 minuten in de zacht kokende bouillon. Schep ze eruit en giet de bouillon door een zeef in een maatbeker: je hebt 750 ml nodig.', min: 5 },
    { t: 'Smelt de boter in de lege pan op middelhoog vuur. Roer de bloem erdoor en laat 1 minuut garen. Klop de warme bouillon er scheutje voor scheutje door met de garde, tot een gladde, dikke saus. Laat 5 minuten zachtjes koken en roer af en toe.', min: 5 },
    { t: 'Klop de room met de eidooier en het citroensap los. Zet het vuur laag en roer het mengsel door de saus. Breng op smaak met zout, peper en nootmuskaat.' },
    { t: 'Snijd of trek de kip in blokjes. Schep kip, balletjes en champignons door de saus en warm 3 minuten door zonder te laten koken.', min: 3 },
    { t: 'Warm de pasteibakjes 5 minuten op in de oven op 180 °C.', m: 'oven', min: 5 },
    { t: 'Warm de pasteibakjes 3 minuten op in de airfryer op 160 °C.', m: 'airfryer', min: 3 },
    { t: 'Vul de pasteibakjes met de ragout en schep de rest ernaast. Lekker met friet en mayonaise, of met rijst.' }
  ],
  tips: [
    'De ragout kun je een dag van tevoren maken. Hij dikt in de koelkast flink in: warm hem zachtjes op met 2 el bouillon of melk.',
    'In Nederland heet dit koninginnenhapje en eet je het vaak als voorgerecht; in België is het met friet een volwaardige maaltijd.'
  ],
  alt: [
    'Geen pasteibakjes? Schep de ragout over rijst of puree, of op geroosterd brood.',
    'Sneller: gebruik 400 g gegaarde kip (restjes van een braadkip) en kant-en-klare soepballetjes, en maak de saus met 750 ml bouillon van een blokje.'
  ]
},
{
  id: 'stoemp', naam: 'Stoemp met worst', ook: ['brusselse stamppot', 'stoemp met braadworst'],
  keuken: 'Belgisch', soort: 'Hoofdgerecht',
  tijd: 45, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'De Brusselse stamppot: aardappel met wortel en gesmoorde prei, grof gestampt met boter. Met een gebakken braadworst en een jusje uit de pan.',
  gerei: [
    { tool: 'kookpan', tekst: 'Grote kookpan voor aardappelen en wortel, en een stamper' },
    { tool: 'koekenpan', tekst: 'Koekenpan van 28 cm voor de prei en de worst' }
  ],
  ingr: [
    { n: 'kruimige aardappelen', q: 1000, u: 'g', x: 'geschild, in gelijke stukken' },
    { n: 'wortel', p: 'wortels', q: 4, u: 'st', x: 'ca. 400 g, in plakjes' },
    { n: 'prei', p: 'preien', q: 2, u: 'st', x: 'in ringen' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'gesnipperd' },
    { n: 'boter', q: 80, u: 'g', x: '30 g voor de prei, 20 g voor de worst, 30 g voor de stoemp' },
    { n: 'melk', q: 100, u: 'ml', x: 'warm' },
    { n: 'nootmuskaat', q: 1, u: 'snuf' },
    { n: 'braadworst', p: 'braadworsten', q: 4, u: 'st', x: 'ca. 150 g per stuk, of grove verse worst van de slager' },
    { n: 'mosterd', q: 4, u: 'tl', opt: true, x: 'om erbij te geven' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Doe aardappel en wortel in de kookpan, zet ze net onder water en voeg zout toe. Kook in 20 minuten gaar.', min: 20 },
    { t: 'Smelt intussen 30 g boter in de koekenpan en smoor ui en prei 8 minuten op middelhoog vuur tot ze zacht en zoet zijn, maar niet bruin. Schep ze in een kom.', min: 8 },
    { t: 'Smelt 20 g boter in dezelfde pan. Bak de worsten 15 à 18 minuten op middelhoog vuur rondom bruin en gaar; keer ze regelmatig. Zet het vuur wat lager als ze te snel kleuren.', min: 16 },
    { t: 'Giet aardappel en wortel af en laat 1 minuut uitdampen. Stamp ze grof met de rest van de boter en de warme melk. Schep de prei erdoor en breng op smaak met zout, peper en nootmuskaat.' },
    { t: 'Haal de worsten uit de pan. Giet 100 ml water in de pan, schraap het aanbaksel los en laat 1 minuut inkoken tot een jusje.', min: 1 },
    { t: 'Schep de stoemp op de borden, leg de worst ernaast en schenk het jusje erover. Geef er mosterd bij.' }
  ],
  tips: ['Stoemp is grover dan Hollandse stamppot: stamp met de hand en laat gerust stukjes wortel heel.'],
  alt: [
    'Stoemp met spruitjes: vervang wortel en prei door 500 g spruitjes, die je de laatste 10 minuten met de aardappelen meekookt. Bak er 100 g spekblokjes door.',
    'Vegetarisch: serveer de stoemp met een spiegelei en gebakken uitjes in plaats van worst.'
  ]
},
{
  id: 'luikse-wafels', naam: 'Luikse wafels', ook: ['suikerwafels', 'gaufres de liège'],
  keuken: 'Belgisch', soort: 'Dessert',
  tijd: 40, wacht: '1½ uur rijzen', pers: 12, stuks: 'wafels', niveau: 'Gemiddeld', vega: true,
  intro: 'Dikke wafels van boterrijk gistdeeg met knapperige stukjes gekaramelliseerde parelsuiker. Lauwwarm uit het ijzer zijn ze op hun best.',
  gerei: [
    { tool: 'contactgrill', tekst: 'Wafelijzer, of de OptiGrill met wafelplaten', of: 'Geen wafelijzer of wafelplaten? Bak kleine platte schijven in de koekenpan op middelhoog vuur, 3 minuten per kant (dan heet het een suikerkoek, maar het smaakt hetzelfde).' },
    { tool: 'mixer', tekst: 'Handmixer met deeghaken', of: 'Met de hand kneden kan ook; het deeg is plakkerig, dus houd vol.' }
  ],
  ingr: [
    { n: 'bloem', q: 500, u: 'g' },
    { n: 'gedroogde gist', q: 7, u: 'g', x: '1 zakje' },
    { n: 'suiker', q: 30, u: 'g' },
    { n: 'vanillesuiker', q: 8, u: 'g' },
    { n: 'zout', q: 0.5, u: 'tl' },
    { n: 'melk', q: 150, u: 'ml', x: 'lauw' },
    { n: 'ei', p: 'eieren', q: 2, u: 'st', x: 'op kamertemperatuur' },
    { n: 'boter', q: 250, u: 'g', x: 'zacht, in klontjes' },
    { n: 'parelsuiker', q: 200, u: 'g', x: 'grove Belgische suiker; of grof gebroken suikerklontjes' },
    { n: 'kaneel', q: 0.5, u: 'tl', opt: true }
  ],
  stappen: [
    { t: 'Meng bloem, gist, suiker, vanillesuiker en zout in een grote kom. Voeg de melk en de eieren toe en kneed met de deeghaken 5 minuten tot een samenhangend deeg.', min: 5 },
    { t: 'Kneed de zachte boter er klontje voor klontje door en kneed daarna nog 5 minuten, tot het deeg glad en glanzend is. Het blijft plakkerig; dat hoort zo.', min: 5 },
    { t: 'Dek de kom af en laat het deeg op een warme plek 1 uur rijzen, tot het in volume verdubbeld is.', min: 60 },
    { t: 'Kneed de parelsuiker (en eventueel de kaneel) kort door het deeg. Verdeel het in 12 bollen van ca. 100 g en laat ze afgedekt nog 20 minuten rijzen.', min: 20 },
    { t: 'Verwarm het wafelijzer of de OptiGrill met wafelplaten voor op middelhoge stand. Leg een bol in elk vak, sluit het ijzer en bak 3 à 4 minuten, tot de wafels goudbruin zijn en de suiker aan de buitenkant karamelliseert.', min: 4 },
    { t: 'Laat de wafels afkoelen op een rooster, niet op een bord, anders worden ze klef. Pas op: de karamel is gloeiend heet. Bak zo alle bollen.' }
  ],
  tips: [
    'Gesmolten parelsuiker brandt aan op de platen. Veeg ze tussendoor schoon met een stukje keukenpapier. Laat ze na afloop lauw worden en neem de karamel weg met een vochtige doek.',
    'Wafels kun je invriezen. Warm ze op in 3 à 4 minuten in de airfryer op 160 °C, dan worden ze weer knapperig.'
  ],
  alt: [
    'Deeg vooruit maken: laat het na het kneden een nacht afgedekt in de koelkast rijzen en kneed de parelsuiker er de volgende dag door.',
    'Met chocolade: doop de afgekoelde wafels half in gesmolten pure chocolade.'
  ]
},
{
  id: 'steak-frites', naam: 'Steak frites', ook: ['biefstuk met friet', 'steak met frietjes'],
  keuken: 'Belgisch', soort: 'Hoofdgerecht',
  tijd: 45, pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Een steak met een donkere korst en een sappig midden, krokante friet en een frisse sla. De klassieker van elke Belgische brasserie.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'RVS of gietijzeren koekenpan van 28 cm, voor hoog vuur' },
    { tool: 'bakplaat', tekst: 'Twee bakplaten met bakpapier, zodat de friet in één laag ligt', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer; bak de friet in twee porties', m: 'airfryer' }
  ],
  ingr: [
    { kop: 'Steak' },
    { n: 'biefstuk', q: 700, u: 'g', x: '4 biefstukken of entrecotes van ca. 175 g, 2 à 3 cm dik' },
    { n: 'boter', q: 30, u: 'g' },
    { n: 'knoflook', q: 1, u: 'teen', x: 'gekneusd', opt: true, vers: 'gaat heel mee in de boter' },
    { n: 'verse tijm', q: 2, u: 'takje', opt: true },
    { kop: 'Friet' },
    { n: 'kruimige aardappelen', q: 1000, u: 'g', x: 'bijv. bintje of frietaardappelen; schillen mag, hoeft niet' },
    { n: 'zonnebloemolie', q: 4, u: 'el', x: '3 el voor de friet, 1 el voor de steak' },
    { kop: 'Sla' },
    { n: 'kropsla', q: 1, u: 'st', x: 'of een zak gemengde sla' },
    { n: 'tomaat', p: 'tomaten', q: 2, u: 'st', x: 'in partjes' },
    { n: 'olijfolie', q: 2, u: 'el' },
    { n: 'azijn', q: 2, u: 'tl', x: 'witte wijnazijn' },
    { n: 'mosterd', q: 0.5, u: 'tl' },
    { kop: 'Erbij' },
    { n: 'mayonaise', opt: true },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Haal de steaks uit de koelkast. Snijd de aardappelen (geschild of met schil) in staafjes van 1 cm dik. Laat ze 15 minuten in koud water liggen, spoel ze af en droog ze heel goed in een schone theedoek.', min: 15 },
    { t: 'Verwarm de oven voor op 220 °C (hetelucht 200 °C). Hussel de friet met 3 el olie en verdeel hem in één laag over de bakplaten. Bak 30 à 35 minuten goudbruin en krokant; keer na 15 minuten en wissel de platen van plek.', m: 'oven', min: 32 },
    { t: 'Hussel de friet met 3 el olie. Bak hem in twee porties, net als in het frietkot in twee rondes: eerst 15 minuten op 160 °C, dan 6 à 8 minuten op 200 °C tot hij goudbruin en krokant is. Schud de mand een paar keer. Houd de eerste portie warm in de oven op 100 °C.', m: 'airfryer', min: 22 },
    { t: 'Klop olijfolie, azijn, mosterd en wat zout los tot een vinaigrette. Scheur de sla in een schaal en leg de tomaat erbij; schep de vinaigrette er pas vlak voor het eten door.' },
    { t: 'Dep de steaks droog en bestrooi ze ruim met zout. Verhit de koekenpan zonder olie 2 à 3 minuten op hoog vuur, tot een druppel water als een balletje over de bodem rolt. Doe 1 el olie erin en leg de steaks erin. Laat ze liggen: ze laten vanzelf los als de korst er is.' },
    { t: 'Bak de steaks bij 2½ cm dikte per kant 1 minuut voor bleu, 2 minuten voor saignant, 3 minuten voor à point of 4 à 5 minuten voor bien cuit. Zet het vuur de laatste minuut middelhoog, doe boter, knoflook en tijm erbij en schep de schuimende boter steeds over het vlees.', min: 3 },
    { t: 'Laat de steaks 5 minuten rusten op een warm bord onder een losse lap aluminiumfolie. Bestrooi de friet met zout en serveer met de steak, peper, de sla en mayonaise.', min: 5 }
  ],
  tips: [
    'Kies er een saus bij: pepersaus, bearnaise of champignonsaus. Die staan in het hoofdstuk Frans en de app toont ze bij "Lekker met". Pepersaus en champignonsaus maak je in dezelfde koekenpan terwijl de steak rust.',
    'Twijfel je over de gaarheid? Druk met je vinger op het vlees: saignant voelt zacht en verend, à point stevig met wat veerkracht.'
  ],
  alt: [
    'Echt gefrituurd: verhit 5 à 6 cm zonnebloemolie in de Dutch oven. Frituur de friet in porties eerst 5 minuten op 160 °C, laat uitlekken en frituur hem vlak voor het eten 2 à 3 minuten op 180 °C. Gebruik een thermometer.',
    'Geen tijd? Gebruik 750 g diepvriesfriet en bak hem volgens de verpakking in de oven of airfryer.'
  ]
},
{
  id: 'mayonaise', naam: 'Mayonaise (zelfgemaakt)', ook: ['mayo', 'frietsaus'],
  keuken: 'Belgisch', soort: 'Saus',
  tijd: 10, pers: 8, niveau: 'Gemiddeld', vega: true,
  intro: 'Zelfgemaakte mayonaise is dik, romig en lekker mosterdig: niet te vergelijken met die uit de pot. Met de staafmixer heb je hem in een halve minuut.',
  methodes: [ { id: 'staafmixer', naam: 'Staafmixer' }, { id: 'mixer', naam: 'Garde of handmixer' } ],
  gerei: [
    { tool: 'staafmixer', tekst: 'Staafmixer met een hoge, smalle beker waar de mixerkop net in past', m: 'staafmixer' },
    { tool: 'mixer', tekst: 'Garde of handmixer en een kom op een vochtige theedoek, zodat hij niet wegschuift', m: 'mixer' }
  ],
  ingr: [
    { n: 'ei', p: 'eieren', q: 1, u: 'st', x: 'op kamertemperatuur; met de garde alleen de dooier' },
    { n: 'mosterd', q: 1, u: 'tl' },
    { n: 'azijn', q: 1, u: 'el', x: 'witte wijnazijn, of citroensap' },
    { n: 'zonnebloemolie', q: 250, u: 'ml', x: 'geen olijfolie: die wordt bitter' },
    { n: 'zout', q: 0.5, u: 'tl' }
  ],
  stappen: [
    { t: 'Haal het ei minstens een half uur van tevoren uit de koelkast. Alles moet op kamertemperatuur zijn, anders schift de mayonaise.' },
    { t: 'Doe ei, mosterd, azijn en zout in de hoge beker en giet de olie erop. Wacht 15 seconden tot het ei naar de bodem is gezakt.', m: 'staafmixer' },
    { t: 'Zet de staafmixer helemaal op de bodem van de beker en zet hem aan op de hoogste stand. Houd hem stil tot je onderin een witte, dikke saus ziet ontstaan (na 5 à 10 seconden). Trek hem dan heel langzaam omhoog en beweeg hem op en neer tot alle olie is opgenomen.', m: 'staafmixer' },
    { t: 'Klop in de kom de eidooier met mosterd, azijn en zout 30 seconden los.', m: 'mixer' },
    { t: 'Klop de olie er druppel voor druppel door. Na zo\'n 50 ml wordt het dik en glanzend: giet de rest dan in een heel dun straaltje erbij en blijf kloppen tot alle olie op is. Wordt hij te dik, klop er dan een theelepel water door.', m: 'mixer' },
    { t: 'Proef en breng op smaak met zout en eventueel 1 tl extra azijn of citroensap. Bewaar de mayonaise afgedekt in de koelkast en eet hem binnen 3 dagen op.' }
  ],
  tips: [
    'Geschift? Doe een nieuwe eidooier of 1 el mosterd in een schone kom en klop de geschifte mayonaise er druppel voor druppel door. Dan komt hij alsnog goed.',
    'Belgische frietsauzen: voor andalouse roer je 4 el mayonaise met 1 el tomatenpuree, een snuf paprikapoeder, wat fijngehakte paprika en ui en een paar druppels citroensap. Voor samurai roer je 1 à 2 tl harissa of sambal oelek door 4 el mayonaise.'
  ],
  alt: [
    'Knoflookmayonaise: roer 1 fijngeperste teen knoflook en 1 el citroensap door de mayonaise.',
    'Rauw ei liever niet (bijvoorbeeld bij zwangerschap)? Gebruik dan mayonaise uit een pot; die is gemaakt met gepasteuriseerd ei.'
  ],
  bij: ['steak-frites', 'mosselen', 'kapsalon', 'fish-and-chips']
},
{
  id: 'wiener-schnitzel', naam: 'Wiener schnitzel', gerecht: 'Schnitzel', variant: 'Kalf of varken', ook: ['schnitzel', 'paneerschnitzel'],
  keuken: 'Duits & Oostenrijks', soort: 'Hoofdgerecht',
  tijd: 30, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Flinterdun geslagen vlees in een krokant, golvend jasje van paneermeel, gebakken in ruim boter. Een partje citroen erbij en meer heb je niet nodig.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Grote koekenpan van 28 cm, RVS of gietijzer', m: 'koekenpan' },
    { tool: 'airfryer', tekst: 'Airfryer; bak in twee porties zodat de schnitzels niet overlappen', m: 'airfryer' }
  ],
  ingr: [
    { n: 'schnitzel', p: 'schnitzels', q: 4, u: 'st', x: 'kalf (echt Wiener) of varken, ca. 150 g per stuk' },
    { n: 'bloem', q: 50, u: 'g' },
    { n: 'ei', p: 'eieren', q: 2, u: 'st' },
    { n: 'melk', q: 2, u: 'el' },
    { n: 'paneermeel', q: 100, u: 'g', x: 'fijn en ongekruid' },
    { n: 'zonnebloemolie', q: 150, u: 'ml', x: 'voor de pan; in de airfryer 2 el' },
    { n: 'boter', q: 50, u: 'g' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'in partjes' },
    { n: 'verse peterselie', q: 10, u: 'g', opt: true },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Leg de schnitzels een voor een tussen twee vellen bakpapier of in een opengeknipte diepvrieszak. Sla ze met een vleeshamer of de bodem van een steelpan gelijkmatig plat tot 4 à 5 mm dik. Bestrooi ze met zout en peper.' },
    { t: 'Zet drie diepe borden klaar: één met bloem, één met de eieren losgeklopt met de melk en één met paneermeel. Haal elke schnitzel door de bloem (klop het teveel eraf), dan door het ei en dan door het paneermeel. Druk het paneermeel niet aan: zo krijg je dat golvende korstje. Paneer pas vlak voor het bakken.' },
    { t: 'Verhit olie en boter in de koekenpan op middelhoog vuur, tot het schuim van de boter wegtrekt en een broodkruimel meteen sist. Er moet ongeveer 1 cm vet in de pan staan.', m: 'koekenpan' },
    { t: 'Bak de schnitzels één of twee tegelijk 2 à 3 minuten per kant goudbruin. Beweeg de pan zachtjes heen en weer en schep het hete vet met een lepel over de bovenkant: dan gaat het korstje bollen. Laat ze kort uitlekken op keukenpapier.', m: 'koekenpan', min: 5 },
    { t: 'Verwarm de airfryer voor op 200 °C. Bestrijk of besproei de schnitzels aan beide kanten met 2 el olie en leg ze naast elkaar in de mand. Bak 8 à 10 minuten tot ze goudbruin zijn en keer ze halverwege. Smelt de boter en sprenkel die er na het bakken over.', m: 'airfryer', min: 9 },
    { t: 'Serveer de schnitzels meteen met citroenpartjes en eventueel wat peterselie. Lekker met kartoffelsalat, friet of gebakken aardappeltjes.' }
  ],
  tips: [
    'In Oostenrijk eet je schnitzel met Kartoffelsalat (staat ook in dit hoofdstuk) en een lepel vossenbessencompote.',
    'Een echte Wiener schnitzel is van kalfsvlees. Van varkensvlees heet hij officieel Schnitzel Wiener Art, en zo eten de meeste Oostenrijkers hem thuis ook.'
  ],
  alt: [
    'Jägerschnitzel: laat de citroen weg en schep er champignonsaus over.'
  ]
},
{
  id: 'kipschnitzel', variantVan: 'wiener-schnitzel', variant: 'Kip', naam: 'Kipschnitzel', ook: ['schnitzel van kip', 'kip schnitzel', 'gepaneerde kip'],
  intro: 'Platgeslagen kipfilet in een krokant, golvend jasje van paneermeel, gebakken in boter en olie. Met een partje citroen, zoals de Wiener schnitzel.',
  vervang: {
    schnitzel: { n: 'kipfilet', p: 'kipfilets', q: 2, u: 'st', x: 'grote, ca. 300 g per stuk' }
  },
  stappen: [
    { t: 'Snijd elke kipfilet horizontaal door tot twee dunne lapjes. Leg ze een voor een tussen twee vellen bakpapier of in een opengeknipte diepvrieszak en sla ze gelijkmatig plat tot 5 mm dik. Bestrooi ze met zout en peper.' },
    { t: 'Zet drie diepe borden klaar: één met bloem, één met de eieren losgeklopt met de melk en één met paneermeel. Haal elke schnitzel door de bloem (klop het teveel eraf), dan door het ei en dan door het paneermeel. Druk het paneermeel niet aan: zo krijg je dat golvende korstje. Paneer pas vlak voor het bakken.' },
    { t: 'Verhit olie en boter in de koekenpan op middelhoog vuur, tot het schuim van de boter wegtrekt en een broodkruimel meteen sist. Er moet ongeveer 1 cm vet in de pan staan.', m: 'koekenpan' },
    { t: 'Bak de schnitzels één of twee tegelijk 3 minuten per kant goudbruin en gaar. Schep het hete vet met een lepel over de bovenkant, dan gaat het korstje bollen. Laat ze kort uitlekken op keukenpapier.', m: 'koekenpan', min: 6 },
    { t: 'Verwarm de airfryer voor op 200 °C. Bestrijk of besproei de schnitzels aan beide kanten met 2 el olie en leg ze naast elkaar in de mand. Bak 10 à 12 minuten tot ze goudbruin en gaar zijn en keer ze halverwege. Smelt de boter en sprenkel die er na het bakken over.', m: 'airfryer', min: 11 },
    { t: 'Serveer de schnitzels meteen met citroenpartjes en eventueel wat peterselie. Lekker met kartoffelsalat, friet of gebakken aardappeltjes.' }
  ],
  tips: ['Kip moet helemaal gaar zijn: snijd de dikste in, hij mag vanbinnen niet meer roze zijn. Door het platslaan gaat dat snel en blijft hij sappig.', 'In Oostenrijk heet gepaneerde kip Backhendl; daar is het meestal kip met bot uit de frituur.']
},
{
  id: 'apfelstrudel', naam: 'Apfelstrudel', ook: ['strudel', 'appelstrudel'],
  keuken: 'Duits & Oostenrijks', soort: 'Dessert',
  tijd: 30, wacht: '35 min in de oven', pers: 8, niveau: 'Makkelijk', vega: true,
  intro: 'Flinterdunne laagjes knapperig deeg rond zachte appel met kaneel, rozijnen en geroosterd paneermeel. Met filodeeg uit de supermarkt maak je hem zonder gedoe.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan om het paneermeel te roosteren' },
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier, een schone theedoek en een kwast' },
    { tool: 'oven', tekst: 'Oven' }
  ],
  ingr: [
    { kop: 'Vulling' },
    { n: 'appel', p: 'appels', q: 4, u: 'st', x: 'zuur, bijv. goudrenet of elstar (ca. 800 g)' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { n: 'suiker', q: 60, u: 'g' },
    { n: 'kaneel', q: 1, u: 'tl' },
    { n: 'rozijnen', q: 60, u: 'g' },
    { n: 'walnoten', q: 40, u: 'g', x: 'grof gehakt', opt: true },
    { n: 'paneermeel', q: 50, u: 'g' },
    { n: 'boter', q: 100, u: 'g', x: '40 g voor het paneermeel, 60 g gesmolten om te bestrijken' },
    { kop: 'Verder' },
    { n: 'filodeeg', q: 6, u: 'vel', x: 'uit het koelvak, of ontdooid uit de diepvries' },
    { n: 'poedersuiker', q: 1, u: 'el' },
    { n: 'vanillesaus', q: 500, u: 'ml', opt: true, x: 'of geslagen slagroom' }
  ],
  stappen: [
    { t: 'Week de rozijnen 10 minuten in warm water (of rum) en knijp ze uit. Verwarm de oven voor op 190 °C (hetelucht 170 °C).', min: 10 },
    { t: 'Smelt 40 g boter in de koekenpan en rooster het paneermeel 3 à 4 minuten op middelhoog vuur, al roerend, tot het goudbruin is. Laat afkoelen op een bord.', min: 4 },
    { t: 'Schil de appels, verwijder de klokhuizen en snijd ze in dunne plakjes. Meng ze met citroensap, suiker, kaneel, rozijnen en eventueel de walnoten.' },
    { t: 'Smelt de rest van de boter. Leg de theedoek op het werkblad en leg er een vel filodeeg op, met de lange kant naar je toe. Bestrijk het dun met boter, leg het volgende vel erop en herhaal tot alle 6 vellen op elkaar liggen.' },
    { t: 'Strooi het paneermeel over de onderste helft van het deeg en schep de appel erop in een dikke strook, met 5 cm rand aan de zijkanten. Vouw de zijkanten naar binnen en rol de strudel met behulp van de theedoek strak op. Laat hem met de naad naar onderen op de bakplaat rollen.' },
    { t: 'Bestrijk de strudel met boter en bak hem 35 à 40 minuten in het midden van de oven, tot hij goudbruin en knapperig is. Bestrijk hem halverwege nog een keer met boter.', min: 35 },
    { t: 'Laat de strudel 10 minuten afkoelen, bestuif met poedersuiker en snijd in plakken met een kartelmes. Lekker lauw met vanillesaus of slagroom.', min: 10 }
  ],
  tips: [
    'Echt Oostenrijks strudeldeeg is een elastisch deeg van bloem, water en olie, dat je over de ruggen van je handen zo dun uittrekt dat je er een krant door kunt lezen. Filodeeg geeft bijna hetzelfde knapperige resultaat met een fractie van de moeite.',
    'Filodeeg droogt snel uit en breekt dan. Houd de vellen die je nog niet gebruikt onder een vochtige theedoek.'
  ],
  alt: [
    'Met peer: vervang de helft van de appels door stevige peren en de rozijnen door gehakte walnoten.',
    'Geen filodeeg? Gebruik 1 rol bladerdeeg en bak de strudel 30 minuten op 200 °C. Hij wordt dan bladeriger en minder knapperig.'
  ]
},
{
  id: 'kaiserschmarrn', naam: 'Kaiserschmarrn', ook: ['schmarrn'],
  keuken: 'Duits & Oostenrijks', soort: 'Dessert',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Een dikke, luchtige pannenkoek die je in de pan in stukken scheurt en laat karamelliseren met poedersuiker. Het lievelingsdessert van keizer Franz Joseph, met appelmoes of pruimencompote.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan van 26 à 28 cm met deksel, antiaanbak of goed ingevet' },
    { tool: 'mixer', tekst: 'Handmixer om de eiwitten stijf te kloppen', of: 'Met een garde lukt het ook, het kost alleen meer armkracht.' }
  ],
  ingr: [
    { n: 'ei', p: 'eieren', q: 4, u: 'st', x: 'gesplitst' },
    { n: 'bloem', q: 125, u: 'g' },
    { n: 'melk', q: 250, u: 'ml' },
    { n: 'suiker', q: 30, u: 'g' },
    { n: 'vanillesuiker', q: 8, u: 'g' },
    { n: 'zout', q: 1, u: 'snuf' },
    { n: 'rozijnen', q: 40, u: 'g' },
    { n: 'boter', q: 40, u: 'g' },
    { n: 'poedersuiker', q: 3, u: 'el', x: '1 el om te karamelliseren, de rest om te bestuiven' },
    { kop: 'Erbij' },
    { n: 'appelmoes', q: 400, u: 'g', x: 'of pruimencompote' }
  ],
  stappen: [
    { t: 'Week de rozijnen 10 minuten in warm water (of rum) en dep ze droog.', min: 10 },
    { t: 'Klop de eidooiers met melk, bloem, vanillesuiker en zout tot een glad beslag zonder klontjes.' },
    { t: 'Klop de eiwitten in een schone, vetvrije kom met de suiker stijf, tot er pieken blijven staan. Spatel ze in twee keer luchtig door het beslag.' },
    { t: 'Smelt 20 g boter in de koekenpan op middelhoog vuur. Giet het beslag erin en strooi de rozijnen erover. Zet het vuur middellaag, leg de deksel op de pan en bak 5 minuten, tot de onderkant goudbruin is en de bovenkant bijna gestold.', min: 5 },
    { t: 'Verdeel de pannenkoek met de spatel in vieren en keer elk kwart om. Bak nog 2 à 3 minuten zonder deksel.', min: 3 },
    { t: 'Scheur de pannenkoek met twee spatels of vorken in hapklare stukken. Voeg de rest van de boter en 1 el poedersuiker toe en schep 2 minuten om op middelhoog vuur, tot de stukjes glanzend gekaramelliseerd zijn.', min: 2 },
    { t: 'Bestuif met de rest van de poedersuiker en serveer meteen, met appelmoes of pruimencompote.' }
  ],
  tips: ['Het geheim van een luchtige schmarrn: stijfgeklopt eiwit en een dikke pannenkoek. Van binnen mag hij nog net een beetje smeuïg zijn.'],
  alt: [
    'Keren lastig? Bak de onderkant in een ovenvaste koekenpan en zet hem dan 8 minuten in de oven op 200 °C. Scheur hem daarna in de pan in stukken.',
    'Zonder rozijnen: strooi er geschaafde amandelen over, of schep er bij het karamelliseren 50 g blauwe bessen door.'
  ]
},
{
  id: 'currywurst', naam: 'Currywurst met friet', ook: ['currywurst mit pommes'],
  keuken: 'Duits & Oostenrijks', soort: 'Hoofdgerecht',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Berlijns straatvoer: gebakken braadworst in plakjes onder een warme, zoetzure tomaten-currysaus, bestrooid met kerriepoeder. Met een bak friet erbij.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'kookpan', tekst: 'Steelpan voor de currysaus' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de worst' },
    { tool: 'staafmixer', tekst: 'Staafmixer om de saus glad te pureren', of: 'Geen staafmixer? Snipper de ui heel fijn en laat de saus zoals hij is: iets grover, net zo lekker.' },
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier voor de friet', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer voor de friet; bij een kleine mand in twee porties', m: 'airfryer' }
  ],
  ingr: [
    { n: 'braadworst', p: 'braadworsten', q: 4, u: 'st', x: 'ca. 125 g per stuk, of bratwurst' },
    { n: 'diepvriesfriet', q: 750, u: 'g', x: 'ovenfriet, of zelfgemaakt zoals bij Steak frites' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { kop: 'Currysaus' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'fijngesnipperd' },
    { n: 'kerriepoeder', q: 2, u: 'el', x: 'plus extra om te bestrooien' },
    { n: 'paprikapoeder', q: 1, u: 'tl' },
    { n: 'tomatenpuree', q: 1, u: 'el' },
    { n: 'passata', q: 500, u: 'ml' },
    { n: 'ketchup', q: 100, u: 'ml' },
    { n: 'appelazijn', q: 2, u: 'el' },
    { n: 'bruine suiker', q: 1, u: 'el' },
    { n: 'worcestershiresaus', q: 1, u: 'tl', opt: true },
    { n: 'water', q: 100, u: 'ml' },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Verwarm de oven voor op 220 °C en bak de friet in één laag op de bakplaat volgens de verpakking, meestal 20 à 25 minuten. Keer halverwege.', m: 'oven', min: 22 },
    { t: 'Bak de friet in de airfryer op 200 °C in 15 à 18 minuten goudbruin en krokant. Schud de mand een paar keer.', m: 'airfryer', min: 16 },
    { t: 'Verhit 1 el olie in de steelpan en fruit de ui 5 minuten op middelhoog vuur. Bak kerriepoeder, paprikapoeder en tomatenpuree 1 minuut mee tot het gaat geuren.', min: 6 },
    { t: 'Voeg passata, ketchup, azijn, suiker, worcestershiresaus en het water toe. Laat 12 minuten zachtjes koken met de deksel op een kier, en roer af en toe.', min: 12 },
    { t: 'Bak intussen de worsten in de rest van de olie in de koekenpan 10 à 12 minuten op middelhoog vuur, tot ze rondom bruin en gaar zijn.', min: 11 },
    { t: 'Pureer de saus glad met de staafmixer en breng op smaak met zout. Is hij te dik, voeg dan 2 el water toe.' },
    { t: 'Snijd de worsten schuin in plakjes van 1½ cm. Schep de saus erover, bestrooi met een beetje kerriepoeder en serveer met de friet en eventueel mayonaise.' }
  ],
  tips: [
    'Maak gerust een dubbele portie saus: hij blijft een paar dagen goed in de koelkast en is ook lekker bij een frikandel of kipnuggets.',
    'In Berlijn eet je currywurst staand, met een plastic prikkertje uit een kartonnen bakje. Neem je er friet met ketchup én mayonaise bij, dan bestel je Pommes rot-weiß.'
  ],
  alt: [
    'Pittiger: gebruik hete kerriepoeder of roer een snuf cayennepeper of een theelepel sambal door de saus.',
    'Vegetarisch: gebruik vegetarische braadworsten en bak ze volgens de verpakking.'
  ]
},
{
  id: 'kartoffelsalat', naam: 'Kartoffelsalat', ook: ['duitse aardappelsalade', 'aardappelsalade'],
  keuken: 'Duits & Oostenrijks', soort: 'Salade & bijgerecht',
  tijd: 25, wacht: '30 min laten intrekken', pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Zuid-Duitse aardappelsalade zonder mayonaise: warme plakjes aardappel die een hete bouillon met azijn opzuigen, met ui, augurk en bieslook. Fris, smeuïg en lauw op zijn best.',
  gerei: [
    { tool: 'kookpan', tekst: 'Kookpan voor de aardappelen' },
    { tool: 'kookpan', tekst: 'Steelpan voor de bouillon' }
  ],
  ingr: [
    { n: 'vastkokende aardappelen', q: 800, u: 'g', x: 'ongeschild (je pelt ze na het koken), liefst kleine, bijv. nicola of opperdoezer' },
    { n: 'groentebouillon', q: 200, u: 'ml', x: 'of runderbouillon, zoals in Zwaben' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'heel fijn gesnipperd' },
    { n: 'azijn', q: 4, u: 'el', x: 'witte wijnazijn of appelazijn' },
    { n: 'mosterd', q: 1, u: 'tl' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'zonnebloemolie', q: 4, u: 'el' },
    { n: 'augurk', p: 'augurken', q: 3, u: 'st', x: 'in kleine blokjes' },
    { n: 'bieslook', q: 3, u: 'el', x: 'fijngesneden' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Kook de aardappelen met schil in water met zout in 20 à 25 minuten gaar, afhankelijk van de grootte.', min: 22 },
    { t: 'Giet ze af en laat 5 minuten uitdampen. Pel ze terwijl ze nog warm zijn (prik ze op een vork, dan verbrand je je vingers niet) en snijd ze in plakjes van 3 à 4 mm in een grote kom.', min: 5 },
    { t: 'Breng intussen de bouillon met de ui aan de kook in de steelpan en laat 2 minuten zachtjes koken. Roer azijn, mosterd, suiker, zout en peper erdoor.', min: 2 },
    { t: 'Giet de hete bouillon over de warme aardappelen en schep voorzichtig om. Laat 30 minuten intrekken en schep af en toe om: de aardappelen zuigen het vocht op en worden smeuïg.', min: 30 },
    { t: 'Schep de olie, augurk en bieslook erdoor. Proef: hij mag flink zuur en hartig zijn. Serveer lauw of op kamertemperatuur, niet koud uit de koelkast.' }
  ],
  tips: ['Hoort het glanzend en een beetje nat te zijn? Ja: in Zwaben noemen ze een goede Kartoffelsalat "schlonzig". Te droog? Schep er 2 el warme bouillon door.'],
  alt: [
    'Noord-Duitse variant met mayonaise: laat de aardappelen helemaal afkoelen en meng ze met 150 g mayonaise, 2 el augurkennat, augurk, ui en 2 hardgekookte eieren in blokjes.',
    'Beierse variant: bak 100 g spekblokjes uit en schep ze met het vet door de salade in plaats van de olie.'
  ],
  bij: ['wiener-schnitzel', 'currywurst']
}
);
