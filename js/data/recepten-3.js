/* Aziatisch: Indonesisch, Thais, Chinees, Japans, Koreaans */
RECEPTEN.push(
{
  id: 'nasi-goreng', naam: 'Nasi goreng', keuken: 'Indonesisch', soort: 'Hoofdgerecht',
  tijd: 30, pers: 4, niveau: 'Makkelijk', vega: false, pit: 1,
  intro: 'Gebakken rijst met kip, ketjap en sambal, met een spiegelei erbovenop.',
  gerei: [
    { tool: 'wok', tekst: 'Wok (32 cm) voor hoog vuur', of: 'Geen wok? Gebruik de grootste koekenpan of hapjespan en bak de rijst in 2 delen.' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de spiegeleieren' }
  ],
  ingr: [
    { n: 'gekookte rijst', q: 750, u: 'g', x: 'koud, liefst van gisteren (ca. 300 g ongekookt)' },
    { n: 'kipfilet', q: 300, u: 'g', x: 'in blokjes' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'gesnipperd' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'prei', p: 'preien', q: 1, u: 'st', x: 'in dunne ringen' },
    { n: 'nasikruiden', q: 2, u: 'el', x: 'droge kruidenmix; of 2 tl ketoembar + 1 tl djinten' },
    { n: 'sambal oelek', q: 1, u: 'tl' },
    { n: 'ketjap manis', q: 4, u: 'el' },
    { n: 'ei', p: 'eieren', q: 4, u: 'st', x: 'voor spiegeleieren' },
    { n: 'zonnebloemolie', q: 3, u: 'el' }
  ],
  stappen: [
    { t: 'Verhit 2 el olie in de wok op hoog vuur. Bak de kip 4 minuten tot hij net gaar is. Schep hem uit de pan.', min: 4 },
    { t: 'Bak ui, knoflook, nasikruiden en sambal 2 minuten in de rest van de olie.', min: 2 },
    { t: 'Voeg de prei toe en roerbak 2 minuten.', min: 2 },
    { t: 'Doe de koude rijst erbij en roerbak 4 à 5 minuten op hoog vuur tot de rijst heet is en een beetje knispert.', min: 5 },
    { t: 'Doe de kip terug, voeg de ketjap toe en schep goed om.' },
    { t: 'Bak in de koekenpan 4 spiegeleieren. Serveer de nasi met een ei erop, met kroepoek en komkommer.', min: 4 }
  ],
  tips: ['Verse rijst wordt plakkerig. Kook hem een dag eerder of spreid hem uit op een bord en zet hem 1 uur in de koelkast.'],
  alt: ['Vegetarisch? Vervang de kip door tempeh of tofu en gebruik vegetarische nasikruiden.']
},
{
  id: 'sate-ajam', naam: 'Saté ajam met pindasaus', gerecht: 'Saté met pindasaus', variant: 'Kip', ook: ['kipsaté', 'satéstokjes', 'saté'], keuken: 'Indonesisch', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '30 min marineren', pers: 4, niveau: 'Makkelijk', vega: false, pit: 1,
  intro: 'Gemarineerde kippendijen met romige pindasaus, gebakken op de grill, in de airfryer of de oven.',
  methodes: [ { id: 'contactgrill', naam: 'Contactgrill' }, { id: 'grillpan', naam: 'Grillpan' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'oven', naam: 'Oven (grill)' }, { id: 'koekenpan', naam: 'Koekenpan' } ],
  gerei: [
    { tool: 'contactgrill', tekst: 'Contactgrill, spiesen passend afgeknipt', m: 'contactgrill' },
    { tool: 'grillpan', tekst: 'Grillpan, goed heet', m: 'grillpan' },
    { tool: 'airfryer', tekst: 'Airfryer, spiesen passend afgeknipt', m: 'airfryer' },
    { tool: 'bakplaat', tekst: 'Bakplaat met rooster en bakpapier', m: 'oven' },
    { tool: 'koekenpan', tekst: 'Grote koekenpan (28 cm); stukjes vlees zonder spies bakken', m: 'koekenpan' },
    { tool: 'kookpan', tekst: 'Steelpan voor de pindasaus' }
  ],
  ingr: [
    { n: 'kippendijfilet', q: 600, u: 'g', x: 'in blokjes van 2 cm' },
    { n: 'satéprikkers', q: 12, u: 'st', x: '30 min geweekt in water' },
    { kop: 'Marinade' },
    { n: 'ketjap manis', q: 3, u: 'el' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'geperst' },
    { n: 'ketoembar', q: 1, u: 'tl' },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { kop: 'Pindasaus' },
    { n: 'pindakaas', q: 150, u: 'g', x: 'met stukjes' },
    { n: 'kokosmelk', q: 200, u: 'ml' },
    { n: 'ketjap manis', q: 2, u: 'el' },
    { n: 'sambal oelek', q: 1, u: 'tl' },
    { n: 'limoen', p: 'limoenen', q: 0.5, u: 'st', x: 'sap' }
  ],
  stappen: [
    { t: 'Meng de marinade, schep de kip erdoor en laat minimaal 30 minuten marineren. Rijg de kip aan de geweekte prikkers.', min: 30 },
    { t: 'Leg de spiesen naast elkaar op de voorverwarmde contactgrill en sluit de deksel. Grill 6 à 8 minuten tot de kip gaar en licht geblakerd is.', m: 'contactgrill', min: 7 },
    { t: 'Verhit de grillpan op hoog vuur tot hij rookt. Grill de spiesen 8 à 10 minuten en draai ze regelmatig.', m: 'grillpan', min: 9 },
    { t: 'Verwarm de airfryer voor op 200 °C. Bak de spiesen in één laag 10 à 12 minuten. Keer ze halverwege.', m: 'airfryer', min: 11 },
    { t: 'Zet de oven op de grillstand (of 230 °C). Leg de spiesen op het rooster boven de bakplaat, 10 cm onder de grill. Grill 12 à 15 minuten en keer halverwege.', m: 'oven', min: 13 },
    { t: 'Bak de kipblokjes in een scheut olie in de koekenpan op hoog vuur 7 à 8 minuten rondom bruin en gaar. Steek ze daarna aan de prikkers.', m: 'koekenpan', min: 8 },
    { t: 'Pindasaus: verwarm alle ingrediënten in de steelpan op laag vuur en roer tot een gladde saus. Te dik? Voeg wat water toe.', min: 5 }
  ],
  tips: ['Kippendij blijft veel sappiger dan kipfilet, juist bij hoge hitte.'],
  alt: ['Geen satéprikkers? Bak de kip los en schep de saus erover; net zo lekker met rijst en atjar.']
},
{
  id: 'sate-babi', variantVan: 'sate-ajam', variant: 'Varkensvlees', naam: 'Saté babi met pindasaus', ook: ['varkenssaté', 'babi saté'],
  intro: 'Gemarineerde blokjes varkensvlees met romige pindasaus, gebakken op de grill, in de airfryer of de oven. De klassieker van de Nederlandse snackbar en barbecue.',
  vervang: {
    kippendijfilet: { n: 'varkenshaas', q: 600, u: 'g', x: 'of procureur (schouder), in blokjes van 2 cm' }
  },
  stappen: [
    { t: 'Meng de marinade, schep het vlees erdoor en laat minimaal 30 minuten marineren. Rijg het vlees aan de geweekte prikkers.', min: 30 },
    { t: 'Leg de spiesen naast elkaar op de voorverwarmde contactgrill en sluit de deksel. Grill 6 à 8 minuten tot het vlees gaar en licht geblakerd is.', m: 'contactgrill', min: 7 },
    { t: 'Verhit de grillpan op hoog vuur tot hij rookt. Grill de spiesen 8 à 10 minuten en draai ze regelmatig.', m: 'grillpan', min: 9 },
    { t: 'Verwarm de airfryer voor op 200 °C. Bak de spiesen in één laag 10 à 12 minuten. Keer ze halverwege.', m: 'airfryer', min: 11 },
    { t: 'Zet de oven op de grillstand (of 230 °C). Leg de spiesen op het rooster boven de bakplaat, 10 cm onder de grill. Grill 12 à 15 minuten en keer halverwege.', m: 'oven', min: 13 },
    { t: 'Bak de blokjes vlees in een scheut olie in de koekenpan op hoog vuur 6 à 8 minuten rondom bruin en gaar. Steek ze daarna aan de prikkers.', m: 'koekenpan', min: 7 },
    { t: 'Pindasaus: verwarm alle ingrediënten in de steelpan op laag vuur en roer tot een gladde saus. Te dik? Voeg wat water toe.', min: 5 }
  ],
  tips: ['Varkenshaas is het malst maar droogt snel uit: haal hem van het vuur zodra hij vanbinnen net niet meer roze is. Procureur is vetter, blijft sappiger en mag iets langer.'],
  alt: ['Geen satéprikkers? Bak het vlees los en schep de saus erover; net zo lekker met rijst en atjar.']
},
{
  id: 'pad-thai', naam: 'Pad thai met garnalen', gerecht: 'Pad thai', variant: 'Garnalen', ook: ['pad thai', 'padthai'], keuken: 'Thais', soort: 'Hoofdgerecht',
  tijd: 30, pers: 2, niveau: 'Gemiddeld', vega: false, pit: 1,
  intro: 'Zoetzure rijstnoedels met garnalen, ei, taugé en geroosterde pinda\'s.',
  gerei: [
    { tool: 'wok', tekst: 'Wok (32 cm) voor hoog vuur', of: 'Geen wok? Gebruik een grote koekenpan en bak per portie.' },
    { tool: 'kookpan', tekst: 'Kom of pan om de noedels te weken' }
  ],
  ingr: [
    { n: 'rijstnoedels', q: 200, u: 'g', x: 'platte, 5 mm breed' },
    { n: 'garnalen', q: 200, u: 'g', x: 'rauw, gepeld' },
    { n: 'ei', p: 'eieren', q: 2, u: 'st' },
    { n: 'taugé', q: 150, u: 'g' },
    { n: 'lente-ui', p: 'lente-uien', q: 3, u: 'st', x: 'in stukjes' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'ongezouten pinda\'s', q: 40, u: 'g', x: 'grof gehakt' },
    { n: 'limoen', p: 'limoenen', q: 1, u: 'st', x: 'in partjes' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { kop: 'Saus' },
    { n: 'vissaus', q: 2, u: 'el' },
    { n: 'tamarindepasta', q: 2, u: 'el', x: 'of 1 el limoensap + 1 el ketchup' },
    { n: 'bruine suiker', q: 1.5, u: 'el' },
    { n: 'chilivlokken', q: 0.5, u: 'tl' }
  ],
  stappen: [
    { t: 'Week de noedels 10 minuten in heet (niet kokend) water tot ze buigzaam maar nog stevig zijn. Giet af.', min: 10 },
    { t: 'Roer de ingrediënten voor de saus door elkaar tot de suiker is opgelost.' },
    { t: 'Verhit de olie in de wok op hoog vuur. Bak knoflook en garnalen 2 minuten tot de garnalen roze zijn.', min: 2 },
    { t: 'Schuif alles naar de rand. Breek de eieren in het midden en roer ze 30 seconden tot ze net gestold zijn.' },
    { t: 'Voeg de noedels en de saus toe. Roerbak 2 minuten tot de saus is opgenomen.', min: 2 },
    { t: 'Schep de taugé en lente-ui erdoor en bak nog 30 seconden. Serveer met pinda\'s en limoenpartjes.' }
  ],
  tips: ['Heb alles klaarstaan voordat je begint: in de wok gaat het heel snel.'],
  alt: ['Vegetarisch? Gebruik tofu in plaats van garnalen en sojasaus in plaats van vissaus.']
},
{
  id: 'pad-thai-kip', variantVan: 'pad-thai', variant: 'Kip', naam: 'Pad thai met kip', ook: ['pad thai kip', 'chicken pad thai'],
  intro: 'Zoetzure rijstnoedels met reepjes kip, ei, taugé en geroosterde pinda\'s.',
  vervang: {
    garnalen: { n: 'kippendijfilet', q: 250, u: 'g', x: 'in dunne reepjes' }
  },
  stappen: [
    { t: 'Week de noedels 10 minuten in heet (niet kokend) water tot ze buigzaam maar nog stevig zijn. Giet af.', min: 10 },
    { t: 'Roer de ingrediënten voor de saus door elkaar tot de suiker is opgelost.' },
    { t: 'Verhit de olie in de wok op hoog vuur. Bak knoflook en kip 3 à 4 minuten tot de kip gaar en licht gebruind is.', min: 4 },
    { t: 'Schuif alles naar de rand. Breek de eieren in het midden en roer ze 30 seconden tot ze net gestold zijn.' },
    { t: 'Voeg de noedels en de saus toe. Roerbak 2 minuten tot de saus is opgenomen.', min: 2 },
    { t: 'Schep de taugé en lente-ui erdoor en bak nog 30 seconden. Serveer met pinda\'s en limoenpartjes.' }
  ],
  alt: ['Vegetarisch? Gebruik tofu in plaats van kip en sojasaus in plaats van vissaus.']
},
{
  id: 'groene-curry', naam: 'Thaise groene curry met kip', keuken: 'Thais', soort: 'Hoofdgerecht',
  tijd: 30, pers: 4, niveau: 'Makkelijk', vega: false, pit: 2,
  intro: 'Geurige curry met kokosmelk, kip, sperziebonen en Thaise basilicum.',
  gerei: [
    { tool: 'hapjespan', tekst: 'Hapjespan of wok (28 à 32 cm)' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'kippendijfilet', q: 500, u: 'g', x: 'in reepjes' },
    { n: 'groene currypasta', q: 3, u: 'el' },
    { n: 'kokosmelk', q: 400, u: 'ml' },
    { n: 'sperziebonen', q: 200, u: 'g', x: 'in stukken' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in reepjes' },
    { n: 'vissaus', q: 1.5, u: 'el' },
    { n: 'bruine suiker', q: 1, u: 'tl' },
    { n: 'limoen', p: 'limoenen', q: 1, u: 'st' },
    { n: 'Thaise basilicum', q: 10, u: 'g', x: 'of gewone basilicum' },
    { n: 'jasmijnrijst', q: 300, u: 'g' }
  ],
  stappen: [
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Schep de dikke laag van de kokosmelk (de room) in de hapjespan. Verhit op middelhoog vuur tot hij gaat borrelen en de olie zich afscheidt.', min: 3 },
    { t: 'Bak de currypasta 1 minuut in de kokosroom tot hij geurt.' },
    { t: 'Voeg de kip toe en bak 3 minuten. Giet de rest van de kokosmelk erbij met de sperziebonen.', min: 3 },
    { t: 'Laat 8 minuten zachtjes koken. Voeg de paprika toe en kook nog 2 minuten.', min: 10 },
    { t: 'Breng op smaak met vissaus, suiker en limoensap. Roer de basilicum erdoor en serveer met de rijst.' }
  ],
  tips: ['Smaakt het te scherp? Voeg extra kokosmelk of 2 el room toe.'],
  alt: ['Vegetarisch? Gebruik tofu of kikkererwten en sojasaus in plaats van vissaus. Controleer de currypasta: veel soorten bevatten garnalenpasta.']
},
{
  id: 'tom-kha-kai', naam: 'Tom kha kai', ook: ['thaise kokossoep'], keuken: 'Thais', soort: 'Soep',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: false, pit: 1,
  intro: 'Romige kokossoep met kip, citroengras en limoen. Fris, zuur en licht pittig.',
  gerei: [ { tool: 'kookpan', tekst: 'Soeppan van 3 liter' } ],
  ingr: [
    { n: 'kipfilet', q: 300, u: 'g', x: 'in dunne reepjes' },
    { n: 'kokosmelk', q: 800, u: 'ml' },
    { n: 'kippenbouillon', q: 400, u: 'ml' },
    { n: 'citroengras', q: 2, u: 'stengel', x: 'gekneusd, in stukken' },
    { n: 'gember', q: 30, u: 'g', x: 'of galangal, in plakjes' },
    { n: 'champignons', q: 250, u: 'g', x: 'in plakjes' },
    { n: 'rode peper', p: 'rode pepers', q: 1, u: 'st' },
    { n: 'vissaus', q: 3, u: 'el' },
    { n: 'limoen', p: 'limoenen', q: 2, u: 'st', x: 'sap' },
    { n: 'verse koriander', q: 10, u: 'g' }
  ],
  stappen: [
    { t: 'Breng kokosmelk, bouillon, citroengras, gember en gehalveerde peper aan de kook. Laat 5 minuten trekken.', min: 5 },
    { t: 'Voeg de kip en champignons toe. Laat 8 minuten zachtjes koken tot de kip gaar is. Laat het niet hard koken, anders schift de kokosmelk.', min: 8 },
    { t: 'Haal de pan van het vuur. Roer vissaus en limoensap erdoor en proef: de soep moet zout, zuur en romig zijn.' },
    { t: 'Serveer met koriander. Het citroengras en de gember eet je niet mee.' }
  ],
  tips: ['Voeg het limoensap altijd pas op het einde toe; gekookt wordt het bitter.'],
  alt: ['Geen citroengras? Gebruik de geraspte schil van 1 citroen.']
},
{
  id: 'kung-pao-kip', naam: 'Kung pao kip', ook: ['kung pao chicken'], keuken: 'Chinees', soort: 'Hoofdgerecht',
  tijd: 25, pers: 4, niveau: 'Gemiddeld', vega: false, pit: 2,
  intro: 'Sichuan-klassieker: krokante kip met pinda\'s, gedroogde pepers en een zoetzure, glanzende saus.',
  gerei: [
    { tool: 'wok', tekst: 'Wok voor hoog vuur', of: 'Geen wok? Gebruik een grote hapjespan en bak de kip in 2 delen.' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'kippendijfilet', q: 500, u: 'g', x: 'in blokjes' },
    { n: 'maïzena', q: 1, u: 'el' },
    { n: 'sojasaus', q: 1, u: 'el', x: 'voor de marinade' },
    { n: 'ongezouten pinda\'s', q: 60, u: 'g' },
    { n: 'gedroogde rode pepers', q: 8, u: 'st', opt: true },
    { n: 'lente-ui', p: 'lente-uien', q: 4, u: 'st', x: 'in stukjes' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'gember', q: 15, u: 'g', x: 'geraspt' },
    { n: 'zonnebloemolie', q: 3, u: 'el' },
    { kop: 'Saus' },
    { n: 'sojasaus', q: 2, u: 'el' },
    { n: 'zwarte rijstazijn', q: 2, u: 'el', x: 'of appelazijn' },
    { n: 'suiker', q: 1, u: 'el' },
    { n: 'maïzena', q: 1, u: 'tl' },
    { n: 'water', q: 3, u: 'el' },
    { n: 'rijst', q: 300, u: 'g' }
  ],
  stappen: [
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Meng de kip met maïzena en 1 el sojasaus. Roer de ingrediënten voor de saus door elkaar.' },
    { t: 'Verhit de olie in de wok op hoog vuur. Bak de kip in 5 minuten goudbruin en gaar. Schep uit de pan.', min: 5 },
    { t: 'Bak de gedroogde pepers en pinda\'s 30 seconden, tot de pepers donkerrood kleuren (niet zwart).' },
    { t: 'Voeg knoflook, gember en de witte delen van de lente-ui toe en roerbak 30 seconden.' },
    { t: 'Doe de kip terug, giet de saus erbij en roerbak 1 minuut tot alles glanst. Garneer met het groen van de lente-ui.' }
  ],
  tips: ['Sichuanpeper (½ tl, gekneusd) geeft het tintelende effect van het origineel.'],
  alt: ['Pinda-allergie? Gebruik cashewnoten of laat de noten weg.']
},
{
  id: 'teriyaki-zalm', naam: 'Teriyaki zalm', keuken: 'Japans', soort: 'Hoofdgerecht',
  tijd: 25, pers: 2, niveau: 'Makkelijk', vega: false,
  intro: 'Zalm met een glanzende, zoet-zoute laklaag, met rijst en broccoli.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'contactgrill', naam: 'Contactgrill' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'oven', naam: 'Oven' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Antiaanbak koekenpan (24 à 28 cm)', m: 'koekenpan' },
    { tool: 'contactgrill', tekst: 'Contactgrill, met een velletje bakpapier voor de saus', m: 'contactgrill' },
    { tool: 'airfryer', tekst: 'Airfryer, mand bekleed met bakpapier', m: 'airfryer' },
    { tool: 'ovenschaal', tekst: 'Kleine ovenschaal of bakplaat met bakpapier', m: 'oven' },
    { tool: 'kookpan', tekst: 'Steelpan voor de teriyakisaus en een pan voor de rijst' }
  ],
  ingr: [
    { n: 'zalmfilet', p: 'zalmfilets', q: 2, u: 'st', x: 'à 125 g' },
    { n: 'sushirijst', q: 150, u: 'g', x: 'of jasmijnrijst' },
    { n: 'broccoli', q: 250, u: 'g', x: 'in roosjes' },
    { n: 'sesamzaad', q: 1, u: 'tl' },
    { kop: 'Teriyakisaus' },
    { n: 'sojasaus', q: 3, u: 'el' },
    { n: 'mirin', q: 2, u: 'el', x: 'of 1 el honing extra' },
    { n: 'honing', q: 1, u: 'el' },
    { n: 'gember', q: 10, u: 'g', x: 'geraspt' },
    { n: 'maïzena', q: 1, u: 'tl', x: 'aangelengd met 2 el water' }
  ],
  stappen: [
    { t: 'Kook de rijst volgens de verpakking. Stoom de broccoli 6 minuten beetgaar, in het stoommandje boven de rijst als je rijstkoker dat kan, of in een vergiet boven een pan kokend water. Stomen is hier de eerste keuze vanwege de smaak: de broccoli blijft knapperiger en smaakvoller dan gekookt. Liever koken? Kook hem dan 4 minuten.', min: 15, stoom: true },
    { t: 'Breng sojasaus, mirin, honing en gember aan de kook in de steelpan. Roer de maïzena erdoor en laat 1 minuut binden tot een stroperige saus.', min: 2 },
    { t: 'Bak de zalm met de velkant naar beneden 4 minuten in 1 el olie op middelhoog vuur. Keer om en bak 2 minuten. Giet de helft van de saus erover en laat 1 minuut glaceren.', m: 'koekenpan', min: 7 },
    { t: 'Leg de zalm met de velkant naar beneden op de voorverwarmde contactgrill en sluit de deksel. Grill 4 à 5 minuten. Leg hem op een bord en bestrijk met de helft van de saus.', m: 'contactgrill', min: 5 },
    { t: 'Bestrijk de zalm met de helft van de saus. Bak in de airfryer 8 à 10 minuten op 180 °C.', m: 'airfryer', min: 9 },
    { t: 'Bestrijk de zalm met de helft van de saus. Bak 12 à 15 minuten in de voorverwarmde oven op 200 °C.', m: 'oven', min: 13 },
    { t: 'Serveer de zalm op de rijst met broccoli, de rest van de saus en sesamzaad.' }
  ],
  tips: ['De zalm is perfect als hij in het midden nog net glazig is; hij gaart na op het bord.'],
  alt: ['Geen zalm? Kipdijen werken ook. Bak ze 5 minuten langer.']
}
);
