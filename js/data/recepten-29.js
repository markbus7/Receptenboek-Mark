/* Pittige kerriekip uit de wok: Mark's eigen recept (2026-11-16), precies zoals hij het maakt.
   Kip blokjes in een droge kruidenmarinade, gewokt met een groentemix en op het eind sambal, sojasaus en honing.
   De groente staat los in de lijst (zoals de zak AH Chinese wokgroente hem bevat), zodat de app de mix herkent. */
(() => {
  RECEPTEN.push(
  {
    id: 'kerriekip-wok', toegevoegd: '2026-11-16', naam: 'Pittige kerriekip uit de wok',
    ook: ['kerriekip', 'kerrie kip wok', 'kip kerrie wok', 'kip kerrie uit de wok', 'pittige kip wok', 'kip met sambal en groentemix', 'kip met wokgroente kerrie'],
    keuken: 'Indonesisch', soort: 'Hoofdgerecht',
    tijd: 25, pers: 2, niveau: 'Makkelijk', vega: false, pit: 2,
    intro: 'Blokjes kip in een kruidenmengsel van kerrie, kurkuma en paprika, goudbruin gewokt met een zak wokgroente en op het eind sambal, sojasaus en een beetje honing erdoor. Met witte rijst uit de rijstkoker.',
    gerei: [
      { tool: 'wok', tekst: 'Wok of grote koekenpan voor hoog vuur', of: 'Geen wok? Een grote RVS- of antiaanbakpan werkt ook.' },
      { tool: 'kookpan', tekst: 'Rijstkoker of pan met deksel voor de rijst' }
    ],
    ingr: [
      { n: 'rijst', q: 150, u: 'g' },
      { kop: 'Kip met kruiden' },
      { n: 'kipfilet', q: 300, u: 'g', x: 'in blokjes' },
      { n: 'kerriepoeder', q: 1, u: 'tl' },
      { n: 'kurkuma', q: 0.5, u: 'tl', x: 'gemalen, voor de kleur' },
      { n: 'paprikapoeder', q: 1, u: 'tl' },
      { n: 'knoflookpoeder', q: 0.5, u: 'tl' },
      { n: 'zout', q: 0.5, u: 'tl' },
      { n: 'peper' },
      { n: 'zonnebloemolie', q: 1, u: 'el' },
      { kop: 'Groente (1 zak AH Chinese wokgroente, 400 g)' },
      { n: 'witte kool', q: 100, u: 'g', x: 'in dunne repen' },
      { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in reepjes' },
      { n: 'sperziebonen', q: 75, u: 'g', x: 'in stukjes van 3 cm' },
      { n: 'prei', q: 75, u: 'g', x: 'in ringen' },
      { n: 'taugé', q: 50, u: 'g' },
      { kop: 'Wokken' },
      { n: 'zonnebloemolie', q: 1, u: 'el' },
      { n: 'sambal oelek', q: 1, u: 'tl', x: 'een volle tl = medium pittig (5 van 10); 1,5 tl voor pittiger' },
      { n: 'sojasaus', q: 1, u: 'el' },
      { n: 'honing', q: 1, u: 'tl', x: 'of 1 tl ketjap manis' }
    ],
    stappen: [
      { t: 'Kook de rijst in de rijstkoker of volgens de verpakking.', min: 15 },
      { kop: 'Kip met kruiden', t: 'Meng de kip met de kerriepoeder, kurkuma, paprikapoeder, knoflookpoeder, zout, peper en de olie. Laat hem 10 minuten staan als je tijd hebt.', min: 10 },
      { kop: 'Wokken', t: 'Maak de wok heel heet en doe de olie erin. Bak de kip in 4 à 5 minuten goudbruin. Haal hem uit de pan.', min: 5 },
      { t: 'Wok de groentemix in dezelfde wok 3 à 4 minuten. Hij mag nog knapperig zijn.', min: 4 },
      { t: 'Doe de kip terug, met de sambal oelek (volle theelepels), de sojasaus en de honing (of ketjap). Schep alles 1 minuut door elkaar en klaar. Serveer met de rijst.', min: 1 }
    ],
    tips: [
      'Pittigheid: 1 volle tl sambal op 300 g kip is medium pittig (5 van 10). Wil je het pittiger, neem dan 1,5 tl. Kook je voor meer personen, dan rekent de app de sambal mee.',
      'Bak de kip en de groente apart. In een volle pan gaat alles koken in plaats van bakken.'
    ],
    alt: ['Geen AH Chinese wokgroente? Elke wokgroentemix van ongeveer 400 g werkt.']
  }
  );
})();
