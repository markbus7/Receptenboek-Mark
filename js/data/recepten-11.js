/* Eieren en lunch */
RECEPTEN.push(
{
  id: 'franse-omelet', naam: 'Franse omelet met kruiden', keuken: 'Frans', soort: 'Ontbijt & lunch',
  tijd: 10, pers: 1, niveau: 'Gemiddeld', vega: true,
  intro: 'Een zachte, romige omelet die je oprolt. Bleek van buiten en net niet gestold van binnen.',
  gerei: [ { tool: 'koekenpan', tekst: 'Koekenpan van 20 à 24 cm, liefst antiaanbak, en een siliconen spatel' } ],
  ingr: [
    { n: 'ei', p: 'eieren', q: 3, u: 'st' },
    { n: 'boter', q: 15, u: 'g' },
    { n: 'bieslook', q: 1, u: 'el', x: 'fijngesneden' },
    { n: 'verse peterselie', q: 1, u: 'el', x: 'fijngehakt' },
    { n: 'Gruyère', q: 20, u: 'g', x: 'geraspt', opt: true },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Klop de eieren met een snuf zout los met een vork, tot je geen slierten eiwit meer ziet.' },
    { t: 'Smelt de boter in de pan op middelhoog vuur, tot het schuim net wegtrekt. De boter mag niet bruin worden.' },
    { t: 'Giet de eieren erin. Roer 20 à 30 seconden met de spatel terwijl je de pan heen en weer schudt, tot er kleine zachte wolkjes ontstaan en de onderkant net stolt.', min: 1 },
    { t: 'Strijk de omelet glad, strooi de kruiden en eventueel de kaas erover en laat nog 30 seconden staan. De bovenkant mag nog een beetje vochtig zijn.' },
    { t: 'Kantel de pan, rol de omelet met de spatel naar de rand en laat hem met de naad naar onderen op een bord glijden. Peper erover.' }
  ],
  tips: ['Een Franse omelet hoort niet bruin te worden. Zet het vuur lager als hij te snel kleurt.'],
  alt: ['Liever een stevige omelet? Laat hem na stap 4 met een deksel op de pan nog 2 minuten op laag vuur staan en vouw hem dubbel.']
},
{
  id: 'boerenomelet', naam: 'Boerenomelet', keuken: 'Nederlands', soort: 'Ontbijt & lunch',
  tijd: 25, pers: 2, niveau: 'Makkelijk', vega: false,
  intro: 'Een stevige omelet vol aardappel, spek, ui, paprika en kaas. Een complete lunch uit één pan.',
  gerei: [ { tool: 'koekenpan', tekst: 'Koekenpan van 24 à 28 cm met passende deksel' } ],
  ingr: [
    { n: 'ei', p: 'eieren', q: 6, u: 'st' },
    { n: 'melk', q: 2, u: 'el' },
    { n: 'vastkokende aardappelen', q: 300, u: 'g', x: 'gekookt, in blokjes (restjes zijn perfect)' },
    { n: 'spekblokjes', q: 100, u: 'g' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in blokjes' },
    { n: 'doperwten', q: 75, u: 'g', x: 'diepvries' },
    { n: 'geraspte kaas', q: 50, u: 'g', x: 'belegen' },
    { n: 'boter', q: 15, u: 'g' },
    { n: 'verse peterselie', q: 1, u: 'el' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Bak de spekblokjes 4 minuten in de droge koekenpan op middelhoog vuur.', min: 4 },
    { t: 'Voeg de boter, ui en paprika toe en bak 4 minuten. Doe de aardappel erbij en bak 6 minuten tot hij goudbruin is.', min: 10 },
    { t: 'Klop de eieren los met de melk, zout en peper. Strooi de doperwten over de aardappel en giet de eieren erover.' },
    { t: 'Zet het vuur laag, leg de deksel op de pan en laat 6 à 8 minuten stollen.', min: 7 },
    { t: 'Strooi de kaas erover, deksel erop en laat nog 2 minuten smelten. Bestrooi met peterselie en snijd in punten.', min: 2 }
  ],
  tips: ['Boerenomelet is ideaal om restjes op te maken: gekookte groente, worst of kip kan er allemaal in.'],
  alt: ['Vegetarisch? Laat het spek weg en bak 150 g champignons mee.']
},
{
  id: 'uitsmijter', naam: 'Uitsmijter met ham en kaas', keuken: 'Nederlands', soort: 'Ontbijt & lunch',
  tijd: 10, pers: 2, niveau: 'Makkelijk', vega: false,
  intro: 'Dé Hollandse lunchklassieker: boterhammen met ham en kaas en daarop spiegeleieren.',
  gerei: [ { tool: 'koekenpan', tekst: 'Koekenpan van 24 à 28 cm met deksel' } ],
  ingr: [
    { n: 'brood', q: 4, u: 'plak', x: 'boerenbrood of wit' },
    { n: 'boter', q: 20, u: 'g' },
    { n: 'ham', q: 4, u: 'plak' },
    { n: 'belegen kaas', q: 4, u: 'plak' },
    { n: 'ei', p: 'eieren', q: 4, u: 'st' },
    { n: 'tomaat', p: 'tomaten', q: 1, u: 'st', x: 'in plakjes, om te garneren', opt: true },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Besmeer de boterhammen dun met boter en leg er ham en kaas op. Leg ze op de borden.' },
    { t: 'Smelt de rest van de boter in de koekenpan op middelhoog vuur. Breek de eieren erin, naast elkaar.' },
    { t: 'Zet het vuur iets lager en bak 3 à 4 minuten. Leg de laatste minuut een deksel op de pan, dan stolt het eiwit bovenop ook.', min: 4 },
    { t: 'Schuif de eieren op de boterhammen en bestrooi met zout en peper. Garneer met tomaat.' }
  ],
  tips: ['Gesmolten kaas? Leg de plakken kaas de laatste minuut op de eieren in de pan, met de deksel erop.'],
  alt: ['Vegetarisch? Laat de ham weg en neem een extra plak kaas of een paar plakjes tomaat.']
},
{
  id: 'roerei-toast', naam: 'Romig roerei op toast', keuken: 'Brits', soort: 'Ontbijt & lunch',
  tijd: 10, pers: 2, niveau: 'Makkelijk', vega: true,
  intro: 'Langzaam geroerd roerei met grote, zachte vlokken, op geroosterd zuurdesembrood.',
  gerei: [ { tool: 'koekenpan', tekst: 'Antiaanbak koekenpan of steelpan en een siliconen spatel' } ],
  ingr: [
    { n: 'ei', p: 'eieren', q: 5, u: 'st' },
    { n: 'boter', q: 20, u: 'g' },
    { n: 'crème fraîche', q: 1, u: 'el' },
    { n: 'bieslook', q: 1, u: 'el', x: 'fijngesneden' },
    { n: 'brood', q: 2, u: 'plak', x: 'zuurdesem' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Klop de eieren los met een snuf zout.' },
    { t: 'Smelt de helft van de boter in de pan op laag vuur. Giet de eieren erin.' },
    { t: 'Roer steeds met de spatel over de bodem en neem de pan af en toe even van het vuur. Na 3 à 4 minuten heb je grote, romige vlokken. Stop als het nog een beetje glanst.', min: 4 },
    { t: 'Haal de pan van het vuur en roer de crème fraîche en de rest van de boter erdoor.' },
    { t: 'Rooster het brood en schep het roerei erop. Bestrooi met bieslook en peper.' }
  ],
  tips: ['Roerei gaart na op het bord. Haal het dus van het vuur net vóór het klaar lijkt.'],
  alt: ['Geen crème fraîche? Een scheutje room of een extra klontje boter werkt ook.']
},
{
  id: 'tortilla-patatas', naam: 'Tortilla de patatas', ook: ['spaanse tortilla', 'spaanse omelet'], keuken: 'Spaans', soort: 'Ontbijt & lunch',
  tijd: 45, pers: 4, niveau: 'Gemiddeld', vega: true,
  intro: 'De dikke Spaanse aardappelomelet: zachte aardappel en ui, langzaam gegaard in olijfolie.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan (omkeren)' }, { id: 'oven', naam: 'Oven (afmaken)' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Diepe koekenpan van 24 cm en een groot plat bord om te keren', m: 'koekenpan' },
    { tool: 'koekenpan', tekst: 'Ovenvaste koekenpan van 24 cm (RVS of gietijzer, zonder plastic handvat)', m: 'oven' }
  ],
  ingr: [
    { n: 'vastkokende aardappelen', q: 600, u: 'g', x: 'in dunne plakjes' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in dunne halve ringen' },
    { n: 'ei', p: 'eieren', q: 6, u: 'st' },
    { n: 'olijfolie', q: 200, u: 'ml', x: 'om in te garen; je houdt het meeste over' },
    { n: 'zout', q: 1, u: 'tl' }
  ],
  stappen: [
    { t: 'Verwarm de olie in de pan op middellaag vuur. Gaar aardappel en ui er 20 minuten in, tot ze zacht zijn maar niet bruin. Schep af en toe om.', min: 20 },
    { t: 'Schep aardappel en ui in een zeef en laat uitlekken. Bewaar de olie.' },
    { t: 'Klop de eieren los met het zout. Schep de aardappel erdoor en laat 10 minuten staan.', min: 10 },
    { t: 'Verhit 2 el van de olie in de pan op middelhoog vuur. Giet het mengsel erin, zet het vuur laag en bak 6 à 8 minuten, tot de onderkant goudbruin is.', min: 7 },
    { t: 'Leg een groot bord op de pan en keer de tortilla in één beweging om. Laat hem terug in de pan glijden en bak de andere kant 3 à 4 minuten.', m: 'koekenpan', min: 4 },
    { t: 'Zet de pan 10 minuten in een voorverwarmde oven op 180 °C, tot de bovenkant net gestold is. Zo hoef je niet te keren.', m: 'oven', min: 10 },
    { t: 'Laat 5 minuten rusten en snijd in punten. Lekker warm én koud.', min: 5 }
  ],
  tips: ['In Spanje mag het midden nog een beetje zacht zijn: "poco hecha".'],
  alt: ['Met chorizo: bak 75 g chorizo in blokjes mee in stap 4.']
},
{
  id: 'frittata', naam: 'Frittata met courgette en feta', ook: ['italiaanse omelet'], keuken: 'Italiaans', soort: 'Ontbijt & lunch',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Italiaanse ovenomelet vol groente en feta. Warm als lunch, koud in je lunchtrommel.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'koekenpan', naam: 'Alleen pan' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Ovenvaste koekenpan van 24 à 26 cm (RVS of gietijzer)', m: 'oven' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de groente', m: 'airfryer' },
    { tool: 'bakvorm', tekst: 'Ingevette bakvorm van 18 à 20 cm die in de mand past', m: 'airfryer' },
    { tool: 'koekenpan', tekst: 'Koekenpan van 24 cm met deksel', m: 'koekenpan' }
  ],
  ingr: [
    { n: 'ei', p: 'eieren', q: 8, u: 'st' },
    { n: 'melk', q: 3, u: 'el' },
    { n: 'courgette', p: 'courgettes', q: 1, u: 'st', x: 'in dunne halve maantjes' },
    { n: 'rode ui', p: 'rode uien', q: 1, u: 'st' },
    { n: 'cherrytomaten', q: 150, u: 'g', x: 'gehalveerd' },
    { n: 'feta', q: 100, u: 'g' },
    { n: 'Parmezaanse kaas', q: 30, u: 'g', x: 'geraspt' },
    { n: 'verse basilicum', q: 1, u: 'handje' },
    { n: 'olijfolie', q: 2, u: 'el' }
  ],
  stappen: [
    { t: 'Bak ui en courgette in de olie 6 minuten op middelhoog vuur. Breng op smaak met zout en peper.', min: 6 },
    { t: 'Klop de eieren los met melk, Parmezaan, zout en peper.' },
    { t: 'Verwarm de oven voor op 190 °C. Verdeel de tomaten over de groente in de pan, giet de eieren erover en brokkel de feta erop. Bak 2 minuten op het vuur tot de rand stolt.', m: 'oven', min: 2 },
    { t: 'Zet de pan 12 à 15 minuten in de oven tot de frittata in het midden gestold en licht gerezen is.', m: 'oven', min: 13 },
    { t: 'Doe groente, tomaten en eimengsel in de ingevette bakvorm en brokkel de feta erop. Bak 15 à 18 minuten in de airfryer op 160 °C.', m: 'airfryer', min: 16 },
    { t: 'Verdeel tomaten, eieren en feta over de groente in de pan. Deksel erop en laat 12 minuten stollen op laag vuur.', m: 'koekenpan', min: 12 },
    { t: 'Laat 5 minuten rusten, scheur de basilicum erover en snijd in punten.', min: 5 }
  ],
  tips: ['Frittata is een goede restjesverwerker: gegrilde groente, spinazie of pasta van gisteren kan er ook in.'],
  alt: ['Geen feta? Geitenkaas of mozzarella werkt ook.']
},
{
  id: 'menemen', naam: 'Menemen', ook: ['turks roerei', 'turkse eieren'], keuken: 'Turks', soort: 'Ontbijt & lunch',
  tijd: 20, pers: 2, niveau: 'Makkelijk', vega: true, pit: 1,
  intro: 'Turks ontbijt van zacht gestold ei in een saus van tomaat en groene peper. Met veel brood.',
  gerei: [ { tool: 'koekenpan', tekst: 'Koekenpan of kleine hapjespan (24 cm); in Turkije een sahan' } ],
  ingr: [
    { n: 'ei', p: 'eieren', q: 4, u: 'st' },
    { n: 'tomaat', p: 'tomaten', q: 4, u: 'st', x: 'rijp, in blokjes', of: { q: 400, u: 'g', n: 'tomatenblokjes uit blik' } },
    { n: 'puntpaprika', p: 'puntpaprika\'s', q: 2, u: 'st', x: 'groen, of 3 Turkse sivri-pepers' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', opt: true },
    { n: 'boter', q: 20, u: 'g', x: 'of olijfolie' },
    { n: 'pul biber', q: 0.5, u: 'tl', x: 'Turkse chilivlokken' },
    { n: 'Turks brood', q: 1, u: 'st' },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Smelt de boter in de pan. Bak de paprika (en de ui) 5 minuten op middelhoog vuur tot hij zacht is.', min: 5 },
    { t: 'Voeg de tomaat en een snuf zout toe en laat 8 à 10 minuten inkoken tot een dikke saus.', min: 9 },
    { t: 'Breek de eieren in de pan. Roer ze heel losjes door de saus en laat 2 à 3 minuten zacht stollen. Het mag nog smeuïg zijn.', min: 3 },
    { t: 'Bestrooi met pul biber en zet de pan op tafel met warm brood.' }
  ],
  tips: ['Liever de eieren heel? Roer niet, leg een deksel op de pan en laat ze 5 minuten pocheren.'],
  alt: ['Met kaas: brokkel er op het eind 50 g feta of beyaz peynir over.']
},
{
  id: 'tamagoyaki', naam: 'Tamagoyaki', ook: ['japanse omelet'], keuken: 'Japans', soort: 'Ontbijt & lunch',
  tijd: 15, pers: 2, niveau: 'Moeilijk', vega: true,
  intro: 'Japanse opgerolde omelet, licht zoet en hartig, in dunne laagjes gebakken. Lekker in een bento.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Rechthoekige tamagoyakipan', of: 'Een ronde koekenpan van 20 cm kan ook: vouw elk laagje eerst aan twee kanten naar binnen tot een rechthoek.' },
    { tool: 'koekenpan', tekst: 'Eetstokjes of een smalle spatel, en eventueel een bamboe sushimatje' }
  ],
  ingr: [
    { n: 'ei', p: 'eieren', q: 4, u: 'st' },
    { n: 'suiker', q: 1, u: 'el' },
    { n: 'mirin', q: 1, u: 'el' },
    { n: 'sojasaus', q: 1, u: 'tl' },
    { n: 'dashi', q: 2, u: 'el', x: 'of water', opt: true },
    { n: 'zonnebloemolie', q: 1, u: 'el' }
  ],
  stappen: [
    { t: 'Klop eieren, suiker, mirin, sojasaus en dashi los zonder veel lucht erin te kloppen. Giet door een zeef.' },
    { t: 'Verhit de pan op middellaag vuur en vet hem in met een stukje keukenpapier met olie.' },
    { t: 'Giet een dun laagje ei in de pan. Laat het bijna stollen en rol het met de eetstokjes van achter naar voren op.', min: 1 },
    { t: 'Schuif de rol naar achteren, vet de pan opnieuw in en giet een nieuw laagje. Til de rol even op zodat ei eronder loopt. Rol weer op, nu met de rol als kern. Herhaal tot het ei op is.' },
    { t: 'Leg de omelet in het sushimatje, druk hem in vorm en laat 2 minuten rusten. Snijd in plakken van 2 cm.', min: 2 }
  ],
  tips: ['Te hoog vuur maakt de laagjes bruin en droog. Ze moeten geel en zacht blijven.'],
  alt: ['Geen mirin? Gebruik een extra halve eetlepel suiker.']
},
{
  id: 'eggs-benedict', naam: 'Eggs Benedict', keuken: 'Amerikaans', soort: 'Ontbijt & lunch',
  tijd: 25, pers: 2, niveau: 'Moeilijk', vega: false,
  intro: 'Gepocheerde eieren met ham op een geroosterde muffin, met romige hollandaisesaus. Een feestelijke brunch.',
  gerei: [
    { tool: 'kookpan', tekst: 'Brede kookpan om te pocheren, en een schuimspaan' },
    { tool: 'staafmixer', tekst: 'Staafmixer met hoge beker voor snelle hollandaise', of: 'Geen staafmixer? Klop de dooiers met citroensap au bain-marie en klop de boter er druppelsgewijs door.' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de ham' }
  ],
  ingr: [
    { n: 'ei', p: 'eieren', q: 4, u: 'st', x: 'heel vers, om te pocheren' },
    { n: 'English muffins', q: 2, u: 'st', x: 'gehalveerd, of witte bolletjes' },
    { n: 'ham', q: 4, u: 'plak', x: 'of ontbijtspek' },
    { n: 'azijn', q: 1, u: 'el' },
    { kop: 'Hollandaise' },
    { n: 'eidooier', p: 'eidooiers', q: 2, u: 'st' },
    { n: 'boter', q: 125, u: 'g', x: 'gesmolten en heet' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { n: 'cayennepeper', q: 1, u: 'snuf' },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Hollandaise: doe dooiers, citroensap en een snuf zout in de hoge beker. Zet de staafmixer aan en giet de hete boter er in een dun straaltje bij, tot een dikke, glanzende saus. Breng op smaak met cayenne. Zet de beker in een kom warm water.' },
    { t: 'Breng een brede pan water met de azijn aan de kook en zet het vuur laag, zodat het water net trilt.' },
    { t: 'Breek elk ei in een kopje. Roer een draaikolk in het water en laat een ei in het midden glijden. Pocheer 3 minuten. Schep het uit met de schuimspaan en laat uitlekken op keukenpapier. Pocheer zo alle eieren.', min: 3 },
    { t: 'Rooster de muffins en bak de ham 1 minuut per kant in de koekenpan.', min: 2 },
    { t: 'Leg op elke muffinhelft ham en een gepocheerd ei en schep de hollandaise erover.' }
  ],
  tips: ['Hoe verser het ei, hoe mooier het bij elkaar blijft tijdens het pocheren.'],
  alt: ['Eggs Florentine (vegetarisch): vervang de ham door kort geslonken spinazie.']
},
{
  id: 'huevos-rancheros', naam: 'Huevos rancheros', keuken: 'Mexicaans', soort: 'Ontbijt & lunch',
  tijd: 25, pers: 2, niveau: 'Makkelijk', vega: true, pit: 1,
  intro: 'Gebakken eieren op een krokante tortilla met bonen, pittige tomatensalsa en avocado.',
  gerei: [
    { tool: 'hapjespan', tekst: 'Hapjespan of steelpan voor de salsa' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de tortilla\'s en eieren' }
  ],
  ingr: [
    { n: 'ei', p: 'eieren', q: 4, u: 'st' },
    { n: 'tortilla\'s', q: 4, u: 'st', x: 'klein, liefst van mais' },
    { n: 'zwarte bonen', q: 1, u: 'blik', x: '400 g, uitgelekt' },
    { n: 'avocado', p: 'avocado\'s', q: 1, u: 'st' },
    { n: 'feta', q: 50, u: 'g', x: 'of queso fresco' },
    { n: 'verse koriander', q: 1, u: 'handje' },
    { n: 'limoen', p: 'limoenen', q: 1, u: 'st' },
    { kop: 'Salsa roja' },
    { n: 'tomatenblokjes', q: 1, u: 'blik', x: '400 g' },
    { n: 'ui', p: 'uien', q: 0.5, u: 'st' },
    { n: 'knoflook', q: 1, u: 'teen' },
    { n: 'jalapeño', p: 'jalapeños', q: 1, u: 'st' },
    { n: 'komijn', q: 0.5, u: 'tl' },
    { n: 'olijfolie', q: 2, u: 'el' }
  ],
  stappen: [
    { t: 'Salsa: bak ui, knoflook en jalapeño 3 minuten in 1 el olie. Voeg tomaten, komijn en zout toe en laat 10 minuten inkoken.', min: 13 },
    { t: 'Warm de bonen op met een scheutje water en prak ze grof. Breng op smaak met zout en limoensap.', min: 3 },
    { t: 'Bak de tortilla\'s 1 minuut per kant in de koekenpan met een drupje olie, tot ze licht krokant zijn.', min: 2 },
    { t: 'Bak de eieren als spiegelei in de rest van de olie, 3 minuten met de deksel erop.', min: 3 },
    { t: 'Besmeer de tortilla\'s met bonen, leg er een ei op en schep salsa eromheen. Maak af met avocado, feta, koriander en limoen.' }
  ],
  tips: ['De salsa kun je een dag van tevoren maken; hij wordt er alleen maar lekkerder van.'],
  alt: ['Geen jalapeño? Gebruik een halve rode peper of een theelepel sambal.']
},
{
  id: 'eieren-koken', naam: 'Eieren koken: zacht, medium of hard', ook: ['gekookt ei', 'gekookte eieren', 'eitje koken', 'zacht ei', 'hardgekookt ei'], keuken: 'Nederlands', soort: 'Ontbijt & lunch',
  tijd: 12, pers: 2, niveau: 'Makkelijk', vega: true,
  intro: 'Het perfecte gekookte ei, precies zoals jij hem wilt. Met timers voor zacht, medium en hard.',
  methodes: [ { id: 'kookpan', naam: 'Kookpan' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'kookpan', tekst: 'Steelpan waar de eieren in één laag in passen, en een schuimspaan', m: 'kookpan' },
    { tool: 'airfryer', tekst: 'Airfryer; de eieren gaan er zo in, zonder water', m: 'airfryer' }
  ],
  ingr: [
    { n: 'ei', p: 'eieren', q: 4, u: 'st', x: 'recht uit de koelkast' },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Breng zoveel water aan de kook dat de eieren straks ruim onder staan.', m: 'kookpan', min: 5 },
    { t: 'Laat de eieren met de schuimspaan voorzichtig in het kokende water zakken en zet het vuur iets lager, zodat het water zacht blijft koken.', m: 'kookpan' },
    { t: 'Zacht ei (vloeibare dooier): 6 minuten koken.', m: 'kookpan', min: 6 },
    { t: 'Medium ei (smeuïge dooier, goed voor salades en ramen): 8 minuten koken.', m: 'kookpan', min: 8 },
    { t: 'Hard ei (stevige dooier): 10 minuten koken.', m: 'kookpan', min: 10 },
    { t: 'Leg de eieren in de airfryer en zet hem op 150 °C. Zacht: 10 minuten. Medium: 12 minuten. Hard: 15 minuten.', m: 'airfryer', min: 12 },
    { t: 'Leg de eieren direct 1 minuut in koud water. Dan gaart de dooier niet verder en pellen ze makkelijker.', min: 1 }
  ],
  tips: ['Eieren van een paar dagen oud pellen makkelijker dan heel verse.', 'Kleine of grote eieren? Trek er 1 minuut af of tel er 1 minuut bij.'],
  alt: ['Kook je eieren uit de kast (op kamertemperatuur)? Haal er dan 1 minuut af.']
}
);
