/* Brood zonder oven: platbrood uit de pan, broodjes uit de airfryer, arepas en gestoomde bao.
   Van makkelijk (platbrood met yoghurt, tortilla's) naar moeilijk (bagels, gua bao). */
RECEPTEN.push(
{
  id: 'yoghurt-platbrood', toegevoegd: '2026-10-25', naam: 'Snel platbrood met yoghurt',
  ook: ['platbrood', 'plat brood', 'flatbread', 'yoghurtbrood', 'brood zonder gist', 'snel brood', '2 ingrediënten brood'],
  keuken: 'Midden-Oosters', soort: 'Brood',
  tijd: 25, pers: 6, stuks: 'platbroden', niveau: 'Makkelijk', vega: true,
  intro: 'Het makkelijkste brood dat er is: zelfrijzend bakmeel en Griekse yoghurt, zonder gist en zonder rijzen. In een kwartier staan er zachte, licht geblakerde platbroden op tafel. Lekker bij curry, soep, hummus of als wrap.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'contactgrill', naam: 'OptiGrill' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan (28 cm), het liefst gietijzer of RVS', m: 'koekenpan' },
    { tool: 'contactgrill', tekst: 'OptiGrill met de gewone grillplaten', m: 'contactgrill' }
  ],
  ingr: [
    { n: 'zelfrijzend bakmeel', q: 250, u: 'g', x: 'of 250 g bloem met 2½ tl bakpoeder' },
    { n: 'Griekse yoghurt', q: 250, u: 'g', x: 'volle (10% vet)' },
    { n: 'zout', q: 0.5, u: 'tl' },
    { n: 'olijfolie', q: 1, u: 'el' },
    { kop: 'Knoflookboter' },
    { n: 'boter', q: 30, u: 'g', x: 'gesmolten' },
    { n: 'knoflook', q: 1, u: 'teen', x: 'geperst' },
    { n: 'verse peterselie', q: 1, u: 'el', x: 'fijngehakt', opt: true }
  ],
  stappen: [
    { t: 'Meng bakmeel, zout en olie in een kom. Roer de yoghurt erdoor en kneed 2 minuten tot een zacht, soepel deeg. Plakt het te veel, strooi er dan een lepel bakmeel bij.', min: 2 },
    { t: 'Verdeel het deeg in 6 stukken en rol ze op een met bakmeel bestoven aanrecht uit tot ronde lappen van 3 à 4 mm dik.' },
    { t: 'Verhit de droge pan op middelhoog vuur. Bak een platbrood 1½ à 2 minuten tot het opbolt en de onderkant bruine vlekken heeft. Keer en bak nog 1 minuut.', m: 'koekenpan', min: 3 },
    { t: 'Zet de OptiGrill op handmatig, op de hoogste stand (rood), en laat hem voorverwarmen. Leg 1 of 2 platbroden op de plaat, klap dicht en bak ze 2 à 3 minuten tot ze bruine strepen hebben. Je hoeft ze niet te keren.', m: 'contactgrill', min: 3 },
    { t: 'Meng boter, knoflook en peterselie en bestrijk de warme platbroden meteen. Leg ze tot het eten in een schone theedoek, dan blijven ze zacht.' }
  ],
  tips: ['Het deeg kun je een dag van tevoren maken: goed ingepakt in de koelkast. Gebakken platbroden kun je invriezen; warm ze 1 minuut op in een droge pan.'],
  alt: ['Met kaas: leg een plak kaas op de helft van het uitgerolde deeg, klap dicht, rol nog eens uit en bak zoals beschreven.', 'Zonder knoflook: bestrijk met olijfolie en strooi er za\'atar of gedroogde oregano over.'],
  bij: ['hummus', 'dal', 'souvlaki-tzatziki']
},
{
  id: 'bloem-tortillas', toegevoegd: '2026-10-25', naam: 'Zachte tortilla\'s (wraps) van bloem',
  ook: ['tortilla', 'tortillas', 'wraps', 'wrap', 'zelf wraps maken', 'flour tortillas', 'tortilla de harina', 'platbrood'],
  keuken: 'Mexicaans', soort: 'Brood',
  tijd: 40, wacht: '30 minuten rusten', pers: 8, stuks: 'tortilla\'s', niveau: 'Makkelijk', vega: true,
  intro: 'Zelfgemaakte wraps zijn veel zachter en smaakvoller dan die uit de winkel, en je hebt alleen bloem, olie, zout en heet water nodig. Voor taco\'s, burrito\'s, fajitas of quesadilla\'s.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Droge koekenpan (28 cm), het liefst gietijzer of RVS' }
  ],
  ingr: [
    { n: 'bloem', q: 300, u: 'g', x: 'tarwebloem' },
    { n: 'bakpoeder', q: 1, u: 'tl' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'zonnebloemolie', q: 60, u: 'ml', x: 'of 50 g gesmolten boter' },
    { n: 'water', q: 175, u: 'ml', x: 'heet, maar je moet er een vinger in kunnen houden' }
  ],
  stappen: [
    { t: 'Meng bloem, bakpoeder en zout. Roer de olie en het hete water erdoor met een vork en kneed het 3 minuten tot een glad, zacht deeg.', min: 3 },
    { t: 'Verdeel het deeg in 8 balletjes. Leg ze onder een vochtige theedoek en laat ze 30 minuten rusten. Dan trekt het deeg niet meer terug als je het uitrolt.', min: 30 },
    { t: 'Rol elk balletje op een licht bebloemd aanrecht uit tot een dunne ronde lap van ongeveer 20 cm. Draai de lap steeds een kwartslag, dan blijft hij rond.' },
    { t: 'Verhit de droge pan op middelhoog vuur. Bak een tortilla 30 à 45 seconden tot er bubbels op komen, keer en bak nog 30 seconden. Hij moet lichtbruine vlekjes hebben, maar zacht blijven.', min: 2 },
    { t: 'Leg de gebakken tortilla\'s op elkaar in een schone theedoek. Door de stoom worden ze extra soepel.' }
  ],
  tips: ['Te lang bakken maakt ze stijf: haal ze uit de pan zodra ze vlekjes hebben. Afgekoeld in een diepvrieszak blijven ze 2 dagen goed, en ze kunnen de vriezer in met bakpapier ertussen.'],
  alt: ['Volkoren: vervang de helft van de bloem door volkorenmeel en gebruik 15 ml extra water.'],
  bij: ['tacos', 'chili-con-carne', 'salsa-fresca']
},
{
  id: 'arepas', toegevoegd: '2026-10-25', naam: 'Arepas met kip en avocado (reina pepiada)', gerecht: 'Arepas', variant: 'Kip en avocado',
  ook: ['arepa', 'arepas', 'reina pepiada', 'Venezolaans', 'Colombiaans', 'maïsbroodjes', 'maisbroodjes', 'glutenvrij brood'],
  keuken: 'Zuid-Amerikaans', soort: 'Brood',
  tijd: 45, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Arepas zijn ronde broodjes van maïsmeel uit Venezuela en Colombia: krokant van buiten, zacht en stomend van binnen. Je snijdt ze open als een pitabroodje en vult ze. De bekendste vulling is reina pepiada: romige kipsalade met avocado. Het deeg is alleen maïsmeel, water en zout, en het is vanzelf glutenvrij.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan met deksel (28 cm), het liefst antiaanbak of goed ingevet gietijzer', m: 'koekenpan' },
    { tool: 'airfryer', tekst: 'Airfryer', m: 'airfryer' },
    { tool: 'kookpan', tekst: 'Kookpan voor de kip' }
  ],
  ingr: [
    { kop: 'Arepas (8 stuks)' },
    { n: 'voorgekookt maïsmeel', q: 300, u: 'g', x: 'masarepa, bijvoorbeeld P.A.N. wit; geen polenta of maïzena' },
    { n: 'water', q: 400, u: 'ml', x: 'lauw' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { kop: 'Reina pepiada' },
    { n: 'kipfilet', q: 400, u: 'g' },
    { n: 'laurierblad', p: 'laurierbladen', q: 1, u: 'st' },
    { n: 'avocado', p: 'avocado\'s', q: 2, u: 'st', x: 'rijp' },
    { n: 'mayonaise', q: 3, u: 'el' },
    { n: 'rode ui', p: 'rode uien', q: 0.5, u: 'st', x: 'heel fijn gesnipperd' },
    { n: 'knoflook', q: 1, u: 'teen', x: 'geperst' },
    { n: 'limoen', p: 'limoenen', q: 1, u: 'st', x: 'het sap' },
    { n: 'verse koriander', q: 2, u: 'el', x: 'fijngehakt' },
    { n: 'zout' },
    { n: 'zwarte peper' }
  ],
  stappen: [
    { t: 'Leg de kipfilet met het laurierblad en een theelepel zout in de kookpan, zet hem net onder water en breng aan de kook. Laat 15 minuten zachtjes trekken met de deksel op de pan, en laat de kip daarna in het vocht wat afkoelen.', min: 15 },
    { t: 'Doe het water met het zout in een kom en strooi het maïsmeel er al roerend in. Kneed het met je handen 2 minuten tot een soepel deeg zonder klontjes, en laat het 5 minuten staan: het meel zwelt nog op. Is het te stevig of scheurt het, kneed er dan een scheut water door; is het te nat, een lepel meel.', min: 7 },
    { t: 'Maak met natte handen 8 ballen en druk ze plat tot schijven van 1½ cm dik en ongeveer 9 cm breed. Strijk de randen glad met een natte vinger, dan scheuren ze niet.' },
    { t: 'Verhit de olie in de pan op middelhoog vuur. Bak de arepas 6 à 8 minuten per kant met de deksel op de pan, tot ze een goudbruin korstje hebben. Zet het vuur daarna laag en bak ze nog 5 minuten, af en toe keren: dan worden ze ook van binnen gaar.', m: 'koekenpan', min: 20 },
    { t: 'Bestrijk de arepas dun met olie en bak ze in één laag 18 à 20 minuten in de airfryer op 200 °C. Keer ze halverwege. In een XXL passen er 6 à 8 tegelijk.', m: 'airfryer', min: 20 },
    { t: 'Pluk de kip intussen met twee vorken in draadjes. Prak de avocado met de mayonaise, knoflook en het limoensap, en roer de kip, rode ui en koriander erdoor. Breng op smaak met zout en peper.' },
    { t: 'Een arepa is gaar als hij hol klinkt als je erop tikt. Snijd hem aan één kant open als een pitabroodje (niet helemaal doorsnijden) en vul hem royaal. Eet ze meteen, nog warm.' }
  ],
  tips: ['Voorgekookt maïsmeel heet masarepa; het bekendste merk is P.A.N. (geel-witte zak). Je vindt het bij de Jumbo, in de wereldkeuken-schappen van andere grote supermarkten, bij de toko of Surinaamse winkel, en online. Gewone maïsmeel, polenta of maïzena werken níét: die zijn niet voorgekookt en het deeg valt uit elkaar.', 'Rauwe arepas kun je een dag in de koelkast bewaren en gebakken arepas invriezen. Opwarmen: 8 minuten in de airfryer op 180 °C.'],
  alt: ['Met kaas in het deeg: kneed 75 g geraspte belegen kaas door het deeg, voor arepas die van binnen smelten.', 'Vegetarisch: vul met zwarte bonen uit blik, geraspte kaas en avocado (een arepa dominó).']
},
{
  id: 'arepas-ham-kaas', toegevoegd: '2026-10-25', variantVan: 'arepas', variant: 'Ham en kaas', naam: 'Arepas met ham en kaas',
  intro: 'Zoals Venezolanen ze bij het ontbijt eten: een warme, krokante arepa met ham en kaas die erin smelt. Klaar in een half uur, en de vulling is wat je in de koelkast hebt.',
  tijd: 30,
  ingr: [
    { kop: 'Arepas (8 stuks)' },
    { n: 'voorgekookt maïsmeel', q: 300, u: 'g', x: 'masarepa, bijvoorbeeld P.A.N. wit; geen polenta of maïzena' },
    { n: 'water', q: 400, u: 'ml', x: 'lauw' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { kop: 'Vulling' },
    { n: 'ham', q: 200, u: 'g', x: 'in plakjes' },
    { n: 'jonge kaas', q: 200, u: 'g', x: 'in plakken of geraspt; of mozzarella' },
    { n: 'boter', q: 30, u: 'g', x: 'om de warme arepa mee te besmeren' }
  ],
  stappen: [
    { t: 'Doe het water met het zout in een kom en strooi het maïsmeel er al roerend in. Kneed het met je handen 2 minuten tot een soepel deeg zonder klontjes, en laat het 5 minuten staan: het meel zwelt nog op. Is het te stevig of scheurt het, kneed er dan een scheut water door; is het te nat, een lepel meel.', min: 7 },
    { t: 'Maak met natte handen 8 ballen en druk ze plat tot schijven van 1½ cm dik en ongeveer 9 cm breed. Strijk de randen glad met een natte vinger, dan scheuren ze niet.' },
    { t: 'Verhit de olie in de pan op middelhoog vuur. Bak de arepas 6 à 8 minuten per kant met de deksel op de pan, tot ze een goudbruin korstje hebben. Zet het vuur daarna laag en bak ze nog 5 minuten, af en toe keren: dan worden ze ook van binnen gaar.', m: 'koekenpan', min: 20 },
    { t: 'Bestrijk de arepas dun met olie en bak ze in één laag 18 à 20 minuten in de airfryer op 200 °C. Keer ze halverwege. In een XXL passen er 6 à 8 tegelijk.', m: 'airfryer', min: 20 },
    { t: 'Snijd de warme arepas aan één kant open, smeer er een klein beetje boter in en vul ze met ham en kaas. Leg ze nog 1 à 2 minuten terug in de pan met de deksel erop, of in de airfryer, tot de kaas smelt.', min: 2 }
  ],
  tips: ['Voorgekookt maïsmeel heet masarepa; het bekendste merk is P.A.N. (geel-witte zak). Je vindt het bij de Jumbo, in de wereldkeuken-schappen van andere grote supermarkten, bij de toko of Surinaamse winkel, en online. Gewone maïsmeel, polenta of maïzena werken níét.'],
  alt: ['Met roerei: vul de arepa met roerei met tomaat en lente-ui (perico), het andere klassieke ontbijt.']
},
{
  id: 'arepas-mechada', toegevoegd: '2026-10-25', variantVan: 'arepas', variant: 'Draadjesvlees', naam: 'Arepas met draadjesvlees (carne mechada)',
  intro: 'Rundvlees dat 2 uur zacht stooft met paprika, tomaat en komijn tot je het met een vork uit elkaar trekt: carne mechada. In een krokante arepa is dit de stevigste vulling, en het vlees kan een dag van tevoren.',
  tijd: 60, wacht: '2 uur stoven', niveau: 'Gemiddeld',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan met deksel' },
    { tool: 'koekenpan', tekst: 'Koekenpan met deksel (28 cm), het liefst antiaanbak of goed ingevet gietijzer', m: 'koekenpan' },
    { tool: 'airfryer', tekst: 'Airfryer', m: 'airfryer' }
  ],
  ingr: [
    { kop: 'Arepas (8 stuks)' },
    { n: 'voorgekookt maïsmeel', q: 300, u: 'g', x: 'masarepa, bijvoorbeeld P.A.N. wit; geen polenta of maïzena' },
    { n: 'water', q: 400, u: 'ml', x: 'lauw' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { kop: 'Carne mechada' },
    { n: 'runderstoofvlees', q: 600, u: 'g', x: 'sukadelappen of runderlappen, in 4 grote stukken' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in reepjes' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in reepjes' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'fijngehakt' },
    { n: 'tomatenblokjes', q: 400, u: 'g' },
    { n: 'komijn', q: 1, u: 'tl' },
    { n: 'paprikapoeder', q: 1, u: 'tl' },
    { n: 'laurierblad', p: 'laurierbladen', q: 1, u: 'st' },
    { n: 'runderbouillon', q: 250, u: 'ml' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { n: 'zwarte peper' },
    { kop: 'Erbij' },
    { n: 'avocado', p: 'avocado\'s', q: 1, u: 'st', x: 'in plakjes', opt: true },
    { n: 'geraspte kaas', q: 100, u: 'g', opt: true }
  ],
  stappen: [
    { t: 'Bestrooi het vlees met zout en peper. Verhit de olie in de braadpan op hoog vuur en bak de stukken rondom bruin, in 5 minuten. Haal ze eruit.', min: 5 },
    { t: 'Bak ui en paprika 5 minuten op middelhoog vuur. Bak knoflook, komijn en paprikapoeder 1 minuut mee.', min: 6 },
    { t: 'Doe het vlees terug met de tomatenblokjes, bouillon en het laurierblad. Breng aan de kook, leg de deksel op de pan en laat 2 uur heel zachtjes stoven, tot het vlees uit elkaar valt.', min: 120 },
    { t: 'Haal het vlees eruit, trek het met twee vorken in draadjes en doe het terug in de saus. Laat zonder deksel nog 10 minuten inkoken tot het smeuïg is maar niet meer nat. Proef op zout.', min: 10 },
    { t: 'Maak intussen de arepas. Doe het water met het zout in een kom en strooi het maïsmeel er al roerend in. Kneed het 2 minuten tot een soepel deeg en laat het 5 minuten staan. Maak met natte handen 8 schijven van 1½ cm dik en ongeveer 9 cm breed.', min: 7 },
    { t: 'Verhit de olie in de pan op middelhoog vuur. Bak de arepas 6 à 8 minuten per kant met de deksel op de pan, tot ze een goudbruin korstje hebben. Zet het vuur daarna laag en bak ze nog 5 minuten, af en toe keren.', m: 'koekenpan', min: 20 },
    { t: 'Bestrijk de arepas dun met olie en bak ze in één laag 18 à 20 minuten in de airfryer op 200 °C. Keer ze halverwege.', m: 'airfryer', min: 20 },
    { t: 'Snijd de arepas aan één kant open en vul ze met het draadjesvlees, en eventueel avocado en kaas.' }
  ],
  tips: ['Het vlees is de volgende dag nog lekkerder en kan prima de vriezer in. Wat je overhoudt, eet je met rijst en zwarte bonen: dat is pabellón criollo, het nationale gerecht van Venezuela.'],
  alt: ['Slowcooker: doe alles na het aanbakken in de slowcooker en gaar 7 uur op laag.']
},
{
  id: 'bazlama', toegevoegd: '2026-10-25', naam: 'Bazlama (Turks pannenbrood)',
  ook: ['bazlama', 'Turks brood uit de pan', 'pannenbrood', 'platbrood', 'Turks platbrood'],
  keuken: 'Turks', soort: 'Brood',
  tijd: 30, wacht: '1 uur rijzen', pers: 6, stuks: 'broden', niveau: 'Makkelijk', vega: true,
  intro: 'Dik, luchtig platbrood dat Turkse oma\'s in de pan bakken. Door de yoghurt wordt het zacht als een kussen. Scheur het open voor bij soep, kofte of een ontbijt met kaas, olijven en tomaat.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan met deksel (28 cm), het liefst gietijzer of RVS' }
  ],
  ingr: [
    { n: 'bloem', q: 500, u: 'g' },
    { n: 'gedroogde gist', q: 7, u: 'g' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'zout', q: 1.5, u: 'tl' },
    { n: 'Turkse yoghurt', q: 150, u: 'g', x: 'of Griekse yoghurt' },
    { n: 'lauw water', q: 250, u: 'ml' },
    { n: 'olijfolie', q: 2, u: 'el' },
    { kop: 'Erover' },
    { n: 'boter', q: 30, u: 'g', x: 'gesmolten', opt: true },
    { n: 'pul biber', q: 1, u: 'tl', opt: true }
  ],
  stappen: [
    { t: 'Meng bloem, gist, suiker en zout. Voeg yoghurt, water en olie toe en kneed 8 minuten tot een zacht, soepel deeg dat nog een beetje plakt.', min: 8 },
    { t: 'Laat het deeg afgedekt op een warme plek 1 uur rijzen, tot het verdubbeld is.', min: 60 },
    { t: 'Verdeel het deeg in 6 ballen. Druk ze met je handen plat tot schijven van 1 cm dik en ongeveer 18 cm breed. Laat ze nog 10 minuten onder een theedoek liggen.', min: 10 },
    { t: 'Verhit de droge pan op middelhoog vuur. Bak een brood 2 à 3 minuten met de deksel op de pan, tot het opbolt en de onderkant goudbruin is. Keer en bak nog 2 minuten. Druk met een spatel op de randen, dan worden die ook gaar.', min: 5 },
    { t: 'Leg de broden in een schone theedoek. Bestrijk ze eventueel met boter en strooi er wat pul biber over.' }
  ],
  tips: ['Het vuur niet te hoog: dan verbrandt de buitenkant voor het midden gaar is. Tik op het brood; klinkt het hol, dan is het klaar.'],
  alt: ['Gözleme-achtig: rol het deeg dun uit, vul de helft met feta, spinazie en peterselie, klap dicht en bak in de pan.'],
  bij: ['kofte', 'shakshuka']
},
{
  id: 'pita-pan', toegevoegd: '2026-10-25', naam: 'Pitabroodjes uit de pan',
  ook: ['pita', 'pitabrood', 'pitabroodjes', 'pita zelf maken', 'platbrood', 'pocket bread'],
  keuken: 'Grieks', soort: 'Brood',
  tijd: 35, wacht: '1 uur rijzen', pers: 8, stuks: 'pita\'s', niveau: 'Gemiddeld', vega: true,
  intro: 'Pitabroodjes die in een paar minuten opbollen als een ballon, zodat er vanzelf een zakje in zit om te vullen met gyros, souvlaki of falafel. Het lukt in een hete pan of in de airfryer.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Gietijzeren of dikke RVS koekenpan met deksel', m: 'koekenpan' },
    { tool: 'airfryer', tekst: 'Airfryer', m: 'airfryer' }
  ],
  ingr: [
    { n: 'bloem', q: 400, u: 'g' },
    { n: 'gedroogde gist', q: 7, u: 'g' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'zout', q: 1.5, u: 'tl' },
    { n: 'lauw water', q: 250, u: 'ml' },
    { n: 'olijfolie', q: 2, u: 'el' }
  ],
  stappen: [
    { t: 'Meng bloem, gist, suiker en zout. Voeg water en olie toe en kneed 8 minuten tot een glad, soepel deeg.', min: 8 },
    { t: 'Laat het deeg afgedekt 1 uur rijzen tot het verdubbeld is.', min: 60 },
    { t: 'Verdeel het in 8 ballen en laat ze 10 minuten rusten. Rol ze uit tot rondjes van 5 mm dik. Niet dunner: dan bollen ze niet op. Zorg dat er geen gaatjes of vouwen in zitten.', min: 10 },
    { t: 'Verhit de droge pan op hoog vuur tot hij echt heet is. Bak een pita 30 seconden, keer hem, en bak hem 1 minuut tot er bellen in komen. Keer nog eens: nu bolt hij helemaal op. Druk eventueel zachtjes met een theedoek op de bubbels om ze naar de randen te duwen.', m: 'koekenpan', min: 3 },
    { t: 'Verwarm de airfryer 5 minuten voor op 200 °C. Bak de pita\'s 2 à 3 tegelijk 4 à 5 minuten tot ze opbollen en net lichtbruin worden.', m: 'airfryer', min: 5 },
    { t: 'Wikkel ze meteen in een schone theedoek, dan blijven ze zacht. Snijd ze aan één kant open om te vullen.' }
  ],
  tips: ['Bolt een pita niet op? Dan was het deeg te dun uitgerold of de pan niet heet genoeg. Hij is dan nog steeds heerlijk als platbrood.', 'Pita\'s kunnen de vriezer in. Even in de broodrooster of airfryer, en ze zijn weer als vers.'],
  alt: ['Volkoren: vervang 150 g bloem door volkorenmeel en gebruik 20 ml extra water.'],
  bij: ['gyros', 'souvlaki-tzatziki', 'falafel', 'hummus']
},
{
  id: 'engelse-muffins', toegevoegd: '2026-10-25', naam: 'Engelse muffins uit de pan',
  ook: ['English muffins', 'english muffin', 'engelse muffin', 'muffins', 'broodjes uit de pan', 'eggs benedict broodjes'],
  keuken: 'Brits', soort: 'Brood',
  tijd: 45, wacht: '1½ uur rijzen', pers: 8, stuks: 'muffins', niveau: 'Gemiddeld', vega: true,
  intro: 'De ronde, platte broodjes voor eggs benedict en een Engels ontbijt. Ze worden helemaal in de pan gebakken, niet in de oven. Open ze met een vork, rooster ze en smeer er boter op: dan zie je de typische gaatjes.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Grote koekenpan met deksel (28 cm), het liefst antiaanbak of gietijzer' },
    { tool: 'mixer', tekst: 'Handmixer met deeghaken', of: 'Met de hand kneden kan ook: 10 minuten.' }
  ],
  ingr: [
    { n: 'bloem', q: 450, u: 'g' },
    { n: 'gedroogde gist', q: 7, u: 'g' },
    { n: 'suiker', q: 1, u: 'el' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'melk', q: 250, u: 'ml', x: 'lauw' },
    { n: 'boter', q: 25, u: 'g', x: 'gesmolten' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st' },
    { n: 'griesmeel', q: 3, u: 'el', x: 'of maïsgries, om in te rollen' }
  ],
  stappen: [
    { t: 'Meng bloem, gist, suiker en zout. Voeg melk, boter en ei toe en kneed 8 minuten met de deeghaken tot een zacht, wat plakkerig deeg.', min: 8 },
    { t: 'Laat het deeg afgedekt 1 uur rijzen tot het verdubbeld is.', min: 60 },
    { t: 'Strooi griesmeel op het aanrecht. Druk het deeg plat tot 2 cm dik en steek er met een glas van 8 cm rondjes uit. Kneed de restjes samen en steek nog eens uit. Wentel ze door het griesmeel.' },
    { t: 'Leg ze op een bakplaat of plank met griesmeel, dek af en laat nog 30 minuten rijzen.', min: 30 },
    { t: 'Verhit de droge pan op laag tot middellaag vuur. Bak de muffins met de deksel op de pan 6 à 7 minuten per kant, tot ze goudbruin zijn en hol klinken. Laag vuur is belangrijk: dan worden ze van binnen gaar voor de buitenkant te donker is.', min: 14 },
    { t: 'Laat ze afkoelen op een rooster. Splijt ze met een vork (niet snijden) en rooster ze in de broodrooster.' }
  ],
  tips: ['Twijfel je of ze gaar zijn? Steek een satéprikker in de zijkant; komt die droog uit, dan zijn ze klaar. Of leg ze nog 5 minuten in de airfryer op 170 °C.', 'Ingevroren blijven ze 3 maanden goed. Splijt ze eerst, dan kun je ze bevroren roosteren.'],
  alt: ['Met rozijnen en kaneel: kneed 75 g rozijnen en 1 tl kaneel door het deeg.'],
  bij: ['eggs-benedict']
},
{
  id: 'pao-de-queijo', toegevoegd: '2026-10-25', naam: 'Pão de queijo (Braziliaanse kaasbolletjes)',
  ook: ['pao de queijo', 'kaasbolletjes', 'kaasbroodjes', 'Braziliaans', 'glutenvrij brood', 'cheese bread'],
  keuken: 'Zuid-Amerikaans', soort: 'Brood',
  tijd: 35, pers: 20, stuks: 'bolletjes', niveau: 'Makkelijk', vega: true,
  intro: 'Kleine, luchtige kaasbolletjes uit Brazilië: krokant van buiten en van binnen taai en elastisch, bijna als mochi. Ze zijn gemaakt van tapiocameel in plaats van bloem en dus glutenvrij. In 15 minuten gebakken in de airfryer.',
  gerei: [
    { tool: 'kookpan', tekst: 'Steelpan' },
    { tool: 'airfryer', tekst: 'Airfryer met bakpapier (met gaatjes) in de mand' }
  ],
  ingr: [
    { n: 'tapiocameel', q: 250, u: 'g', x: 'ook wel tapiocazetmeel' },
    { n: 'melk', q: 125, u: 'ml' },
    { n: 'water', q: 60, u: 'ml' },
    { n: 'zonnebloemolie', q: 60, u: 'ml' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'ei', p: 'eieren', q: 2, u: 'st' },
    { n: 'Parmezaanse kaas', q: 50, u: 'g', x: 'fijn geraspt' },
    { n: 'belegen kaas', q: 100, u: 'g', x: 'fijn geraspt' }
  ],
  stappen: [
    { t: 'Breng melk, water, olie en zout aan de kook in de steelpan. Giet het meteen over het tapiocameel in een kom en roer met een lepel tot een kruimelig, plakkerig mengsel. Laat 10 minuten afkoelen.', min: 10 },
    { t: 'Kneed de eieren er één voor één door, met de lepel of je handen, tot een glad, plakkerig deeg. Kneed de kaas erdoor.' },
    { t: 'Maak met ingeoliede handen balletjes ter grootte van een walnoot.' },
    { t: 'Verwarm de airfryer voor op 180 °C. Leg de balletjes met ruimte ertussen op het bakpapier: ze rijzen. Bak ze 12 à 15 minuten tot ze opgezwollen en lichtbruin zijn. In een XXL gaan er ongeveer 12 per keer.', min: 14 },
    { t: 'Eet ze warm: dan zijn ze het lekkerst.' }
  ],
  tips: ['Tapiocameel vind je bij de toko, in Aziatische of Surinaamse winkels, en soms bij de glutenvrije producten in de supermarkt. Maïzena of bloem werken níét: dan krijg je niet die taaie binnenkant.', 'Rauwe balletjes kun je op een plank invriezen en daarna in een zak bewaren. Bak ze bevroren, 3 à 4 minuten langer.'],
  alt: ['Pittig: kneed 1 tl chilivlokken of wat fijngehakte jalapeño door het deeg.']
},
{
  id: 'airfryer-bolletjes', toegevoegd: '2026-10-25', naam: 'Zachte witte bolletjes uit de airfryer',
  ook: ['bolletjes', 'broodjes', 'witte bolletjes', 'zachte broodjes', 'brood bakken zonder oven', 'airfryer brood', 'puntjes', 'hamburgerbroodjes'],
  keuken: 'Nederlands', soort: 'Brood',
  tijd: 35, wacht: '2 uur rijzen', pers: 8, stuks: 'bolletjes', niveau: 'Gemiddeld', vega: true,
  intro: 'Echte zachte witte bolletjes zoals van de bakker, maar dan zonder oven: ze bakken in een kwartier goudbruin in de airfryer. Voor de lunch, bij de soep of als hamburgerbroodje.',
  gerei: [
    { tool: 'mixer', tekst: 'Handmixer met deeghaken', of: 'Met de hand kneden kan ook: 10 minuten.' },
    { tool: 'airfryer', tekst: 'Airfryer met bakpapier (met gaatjes) in de mand' }
  ],
  ingr: [
    { n: 'bloem', q: 400, u: 'g', x: 'tarwebloem' },
    { n: 'gedroogde gist', q: 7, u: 'g' },
    { n: 'suiker', q: 1, u: 'el' },
    { n: 'zout', q: 1.5, u: 'tl' },
    { n: 'melk', q: 230, u: 'ml', x: 'lauw' },
    { n: 'boter', q: 30, u: 'g', x: 'zacht' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st', x: 'losgeklopt, om te bestrijken', opt: true },
    { n: 'sesamzaad', q: 1, u: 'el', opt: true }
  ],
  stappen: [
    { t: 'Meng bloem, gist, suiker en zout. Voeg melk en boter toe en kneed 10 minuten met de deeghaken tot een glad, elastisch deeg dat loslaat van de kom.', min: 10 },
    { t: 'Laat het deeg afgedekt op een warme plek 1 uur rijzen tot het verdubbeld is.', min: 60 },
    { t: 'Verdeel het deeg in 8 gelijke stukken (weeg ze, ongeveer 85 g). Vouw elk stuk naar het midden toe en rol het met de naad naar beneden onder je holle hand tot een strak bolletje.' },
    { t: 'Leg de bolletjes op stukjes bakpapier, dek af en laat ze nog 45 minuten rijzen tot ze flink gezwollen zijn.', min: 45 },
    { t: 'Verwarm de airfryer voor op 170 °C. Bestrijk de bolletjes met ei en bestrooi ze eventueel met sesamzaad. Bak ze 4 tegelijk, met het bakpapier, 12 à 14 minuten tot ze goudbruin zijn en hol klinken als je op de onderkant tikt.', min: 13 },
    { t: 'Laat ze afkoelen op een rooster. Bak intussen de tweede ronde; zet die zolang koel weg, dan rijzen ze niet te ver door.' }
  ],
  tips: ['Een airfryer is van boven heter dan een oven. Wordt de bovenkant te snel bruin, zet hem dan op 160 °C en bak 2 minuten langer.', 'Ingevroren blijven ze 2 maanden goed. Afbakken: 5 minuten op 170 °C.'],
  alt: ['Bruin: vervang de helft van de bloem door volkorenmeel en gebruik 20 ml extra melk.', 'Hamburgerbroodjes: maak er 6 in plaats van 8 en druk ze na het vormen plat tot 2 cm hoog.']
},
{
  id: 'focaccia', toegevoegd: '2026-10-25', naam: 'Focaccia uit de airfryer of OptiGrill-bak',
  ook: ['focaccia', 'Italiaans brood', 'olijfoliebrood', 'brood zonder oven'],
  keuken: 'Italiaans', soort: 'Brood',
  tijd: 20, wacht: '2 uur rijzen', pers: 4, niveau: 'Gemiddeld', vega: true,
  intro: 'Luchtig Italiaans brood met een krokante, olijfolierijke korst en kuiltjes vol zout en rozemarijn. Er komt bijna geen kneden aan te pas: tijd doet het werk. Deze hoeveelheid past in een kleine vorm in de airfryer of in de OptiGrill-bak.',
  methodes: [ { id: 'airfryer', naam: 'Airfryer' }, { id: 'optigrill-bak', naam: 'OptiGrill-bak' } ],
  gerei: [
    { tool: 'bakvorm', tekst: 'Ronde of vierkante bakvorm van ongeveer 20 cm die in je airfryer past', m: 'airfryer' },
    { tool: 'airfryer', tekst: 'Airfryer', m: 'airfryer' },
    { tool: 'optigrill-bak', tekst: 'OptiGrill-bak (Snacking & Baking, 1,6 liter) in plaats van de onderste plaat', m: 'optigrill-bak' }
  ],
  ingr: [
    { n: 'bloem', q: 250, u: 'g' },
    { n: 'gedroogde gist', q: 4, u: 'g' },
    { n: 'suiker', q: 0.5, u: 'tl' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'lauw water', q: 200, u: 'ml' },
    { n: 'olijfolie', q: 4, u: 'el', x: 'extra vierge' },
    { kop: 'Erop' },
    { n: 'verse rozemarijn', q: 2, u: 'takje' },
    { n: 'zeezout', q: 1, u: 'tl', x: 'grof, of zoutvlokken' },
    { n: 'cherrytomaten', q: 100, u: 'g', x: 'gehalveerd', opt: true },
    { n: 'kalamata-olijven', q: 50, u: 'g', opt: true }
  ],
  stappen: [
    { t: 'Meng bloem, gist, suiker en zout. Roer het water en 1 el olie erdoor met een lepel tot een plakkerig deeg zonder droge stukjes. Kneden hoeft niet.' },
    { t: 'Dek de kom af en laat 30 minuten staan. Pak met natte handen een rand van het deeg, trek die omhoog en vouw hem over het deeg. Draai de kom een kwartslag en herhaal 4 keer. Doe dit nog 2 keer met 30 minuten ertussen.', min: 90 },
    { t: 'Vet de bakvorm in met 1 el olie. Leg het deeg erin en laat het 30 minuten rijzen, tot het de vorm bijna vult.', m: 'airfryer', min: 30 },
    { t: 'Vet de OptiGrill-bak in met 1 el olie. Leg het deeg erin en laat het 30 minuten rijzen. Zet de bak in de OptiGrill in plaats van de onderste plaat, nog zonder het deeg, en kies handmatig, oranje stand, om voor te verwarmen.', m: 'optigrill-bak', min: 30 },
    { t: 'Giet de rest van de olie erover. Druk met ingeoliede vingers diepe kuiltjes in het deeg, tot op de bodem. Druk de rozemarijnnaaldjes en eventueel tomaatjes en olijven erin, en strooi het zeezout erover.' },
    { t: 'Bak de focaccia 15 à 18 minuten op 190 °C in de airfryer, tot hij diep goudbruin is.', m: 'airfryer', min: 17 },
    { t: 'Zet de bak met het deeg in de voorverwarmde OptiGrill, klap dicht en bak 20 à 25 minuten tot hij goudbruin is. Kijk na 15 minuten even.', m: 'optigrill-bak', min: 22 },
    { t: 'Laat hem 5 minuten in de vorm rusten en haal hem eruit op een rooster, anders wordt de onderkant zacht.' }
  ],
  tips: ['Meer tijd geeft meer smaak: laat het deeg na stap 2 afgedekt een nacht in de koelkast staan en ga de volgende dag verder. Haal het dan een uur van tevoren uit de koelkast.'],
  alt: ['Met rode ui: leg dunne ringen rode ui en wat gedroogde oregano in de kuiltjes in plaats van rozemarijn.']
},
{
  id: 'paratha', toegevoegd: '2026-10-25', naam: 'Laagjesparatha',
  ook: ['paratha', 'parotta', 'lachha paratha', 'Indiaas brood', 'roti', 'chapati', 'platbrood'],
  keuken: 'Indiaas', soort: 'Brood',
  tijd: 45, wacht: '30 minuten rusten', pers: 6, stuks: 'paratha\'s', niveau: 'Gemiddeld', vega: true,
  intro: 'Indiaas platbrood uit de pan dat je met boter vouwt en oprolt, zodat het bij het bakken in bladerige laagjes uit elkaar valt. Knapperig van buiten, zacht van binnen. Heerlijk bij curry en dal.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan (28 cm), het liefst gietijzer of RVS' }
  ],
  ingr: [
    { n: 'chapatimeel', q: 300, u: 'g', x: 'atta; of half volkorenmeel, half bloem' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'water', q: 200, u: 'ml', x: 'lauw' },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { n: 'ghee', q: 60, u: 'g', x: 'of gesmolten boter' }
  ],
  stappen: [
    { t: 'Meng meel en zout. Voeg beetje bij beetje het water en de olie toe en kneed 5 minuten tot een zacht, soepel deeg. Laat het afgedekt 30 minuten rusten.', min: 35 },
    { t: 'Verdeel het deeg in 6 ballen. Rol een bal uit tot een dunne lap van 20 cm, bestrijk met ghee en bestrooi met een beetje meel.' },
    { t: 'Vouw de lap als een waaier: steeds 2 cm heen en terug, zodat je een lange, smalle geplooide reep krijgt. Rol de reep op als een slakkenhuis en stop het einde eronder.' },
    { t: 'Doe dit met alle ballen en laat ze 5 minuten rusten. Rol ze daarna voorzichtig uit tot rondjes van 15 à 18 cm.', min: 5 },
    { t: 'Verhit de droge pan op middelhoog vuur. Bak een paratha 1 minuut, keer en bestrijk met ghee. Keer nog eens en bak tot beide kanten goudbruine plekken hebben, in totaal 3 à 4 minuten.', min: 4 },
    { t: 'Leg de warme paratha op het aanrecht en duw hem met beide handen van de zijkanten naar elkaar toe, alsof je klapt. Dan komen de laagjes los.' }
  ],
  tips: ['Chapatimeel (atta) is fijngemalen volkoren tarwemeel. Je koopt het bij de toko, in een Indiase of Surinaamse winkel, en in grote supermarkten bij de wereldkeuken. Het is ook het meel voor roti.'],
  alt: ['Aloo paratha: vul het deeg met een prakje van gekookte aardappel, komijn, garam masala en verse koriander, en rol het voorzichtig uit.'],
  bij: ['dal', 'butter-chicken', 'curry-madras']
},
{
  id: 'cong-you-bing', toegevoegd: '2026-10-25', naam: 'Chinese lente-uipannenkoekjes (cong you bing)',
  ook: ['cong you bing', 'scallion pancakes', 'lente-ui pannenkoek', 'lenteuipannenkoek', 'Chinees platbrood', 'platbrood'],
  keuken: 'Chinees', soort: 'Brood',
  tijd: 50, wacht: '30 minuten rusten', pers: 4, stuks: 'pannenkoekjes', niveau: 'Gemiddeld', vega: true,
  intro: 'Krokante, bladerige platbroodjes vol lente-ui, een bekende straatsnack uit China. Het deeg maak je met kokend water, zodat het soepel wordt; door het oprollen en weer uitrollen krijg je laagjes. Met een dipsaus van sojasaus en azijn.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan (28 cm), antiaanbak of goed ingevet gietijzer' }
  ],
  ingr: [
    { n: 'bloem', q: 300, u: 'g' },
    { n: 'water', q: 180, u: 'ml', x: '120 ml kokend en 60 ml koud' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'lente-ui', p: 'lente-uien', q: 6, u: 'st', x: 'fijngesneden' },
    { n: 'sesamolie', q: 2, u: 'el' },
    { n: 'vijfkruidenpoeder', q: 0.5, u: 'tl', opt: true },
    { n: 'zonnebloemolie', q: 4, u: 'el', x: 'om te bakken' },
    { kop: 'Dipsaus' },
    { n: 'sojasaus', q: 3, u: 'el' },
    { n: 'rijstazijn', q: 1, u: 'el', x: 'of zwarte rijstazijn' },
    { n: 'chili-olie', q: 1, u: 'tl', opt: true }
  ],
  stappen: [
    { t: 'Doe de bloem in een kom en giet het kokende water erbij terwijl je roert met eetstokjes of een vork. Voeg het koude water toe en kneed 5 minuten tot een glad, zacht deeg. Laat het afgedekt 30 minuten rusten.', min: 35 },
    { t: 'Meng sesamolie, zout en eventueel vijfkruidenpoeder in een kommetje.' },
    { t: 'Verdeel het deeg in 4 stukken. Rol een stuk zo dun mogelijk uit tot een rechthoek. Bestrijk met het sesammengsel en strooi er een kwart van de lente-ui over.' },
    { t: 'Rol de lap vanaf de lange kant strak op tot een lange worst. Rol die worst daarna op als een slakkenhuis en stop het eind eronder. Druk hem plat met je hand en rol hem voorzichtig uit tot een rondje van 18 cm. Prikt er een stukje lente-ui doorheen, dan is dat geen probleem.' },
    { t: 'Verhit 1 el olie in de pan op middelhoog vuur. Bak een pannenkoekje 2 à 3 minuten per kant tot het goudbruin en krokant is. Duw het in de laatste minuut met twee spatels vanaf de zijkanten even in elkaar, dan komen de laagjes los.', min: 6 },
    { t: 'Meng de dipsaus. Snijd de pannenkoekjes in punten en eet ze warm.' }
  ],
  tips: ['Je kunt de opgerolde, platgedrukte slakkenhuisjes tussen bakpapier invriezen. Bak ze bevroren, op iets lager vuur en 2 minuten langer.'],
  alt: ['Met ei: klop een ei los, giet het in de pan en leg het pannenkoekje er meteen op. Keer samen en bak nog 1 minuut.']
},
{
  id: 'bagels', toegevoegd: '2026-10-25', naam: 'Bagels uit de airfryer',
  ook: ['bagel', 'bagels', 'New York bagels', 'sesambagels', 'broodjes'],
  keuken: 'Amerikaans', soort: 'Brood',
  tijd: 60, wacht: '1½ uur rijzen', pers: 8, stuks: 'bagels', niveau: 'Moeilijk', vega: true,
  intro: 'Echte bagels met een glanzende, taaie korst en een stevige binnenkant. Het geheim: je kookt ze eerst kort in water met honing en zuiveringszout, en bakt ze daarna. Meer werk dan gewoon brood, maar het verschil met supermarktbagels is groot.',
  gerei: [
    { tool: 'mixer', tekst: 'Handmixer met deeghaken', of: 'Met de hand kneden: 12 minuten, het deeg is stevig.' },
    { tool: 'kookpan', tekst: 'Brede kookpan of hapjespan met minstens 3 liter water' },
    { tool: 'airfryer', tekst: 'Airfryer met bakpapier (met gaatjes) in de mand' }
  ],
  ingr: [
    { n: 'bloem', q: 500, u: 'g', x: 'het liefst broodbloem of patentbloem' },
    { n: 'gedroogde gist', q: 7, u: 'g' },
    { n: 'suiker', q: 1, u: 'el' },
    { n: 'zout', q: 2, u: 'tl' },
    { n: 'lauw water', q: 280, u: 'ml' },
    { kop: 'Kookwater' },
    { n: 'honing', q: 2, u: 'el', x: 'of stroop' },
    { n: 'zuiveringszout', q: 1, u: 'el' },
    { kop: 'Erop' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st', x: 'alleen het eiwit, losgeklopt' },
    { n: 'sesamzaad', q: 2, u: 'el', x: 'of maanzaad', opt: true }
  ],
  stappen: [
    { t: 'Meng bloem, gist, suiker en zout. Voeg het water toe en kneed 10 minuten tot een stevig, glad deeg. Het is steviger dan gewoon brooddeeg; dat hoort zo.', min: 10 },
    { t: 'Laat het deeg afgedekt 1 uur rijzen.', min: 60 },
    { t: 'Verdeel het in 8 stukken van ongeveer 100 g en rol ze tot strakke bollen. Duw je duim door het midden en draai de bal rond je vingers tot een ring met een gat van 3 cm. Het gat krimpt nog.' },
    { t: 'Leg de bagels op stukjes bakpapier en laat ze 20 minuten rusten. Een bagel is klaar als hij binnen een paar seconden boven komt drijven in een kom koud water.', min: 20 },
    { t: 'Breng het water met honing en zuiveringszout aan de kook. Kook de bagels 3 à 4 tegelijk 1 minuut per kant. Haal ze er met een schuimspaan uit en laat ze uitlekken.', min: 6 },
    { t: 'Bestrijk ze met eiwit en druk de bovenkant in het sesamzaad.' },
    { t: 'Verwarm de airfryer voor op 190 °C. Bak de bagels 4 tegelijk op bakpapier 14 à 16 minuten tot ze diep goudbruin zijn. Keer ze de laatste 3 minuten om, dan wordt ook de onderkant mooi.', min: 16 },
    { t: 'Laat ze minstens 15 minuten afkoelen op een rooster voor je ze opensnijdt: ze garen nog na.', min: 15 }
  ],
  tips: ['Nog lekkerder: zet de gevormde bagels na stap 3 een nacht afgedekt in de koelkast. Kook en bak ze de volgende ochtend meteen uit de koelkast.', 'Zuiveringszout (baking soda) staat in de supermarkt bij het bakpoeder. Het geeft de bagels hun bruine, glanzende korst.'],
  alt: ['Everything bagel: meng sesamzaad, maanzaad, knoflookpoeder, gedroogde uitjes en grof zout als topping.', 'Kaneel-rozijn: kneed 1 tl kaneel en 80 g rozijnen door het deeg en laat het sesamzaad weg.']
},
{
  id: 'gua-bao', toegevoegd: '2026-10-25', naam: 'Gua bao met buikspek',
  ook: ['bao', 'bao buns', 'gua bao', 'gestoomde broodjes', 'Taiwanese broodjes', 'pork belly bao'],
  keuken: 'Chinees', soort: 'Brood',
  tijd: 75, wacht: '1½ uur rijzen en 1½ uur stoven', pers: 4, niveau: 'Moeilijk', vega: false,
  intro: 'Witte, wolkzachte gestoomde broodjes uit Taiwan, dubbelgevouwen als een taco en gevuld met kleverig gestoofd buikspek, komkommer, koriander en gezoete pinda\'s. Het deeg en het vlees vragen tijd en wat oefening, maar het resultaat is restaurantwaardig.',
  methodes: [ { id: 'braadpan', naam: 'Braadpan' }, { id: 'slowcooker', naam: 'Slowcooker' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan met deksel', m: 'braadpan' },
    { tool: 'slowcooker', tekst: 'Slowcooker', m: 'slowcooker' },
    { tool: 'koekenpan', tekst: 'Koekenpan om het buikspek aan te bakken' },
    { tool: 'wok', tekst: 'Bamboe stoommandje op een wok of pan met water', of: 'Geen stoommandje: zet een metalen vergiet in een grote kookpan met 3 cm kokend water, leg er bakpapier in en doe de deksel erop.' }
  ],
  ingr: [
    { kop: 'Bao (12 stuks)' },
    { n: 'bloem', q: 400, u: 'g' },
    { n: 'gedroogde gist', q: 5, u: 'g' },
    { n: 'suiker', q: 30, u: 'g' },
    { n: 'bakpoeder', q: 1, u: 'tl' },
    { n: 'zout', q: 0.5, u: 'tl' },
    { n: 'melk', q: 220, u: 'ml', x: 'lauw' },
    { n: 'zonnebloemolie', q: 1, u: 'el', x: 'plus wat om in te vetten' },
    { kop: 'Buikspek' },
    { n: 'varkensbuik', q: 600, u: 'g', x: 'zonder zwoerd, in plakken van 1 cm' },
    { n: 'sojasaus', q: 4, u: 'el' },
    { n: 'shaoxing rijstwijn', q: 3, u: 'el', x: 'of droge sherry' },
    { n: 'bruine suiker', q: 2, u: 'el' },
    { n: 'steranijs', q: 2, u: 'st', x: 'heel' },
    { n: 'gember', q: 15, u: 'g', x: 'in plakjes' },
    { n: 'knoflook', q: 3, u: 'teen', x: 'gekneusd' },
    { n: 'water', q: 400, u: 'ml' },
    { kop: 'Erbij' },
    { n: 'komkommer', p: 'komkommers', q: 0.5, u: 'st', x: 'in dunne plakjes' },
    { n: 'verse koriander', q: 15, u: 'g' },
    { n: 'ongezouten pinda\'s', q: 50, u: 'g', x: 'geroosterd en fijngehakt, gemengd met 1 el suiker' },
    { n: 'lente-ui', p: 'lente-uien', q: 2, u: 'st', x: 'in ringetjes', opt: true }
  ],
  stappen: [
    { t: 'Bak het buikspek in de droge koekenpan op middelhoog vuur 5 minuten tot het rondom bruin is en er vet uitkomt.', min: 5 },
    { t: 'Doe het vlees in de braadpan met sojasaus, rijstwijn, suiker, steranijs, gember, knoflook en water. Breng aan de kook, leg de deksel op de pan en laat 1½ uur zachtjes stoven, tot het vlees heel zacht is.', m: 'braadpan', min: 90 },
    { t: 'Doe het vlees in de slowcooker met sojasaus, rijstwijn, suiker, steranijs, gember, knoflook en de helft van het water. Gaar 5 uur op laag. Giet het vocht daarna in een steelpan.', m: 'slowcooker' },
    { t: 'Maak intussen het deeg. Meng bloem, gist, suiker, bakpoeder en zout. Voeg melk en olie toe en kneed 10 minuten tot een heel glad, zijdezacht deeg. Laat afgedekt 1 uur rijzen.', min: 70 },
    { t: 'Rol het deeg uit tot 5 mm dik en steek er met een glas van 9 cm rondjes uit. Rol elk rondje kort uit tot een ovaal. Bestrijk de helft met een beetje olie, leg een stukje van een rietje of een eetstokje in het midden en vouw dubbel. Trek het stokje eruit.' },
    { t: 'Leg elke bao op een vierkantje bakpapier in het stoommandje, met ruimte ertussen. Laat ze afgedekt 30 minuten rijzen.', min: 30 },
    { t: 'Haal het vlees uit de pan en kook het vocht in tot een stroperige saus. Doe het vlees terug en schep het om tot het glanst.', min: 10 },
    { t: 'Zet het mandje op de wok met kokend water (het water mag het mandje niet raken). Stoom de bao 10 minuten op middelhoog vuur. Doe daarna het vuur uit en laat de deksel er nog 5 minuten op: dan zakken ze niet in.', min: 15 },
    { t: 'Vul elke bao met een plak buikspek, komkommer, koriander en de zoete pinda\'s.' }
  ],
  tips: ['Gestoomde bao kun je invriezen. Stoom ze bevroren 8 minuten, dan zijn ze weer als vers.', 'Wil je het makkelijker? Diepvries bao vind je bij de toko; dan maak je alleen het vlees.'],
  alt: ['Met kip: vervang het buikspek door kippendijfilet en stoof 40 minuten.', 'Met krokante kip: vul de bao met stukjes kip uit de airfryer, sriracha-mayonaise en zoetzure komkommer.']
}
);
