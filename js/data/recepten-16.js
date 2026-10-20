/* Indonesisch (pindasaus), Surinaams, Thais, Vietnamees en Brits */
RECEPTEN.push(
{
  id: 'pindasaus', naam: 'Pindasaus (satésaus)', ook: ['satesaus', 'satésaus', 'pindasaus zelf maken'],
  keuken: 'Indonesisch', soort: 'Saus',
  tijd: 15, pers: 4, niveau: 'Makkelijk', vega: true, pit: 1,
  intro: 'Romige, zoet-pittige pindasaus van pindakaas, ketjap en sambal. In een kwartier klaar en veel lekkerder dan uit een zakje.',
  gerei: [ { tool: 'kookpan', tekst: 'Steelpan met dikke bodem en een garde of houten lepel' } ],
  ingr: [
    { n: 'pindakaas', q: 200, u: 'g', x: 'liefst 100% pinda, met of zonder stukjes' },
    { n: 'kokosmelk', q: 200, u: 'ml', x: 'of water' },
    { n: 'water', q: 100, u: 'ml', x: 'om de saus op dikte te brengen' },
    { n: 'ui', p: 'uien', q: 0.5, u: 'st', x: 'heel fijn gesnipperd, of 1 sjalot' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'geperst' },
    { n: 'ketjap manis', q: 2, u: 'el' },
    { n: 'sambal oelek', q: 1, u: 'tl', x: 'meer of minder naar smaak' },
    { n: 'gula djawa', q: 1, u: 'tl', x: 'of bruine suiker', opt: true },
    { n: 'limoen', p: 'limoenen', q: 0.5, u: 'st', x: 'sap, of 1 tl asem (tamarinde)' },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Verhit de olie in de steelpan op middelhoog vuur. Fruit de ui 3 minuten zacht en glazig en bak de knoflook 1 minuut mee. De knoflook mag niet bruin worden.', min: 4 },
    { t: 'Zet het vuur laag. Voeg pindakaas, kokosmelk, ketjap, sambal en eventueel gula djawa toe en roer met de garde tot de pindakaas gesmolten is en de saus glad is.' },
    { t: 'Laat de saus 5 minuten heel zachtjes pruttelen en roer regelmatig, want pindasaus brandt snel aan. Hij wordt dikker en gaat glanzen.', min: 5 },
    { t: 'Maak de saus met scheutjes water zo dik als je wilt: dik om te dippen, lopend om over gado-gado te gieten. Breng op smaak met limoensap en zout.' }
  ],
  tips: [
    'Voor de echte Indische diepte bak je een stukje trassi (gefermenteerde garnalenpasta uit de toko) van een halve centimeter mee met de ui. Dan is de saus wel niet meer vegetarisch.',
    'De saus wordt stijf in de koelkast en blijft 4 dagen goed. Warm hem op met 2 el water.'
  ],
  alt: [
    'Van pinda\'s in plaats van pindakaas: rooster 200 g ongezouten pinda\'s 5 à 6 minuten in een droge koekenpan tot ze goudbruin zijn. Laat ze afkoelen en maal ze in de hakmolen of met de staafmixer zo fijn of grof als je wilt. Kook ze daarna 10 minuten zachtjes met de rest van de ingrediënten en 250 ml water.',
    'Geen kokosmelk? Gebruik alleen water; de saus wordt dan iets minder romig.'
  ],
  bij: ['sate-ajam', 'gado-gado', 'bakabana']
},
{
  id: 'saoto-soep', naam: 'Saoto soep', ook: ['saoto', 'soto ajam'],
  keuken: 'Surinaams', soort: 'Soep',
  tijd: 40, wacht: '1 uur trekken', pers: 4, niveau: 'Gemiddeld', vega: false, pit: 2,
  intro: 'Heldere, geurige kippensoep met laos, sereh en djahé, die via Java in Suriname terechtkwam. Aan tafel maak je je eigen kom af met taugé, ei, gebakken uitjes en knapperige aardappelstengels.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of soeppan (minimaal 4 liter) met deksel' },
    { tool: 'kookpan', tekst: 'Kookpan voor de eieren en de vermicelli' }
  ],
  ingr: [
    { kop: 'Bouillon' },
    { n: 'kippenpoten', q: 800, u: 'g', x: 'of 4 kippendijen met bot en vel' },
    { n: 'kippenbouillon', q: 2, u: 'l', x: 'of water met 2 bouillonblokjes' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'fijngesnipperd' },
    { n: 'knoflook', q: 4, u: 'teen', x: 'fijngehakt' },
    { n: 'gember', q: 30, u: 'g', x: 'djahé, in plakjes' },
    { n: 'laos', q: 1, u: 'tl', x: 'gemalen, of 3 cm vers in plakjes' },
    { n: 'ketoembar', q: 1, u: 'tl', x: 'gemalen koriander' },
    { n: 'citroengras', q: 2, u: 'stengel', x: 'sereh, gekneusd' },
    { n: 'salamblad', q: 2, u: 'st', x: 'of laurier', opt: true },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { n: 'zout' }, { n: 'peper' },
    { kop: 'In de kom' },
    { n: 'rijstvermicelli', q: 150, u: 'g', x: 'mihoen, of 200 g gekookte rijst' },
    { n: 'taugé', q: 200, u: 'g' },
    { n: 'ei', p: 'eieren', q: 4, u: 'st' },
    { n: 'gebakken uitjes', q: 4, u: 'el' },
    { n: 'aardappelstengels', q: 100, u: 'g', x: 'chipsstengels uit een zak, of verse frietjes' },
    { n: 'verse selderij', q: 10, u: 'g', x: 'fijngesneden, of lente-ui' },
    { n: 'sambal oelek', q: 4, u: 'tl', x: 'of Surinaamse sambal' },
    { n: 'ketjap manis', q: 4, u: 'el' },
    { n: 'limoen', p: 'limoenen', q: 1, u: 'st', x: 'in partjes', opt: true }
  ],
  stappen: [
    { t: 'Verhit de olie in de Dutch oven op middelhoog vuur. Bak ui, knoflook, gember, laos en ketoembar 3 minuten tot het geurt. De ui mag niet bruin worden.', min: 3 },
    { t: 'Leg de kippenpoten erin en bak ze 2 minuten mee. Giet de bouillon erbij, voeg citroengras en salamblad toe en breng aan de kook. Schep het grijze schuim eraf.', min: 5 },
    { t: 'Zet het vuur laag, leg de deksel op een kier en laat de soep 1 uur zachtjes trekken. Hij mag nauwelijks borrelen, dan blijft hij helder.', min: 60 },
    { t: 'Kook intussen de eieren 9 minuten hard, laat ze schrikken in koud water en pel ze. Kook in hetzelfde water de vermicelli volgens de verpakking en laat uitlekken.', min: 12 },
    { t: 'Haal de kip uit de soep en pluk het vlees met twee vorken van de botten; vel en botten gaan weg. Vis citroengras, salamblad en gember eruit. Breng de bouillon op smaak met zout en peper en doe de kip terug.' },
    { t: 'Verdeel vermicelli, rauwe taugé en kip over diepe kommen en schep de kokende bouillon erover; die gaart de taugé net. Leg er een gehalveerd ei op.' },
    { t: 'Zet gebakken uitjes, aardappelstengels, selderij, sambal, ketjap en limoen op tafel, zodat iedereen zijn eigen kom afmaakt.' }
  ],
  tips: [
    'Strooi de aardappelstengels er pas op het laatst over, dan blijven ze knapperig. Dat contrast maakt saoto.',
    'De bouillon met kip kun je een dag van tevoren maken of invriezen. Maak de garnering vers.'
  ],
  alt: ['Weinig tijd? Gebruik 500 g kippendijfilet zonder bot en laat de soep maar 25 minuten trekken. Hij wordt iets minder vol van smaak.']
},
{
  id: 'pom', naam: 'Pom', keuken: 'Surinaams', soort: 'Hoofdgerecht',
  tijd: 45, wacht: '1 uur in de oven', pers: 6, niveau: 'Gemiddeld', vega: false, pit: 1,
  intro: 'De Surinaamse feestschotel: gestoofde kip tussen twee lagen geraspte pomtajer, met een zoete, citrusachtige korst. Pom hoort bij elke verjaardag.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of hapjespan voor de kip' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal van ca. 25 × 35 cm, of twee kleinere' }
  ],
  ingr: [
    { kop: 'Kip' },
    { n: 'kippendijfilet', q: 800, u: 'g', x: 'in blokjes van 2 cm' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'sap' },
    { n: 'knoflook', q: 4, u: 'teen', x: 'geperst' },
    { n: 'ui', p: 'uien', q: 3, u: 'st', x: 'in halve ringen' },
    { n: 'tomaat', p: 'tomaten', q: 3, u: 'st', x: 'in blokjes', of: { q: 300, u: 'g', n: 'tomatenblokjes uit blik' } },
    { n: 'tomatenpuree', q: 2, u: 'el' },
    { n: 'madame jeanette', p: 'madame jeanettes', q: 1, u: 'st', x: 'heel, of 1 tl sambal' },
    { n: 'kippenbouillon', q: 250, u: 'ml' },
    { n: 'boter', q: 25, u: 'g' },
    { n: 'zout' }, { n: 'peper' },
    { kop: 'Pom' },
    { n: 'pomtajer', q: 1000, u: 'g', x: 'geraspt, uit de diepvries van de toko; ontdooid' },
    { n: 'sinaasappelsap', q: 150, u: 'ml', x: 'vers geperst (ca. 2 sinaasappels)' },
    { n: 'suiker', q: 1, u: 'el' },
    { n: 'nootmuskaat', q: 0.5, u: 'tl' },
    { n: 'boter', q: 75, u: 'g', x: 'gesmolten' },
    { n: 'piccalilly', q: 3, u: 'el', opt: true }
  ],
  stappen: [
    { t: 'Meng de kip met het citroensap, de helft van de knoflook, zout en peper. Laat minimaal 15 minuten marineren, of een nacht in de koelkast.', min: 15 },
    { t: 'Meng de ontdooide pomtajer met sinaasappelsap, suiker, nootmuskaat, 1 tl zout en twee derde van de gesmolten boter.' },
    { t: 'Smelt 25 g boter in de Dutch oven op middelhoog vuur. Bak de kip 5 minuten rondom bruin en schep hem uit de pan.', min: 5 },
    { t: 'Bak de ui met de rest van de knoflook 8 minuten zacht en lichtbruin. Voeg tomaat, tomatenpuree en de hele madame jeanette toe en bak 3 minuten. Doe de kip terug, giet de bouillon erbij en laat 20 minuten zonder deksel stoven tot de saus dik is. Haal de madame jeanette eruit.', min: 31 },
    { t: 'Verwarm de oven voor op 180 °C (hetelucht 160 °C). Vet de ovenschaal in en roer 4 el stoofvocht van de kip door de pom; dat geeft extra smaak.' },
    { t: 'Strijk de helft van de pom uit over de bodem van de schaal. Schep de kip met saus erover en dek af met de rest van de pom. Strijk glad en besprenkel met de rest van de boter.' },
    { t: 'Bak de pom ongeveer 1 uur in het midden van de oven, tot de bovenkant goudbruin is en de randjes donker en knapperig. Kleurt hij te snel, leg er dan aluminiumfolie op.', min: 60 },
    { t: 'Laat de pom 15 minuten rusten, dan kun je mooie stukken snijden. Eet hem met witte rijst of op een zacht broodje.', min: 15 }
  ],
  tips: [
    'Piccalilly hoort erbij: smeer voor het afdekken een dun laagje over de kip, of zet een pot op tafel. Een broodje pom met piccalilly is een klassieker.',
    'Pom is de volgende dag nog lekkerder en laat zich goed in porties invriezen.'
  ],
  alt: [
    'Geen pomtajer te krijgen? Rasp 600 g zoete aardappel en 400 g knolselderij fijn en gebruik dat in plaats van de pom. Het smaakt anders, maar komt verrassend dichtbij.',
    'Minder pittig: haal de madame jeanette er na 5 minuten al uit, of laat hem helemaal weg.'
  ]
},
{
  id: 'bara', naam: 'Bara', keuken: 'Surinaams', soort: 'Ontbijt & lunch',
  tijd: 40, wacht: '1 uur rijzen', pers: 4, niveau: 'Gemiddeld', vega: true, pit: 1,
  intro: 'Luchtige, gefrituurde Surinaamse gistbroodjes met kerrie en djeera, van oorsprong gemaakt van gemalen spliterwten. Warm gedoopt in een zoetzure ketjapsaus met augurk zijn ze onweerstaanbaar.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven (24 cm) met 5 cm olie, een schuimspaan en een keukenthermometer' },
    { tool: 'mixer', tekst: 'Handmixer met deeghaken', of: 'Met een houten lepel lukt het ook: roer dan 5 minuten flink door.' }
  ],
  ingr: [
    { kop: 'Deeg (ca. 12 stuks)' },
    { n: 'bloem', q: 300, u: 'g' },
    { n: 'gedroogde gist', q: 7, u: 'g', x: '1 zakje' },
    { n: 'kerriepoeder', q: 1, u: 'tl', x: 'of Surinaamse masala' },
    { n: 'komijn', q: 1, u: 'tl', x: 'djeera, gemalen' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'geperst' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'lauw water', q: 250, u: 'ml' },
    { n: 'zonnebloemolie', q: 2, u: 'l', x: 'om te frituren, genoeg voor 5 cm in de pan' },
    { kop: 'Zoetzure ketjap-augurk' },
    { n: 'augurk', p: 'augurken', q: 3, u: 'st', x: 'in kleine blokjes, of ½ komkommer' },
    { n: 'ketjap manis', q: 3, u: 'el' },
    { n: 'azijn', q: 3, u: 'el' },
    { n: 'water', q: 3, u: 'el' },
    { n: 'suiker', q: 1, u: 'el' },
    { n: 'knoflook', q: 1, u: 'teen', x: 'geperst' },
    { n: 'madame jeanette', p: 'madame jeanettes', q: 0.5, u: 'st', x: 'heel fijn, of ½ rode peper', opt: true }
  ],
  stappen: [
    { t: 'Meng bloem, gist, kerrie, komijn, suiker en zout in een ruime kom. Voeg knoflook en lauw water toe en kneed met de deeghaken 5 minuten tot een glad, plakkerig en vrij slap deeg. Het moet zwaar van de lepel vallen.', min: 5 },
    { t: 'Dek de kom af en laat het deeg op een warme plek 1 uur rijzen, tot het in volume verdubbeld is en vol luchtbellen zit.', min: 60 },
    { t: 'Saus: roer ketjap, azijn, water, suiker en knoflook door elkaar tot de suiker is opgelost. Schep augurk en peper erdoor en laat staan tot de bara klaar zijn.' },
    { t: 'Verhit de olie in de Dutch oven op middelhoog vuur tot 175 °C. Geen thermometer? Steek een houten lepel in de olie: borrelen er meteen belletjes langs de steel, dan is hij heet genoeg.', min: 10 },
    { t: 'Maak je handen nat. Neem een bolletje deeg zo groot als een golfbal, druk het plat tot een schijf van 8 à 10 cm en duw met je duim een gat in het midden. Laat hem van je af in de olie glijden.' },
    { t: 'Bak 3 à 4 bara tegelijk 1½ à 2 minuten per kant, tot ze opgezwollen en goudbruin zijn. Laat uitlekken op keukenpapier en bak zo al het deeg op.', min: 4 },
    { t: 'Eet de bara warm, gedoopt in de zoetzure ketjap-augurk.' }
  ],
  tips: [
    'Nat werken is het geheim: met natte handen plakt het slappe deeg niet en worden de bara licht en luchtig.',
    'Bara zijn het lekkerst binnen een uur. Opwarmen kan 3 à 4 minuten in de airfryer op 180 °C.'
  ],
  alt: [
    'Klassiek met spliterwten: week 100 g gele spliterwten een nacht in water, giet af en pureer ze met de staafmixer tot een gladde pasta. Vervang daarmee 100 g van de bloem en gebruik 50 ml minder water.',
    'Met kousenband: bak 300 g kousenband in stukjes 6 minuten met knoflook, een scheut ketjap en wat sambal, en vul de opengesneden bara ermee.'
  ],
  bij: ['saoto-soep']
},
{
  id: 'surinaamse-pastei', toegevoegd: '2026-10-20', naam: 'Surinaamse pastei', ook: ['pastei', 'kippastei', 'surinaamse kippastei', 'pastei met kip', 'surinaamse pastij'],
  keuken: 'Surinaams', soort: 'Hoofdgerecht',
  tijd: 60, wacht: '30 min rusten, 50 min in de oven', pers: 6, niveau: 'Gemiddeld', vega: false,
  intro: 'Een goudbruine taart van licht zoet, kruimelig deeg met een vulling van kip in een rode saus met wortel, doperwten en selderij. Op Surinaamse verjaardagen staat hij altijd op tafel, en hij is koud net zo lekker als warm.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'hapjespan', tekst: 'Hapjespan (28 cm) voor de vulling' },
    { tool: 'bakvorm', tekst: 'Springvorm (24 cm)', of: 'Een ovenschaal van 20 × 30 cm werkt ook; leg het deeg er dan in een lap in.', m: 'oven' },
    { tool: 'oven', tekst: 'Oven', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer', m: 'airfryer' },
    { tool: 'bakvorm', tekst: 'Springvorm of taartvorm van 20 cm die in de mand past. Daar past 2/3 in, dus zet het recept op 4 personen.', m: 'airfryer' }
  ],
  ingr: [
    { kop: 'Deeg' },
    { n: 'bloem', q: 400, u: 'g' },
    { n: 'boter', q: 250, u: 'g', x: 'koud, in blokjes' },
    { n: 'suiker', q: 50, u: 'g' },
    { n: 'bakpoeder', q: 1, u: 'tl' },
    { n: 'zout', q: 0.5, u: 'tl' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st' },
    { n: 'water', q: 3, u: 'el', x: 'ijskoud' },
    { kop: 'Vulling' },
    { n: 'kippendijfilet', q: 600, u: 'g', x: 'in blokjes van 1,5 cm; of kipfilet' },
    { n: 'Maggi', q: 1, u: 'tl' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'fijngesnipperd' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'fijngehakt' },
    { n: 'tomaat', p: 'tomaten', q: 2, u: 'st', x: 'in blokjes', of: { q: 200, u: 'g', n: 'tomatenblokjes uit blik' } },
    { n: 'tomatenpuree', q: 70, u: 'g', x: 'een klein blikje is 70 g' },
    { n: 'kippenbouillon', q: 250, u: 'ml' },
    { n: 'wortel', p: 'wortels', q: 2, u: 'st', x: 'in kleine blokjes' },
    { n: 'doperwten', q: 150, u: 'g', x: 'diepvries' },
    { n: 'verse selderij', q: 10, u: 'g', x: 'Surinaamse selderij, fijngehakt; of het blad van bleekselderij' },
    { n: 'nootmuskaat', q: 0.25, u: 'tl' },
    { n: 'maïzena', q: 1, u: 'el', x: 'aangelengd met 2 el koud water' },
    { n: 'peper' },
    { kop: 'Om in te smeren' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st', x: 'losgeklopt' }
  ],
  stappen: [
    { t: 'Deeg: meng bloem, suiker, bakpoeder en zout in een kom. Wrijf de koude boter er met je vingertoppen doorheen tot een kruimelig mengsel. Voeg het ei en het ijskoude water toe en kneed kort tot een bal; niet langer dan nodig, dan blijft het deeg kruimelig.' },
    { t: 'Druk het deeg plat, verpak het in folie en laat het 30 minuten opstijven in de koelkast.', min: 30 },
    { t: 'Vulling: bestrooi de kip met de Maggi en peper. Verhit de olie in de hapjespan en bak de kip in 5 minuten rondom lichtbruin. Schep uit de pan.', min: 5 },
    { t: 'Fruit de ui 5 minuten in hetzelfde vet. Bak knoflook, tomaat en tomatenpuree 2 minuten mee.', min: 7 },
    { t: 'Doe de kip terug met de bouillon en de wortel. Laat met de deksel erop 15 minuten zachtjes stoven.', min: 15 },
    { t: 'Roer doperwten, selderij en nootmuskaat erdoor en roer de aangelengde maïzena erbij. Laat 2 minuten koken tot de saus dik is: de vulling moet smeuïg zijn, niet nat. Proef en laat hem helemaal afkoelen, anders smelt de boter in het deeg.', min: 2 },
    { t: 'Verwarm de oven voor op 180 °C en vet de springvorm in. Rol tweederde van het deeg uit tot een lap van 3 à 4 mm en bekleed er de bodem en de rand mee.', m: 'oven' },
    { t: 'Verwarm de airfryer voor op 160 °C en vet de vorm in. Rol tweederde van het deeg uit tot een lap van 3 à 4 mm en bekleed er de bodem en de rand mee.', m: 'airfryer' },
    { t: 'Schep de vulling erin. Rol de rest van het deeg uit, leg het als deksel erop en knijp de randen goed dicht. Maak in het midden een gaatje voor de stoom en versier de bovenkant met reepjes of figuurtjes van de deegresten.' },
    { t: 'Smeer de bovenkant in met het losgeklopte ei en bak de pastei 45 à 50 minuten onderin de oven tot hij goudbruin is.', m: 'oven', min: 50 },
    { t: 'Smeer de bovenkant in met het losgeklopte ei, zet de vorm in de mand en bak de pastei 40 à 45 minuten, tot hij goudbruin is. Kleurt de bovenkant na 25 minuten al flink, dek hem dan af met een stukje aluminiumfolie dat je goed om de rand vouwt.', m: 'airfryer', min: 43 },
    { t: 'Laat de pastei minstens 15 minuten rusten in de vorm voordat je hem aansnijdt, dan blijft de vulling op zijn plek.', min: 15 }
  ],
  tips: ['Maak de vulling een dag van tevoren: dan is hij koud als je de pastei vult en wordt de smaak voller.', 'Scheurt het deeg bij het uitrollen? Plak het gewoon met je vingers weer dicht in de vorm. Dit deeg vergeeft veel.'],
  alt: ['Snel: gebruik 2 rollen bladerdeeg in plaats van zelfgemaakt deeg. De pastei wordt dan luchtiger en minder zoet; bak hem 35 à 40 minuten op 200 °C.', 'Veel Surinaamse families doen er ook 3 hardgekookte eieren in partjes en een paar plakjes ham in de vulling.']
},
{
  id: 'pad-kra-pao', naam: 'Pad kra pao (kip met Thaise basilicum)', gerecht: 'Pad kra pao', variant: 'Kip', ook: ['pad krapow', 'kra pao', 'pad kaprao'],
  keuken: 'Thais', soort: 'Hoofdgerecht',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: false, pit: 3,
  intro: 'Het Thaise straatgerecht bij uitstek: fijngehakte kip, gebakken met knoflook, pepers en basilicum in een zoute, glanzende saus. Met rijst en een krokant gebakken ei erop.',
  gerei: [
    { tool: 'wok', tekst: 'Wok voor hoog vuur', of: 'Geen wok? Gebruik een grote RVS-koekenpan op hoog vuur en bak de kip in delen.' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de krokante spiegeleieren' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'kippendijfilet', q: 500, u: 'g', x: 'met een groot mes fijngehakt, of kipgehakt' },
    { n: 'knoflook', q: 5, u: 'teen' },
    { n: 'rode peper', p: 'rode pepers', q: 3, u: 'st', x: 'Thaise (rawit), of 1 grote voor minder pit' },
    { n: 'sperziebonen', q: 100, u: 'g', x: 'in stukjes van 1 cm', opt: true },
    { n: 'Thaise basilicum', q: 20, u: 'g', x: 'liefst kra pao (heilige basilicum) uit de toko; anders gewone basilicum' },
    { n: 'zonnebloemolie', q: 6, u: 'el', x: '2 el voor de kip, de rest voor de eieren' },
    { kop: 'Saus' },
    { n: 'oestersaus', q: 2, u: 'el' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'vissaus', q: 1, u: 'el' },
    { n: 'suiker', q: 2, u: 'tl' },
    { n: 'ketjap manis', q: 1, u: 'tl', x: 'of donkere sojasaus, voor de kleur', opt: true },
    { n: 'water', q: 3, u: 'el' },
    { kop: 'Erbij' },
    { n: 'jasmijnrijst', q: 300, u: 'g' },
    { n: 'ei', p: 'eieren', q: 4, u: 'st' }
  ],
  stappen: [
    { t: 'Kook de jasmijnrijst volgens de verpakking.', min: 15 },
    { t: 'Hak knoflook en pepers samen grof, of stamp ze in een vijzel. Roer oestersaus, sojasaus, vissaus, suiker, ketjap en water door elkaar.' },
    { t: 'Verhit 4 el olie in de koekenpan op middelhoog tot hoog vuur. Bak de eieren twee tegelijk en schep de hete olie over het eiwit, tot de randen bruin en krokant zijn en de dooier nog zacht is. Laat uitlekken op keukenpapier.', min: 3 },
    { t: 'Verhit 2 el olie in de wok op hoog vuur. Roerbak knoflook en pepers 20 seconden tot ze geuren; ze mogen niet bruin worden.' },
    { t: 'Voeg de kip (en de sperziebonen) toe, verdeel over de wok en laat 1 minuut ongestoord bakken. Roerbak dan nog 3 à 4 minuten, tot de kip gaar is en hier en daar bruin.', min: 5 },
    { t: 'Giet de saus erbij en roerbak 1 minuut tot de kip glanst. Zet het vuur uit en schep de basilicum erdoor tot hij net slinkt.', min: 1 },
    { t: 'Schep rijst en kip op de borden en leg er een krokant ei op. Prik de dooier door en meng hem door de rijst.' }
  ],
  tips: [
    'Zet prik nam pla op tafel zoals in Thailand: vissaus met fijngesneden pepers en een kneepje limoen.',
    'Gehakte kippendij blijft sappiger en krijgt meer bite dan kant-en-klaar kipgehakt.'
  ],
  alt: [
    'Vegetarisch: verkruimelde stevige tofu met vegetarische oestersaus, en extra sojasaus in plaats van vissaus.'
  ]
},
{
  id: 'pad-kra-pao-moo', variantVan: 'pad-kra-pao', variant: 'Varkensgehakt', naam: 'Pad kra pao moo (varkensgehakt met Thaise basilicum)', ook: ['pad kra pao moo', 'pad krapow moo', 'kra pao varken'],
  intro: 'Het Thaise straatgerecht met varkensgehakt, gebakken met knoflook, pepers en basilicum in een zoute, glanzende saus. Met rijst en een krokant gebakken ei erop.',
  gerei: [
    { tool: 'wok', tekst: 'Wok voor hoog vuur', of: 'Geen wok? Gebruik een grote RVS-koekenpan op hoog vuur en bak het gehakt in delen.' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de krokante spiegeleieren' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  vervang: {
    kippendijfilet: { n: 'varkensgehakt', q: 500, u: 'g', x: 'of rundergehakt (dan heet het pad kra pao neua)' },
    zonnebloemolie: { n: 'zonnebloemolie', q: 6, u: 'el', x: '2 el voor het gehakt, de rest voor de eieren' }
  },
  stappen: [
    { t: 'Kook de jasmijnrijst volgens de verpakking.', min: 15 },
    { t: 'Hak knoflook en pepers samen grof, of stamp ze in een vijzel. Roer oestersaus, sojasaus, vissaus, suiker, ketjap en water door elkaar.' },
    { t: 'Verhit 4 el olie in de koekenpan op middelhoog tot hoog vuur. Bak de eieren twee tegelijk en schep de hete olie over het eiwit, tot de randen bruin en krokant zijn en de dooier nog zacht is. Laat uitlekken op keukenpapier.', min: 3 },
    { t: 'Verhit 2 el olie in de wok op hoog vuur. Roerbak knoflook en pepers 20 seconden tot ze geuren; ze mogen niet bruin worden.' },
    { t: 'Voeg het gehakt (en de sperziebonen) toe, druk het plat in de wok en laat 1 minuut ongestoord bakken. Roerbak het dan in 3 à 4 minuten rul, gaar en hier en daar bruin.', min: 5 },
    { t: 'Giet de saus erbij en roerbak 1 minuut tot het gehakt glanst. Zet het vuur uit en schep de basilicum erdoor tot hij net slinkt.', min: 1 },
    { t: 'Schep rijst en gehakt op de borden en leg er een krokant ei op. Prik de dooier door en meng hem door de rijst.' }
  ],
  tips: ['Zet prik nam pla op tafel zoals in Thailand: vissaus met fijngesneden pepers en een kneepje limoen.', 'Varkensgehakt met een beetje vet geeft de meeste smaak; heel mager gehakt wordt droog en kruimelig.']
},
{
  id: 'pad-see-ew', naam: 'Pad see ew', gerecht: 'Pad see ew', variant: 'Kip', ook: ['pad si ew'],
  keuken: 'Thais', soort: 'Hoofdgerecht',
  tijd: 30, pers: 2, niveau: 'Gemiddeld', vega: false,
  intro: 'Brede rijstnoedels die in een gloeiend hete wok schroeien met kip, broccoli, ei en donkere sojasaus. Zoet, zout en licht rokerig.',
  gerei: [
    { tool: 'wok', tekst: 'Wok voor heel hoog vuur', of: 'Geen wok? Gebruik een grote RVS-koekenpan op hoog vuur en bak per portie.' },
    { tool: 'kookpan', tekst: 'Kom of pan om de noedels te weken' }
  ],
  ingr: [
    { n: 'platte rijstnoedels', q: 200, u: 'g', x: 'breed (ca. 1 cm), of 400 g verse brede rijstnoedels uit de toko' },
    { n: 'kippendijfilet', q: 250, u: 'g', x: 'in dunne plakjes' },
    { n: 'maïzena', q: 1, u: 'tl' },
    { n: 'broccoli', q: 200, u: 'g', x: 'in kleine roosjes; liefst kailan (Chinese broccoli) of paksoi' },
    { n: 'ei', p: 'eieren', q: 2, u: 'st' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'fijngehakt' },
    { n: 'zonnebloemolie', q: 3, u: 'el' },
    { kop: 'Saus' },
    { n: 'donkere sojasaus', q: 1, u: 'el', x: 'of ketjap manis' },
    { n: 'sojasaus', q: 1, u: 'el', x: 'plus 1 tl voor de kip' },
    { n: 'oestersaus', q: 1.5, u: 'el' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'water', q: 1, u: 'el' },
    { kop: 'Erbij' },
    { n: 'rijstazijn', q: 3, u: 'el', x: 'met plakjes rode peper (prik nam som)', opt: true }
  ],
  stappen: [
    { t: 'Week de noedels 10 à 15 minuten in heet kraanwater tot ze buigzaam maar nog stevig zijn. Giet af en schep er 1 tl olie door, dan plakken ze niet. Verse noedels trek je alleen voorzichtig los.', min: 12 },
    { t: 'Meng de kip met 1 tl sojasaus en de maïzena. Roer de ingrediënten voor de saus door elkaar. Snijd dikke broccolistelen in dunne plakjes.' },
    { t: 'Verhit 1 el olie in de wok op hoog vuur tot hij begint te roken. Bak de knoflook 10 seconden, voeg de kip toe en roerbak 3 minuten tot hij net gaar is. Doe de broccoli erbij met 1 el water en roerbak nog 2 minuten. Schep alles uit de wok.', min: 5 },
    { t: 'Verhit de rest van de olie. Doe de noedels en de saus erin en schep om tot ze egaal bruin zijn. Laat ze dan 30 à 45 seconden ongestoord liggen, zodat ze schroeien en hier en daar karamelliseren. Schep om en herhaal dat twee keer.', min: 3 },
    { t: 'Schuif de noedels naar de rand, breek de eieren in het midden, laat ze 20 seconden stollen en roer ze grof los. Schep ze door de noedels.' },
    { t: 'Doe kip en broccoli terug en schep 30 seconden om. Proef: meer sojasaus voor zout, een snuf suiker voor zoet. Serveer met de pepers in azijn.' }
  ],
  tips: [
    'Het geheim is niet te veel roeren: de donkere, licht verbrande plekjes op de noedels geven de smaak.',
    'Voor 4 personen bak je twee keer na elkaar. Een overvolle wok geeft natte, plakkerige noedels.'
  ],
  alt: [
    'Vegetarisch: stevige tofu in plaats van kip en vegetarische oestersaus van paddenstoelen.'
  ]
},
{
  id: 'pad-see-ew-rund', variantVan: 'pad-see-ew', variant: 'Rundvlees', naam: 'Pad see ew met rundvlees', ook: ['pad see ew neua', 'pad see ew rund', 'beef pad see ew'],
  intro: 'Brede rijstnoedels die in een gloeiend hete wok schroeien met reepjes biefstuk, broccoli, ei en donkere sojasaus. Zoet, zout en licht rokerig.',
  vervang: {
    kippendijfilet: { n: 'biefstuk', q: 250, u: 'g', x: 'of bavette, tegen de draad in in dunne plakjes' },
    sojasaus: { n: 'sojasaus', q: 1, u: 'el', x: 'plus 1 tl voor het vlees' }
  },
  stappen: [
    { t: 'Week de noedels 10 à 15 minuten in heet kraanwater tot ze buigzaam maar nog stevig zijn. Giet af en schep er 1 tl olie door, dan plakken ze niet. Verse noedels trek je alleen voorzichtig los.', min: 12 },
    { t: 'Meng het vlees met 1 tl sojasaus en de maïzena. Roer de ingrediënten voor de saus door elkaar. Snijd dikke broccolistelen in dunne plakjes.' },
    { t: 'Verhit 1 el olie in de wok op hoog vuur tot hij begint te roken. Bak de knoflook 10 seconden, voeg het vlees toe en roerbak 1 à 2 minuten tot het bruin is maar vanbinnen nog rosé. Schep het uit de wok. Roerbak de broccoli met 1 el water 2 minuten en schep hem erbij.', min: 4 },
    { t: 'Verhit de rest van de olie. Doe de noedels en de saus erin en schep om tot ze egaal bruin zijn. Laat ze dan 30 à 45 seconden ongestoord liggen, zodat ze schroeien en hier en daar karamelliseren. Schep om en herhaal dat twee keer.', min: 3 },
    { t: 'Schuif de noedels naar de rand, breek de eieren in het midden, laat ze 20 seconden stollen en roer ze grof los. Schep ze door de noedels.' },
    { t: 'Doe vlees en broccoli terug en schep 30 seconden om. Proef: meer sojasaus voor zout, een snuf suiker voor zoet. Serveer met de pepers in azijn.' }
  ],
  alt: ['Vegetarisch: stevige tofu in plaats van vlees en vegetarische oestersaus van paddenstoelen.']
},
{
  id: 'massaman-curry', naam: 'Massaman curry', gerecht: 'Massaman curry', variant: 'Rundvlees', keuken: 'Thais', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '1½ uur stoven', pers: 4, niveau: 'Makkelijk', vega: false, pit: 1,
  intro: 'Milde, zoete Thaise curry met zacht gestoofd rundvlees, aardappel en pinda\'s. Kaneel en steranijs verraden de Perzische en Indiase invloed.',
  methodes: [ { id: 'braadpan', naam: 'Op het vuur' }, { id: 'slowcooker', naam: 'Slowcooker' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan (24 à 26 cm) met deksel' },
    { tool: 'slowcooker', tekst: 'Slowcooker', m: 'slowcooker' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'runderlappen', q: 700, u: 'g', x: 'riblappen of sukade, in blokken van 4 cm' },
    { n: 'massaman currypasta', q: 4, u: 'el', x: 'uit een pot (toko of supermarkt)' },
    { n: 'kokosmelk', q: 800, u: 'ml', x: '2 blikken; niet schudden' },
    { n: 'water', q: 250, u: 'ml' },
    { n: 'vastkokende aardappelen', q: 500, u: 'g', x: 'in grote blokken' },
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'in grote partjes' },
    { n: 'ongezouten pinda\'s', q: 60, u: 'g', x: 'geroosterd' },
    { n: 'tamarindepasta', q: 2, u: 'el', x: 'of 1 el limoensap' },
    { n: 'vissaus', q: 2, u: 'el' },
    { n: 'palmsuiker', q: 2, u: 'el', x: 'of gula djawa of bruine suiker' },
    { n: 'kaneelstokje', p: 'kaneelstokjes', q: 1, u: 'st' },
    { n: 'steranijs', q: 2, u: 'st' },
    { n: 'kardemompeulen', q: 3, u: 'st', x: 'gekneusd', opt: true },
    { n: 'laurierblad', q: 2, u: 'st', opt: true },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { n: 'zout' },
    { kop: 'Erbij' },
    { n: 'jasmijnrijst', q: 300, u: 'g' }
  ],
  stappen: [
    { t: 'Dep het vlees droog en bestrooi het met zout. Verhit de olie in de Dutch oven op hoog vuur en bak het vlees in 2 delen rondom bruin, elke keer ca. 5 minuten. Schep het uit de pan.', min: 10 },
    { t: 'Zet het vuur middelhoog. Schep de dikke room van één blik kokosmelk in de pan en laat 2 à 3 minuten pruttelen tot er olieoogjes op komen. Bak de currypasta er 2 minuten in tot hij sterk geurt.', min: 5 },
    { t: 'Doe het vlees terug met de rest van de kokosmelk, het water, kaneel, steranijs, kardemom, laurier, vissaus, palmsuiker en tamarinde. Breng aan de kook.' },
    { t: 'Leg de deksel op een kier en laat 1 uur zachtjes stoven op laag vuur. Roer af en toe.', m: 'braadpan', min: 60 },
    { t: 'Voeg aardappel, ui en pinda\'s toe en stoof nog 30 à 40 minuten, tot het vlees met een vork uit elkaar valt en de aardappel gaar is.', m: 'braadpan', min: 35 },
    { t: 'Doe alles over in de slowcooker, samen met aardappel, ui en pinda\'s. Gaar 7 à 8 uur op LOW (of 4 uur op HIGH), tot het vlees uit elkaar valt.', m: 'slowcooker', min: 450 },
    { t: 'Kook de jasmijnrijst volgens de verpakking.', min: 15 },
    { t: 'Proef de curry: hij moet zoet, zout en een beetje zuur zijn. Breng op smaak met vissaus, palmsuiker of tamarinde. Vis kaneel, steranijs en laurier eruit en serveer met de rijst.' }
  ],
  tips: [
    'Massaman is de mildste Thaise curry: een goede keus voor wie niet van heel pittig houdt.',
    'Zoals elke stoofschotel is hij de volgende dag nog lekkerder. Invriezen kan ook, de aardappel wordt dan wel iets zachter.'
  ],
  alt: [
    'Vegetarisch: kikkererwten en zoete aardappel in plaats van vlees, vegetarische currypasta en sojasaus in plaats van vissaus.'
  ]
},
{
  id: 'massaman-kip', variantVan: 'massaman-curry', variant: 'Kip', naam: 'Massaman curry met kip', ook: ['massaman kip', 'chicken massaman'],
  tijd: 30, wacht: '30 min stoven',
  intro: 'Milde, zoete Thaise curry met sappige kippendij, aardappel en pinda\'s. Sneller klaar dan met rundvlees: een half uur stoven is genoeg.',
  vervang: {
    runderlappen: { n: 'kippendijfilet', q: 800, u: 'g', x: 'in grote stukken' }
  },
  stappen: [
    { t: 'Bestrooi de kip met zout. Verhit de olie in de Dutch oven op hoog vuur en bak de kip in 2 delen rondom lichtbruin, elke keer ca. 3 minuten. Hij hoeft nog niet gaar. Schep hem uit de pan.', min: 6 },
    { t: 'Zet het vuur middelhoog. Schep de dikke room van één blik kokosmelk in de pan en laat 2 à 3 minuten pruttelen tot er olieoogjes op komen. Bak de currypasta er 2 minuten in tot hij sterk geurt.', min: 5 },
    { t: 'Doe de kip terug met de rest van de kokosmelk, het water, kaneel, steranijs, kardemom, laurier, vissaus, palmsuiker, tamarinde, aardappel, ui en pinda\'s. Breng aan de kook.' },
    { t: 'Leg de deksel op een kier en laat 30 minuten zachtjes stoven, tot de aardappel gaar is en de kip mals. Roer af en toe.', m: 'braadpan', min: 30 },
    { t: 'Doe alles over in de slowcooker. Gaar 4 uur op LOW (of 2½ uur op HIGH), tot de aardappel gaar is.', m: 'slowcooker', min: 240 },
    { t: 'Kook de jasmijnrijst volgens de verpakking.', min: 15 },
    { t: 'Proef de curry: hij moet zoet, zout en een beetje zuur zijn. Breng op smaak met vissaus, palmsuiker of tamarinde. Vis kaneel, steranijs en laurier eruit en serveer met de rijst.' }
  ],
  tips: ['Massaman is de mildste Thaise curry: een goede keus voor wie niet van heel pittig houdt.', 'Kippendij blijft ook na een half uur stoven sappig. Kipfilet wordt in een stoof snel droog.']
},
{
  id: 'kip-cashew', naam: 'Kip met cashewnoten', ook: ['gai pad med mamuang', 'cashew chicken'],
  keuken: 'Thais', soort: 'Hoofdgerecht',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: false, pit: 1,
  intro: 'Krokante kip, geroosterde cashewnoten en knapperige groente in een glanzende, zoet-zoute saus. Een Thaise afhaalfavoriet die je thuis net zo snel maakt.',
  gerei: [
    { tool: 'wok', tekst: 'Wok voor hoog vuur', of: 'Geen wok? Gebruik een grote RVS-koekenpan op hoog vuur en bak de kip in delen.' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'kippendijfilet', q: 500, u: 'g', x: 'in reepjes; of kipfilet' },
    { n: 'maïzena', q: 1, u: 'el' },
    { n: 'ongezouten cashewnoten', q: 100, u: 'g' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in partjes' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in stukjes' },
    { n: 'lente-ui', p: 'lente-uien', q: 3, u: 'st', x: 'in stukken van 3 cm' },
    { n: 'gedroogde rode pepers', q: 4, u: 'st', x: 'in stukjes geknipt' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'fijngehakt' },
    { n: 'zonnebloemolie', q: 3, u: 'el' },
    { kop: 'Saus' },
    { n: 'oestersaus', q: 2, u: 'el' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'vissaus', q: 1, u: 'tl' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'nam prik pao', q: 1, u: 'el', x: 'Thaise chilijam uit de toko', opt: true },
    { n: 'water', q: 4, u: 'el' },
    { kop: 'Erbij' },
    { n: 'jasmijnrijst', q: 300, u: 'g' }
  ],
  stappen: [
    { t: 'Kook de jasmijnrijst volgens de verpakking.', min: 15 },
    { t: 'Bestrooi de kip met een snuf zout en de maïzena en schep om. Roer de ingrediënten voor de saus door elkaar.' },
    { t: 'Rooster de cashewnoten in de droge wok op middelhoog vuur 3 à 4 minuten goudbruin; schud regelmatig. Schep ze uit. Bak de gedroogde pepers 30 seconden in 1 el olie tot ze donkerrood zijn, niet zwart. Schep ze uit.', min: 4 },
    { t: 'Verhit de rest van de olie in de wok op hoog vuur. Bak de kip in 2 delen, elke keer 4 minuten, tot hij goudbruin en gaar is. Schep hem uit.', min: 8 },
    { t: 'Roerbak knoflook en ui 1 minuut, voeg de paprika toe en roerbak nog 2 minuten. De groente moet knapperig blijven.', min: 3 },
    { t: 'Doe de kip terug, giet de saus erbij en roerbak 1 minuut tot alles glanst. Schep cashewnoten, pepers en lente-ui erdoor en serveer meteen met de rijst.', min: 1 }
  ],
  tips: ['Rooster de cashewnoten apart en voeg ze pas op het laatst toe, dan blijven ze knapperig.'],
  alt: [
    'Vegetarisch: stevige tofu in plaats van kip, vegetarische oestersaus en sojasaus in plaats van vissaus.',
    'Minder pittig: laat de gedroogde pepers heel. Ze geven dan vooral aroma en je eet ze niet op.'
  ]
},
{
  id: 'banh-mi', naam: 'Banh mi', gerecht: 'Banh mi', variant: 'Varkensvlees', ook: ['bánh mì', 'vietnamees broodje'],
  keuken: 'Vietnamees', soort: 'Ontbijt & lunch',
  tijd: 35, wacht: '30 min marineren', pers: 4, niveau: 'Makkelijk', vega: false, pit: 1,
  intro: 'Een krokant stokbroodje vol gegrild citroengrasvlees, zoetzure wortel en rettich, komkommer en verse koriander. Frans brood met een Vietnamese vulling: het beste broodje van Azië.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'contactgrill', naam: 'Contactgrill' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Grote koekenpan (28 cm)', m: 'koekenpan' },
    { tool: 'contactgrill', tekst: 'Contactgrill', m: 'contactgrill' },
    { tool: 'oven', tekst: 'Oven om het stokbrood krokant op te warmen', of: 'Of 3 minuten in de airfryer op 180 °C.' }
  ],
  ingr: [
    { kop: 'Vlees' },
    { n: 'varkensvlees', q: 500, u: 'g', x: 'varkensnek of -haas, in plakjes van ½ cm' },
    { n: 'citroengras', q: 2, u: 'stengel', x: 'alleen het zachte binnenste, heel fijn gehakt' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'geperst' },
    { n: 'vissaus', q: 2, u: 'el' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'bruine suiker', q: 1, u: 'el' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { n: 'zwarte peper', q: 0.5, u: 'tl' },
    { kop: 'Snelle pickles' },
    { n: 'wortel', p: 'wortels', q: 2, u: 'st', x: 'in lucifers' },
    { n: 'daikon', q: 150, u: 'g', x: 'witte rettich, of 1 bos radijs; in lucifers' },
    { n: 'azijn', q: 100, u: 'ml', x: 'witte azijn of rijstazijn' },
    { n: 'water', q: 100, u: 'ml', x: 'warm' },
    { n: 'suiker', q: 3, u: 'el' },
    { n: 'zout', q: 1, u: 'tl' },
    { kop: 'Broodje' },
    { n: 'stokbrood', p: 'stokbroden', q: 2, u: 'st', x: 'luchtig wit, elk in tweeën; of 4 afbakbroodjes' },
    { n: 'mayonaise', q: 4, u: 'el' },
    { n: 'leverpaté', q: 100, u: 'g', x: 'klassiek, dun op de onderkant', opt: true },
    { n: 'komkommer', p: 'komkommers', q: 0.5, u: 'st', x: 'in lange reepjes' },
    { n: 'verse koriander', q: 30, u: 'g' },
    { n: 'rode peper', p: 'rode pepers', q: 1, u: 'st', x: 'in dunne ringetjes' },
    { n: 'Maggi', q: 2, u: 'tl', x: 'of sojasaus' }
  ],
  stappen: [
    { t: 'Pickles: los suiker en zout op in het warme water en roer de azijn erdoor. Leg wortel en daikon erin en laat minimaal 30 minuten staan.' },
    { t: 'Meng citroengras, knoflook, vissaus, sojasaus, suiker, 1 el olie en de peper. Schep het vlees erdoor en laat 30 minuten marineren, of een nacht in de koelkast.', min: 30 },
    { t: 'Verhit de rest van de olie in de koekenpan op hoog vuur. Bak het vlees in 2 delen 2 à 3 minuten per kant, tot het gaar is en de randjes karamelliseren.', m: 'koekenpan', min: 6 },
    { t: 'Leg de plakjes vlees naast elkaar op de voorverwarmde contactgrill en sluit de deksel. Grill 3 à 4 minuten tot ze gaar zijn en mooie grillstrepen hebben.', m: 'contactgrill', min: 4 },
    { t: 'Warm het brood 4 à 5 minuten op in de voorverwarmde oven op 200 °C tot de korst knapperig is. Snijd het aan één kant open, niet helemaal door, en haal wat van het zachte binnenste weg.', min: 5 },
    { t: 'Besmeer het brood met mayonaise (en paté). Vul met vlees, uitgelekte pickles, komkommer, flink wat koriander en rode peper. Sprenkel er wat Maggi over en eet meteen.' }
  ],
  tips: [
    'Vietnamees stokbrood is luchtiger, met een dunne krokante korst. Een licht wit stokbrood of afbakbroodje komt het dichtst in de buurt, zeker als je het iets uitholt.',
    'De pickles blijven in een afgesloten pot een week goed in de koelkast.'
  ],
  alt: [
    'Vegetarisch: plakken stevige tofu, gemarineerd met sojasaus in plaats van vissaus.'
  ]
},
{
  id: 'banh-mi-kip', variantVan: 'banh-mi', variant: 'Kip', naam: 'Banh mi met kip', ook: ['banh mi ga', 'bánh mì gà', 'vietnamees broodje kip'],
  intro: 'Een krokant stokbroodje vol gegrilde citroengraskip, zoetzure wortel en rettich, komkommer en verse koriander.',
  vervang: {
    Vlees: { kop: 'Kip' },
    varkensvlees: { n: 'kippendijfilet', q: 500, u: 'g', x: 'platgeslagen tot 1 cm dik' }
  },
  stappen: [
    { t: 'Pickles: los suiker en zout op in het warme water en roer de azijn erdoor. Leg wortel en daikon erin en laat minimaal 30 minuten staan.' },
    { t: 'Meng citroengras, knoflook, vissaus, sojasaus, suiker, 1 el olie en de peper. Schep de kip erdoor en laat 30 minuten marineren, of een nacht in de koelkast.', min: 30 },
    { t: 'Verhit de rest van de olie in de koekenpan op middelhoog tot hoog vuur. Bak de kip 4 à 5 minuten per kant, tot hij gaar is en de randjes karamelliseren. Laat hem even rusten en snijd hem in reepjes.', m: 'koekenpan', min: 10 },
    { t: 'Leg de kip op de voorverwarmde contactgrill en sluit de deksel. Grill 6 à 7 minuten tot hij gaar is en mooie grillstrepen heeft. Snijd hem in reepjes.', m: 'contactgrill', min: 7 },
    { t: 'Warm het brood 4 à 5 minuten op in de voorverwarmde oven op 200 °C tot de korst knapperig is. Snijd het aan één kant open, niet helemaal door, en haal wat van het zachte binnenste weg.', min: 5 },
    { t: 'Besmeer het brood met mayonaise (en paté). Vul met kip, uitgelekte pickles, komkommer, flink wat koriander en rode peper. Sprenkel er wat Maggi over en eet meteen.' }
  ],
  alt: ['Vegetarisch: plakken stevige tofu, gemarineerd met sojasaus in plaats van vissaus.']
},
{
  id: 'goi-cuon', naam: 'Goi cuon (verse loempia\'s)', ook: ['verse loempia', 'summer rolls', 'rijstvelloempia'],
  keuken: 'Vietnamees', soort: 'Salade & bijgerecht',
  tijd: 40, pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Doorschijnende rolletjes van rijstpapier met garnalen, noedels en verse kruiden, met een romige pinda-hoisindip. Fris, licht en zonder bakken.',
  gerei: [
    { tool: 'kookpan', tekst: 'Kookpan voor de garnalen en de vermicelli' },
    { tool: 'kookpan', tekst: 'Steelpannetje voor de dipsaus' }
  ],
  ingr: [
    { n: 'rijstpapier', q: 12, u: 'vel', x: 'rijstvellen van 22 cm' },
    { n: 'garnalen', q: 250, u: 'g', x: 'rauw, gepeld (ca. 18 grote)' },
    { n: 'rijstvermicelli', q: 100, u: 'g' },
    { n: 'kropsla', q: 0.5, u: 'st', x: 'of little gem; harde nerven eruit' },
    { n: 'komkommer', p: 'komkommers', q: 0.5, u: 'st', x: 'in lange reepjes' },
    { n: 'wortel', p: 'wortels', q: 1, u: 'st', x: 'in lucifers' },
    { n: 'verse munt', q: 30, u: 'g', vers: 'gaat rauw in de rolletjes' },
    { n: 'verse koriander', q: 30, u: 'g', vers: 'gaat rauw in de rolletjes' },
    { n: 'bieslook', q: 25, u: 'g', x: 'om uit de rolletjes te laten steken', opt: true },
    { kop: 'Pinda-hoisindip' },
    { n: 'hoisinsaus', q: 4, u: 'el' },
    { n: 'pindakaas', q: 2, u: 'el' },
    { n: 'water', q: 4, u: 'el' },
    { n: 'knoflook', q: 1, u: 'teen', x: 'geperst' },
    { n: 'zonnebloemolie', q: 1, u: 'tl' },
    { n: 'ongezouten pinda\'s', q: 2, u: 'el', x: 'geroosterd en gehakt' },
    { n: 'sriracha', q: 1, u: 'tl', opt: true }
  ],
  stappen: [
    { t: 'Breng een pan water met zout aan de kook. Kook de garnalen 2 minuten tot ze net roze en gekruld zijn. Schep ze uit, laat ze schrikken in koud water en halveer ze in de lengte.', min: 2 },
    { t: 'Kook in hetzelfde water de vermicelli volgens de verpakking. Spoel koud af en laat goed uitlekken.', min: 4 },
    { t: 'Dip: bak de knoflook 30 seconden in de olie in het steelpannetje. Voeg hoisin, pindakaas en water toe en roer op laag vuur tot een gladde saus. Laat afkoelen en bestrooi met de pinda\'s en een streep sriracha.' },
    { t: 'Zet alles klaar: sla, geplukte kruiden, komkommer, wortel, garnalen en een brede schaal lauw water.' },
    { t: 'Haal een vel rijstpapier 5 à 10 seconden door het water. Het mag nog iets stevig zijn; het wordt vanzelf zacht. Leg het op een vochtige theedoek of snijplank.' },
    { t: 'Leg op het onderste derde deel een blaadje sla, een plukje vermicelli, komkommer, wortel, munt en koriander. Leg 3 halve garnalen met de roze kant naar beneden net boven de vulling.' },
    { t: 'Rol de onderkant strak over de vulling, vouw de zijkanten naar binnen en rol verder op, zodat de garnalen door het vel heen te zien zijn. Bewaar de rolletjes onder een vochtige theedoek en serveer met de dip.' }
  ],
  tips: [
    'Niet te lang weken: een te slap vel scheurt. Haal hem eruit zodra hij buigt.',
    'Maak ze hooguit een paar uur van tevoren en dek ze af met een vochtige doek. In de koelkast worden ze taai.'
  ],
  alt: [
    'Vegetarisch: gebakken reepjes stevige tofu in plaats van garnalen. De dip is al vegetarisch.',
    'Klassiek gaan er ook dunne plakjes gekookt buikspek in, samen met de garnalen.'
  ]
},
{
  id: 'bo-luc-lac', naam: 'Bò lúc lắc (shaking beef)', gerecht: 'Lúc lắc', variant: 'Biefstuk', ook: ['shaking beef', 'bo luc lac'],
  keuken: 'Vietnamees', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '30 min marineren', pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Sappige blokjes biefstuk, razendsnel geschroeid en door de pan geschud, op een frisse salade van waterkers, ui en tomaat. Met een dip van limoen, peper en zout.',
  gerei: [
    { tool: 'wok', tekst: 'Wok voor heel hoog vuur', of: 'Geen wok? Een RVS-koekenpan werkt hier net zo goed: laat hem goed heet worden en bak in 2 delen.' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'biefstuk', q: 600, u: 'g', x: 'kogelbiefstuk of entrecote, in blokjes van 2,5 cm' },
    { kop: 'Marinade' },
    { n: 'oestersaus', q: 2, u: 'el' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'vissaus', q: 1, u: 'tl' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'knoflook', q: 4, u: 'teen', x: 'fijngehakt' },
    { n: 'zonnebloemolie', q: 3, u: 'el', x: '1 el voor de marinade, 2 el om te bakken' },
    { n: 'zwarte peper', q: 0.5, u: 'tl', x: 'versgemalen' },
    { n: 'boter', q: 20, u: 'g' },
    { kop: 'Salade' },
    { n: 'waterkers', q: 100, u: 'g', x: 'of rucola of sla' },
    { n: 'rode ui', p: 'rode uien', q: 1, u: 'st', x: 'in dunne ringen' },
    { n: 'tomaat', p: 'tomaten', q: 2, u: 'st', x: 'in partjes' },
    { n: 'azijn', q: 2, u: 'el', x: 'of rijstazijn' },
    { n: 'suiker', q: 1, u: 'tl' },
    { kop: 'Dip en rijst' },
    { n: 'limoen', p: 'limoenen', q: 2, u: 'st' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'zwarte peper', q: 1, u: 'tl', x: 'versgemalen' },
    { n: 'jasmijnrijst', q: 300, u: 'g' }
  ],
  stappen: [
    { t: 'Meng oestersaus, sojasaus, vissaus, suiker, de helft van de knoflook, 1 el olie en de peper. Schep het vlees erdoor en laat 30 minuten marineren buiten de koelkast.', min: 30 },
    { t: 'Kook de jasmijnrijst volgens de verpakking.', min: 15 },
    { t: 'Salade: meng de rode ui met azijn, suiker en een snuf zout en laat 10 minuten staan. Leg waterkers en tomaat op een schaal en schep de ui met het zuur erover.' },
    { t: 'Dip: verdeel zout en peper over kleine schaaltjes en zet ze met limoenpartjes op tafel. Iedereen knijpt er zelf limoen over en roert.' },
    { t: 'Verhit de wok op het hoogste vuur tot hij rookt en doe er dan pas 1 el olie in. Leg de helft van het vlees in één laag in de pan en laat 1 minuut ongestoord bakken tot er een bruine korst op zit.', min: 1 },
    { t: 'Schud de pan flink heen en weer (lúc lắc betekent schudden) en bak nog 1 à 2 minuten, tot het vlees rondom bruin maar vanbinnen nog rosé is. Schep uit en bak de rest net zo.', min: 2 },
    { t: 'Doe al het vlees terug, zet het vuur uit, voeg de boter en de rest van de knoflook toe en schud 30 seconden tot alles glanst. Schep het vlees met het jus over de salade en serveer met rijst en de dip.' }
  ],
  tips: [
    'Niet te veel tegelijk in de pan: dan gaat het vlees koken in plaats van schroeien. Twee keer bakken is beter dan één keer.',
    'In veel Vietnamese restaurants eet je het met frietjes in plaats van rijst. Probeer het eens met frietjes uit de airfryer.'
  ],
  alt: [
    'Goedkoper: gebruik bavette of riblap in kleinere blokjes van 2 cm en bak ze iets korter.'
  ]
},
{
  id: 'ga-luc-lac', variantVan: 'bo-luc-lac', variant: 'Kip', naam: 'Gà lúc lắc (shaking chicken)', ook: ['shaking chicken', 'luc lac kip', 'ga luc lac'],
  intro: 'Blokjes kippendij, heet geschroeid en door de pan geschud, op een frisse salade van waterkers, ui en tomaat. Met een dip van limoen, peper en zout.',
  vervang: {
    biefstuk: { n: 'kippendijfilet', q: 600, u: 'g', x: 'in blokjes van 2,5 cm' }
  },
  stappen: [
    { t: 'Meng oestersaus, sojasaus, vissaus, suiker, de helft van de knoflook, 1 el olie en de peper. Schep de kip erdoor en laat 30 minuten marineren in de koelkast.', min: 30 },
    { t: 'Kook de jasmijnrijst volgens de verpakking.', min: 15 },
    { t: 'Salade: meng de rode ui met azijn, suiker en een snuf zout en laat 10 minuten staan. Leg waterkers en tomaat op een schaal en schep de ui met het zuur erover.' },
    { t: 'Dip: verdeel zout en peper over kleine schaaltjes en zet ze met limoenpartjes op tafel. Iedereen knijpt er zelf limoen over en roert.' },
    { t: 'Verhit de wok op het hoogste vuur tot hij rookt en doe er dan pas 1 el olie in. Leg de helft van de kip in één laag in de pan en laat 2 minuten ongestoord bakken tot er een bruine korst op zit.', min: 2 },
    { t: 'Schud de pan flink heen en weer (lúc lắc betekent schudden) en bak nog 3 à 4 minuten, tot de kip rondom bruin en helemaal gaar is. Schep uit en bak de rest net zo.', min: 4 },
    { t: 'Doe alle kip terug, zet het vuur uit, voeg de boter en de rest van de knoflook toe en schud 30 seconden tot alles glanst. Schep de kip met het jus over de salade en serveer met rijst en de dip.' }
  ],
  alt: []
},
{
  id: 'fish-and-chips', naam: 'Fish and chips', ook: ['fish & chips', 'kibbeling'],
  keuken: 'Brits', soort: 'Hoofdgerecht',
  tijd: 50, pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Witvis in een krokant, luchtig bierbeslag met dikke frieten, mushy peas en tartaarsaus. Zout en azijn erover, zoals aan de Engelse kust.',
  methodes: [ { id: 'oven', naam: 'Chips uit de oven' }, { id: 'airfryer', naam: 'Chips uit de airfryer' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven (24 cm) met 5 à 6 cm olie, een schuimspaan en een keukenthermometer' },
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier voor de chips', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer voor de chips', m: 'airfryer' },
    { tool: 'kookpan', tekst: 'Steelpan voor de erwten' }
  ],
  ingr: [
    { kop: 'Vis' },
    { n: 'kabeljauwfilet', q: 600, u: 'g', x: 'of schelvis; dikke stukken, in 4 porties' },
    { n: 'bloem', q: 200, u: 'g', x: '175 g voor het beslag, 25 g om te bestuiven' },
    { n: 'bakpoeder', q: 1, u: 'tl' },
    { n: 'bier', q: 250, u: 'ml', x: 'ijskoud, pils of blond' },
    { n: 'zonnebloemolie', q: 2, u: 'l', x: 'om te frituren' },
    { n: 'zout' },
    { kop: 'Chips' },
    { n: 'kruimige aardappelen', q: 1000, u: 'g', x: 'bijv. bintje of agria' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { kop: 'Mushy peas' },
    { n: 'doperwten', q: 300, u: 'g', x: 'diepvries' },
    { n: 'boter', q: 20, u: 'g' },
    { n: 'verse munt', q: 4, u: 'takje', x: 'blaadjes', opt: true },
    { kop: 'Tartaarsaus' },
    { n: 'mayonaise', q: 6, u: 'el' },
    { n: 'augurk', p: 'augurken', q: 2, u: 'st', x: 'fijngehakt' },
    { n: 'kappertjes', q: 1, u: 'el', x: 'fijngehakt' },
    { n: 'verse peterselie', q: 1, u: 'el', x: 'fijngehakt' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'een kneepje sap, de rest in partjes' },
    { kop: 'Erbij' },
    { n: 'azijn', q: 4, u: 'el', x: 'liefst moutazijn (malt vinegar)', opt: true }
  ],
  stappen: [
    { t: 'Schil de aardappelen en snijd ze in dikke frieten van 1,5 cm. Spoel ze af in koud water en dep ze goed droog met een theedoek.' },
    { t: 'Verwarm de oven voor op 220 °C (hetelucht 200 °C). Schep de frieten om met de olie en zout en spreid ze in één laag over de bakplaat. Bak ze 35 à 40 minuten tot ze goudbruin en krokant zijn; keer halverwege.', m: 'oven', min: 38 },
    { t: 'Schep de frieten om met de olie en zout. Bak ze 20 à 25 minuten in de airfryer op 190 °C en schud elke 5 minuten. Bij een kleine mand bak je in 2 porties; houd de eerste warm in de oven op 100 °C.', m: 'airfryer', min: 22 },
    { t: 'Tartaarsaus: meng mayonaise, augurk, kappertjes, peterselie en een kneepje citroensap. Zet koud weg.' },
    { t: 'Mushy peas: kook de doperwten 4 minuten in water met zout. Giet af en stamp ze grof met de boter, munt, zout en peper. Houd warm met de deksel op de pan.', min: 4 },
    { t: 'Verhit de olie in de Dutch oven tot 180 °C. Geen thermometer? Steek een houten lepel in de olie: borrelen er meteen veel belletjes langs de steel, dan is hij heet genoeg.', min: 10 },
    { t: 'Klop pas nu de 175 g bloem, het bakpoeder en ½ tl zout met het ijskoude bier tot een glad beslag, zo dik als yoghurt. Een paar klontjes zijn prima.' },
    { t: 'Dep de vis droog, bestrooi met zout en haal door de rest van de bloem; klop het teveel eraf. Haal elk stuk door het beslag en laat het van je af in de olie zakken. Bak 2 stukken tegelijk 5 à 7 minuten, keer halverwege, tot ze diep goudbruin zijn. Laat uitlekken op een rooster.', min: 6 },
    { t: 'Serveer direct met de chips, mushy peas, tartaarsaus en citroenpartjes. Strooi zout over vis en chips en sprenkel er azijn over, zoals in Engeland.' }
  ],
  tips: [
    'IJskoud bier in hete olie maakt het beslag luchtig en krokant. Zet het bier vooraf 15 minuten in de vriezer.',
    'Laat de olie tussen twee porties weer op 180 °C komen. Te koude olie geeft vettige vis.'
  ],
  alt: [
    'Vis uit de airfryer: nat beslag druipt door de mand, dus haal de vis door bloem, losgeklopt ei en panko. Besproei met olie en bak 10 à 12 minuten op 200 °C.',
    'Geen bier? IJskoud bruisend mineraalwater geeft ook een luchtig beslag.'
  ]
},
{
  id: 'full-english-breakfast', naam: 'Full English breakfast', ook: ['english breakfast', 'engels ontbijt'],
  keuken: 'Brits', soort: 'Ontbijt & lunch',
  tijd: 35, pers: 2, niveau: 'Makkelijk', vega: false,
  intro: 'Het grote Engelse ontbijt: worstjes, krokante bacon, gebakken ei, tomaat, champignons, baked beans en toast. Met een goede planning staat alles tegelijk warm op tafel.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'contactgrill', naam: 'Contactgrill' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Grote koekenpan (28 cm)' },
    { tool: 'contactgrill', tekst: 'Contactgrill voor worstjes, bacon en tomaat', m: 'contactgrill' },
    { tool: 'kookpan', tekst: 'Steelpannetje voor de bonen' },
    { tool: 'oven', tekst: 'Oven op 100 °C om alles warm te houden, met een ovenschaal of borden', of: 'Geen oven? Dek een bord af met aluminiumfolie.' }
  ],
  ingr: [
    { n: 'ontbijtworstje', p: 'ontbijtworstjes', q: 4, u: 'st', x: 'Engelse pork sausages of chipolata\'s; anders verse saucijsjes' },
    { n: 'ontbijtspek', q: 4, u: 'plak', x: 'of Engelse back bacon' },
    { n: 'black pudding', q: 2, u: 'plak', x: 'of bloedworst', opt: true },
    { n: 'tomaat', p: 'tomaten', q: 2, u: 'st', x: 'gehalveerd' },
    { n: 'champignons', q: 150, u: 'g', x: 'in plakjes' },
    { n: 'baked beans', q: 415, u: 'g', x: 'in tomatensaus' },
    { n: 'ei', p: 'eieren', q: 2, u: 'st' },
    { n: 'brood', q: 4, u: 'plak', x: 'wit, om te toasten' },
    { n: 'boter', q: 30, u: 'g' },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Zet de oven op 100 °C met een ovenschaal of de borden erin. Alles wat klaar is, gaat daarin; zo komt alles tegelijk op tafel.' },
    { t: 'Bak de worstjes in de olie in de koekenpan op middelhoog vuur 12 à 15 minuten, tot ze rondom bruin en gaar zijn. Draai ze regelmatig en zet ze dan in de oven.', m: 'koekenpan', min: 14 },
    { t: 'Bak in dezelfde pan de bacon 2 à 3 minuten per kant krokant, met de tomaten (snijkant naar beneden) en de black pudding ernaast. Zet alles in de oven.', m: 'koekenpan', min: 5 },
    { t: 'Grill de worstjes 8 à 10 minuten op de voorverwarmde contactgrill met de deksel dicht, tot ze gaar zijn. Grill daarna bacon, black pudding en de tomaten in dikke plakken 3 à 4 minuten. Zet alles in de oven.', m: 'contactgrill', min: 14 },
    { t: 'Warm intussen de baked beans op in het steelpannetje op laag vuur. Roer af en toe en laat ze niet koken.', min: 5 },
    { t: 'Bak de champignons in een klontje boter in de koekenpan op hoog vuur 5 minuten goudbruin. Bestrooi met zout en peper en zet ze in de oven.', min: 5 },
    { t: 'Als laatste de eieren: smelt een klontje boter in de schoongeveegde pan op middelhoog vuur en bak de eieren 3 à 4 minuten. Schep wat vet over de dooier. Rooster intussen het brood en besmeer het met boter.', min: 4 },
    { t: 'Schep alles op de warme borden en serveer meteen, met thee en ketchup of brown sauce.' }
  ],
  tips: [
    'Planning: begin met de worstjes, want die duren het langst. Daarna bacon en tomaat, dan champignons en bonen, en de eieren en toast pas helemaal op het eind.',
    'Echte Engelse worstjes, back bacon en black pudding vind je bij een Britse webwinkel of een goede slager.'
  ],
  alt: [
    'Vegetarisch: vegetarische worstjes en plakken gebakken halloumi in plaats van worst, bacon en black pudding.',
    'Geen baked beans? Witte bonen in tomatensaus uit blik komen dicht in de buurt.'
  ]
},
{
  id: 'sticky-toffee-pudding', naam: 'Sticky toffee pudding', keuken: 'Brits', soort: 'Dessert',
  tijd: 30, wacht: '30 min in de oven', pers: 6, niveau: 'Makkelijk', vega: true,
  intro: 'Een smeuïge, warme dadelcake overgoten met kleverige toffeesaus van bruine suiker, boter en room. Hét Britse winterdessert.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'ovenschaal', tekst: 'Ovenschaal van ca. 20 × 25 cm, of een muffinvorm voor 12 stuks', m: 'oven' },
    { tool: 'bakvorm', tekst: 'Siliconen muffinvormpjes of ovenvaste schaaltjes die in de mand passen', m: 'airfryer' },
    { tool: 'mixer', tekst: 'Handmixer', of: 'Met een houten lepel en wat armkracht lukt het ook.' },
    { tool: 'kookpan', tekst: 'Steelpan met dikke bodem voor de toffeesaus' }
  ],
  ingr: [
    { kop: 'Cake' },
    { n: 'dadels', q: 200, u: 'g', x: 'ontpit, liefst medjool' },
    { n: 'water', q: 250, u: 'ml', x: 'kokend' },
    { n: 'zuiveringszout', q: 1, u: 'tl', x: 'bicarbonaat, baking soda; geen bakpoeder' },
    { n: 'boter', q: 75, u: 'g', x: 'zacht, plus wat om in te vetten' },
    { n: 'bruine suiker', q: 150, u: 'g', x: 'donkerbruine basterdsuiker' },
    { n: 'ei', p: 'eieren', q: 2, u: 'st' },
    { n: 'zelfrijzend bakmeel', q: 175, u: 'g', x: 'of 175 g bloem met 2 tl bakpoeder' },
    { n: 'vanille-extract', q: 1, u: 'tl' },
    { n: 'stroop', q: 1, u: 'el', x: 'keukenstroop', opt: true },
    { kop: 'Toffeesaus' },
    { n: 'boter', q: 75, u: 'g' },
    { n: 'bruine suiker', q: 150, u: 'g' },
    { n: 'slagroom', q: 250, u: 'ml', x: 'vloeibaar, uit een pak (geen spuitbus)' },
    { n: 'zout', q: 1, u: 'snuf' },
    { kop: 'Erbij' },
    { n: 'vanille-ijs', q: 500, u: 'ml', x: 'of warme custard' }
  ],
  stappen: [
    { t: 'Snijd de dadels klein, doe ze in een kom en giet het kokende water erover. Roer het zuiveringszout erdoor (het schuimt even) en laat 10 minuten wellen. Prak ze daarna grof met een vork.', min: 10 },
    { t: 'Verwarm de oven voor op 180 °C (hetelucht 160 °C). Vet de ovenschaal of de muffinvorm royaal in met boter.', m: 'oven' },
    { t: 'Verwarm de airfryer voor op 160 °C en vet de vormpjes in.', m: 'airfryer' },
    { t: 'Klop boter en suiker met de handmixer 3 minuten luchtig. Klop de eieren er één voor één door, en daarna de vanille en de stroop.', min: 3 },
    { t: 'Spatel het bakmeel erdoor en daarna het dadelmengsel met het vocht. Het beslag is vrij dun; dat hoort zo.' },
    { t: 'Giet het beslag in de schaal en bak 30 à 35 minuten, tot een satéprikker er schoon uitkomt. In de muffinvorm (¾ vol) is dat 20 à 22 minuten.', m: 'oven', min: 32 },
    { t: 'Vul de vormpjes voor ¾ en bak ze in delen 14 à 16 minuten, tot een satéprikker er schoon uitkomt.', m: 'airfryer', min: 15 },
    { t: 'Toffeesaus: verwarm boter, suiker en de helft van de room in de steelpan op middelhoog vuur en roer tot de suiker is opgelost. Laat 3 à 4 minuten zacht koken tot de saus donker en dik is. Roer de rest van de room en het zout erdoor.', min: 4 },
    { t: 'Prik gaatjes in de warme cake en schenk er een derde van de saus over, zodat hij intrekt. Serveer warm met de rest van de saus en vanille-ijs of custard.' }
  ],
  tips: [
    'Je kunt de pudding een dag van tevoren bakken. Warm hem met wat saus erover en afgedekt 15 minuten op in de oven op 160 °C, of per portie 30 seconden in de magnetron.',
    'De toffeesaus blijft een week goed in de koelkast. Lekker over ijs of pannenkoeken.'
  ],
  alt: ['Geen dadels? Gedroogde vijgen of pruimen werken ook, al wordt de smaak iets anders.']
},
{
  id: 'apple-crumble', naam: 'Apple crumble', ook: ['appelcrumble', 'crumble'],
  keuken: 'Brits', soort: 'Dessert',
  tijd: 20, wacht: '35 min in de oven', pers: 6, niveau: 'Makkelijk', vega: true,
  intro: 'Zachte, zoetzure appels met kaneel onder een knapperige laag boterkruimels. Het makkelijkste warme toetje dat er is, met custard of vanille-ijs.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'optigrill-bak', naam: 'OptiGrill-bak' } ],
  gerei: [
    { tool: 'ovenschaal', tekst: 'Ovenschaal van ca. 20 × 25 cm, ingevet met boter', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer met 4 à 6 kleine ovenvaste schaaltjes', m: 'airfryer' },
    { tool: 'optigrill-bak', tekst: 'OptiGrill-bak (Snacking & Baking, 1,6 liter) in plaats van de onderste plaat; genoeg voor 4 personen, dus zet het recept op 4 personen', m: 'optigrill-bak' }
  ],
  ingr: [
    { kop: 'Appels' },
    { n: 'appel', p: 'appels', q: 6, u: 'st', x: 'ca. 1 kg; goudrenetten of elstar' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { n: 'bruine suiker', q: 40, u: 'g' },
    { n: 'kaneel', q: 1, u: 'tl' },
    { n: 'maïzena', q: 1, u: 'el' },
    { kop: 'Crumble' },
    { n: 'bloem', q: 150, u: 'g' },
    { n: 'boter', q: 100, u: 'g', x: 'koud, in blokjes' },
    { n: 'bruine suiker', q: 75, u: 'g' },
    { n: 'havermout', q: 40, u: 'g', opt: true },
    { n: 'zout', q: 1, u: 'snuf' },
    { kop: 'Erbij' },
    { n: 'custard', q: 500, u: 'ml', x: 'warm; of vanillevla of vanille-ijs' }
  ],
  stappen: [
    { t: 'Verwarm de oven voor op 190 °C (hetelucht 170 °C).', m: 'oven' },
    { t: 'Verwarm de airfryer voor op 170 °C.', m: 'airfryer' },
    { t: 'Zet de bak in de OptiGrill in plaats van de onderste plaat, kies de handmatige modus, stel 190 °C in en druk op OK. Wacht tot hij klaar is met voorverwarmen.', m: 'optigrill-bak' },
    { t: 'Schil de appels, verwijder het klokhuis en snijd ze in blokjes van 2 cm. Meng ze met citroensap, 40 g bruine suiker, kaneel en maïzena.' },
    { t: 'Schep de appels in de ingevette ovenschaal.', m: 'oven' },
    { t: 'Verdeel de appels over de ingevette schaaltjes.', m: 'airfryer' },
    { t: 'Vet de hete bak in met een klontje boter en schep de appels erin.', m: 'optigrill-bak' },
    { t: 'Crumble: wrijf bloem, suiker, zout en koude boter met je vingertoppen tot grove kruimels, met hier en daar een groter klontje. Meng de havermout erdoor. Werk snel, de boter moet koud blijven.' },
    { t: 'Strooi de crumble losjes over de appels; druk hem niet aan.' },
    { t: 'Bak 35 à 40 minuten in het midden van de oven, tot de crumble goudbruin is en het appelsap aan de randen borrelt.', m: 'oven', min: 38 },
    { t: 'Zet de schaaltjes in de mand en bak 18 à 20 minuten, tot de bovenkant goudbruin is en het sap borrelt. Kleurt de bovenkant te snel, leg er dan een stukje aluminiumfolie op.', m: 'airfryer', min: 19 },
    { t: 'Sluit de deksel en bak 25 à 30 minuten, tot de crumble goudbruin is, de appels zacht zijn en het sap aan de randen borrelt. Kijk na 15 minuten even: kleurt de bovenkant te snel, leg er dan een vel bakpapier op.', m: 'optigrill-bak', min: 28 },
    { t: 'Laat 10 minuten afkoelen en serveer warm met custard of vanille-ijs.', min: 10 }
  ],
  tips: [
    'Maak een dubbele portie crumble en bewaar de helft in de vriezer. Strooi hem bevroren over de appels: dan wordt hij extra knapperig.',
    'Goudrenetten vallen half uit elkaar en zijn lekker zuur, elstar houdt beter zijn vorm. Een mix van beide is ideaal.'
  ],
  alt: ['Apple and blackberry crumble: vervang een derde van de appels door bramen, vers of uit de diepvries.']
}
);
