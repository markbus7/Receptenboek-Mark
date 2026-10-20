/* Midden-Oosters, Grieks, Marokkaans */
RECEPTEN.push(
{
  id: 'shakshuka', naam: 'Shakshuka', ook: ['shakshouka', 'eieren in tomatensaus'], keuken: 'Midden-Oosters', soort: 'Ontbijt & lunch',
  tijd: 30, pers: 4, niveau: 'Makkelijk', vega: true, pit: 1,
  intro: 'Eieren gepocheerd in een kruidige saus van tomaat en paprika. Met brood om te dippen.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan of hapjespan (28 cm) mét deksel', of: 'Geen passende deksel? Gebruik een bakplaat of een groot bord.' }
  ],
  ingr: [
    { n: 'ei', p: 'eieren', q: 6, u: 'st' },
    { n: 'tomatenblokjes', q: 800, u: 'g' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 2, u: 'st', x: 'in reepjes' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'komijn', q: 1, u: 'tl' },
    { n: 'paprikapoeder', q: 2, u: 'tl', x: 'liefst gerookt' },
    { n: 'harissa', q: 1, u: 'el', x: 'of ½ tl chilivlokken' },
    { n: 'feta', q: 100, u: 'g', opt: true },
    { n: 'verse koriander', q: 10, u: 'g', x: 'of peterselie' },
    { n: 'olijfolie', q: 3, u: 'el' },
    { n: 'brood', q: 1, u: 'st', x: 'stokbrood of pita' }
  ],
  stappen: [
    { t: 'Verhit de olie in de pan. Bak ui en paprika 8 minuten op middelhoog vuur tot ze zacht zijn.', min: 8 },
    { t: 'Bak knoflook, komijn, paprikapoeder en harissa 1 minuut mee.' },
    { t: 'Voeg de tomaten toe met wat zout en laat 10 minuten inkoken tot een dikke saus.', min: 10 },
    { t: 'Maak met een lepel 6 kuiltjes in de saus en breek in elk kuiltje een ei.' },
    { t: 'Deksel erop en laat op laag vuur 6 à 8 minuten garen, tot het eiwit gestold is en de dooier nog zacht.', min: 7 },
    { t: 'Brokkel de feta erover en bestrooi met koriander. Zet de pan zo op tafel met brood.' }
  ],
  tips: ['Eiwit stolt sneller als je het rond de dooier voorzichtig een beetje losroert met een vork.'],
  alt: ['Liever in de oven? Zet de pan (ovenvast) na stap 4 zonder deksel 8 minuten in de oven op 190 °C.']
},
{
  id: 'falafel', naam: 'Falafel met tahinsaus', keuken: 'Midden-Oosters', soort: 'Hoofdgerecht',
  tijd: 35, wacht: 'kikkererwten 12 uur weken', pers: 4, niveau: 'Gemiddeld', vega: true,
  intro: 'Krokante kruidenballetjes van gewelde kikkererwten, met tahinsaus in een pita.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'oven', naam: 'Oven' } ],
  gerei: [
    { tool: 'staafmixer', tekst: 'Keukenmachine of hakmolen', of: 'Een staafmixer met hakbeker werkt ook; maal in kleine porties.' },
    { tool: 'koekenpan', tekst: 'Koekenpan met hoge rand en 1 cm olie', m: 'koekenpan' },
    { tool: 'airfryer', tekst: 'Airfryer, mand licht ingevet', m: 'airfryer' },
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier', m: 'oven' }
  ],
  ingr: [
    { n: 'gedroogde kikkererwten', q: 250, u: 'g', x: '12 uur geweekt, níet gekookt' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in stukken' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'verse peterselie', q: 30, u: 'g', vers: 'geeft de falafel smaak en kleur' },
    { n: 'verse koriander', q: 30, u: 'g', vers: 'geeft de falafel smaak en kleur' },
    { n: 'komijn', q: 2, u: 'tl' },
    { n: 'gemalen koriander', q: 1, u: 'tl' },
    { n: 'bakpoeder', q: 1, u: 'tl' },
    { n: 'zout', q: 1.5, u: 'tl' },
    { n: 'zonnebloemolie', q: 200, u: 'ml', x: 'voor de koekenpan; 2 el voor airfryer of oven' },
    { kop: 'Tahinsaus en serveren' },
    { n: 'tahin', q: 4, u: 'el' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'sap' },
    { n: 'pitabroodjes', q: 4, u: 'st' },
    { n: 'tomaat', p: 'tomaten', q: 2, u: 'st' },
    { n: 'komkommer', p: 'komkommers', q: 0.5, u: 'st' }
  ],
  stappen: [
    { t: 'Laat de geweekte kikkererwten goed uitlekken en dep ze droog.' },
    { t: 'Maal kikkererwten, ui, knoflook, kruiden, specerijen en zout in de keukenmachine tot een korrelig mengsel dat aan elkaar plakt als je erin knijpt. Niet tot een gladde puree.' },
    { t: 'Roer het bakpoeder erdoor en zet 15 minuten in de koelkast. Vorm er ca. 20 balletjes of platte schijfjes van.', min: 15 },
    { t: 'Verhit 1 cm olie in de koekenpan tot 175 °C. Bak de falafel in porties 3 à 4 minuten rondom goudbruin. Laat uitlekken op keukenpapier.', m: 'koekenpan', min: 4 },
    { t: 'Bestrijk of besproei de falafel met olie. Bak in één laag 12 à 15 minuten in de airfryer op 190 °C. Keer halverwege.', m: 'airfryer', min: 14 },
    { t: 'Leg de falafel op de bakplaat en besprenkel met olie. Bak 20 à 25 minuten in een voorverwarmde oven op 210 °C. Keer halverwege.', m: 'oven', min: 22 },
    { t: 'Roer tahin, citroensap, een snuf zout en 4 à 6 el koud water tot een gladde, schenkbare saus.' },
    { t: 'Vul de warme pita\'s met falafel, tomaat, komkommer en tahinsaus.' }
  ],
  tips: ['Gebruik echt gedroogde, geweekte kikkererwten. Uit blik vallen de balletjes uit elkaar.'],
  alt: ['Geen keukenmachine? Gebruik een vleesmolen of maak de falafel van 2 blikken kikkererwten met 3 el bloem (wel minder krokant).']
},
{
  id: 'kip-shoarma', naam: 'Kip shoarma met knoflooksaus', ook: ['shawarma'], keuken: 'Midden-Oosters', soort: 'Hoofdgerecht',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Kruidige reepjes kip met een romige knoflooksaus en frisse salade in pitabrood.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'oven', naam: 'Oven' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Grote koekenpan (28 cm), goed heet', m: 'koekenpan' },
    { tool: 'airfryer', tekst: 'Airfryer', m: 'airfryer' },
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier', m: 'oven' }
  ],
  ingr: [
    { n: 'kippendijfilet', q: 600, u: 'g', x: 'in dunne reepjes' },
    { n: 'shoarmakruiden', q: 2, u: 'el', x: 'of 1 tl komijn, 1 tl paprika, ½ tl kaneel, ½ tl kurkuma' },
    { n: 'olijfolie', q: 2, u: 'el' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in halve ringen' },
    { n: 'pitabroodjes', q: 4, u: 'st' },
    { n: 'ijsbergsla', q: 0.25, u: 'st', x: 'krop, gesneden' },
    { n: 'tomaat', p: 'tomaten', q: 2, u: 'st' },
    { kop: 'Knoflooksaus' },
    { n: 'Griekse yoghurt', q: 150, u: 'g' },
    { n: 'mayonaise', q: 2, u: 'el' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'geperst' }
  ],
  stappen: [
    { t: 'Meng de kip met kruiden, olie, citroensap en zout. Laat 10 minuten staan.', min: 10 },
    { t: 'Verhit de koekenpan op hoog vuur. Bak kip en ui 8 à 10 minuten tot de randjes bruin en krokant zijn. Niet te veel tegelijk in de pan.', m: 'koekenpan', min: 9 },
    { t: 'Bak kip en ui 12 minuten in de airfryer op 200 °C. Schud de mand 2 keer.', m: 'airfryer', min: 12 },
    { t: 'Spreid kip en ui uit op de bakplaat. Rooster 15 minuten bovenin een voorverwarmde oven op 230 °C.', m: 'oven', min: 15 },
    { t: 'Roer yoghurt, mayonaise, knoflook en een snuf zout door elkaar.' },
    { t: 'Rooster de pita\'s kort in de broodrooster. Vul ze met sla, tomaat, kip en knoflooksaus.' }
  ],
  tips: ['Extra smaak: strooi er wat sumak of chilivlokken over.'],
  alt: ['Geen pita? Serveer op rijst of in een wrap.']
},
{
  id: 'souvlaki-tzatziki', naam: 'Souvlaki met tzatziki', keuken: 'Grieks', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '1 uur marineren', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Spiesjes varkenshaas met citroen en oregano, met huisgemaakte tzatziki.',
  methodes: [ { id: 'contactgrill', naam: 'Contactgrill' }, { id: 'grillpan', naam: 'Grillpan' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'oven', naam: 'Oven (grill)' }, { id: 'koekenpan', naam: 'Koekenpan' } ],
  gerei: [
    { tool: 'contactgrill', tekst: 'Contactgrill, spiesen passend gemaakt', m: 'contactgrill' },
    { tool: 'grillpan', tekst: 'Grillpan of barbecue', m: 'grillpan' },
    { tool: 'airfryer', tekst: 'Airfryer, spiesen passend gemaakt', m: 'airfryer' },
    { tool: 'bakplaat', tekst: 'Bakplaat met rooster', m: 'oven' },
    { tool: 'koekenpan', tekst: 'Grote koekenpan (28 cm)', m: 'koekenpan' }
  ],
  ingr: [
    { n: 'varkenshaas', q: 600, u: 'g', x: 'in blokjes van 2,5 cm' },
    { n: 'satéprikkers', q: 8, u: 'st', x: 'geweekt' },
    { n: 'olijfolie', q: 4, u: 'el' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'sap en rasp' },
    { n: 'gedroogde oregano', q: 2, u: 'tl' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { kop: 'Tzatziki' },
    { n: 'Griekse yoghurt', q: 300, u: 'g' },
    { n: 'komkommer', p: 'komkommers', q: 0.5, u: 'st', x: 'geraspt en uitgeknepen' },
    { n: 'knoflook', q: 1, u: 'teen' },
    { n: 'verse dille', q: 1, u: 'el', x: 'of munt' },
    { kop: 'Serveren' },
    { n: 'pitabroodjes', q: 4, u: 'st' },
    { n: 'rode ui', p: 'rode uien', q: 1, u: 'st' }
  ],
  stappen: [
    { t: 'Meng het vlees met olie, citroen, oregano, knoflook en peper. Laat minimaal 1 uur marineren. Rijg aan de spiesen en bestrooi met zout.', min: 60 },
    { t: 'Tzatziki: knijp de geraspte komkommer goed uit in een theedoek. Meng met yoghurt, knoflook, dille en zout.' },
    { t: 'Leg de spiesen op de voorverwarmde contactgrill en sluit de deksel. Grill 6 à 8 minuten; haal ze eraf als het vlees vanbinnen nog net licht roze is.', m: 'contactgrill', min: 7 },
    { t: 'Grill de spiesen op een gloeiend hete grillpan 8 à 10 minuten rondom.', m: 'grillpan', min: 9 },
    { t: 'Bak de spiesen 10 à 12 minuten in de airfryer op 200 °C. Keer halverwege.', m: 'airfryer', min: 11 },
    { t: 'Gril de spiesen 12 minuten op het rooster onder de ovengrill. Keer halverwege.', m: 'oven', min: 12 },
    { t: 'Bak de spiesen 8 à 10 minuten in 1 el olie op middelhoog vuur. Keer regelmatig.', m: 'koekenpan', min: 9 },
    { t: 'Serveer met warme pita, ringen rode ui en tzatziki.' }
  ],
  tips: ['Varkenshaas is snel droog. Haal hem eraf als hij vanbinnen nog net licht roze is.'],
  alt: ['Geen varkenshaas? Kippendij werkt net zo goed, bak dan 2 minuten langer.']
},
{
  id: 'moussaka', naam: 'Moussaka', ook: ['griekse ovenschotel'], keuken: 'Grieks', soort: 'Hoofdgerecht',
  tijd: 60, wacht: '45 min bakken', pers: 6, niveau: 'Gemiddeld', vega: false,
  intro: 'Laagjes aubergine, gekruid lamsgehakt met kaneel en een dikke kaaskorst.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'optigrill-bak', naam: 'OptiGrill-bak' } ],
  gerei: [
    { tool: 'airfryer', tekst: 'Airfryer of oven om de aubergine voor te garen', of: 'Geen airfryer? Gaar de aubergine dan in de oven, of grill de plakken 5 à 6 minuten op je contactgrill voordat je de bak erop zet.' },
    { tool: 'hapjespan', tekst: 'Hapjespan voor de gehaktsaus' },
    { tool: 'kookpan', tekst: 'Steelpan en garde voor de bechamel' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal van 20 × 30 cm', m: 'oven' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal die in de mand past; halveer het recept of bak in 2 delen', m: 'airfryer' },
    { tool: 'optigrill-bak', tekst: 'OptiGrill-bak (Snacking & Baking, 1,6 liter) in plaats van de onderste plaat; genoeg voor 3 personen, dus zet het recept op 3 personen', m: 'optigrill-bak' }
  ],
  ingr: [
    { n: 'aubergine', p: 'aubergines', q: 3, u: 'st', x: 'in plakken van 1 cm' },
    { n: 'olijfolie', q: 5, u: 'el' },
    { kop: 'Gehaktsaus' },
    { n: 'lamsgehakt', q: 500, u: 'g', x: 'of rundergehakt' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'tomatenblokjes', q: 400, u: 'g' },
    { n: 'tomatenpuree', q: 1, u: 'el' },
    { n: 'kaneel', q: 1, u: 'tl' },
    { n: 'gedroogde oregano', q: 1, u: 'tl' },
    { kop: 'Bechamel' },
    { n: 'boter', q: 50, u: 'g' },
    { n: 'bloem', q: 50, u: 'g' },
    { n: 'melk', q: 500, u: 'ml' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st' },
    { n: 'geraspte kaas', q: 75, u: 'g', x: 'kefalotiri of Parmezaan' }
  ],
  stappen: [
    { t: 'Bestrijk de auberginepakken met olie en zout. Gaar ze 15 minuten in de airfryer op 200 °C (in porties) of 25 minuten op een bakplaat in de oven op 220 °C, tot ze zacht en goudbruin zijn.', min: 15 },
    { t: 'Bak gehakt en ui rul in de hapjespan. Voeg knoflook, tomatenpuree, kaneel en oregano toe en bak 1 minuut.', min: 8 },
    { t: 'Voeg de tomaten toe en laat 15 minuten inkoken tot een dikke saus. Breng op smaak.', min: 15 },
    { t: 'Maak de bechamel zoals bij lasagne: boter smelten, bloem erdoor, melk erbij kloppen tot het bindt. Haal van het vuur, klop ei en de helft van de kaas erdoor.' },
    { t: 'Zet de bak in de OptiGrill in plaats van de onderste plaat, kies de handmatige modus, stel 200 °C in en druk op OK. Wacht tot hij klaar is met voorverwarmen.', m: 'optigrill-bak' },
    { t: 'Leg in de schaal de helft van de aubergine, dan de gehaktsaus, dan de rest van de aubergine. Giet de bechamel erover en bestrooi met de rest van de kaas.' },
    { t: 'Bak 40 à 45 minuten in een voorverwarmde oven op 180 °C tot de bovenkant diep goudbruin is.', m: 'oven', min: 45 },
    { t: 'Dek af met folie en bak 20 minuten op 160 °C. Haal de folie weg en bak nog 10 minuten.', m: 'airfryer', min: 30 },
    { t: 'Sluit de deksel en bak 30 minuten op 200 °C, tot de bechamel gestold en goudbruin is. Kijk na 20 minuten even: kleurt hij al te donker, leg er dan een vel bakpapier op.', m: 'optigrill-bak', min: 30 },
    { t: 'Laat 15 minuten rusten voor je hem aansnijdt.', min: 15 }
  ],
  tips: ['Een laag dunne aardappelplakjes onderin maakt het extra stevig.'],
  alt: ['Vegetarisch? Vervang het gehakt door 300 g groene linzen (gekookt) met 200 g gehakte champignons.']
},
{
  id: 'kip-tajine', naam: 'Kip tajine met abrikoos', keuken: 'Marokkaans', soort: 'Hoofdgerecht',
  tijd: 20, wacht: '45 min stoven', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Zoet-hartige stoof van kippendijen, abrikozen, kikkererwten en ras el hanout.',
  methodes: [ { id: 'braadpan', naam: 'Braadpan' }, { id: 'oven', naam: 'Oven' }, { id: 'slowcooker', naam: 'Slowcooker' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Tajine, braadpan of hapjespan (26 cm) met deksel' },
    { tool: 'slowcooker', tekst: 'Slowcooker', m: 'slowcooker' },
    { tool: 'kookpan', tekst: 'Kom of pan voor de couscous' }
  ],
  ingr: [
    { n: 'kippendijen', q: 800, u: 'g', x: 'met of zonder bot' },
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'in halve ringen' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'ras el hanout', q: 2, u: 'el' },
    { n: 'kaneelstokje', p: 'kaneelstokjes', q: 1, u: 'st' },
    { n: 'gedroogde abrikozen', q: 150, u: 'g' },
    { n: 'kikkererwten', q: 240, u: 'g', x: 'uitgelekt' },
    { n: 'tomatenblokjes', q: 400, u: 'g' },
    { n: 'kippenbouillon', q: 250, u: 'ml' },
    { n: 'honing', q: 1, u: 'el' },
    { n: 'couscous', q: 300, u: 'g' },
    { n: 'geschaafde amandelen', q: 30, u: 'g' },
    { n: 'verse koriander', q: 10, u: 'g' }
  ],
  stappen: [
    { t: 'Bestrooi de kip met zout en de helft van de ras el hanout. Braad hem rondom bruin in olie in de braadpan, ca. 6 minuten. Haal eruit.', min: 6 },
    { t: 'Bak ui, knoflook, de rest van de specerijen en het kaneelstokje 5 minuten.', min: 5 },
    { t: 'Doe de kip terug met abrikozen, kikkererwten, tomaten, bouillon en honing.' },
    { t: 'Laat met de deksel erop 40 à 45 minuten zachtjes stoven op laag vuur.', m: 'braadpan', min: 45 },
    { t: 'Zet de afgesloten pan 50 minuten in een voorverwarmde oven op 170 °C.', m: 'oven', min: 50 },
    { t: 'Doe alles in de slowcooker en gaar 6 uur op LOW of 3 uur op HIGH. Gebruik 150 ml bouillon.', m: 'slowcooker', min: 180 },
    { t: 'Overgiet de couscous met evenveel kokend water met wat zout. Laat 5 minuten staan en maak los met een vork.', min: 5 },
    { t: 'Rooster de amandelen in een droge pan. Serveer de tajine op couscous met amandelen en koriander.' }
  ],
  tips: ['Een paar plakjes ingemaakte citroen geven de echte Marokkaanse smaak.'],
  alt: ['Geen ras el hanout? Meng 1 tl komijn, 1 tl koriander, 1 tl kaneel, ½ tl gember en ½ tl kurkuma.']
},
{
  id: 'griekse-salade', naam: 'Griekse salade (choriatiki)', keuken: 'Grieks', soort: 'Salade & bijgerecht',
  tijd: 15, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Rijpe tomaat, komkommer, olijven en een heel blok feta. Geen sla, wel veel olijfolie.',
  gerei: [ { tool: 'ovenschaal', tekst: 'Grote platte schaal; geen pannen nodig' } ],
  ingr: [
    { n: 'tomaat', p: 'tomaten', q: 4, u: 'st', x: 'rijp, in partjes', vers: true },
    { n: 'komkommer', p: 'komkommers', q: 1, u: 'st', x: 'in dikke halve maantjes' },
    { n: 'groene paprika', p: 'groene paprika\'s', q: 1, u: 'st', x: 'in ringen' },
    { n: 'rode ui', p: 'rode uien', q: 1, u: 'st', x: 'in dunne ringen' },
    { n: 'kalamata-olijven', q: 100, u: 'g' },
    { n: 'feta', q: 200, u: 'g', x: 'in één blok' },
    { n: 'gedroogde oregano', q: 1, u: 'tl' },
    { n: 'olijfolie', q: 5, u: 'el', x: 'extra vierge' },
    { n: 'rode wijnazijn', q: 1, u: 'el' }
  ],
  stappen: [
    { t: 'Leg de rode ui 5 minuten in koud water; dan wordt hij milder. Laat uitlekken.', min: 5 },
    { t: 'Verdeel tomaat, komkommer, paprika en ui over de schaal. Bestrooi met zout.' },
    { t: 'Leg de olijven erover en het blok feta in het midden.' },
    { t: 'Strooi de oregano over de feta. Besprenkel alles royaal met olijfolie en de azijn.' }
  ],
  tips: ['Doop brood in het sap onderin de schaal; in Griekenland heet dat papara.'],
  alt: ['Geen feta? Gebruik blokjes geitenkaas of halloumi uit de grillpan.']
}
);
