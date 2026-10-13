/* Indiaas, Mexicaans, Japans, Koreaans */
RECEPTEN.push(
{
  id: 'butter-chicken', naam: 'Butter chicken', keuken: 'Indiaas', soort: 'Hoofdgerecht',
  tijd: 45, wacht: '30 min marineren', pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Gemarineerde kip in een fluweelzachte tomaten-roomsaus met garam masala.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'oven', naam: 'Oven (grill)' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Grote koekenpan om de kip te kleuren', m: 'koekenpan' },
    { tool: 'airfryer', tekst: 'Airfryer om de kip te roosteren', m: 'airfryer' },
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier, oven op grillstand', m: 'oven' },
    { tool: 'hapjespan', tekst: 'Hapjespan of braadpan (26 cm) voor de saus' },
    { tool: 'staafmixer', tekst: 'Staafmixer voor een gladde saus', of: 'Geen staafmixer? Gebruik passata in plaats van tomatenblokjes; dan is de saus al glad.' }
  ],
  ingr: [
    { n: 'kippendijfilet', q: 700, u: 'g', x: 'in stukken' },
    { kop: 'Marinade' },
    { n: 'Griekse yoghurt', q: 125, u: 'g' },
    { n: 'garam masala', q: 2, u: 'tl' },
    { n: 'kurkuma', q: 1, u: 'tl' },
    { n: 'chilipoeder', q: 1, u: 'tl', x: 'mild of Kashmiri' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'geperst' },
    { kop: 'Saus' },
    { n: 'boter', q: 50, u: 'g' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'gember', q: 20, u: 'g', x: 'geraspt' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'tomatenblokjes', q: 1, u: 'blik', x: '400 g' },
    { n: 'kookroom', q: 150, u: 'ml' },
    { n: 'garam masala', q: 1, u: 'tl' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'basmatirijst', q: 300, u: 'g' },
    { n: 'verse koriander', q: 1, u: 'handje', opt: true }
  ],
  stappen: [
    { t: 'Meng de kip met de marinade en laat minimaal 30 minuten, of een nacht, marineren in de koelkast.', min: 30 },
    { t: 'Bak de kip in een scheut olie op hoog vuur in 2 delen in 5 minuten bruin. Hij hoeft nog niet helemaal gaar.', m: 'koekenpan', min: 5 },
    { t: 'Bak de kip in de airfryer 12 minuten op 200 °C tot de randjes geblakerd zijn.', m: 'airfryer', min: 12 },
    { t: 'Leg de kip op de bakplaat en gril 10 à 12 minuten bovenin de oven tot de randjes geblakerd zijn.', m: 'oven', min: 11 },
    { t: 'Kook de rijst volgens de verpakking.', min: 12 },
    { t: 'Smelt de boter in de hapjespan. Fruit de ui 6 minuten zacht. Bak gember en knoflook 1 minuut mee.', min: 6 },
    { t: 'Voeg tomaten, garam masala en suiker toe en laat 10 minuten inkoken. Pureer met de staafmixer tot een gladde saus.', min: 10 },
    { t: 'Roer de room erdoor, voeg de kip toe en laat 5 minuten zachtjes garen. Breng op smaak met zout en serveer met rijst en koriander.', min: 5 }
  ],
  tips: ['Een eetlepel gedroogde fenegriekblaadjes (kasoori methi) geeft de echte restaurantsmaak.'],
  alt: ['Geen room? Gebruik kokosmelk; dan is het gerecht ook lactosevrij als je olie gebruikt in plaats van boter.']
},
{
  id: 'chana-masala', naam: 'Chana masala', keuken: 'Indiaas', soort: 'Hoofdgerecht',
  tijd: 30, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Kruidige kikkererwtencurry uit Noord-India. Volledig plantaardig en goedkoop.',
  gerei: [ { tool: 'hapjespan', tekst: 'Hapjespan of braadpan (26 cm) met deksel' } ],
  ingr: [
    { n: 'kikkererwten', q: 2, u: 'blik', x: 'à 400 g, uitgelekt' },
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'fijngesnipperd' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'gember', q: 20, u: 'g', x: 'geraspt' },
    { n: 'groene peper', p: 'groene pepers', q: 1, u: 'st' },
    { n: 'tomatenblokjes', q: 1, u: 'blik', x: '400 g' },
    { n: 'komijnzaad', q: 1, u: 'tl' },
    { n: 'garam masala', q: 2, u: 'tl' },
    { n: 'kurkuma', q: 1, u: 'tl' },
    { n: 'gemalen koriander', q: 2, u: 'tl' },
    { n: 'zonnebloemolie', q: 3, u: 'el' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { n: 'verse koriander', q: 1, u: 'handje' }
  ],
  stappen: [
    { t: 'Verhit de olie in de hapjespan. Bak het komijnzaad 30 seconden tot het geurt.' },
    { t: 'Voeg de ui toe en bak 10 minuten op middelhoog vuur tot hij goudbruin is. Neem hier de tijd voor: dit geeft de smaak.', min: 10 },
    { t: 'Bak knoflook, gember, peper en de gemalen kruiden 1 minuut mee.' },
    { t: 'Voeg de tomaten toe en kook 5 minuten tot de olie zich aan de rand afscheidt.', min: 5 },
    { t: 'Voeg kikkererwten en 150 ml water toe. Laat 10 minuten pruttelen. Prak een paar kikkererwten fijn voor een dikkere saus.', min: 10 },
    { t: 'Breng op smaak met zout en citroensap. Serveer met koriander, rijst of naanbrood.' }
  ],
  tips: ['Een lepel yoghurt erover maakt hem milder (dan niet meer vegan).'],
  alt: ['Geen verse peper? Gebruik ½ tl chilivlokken of cayennepeper.']
},
{
  id: 'dal', naam: 'Rode linzen dal', keuken: 'Indiaas', soort: 'Hoofdgerecht',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Troostrijke linzenstoof met kokosmelk en een knetterende kruidenolie (tadka).',
  gerei: [
    { tool: 'kookpan', tekst: 'Kookpan van 3 liter met dikke bodem' },
    { tool: 'koekenpan', tekst: 'Kleine koekenpan voor de tadka' }
  ],
  ingr: [
    { n: 'rode linzen', q: 250, u: 'g', x: 'gewassen' },
    { n: 'water', q: 800, u: 'ml' },
    { n: 'kokosmelk', q: 200, u: 'ml' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'gember', q: 15, u: 'g' },
    { n: 'kurkuma', q: 1, u: 'tl' },
    { n: 'tomaat', p: 'tomaten', q: 2, u: 'st', x: 'in blokjes' },
    { n: 'spinazie', q: 100, u: 'g', opt: true },
    { kop: 'Tadka' },
    { n: 'zonnebloemolie', q: 3, u: 'el' },
    { n: 'mosterdzaad', q: 1, u: 'tl', opt: true },
    { n: 'komijnzaad', q: 1, u: 'tl' },
    { n: 'chilivlokken', q: 0.5, u: 'tl' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' }
  ],
  stappen: [
    { t: 'Breng linzen, water en kurkuma aan de kook. Schep het schuim eraf.' },
    { t: 'Voeg ui, knoflook, gember en tomaat toe en laat 20 minuten zachtjes koken tot de linzen uit elkaar vallen. Roer regelmatig.', min: 20 },
    { t: 'Roer de kokosmelk en eventueel de spinazie erdoor. Breng op smaak met zout.' },
    { t: 'Tadka: verhit de olie in de kleine koekenpan. Bak mosterdzaad, komijn en chilivlokken 30 à 60 seconden tot het zaad begint te knetteren.' },
    { t: 'Giet de hete kruidenolie over de dal en besprenkel met citroensap. Serveer met rijst of naan.' }
  ],
  tips: ['Dal wordt dikker bij afkoelen. Voeg bij het opwarmen een scheut water toe.'],
  alt: ['Geen kokosmelk? Laat hem weg of roer er een klontje boter door.']
},
{
  id: 'chili-con-carne', naam: 'Chili con carne', keuken: 'Mexicaans', soort: 'Hoofdgerecht',
  tijd: 50, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Stevige chili met bonen, mais en een vleugje chocolade voor diepte.',
  methodes: [ { id: 'braadpan', naam: 'Braadpan' }, { id: 'slowcooker', naam: 'Slowcooker' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Braadpan of hapjespan (26 cm) met deksel' },
    { tool: 'slowcooker', tekst: 'Slowcooker (gehakt eerst in de pan rul bakken)', m: 'slowcooker' }
  ],
  ingr: [
    { n: 'rundergehakt', q: 500, u: 'g' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'kidneybonen', q: 1, u: 'blik', x: '400 g, uitgelekt' },
    { n: 'mais', q: 1, u: 'blik', x: '300 g, uitgelekt' },
    { n: 'tomatenblokjes', q: 1, u: 'blik', x: '400 g' },
    { n: 'tomatenpuree', q: 2, u: 'el' },
    { n: 'komijn', q: 2, u: 'tl' },
    { n: 'gerookt paprikapoeder', q: 2, u: 'tl' },
    { n: 'chilipoeder', q: 1, u: 'tl' },
    { n: 'pure chocolade', q: 15, u: 'g', opt: true },
    { n: 'zure room', q: 125, u: 'ml', x: 'om te serveren' }
  ],
  stappen: [
    { t: 'Bak het gehakt in een scheut olie op hoog vuur rul en bruin in de braadpan. Voeg ui, paprika en knoflook toe en bak 5 minuten.', min: 8 },
    { t: 'Bak tomatenpuree en specerijen 1 minuut mee.' },
    { t: 'Voeg tomaten, bonen, mais en 150 ml water toe. Laat met de deksel op een kier 30 minuten zachtjes stoven.', m: 'braadpan', min: 30 },
    { t: 'Doe alles over in de slowcooker, zonder extra water. Gaar 6 uur op LOW of 3 uur op HIGH.', m: 'slowcooker', min: 180 },
    { t: 'Roer de chocolade erdoor tot hij gesmolten is. Breng op smaak met zout. Serveer met rijst of tortillachips en een schep zure room.' }
  ],
  tips: ['Chili is de dag erna nog lekkerder en is prima in te vriezen.'],
  alt: ['Vegetarisch? Vervang het gehakt door 1 extra blik zwarte bonen en 150 g rode linzen met 200 ml extra water.']
},
{
  id: 'kip-fajitas', naam: 'Kip fajitas', keuken: 'Mexicaans', soort: 'Hoofdgerecht',
  tijd: 30, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Sissende reepjes kip met paprika en ui in warme tortilla\'s, met guacamole.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'oven', naam: 'Oven (plaatgerecht)' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Grote koekenpan of grillpan, liefst gietijzer', m: 'koekenpan' },
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer (bak in 2 rondes bij een kleine mand)', m: 'airfryer' }
  ],
  ingr: [
    { n: 'kipfilet', q: 500, u: 'g', x: 'in reepjes' },
    { n: 'paprika', p: 'paprika\'s', q: 3, u: 'st', x: 'verschillende kleuren, in reepjes' },
    { n: 'rode ui', p: 'rode uien', q: 1, u: 'st', x: 'in partjes' },
    { n: 'fajitakruiden', q: 2, u: 'el', x: 'of 1 tl komijn, 1 tl paprikapoeder, ½ tl chili, ½ tl knoflookpoeder' },
    { n: 'olijfolie', q: 2, u: 'el' },
    { n: 'tortilla\'s', q: 8, u: 'st' },
    { kop: 'Guacamole' },
    { n: 'avocado', p: 'avocado\'s', q: 2, u: 'st', x: 'rijp' },
    { n: 'limoen', p: 'limoenen', q: 1, u: 'st' },
    { n: 'tomaat', p: 'tomaten', q: 1, u: 'st', x: 'in kleine blokjes' },
    { n: 'verse koriander', q: 1, u: 'handje', opt: true }
  ],
  stappen: [
    { t: 'Meng kip, paprika en ui met de olie en de kruiden.' },
    { t: 'Verhit de koekenpan op hoog vuur. Bak de kip 5 minuten tot hij gaar is. Haal eruit, bak dan de groenten 4 minuten zodat ze nog knapperig zijn. Meng alles.', m: 'koekenpan', min: 9 },
    { t: 'Spreid alles uit op de bakplaat en rooster 20 minuten in een voorverwarmde oven op 220 °C. Schep halverwege om.', m: 'oven', min: 20 },
    { t: 'Bak alles 12 à 14 minuten in de airfryer op 200 °C. Schud de mand halverwege.', m: 'airfryer', min: 13 },
    { t: 'Prak de avocado met limoensap en zout. Roer tomaat en koriander erdoor.' },
    { t: 'Verwarm de tortilla\'s 20 seconden per kant in een droge koekenpan, of 30 seconden in de magnetron onder een vochtige theedoek.' },
    { t: 'Vul de tortilla\'s met kip, groenten en guacamole.' }
  ],
  tips: ['Zet alles op tafel en laat iedereen zijn eigen fajita vullen.'],
  alt: ['Vegetarisch? Vervang de kip door 2 blikken zwarte bonen of reepjes portobello.']
},
{
  id: 'quesadillas', naam: 'Quesadilla\'s met bonen en kaas', keuken: 'Mexicaans', soort: 'Ontbijt & lunch',
  tijd: 20, pers: 2, niveau: 'Makkelijk', vega: true,
  intro: 'Knapperige gevulde tortilla\'s met gesmolten kaas, bonen en mais. Binnen 20 minuten op tafel.',
  methodes: [ { id: 'contactgrill', naam: 'Contactgrill' }, { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'oven', naam: 'Oven' } ],
  gerei: [
    { tool: 'contactgrill', tekst: 'Contactgrill, werkt hier als tosti-ijzer', m: 'contactgrill' },
    { tool: 'koekenpan', tekst: 'Koekenpan (28 cm), zonder olie', m: 'koekenpan' },
    { tool: 'airfryer', tekst: 'Airfryer, quesadilla dichtgeklapt', m: 'airfryer' },
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier', m: 'oven' }
  ],
  ingr: [
    { n: 'tortilla\'s', q: 4, u: 'st', x: 'groot' },
    { n: 'geraspte kaas', q: 150, u: 'g', x: 'cheddar of belegen' },
    { n: 'zwarte bonen', q: 1, u: 'blik', x: '400 g, uitgelekt' },
    { n: 'mais', q: 100, u: 'g' },
    { n: 'lente-ui', p: 'lente-uien', q: 2, u: 'st' },
    { n: 'jalapeño', p: 'jalapeños', q: 1, u: 'st', opt: true },
    { n: 'salsa', q: 4, u: 'el', x: 'om te dippen' }
  ],
  stappen: [
    { t: 'Prak de bonen grof met wat zout. Meng met mais, lente-ui en jalapeño.' },
    { t: 'Besmeer de helft van elke tortilla met bonen, strooi er kaas over en klap dicht.' },
    { t: 'Leg de dichtgeklapte quesadilla\'s op de voorverwarmde contactgrill en sluit de deksel voorzichtig. Grill 3 à 4 minuten tot ze goudbruin zijn, met grillstrepen, en de kaas gesmolten is.', m: 'contactgrill', min: 4 },
    { t: 'Bak de quesadilla\'s in de droge koekenpan op middelhoog vuur 2 à 3 minuten per kant tot ze goudbruin zijn en de kaas gesmolten is.', m: 'koekenpan', min: 5 },
    { t: 'Bak de quesadilla\'s in de airfryer 6 minuten op 190 °C. Leg er eventueel een metalen rekje op, zodat ze niet openwaaien.', m: 'airfryer', min: 6 },
    { t: 'Bak 10 minuten in een voorverwarmde oven op 220 °C. Keer halverwege.', m: 'oven', min: 10 },
    { t: 'Snijd in punten en serveer met salsa en eventueel zure room.' }
  ],
  tips: ['Restjes kip of chili zijn een prima vulling.'],
  alt: ['Geen zwarte bonen? Kidneybonen of bruine bonen werken ook.']
},
{
  id: 'chicken-katsu', naam: 'Chicken katsu curry', keuken: 'Japans', soort: 'Hoofdgerecht',
  tijd: 45, pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Krokant gepaneerde kip met een milde, zoete Japanse currysaus en rijst.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'oven', naam: 'Oven' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan met hoge rand (28 cm) en een laagje olie van 1 cm', m: 'koekenpan' },
    { tool: 'airfryer', tekst: 'Airfryer', m: 'airfryer' },
    { tool: 'bakplaat', tekst: 'Bakplaat met rooster', m: 'oven' },
    { tool: 'kookpan', tekst: 'Steelpan voor de currysaus en een pan voor de rijst' }
  ],
  ingr: [
    { n: 'kipfilet', q: 4, u: 'st', x: 'à ca. 150 g, platgeslagen' },
    { n: 'bloem', q: 50, u: 'g' },
    { n: 'ei', p: 'eieren', q: 2, u: 'st', x: 'losgeklopt' },
    { n: 'panko', q: 100, u: 'g' },
    { n: 'zonnebloemolie', q: 150, u: 'ml', x: 'voor de koekenpan; 1 el voor airfryer of oven' },
    { n: 'rijst', q: 300, u: 'g' },
    { kop: 'Currysaus' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'wortel', p: 'wortels', q: 1, u: 'st' },
    { n: 'kerriepoeder', q: 2, u: 'el', x: 'mild' },
    { n: 'bloem', q: 2, u: 'el' },
    { n: 'kippenbouillon', q: 500, u: 'ml' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'honing', q: 1, u: 'el' },
    { n: 'appel', p: 'appels', q: 0.5, u: 'st', x: 'geraspt' }
  ],
  stappen: [
    { t: 'Saus: fruit ui en wortel 5 minuten in wat olie in de steelpan. Roer kerrie en bloem erdoor en bak 1 minuut.', min: 6 },
    { t: 'Klop de bouillon erdoor. Voeg sojasaus, honing en appel toe en laat 15 minuten zachtjes koken. Pureer eventueel glad.', min: 15 },
    { t: 'Kook de rijst volgens de verpakking.', min: 12 },
    { t: 'Haal de kip door bloem met zout, dan door ei, en druk hem stevig in de panko.' },
    { t: 'Verhit 1 cm olie in de koekenpan (170 °C: een broodkruim sist meteen). Bak de kip 4 à 5 minuten per kant goudbruin. Laat uitlekken op keukenpapier.', m: 'koekenpan', min: 10 },
    { t: 'Besprenkel de gepaneerde kip met olie. Bak 12 à 14 minuten in de airfryer op 200 °C. Keer halverwege.', m: 'airfryer', min: 13 },
    { t: 'Leg de kip op het rooster, besprenkel met olie en bak 20 minuten in een voorverwarmde oven op 220 °C. Keer halverwege.', m: 'oven', min: 20 },
    { t: 'Snijd de kip in reepjes en serveer op rijst met de saus ernaast.' }
  ],
  tips: ['Kerntemperatuur van kip moet 74 °C zijn. Bij twijfel: snijd de dikste in en kijk of hij niet meer roze is.'],
  alt: ['Geen panko? Gewoon paneermeel of fijngemalen cornflakes werkt ook.']
},
{
  id: 'bibimbap', naam: 'Bibimbap', keuken: 'Koreaans', soort: 'Hoofdgerecht',
  tijd: 40, pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Rijstkom met gemarineerd rundvlees, groenten, een gebakken ei en pittige gochujangsaus.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Grote koekenpan voor het vlees en de groenten' },
    { tool: 'koekenpan', tekst: 'Antiaanbak koekenpan voor de eieren' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'sushirijst', q: 300, u: 'g', x: 'of jasmijnrijst' },
    { n: 'rundergehakt', q: 400, u: 'g', x: 'of dunne reepjes biefstuk' },
    { n: 'sojasaus', q: 3, u: 'el' },
    { n: 'sesamolie', q: 2, u: 'el' },
    { n: 'bruine suiker', q: 1, u: 'el' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'spinazie', q: 200, u: 'g' },
    { n: 'wortel', p: 'wortels', q: 2, u: 'st', x: 'julienne' },
    { n: 'komkommer', p: 'komkommers', q: 1, u: 'st', x: 'in reepjes' },
    { n: 'taugé', q: 150, u: 'g' },
    { n: 'ei', p: 'eieren', q: 4, u: 'st' },
    { n: 'kimchi', q: 150, u: 'g', opt: true },
    { kop: 'Saus' },
    { n: 'gochujang', q: 3, u: 'el', x: 'of sriracha' },
    { n: 'sesamolie', q: 1, u: 'el' },
    { n: 'honing', q: 1, u: 'el' },
    { n: 'rijstazijn', q: 1, u: 'el' }
  ],
  stappen: [
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Meng sojasaus, 1 el sesamolie, suiker en knoflook. Bak het gehakt rul in de koekenpan, voeg het mengsel toe en bak tot alles karamelliseert, ca. 5 minuten.', min: 7 },
    { t: 'Bak de groenten per soort kort in dezelfde pan met een drupje sesamolie: spinazie 1 minuut, wortel en taugé 2 minuten. Zout erover.' },
    { t: 'Roer de ingrediënten voor de saus door elkaar.' },
    { t: 'Bak 4 spiegeleieren met een vloeibare dooier.', min: 4 },
    { t: 'Verdeel de rijst over kommen. Leg vlees, groenten, komkommer en kimchi in vakjes erop, met het ei in het midden. Meng alles door elkaar met de saus.' }
  ],
  tips: ['Dolsot-stijl: bak de rijst eerst 5 minuten in een gietijzeren pan met sesamolie voor een krokante korst.'],
  alt: ['Vegetarisch? Gebruik gebakken tofu of shiitake in plaats van gehakt.']
}
);
