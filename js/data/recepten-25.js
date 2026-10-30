/* Salades die een maaltijd zijn: caesar salad met kip (of garnalen), cobb salad, salade niçoise,
   warme geitenkaas met walnoten, caprese, panzanella, fattoush, Thaise biefstuksalade,
   Chinese noedelsalade met kip en huzarensalade. Zonder oven: de kip en biefstuk komen van de
   OptiGrill of uit de koekenpan, croutons en brood uit de airfryer of de pan. */
(() => {
  const SLAKOM = { tool: 'ovenschaal', tekst: 'Grote slakom of platte schaal', of: 'Een grote pan of een kom werkt ook; serveer dan op de borden.' };
  const AIRFRYER_OF_PAN = 'Airfryer of koekenpan voor de croutons';

  RECEPTEN.push(
  /* ---------- Caesar salad ---------- */
  {
    id: 'caesar-salad', toegevoegd: '2026-10-30', naam: 'Caesar salad met kip', gerecht: 'Caesar salad', variant: 'Kip',
    ook: ['caesar salad', 'caesar salade', 'caesarsalade', 'chicken caesar', 'caesar met kip', 'kipsalade', 'caesar'],
    keuken: 'Amerikaans', soort: 'Salade',
    tijd: 30, pers: 4, niveau: 'Makkelijk', vega: false,
    intro: 'Knapperige romaine sla met gegrilde kip, krokante knoflookcroutons en een romige dressing met Parmezaan, citroen en knoflook. Deze dressing is zonder ansjovis: extra Parmezaan en een scheutje worcestershiresaus maken hem net zo hartig. Je maakt hem met mayonaise, dus zonder rauw ei. Kies hierboven garnalen als je eens wat anders wilt.',
    methodes: [ { id: 'contactgrill', naam: 'OptiGrill' }, { id: 'koekenpan', naam: 'Koekenpan' } ],
    gerei: [
      { tool: 'contactgrill', tekst: 'OptiGrill met de gewone grillplaten, voor de kip', m: 'contactgrill' },
      { tool: 'koekenpan', tekst: 'Koekenpan (28 cm), voor de kip en de croutons', m: 'koekenpan' },
      { tool: 'airfryer', tekst: AIRFRYER_OF_PAN, of: 'Een koekenpan werkt ook: bak de blokjes 5 minuten op middelhoog vuur en schep vaak om.' },
      SLAKOM
    ],
    ingr: [
      { n: 'kipfilet', q: 500, u: 'g', x: '2 à 3 filets' },
      { n: 'olijfolie', q: 1, u: 'el' },
      { n: 'knoflookpoeder', q: 0.5, u: 'tl' },
      { n: 'zout' },
      { n: 'zwarte peper', x: 'gemalen' },
      { kop: 'Croutons' },
      { n: 'stokbrood', q: 0.5, u: 'st', x: 'liefst een dag oud, in blokjes van 2 cm', of: { q: 4, u: 'plak', n: 'wit brood' } },
      { n: 'olijfolie', q: 2, u: 'el' },
      { n: 'knoflook', q: 1, u: 'teen', x: 'geperst' },
      { kop: 'Dressing' },
      { n: 'mayonaise', q: 6, u: 'el' },
      { n: 'Parmezaanse kaas', q: 60, u: 'g', x: 'fijn geraspt' },
      { n: 'knoflook', q: 1, u: 'teen', x: 'geperst' },
      { n: 'citroen', q: 0.5, u: 'st', x: 'alleen het sap' },
      { n: 'worcestershiresaus', q: 2, u: 'tl', x: 'er zit een klein beetje ansjovis in; wil je helemaal zonder, neem dan sojasaus', of: { q: 1, u: 'tl', n: 'sojasaus' } },
      { n: 'mosterd', q: 1, u: 'tl', x: 'gewone of dijonmosterd' },
      { n: 'water', q: 2, u: 'el' },
      { kop: 'Salade' },
      { n: 'romaine sla', q: 2, u: 'st', x: 'of 4 romaine harten' },
      { n: 'Parmezaanse kaas', q: 30, u: 'g', x: 'in schaafsel' }
    ],
    stappen: [
      { t: 'Leg de kipfilets tussen twee vellen huishoudfolie en sla ze met een pan of deegroller plat tot ongeveer 1,5 cm dik. Zo zijn ze overal tegelijk gaar en blijven ze sappig. Wrijf ze in met de olijfolie, het knoflookpoeder, zout en peper.' },
      { t: 'Zet de OptiGrill op het programma voor gevogelte (of handmatig, rode stand) en laat hem voorverwarmen. Leg de kip erop, klap dicht en grill 6 à 7 minuten, tot het lampje op gaar springt (kerntemperatuur 75 °C).', m: 'contactgrill', min: 7 },
      { t: 'Verhit 1 el olie in de koekenpan op middelhoog vuur. Bak de kip 5 à 6 minuten per kant tot hij goudbruin en gaar is (kerntemperatuur 75 °C). Veeg de pan daarna schoon met keukenpapier voor de croutons.', m: 'koekenpan', min: 12 },
      { t: 'Leg de kip op een plank onder een stuk aluminiumfolie en laat hem 5 minuten rusten, dan blijft het vocht erin. Snijd hem daarna in plakken.', min: 5 },
      { kop: 'Croutons', t: 'Hussel de blokjes brood met de olijfolie, de knoflook en een snufje zout. Bak ze in de airfryer 6 à 7 minuten op 180 °C, en schud de mand halverwege. In de koekenpan: 5 minuten op middelhoog vuur, vaak omscheppen. Ze moeten goudbruin en knapperig zijn.', min: 7 },
      { kop: 'Dressing', t: 'Roer de mayonaise met de geraspte Parmezaan, de knoflook, het citroensap, de worcestershiresaus en de mosterd erdoor. Maak hem met het water wat dunner, zodat hij over de sla loopt. Proef: hij mag flink peperig zijn.' },
      { kop: 'Salade', t: 'Snijd het onderste stukje van de romaine sla af en snijd de bladeren in repen van 3 cm. Was ze, en slinger of dep ze goed droog: natte sla maakt de dressing waterig.' },
      { t: 'Hussel de sla in de slakom met tweederde van de dressing. Leg de kip en de croutons erop, schep de rest van de dressing over de kip en strooi de schaafsel Parmezaan erover. Meteen eten, dan blijven sla en croutons knapperig.' }
    ],
    tips: [
      'Parmezaan schaaf je met een dunschiller van een stuk kaas.',
      'Neem je de salade mee naar je werk, doe de dressing en croutons dan in een apart bakje en meng pas vlak voor het eten.',
      'Een gekookt eitje erbij (8 minuten, in partjes) maakt hem nog voller.'
    ],
    alt: [
      'Klassiek gaan er 4 fijngeprakte ansjovisfilets in de dressing. Die zitten er hier niet in; de extra Parmezaan en worcestershiresaus geven dezelfde hartige smaak.',
      'Met kippendijfilet wordt de kip sappiger: grill of bak 1 à 2 minuten langer.',
      'Liever niet zelf croutons maken? Een zakje kant-en-klare croutons uit de supermarkt (bij de soepen en salades).'
    ]
  },
  {
    id: 'caesar-salad-garnalen', toegevoegd: '2026-10-30', variantVan: 'caesar-salad', variant: 'Garnalen', naam: 'Caesar salad met garnalen',
    ook: ['shrimp caesar', 'caesar met garnalen', 'garnalensalade'],
    intro: 'Dezelfde caesar salad, maar met knoflookgarnalen die in 3 minuten uit de koekenpan komen. Sneller dan kip, en ze passen heel goed bij de citroen en Parmezaan in de dressing.',
    methodes: null,
    tijd: 25,
    gerei: [
      { tool: 'koekenpan', tekst: 'Koekenpan (28 cm), voor de garnalen en de croutons' },
      { tool: 'airfryer', tekst: AIRFRYER_OF_PAN, of: 'Een koekenpan werkt ook: bak de blokjes 5 minuten op middelhoog vuur en schep vaak om.' },
      SLAKOM
    ],
    vervang: {
      kipfilet: { n: 'garnalen', q: 400, u: 'g', x: 'rauw en gepeld (grijs), ontdooid als ze uit de vriezer komen' },
      knoflookpoeder: { n: 'knoflook', q: 2, u: 'teen', x: 'in dunne plakjes' },
      olijfolie: { n: 'olijfolie', q: 2, u: 'el' }
    },
    stappen: [
      { t: 'Dep de garnalen goed droog met keukenpapier; droge garnalen kleuren in de pan, natte koken. Bestrooi ze met zout en peper.' },
      { t: 'Verhit de olijfolie in de koekenpan op hoog vuur. Bak de garnalen 1 minuut zonder te bewegen, keer ze, doe de plakjes knoflook erbij en bak nog 1 à 2 minuten, tot ze helemaal roze en gekruld zijn. Niet langer, dan worden ze taai. Schep ze op een bord en veeg de pan schoon voor de croutons; lauw zijn ze op de salade ook lekker.', min: 3 },
      { kop: 'Croutons', t: 'Hussel de blokjes brood met de olijfolie, de knoflook en een snufje zout. Bak ze in de airfryer 6 à 7 minuten op 180 °C, en schud de mand halverwege. In de koekenpan: 5 minuten op middelhoog vuur, vaak omscheppen. Ze moeten goudbruin en knapperig zijn.', min: 7 },
      { kop: 'Dressing', t: 'Roer de mayonaise met de geraspte Parmezaan, de knoflook, het citroensap, de worcestershiresaus en de mosterd erdoor. Maak hem met het water wat dunner, zodat hij over de sla loopt.' },
      { kop: 'Salade', t: 'Snijd het onderste stukje van de romaine sla af en snijd de bladeren in repen van 3 cm. Was ze, en slinger of dep ze goed droog.' },
      { t: 'Hussel de sla in de slakom met tweederde van de dressing. Leg de warme garnalen en de croutons erop, schep de rest van de dressing erover en strooi de schaafsel Parmezaan erover.' }
    ],
    tips: [
      'Voorgekookte (roze) garnalen kan ook: warm ze dan maar 1 minuut mee met de knoflook.',
      'Neem je de salade mee, doe de dressing en croutons dan in een apart bakje.'
    ],
    alt: [
      'Helemaal zonder vis: neem 1 tl sojasaus in plaats van de worcestershiresaus.',
      'Kant-en-klare croutons uit de supermarkt kan ook.'
    ]
  },

  /* ---------- Cobb salad ---------- */
  {
    id: 'cobb-salad', toegevoegd: '2026-10-30', naam: 'Cobb salad',
    ook: ['cobb salad', 'cobb salade', 'cobbsalade', 'amerikaanse salade', 'salade met kip en spek'],
    keuken: 'Amerikaans', soort: 'Salade',
    tijd: 35, pers: 4, niveau: 'Makkelijk', vega: false,
    intro: 'De grote Amerikaanse maaltijdsalade: kip, krokant spek, gekookt ei, avocado, tomaat en blauwe kaas in rijen naast elkaar op de sla, met een frisse mosterd-vinaigrette. Je mengt pas aan tafel.',
    methodes: [ { id: 'contactgrill', naam: 'OptiGrill' }, { id: 'koekenpan', naam: 'Koekenpan' } ],
    gerei: [
      { tool: 'contactgrill', tekst: 'OptiGrill met de gewone grillplaten, voor de kip', m: 'contactgrill' },
      { tool: 'koekenpan', tekst: 'Koekenpan (28 cm), voor het spek (en de kip)' },
      { tool: 'kookpan', tekst: 'Kleine kookpan voor de eieren', of: 'Of stoom ze in de rijstkoker.' },
      SLAKOM
    ],
    ingr: [
      { n: 'kipfilet', q: 400, u: 'g' },
      { n: 'olijfolie', q: 1, u: 'el' },
      { n: 'zout' },
      { n: 'zwarte peper', x: 'gemalen' },
      { n: 'ontbijtspek', q: 150, u: 'g', x: 'ongeveer 8 plakjes' },
      { n: 'ei', p: 'eieren', q: 4, u: 'st' },
      { kop: 'Vinaigrette' },
      { n: 'olijfolie', q: 6, u: 'el' },
      { n: 'rode wijnazijn', q: 2, u: 'el' },
      { n: 'mosterd', q: 1, u: 'tl', x: 'dijonmosterd' },
      { n: 'honing', q: 1, u: 'tl' },
      { n: 'worcestershiresaus', q: 0.5, u: 'tl' },
      { kop: 'Salade' },
      { n: 'romaine sla', q: 1, u: 'st', x: 'of 1 kleine ijsbergsla' },
      { n: 'avocado', p: 'avocado\'s', q: 2, u: 'st', x: 'rijp', vers: 'Een avocado heeft geen vervanger; koop hem een paar dagen van tevoren of kies "eetrijp"' },
      { n: 'tomaat', p: 'tomaten', q: 3, u: 'st', x: 'in blokjes' },
      { n: 'blauwe kaas', q: 100, u: 'g', x: 'zoals Danish Blue of gorgonzola, verkruimeld' },
      { n: 'bieslook', q: 10, u: 'g', x: 'fijngeknipt' }
    ],
    stappen: [
      { t: 'Kook de eieren 9 minuten, laat ze schrikken in koud water en pel ze. Snijd ze in partjes.', min: 9, stoom: 'de eieren 12 minuten, daarna in koud water' },
      { t: 'Bak het ontbijtspek in de koude koekenpan, zonder olie, op middelhoog vuur in 6 à 8 minuten krokant. Laat uitlekken op keukenpapier en breek het in stukjes.', min: 7 },
      { t: 'Wrijf de kipfilet in met olie, zout en peper. Zet de OptiGrill op het programma voor gevogelte en grill de kip 6 à 7 minuten, tot hij gaar is (kerntemperatuur 75 °C).', m: 'contactgrill', min: 7 },
      { t: 'Wrijf de kipfilet in met olie, zout en peper. Bak hem in het spekvet in de koekenpan 5 à 6 minuten per kant op middelhoog vuur, tot hij gaar is (kerntemperatuur 75 °C).', m: 'koekenpan', min: 12 },
      { t: 'Laat de kip 5 minuten rusten en snijd hem in blokjes.', min: 5 },
      { kop: 'Vinaigrette', t: 'Doe alles voor de vinaigrette met een snufje zout en peper in een jampot, doe het deksel erop en schud tot het romig is.' },
      { kop: 'Salade', t: 'Snijd de sla in fijne repen, was en droog hem goed, en leg hem op de schaal. Halveer de avocado\'s, haal de pit eruit en snijd het vruchtvlees in blokjes.' },
      { t: 'Leg kip, spek, ei, avocado, tomaat en blauwe kaas in rijen naast elkaar op de sla. Strooi de bieslook erover. Zet de vinaigrette ernaast en meng aan tafel.' }
    ],
    tips: ['Blauwe kaas te sterk? Neem verkruimelde feta of blokjes jonge kaas.', 'Snijd de avocado pas op het laatst, anders wordt hij bruin. Een beetje citroensap erover helpt.'],
    alt: ['Kip van gisteren, of een kant-en-klare gegrilde kip uit de supermarkt, kan ook; trek hem in stukjes.', 'Ranch-dressing in plaats van vinaigrette: roer 4 el mayonaise, 4 el zure room, 1 el bieslook, ½ teen knoflook en 1 tl citroensap door elkaar.']
  },

  /* ---------- Salade niçoise ---------- */
  {
    id: 'salade-nicoise', toegevoegd: '2026-10-30', naam: 'Salade niçoise',
    ook: ['salade nicoise', 'nicoise', 'niçoise', 'tonijnsalade', 'salade met tonijn', 'franse salade'],
    keuken: 'Frans', soort: 'Salade',
    tijd: 35, pers: 4, niveau: 'Makkelijk', vega: false,
    intro: 'Salade uit Nice met tonijn, krieltjes, sperziebonen, half hard gekookte eieren, tomaat en zwarte olijven, met een mosterdvinaigrette. Een complete maaltijd van de schaal, lauw of koud.',
    gerei: [
      { tool: 'kookpan', tekst: 'Kookpan voor de krieltjes, sperziebonen en eieren', of: 'Of stoom alles in de rijstkoker.' },
      SLAKOM
    ],
    ingr: [
      { n: 'krieltjes', q: 500, u: 'g', x: 'ongeschild, gewassen' },
      { n: 'sperziebonen', q: 250, u: 'g', x: 'de puntjes eraf' },
      { n: 'ei', p: 'eieren', q: 4, u: 'st' },
      { n: 'tonijn', q: 320, u: 'g', x: 'uit blik, in olijfolie, uitgelekt (2 blikjes van 160 g)' },
      { n: 'tomaat', p: 'tomaten', q: 4, u: 'st', x: 'in partjes' },
      { n: 'zwarte olijven', q: 80, u: 'g', x: 'het liefst met pit, zoals in Nice' },
      { n: 'rode ui', p: 'rode uien', q: 0.5, u: 'st', x: 'in flinterdunne ringen' },
      { n: 'kropsla', q: 1, u: 'st', x: 'of een zakje gemengde sla' },
      { kop: 'Vinaigrette' },
      { n: 'olijfolie', q: 6, u: 'el' },
      { n: 'rode wijnazijn', q: 2, u: 'el' },
      { n: 'mosterd', q: 1, u: 'tl', x: 'dijonmosterd' },
      { n: 'knoflook', q: 0.5, u: 'teen', x: 'geperst' },
      { n: 'zout' },
      { n: 'zwarte peper', x: 'gemalen' }
    ],
    stappen: [
      { t: 'Kook de krieltjes in water met zout in 15 minuten gaar. Doe de laatste 5 minuten de sperziebonen erbij. Giet af en spoel de bonen kort koud, dan blijven ze knalgroen.', min: 15, stoom: 'de krieltjes 25 minuten, de laatste 8 minuten de sperziebonen erbij' },
      { t: 'Kook intussen de eieren 7 minuten: dan is het geel nog net zacht in het midden. Laat schrikken in koud water, pel ze en halveer ze.', min: 7, stoom: 'de eieren 10 minuten, daarna in koud water' },
      { kop: 'Vinaigrette', t: 'Schud alles voor de vinaigrette in een jampot tot het romig is. Halveer de krieltjes en schep ze nog warm door de helft van de vinaigrette; warme aardappels nemen de smaak het best op.' },
      { t: 'Leg de sla op de schaal. Verdeel de krieltjes, sperziebonen, tomaat, rode ui en olijven erover. Leg de tonijn in grove stukken en de halve eieren erop.' },
      { t: 'Sprenkel de rest van de vinaigrette erover en maal er zwarte peper over.' }
    ],
    tips: ['Tonijn in olijfolie is lekkerder en sappiger dan tonijn op water.', 'Je kunt de krieltjes, bonen en eieren een dag van tevoren koken en koud bewaren.'],
    alt: ['Geen krieltjes? Vastkokende aardappelen in stukken.', 'Luxe: een tonijnsteak 1 minuut per kant op de hete OptiGrill (handmatig, rode stand), vanbinnen nog roze.']
  },

  /* ---------- Warme geitenkaas ---------- */
  {
    id: 'salade-chevre-chaud', toegevoegd: '2026-10-30', naam: 'Salade met warme geitenkaas, walnoten en honing',
    ook: ['salade chevre chaud', 'chèvre chaud', 'geitenkaassalade', 'geitenkaas salade', 'warme geitenkaas', 'geitenkaas walnoot', 'salade geitenkaas'],
    keuken: 'Frans', soort: 'Salade',
    tijd: 20, pers: 2, niveau: 'Makkelijk', vega: true,
    intro: 'Een Frans bistroklassieker: plakjes stokbrood met geitenkaas die warm en zacht wordt, op sla met geroosterde walnoten, appel en een scheut honing. Zoet, zout en romig. Lekker als lunch of als licht avondeten.',
    methodes: [ { id: 'airfryer', naam: 'Airfryer' }, { id: 'koekenpan', naam: 'Koekenpan' } ],
    gerei: [
      { tool: 'airfryer', tekst: 'Airfryer met een stukje bakpapier in de mand', m: 'airfryer' },
      { tool: 'koekenpan', tekst: 'Koekenpan met een deksel', m: 'koekenpan' },
      SLAKOM
    ],
    ingr: [
      { n: 'stokbrood', q: 0.5, u: 'st', x: '8 schuine plakjes van 1 cm' },
      { n: 'geitenkaas', q: 150, u: 'g', x: 'een rolletje zachte geitenkaas (bûche), in 8 plakjes' },
      { n: 'honing', q: 2, u: 'el' },
      { n: 'walnoten', q: 50, u: 'g' },
      { n: 'veldsla', q: 100, u: 'g', x: 'of een zakje gemengde sla met rucola' },
      { n: 'appel', p: 'appels', q: 1, u: 'st', x: 'een frisse, zoals Elstar of Granny Smith, in dunne plakjes' },
      { n: 'tijm', x: 'een paar blaadjes, vers of gedroogd' },
      { kop: 'Dressing' },
      { n: 'olijfolie', q: 3, u: 'el' },
      { n: 'balsamicoazijn', q: 1, u: 'el' },
      { n: 'mosterd', q: 0.5, u: 'tl' },
      { n: 'honing', q: 1, u: 'tl' },
      { n: 'zout' },
      { n: 'zwarte peper', x: 'gemalen' }
    ],
    stappen: [
      { t: 'Rooster de walnoten 3 à 4 minuten in een droge koekenpan op middelhoog vuur tot ze geuren. Laat ze afkoelen en breek ze in grove stukken.', min: 4 },
      { kop: 'Dressing', t: 'Klop alles voor de dressing door elkaar.' },
      { t: 'Verwarm de airfryer voor op 200 °C. Leg de plakjes stokbrood op het bakpapier in de mand en bak ze 2 minuten. Leg op elk plakje een plakje geitenkaas, druppel er wat honing over en strooi er tijm op.', m: 'airfryer', min: 2 },
      { t: 'Bak nog 3 à 4 minuten, tot de kaas zacht is en licht kleurt.', m: 'airfryer', min: 4 },
      { t: 'Rooster de plakjes stokbrood aan één kant goudbruin in de droge koekenpan. Keer ze om, leg op elk plakje een plakje geitenkaas met wat honing en tijm, en doe de deksel erop. Laat 3 à 4 minuten op laag vuur staan tot de kaas zacht wordt.', m: 'koekenpan', min: 4 },
      { t: 'Hussel de sla en de appel met de dressing en verdeel over twee borden. Leg de warme geitenkaastoastjes erop, strooi de walnoten erover en druppel de rest van de honing erover.' }
    ],
    tips: ['Lekker met een paar plakjes rauwe ham of krokante spekjes erbij, of 2 el gedroogde cranberry\'s.'],
    alt: ['Geen walnoten? Pecannoten of pijnboompitten.', 'In plaats van appel: een rijpe peer of een paar vijgen.']
  },

  /* ---------- Italiaans ---------- */
  {
    id: 'caprese', toegevoegd: '2026-10-30', naam: 'Caprese (tomaat, mozzarella en basilicum)',
    ook: ['caprese', 'insalata caprese', 'tomaat mozzarella', 'mozzarella salade', 'tomaat-mozzarella'],
    keuken: 'Italiaans', soort: 'Salade',
    tijd: 10, pers: 4, niveau: 'Makkelijk', vega: true,
    intro: 'Plakken rijpe tomaat en mozzarella om en om, met verse basilicum, goede olijfolie, zout en peper. Meer is het niet, dus het draait om rijpe tomaten. In de kleuren van de Italiaanse vlag.',
    gerei: [ { tool: 'ovenschaal', tekst: 'Grote platte schaal; geen pannen nodig' } ],
    ingr: [
      { n: 'tomaat', p: 'tomaten', q: 4, u: 'st', x: 'heel rijp: trostomaten, vleestomaten of gemengde snoeptomaten', vers: 'Het hele gerecht draait om de tomaat' },
      { n: 'mozzarella', q: 250, u: 'g', x: '2 bollen, uitgelekt; of buffelmozzarella' },
      { n: 'verse basilicum', q: 15, u: 'g' },
      { n: 'olijfolie', q: 4, u: 'el', x: 'extra vierge, de lekkerste die je hebt' },
      { n: 'zeezout', x: 'grove vlokken' },
      { n: 'zwarte peper', x: 'versgemalen' }
    ],
    stappen: [
      { t: 'Haal de tomaten en mozzarella een half uur van tevoren uit de koelkast; koud smaken ze naar bijna niets.' },
      { t: 'Snijd de tomaten en mozzarella in plakken van ongeveer 1 cm. Dep de mozzarella even droog met keukenpapier.' },
      { t: 'Leg ze om en om, dakpansgewijs, op de schaal, met tussen elke paar een basilicumblaadje.' },
      { t: 'Bestrooi met zeezout en peper en sprenkel de olijfolie erover. Meteen eten, met brood om de sapjes op te deppen.' }
    ],
    tips: ['Wil je het zoeter? Een paar druppels balsamicoazijn of balsamico-crème erover; in Italië doen ze dat niet, maar lekker is het wel.', 'Zout de tomaat pas vlak voor het opdienen, anders trekt het vocht eruit.'],
    alt: ['Burrata in plaats van mozzarella: een bol in het midden die je openscheurt, romig vanbinnen.', 'Met een lepel pesto verdund met olijfolie in plaats van losse basilicum.']
  },
  {
    id: 'panzanella', toegevoegd: '2026-10-30', naam: 'Panzanella (Toscaanse broodsalade)',
    ook: ['panzanella', 'broodsalade', 'italiaanse broodsalade', 'toscaanse salade'],
    keuken: 'Italiaans', soort: 'Salade',
    tijd: 25, wacht: '15 minuten laten trekken', pers: 4, niveau: 'Makkelijk', vega: true,
    intro: 'Een boerensalade uit Toscane om oud brood op te maken: geroosterde blokjes brood die het sap van rijpe tomaten, rode ui en een scherpe vinaigrette opzuigen. Met komkommer, kappertjes en basilicum. Knapperig aan de randen, sappig vanbinnen.',
    gerei: [
      { tool: 'airfryer', tekst: 'Airfryer of koekenpan voor het brood', of: 'Een koekenpan werkt ook: rooster de blokjes 6 minuten op middelhoog vuur en schep vaak om.' },
      SLAKOM
    ],
    ingr: [
      { n: 'stokbrood', q: 1, u: 'st', x: 'een dag oud, of 300 g ander stevig wit brood (ciabatta, desem), in blokjes van 3 cm' },
      { n: 'olijfolie', q: 2, u: 'el', x: 'voor het brood' },
      { n: 'tomaat', p: 'tomaten', q: 6, u: 'st', x: 'heel rijp, in grove stukken', vers: 'Het sap van de tomaat is de dressing' },
      { n: 'komkommer', p: 'komkommers', q: 0.5, u: 'st', x: 'in halve plakjes' },
      { n: 'rode ui', p: 'rode uien', q: 1, u: 'st', x: 'in dunne ringen' },
      { n: 'kappertjes', q: 2, u: 'el' },
      { n: 'verse basilicum', q: 15, u: 'g' },
      { kop: 'Vinaigrette' },
      { n: 'olijfolie', q: 5, u: 'el' },
      { n: 'rode wijnazijn', q: 2, u: 'el' },
      { n: 'knoflook', q: 1, u: 'teen', x: 'geperst' },
      { n: 'zout' },
      { n: 'zwarte peper', x: 'gemalen' }
    ],
    stappen: [
      { t: 'Hussel de blokjes brood met 2 el olijfolie en een snufje zout. Rooster ze in de airfryer 7 à 8 minuten op 180 °C tot ze goudbruin zijn; schud halverwege. In de koekenpan: 6 minuten op middelhoog vuur, vaak omscheppen.', min: 8 },
      { t: 'Doe de tomaten in de slakom met 1 tl zout en laat 10 minuten staan; het zout trekt het sap eruit. Leg de rode ui intussen in een bakje met de rode wijnazijn, dan wordt hij milder.', min: 10 },
      { kop: 'Vinaigrette', t: 'Giet de azijn van de ui bij de tomaten en roer de olijfolie, knoflook en peper erdoor.' },
      { t: 'Schep het brood, de komkommer, ui, kappertjes en gescheurde basilicum erdoor. Laat 15 minuten staan zodat het brood het sap opzuigt, en schep nog een keer om voor het opdienen.', min: 15 }
    ],
    tips: ['Niet langer dan een uur laten staan, dan wordt het brood pap.', 'Lekker met een bol mozzarella of burrata erbij, of plakjes ham.'],
    alt: ['Geen kappertjes? 50 g zwarte olijven.', 'Met geroosterde rode paprika uit een pot erdoor wordt hij zoeter.']
  },

  /* ---------- Midden-Oosters ---------- */
  {
    id: 'fattoush', toegevoegd: '2026-10-30', naam: 'Fattoush',
    ook: ['fattoush', 'fattouche', 'libanese salade', 'salade met pita', 'pitasalade'],
    keuken: 'Midden-Oosters', soort: 'Salade',
    tijd: 25, pers: 4, niveau: 'Makkelijk', vega: true,
    intro: 'Libanese boerensalade met tomaat, komkommer, radijs, paprika en veel verse munt en peterselie, met krokante stukjes pitabrood erdoor. De citroendressing met sumak, een paarsrood kruid dat zuur smaakt als citroen, maakt hem fris.',
    gerei: [
      { tool: 'airfryer', tekst: 'Airfryer of koekenpan voor de pita', of: 'Een koekenpan werkt ook: bak de stukjes met een laagje olie 3 à 4 minuten tot ze krokant zijn.' },
      SLAKOM
    ],
    ingr: [
      { n: 'pitabroodjes', q: 2, u: 'st', x: 'in stukjes van 3 cm gescheurd' },
      { n: 'olijfolie', q: 2, u: 'el', x: 'voor de pita' },
      { n: 'sumak', q: 2, u: 'tl', x: '1 voor de pita, 1 voor de dressing' },
      { n: 'romaine sla', q: 1, u: 'st', x: 'in repen; of een halve ijsbergsla' },
      { n: 'tomaat', p: 'tomaten', q: 3, u: 'st', x: 'in blokjes' },
      { n: 'komkommer', p: 'komkommers', q: 1, u: 'st', x: 'in blokjes' },
      { n: 'radijs', q: 125, u: 'g', x: '1 bosje, in plakjes' },
      { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in blokjes' },
      { n: 'lente-ui', p: 'lente-uien', q: 3, u: 'st', x: 'in ringetjes' },
      { n: 'verse peterselie', q: 30, u: 'g', x: 'grof gehakt' },
      { n: 'verse munt', q: 15, u: 'g', x: 'alleen de blaadjes' },
      { kop: 'Dressing' },
      { n: 'olijfolie', q: 5, u: 'el' },
      { n: 'citroen', q: 1, u: 'st', x: 'alleen het sap' },
      { n: 'knoflook', q: 1, u: 'teen', x: 'geperst' },
      { n: 'gedroogde munt', q: 0.5, u: 'tl' },
      { n: 'zout' }
    ],
    stappen: [
      { t: 'Hussel de stukjes pita met de olijfolie, 1 tl sumak en een snufje zout. Bak ze in de airfryer 5 à 6 minuten op 180 °C tot ze krokant en goudbruin zijn; schud halverwege. Laat afkoelen, dan worden ze nog knapperiger.', min: 6 },
      { kop: 'Dressing', t: 'Klop de olijfolie, het citroensap, de knoflook, de gedroogde munt, de rest van de sumak en een flinke snuf zout door elkaar.' },
      { t: 'Meng alle groenten en kruiden in de slakom. Schep er vlak voor het eten de dressing en de pitastukjes door, en strooi er nog een beetje sumak over.' }
    ],
    tips: ['De pita moet net van de dressing zacht worden aan de randen en vanbinnen nog kraken; meng hem er dus pas op het laatst door.', 'Lekker naast gegrilde kip, kofta of shoarma.'],
    alt: ['Geen sumak? Rasp de schil van de citroen in de dressing en neem 1 el extra citroensap.', 'Een eetlepel granaatappelmelasse in de dressing maakt hem zoeter en dieper, zoals in Libanon.']
  },

  /* ---------- Thais ---------- */
  {
    id: 'yam-nua', toegevoegd: '2026-10-30', naam: 'Thaise biefstuksalade (yam nua)',
    ook: ['yam nua', 'yum nua', 'thai beef salad', 'thaise beefsalade', 'biefstuksalade', 'thaise salade'],
    keuken: 'Thais', soort: 'Salade',
    tijd: 25, pers: 4, niveau: 'Makkelijk', vega: false, pit: 2,
    intro: 'Rosé gegrilde biefstuk in dunne plakjes met komkommer, tomaatjes, rode ui en hopen munt en koriander, in een dressing van limoen, vissaus en verse rode peper. Zuur, zout, pittig en fris tegelijk.',
    methodes: [ { id: 'contactgrill', naam: 'OptiGrill' }, { id: 'koekenpan', naam: 'Koekenpan' } ],
    gerei: [
      { tool: 'contactgrill', tekst: 'OptiGrill met de gewone grillplaten', m: 'contactgrill' },
      { tool: 'koekenpan', tekst: 'Koekenpan (28 cm), het liefst RVS of gietijzer', m: 'koekenpan' },
      SLAKOM
    ],
    ingr: [
      { n: 'biefstuk', q: 500, u: 'g', x: '2 à 3 stuks, of kogelbiefstuk; op kamertemperatuur' },
      { n: 'zonnebloemolie', q: 1, u: 'el' },
      { n: 'zout' },
      { kop: 'Dressing' },
      { n: 'limoen', p: 'limoenen', q: 2, u: 'st', x: 'alleen het sap (± 4 el)' },
      { n: 'vissaus', q: 3, u: 'el' },
      { n: 'bruine suiker', q: 1, u: 'tl', x: 'of palmsuiker' },
      { n: 'rode peper', p: 'rode pepers', q: 1, u: 'st', x: 'fijngehakt; met de zaadjes als je hem pittig wilt' },
      { n: 'knoflook', q: 1, u: 'teen', x: 'geperst' },
      { kop: 'Salade' },
      { n: 'komkommer', p: 'komkommers', q: 0.5, u: 'st', x: 'in dunne halve plakjes' },
      { n: 'cherrytomaatjes', q: 250, u: 'g', x: 'gehalveerd' },
      { n: 'rode ui', p: 'rode uien', q: 1, u: 'st', x: 'in flinterdunne ringen; of 3 sjalotten' },
      { n: 'lente-ui', p: 'lente-uien', q: 2, u: 'st', x: 'in stukjes van 3 cm' },
      { n: 'verse munt', q: 15, u: 'g', x: 'alleen de blaadjes' },
      { n: 'verse koriander', q: 15, u: 'g', x: 'grof gehakt' },
      { n: 'kropsla', q: 0.5, u: 'st', x: 'een paar blaadjes om op te serveren; mag je weglaten' },
      { n: 'ongezouten pinda\'s', q: 30, u: 'g', x: 'geroosterd en grof gehakt; mag je weglaten' }
    ],
    stappen: [
      { t: 'Haal de biefstuk 20 minuten voor het bakken uit de koelkast. Dep hem droog, wrijf hem in met de olie en bestrooi met zout.' },
      { t: 'Zet de OptiGrill op het programma voor rood vlees en laat hem voorverwarmen. Leg de biefstuk erop, klap dicht en haal hem eraf als het lampje op rood (rare) of geel (medium) springt, na 3 à 5 minuten.', m: 'contactgrill', min: 4 },
      { t: 'Verhit de koekenpan op hoog vuur tot hij echt heet is. Bak de biefstuk 2 à 3 minuten per kant, zonder hem te bewegen, tot hij een donkere korst heeft en vanbinnen nog rosé is.', m: 'koekenpan', min: 6 },
      { t: 'Laat de biefstuk 5 minuten rusten op een plank. Snijd hem daarna tegen de draad in flinterdunne plakjes; schep het vleessap dat eruit loopt bij de dressing.', min: 5 },
      { kop: 'Dressing', t: 'Roer het limoensap, de vissaus, de suiker, de rode peper en de knoflook door elkaar tot de suiker is opgelost. Proef: het moet zuur, zout en pittig zijn, met een vleugje zoet.' },
      { kop: 'Salade', t: 'Meng de komkommer, tomaatjes, rode ui, lente-ui, munt en koriander in de slakom. Schep de biefstuk met de dressing erdoor, leg alles op de slablaadjes en strooi de pinda\'s erover. Meteen eten.' }
    ],
    tips: ['Lekker met een kom jasmijnrijst of kleefrijst erbij, dan is het een complete maaltijd.', 'Thais: rooster 2 el ongekookte (kleef)rijst in een droge pan goudbruin, maal hem fijn in een vijzel en strooi hem erover. Dat geeft een nootachtige crunch.'],
    alt: ['Met plakjes kipfilet of gegrilde garnalen in plaats van biefstuk.', 'Minder pittig: haal de zaadjes uit de rode peper, of neem een halve.']
  },

  /* ---------- Chinees ---------- */
  {
    id: 'chinese-noedelsalade-kip', toegevoegd: '2026-10-30', naam: 'Koude noedelsalade met kip en sesam-pindadressing',
    ook: ['noedelsalade', 'sesamnoedels', 'liang mian', 'cold sesame noodles', 'koude noedels', 'aziatische noedelsalade', 'chinese kipsalade'],
    keuken: 'Chinees', soort: 'Salade',
    tijd: 30, pers: 4, niveau: 'Makkelijk', vega: false, pit: 1,
    intro: 'Koude mie met reepjes kip, komkommer en wortel in een romige dressing van pindakaas, sesamolie, sojasaus en een beetje chili-olie. Een Chinees straatgerecht voor warme dagen, en ook lekker als lunch voor de volgende dag.',
    gerei: [
      { tool: 'kookpan', tekst: 'Grote kookpan voor de kip en de mie' },
      SLAKOM
    ],
    ingr: [
      { n: 'kipfilet', q: 400, u: 'g' },
      { n: 'mie', q: 250, u: 'g', x: 'mie-nestjes (middel of fijn)' },
      { n: 'sesamolie', q: 1, u: 'el', x: 'voor de mie' },
      { n: 'komkommer', p: 'komkommers', q: 1, u: 'st', x: 'in lucifers of geschaafd' },
      { n: 'wortel', p: 'wortels', q: 2, u: 'st', x: 'geraspt of in lucifers' },
      { n: 'lente-ui', p: 'lente-uien', q: 3, u: 'st', x: 'in ringetjes' },
      { n: 'verse koriander', q: 15, u: 'g', x: 'grof gehakt; mag je weglaten' },
      { n: 'sesamzaad', q: 1, u: 'el', x: 'geroosterd' },
      { kop: 'Dressing' },
      { n: 'pindakaas', q: 4, u: 'el', x: 'naturel, zonder stukjes' },
      { n: 'sojasaus', q: 3, u: 'el', x: 'lichte (ketjap asin)' },
      { n: 'rijstazijn', q: 2, u: 'el' },
      { n: 'sesamolie', q: 1, u: 'el' },
      { n: 'honing', q: 1, u: 'el' },
      { n: 'chili-olie', q: 1, u: 'tl', x: 'of meer als je het pittig wilt' },
      { n: 'knoflook', q: 1, u: 'teen', x: 'geperst' },
      { n: 'verse gember', q: 10, u: 'g', x: 'geraspt' },
      { n: 'water', q: 4, u: 'el', x: 'warm' }
    ],
    stappen: [
      { t: 'Breng een pan water met een snuf zout aan de kook. Leg de kipfilet erin, zet het vuur laag (het water mag niet meer bubbelen) en laat 12 à 15 minuten zachtjes garen tot hij gaar is (kerntemperatuur 75 °C). Zo blijft hij heel zacht. Haal hem eruit en laat afkoelen.', min: 14 },
      { t: 'Breng het water weer aan de kook en kook de mie volgens de verpakking. Giet af, spoel goed koud tot de mie helemaal koud is, laat uitlekken en hussel hem met 1 el sesamolie, dan plakt hij niet.', min: 4 },
      { kop: 'Dressing', t: 'Roer de pindakaas met het warme water glad. Roer de sojasaus, rijstazijn, sesamolie, honing, chili-olie, knoflook en gember erdoor. Hij moet zo dik zijn als yoghurt; te dik, dan nog 1 el water.' },
      { t: 'Trek de kip met twee vorken in dunne reepjes.' },
      { t: 'Meng de mie met de dressing in de slakom. Schep de komkommer, wortel en kip erdoor of leg ze er in vakjes op. Strooi de lente-ui, koriander en sesamzaad erover.' }
    ],
    tips: ['Bewaar je hem voor de volgende dag, houd dan wat dressing apart: de mie zuigt hem op. Roer het er vlak voor het eten door.', 'Ook lekker met een gekookt ei, edamame of reepjes rode paprika erdoor.'],
    alt: ['Geen mie? Spaghetti of rijstnoedels.', 'Kip van gisteren of een gegrilde kip uit de supermarkt kan ook.']
  },

  /* ---------- Nederlands ---------- */
  {
    id: 'huzarensalade', toegevoegd: '2026-10-30', naam: 'Huzarensalade',
    ook: ['huzarensalade', 'huzaren salade', 'aardappelsalade', 'russische salade', 'koude schotel', 'rundvleessalade'],
    keuken: 'Nederlands', soort: 'Salade',
    tijd: 40, wacht: '1 uur koud laten worden', pers: 4, niveau: 'Makkelijk', vega: false,
    intro: 'De Hollandse koude schotel van verjaardagen en Kerst: aardappel, ham, augurk, zilveruitjes, appel en doperwten in mayonaise, opgemaakt met ei, tomaat en sla. Zelfgemaakt is veel frisser dan uit de bak.',
    gerei: [
      { tool: 'kookpan', tekst: 'Kookpan voor de aardappelen en de eieren', of: 'Of stoom ze in de rijstkoker.' },
      SLAKOM
    ],
    ingr: [
      { n: 'vastkokende aardappelen', q: 750, u: 'g', x: 'geschild, in blokjes van 1 cm' },
      { n: 'diepvries doperwten', q: 100, u: 'g' },
      { n: 'ham', q: 200, u: 'g', x: 'gekookte ham of rosbief, in blokjes' },
      { n: 'augurk', p: 'augurken', q: 4, u: 'st', x: 'zuur, in blokjes, plus 2 el augurkennat' },
      { n: 'zilveruitjes', q: 50, u: 'g', x: 'zoetzuur uit een pot, gehalveerd' },
      { n: 'appel', p: 'appels', q: 1, u: 'st', x: 'een zure (Elstar of Granny Smith), geschild, in blokjes' },
      { n: 'mayonaise', q: 150, u: 'ml' },
      { n: 'mosterd', q: 1, u: 'tl' },
      { n: 'zout' },
      { n: 'zwarte peper', x: 'gemalen' },
      { kop: 'Opmaken' },
      { n: 'ei', p: 'eieren', q: 3, u: 'st' },
      { n: 'tomaat', p: 'tomaten', q: 2, u: 'st', x: 'in partjes' },
      { n: 'kropsla', q: 0.5, u: 'st', x: 'een paar mooie blaadjes' },
      { n: 'verse peterselie', q: 10, u: 'g', x: 'fijngehakt' }
    ],
    stappen: [
      { t: 'Kook de aardappelblokjes in water met zout 8 à 10 minuten, tot ze net gaar zijn maar niet uit elkaar vallen. Doe de laatste 2 minuten de doperwten erbij. Giet af en laat helemaal afkoelen in een vergiet.', min: 9, stoom: 'de aardappelblokjes 15 minuten, de laatste 3 minuten de doperwten erbij' },
      { t: 'Roer de mayonaise met de mosterd, het augurkennat, zout en peper door elkaar in de slakom.' },
      { t: 'Schep de koude aardappelen en erwten, de ham, augurk, zilveruitjes en appel erdoor. Proef of er meer zout of augurkennat bij moet. Laat minstens een uur afgedekt in de koelkast staan.', min: 60 },
      { kop: 'Opmaken', t: 'Kook intussen de eieren 9 minuten hard, laat ze schrikken in koud water en pel ze.', min: 9, stoom: 'de eieren 12 minuten, daarna in koud water' },
      { t: 'Leg de slablaadjes op een schaal en schep de salade erop. Strijk hem glad tot een bergje, en maak hem op met partjes ei en tomaat en wat peterselie.' }
    ],
    tips: ['Een dag van tevoren maken mag: dan is hij nog lekkerder. Maak hem pas vlak voor het opdienen op.', 'Een paar plakjes komkommer en een toef mayonaise uit een spuitzak maken hem feestelijk, zoals vroeger.'],
    alt: ['Met restjes rosbief of stoofvlees in plaats van ham, dan heet hij echte huzarensalade.', 'Wil je hem lichter? Neem de helft mayonaise en de helft Griekse yoghurt.']
  }
  );
})();
