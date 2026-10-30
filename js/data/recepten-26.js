/* Snel uit de wok met wat Mark vaak in huis heeft: kipfilet, een zak AH Chinese wokgroente (400 g) en rijst.
   De groente staat los in de lijst (zoals de zak hem bevat), zodat de app de mix herkent; met losse groente kan het ook.
   Basis met ketjap en sambal, variant met oestersaus. */
(() => {
  const WOK = { tool: 'wok', tekst: 'Wok of grote koekenpan voor hoog vuur', of: 'Geen wok? Een grote RVS- of antiaanbakpan werkt ook; bak de kip en de groente dan apart.' };
  const RIJSTKOKER = { tool: 'kookpan', tekst: 'Pan met deksel of rijstkoker voor de rijst' };
  const GROENTE = [
    { kop: 'Groente (1 zak AH Chinese wokgroente, 400 g)' },
    { n: 'witte kool', q: 100, u: 'g', x: 'in dunne repen' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in reepjes' },
    { n: 'sperziebonen', q: 75, u: 'g', x: 'in stukjes van 3 cm' },
    { n: 'prei', q: 75, u: 'g', x: 'in ringen' },
    { n: 'taugé', q: 50, u: 'g' }
  ];

  RECEPTEN.push(
  {
    id: 'kip-ketjap-wokgroente', toegevoegd: '2026-10-30', naam: 'Kip ketjap uit de wok met Chinese wokgroente', gerecht: 'Kip uit de wok met wokgroente', variant: 'Ketjap en sambal',
    ook: ['kip ketjap wok', 'kip met wokgroente', 'wokgroente met kip', 'roerbak kip ketjap', 'kip ketjap snel', 'ajam ketjap wok'],
    keuken: 'Indonesisch', soort: 'Hoofdgerecht',
    tijd: 25, pers: 2, niveau: 'Makkelijk', vega: false, pit: 1,
    intro: 'Doordeweeks in 25 minuten: reepjes kipfilet en een zak Chinese wokgroente uit de wok, in een glanzende zoet-pittige saus van ketjap, sojasaus en sambal oelek. Met witte rijst.',
    gerei: [WOK, RIJSTKOKER],
    ingr: [
      { n: 'rijst', q: 150, u: 'g' },
      { n: 'kipfilet', q: 300, u: 'g', x: 'in reepjes of blokjes van 2 cm' },
      { n: 'sojasaus', q: 1, u: 'el', x: 'voor de kip' },
      { n: 'maïzena', q: 1, u: 'tl', x: 'voor de kip' },
      ...GROENTE,
      { kop: 'Saus' },
      { n: 'ketjap manis', q: 3, u: 'el' },
      { n: 'sojasaus', q: 1, u: 'el' },
      { n: 'sambal oelek', q: 1, u: 'tl', x: 'meer als je het pittig wilt' },
      { n: 'maïzena', q: 1, u: 'tl' },
      { n: 'water', q: 4, u: 'el' },
      { kop: 'Bakken' },
      { n: 'knoflook', q: 2, u: 'teen', x: 'fijngehakt' },
      { n: 'gember', q: 10, u: 'g', x: 'geraspt; mag ook weg' },
      { n: 'zonnebloemolie', q: 2, u: 'el' }
    ],
    stappen: [
      { t: 'Kook de rijst in de rijstkoker of volgens de verpakking.', min: 15 },
      { t: 'Meng de kip met 1 el sojasaus en 1 tl maïzena en laat hem 10 minuten staan terwijl de rijst kookt. Roer in een kommetje de saus aan: ketjap, sojasaus, sambal, maïzena en water.' },
      { t: 'Verhit 1 el olie in de wok op het hoogste vuur tot hij net begint te walmen. Bak de kip in 4 à 5 minuten rondom goudbruin en gaar. Schep hem uit de wok.', min: 5 },
      { t: 'Verhit de rest van de olie. Roerbak de wokgroente 5 minuten op hoog vuur, met de knoflook en gember erbij. Gebruik je losse groente, bak dan eerst de sperziebonen 2 minuten voor en doe de taugé pas de laatste minuut erbij. De groente moet nog bite hebben.', min: 6 },
      { t: 'Doe de kip terug. Roer de saus nog even door (de maïzena zakt naar de bodem) en giet hem in de wok. Roerbak 1 minuut tot de saus bindt en glanst.', min: 1 },
      { t: 'Proef: zoeter met een scheut ketjap, zouter met sojasaus, pittiger met sambal. Serveer met de rijst.' }
    ],
    tips: [
      'Bak de kip en de groente apart, en niet te veel tegelijk. In een volle pan gaat alles koken in plaats van bakken.',
      'Lekker met een gebakken eitje erop, kroepoek of wat gebakken uitjes erover.',
      'Kippendijfilet blijft nog sappiger dan kipfilet; bak hem 1 à 2 minuten langer.'
    ],
    alt: ['Geen wokgroente in huis? Neem 400 g van wat er is: paprika, ui, kool, wortel, champignons of broccoli.', 'Restje rijst van gisteren? Bak hem op het laatst mee in de wok, dan heb je nasi.']
  },
  {
    id: 'kip-oestersaus-wokgroente', toegevoegd: '2026-10-30', variantVan: 'kip-ketjap-wokgroente', variant: 'Oestersaus en sambal',
    naam: 'Kip in oestersaus met Chinese wokgroente',
    ook: ['kip oestersaus', 'kip in oestersaus', 'wokgroente oestersaus', 'roerbak kip oestersaus'],
    keuken: 'Chinees',
    intro: 'Doordeweeks in 25 minuten: reepjes kipfilet en een zak Chinese wokgroente uit de wok, in een hartige glanzende saus van oestersaus en sojasaus met een beetje sambal. Minder zoet dan de ketjapversie.',
    vervang: {
      'ketjap manis': [
        { n: 'oestersaus', q: 3, u: 'el' },
        { n: 'suiker', q: 1, u: 'tl', x: 'of 1 tl ketjap manis' }
      ],
      water: [
        { n: 'water', q: 5, u: 'el', x: 'of kippenbouillon' },
        { n: 'sesamolie', q: 1, u: 'tl', x: 'mag ook weg' }
      ]
    },
    stappen: [
      { t: 'Kook de rijst in de rijstkoker of volgens de verpakking.', min: 15 },
      { t: 'Meng de kip met 1 el sojasaus en 1 tl maïzena en laat hem 10 minuten staan terwijl de rijst kookt. Roer in een kommetje de saus aan: oestersaus, sojasaus, sambal, suiker, maïzena, water en sesamolie.' },
      { t: 'Verhit 1 el olie in de wok op het hoogste vuur tot hij net begint te walmen. Bak de kip in 4 à 5 minuten rondom goudbruin en gaar. Schep hem uit de wok.', min: 5 },
      { t: 'Verhit de rest van de olie. Roerbak de wokgroente 5 minuten op hoog vuur, met de knoflook en gember erbij. Gebruik je losse groente, bak dan eerst de sperziebonen 2 minuten voor en doe de taugé pas de laatste minuut erbij. De groente moet nog bite hebben.', min: 6 },
      { t: 'Doe de kip terug. Roer de saus nog even door (de maïzena zakt naar de bodem) en giet hem in de wok. Roerbak 1 minuut tot de saus bindt en glanst.', min: 1 },
      { t: 'Proef: hartiger met een scheut oestersaus of sojasaus, pittiger met sambal. Serveer met de rijst.' }
    ]
  }
  );
})();
