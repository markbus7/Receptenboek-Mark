/* Spaans, Grieks, Hongaars, Turks, Midden-Oosters en Marokkaans: tapas, mezze, stoofpotten en straateten */
RECEPTEN.push(
{
  id: 'gambas-al-ajillo', naam: 'Gambas al ajillo', ook: ['knoflookgarnalen', 'gambas pil pil'],
  keuken: 'Spaans', soort: 'Salade & bijgerecht',
  tijd: 15, pers: 4, niveau: 'Makkelijk', vega: false, pit: 1,
  intro: 'Garnalen die nog sissend in een bad van olijfolie, knoflook en pepertjes op tafel komen. Het brood om de olie op te deppen is minstens zo belangrijk.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan van 24 cm, of een vuurvast aardewerken schaaltje (cazuela) dat op het vuur mag' }
  ],
  ingr: [
    { n: 'garnalen', q: 400, u: 'g', x: 'rauw en gepeld; diepvries eerst ontdooien' },
    { n: 'olijfolie', q: 150, u: 'ml', x: 'extra vierge' },
    { n: 'knoflook', q: 6, u: 'teen', x: 'in dunne plakjes', vers: 'de knoflook is hier de smaak' },
    { n: 'gedroogde rode pepers', q: 2, u: 'st', x: 'guindilla\'s, gebroken; of ¼ tl cayennepeper' },
    { n: 'verse peterselie', q: 2, u: 'el', x: 'fijngehakt' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', opt: true },
    { n: 'stokbrood', q: 1, u: 'st', x: 'om de olie op te deppen' },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Dep de garnalen goed droog met keukenpapier en bestrooi ze met een snuf zout. Natte garnalen spatten en worden niet mooi.' },
    { t: 'Doe de olijfolie, de knoflook en de pepertjes in de koude koekenpan. Zet het vuur middellaag en laat de knoflook 3 à 4 minuten zachtjes borrelen tot hij net lichtgoud kleurt. Bruine knoflook wordt bitter.', min: 4 },
    { t: 'Zet het vuur middelhoog. Leg de garnalen in één laag in de olie en bak ze 1 minuut. Keer ze en bak nog 1 minuut, tot ze net roze en gekruld zijn.', min: 2 },
    { t: 'Haal de pan van het vuur, strooi de peterselie erover en knijp er eventueel wat citroen boven uit. Zet de pan direct op tafel, met stokbrood om in de olie te dopen.' }
  ],
  tips: ['Gebruik rauwe garnalen. Voorgekookte garnalen worden in de hete olie taai en rubberachtig.', 'In Spanje komen ze in een aardewerken cazuela op tafel; die houdt de olie lang heet. Gambas pil pil is dezelfde aanpak met wat meer peper.'],
  alt: ['Als hoofdgerecht voor 2: dezelfde hoeveelheden, met brood en een frisse salade, of schep alles door 200 g gekookte spaghetti.', 'Minder pittig: laat de pepertjes weg en strooi er een snuf edelzoet paprikapoeder over.']
},
{
  id: 'gazpacho', naam: 'Gazpacho', ook: ['koude tomatensoep'],
  keuken: 'Spaans', soort: 'Soep',
  tijd: 15, wacht: '2 uur koelen', pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'De koude tomatensoep uit Andalusië: rijpe tomaat, komkommer, paprika, knoflook en olijfolie, in een paar minuten gemixt. Op een warme dag is er weinig dat zo verfrist.',
  gerei: [
    { tool: 'staafmixer', tekst: 'Blender, of een staafmixer en een grote kom', of: 'Met een staafmixer wordt de soep iets minder glad. Wrijf hem daarna door een zeef voor een fluweelzachte gazpacho.' }
  ],
  ingr: [
    { n: 'tomaat', q: 1, u: 'kg', x: 'heel rijp, bijvoorbeeld trostomaten', vers: 'gaat rauw de blender in' },
    { n: 'komkommer', p: 'komkommers', q: 0.5, u: 'st', x: 'geschild' },
    { n: 'groene paprika', p: 'groene paprika\'s', q: 1, u: 'st', x: 'of een rode, voor een zoetere soep' },
    { n: 'ui', p: 'uien', q: 0.5, u: 'st', x: 'klein, of 1 sjalot' },
    { n: 'knoflook', q: 1, u: 'teen' },
    { n: 'brood', q: 2, u: 'plak', x: 'oudbakken wit brood zonder korst' },
    { n: 'olijfolie', q: 75, u: 'ml', x: 'extra vierge, plus wat om te besprenkelen' },
    { n: 'sherry-azijn', q: 2, u: 'el', x: 'of rode wijnazijn' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'water', q: 100, u: 'ml', x: 'ijskoud, alleen als de soep te dik is', opt: true }
  ],
  stappen: [
    { t: 'Snijd de tomaten in grove stukken en haal het harde kontje eruit. Snijd komkommer, paprika (zonder zaadlijsten) en ui in stukken. Houd van de komkommer en de paprika een klein stukje apart voor de garnering.' },
    { t: 'Week het brood kort in een beetje water en knijp het uit.' },
    { t: 'Doe tomaat, komkommer, paprika, ui, knoflook, brood, azijn en zout in de blender en mix 1 à 2 minuten tot een gladde soep.' },
    { t: 'Laat de blender draaien en giet de olijfolie er in een dun straaltje bij. Zo wordt de gazpacho romig en lichtoranje van kleur.' },
    { t: 'Proef en breng op smaak met zout en azijn. Te dik? Mix er wat ijskoud water door. Wil je hem extra glad, wrijf hem dan door een zeef.' },
    { t: 'Zet de soep minstens 2 uur in de koelkast, tot hij echt koud is.', min: 120 },
    { t: 'Roer door, schep in kommen of glazen en garneer met heel fijne blokjes komkommer en paprika en een draadje olijfolie.' }
  ],
  tips: ['Gazpacho staat of valt met rijpe tomaten. Buiten het seizoen geeft een blik tomatenblokjes (400 g) in plaats van een deel van de verse tomaten meer smaak.', 'De soep blijft 2 à 3 dagen goed in de koelkast en is de tweede dag nog lekkerder.'],
  alt: ['Geen tijd om te koelen? Vervang het water door een handvol ijsblokjes en mix ze mee, dan kun je meteen serveren.', 'Salmorejo, de dikke variant uit Córdoba: mix alleen tomaat, knoflook, olie, zout en 150 g brood tot een dikke crème en garneer met gehakt hardgekookt ei.']
},
{
  id: 'churros', naam: 'Churros met chocoladesaus', ook: ['churros con chocolate'],
  keuken: 'Spaans', soort: 'Dessert',
  tijd: 40, pers: 4, niveau: 'Gemiddeld', vega: true,
  intro: 'Krokante, geribbelde deegstengels, door kaneelsuiker gerold en gedoopt in dikke warme chocolade. In Spanje een ontbijt op zondag, bij ons een feestelijk toetje.',
  gerei: [
    { tool: 'kookpan', tekst: 'Steelpan voor het deeg, en een stevige spuitzak met grote stervormige spuitmond (ca. 1 cm)' },
    { tool: 'kookpan', tekst: 'Steelpan voor de chocoladesaus' },
    { tool: 'braadpan', tekst: 'Dutch oven met 5 à 6 cm olie, een keukenthermometer en een schuimspaan' }
  ],
  ingr: [
    { kop: 'Deeg' },
    { n: 'water', q: 250, u: 'ml' },
    { n: 'boter', q: 30, u: 'g' },
    { n: 'suiker', q: 1, u: 'el' },
    { n: 'zout', q: 0.5, u: 'tl' },
    { n: 'bloem', q: 150, u: 'g' },
    { n: 'zonnebloemolie', q: 2, u: 'l', x: 'om te frituren, 5 à 6 cm in de pan' },
    { kop: 'Kaneelsuiker' },
    { n: 'suiker', q: 75, u: 'g' },
    { n: 'kaneel', q: 1, u: 'tl' },
    { kop: 'Chocoladesaus' },
    { n: 'melk', q: 250, u: 'ml' },
    { n: 'pure chocolade', q: 100, u: 'g', x: 'in stukjes' },
    { n: 'maïzena', q: 2, u: 'tl' },
    { n: 'suiker', q: 1, u: 'el' }
  ],
  stappen: [
    { t: 'Breng in de steelpan het water met de boter, suiker en zout aan de kook, tot de boter gesmolten is.' },
    { t: 'Haal de pan van het vuur, stort de bloem er in één keer in en roer krachtig met een houten lepel tot een glad deeg dat als een bal loslaat van de pan. Laat 10 minuten afkoelen.', min: 10 },
    { t: 'Chocoladesaus: roer de maïzena los in 2 el van de koude melk. Verwarm de rest van de melk met de suiker in de andere steelpan, voeg de chocolade toe en roer op laag vuur tot hij gesmolten is. Roer de maïzena erdoor en laat 2 minuten zachtjes binden tot de saus dik is. Houd warm op het laagste vuur.', min: 2 },
    { t: 'Verhit 5 à 6 cm olie in de Dutch oven tot 180 °C. Geen thermometer? Houd er een houten lepel in: stijgen er direct belletjes langs op, dan is de olie heet genoeg.' },
    { t: 'Schep het deeg in de spuitzak. Spuit stengels van 10 à 12 cm direct boven de olie en knip ze af met een schaar. Bak 4 à 5 churros tegelijk.' },
    { t: 'Frituur ze 3 à 4 minuten tot ze rondom diep goudbruin zijn; keer halverwege. Schep ze eruit en laat uitlekken op keukenpapier. Laat de olie tussen de porties weer op temperatuur komen.', min: 4 },
    { t: 'Meng suiker en kaneel in een diep bord en rol de nog warme churros erdoor. Serveer direct met de warme chocoladesaus om in te dopen.' }
  ],
  tips: ['De ribbels van de stervormige spuitmond zijn geen versiering: ze voorkomen dat de churros in de olie openbarsten en maken ze extra krokant.', 'Houd de olie op 175 à 180 °C. Te koel en de churros worden vet, te heet en ze zijn vanbinnen nog rauw.'],
  alt: ['Airfryer: spuit de churros op bakpapier en leg ze 20 minuten in de vriezer, zodat ze stevig worden. Bestrijk ze rondom met olie, leg ze in een goed ingevette mand en bak 10 à 12 minuten op 200 °C; keer halverwege. Bestrijk ze met gesmolten boter en rol ze door de kaneelsuiker. Lekker, maar minder krokant dan gefrituurd.', 'Snelle chocoladesaus: verwarm 150 ml slagroom tot net tegen de kook en smelt er 150 g pure chocolade in.']
},
{
  id: 'gyros', naam: 'Gyros', gerecht: 'Gyros', variant: 'Varkensvlees', ook: ['pita gyros', 'gyros met tzatziki'],
  keuken: 'Grieks', soort: 'Hoofdgerecht',
  tijd: 35, wacht: '30 min marineren', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Kruidig gemarineerd varkensvlees met krokante randjes, in een warme pita met tzatziki, tomaat en ui. Zoals bij de Griek op de hoek, maar dan uit je eigen keuken.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'contactgrill', naam: 'Contactgrill' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Grote koekenpan (28 cm), goed heet', m: 'koekenpan' },
    { tool: 'contactgrill', tekst: 'Contactgrill (zoals de OptiGrill) op de hoogste stand', m: 'contactgrill' },
    { tool: 'koekenpan', tekst: 'Koekenpan om de pita\'s op te warmen', m: 'contactgrill' }
  ],
  ingr: [
    { n: 'varkensschouder', q: 600, u: 'g', x: 'in lapjes van 1 cm dik (schouderlappen of procureur)' },
    { kop: 'Marinade' },
    { n: 'olijfolie', q: 3, u: 'el' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'geperst' },
    { n: 'gedroogde oregano', q: 2, u: 'tl' },
    { n: 'paprikapoeder', q: 2, u: 'tl' },
    { n: 'komijn', q: 1, u: 'tl' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'peper' },
    { kop: 'Tzatziki' },
    { n: 'Griekse yoghurt', q: 250, u: 'g', x: 'volle (10%)' },
    { n: 'komkommer', p: 'komkommers', q: 0.5, u: 'st' },
    { n: 'knoflook', q: 1, u: 'teen', x: 'geperst' },
    { n: 'olijfolie', q: 1, u: 'el' },
    { n: 'verse dille', q: 1, u: 'el', x: 'fijngehakt, of 1 tl gedroogde munt', opt: true },
    { kop: 'Serveren' },
    { n: 'pitabroodjes', q: 4, u: 'st', x: 'liefst dikke Griekse pita zonder zakje' },
    { n: 'tomaat', p: 'tomaten', q: 2, u: 'st', x: 'in partjes' },
    { n: 'rode ui', p: 'rode uien', q: 1, u: 'st', x: 'in dunne ringen' },
    { n: 'friet', q: 300, u: 'g', x: 'diepvries, om in de pita te stoppen zoals in Griekenland', opt: true }
  ],
  stappen: [
    { t: 'Meng olie, citroensap, knoflook, oregano, paprikapoeder, komijn, zout en peper in een kom. Schep het vlees erdoor en laat minstens 30 minuten marineren, of afgedekt een nacht in de koelkast.', min: 30 },
    { t: 'Tzatziki: rasp de komkommer grof en knijp hem in een schone theedoek zo droog mogelijk. Meng met yoghurt, knoflook, olijfolie, dille en een snuf zout. Zet koud.' },
    { t: 'Neem je friet? Bak die nu volgens de verpakking in de oven of airfryer.' },
    { t: 'Snijd het vlees in dunne reepjes. Verhit de koekenpan op hoog vuur, zonder extra olie. Bak het vlees in 2 porties 5 à 6 minuten, tot het gaar is en er donkere, krokante randjes aan zitten. Doe niet te veel tegelijk in de pan, anders gaat het vlees koken in plaats van bakken.', m: 'koekenpan', min: 6 },
    { t: 'Leg de hele lapjes op de voorverwarmde contactgrill, sluit de deksel en grill 5 à 6 minuten, tot ze gaar zijn en mooie bruine strepen hebben. Laat ze 2 minuten rusten en snijd ze in dunne reepjes.', m: 'contactgrill', min: 6 },
    { t: 'Warm de pita\'s 1 minuut per kant op in de hete koekenpan, met een paar druppels olie.' },
    { t: 'Beleg elke pita met vlees, tomaat, ui, een flinke schep tzatziki en eventueel een paar frietjes. Rol op en wikkel de onderkant in bakpapier.' }
  ],
  tips: ['Schouder blijft sappiger dan filet en is ook het vlees dat in Griekenland aan het spit gaat. Het vetrandje hoort erbij.', 'De krokante, donkere randjes maken het gyros: bak dus op hoog vuur en in kleine porties.'],
  alt: ['Gyrosschotel: serveer het vlees met friet, Griekse salade en tzatziki op een bord in plaats van in een pita.']
},
{
  id: 'gyros-kip', variantVan: 'gyros', variant: 'Kip', naam: 'Gyros van kip', ook: ['kipgyros', 'kip gyros', 'gyros kip'],
  intro: 'Kruidig gemarineerde kippendij met krokante randjes, in een warme pita met tzatziki, tomaat en ui. Net zo Grieks als de varkensversie, en wat lichter.',
  vervang: {
    varkensschouder: { n: 'kippendijfilet', q: 600, u: 'g', x: 'heel, of opengevouwen tot lapjes van 1 cm dik' }
  },
  stappen: [
    { t: 'Meng olie, citroensap, knoflook, oregano, paprikapoeder, komijn, zout en peper in een kom. Schep de kip erdoor en laat minstens 30 minuten marineren, of afgedekt een nacht in de koelkast.', min: 30 },
    { t: 'Tzatziki: rasp de komkommer grof en knijp hem in een schone theedoek zo droog mogelijk. Meng met yoghurt, knoflook, olijfolie, dille en een snuf zout. Zet koud.' },
    { t: 'Neem je friet? Bak die nu volgens de verpakking in de oven of airfryer.' },
    { t: 'Snijd de kip in reepjes. Verhit de koekenpan op hoog vuur, zonder extra olie. Bak de kip in 2 porties 6 à 8 minuten, tot hij gaar is en er donkere, krokante randjes aan zitten. Doe niet te veel tegelijk in de pan, anders gaat hij koken in plaats van bakken.', m: 'koekenpan', min: 7 },
    { t: 'Leg de hele kippendijen op de voorverwarmde contactgrill, sluit de deksel en grill 7 à 8 minuten, tot ze gaar zijn en mooie bruine strepen hebben. Laat ze 2 minuten rusten en snijd ze in reepjes.', m: 'contactgrill', min: 8 },
    { t: 'Warm de pita\'s 1 minuut per kant op in de hete koekenpan, met een paar druppels olie.' },
    { t: 'Beleg elke pita met kip, tomaat, ui, een flinke schep tzatziki en eventueel een paar frietjes. Rol op en wikkel de onderkant in bakpapier.' }
  ],
  tips: ['Kippendij blijft bij hoge hitte sappig; kipfilet wordt snel droog. Neem je toch filet, snijd hem dan in dunne plakken en bak hem 2 minuten korter.', 'De krokante, donkere randjes maken het gyros: bak dus op hoog vuur en in kleine porties.']
},
{
  id: 'spanakopita', naam: 'Spanakopita', ook: ['griekse spinaziepastei', 'spinazietaart'],
  keuken: 'Grieks', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '45 min in de oven', pers: 4, niveau: 'Gemiddeld', vega: true,
  intro: 'Griekse spinaziepastei met feta, dille en lente-ui onder een knapperig dak van boterig filodeeg. Warm als avondeten, koud de volgende dag als lunch.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Grote koekenpan voor de uien' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal van ca. 20 × 30 cm, en een kwastje' },
    { tool: 'oven', tekst: 'Oven' }
  ],
  ingr: [
    { n: 'spinazie', q: 750, u: 'g', x: 'diepvries bladspinazie, ontdooid; of 1,2 kg verse, kort geslonken' },
    { n: 'feta', q: 400, u: 'g', x: 'verkruimeld' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'fijngesnipperd' },
    { n: 'lente-ui', p: 'lente-uien', q: 6, u: 'st', x: 'in ringetjes' },
    { n: 'verse dille', q: 20, u: 'g', x: 'fijngehakt' },
    { n: 'verse peterselie', q: 10, u: 'g', x: 'fijngehakt' },
    { n: 'ei', p: 'eieren', q: 3, u: 'st' },
    { n: 'olijfolie', q: 2, u: 'el' },
    { n: 'peper' },
    { kop: 'Deeg' },
    { n: 'filodeeg', q: 10, u: 'vel', x: 'ca. 250 g, ontdooid' },
    { n: 'boter', q: 75, u: 'g', x: 'gesmolten, of half olijfolie' },
    { n: 'sesamzaad', q: 1, u: 'tl', opt: true }
  ],
  stappen: [
    { t: 'Laat de spinazie ontdooien in een vergiet en knijp hem met je handen zo droog mogelijk. Hoe droger de spinazie, hoe knapperiger de bodem.' },
    { t: 'Verhit de olijfolie in de koekenpan en fruit ui en lente-ui 5 minuten op middelhoog vuur tot ze zacht zijn. Laat iets afkoelen.', min: 5 },
    { t: 'Meng spinazie, uien, feta, dille, peterselie, de losgeklopte eieren en flink wat peper. Zout is meestal niet nodig: de feta is al zout.' },
    { t: 'Verwarm de oven voor op 180 °C. Kwast de ovenschaal in met gesmolten boter.' },
    { t: 'Leg een vel filodeeg in de schaal, laat het over de randen hangen en kwast het in met boter. Herhaal tot de helft van de vellen op is. Houd de rest onder een vochtige theedoek, anders droogt het uit.' },
    { t: 'Schep de vulling erop en strijk glad. Vouw de overhangende randen naar binnen. Leg de rest van de vellen er een voor een op en kwast elk vel in met boter. Stop de randen in langs de zijkant van de schaal.' },
    { t: 'Snijd met een scherp mes ruiten in de bovenste lagen, niet tot op de bodem, en bestrooi met sesamzaad. Bak 40 à 45 minuten in het midden van de oven, tot de pastei diep goudbruin is.', min: 45 },
    { t: 'Laat 10 minuten rusten en snijd dan door. Lekker met een Griekse salade.', min: 10 }
  ],
  tips: ['Filodeeg droogt in een paar minuten uit en breekt dan. Werk vlot en houd de vellen afgedekt. Een scheur maakt niets uit: die verdwijnt onder het volgende vel.', 'Je kunt de spanakopita ongebakken invriezen. Bak hem bevroren af op 180 °C en reken 20 minuten extra.'],
  alt: ['Spanakopitakia uit de airfryer: snijd de vellen in repen van 8 cm breed, kwast ze in met boter, leg een lepel vulling onderaan en vouw ze als een vlag tot driehoekjes. Bak ze in porties 10 à 12 minuten op 180 °C tot ze goudbruin zijn.', 'Mildere vulling: vervang 100 g van de feta door ricotta.']
},
{
  id: 'paprikas-csirke', naam: 'Paprikás csirke', ook: ['paprikakip', 'chicken paprikash', 'paprikash'],
  keuken: 'Hongaars', soort: 'Hoofdgerecht',
  tijd: 35, wacht: '35 min stoven', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Malse kippendij in een fluweelzachte saus van ui, veel paprikapoeder en zure room. Hongaars troosteten, met nokedli om alle saus mee op te scheppen.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan (24 à 26 cm) met deksel' },
    { tool: 'kookpan', tekst: 'Grote kookpan voor de nokedli, plus een vergiet of spätzlerasp met grote gaten', of: 'Geen zin in nokedli? Kook gewoon tagliatelle.' }
  ],
  ingr: [
    { n: 'kippendijfilet', q: 700, u: 'g', x: 'in grote stukken; of 8 kippendijen met bot' },
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'fijngesnipperd' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in reepjes; of een lichtgroene Hongaarse paprika' },
    { n: 'tomaat', p: 'tomaten', q: 2, u: 'st', x: 'in blokjes', of: { q: 200, u: 'g', n: 'tomatenblokjes uit blik' } },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'paprikapoeder', q: 2, u: 'el', x: 'edelzoet' },
    { n: 'kippenbouillon', q: 250, u: 'ml' },
    { n: 'zure room', q: 250, u: 'ml' },
    { n: 'bloem', q: 1, u: 'el' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { n: 'zout' }, { n: 'peper' },
    { kop: 'Nokedli (optioneel)' },
    { n: 'bloem', q: 300, u: 'g', opt: true },
    { n: 'ei', p: 'eieren', q: 2, u: 'st', opt: true },
    { n: 'water', q: 175, u: 'ml', opt: true },
    { n: 'zout', q: 1, u: 'tl', opt: true },
    { n: 'boter', q: 15, u: 'g', opt: true }
  ],
  stappen: [
    { t: 'Bestrooi de kip met zout en peper. Verhit de olie in de Dutch oven op middelhoog vuur en bak de kip in 2 porties 4 minuten rondom lichtbruin. Schep uit de pan.', min: 4 },
    { t: 'Fruit de ui in het bakvet 8 à 10 minuten tot hij zacht en goudgeel is. Bak paprika en knoflook 2 minuten mee.', min: 10 },
    { t: 'Haal de pan van het vuur en roer het paprikapoeder erdoor. Op het vuur verbrandt paprikapoeder binnen een paar seconden en wordt het bitter.' },
    { t: 'Zet de pan terug en voeg tomaat, bouillon en de kip met het vleesvocht toe. Breng aan de kook, leg de deksel erop en laat 30 à 35 minuten zachtjes stoven tot de kip heel mals is.', min: 35 },
    { t: 'Nokedli: roer bloem, eieren, water en zout tot een dik, kleverig beslag dat langzaam van de lepel valt. Breng een grote pan water met zout aan de kook. Druk het beslag in porties door het vergiet of de spätzlerasp in het kokende water. Zodra de nokedli bovenkomen nog 1 minuut koken, uitscheppen en omscheppen met de boter.', min: 3 },
    { t: 'Klop de zure room glad met de bloem en een paar lepels hete saus. Haal de pan van het vuur en roer het mengsel door de stoof. Verwarm nog 2 à 3 minuten op laag vuur, maar laat het niet meer koken, anders schift de room.', min: 3 },
    { t: 'Breng op smaak met zout en serveer met de nokedli of met tagliatelle.' }
  ],
  tips: ['Met bot en vel (8 kippendijen) wordt de saus nog voller. Trek het vel er na het stoven af als je dat liever niet eet.', 'Echt Hongaars edelzoet paprikapoeder (édesnemes, in een blikje) is zoeter en dieper van smaak dan gewoon paprikapoeder.'],
  alt: ['Geen nokedli? Tagliatelle, brede eiermie of rijst passen er ook goed bij.', 'Pittiger: vervang 1 tl van het paprikapoeder door scherp paprikapoeder of een snuf cayennepeper.']
},
{
  id: 'gulyasleves', naam: 'Gulyásleves (goulashsoep)', ook: ['goulashsoep', 'gulasch soep', 'gulyas'],
  keuken: 'Hongaars', soort: 'Soep',
  tijd: 30, wacht: '1½ uur trekken', pers: 4, niveau: 'Makkelijk', vega: false, pit: 1,
  intro: 'De echte Hongaarse goulash is een soep: rundvlees, aardappel en wortel in een dieprode bouillon vol paprika en karwij. Met een stuk brood erbij een complete maaltijd.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of grote soeppan (minstens 4 liter) met deksel' }
  ],
  ingr: [
    { n: 'runderlappen', q: 500, u: 'g', x: 'in blokjes van 2 cm' },
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'fijngesnipperd' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'fijngehakt' },
    { n: 'paprikapoeder', q: 2, u: 'el', x: 'edelzoet' },
    { n: 'karwijzaad', q: 1, u: 'tl', x: 'grof gekneusd' },
    { n: 'tomatenpuree', q: 1, u: 'el' },
    { n: 'runderbouillon', q: 1.5, u: 'l', x: 'of water met 1 bouillonblokje' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 1, u: 'st' },
    { n: 'vastkokende aardappelen', q: 400, u: 'g', x: 'in blokjes van 1,5 cm' },
    { n: 'wortel', p: 'wortels', q: 2, u: 'st', x: 'in plakjes' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in blokjes' },
    { n: 'tomaat', p: 'tomaten', q: 1, u: 'st', x: 'in blokjes', of: { q: 100, u: 'g', n: 'tomatenblokjes uit blik' } },
    { n: 'rode peper', p: 'rode pepers', q: 1, u: 'st', x: 'of 1 tl scherp paprikapoeder', opt: true },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Verhit de olie in de Dutch oven en fruit de ui 8 minuten op middelhoog vuur tot hij zacht en goudgeel is.', min: 8 },
    { t: 'Voeg het vlees toe en bak 5 minuten mee tot het rondom gekleurd is.', min: 5 },
    { t: 'Haal de pan van het vuur en roer paprikapoeder, karwijzaad, knoflook en tomatenpuree erdoor tot het vlees mooi rood is. Op het vuur verbrandt paprikapoeder snel en wordt het bitter.' },
    { t: 'Zet de pan terug, schenk de bouillon erbij en voeg het laurierblad en eventueel de rode peper toe. Breng aan de kook en laat met de deksel op een kier 1 uur zachtjes trekken.', min: 60 },
    { t: 'Voeg aardappel, wortel, paprika en tomaat toe en laat nog 30 minuten trekken, tot het vlees mals is en de aardappel gaar.', min: 30 },
    { t: 'Vis het laurierblad eruit en breng de soep op smaak met zout en peper. Serveer met een stuk stevig brood.' }
  ],
  tips: ['Net als stoofvlees is gulyásleves de volgende dag nog lekkerder. De soep vriest goed in, al wordt de aardappel na het ontdooien wat zachter.', 'In Hongarije kookt er vaak csipetke mee: plukjes stevig deeg van 100 g bloem en 1 ei, die je de laatste 5 minuten in de soep gaar laat worden.'],
  alt: ['Slowcooker: doe na stap 3 alles behalve aardappel en groente in de slowcooker met 1 liter bouillon. Gaar 6 uur op LOW, voeg aardappel en groente toe en gaar nog 1½ uur.', 'Voor wie het pittig wil: zet scherp paprikapoeder (erős paprika) of sambal op tafel.']
},
{
  id: 'langos', naam: 'Lángos', ook: ['langos'],
  keuken: 'Hongaars', soort: 'Ontbijt & lunch',
  tijd: 40, wacht: '1 uur rijzen', pers: 4, niveau: 'Gemiddeld', vega: true,
  intro: 'Hongaars kermis- en strandeten: luchtig gefrituurd deeg met een beetje aardappel erin, ingesmeerd met knoflookolie en bedolven onder zure room en kaas.',
  gerei: [
    { tool: 'kookpan', tekst: 'Steelpan om de aardappel te koken' },
    { tool: 'braadpan', tekst: 'Dutch oven met 5 à 6 cm olie, een keukenthermometer en een schuimspaan' }
  ],
  ingr: [
    { kop: 'Deeg' },
    { n: 'kruimige aardappelen', q: 150, u: 'g', x: 'geschild, in stukken' },
    { n: 'bloem', q: 300, u: 'g' },
    { n: 'gedroogde gist', q: 7, u: 'g', x: '1 zakje' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'melk', q: 175, u: 'ml', x: 'lauw' },
    { n: 'zonnebloemolie', q: 2, u: 'l', x: 'om te frituren (5 à 6 cm in de pan), plus 4 el voor deeg en knoflookolie' },
    { kop: 'Topping' },
    { n: 'knoflook', q: 4, u: 'teen', x: 'geperst' },
    { n: 'zure room', q: 250, u: 'ml' },
    { n: 'geraspte kaas', q: 150, u: 'g', x: 'Goudse, Emmentaler of Hongaarse trappista' }
  ],
  stappen: [
    { t: 'Kook de aardappel in 15 minuten gaar in de steelpan. Giet af, prak hem heel fijn en laat lauw worden.', min: 15 },
    { t: 'Meng bloem, gist, suiker en zout in een kom. Voeg de aardappel, de lauwe melk en 1 el olie toe en kneed 8 minuten tot een zacht, licht plakkerig deeg.', min: 8 },
    { t: 'Laat het deeg afgedekt op een warme plek 1 uur rijzen, tot het in volume verdubbeld is.', min: 60 },
    { t: 'Roer intussen de knoflook door 3 el olie met een snuf zout.' },
    { t: 'Verhit 5 à 6 cm olie in de Dutch oven tot 180 °C. Geen thermometer? Houd er een houten lepel in: borrelen er direct belletjes omheen, dan is de olie heet genoeg.' },
    { t: 'Verdeel het deeg in 4 stukken. Rek elk stuk met ingeoliede handen uit tot een lap van ca. 18 cm, dun in het midden en met een dikkere rand.' },
    { t: 'Laat een lap voorzichtig in de olie glijden en bak hem 1½ à 2 minuten per kant, tot hij goudbruin en opgebold is. Laat uitlekken op keukenpapier en bak zo de rest.', min: 4 },
    { t: 'Bestrijk de warme lángos met knoflookolie, smeer er zure room over en strooi er royaal kaas op. Meteen eten.' }
  ],
  tips: ['De aardappel maakt het deeg luchtig en zacht vanbinnen. Een restje aardappelpuree zonder melk en boter werkt ook.', 'Rek het deeg pas vlak voor het bakken uit; als het blijft liggen, trekt het weer samen.'],
  alt: ['Geen zin in frituren? Bak de lángos in 1 cm olie in een koekenpan, 2 à 3 minuten per kant. Ze worden iets platter, maar zijn nog steeds heerlijk.', 'Zoet: laat de knoflook, room en kaas weg en bestrooi de warme lángos met kaneelsuiker of besmeer ze met jam.']
},
{
  id: 'toltott-paprika', naam: 'Töltött paprika (gevulde paprika)', ook: ['gevulde paprika', 'gevulde paprika\'s'],
  keuken: 'Hongaars', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '1 uur stoven', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Paprika\'s gevuld met gehakt en rijst, langzaam gestoofd in een zoetzure tomatensaus. In Hongarije een zomerklassieker, met aardappelpuree of gewoon brood.',
  methodes: [ { id: 'braadpan', naam: 'Op het vuur' }, { id: 'oven', naam: 'Oven' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan (26 cm) met deksel, waar de paprika\'s rechtop in passen' }
  ],
  ingr: [
    { n: 'paprika', p: 'paprika\'s', q: 6, u: 'st', x: 'middelgroot, liefst lichtgroen of geel; of 8 puntpaprika\'s' },
    { kop: 'Vulling' },
    { n: 'half-om-half gehakt', q: 500, u: 'g' },
    { n: 'rijst', q: 75, u: 'g', x: 'ongekookt, langkorrel' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'fijngesnipperd' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'geperst' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st' },
    { n: 'paprikapoeder', q: 2, u: 'tl', x: 'edelzoet' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'peper' },
    { kop: 'Tomatensaus' },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'fijngesnipperd' },
    { n: 'passata', q: 700, u: 'ml' },
    { n: 'water', q: 300, u: 'ml' },
    { n: 'suiker', q: 1, u: 'el' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 1, u: 'st' },
    { kop: 'Erbij' },
    { n: 'zure room', q: 125, u: 'ml', opt: true }
  ],
  stappen: [
    { t: 'Snijd een kapje van de paprika\'s en haal de zaadlijsten en zaadjes eruit. Bewaar de kapjes.' },
    { t: 'Meng gehakt, ongekookte rijst, ui, knoflook, ei, paprikapoeder, zout en peper. Vul de paprika\'s losjes: de rijst zet nog uit. Rol van de overgebleven vulling kleine balletjes.' },
    { t: 'Verwarm de oven voor op 180 °C.', m: 'oven' },
    { t: 'Verhit de olie in de Dutch oven en fruit de tweede ui 4 minuten op middelhoog vuur. Voeg passata, water, suiker, laurier en een theelepel zout toe en breng aan de kook.', min: 4 },
    { t: 'Zet de paprika\'s rechtop in de saus en leg de balletjes en de kapjes ertussen. Schep wat saus over de vulling.' },
    { t: 'Leg de deksel erop en laat 1 uur zachtjes stoven op laag vuur, tot de rijst in de vulling gaar is. Schep halverwege saus over de paprika\'s.', m: 'braadpan', min: 60 },
    { t: 'Zet de Dutch oven met deksel 1 uur in de oven. Haal de laatste 15 minuten de deksel eraf, dan krijgen de paprika\'s een licht geroosterd randje.', m: 'oven', min: 60 },
    { t: 'Proef de saus: hij moet zoetzuur zijn, dus breng hem op smaak met zout en suiker. Te dun? Laat hem zonder deksel nog 5 minuten inkoken. Serveer met aardappelpuree of brood en een schep zure room.' }
  ],
  tips: ['Vul de paprika\'s niet te strak. De rijst zwelt op en anders barst de vulling eruit.', 'Net als veel stoofgerechten is töltött paprika de volgende dag nog lekkerder.'],
  alt: ['Geen varkensvlees? Gebruik rundergehakt met 1 el olijfolie erdoor, dan blijft de vulling sappig.', 'Vegetarisch: vervang het gehakt door 400 g vegetarisch gehakt.']
},
{
  id: 'rakott-krumpli', toegevoegd: '2026-10-20', naam: 'Rakott krumpli (Hongaarse aardappelschotel)', ook: ['hongaarse aardappelschotel', 'aardappelschotel met worst en ei', 'gelaagde aardappelen', 'rakott krumpli'],
  keuken: 'Hongaars', soort: 'Hoofdgerecht',
  tijd: 40, wacht: '45 min in de oven', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Laagjes aardappel, hardgekookt ei en paprikaworst onder een deken van zure room, in de oven goudbruin gebakken. Hongaars huiskamereten dat je de avond ervoor al kunt klaarzetten.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'optigrill-bak', naam: 'OptiGrill-bak' } ],
  gerei: [
    { tool: 'kookpan', tekst: 'Grote kookpan voor de aardappelen en een steelpan voor de eieren' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de worst' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal 20 × 30 cm', m: 'oven' },
    { tool: 'oven', tekst: 'Oven', m: 'oven' },
    { tool: 'optigrill-bak', tekst: 'OptiGrill-bak (Snacking & Baking, 1,6 liter) in plaats van de onderste plaat; genoeg voor 2 personen, dus zet het recept op 2 personen', m: 'optigrill-bak' }
  ],
  ingr: [
    { n: 'vastkokende aardappelen', q: 1, u: 'kg', x: 'ongeschild, ongeveer even groot' },
    { n: 'ei', p: 'eieren', q: 6, u: 'st' },
    { n: 'rookworst', p: 'rookworsten', q: 1, u: 'st', x: 'ca. 275 g, in plakjes; of Hongaarse kolbász of chorizo' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'fijngesnipperd' },
    { n: 'zure room', q: 375, u: 'ml', x: '3 bekers' },
    { n: 'paprikapoeder', q: 2, u: 'tl', x: 'edelzoet' },
    { n: 'boter', q: 30, u: 'g', x: 'plus wat om de schaal in te vetten' },
    { n: 'zout' }, { n: 'peper' },
    { kop: 'Erbij' },
    { n: 'augurk', p: 'augurken', q: 4, u: 'st', opt: true }
  ],
  stappen: [
    { t: 'Kook de aardappelen in de schil in 20 à 25 minuten net gaar in water met zout: een mes moet er met een klein beetje weerstand in gaan. Giet af en laat iets afkoelen.', min: 25 },
    { t: 'Kook intussen de eieren 10 minuten hard. Laat ze schrikken onder koud water en pel ze.', min: 10 },
    { t: 'Verwarm de oven voor op 180 °C. Vet de ovenschaal in met boter.', m: 'oven' },
    { t: 'Bak de worstplakjes 3 minuten in de droge koekenpan tot ze kleuren en wat vet loslaten. Bak de ui 5 minuten mee in dat vet tot hij zacht is.', min: 8 },
    { t: 'Trek de schil van de nog warme aardappelen en snijd ze in plakjes van een halve centimeter. Snijd de eieren in plakjes.' },
    { t: 'Roer de zure room glad met de helft van het paprikapoeder, een halve theelepel zout en peper.' },
    { t: 'Zet de bak in de OptiGrill in plaats van de onderste plaat, kies de handmatige modus, stel 200 °C in en druk op OK. Vet de bak in met boter zodra hij warm is.', m: 'optigrill-bak' },
    { t: 'Leg een derde van de aardappel in de schaal en bestrooi met zout. Verdeel de helft van de eieren en de helft van de worst met ui erover en schep er een derde van de zure room op. Herhaal dit nog een keer en eindig met de rest van de aardappel en de zure room.' },
    { t: 'Leg de boter in klontjes bovenop en bestrooi met de rest van het paprikapoeder. Bak 40 à 45 minuten in het midden van de oven, tot de bovenkant goudbruin is en de room aan de randen borrelt.', m: 'oven', min: 45 },
    { t: 'Leg de boter in klontjes bovenop en bestrooi met de rest van het paprikapoeder. Sluit de deksel en bak 25 à 30 minuten, tot de bovenkant goudbruin is en de room aan de randen borrelt. Kijk na 20 minuten even: kleurt hij al te donker, leg er dan een vel bakpapier op.', m: 'optigrill-bak', min: 28 },
    { t: 'Laat 10 minuten rusten, dan snijd je mooiere punten. Serveer met augurken of een frisse komkommersalade.', min: 10 }
  ],
  tips: ['Kook de aardappelen en eieren een dag van tevoren: koude aardappelen snijd je zonder dat ze breken. Haal de schaal dan wel 10 minuten langer door de oven.', 'Vastkokende aardappelen houden hun vorm; met kruimige krijg je eerder een soort puree.'],
  alt: ['Met spek: bak 125 g spekblokjes mee met de worst.', 'Zonder vlees: laat de worst weg en leg een laag gebakken paprikareepjes tussen de aardappel.']
},
{
  id: 'lahmacun', naam: 'Lahmacun', ook: ['turkse pizza'],
  keuken: 'Turks', soort: 'Hoofdgerecht',
  tijd: 45, wacht: '1 uur rijzen', pers: 4, niveau: 'Gemiddeld', vega: false, pit: 1,
  intro: 'Flinterdun, krokant deeg met een laagje kruidig gehakt, paprika en tomaat. Met citroen, peterselie en rode ui erop rol je hem op en eet je hem uit de hand.',
  gerei: [
    { tool: 'oven', tekst: 'Oven op de hoogste stand (250 °C of hoger)' },
    { tool: 'bakplaat', tekst: 'Bakplaat (of pizzasteen) en bakpapier' },
    { tool: 'staafmixer', tekst: 'Hakmolen of keukenmachine voor de vulling', of: 'Geen hakmolen? Snijd ui, paprika, tomaat en peterselie met een scherp mes heel fijn.' }
  ],
  ingr: [
    { kop: 'Deeg' },
    { n: 'bloem', q: 400, u: 'g' },
    { n: 'lauw water', q: 240, u: 'ml' },
    { n: 'gedroogde gist', q: 5, u: 'g' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'olijfolie', q: 2, u: 'el' },
    { kop: 'Vulling' },
    { n: 'lamsgehakt', q: 300, u: 'g', x: 'of rundergehakt' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in stukken' },
    { n: 'puntpaprika', p: 'puntpaprika\'s', q: 1, u: 'st', x: 'rood, in stukken' },
    { n: 'tomaat', p: 'tomaten', q: 2, u: 'st', x: 'zonder zaadjes' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'verse peterselie', q: 10, u: 'g' },
    { n: 'tomatenpuree', q: 2, u: 'el', x: 'of 1 el tomatenpuree en 1 el Turkse paprikapasta (biber salçası)' },
    { n: 'pul biber', q: 2, u: 'tl', x: 'Turkse chilivlokken' },
    { n: 'komijn', q: 1, u: 'tl' },
    { n: 'paprikapoeder', q: 1, u: 'tl' },
    { n: 'zout', q: 1, u: 'tl' },
    { kop: 'Erbij' },
    { n: 'citroen', p: 'citroenen', q: 2, u: 'st', x: 'in partjes' },
    { n: 'rode ui', p: 'rode uien', q: 1, u: 'st', x: 'in dunne ringen' },
    { n: 'verse peterselie', q: 10, u: 'g', x: 'grof geplukt' }
  ],
  stappen: [
    { t: 'Meng bloem, gist en zout in een kom. Voeg het water en de olie toe en kneed 8 minuten tot een glad, soepel deeg.', min: 8 },
    { t: 'Laat het deeg afgedekt op een warme plek 1 uur rijzen.', min: 60 },
    { t: 'Vulling: maal ui, paprika, tomaat, knoflook en peterselie in de hakmolen tot een grove puree. Kneed het met gehakt, tomatenpuree, specerijen en zout tot een smeuïge pasta. Is het erg nat, giet dan eerst wat groentevocht af.' },
    { t: 'Zet de bakplaat in de oven en verwarm minstens 20 minuten voor op de hoogste stand.', min: 20 },
    { t: 'Verdeel het deeg in 8 bolletjes. Rol ze op een met bloem bestoven werkblad uit tot flinterdunne ovalen van ca. 30 × 18 cm.' },
    { t: 'Leg 2 lappen op een vel bakpapier en smeer er een dunne laag vulling op, tot vlak aan de rand. Druk de vulling met je vingers goed aan.' },
    { t: 'Schuif ze met bakpapier en al op de hete bakplaat en bak 6 à 8 minuten bovenin de oven, tot de randen goudbruin zijn en de onderkant knapperig. Bak zo de rest.', min: 7 },
    { t: 'Stapel de lahmacun op elkaar, dan blijven ze soepel. Besprenkel met citroensap, beleg met rode ui en peterselie, rol op en eet direct.' }
  ],
  tips: ['Dun is het geheim: dikker deeg wordt gewoon pizza. Een goed voorverwarmde bakplaat geeft de knapperige bodem.', 'Strooi wat sumak over de rode ui, zoals bij de Turkse bakker; dat geeft een frisse, zurige smaak.'],
  alt: ['Snel: smeer de vulling dun op grote tarwewraps en bak ze 5 à 6 minuten op de hete bakplaat. Dan sla je het deeg en het rijzen over.', 'Vegetarisch: vervang het gehakt door 200 g heel fijngehakte champignons en 75 g gemalen walnoten.']
},
{
  id: 'karniyarik', naam: 'Karnıyarık', ook: ['karniyarik', 'gevulde aubergine'],
  keuken: 'Turks', soort: 'Hoofdgerecht',
  tijd: 45, wacht: '25 min in de oven', pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Zachte, goudbruin gebakken aubergines, opengesneden en gevuld met gehakt, tomaat en paprika, en afgebakken in de oven. Een Turkse thuisklassieker met rijst en yoghurt.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Grote koekenpan met 1 cm olie om de aubergines te bakken', m: 'koekenpan' },
    { tool: 'airfryer', tekst: 'Airfryer om de aubergines voor te garen', m: 'airfryer' },
    { tool: 'koekenpan', tekst: 'Koekenpan (28 cm) voor de gehaktvulling' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal waar de aubergines naast elkaar in passen (ca. 20 × 30 cm)' },
    { tool: 'oven', tekst: 'Oven om de gevulde aubergines af te bakken', of: 'Geen oven? Zet de gevulde aubergines met het tomatenwater in een hapjespan of Dutch oven, leg de deksel erop en laat ze 25 minuten zachtjes stoven op laag vuur. In de OptiGrill-bak passen er 2: 25 minuten op 190 °C met de deksel dicht.' },
    { tool: 'kookpan', tekst: 'Kookpan voor de rijst' }
  ],
  ingr: [
    { n: 'aubergine', p: 'aubergines', q: 4, u: 'st', x: 'middelgroot, ca. 250 g per stuk' },
    { n: 'zonnebloemolie', q: 150, u: 'ml', x: 'om te bakken; 2 el voor de airfryer' },
    { kop: 'Vulling' },
    { n: 'rundergehakt', q: 500, u: 'g', x: 'of lamsgehakt' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'fijngesnipperd' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'puntpaprika', p: 'puntpaprika\'s', q: 2, u: 'st', x: 'groen, of 3 Turkse sivri-pepers' },
    { n: 'tomaat', p: 'tomaten', q: 3, u: 'st' },
    { n: 'tomatenpuree', q: 2, u: 'el' },
    { n: 'paprikapoeder', q: 1, u: 'tl' },
    { n: 'pul biber', q: 1, u: 'tl', opt: true },
    { n: 'verse peterselie', q: 10, u: 'g', x: 'fijngehakt' },
    { n: 'zout' }, { n: 'peper' },
    { kop: 'Erbij' },
    { n: 'rijst', q: 300, u: 'g' },
    { n: 'Turkse yoghurt', q: 250, u: 'g', opt: true }
  ],
  stappen: [
    { t: 'Schil de aubergines in de lengte in streepjes, zodat ze er gestreept uitzien. Laat het steeltje eraan. Bestrooi ze met zout, laat 15 minuten staan en dep ze droog.', min: 15 },
    { t: 'Verhit 1 cm olie in de koekenpan op middelhoog vuur. Bak de hele aubergines 10 à 12 minuten rondom goudbruin en helemaal zacht; keer ze regelmatig. Laat uitlekken op keukenpapier.', m: 'koekenpan', min: 12 },
    { t: 'Bestrijk de hele aubergines rondom met olie. Gaar ze 18 à 20 minuten in de airfryer op 200 °C, tot ze helemaal zacht zijn en bruine plekken hebben; keer halverwege.', m: 'airfryer', min: 20 },
    { t: 'Vulling: fruit de ui 4 minuten in 1 el olie in de koekenpan. Bak het gehakt 5 minuten rul en bruin. Voeg knoflook, 1 paprika in blokjes, 2 tomaten in blokjes, 1 el tomatenpuree, paprikapoeder en pul biber toe en laat 5 minuten inkoken. Roer de peterselie erdoor en breng op smaak met zout en peper.', min: 14 },
    { t: 'Verwarm de oven voor op 190 °C. Leg de aubergines in de ovenschaal en snijd ze in de lengte open, zonder door de bodem te gaan. Druk ze met twee lepels open tot een bootje. Karnıyarık betekent letterlijk "opengereten buik".' },
    { t: 'Schep de vulling in de aubergines en leg op elke aubergine een plakje van de laatste tomaat en een reepje van de tweede paprika. Roer de rest van de tomatenpuree door 150 ml heet water en giet dat in de schaal.' },
    { t: 'Bak 25 minuten in de oven, tot de tomaat zacht is en de saus borrelt.', min: 25 },
    { t: 'Kook de rijst intussen volgens de verpakking. Serveer de karnıyarık met rijst en een schep yoghurt.' }
  ],
  tips: ['Door de schil in streepjes te verwijderen en te zouten nemen de aubergines minder olie op en blijven ze mooi heel.', 'De aubergines moeten echt helemaal zacht zijn voordat je ze vult; in de oven garen ze niet veel meer.'],
  alt: ['Vegetarisch: dan wordt het imam bayıldı. Vul de aubergines met in olijfolie gestoofde ui, knoflook, tomaat en peterselie, zonder gehakt.', 'Alles in de oven: halveer de aubergines in de lengte, bestrijk ze met olie en rooster ze 25 minuten op 200 °C met de snijkant naar beneden. Schep de vulling erop en bak nog 15 minuten.']
},
{
  id: 'sutlac', toegevoegd: '2026-10-20', naam: 'Sütlaç (Turkse rijstpudding)', ook: ['sutlac', 'fırın sütlaç', 'firin sutlac', 'turkse rijstpudding', 'rijstpudding', 'rijstpudding uit de oven'],
  keuken: 'Turks', soort: 'Dessert',
  tijd: 40, wacht: '2 uur afkoelen', pers: 6, niveau: 'Makkelijk', vega: true,
  intro: 'Romige rijstpudding met vanille, in Turkije in elke lokanta te krijgen. In de oven krijgt hij een karamelbruin vel; met kaneel erover lepel je hem koud uit het schaaltje.',
  methodes: [ { id: 'oven', naam: 'Oven (fırın sütlaç)' }, { id: 'kookpan', naam: 'Alleen op het vuur' } ],
  gerei: [
    { tool: 'kookpan', tekst: 'Pan met dikke bodem (minstens 2 liter) en een garde' },
    { tool: 'ovenschaal', tekst: '6 ovenvaste schaaltjes of kommetjes', of: 'Eén ovenschaal van 20 × 20 cm werkt ook.' },
    { tool: 'ovenschaal', tekst: 'Diepe ovenschaal of braadslede voor het waterbad', m: 'oven' },
    { tool: 'oven', tekst: 'Oven met grillstand', m: 'oven' }
  ],
  ingr: [
    { n: 'risottorijst', q: 100, u: 'g', x: 'of andere ronde rijst, zoals dessertrijst' },
    { n: 'water', q: 250, u: 'ml' },
    { n: 'melk', q: 1, u: 'l', x: 'volle melk' },
    { n: 'suiker', q: 150, u: 'g' },
    { n: 'vanillesuiker', q: 8, u: 'g' },
    { n: 'maïzena', q: 2, u: 'el', x: 'of 3 el rijstebloem' },
    { n: 'kaneel', q: 1, u: 'tl', x: 'om te bestrooien' }
  ],
  stappen: [
    { t: 'Spoel de rijst in een zeef af tot het water helder is. Breng hem met het water aan de kook en laat 15 minuten zachtjes koken tot bijna al het water is opgenomen.', min: 15 },
    { t: 'Houd 100 ml melk apart. Schenk de rest bij de rijst, breng aan de kook en laat 15 minuten zachtjes trekken. Roer regelmatig over de bodem, want melk brandt snel aan.', min: 15 },
    { t: 'Roer de maïzena glad in de achtergehouden koude melk. Roer suiker en vanillesuiker door de rijst en schenk dan al roerend met de garde het papje erbij. Laat 5 minuten zachtjes koken tot het zo dik is als vla.', min: 5 },
    { t: 'Zet de grill van de oven op de hoogste stand. Verdeel de pudding over de schaaltjes en zet ze in de diepe ovenschaal. Schenk er koud water omheen tot halverwege de schaaltjes.', m: 'oven' },
    { t: 'Schuif de schaal hoog in de oven en grill 15 à 20 minuten, tot de bovenkant bruine vlekken heeft. Blijf erbij: het gaat aan het eind snel.', m: 'oven', min: 15 },
    { t: 'Schep de pudding in de schaaltjes en strijk de bovenkant glad. Leg er meteen een vel plasticfolie op als je geen vel wilt.', m: 'kookpan' },
    { t: 'Laat afkoelen tot kamertemperatuur en zet de pudding dan minstens 2 uur in de koelkast. Bestrooi vlak voor het serveren met kaneel.', min: 120 }
  ],
  tips: ['Warm is de pudding nog dun; in de koelkast wordt hij stevig. Twijfel je of hij dik genoeg is, laat hem dan nog 2 minuten langer koken.', 'Ronde rijst geeft het meeste zetmeel en dus de romigste pudding. Langkorrelige rijst kan ook, maar die blijft losser.'],
  alt: ['Met een fijngemalen handje pistache of hazelnoten erover in plaats van kaneel, zoals aan de Zwarte Zee.', 'Lichter: vervang 250 ml van de melk door water en neem 120 g suiker.']
},
{
  id: 'hummus', naam: 'Hummus', ook: ['houmous', 'humus'],
  keuken: 'Midden-Oosters', soort: 'Salade & bijgerecht',
  tijd: 15, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Romige dip van kikkererwten, tahin, citroen en knoflook. Zelfgemaakt is hij luchtiger en frisser dan uit het bakje.',
  gerei: [
    { tool: 'staafmixer', tekst: 'Keukenmachine of staafmixer met hakbeker', of: 'Met een gewone staafmixer in een hoge beker lukt het ook; voeg dan wat meer water toe.' }
  ],
  ingr: [
    { n: 'kikkererwten', q: 480, u: 'g', x: 'uitgelekt' },
    { n: 'tahin', q: 6, u: 'el', x: 'ca. 100 g, goed doorgeroerd' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'sap' },
    { n: 'knoflook', q: 1, u: 'teen' },
    { n: 'komijn', q: 0.5, u: 'tl' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'water', q: 75, u: 'ml', x: 'ijskoud' },
    { kop: 'Serveren' },
    { n: 'olijfolie', q: 2, u: 'el', x: 'extra vierge' },
    { n: 'paprikapoeder', q: 1, u: 'snuf' },
    { n: 'verse peterselie', q: 1, u: 'el', x: 'fijngehakt', opt: true }
  ],
  stappen: [
    { t: 'Mix in de keukenmachine de tahin, het citroensap, de knoflook en het zout 1 minuut tot een dikke, lichte pasta.' },
    { t: 'Voeg de kikkererwten en de komijn toe en draai 3 à 4 minuten tot de hummus heel glad is. Schraap tussendoor de wanden af.' },
    { t: 'Giet er met draaiende machine scheutje voor scheutje het ijskoude water bij, tot de hummus luchtig en romig is.' },
    { t: 'Proef en breng op smaak met zout, citroen of komijn.' },
    { t: 'Schep de hummus op een bord, maak met de bolle kant van een lepel een kuil en vul die met olijfolie. Bestrooi met paprikapoeder en peterselie.' }
  ],
  tips: ['Extra glad: kook de uitgelekte kikkererwten 15 à 20 minuten met ½ tl zuiveringszout (bicarbonaat, baking soda) of 1 tl bakpoeder, tot ze bijna uit elkaar vallen. Spoel ze in een vergiet onder koud water af; de losgekomen velletjes spoelen dan grotendeels weg.', 'Hummus blijft 4 dagen goed in de koelkast. Laat hem voor het serveren even op kamertemperatuur komen.'],
  alt: ['Variaties: mix er een geroosterde rode paprika, 10 g verse koriander met een groene peper, of 1 el harissa doorheen.', 'Geen tahin? Gebruik 3 el Griekse yoghurt en 2 el olijfolie. Het smaakt anders, maar wel lekker.'],
  bij: ['falafel', 'kip-shoarma']
},
{
  id: 'tabouleh', naam: 'Tabouleh', ook: ['tabbouleh', 'tabbouli'],
  keuken: 'Midden-Oosters', soort: 'Salade & bijgerecht',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Libanese kruidensalade: veel fijngesneden peterselie en munt met een beetje bulgur, tomaat, citroen en olijfolie. Groen, fris en heerlijk naast alles van de grill.',
  gerei: [
    { tool: 'kookpan', tekst: 'Kom of pannetje om de bulgur te laten wellen, en een scherp koksmes' }
  ],
  ingr: [
    { n: 'verse peterselie', q: 120, u: 'g', x: 'platte', vers: 'de peterselie is de salade' },
    { n: 'verse munt', q: 10, u: 'g', x: 'alleen de blaadjes', vers: 'gaat er rauw in' },
    { n: 'bulgur', q: 50, u: 'g', x: 'fijn' },
    { n: 'tomaat', p: 'tomaten', q: 3, u: 'st', x: 'stevig', vers: true },
    { n: 'lente-ui', p: 'lente-uien', q: 4, u: 'st' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'sap' },
    { n: 'olijfolie', q: 4, u: 'el', x: 'extra vierge' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Spoel de bulgur af in een zeef en doe hem in de kom met het sap van een halve citroen en 3 el water. Laat 15 minuten wellen.', min: 15 },
    { t: 'Was de peterselie en munt en maak ze heel goed droog in een slacentrifuge of theedoek. Natte kruiden worden papperig.' },
    { t: 'Pluk de blaadjes van de peterselie; de dunne steeltjes mogen mee, de dikke niet. Snijd peterselie en munt met een scherp mes fijn. Snijden, niet hakken tot moes, anders kneus je de kruiden.' },
    { t: 'Snijd de tomaten in heel kleine blokjes en de lente-ui in dunne ringetjes.' },
    { t: 'Maak de bulgur los met een vork en meng hem met kruiden, tomaat en lente-ui.' },
    { t: 'Maak de salade vlak voor het serveren aan met de rest van het citroensap, de olijfolie, zout en peper. Hij mag flink fris zijn.' }
  ],
  tips: ['Echte tabouleh is vooral groen: veel meer peterselie dan bulgur. In Libanon schep je hem op met blaadjes little gem of witte kool.', 'Snijd de kruiden gerust een paar uur van tevoren en bewaar ze afgedekt in de koelkast; meng en maak aan pas vlak voor het eten.'],
  alt: ['Glutenvrij: vervang de bulgur door 75 g gekookte en afgekoelde quinoa.', 'Geen bulgur? Couscous werkt ook: laat 50 g couscous 5 minuten wellen in 50 ml heet water.'],
  bij: ['falafel', 'kofte', 'kip-shoarma']
},
{
  id: 'knoflooksaus', naam: 'Knoflooksaus', ook: ['knoflooksaus voor shoarma', 'toum', 'shoarmasaus'],
  keuken: 'Midden-Oosters', soort: 'Saus',
  tijd: 5, wacht: '30 min laten trekken', pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'De witte knoflooksaus van de shoarmazaak: romig, fris en flink knoflookig. In vijf minuten gemaakt en veel lekkerder dan uit de knijpfles.',
  gerei: [
    { tool: 'staafmixer', tekst: 'Een kom en een garde is genoeg; een staafmixer maakt de saus extra glad', of: 'Zonder staafmixer: pers de knoflook heel fijn en roer alles met een garde door elkaar.' }
  ],
  ingr: [
    { n: 'Turkse yoghurt', q: 150, u: 'g', x: 'of Griekse yoghurt' },
    { n: 'mayonaise', q: 100, u: 'g', x: 'ca. 6 el' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'geperst of fijngeraspt', vers: 'gaat er rauw in' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { n: 'verse dille', q: 1, u: 'el', x: 'fijngehakt, of peterselie' },
    { n: 'suiker', q: 1, u: 'snuf' },
    { n: 'zout', q: 1, u: 'snuf' }
  ],
  stappen: [
    { t: 'Wrijf de geperste knoflook met een snuf zout fijn tot een smeuïg papje. Zo verdeelt de smaak zich gelijkmatig en wordt hij minder scherp.' },
    { t: 'Roer yoghurt, mayonaise, citroensap, suiker en dille erdoor tot een gladde saus. Wil je hem heel glad, mix dan kort met de staafmixer.' },
    { t: 'Proef en breng op smaak met zout en citroensap. Te dik? Roer er 2 el melk of water door.' },
    { t: 'Laat de saus minstens 30 minuten afgedekt in de koelkast trekken, dan wordt de knoflooksmaak ronder.', min: 30 }
  ],
  tips: ['De saus blijft 3 à 4 dagen goed in een afgesloten pot in de koelkast en wordt elke dag knoflookiger.', 'Meer yoghurt maakt hem frisser, meer mayonaise voller en romiger, zoals bij de snackbar.'],
  alt: ['Toum, de Libanese knoflooksaus zonder yoghurt of ei: mix 1 bol gepelde knoflook (ca. 12 tenen) met 1 tl zout en 2 el citroensap fijn in een keukenmachine of de hoge beker van de staafmixer. Giet er met draaiende machine heel langzaam 250 ml zonnebloemolie bij, afgewisseld met 2 el ijswater, tot een witte, luchtige emulsie. Hij is fel; een beetje gaat al ver.', 'Lichter: gebruik alleen yoghurt en laat de mayonaise weg.'],
  bij: ['kip-shoarma', 'kapsalon', 'falafel', 'gyros', 'lahmacun']
},
{
  id: 'groentecouscous', naam: 'Couscous met zeven groenten', ook: ['couscous', 'groentecouscous'],
  keuken: 'Marokkaans', soort: 'Hoofdgerecht',
  tijd: 35, wacht: '45 min sudderen', pers: 4, niveau: 'Makkelijk', vega: true, pit: 1,
  intro: 'Het vrijdagse feestmaal van Marokko: een geurige bouillon vol groenten en kikkererwten, geschept over luchtige couscous. Zeven groenten brengen geluk, maar zes of acht mag ook.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of grote soeppan (minstens 5 liter) met deksel' },
    { tool: 'kookpan', tekst: 'Kom of pan met deksel om de couscous te laten wellen' }
  ],
  ingr: [
    { n: 'olijfolie', q: 3, u: 'el' },
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'in partjes' },
    { n: 'tomaat', p: 'tomaten', q: 3, u: 'st', x: 'in blokjes; of 1 blik tomatenblokjes' },
    { n: 'tomatenpuree', q: 1, u: 'el' },
    { n: 'ras el hanout', q: 1, u: 'el' },
    { n: 'kurkuma', q: 0.5, u: 'tl' },
    { n: 'groentebouillon', q: 1.5, u: 'l' },
    { n: 'kikkererwten', q: 240, u: 'g', x: 'uitgelekt' },
    { n: 'verse koriander', q: 30, u: 'g' },
    { n: 'verse peterselie', q: 30, u: 'g' },
    { n: 'wortel', p: 'wortels', q: 3, u: 'st', x: 'in de lengte gehalveerd, in stukken van 6 cm' },
    { n: 'knolselderij', q: 250, u: 'g', x: 'of een raap, in grote stukken' },
    { n: 'witte kool', q: 0.25, u: 'st', x: 'in 2 partjes' },
    { n: 'pompoen', q: 400, u: 'g', x: 'butternut of flespompoen, in grote stukken' },
    { n: 'courgette', p: 'courgettes', q: 2, u: 'st', x: 'in stukken van 5 cm' },
    { n: 'zout' }, { n: 'peper' },
    { kop: 'Couscous' },
    { n: 'couscous', q: 300, u: 'g' },
    { n: 'boter', q: 30, u: 'g', x: 'of olijfolie' },
    { kop: 'Erbij' },
    { n: 'harissa', q: 2, u: 'tl', opt: true }
  ],
  stappen: [
    { t: 'Verhit de olie in de Dutch oven en bak de ui 5 minuten op middelhoog vuur. Roer tomaat, tomatenpuree, ras el hanout, kurkuma, 1 tl zout en peper erdoor en bak 2 minuten mee.', min: 7 },
    { t: 'Bind de helft van de koriander en peterselie met een touwtje tot een bosje. Doe het met de bouillon en de kikkererwten in de pan en breng aan de kook.' },
    { t: 'Voeg de groenten toe die lang moeten garen: wortel, knolselderij en kool. Laat met de deksel erop 20 minuten zachtjes koken.', min: 20 },
    { t: 'Voeg pompoen en courgette toe en laat nog 20 à 25 minuten sudderen, tot alle groenten zacht zijn maar nog heel.', min: 22 },
    { t: 'Couscous: doe de couscous met een snuf zout in de kom en giet er 300 ml kokend water of bouillon uit de pan over. Dek af en laat 5 minuten wellen. Maak los met een vork en roer de boter erdoor.', min: 5 },
    { t: 'Vis het kruidenbosje uit de pan, breng de bouillon op smaak met zout en hak de rest van de kruiden fijn.' },
    { t: 'Schep de couscous als een berg op een grote schaal, maak een kuil in het midden en leg de groenten erop en eromheen. Schep er wat bouillon over en zet de rest in een kom op tafel, met de kruiden en de harissa.' }
  ],
  tips: ['Snijd de groenten groot en voeg ze toe op volgorde van gaartijd; zo zijn ze na drie kwartier nog heel.', 'Feestelijk: schep er tfaya over, uien die je in 30 minuten zacht en goudbruin stooft in boter met rozijnen, kaneel en een lepel honing.'],
  alt: ['Met kip: braad 600 g kippendijen in stukken bruin voordat je de ui bakt, laat ze vanaf het begin meetrekken en gebruik kippenbouillon.', 'Andere groenten mogen ook: zoete aardappel, aubergine, raap of 100 g tuinbonen.']
},
{
  id: 'kefta-tajine', naam: 'Kefta tajine met ei', ook: ['kefta', 'marokkaanse gehaktballetjes'],
  keuken: 'Marokkaans', soort: 'Hoofdgerecht',
  tijd: 40, pers: 4, niveau: 'Makkelijk', vega: false, pit: 1,
  intro: 'Kleine gekruide gehaktballetjes die garen in een pittige tomatensaus, met eieren die je er op het laatst in pocheert. Breek er stukken brood bij en eet uit de pan, zoals in Marokko.',
  gerei: [
    { tool: 'braadpan', tekst: 'Tajine of Dutch oven met deksel', of: 'Een hapjespan of diepe koekenpan van 28 cm met deksel werkt ook.' }
  ],
  ingr: [
    { kop: 'Kefta' },
    { n: 'rundergehakt', q: 500, u: 'g', x: 'of half rund, half lam' },
    { n: 'ui', p: 'uien', q: 0.5, u: 'st', x: 'geraspt' },
    { n: 'verse peterselie', q: 10, u: 'g', x: 'fijngehakt; de helft voor de garnering' },
    { n: 'verse koriander', q: 10, u: 'g', x: 'fijngehakt; de helft voor de garnering' },
    { n: 'komijn', q: 1, u: 'tl' },
    { n: 'paprikapoeder', q: 1, u: 'tl' },
    { n: 'kaneel', q: 0.25, u: 'tl' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'peper' },
    { kop: 'Saus' },
    { n: 'olijfolie', q: 2, u: 'el' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'fijngesnipperd' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'fijngehakt' },
    { n: 'komijn', q: 1, u: 'tl' },
    { n: 'paprikapoeder', q: 1, u: 'tl' },
    { n: 'tomatenblokjes', q: 800, u: 'g' },
    { n: 'tomatenpuree', q: 1, u: 'el' },
    { n: 'water', q: 100, u: 'ml' },
    { n: 'rode peper', p: 'rode pepers', q: 1, u: 'st', x: 'fijngehakt, of ½ tl cayennepeper', opt: true },
    { n: 'suiker', q: 1, u: 'snuf' },
    { kop: 'Afmaken' },
    { n: 'ei', p: 'eieren', q: 4, u: 'st' },
    { n: 'Turks brood', q: 1, u: 'st', x: 'of Marokkaans platbrood (khobz)' }
  ],
  stappen: [
    { t: 'Meng gehakt, geraspte ui, de helft van de kruiden, komijn, paprikapoeder, kaneel, zout en peper. Kneed 1 minuut tot het plakt en draai er met natte handen balletjes van ca. 3 cm van.' },
    { t: 'Verhit de olie in de tajine of Dutch oven op middelhoog vuur. Fruit de ui 4 minuten en bak de knoflook, komijn en paprikapoeder 1 minuut mee.', min: 5 },
    { t: 'Voeg tomatenblokjes, tomatenpuree, water, rode peper, suiker en een snuf zout toe. Laat 10 minuten zachtjes koken tot de saus iets dikker is.', min: 10 },
    { t: 'Leg de balletjes in de saus en schud de pan zodat ze erin wegzakken. Leg de deksel erop en laat 15 minuten op laag vuur garen; keer ze halverwege.', min: 15 },
    { t: 'Maak met een lepel 4 kuiltjes tussen de balletjes en breek in elk kuiltje een ei. Deksel erop en laat 5 à 7 minuten garen, tot het eiwit gestold is en de dooier nog zacht.', min: 6 },
    { t: 'Strooi de rest van de kruiden erover, zet de pan op tafel en eet met warm brood.' }
  ],
  tips: ['Kook je in een aardewerken tajine, zet er dan een sudderplaatje (vlamverdeler) onder en warm hem langzaam op laag vuur op, anders kan hij barsten.', 'Balletjes en saus kun je een dag van tevoren maken. Warm ze op en pocheer de eieren pas vlak voor het eten.'],
  alt: ['Zonder ei: laat de eieren weg en serveer met couscous of rijst.', 'Pittiger: roer 1 à 2 tl harissa door de saus.']
},
{
  id: 'zaalouk', naam: 'Zaalouk', ook: ['marokkaanse auberginesalade'],
  keuken: 'Marokkaans', soort: 'Salade & bijgerecht',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Smeuïge Marokkaanse salade van aubergine en tomaat met knoflook, komijn en verse kruiden. Lekker lauw of koud, met brood om te dippen of naast een tajine.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'hapjespan', naam: 'Op het vuur' } ],
  gerei: [
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer', m: 'airfryer' },
    { tool: 'hapjespan', tekst: 'Hapjespan of grote koekenpan (28 cm) met deksel' }
  ],
  ingr: [
    { n: 'aubergine', p: 'aubergines', q: 2, u: 'st', x: 'ca. 600 g' },
    { n: 'tomaat', p: 'tomaten', q: 4, u: 'st', x: 'rijp, in blokjes; of 1 blik tomatenblokjes' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'fijngehakt' },
    { n: 'olijfolie', q: 5, u: 'el' },
    { n: 'komijn', q: 1, u: 'tl' },
    { n: 'paprikapoeder', q: 1, u: 'tl', x: 'edelzoet' },
    { n: 'cayennepeper', q: 1, u: 'snuf', opt: true },
    { n: 'verse koriander', q: 10, u: 'g', x: 'fijngehakt' },
    { n: 'verse peterselie', q: 10, u: 'g', x: 'fijngehakt' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Halveer de aubergines in de lengte, kerf het vruchtvlees ruitsgewijs in en bestrijk het met 1 el olie. Leg ze met de snijkant naar beneden op de bakplaat en rooster 30 minuten in een voorverwarmde oven op 220 °C, tot ze helemaal zacht zijn. Schep het vruchtvlees uit de schil en hak het grof.', m: 'oven', min: 30 },
    { t: 'Halveer de aubergines in de lengte, kerf het vruchtvlees ruitsgewijs in en bestrijk het met 1 el olie. Rooster ze 20 à 25 minuten in de airfryer op 200 °C, tot ze helemaal zacht zijn. Schep het vruchtvlees uit de schil en hak het grof.', m: 'airfryer', min: 22 },
    { t: 'Schil de aubergines in streepjes en snijd ze in blokjes van 2 cm.', m: 'hapjespan' },
    { t: 'Verhit 3 el olie in de hapjespan op middelhoog vuur. Bak knoflook, komijn, paprikapoeder en cayenne 30 seconden tot ze geuren. Voeg de tomaat en een snuf zout toe en laat 5 minuten koken.', min: 5 },
    { t: 'Voeg de aubergineblokjes en 100 ml water toe. Laat met de deksel erop 20 minuten zachtjes stoven, tot de aubergine helemaal zacht is; roer af en toe.', m: 'hapjespan', min: 20 },
    { t: 'Doe de geroosterde aubergine bij de tomaat (bij stoven zit hij er al in). Prak alles met een vork of aardappelstamper door elkaar en laat zonder deksel 10 minuten inkoken op laag vuur, tot het vocht verdampt is en de zaalouk dik en smeuïg is. Roer regelmatig.', min: 10 },
    { t: 'Haal van het vuur en roer koriander, peterselie, citroensap en de rest van de olijfolie erdoor. Breng op smaak met zout en serveer lauw of koud, met brood.' }
  ],
  tips: ['Zaalouk is de volgende dag nog lekkerder en blijft 3 dagen goed in de koelkast.', 'Rokerige smaak: rooster de hele aubergines eerst boven de gasvlam of onder de hete ovengrill tot de schil zwart is, en schep dan het vruchtvlees eruit.'],
  alt: ['Haast? Gebruik een blik tomatenblokjes in plaats van verse tomaten.', 'Pittiger: roer er ½ tl harissa doorheen.'],
  bij: ['kefta-tajine', 'kip-tajine']
},
{
  id: 'mechoui', toegevoegd: '2026-10-20', naam: 'Mechoui (lamsschouder uit de oven)', ook: ['méchoui', 'marokkaanse lamsschouder', 'lamsschouder uit de oven', 'langzaam gegaarde lamsschouder', 'slow roasted lamb'],
  keuken: 'Marokkaans', soort: 'Hoofdgerecht',
  tijd: 20, wacht: '4 uur in de oven', pers: 6, niveau: 'Makkelijk', vega: false,
  intro: 'Een hele lamsschouder, ingewreven met boter, knoflook en komijn en uren langzaam gegaard tot het vlees van het bot valt. Je trekt het met je vingers los en doopt het in komijnzout. Een weekendgerecht dat zichzelf maakt.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven (28 à 30 cm) met deksel, waar de schouder in past', of: 'Een braadslede of diepe ovenschaal, strak afgedekt met een dubbele laag aluminiumfolie.' },
    { tool: 'oven', tekst: 'Oven' }
  ],
  ingr: [
    { n: 'lamsschouder', q: 2, u: 'kg', x: 'met bot; vraag de slager om het schouderblad te laten zitten' },
    { kop: 'Kruidenboter' },
    { n: 'boter', q: 75, u: 'g', x: 'op kamertemperatuur' },
    { n: 'knoflook', q: 6, u: 'teen', x: 'geperst' },
    { n: 'komijn', q: 2, u: 'tl', x: 'gemalen' },
    { n: 'gemalen koriander', q: 2, u: 'tl' },
    { n: 'paprikapoeder', q: 2, u: 'tl', x: 'edelzoet' },
    { n: 'zeezout', q: 2, u: 'tl' },
    { n: 'zwarte peper', q: 1, u: 'tl', x: 'versgemalen' },
    { n: 'water', q: 250, u: 'ml' },
    { kop: 'Komijnzout en erbij' },
    { n: 'komijn', q: 2, u: 'tl', x: 'gemalen' },
    { n: 'zeezout', q: 2, u: 'tl' },
    { n: 'Turks brood', q: 1, u: 'st', x: 'of Marokkaans platbrood (khobz)', opt: true }
  ],
  stappen: [
    { t: 'Haal het vlees een uur van tevoren uit de koelkast. Prak de boter met knoflook, komijn, koriander, paprikapoeder, zout en peper tot een smeuïge pasta.', min: 60 },
    { t: 'Prik met een puntig mes rondom diepe sneetjes van 2 cm in het vlees. Wrijf de kruidenboter over de hele schouder en duw hem goed in de sneetjes.' },
    { t: 'Verwarm de oven voor op 160 °C. Leg de schouder met de vetkant naar boven in de Dutch oven en schenk het water langs de rand erbij. Leg de deksel erop.' },
    { t: 'Gaar het vlees 3½ uur in de oven. Haal elk uur de deksel eraf en schep het vocht uit de pan over het vlees.', min: 210 },
    { t: 'Haal de deksel eraf, zet de oven op 200 °C en rooster nog 30 minuten, tot de buitenkant donker goudbruin is en het vlees met een vork van het bot glijdt. Schep er nog twee keer jus over.', min: 30 },
    { t: 'Meng voor het komijnzout de komijn met het zeezout en verdeel over een paar schaaltjes.' },
    { t: 'Laat het vlees 10 minuten rusten. Trek het met twee vorken in grove stukken van het bot en schep de jus erover. Iedereen doopt zelf in het komijnzout, met brood en een frisse salade of zaalouk erbij.', min: 10 }
  ],
  tips: ['Heb je tijd, wrijf het vlees dan de avond ervoor in en laat het afgedekt in de koelkast staan. De kruiden trekken dan tot op het bot.', 'Klaar is het niet op de minuut, maar als het vlees zonder kracht van het bot valt. Is dat na 4 uur nog niet zo, geef het dan nog een half uur met de deksel erop.'],
  alt: ['Geen lamsschouder te krijgen? Een lamsbout (ca. 2 kg) kan ook; die is magerder, gaar hem 3 uur en bedruip hem vaker.', 'Een restje is heerlijk de volgende dag in een wrap of pitabroodje met knoflooksaus en sla.'],
  bij: ['zaalouk']
}
);
