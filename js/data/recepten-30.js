/* Recepten voor de keukenmachine (2026-11-20): Mark heeft een Bourgini Kitchen Chef (4,5 liter) met garde, K-klopper en deeghaak.
   Geen oven: bakken gaat in de airfryer, de rest op het fornuis of in de koelkast. */
(() => {
  RECEPTEN.push(
  {
    id: 'chocolademousse', toegevoegd: '2026-11-20', naam: 'Chocolademousse',
    ook: ['mousse au chocolat', 'chocolade mousse', 'chocomousse', 'mousse', 'chocolade toetje'],
    keuken: 'Frans', soort: 'Dessert',
    tijd: 20, wacht: '3 uur opstijven', pers: 4, niveau: 'Makkelijk', vega: true,
    intro: 'De klassieke Franse mousse au chocolat: alleen pure chocolade, eieren, een beetje suiker en boter. De luchtigheid komt helemaal uit stijfgeklopt eiwit, en dat is precies waar je keukenmachine goed in is. Zonder oven en een dag van tevoren te maken.',
    gerei: [
      { tool: 'kookpan', tekst: 'Steelpan met een hittebestendige kom erop (au bain-marie)', of: 'Of smelt de chocolade in de magnetron, in stappen van 30 seconden.' },
      { tool: 'mixer', tekst: 'Keukenmachine of handmixer met garde', of: 'Met een garde lukt het ook, met flink wat armkracht.' }
    ],
    ingr: [
      { n: 'pure chocolade', q: 150, u: 'g', x: 'minstens 60% cacao, in stukjes' },
      { n: 'boter', q: 25, u: 'g' },
      { n: 'ei', p: 'eieren', q: 4, u: 'st', x: 'heel vers, gesplitst' },
      { n: 'suiker', q: 30, u: 'g' },
      { n: 'zout', q: 1, u: 'snuf' },
      { n: 'slagroom', q: 100, u: 'ml', x: 'om erbij te geven', opt: true }
    ],
    stappen: [
      { t: 'Smelt de chocolade met de boter au bain-marie: in een kom boven een pan met een laagje zacht kokend water, de kom mag het water niet raken. Roer tot het glad is en laat 5 minuten afkoelen tot lauw.', min: 5 },
      { t: 'Roer de eidooiers één voor één door de lauwe chocolade. Hij wordt dik en glanzend.' },
      { t: 'Klop de eiwitten met het zout in een schone, vetvrije kom tot zacht schuim. Voeg de suiker in drie keer toe en klop door tot stevige, glanzende pieken die blijven staan als je de garde omhoog haalt.', km: 'garde in de schone, droge kom: 1 minuut op stand 2 tot schuim, dan de suiker erbij in 3 keer en op de hoogste stand 2 à 3 minuten tot stevige pieken. Niet langer: te stijf eiwit wordt korrelig en mengt slecht.' },
      { t: 'Roer eerst een flinke lepel eiwit door de chocolade, dan wordt die wat losser. Spatel de rest in twee keer erdoor, met rustige halen van onder naar boven, tot je geen witte strepen meer ziet.' },
      { t: 'Schep de mousse in 4 glaasjes of een schaal, dek af en laat minstens 3 uur opstijven in de koelkast.', min: 180 }
    ],
    tips: [
      'Spatel het eiwit met de hand erdoor, niet met de machine: dan blijft de lucht erin.',
      'De mousse bevat rauw ei. Gebruik heel verse eieren en eet hem binnen 2 dagen op.',
      'Een kom met een vetrandje of een spoortje dooier en het eiwit wordt niet stijf. Veeg de kom en de garde voor de zekerheid af met een beetje citroensap.'
    ],
    alt: ['Met sinaasappel: rasp er een halve sinaasappel door de chocolade.', 'Iets minder bitter: neem de helft pure chocolade en de helft melkchocolade, en de helft van de suiker.'],
    bij: []
  },
  {
    id: 'kaneelbroodjes', toegevoegd: '2026-11-20', naam: 'Kaneelbroodjes uit de airfryer',
    ook: ['cinnamon rolls', 'cinnamon buns', 'kaneelrolletjes', 'kaneelbollen', 'kanelbullar', 'kaneelslakken', 'zoete broodjes'],
    keuken: 'Amerikaans', soort: 'Ontbijt & lunch',
    tijd: 50, wacht: '1¾ uur rijzen', pers: 8, stuks: 'kaneelbroodjes', niveau: 'Gemiddeld', vega: true,
    intro: 'Zachte, plakkerige cinnamon rolls met een vulling van boter, bruine suiker en kaneel en een laagje roomkaasglazuur. Het zachte, wat plakkerige deeg kneedt de keukenmachine voor je, en ze bakken in een ronde vorm in de airfryer.',
    gerei: [
      { tool: 'mixer', tekst: 'Keukenmachine met deeghaak, of handmixer met deeghaken', of: 'Met de hand kneden kan ook: 10 minuten, het deeg plakt in het begin.' },
      { tool: 'bakvorm', tekst: 'Ronde bakvorm van ongeveer 20 cm die in je airfryer past, met bakpapier' },
      { tool: 'airfryer', tekst: 'Airfryer' }
    ],
    ingr: [
      { kop: 'Deeg' },
      { n: 'bloem', q: 300, u: 'g' },
      { n: 'gedroogde gist', q: 7, u: 'g' },
      { n: 'suiker', q: 40, u: 'g' },
      { n: 'zout', q: 0.5, u: 'tl' },
      { n: 'melk', q: 140, u: 'ml', x: 'lauw' },
      { n: 'ei', p: 'eieren', q: 1, u: 'st' },
      { n: 'boter', q: 40, u: 'g', x: 'zacht' },
      { kop: 'Vulling' },
      { n: 'boter', q: 50, u: 'g', x: 'heel zacht' },
      { n: 'lichtbruine basterdsuiker', q: 70, u: 'g' },
      { n: 'kaneel', q: 1.5, u: 'el', x: 'gemalen' },
      { kop: 'Glazuur' },
      { n: 'roomkaas', q: 60, u: 'g', x: 'op kamertemperatuur' },
      { n: 'poedersuiker', q: 60, u: 'g' },
      { n: 'melk', q: 1, u: 'tl' }
    ],
    stappen: [
      { kop: 'Deeg', t: 'Doe bloem, gist, suiker en zout in de kom. Voeg de melk en het ei toe en kneed 2 minuten. Kneed dan de zachte boter erdoor en kneed nog 8 minuten, tot het deeg glad en glanzend is en loslaat van de kom. Het blijft een beetje plakkerig.', min: 10, km: 'deeghaak met de spatdeksel erop: 2 minuten op stand 1, dan de boter in klontjes erbij en 7 à 8 minuten op stand 2, tot het deeg zich als een bal om de haak draait en de kom schoon is.' },
      { t: 'Dek de kom af en laat het deeg op een warme plek 1 uur rijzen, tot het twee keer zo groot is.', min: 60 },
      { kop: 'Vulling', t: 'Roer de zachte boter, basterdsuiker en kaneel tot een smeerbare pasta.', km: 'K-klopper op stand 2, 30 seconden. Haal het eruit voor je het glazuur maakt; spoelen hoeft niet.' },
      { t: 'Rol het deeg op een met bloem bestoven aanrecht uit tot een lap van ongeveer 35 × 25 cm. Smeer de vulling erop tot 1 cm van de randen. Rol de lap vanaf de lange kant strak op en knijp de naad dicht.' },
      { t: 'Snijd de rol met een scherp kartelmes (of een stukje draad dat je eronder kruist) in 8 plakken. Zet ze met de snijkant naar boven in de vorm met bakpapier, met een beetje ruimte ertussen. Dek af en laat ze 45 minuten rijzen tot ze tegen elkaar aan zitten.', min: 45 },
      { t: 'Verwarm de airfryer voor op 160 °C. Zet de vorm in de mand en bak de broodjes 18 à 22 minuten, tot ze goudbruin zijn en het midden niet meer deegachtig is. Kleurt de bovenkant na 10 minuten al flink, leg er dan een stukje aluminiumfolie op.', min: 20 },
      { kop: 'Glazuur', t: 'Roer de roomkaas met de poedersuiker en de melk glad. Laat de broodjes 5 minuten afkoelen en smeer het glazuur erover, zodat het een beetje smelt.', km: 'K-klopper op stand 1 tot de poedersuiker is opgenomen (anders stuift hij), dan 1 minuut op stand 3.' }
    ],
    tips: [
      'Past je vorm niet in de mand, bak ze dan in twee rondes in een kleinere vorm, of los op bakpapier met wat ruimte ertussen.',
      'Vooruit maken: zet de gesneden broodjes in de vorm een nacht afgedekt in de koelkast. Laat ze \'s ochtends 1 uur op kamertemperatuur rijzen en bak ze dan.',
      'Restjes blijven 2 dagen goed; 1 minuut op 160 °C in de airfryer en ze zijn weer zacht.'
    ],
    alt: ['Zonder glazuur, maar met parelsuiker erover voor het bakken, zoals Zweedse kanelbullar. Doe dan ½ tl kardemom door het deeg.', 'Met appel: strooi 1 appel in kleine blokjes over de vulling voordat je oprolt.'],
    bij: []
  },
  {
    id: 'verse-tagliatelle-kip', toegevoegd: '2026-11-20', naam: 'Verse tagliatelle met romige kip, champignons en spinazie',
    ook: ['verse pasta', 'zelf pasta maken', 'pastadeeg', 'tagliatelle', 'pasta met kip en champignons', 'romige pasta kip', 'pasta zonder pastamachine', 'eierpasta'],
    keuken: 'Italiaans', soort: 'Hoofdgerecht',
    tijd: 60, wacht: '30 minuten rusten', pers: 3, niveau: 'Gemiddeld', vega: false,
    intro: 'Zelf eierpasta maken zonder pastamachine: de keukenmachine kneedt het stevige deeg, jij rolt het dun uit met een deegroller en snijdt er brede linten van. Verse pasta is in 2 minuten gaar en neemt de saus van kip, champignons en spinazie met room en Parmezaan prachtig op.',
    gerei: [
      { tool: 'keukenmachine', tekst: 'Keukenmachine met deeghaak', of: 'Met de hand kneden kan ook: 10 minuten, het deeg is stevig.' },
      { tool: 'kookpan', tekst: 'Grote kookpan (minstens 3 liter) voor de pasta' },
      { tool: 'hapjespan', tekst: 'Hapjespan of grote koekenpan (28 cm) voor de saus' }
    ],
    ingr: [
      { kop: 'Pastadeeg' },
      { n: 'bloem', q: 300, u: 'g', x: 'het liefst Italiaanse tipo 00, gewone tarwebloem kan ook' },
      { n: 'ei', p: 'eieren', q: 3, u: 'st', x: 'middelgroot, op kamertemperatuur' },
      { n: 'olijfolie', q: 1, u: 'tl' },
      { n: 'zout', q: 1, u: 'snuf' },
      { n: 'griesmeel', q: 2, u: 'el', x: 'of bloem, om te bestuiven', opt: true },
      { kop: 'Saus' },
      { n: 'kipfilet', q: 375, u: 'g', x: 'in reepjes' },
      { n: 'champignons', q: 250, u: 'g', x: 'in plakjes' },
      { n: 'sjalot', p: 'sjalotten', q: 1, u: 'st', x: 'fijngesnipperd' },
      { n: 'knoflook', q: 2, u: 'teen', x: 'fijngehakt of geperst' },
      { n: 'olijfolie', q: 2, u: 'el' },
      { n: 'boter', q: 15, u: 'g' },
      { n: 'kookroom', q: 200, u: 'ml' },
      { n: 'Parmezaanse kaas', q: 40, u: 'g', x: 'geraspt, plus wat extra voor erover' },
      { n: 'spinazie', q: 150, u: 'g', x: 'verse jonge spinazie' },
      { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'rasp en een kneepje sap' },
      { n: 'zout' },
      { n: 'peper' }
    ],
    stappen: [
      { kop: 'Pastadeeg', t: 'Doe de bloem, eieren, olie en zout in een kom en kneed 8 à 10 minuten tot een glad, stevig en soepel deeg. Blijft het kruimelig, voeg dan 1 tl water toe; plakt het, een lepel bloem.', min: 10, km: 'deeghaak met de spatdeksel erop: 1 minuut op stand 1 tot het kruimelt, dan 6 à 7 minuten op stand 2. Het deeg is stevig; kneed het daarna 30 seconden met de hand tot een gladde bal. Blijf erbij, de machine werkt hard.' },
      { t: 'Wikkel het deeg in huishoudfolie en laat het 30 minuten rusten op het aanrecht. Dan ontspant het en kun je het veel makkelijker dun uitrollen.', min: 30 },
      { t: 'Snijd het deeg in 3 stukken; houd de stukken die je nog niet gebruikt ingepakt. Rol een stuk op een met bloem bestoven aanrecht met de deegroller uit tot een lap van 1 à 2 mm dun: je moet je hand er bijna door kunnen zien. Draai de lap steeds een kwartslag en bestuif met bloem als hij plakt.' },
      { t: 'Bestuif de lap royaal met griesmeel of bloem, vouw hem losjes op tot een platte rol van 8 cm breed en snijd er met een scherp mes linten van 6 à 8 mm van. Schud ze meteen los en leg ze in losse nestjes op een met griesmeel bestoven bord. Doe hetzelfde met de andere 2 stukken.' },
      { t: 'Zet een grote pan met 3 liter water en 30 g zout (1½ el) op het vuur voor de pasta.' },
      { kop: 'Saus', t: 'Bestrooi de kip met zout en peper. Verhit 1 el olie in de hapjespan op hoog vuur en bak de kip in 4 à 5 minuten goudbruin en gaar. Schep hem uit de pan.', min: 5 },
      { t: 'Doe de rest van de olie en de boter in de pan en bak de champignons 4 minuten op hoog vuur tot ze bruin zijn en het vocht is verdampt. Bak de sjalot en knoflook 1 minuut mee.', min: 5 },
      { t: 'Schenk de kookroom erbij, roer de Parmezaan en de citroenrasp erdoor en laat 2 minuten zachtjes pruttelen. Doe de kip terug.', min: 2 },
      { t: 'Kook de verse tagliatelle 2 à 3 minuten in het kokende water, tot hij net gaar is maar nog een klein beetje bite heeft. Schep een kopje kookwater apart en giet af.', min: 3 },
      { t: 'Doe de pasta en de spinazie bij de saus en schep 1 minuut om tot de spinazie is geslonken. Maak het smeuïger met een scheut kookwater, breng op smaak met citroensap, zout en peper en strooi er wat extra Parmezaan over.', min: 1 }
    ],
    tips: [
      'Verse pasta is in 2 à 3 minuten gaar. Proef na 2 minuten: te lang koken maakt hem slap.',
      'Pastadeeg kun je een dag van tevoren maken: goed ingepakt in de koelkast, laat het een half uur op temperatuur komen voor je het uitrolt.',
      'Gesneden tagliatelle kun je in nestjes invriezen; kook ze bevroren, 1 minuut langer.'
    ],
    alt: ['Geen zin om te rollen? Gebruik 300 g gedroogde tagliatelle en kook die volgens de verpakking.', 'Kippendijfilet in plaats van kipfilet: sappiger, bak hem 1 à 2 minuten langer.', 'Vegetarisch: laat de kip weg en neem 400 g champignons of gemengde paddenstoelen.']
  }
  );
})();
