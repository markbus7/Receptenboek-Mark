/* Kip piccante met een pot pastasaus (260 g, bijv. Grand'Italia Piccante) en rijst.
   In de Italiaanse tomatenrecepten (bolognese, lasagne, gehaktballen, arrabbiata) staat de pot als alternatief
   bij de tomaten ("of ... g pastasaus uit een pot"), niet als apart recept. */
(() => {
  const POT = { n: 'pastasaus', q: 260, u: 'g', x: 'bijv. Grand\'Italia Piccante met rode peper' };

  RECEPTEN.push(
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
