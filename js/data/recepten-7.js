/* Indiaas (extra) */
RECEPTEN.push(
{
  id: 'curry-madras', naam: 'Curry madras met rundvlees', keuken: 'Indiaas', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '1½ uur stoven', pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Pittige, diep-rode curry met mals gestoofd rundvlees, chili en tomaat. Een klassieker uit het Indiase restaurant.',
  methodes: [ { id: 'braadpan', naam: 'Braadpan' }, { id: 'oven', naam: 'Oven' }, { id: 'slowcooker', naam: 'Slowcooker' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan (24 à 26 cm) met deksel' },
    { tool: 'slowcooker', tekst: 'Slowcooker (vlees en ui eerst in de pan aanbraden)', m: 'slowcooker' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'runderstoofvlees', q: 700, u: 'g', x: 'riblappen of sucadelappen, in blokjes van 3 cm' },
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'fijngesnipperd' },
    { n: 'knoflook', q: 4, u: 'teen', x: 'geperst' },
    { n: 'gember', q: 25, u: 'g', x: 'geraspt' },
    { n: 'madras-kerriepoeder', q: 3, u: 'el', x: 'of: 2 tl komijn, 2 tl koriander, 1 tl kurkuma, 1 tl garam masala' },
    { n: 'chilipoeder', q: 1.5, u: 'tl', x: 'minder voor milder' },
    { n: 'tomatenpuree', q: 2, u: 'el' },
    { n: 'tomatenblokjes', q: 1, u: 'blik', x: '400 g' },
    { n: 'runderbouillon', q: 300, u: 'ml' },
    { n: 'kokosmelk', q: 100, u: 'ml', opt: true, x: 'maakt hem iets ronder' },
    { n: 'garam masala', q: 1, u: 'tl' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { n: 'zonnebloemolie', q: 3, u: 'el' },
    { n: 'verse koriander', q: 1, u: 'handje' },
    { n: 'basmatirijst', q: 300, u: 'g' }
  ],
  stappen: [
    { t: 'Dep het vlees droog en bestrooi met zout. Verhit 2 el olie in de Dutch oven op hoog vuur en braad het vlees in 2 delen rondom bruin, ca. 4 minuten per portie. Schep uit de pan.', min: 8 },
    { t: 'Zet het vuur op middelhoog. Bak de ui in de rest van de olie 10 minuten tot hij goudbruin is. Schraap de aanbaksels van de bodem los: daar zit de smaak.', min: 10 },
    { t: 'Bak knoflook en gember 1 minuut mee. Voeg kerriepoeder, chilipoeder en tomatenpuree toe en bak nog 1 minuut tot het geurt.', min: 2 },
    { t: 'Doe het vlees terug met de tomaten en de bouillon. Roer goed en breng aan de kook.' },
    { t: 'Deksel erop en laat 1½ uur heel zachtjes stoven op het kleinste pit, tot het vlees met een vork uit elkaar valt. Roer af en toe.', m: 'braadpan', min: 90 },
    { t: 'Zet de pan met deksel 2 uur in een voorverwarmde oven op 160 °C. Kijk na 1½ uur of er genoeg vocht in zit.', m: 'oven', min: 120 },
    { t: 'Doe alles over in de slowcooker en gaar 7 à 8 uur op LOW of 4 uur op HIGH. Gebruik 200 ml bouillon.', m: 'slowcooker', min: 240 },
    { t: 'Kook de rijst volgens de verpakking.', min: 12 },
    { t: 'Roer garam masala, citroensap en eventueel de kokosmelk door de curry. Laat 5 minuten zonder deksel inkoken tot de saus dik is. Breng op smaak met zout en bestrooi met koriander.', min: 5 }
  ],
  tips: ['Liever met kip? Kijk bij kip madras met kipfilet, een paar bladzijden verder.', 'Lekker met naan en een schepje yoghurt om de scherpte te temperen.'],
  alt: ['Geen madras-kerrie? Gebruik gewone kerrie en verdubbel de chilipoeder.']
},
{
  id: 'kip-madras', naam: 'Kip madras met kipfilet', keuken: 'Indiaas', soort: 'Hoofdgerecht',
  tijd: 45, wacht: '15 min marineren', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Pittige, diep-rode madras met sappige stukjes kipfilet in een saus van tomaat, chili en geroosterde specerijen.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan (24 à 26 cm)' },
    { tool: 'kookpan', tekst: 'Pan met deksel voor de rijst' }
  ],
  ingr: [
    { n: 'kipfilet', q: 600, u: 'g', x: 'in blokjes van 3 cm' },
    { n: 'kurkuma', q: 0.5, u: 'tl', x: 'voor de kip' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'sap; de helft voor de kip' },
    { kop: 'Madrassaus' },
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'fijngesnipperd' },
    { n: 'knoflook', q: 4, u: 'teen', x: 'geperst' },
    { n: 'gember', q: 25, u: 'g', x: 'geraspt' },
    { n: 'madras-kerriepoeder', q: 3, u: 'el', x: 'of: 2 tl komijn, 2 tl koriander, 1 tl kurkuma, 1 tl garam masala' },
    { n: 'chilipoeder', q: 1.5, u: 'tl', x: 'Kashmiri voor de kleur; minder voor milder' },
    { n: 'gedroogde rode pepers', q: 2, u: 'st', opt: true },
    { n: 'tomatenpuree', q: 2, u: 'el' },
    { n: 'tomatenblokjes', q: 1, u: 'blik', x: '400 g' },
    { n: 'kippenbouillon', q: 200, u: 'ml' },
    { n: 'kokosmelk', q: 100, u: 'ml', opt: true, x: 'maakt hem iets ronder' },
    { n: 'garam masala', q: 1, u: 'tl' },
    { n: 'zonnebloemolie', q: 3, u: 'el' },
    { n: 'verse koriander', q: 1, u: 'handje' },
    { n: 'basmatirijst', q: 300, u: 'g' }
  ],
  stappen: [
    { t: 'Meng de kip met de kurkuma, een halve theelepel zout en het sap van een halve citroen. Laat 15 minuten staan.', min: 15 },
    { t: 'Kook de rijst volgens de verpakking.', min: 12 },
    { t: 'Verhit 1 el olie in de Dutch oven op hoog vuur. Bak de kip in 2 porties 2 à 3 minuten tot hij rondom wit en lichtbruin is. Hij hoeft nog niet gaar. Schep uit de pan.', min: 5 },
    { t: 'Zet het vuur op middelhoog. Bak de ui in de rest van de olie 10 minuten tot hij goudbruin is. Schraap de aanbaksels van de bodem los: daar zit de smaak.', min: 10 },
    { t: 'Bak knoflook, gember, kerriepoeder, chilipoeder en de gedroogde pepers 1 minuut tot het geurt. Roer de tomatenpuree erdoor en bak nog 1 minuut.', min: 2 },
    { t: 'Voeg de tomaten en de bouillon toe. Laat zonder deksel 10 minuten pruttelen tot een dikke saus.', min: 10 },
    { t: 'Doe de kip met het vocht van het bord terug in de saus. Laat 8 à 10 minuten zachtjes garen, tot het grootste stuk vanbinnen niet meer roze is. Niet langer: kipfilet wordt snel droog.', min: 9 },
    { t: 'Roer garam masala, eventueel de kokosmelk en de rest van het citroensap erdoor. Breng op smaak met zout en bestrooi met koriander. Serveer met de rijst.' }
  ],
  tips: ['De kip gaart in de warme saus nog even na. Haal de pan dus van het vuur zodra het grootste stukje net gaar is.', 'Liever nog sappiger? Kippendijfilet mag 15 minuten in de saus garen.'],
  alt: ['Geen madras-kerrie? Gebruik gewone kerrie en verdubbel de chilipoeder.', 'Zonder Dutch oven: een hapjespan of grote koekenpan met hoge rand werkt ook.']
},
{
  id: 'chicken-tikka-masala', naam: 'Chicken tikka masala', keuken: 'Indiaas', soort: 'Hoofdgerecht',
  tijd: 45, wacht: '1 uur marineren', pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Geroosterde stukjes gemarineerde kip in een romige, licht rokerige tomatensaus.',
  methodes: [ { id: 'airfryer', naam: 'Airfryer' }, { id: 'oven', naam: 'Oven (grill)' }, { id: 'koekenpan', naam: 'Koekenpan' } ],
  gerei: [
    { tool: 'airfryer', tekst: 'Airfryer om de kip te roosteren', m: 'airfryer' },
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier, oven op grillstand', m: 'oven' },
    { tool: 'koekenpan', tekst: 'Grote koekenpan, goed heet', m: 'koekenpan' },
    { tool: 'hapjespan', tekst: 'Hapjespan of braadpan (26 cm) voor de saus' },
    { tool: 'staafmixer', tekst: 'Staafmixer voor een gladde saus', of: 'Geen staafmixer? Gebruik passata; de saus wordt dan vanzelf glad.' }
  ],
  ingr: [
    { n: 'kipfilet', q: 700, u: 'g', x: 'in stukken van 3 cm' },
    { kop: 'Tikka-marinade' },
    { n: 'Griekse yoghurt', q: 150, u: 'g' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { n: 'garam masala', q: 2, u: 'tl' },
    { n: 'gerookt paprikapoeder', q: 2, u: 'tl' },
    { n: 'komijn', q: 1, u: 'tl' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { kop: 'Masala-saus' },
    { n: 'boter', q: 30, u: 'g' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'groene paprika', p: 'groene paprika\'s', q: 1, u: 'st', x: 'in blokjes' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'gember', q: 20, u: 'g' },
    { n: 'garam masala', q: 2, u: 'tl' },
    { n: 'chilipoeder', q: 1, u: 'tl' },
    { n: 'passata', q: 400, u: 'ml' },
    { n: 'kookroom', q: 150, u: 'ml' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'basmatirijst', q: 300, u: 'g' }
  ],
  stappen: [
    { t: 'Meng de kip met alle ingrediënten van de marinade en een theelepel zout. Laat minimaal 1 uur marineren in de koelkast.', min: 60 },
    { t: 'Bak de kip in de airfryer 12 à 14 minuten op 200 °C tot de randjes geblakerd zijn. Schud halverwege.', m: 'airfryer', min: 13 },
    { t: 'Spreid de kip uit op de bakplaat en gril 12 minuten bovenin de oven. Keer halverwege.', m: 'oven', min: 12 },
    { t: 'Verhit de koekenpan op hoog vuur met een scheut olie. Bak de kip in 2 porties 5 minuten tot hij bruin is.', m: 'koekenpan', min: 10 },
    { t: 'Kook de rijst volgens de verpakking.', min: 12 },
    { t: 'Smelt de boter in de hapjespan. Bak ui en paprika 8 minuten zacht. Bak knoflook, gember en specerijen 1 minuut mee.', min: 9 },
    { t: 'Voeg passata en suiker toe en laat 10 minuten pruttelen. Pureer met de staafmixer.', min: 10 },
    { t: 'Roer de room erdoor, voeg de kip toe en laat 5 minuten zachtjes doorwarmen. Breng op smaak met zout.', min: 5 }
  ],
  tips: ['Het verschil met butter chicken: tikka masala heeft meer paprika en ui, en een rokerige smaak van de geblakerde kip.'],
  alt: ['Geen Griekse yoghurt? Gewone volle yoghurt werkt ook, laat hem dan 10 minuten uitlekken in een zeef.']
},
{
  id: 'kip-korma', naam: 'Kip korma', keuken: 'Indiaas', soort: 'Hoofdgerecht',
  tijd: 40, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Milde, romige curry met cashewnoten, yoghurt en kardemom. Ook lekker voor wie niet van pittig houdt.',
  gerei: [
    { tool: 'hapjespan', tekst: 'Hapjespan of braadpan (26 cm) met deksel' },
    { tool: 'staafmixer', tekst: 'Staafmixer of hakmolen voor de cashewpasta', of: 'Geen staafmixer? Gebruik 50 g gemalen amandelen in plaats van cashews.' }
  ],
  ingr: [
    { n: 'kippendijfilet', q: 600, u: 'g', x: 'in stukken' },
    { n: 'ongezouten cashewnoten', q: 60, u: 'g', x: '15 min geweekt in heet water' },
    { n: 'ui', p: 'uien', q: 2, u: 'st' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'gember', q: 20, u: 'g' },
    { n: 'boter', q: 30, u: 'g', x: 'of ghee' },
    { n: 'kardemompeulen', q: 4, u: 'st', x: 'gekneusd' },
    { n: 'kaneelstokje', p: 'kaneelstokjes', q: 1, u: 'st' },
    { n: 'garam masala', q: 2, u: 'tl' },
    { n: 'kurkuma', q: 0.5, u: 'tl' },
    { n: 'volle yoghurt', q: 150, u: 'g' },
    { n: 'kookroom', q: 150, u: 'ml' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'geschaafde amandelen', q: 20, u: 'g', opt: true },
    { n: 'basmatirijst', q: 300, u: 'g' }
  ],
  stappen: [
    { t: 'Pureer de uitgelekte cashews met 100 ml water tot een gladde pasta.' },
    { t: 'Smelt de boter in de pan op middelhoog vuur. Bak kardemom en kaneel 30 seconden. Fruit de ui 8 minuten zacht, maar laat hem niet bruin worden.', min: 8 },
    { t: 'Voeg knoflook, gember, garam masala en kurkuma toe en bak 1 minuut.' },
    { t: 'Doe de kip erbij en bak 4 minuten tot hij rondom wit is.', min: 4 },
    { t: 'Zet het vuur laag. Roer de yoghurt er lepel voor lepel door, dan schift hij niet. Voeg cashewpasta, room, suiker, zout en 100 ml water toe.' },
    { t: 'Laat met de deksel erop 15 minuten zachtjes garen. Kook intussen de rijst.', min: 15 },
    { t: 'Vis het kaneelstokje eruit. Bestrooi met geroosterde amandelen.' }
  ],
  tips: ['Te dik? Een scheutje water of melk. Te flauw? Een kneepje citroen en een snuf zout.'],
  alt: ['Vegetarisch? Vervang de kip door bloemkoolroosjes en kikkererwten; laat ze 20 minuten garen.']
},
{
  id: 'kip-biryani', naam: 'Kip biryani', keuken: 'Indiaas', soort: 'Hoofdgerecht',
  tijd: 60, wacht: '1 uur marineren', pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Laagjes geurige basmatirijst en gekruide kip, langzaam gegaard onder de deksel. Ideaal voor een Dutch oven.',
  methodes: [ { id: 'braadpan', naam: 'Op het vuur' }, { id: 'oven', naam: 'Oven' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan (24 à 26 cm) met goed sluitende deksel' },
    { tool: 'kookpan', tekst: 'Grote kookpan om de rijst voor te koken' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de krokante uien' }
  ],
  ingr: [
    { n: 'kippendijfilet', q: 700, u: 'g', x: 'in grote stukken' },
    { n: 'basmatirijst', q: 400, u: 'g', x: '30 min geweekt' },
    { kop: 'Marinade' },
    { n: 'volle yoghurt', q: 200, u: 'g' },
    { n: 'biryani-kruiden', q: 2, u: 'el', x: 'of 2 tl garam masala, 1 tl komijn, 1 tl chilipoeder, ½ tl kurkuma' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'gember', q: 20, u: 'g' },
    { n: 'groene peper', p: 'groene pepers', q: 1, u: 'st' },
    { kop: 'Verder' },
    { n: 'ui', p: 'uien', q: 3, u: 'st', x: 'in dunne halve ringen' },
    { n: 'zonnebloemolie', q: 6, u: 'el' },
    { n: 'boter', q: 30, u: 'g', x: 'gesmolten' },
    { n: 'kardemompeulen', q: 4, u: 'st' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 2, u: 'st' },
    { n: 'saffraan', q: 1, u: 'snuf', x: 'geweekt in 3 el warme melk' },
    { n: 'verse munt', q: 1, u: 'handje' },
    { n: 'verse koriander', q: 1, u: 'handje' }
  ],
  stappen: [
    { t: 'Meng de kip met de marinade en een theelepel zout. Laat minimaal 1 uur marineren.', min: 60 },
    { t: 'Bak de uien in de olie in de koekenpan in 15 à 20 minuten donker goudbruin en krokant. Laat uitlekken op keukenpapier; bewaar de olie.', min: 18 },
    { t: 'Breng een grote pan water met een flinke schep zout, de kardemom en de laurier aan de kook. Kook de rijst 5 minuten: hij moet nog een harde kern hebben. Giet af.', min: 5 },
    { t: 'Doe 2 el uienolie in de Dutch oven. Leg de kip met marinade erin en de helft van de uien, munt en koriander erop.' },
    { t: 'Schep de rijst erover. Besprenkel met saffraanmelk, gesmolten boter en de rest van de uien en kruiden.' },
    { t: 'Leg een vel aluminiumfolie op de pan en druk de deksel erop. Zet 5 minuten op middelhoog vuur, daarna 30 minuten op het allerlaagste pit.', m: 'braadpan', min: 35 },
    { t: 'Leg een vel aluminiumfolie op de pan en druk de deksel erop. Zet 5 minuten op middelhoog vuur en daarna 35 minuten in een voorverwarmde oven op 170 °C.', m: 'oven', min: 40 },
    { t: 'Laat 10 minuten rusten zonder de deksel op te tillen. Schep van onder naar boven op, zodat je rijst én kip krijgt.', min: 10 }
  ],
  tips: ['Een raita van yoghurt, komkommer en munt hoort erbij.'],
  alt: ['Geen saffraan? Een snuf kurkuma in de melk geeft ook mooie gele strepen.']
},
{
  id: 'saag-paneer', naam: 'Saag paneer', ook: ['palak paneer', 'spinaziecurry'], keuken: 'Indiaas', soort: 'Hoofdgerecht',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Romige, gekruide spinazie met goudbruin gebakken blokjes paneer.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan voor de paneer' },
    { tool: 'hapjespan', tekst: 'Hapjespan of braadpan voor de spinazie' },
    { tool: 'staafmixer', tekst: 'Staafmixer', of: 'Geen staafmixer? Hak de spinazie heel fijn met een mes; de saus wordt grover maar net zo lekker.' }
  ],
  ingr: [
    { n: 'paneer', q: 400, u: 'g', x: 'in blokjes, of halloumi' },
    { n: 'spinazie', q: 600, u: 'g', x: 'vers of diepvries (ontdooid)' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'gember', q: 20, u: 'g' },
    { n: 'groene peper', p: 'groene pepers', q: 1, u: 'st' },
    { n: 'komijnzaad', q: 1, u: 'tl' },
    { n: 'garam masala', q: 1, u: 'tl' },
    { n: 'kurkuma', q: 0.5, u: 'tl' },
    { n: 'kookroom', q: 100, u: 'ml' },
    { n: 'boter', q: 30, u: 'g', x: 'of ghee' },
    { n: 'zonnebloemolie', q: 2, u: 'el' }
  ],
  stappen: [
    { t: 'Bak de paneer in de olie in de koekenpan op middelhoog vuur 5 minuten rondom goudbruin. Bestrooi met zout en zet apart.', min: 5 },
    { t: 'Slink de spinazie 2 minuten in de hapjespan met een scheutje water. Laat afkoelen en pureer grof met de staafmixer.', min: 2 },
    { t: 'Smelt de boter in de hapjespan. Bak het komijnzaad 30 seconden. Fruit de ui 6 minuten.', min: 6 },
    { t: 'Bak knoflook, gember, peper, garam masala en kurkuma 1 minuut mee.' },
    { t: 'Voeg de spinazie en de room toe en laat 5 minuten zachtjes koken. Breng op smaak met zout.', min: 5 },
    { t: 'Schep de paneer erdoor en laat 2 minuten meewarmen. Lekker met naan of rijst.' }
  ],
  tips: ['Paneer vind je bij de toko of de grotere supermarkt. Halloumi is een goede vervanger.'],
  alt: ['Vegan? Gebruik stevige tofu in plaats van paneer en kokosmelk in plaats van room.']
},
{
  id: 'tandoori-kip', naam: 'Tandoori kip', keuken: 'Indiaas', soort: 'Hoofdgerecht',
  tijd: 40, wacht: '4 uur marineren', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Kippenpoten in een felrode yoghurtmarinade, geroosterd tot ze geblakerd en sappig zijn.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'grillpan', naam: 'Grillpan' } ],
  gerei: [
    { tool: 'bakplaat', tekst: 'Bakplaat met rooster en bakpapier', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer', m: 'airfryer' },
    { tool: 'grillpan', tekst: 'Grillpan of barbecue', m: 'grillpan' }
  ],
  ingr: [
    { n: 'kippenpoten', q: 1200, u: 'g', x: 'drumsticks en/of dijen met bot, ingesneden' },
    { n: 'volle yoghurt', q: 200, u: 'g' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'sap' },
    { n: 'tandoori masala', q: 2, u: 'el', x: 'of 2 tl paprikapoeder, 1 tl garam masala, 1 tl komijn, 1 tl chilipoeder' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'gember', q: 20, u: 'g' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { n: 'rode ui', p: 'rode uien', q: 1, u: 'st', x: 'in ringen, om te serveren' }
  ],
  stappen: [
    { t: 'Snijd elk stuk kip 2 à 3 keer diep in tot op het bot. Wrijf in met citroensap en zout en laat 15 minuten staan.', min: 15 },
    { t: 'Meng yoghurt, tandoori masala, knoflook, gember en olie. Smeer de kip er goed mee in, ook in de sneden. Laat minimaal 4 uur, liefst een nacht, marineren.', min: 240 },
    { t: 'Leg de kip op het rooster boven de bakplaat. Rooster 35 à 40 minuten in een voorverwarmde oven op 220 °C. Zet de laatste 5 minuten de grill aan voor zwarte randjes.', m: 'oven', min: 40 },
    { t: 'Bak de kip in de airfryer 22 à 25 minuten op 190 °C. Keer halverwege. Bak in 2 rondes als het niet in één laag past.', m: 'airfryer', min: 24 },
    { t: 'Gril de kip op middelhoog vuur 25 à 30 minuten met de deksel of folie erop. Keer elke 5 minuten.', m: 'grillpan', min: 28 },
    { t: 'De kip is gaar als het vocht helder is bij het bot (74 °C). Serveer met rode ui, citroen en naan.' }
  ],
  tips: ['Langer marineren maakt de kip malser: de yoghurt werkt als een natuurlijke vleesvertrager.'],
  alt: ['Liever kipfilet? Snijd in stukken, marineer 1 uur en halveer de baktijd.']
},
{
  id: 'naan', naam: 'Naanbrood', keuken: 'Indiaas', soort: 'Salade & bijgerecht',
  tijd: 30, wacht: '1 uur rijzen', pers: 6, niveau: 'Gemiddeld', vega: true,
  intro: 'Zachte, luchtige platte broden met knoflookboter. Bakt het best in een gloeiend hete pan.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Gietijzeren of dikke RVS koekenpan (28 cm) met deksel', m: 'koekenpan' },
    { tool: 'bakplaat', tekst: 'Bakplaat of pizzasteen', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer', m: 'airfryer' }
  ],
  ingr: [
    { n: 'bloem', q: 300, u: 'g' },
    { n: 'gedroogde gist', q: 5, u: 'g' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'volle yoghurt', q: 125, u: 'g' },
    { n: 'lauw water', q: 100, u: 'ml' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { kop: 'Knoflookboter' },
    { n: 'boter', q: 40, u: 'g', x: 'gesmolten' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'geperst' },
    { n: 'verse koriander', q: 1, u: 'el', x: 'fijngehakt' }
  ],
  stappen: [
    { t: 'Meng bloem, gist, suiker en zout. Voeg yoghurt, water en olie toe en kneed 5 minuten tot een zacht, iets plakkerig deeg.', min: 5 },
    { t: 'Laat afgedekt 1 uur rijzen tot het verdubbeld is.', min: 60 },
    { t: 'Verdeel in 6 bolletjes en rol ze uit tot ovale lappen van 5 mm dik.' },
    { t: 'Verhit de droge pan op hoog vuur tot hij echt heet is. Leg een naan erin, deksel erop, en bak 1 à 2 minuten tot hij opbolt en de onderkant zwarte vlekken heeft. Keer en bak nog 1 minuut.', m: 'koekenpan', min: 3 },
    { t: 'Zet de bakplaat in de oven en verwarm voor op de hoogste stand. Bak de naans 2 à 3 tegelijk 3 à 4 minuten tot ze opbollen.', m: 'oven', min: 4 },
    { t: 'Bak de naans één voor één 4 à 5 minuten in de airfryer op 200 °C. Keer halverwege.', m: 'airfryer', min: 5 },
    { t: 'Meng boter, knoflook en koriander en bestrijk de warme naans direct.' }
  ],
  tips: ['Houd de gebakken naans warm in een schone theedoek, dan blijven ze zacht.'],
  alt: ['Kaasnaan: leg een plakje kaas op de helft van het deeg, klap dicht en rol opnieuw uit.']
},
{
  id: 'aloo-gobi', naam: 'Aloo gobi', keuken: 'Indiaas', soort: 'Hoofdgerecht',
  tijd: 40, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Droge curry van aardappel en bloemkool met kurkuma, komijn en verse koriander. Volledig plantaardig.',
  methodes: [ { id: 'hapjespan', naam: 'Pan' }, { id: 'oven', naam: 'Oven' } ],
  gerei: [
    { tool: 'hapjespan', tekst: 'Hapjespan of braadpan (28 cm) met deksel', m: 'hapjespan' },
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier', m: 'oven' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de masala', m: 'oven' }
  ],
  ingr: [
    { n: 'bloemkool', p: 'bloemkolen', q: 1, u: 'st', x: 'in kleine roosjes' },
    { n: 'vastkokende aardappelen', q: 500, u: 'g', x: 'in blokjes van 2 cm' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'tomaat', p: 'tomaten', q: 2, u: 'st', x: 'in blokjes' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'gember', q: 15, u: 'g' },
    { n: 'komijnzaad', q: 1, u: 'tl' },
    { n: 'kurkuma', q: 1, u: 'tl' },
    { n: 'gemalen koriander', q: 2, u: 'tl' },
    { n: 'garam masala', q: 1, u: 'tl' },
    { n: 'chilipoeder', q: 0.5, u: 'tl' },
    { n: 'zonnebloemolie', q: 4, u: 'el' },
    { n: 'verse koriander', q: 1, u: 'handje' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st' }
  ],
  stappen: [
    { t: 'Verhit de olie in de pan en bak het komijnzaad 30 seconden. Bak de ui 5 minuten.', m: 'hapjespan', min: 5 },
    { t: 'Voeg knoflook, gember en alle gemalen specerijen toe en bak 1 minuut. Doe de aardappel en bloemkool erbij met een theelepel zout en schep goed om.', m: 'hapjespan' },
    { t: 'Voeg de tomaat en 4 el water toe. Deksel erop en laat 15 minuten op laag vuur garen. Schep af en toe om.', m: 'hapjespan', min: 15 },
    { t: 'Haal de deksel eraf en bak nog 5 minuten op middelhoog vuur, zodat de groenten wat kleur krijgen.', m: 'hapjespan', min: 5 },
    { t: 'Meng bloemkool en aardappel met 3 el olie, kurkuma, koriander, chili en zout. Rooster 30 minuten op de bakplaat in een voorverwarmde oven op 210 °C. Schep halverwege om.', m: 'oven', min: 30 },
    { t: 'Bak intussen in de koekenpan komijnzaad, ui, knoflook, gember en tomaat 8 minuten in 1 el olie tot een dikke masala. Schep de geroosterde groenten erdoor met de garam masala.', m: 'oven', min: 8 },
    { t: 'Bestrooi met koriander en besprenkel met citroensap.' }
  ],
  tips: ['Lekker als bijgerecht bij een curry, of als hoofdgerecht met naan en yoghurt.'],
  alt: ['Geen bloemkool? Broccoli werkt ook; gaar hem dan 5 minuten korter.']
}
);
