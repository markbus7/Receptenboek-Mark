/* Frans, Spaans, Amerikaans */
RECEPTEN.push(
{
  id: 'quiche-lorraine', naam: 'Quiche lorraine', ook: ['hartige taart', 'spekquiche'], keuken: 'Frans', soort: 'Ontbijt & lunch',
  tijd: 20, wacht: '35 min bakken', pers: 6, niveau: 'Makkelijk', vega: false,
  intro: 'Romige eiervulling met spekjes en Gruyère in een knapperige bodem van bladerdeeg.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'bakvorm', tekst: 'Quiche- of taartvorm van 24 cm, ingevet', m: 'oven' },
    { tool: 'bakvorm', tekst: 'Taartvorm van 18 à 20 cm die in de mand past; gebruik 2/3 van het recept', m: 'airfryer' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de spekjes' }
  ],
  ingr: [
    { n: 'bladerdeeg', q: 6, u: 'plak', x: 'uit de diepvries, ontdooid' },
    { n: 'spekblokjes', q: 200, u: 'g' },
    { n: 'ei', p: 'eieren', q: 4, u: 'st' },
    { n: 'slagroom', q: 200, u: 'ml', x: 'vloeibaar, uit een pak (geen spuitbus); of kookroom' },
    { n: 'melk', q: 100, u: 'ml' },
    { n: 'Gruyère', q: 100, u: 'g', x: 'geraspt, of belegen kaas' },
    { n: 'nootmuskaat', q: 1, u: 'snuf' },
    { n: 'peper' }
  ],
  stappen: [
    { t: 'Verwarm de oven voor op 200 °C.', m: 'oven' },
    { t: 'Verwarm de airfryer voor op 170 °C.', m: 'airfryer' },
    { t: 'Bekleed de vorm met de plakjes bladerdeeg; laat ze iets overlappen en druk de naden goed aan. Prik gaatjes in de bodem met een vork.' },
    { t: 'Bak de spekjes 5 minuten in de droge koekenpan. Laat uitlekken op keukenpapier.', min: 5 },
    { t: 'Klop eieren, room, melk, nootmuskaat en peper los. Zout is niet nodig: het spek is al zout.' },
    { t: 'Strooi spek en kaas over de bodem en giet het eimengsel erover.' },
    { t: 'Bak 30 à 35 minuten in het onderste deel van de oven tot de vulling net gestold en goudbruin is.', m: 'oven', min: 33 },
    { t: 'Bak 22 à 25 minuten. Dek af met folie als de bovenkant te snel kleurt.', m: 'airfryer', min: 24 },
    { t: 'Laat 10 minuten rusten. Lekker warm én koud.', min: 10 }
  ],
  tips: ['De quiche is gaar als het midden nog een héél klein beetje trilt.'],
  alt: ['Vegetarisch? Vervang het spek door gebakken prei en champignons.']
},
{
  id: 'ratatouille', naam: 'Ratatouille', keuken: 'Frans', soort: 'Salade & bijgerecht',
  tijd: 25, wacht: '40 min stoven', pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Provençaalse groentestoof met courgette, aubergine, paprika en tijm.',
  methodes: [ { id: 'braadpan', naam: 'Braadpan' }, { id: 'oven', naam: 'Oven' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Braadpan of hapjespan (28 cm) met deksel', m: 'braadpan' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal van ca. 25 × 30 cm', m: 'oven' }
  ],
  ingr: [
    { n: 'aubergine', p: 'aubergines', q: 1, u: 'st', x: 'in blokjes' },
    { n: 'courgette', p: 'courgettes', q: 2, u: 'st', x: 'in blokjes' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 2, u: 'st', x: 'in stukken' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'tomatenblokjes', q: 400, u: 'g' },
    { n: 'verse tijm', q: 4, u: 'takje', x: 'of 1 tl gedroogd' },
    { n: 'olijfolie', q: 5, u: 'el' },
    { n: 'verse basilicum', q: 10, u: 'g' }
  ],
  stappen: [
    { t: 'Bak de aubergine in 3 el olie 6 minuten in de braadpan op middelhoog vuur tot hij kleurt. Schep uit de pan.', m: 'braadpan', min: 6 },
    { t: 'Bak ui, paprika en courgette 6 minuten in de rest van de olie. Voeg knoflook, tomaten, tijm en de aubergine toe.', m: 'braadpan', min: 6 },
    { t: 'Laat met de deksel op een kier 35 à 40 minuten zachtjes stoven. Roer af en toe.', m: 'braadpan', min: 40 },
    { t: 'Meng alle groenten met olie, knoflook, tijm, zout en peper in de ovenschaal. Rooster 25 minuten op 200 °C.', m: 'oven', min: 25 },
    { t: 'Roer de tomaten erdoor en rooster nog 20 minuten.', m: 'oven', min: 20 },
    { t: 'Breng op smaak en scheur de basilicum erover. Lekker met brood, rijst of naast vlees of vis.' }
  ],
  tips: ['Ratatouille smaakt de volgende dag nog beter, ook koud als salade.'],
  alt: ['Geen aubergine? Voeg dan een extra courgette of een paar champignons toe.']
},
{
  id: 'franse-uiensoep', naam: 'Franse uiensoep', keuken: 'Frans', soort: 'Soep',
  tijd: 20, wacht: '50 min karamelliseren', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Diep gekaramelliseerde uien in bouillon, met een korst van gegratineerde kaas.',
  methodes: [ { id: 'oven', naam: 'Oven (grill)' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Braadpan of soeppan met dikke bodem (24 cm)' },
    { tool: 'ovenschaal', tekst: '4 ovenvaste soepkommen' }
  ],
  ingr: [
    { n: 'ui', p: 'uien', q: 1000, u: 'g', x: 'ca. 6 grote, in dunne halve ringen' },
    { n: 'boter', q: 50, u: 'g' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'bloem', q: 1, u: 'el' },
    { n: 'witte wijn', q: 150, u: 'ml', x: 'droog' },
    { n: 'runderbouillon', q: 1200, u: 'ml' },
    { n: 'verse tijm', q: 3, u: 'takje' },
    { n: 'stokbrood', q: 8, u: 'plak', x: 'geroosterd' },
    { n: 'Gruyère', q: 150, u: 'g', x: 'geraspt' }
  ],
  stappen: [
    { t: 'Smelt de boter in de braadpan. Voeg de uien en een snuf zout toe. Bak 10 minuten op middelhoog vuur tot ze slinken.', min: 10 },
    { t: 'Zet het vuur laag, voeg de suiker toe en laat 40 minuten karamelliseren tot de ui diep goudbruin is. Roer elke 5 minuten en schraap de bodem los.', min: 40 },
    { t: 'Strooi de bloem erover en roer 1 minuut. Blus met de wijn en laat 2 minuten inkoken.' },
    { t: 'Voeg bouillon en tijm toe en laat 20 minuten zachtjes koken. Breng op smaak.', min: 20 },
    { t: 'Schep de soep in de kommen, leg 2 plakjes brood erop en bedek met kaas. Gratineer 3 à 5 minuten onder de hete grill tot de kaas bubbelt.', m: 'oven', min: 4 },
    { t: 'Schep de soep in de kommen, leg brood en kaas erop. Zet de kommen in de airfryer en gratineer 4 à 5 minuten op 200 °C.', m: 'airfryer', min: 5 }
  ],
  tips: ['Haast je niet bij het karamelliseren. Het verschil tussen zachte en écht bruine ui ís de soep.'],
  alt: ['Geen ovenvaste kommen of grill? Smelt de kaas op het brood in een koekenpan met deksel en leg het op de soep.']
},
{
  id: 'paella', naam: 'Paella met kip en chorizo', keuken: 'Spaans', soort: 'Hoofdgerecht',
  tijd: 50, pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Saffraanrijst met kip, chorizo, doperwten en een krokante bodem (socarrat).',
  gerei: [
    { tool: 'hapjespan', tekst: 'Paellapan of brede, ondiepe koekenpan (30 à 34 cm)', of: 'Hapjespan van 28 cm werkt ook; de rijstlaag wordt dan iets dikker, kook 5 minuten langer.' }
  ],
  ingr: [
    { n: 'paellarijst', q: 300, u: 'g', x: 'bomba of andere ronde rijst' },
    { n: 'kippendijfilet', q: 400, u: 'g', x: 'in stukken' },
    { n: 'chorizo', q: 120, u: 'g', x: 'in plakjes' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'tomatenblokjes', q: 200, u: 'g' },
    { n: 'saffraan', q: 1, u: 'snuf', x: 'of 1 tl kurkuma' },
    { n: 'gerookt paprikapoeder', q: 1, u: 'tl' },
    { n: 'kippenbouillon', q: 900, u: 'ml', x: 'heet' },
    { n: 'doperwten', q: 150, u: 'g', x: 'diepvries' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'in partjes' },
    { n: 'olijfolie', q: 3, u: 'el' }
  ],
  stappen: [
    { t: 'Week de saffraan in de hete bouillon.' },
    { t: 'Bak kip en chorizo in de olie in de paellapan 6 minuten tot ze kleuren. Schuif naar de rand.', min: 6 },
    { t: 'Bak ui, paprika en knoflook 5 minuten in het midden. Voeg tomaat en paprikapoeder toe en bak 2 minuten.', min: 7 },
    { t: 'Strooi de rijst gelijkmatig over de pan en roer 1 minuut. Giet de bouillon erbij en verdeel alles goed. Vanaf nu niet meer roeren!' },
    { t: 'Laat 10 minuten stevig koken, daarna 8 minuten zachter. Strooi na 10 minuten de doperwten erover.', min: 18 },
    { t: 'Zet het vuur 1 à 2 minuten hoog tot je de bodem hoort knisperen: dat is de socarrat.', min: 2 },
    { t: 'Haal van het vuur, leg een theedoek over de pan en laat 5 minuten rusten. Serveer met citroen.', min: 5 }
  ],
  tips: ['Niet roeren na het toevoegen van de bouillon: zo ontstaat de krokante bodem.'],
  alt: ['Met zeevruchten? Leg in de laatste 5 minuten gamba\'s en mosselen op de rijst.']
},
{
  id: 'patatas-bravas', naam: 'Patatas bravas', keuken: 'Spaans', soort: 'Salade & bijgerecht',
  tijd: 40, pers: 4, niveau: 'Makkelijk', vega: true, pit: 2,
  intro: 'Krokante aardappelblokjes met pittige tomatensaus en knoflookmayonaise. Tapas-favoriet.',
  methodes: [ { id: 'airfryer', naam: 'Airfryer' }, { id: 'oven', naam: 'Oven' }, { id: 'koekenpan', naam: 'Koekenpan' } ],
  gerei: [
    { tool: 'kookpan', tekst: 'Kookpan om de aardappelen voor te koken' },
    { tool: 'airfryer', tekst: 'Airfryer', m: 'airfryer' },
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier', m: 'oven' },
    { tool: 'koekenpan', tekst: 'Grote koekenpan met 1 cm olie', m: 'koekenpan' },
    { tool: 'kookpan', tekst: 'Steelpan voor de bravassaus' }
  ],
  ingr: [
    { n: 'vastkokende aardappelen', q: 800, u: 'g', x: 'in blokjes van 2 cm' },
    { n: 'olijfolie', q: 3, u: 'el' },
    { kop: 'Bravassaus' },
    { n: 'tomatenblokjes', q: 200, u: 'g' },
    { n: 'gerookt paprikapoeder', q: 2, u: 'tl' },
    { n: 'cayennepeper', q: 0.5, u: 'tl' },
    { n: 'knoflook', q: 1, u: 'teen' },
    { n: 'sherry-azijn', q: 1, u: 'tl', x: 'of rode wijnazijn' },
    { kop: 'Alioli' },
    { n: 'mayonaise', q: 4, u: 'el' },
    { n: 'knoflook', q: 1, u: 'teen', x: 'geperst' }
  ],
  stappen: [
    { t: 'Kook de aardappelblokjes 5 minuten in water met zout. Giet af en laat 5 minuten droog stomen.', min: 10 },
    { t: 'Meng met olie en zout. Bak 18 à 20 minuten in de airfryer op 200 °C. Schud elke 5 minuten.', m: 'airfryer', min: 20 },
    { t: 'Meng met olie en zout en spreid uit op de bakplaat. Rooster 30 à 35 minuten in een voorverwarmde oven op 220 °C. Keer halverwege.', m: 'oven', min: 32 },
    { t: 'Bak in 1 cm hete olie in 2 porties 8 à 10 minuten tot ze rondom goudbruin zijn. Laat uitlekken op keukenpapier.', m: 'koekenpan', min: 10 },
    { t: 'Saus: bak de knoflook kort in 1 el olie, voeg tomaat, paprikapoeder en cayenne toe en kook 8 minuten. Pureer of prak glad en voeg de azijn toe.', min: 8 },
    { t: 'Roer mayonaise en knoflook door elkaar. Schep beide sauzen over de warme aardappelen.' }
  ],
  tips: ['Het voorkoken en droog laten stomen zorgt voor de krokante buitenkant.'],
  alt: ['Weinig tijd? Gebruik voorgekookte aardappelblokjes uit de koeling; sla dan stap 1 over.']
},
{
  id: 'smash-burgers', naam: 'Smash burgers', ook: ['hamburger', 'hamburgers'], keuken: 'Amerikaans', soort: 'Hoofdgerecht',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Dunne, platgedrukte burgers met knapperige randjes, gesmolten cheddar en burgersaus.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Gietijzeren of dikke RVS koekenpan (28 cm); antiaanbak wordt niet heet genoeg' },
    { tool: 'koekenpan', tekst: 'Stevige spatel en een steelpan of pers om te drukken' }
  ],
  ingr: [
    { n: 'rundergehakt', q: 600, u: 'g', x: 'met 20% vet, in 8 balletjes' },
    { n: 'hamburgerbroodjes', q: 4, u: 'st', x: 'brioche' },
    { n: 'cheddar', q: 8, u: 'plak' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'heel fijn gesneden' },
    { n: 'augurk', p: 'augurken', q: 2, u: 'st', x: 'in plakjes' },
    { n: 'ijsbergsla', q: 0.25, u: 'st', x: 'krop' },
    { kop: 'Burgersaus' },
    { n: 'mayonaise', q: 4, u: 'el' },
    { n: 'ketchup', q: 2, u: 'el' },
    { n: 'mosterd', q: 1, u: 'tl' },
    { n: 'augurkennat', q: 1, u: 'tl' }
  ],
  stappen: [
    { t: 'Roer de ingrediënten voor de saus door elkaar. Rooster de broodjes kort met de snijkant in de droge pan.', min: 2 },
    { t: 'Verhit de pan op hoog vuur tot hij rookt, zonder olie.', min: 3 },
    { t: 'Leg 2 gehaktballetjes in de pan, leg er een stukje bakpapier op en druk ze met een steelpan in 10 seconden zo plat mogelijk. Bestrooi met zout en peper.' },
    { t: 'Bak 2 minuten zonder ze te verschuiven tot de onderkant donkerbruin is. Schraap ze los met de spatel, keer om en leg er direct een plak kaas op. Bak nog 1 minuut.', min: 3 },
    { t: 'Herhaal met de rest. Stapel 2 burgers per broodje met saus, sla, ui en augurk.' }
  ],
  tips: ['Druk alleen in de eerste 30 seconden; daarna verlies je sap.'],
  alt: ['Geen gietijzeren pan? Gebruik een grillplaat of bak de burgers in de airfryer: 8 minuten op 200 °C als dikkere burger (niet geplet).', 'Met een contactgrill zoals de OptiGrill: maak 4 burgers van 150 g en grill ze 5 à 6 minuten op het burgerprogramma. Ze worden sappig, maar zonder het knapperige smash-randje.']
},
{
  id: 'mac-and-cheese', naam: 'Mac and cheese', ook: ['macaroni met kaas', 'macaroni kaas'], keuken: 'Amerikaans', soort: 'Hoofdgerecht',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Macaroni in een smeuïge cheddarsaus met een krokant korstje van paneermeel.',
  methodes: [ { id: 'kookpan', naam: 'Alleen pan' }, { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'kookpan', tekst: 'Grote kookpan voor de macaroni' },
    { tool: 'kookpan', tekst: 'Steelpan en garde voor de kaassaus' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal van ca. 20 × 25 cm', m: 'oven' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal die in de mand past', m: 'airfryer' }
  ],
  ingr: [
    { n: 'macaroni', q: 300, u: 'g' },
    { n: 'boter', q: 40, u: 'g' },
    { n: 'bloem', q: 40, u: 'g' },
    { n: 'melk', q: 600, u: 'ml' },
    { n: 'cheddar', q: 200, u: 'g', x: 'belegen, geraspt' },
    { n: 'mosterd', q: 1, u: 'tl' },
    { n: 'paprikapoeder', q: 0.5, u: 'tl' },
    { n: 'paneermeel', q: 4, u: 'el', x: 'of panko' },
    { n: 'Parmezaanse kaas', q: 30, u: 'g' }
  ],
  stappen: [
    { t: 'Kook de macaroni 2 minuten korter dan op de verpakking. Giet af.', min: 8 },
    { t: 'Smelt de boter in de steelpan, roer de bloem erdoor en bak 1 minuut. Klop de melk er in scheutjes door tot een gladde saus. Laat 3 minuten zachtjes koken.', min: 4 },
    { t: 'Haal van het vuur en roer cheddar, mosterd en paprikapoeder erdoor tot de kaas gesmolten is. Breng op smaak met zout.' },
    { t: 'Meng de macaroni door de saus. Klaar! Serveer direct, eventueel met wat extra kaas.', m: 'kookpan' },
    { t: 'Meng de macaroni door de saus en schep in de ovenschaal. Meng paneermeel en Parmezaan en strooi erover. Bak 20 minuten in een voorverwarmde oven op 200 °C.', m: 'oven', min: 20 },
    { t: 'Meng de macaroni door de saus en schep in de schaal. Strooi paneermeel en Parmezaan erover. Bak 10 à 12 minuten in de airfryer op 180 °C.', m: 'airfryer', min: 11 }
  ],
  tips: ['Neem kaas die je zelf raspt; geraspte kaas uit een zak bevat zetmeel en smelt korreliger.'],
  alt: ['Extra: roer gebakken spekjes of gegrilde broccoli erdoor.']
},
{
  id: 'american-pancakes', naam: 'American pancakes', ook: ['amerikaanse pannenkoeken'], keuken: 'Amerikaans', soort: 'Ontbijt & lunch',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Dikke, luchtige pannenkoekjes met blauwe bessen en ahornsiroop.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Antiaanbak koekenpan (24 à 28 cm), of een bakplaat voor pannenkoekjes' }
  ],
  ingr: [
    { n: 'bloem', q: 200, u: 'g' },
    { n: 'bakpoeder', q: 2, u: 'tl' },
    { n: 'suiker', q: 2, u: 'el' },
    { n: 'zout', q: 1, u: 'snuf' },
    { n: 'karnemelk', q: 250, u: 'ml', x: 'of melk met 1 el citroensap' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st' },
    { n: 'boter', q: 30, u: 'g', x: 'gesmolten, plus extra om te bakken' },
    { n: 'blauwe bessen', q: 125, u: 'g', opt: true },
    { n: 'ahornsiroop', q: 4, u: 'el' }
  ],
  stappen: [
    { t: 'Meng bloem, bakpoeder, suiker en zout in een kom.' },
    { t: 'Klop karnemelk, ei en gesmolten boter in een andere kom los. Giet bij de droge ingrediënten en roer kort door. Een paar klontjes is goed: te lang roeren maakt ze taai.' },
    { t: 'Verhit de koekenpan op middellaag vuur met een klein beetje boter.' },
    { t: 'Schep per pancake 3 el beslag in de pan. Druk er eventueel een paar blauwe bessen in. Bak tot er belletjes op het oppervlak komen, ca. 2 minuten.', min: 2 },
    { t: 'Keer om en bak nog 1 minuut tot ze goudbruin zijn. Houd warm in een oven op 80 °C of onder een theedoek.', min: 1 },
    { t: 'Stapel en serveer met ahornsiroop en de rest van de bessen.' }
  ],
  tips: ['Het vuur is goed als de eerste pancake na 2 minuten goudbruin is. Te donker? Zet het vuur lager.'],
  alt: ['Geen karnemelk? Gebruik gewone melk met een eetlepel citroensap of azijn, en laat 5 minuten staan.']
},
{
  id: 'chocolade-lavacake', naam: 'Chocolade lavacake', ook: ['moelleux', 'chocoladefondant', 'lava cake'], keuken: 'Frans', soort: 'Dessert',
  tijd: 25, pers: 4, niveau: 'Gemiddeld', vega: true,
  intro: 'Warme chocoladetaartjes met een vloeibare kern. Indrukwekkend en toch eenvoudig.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'magnetron', naam: 'Magnetron' } ],
  gerei: [
    { tool: 'bakvorm', tekst: '4 ovenvaste ramekins (soufflébakjes, ca. 175 ml), ingevet en bestoven met cacao' },
    { tool: 'kookpan', tekst: 'Steelpan met een kom erop (au bain-marie)', of: 'Of smelt chocolade en boter in de magnetron in stappen van 30 seconden.' },
    { tool: 'magnetron', tekst: 'Magnetronbestendige mokken in plaats van ramekins', m: 'magnetron' }
  ],
  ingr: [
    { n: 'pure chocolade', q: 125, u: 'g', x: '70% cacao' },
    { n: 'roomboter', q: 100, u: 'g' },
    { n: 'ei', p: 'eieren', q: 2, u: 'st' },
    { n: 'eidooier', p: 'eidooiers', q: 2, u: 'st' },
    { n: 'suiker', q: 60, u: 'g' },
    { n: 'bloem', q: 30, u: 'g' },
    { n: 'zout', q: 1, u: 'snuf' },
    { n: 'cacaopoeder', q: 1, u: 'el', x: 'voor de vormpjes' }
  ],
  stappen: [
    { t: 'Smelt chocolade en boter au bain-marie. Laat iets afkoelen.' },
    { t: 'Klop eieren, eidooiers, suiker en zout 3 minuten luchtig.', min: 3 },
    { t: 'Spatel de chocolade en dan de bloem erdoor. Verdeel over de vormpjes (3/4 vol).' },
    { t: 'Bak 10 à 12 minuten in een voorverwarmde oven op 220 °C. De rand moet stevig zijn, het midden nog zacht.', m: 'oven', min: 11 },
    { t: 'Bak 8 à 9 minuten in een voorverwarmde airfryer op 190 °C.', m: 'airfryer', min: 8 },
    { t: 'Verwarm 1 mok per keer 50 à 60 seconden op 800 W. Kijk na 45 seconden: de bovenkant moet net droog zijn.', m: 'magnetron', min: 1 },
    { t: 'Laat 1 minuut staan. Gebruik ramekins? Ga met een mes langs de rand en stort ze op een bordje. Serveer met vanille-ijs.' }
  ],
  tips: ['Het beslag kan tot 1 dag van tevoren in de vormpjes in de koelkast. Bak dan 2 minuten langer.'],
  alt: ['Geen ramekins? Gebruik een muffinvorm en bak 2 minuten korter.']
}
);
