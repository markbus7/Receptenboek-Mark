/* Dutch oven-klassiekers */
RECEPTEN.push(
{
  id: 'no-knead-brood', naam: 'Brood uit de Dutch oven', ook: ['no knead brood', 'brood bakken'], keuken: 'Amerikaans', soort: 'Ontbijt & lunch',
  tijd: 20, wacht: '12 uur rijzen + 45 min bakken', pers: 8, niveau: 'Makkelijk', vega: true,
  intro: 'Een knapperig, open brood zonder kneden. De hete Dutch oven werkt als een bakkersoven met stoom.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven van 24 à 28 cm met deksel (ovenbestendig tot 250 °C)' },
    { tool: 'oven', tekst: 'Oven' }
  ],
  ingr: [
    { n: 'bloem', q: 500, u: 'g', x: 'of half bloem, half volkorenmeel' },
    { n: 'zout', q: 10, u: 'g' },
    { n: 'gedroogde gist', q: 2, u: 'g', x: 'een halve theelepel' },
    { n: 'lauw water', q: 380, u: 'ml' }
  ],
  stappen: [
    { t: 'Meng bloem, zout en gist in een grote kom. Voeg het water toe en roer met een lepel tot er geen droge bloem meer is. Het deeg is nat en plakkerig; dat hoort zo.' },
    { t: 'Dek af met folie of een bord en laat 12 à 18 uur op kamertemperatuur rijzen, tot het bubbelig is en verdubbeld.', min: 720 },
    { t: 'Stort het deeg op een met bloem bestoven werkblad. Vouw de randen een paar keer naar het midden tot een bol. Leg hem met de naad naar onderen op een vel bakpapier.' },
    { t: 'Zet de lege Dutch oven met deksel in de oven en verwarm voor op 240 °C. Laat het deeg intussen 45 minuten rusten onder een theedoek.', min: 45 },
    { t: 'Haal de hete pan voorzichtig uit de oven (ovenwanten!). Snijd een kruis in het deeg en til het aan het bakpapier in de pan. Deksel erop.' },
    { t: 'Bak 30 minuten met de deksel erop. Haal de deksel eraf en bak nog 15 à 20 minuten tot de korst diep goudbruin is.', min: 48 },
    { t: 'Het brood is gaar als het hol klinkt als je op de onderkant klopt. Laat minstens 1 uur afkoelen op een rooster voordat je het aansnijdt.', min: 60 }
  ],
  tips: ['Variaties: meng 100 g geraspte kaas, 30 g olijven of 2 el rozemarijn door het deeg.', 'Het knapperen dat je hoort tijdens het afkoelen is de korst die krimpt: een goed teken.'],
  alt: ['Geen Dutch oven? Bak op een hete bakplaat en zet een bakje heet water onderin de oven voor stoom. De korst wordt minder dik.']
},
{
  id: 'vlaamse-stoverij', naam: 'Vlaamse stoverij', ook: ['stoofvlees', 'stoofvlees met friet', 'carbonade flamande', 'stoofkarbonade'], keuken: 'Belgisch', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '3 uur stoven', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Rundvlees gestoofd in donker bier met ui, tijm en een boterham met mosterd. Met frietjes erbij.',
  methodes: [ { id: 'braadpan', naam: 'Braadpan' }, { id: 'oven', naam: 'Oven' }, { id: 'slowcooker', naam: 'Slowcooker' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of gietijzeren stoofpan (24 à 26 cm) met deksel' },
    { tool: 'slowcooker', tekst: 'Slowcooker (vlees eerst in de pan aanbraden)', m: 'slowcooker' }
  ],
  ingr: [
    { n: 'runderlappen', q: 1000, u: 'g', x: 'sukade of riblap, in grote blokken' },
    { n: 'ui', p: 'uien', q: 3, u: 'st', x: 'in halve ringen' },
    { n: 'donker bier', q: 500, u: 'ml', x: 'bijv. Westmalle Dubbel of Leffe Bruin' },
    { n: 'bruine boterham', q: 1, u: 'plak' },
    { n: 'mosterd', q: 2, u: 'el', x: 'grove of Dijon' },
    { n: 'bruine suiker', q: 1, u: 'el', x: 'of stroop' },
    { n: 'verse tijm', q: 4, u: 'takje' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 2, u: 'st' },
    { n: 'azijn', q: 1, u: 'el', x: 'appel- of rode wijnazijn' },
    { n: 'bloem', q: 2, u: 'el' },
    { n: 'boter', q: 50, u: 'g' }
  ],
  stappen: [
    { t: 'Dep het vlees droog, bestrooi met zout, peper en bloem.' },
    { t: 'Laat de helft van de boter bruin worden in de Dutch oven op hoog vuur. Braad het vlees in 2 à 3 porties rondom donkerbruin. Neem hier de tijd voor. Schep uit de pan.', min: 12 },
    { t: 'Bak de ui in de rest van de boter 10 minuten op middelhoog vuur tot hij zacht en bruin is.', min: 10 },
    { t: 'Doe het vlees terug. Giet het bier erbij en schraap de bodem los. Voeg suiker, azijn, tijm en laurier toe. Besmeer de boterham dik met mosterd en leg hem met de mosterdkant naar beneden op het vlees.' },
    { t: 'Deksel erop en laat 3 uur heel zachtjes stoven op het kleinste pit. Roer na een uur: de boterham valt uit elkaar en bindt de saus.', m: 'braadpan', min: 180 },
    { t: 'Zet de pan met deksel 3 uur in een voorverwarmde oven op 150 °C.', m: 'oven', min: 180 },
    { t: 'Doe alles over in de slowcooker en gaar 8 uur op LOW. Gebruik 330 ml bier.', m: 'slowcooker', min: 480 },
    { t: 'Vis de tijmtakjes en laurier eruit en breng op smaak. Serveer met frietjes, appelmoes en mayonaise.' }
  ],
  tips: ['Stoverij wordt nog beter als je hem een dag van tevoren maakt en opwarmt.'],
  alt: ['Geen bier? Gebruik runderbouillon met 1 el stroop en 1 el extra azijn.']
},
{
  id: 'boeuf-bourguignon', naam: 'Boeuf bourguignon', ook: ['stoofvlees in rode wijn', 'franse stoofpot'], keuken: 'Frans', soort: 'Hoofdgerecht',
  tijd: 45, wacht: '3 uur stoven', pers: 6, niveau: 'Gemiddeld', vega: false,
  intro: 'Rundvlees gestoofd in rode wijn met spek, champignons en zilveruitjes. Het Bourgondische feestmaal.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'braadpan', naam: 'Op het vuur' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven (26 à 28 cm) met deksel' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de champignons en uitjes' }
  ],
  ingr: [
    { n: 'runderstoofvlees', q: 1200, u: 'g', x: 'sukade, in blokken van 4 cm' },
    { n: 'spekblokjes', q: 150, u: 'g' },
    { n: 'rode wijn', q: 750, u: 'ml', x: 'een fles droge Bourgogne of pinot noir' },
    { n: 'runderbouillon', q: 300, u: 'ml' },
    { n: 'wortel', p: 'wortels', q: 2, u: 'st', x: 'in dikke plakken' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'tomatenpuree', q: 1, u: 'el' },
    { n: 'bloem', q: 2, u: 'el' },
    { n: 'verse tijm', q: 4, u: 'takje' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 2, u: 'st' },
    { n: 'kastanjechampignons', q: 250, u: 'g', x: 'in vieren' },
    { n: 'zilveruitjes', q: 200, u: 'g', x: 'gepeld, of kleine sjalotjes' },
    { n: 'boter', q: 30, u: 'g' },
    { n: 'verse peterselie', q: 10, u: 'g' }
  ],
  stappen: [
    { t: 'Bak de spekblokjes in de Dutch oven op middelhoog vuur 6 minuten tot ze bruin zijn. Schep ze eruit; laat het vet in de pan.', min: 6 },
    { t: 'Dep het vlees droog en bestrooi met zout en peper. Braad het in 3 porties in het spekvet op hoog vuur rondom donkerbruin. Schep uit de pan.', min: 15 },
    { t: 'Bak wortel en ui 5 minuten. Bak knoflook en tomatenpuree 1 minuut mee. Strooi de bloem erover en roer 1 minuut.', min: 7 },
    { t: 'Doe vlees en spek terug. Giet de wijn en de bouillon erbij tot het vlees net onder staat. Voeg tijm en laurier toe en breng aan de kook.' },
    { t: 'Deksel erop en zet 3 uur in een voorverwarmde oven op 150 °C tot het vlees met een vork uit elkaar valt.', m: 'oven', min: 180 },
    { t: 'Deksel erop en laat 3 uur heel zachtjes sudderen op het kleinste pit. Roer elk uur.', m: 'braadpan', min: 180 },
    { t: 'Bak in het laatste half uur de champignons en zilveruitjes in de boter in de koekenpan in 10 minuten goudbruin. Bestrooi met zout.', min: 10 },
    { t: 'Roer champignons en uitjes door het stoofvlees. Te dun? Laat 10 minuten zonder deksel inkoken. Bestrooi met peterselie en serveer met aardappelpuree of stokbrood.' }
  ],
  tips: ['Kook nooit met wijn die je zelf niet zou drinken; hij wordt de saus.'],
  alt: ['Zonder alcohol? Gebruik runderbouillon met 2 el balsamicoazijn en 1 el tomatenpuree extra.']
},
{
  id: 'hongaarse-goulash', naam: 'Hongaarse goulash', keuken: 'Hongaars', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '2 uur stoven', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Stevige stoof van rundvlees, paprika en veel paprikapoeder. Half soep, half stoofpot.',
  methodes: [ { id: 'braadpan', naam: 'Braadpan' }, { id: 'oven', naam: 'Oven' }, { id: 'slowcooker', naam: 'Slowcooker' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan (24 à 26 cm) met deksel' },
    { tool: 'slowcooker', tekst: 'Slowcooker', m: 'slowcooker' }
  ],
  ingr: [
    { n: 'runderstoofvlees', q: 800, u: 'g', x: 'in blokjes van 3 cm' },
    { n: 'ui', p: 'uien', q: 3, u: 'st', x: 'gesnipperd' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 2, u: 'st', x: 'in blokjes' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'paprikapoeder', q: 3, u: 'el', x: 'edelzoet' },
    { n: 'gerookt paprikapoeder', q: 1, u: 'tl' },
    { n: 'karwijzaad', q: 1, u: 'tl', opt: true },
    { n: 'tomatenpuree', q: 70, u: 'g', x: 'een klein blikje is 70 g' },
    { n: 'tomatenblokjes', q: 400, u: 'g' },
    { n: 'runderbouillon', q: 500, u: 'ml' },
    { n: 'vastkokende aardappelen', q: 400, u: 'g', x: 'in blokjes' },
    { n: 'zure room', q: 125, u: 'ml', x: 'om te serveren' },
    { n: 'zonnebloemolie', q: 3, u: 'el' }
  ],
  stappen: [
    { t: 'Braad het vlees in 2 el olie in de Dutch oven op hoog vuur in porties bruin. Schep uit de pan.', min: 10 },
    { t: 'Bak de ui in de rest van de olie 8 minuten tot hij goudbruin is. Voeg paprika en knoflook toe en bak 3 minuten.', min: 11 },
    { t: 'Haal de pan van het vuur en roer paprikapoeder, karwij en tomatenpuree erdoor. Paprikapoeder brandt snel en wordt dan bitter.' },
    { t: 'Zet de pan terug, voeg vlees, tomaten en bouillon toe en breng aan de kook.' },
    { t: 'Laat met de deksel erop 1½ uur zachtjes stoven. Voeg de aardappelen toe en stoof nog 30 minuten.', m: 'braadpan', min: 120 },
    { t: 'Zet de pan met deksel 1½ uur in een voorverwarmde oven op 160 °C. Voeg de aardappelen toe en zet hem nog 40 minuten terug.', m: 'oven', min: 130 },
    { t: 'Doe alles behalve de aardappelen in de slowcooker. Gaar 7 uur op LOW, voeg de aardappelen toe en gaar nog 1 uur.', m: 'slowcooker', min: 480 },
    { t: 'Breng op smaak met zout en peper. Serveer met een schep zure room en brood.' }
  ],
  tips: ['Echte Hongaarse paprika (uit een blikje uit Szeged) maakt echt verschil.'],
  alt: ['Liever zonder aardappel? Laat ze weg en serveer de goulash met pasta of rijst.']
},
{
  id: 'coq-au-vin', naam: 'Coq au vin', ook: ['kip in rode wijn'], keuken: 'Frans', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '1 uur stoven', pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Kippenpoten gestoofd in rode wijn met spek, champignons en tijm. Franse huiskeuken op zijn best.',
  methodes: [ { id: 'braadpan', naam: 'Op het vuur' }, { id: 'oven', naam: 'Oven' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan (26 cm) met deksel' }
  ],
  ingr: [
    { n: 'kippenpoten', q: 1200, u: 'g', x: 'dijen en drumsticks, met vel' },
    { n: 'spekblokjes', q: 125, u: 'g' },
    { n: 'rode wijn', q: 500, u: 'ml' },
    { n: 'kippenbouillon', q: 200, u: 'ml' },
    { n: 'champignons', q: 250, u: 'g' },
    { n: 'sjalot', p: 'sjalotten', q: 8, u: 'st', x: 'gepeld, heel', of: { q: 2, u: 'st', n: 'ui in parten', p: 'uien in parten' } },
    { n: 'wortel', p: 'wortels', q: 2, u: 'st' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'bloem', q: 1, u: 'el' },
    { n: 'tomatenpuree', q: 1, u: 'el' },
    { n: 'verse tijm', q: 4, u: 'takje' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 1, u: 'st' },
    { n: 'boter', q: 20, u: 'g' }
  ],
  stappen: [
    { t: 'Bak het spek in de Dutch oven in 5 minuten bruin en schep het uit de pan.', min: 5 },
    { t: 'Bestrooi de kip met zout en peper. Bak hem met het vel naar beneden in het spekvet op middelhoog vuur 6 minuten tot het vel goudbruin en krokant is. Keer en bak 2 minuten. Schep uit de pan.', min: 8 },
    { t: 'Bak sjalotjes, wortel en champignons 5 minuten in de boter. Voeg knoflook, tomatenpuree en bloem toe en roer 1 minuut.', min: 6 },
    { t: 'Blus met de wijn, schraap de bodem los en voeg bouillon, tijm en laurier toe. Leg de kip en het spek terug, met het vel naar boven.' },
    { t: 'Laat met de deksel erop 50 minuten zachtjes stoven. Haal de deksel eraf en laat 10 minuten inkoken.', m: 'braadpan', min: 60 },
    { t: 'Zet de pan met deksel 50 minuten in een voorverwarmde oven op 170 °C. Haal de deksel eraf en zet hem nog 15 minuten terug.', m: 'oven', min: 65 },
    { t: 'Breng op smaak. Lekker met aardappelpuree of tagliatelle.' }
  ],
  tips: ['Laat de kip met het vel boven de saus uitsteken, dan blijft het een beetje krokant.'],
  alt: ['Geen rode wijn? Coq au Riesling: gebruik droge witte wijn en roer er op het eind 100 ml room door.']
},
{
  id: 'pulled-pork', naam: 'Pulled pork', keuken: 'Amerikaans', soort: 'Hoofdgerecht',
  tijd: 20, wacht: '5 uur garen', pers: 8, niveau: 'Makkelijk', vega: false, pit: 1,
  intro: 'Varkensschouder met een rokerige kruidenrub, zo lang gegaard dat je het met twee vorken uit elkaar trekt.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'slowcooker', naam: 'Slowcooker' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven (26 à 28 cm) met deksel', m: 'oven' },
    { tool: 'slowcooker', tekst: 'Slowcooker van minimaal 4,5 liter', m: 'slowcooker' }
  ],
  ingr: [
    { n: 'varkensschouder', q: 2000, u: 'g', x: 'zonder bot, of 2,5 kg met bot' },
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'in ringen' },
    { n: 'appelsap', q: 200, u: 'ml' },
    { n: 'appelazijn', q: 2, u: 'el' },
    { kop: 'Rub' },
    { n: 'bruine suiker', q: 2, u: 'el' },
    { n: 'gerookt paprikapoeder', q: 2, u: 'el' },
    { n: 'knoflookpoeder', q: 1, u: 'tl' },
    { n: 'uienpoeder', q: 1, u: 'tl' },
    { n: 'komijn', q: 1, u: 'tl' },
    { n: 'chilipoeder', q: 1, u: 'tl' },
    { n: 'zout', q: 2, u: 'tl' },
    { kop: 'Serveren' },
    { n: 'barbecuesaus', q: 200, u: 'ml' },
    { n: 'hamburgerbroodjes', q: 8, u: 'st' },
    { n: 'koolsla', q: 400, u: 'g' }
  ],
  stappen: [
    { t: 'Meng de rub en wrijf het vlees er rondom mee in. Liefst een nacht laten intrekken in de koelkast.' },
    { t: 'Leg de ui op de bodem van de Dutch oven, het vlees erop en giet appelsap en azijn erbij. Deksel erop en zet 5 à 6 uur in een voorverwarmde oven op 150 °C.', m: 'oven', min: 330 },
    { t: 'Haal de deksel eraf, zet de oven op 200 °C en laat de bovenkant in 20 minuten een donkere korst krijgen.', m: 'oven', min: 20 },
    { t: 'Leg de ui in de slowcooker met het vlees erop. Giet appelsap en azijn erbij. Gaar 8 à 10 uur op LOW.', m: 'slowcooker', min: 540 },
    { t: 'Trek het vlees met twee vorken uit elkaar. Meng met een deel van het vocht uit de pan en de barbecuesaus.' },
    { t: 'Serveer op geroosterde broodjes met koolsla.' }
  ],
  tips: ['Het vlees is klaar als een vork er zonder weerstand in draait (kerntemperatuur rond 93 °C).', 'Restjes zijn perfect voor taco\'s, nacho\'s of een tosti.'],
  alt: ['Geen varkensschouder? Kippendijen werken ook; gaar ze 2 uur in de oven of 5 uur in de slowcooker.']
},
{
  id: 'kip-dutch-oven', naam: 'Hele kip uit de Dutch oven', ook: ['gebraden kip', 'braadkip'], keuken: 'Frans', soort: 'Hoofdgerecht',
  tijd: 20, wacht: '1½ uur in de oven', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Een hele kip op een bedje van groenten, met citroen en knoflook. Sappig vlees en een eigen jus.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven van 26 à 28 cm (ovale is ideaal) met deksel', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer van minimaal 5,5 liter; kip van max. 1,5 kg', m: 'airfryer' }
  ],
  ingr: [
    { n: 'hele kip', p: 'hele kippen', q: 1, u: 'st', x: 'ca. 1,6 kg' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st' },
    { n: 'knoflook', q: 1, u: 'bol', vers: 'de halve bol gaart mee in de kip' },
    { n: 'verse tijm', q: 6, u: 'takje', x: 'of rozemarijn' },
    { n: 'roomboter', q: 50, u: 'g', x: 'zacht' },
    { n: 'krieltjes', q: 600, u: 'g', x: 'gehalveerd' },
    { n: 'wortel', p: 'wortels', q: 3, u: 'st', x: 'in grote stukken' },
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'in partjes' },
    { n: 'witte wijn', q: 150, u: 'ml', x: 'of kippenbouillon' },
    { n: 'olijfolie', q: 2, u: 'el' }
  ],
  stappen: [
    { t: 'Haal de kip een half uur van tevoren uit de koelkast. Dep hem droog en wrijf in met de zachte boter, zout en peper. Stop de gehalveerde citroen, een halve bol knoflook en de tijm in de holte.', min: 30 },
    { t: 'Verwarm de oven voor op 200 °C. Meng krieltjes, wortel, ui en de rest van de knoflook met olie en zout op de bodem van de Dutch oven. Leg de kip erop en giet de wijn erbij.', m: 'oven' },
    { t: 'Deksel erop en zet 50 minuten in de oven.', m: 'oven', min: 50 },
    { t: 'Haal de deksel eraf en rooster nog 30 à 40 minuten tot het vel goudbruin en krokant is.', m: 'oven', min: 35 },
    { t: 'Leg de kip met de borst naar beneden in de mand. Bak 30 minuten op 180 °C. Keer en bak nog 20 à 25 minuten.', m: 'airfryer', min: 55 },
    { t: 'Rooster de groenten met olie en zout apart in de Dutch oven: 40 minuten in de oven op 200 °C, of 20 minuten in de airfryer na de kip.', m: 'airfryer', min: 40 },
    { t: 'De kip is gaar als het vocht uit de dij helder is (74 °C in de dij). Laat 10 minuten rusten onder folie voor je hem aansnijdt. Schep de jus uit de pan over de groenten.', min: 10 }
  ],
  tips: ['Een droog vel wordt krokanter. Laat de kip eventueel een nacht onafgedekt in de koelkast staan.'],
  alt: ['Geen Dutch oven? Gebruik een ovenschaal en dek hem de eerste 50 minuten af met aluminiumfolie.']
},
{
  id: 'ossobuco', naam: 'Ossobuco', ook: ['kalfsschenkel', 'osso buco'], keuken: 'Italiaans', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '2 uur stoven', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Kalfsschenkel met merg, gestoofd in witte wijn en tomaat, met frisse gremolata erover.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'braadpan', naam: 'Op het vuur' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan (26 à 28 cm) waar de schenkels naast elkaar in passen' }
  ],
  ingr: [
    { n: 'kalfsschenkel', p: 'kalfsschenkels', q: 4, u: 'st', x: 'ca. 4 cm dik' },
    { n: 'bloem', q: 2, u: 'el' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'wortel', p: 'wortels', q: 1, u: 'st' },
    { n: 'bleekselderij', q: 2, u: 'stengel' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'witte wijn', q: 200, u: 'ml' },
    { n: 'tomatenblokjes', q: 400, u: 'g' },
    { n: 'kalfsbouillon', q: 300, u: 'ml', x: 'of kippenbouillon' },
    { n: 'boter', q: 30, u: 'g' },
    { n: 'olijfolie', q: 2, u: 'el' },
    { kop: 'Gremolata' },
    { n: 'verse peterselie', q: 10, u: 'g', x: 'fijngehakt' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'alleen de geraspte schil' },
    { n: 'knoflook', q: 1, u: 'teen', x: 'heel fijn gehakt' }
  ],
  stappen: [
    { t: 'Knip het vlies rond de schenkels op 2 plaatsen in, dan krullen ze niet. Bestrooi met zout, peper en bloem.' },
    { t: 'Verhit olie en boter in de Dutch oven. Bak de schenkels 4 minuten per kant goudbruin. Schep uit de pan.', min: 8 },
    { t: 'Bak ui, wortel en selderij in kleine blokjes 6 minuten. Bak de knoflook 1 minuut mee.', min: 7 },
    { t: 'Blus met de wijn en laat 2 minuten inkoken. Voeg tomaat en bouillon toe. Zet de schenkels terug, rechtop, zodat het merg niet uit het bot valt.', min: 2 },
    { t: 'Deksel erop en zet 2 uur in een voorverwarmde oven op 160 °C.', m: 'oven', min: 120 },
    { t: 'Deksel erop en laat 2 uur op het kleinste pit stoven. Schud de pan af en toe.', m: 'braadpan', min: 120 },
    { t: 'Meng peterselie, citroenrasp en knoflook tot gremolata. Strooi over het vlees vlak voor het serveren. Klassiek met risotto alla milanese of polenta.' }
  ],
  tips: ['Eet het merg uit het bot met een klein lepeltje: dat is de traktatie.'],
  alt: ['Geen kalfsschenkel? Runderschenkel werkt ook; stoof dan 3 uur.']
}
);
