/* Groentemixen uit de supermarkt: diepvries, en met `vers: true` de verse mixen uit het koelvak die Mark bij de AH koopt. `bevat` zijn de groenten die er meestal in zitten,
   met de namen zoals ze in de recepten staan; daarmee zoekt de app recepten waar de mix in past.
   `aanraders` zijn recepten waar de mix echt goed in past (met de hand gekozen). */
window.GROENTEMIXEN = [
  {
    id: 'wokgroente', aanraders: ['bami-goreng', 'nasi-goreng', 'kung-pao-kip', 'pad-thai', 'groene-curry', 'bibimbap', 'tjap-tjoy', 'kip-cashew', 'yakisoba', 'egg-fried-rice', 'japchae', 'pad-see-ew'], naam: 'Wokgroente', voorbeeld: 'Oosterse wokmix, roerbakgroente',
    bevat: ['paprika', 'rode paprika', 'ui', 'rode ui', 'prei', 'witte kool', 'spitskool', 'chinese kool', 'wortel', 'taugé', 'champignons', 'sperziebonen', 'peultjes', 'lente-ui', 'broccoli', 'paksoi'],
    bereiding: 'Niet ontdooien. Doe de groente bevroren in een gloeiend hete wok of koekenpan met een scheut olie en roerbak 5 à 7 minuten op hoog vuur. In een kleine pan in twee porties, anders gaat de groente koken in plaats van bakken.',
    snel: 'Bijgerecht in 7 minuten: roerbak met knoflook, gember en 2 el sojasaus. Of maak er mie met ei van.'
  },
  {
    id: 'ah-chinees', vers: true, aanraders: ['tjap-tjoy', 'bami-goreng', 'nasi-goreng', 'kung-pao-kip', 'pad-thai', 'kip-cashew', 'zoetzure-kip', 'egg-fried-rice', 'foe-yong-hai', 'groene-curry', 'gado-gado'], naam: 'AH Chinese wokgroente', voorbeeld: 'koelvak, 400 g: witte kool, rode paprika, sperziebonen, prei en taugé',
    bevat: ['witte kool', 'paprika', 'rode paprika', 'sperziebonen', 'prei', 'taugé'],
    bereiding: 'Vers uit het koelvak: roerbak de groente 6 à 8 minuten in een gloeiend hete wok of koekenpan met een scheut olie, tot hij net gaar is maar nog bite heeft. De zak (400 g) is genoeg voor 2 personen als hoofdgroente.',
    snel: 'Bijgerecht in 8 minuten: roerbak met knoflook, gember en 2 el sojasaus. Of door mie of gebakken rijst met een ei.'
  },
  {
    id: 'nasi-bami', aanraders: ['nasi-goreng', 'bami-goreng', 'sajoer-lodeh', 'gado-gado', 'egg-fried-rice', 'tjap-tjoy', 'foe-yong-hai', 'kimchi-fried-rice'], naam: 'Nasi- of bamigroente', voorbeeld: 'gesneden prei, spitskool en wortel',
    bevat: ['prei', 'witte kool', 'spitskool', 'chinese kool', 'wortel', 'ui', 'rode ui', 'verse selderij', 'taugé'],
    bereiding: 'Niet ontdooien. Roerbak de groente 4 à 5 minuten op hoog vuur, op het moment dat het recept de prei en kool toevoegt.',
    snel: 'Gebakken rijst: roerbak de groente, schuif opzij, bak er een ei bij en voeg koude rijst en ketjap toe.'
  },
  {
    id: 'mediterraan', aanraders: ['ratatouille', 'frittata', 'shakshuka', 'moussaka', 'penne-arrabbiata', 'minestrone', 'groentecouscous'], naam: 'Mediterrane groentemix', voorbeeld: 'Italiaanse of ratatouillegroente',
    bevat: ['courgette', 'aubergine', 'paprika', 'rode paprika', 'groene paprika', 'rode ui', 'ui', 'cherrytomaten', 'tomaat'],
    bereiding: 'Rooster hem bevroren met olijfolie en zout: 25 minuten op een bakplaat in de oven op 220 °C, of 15 minuten in de airfryer op 200 °C. In de pan: eerst op hoog vuur het vocht laten verdampen, dan pas bakken.',
    snel: 'Door pasta met pesto en feta, op een pizza, of als vulling voor een frittata of quiche.'
  },
  {
    id: 'mexicaans', aanraders: ['chili-con-carne', 'quesadillas', 'kip-fajitas', 'huevos-rancheros', 'burritos', 'guisado-carne-molida', 'nachos', 'enchiladas'], naam: 'Mexicaanse groentemix', voorbeeld: 'mais, paprika en bonen',
    bevat: ['mais', 'paprika', 'rode paprika', 'groene paprika', 'ui', 'rode ui', 'kidneybonen', 'zwarte bonen'],
    bereiding: 'Bak de mix bevroren 6 à 8 minuten in een hete pan tot het vocht verdampt is. Voeg daarna pas kruiden of saus toe.',
    snel: 'In wraps of quesadilla\'s, door chili con carne, of met rijst en avocado als burrito bowl.'
  },
  {
    id: 'ah-mexicaans', vers: true, aanraders: ['chili-con-carne', 'burritos', 'quesadillas', 'enchiladas', 'nachos', 'guisado-carne-molida', 'huevos-rancheros'], naam: 'AH Roerbakgroente Mexicaans', voorbeeld: 'koelvak: witte kool, prei, mais, sperziebonen, kidneybonen en rode paprika',
    bevat: ['witte kool', 'prei', 'mais', 'sperziebonen', 'kidneybonen', 'paprika', 'rode paprika'],
    bereiding: 'Vers uit het koelvak: roerbak de groente 6 à 8 minuten in een hete pan met een scheut olie tot de kool zacht is en de mais een beetje kleurt. Voeg daarna pas kruiden of saus toe.',
    snel: 'In wraps of quesadilla\'s, door chili con carne, of met rijst, kaas en salsa als burrito bowl.'
  },
  {
    id: 'paprika-ui', aanraders: ['kip-fajitas', 'kip-shoarma', 'shakshuka', 'menemen', 'boerenomelet', 'hongaarse-goulash', 'paprikas-csirke', 'tjap-tjoy', 'zoetzure-kip', 'gyros'], naam: 'Paprika- en uienreepjes', voorbeeld: 'fajitamix, paprikamix',
    bevat: ['paprika', 'rode paprika', 'groene paprika', 'puntpaprika', 'ui', 'rode ui'],
    bereiding: 'Bak de reepjes bevroren op hoog vuur, zonder deksel, tot de randjes bruin worden (6 à 8 minuten). In de airfryer: 12 minuten op 200 °C.',
    snel: 'Fajita\'s, shoarma of kip-paprika uit de pan, of door een omelet of shakshuka.'
  },
  {
    id: 'wortel-erwt', aanraders: ['shepherds-pie', 'boerenomelet', 'nasi-goreng', 'gehaktballen-jus', 'egg-fried-rice', 'guisado-carne-molida', 'foe-yong-hai'], naam: 'Worteltjes en doperwten', voorbeeld: 'Hollandse mix',
    bevat: ['wortel', 'winterpeen', 'doperwten'],
    bereiding: 'Stoof de groente bevroren met een klontje boter, 2 el water en een snuf suiker, 6 minuten met de deksel op de pan. Of kook 5 minuten in water met zout.',
    snel: 'Klassiek bij aardappelen en een gehaktbal, of door nasi, een boerenomelet of shepherd\'s pie.'
  },
  {
    id: 'soepgroente', aanraders: ['erwtensoep', 'harira', 'linzensoep-mercimek', 'lasagne-bolognese', 'boeuf-bourguignon', 'groentesoep-balletjes', 'minestrone', 'spaghetti-bolognese', 'gentse-waterzooi'], naam: 'Soepgroente', voorbeeld: 'prei, wortel en selderij',
    bevat: ['prei', 'wortel', 'knolselderij', 'bleekselderij', 'verse selderij', 'ui'],
    bereiding: 'Doe hem bevroren in de soep of stoofpot; 15 minuten meekoken is genoeg.',
    snel: 'Snelle groentesoep: fruit een ui, voeg 1 liter bouillon en de soepgroente toe, kook 15 minuten en doe er vermicelli of soepballetjes bij.'
  },
  {
    id: 'stamppot', aanraders: ['hutspot-rookworst', 'draadjesvlees', 'stoemp'], naam: 'Stamppotgroente', voorbeeld: 'hutspotmix: peen en ui',
    bevat: ['winterpeen', 'wortel', 'ui'],
    bereiding: 'Kook de mix bevroren mee met de aardappelen, net als verse hutspotgroente.',
    snel: 'Hutspot met rookworst, of gepureerd met een klontje boter als bijgerecht.'
  },
  {
    id: 'broccoli-bloemkool', aanraders: ['aloo-gobi', 'teriyaki-zalm', 'mac-and-cheese', 'groene-curry', 'kaassaus', 'beef-broccoli', 'pad-see-ew'], naam: 'Broccoli- of bloemkoolroosjes', voorbeeld: 'los of gemengd',
    bevat: ['broccoli', 'bloemkool'],
    bereiding: 'Kook of stoom 4 à 5 minuten. Of rooster ze bevroren in de airfryer (200 °C, 12 à 15 minuten) of oven (220 °C, 25 minuten) met olie, zout en knoflook.',
    snel: 'Geroosterd met Parmezaan, met kaassaus, of in een curry zoals aloo gobi.'
  },
  {
    id: 'spinazie', aanraders: ['saag-paneer', 'dal', 'shakshuka', 'bibimbap', 'roerei-toast', 'spanakopita', 'japchae'], naam: 'Spinazie', voorbeeld: 'diepvriesblokjes',
    bevat: ['spinazie'],
    bereiding: 'Laat de blokjes in een pan met deksel op laag vuur ontdooien. Knijp het vocht eruit als je de spinazie in een saus of vulling gebruikt. 450 g diepvries is ongeveer 750 g verse spinazie.',
    snel: 'Saag paneer, dal of shakshuka, door roerei, of pasta met room en knoflook.'
  },
  {
    id: 'sperziebonen', aanraders: ['groene-curry', 'gado-gado', 'sajoer-lodeh', 'roti-kip'], naam: 'Sperziebonen of snijbonen', voorbeeld: 'heel of gesneden',
    bevat: ['sperziebonen', 'kousenband'],
    bereiding: 'Kook bevroren 6 à 8 minuten in water met zout, of roerbak ze direct in een hete pan.',
    snel: 'Met spekjes en ui, door een groene curry, of als groente bij gado-gado.'
  },
  {
    id: 'currygroente', aanraders: ['aloo-gobi', 'chana-masala', 'kip-korma', 'curry-madras', 'dal'], naam: 'Indiase currygroente', voorbeeld: 'bloemkool, boontjes, wortel en erwt',
    bevat: ['bloemkool', 'sperziebonen', 'wortel', 'doperwten', 'paprika', 'spinazie'],
    bereiding: 'Doe hem bevroren bij de saus en laat 8 à 10 minuten zachtjes meegaren.',
    snel: 'Groentecurry in 20 minuten: fruit een ui, bak 2 el kerrie mee, voeg een blik tomaten, kokosmelk en de mix toe.'
  },
  {
    id: 'erwtensoepgroente', aanraders: ['erwtensoep', 'harira', 'linzensoep-mercimek', 'groentesoep-balletjes'], naam: 'Erwtensoepgroente', voorbeeld: 'knolselderij, prei, wortel',
    bevat: ['knolselderij', 'prei', 'wortel', 'ui', 'verse selderij'],
    bereiding: 'Voeg de mix bevroren toe in de laatste 45 minuten van de soep.',
    snel: 'Erwtensoep, of als basis voor elke stevige groentesoep.'
  }
];

/* Gewicht van één stuk, om "± zoveel gram van je mix" uit te rekenen. */
window.STUKGEWICHT = {
  'ui': 100, 'rode ui': 100, 'paprika': 150, 'rode paprika': 150, 'groene paprika': 150, 'puntpaprika': 100,
  'wortel': 80, 'prei': 200, 'courgette': 250, 'aubergine': 300, 'tomaat': 100, 'bloemkool': 600,
  'broccoli': 400, 'lente-ui': 15, 'komkommer': 300, 'aardappel': 150
};
