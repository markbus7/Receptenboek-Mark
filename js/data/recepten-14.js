/* Frans: crêpes, croque monsieur, crème brûlée en de klassieke sauzen. Italiaans: bolognese, gehaktballen in tomatensaus, minestrone, panna cotta, aglio olio, sugo en pesto */
RECEPTEN.push(
{
  id: 'crepes', naam: 'Crêpes', ook: ['flensjes', 'crepes suzette'],
  keuken: 'Frans', soort: 'Dessert',
  tijd: 35, wacht: '30 min rusten', pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Flinterdunne Franse pannenkoekjes met een kanten randje. Klassiek met suiker en citroen, feestelijk als crêpes Suzette.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan of crêpepan van 24 à 26 cm, liefst antiaanbak, en een dunne spatel', of: 'Alleen een RVS-pan? Verhit hem goed voor (een waterdruppel moet als een balletje over de bodem rollen) en vet hem voor elke crêpe opnieuw in.' },
    { tool: 'staafmixer', tekst: 'Staafmixer met hoge beker voor een klontvrij beslag', of: 'Met een garde lukt het ook: klop eerst met een deel van de melk een dik, glad beslag en voeg dan pas de rest toe.' }
  ],
  ingr: [
    { kop: 'Beslag' },
    { n: 'bloem', q: 250, u: 'g' },
    { n: 'ei', p: 'eieren', q: 3, u: 'st' },
    { n: 'melk', q: 550, u: 'ml' },
    { n: 'boter', q: 50, u: 'g', x: '30 g voor het beslag, de rest om de pan in te vetten' },
    { n: 'zout', q: 1, u: 'snuf' },
    { kop: 'Vulling' },
    { n: 'suiker', q: 4, u: 'el' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st' },
    { n: 'hazelnootpasta', q: 100, u: 'g', x: 'zoals Nutella', opt: true }
  ],
  stappen: [
    { t: 'Doe de bloem en het zout in een kom, maak een kuiltje en breek de eieren erin. Giet er een derde van de melk bij en klop met de garde vanuit het midden tot een dik, glad beslag. Klop dan de rest van de melk erdoor. Met de staafmixer: doe alles in de hoge beker en mix 30 seconden.' },
    { t: 'Smelt alle boter. Roer 30 g (ca. 2 el) door het beslag; de rest gebruik je straks om de pan in te vetten. Het beslag is zo dun als ongeklopte slagroom. Is het dikker, voeg dan een scheutje melk toe.' },
    { t: 'Laat het beslag afgedekt 30 minuten rusten. Dan worden de crêpes soepeler en scheuren ze minder snel.', min: 30 },
    { t: 'Verhit de koekenpan op middelhoog vuur. Vet hem in met een propje keukenpapier dat je door de gesmolten boter haalt.' },
    { t: 'Giet een kleine soeplepel beslag (ca. 50 ml) in de pan en draai en kantel de pan meteen, zodat de bodem dun bedekt raakt. Bak ca. 1 minuut, tot de rand loskomt en de onderkant goudbruine vlekjes heeft.', min: 1 },
    { t: 'Keer de crêpe met de spatel en bak de andere kant 30 seconden. Stapel de crêpes op een bord onder een schone theedoek. De eerste mislukt bijna altijd: dat hoort erbij.' },
    { t: 'Bestrooi een crêpe met suiker, knijp er wat citroen over en vouw hem in vieren. Of besmeer hem met hazelnootpasta en rol hem op.' }
  ],
  tips: [
    'Crêpes Suzette: laat 50 g boter en 50 g suiker in de koekenpan smelten tot een lichte karamel. Blus af met het sap en de geraspte schil van 2 sinaasappels en laat 2 minuten inkoken. Leg de in vieren gevouwen crêpes in de saus en schenk er 3 el Grand Marnier over. Flamberen? Zet de afzuigkap uit, zet de fles ver weg en steek de damp aan met een lange aansteker. Of laat de likeur gewoon 1 minuut meekoken.',
    'Het beslag blijft een dag goed in de koelkast. Klop het even door; het is dan vaak wat dikker geworden, dus verdun het met een scheutje melk.'
  ],
  alt: ['Hartig: de galette uit Bretagne. Maak een beslag van 250 g boekweitmeel, 1 ei, 600 ml water en ½ tl zout. Bak de galette 1 minuut, keer hem en beleg hem meteen met een plak ham en geraspte Gruyère. Breek in het midden een ei, vouw de randen naar binnen en bak met de deksel op de pan tot het eiwit gestold is: een galette complète.']
},
{
  id: 'croque-monsieur', naam: 'Croque monsieur', ook: ['croque madame', 'tosti'],
  keuken: 'Frans', soort: 'Ontbijt & lunch',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'De Parijse caféklassieker: een tosti met ham en Gruyère, bedekt met bechamel en gegratineerd tot een borrelende kaaskorst.',
  methodes: [ { id: 'oven', naam: 'Oven (gegratineerd)' }, { id: 'contactgrill', naam: 'Contactgrill' } ],
  gerei: [
    { tool: 'kookpan', tekst: 'Steelpan en een garde voor de bechamel' },
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier', m: 'oven' },
    { tool: 'contactgrill', tekst: 'Contactgrill, zoals de OptiGrill', m: 'contactgrill' }
  ],
  ingr: [
    { n: 'brood', q: 8, u: 'plak', x: 'wit casinobrood of pain de mie, liefst een dag oud' },
    { n: 'ham', q: 4, u: 'plak', x: 'beenham of achterham; of 8 dunne plakken' },
    { n: 'Gruyère', q: 150, u: 'g', x: 'geraspt; of Emmentaler of belegen kaas' },
    { n: 'mosterd', q: 2, u: 'tl', x: 'Dijon', opt: true },
    { kop: 'Bechamel' },
    { n: 'boter', q: 25, u: 'g', x: 'plus een klontje zachte boter voor de contactgrill' },
    { n: 'bloem', q: 25, u: 'g' },
    { n: 'melk', q: 250, u: 'ml' },
    { n: 'nootmuskaat', q: 1, u: 'snuf' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Maak de bechamel: smelt de boter in de steelpan op middelhoog vuur, roer de bloem erdoor en laat 1 minuut garen. Klop de melk er in scheutjes door met de garde en laat 3 minuten zachtjes pruttelen tot een dikke saus. Breng op smaak met nootmuskaat, zout en peper.', min: 4 },
    { t: 'Verwarm de oven voor op 220 °C (hetelucht 200 °C).', m: 'oven' },
    { t: 'Besmeer 4 sneetjes brood dun met mosterd. Beleg ze met ham en de helft van de kaas en dek af met de andere sneetjes. Leg de croques op de bakplaat en bak ze 5 minuten, tot de onderkant knapperig is.', m: 'oven', min: 5 },
    { t: 'Smeer de bechamel royaal over de bovenkant en strooi de rest van de kaas erover. Bak 8 à 10 minuten bovenin de oven, tot de kaas goudbruin is en borrelt. Zet voor een extra krokant korstje de laatste 2 minuten de grill aan.', m: 'oven', min: 9 },
    { t: 'Verwarm de contactgrill voor op middelhoge stand (of het sandwichprogramma).', m: 'contactgrill' },
    { t: 'Besmeer 4 sneetjes brood met mosterd en een dun laagje bechamel: de saus gaat bij de grill tussen het brood, niet erbovenop. Beleg met ham en alle kaas en dek af met de andere sneetjes. Besmeer de buitenkant dun met zachte boter.', m: 'contactgrill' },
    { t: 'Leg de croques op de grill en sluit de deksel zonder hard te drukken. Grill 4 à 5 minuten, tot ze goudbruin zijn en de kaas gesmolten is.', m: 'contactgrill', min: 5 },
    { t: 'Snijd de croques diagonaal door en eet ze meteen, met mes en vork en een frisse groene salade.' }
  ],
  tips: [
    'Croque madame: bak per croque een spiegelei in de koekenpan en leg het er vlak voor het serveren bovenop.',
    'Maak de bechamel goed dik, anders loopt hij van het brood af. Lauw smeert hij het makkelijkst.'
  ],
  alt: [
    'Vegetarisch: vervang de ham door gebakken champignons of plakjes tomaat.',
    'In de airfryer: bak de croques 4 minuten op 180 °C, schep de bechamel en de kaas erop en bak nog 4 à 5 minuten tot ze goudbruin zijn.'
  ]
},
{
  id: 'creme-brulee', naam: 'Crème brûlée', ook: ['creme brulee'],
  keuken: 'Frans', soort: 'Dessert',
  tijd: 60, wacht: '3 uur opstijven', pers: 6, niveau: 'Gemiddeld', vega: true,
  intro: 'Zijdezachte vanillecrème onder een glazen laagje karamel dat knapt als je er met je lepel op tikt.',
  gerei: [
    { tool: 'ovenschaal', tekst: '6 ovenvaste schaaltjes (ramekins) van ca. 125 ml, en een ovenschaal of braadslee waar ze samen in passen' },
    { tool: 'kookpan', tekst: 'Steelpan, garde en een fijne zeef' },
    { tool: 'oven', tekst: 'Oven, met grillstand voor de karamellaag', of: 'Een keukenbrander (crème-brûléebrander) maakt de karamel sneller en gelijkmatiger dan de grill.' }
  ],
  ingr: [
    { n: 'slagroom', q: 500, u: 'ml', x: 'vloeibaar, uit een pak (geen spuitbus)' },
    { n: 'eidooier', p: 'eidooiers', q: 6, u: 'st' },
    { n: 'suiker', q: 80, u: 'g' },
    { n: 'vanillestokje', p: 'vanillestokjes', q: 1, u: 'st', x: 'of 1 tl vanille-extract' },
    { kop: 'Karamellaag' },
    { n: 'suiker', q: 6, u: 'el', x: 'kristalsuiker of rietsuiker' }
  ],
  stappen: [
    { t: 'Verwarm de oven voor op 150 °C (hetelucht 130 °C). Zet de schaaltjes in de ovenschaal en zet een waterkoker met water aan.' },
    { t: 'Snijd het vanillestokje in de lengte open en schraap het merg eruit. Verwarm de room met het merg en het stokje in de steelpan tot hij net tegen de kook aan is. Haal de pan van het vuur en laat 10 minuten trekken.', min: 10 },
    { t: 'Roer de eidooiers en de suiker in een kom met de garde door elkaar tot de suiker is opgenomen. Klop niet luchtig: schuim geeft gaatjes in de crème.' },
    { t: 'Haal het vanillestokje uit de room. Giet de warme room in een dun straaltje bij de dooiers terwijl je rustig blijft roeren. Giet het mengsel door de zeef in een kan en schep eventueel schuim eraf.' },
    { t: 'Verdeel de crème over de schaaltjes. Zet de ovenschaal in de oven en giet er zoveel heet water in dat de schaaltjes tot halverwege in het water staan.' },
    { t: 'Bak 30 à 40 minuten, tot de rand gestold is maar het midden nog licht trilt als je tegen een schaaltje tikt.', min: 35 },
    { t: 'Haal de schaaltjes uit het waterbad en laat ze afkoelen. Dek ze af en laat ze minimaal 3 uur opstijven in de koelkast.', min: 180 },
    { t: 'Dep vlak voor het serveren eventueel vocht van de bovenkant. Strooi op elk schaaltje een dun, gelijkmatig laagje suiker (1 el) en brand het met de keukenbrander in kleine rondjes tot amberkleurige karamel. Geen brander? Zet de schaaltjes op de bakplaat vlak onder de hete ovengrill en blijf erbij: in 2 à 4 minuten karamelliseert de suiker. Laat de karamel 2 minuten hard worden.' }
  ],
  tips: [
    'Je kunt de crèmes tot 2 dagen van tevoren bakken. Karamelliseer ze pas vlak voor het serveren, anders wordt de karamel zacht.',
    'Onder de grill wordt de crème ook wat warm. Zet de schaaltjes daarna nog 15 minuten in de koelkast voor het mooie contrast van koude crème en knapperige karamel.'
  ],
  alt: [
    'Smaakvarianten: laat geraspte sinaasappelschil, een eetlepel oploskoffie of een paar takjes lavendel meetrekken in de warme room.',
    'Geen vanillestokje? Roer 1 tl vanille-extract door de room als die van het vuur is.'
  ]
},
{
  id: 'pepersaus', naam: 'Pepersaus', ook: ['sauce au poivre', 'peppersaus'],
  keuken: 'Frans', soort: 'Saus',
  tijd: 10, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Romige saus met grof gekneusde peper en een scheut cognac, gemaakt in de pan waarin je biefstuk net bakte. Zo gebruik je alle smaak van de aanbaksels.',
  gerei: [ { tool: 'koekenpan', tekst: 'De koekenpan waarin je het vlees bakte; een RVS-pan geeft de meeste aanbaksels' } ],
  ingr: [
    { n: 'zwarte peperkorrels', q: 2, u: 'tl', x: 'grof gekneusd; of 2 el groene peperkorrels uit een potje, uitgelekt' },
    { n: 'sjalot', p: 'sjalotten', q: 1, u: 'st', x: 'fijngesnipperd' },
    { n: 'boter', q: 20, u: 'g' },
    { n: 'cognac', q: 3, u: 'el', x: 'of brandy', opt: true },
    { n: 'runderbouillon', q: 150, u: 'ml', x: 'of kalfsfond' },
    { n: 'slagroom', q: 150, u: 'ml', x: 'vloeibaar, uit een pak (geen spuitbus); of kookroom of crème fraîche' },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Kneus de peperkorrels grof in een vijzel, of doe ze in een diepvrieszakje en sla er een paar keer met de bodem van een pan op. Gemalen peper uit de molen is te fijn en te scherp.' },
    { t: 'Bak de biefstuk in de koekenpan en laat hem onder aluminiumfolie rusten. Giet overtollig vet uit de pan, maar laat de bruine aanbaksels zitten.' },
    { t: 'Zet de pan op middelhoog vuur en smelt de boter. Fruit de sjalot 2 minuten en bak de peper nog 30 seconden mee, tot hij geurt.', min: 2 },
    { t: 'Neem de pan van het vuur en giet de cognac erin. Zet de pan terug en laat de cognac in 1 minuut bijna helemaal inkoken. Wil je flamberen? Zet de afzuigkap uit, houd je gezicht en de fles ver weg en steek de damp aan met een lange aansteker. Leg een deksel klaar om de vlam te doven als hij te hoog oplaait; na 10 à 20 seconden gaat hij vanzelf uit.', min: 1 },
    { t: 'Giet de bouillon erbij en schraap de aanbaksels los met een houten spatel. Laat op hoog vuur in 3 à 4 minuten tot de helft inkoken.', min: 4 },
    { t: 'Roer de room erdoor en laat 2 à 3 minuten pruttelen, tot de saus de achterkant van een lepel bedekt. Giet het vleessap dat uit de rustende biefstuk is gelopen erbij en breng op smaak met zout.', min: 3 }
  ],
  tips: [
    'Welke room? Gebruik vloeibare slagroom uit een pak, niet de slagroom uit een spuitbus. Kookroom is het makkelijkst omdat die niet schift, en crème fraîche werkt ook. Room over? Vries hem in voor een volgende saus of soep, of roer hem door pasta, stamppot of soep.',
    'Voor echte steak au poivre druk je de gekneusde peper vóór het bakken aan beide kanten in de biefstuk. Bak dan op middelhoog in plaats van hoog vuur, anders verbrandt de peper.'
  ],
  alt: [
    'Geen bakresten, bijvoorbeeld omdat je het vlees op de contactgrill bereidde? Maak de saus in een steelpan: fruit sjalot en peper in 30 g boter en gebruik geconcentreerde bouillon (½ bouillonblokje op 150 ml water) voor een diepe smaak.',
    'Zonder alcohol: laat de cognac weg en blus af met een scheutje extra bouillon en 1 tl worcestershiresaus.'
  ],
  bij: ['steak-frites']
},
{
  id: 'champignonsaus', naam: 'Champignonroomsaus', ook: ['champignonsaus', 'champignon roomsaus'],
  keuken: 'Frans', soort: 'Saus',
  tijd: 20, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Goudbruin gebakken champignons in een romige saus met tijm en een scheut witte wijn. Lekker bij biefstuk, schnitzel of kip.',
  gerei: [ { tool: 'koekenpan', tekst: 'RVS-koekenpan van 28 cm, groot genoeg om de champignons in één laag te bakken' } ],
  ingr: [
    { n: 'champignons', q: 250, u: 'g', x: 'wit of kastanje, in plakjes' },
    { n: 'sjalot', p: 'sjalotten', q: 1, u: 'st', x: 'fijngesnipperd' },
    { n: 'knoflook', q: 1, u: 'teen', x: 'fijngehakt' },
    { n: 'verse tijm', q: 2, u: 'takje', x: 'of ½ tl gedroogde tijm' },
    { n: 'olijfolie', q: 1, u: 'el' },
    { n: 'boter', q: 25, u: 'g' },
    { n: 'witte wijn', q: 75, u: 'ml', opt: true },
    { n: 'runderbouillon', q: 150, u: 'ml', x: 'of kalfsfond' },
    { n: 'slagroom', q: 200, u: 'ml', x: 'vloeibaar, uit een pak (geen spuitbus); of kookroom of crème fraîche' },
    { n: 'verse peterselie', q: 1, u: 'el', x: 'fijngehakt' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Verhit de olie en de helft van de boter in de koekenpan op hoog vuur. Leg de champignons in één laag in de pan en laat ze 2 minuten ongestoord bakken.', min: 2 },
    { t: 'Schep om en bak nog 4 à 5 minuten, tot het vocht verdampt is en de champignons goudbruin zijn. Strooi er pas nu wat zout over.', min: 5 },
    { t: 'Zet het vuur middelhoog en doe de rest van de boter erbij. Fruit de sjalot 2 minuten en bak de knoflook en de tijmblaadjes 30 seconden mee.', min: 2 },
    { t: 'Blus af met de wijn, schraap de aanbaksels los en laat 1 minuut inkoken. Giet de bouillon erbij en laat in 3 minuten tot de helft inkoken.', min: 4 },
    { t: 'Roer de room erdoor en laat 3 à 4 minuten zachtjes pruttelen, tot de saus romig is en een lepel bedekt. Roer de peterselie erdoor en breng op smaak met zout en peper.', min: 4 }
  ],
  tips: [
    'Was champignons niet onder de kraan: ze zuigen water op en gaan dan koken in plaats van bakken. Veeg ze schoon met keukenpapier of een borsteltje.',
    'Welke room? Gebruik vloeibare slagroom uit een pak, niet de slagroom uit een spuitbus. Kookroom is het makkelijkst omdat die niet schift, en crème fraîche werkt ook. Room over? Vries hem in voor een volgende saus of soep, of roer hem door pasta, stamppot of soep.',
    'Bak je er vlees bij? Maak de saus in dezelfde pan zodra het vlees eruit is: de aanbaksels geven extra smaak.'
  ],
  alt: [
    'Vegetarisch: gebruik groentebouillon met een scheutje sojasaus voor extra diepte.',
    'Met een scheut cognac in plaats van witte wijn wordt de saus voller; lekker bij biefstuk.'
  ],
  bij: ['steak-frites', 'wiener-schnitzel']
},
{
  id: 'bearnaise', naam: 'Saus bearnaise', ook: ['bearnaisesaus', 'béarnaise'],
  keuken: 'Frans', soort: 'Saus',
  tijd: 25, pers: 4, niveau: 'Moeilijk', vega: true,
  intro: 'De koningin van de biefstuksauzen: een warme botersaus met eidooier, frisgezuurd met een reductie van azijn, sjalot en dragon.',
  gerei: [
    { tool: 'kookpan', tekst: 'Klein steelpannetje voor de reductie en een tweede voor de boter' },
    { tool: 'kookpan', tekst: 'Steelpan met een hittebestendige kom die er precies op past (au bain-marie), en een garde' }
  ],
  ingr: [
    { kop: 'Reductie' },
    { n: 'dragonazijn', q: 4, u: 'el', x: 'of witte wijnazijn' },
    { n: 'witte wijn', q: 4, u: 'el', x: 'of water' },
    { n: 'sjalot', p: 'sjalotten', q: 1, u: 'st', x: 'heel fijngesnipperd' },
    { n: 'zwarte peperkorrels', q: 0.5, u: 'tl', x: 'gekneusd' },
    { n: 'verse dragon', q: 1, u: 'bos', x: 'ca. 15 g; steeltjes voor de reductie, blaadjes fijngehakt voor de saus' },
    { kop: 'Saus' },
    { n: 'eidooier', p: 'eidooiers', q: 3, u: 'st' },
    { n: 'boter', q: 175, u: 'g' },
    { n: 'cayennepeper', q: 1, u: 'snuf', opt: true },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Doe azijn, wijn, sjalot, peper en de dragonsteeltjes in het steelpannetje. Laat op middelhoog vuur in 3 à 4 minuten inkoken tot er ongeveer 2 el vocht over is. Giet door een zeef, druk de sjalot goed uit en laat afkoelen.', min: 4 },
    { t: 'Smelt de boter op laag vuur en schep het witte schuim eraf. Voor geklaarde boter giet je de heldere boter voorzichtig af en laat je het melkachtige laagje onderin achter. Houd de boter warm, niet heet.' },
    { t: 'Breng in de steelpan 3 cm water aan de kook en zet het vuur laag, zodat het water net niet meer kookt. De bodem van de kom mag het water niet raken.' },
    { t: 'Klop de dooiers met de reductie en 1 el water in de kom los. Zet de kom op de pan en klop 3 à 4 minuten, tot het mengsel dik en schuimig is en de garde een spoor achterlaat. Wordt de kom te heet? Til hem even van de pan, anders krijg je roerei.', min: 4 },
    { t: 'Haal de kom van de pan. Klop de boter er eerst druppel voor druppel door, daarna in een dun straaltje, tot een dikke, glanzende saus.' },
    { t: 'Roer de gehakte dragon erdoor en breng op smaak met zout en eventueel cayenne. Serveer lauwwarm. Je kunt de saus tot een uur warm houden: zet de kom op de pan met warm water, met het vuur uit.' }
  ],
  tips: [
    'Schift de saus (hij wordt korrelig en de boter komt los)? Klop er meteen een eetlepel koud water door. Helpt dat niet, klop dan een nieuwe dooier met 1 el water los in een schone kom en klop de geschifte saus er druppelsgewijs door.',
    'De reductie kun je een dag van tevoren maken en afgedekt in de koelkast bewaren.'
  ],
  alt: [
    'Snel met de staafmixer: doe dooiers, reductie en 1 el water in een hoge beker. Verhit de boter tot hij schuimt en borrelt en giet hem met de staafmixer draaiend in een dun straaltje erbij. Roer de dragon erdoor. Klaar in 2 minuten.',
    'Geen verse dragon? Gebruik 1 el gedroogde dragon in de reductie en wat fijngehakte kervel of peterselie in de saus.'
  ],
  bij: ['steak-frites']
},
{
  id: 'hollandaise', naam: 'Hollandaisesaus', ook: ['hollandaise', 'sauce hollandaise'],
  keuken: 'Frans', soort: 'Saus',
  tijd: 15, pers: 4, niveau: 'Gemiddeld', vega: true,
  intro: 'Fluweelzachte botersaus met eidooier en citroen. Onmisbaar bij eggs Benedict, asperges en gepocheerde vis.',
  methodes: [ { id: 'kookpan', naam: 'Au bain-marie' }, { id: 'staafmixer', naam: 'Staafmixer' } ],
  gerei: [
    { tool: 'kookpan', tekst: 'Klein steelpannetje om de boter te smelten' },
    { tool: 'kookpan', tekst: 'Steelpan met een hittebestendige kom die er precies op past, en een garde', m: 'kookpan' },
    { tool: 'staafmixer', tekst: 'Staafmixer met een hoge, smalle beker waar de mixerkop net in past', m: 'staafmixer' }
  ],
  ingr: [
    { n: 'eidooier', p: 'eidooiers', q: 3, u: 'st' },
    { n: 'boter', q: 175, u: 'g' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap, ca. 1 el' },
    { n: 'water', q: 1, u: 'el' },
    { n: 'cayennepeper', q: 1, u: 'snuf', opt: true },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Smelt de boter op laag vuur in het steelpannetje en schep het schuim eraf. Laat hem iets afkoelen: warm, maar niet heet.', m: 'kookpan' },
    { t: 'Breng in de steelpan 3 cm water aan de kook en zet het vuur laag, zodat het water net niet kookt. Klop in de kom de dooiers los met het water, 1 el citroensap en een snuf zout.', m: 'kookpan' },
    { t: 'Zet de kom op de pan (de bodem mag het water niet raken) en klop 3 à 4 minuten, tot het mengsel dik en schuimig is en de garde een spoor achterlaat. Til de kom even van de pan als het te heet wordt.', m: 'kookpan', min: 4 },
    { t: 'Haal de kom van de pan. Klop de boter er eerst druppel voor druppel door, daarna in een dun straaltje, tot een dikke, glanzende saus. Laat het melkachtige bezinksel onderin het pannetje achter.', m: 'kookpan' },
    { t: 'Smelt de boter in het steelpannetje en verhit hem tot hij schuimt en net begint te borrelen. Hij moet echt heet zijn: daarmee garen de dooiers.', m: 'staafmixer' },
    { t: 'Doe dooiers, water, 1 el citroensap en een snuf zout in de hoge beker. Zet de staafmixer op de bodem, zet hem aan en giet de hete boter er in een dun straaltje bij. Beweeg de mixer langzaam omhoog als de saus dik wordt. Na ongeveer een minuut is hij klaar.', m: 'staafmixer' },
    { t: 'Breng de saus op smaak met zout, citroensap en eventueel cayenne. Te dik? Roer er een theelepel warm water door. Serveer meteen, of houd hem tot een uur warm in een kom boven warm (niet heet) water.' }
  ],
  tips: [
    'Schift de saus? Klop er een eetlepel koud water door. Helpt dat niet: klop een nieuwe dooier los in een schone kom en klop de geschifte saus er druppelsgewijs door.',
    'Opwarmen gaat niet: dan schift hij. Maak hollandaise daarom pas vlak voor het eten, of houd hem warm in een voorverwarmde thermoskan.'
  ],
  alt: [
    'Sauce mousseline: spatel er vlak voor het serveren 100 ml lobbig geklopte slagroom door. Extra luchtig bij asperges.',
    'Met een reductie van azijn, sjalot en dragon wordt hollandaise een bearnaise: zie Saus bearnaise.'
  ],
  bij: ['eggs-benedict']
},
{
  id: 'bechamel', naam: 'Bechamelsaus', ook: ['witte saus', 'béchamel', 'roux'],
  keuken: 'Frans', soort: 'Saus',
  tijd: 15, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'De witte basissaus van de Franse keuken: een roux van boter en bloem, gebonden met melk. Voor lasagne, moussaka en croques, en de basis van talloze andere sauzen.',
  gerei: [ { tool: 'kookpan', tekst: 'Steelpan met dikke bodem en een garde' } ],
  ingr: [
    { n: 'boter', q: 40, u: 'g' },
    { n: 'bloem', q: 40, u: 'g' },
    { n: 'melk', q: 500, u: 'ml' },
    { n: 'nootmuskaat', q: 1, u: 'snuf', x: 'versgeraspt' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 1, u: 'st', opt: true },
    { n: 'zout' },
    { n: 'peper', x: 'liefst wit' }
  ],
  stappen: [
    { t: 'Verwarm de melk met het laurierblad in een pannetje of in de magnetron tot hij dampt en haal het blad eruit. Warme melk geeft minder snel klontjes.' },
    { t: 'Smelt de boter in de steelpan op middellaag vuur tot hij schuimt. Hij mag niet bruin worden.' },
    { t: 'Strooi de bloem erbij en roer met de garde 1 à 2 minuten tot een glad papje: de roux. Hij ruikt licht naar koekjes en blijft lichtgeel.', min: 2 },
    { t: 'Haal de pan van het vuur. Giet een flinke scheut melk erbij en klop tot een dikke, gladde pap. Voeg de rest van de melk in drie delen toe en klop telkens glad voordat je meer toevoegt.' },
    { t: 'Zet de pan terug op middelhoog vuur en breng al roerend aan de kook. Laat 5 minuten zachtjes pruttelen en blijf over de bodem roeren; zo verdwijnt de rauwe bloemsmaak.', min: 5 },
    { t: 'Breng op smaak met nootmuskaat, zout en peper. Gebruik de saus meteen, of druk vershoudfolie op het oppervlak tegen een velletje.' }
  ],
  tips: [
    'Afgeleide sauzen: roer 75 à 100 g geraspte kaas door de hete saus voor kaassaus (sauce Mornay, zie Kaassaus in het hoofdstuk Nederlands). Met 1 à 2 el grove mosterd heb je mosterdsaus voor vis, ham of eieren, en met een flinke hand fijngehakte peterselie peterseliesaus voor vis of bloemkool.',
    'Dikte naar keuze, per 500 ml melk: 30 g boter en 30 g bloem voor een dunne saus (groente, soep), 40 g voor lasagne en moussaka, 50 à 60 g voor een dikke saus voor croques of kroketten.'
  ],
  alt: [
    'Toch klontjes? Klop ze weg met de garde of werk de saus even glad met de staafmixer.',
    'Glutenvrij: breng melk en boter aan de kook en bind met 3 el maïzena, aangelengd met een scheutje koude melk. Laat 1 minuut doorkoken.'
  ],
  bij: ['lasagne-bolognese', 'moussaka', 'croque-monsieur']
},
{
  id: 'spaghetti-bolognese', naam: 'Spaghetti bolognese', ook: ['pasta bolognese', 'spag bol', 'ragù alla bolognese', 'bolognesesaus'],
  keuken: 'Italiaans', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '1 uur sudderen', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Een rijke vleessaus die langzaam suddert met soffritto, tomaat, wijn en een scheut melk. Hoe langer hij staat, hoe beter hij wordt.',
  methodes: [ { id: 'braadpan', naam: 'Op het vuur' }, { id: 'slowcooker', naam: 'Slowcooker' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan met deksel (ca. 24 cm)' },
    { tool: 'slowcooker', tekst: 'Slowcooker van minimaal 3,5 liter; gehakt en groente bak je eerst aan in de Dutch oven', m: 'slowcooker' },
    { tool: 'kookpan', tekst: 'Grote kookpan voor de pasta' }
  ],
  ingr: [
    { n: 'half-om-half gehakt', q: 500, u: 'g', x: 'rund en varken; of alleen rundergehakt' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'fijngesnipperd' },
    { n: 'wortel', p: 'wortels', q: 1, u: 'st', x: 'in heel kleine blokjes' },
    { n: 'bleekselderij', q: 2, u: 'stengel', x: 'in heel kleine blokjes' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'fijngehakt' },
    { n: 'olijfolie', q: 2, u: 'el' },
    { n: 'tomatenpuree', q: 2, u: 'el' },
    { n: 'rode wijn', q: 150, u: 'ml', x: 'of droge witte wijn', opt: true },
    { n: 'melk', q: 150, u: 'ml' },
    { n: 'tomatenblokjes', q: 1, u: 'blik', x: '400 g' },
    { n: 'passata', q: 250, u: 'ml' },
    { n: 'runderbouillon', q: 250, u: 'ml', x: 'of water' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 1, u: 'st' },
    { kop: 'Erbij' },
    { n: 'spaghetti', q: 400, u: 'g' },
    { n: 'Parmezaanse kaas', q: 50, u: 'g', x: 'geraspt' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Verhit de olie in de Dutch oven op middelhoog vuur. Fruit ui, wortel en bleekselderij (de soffritto) 8 à 10 minuten, tot ze zacht en zoet zijn maar niet bruin.', min: 9 },
    { t: 'Zet het vuur hoog en voeg het gehakt toe. Bak het in ca. 8 minuten rul en bruin; laat het vocht verdampen tot het vlees sist. Bak knoflook en tomatenpuree 1 minuut mee.', min: 8 },
    { t: 'Blus af met de wijn en schraap de aanbaksels los. Laat de wijn bijna helemaal inkoken. Giet de melk erbij en laat 3 à 4 minuten pruttelen tot ook die bijna is opgenomen; dat maakt het vlees mals.', min: 4 },
    { t: 'Voeg tomatenblokjes, passata, bouillon en laurier toe en breng op smaak met zout en peper. Breng aan de kook, zet het vuur laag en laat minimaal 1 uur (liefst 2) zachtjes sudderen met de deksel op een kier. Roer af en toe en voeg een scheutje water toe als de saus te droog wordt.', m: 'braadpan', min: 60 },
    { t: 'Schep alles over in de slowcooker en voeg tomatenblokjes, passata, laurier en maar de helft van de bouillon toe; er verdampt bijna niets. Breng op smaak met zout en peper. Gaar 6 à 8 uur op LOW of 3 à 4 uur op HIGH. Leg het laatste halfuur de deksel op een kier, zodat de saus indikt.', m: 'slowcooker', min: 360 },
    { t: 'Kook de spaghetti beetgaar in ruim water met zout. Houd een kopje kookvocht apart.', min: 10 },
    { t: 'Vis het laurierblad eruit. Schep de spaghetti door de saus met een scheutje kookvocht, zodat de saus zich om de pasta hecht. Serveer met Parmezaanse kaas.' }
  ],
  tips: [
    'Maak meteen een dubbele portie: ragù is de volgende dag nog lekkerder en blijft in porties 3 maanden goed in de vriezer.',
    'In Bologna eet je ragù niet met spaghetti, maar met verse tagliatelle: de brede, ruwe linten houden de dikke vleessaus veel beter vast. Probeer het eens.'
  ],
  alt: [
    'Vegetarisch: vervang het gehakt door 250 g fijngehakte champignons en 150 g rode linzen, gebruik groentebouillon en voeg 250 ml extra water toe.',
    'Weinig tijd? Na 25 minuten sudderen is de saus ook lekker, alleen minder diep van smaak.'
  ]
},
{
  id: 'minestrone', naam: 'Minestrone', ook: ['italiaanse groentesoep'],
  keuken: 'Italiaans', soort: 'Soep',
  tijd: 55, pers: 6, niveau: 'Makkelijk', vega: true,
  intro: 'Stevige Italiaanse groentesoep met witte bonen, kleine pasta en een flinke hand kaas. Een complete maaltijd in een kom.',
  gerei: [ { tool: 'braadpan', tekst: 'Dutch oven of grote soeppan van minimaal 4 liter, met deksel' } ],
  ingr: [
    { n: 'olijfolie', q: 3, u: 'el', x: 'plus extra om te serveren' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in kleine blokjes' },
    { n: 'wortel', p: 'wortels', q: 2, u: 'st', x: 'in kleine blokjes' },
    { n: 'bleekselderij', q: 2, u: 'stengel', x: 'in kleine blokjes' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'fijngehakt' },
    { n: 'tomatenpuree', q: 1, u: 'el' },
    { n: 'vastkokende aardappelen', q: 250, u: 'g', x: 'in blokjes van 1 cm' },
    { n: 'tomatenblokjes', q: 1, u: 'blik', x: '400 g' },
    { n: 'groentebouillon', q: 1.5, u: 'l' },
    { n: 'courgette', p: 'courgettes', q: 1, u: 'st', x: 'in blokjes' },
    { n: 'sperziebonen', q: 150, u: 'g', x: 'in stukjes van 2 cm' },
    { n: 'witte bonen', q: 1, u: 'blik', x: '400 g, bijvoorbeeld cannellini, uitgelekt' },
    { n: 'soeppasta', q: 100, u: 'g', x: 'ditalini, kleine elleboogjes of gebroken spaghetti' },
    { n: 'spinazie', q: 100, u: 'g', x: 'of savooiekool in reepjes' },
    { n: 'verse basilicum', q: 1, u: 'handje' },
    { n: 'Parmezaanse kaas', q: 60, u: 'g', x: 'geraspt; of een vegetarische Italiaanse harde kaas' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Verhit de olie in de Dutch oven op middelhoog vuur. Fruit ui, wortel en bleekselderij 8 minuten, tot ze zacht zijn maar niet bruin.', min: 8 },
    { t: 'Bak de knoflook en de tomatenpuree 1 minuut mee.', min: 1 },
    { t: 'Voeg aardappel, tomatenblokjes en bouillon toe. Breng aan de kook en laat 15 minuten zachtjes koken met de deksel op een kier.', min: 15 },
    { t: 'Voeg courgette, sperziebonen en witte bonen toe en laat 10 minuten koken.', min: 10 },
    { t: 'Strooi de pasta erin en kook hem gaar volgens de verpakking, meestal 8 à 10 minuten. Roer af en toe, zodat hij niet aan de bodem plakt. Wordt de soep te dik, voeg dan een scheut water toe.', min: 9 },
    { t: 'Roer de spinazie erdoor en laat 1 minuut slinken. Breng op smaak met zout en peper.', min: 1 },
    { t: 'Schep de soep in kommen en maak af met gescheurde basilicum, geraspte kaas en een scheutje olijfolie.' }
  ],
  tips: [
    'Wil je de soep bewaren of invriezen? Kook de pasta dan apart en doe hem pas bij het opwarmen erbij; anders zuigt hij al het vocht op en wordt hij papperig.',
    'Kook een korstje (vegetarische) harde kaas mee: dat geeft de bouillon een volle, hartige smaak. Vis het er voor het serveren uit.'
  ],
  alt: [
    'Minestrone is een seizoenssoep: gebruik wat er is, zoals prei, pompoen, venkel of doperwten.',
    'Zoals in Genua: schep op elke kom een lepel pesto.'
  ]
},
{
  id: 'panna-cotta', naam: 'Panna cotta met bosvruchten', ook: ['pannacotta'],
  keuken: 'Italiaans', soort: 'Dessert',
  tijd: 25, wacht: '4 uur opstijven', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Romige vanillepudding uit Piemonte die net trilt op je lepel, met een frisse saus van bosvruchten.',
  gerei: [
    { tool: 'kookpan', tekst: 'Steelpan voor de room en een kleine steelpan voor de saus' },
    { tool: 'bakvorm', tekst: '4 glaasjes of puddingvormpjes van ca. 150 ml' }
  ],
  ingr: [
    { kop: 'Panna cotta' },
    { n: 'gelatineblaadje', p: 'gelatineblaadjes', q: 3, u: 'st', x: 'of 4 als je de panna cotta wilt storten' },
    { n: 'slagroom', q: 400, u: 'ml', x: 'vloeibaar, uit een pak (geen spuitbus)' },
    { n: 'melk', q: 100, u: 'ml' },
    { n: 'suiker', q: 50, u: 'g' },
    { n: 'vanillestokje', p: 'vanillestokjes', q: 1, u: 'st', x: 'of 1 tl vanille-extract' },
    { kop: 'Bosvruchtensaus' },
    { n: 'bosvruchten', q: 250, u: 'g', x: 'diepvries of vers' },
    { n: 'suiker', q: 2, u: 'el' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' }
  ],
  stappen: [
    { t: 'Week de gelatineblaadjes 5 minuten in ruim koud water.', min: 5 },
    { t: 'Snijd het vanillestokje in de lengte open en schraap het merg eruit. Verwarm room, melk, suiker, merg en stokje in de steelpan op middelhoog vuur tot het mengsel dampt en de suiker is opgelost. Laat het niet koken.' },
    { t: 'Haal de pan van het vuur en vis het stokje eruit. Knijp de gelatine uit en roer hem door het warme roommengsel tot hij helemaal is opgelost.' },
    { t: 'Laat het mengsel 10 minuten afkoelen en roer af en toe; zo zakt het vanillemerg niet naar de bodem. Verdeel het over de glaasjes. Wil je de panna cotta storten, spoel de vormpjes dan eerst om met koud water.', min: 10 },
    { t: 'Dek af en laat minimaal 4 uur opstijven in de koelkast.', min: 240 },
    { t: 'Maak de saus: verwarm de bosvruchten met de suiker en het citroensap in de kleine steelpan. Laat 5 minuten zachtjes koken, tot de vruchten stukgaan en de saus iets indikt. Laat afkoelen.', min: 5 },
    { t: 'Schep de saus op de panna cotta in de glaasjes. Storten: dompel een vormpje 5 seconden in heet water, maak de rand los met een mesje en keer het om op een bordje. Schep de saus eromheen.' }
  ],
  tips: [
    'Een goede panna cotta trilt nog als je tegen het bord tikt. Te stevig geworden? Neem de volgende keer een blaadje gelatine minder.',
    'Je kunt de panna cotta en de saus 2 à 3 dagen van tevoren maken.'
  ],
  alt: [
    'Vegetarisch met agar-agar: vervang de gelatine door ½ à ¾ tl agar-agarpoeder (1 à 1,5 g). Roer het door de koude room en melk, breng aan de kook en laat 2 minuten zachtjes koken; agar werkt pas na koken. De panna cotta wordt iets steviger.',
    'Andere toppings: karamelsaus, verse passievrucht of een scheutje espresso met geschaafde chocolade.'
  ]
},
{
  id: 'spaghetti-aglio-olio', naam: 'Spaghetti aglio, olio e peperoncino', ook: ['aglio olio', 'spaghetti aglio olio', 'knoflookpasta'],
  keuken: 'Italiaans', soort: 'Hoofdgerecht',
  tijd: 15, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'De Romeinse middernachtspasta: spaghetti met knoflook, olijfolie en rode peper. Een handvol ingrediënten, klaar in de tijd dat de pasta kookt.',
  gerei: [
    { tool: 'kookpan', tekst: 'Grote kookpan voor de pasta, en een pastatang' },
    { tool: 'koekenpan', tekst: 'Grote koekenpan of hapjespan (28 cm) waarin alle pasta past' }
  ],
  ingr: [
    { n: 'spaghetti', q: 400, u: 'g' },
    { n: 'olijfolie', q: 100, u: 'ml', x: 'extra vierge' },
    { n: 'knoflook', q: 6, u: 'teen', x: 'in dunne plakjes' },
    { n: 'rode peper', p: 'rode pepers', q: 1, u: 'st', x: 'in ringetjes; of 1 tl chilivlokken' },
    { n: 'verse peterselie', q: 1, u: 'handje', x: 'fijngehakt' },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Breng in de kookpan 3 liter water met een flinke schep zout aan de kook (sneller met water uit de waterkoker). Niet te veel water: dan wordt het kookvocht zetmeelrijk en bindt het straks de saus.' },
    { t: 'Kook de spaghetti 2 minuten korter dan op de verpakking staat. Schep voor het afgieten een flinke kop kookvocht (250 ml) apart.', min: 8 },
    { t: 'Doe intussen de olie en de knoflook in de koude koekenpan. Verwarm op middellaag vuur en laat de knoflook in 3 à 4 minuten zacht garen tot hij lichtgoud is. Bak de peper de laatste minuut mee. Bruine knoflook wordt bitter, dus let goed op.', min: 4 },
    { t: 'Giet meteen een scheut kookvocht (ca. 100 ml) in de pan; pas op voor spetters. Zo stopt de knoflook met bakken.' },
    { t: 'Schep de spaghetti met de tang in de pan en zet het vuur hoog. Schep en schud 1 à 2 minuten om, telkens met een scheutje kookvocht, tot olie en water samen een licht romige, glanzende saus vormen die aan de pasta blijft hangen.', min: 2 },
    { t: 'Roer de peterselie erdoor, proef of er zout bij moet en serveer meteen.' }
  ],
  tips: [
    'Het geheim is de emulsie: het zetmeel in het kookvocht bindt olie en water. Blijft er olie op de bodem liggen? Nog een scheutje kookvocht erbij en flink schudden.',
    'Snijd de knoflook in plakjes en pers hem niet: geperste knoflook verbrandt in een paar seconden.'
  ],
  alt: [
    'In Italië komt er geen kaas op. Wil je toch een topping? Rooster 4 el paneermeel in 1 el olijfolie goudbruin en strooi het over de pasta: de Parmezaan van de armen.',
    'Met citroen: rasp de schil van een halve citroen over de pasta en knijp er wat sap over.'
  ]
},
{
  id: 'tomatensaus', naam: 'Basis tomatensaus (sugo)', ook: ['sugo', 'sugo di pomodoro', 'pastasaus', 'pizzasaus'],
  keuken: 'Italiaans', soort: 'Saus',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Een eenvoudige, zachte tomatensaus met olijfolie, knoflook en basilicum. De basis voor pasta, pizza en gehaktballetjes, en veel lekkerder dan uit een pot.',
  gerei: [
    { tool: 'hapjespan', tekst: 'Hapjespan of steelpan met dikke bodem (ca. 24 cm)' },
    { tool: 'staafmixer', tekst: 'Staafmixer, als je een gladde saus wilt', of: 'Geen staafmixer? Gebruik passata in plaats van tomatenblokjes.' }
  ],
  ingr: [
    { n: 'tomatenblokjes', q: 2, u: 'blik', x: 'à 400 g; of 800 ml passata' },
    { n: 'olijfolie', q: 3, u: 'el' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'in plakjes' },
    { n: 'ui', p: 'uien', q: 0.5, u: 'st', x: 'gepeld, in één stuk; zie tip', opt: true },
    { n: 'verse basilicum', q: 1, u: 'handje' },
    { n: 'suiker', q: 1, u: 'snuf', opt: true },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Verwarm de olie in de hapjespan op middellaag vuur. Bak de knoflook 1 à 2 minuten zachtjes, tot hij geurt maar nog niet kleurt.', min: 2 },
    { t: 'Voeg de tomaten, de halve ui (met de snijkant naar beneden), een paar basilicumsteeltjes en een snuf zout toe. Breng aan de kook.' },
    { t: 'Zet het vuur laag en laat de saus 20 à 30 minuten zachtjes pruttelen zonder deksel, of met de deksel op een kier tegen spatten. Roer af en toe. De saus is klaar als hij is ingedikt en de olie aan de rand glanst.', min: 25 },
    { t: 'Vis de ui en de steeltjes eruit. Wil je een gladde saus? Pureer hem kort met de staafmixer.' },
    { t: 'Proef: is de saus wat zuur, voeg dan een snuf suiker toe. Breng op smaak met zout en peper en scheur er vlak voor het serveren de basilicumblaadjes door.' }
  ],
  tips: [
    'De beroemde saus van Marcella Hazan: vervang de olijfolie en de knoflook door 70 g boter en laat de 2 blikken tomaten met een gepelde, gehalveerde ui 45 minuten zachtjes sudderen. Vis de ui eruit. Zacht, zoet en fluweelzacht, met verrassend weinig moeite.',
    'Maak een dubbele portie en vries de saus in porties in. Hij blijft 3 maanden goed en is snel ontdooid voor een doordeweekse pasta.'
  ],
  alt: [
    'Snelle pizzasaus, zonder koken: pureer 1 blik (400 g) gepelde tomaten of 400 ml passata met 1 el olijfolie, 1 teen knoflook, ½ tl gedroogde oregano en ½ tl zout. De saus kookt vanzelf in op de pizza.',
    'Pittig: bak ½ tl chilivlokken of een gedroogd rood pepertje mee met de knoflook.'
  ],
  bij: ['pizza-margherita', 'penne-arrabbiata']
},
{
  id: 'gehaktballen-tomatensaus', naam: 'Gehaktballen in tomatensaus', ook: ['polpette al sugo', 'polpette', 'italiaanse gehaktballen', 'gehaktballetjes in tomatensaus', 'balletjes in tomatensaus', 'meatballs'],
  keuken: 'Italiaans', soort: 'Hoofdgerecht',
  tijd: 55, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Zachte gehaktballen met Parmezaanse kaas en peterselie die zachtjes garen in een dikke tomatensaus. Lekker met spaghetti, of met brood om de saus op te deppen.',
  methodes: [ { id: 'braadpan', naam: 'In de pan' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven, braadpan of hapjespan (ca. 26 cm) met deksel', of: 'Een diepe koekenpan met deksel werkt ook.' },
    { tool: 'airfryer', tekst: 'Airfryer om de ballen vetarm bruin te bakken', m: 'airfryer' },
    { tool: 'kookpan', tekst: 'Grote kookpan voor de spaghetti' }
  ],
  ingr: [
    { kop: 'Gehaktballen' },
    { n: 'half-om-half gehakt', q: 500, u: 'g', x: 'of alleen rundergehakt' },
    { n: 'paneermeel', q: 4, u: 'el' },
    { n: 'melk', q: 4, u: 'el' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st' },
    { n: 'Parmezaanse kaas', q: 40, u: 'g', x: 'fijngeraspt' },
    { n: 'knoflook', q: 1, u: 'teen', x: 'geperst' },
    { n: 'verse peterselie', q: 1, u: 'handje', x: 'fijngehakt' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'peper' },
    { kop: 'Tomatensaus' },
    { n: 'olijfolie', q: 3, u: 'el' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'fijngesnipperd' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'fijngehakt' },
    { n: 'tomatenpuree', q: 1, u: 'el' },
    { n: 'tomatenblokjes', q: 2, u: 'blik', x: 'à 400 g; of 800 ml passata' },
    { n: 'gedroogde oregano', q: 1, u: 'tl' },
    { n: 'suiker', q: 1, u: 'snuf', opt: true },
    { n: 'verse basilicum', q: 1, u: 'handje', opt: true },
    { kop: 'Erbij' },
    { n: 'spaghetti', q: 400, u: 'g', x: 'of brood', opt: true },
    { n: 'Parmezaanse kaas', q: 30, u: 'g', x: 'geraspt, om erover te strooien', opt: true }
  ],
  stappen: [
    { t: 'Week het paneermeel 5 minuten in de melk. Voeg gehakt, ei, Parmezaanse kaas, knoflook, peterselie, zout en peper toe en meng kort met je handen; te lang kneden maakt de ballen taai. Draai er met natte handen ca. 16 ballen van zo\'n 4 cm van.', min: 5 },
    { t: 'Verhit 2 el olijfolie in de braadpan op middelhoog vuur. Bak de ballen in 6 à 8 minuten rondom bruin, in twee porties als de pan te vol wordt. Haal ze eruit; ze hoeven nog niet gaar te zijn.', m: 'braadpan', min: 7 },
    { t: 'Bak de ballen 8 minuten in de airfryer op 200 °C tot ze rondom bruin zijn. Ze hoeven nog niet gaar te zijn. Verhit intussen 2 el olijfolie in de braadpan.', m: 'airfryer', min: 8 },
    { t: 'Doe de rest van de olie in de pan en fruit de ui 4 minuten op middelhoog vuur. Bak knoflook en tomatenpuree 1 minuut mee.', min: 5 },
    { t: 'Voeg tomaten, oregano en een snuf zout toe en breng aan de kook. Leg de gehaktballen in de saus.' },
    { t: 'Zet het vuur laag en laat 20 à 25 minuten zachtjes garen met de deksel op een kier. Keer de ballen halverwege voorzichtig. De saus is klaar als hij is ingedikt.', min: 22 },
    { t: 'Kook intussen de spaghetti beetgaar in ruim water met zout.', min: 10 },
    { t: 'Proef de saus: is hij wat zuur, voeg dan een snuf suiker toe. Breng op smaak met zout en peper, scheur er de basilicum door en serveer met spaghetti of brood en Parmezaanse kaas.' }
  ],
  tips: [
    'Steek een thermometer in een bal: bij 70 °C in het midden is hij gaar. Zonder thermometer: snijd er één doormidden, hij mag niet meer roze zijn.',
    'De ballen en de saus zijn de volgende dag nog lekkerder en blijven in porties 3 maanden goed in de vriezer.'
  ],
  alt: [
    'Geen paneermeel? Week 1 snee oud brood zonder korst in de melk en prak het fijn.',
    'Romig: roer er op het laatst 100 ml kookroom door (vloeibaar uit een pak).',
    'Pittig: bak ½ tl chilivlokken mee met de knoflook.'
  ],
  bij: ['tomatensaus']
},
{
  id: 'pesto', naam: 'Pesto genovese', ook: ['pesto', 'basilicumpesto'],
  keuken: 'Italiaans', soort: 'Saus',
  tijd: 15, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Verse basilicumpesto zoals in Genua: geurig, felgroen en in een kwartier klaar. Genoeg voor 400 g pasta.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan om de pijnboompitten te roosteren' },
    { tool: 'staafmixer', tekst: 'Staafmixer met hakmolen of hoge beker', of: 'Geen staafmixer? Gebruik een vijzel (zie de alternatieven) of hak alles heel fijn met een groot mes.' }
  ],
  ingr: [
    { n: 'verse basilicum', q: 2, u: 'bos', x: 'ca. 50 g blaadjes' },
    { n: 'pijnboompitten', q: 30, u: 'g' },
    { n: 'knoflook', q: 1, u: 'teen' },
    { n: 'Parmezaanse kaas', q: 50, u: 'g', x: 'fijn geraspt; of een vegetarische Italiaanse harde kaas' },
    { n: 'pecorino', q: 20, u: 'g', x: 'liefst Pecorino Sardo, fijn geraspt; of extra Parmezaan', opt: true },
    { n: 'olijfolie', q: 100, u: 'ml', x: 'extra vierge, liefst een milde' },
    { n: 'zout', q: 1, u: 'snuf', x: 'grof' }
  ],
  stappen: [
    { t: 'Rooster de pijnboompitten in de droge koekenpan op middelhoog vuur 2 à 3 minuten goudbruin; schud de pan regelmatig. Laat ze afkoelen op een bord.', min: 3 },
    { t: 'Pluk de basilicumblaadjes van de stelen. Was ze alleen als het nodig is en dep ze dan heel goed droog.' },
    { t: 'Maal knoflook, pijnboompitten en zout kort fijn in de hakmolen of de hoge beker.' },
    { t: 'Voeg de basilicum en de helft van de olie toe en pulseer in korte stootjes tot een grove pesto. Mix niet te lang: de warmte van het mes maakt de basilicum donker en bitter.' },
    { t: 'Doe de pesto in een kom en roer de kaas en de rest van de olie erdoor. Proef en voeg zo nodig zout toe.' },
    { t: 'Meng de pesto met de pasta en een scheutje kookvocht. Verwarm hem niet in de pan, anders verliest hij zijn frisse kleur en smaak.' }
  ],
  tips: [
    'Bewaren: schep de pesto in een potje en giet er een laagje olie op. Zo blijft hij 4 dagen groen in de koelkast. Invriezen kan ook, in een ijsblokjesvorm; roer de kaas er dan pas na het ontdooien door.',
    'Zoals in Ligurië: kook een paar blokjes aardappel en een handje sperziebonen mee met de pasta (liefst trofie of linguine) en meng alles met de pesto.'
  ],
  alt: [
    'Met de vijzel, zoals in Genua: stamp knoflook en grof zout fijn, dan de pijnboompitten en daarna de basilicum, met draaiende bewegingen langs de wand, tot een groene pasta. Roer de kaas en de olie erdoor. Het kost een kwartier, maar de pesto wordt extra romig en geurig.',
    'Goedkoper: vervang de pijnboompitten door walnoten of ongezouten cashewnoten.'
  ],
  bij: ['pasta-pesto-kip', 'minestrone']
}
);
