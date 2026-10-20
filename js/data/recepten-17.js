/* Chinees (inclusief de Chinees-Indische afhaalklassiekers), Koreaans en Japans */
RECEPTEN.push(
{
  id: 'foe-yong-hai', naam: 'Foe yong hai', gerecht: 'Foe yong hai', variant: 'Kip', ook: ['fu yong hai', 'foo young', 'egg foo young'],
  keuken: 'Chinees', soort: 'Hoofdgerecht',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'De dikke omelet van de Chinees-Indische afhaal: vol prei, taugé en kip, met zoetzure tomatensaus en doperwten. Makkelijker zelf te maken dan je denkt.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan van 20 à 24 cm, liefst antiaanbak, en een groot plat bord om te keren' },
    { tool: 'kookpan', tekst: 'Steelpan voor de zoetzure saus' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'ei', p: 'eieren', q: 8, u: 'st' },
    { n: 'kipfilet', q: 200, u: 'g', x: 'in kleine reepjes; of 200 g krabsticks, uit elkaar geplukt' },
    { n: 'prei', p: 'preien', q: 1, u: 'st', x: 'in dunne ringen; of 4 lente-uien' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in dunne halve ringen' },
    { n: 'taugé', q: 200, u: 'g' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'witte peper', q: 1, u: 'snuf' },
    { n: 'zonnebloemolie', q: 5, u: 'el' },
    { n: 'rijst', q: 300, u: 'g' },
    { kop: 'Zoetzure saus' },
    { n: 'water', q: 250, u: 'ml' },
    { n: 'tomatenpuree', q: 2, u: 'el' },
    { n: 'ketchup', q: 3, u: 'el' },
    { n: 'suiker', q: 3, u: 'el' },
    { n: 'azijn', q: 2, u: 'el', x: 'witte azijn of rijstazijn' },
    { n: 'maïzena', q: 1, u: 'el', x: 'aangelengd met 2 el koud water' },
    { n: 'doperwten', q: 100, u: 'g', x: 'diepvries' },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Saus: breng water, tomatenpuree, ketchup, suiker, azijn en een snuf zout aan de kook in de steelpan. Roer de aangelengde maïzena erdoor en laat 1 minuut binden tot een glanzende saus. Voeg de doperwten toe en houd de saus warm op het laagste vuur.', min: 4 },
    { t: 'Bak de kip in 1 el olie in de koekenpan 3 minuten op middelhoog vuur. Voeg ui en prei toe en bak 2 minuten mee tot ze net zacht zijn. Schep alles in een kom en laat even afkoelen.', min: 5 },
    { t: 'Klop de eieren los met de sojasaus en de witte peper. Meng de kip met de groente en de taugé erdoor.' },
    { t: 'Verhit 1 el olie in de koekenpan op middelhoog vuur. Schep een kwart van het mengsel erin en duw het tot een dikke ronde omelet. Bak 3 à 4 minuten tot de onderkant goudbruin is en de bovenkant bijna gestold.', min: 4 },
    { t: 'Laat de omelet op een bord glijden, leg de pan er omgekeerd op en draai alles in één beweging om. Bak de andere kant 2 minuten. Houd hem warm onder aluminiumfolie en bak zo de andere drie.', min: 2 },
    { t: 'Leg de foe yong hai op de rijst en schep er royaal saus met doperwten over.' }
  ],
  tips: ['De zoetzure saus met doperwten kwam via Indonesië naar Nederland; in Kanton eet je fu yung dan als luchtige omelet zonder saus.', 'Zo dik als bij de afhaal krijg je hem in een kleine pan van 20 cm. In een grotere pan bak je twee omeletten en snijd je ze in punten.'],
  alt: ['Vegetarisch: laat de kip weg en bak 150 g champignons in plakjes mee met de prei.']
},
{
  id: 'foe-yong-hai-garnalen', variantVan: 'foe-yong-hai', variant: 'Garnalen', naam: 'Foe yong hai met garnalen', ook: ['foe yong hai garnalen', 'egg foo young garnalen'],
  intro: 'De dikke omelet van de Chinees-Indische afhaal, met garnalen, prei en taugé, en zoetzure tomatensaus met doperwten.',
  vervang: {
    kipfilet: { n: 'garnalen', q: 200, u: 'g', x: 'gepeld, rauw of gekookt; grote in stukjes' }
  },
  stappen: [
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Saus: breng water, tomatenpuree, ketchup, suiker, azijn en een snuf zout aan de kook in de steelpan. Roer de aangelengde maïzena erdoor en laat 1 minuut binden tot een glanzende saus. Voeg de doperwten toe en houd de saus warm op het laagste vuur.', min: 4 },
    { t: 'Bak ui en prei in 1 el olie in de koekenpan 2 minuten op middelhoog vuur tot ze net zacht zijn. Bak rauwe garnalen 1 minuut mee tot ze roze zijn; gekookte garnalen hoeven alleen even mee te warmen. Schep alles in een kom en laat even afkoelen.', min: 3 },
    { t: 'Klop de eieren los met de sojasaus en de witte peper. Meng de garnalen met de groente en de taugé erdoor.' },
    { t: 'Verhit 1 el olie in de koekenpan op middelhoog vuur. Schep een kwart van het mengsel erin en duw het tot een dikke ronde omelet. Bak 3 à 4 minuten tot de onderkant goudbruin is en de bovenkant bijna gestold.', min: 4 },
    { t: 'Laat de omelet op een bord glijden, leg de pan er omgekeerd op en draai alles in één beweging om. Bak de andere kant 2 minuten. Houd hem warm onder aluminiumfolie en bak zo de andere drie.', min: 2 },
    { t: 'Leg de foe yong hai op de rijst en schep er royaal saus met doperwten over.' }
  ],
  alt: ['Vegetarisch: laat de garnalen weg en bak 150 g champignons in plakjes mee met de prei.']
},
{
  id: 'tjap-tjoy', naam: 'Tjap tjoy', gerecht: 'Tjap tjoy', variant: 'Kip', ook: ['tjaptjoi', 'chop suey', 'tjap tjoi'],
  keuken: 'Chinees', soort: 'Hoofdgerecht',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Een wok vol knapperige groente met kip in een glanzende bindsaus van oestersaus en soja. De afhaalklassieker, maar dan verser.',
  gerei: [
    { tool: 'wok', tekst: 'Wok voor hoog vuur', of: 'Geen wok? Gebruik een grote RVS-koekenpan op hoog vuur en bak in delen.' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'kipfilet', q: 400, u: 'g', x: 'in dunne plakjes' },
    { n: 'sojasaus', q: 1, u: 'el', x: 'voor de kip' },
    { n: 'maïzena', q: 1, u: 'tl', x: 'voor de kip' },
    { n: 'Chinese kool', q: 300, u: 'g', x: 'in repen; of paksoi' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in reepjes' },
    { n: 'champignons', q: 250, u: 'g', x: 'in plakjes' },
    { n: 'wortel', p: 'wortels', q: 1, u: 'st', x: 'in dunne schuine plakjes' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in partjes' },
    { n: 'bamboescheuten', q: 225, u: 'g', x: 'uitgelekt' },
    { n: 'taugé', q: 200, u: 'g' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'gember', q: 10, u: 'g', x: 'geraspt' },
    { n: 'zonnebloemolie', q: 3, u: 'el' },
    { n: 'rijst', q: 300, u: 'g' },
    { kop: 'Bindsaus' },
    { n: 'oestersaus', q: 3, u: 'el' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'maïzena', q: 1, u: 'el' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'kippenbouillon', q: 150, u: 'ml', x: 'of water' },
    { n: 'sesamolie', q: 1, u: 'tl' }
  ],
  stappen: [
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Zet alles klaar vóór je de wok aanzet, want het bakken gaat snel. Meng de kip met 1 el sojasaus en 1 tl maïzena. Leg de harde groente (ui, wortel, paprika) en de zachte groente (kool, taugé) in aparte schalen. Roer de bindsaus aan.' },
    { t: 'Verhit 1 el olie in de wok op het hoogste vuur tot hij net begint te walmen. Bak de kip in 2 delen, elk 3 à 4 minuten, tot hij goudbruin en gaar is. Doe niet alles tegelijk, anders gaat het vlees koken in plaats van bakken. Schep hem uit de wok.', min: 4 },
    { t: 'Verhit nog 1 el olie. Roerbak ui, wortel en paprika 2 minuten. Voeg champignons en bamboescheuten toe en roerbak nog 2 minuten.', min: 4 },
    { t: 'Bak knoflook, gember en de stelen van de kool 1 minuut mee. Voeg de bladeren en de taugé toe en roerbak 1 minuut, tot de kool net slinkt.', min: 2 },
    { t: 'Doe de kip terug. Roer de bindsaus nog even door (de maïzena zakt naar de bodem) en giet hem in de wok. Roerbak 1 à 2 minuten tot de saus bindt en glanst. De groente moet nog knapperig zijn.', min: 2 },
    { t: 'Proef, breng eventueel op smaak met 1 el sojasaus en serveer met de rijst.' }
  ],
  tips: ['Chop suey betekent zoiets als "allerlei stukjes": in Kanton een restjesgerecht, en nog steeds de ideale manier om de groentela leeg te maken.'],
  alt: ['Vegetarisch: vervang de kip door stevige tofu, gebruik groentebouillon en vegetarische oestersaus (op basis van paddenstoelen).']
},
{
  id: 'tjap-tjoy-varken', variantVan: 'tjap-tjoy', variant: 'Varkensvlees', naam: 'Tjap tjoy met varkensvlees', ook: ['tjap tjoy varken', 'chop suey varkensvlees'],
  intro: 'Een wok vol knapperige groente met reepjes varkenshaas in een glanzende bindsaus van oestersaus en soja.',
  vervang: {
    kipfilet: { n: 'varkenshaas', q: 400, u: 'g', x: 'in dunne plakjes; of varkensreepjes' },
    sojasaus: { n: 'sojasaus', q: 1, u: 'el', x: 'voor het vlees' },
    'maïzena': { n: 'maïzena', q: 1, u: 'tl', x: 'voor het vlees' }
  },
  stappen: [
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Zet alles klaar vóór je de wok aanzet, want het bakken gaat snel. Meng het vlees met 1 el sojasaus en 1 tl maïzena. Leg de harde groente (ui, wortel, paprika) en de zachte groente (kool, taugé) in aparte schalen. Roer de bindsaus aan.' },
    { t: 'Verhit 1 el olie in de wok op het hoogste vuur tot hij net begint te walmen. Bak het vlees in 2 delen, elk 3 à 4 minuten, tot het goudbruin en gaar is. Doe niet alles tegelijk, anders gaat het vlees koken in plaats van bakken. Schep het uit de wok.', min: 4 },
    { t: 'Verhit nog 1 el olie. Roerbak ui, wortel en paprika 2 minuten. Voeg champignons en bamboescheuten toe en roerbak nog 2 minuten.', min: 4 },
    { t: 'Bak knoflook, gember en de stelen van de kool 1 minuut mee. Voeg de bladeren en de taugé toe en roerbak 1 minuut, tot de kool net slinkt.', min: 2 },
    { t: 'Doe het vlees terug. Roer de bindsaus nog even door (de maïzena zakt naar de bodem) en giet hem in de wok. Roerbak 1 à 2 minuten tot de saus bindt en glanst. De groente moet nog knapperig zijn.', min: 2 },
    { t: 'Proef, breng eventueel op smaak met 1 el sojasaus en serveer met de rijst.' }
  ],
  alt: ['Vegetarisch: vervang het vlees door stevige tofu, gebruik groentebouillon en vegetarische oestersaus (op basis van paddenstoelen).']
},
{
  id: 'babi-pangang', naam: 'Babi pangang', ook: ['babi pangang saus'],
  keuken: 'Chinees', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '1½ uur in de oven', pers: 4, niveau: 'Gemiddeld', vega: false, pit: 1,
  intro: 'Buikspek met een knapperig gepoft zwoerd en de bekende knalrode zoetzure saus met atjar. Een feestmaal van de Chinees-Indische afhaal.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'bakplaat', tekst: 'Ovenrooster met een bakplaat eronder', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer', m: 'airfryer' },
    { tool: 'kookpan', tekst: 'Steelpan voor de saus' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'varkensbuik', q: 750, u: 'g', x: 'buikspek in één stuk met zwoerd' },
    { n: 'vijfkruidenpoeder', q: 1, u: 'tl' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'azijn', q: 1, u: 'el', x: 'voor het zwoerd' },
    { n: 'zout', q: 2, u: 'tl' },
    { n: 'rijst', q: 300, u: 'g' },
    { kop: 'Rode saus' },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in dunne halve ringen' },
    { n: 'knoflook', q: 1, u: 'teen' },
    { n: 'gember', q: 10, u: 'g', x: 'geraspt' },
    { n: 'tomatenpuree', q: 2, u: 'el' },
    { n: 'ketchup', q: 4, u: 'el' },
    { n: 'sambal oelek', q: 1, u: 'tl' },
    { n: 'suiker', q: 3, u: 'el' },
    { n: 'azijn', q: 3, u: 'el' },
    { n: 'ketjap manis', q: 1, u: 'el' },
    { n: 'water', q: 250, u: 'ml' },
    { n: 'maïzena', q: 1, u: 'el', x: 'aangelengd met 2 el koud water' },
    { n: 'atjar', q: 100, u: 'g', x: 'atjar tjampoer uit een pot, uitgelekt', opt: true }
  ],
  stappen: [
    { t: 'Dep het vlees goed droog. Prik het zwoerd overal in met de punt van een scherp mes of een satéprikker, zonder in het vlees te komen. Wrijf de vleeskant in met vijfkruidenpoeder, suiker en 1 tl zout. Wrijf het zwoerd in met de azijn en daarna met de rest van het zout.' },
    { t: 'Verwarm de oven voor op 180 °C. Leg het vlees met het zwoerd naar boven op het rooster en schuif een bakplaat met een laagje water eronder om het vet op te vangen. Bak 60 minuten.', m: 'oven', min: 60 },
    { t: 'Zet de oven op 230 °C (of zet de grill aan) en bak nog 20 à 30 minuten, tot het zwoerd overal opbolt en knapperig is. Blijf er de laatste minuten bij; het mag niet zwart worden.', m: 'oven', min: 25 },
    { t: 'Snijd het vlees zo nodig in 2 stukken zodat het in de mand past. Leg het met het zwoerd naar boven in de airfryer en bak 35 minuten op 160 °C.', m: 'airfryer', min: 35 },
    { t: 'Zet de airfryer op 200 °C en bak nog 15 à 20 minuten, tot het zwoerd overal gepoft en knapperig is.', m: 'airfryer', min: 18 },
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Saus: fruit ui, knoflook en gember 3 minuten in de olie in de steelpan. Voeg tomatenpuree, ketchup, sambal, suiker, azijn, ketjap en water toe en breng aan de kook. Bind met de aangelengde maïzena, laat 2 minuten zachtjes koken en roer de atjar erdoor.', min: 6 },
    { t: 'Laat het vlees 5 minuten rusten. Leg het met het zwoerd naar beneden op de snijplank en snijd het met een groot mes in plakken of blokjes. Serveer op de rijst met de saus ernaast, dan blijft het zwoerd knapperig.', min: 5 }
  ],
  tips: ['Wrijf het vlees een dag van tevoren in en laat het onafgedekt in de koelkast staan. Hoe droger het zwoerd, hoe beter het popt.', 'Het voorbeeld is het Kantonese siu yuk, geroosterd buikspek; de knalrode zoetzure saus is een echte Nederlands-Chinese vinding.'],
  alt: ['Minder vet: neem 600 g procureur (varkensnek) in plakken van 2 cm, ingewreven met ketjap en vijfkruidenpoeder. Bak ze 20 à 25 minuten in de oven op 220 °C of 12 à 15 minuten in de airfryer op 200 °C; keer halverwege.']
},
{
  id: 'zoetzure-kip', naam: 'Zoetzure kip', gerecht: 'Zoetzuur (koe lo)', variant: 'Kip', ook: ['koe lo kai', 'kip zoetzuur', 'sweet and sour chicken'],
  keuken: 'Chinees', soort: 'Hoofdgerecht',
  tijd: 40, pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Knapperige stukjes kip in een glanzende zoetzure saus met paprika, ui en ananas. Ondiep gefrituurd of uit de airfryer.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan (frituren)' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan met hoge rand (28 cm) met een laagje olie van 1½ cm, of frituur in de wok; een thermometer of houten lepel', m: 'koekenpan' },
    { tool: 'airfryer', tekst: 'Airfryer, mand licht ingevet', m: 'airfryer' },
    { tool: 'wok', tekst: 'Wok voor de saus', of: 'Geen wok? Gebruik een grote RVS-koekenpan op hoog vuur en bak in delen.' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'kippendijfilet', q: 500, u: 'g', x: 'in blokjes van 3 cm; of kipfilet' },
    { n: 'sojasaus', q: 1, u: 'el', x: 'voor de kip' },
    { n: 'witte peper', q: 1, u: 'snuf' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st' },
    { n: 'maïzena', q: 60, u: 'g' },
    { n: 'bloem', q: 30, u: 'g' },
    { n: 'zonnebloemolie', q: 500, u: 'ml', x: 'om te frituren; 2 el voor de airfryer' },
    { n: 'rijst', q: 300, u: 'g' },
    { kop: 'Saus' },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in partjes' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in stukjes' },
    { n: 'groene paprika', p: 'groene paprika\'s', q: 1, u: 'st', x: 'in stukjes' },
    { n: 'knoflook', q: 1, u: 'teen' },
    { n: 'gember', q: 10, u: 'g', x: 'geraspt' },
    { n: 'ananas', q: 225, u: 'g', x: 'stukjes op sap, uitgelekt gewogen; sap apart houden' },
    { n: 'ketchup', q: 3, u: 'el' },
    { n: 'azijn', q: 3, u: 'el', x: 'rijstazijn of witte azijn' },
    { n: 'suiker', q: 2, u: 'el' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'maïzena', q: 1, u: 'el' }
  ],
  stappen: [
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Meng de kip met 1 el sojasaus, een snuf zout en de witte peper. Roer voor de saus het ananassap (aangevuld met water tot 125 ml) met ketchup, azijn, suiker, sojasaus en maïzena. Snijd alle groente klaar, want straks gaat het snel.' },
    { t: 'Klop het ei los en schep het door de kip. Meng maïzena en bloem in een kom, schep de kip erdoor tot elk stukje bedekt is en klop het overtollige meel eraf.' },
    { t: 'Verhit de olie in de koekenpan of wok tot 175 °C (een houten lepelsteel in de olie geeft meteen een krans van belletjes). Bak de kip in 2 à 3 porties 4 à 5 minuten, tot hij goudbruin en gaar is. Laat uitlekken op een rooster of keukenpapier.', m: 'koekenpan', min: 5 },
    { t: 'Verwarm de airfryer voor op 200 °C. Leg de kip in één laag in de mand en besproei of bestrijk hem ruim met olie. Bak 12 à 14 minuten tot hij goudbruin en gaar is; schud halverwege. Bak bij een kleine mand in 2 delen.', m: 'airfryer', min: 13 },
    { t: 'Verhit 1 el olie in de wok op hoog vuur. Roerbak ui en paprika 2 minuten, voeg knoflook en gember toe en roerbak 30 seconden. Doe de ananas erbij en bak 1 minuut mee.', min: 3 },
    { t: 'Roer de saus nog even door, giet hem in de wok en laat al roerend 1 minuut binden tot hij dik en glanzend is.', min: 1 },
    { t: 'Schep de kip er pas vlak voor het opdienen door, dan blijft hij knapperig. Serveer meteen met de rijst.' }
  ],
  tips: ['Koe lo kai is de Nederlands-Indische naam voor het Kantonese gu lou: daar is het origineel met varkensvlees (koe lo yuk).'],
  alt: ['Liever de saus apart? Serveer hem in een kommetje ernaast, zo blijven ook de restjes knapperig.']
},
{
  id: 'koe-lo-yuk', variantVan: 'zoetzure-kip', variant: 'Varkensvlees', naam: 'Zoetzuur varkensvlees (koe lo yuk)', ook: ['koe lo yuk', 'babi zoetzuur', 'varkensvlees zoetzuur', 'sweet and sour pork'],
  intro: 'Knapperige stukjes varkensvlees in een glanzende zoetzure saus met paprika, ui en ananas: het Kantonese origineel. Ondiep gefrituurd of uit de airfryer.',
  vervang: {
    kippendijfilet: { n: 'varkenshaas', q: 500, u: 'g', x: 'of procureur, in blokjes van 3 cm' },
    sojasaus: { n: 'sojasaus', q: 1, u: 'el' }
  },
  stappen: [
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Meng het vlees met 1 el sojasaus, een snuf zout en de witte peper. Roer voor de saus het ananassap (aangevuld met water tot 125 ml) met ketchup, azijn, suiker, sojasaus en maïzena. Snijd alle groente klaar, want straks gaat het snel.' },
    { t: 'Klop het ei los en schep het door het vlees. Meng maïzena en bloem in een kom, schep het vlees erdoor tot elk stukje bedekt is en klop het overtollige meel eraf.' },
    { t: 'Verhit de olie in de koekenpan of wok tot 175 °C (een houten lepelsteel in de olie geeft meteen een krans van belletjes). Bak het vlees in 2 à 3 porties 5 à 6 minuten, tot het goudbruin en gaar is. Laat uitlekken op een rooster of keukenpapier.', m: 'koekenpan', min: 6 },
    { t: 'Verwarm de airfryer voor op 200 °C. Leg het vlees in één laag in de mand en besproei of bestrijk het ruim met olie. Bak 13 à 15 minuten tot het goudbruin en gaar is; schud halverwege. Bak bij een kleine mand in 2 delen.', m: 'airfryer', min: 14 },
    { t: 'Verhit 1 el olie in de wok op hoog vuur. Roerbak ui en paprika 2 minuten, voeg knoflook en gember toe en roerbak 30 seconden. Doe de ananas erbij en bak 1 minuut mee.', min: 3 },
    { t: 'Roer de saus nog even door, giet hem in de wok en laat al roerend 1 minuut binden tot hij dik en glanzend is.', min: 1 },
    { t: 'Schep het vlees er pas vlak voor het opdienen door, dan blijft het knapperig. Serveer meteen met de rijst.' }
  ],
  tips: ['In Kanton heet dit gu lou yuk. De zoetzure kip (koe lo kai) is de latere, Nederlands-Indische favoriet.']
},
{
  id: 'egg-fried-rice', naam: 'Gebakken rijst met ei (egg fried rice)', ook: ['egg fried rice', 'chinese gebakken rijst', 'yangzhou fried rice'],
  keuken: 'Chinees', soort: 'Hoofdgerecht',
  tijd: 20, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Losse, licht geroosterde rijstkorrels met zacht ei, lente-ui en doperwten. Snel, goedkoop en de beste bestemming voor rijst van gisteren.',
  gerei: [
    { tool: 'wok', tekst: 'Wok voor hoog vuur', of: 'Geen wok? Gebruik een grote RVS-koekenpan op hoog vuur en bak in delen.' },
    { tool: 'kookpan', tekst: 'Pan met deksel om de rijst van tevoren te koken' }
  ],
  ingr: [
    { n: 'rijst', q: 350, u: 'g', x: 'liefst jasmijnrijst; gekookt en goed koud (of 900 g restjes rijst)' },
    { n: 'ei', p: 'eieren', q: 5, u: 'st' },
    { n: 'lente-ui', p: 'lente-uien', q: 4, u: 'st', x: 'wit en groen apart, in ringetjes' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'fijngehakt', opt: true },
    { n: 'wortel', p: 'wortels', q: 1, u: 'st', x: 'in kleine blokjes' },
    { n: 'doperwten', q: 150, u: 'g', x: 'diepvries, ontdooid' },
    { n: 'sojasaus', q: 3, u: 'el' },
    { n: 'sesamolie', q: 1, u: 'tl' },
    { n: 'witte peper', q: 0.5, u: 'tl' },
    { n: 'zonnebloemolie', q: 3, u: 'el' },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Kook de rijst bij voorkeur een dag van tevoren, of in elk geval een paar uur eerder. Spreid hem uit op een bord of bakplaat en laat hem onafgedekt in de koelkast afkoelen en opdrogen.', min: 15 },
    { t: 'Zet alles klaar naast het fornuis, want straks heb je geen tijd om te snijden. Klop de eieren los met een snuf zout. Wrijf de koude rijst met natte handen los tot er geen klontjes meer zijn. Meng sojasaus, sesamolie en witte peper in een kommetje.' },
    { t: 'Verhit 1 el olie in de wok op het hoogste vuur tot hij walmt. Giet de eieren erin en roer 30 à 45 seconden tot ze net gestold maar nog smeuïg zijn. Schep ze uit de wok.', min: 1 },
    { t: 'Verhit 2 el olie. Roerbak het wit van de lente-ui, de knoflook en de wortel 1 minuut. Voeg de doperwten toe en roerbak nog 1 minuut.', min: 2 },
    { t: 'Doe de rijst erbij. Is je pan kleiner dan 32 cm, bak dan in 2 delen. Druk de rijst plat, laat hem 30 seconden liggen en schep om. Herhaal 3 à 4 minuten op het hoogste vuur, tot de rijst gloeiend heet is en de korrels los rondspringen.', min: 4 },
    { t: 'Giet het sausje langs de hete rand van de wok, zodat het sist en een beetje karamelliseert. Schep het ei in stukjes erdoor, met het groen van de lente-ui. Proef en breng op smaak met zout.' }
  ],
  tips: ['Verse rijst wordt plakkerig. Kook hem de avond ervoor in de rijstkoker, met water tot net onder het streepje: dan worden de korrels nog losser.', 'Het voorbeeld is Yangzhou fried rice uit Oost-China, waar het geslaagd is als elke korrel los ligt en glanst.'],
  alt: ['Yangzhou-stijl (niet vegetarisch): bak eerst 150 g gepelde garnalen 1 minuut en schep ze uit. Doe ze aan het eind terug met 100 g ham in blokjes.']
},
{
  id: 'beef-broccoli', naam: 'Biefstuk met broccoli in oestersaus', gerecht: 'Broccoli in oestersaus', variant: 'Biefstuk', ook: ['beef and broccoli', 'rundvlees met broccoli'],
  vriezer: { biefstuk: { bevroren: 'Half ontdooid is hier juist handig: als je er net een mes in krijgt maar het nog stevig is, snijd je het flinterdun. De 20 minuten in de vriezer sla je dan over.', inStap: 'half ontdooid: vriezer overslaan' } },
  keuken: 'Chinees', soort: 'Hoofdgerecht',
  tijd: 30, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Botermalse reepjes biefstuk met knapperige broccoli in een glanzende saus van oestersaus, gember en knoflook. Het geheim zit in een snufje zuiveringszout.',
  gerei: [
    { tool: 'wok', tekst: 'Wok voor hoog vuur', of: 'Geen wok? Gebruik een grote RVS-koekenpan op hoog vuur en bak in delen.' },
    { tool: 'kookpan', tekst: 'Kookpan om de broccoli te blancheren' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'biefstuk', q: 500, u: 'g', x: 'of bavette; tegen de draad in in plakjes van 3 mm' },
    { n: 'zuiveringszout', q: 0.25, u: 'tl', x: 'bicarbonaat, baking soda; geen bakpoeder' },
    { n: 'maïzena', q: 1, u: 'el', x: 'voor het vlees' },
    { n: 'sojasaus', q: 1, u: 'el', x: 'voor het vlees' },
    { n: 'broccoli', q: 500, u: 'g', x: 'in roosjes, de steel geschild en in plakjes' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'fijngehakt' },
    { n: 'gember', q: 15, u: 'g', x: 'in dunne reepjes' },
    { n: 'zonnebloemolie', q: 3, u: 'el' },
    { n: 'sesamzaad', q: 1, u: 'tl', opt: true },
    { n: 'rijst', q: 300, u: 'g' },
    { kop: 'Saus' },
    { n: 'oestersaus', q: 3, u: 'el' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'Shaoxing rijstwijn', q: 2, u: 'el', x: 'of droge sherry' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'maïzena', q: 1, u: 'el' },
    { n: 'water', q: 100, u: 'ml' }
  ],
  stappen: [
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Meng het vlees met zuiveringszout, maïzena, 1 el sojasaus, 1 el water en 1 tl olie. Laat 15 minuten staan; dit maakt het vlees mals (velveting). Leg de biefstuk vooraf 20 minuten in de vriezer, dan snijd je hem makkelijk flinterdun.', min: 15 },
    { t: 'Breng water met zout aan de kook in de kookpan. Blancheer de broccoli 1 minuut, giet af en laat goed uitlekken.', min: 1 },
    { t: 'Roer de ingrediënten voor de saus door elkaar en zet alles klaar naast de wok.' },
    { t: 'Verhit 1 el olie in de wok op het hoogste vuur tot hij walmt. Leg de helft van het vlees in één laag, laat 1 minuut liggen en roerbak nog 30 seconden, tot het bruin is maar vanbinnen nog roze. Schep uit en bak de tweede helft net zo.', min: 2 },
    { t: 'Verhit de laatste el olie. Roerbak knoflook en gember 30 seconden tot ze geuren. Voeg de broccoli toe en roerbak 1 minuut.', min: 1 },
    { t: 'Doe het vlees terug, roer de saus nog even door en giet hem erbij. Roerbak 1 minuut tot de saus bindt en alles glanst. Bestrooi met sesamzaad en serveer met de rijst.', min: 1 }
  ],
  tips: ['Neem niet meer dan ¼ tl zuiveringszout per 500 g vlees, anders proef je het.', 'Een Chinees-Amerikaanse klassieker; in Kanton maken ze het met Chinese broccoli (gai lan), die je soms bij de toko vindt.'],
  alt: []
},
{
  id: 'kip-broccoli', variantVan: 'beef-broccoli', variant: 'Kip', naam: 'Kip met broccoli in oestersaus', ook: ['chicken and broccoli', 'kip broccoli', 'kip met broccoli'],
  intro: 'Sappige plakjes kippendij met knapperige broccoli in een glanzende saus van oestersaus, gember en knoflook.',
  vervang: {
    biefstuk: { n: 'kippendijfilet', q: 500, u: 'g', x: 'in dunne plakjes' },
    zuiveringszout: null
  },
  stappen: [
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Meng de kip met de maïzena, 1 el sojasaus, 1 el water en 1 tl olie. Laat 10 minuten staan.', min: 10 },
    { t: 'Breng water met zout aan de kook in de kookpan. Blancheer de broccoli 1 minuut, giet af en laat goed uitlekken.', min: 1 },
    { t: 'Roer de ingrediënten voor de saus door elkaar en zet alles klaar naast de wok.' },
    { t: 'Verhit 1 el olie in de wok op het hoogste vuur tot hij walmt. Leg de helft van de kip in één laag, laat 1 minuut liggen en roerbak nog 2 minuten, tot hij bruin en gaar is. Schep uit en bak de tweede helft net zo.', min: 3 },
    { t: 'Verhit de laatste el olie. Roerbak knoflook en gember 30 seconden tot ze geuren. Voeg de broccoli toe en roerbak 1 minuut.', min: 1 },
    { t: 'Doe de kip terug, roer de saus nog even door en giet hem erbij. Roerbak 1 minuut tot de saus bindt en alles glanst. Bestrooi met sesamzaad en serveer met de rijst.', min: 1 }
  ],
  tips: ['Kippendij blijft in de hete wok sappiger dan kipfilet. Neem je toch filet, bak hem dan een halve minuut korter.']
},
{
  id: 'bulgogi', naam: 'Bulgogi', gerecht: 'Bulgogi', variant: 'Rundvlees', ook: ['koreaanse bbq', 'koreaans rundvlees'],
  vriezer: { entrecote: { bevroren: 'Half ontdooid is hier juist handig: als je er net een mes in krijgt maar het nog stevig is, snijd je het flinterdun. De 30 minuten in de vriezer uit stap 1 sla je dan over.', inStap: 'half ontdooid: vriezer overslaan' } },
  keuken: 'Koreaans', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '30 min marineren', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Flinterdun rundvlees in een zoete marinade van peer, soja en knoflook, snel heet gebakken. Je wikkelt het met rijst en kimchi in een slablad.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'contactgrill', naam: 'Contactgrill' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Grote RVS-koekenpan (28 cm) of een wok', m: 'koekenpan' },
    { tool: 'contactgrill', tekst: 'Contactgrill', m: 'contactgrill' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'entrecote', q: 600, u: 'g', x: 'of ribeye; half bevroren in flinterdunne plakjes, of laat de slager het snijden' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in dunne halve ringen' },
    { n: 'lente-ui', p: 'lente-uien', q: 3, u: 'st', x: 'in ringetjes, wit en groen apart' },
    { n: 'sesamzaad', q: 1, u: 'el', x: 'geroosterd' },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { kop: 'Marinade' },
    { n: 'peer', p: 'peren', q: 0.5, u: 'st', x: 'liefst een Aziatische nashipeer, geraspt' },
    { n: 'sojasaus', q: 5, u: 'el' },
    { n: 'bruine suiker', q: 2, u: 'el' },
    { n: 'knoflook', q: 4, u: 'teen', x: 'geperst' },
    { n: 'sesamolie', q: 1, u: 'el' },
    { n: 'zwarte peper', q: 0.5, u: 'tl' },
    { kop: 'Erbij' },
    { n: 'rijst', q: 300, u: 'g' },
    { n: 'kropsla', q: 1, u: 'st', x: 'losse blaadjes; of eikenbladsla' },
    { n: 'kimchi', q: 200, u: 'g' },
    { n: 'gochujang', q: 2, u: 'el', opt: true }
  ],
  stappen: [
    { t: 'Leg het vlees 30 minuten in de vriezer tot het stevig maar niet hard is. Snijd het met een scherp mes tegen de draad in in plakjes van 2 à 3 mm.', min: 30 },
    { t: 'Meng peer, sojasaus, suiker, knoflook, sesamolie, peper en het wit van de lente-ui. Schep het vlees en de ui erdoor en laat 30 minuten marineren (of tot een nacht in de koelkast).', min: 30 },
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Verhit de olie in de koekenpan (of wok) op hoog vuur tot hij echt heet is. Laat de marinade van het vlees afdruipen en bak het in 3 à 4 porties in één laag, 1½ à 2 minuten, tot de randjes karamelliseren. Doe niet te veel tegelijk, anders gaat het koken.', m: 'koekenpan', min: 2 },
    { t: 'Verwarm de contactgrill voor op de hoogste stand. Laat de marinade van het vlees afdruipen, leg het in een dunne laag op de grill met de ui ertussen en grill 2 minuten met de deksel dicht. Werk in porties.', m: 'contactgrill', min: 2 },
    { t: 'Bestrooi het vlees met sesamzaad en het groen van de lente-ui. Leg een slablad in je hand, schep er wat rijst, vlees en kimchi op, eventueel een likje gochujang, vouw dicht en eet in één hap.' }
  ],
  tips: ['De peer bevat een enzym dat het vlees mals maakt. Marineer niet langer dan een nacht, anders wordt het melig.', 'Bulgogi betekent letterlijk "vuurvlees": in Korea grill je het aan tafel boven houtskool.'],
  alt: ['Geen peer? Neem een halve geraspte appel of 1 el honing.']
},
{
  id: 'dwaeji-bulgogi', variantVan: 'bulgogi', variant: 'Varkensvlees', pit: 2, naam: 'Dwaeji bulgogi (pittig varkensvlees)', ook: ['dwaeji bulgogi', 'pittige bulgogi', 'spicy pork bulgogi', 'jeyuk bokkeum'],
  vriezer: { procureur: { bevroren: 'Half ontdooid is hier juist handig: als je er net een mes in krijgt maar het nog stevig is, snijd je het flinterdun. De 30 minuten in de vriezer uit stap 1 sla je dan over.', inStap: 'half ontdooid: vriezer overslaan' } },
  intro: 'Flinterdun varkensvlees in een rode, pittig-zoete marinade van gochujang, soja en knoflook, heet gebakken. Net als bulgogi wikkel je het met rijst en kimchi in een slablad.',
  vervang: {
    entrecote: { n: 'procureur', q: 600, u: 'g', x: 'varkensschouder, of varkensbuik; half bevroren in flinterdunne plakjes' },
    sojasaus: [{ n: 'sojasaus', q: 3, u: 'el' }, { n: 'gochujang', q: 3, u: 'el', x: 'Koreaanse chilipasta' }, { n: 'gember', q: 10, u: 'g', x: 'geraspt' }],
    gochujang: null
  },
  stappen: [
    { t: 'Leg het vlees 30 minuten in de vriezer tot het stevig maar niet hard is. Snijd het met een scherp mes in plakjes van 2 à 3 mm.', min: 30 },
    { t: 'Meng peer, sojasaus, gochujang, gember, suiker, knoflook, sesamolie, peper en het wit van de lente-ui. Schep het vlees en de ui erdoor en laat 30 minuten marineren (of tot een nacht in de koelkast).', min: 30 },
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Verhit de olie in de koekenpan (of wok) op hoog vuur. Bak het vlees met de marinade in 3 porties 3 à 4 minuten, tot het gaar is en de randjes karamelliseren. Door de suiker en gochujang brandt het snel aan: blijf erbij en schep om.', m: 'koekenpan', min: 4 },
    { t: 'Verwarm de contactgrill voor op de hoogste stand. Leg het vlees met de ui in een dunne laag op de grill en grill 3 à 4 minuten met de deksel dicht, tot het gaar is. Werk in porties.', m: 'contactgrill', min: 4 },
    { t: 'Bestrooi het vlees met sesamzaad en het groen van de lente-ui. Leg een slablad in je hand, schep er wat rijst, vlees en kimchi op, vouw dicht en eet in één hap.' }
  ],
  tips: ['Varkensvlees moet helemaal gaar zijn: bak tot er geen roze meer te zien is. Schouder of buik blijft daarbij sappig, haas niet.'],
  alt: ['Minder pittig? Gebruik 1 el gochujang en 1 el extra sojasaus.', 'Geen peer? Neem een halve geraspte appel of 1 el honing.']
},
{
  id: 'kimchi-fried-rice', naam: 'Kimchi fried rice (kimchi bokkeumbap)', ook: ['kimchi bokkeumbap', 'gebakken rijst met kimchi'],
  keuken: 'Koreaans', soort: 'Hoofdgerecht',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: false, pit: 2,
  intro: 'Pittige, zurige gebakken rijst met kimchi en spek, met een spiegelei met lopende dooier erop. Klaar in een kwartier als je rijst over hebt.',
  gerei: [
    { tool: 'wok', tekst: 'Wok voor hoog vuur', of: 'Geen wok? Gebruik een grote RVS-koekenpan op hoog vuur en bak in delen.' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de spiegeleieren' },
    { tool: 'kookpan', tekst: 'Pan met deksel om de rijst van tevoren te koken' }
  ],
  ingr: [
    { n: 'rijst', q: 300, u: 'g', x: 'gekookt en goed koud (of 750 g restjes rijst)' },
    { n: 'kimchi', q: 300, u: 'g', x: 'liefst lekker zuur, plus 3 el vocht uit de pot' },
    { n: 'spekblokjes', q: 150, u: 'g' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'gesnipperd' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'gochujang', q: 2, u: 'el' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'sesamolie', q: 1, u: 'el' },
    { n: 'lente-ui', p: 'lente-uien', q: 3, u: 'st', x: 'in ringetjes' },
    { n: 'ei', p: 'eieren', q: 4, u: 'st' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { n: 'sesamzaad', q: 1, u: 'tl' },
    { n: 'nori', q: 1, u: 'vel', x: 'in reepjes geknipt', opt: true }
  ],
  stappen: [
    { t: 'Kook de rijst bij voorkeur een dag van tevoren. Spreid hem uit en laat hem onafgedekt in de koelkast afkoelen.', min: 15 },
    { t: 'Zet alles klaar: knip de kimchi met een schaar in kleine stukjes en bewaar het vocht. Roer gochujang, sojasaus, suiker en het kimchivocht door elkaar. Wrijf de koude rijst los.' },
    { t: 'Bak de spekblokjes in de droge wok op middelhoog vuur in 4 minuten uit en krokant.', min: 4 },
    { t: 'Zet het vuur hoog. Roerbak ui en knoflook 1 minuut in het spekvet. Voeg de kimchi toe en roerbak 3 minuten tot hij iets karamelliseert.', min: 4 },
    { t: 'Doe de rijst erbij (bij een kleinere pan in 2 delen) en roerbak 3 minuten. Voeg het gochujangmengsel toe en bak nog 2 minuten tot alles egaal rood en gloeiend heet is. Een aangebakken korstje mag: dat is het lekkerste.', min: 5 },
    { t: 'Haal de wok van het vuur en roer de sesamolie en de lente-ui erdoor.' },
    { t: 'Bak in de koekenpan 4 spiegeleieren in de olie op middelhoog vuur, tot de randjes krokant zijn en de dooier nog vloeibaar. Leg ze op de rijst en bestrooi met sesamzaad en nori.', min: 3 }
  ],
  tips: ['Hoe ouder en zuurder de kimchi, hoe lekkerder dit wordt. In Korea is dit precies waar je overjarige kimchi voor gebruikt.'],
  alt: ['Vegetarisch: vervang het spek door 200 g stevige tofu in blokjes, goudbruin gebakken in 2 el olie. Let op: veel kimchi bevat vissaus of garnalen, kies dan een vegan kimchi.']
},
{
  id: 'japchae', naam: 'Japchae', ook: ['chapchae', 'glasnoedels'],
  keuken: 'Koreaans', soort: 'Hoofdgerecht',
  tijd: 40, pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Glanzende, veerkrachtige glasnoedels van zoete aardappel met rundvlees, spinazie en kleurige groente in een zoet-zoute sesamsaus. Warm en lauw even lekker.',
  gerei: [
    { tool: 'wok', tekst: 'Wok voor hoog vuur', of: 'Geen wok? Gebruik een grote RVS-koekenpan op hoog vuur en bak in delen.' },
    { tool: 'kookpan', tekst: 'Grote kookpan voor de noedels en de spinazie' }
  ],
  ingr: [
    { n: 'glasnoedels', q: 250, u: 'g', x: 'liefst Koreaanse dangmyeon van zoete aardappel (toko)' },
    { n: 'biefstuk', q: 250, u: 'g', x: 'of entrecote, in dunne reepjes' },
    { n: 'spinazie', q: 200, u: 'g' },
    { n: 'wortel', p: 'wortels', q: 1, u: 'st', x: 'in lucifers' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in reepjes' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in dunne halve ringen' },
    { n: 'shiitake', q: 150, u: 'g', x: 'in plakjes; of kastanjechampignons' },
    { n: 'lente-ui', p: 'lente-uien', q: 3, u: 'st', x: 'in stukjes van 4 cm' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { n: 'sesamzaad', q: 1, u: 'el', x: 'geroosterd' },
    { n: 'zout' },
    { kop: 'Saus' },
    { n: 'sojasaus', q: 5, u: 'el' },
    { n: 'bruine suiker', q: 2, u: 'el' },
    { n: 'sesamolie', q: 3, u: 'el' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'geperst' },
    { n: 'zwarte peper', q: 0.5, u: 'tl' }
  ],
  stappen: [
    { t: 'Roer de ingrediënten voor de saus door elkaar. Meng het vlees met 2 el van de saus en zet de rest apart.' },
    { t: 'Breng een grote pan water aan de kook. Blancheer de spinazie 30 seconden, schep hem uit, spoel koud en knijp hem goed uit. Meng met een snuf zout.' },
    { t: 'Kook de noedels in hetzelfde water 6 à 7 minuten (kijk op de verpakking) tot ze zacht maar nog veerkrachtig zijn. Giet af, spoel kort koud en knip ze met een schaar een paar keer door. Meng met 1 el saus, dan plakken ze niet.', min: 7 },
    { t: 'Verhit 1 el olie in de wok op hoog vuur. Roerbak ui en wortel 2 minuten met een snuf zout. Voeg paprika en shiitake toe en roerbak nog 2 minuten. Schep alles in een grote kom.', min: 4 },
    { t: 'Verhit de rest van de olie en roerbak het vlees 2 minuten tot het bruin en gaar is.', min: 2 },
    { t: 'Doe de groente, spinazie, noedels, lente-ui en de rest van de saus in de wok. Schep alles 1 à 2 minuten om op middelhoog vuur, tot het warm is en glanst. Proef: zoet en zout moeten in balans zijn. Bestrooi met sesamzaad.', min: 2 }
  ],
  tips: ['Japchae is op kamertemperatuur net zo lekker, dus ideaal om vooruit te maken of mee te nemen.', 'Japchae betekent "gemengde groente": het 17e-eeuwse hofgerecht had nog helemaal geen noedels.'],
  alt: ['Gewone glasnoedels (van mungboon) zijn dunner en zachter: laat ze 5 minuten wellen in heet water in plaats van ze te koken.', 'Vegetarisch: laat het vlees weg en neem extra shiitake en reepjes omelet van 2 eieren.']
},
{
  id: 'korean-fried-chicken', naam: 'Korean fried chicken', ook: ['koreaanse kip', 'yangnyeom chicken', 'kfc koreaans'],
  keuken: 'Koreaans', soort: 'Hoofdgerecht',
  tijd: 50, pers: 4, niveau: 'Gemiddeld', vega: false, pit: 2,
  intro: 'Twee keer gefrituurde kip met een glazige, flinterdunne korst en een kleverige, zoet-pittige saus van gochujang en honing.',
  methodes: [ { id: 'braadpan', naam: 'Frituren' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven met 5 à 6 cm olie, een thermometer en een schuimspaan', m: 'braadpan' },
    { tool: 'airfryer', tekst: 'Airfryer, mand licht ingevet', m: 'airfryer' },
    { tool: 'kookpan', tekst: 'Steelpan voor de saus' }
  ],
  ingr: [
    { n: 'kippenvleugels', q: 1.2, u: 'kg', x: 'door het gewricht gesneden, puntjes eraf; of 800 g kippendijfilet in grote stukken' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'geraspt' },
    { n: 'gember', q: 5, u: 'g', x: 'geraspt' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'zwarte peper', q: 0.5, u: 'tl' },
    { n: 'maïzena', q: 100, u: 'g' },
    { n: 'bakpoeder', q: 1, u: 'tl' },
    { n: 'zonnebloemolie', q: 2, u: 'l', x: 'om te frituren; 1 el voor de airfryer' },
    { kop: 'Yangnyeom-saus' },
    { n: 'gochujang', q: 3, u: 'el' },
    { n: 'honing', q: 3, u: 'el' },
    { n: 'ketchup', q: 2, u: 'el' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'geraspt' },
    { n: 'gember', q: 10, u: 'g', x: 'geraspt' },
    { n: 'water', q: 2, u: 'el' },
    { kop: 'Erbij' },
    { n: 'sesamzaad', q: 1, u: 'el' },
    { n: 'lente-ui', p: 'lente-uien', q: 2, u: 'st', x: 'in ringetjes' }
  ],
  stappen: [
    { t: 'Dep de kip goed droog. Meng hem met knoflook, gember, zout en peper en laat 15 minuten staan (of tot een dag in de koelkast).', min: 15 },
    { t: 'Strooi maïzena en bakpoeder over de kip en schep om tot elk stuk bedekt is. Laat 5 minuten staan tot de laag vochtig wordt en een dun beslag vormt; klop daarna los meel eraf.', min: 5 },
    { t: 'Verhit de olie in de Dutch oven tot 170 °C (thermometer, of: een houten lepelsteel in de olie geeft meteen een krans van belletjes). Bak de kip in 3 porties 8 minuten (dijstukken 6 minuten), tot hij lichtgoud en gaar is. Laat uitlekken op een rooster.', m: 'braadpan', min: 8 },
    { t: 'Verhit de olie tot 180 °C en bak alle kip een tweede keer, in porties, 2 à 3 minuten tot hij diep goudbruin en knapperig is. Die tweede ronde maakt de korst glazig en extra knapperig.', m: 'braadpan', min: 3 },
    { t: 'Besproei of bestrijk de kip met olie en leg hem in één laag in de mand. Bak 20 minuten op 180 °C; keer halverwege en bestrijk droge, witte plekken met nog wat olie.', m: 'airfryer', min: 20 },
    { t: 'Zet de airfryer op 200 °C en bak nog 5 à 6 minuten tot de kip diep goudbruin en knapperig is.', m: 'airfryer', min: 5 },
    { t: 'Verwarm alle ingrediënten voor de saus in de steelpan op middelhoog vuur en laat 2 minuten zachtjes borrelen tot hij glanst en stroperig is.', min: 2 },
    { t: 'Schep de kip vlak voor het eten in een grote kom door de warme saus. Bestrooi met sesamzaad en lente-ui en eet direct.' }
  ],
  tips: ['Houd de helft zonder saus en eet die met een snufje zout en peper: in Korea bestel je vaak half-half.', 'Koreanen eten dit met ingelegde rettich en een biertje: chimaek, van chicken en maekju (bier).'],
  alt: ['Minder pittig: neem 2 el gochujang en 1 el extra ketchup.', 'Soja-knoflooksaus (ganjang): vervang de saus door 3 el sojasaus, 3 el honing, 4 tenen knoflook en 2 el water.']
},
{
  id: 'kimchi-jjigae', toegevoegd: '2026-10-20', naam: 'Kimchi jjigae (kimchistoof met varkensbuik)', ook: ['kimchi jjigae', 'kimchi chigae', 'kimchi stew', 'kimchisoep', 'koreaanse kimchisoep', 'kimchistoof'],
  keuken: 'Koreaans', soort: 'Soep',
  tijd: 15, wacht: '25 min trekken', pers: 4, niveau: 'Makkelijk', vega: false, pit: 2,
  intro: 'Het Koreaanse thuisgerecht bij uitstek: zure kimchi en varkensbuik, samen stevig aangebakken en dan getrokken tot een rode, pittige bouillon met zachte tahoe. Je zet de pan midden op tafel en eet er rijst bij.',
  vriezer: { varkensbuik: { bevroren: 'Half ontdooid snijd je de varkensbuik makkelijk in dunne plakjes. Helemaal bevroren kun je hem ook in de pan doen: bak hem dan eerst 5 minuten met de deksel erop tot de plakjes loslaten.', inStap: 'half ontdooid snijden' } },
  gerei: [
    { tool: 'kookpan', tekst: 'Brede kookpan of braadpan (24 cm) met deksel' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'kimchi', q: 300, u: 'g', x: '1 pot, goed zuur, met het sap; in stukken geknipt' },
    { n: 'varkensbuik', q: 300, u: 'g', x: 'zonder zwoerd, in plakjes van ½ cm' },
    { n: 'sesamolie', q: 1, u: 'el' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in halve ringen' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'fijngehakt' },
    { n: 'gochujang', q: 1, u: 'el' },
    { n: 'chilivlokken', q: 2, u: 'tl', x: 'of 1 el gochugaru (Koreaans chilipoeder)' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'water', q: 750, u: 'ml', x: 'of kippenbouillon' },
    { n: 'tahoe', q: 400, u: 'g', x: 'stevig of zijden tahoe, in plakken van 1 cm' },
    { n: 'lente-ui', p: 'lente-uien', q: 2, u: 'st', x: 'in schuine ringetjes' },
    { n: 'rijst', q: 300, u: 'g', x: 'liefst ronde rijst of sushirijst' }
  ],
  stappen: [
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Verhit de sesamolie in de kookpan op middelhoog vuur en bak de varkensbuik 4 minuten, tot het vet uit de plakjes komt en ze licht bruin zijn.', min: 4 },
    { t: 'Voeg kimchi, ui en knoflook toe en bak 5 minuten mee, tot de kimchi zacht wordt en aan de randen een beetje kleurt. Dat aanbakken geeft de soep zijn diepe smaak.', min: 5 },
    { t: 'Roer gochujang, chilivlokken, sojasaus en suiker erdoor en bak 1 minuut. Schenk het water en het kimchisap uit de pot erbij en breng aan de kook.', min: 1 },
    { t: 'Leg de deksel erop en laat 20 minuten zachtjes trekken, tot het vlees mals is.', min: 20 },
    { t: 'Leg de plakken tahoe in de soep en laat ze 5 minuten meewarmen; roer niet meer, dan blijft de tahoe heel. Proef: te zuur, voeg een snuf suiker toe; te zout, schenk er wat water bij.', min: 5 },
    { t: 'Strooi de lente-ui erover en zet de pan borrelend op tafel, met een kom rijst voor iedereen.' }
  ],
  tips: ['Hoe ouder en zuurder de kimchi, hoe beter de soep. Een pot die al een paar weken open in je koelkast staat is precies goed.', 'Varkensbuik in plakjes snijd je het makkelijkst als hij een half uur in de vriezer heeft gelegen.'],
  alt: ['Geen varkensbuik? Spekblokjes of dunne reepjes varkensschouder werken ook.', 'Minder pittig: laat de chilivlokken weg en houd het bij de gochujang.']
},
{
  id: 'ramen', naam: 'Ramen met kip en zacht ei', ook: ['shoyu ramen', 'ramen soep'],
  keuken: 'Japans', soort: 'Soep',
  tijd: 45, wacht: '2 uur marineren', pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Een haalbare thuisversie van shoyu ramen: opgewaardeerde kippenbouillon, een zoute sojabasis, malse kip en een gemarineerd ei met een zachte dooier.',
  gerei: [
    { tool: 'kookpan', tekst: 'Soeppan van minstens 3 liter voor de bouillon' },
    { tool: 'kookpan', tekst: 'Steelpan voor de eieren en een grote kookpan voor de noedels' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de kip' }
  ],
  ingr: [
    { kop: 'Bouillon' },
    { n: 'kippenbouillon', q: 1.6, u: 'l', x: 'liefst vers uit de koeling of zelfgetrokken' },
    { n: 'gember', q: 30, u: 'g', x: 'in plakjes' },
    { n: 'knoflook', q: 4, u: 'teen', x: 'gekneusd' },
    { n: 'lente-ui', p: 'lente-uien', q: 6, u: 'st', x: 'groen voor de bouillon, wit in ringetjes om te garneren' },
    { n: 'kombu', q: 10, u: 'g', opt: true },
    { n: 'gedroogde shiitake', p: 'gedroogde shiitakes', q: 4, u: 'st', opt: true },
    { kop: 'Tare (sojabasis)' },
    { n: 'sojasaus', q: 4, u: 'el', x: 'Japanse' },
    { n: 'mirin', q: 2, u: 'el' },
    { kop: 'Gemarineerd ei (ajitama)' },
    { n: 'ei', p: 'eieren', q: 4, u: 'st', x: 'recht uit de koelkast' },
    { n: 'sojasaus', q: 4, u: 'el' },
    { n: 'mirin', q: 4, u: 'el' },
    { n: 'water', q: 125, u: 'ml' },
    { kop: 'Kom' },
    { n: 'kippendijfilet', q: 400, u: 'g' },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { n: 'ramennoedels', q: 400, u: 'g', x: 'vers; of 300 g gedroogd (toko) of mie' },
    { n: 'paksoi', q: 300, u: 'g', x: 'kleine struikjes, gehalveerd', opt: true },
    { n: 'mais', q: 140, u: 'g', x: 'uit blik, uitgelekt', opt: true },
    { n: 'nori', q: 2, u: 'vel', x: 'in vieren geknipt' },
    { n: 'sesamzaad', q: 1, u: 'el' },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Eieren: breng water aan de kook in de steelpan. Laat de eieren er met een schuimspaan in zakken en kook ze precies 6½ minuut. Leg ze direct 5 minuten in ijskoud water en pel ze.', min: 6.5 },
    { t: 'Optioneel, maar het verschil zit hem hierin: meng sojasaus, mirin en water voor de marinade in een diepvrieszakje, leg de gepelde eieren erin, druk de lucht eruit en laat minstens 2 uur (tot 2 dagen) in de koelkast marineren. Geen tijd? Sla dit over en bestrooi de eieren straks met een snufje zout.', min: 120 },
    { t: 'Bouillon: breng de kippenbouillon met gember, knoflook, het groen van de lente-ui, kombu en shiitake aan de kook in de soeppan. Vis de kombu eruit zodra de bouillon kookt. Laat 20 minuten zachtjes trekken met de deksel op een kier en zeef hem.', min: 20 },
    { t: 'Roer de sojasaus en mirin voor de tare door elkaar.' },
    { t: 'Bestrooi de kip met een snuf zout. Bak hem in de olie in de koekenpan op middelhoog vuur 5 minuten per kant tot hij goudbruin en gaar is. Giet er de laatste minuut 1 el van de tare over en laat die karamelliseren. Laat 5 minuten rusten en snijd in plakjes.', min: 10 },
    { t: 'Kook de noedels in ruim water zonder zout volgens de verpakking (vers 1 à 2 minuten, gedroogd 3 à 4). Blancheer de paksoi de laatste minuut mee. Giet goed af.', min: 3 },
    { t: 'Doe 1 el tare in elke voorverwarmde kom en schenk er 400 ml gloeiend hete bouillon op. Proef en voeg naar smaak meer tare toe. Leg de noedels erin en maak af met kip, een gehalveerd ei, paksoi, mais, nori, het wit van de lente-ui en sesamzaad. Eet direct, voordat de noedels zacht worden.' }
  ],
  tips: ['Gebruik je bouillon van blokjes, maak hem dan slapper (1 blokje per liter): de tare brengt ook zout mee.', 'Echte ramenzaken trekken hun bouillon een hele dag en serveren chashu, opgerold gestoofd buikspek. Deze kip is de snelle thuisversie.'],
  alt: ['Miso ramen: roer per kom 1 el witte miso door de tare.', 'Vegetarisch: gebruik groentebouillon met extra shiitake en kombu, en gebakken tofu in plaats van kip.']
},
{
  id: 'yakisoba', naam: 'Yakisoba', ook: ['japanse gebakken noedels'],
  keuken: 'Japans', soort: 'Hoofdgerecht',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Gebakken noedels met varkensvlees, kool en een fruitig-hartige saus. Het Japanse straatvoer van de festivalplaat, in een kwartier in de wok.',
  gerei: [
    { tool: 'wok', tekst: 'Wok voor hoog vuur', of: 'Geen wok? Gebruik een grote RVS-koekenpan op hoog vuur en bak in delen.' },
    { tool: 'kookpan', tekst: 'Kookpan voor de noedels' }
  ],
  ingr: [
    { n: 'mie', q: 300, u: 'g', x: 'gedroogde mienoedels; of 4 pakjes verse yakisobanoedels (toko)' },
    { n: 'varkensvlees', q: 300, u: 'g', x: 'dun gesneden buikspek of varkensreepjes; of kipfilet' },
    { n: 'spitskool', q: 300, u: 'g', x: 'in stukken van 3 cm; of witte kool' },
    { n: 'wortel', p: 'wortels', q: 1, u: 'st', x: 'in lucifers' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in dunne halve ringen' },
    { n: 'taugé', q: 200, u: 'g' },
    { n: 'lente-ui', p: 'lente-uien', q: 3, u: 'st', x: 'in ringetjes' },
    { n: 'zonnebloemolie', q: 3, u: 'el' },
    { kop: 'Yakisobasaus' },
    { n: 'worcestershiresaus', q: 5, u: 'el' },
    { n: 'oestersaus', q: 2, u: 'el' },
    { n: 'ketchup', q: 2, u: 'el' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'suiker', q: 1, u: 'el' },
    { kop: 'Erbij (optioneel)' },
    { n: 'bonitovlokken', q: 5, u: 'g', x: 'katsuobushi', opt: true },
    { n: 'aonori', q: 1, u: 'tl', x: 'zeewiervlokken', opt: true },
    { n: 'benishoga', q: 2, u: 'el', x: 'rode ingelegde gember', opt: true }
  ],
  stappen: [
    { t: 'Kook de mie 1 minuut korter dan op de verpakking staat. Spoel koud, laat goed uitlekken en meng met 1 tl olie. Verse yakisobanoedels maak je alleen los onder de warme kraan.', min: 3 },
    { t: 'Zet alles klaar naast de wok: snijd vlees en groente en roer de ingrediënten voor de saus door elkaar.' },
    { t: 'Verhit 1 el olie in de wok op het hoogste vuur. Bak het vlees in 2 à 3 minuten bruin en gaar; bak in 2 delen als het niet in één laag past. Schep het uit de wok.', min: 3 },
    { t: 'Verhit nog 1 el olie. Roerbak ui en wortel 2 minuten. Voeg de kool toe en roerbak 2 minuten tot hij beetgaar is en bruine randjes heeft.', min: 4 },
    { t: 'Doe de noedels en het vlees erbij en roerbak 2 minuten. Laat de noedels af en toe even liggen, zodat ze een beetje aanbakken. In een koekenpan doe je dit in 2 delen.', min: 2 },
    { t: 'Giet de saus erover, voeg de taugé toe en schep alles 1 minuut om tot de noedels egaal bruin zijn en glanzen. Roer de lente-ui erdoor.', min: 1 },
    { t: 'Schep op en bestrooi met bonitovlokken, aonori en een hoopje benishoga.' }
  ],
  tips: ['Ondanks de naam zijn het geen boekweitnoedels (soba): yakisoba maak je met tarwenoedels, zoals mie.'],
  alt: ['Vegetarisch: laat het vlees weg en bak 200 g shiitake of tofu mee. Worcestershiresaus bevat ansjovis en oestersaus is van oesters: kies vegetarische varianten.']
},
{
  id: 'gyoza', naam: 'Gyoza', ook: ['japanse dumplings', 'potstickers', 'dumplings'],
  keuken: 'Japans', soort: 'Hoofdgerecht',
  tijd: 60, pers: 3, niveau: 'Moeilijk', vega: false,
  intro: 'Ongeveer 30 sappige dumplings met varkensgehakt en Chinese kool, met een knapperig bodempje en een zacht gestoomd velletje. Vouwen is even oefenen, maar daarna gaat het vanzelf.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan van 26 à 28 cm met passende deksel, liefst antiaanbak', of: 'Met een RVS-pan: verwarm hem 2 minuten goed voor, neem 2 el olie en maak de gyoza pas los als de bodempjes na het afbakken vanzelf loslaten.' }
  ],
  ingr: [
    { n: 'gyozavelletje', p: 'gyozavelletjes', q: 30, u: 'st', x: 'rond, uit de toko of diepvries; ontdooid onder een vochtige doek' },
    { n: 'varkensgehakt', q: 300, u: 'g' },
    { n: 'Chinese kool', q: 200, u: 'g', x: 'fijngehakt; of spitskool' },
    { n: 'zout', q: 0.5, u: 'tl', x: 'voor de kool' },
    { n: 'gember', q: 10, u: 'g', x: 'geraspt' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'geraspt' },
    { n: 'lente-ui', p: 'lente-uien', q: 3, u: 'st', x: 'fijngesneden' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'sesamolie', q: 1, u: 'el', x: 'plus 1 el om af te bakken' },
    { n: 'suiker', q: 0.5, u: 'tl' },
    { n: 'witte peper', q: 1, u: 'snuf' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { n: 'maïzena', q: 1, u: 'el', x: 'om het bord te bestuiven' },
    { n: 'water', x: 'om te stomen en de randjes nat te maken' },
    { kop: 'Dipsaus' },
    { n: 'sojasaus', q: 3, u: 'el' },
    { n: 'rijstazijn', q: 2, u: 'el' },
    { n: 'chili-olie', q: 0.5, u: 'tl', x: 'rayu; of een paar druppels sambal' }
  ],
  stappen: [
    { t: 'Meng de fijngehakte kool met het zout en laat 10 minuten staan. Knijp hem daarna in een schone theedoek zo droog mogelijk; anders wordt de vulling waterig.', min: 10 },
    { t: 'Meng gehakt, kool, gember, knoflook, lente-ui, sojasaus, 1 el sesamolie, suiker en peper. Kneed 1 minuut met je hand tot de vulling een beetje plakt; dan blijft hij sappig.' },
    { t: 'Vouwen: leg een velletje op je hand en schep een volle theelepel vulling in het midden. Maak de rand rondom nat met een vinger water. Vouw dicht tot een halve maan en knijp alleen het midden dicht. Leg aan de kant naar je toe aan weerszijden van het midden 3 plooitjes, steeds naar het midden gericht, en druk ze stevig tegen de gladde achterkant. Zet de gyoza met de platte onderkant op een met maïzena bestoven bord en dek af met een doek.' },
    { t: 'Verhit 1 el olie in de koekenpan op middelhoog vuur. Zet de helft van de gyoza met de platte kant naar beneden in een cirkel in de pan. Bak 2 à 3 minuten tot de bodempjes goudbruin zijn.', min: 3 },
    { t: 'Giet 75 ml water in de pan (pas op, het spat) en leg meteen de deksel erop. Laat 4 minuten stomen, tot het water bijna weg is en de velletjes doorschijnend zijn.', min: 4 },
    { t: 'Haal de deksel eraf, druppel ½ el sesamolie langs de rand en bak nog 1 à 2 minuten tot al het water verdampt is en de bodempjes weer knisperen. Leg een bord op de pan en keer in één keer om. Bak de tweede helft net zo.', min: 2 },
    { t: 'Roer sojasaus, rijstazijn en chili-olie door elkaar voor de dipsaus en serveer de gyoza er direct bij.' }
  ],
  tips: ['Invriezen: leg de gevouwen gyoza los van elkaar op een bestoven bakplaat in de vriezer en doe ze daarna in een zak. Bak ze bevroren en stoom ze 2 minuten langer.', 'Gyoza zijn de Japanse neef van de Chinese jiaozi: dunner velletje, meer knoflook en altijd met een gebakken bodem.'],
  alt: ['Vegetarisch: vervang het gehakt door 150 g fijngehakte shiitake en 150 g verkruimelde stevige tofu.', 'Liever gekookt? Kook de gyoza 4 minuten in ruim water tot ze bovendrijven en eet ze met de dipsaus.']
},
{
  id: 'sushi-maki', naam: 'Sushi: maki en uramaki', ook: ['sushi', 'maki', 'california roll', 'sushirijst'],
  vriezer: { zalmfilet: { bevroren: 'Voor sushi is zalm uit de vriezer juist goed: invriezen maakt rauwe vis veiliger. Laat hem langzaam in de koelkast ontdooien, niet in water of de magnetron, en snijd hem als hij nog net een beetje stevig is: dan krijg je strakke reepjes.', inStap: 'net nog een beetje stevig snijden', water: null } },
  keuken: 'Japans', soort: 'Hoofdgerecht',
  tijd: 60, wacht: '30 min afkoelen', pers: 4, niveau: 'Moeilijk', vega: false,
  intro: 'Zelf sushi rollen: dunne maki met zalm of komkommer en uramaki met de rijst aan de buitenkant, zoals de california roll. Je hebt alleen een bamboe matje nodig.',
  gerei: [
    { tool: 'kookpan', tekst: 'Pan met deksel voor de sushirijst' }
  ],
  ingr: [
    { kop: 'Sushirijst' },
    { n: 'sushirijst', q: 400, u: 'g' },
    { n: 'water', q: 480, u: 'ml' },
    { n: 'rijstazijn', q: 5, u: 'el' },
    { n: 'suiker', q: 2, u: 'el' },
    { n: 'zout', q: 1, u: 'tl' },
    { kop: 'Vulling' },
    { n: 'nori', q: 5, u: 'vel', x: 'gehalveerd' },
    { n: 'zalmfilet', q: 200, u: 'g', x: 'sushikwaliteit, zonder vel; of 150 g gerookte zalm' },
    { n: 'komkommer', p: 'komkommers', q: 1, u: 'st' },
    { n: 'avocado', p: 'avocado\'s', q: 1, u: 'st', x: 'rijp maar stevig' },
    { n: 'surimi', q: 150, u: 'g', x: 'krabsticks' },
    { n: 'mayonaise', q: 2, u: 'el', x: 'liefst Japanse (Kewpie)' },
    { n: 'sesamzaad', q: 2, u: 'el', x: 'geroosterd' },
    { kop: 'Erbij' },
    { n: 'sojasaus', q: 4, u: 'el' },
    { n: 'wasabi', q: 1, u: 'tl' },
    { n: 'ingelegde gember', q: 50, u: 'g', x: 'sushigember' }
  ],
  stappen: [
    { t: 'Kook de sushirijst: spoel hem in een zeef onder de koude kraan tot het water helder blijft. Breng hem met 480 ml water aan de kook in de pan met deksel, zet het vuur op de laagste stand en laat 12 minuten garen. Niet roeren en de deksel erop houden.', min: 12 },
    { t: 'Haal de pan van het vuur en laat de rijst 10 minuten nastomen met de deksel erop. Verwarm intussen rijstazijn, suiker en zout tot alles is opgelost (30 seconden in de magnetron of in een steelpannetje).', min: 10 },
    { t: 'Schep de rijst in een brede kom van hout, glas of plastic. Giet de sushi-azijn erover en spatel hem er met snijdende bewegingen door, zonder de korrels te pletten. Laat hem afgedekt met een vochtige doek in 30 minuten afkoelen tot kamertemperatuur.', min: 30 },
    { t: 'Snijd zalm, komkommer (zonder zaadlijst) en avocado in reepjes van 1 cm dik. Halveer de surimi in de lengte en meng met de mayonaise. Wikkel het bamboe matje in vershoudfolie en zet een kommetje water met 1 el rijstazijn klaar voor je handen.' },
    { t: 'Maki: leg een half vel nori met de ruwe kant naar boven op het matje. Verdeel met natte handen ca. 80 g rijst in een dunne laag erover en laat bovenaan 1 cm vrij. Leg een reepje zalm of komkommer over de breedte in het midden. Til het matje aan de onderkant op, rol strak over de vulling tot aan de vrije rand, rol verder en knijp de rol voorzichtig aan.' },
    { t: 'Uramaki: bedek een half vel nori helemaal met ca. 130 g rijst en strooi er sesamzaad over. Keer het vel om, zodat de rijst op de folie ligt. Leg surimi, avocado en komkommer op de nori en rol op zoals bij de maki. De folie zorgt dat de rijst niet aan het matje plakt.' },
    { t: 'Snijd met een scherp, nat mes elke maki in 6 en elke uramaki in 8 stukjes; veeg het mes na elke snee schoon met een natte doek. Serveer met sojasaus, wasabi en gember.' }
  ],
  tips: ['Rauwe vis: koop zalm van sushikwaliteit bij de visboer of toko; die is diepgevroren tegen parasieten. Twijfel je, neem dan gerookte zalm: veilig en net zo lekker.', 'Bewaar sushi niet in de koelkast, dan wordt de rijst hard. Maak hem op de dag dat je hem eet.'],
  alt: ['Vegetarisch: vul de rollen met komkommer, avocado, reepjes paprika en reepjes tamagoyaki (Japanse omelet).']
}
);
