/* Nederlands */
RECEPTEN.push(
{
  id: 'hutspot-rookworst', naam: 'Hutspot met rookworst', ook: ['stamppot'], keuken: 'Nederlands', soort: 'Hoofdgerecht',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'De klassieker van aardappel, wortel en ui, met een kuiltje jus en een flinke rookworst.',
  gerei: [
    { tool: 'kookpan', tekst: 'Grote kookpan (5 liter) met deksel' },
    { tool: 'kookpan', tekst: 'Kleine pan voor de rookworst' },
    { tool: 'staafmixer', tekst: 'Stamper', of: 'Geen stamper? Een vork of garde werkt ook. Gebruik geen staafmixer, dan wordt het taai.' }
  ],
  ingr: [
    { n: 'kruimige aardappelen', q: 1000, u: 'g', x: 'geschild, in stukken' },
    { n: 'winterpeen', q: 750, u: 'g', x: 'of waspeen, in blokjes' },
    { n: 'ui', p: 'uien', q: 3, u: 'st', x: 'in ringen' },
    { n: 'rookworst', p: 'rookworsten', q: 1, u: 'st', x: 'ca. 275 g' },
    { n: 'melk', q: 100, u: 'ml', x: 'warm' },
    { n: 'boter', q: 40, u: 'g' },
    { n: 'nootmuskaat', q: 1, u: 'snuf' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Doe aardappelen, wortel en ui in de grote pan. Voeg water toe tot alles net onder staat, met een theelepel zout.' },
    { t: 'Breng aan de kook en kook met de deksel op de pan in 20 minuten gaar.', min: 20 },
    { t: 'Verwarm intussen de rookworst 15 minuten in de kleine pan in heet water dat niet kookt, anders barst het vel.', min: 15 },
    { t: 'Giet de groenten af en vang een kopje kookvocht op.' },
    { t: 'Stamp alles grof met boter en warme melk. Een beetje kookvocht maakt het smeuïger. Breng op smaak met nootmuskaat, zout en peper.' },
    { t: 'Serveer met de rookworst in plakken en eventueel een kuiltje jus.' }
  ],
  tips: ['Lekker met een scheutje azijn of een lepel mosterd door de stamppot.'],
  alt: ['Vegetarisch? Gebruik een vegetarische rookworst; de bereiding blijft hetzelfde.']
},
{
  id: 'erwtensoep', naam: 'Erwtensoep', keuken: 'Nederlands', soort: 'Soep',
  tijd: 30, wacht: '2 uur trekken', pers: 6, niveau: 'Makkelijk', vega: false,
  intro: 'Dikke snert waar de lepel in blijft staan. Op de tweede dag is hij nog beter.',
  methodes: [ { id: 'kookpan', naam: 'Soeppan' }, { id: 'slowcooker', naam: 'Slowcooker' } ],
  gerei: [
    { tool: 'kookpan', tekst: 'Grote soeppan (minimaal 5 liter) met dikke bodem en deksel', m: 'kookpan' },
    { tool: 'slowcooker', tekst: 'Slowcooker van minimaal 4,5 liter', m: 'slowcooker' }
  ],
  ingr: [
    { n: 'spliterwten', q: 500, u: 'g', x: 'gewassen' },
    { n: 'water', q: 2000, u: 'ml' },
    { n: 'krabbetjes', q: 500, u: 'g', x: 'of 250 g speklap' },
    { n: 'rookworst', p: 'rookworsten', q: 1, u: 'st' },
    { n: 'knolselderij', q: 300, u: 'g', x: 'in blokjes' },
    { n: 'prei', p: 'preien', q: 1, u: 'st', x: 'in ringen' },
    { n: 'wortel', p: 'wortels', q: 2, u: 'st', x: 'in blokjes' },
    { n: 'aardappel', p: 'aardappelen', q: 2, u: 'st', x: 'kruimig, in blokjes' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'bouillonblokje', p: 'bouillonblokjes', q: 1, u: 'st' },
    { n: 'verse selderij', q: 1, u: 'bos', x: 'blad, fijngesneden' }
  ],
  stappen: [
    { t: 'Doe de spliterwten, het water, de krabbetjes en het bouillonblokje in de soeppan. Breng aan de kook en schep het schuim eraf.', m: 'kookpan', min: 10 },
    { t: 'Laat 1 uur zachtjes trekken met de deksel op een kier. Roer af en toe, de erwten zakken naar de bodem en branden snel aan.', m: 'kookpan', min: 60 },
    { t: 'Voeg alle groenten toe en laat nog 45 minuten zachtjes koken tot de erwten uit elkaar vallen.', m: 'kookpan', min: 45 },
    { t: 'Doe alles behalve de rookworst en het selderijblad in de slowcooker. Gebruik 1,7 liter water in plaats van 2 liter, want er verdampt bijna niets.', m: 'slowcooker' },
    { t: 'Gaar 7 à 8 uur op LOW of 4 uur op HIGH.', m: 'slowcooker', min: 240 },
    { t: 'Haal het vlees eruit, pluk het van de botten en doe het terug in de soep. Leg de rookworst 15 minuten in de soep om te verwarmen.', min: 15 },
    { t: 'Roer het selderijblad erdoor, breng op smaak met zout en peper. Te dik? Voeg wat heet water toe.' }
  ],
  tips: ['Erwtensoep wordt bij afkoelen erg dik. Verdun bij het opwarmen met een scheut water.'],
  alt: ['Vegetarisch? Laat het vlees weg, gebruik groentebouillon en een vegetarische rookworst. Een snufje gerookt paprikapoeder geeft de rooksmaak terug.']
},
{
  id: 'boerenkool-stamppot', naam: 'Boerenkoolstamppot', ook: ['boerenkool met worst'], keuken: 'Nederlands', soort: 'Hoofdgerecht',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Winterkost met krokante spekjes en een kuiltje jus. Gezellig én simpel.',
  gerei: [
    { tool: 'kookpan', tekst: 'Grote kookpan (5 liter) met deksel' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de spekjes' }
  ],
  ingr: [
    { n: 'kruimige aardappelen', q: 1000, u: 'g', x: 'geschild, in stukken' },
    { n: 'boerenkool', q: 500, u: 'g', x: 'gesneden, gewassen' },
    { n: 'spekblokjes', q: 150, u: 'g' },
    { n: 'rookworst', p: 'rookworsten', q: 1, u: 'st' },
    { n: 'melk', q: 150, u: 'ml', x: 'warm' },
    { n: 'boter', q: 30, u: 'g' },
    { n: 'mosterd', q: 1, u: 'el', opt: true },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Doe de aardappelen in de pan met water tot ze net onder staan en wat zout. Leg de boerenkool erbovenop. Breng aan de kook.' },
    { t: 'Kook met de deksel op de pan 20 minuten tot de aardappelen gaar zijn. De kool gaart in de stoom.', min: 20 },
    { t: 'Verwarm de rookworst 15 minuten in heet, niet kokend water.', min: 15 },
    { t: 'Bak intussen de spekjes zonder olie in de koekenpan in 6 minuten krokant.', min: 6 },
    { t: 'Giet de aardappelen en kool af. Stamp ze met warme melk, boter en eventueel mosterd. Roer de spekjes erdoor en breng op smaak.' }
  ],
  tips: ['Een schepje piccalilly of zilveruitjes ernaast maakt het af.'],
  alt: ['Vegetarisch? Laat spek en rookworst weg en bak 150 g geblokte belegen kaas of walnoten mee.']
},
{
  id: 'pannenkoeken', naam: 'Hollandse pannenkoeken', keuken: 'Nederlands', soort: 'Ontbijt & lunch',
  tijd: 30, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Dunne, grote pannenkoeken. Naturel met stroop of met spek en kaas.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Pannenkoekenpan of koekenpan (28 cm), bij voorkeur antiaanbak' },
    { tool: 'mixer', tekst: 'Garde', of: 'Een handmixer maakt het beslag sneller klontvrij.' }
  ],
  ingr: [
    { n: 'bloem', q: 250, u: 'g', x: 'of zelfrijzend bakmeel' },
    { n: 'melk', q: 500, u: 'ml' },
    { n: 'ei', p: 'eieren', q: 2, u: 'st' },
    { n: 'zout', q: 1, u: 'snuf' },
    { n: 'boter', q: 40, u: 'g', x: 'om in te bakken' },
    { n: 'stroop', q: 4, u: 'el', x: 'of poedersuiker', opt: true }
  ],
  stappen: [
    { t: 'Doe bloem en zout in een kom en maak een kuiltje. Breek de eieren erin en giet de helft van de melk erbij.' },
    { t: 'Klop vanuit het midden tot een glad, dik beslag. Klop daarna de rest van de melk erdoor. Laat 10 minuten rusten.', min: 10 },
    { t: 'Smelt een klontje boter in de koekenpan op middelhoog vuur.' },
    { t: 'Schep een soeplepel beslag in de pan en draai de pan zodat de bodem dun bedekt is. Bak tot de bovenkant droog is, ongeveer 2 minuten.', min: 2 },
    { t: 'Keer de pannenkoek om en bak de andere kant 1 minuut. Herhaal met de rest van het beslag. Houd ze warm onder een schone theedoek.' }
  ],
  tips: ['Spekpannenkoek: bak eerst 3 plakjes ontbijtspek in de pan en giet het beslag eroverheen.'],
  alt: ['Geen melk in huis? Gebruik half water, half bruisend water. Ook havermelk werkt goed.']
},
{
  id: 'draadjesvlees', naam: 'Draadjesvlees', ook: ['stoofvlees', 'sudderlapjes'], keuken: 'Nederlands', soort: 'Hoofdgerecht',
  tijd: 25, wacht: '3 uur stoven', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Zo mals dat het uit elkaar valt, in een rijke jus met laurier en kruidnagel.',
  methodes: [ { id: 'braadpan', naam: 'Braadpan' }, { id: 'oven', naam: 'Oven' }, { id: 'slowcooker', naam: 'Slowcooker' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Gietijzeren braadpan of stoofpan (24 cm) met zware deksel' },
    { tool: 'slowcooker', tekst: 'Slowcooker (vlees eerst in de braadpan aanbraden)', m: 'slowcooker' }
  ],
  ingr: [
    { n: 'runderlappen', q: 800, u: 'g', x: 'sukadelappen of riblappen' },
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'in halve ringen' },
    { n: 'boter', q: 50, u: 'g' },
    { n: 'bloem', q: 1, u: 'el' },
    { n: 'runderbouillon', q: 400, u: 'ml' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 2, u: 'st' },
    { n: 'kruidnagel', p: 'kruidnagels', q: 3, u: 'st' },
    { n: 'azijn', q: 1, u: 'el' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Dep het vlees droog en bestrooi met zout, peper en de bloem.' },
    { t: 'Laat de boter in de braadpan bruin worden op hoog vuur. Braad het vlees in 2 delen rondom bruin, ca. 3 minuten per kant. Haal het eruit.', min: 6 },
    { t: 'Bak de ui 5 minuten in het braadvet. Doe het vlees terug en voeg bouillon, laurier, kruidnagel en azijn toe.', min: 5 },
    { t: 'Deksel erop en laat 3 uur op het allerlaagste vuur stoven. Draai het vlees elk uur om en voeg wat water toe als het te droog wordt.', m: 'braadpan', min: 180 },
    { t: 'Zet de afgesloten braadpan in een voorverwarmde oven op 150 °C en stoof 3 uur. De oven geeft een gelijkmatige warmte zonder aanbranden.', m: 'oven', min: 180 },
    { t: 'Doe vlees, ui en vocht over in de slowcooker. Gaar 8 uur op LOW of 4 à 5 uur op HIGH.', m: 'slowcooker', min: 300 },
    { t: 'Trek het vlees met twee vorken in draadjes. Laat de jus zo nodig zonder deksel wat inkoken en breng op smaak.' }
  ],
  tips: ['Geef er aardappelpuree en rode kool bij, of maak er een stoofvleessandwich van.'],
  alt: ['Geen braadpan? Een dikke kookpan met goed sluitende deksel werkt ook; zet het vuur dan op de kleinste brander.']
},
{
  id: 'appeltaart', naam: 'Oma\'s appeltaart', ook: ['appelgebak'], keuken: 'Nederlands', soort: 'Dessert',
  tijd: 30, wacht: '1 uur bakken', pers: 10, niveau: 'Gemiddeld', vega: true,
  intro: 'Hoge Hollandse appeltaart met kaneel, rozijnen en een roosterbovenkant.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'bakvorm', tekst: 'Springvorm van 24 cm, ingevet', m: 'oven' },
    { tool: 'bakvorm', tekst: 'Springvorm of cakevorm van 18 à 20 cm die in de mand past. Neem voor 18 cm 2/3 van het recept.', m: 'airfryer' },
    { tool: 'mixer', tekst: 'Handmixer met deeghaken', of: 'Met de hand kneden kan ook prima.' }
  ],
  ingr: [
    { kop: 'Deeg' },
    { n: 'zelfrijzend bakmeel', q: 300, u: 'g' },
    { n: 'roomboter', q: 200, u: 'g', x: 'koud, in blokjes' },
    { n: 'lichtbruine basterdsuiker', q: 150, u: 'g' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st', x: 'losgeklopt' },
    { n: 'zout', q: 1, u: 'snuf' },
    { kop: 'Vulling' },
    { n: 'appels', p: 'appels', q: 1200, u: 'g', x: 'goudrenetten of elstar' },
    { n: 'suiker', q: 50, u: 'g' },
    { n: 'kaneel', q: 2, u: 'tl' },
    { n: 'rozijnen', q: 75, u: 'g', opt: true },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' }
  ],
  stappen: [
    { t: 'Kneed bakmeel, boter, basterdsuiker, zout en 3/4 van het ei kort tot een samenhangend deeg. Laat 15 minuten opstijven in de koelkast.', min: 15 },
    { t: 'Schil de appels, verwijder klokhuizen en snijd ze in blokjes. Meng met suiker, kaneel, rozijnen en citroensap.' },
    { t: 'Verwarm de oven voor op 175 °C (hetelucht 160 °C).', m: 'oven' },
    { t: 'Verwarm de airfryer voor op 150 °C.', m: 'airfryer' },
    { t: 'Bekleed bodem en rand van de vorm met 2/3 van het deeg. Schep de vulling erin en druk aan. Leg repen van de rest van het deeg als rooster erop en bestrijk met de rest van het ei.' },
    { t: 'Bak de taart 60 à 70 minuten onderin de oven tot hij goudbruin is.', m: 'oven', min: 65 },
    { t: 'Bak de taart 40 minuten. Dek hem af met folie als de bovenkant te snel bruin wordt en bak nog 10 à 15 minuten.', m: 'airfryer', min: 55 },
    { t: 'Laat minstens 1 uur afkoelen in de vorm voordat je hem eruit haalt.', min: 60 }
  ],
  tips: ['Prik met een satéprikker in de appels: gaat het makkelijk, dan is de taart klaar.'],
  alt: ['Geen springvorm? Gebruik een ovenschaal en serveer de taart in scheppen, met slagroom of ijs.']
},
{
  id: 'gehaktballen-jus', naam: 'Gehaktballen in jus', ook: ['bal gehakt', 'balletje gehakt'], keuken: 'Nederlands', soort: 'Hoofdgerecht',
  tijd: 50, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Zachte, sappige ballen die langzaam garen in hun eigen jus. Zoals vroeger op zondag.',
  methodes: [ { id: 'braadpan', naam: 'Braadpan' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Braadpan of hapjespan (24 à 26 cm) met deksel' },
    { tool: 'airfryer', tekst: 'Airfryer om de ballen vetarm bruin te bakken', m: 'airfryer' }
  ],
  ingr: [
    { n: 'half-om-half gehakt', q: 600, u: 'g' },
    { n: 'paneermeel', q: 4, u: 'el' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st' },
    { n: 'melk', q: 3, u: 'el' },
    { n: 'mosterd', q: 1, u: 'tl' },
    { n: 'nootmuskaat', q: 1, u: 'snuf' },
    { n: 'boter', q: 75, u: 'g' },
    { n: 'water', q: 250, u: 'ml' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 1, u: 'st' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Meng gehakt, paneermeel, ei, melk, mosterd, nootmuskaat, 1 tl zout en peper. Kneed kort en draai er met natte handen 4 grote ballen van.' },
    { t: 'Laat de boter in de braadpan bruin worden op middelhoog vuur. Bak de ballen rondom bruin in ca. 8 minuten.', m: 'braadpan', min: 8 },
    { t: 'Bak de ballen 10 minuten in de airfryer op 200 °C tot ze rondom bruin zijn. Laat intussen de boter bruin worden in de braadpan en doe de ballen erin.', m: 'airfryer', min: 10 },
    { t: 'Voeg het water en het laurierblad toe. Leg de deksel op de pan en laat 30 minuten zachtjes garen. Keer de ballen halverwege.', min: 30 },
    { t: 'Haal de ballen eruit en laat de jus zo nodig 3 minuten inkoken. Breng op smaak met zout.' }
  ],
  tips: ['Een scheutje sojasaus of een eetlepel ketjap geeft de jus extra kleur en diepte.'],
  alt: ['Geen braadpan? Een koekenpan met hoge rand en deksel werkt ook.']
}
);
