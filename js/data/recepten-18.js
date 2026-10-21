/* Mexicaans (burrito's, taco's, enchiladas, guisado, nacho's, salsa fresca) en Amerikaans (brownies, cheesecake, fried chicken, cookies, barbecuesaus) */
RECEPTEN.push(
{
  id: 'burritos', naam: 'Burrito\'s met kip, rijst en zwarte bonen', gerecht: 'Burrito\'s', variant: 'Kip', ook: ['burrito', 'burritos'],
  keuken: 'Mexicaans', soort: 'Hoofdgerecht',
  tijd: 40, pers: 4, niveau: 'Makkelijk', vega: false, pit: 1,
  intro: 'Een grote tortilla, strak opgerold rond kruidige kip, limoen-korianderrijst, zwarte bonen en kaas, en daarna knapperig dichtgebakken. Een complete maaltijd die je uit de hand eet.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'contactgrill', naam: 'Contactgrill' } ],
  gerei: [
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' },
    { tool: 'koekenpan', tekst: 'Grote koekenpan (28 cm) voor het vlees en de bonen' },
    { tool: 'koekenpan', tekst: 'Dezelfde koekenpan, schoongeveegd, om de burrito\'s dicht te bakken', m: 'koekenpan' },
    { tool: 'contactgrill', tekst: 'Contactgrill, voorverwarmd; werkt hier als paninigrill', m: 'contactgrill' }
  ],
  ingr: [
    { kop: 'Kip' },
    { n: 'kippendijfilet', q: 500, u: 'g', x: 'in reepjes, of kipfilet' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'geperst' },
    { n: 'komijn', q: 1, u: 'tl' },
    { n: 'gerookt paprikapoeder', q: 1, u: 'tl' },
    { n: 'chilipoeder', q: 0.5, u: 'tl' },
    { n: 'gedroogde oregano', q: 0.5, u: 'tl' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { kop: 'Limoen-korianderrijst' },
    { n: 'rijst', q: 200, u: 'g', x: 'langkorrelig' },
    { n: 'limoen', p: 'limoenen', q: 1, u: 'st', x: 'rasp en sap' },
    { n: 'verse koriander', q: 10, u: 'g', x: 'fijngehakt' },
    { kop: 'Vulling' },
    { n: 'tortilla\'s', q: 4, u: 'st', x: 'groot (25 à 30 cm)' },
    { n: 'zwarte bonen', q: 240, u: 'g', x: 'uitgelekt' },
    { n: 'geraspte kaas', q: 150, u: 'g', x: 'cheddar of belegen' },
    { n: 'zure room', q: 125, u: 'ml' },
    { n: 'salsa', q: 4, u: 'el', x: 'of zelfgemaakte salsa fresca' },
    { n: 'ijsbergsla', q: 0.25, u: 'st', x: 'krop, in smalle reepjes' },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Kook de rijst volgens de verpakking met een snuf zout. Schep hem los met een vork en roer de limoenrasp, het sap van een halve limoen en de helft van de koriander erdoor.', min: 12 },
    { t: 'Meng de kip met knoflook, komijn, paprikapoeder, chilipoeder, oregano, 1 el olie en een halve theelepel zout.' },
    { t: 'Verhit de rest van de olie in de koekenpan op middelhoog tot hoog vuur. Bak de kip in 6 à 8 minuten rondom goudbruin en gaar. Knijp de rest van de limoen erover en schep de kip in een kom.', min: 7 },
    { t: 'Doe de bonen met 2 el water en wat zout in dezelfde pan. Warm ze 2 à 3 minuten op en prak ongeveer de helft grof; zo houden ze de vulling bij elkaar.', min: 3 },
    { t: 'Verwarm de tortilla\'s 20 seconden per kant in een droge koekenpan, of 30 seconden in de magnetron onder een vochtige theedoek. Warme tortilla\'s scheuren niet bij het oprollen.' },
    { t: 'Leg op het onderste derde van elke tortilla een strook rijst, bonen, kip, kaas, zure room, salsa en sla. Laat aan de zijkanten 5 cm vrij en doe er niet te veel op.' },
    { t: 'Vouw de onderkant over de vulling en trek hem met je vingers strak naar je toe. Vouw de zijkanten naar binnen en rol verder op tot een stevige rol.' },
    { t: 'Leg de burrito\'s met de naad naar onderen in de droge koekenpan op middelhoog vuur. Bak ze 2 minuten per kant tot ze goudbruin en dicht zijn.', m: 'koekenpan', min: 4 },
    { t: 'Leg de burrito\'s met de naad naar onderen op de voorverwarmde contactgrill en sluit de deksel zonder te drukken. Grill 3 à 4 minuten tot ze goudbruin zijn, met grillstrepen.', m: 'contactgrill', min: 4 },
    { t: 'Snijd de burrito\'s schuin doormidden en serveer met extra salsa.' }
  ],
  tips: ['Burrito\'s zijn goed in te vriezen, zonder sla en zure room. Pak ze strak in folie, ontdooi ze 2 à 3 minuten in de magnetron en bak ze daarna dicht.'],
  alt: ['Burrito bowl: sla de tortilla over en schep rijst, bonen, kip en de toppings naast elkaar in een kom.']
},
{
  id: 'burritos-gehakt', variantVan: 'burritos', variant: 'Gehakt', naam: 'Burrito\'s met gehakt, rijst en zwarte bonen', ook: ['burrito gehakt', 'beef burrito'],
  intro: 'Een grote tortilla, strak opgerold rond gekruid rundergehakt, limoen-korianderrijst, zwarte bonen en kaas, en daarna knapperig dichtgebakken. Stevig en lekker smeuïg.',
  vervang: {
    Kip: { kop: 'Gehakt' },
    kippendijfilet: { n: 'rundergehakt', q: 500, u: 'g' },
    zonnebloemolie: { n: 'zonnebloemolie', q: 1, u: 'el' }
  },
  stappen: [
    { t: 'Kook de rijst volgens de verpakking met een snuf zout. Schep hem los met een vork en roer de limoenrasp, het sap van een halve limoen en de helft van de koriander erdoor.', min: 12 },
    { t: 'Verhit de olie in de koekenpan op hoog vuur. Bak het gehakt in 5 à 6 minuten rul en bruin en schep overtollig vet weg.', min: 6 },
    { t: 'Bak knoflook, komijn, paprikapoeder, chilipoeder, oregano en een halve theelepel zout 1 minuut mee. Voeg 3 el water toe en laat inkoken tot het gehakt smeuïg is. Knijp de rest van de limoen erover en schep het gehakt in een kom.', min: 2 },
    { t: 'Doe de bonen met 2 el water en wat zout in dezelfde pan. Warm ze 2 à 3 minuten op en prak ongeveer de helft grof; zo houden ze de vulling bij elkaar.', min: 3 },
    { t: 'Verwarm de tortilla\'s 20 seconden per kant in een droge koekenpan, of 30 seconden in de magnetron onder een vochtige theedoek. Warme tortilla\'s scheuren niet bij het oprollen.' },
    { t: 'Leg op het onderste derde van elke tortilla een strook rijst, bonen, gehakt, kaas, zure room, salsa en sla. Laat aan de zijkanten 5 cm vrij en doe er niet te veel op.' },
    { t: 'Vouw de onderkant over de vulling en trek hem met je vingers strak naar je toe. Vouw de zijkanten naar binnen en rol verder op tot een stevige rol.' },
    { t: 'Leg de burrito\'s met de naad naar onderen in de droge koekenpan op middelhoog vuur. Bak ze 2 minuten per kant tot ze goudbruin en dicht zijn.', m: 'koekenpan', min: 4 },
    { t: 'Leg de burrito\'s met de naad naar onderen op de voorverwarmde contactgrill en sluit de deksel zonder te drukken. Grill 3 à 4 minuten tot ze goudbruin zijn, met grillstrepen.', m: 'contactgrill', min: 4 },
    { t: 'Snijd de burrito\'s schuin doormidden en serveer met extra salsa.' }
  ],
  alt: ['Burrito bowl: sla de tortilla over en schep rijst, bonen, gehakt en de toppings naast elkaar in een kom.', 'Half-om-half gehakt kan ook; schep dan wat meer vet uit de pan.']
},
{
  id: 'tacos', naam: 'Taco\'s de picadillo (gehakt)', gerecht: 'Taco\'s', variant: 'Gehakt', ook: ['taco', 'tacos', 'taco\'s', 'taco\'s met gehakt', 'tacos de picadillo', 'zachte taco\'s'],
  keuken: 'Mexicaans', soort: 'Hoofdgerecht',
  tijd: 30, pers: 4, niveau: 'Makkelijk', vega: false, pit: 1,
  intro: 'Taco\'s zoals in Mexico: kleine, zachte maistortilla\'s, warm uit de droge pan, met kruidig gehakt in tomaat en chili. Erop alleen ui, koriander, salsa en een kneepje limoen.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan van 28 cm voor de vulling' },
    { tool: 'koekenpan', tekst: 'Tweede droge koekenpan (of comal) voor de tortilla\'s, en een schone theedoek om ze warm en zacht te houden' }
  ],
  ingr: [
    { kop: 'Picadillo' },
    { n: 'rundergehakt', q: 500, u: 'g', x: 'of half-om-half' },
    { n: 'ui', p: 'uien', q: 0.5, u: 'st', x: 'fijngesnipperd' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'fijngehakt' },
    { n: 'tomaat', p: 'tomaten', q: 2, u: 'st', x: 'fijngehakt, of 200 g tomatenblokjes' },
    { n: 'jalapeño', q: 1, u: 'st', x: 'fijngehakt; of 1 chipotle in adobo voor een rokerige smaak' },
    { n: 'komijn', q: 1, u: 'tl' },
    { n: 'gedroogde oregano', q: 1, u: 'tl', x: 'liefst Mexicaanse' },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { n: 'zout' }, { n: 'zwarte peper' },
    { kop: 'Taco\'s' },
    { n: 'maistortilla', p: 'maistortilla\'s', q: 16, u: 'st', x: 'klein (ca. 12 cm); je gebruikt er 2 per taco' },
    { n: 'witte ui', p: 'witte uien', q: 0.5, u: 'st', x: 'heel fijn gesnipperd' },
    { n: 'verse koriander', q: 30, u: 'g', x: 'fijngehakt' },
    { n: 'limoen', p: 'limoenen', q: 2, u: 'st', x: 'in partjes' },
    { n: 'salsa', q: 6, u: 'el', x: 'salsa roja, salsa verde of zelfgemaakte salsa fresca' },
    { n: 'avocado', p: 'avocado\'s', q: 1, u: 'st', x: 'in plakjes', opt: true },
    { n: 'queso fresco', q: 75, u: 'g', x: 'verkruimeld; of feta', opt: true }
  ],
  stappen: [
    { t: 'Verhit de olie in de koekenpan op middelhoog vuur en fruit de ui 3 minuten. Zet het vuur hoog en bak het gehakt in 5 à 6 minuten rul en bruin.', min: 8 },
    { t: 'Bak knoflook, jalapeño, komijn en oregano 1 minuut mee. Voeg de tomaat toe en laat 6 à 8 minuten pruttelen tot het vocht bijna weg is en het gehakt smeuïg is. Breng op smaak met zout en peper.', min: 7 },
    { t: 'Meng de witte ui met de koriander: dit is de klassieke topping. Zet salsa, limoenpartjes, avocado en queso fresco klaar.' },
    { t: 'Verhit de droge koekenpan op middelhoog vuur. Verwarm de tortilla\'s één voor één 30 à 45 seconden per kant, tot ze soepel zijn en bruine vlekjes hebben. Stapel ze in de theedoek, dan blijven ze warm en zacht.' },
    { t: 'Leg steeds 2 tortilla\'s op elkaar (zo scheuren ze niet), schep er 2 eetlepels picadillo op en strooi ui en koriander erover. Salsa en een kneepje limoen erbij en meteen opeten, uit de hand.' }
  ],
  tips: ['Echte Mexicaanse taco\'s zijn zacht en klein: maistortilla\'s, weinig vulling en geen geraspte kaas of zure room. Probeer ook eens al pastor (gemarineerd varkensvlees met ananas) of carnitas.', 'Maistortilla\'s vind je bij de toko, de Mexicaanse afdeling of online. Zijn ze droog en breken ze? Besprenkel ze met een paar druppels water voor je ze opwarmt.'],
  alt: ['Tex-Mex-versie met harde tacoschelpen: warm 12 schelpen 3 à 4 minuten in de oven of airfryer op 180 °C en vul ze met het gehakt, ijsbergsla, tomaat, geraspte cheddar en zure room. Lekker, maar zo eet je ze in de VS, niet in Mexico.', 'Vegetarisch: vervang het gehakt door 2 blikken zwarte bonen (uitgelekt, grof geprakt) en bak ze 5 minuten met de kruiden en de tomaat.']
},
{
  id: 'tacos-kip', variantVan: 'tacos', variant: 'Kip', naam: 'Taco\'s met kip (tinga de pollo)', ook: ['kiptaco\'s', 'chicken tacos', 'taco kip', 'tinga de pollo'],
  intro: 'Zachte maistortilla\'s met tinga: draadjes kip in een rokerige saus van tomaat, ui en chipotle. Een Mexicaanse klassieker, met ui, koriander en limoen erop.',
  vervang: {
    Picadillo: { kop: 'Tinga' },
    rundergehakt: { n: 'kippendijfilet', q: 500, u: 'g', x: 'of kipfilet' }
  },
  stappen: [
    { t: 'Kook de kip 15 minuten zachtjes in ruim water met zout tot hij gaar is. Haal hem eruit (bewaar een kopje kookvocht) en trek hem met twee vorken in draadjes.', min: 15 },
    { t: 'Verhit de olie in de koekenpan op middelhoog vuur en bak de ui 5 minuten zacht. Bak knoflook, jalapeño of chipotle, komijn en oregano 1 minuut mee.', min: 6 },
    { t: 'Voeg de tomaat en een scheut kookvocht toe en laat 5 minuten pruttelen. Schep de kip erdoor en laat nog 3 minuten sudderen tot de saus om de draadjes hangt. Breng op smaak met zout en peper.', min: 8 },
    { t: 'Meng de witte ui met de koriander. Zet salsa, limoenpartjes, avocado en queso fresco klaar.' },
    { t: 'Verwarm de tortilla\'s één voor één 30 à 45 seconden per kant in de hete, droge koekenpan tot ze soepel zijn. Stapel ze in de theedoek.' },
    { t: 'Leg steeds 2 tortilla\'s op elkaar, schep er kip op en maak af met ui, koriander, salsa en limoen.' }
  ],
  alt: ['Met restjes: pluk een gegrilde kip uit elkaar en warm hem 3 minuten op in de saus.', 'Rokeriger: gebruik 1 à 2 chipotles in adobo in plaats van de jalapeño; die horen echt in tinga.']
},
{
  id: 'enchiladas', naam: 'Enchiladas met kip',
  keuken: 'Mexicaans', soort: 'Hoofdgerecht',
  tijd: 55, pers: 4, niveau: 'Gemiddeld', vega: false, pit: 1,
  intro: 'Opgerolde tortilla\'s met pulled kip, overgoten met een zelfgemaakte rode chilisaus en gegratineerd met kaas. Troostvoer uit de oven.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'optigrill-bak', naam: 'OptiGrill-bak' } ],
  gerei: [
    { tool: 'hapjespan', tekst: 'Hapjespan of Dutch oven (24 à 28 cm) met deksel, voor de saus en de kip' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal van ca. 20 × 30 cm', m: 'oven' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal die in de mand past (ca. 18 × 18 cm); bij een kleine airfryer twee schaaltjes na elkaar', m: 'airfryer' },
    { tool: 'optigrill-bak', tekst: 'OptiGrill-bak (Snacking & Baking, 1,6 liter) in plaats van de onderste plaat; daar passen 4 à 5 opgerolde tortilla\'s in, dus genoeg voor 2 à 3 personen', m: 'optigrill-bak' }
  ],
  ingr: [
    { kop: 'Enchiladasaus' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'fijngesnipperd' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'geperst' },
    { n: 'chilipoeder', q: 2, u: 'tl', x: 'mild; of 2 gedroogde ancho-pepers, geweekt en fijngehakt' },
    { n: 'komijn', q: 1, u: 'tl' },
    { n: 'gedroogde oregano', q: 1, u: 'tl' },
    { n: 'tomatenpuree', q: 1, u: 'el' },
    { n: 'passata', q: 500, u: 'ml' },
    { n: 'kippenbouillon', q: 300, u: 'ml' },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { kop: 'Vulling' },
    { n: 'kipfilet', q: 500, u: 'g', x: 'heel; of 400 g gegaarde kip van gisteren' },
    { n: 'zwarte bonen', q: 240, u: 'g', x: 'uitgelekt', opt: true },
    { n: 'geraspte kaas', q: 200, u: 'g', x: 'cheddar, belegen of mozzarella' },
    { n: 'tortilla\'s', q: 8, u: 'st', x: 'middelgroot (ca. 20 cm), van tarwe of mais' },
    { kop: 'Erbij' },
    { n: 'zure room', q: 125, u: 'ml' },
    { n: 'verse koriander', q: 10, u: 'g' },
    { n: 'lente-ui', p: 'lente-uien', q: 2, u: 'st', x: 'in ringetjes' },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Verhit de olie in de hapjespan op middelhoog vuur en fruit de ui 4 minuten glazig. Bak knoflook, tomatenpuree, chilipoeder, komijn en oregano 1 minuut mee tot het geurt.', min: 5 },
    { t: 'Giet passata en bouillon erbij, breng aan de kook en breng op smaak met zout. Leg de kipfilets in de saus, zodat ze net onder staan. Deksel erop en laat 15 minuten zachtjes pocheren tot de kip gaar is (kerntemperatuur 75 °C). Gebruik je kip van gisteren? Laat de saus dan 10 minuten zonder kip pruttelen.', min: 15 },
    { t: 'Haal de kip uit de pan en trek hem met twee vorken in draadjes. Laat intussen de saus zonder deksel nog 5 minuten inkoken, tot hij de achterkant van een lepel bedekt.', min: 5 },
    { t: 'Verwarm de oven voor op 200 °C (hetelucht 180 °C).', m: 'oven' },
    { t: 'Verwarm de airfryer voor op 180 °C.', m: 'airfryer' },
    { t: 'Zet de bak in de OptiGrill in plaats van de onderste plaat, kies de handmatige modus, stel 220 °C in en druk op OK. Wacht tot hij klaar is met voorverwarmen. Rol de tortilla\'s hieronder op een bord op en leg ze daarna in de hete bak, op het laagje saus.', m: 'optigrill-bak' },
    { t: 'Meng de kip met 6 el saus, de bonen en een derde van de kaas. Schep een dun laagje saus in de ovenschaal. Verdeel de vulling over de tortilla\'s, rol ze op en leg ze met de naad naar onderen strak naast elkaar.' },
    { t: 'Giet de rest van de saus erover; zorg dat ook de randen bedekt zijn, anders worden ze hard. Strooi de rest van de kaas erover.' },
    { t: 'Bak de enchiladas 20 minuten in het midden van de oven, tot de kaas goudbruin is en de saus aan de randen borrelt.', m: 'oven', min: 20 },
    { t: 'Bak de enchiladas 12 à 15 minuten, tot de kaas goudbruin is en de saus borrelt.', m: 'airfryer', min: 13 },
    { t: 'Sluit de deksel en bak de enchiladas 12 à 15 minuten, tot de kaas goudbruin is en de saus aan de randen borrelt.', m: 'optigrill-bak', min: 13 },
    { t: 'Laat 5 minuten rusten. Maak af met zure room, koriander en lente-ui.' }
  ],
  tips: ['Warm de tortilla\'s eerst 30 seconden op in de magnetron onder een vochtige theedoek, dan scheuren ze niet bij het oprollen. Dat geldt vooral voor maistortilla\'s.', 'Je kunt de schaal een dag van tevoren vullen. Giet de saus er pas vlak voor het bakken over, anders worden de tortilla\'s papperig.'],
  alt: ['Enchiladas verdes: gebruik groene salsa verde van tomatillo (uit een pot) in plaats van de rode saus.', 'Vegetarisch: vul met zwarte bonen, mais en geroosterde zoete aardappel en gebruik groentebouillon.']
},
{
  id: 'guisado-carne-molida', naam: 'Guisado con carne molida', ook: ['picadillo', 'mexicaans gehaktstoofje', 'carne molida', 'guisado'],
  keuken: 'Mexicaans', soort: 'Hoofdgerecht',
  tijd: 45, pers: 4, niveau: 'Makkelijk', vega: false, pit: 1,
  intro: 'Het Mexicaanse gehaktstoofje van alledag: gehakt met aardappel en wortel in een kruidige tomatensaus. Gewoon thuiskost, en juist daarom zo lekker met rijst en warme tortilla\'s.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan (24 à 26 cm) met deksel' },
    { tool: 'staafmixer', tekst: 'Staafmixer met hoge beker voor de tomatensaus', of: 'Geen staafmixer? Gebruik passata in plaats van tomatenblokjes en hak de jalapeño heel fijn.' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'rundergehakt', q: 500, u: 'g' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'fijngesnipperd' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'tomatenblokjes', q: 400, u: 'g' },
    { n: 'jalapeño', p: 'jalapeños', q: 1, u: 'st', x: 'of 1 chipotle in adobo voor een rokerige smaak' },
    { n: 'komijn', q: 1, u: 'tl' },
    { n: 'gedroogde oregano', q: 1, u: 'tl' },
    { n: 'vastkokende aardappelen', q: 300, u: 'g', x: 'in blokjes van 1 cm' },
    { n: 'wortel', p: 'wortels', q: 2, u: 'st', x: 'in blokjes van 1 cm' },
    { n: 'doperwten', q: 100, u: 'g', x: 'diepvries, of courgette in blokjes', opt: true },
    { n: 'runderbouillon', q: 250, u: 'ml', x: 'of kippenbouillon' },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { n: 'zout' }, { n: 'peper' },
    { kop: 'Erbij' },
    { n: 'rijst', q: 300, u: 'g' },
    { n: 'tortilla\'s', q: 8, u: 'st', x: 'klein, liefst van mais', opt: true },
    { n: 'avocado', p: 'avocado\'s', q: 1, u: 'st', x: 'in plakjes' },
    { n: 'limoen', p: 'limoenen', q: 1, u: 'st', x: 'in partjes' },
    { n: 'verse koriander', q: 10, u: 'g', opt: true }
  ],
  stappen: [
    { t: 'Pureer de tomatenblokjes met de helft van de ui, de knoflook en de jalapeño (zonder zaadjes voor minder pit) met de staafmixer tot een gladde saus.' },
    { t: 'Verhit de olie in de Dutch oven op middelhoog tot hoog vuur. Bak het gehakt met de rest van de ui in 6 à 8 minuten rul en bruin; laat het echt kleuren, dat geeft smaak.', min: 7 },
    { t: 'Bak komijn en oregano 1 minuut mee. Doe aardappel en wortel erbij en schep alles goed om.', min: 1 },
    { t: 'Giet de tomatensaus en de bouillon erbij, breng aan de kook en breng op smaak met zout en peper. Leg de deksel op een kier en laat 20 à 25 minuten zachtjes sudderen tot de aardappel gaar is en de saus gebonden. Roer af en toe.', min: 22 },
    { t: 'Kook de rijst intussen volgens de verpakking.', min: 12 },
    { t: 'Roer de doperwten er de laatste 5 minuten door.', min: 5 },
    { t: 'Proef en maak af met een kneepje limoen en zout. Serveer met rijst, warme tortilla\'s, avocado, limoenpartjes en koriander.' }
  ],
  tips: ['Zoals elk stoofje is dit de volgende dag nog lekkerder. Restjes zijn een prima vulling voor taco\'s of burrito\'s.'],
  alt: ['Picadillo zoals veel Mexicaanse families hem maken: laat de laatste 10 minuten 30 g rozijnen en wat gehakte groene olijven meestoven.', 'Minder pittig: laat de jalapeño weg en gebruik ½ tl gerookt paprikapoeder.']
},
{
  id: 'nachos', naam: 'Nacho\'s uit de oven', ook: ['nachos', 'nacho schotel', 'loaded nachos'],
  keuken: 'Mexicaans', soort: 'Salade & bijgerecht',
  tijd: 20, pers: 4, niveau: 'Makkelijk', vega: true, pit: 2,
  intro: 'Een bakplaat vol tortillachips met gesmolten kaas, zwarte bonen en jalapeño, met guacamole, zure room en salsa erbij. Om samen uit het midden van de tafel te eten.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer met een ovenschaaltje dat in de mand past, of bakpapier; bij een kleine mand in 2 rondes', m: 'airfryer' }
  ],
  ingr: [
    { n: 'tortillachips', q: 200, u: 'g', x: 'naturel of licht gezouten' },
    { n: 'geraspte kaas', q: 200, u: 'g', x: 'cheddar of belegen' },
    { n: 'zwarte bonen', q: 240, u: 'g', x: 'uitgelekt; of een restje gekruid gehakt' },
    { n: 'jalapeño', p: 'jalapeños', q: 2, u: 'st', x: 'in ringetjes, vers of uit een pot' },
    { n: 'tomaat', p: 'tomaten', q: 2, u: 'st', x: 'in kleine blokjes' },
    { n: 'lente-ui', p: 'lente-uien', q: 2, u: 'st', x: 'in ringetjes' },
    { kop: 'Erbij' },
    { n: 'avocado', p: 'avocado\'s', q: 2, u: 'st', x: 'rijp, voor de guacamole' },
    { n: 'limoen', p: 'limoenen', q: 1, u: 'st' },
    { n: 'zure room', q: 125, u: 'ml' },
    { n: 'salsa', q: 4, u: 'el', x: 'of zelfgemaakte salsa fresca' },
    { n: 'verse koriander', q: 10, u: 'g', opt: true },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Prak de avocado\'s met het limoensap en een snuf zout tot een grove guacamole. Dek af en zet apart.' },
    { t: 'Verwarm de oven voor op 200 °C (hetelucht 180 °C). Leg de helft van de chips dicht tegen elkaar op de bakplaat. Strooi de helft van de bonen, de jalapeño en de kaas erover en herhaal met de rest. Zo heeft elke chip wat kaas.', m: 'oven' },
    { t: 'Bak de nacho\'s 6 à 8 minuten in het midden van de oven, tot de kaas gesmolten is en borrelt. Houd ze in de gaten: de randjes van de chips verbranden snel.', m: 'oven', min: 7 },
    { t: 'Verwarm de airfryer voor op 180 °C. Bouw de nacho\'s op dezelfde manier in twee lagen op in het schaaltje of op bakpapier in de mand; de kaas houdt de chips op hun plek.', m: 'airfryer' },
    { t: 'Bak de nacho\'s 4 à 5 minuten tot de kaas gesmolten is.', m: 'airfryer', min: 5 },
    { t: 'Strooi direct tomaat, lente-ui en koriander erover en zet ze op tafel met guacamole, zure room en salsa. Meteen eten, want ze worden snel zacht.' }
  ],
  tips: ['Rasp de kaas zelf: kaas uit een zakje bevat zetmeel en smelt minder mooi.', 'Restje chili con carne of pulled pork? Verdeel het over de chips in plaats van de bonen en je hebt een maaltijd.'],
  alt: ['Minder pittig: laat de jalapeño weg of gebruik milde jalapeño uit een pot, en zet sambal of hete saus apart op tafel.']
},
{
  id: 'salsa-fresca', naam: 'Salsa fresca (pico de gallo)', ook: ['pico de gallo', 'salsa', 'tomatensalsa', 'salsa mexicana'],
  keuken: 'Mexicaans', soort: 'Saus',
  tijd: 15, pers: 4, niveau: 'Makkelijk', vega: true, pit: 1,
  intro: 'Frisse, rauwe salsa van tomaat, ui, peper, koriander en limoen. Snel gemaakt en onmisbaar bij taco\'s, nacho\'s en alles van de grill.',
  gerei: [ { tool: 'ovenschaal', tekst: 'Kom, een zeef en een scherp mes; geen pannen nodig' } ],
  ingr: [
    { n: 'tomaat', p: 'tomaten', q: 4, u: 'st', x: 'rijp en stevig, ca. 400 g', vers: 'het is een rauwe salsa' },
    { n: 'ui', p: 'uien', q: 0.5, u: 'st' },
    { n: 'jalapeño', p: 'jalapeños', q: 1, u: 'st', x: 'of groene peper' },
    { n: 'verse koriander', q: 10, u: 'g', vers: 'het is een rauwe salsa' },
    { n: 'limoen', p: 'limoenen', q: 1, u: 'st', x: 'sap' },
    { n: 'zout', q: 0.5, u: 'tl' }
  ],
  stappen: [
    { t: 'Halveer de tomaten en schep de zaadjes en het vocht eruit met een theelepel. Snijd het vruchtvlees in blokjes van een halve centimeter.' },
    { t: 'Doe de tomaat in een zeef boven een kom, meng met het zout en laat 10 minuten uitlekken terwijl je de rest snijdt.', min: 10 },
    { t: 'Snipper de ui heel fijn. Spoel hem kort af in een zeefje onder koud water als je hem minder scherp wilt.' },
    { t: 'Haal de zaadlijsten uit de jalapeño voor minder pit en hak hem fijn. Hak de koriander met steeltjes en al fijn.' },
    { t: 'Meng tomaat, ui, jalapeño en koriander met het limoensap. Proef en breng op smaak met extra zout of limoen.' }
  ],
  tips: ['Maak de salsa hooguit een uur van tevoren. Daarna wordt hij waterig en verliest de koriander zijn frisheid. Het uitlekken met zout voorkomt een plas vocht onderin de kom.'],
  alt: ['Salsa roja: rooster 4 tomaten, een halve ui, 2 tenen knoflook en een jalapeño in een droge koekenpan of onder de grill tot ze zwarte plekken hebben. Pureer met zout en limoensap.', 'Salsa verde: maak hem op dezelfde manier met tomatillo\'s (uit blik, bij de toko of online) in plaats van tomaat.'],
  bij: ['tacos', 'burritos', 'nachos', 'quesadillas', 'huevos-rancheros', 'kip-fajitas', 'guisado-carne-molida', 'enchiladas']
},
{
  id: 'brownies', naam: 'Fudgy brownies', ook: ['brownie', 'chocolade brownies'],
  keuken: 'Amerikaans', soort: 'Dessert',
  tijd: 45, wacht: '1 uur afkoelen', pers: 16, stuks: 'stuks', niveau: 'Makkelijk', vega: true,
  intro: 'Dichte, smeuïge brownies met een glanzende, krakende korst. Veel chocolade en boter en maar weinig bloem: daar zit het geheim.',
  gerei: [
    { tool: 'bakvorm', tekst: 'Vierkante bakvorm van 20 × 20 cm, bekleed met bakpapier' },
    { tool: 'kookpan', tekst: 'Steelpan met een kom erop (au bain-marie)', of: 'Of smelt chocolade en boter in de magnetron in stappen van 30 seconden.' },
    { tool: 'mixer', tekst: 'Handmixer om eieren en suiker luchtig te kloppen', of: 'Met een garde lukt het ook; klop dan extra lang.' }
  ],
  ingr: [
    { n: 'pure chocolade', q: 200, u: 'g', x: '70% cacao, in stukjes' },
    { n: 'boter', q: 175, u: 'g' },
    { n: 'ei', p: 'eieren', q: 3, u: 'st', x: 'op kamertemperatuur' },
    { n: 'suiker', q: 150, u: 'g' },
    { n: 'bruine suiker', q: 100, u: 'g' },
    { n: 'zout', q: 1, u: 'snuf' },
    { n: 'bloem', q: 75, u: 'g' },
    { n: 'cacaopoeder', q: 30, u: 'g' },
    { n: 'witte chocolade', q: 50, u: 'g', x: 'of melkchocolade, in grove stukjes', opt: true }
  ],
  stappen: [
    { t: 'Verwarm de oven voor op 175 °C (hetelucht 160 °C). Bekleed de bakvorm met bakpapier dat over twee randen hangt, zodat je de brownies er straks makkelijk uit tilt.' },
    { t: 'Smelt chocolade en boter au bain-marie op laag vuur en roer tot het glad is. Laat afkoelen tot lauw.', min: 5 },
    { t: 'Klop eieren, beide suikers en het zout met de handmixer 4 à 5 minuten op de hoogste stand, tot het mengsel dik en bleek is en in volume verdubbeld. Dit zorgt voor de glanzende, krakende korst.', min: 5 },
    { t: 'Spatel de gesmolten chocolade erdoor. Zeef bloem en cacao erboven en spatel voorzichtig tot er geen droge plekjes meer zijn; niet langer roeren dan nodig. Spatel de witte chocolade erdoor.' },
    { t: 'Schep het beslag in de vorm en strijk het glad. Bak 25 minuten in het midden van de oven. Ze zijn klaar als de bovenkant glanst en barstjes heeft en een satéprikker in het midden er met vochtige kruimels uitkomt, maar zonder nat beslag.', min: 25 },
    { t: 'Laat minimaal 1 uur afkoelen in de vorm. Til ze eruit en snijd ze met een warm, droog mes in 16 stukken.', min: 60 }
  ],
  tips: ['Bak liever een paar minuten te kort dan te lang: brownies garen in de warme vorm nog na. Extra fudgy? Zet ze na het afkoelen nog een uur in de koelkast.'],
  alt: ['Met noten: spatel 75 g grof gehakte walnoten of pecannoten erdoor in plaats van de witte chocolade.', 'Airfryer: halveer het recept en bak in een vorm van ca. 15 × 15 cm 18 à 20 minuten op 160 °C.']
},
{
  id: 'ny-cheesecake', naam: 'New York cheesecake', ook: ['cheesecake', 'new york cheesecake'],
  keuken: 'Amerikaans', soort: 'Dessert',
  tijd: 40, wacht: 'een nacht opstijven', pers: 12, niveau: 'Gemiddeld', vega: true,
  intro: 'Romig, stevig en licht friszuur: de klassieke gebakken cheesecake op een bodem van koekkruimels. Geen moeilijk werk, wel geduld.',
  gerei: [
    { tool: 'bakvorm', tekst: 'Springvorm van 22 à 24 cm, bodem bekleed met bakpapier en rand ingevet' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal of braadslee met heet water, voor op de onderste rail' },
    { tool: 'mixer', tekst: 'Handmixer, op de laagste stand', of: 'Met een stevige garde lukt het ook, als de roomkaas zacht genoeg is.' }
  ],
  ingr: [
    { kop: 'Bodem' },
    { n: 'digestive biscuits', q: 200, u: 'g', x: 'of kaneelkoekjes' },
    { n: 'boter', q: 80, u: 'g', x: 'gesmolten' },
    { kop: 'Vulling' },
    { n: 'roomkaas', q: 800, u: 'g', x: 'volvet, zoals Philadelphia, op kamertemperatuur' },
    { n: 'suiker', q: 175, u: 'g' },
    { n: 'bloem', q: 2, u: 'el' },
    { n: 'zout', q: 1, u: 'snuf' },
    { n: 'ei', p: 'eieren', q: 4, u: 'st', x: 'op kamertemperatuur' },
    { n: 'zure room', q: 125, u: 'ml', x: 'of crème fraîche' },
    { n: 'vanille-extract', q: 1, u: 'tl', x: 'of 1 zakje vanillesuiker' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'rasp en 1 el sap' }
  ],
  stappen: [
    { t: 'Haal roomkaas, eieren en zure room minstens een uur van tevoren uit de koelkast; koude roomkaas geeft klontjes. Verwarm de oven voor op 175 °C, bij voorkeur zonder hetelucht.' },
    { t: 'Maal de koekjes fijn in een diepvrieszak met een deegroller en meng ze met de gesmolten boter. Druk het mengsel stevig aan op de bodem van de springvorm, bijvoorbeeld met de onderkant van een glas. Bak 10 minuten en laat iets afkoelen.', min: 10 },
    { t: 'Zet de oven op 150 °C. Zet de ovenschaal met 2 cm kokend water op de onderste rail. De stoom houdt de cheesecake zacht en helpt tegen scheuren.' },
    { t: 'Klop roomkaas, suiker, bloem en zout op de laagste stand in 1 minuut glad. Klop de eieren er één voor één door, telkens tot ze net zijn opgenomen. Roer zure room, vanille, citroenrasp en -sap erdoor. Klop niet harder of langer dan nodig.' },
    { t: 'Giet de vulling op de bodem en tik de vorm een paar keer op het aanrecht om luchtbellen kwijt te raken. Bak 60 à 70 minuten op het rooster boven het water. Hij is klaar als de rand stevig is en het midden nog licht trilt als je tegen de vorm tikt.', min: 65 },
    { t: 'Zet de oven uit, zet de deur op een kier en laat de cheesecake 1 uur in de oven afkoelen. Ga daarna met een dun mes langs de rand, zodat hij los kan krimpen.', min: 60 },
    { t: 'Laat hem op het aanrecht helemaal afkoelen. Dek af en laat een nacht, minimaal 6 uur, opstijven in de koelkast. Snijd met een mes dat je steeds in heet water dompelt en afveegt.', min: 360 }
  ],
  tips: ['Scheurtjes ontstaan door te veel lucht in het beslag, te veel hitte of te snel afkoelen. Klop op de laagste stand, bak boven het water en laat hem rustig in de oven afkoelen. Scheurt hij toch? Fruit erop en niemand ziet het.', 'Cheesecake is goed in te vriezen, in punten en goed verpakt. Laat hem in de koelkast ontdooien.'],
  alt: ['Met rood fruit: kook 300 g (diepvries)rood fruit 5 minuten met 50 g suiker en 1 tl maïzena, aangelengd met 2 el water. Laat afkoelen en schep over de cheesecake.']
},
{
  id: 'fried-chicken', naam: 'Southern fried chicken', ook: ['fried chicken', 'gefrituurde kip', 'kfc', 'buttermilk chicken'],
  keuken: 'Amerikaans', soort: 'Hoofdgerecht',
  tijd: 50, wacht: '4 uur marineren', pers: 4, niveau: 'Gemiddeld', vega: false, pit: 2,
  intro: 'Kip met bot, eerst in gekruide karnemelk en dan door een bloemlaag die heel knapperig frituurt. Sappig vanbinnen, krokant vanbuiten, en ook goed te doen in de airfryer.',
  methodes: [ { id: 'braadpan', naam: 'Frituren' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven (24 à 26 cm) met 5 à 6 cm olie, en een keukenthermometer', m: 'braadpan' },
    { tool: 'bakplaat', tekst: 'Bakplaat met een rooster erop, om de kip te laten uitlekken en warm te houden', m: 'braadpan' },
    { tool: 'airfryer', tekst: 'Airfryer, een oliespuit of -verstuiver en een vleesthermometer', m: 'airfryer' }
  ],
  ingr: [
    { n: 'kippenpoten', q: 1200, u: 'g', x: 'dijen en drumsticks met bot en vel' },
    { kop: 'Marinade' },
    { n: 'karnemelk', q: 500, u: 'ml' },
    { n: 'zout', q: 2, u: 'tl' },
    { n: 'paprikapoeder', q: 1, u: 'tl' },
    { n: 'knoflookpoeder', q: 1, u: 'tl' },
    { kop: 'Bloemlaag' },
    { n: 'bloem', q: 250, u: 'g' },
    { n: 'paprikapoeder', q: 1, u: 'el' },
    { n: 'knoflookpoeder', q: 2, u: 'tl' },
    { n: 'cayennepeper', q: 1, u: 'tl', x: 'minder als je niet van pittig houdt' },
    { n: 'zout', q: 2, u: 'tl' },
    { n: 'zwarte peper', q: 1, u: 'tl' },
    { n: 'bakpoeder', q: 1, u: 'tl' },
    { kop: 'Bakken' },
    { n: 'zonnebloemolie', q: 1.5, u: 'l', x: 'om te frituren; voor de airfryer 2 el in een verstuiver' }
  ],
  stappen: [
    { t: 'Meng karnemelk, zout, paprikapoeder en knoflookpoeder in een kom of diepvrieszak. Leg de kip erin, zorg dat alles onder staat en laat minimaal 4 uur, liefst een nacht, marineren in de koelkast.', min: 240 },
    { t: 'Haal de kip een half uur voor het bakken uit de koelkast. Meng in een brede schaal bloem, paprikapoeder, knoflookpoeder, cayenne, zout, peper en bakpoeder. Sprenkel er 3 el van de marinade over en wrijf het met je vingers door de bloem: die kleine klontjes worden extra krokant.' },
    { t: 'Haal de kip stuk voor stuk uit de marinade, laat kort uitlekken en druk hem rondom stevig in de bloem. Leg de stukken op het rooster en laat ze 15 minuten rusten, zodat de laag goed hecht.', min: 15 },
    { t: 'Verhit 5 à 6 cm olie in de Dutch oven tot 175 °C. Geen thermometer? Steek een houten lepel in de olie: als er direct gestaag belletjes langs komen, is hij heet genoeg.', m: 'braadpan', min: 10 },
    { t: 'Leg er 3 à 4 stukken in; de temperatuur zakt dan naar ongeveer 160 °C. Stel het vuur zo bij dat de olie tussen 160 en 170 °C blijft. Frituur 12 à 15 minuten en keer de stukken om de paar minuten, tot ze diep goudbruin zijn en de kerntemperatuur 75 °C is (meet in het dikste deel, niet tegen het bot).', m: 'braadpan', min: 14 },
    { t: 'Laat de kip uitlekken op het rooster en houd hem warm in de oven op 100 °C terwijl je de rest frituurt.', m: 'braadpan' },
    { t: 'Verwarm de airfryer voor op 190 °C. Spuit de kip rondom in met olie tot er geen droge, witte plekken bloem meer te zien zijn. Leg de stukken in één laag in de mand, met ruimte ertussen; bak zo nodig in 2 rondes.', m: 'airfryer' },
    { t: 'Bak 25 à 28 minuten. Keer de stukken na 12 minuten en spuit droge plekken nog eens in. De kip is klaar bij een kerntemperatuur van 75 °C.', m: 'airfryer', min: 26 },
    { t: 'Laat de kip 5 minuten rusten en bestrooi met een snuf zout.', min: 5 }
  ],
  tips: ['Coleslaw erbij: meng 300 g fijngesneden witte kool en 1 geraspte wortel met 4 el mayonaise, 1 el appelazijn, 1 tl suiker en zout, en laat 15 minuten staan.', 'Zeef de afgekoelde olie en bewaar hem afgesloten; je kunt hem nog een of twee keer gebruiken om kip te frituren.'],
  alt: ['Zonder bot: snijd kippendijfilet of kipfilet in repen en frituur ze 5 à 6 minuten, of bak ze 12 à 14 minuten in de airfryer. Dan heb je chicken tenders.']
},
{
  id: 'chocolate-chip-cookies', naam: 'Chocolate chip cookies', ook: ['cookies', 'koekjes met chocolade'],
  keuken: 'Amerikaans', soort: 'Dessert',
  tijd: 30, wacht: '30 min koelen', pers: 16, stuks: 'koekjes', niveau: 'Makkelijk', vega: true,
  intro: 'Knapperige randjes, een zacht en taai midden en grote stukken pure chocolade. Met een paar vlokjes zeezout erop blijft het niet bij één.',
  gerei: [
    { tool: 'kookpan', tekst: 'Steelpannetje om de boter te smelten of te bruinen' },
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier; bak in 2 rondes' }
  ],
  ingr: [
    { n: 'boter', q: 125, u: 'g' },
    { n: 'bruine suiker', q: 100, u: 'g' },
    { n: 'suiker', q: 50, u: 'g' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st' },
    { n: 'vanille-extract', q: 1, u: 'tl', opt: true },
    { n: 'bloem', q: 175, u: 'g' },
    { n: 'baking soda', q: 0.5, u: 'tl', x: 'zuiveringszout, bicarbonaat; geen bakpoeder' },
    { n: 'zout', q: 0.5, u: 'tl' },
    { n: 'pure chocolade', q: 150, u: 'g', x: 'grof gehakt, of chocoladedruppels' },
    { n: 'zeezout', x: 'vlokken, om te bestrooien', opt: true }
  ],
  stappen: [
    { t: 'Smelt de boter in het steelpannetje op middelhoog vuur. Voor bruine boter: laat hem doorkoken tot het schuim zakt, hij nootachtig ruikt en er bruine spikkeltjes op de bodem liggen, in 4 à 5 minuten. Giet in een kom en laat 5 minuten afkoelen.', min: 5 },
    { t: 'Klop beide suikers met een garde door de boter, daarna het ei en de vanille, tot het mengsel glad is en glanst.' },
    { t: 'Meng bloem, baking soda en zout en roer het met een spatel kort door het botermengsel, tot je net geen bloem meer ziet. Spatel de chocolade erdoor.' },
    { t: 'Dek de kom af en laat het deeg 30 minuten in de koelkast opstijven. Heb je tijd, laat het dan tot 24 uur staan: de cookies worden dikker en karamelliger.', min: 30 },
    { t: 'Verwarm de oven voor op 180 °C (hetelucht 165 °C). Rol 16 bolletjes van ca. 40 g en leg er 8 op de bakplaat, met flink wat ruimte ertussen.' },
    { t: 'Bak de cookies 10 à 12 minuten in het midden van de oven, tot de randen goudbruin zijn en het midden nog bleek en zacht lijkt.', min: 11 },
    { t: 'Strooi er meteen wat zeezout over. Laat ze 5 minuten op de plaat stevig worden en daarna afkoelen op een rooster. Bak dan de tweede plaat.', min: 5 }
  ],
  tips: ['Haal ze uit de oven als het midden nog ondergaar lijkt: ze garen op de hete plaat na en blijven zo zacht in het midden.', 'Deegbolletjes kun je invriezen. Bak ze bevroren, 2 minuten langer.'],
  alt: ['Airfryer: bak 4 à 5 bolletjes tegelijk op bakpapier, 8 à 9 minuten op 160 °C.', 'Met noten: vervang 50 g van de chocolade door grof gehakte pecannoten of walnoten.']
},
{
  id: 'barbecuesaus', naam: 'Barbecuesaus', ook: ['bbq saus', 'bbq-saus', 'barbecue saus'],
  keuken: 'Amerikaans', soort: 'Saus',
  tijd: 25, pers: 8, niveau: 'Makkelijk', vega: true, pit: 1,
  intro: 'Zoete, rokerige en licht zure saus van ketchup, appelazijn en gerookte paprika. Zelfgemaakt in een kwartier en veel lekkerder dan uit de fles.',
  gerei: [ { tool: 'kookpan', tekst: 'Steelpan met dikke bodem, en een schone glazen pot om hem te bewaren' } ],
  ingr: [
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { n: 'ui', p: 'uien', q: 0.5, u: 'st', x: 'heel fijn gesnipperd, of 1 tl uienpoeder voor een gladde saus' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'geperst' },
    { n: 'ketchup', q: 250, u: 'ml' },
    { n: 'appelazijn', q: 4, u: 'el' },
    { n: 'bruine suiker', q: 50, u: 'g' },
    { n: 'honing', q: 1, u: 'el', x: 'of melasse of keukenstroop' },
    { n: 'mosterd', q: 2, u: 'tl' },
    { n: 'gerookt paprikapoeder', q: 2, u: 'tl' },
    { n: 'zwarte peper', q: 0.5, u: 'tl' },
    { n: 'water', q: 75, u: 'ml' },
    { n: 'worcestershiresaus', q: 1, u: 'el', x: 'bevat ansjovis; laat weg voor een vegetarische saus', opt: true },
    { n: 'chipotle in adobo', p: 'chipotles in adobo', q: 1, u: 'st', x: 'fijngehakt, voor rook en pit; of een snuf cayennepeper', opt: true },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Verhit de olie in de steelpan op middelhoog vuur. Fruit de ui 4 minuten zacht en glazig en bak de knoflook 1 minuut mee.', min: 5 },
    { t: 'Roer alle andere ingrediënten erdoor en breng aan de kook.' },
    { t: 'Zet het vuur laag en laat de saus zonder deksel 15 à 20 minuten zachtjes pruttelen. Roer regelmatig, want hij spat en brandt snel aan. Hij is klaar als hij de achterkant van een lepel dik bedekt.', min: 18 },
    { t: 'Proef en stel bij: zoeter met suiker of honing, frisser met azijn, pittiger met chipotle of cayenne, en zout naar smaak.' },
    { t: 'Spoel een glazen pot om met kokend water. Schenk de hete saus erin, sluit af en laat afkoelen.' }
  ],
  tips: ['In een goed schoongemaakte pot blijft de saus zo\'n twee weken goed in de koelkast. Na een dag is hij ronder van smaak.', 'Smeer hem pas de laatste 10 minuten op vlees op de barbecue of in de oven: door de suiker verbrandt hij snel.'],
  alt: ['Carolina-stijl: gebruik de helft van de ketchup, 2 keer zoveel azijn en 1 el extra mosterd. Dunner en frisser, heerlijk bij pulled pork.'],
  bij: ['pulled-pork', 'fried-chicken', 'smash-burgers']
}
);
