/* Verpakkingen in de Nederlandse supermarkt, om verspilling te voorkomen.
   Bij elk recept rekent de app uit hoeveel je moet kopen en wat je overhoudt (ook als je het
   aantal personen aanpast), en zet dat met een tip op het briefje "Restjes".

   n:    ingrediëntnamen zoals ze in de recepten staan (kleine letters)
   maat: 'g', 'ml' of 'st'; recepten in el, tl, kg, l of blik worden omgerekend (per: eigen omrekening)
   pak:  de gangbare verpakkingen in die maat; de app kiest de verpakking met de minste rest
   wat:  hoe de verpakking heet (pak, blik, beker, ...)
   vanaf: laat niets zien als je minder dan dit gebruikt (bijv. een scheutje melk)
   vaag: geen vaste verpakking; toon alleen de tip, en alleen als je minder dan 'tot' gebruikt
   Optionele ingrediënten tellen ook mee, met "(als je het gebruikt)". */
window.VERPAKKINGEN = [
  /* Zuivel */
  { n: ['slagroom'], maat: 'ml', pak: [200, 250, 500], wat: 'pak',
    tip: 'Room over? Vries hem in voor een saus of soep (na ontdooien even goed doorroeren), of klop hem stijf en serveer hem bij een toetje of bij koffie. Ongeopend blijft een pak lang goed, kijk naar de datum.' },
  { n: ['kookroom'], maat: 'ml', pak: [250], wat: 'pak',
    tip: 'Kookroom over? Hij blijft open nog 3 à 4 dagen goed. Roer hem door een pastasaus, soep of stamppot, of vries hem in.' },
  { n: ['crème fraîche'], maat: 'ml', pak: [125, 200], wat: 'beker',
    tip: 'Crème fraîche over? Lekker als dip met wat knoflook en kruiden, door een soep of pastasaus, of bij een ovenschotel.' },
  { n: ['zure room'], maat: 'ml', pak: [125], wat: 'beker',
    tip: 'Zure room over? Gebruik hem als dip bij chips of rauwkost, op een gepofte aardappel of in een wrap.' },
  { n: ['melk'], maat: 'ml', pak: [250, 500, 1000], wat: 'pak', vanaf: 100,
    tip: 'Open blijft melk zo\'n 3 à 4 dagen goed in de koelkast. Maak er pannenkoeken, wentelteefjes of pap van, of vries de rest in (in een bakje, niet in het pak) voor een volgende saus of puree.' },
  { n: ['karnemelk'], maat: 'ml', pak: [500, 1000], wat: 'pak',
    tip: 'Karnemelk over? Lekker koud als drankje, of maak er karnemelkpap of (meer) pannenkoeken van.' },
  { n: ['griekse yoghurt', 'volle yoghurt', 'turkse yoghurt'], maat: 'g', pak: [500, 1000], wat: 'bak',
    tip: 'Yoghurt over? Eet hem bij het ontbijt met fruit of granola, of maak er tzatziki of een knoflooksaus van.' },
  { n: ['mascarpone'], maat: 'g', pak: [250], wat: 'bakje',
    tip: 'Mascarpone over? Roer hem door een pastasaus of risotto, of eet hem met fruit en een beetje suiker.' },
  { n: ['feta'], maat: 'g', pak: [200], wat: 'blok',
    tip: 'Feta over? Bewaar hem onder water of olie in een afgesloten bakje, dan blijft hij nog een week goed. Lekker door een salade, over een ovenschotel of in een omelet.' },

  /* Blik en pot */
  { n: ['tomatenpuree'], maat: 'g', pak: [70], per: { el: 15, tl: 5 }, wat: 'blikje',
    tip: 'Tomatenpuree over? Schep de rest in eetlepels op een stukje bakpapier en vries ze in, dan heb je de volgende keer meteen een portie. Of koop een tube: die blijft open weken goed in de koelkast.' },
  { n: ['tomatenblokjes'], maat: 'g', pak: [400], per: { blik: 400 }, wat: 'blik',
    tip: 'Halve blik tomaten over? Doe hem in een bakje (niet in het blik) en gebruik hem binnen 3 dagen in een pastasaus, soep of shakshuka, of vries hem in.' },
  { n: ['passata'], maat: 'ml', pak: [500, 700], wat: 'fles',
    tip: 'Passata over? Open blijft hij zo\'n 5 dagen goed in de koelkast. Maak er een snelle pastasaus of tomatensoep van, of vries hem in.' },
  { n: ['kokosmelk'], maat: 'ml', pak: [200, 400], per: { blik: 400 }, wat: 'blik',
    tip: 'Kokosmelk over? Doe hem in een bakje en gebruik hem binnen 3 dagen in een curry, soep of smoothie, of vries hem in een ijsblokjesvorm in.' },
  { n: ['perziken op siroop'], maat: 'g', pak: [410, 820], per: { blik: 410 }, wat: 'blik',
    tip: 'Perziken over? Bewaar ze in hun siroop in een afgesloten bakje (niet in het blik); dan blijven ze 3 dagen goed. Lekker bij yoghurt, op een toetje met vanillevla of in een smoothie.' },
  { n: ['mais'], maat: 'g', pak: [150, 300], per: { blik: 300 }, wat: 'blikje',
    tip: 'Mais over? Lekker door een salade, wrap of omelet, of in een soep.' },
  { n: ['kimchi'], maat: 'g', pak: [300], wat: 'pot',
    tip: 'Kimchi over? Open blijft hij weken goed in de koelkast en wordt hij steeds zuurder. Dat is juist lekker in kimchi fried rice, of naast een gebakken ei.' },
  { n: ['tahoe'], maat: 'g', pak: [360, 500], wat: 'blok',
    tip: 'Tahoe over? Leg hem in een bakje onder water in de koelkast en ververs het water elke dag; zo blijft hij 3 à 4 dagen goed. Bak blokjes knapperig voor een wokgerecht of salade.' },

  /* Vlees */
  { n: ['rundergehakt', 'half-om-half gehakt', 'varkensgehakt', 'lamsgehakt'], maat: 'g', pak: [300, 500], wat: 'bak',
    tip: 'Gehakt over? Vries het rauw in, of draai er een paar balletjes van voor in de soep.' },
  { n: ['spekblokjes'], maat: 'g', pak: [75, 150], wat: 'bakje',
    tip: 'Spekblokjes over? Ze zijn goed in te vriezen en je bakt ze zo uit de vriezer, bijvoorbeeld voor een omelet, stamppot of pasta.' },

  /* Groente */
  { n: ['champignons', 'kastanjechampignons'], maat: 'g', pak: [250, 400], wat: 'bakje',
    tip: 'Champignons over? Bak ze mee in een omelet, roerei of pastasaus. Bewaar ze in een papieren zak, dan worden ze niet slijmerig.' },
  { n: ['cherrytomaten'], maat: 'g', pak: [250], wat: 'bakje',
    tip: 'Cherrytomaatjes over? Lekker als snack of in een salade. Bewaar ze buiten de koelkast, dan blijven ze smaakvol.' },
  { n: ['taugé'], maat: 'g', pak: [200, 300], wat: 'zak',
    tip: 'Taugé blijft maar een dag of twee goed. Roerbak de rest mee in een omelet, nasi of bami.' },
  { n: ['komkommer', 'ijsbergsla', 'kropsla', 'witte kool', 'appel', 'peer'], maat: 'st', pak: [1], wat: 'stuk',
    tip: 'Eet de rest als salade, op brood of als snack. Afgedekt in de koelkast blijft het nog een paar dagen goed.' },
  { n: ['bleekselderij'], vaag: true,
    tip: 'Je koopt een hele struik. Snijd de rest in stukjes en vries ze in voor soep of ragù, of eet ze rauw met een dip. In aluminiumfolie gewikkeld blijft hij twee weken knapperig in de koelkast.' },
  { n: ['spinazie'], vaag: true, tot: 300,
    tip: 'Een zak is vaak meer dan je nodig hebt. Roer de rest door een omelet, pastasaus of soep; spinazie slinkt enorm.' },
  { n: ['knolselderij', 'pompoen', 'bloemkool', 'broccoli', 'witte kool', 'chinese kool', 'spitskool', 'daikon'], vaag: true, tot: 500,
    tip: 'Je koopt er meestal een hele van. Snijd de rest in stukken en vries ze in voor soep, of gebruik ze binnen een paar dagen in een roerbakgerecht of ovenschotel.' },
  { n: ['verse peterselie', 'verse koriander', 'verse basilicum', 'thaise basilicum', 'verse munt', 'verse dille', 'bieslook', 'verse dragon', 'verse selderij', 'verse tijm'], vaag: true,
    tip: 'Een bosje of zakje is meer dan je nodig hebt. Hak de rest fijn en vries ze plat in een zakje in, of met een beetje olie in een ijsblokjesvorm. Je strooit ze later zo in de pan. Basilicum en munt staan het langst goed in een glas water.' },

  /* Brood */
  { n: ['tortilla\'s'], maat: 'st', pak: [6, 8], wat: 'pak',
    tip: 'Tortilla\'s over? Vries ze in (met een stukje bakpapier ertussen) of maak er quesadilla\'s of chips uit de oven van.' },

  /* Drank */
  { n: ['witte wijn', 'rode wijn'], maat: 'ml', pak: [750], per: { el: 15 }, wat: 'fles', vanaf: 100,
    tip: 'Wijn over? Drink er een glas bij het eten, of vries de rest in een ijsblokjesvorm in voor een volgende saus of stoofpot.' },

  /* Ei: wie alleen de dooiers gebruikt, houdt eiwitten over */
  { n: ['eidooier'], eiwit: true,
    tip: 'Eiwit blijft afgedekt 3 dagen goed in de koelkast, en ingevroren maanden. Gebruik het in een omelet of roerei, of klop er schuimpjes van.' }
];
