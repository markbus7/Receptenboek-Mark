/* Stomen in de rijstkoker: gestoomde vis, dim sum en groente. Alles past in het stoommandje van een
   rijstkoker; zonder rijstkoker gaat het met een vergiet in een kookpan met de deksel erop. */
RECEPTEN.push(
{
  id: 'gestoomde-vis-gember', toegevoegd: '2026-10-26', naam: 'Gestoomde vis met gember en lente-ui',
  ook: ['gestoomde vis', 'steamed fish', 'vis met gember', 'kantonese vis', 'vis uit de rijstkoker', 'stomen'],
  keuken: 'Chinees', soort: 'Hoofdgerecht',
  tijd: 30, pers: 2, niveau: 'Makkelijk', vega: false,
  intro: 'De Kantonese klassieker: witte vis zacht gestoomd met gember, daarna overgoten met sissend hete olie en een zoute sojasaus. Je stoomt de vis in het mandje boven de rijst, dus vis en rijst zijn tegelijk klaar en je hebt maar één pan.',
  gerei: [
    { tool: 'rijstkoker', tekst: 'Rijstkoker met stoommandje en een diep bord dat erin past', of: 'Geen rijstkoker: kook de rijst in een pan en stoom de vis op het bord in een vergiet boven een kookpan met 3 cm kokend water, met de deksel erop.' },
    { tool: 'kookpan', tekst: 'Klein steelpannetje voor de olie' }
  ],
  ingr: [
    { n: 'jasmijnrijst', q: 150, u: 'g' },
    { kop: 'Vis' },
    { n: 'kabeljauwfilet', q: 300, u: 'g', x: 'of een andere witte vis, liefst 2 cm dik, in 2 stukken' },
    { n: 'zout', q: 1, u: 'snuf' },
    { n: 'gember', q: 20, u: 'g', x: 'de helft in plakjes, de helft in heel dunne reepjes' },
    { n: 'lente-ui', p: 'lente-uien', q: 3, u: 'st', x: '1 in stukken, 2 in heel dunne reepjes' },
    { n: 'shaoxing rijstwijn', q: 1, u: 'el', x: 'of droge sherry', opt: true },
    { kop: 'Saus' },
    { n: 'sojasaus', q: 2, u: 'el' },
    { n: 'water', q: 2, u: 'el' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { n: 'sesamolie', q: 0.5, u: 'tl' },
    { n: 'verse koriander', q: 10, u: 'g', opt: true }
  ],
  stappen: [
    { kop: 'Rijst', t: 'Spoel de rijst en zet hem op in de rijstkoker met water tot het streepje.', min: 35 },
    { kop: 'Vis', t: 'Dep de vis droog en bestrooi met een snuf zout. Leg de plakjes gember en de stukken lente-ui op het bord, de vis erop en sprenkel de rijstwijn erover.' },
    { t: 'Zet het bord in het stoommandje en zet het mandje de laatste 10 minuten op de rijstkoker. Stoom 8 à 10 minuten, tot de vis net wit is en uit elkaar valt als je er met een vork in duwt.', min: 10 },
    { kop: 'Saus', t: 'Warm intussen sojasaus, water en suiker in het steelpannetje tot de suiker is opgelost. Giet in een kommetje.' },
    { kop: 'Afmaken', t: 'Haal het bord eruit, giet het vocht weg en haal de gember en lente-ui van onder de vis weg. Leg de reepjes gember en lente-ui op de vis.' },
    { t: 'Verhit olie en sesamolie in het steelpannetje tot ze net beginnen te roken en giet ze over de reepjes: het moet sissen. Schenk de saus rond de vis en leg de koriander erop. Eet met de rijst.' }
  ],
  tips: ['Heeft je rijstkoker geen stand om tegelijk te koken en te stomen? Kook dan eerst de rijst, laat hem in de warmhoudstand staan en stoom de vis daarna op de stand Stomen.', 'Vis uit de vriezer eerst helemaal ontdooien en goed droogdeppen, anders loopt er veel vocht op het bord.', 'Dunne stukken (1 cm) zijn al na 6 minuten gaar.'],
  alt: ['Met zalmfilet: stoom 10 à 12 minuten.', 'Met garnalen: leg 200 g rauwe gepelde garnalen op het bord en stoom 5 minuten.'],
  bij: ['gestoomde-groenten-sesam']
},
{
  id: 'siu-mai', toegevoegd: '2026-10-26', naam: 'Siu mai (dim sum met varkensvlees en garnalen)',
  ook: ['siu mai', 'shumai', 'shu mai', 'dim sum', 'dimsum', 'gestoomde dumplings', 'stomen'],
  keuken: 'Chinees', soort: 'Ontbijt & lunch',
  tijd: 60, pers: 24, stuks: 'siu mai', niveau: 'Gemiddeld', vega: false,
  intro: 'De bekendste dim sum: open bekertjes van een dun velletje met een sappige vulling van varkensgehakt, garnalen en shiitake, met een oranje stipje wortel erop. Vouwen is makkelijker dan bij gyoza: je knijpt ze gewoon in je hand dicht. In de rijstkoker stoom je ze in rondes.',
  gerei: [
    { tool: 'rijstkoker', tekst: 'Rijstkoker met stoommandje', of: 'Geen rijstkoker: een bamboe stoommandje op een wok met water, of een vergiet in een kookpan met 3 cm kokend water en de deksel erop.' }
  ],
  ingr: [
    { kop: 'Vulling' },
    { n: 'varkensgehakt', q: 300, u: 'g' },
    { n: 'garnalen', q: 150, u: 'g', x: 'rauw en gepeld, grof gehakt' },
    { n: 'shiitake', q: 60, u: 'g', x: 'heel fijn gehakt' },
    { n: 'lente-ui', p: 'lente-uien', q: 2, u: 'st', x: 'fijngesneden' },
    { n: 'gember', q: 10, u: 'g', x: 'geraspt' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'oestersaus', q: 1, u: 'el' },
    { n: 'shaoxing rijstwijn', q: 1, u: 'el', x: 'of droge sherry' },
    { n: 'sesamolie', q: 1, u: 'tl' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'maïzena', q: 1, u: 'el' },
    { n: 'witte peper', q: 1, u: 'snuf' },
    { kop: 'Vouwen' },
    { n: 'gyozavelletje', p: 'gyozavelletjes', q: 24, u: 'st', x: 'rond, uit de toko of diepvries; ontdooid onder een vochtige doek' },
    { n: 'wortel', p: 'wortels', q: 1, u: 'st', x: 'heel fijn geraspt, voor erop' },
    { kop: 'Dipsaus' },
    { n: 'sojasaus', q: 3, u: 'el' },
    { n: 'zwarte rijstazijn', q: 1, u: 'el', x: 'of gewone rijstazijn' },
    { n: 'chili-olie', q: 1, u: 'tl', opt: true }
  ],
  stappen: [
    { kop: 'Vulling', t: 'Doe het gehakt met sojasaus, oestersaus, rijstwijn, sesamolie, suiker, maïzena en witte peper in een kom. Roer 2 minuten stevig in één richting, tot het een plakkerige massa is: dan blijft de vulling sappig.', min: 2 },
    { t: 'Roer garnalen, shiitake, lente-ui en gember erdoor. Zet de vulling 15 minuten in de koelkast, dan is hij makkelijker te vullen.', min: 15 },
    { kop: 'Vouwen', t: 'Leg een velletje in je holle hand en schep er een volle eetlepel vulling op. Knijp je hand dicht, zodat het velletje als een bekertje om de vulling plooit en de bovenkant open blijft. Druk de vulling plat met een natte lepel en zet hem op tafel, zodat de bodem plat wordt. Leg er een stipje wortel op.' },
    { kop: 'Stomen', t: 'Leg een vel bakpapier met een paar gaatjes erin in het stoommandje en zet er zoveel siu mai op als er passen, met 1 cm ruimte ertussen. Houd de rest onder een vochtige doek.' },
    { t: 'Stoom ze 10 minuten op de stand Stomen, tot de vulling stevig en gaar is. Stoom de rest in de volgende rondes; vul tussendoor water bij als het bijna op is.', min: 10 },
    { kop: 'Dipsaus', t: 'Roer de sojasaus met de azijn en eventueel de chili-olie tot dipsaus. Eet de siu mai warm.' }
  ],
  tips: ['Siu mai kun je goed invriezen voor het stomen: leg ze los van elkaar op een plank in de vriezer en doe ze daarna in een zak. Stoom ze bevroren 14 minuten.', 'Wontonvelletjes (vierkant) werken ook; knip er dan rondjes van of laat de puntjes erboven uitsteken.'],
  alt: ['Alleen garnalen: gebruik 400 g garnalen en laat het gehakt weg.', 'Vegetarisch: vervang gehakt en garnalen door 300 g fijngehakte champignons en 150 g fijngehakte, uitgeknepen tofu.'],
  bij: ['gestoomde-groenten-sesam']
},
{
  id: 'gestoomde-groenten-sesam', toegevoegd: '2026-10-26', naam: 'Gestoomde groenten met sesamdressing',
  ook: ['gestoomde groente', 'gestoomde groenten', 'goma-ae', 'goma ae', 'groente stomen', 'broccoli stomen', 'stomen'],
  keuken: 'Japans', soort: 'Salade & bijgerecht',
  tijd: 20, pers: 2, niveau: 'Makkelijk', vega: true,
  intro: 'Broccoli, sperziebonen en wortel uit het stoommandje, nog knapperig en felgekleurd, met een nootachtige Japanse dressing van geroosterd sesamzaad en sojasaus. Lekker bij rijst en vis of vlees, warm of koud.',
  gerei: [
    { tool: 'rijstkoker', tekst: 'Rijstkoker met stoommandje', of: 'Geen rijstkoker: een vergiet in een kookpan met 3 cm kokend water en de deksel erop.' },
    { tool: 'koekenpan', tekst: 'Koekenpan om het sesamzaad te roosteren' }
  ],
  ingr: [
    { n: 'broccoli', q: 250, u: 'g', x: 'in roosjes, de steel geschild en in plakjes' },
    { n: 'sperziebonen', q: 150, u: 'g', x: 'de puntjes eraf' },
    { n: 'wortel', p: 'wortels', q: 1, u: 'st', x: 'in schuine plakjes van ½ cm' },
    { kop: 'Sesamdressing' },
    { n: 'sesamzaad', q: 3, u: 'el', x: 'wit' },
    { n: 'sojasaus', q: 1.5, u: 'el' },
    { n: 'suiker', q: 1, u: 'tl' },
    { n: 'rijstazijn', q: 1, u: 'tl' },
    { n: 'sesamolie', q: 0.5, u: 'tl' }
  ],
  stappen: [
    { t: 'Zet de rijstkoker met water en het stoommandje aan op de stand Stomen.' },
    { t: 'Rooster het sesamzaad in de droge koekenpan op middelhoog vuur 2 à 3 minuten tot het goudbruin is en geurt. Schud de pan steeds. Maal het in een vijzel grof fijn (of hak het fijn op een plank).', min: 3 },
    { t: 'Roer het sesamzaad met sojasaus, suiker, rijstazijn en sesamolie tot een dikke dressing.' },
    { t: 'Leg zodra er stoom komt de wortel en sperziebonen in het mandje en stoom 3 minuten.', min: 3 },
    { t: 'Leg de broccoli erbij en stoom nog 5 à 6 minuten, tot alles beetgaar is: een mes moet er met een beetje weerstand in gaan.', min: 6 },
    { t: 'Schep de groenten meteen door de dressing.' }
  ],
  tips: ['Wil je de groenten koud eten? Spoel ze na het stomen kort onder koud water: dan blijven ze knapperig en groen. Doe de dressing er pas vlak voor het eten door.', 'Gemalen sesamzaad uit de toko (suri goma) scheelt het roosteren en malen.'],
  alt: ['Met spinazie: stoom 300 g spinazie 2 minuten, knijp hem uit en meng met de dressing (de klassieke horenso no goma-ae).', 'Met bloemkool, peultjes of paksoi: paksoi en peultjes hebben 3 à 4 minuten nodig, bloemkool 8.'],
  bij: ['gestoomde-vis-gember']
}
);
