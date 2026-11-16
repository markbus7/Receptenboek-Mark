/* Snel met een pot pastasaus: Mark had een pot Grand'Italia Piccante (tomatensaus met rode peper, 260 g).
   Elk recept gebruikt precies één pot van 260 g voor 2 personen. Een gewone pot (basilico, napoletana)
   kan ook; dan is het minder pittig. Geen oven nodig: koekenpan, airfryer en rijstkoker. */
(() => {
  const POT = { n: 'pastasaus', q: 260, u: 'g', x: 'één pot, bijv. Grand\'Italia Piccante met rode peper' };
  const KOOKPAN = { tool: 'kookpan', tekst: 'Grote kookpan voor de pasta' };

  RECEPTEN.push(
  {
    id: 'penne-piccante-pot', toegevoegd: '2026-11-16', naam: 'Penne piccante met gehakt en groente', gerecht: 'Penne piccante met pastasaus uit een pot', variant: 'Gehakt',
    ook: ['pasta met pastasaus', 'pastasaus uit een pot', 'pot pastasaus', 'pasta piccante', 'penne piccante', 'pasta met gehakt', 'penne met gehakt', 'pasta met tomatensaus', 'pastasaus piccante'],
    keuken: 'Italiaans', soort: 'Hoofdgerecht',
    tijd: 25, pers: 2, niveau: 'Makkelijk', vega: false, pit: 1,
    intro: 'Een pot pastasaus als basis, maar een volle maaltijd: rul gebakken gehakt met ui, paprika en champignons, een lepel tomatenpuree en oregano voor een diepe smaak, en Parmezaanse kaas erover. Kies hierboven ook de versie met kip of vega.',
    gerei: [
      KOOKPAN,
      { tool: 'hapjespan', tekst: 'Hapjespan of grote koekenpan (28 cm) voor de saus' }
    ],
    ingr: [
      { n: 'penne', q: 200, u: 'g' },
      { kop: 'Saus' },
      { n: 'half-om-half gehakt', q: 250, u: 'g', x: 'of rundergehakt' },
      { n: 'olijfolie', q: 1, u: 'el' },
      { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'gesnipperd' },
      { n: 'knoflook', q: 2, u: 'teen', x: 'fijngehakt' },
      { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in blokjes' },
      { n: 'champignons', q: 125, u: 'g', x: 'in plakjes' },
      { n: 'tomatenpuree', q: 1, u: 'el' },
      { n: 'gedroogde oregano', q: 1, u: 'tl' },
      POT,
      { n: 'zout' },
      { n: 'peper' },
      { kop: 'Erover' },
      { n: 'Parmezaanse kaas', q: 30, u: 'g', x: 'geraspt' },
      { n: 'verse basilicum', q: 10, u: 'g', x: 'blaadjes', opt: true }
    ],
    stappen: [
      { t: 'Breng in een grote pan {pastawater} aan de kook.', min: 8 },
      { kop: 'Saus', t: 'Verhit de olijfolie in de hapjespan op middelhoog vuur. Bak het gehakt in 5 minuten rul en bruin; druk het met een spatel uit elkaar. Laat het even liggen voor je roert, dan kleurt het beter. Bestrooi met zout en peper.', min: 5 },
      { t: 'Bak de ui, de paprika en de champignons 5 minuten mee tot ze zacht zijn en het vocht van de champignons weg is.', min: 5 },
      { t: 'Bak de knoflook, de tomatenpuree en de oregano 1 minuut mee. Zo wordt de tomatenpuree zoet in plaats van zuur, en dat geeft de saus uit de pot meer diepte.', min: 1 },
      { t: 'Kook intussen de penne beetgaar volgens de verpakking. Schep vlak voor het afgieten een half kopje kookvocht apart.', min: 11 },
      { t: 'Doe de pastasaus in de pan, spoel de pot om met 3 el kookvocht en giet dat er ook bij. Laat 5 minuten zachtjes pruttelen. Proef en breng op smaak met zout en peper.', min: 5 },
      { kop: 'Erover', t: 'Schep de uitgelekte penne door de saus en laat alles 1 minuut samen garen, met nog 1 à 2 el kookvocht als het te dik is. Verdeel over twee borden en strooi er Parmezaanse kaas en basilicum over.', min: 1 }
    ],
    tips: [
      'Te pittig? Roer er 2 el kookroom, mascarpone of crème fraîche door, dan wordt hij romig en milder.',
      'Lekker met een groene salade erbij.',
      'Pastasaus over? Doe de rest in een bakje met deksel; in de koelkast blijft hij 4 à 5 dagen goed, en hij kan ook in de vriezer.'
    ],
    alt: ['Geen penne? Elke pasta werkt: mezzi rigatoni, fusilli, farfalle of spaghetti.', 'Geen paprika of champignons? Neem courgette, of 250 g diepvries mediterrane groente.', 'Geen piccante saus? Neem een gewone pot en bak ½ tl chilivlokken mee met de knoflook.']
  },
  {
    id: 'penne-piccante-kip', toegevoegd: '2026-11-16', variantVan: 'penne-piccante-pot', variant: 'Kip', naam: 'Penne piccante met kip en groente',
    ook: ['pasta met kip', 'penne met kip', 'pasta kip tomatensaus'],
    intro: 'Een pot pastasaus als basis, maar een volle maaltijd: goudbruine stukjes kip met ui, paprika en champignons, een lepel tomatenpuree en oregano, en Parmezaanse kaas erover.',
    vervang: { 'half-om-half gehakt': { n: 'kipfilet', q: 250, u: 'g', x: 'in blokjes van 2 cm' } },
    stappen: [
      { t: 'Breng in een grote pan {pastawater} aan de kook.', min: 8 },
      { kop: 'Saus', t: 'Bestrooi de kip met zout en peper. Verhit de olijfolie in de hapjespan op middelhoog vuur en bak de kip in 4 à 5 minuten rondom goudbruin. Schep hem uit de pan.', min: 5 },
      { t: 'Bak in dezelfde pan de ui, de paprika en de champignons 5 minuten tot ze zacht zijn en het vocht van de champignons weg is.', min: 5 },
      { t: 'Bak de knoflook, de tomatenpuree en de oregano 1 minuut mee. Zo wordt de tomatenpuree zoet in plaats van zuur, en dat geeft de saus uit de pot meer diepte.', min: 1 },
      { t: 'Kook intussen de penne beetgaar volgens de verpakking. Schep vlak voor het afgieten een half kopje kookvocht apart.', min: 11 },
      { t: 'Doe de pastasaus en de kip in de pan, spoel de pot om met 3 el kookvocht en giet dat er ook bij. Laat 5 minuten zachtjes pruttelen tot de kip gaar is. Proef en breng op smaak met zout en peper.', min: 5 },
      { kop: 'Erover', t: 'Schep de uitgelekte penne door de saus en laat alles 1 minuut samen garen, met nog 1 à 2 el kookvocht als het te dik is. Verdeel over twee borden en strooi er Parmezaanse kaas en basilicum over.', min: 1 }
    ]
  },
  {
    id: 'penne-piccante-vega', toegevoegd: '2026-11-16', variantVan: 'penne-piccante-pot', variant: 'Vega', naam: 'Penne piccante met groente (vega)', vega: true,
    ook: ['pasta vega', 'vegetarische pasta', 'pasta met groente'],
    intro: 'Een pot pastasaus als basis, maar een volle maaltijd zonder vlees: ui, paprika, courgette en extra champignons, een lepel tomatenpuree en oregano, en flink wat Parmezaanse kaas erover.',
    vervang: { 'half-om-half gehakt': { n: 'courgette', p: 'courgettes', q: 1, u: 'st', x: 'in blokjes' }, champignons: { n: 'champignons', q: 250, u: 'g', x: 'in plakjes' } },
    stappen: [
      { t: 'Breng in een grote pan {pastawater} aan de kook.', min: 8 },
      { kop: 'Saus', t: 'Verhit de olijfolie in de hapjespan op middelhoog vuur. Bak de champignons 4 minuten op hoog vuur tot ze bruin zijn; roer niet te vaak, dan kleuren ze beter. Bestrooi met zout en peper.', min: 4 },
      { t: 'Bak de ui, de paprika en de courgette 6 minuten mee tot ze zacht zijn en hier en daar kleuren.', min: 6 },
      { t: 'Bak de knoflook, de tomatenpuree en de oregano 1 minuut mee. Zo wordt de tomatenpuree zoet in plaats van zuur, en dat geeft de saus uit de pot meer diepte.', min: 1 },
      { t: 'Kook intussen de penne beetgaar volgens de verpakking. Schep vlak voor het afgieten een half kopje kookvocht apart.', min: 11 },
      { t: 'Doe de pastasaus in de pan, spoel de pot om met 3 el kookvocht en giet dat er ook bij. Laat 5 minuten zachtjes pruttelen. Proef en breng op smaak met zout en peper.', min: 5 },
      { kop: 'Erover', t: 'Schep de uitgelekte penne door de saus en laat alles 1 minuut samen garen, met nog 1 à 2 el kookvocht als het te dik is. Verdeel over twee borden en strooi er Parmezaanse kaas en basilicum over.', min: 1 }
    ]
  },
  {
    id: 'gehaktballetjes-pastasaus', toegevoegd: '2026-11-16', naam: 'Gehaktballetjes in pittige tomatensaus',
    ook: ['gehaktballetjes in pastasaus', 'balletjes in tomatensaus', 'pastasaus uit een pot', 'pot pastasaus', 'gehaktballetjes piccante', 'polpette piccanti', 'spaghetti met balletjes'],
    keuken: 'Italiaans', soort: 'Hoofdgerecht',
    tijd: 35, pers: 2, niveau: 'Makkelijk', vega: false, pit: 1,
    intro: 'Kleine gehaktballetjes met Parmezaan, eerst bruin gebakken en dan gegaard in een pot pittige pastasaus met paprika, courgette en een lepel tomatenpuree. Met spaghetti, of met brood om de saus op te deppen.',
    methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'airfryer', naam: 'Airfryer' } ],
    gerei: [
      { tool: 'hapjespan', tekst: 'Hapjespan of diepe koekenpan (24 à 28 cm) met deksel', of: 'Geen deksel? Een bord of bakplaat erop werkt ook.' },
      { tool: 'airfryer', tekst: 'Airfryer om de balletjes bruin te bakken', m: 'airfryer' },
      KOOKPAN
    ],
    ingr: [
      { kop: 'Gehaktballetjes' },
      { n: 'half-om-half gehakt', q: 250, u: 'g', x: 'of rundergehakt' },
      { n: 'paneermeel', q: 2, u: 'el' },
      { n: 'melk', q: 2, u: 'el' },
      { n: 'Parmezaanse kaas', q: 20, u: 'g', x: 'fijngeraspt' },
      { n: 'knoflook', q: 1, u: 'teen', x: 'geperst' },
      { n: 'gedroogde oregano', q: 0.5, u: 'tl' },
      { n: 'zout', q: 0.5, u: 'tl' },
      { n: 'peper' },
      { kop: 'Saus' },
      { n: 'olijfolie', q: 1, u: 'el' },
      { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'fijngesnipperd' },
      { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in blokjes' },
      { n: 'courgette', p: 'courgettes', q: 0.5, u: 'st', x: 'in blokjes' },
      { n: 'tomatenpuree', q: 1, u: 'el' },
      POT,
      { n: 'water', q: 50, u: 'ml', x: 'om de pot mee om te spoelen' },
      { kop: 'Erbij' },
      { n: 'spaghetti', q: 200, u: 'g', x: 'of brood' },
      { n: 'Parmezaanse kaas', q: 20, u: 'g', x: 'geraspt, om erover te strooien', opt: true }
    ],
    stappen: [
      { kop: 'Gehaktballetjes', t: 'Week het paneermeel 5 minuten in de melk. Voeg gehakt, Parmezaanse kaas, knoflook, oregano, zout en peper toe en meng kort met je handen. Draai er met natte handen ongeveer 12 balletjes van zo\'n 3 cm van.', min: 5 },
      { t: 'Verhit de olijfolie in de hapjespan op middelhoog vuur en bak de balletjes in 5 à 6 minuten rondom bruin. Ze hoeven nog niet gaar te zijn. Haal ze eruit.', m: 'koekenpan', min: 6 },
      { t: 'Bak de balletjes 7 minuten in de airfryer op 200 °C, tot ze rondom bruin zijn. Schud halverwege de mand even. Verhit intussen de olijfolie in de hapjespan.', m: 'airfryer', min: 7 },
      { kop: 'Saus', t: 'Bak de ui, de paprika en de courgette 6 minuten in de hapjespan op middelhoog vuur, tot ze zacht zijn. Bak de tomatenpuree 1 minuut mee; zo wordt hij zoet en krijgt de saus uit de pot meer diepte.', min: 7 },
      { t: 'Doe de pastasaus erbij, spoel de pot om met het water en giet dat er ook bij. Leg de balletjes in de saus en breng aan de kook.' },
      { t: 'Zet het vuur laag, deksel erop, en laat 12 minuten zachtjes garen. Keer de balletjes halverwege. Snijd er een open: vanbinnen mag het niet meer rood zijn.', min: 12 },
      { kop: 'Erbij', t: 'Kook intussen de spaghetti beetgaar in {pastawater}, volgens de verpakking. Schep de balletjes met saus over de spaghetti en strooi er Parmezaanse kaas over.', min: 10 }
    ],
    tips: [
      'Met natte handen plakt het gehakt niet aan je vingers.',
      'Te pittig? Een schep kookroom of crème fraîche door de saus maakt hem milder.'
    ],
    alt: ['Geen half-om-half? Kipgehakt of rundergehakt werkt ook; kipgehakt is na 10 minuten in de saus gaar.']
  },
  {
    id: 'eieren-pittige-tomatensaus', toegevoegd: '2026-11-16', naam: 'Eieren in pittige tomatensaus (uova in purgatorio)',
    ook: ['uova in purgatorio', 'eieren in het vagevuur', 'eieren in tomatensaus', 'snelle shakshuka', 'shakshuka met pastasaus', 'pastasaus uit een pot', 'pot pastasaus'],
    keuken: 'Italiaans', soort: 'Hoofdgerecht',
    tijd: 25, pers: 2, niveau: 'Makkelijk', vega: true, pit: 1,
    intro: 'Het Italiaanse neefje van shakshuka: eieren die garen in een pittige tomatensaus, hier gemaakt met een pot pastasaus, paprika, spinazie, gerookt paprikapoeder en feta. Uit de pan eten met geroosterd brood.',
    gerei: [
      { tool: 'koekenpan', tekst: 'Koekenpan of hapjespan (24 à 28 cm) mét deksel', of: 'Geen passende deksel? Gebruik een bakplaat of een groot bord.' }
    ],
    ingr: [
      { n: 'olijfolie', q: 1, u: 'el' },
      { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in dunne halve ringen' },
      { n: 'knoflook', q: 1, u: 'teen', x: 'fijngehakt of geperst' },
      { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in reepjes' },
      { n: 'tomatenpuree', q: 1, u: 'el' },
      { n: 'gerookt paprikapoeder', q: 0.5, u: 'tl' },
      { n: 'gedroogde oregano', q: 0.5, u: 'tl' },
      POT,
      { n: 'verse spinazie', q: 150, u: 'g' },
      { n: 'water', q: 3, u: 'el', x: 'om de pot mee om te spoelen' },
      { n: 'ei', p: 'eieren', q: 4, u: 'st' },
      { n: 'feta', q: 75, u: 'g', x: 'verkruimeld' },
      { n: 'verse peterselie', q: 10, u: 'g', x: 'grof gehakt; of basilicum', opt: true },
      { n: 'brood', q: 4, u: 'plak', x: 'stevig brood of ciabatta, om te dippen' }
    ],
    stappen: [
      { t: 'Verhit de olijfolie in de koekenpan op middelhoog vuur. Bak de ui en de paprika 6 minuten tot ze zacht en zoet zijn.', min: 6 },
      { t: 'Bak de knoflook, de tomatenpuree, het paprikapoeder en de oregano 1 minuut mee. Doe de pastasaus erbij, spoel de pot om met het water en giet dat er ook bij. Roer de spinazie er in twee keer door en laat hem slinken. Laat 4 minuten zachtjes pruttelen, tot de saus een beetje dikker is.', min: 5 },
      { t: 'Maak met een lepel {#ei} kuiltjes in de saus en breek in elk kuiltje een ei. Strooi er een snufje zout en peper over.' },
      { t: 'Deksel erop, vuur laag, en laat 5 à 7 minuten garen tot het eiwit gestold is en de dooier nog zacht. Wil je hem hard, laat hem dan 9 minuten staan.', min: 6 },
      { t: 'Verkruimel de feta erover, strooi er peterselie over en zet de pan op tafel. Rooster het brood in de broodrooster of op de OptiGrill en dip het in de saus.' }
    ],
    tips: [
      'Het eiwit rond de dooier gaart het langzaamst. Schep er met een lepel wat warme saus overheen, dan gaat het sneller.',
      'Lekker met een paar plakjes chorizo erbij: bak ze mee met de ui.'
    ],
    alt: ['Geen pot pastasaus? Maak de echte shakshuka met een blik tomatenblokjes.'],
    bij: ['shakshuka']
  },
  {
    id: 'kip-piccante-paprika', toegevoegd: '2026-11-16', naam: 'Kip piccante met paprika',
    ook: ['kip in pittige tomatensaus', 'kip in tomatensaus', 'kip met pastasaus', 'pastasaus uit een pot', 'pot pastasaus', 'kip met paprika en tomatensaus'],
    keuken: 'Nederlands', soort: 'Hoofdgerecht',
    tijd: 25, pers: 2, niveau: 'Makkelijk', vega: false, pit: 1,
    intro: 'Een Hollandse doordeweekse pan, zoals de kip kerrie: blokjes kip en paprika uit de pan, gestoofd in een pot pittige tomatensaus en romig gemaakt met een scheut kookroom. Met rijst uit de rijstkoker of met pasta.',
    gerei: [
      { tool: 'hapjespan', tekst: 'Hapjespan of grote koekenpan (28 cm)' },
      { tool: 'kookpan', tekst: 'Rijstkoker of pan met deksel voor de rijst' }
    ],
    ingr: [
      { n: 'rijst', q: 150, u: 'g', x: 'of 200 g pasta' },
      { n: 'kipfilet', q: 300, u: 'g', x: 'in blokjes van 2 cm' },
      { n: 'olijfolie', q: 1, u: 'el' },
      { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'in halve ringen' },
      { n: 'knoflook', q: 1, u: 'teen', x: 'fijngehakt' },
      { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in reepjes' },
      { n: 'gedroogde oregano', q: 0.5, u: 'tl' },
      POT,
      { n: 'kookroom', q: 50, u: 'ml', x: 'maakt hem romig en milder', opt: true },
      { n: 'zout' },
      { n: 'peper' }
    ],
    stappen: [
      { t: 'Kook de rijst in de rijstkoker of volgens de verpakking.', min: 15 },
      { t: 'Bestrooi de kip met zout en peper. Verhit de olie in de hapjespan op middelhoog vuur en bak de kip in 4 à 5 minuten rondom goudbruin. Schep hem uit de pan.', min: 5 },
      { t: 'Bak in dezelfde pan de ui en de paprika 5 minuten tot ze zacht beginnen te worden. Bak de knoflook en de oregano 1 minuut mee.', min: 6 },
      { t: 'Doe de pastasaus en de kip erbij, spoel de pot om met 3 el water en giet dat er ook bij. Laat 6 minuten zachtjes pruttelen tot de kip gaar is.', min: 6 },
      { t: 'Roer de kookroom erdoor en warm nog 1 minuut door. Proef en breng op smaak met zout en peper. Serveer met de rijst.', min: 1 }
    ],
    tips: ['Kippendijfilet blijft sappiger; laat hem dan 2 minuten langer pruttelen.', 'Lekker met wat geraspte Parmezaan of 20 g rucola erover.'],
    alt: ['Geen paprika? Neem courgette of champignons, of een halve zak diepvries mediterrane groente.']
  }
  );
})();
