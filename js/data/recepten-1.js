/* Italiaans */
RECEPTEN.push(
{
  id: 'spaghetti-carbonara', naam: 'Spaghetti carbonara', keuken: 'Italiaans', soort: 'Hoofdgerecht',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'De echte Romeinse versie: zonder room. De romige saus komt van ei, kaas en een scheut pastawater.',
  gerei: [
    { tool: 'kookpan', tekst: 'Grote kookpan (minimaal 4 liter) voor de pasta' },
    { tool: 'koekenpan', tekst: 'Grote koekenpan (28 cm), groot genoeg om alle pasta in om te scheppen', of: 'Een hapjespan werkt net zo goed' }
  ],
  ingr: [
    { n: 'spaghetti', q: 400, u: 'g' },
    { n: 'pancetta', q: 150, u: 'g', x: 'of guanciale, in reepjes' },
    { n: 'ei', p: 'eieren', q: 2, u: 'st' },
    { n: 'eidooier', p: 'eidooiers', q: 2, u: 'st' },
    { n: 'Pecorino Romano', q: 60, u: 'g', x: 'fijn geraspt' },
    { n: 'Parmezaanse kaas', q: 40, u: 'g', x: 'fijn geraspt' },
    { n: 'zwarte peper', q: 1, u: 'tl', x: 'versgemalen' },
    { n: 'zout', x: 'voor het kookwater' }
  ],
  stappen: [
    { t: 'Breng in de kookpan 4 liter water met een flinke schep zout aan de kook.', min: 10 },
    { t: 'Leg de pancetta in de koude koekenpan, zonder olie. Bak op middelhoog vuur in 6 à 8 minuten krokant; het vet smelt vanzelf. Zet daarna het vuur uit.', min: 7 },
    { t: 'Klop in een kom de eieren, eidooiers, beide kazen en de peper los tot een dikke, gele pasta.' },
    { t: 'Kook de spaghetti 1 minuut korter dan op de verpakking staat. Schep een kopje kookvocht apart.', min: 9 },
    { t: 'Schep de spaghetti met een tang direct in de koekenpan met de pancetta. Het vuur blijft uit. Meng een halve minuut zodat de pasta iets afkoelt.' },
    { t: 'Giet het eimengsel erbij en schep snel om. Voeg scheutjes kookvocht toe tot de saus romig en glanzend is. Het ei mag niet stollen tot roerei.' }
  ],
  tips: ['Te dik geworden? Nog 2 el kookvocht erbij en direct serveren.'],
  alt: ['Geen pancetta? Ontbijtspek of spekblokjes werken ook.', 'Geen Pecorino? Gebruik alleen Parmezaanse kaas (100 g in totaal).']
},
{
  id: 'lasagne-bolognese', naam: 'Lasagne bolognese', keuken: 'Italiaans', soort: 'Hoofdgerecht',
  tijd: 90, pers: 6, niveau: 'Gemiddeld', vega: false,
  intro: 'Langzaam gegaarde ragù, een zijdezachte bechamelsaus en een krokant kaaskorstje.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'hapjespan', tekst: 'Hapjespan of braadpan (26 à 28 cm) met deksel voor de ragù' },
    { tool: 'kookpan', tekst: 'Steelpan voor de bechamelsaus, plus een garde' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal van ca. 20 × 30 cm', m: 'oven' },
    { tool: 'ovenschaal', tekst: 'Ovenvaste schaal die in de airfryer-mand past (ca. 18 × 18 cm). Bij een kleine airfryer: maak twee kleinere lasagnes.', m: 'airfryer' }
  ],
  ingr: [
    { kop: 'Ragù' },
    { n: 'rundergehakt', q: 500, u: 'g' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'wortel', p: 'wortels', q: 1, u: 'st' },
    { n: 'bleekselderij', q: 1, u: 'stengel' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'tomatenpuree', q: 70, u: 'g', x: 'een klein blikje is 70 g' },
    { n: 'passata', q: 500, u: 'ml', x: 'gezeefde tomaten' },
    { n: 'rode wijn', q: 100, u: 'ml', opt: true },
    { n: 'gedroogde oregano', q: 1, u: 'tl' },
    { n: 'olijfolie', q: 2, u: 'el' },
    { kop: 'Bechamelsaus' },
    { n: 'boter', q: 50, u: 'g' },
    { n: 'bloem', q: 50, u: 'g' },
    { n: 'melk', q: 600, u: 'ml' },
    { n: 'nootmuskaat', q: 0.125, u: 'tl' },
    { kop: 'Verder' },
    { n: 'lasagnebladen', q: 250, u: 'g', x: 'ca. 12 vellen' },
    { n: 'geraspte kaas', q: 150, u: 'g', x: 'mozzarella of belegen' }
  ],
  stappen: [
    { t: 'Snipper ui, wortel en bleekselderij fijn. Fruit ze 8 minuten in de olijfolie in de hapjespan op middelhoog vuur.', min: 8 },
    { t: 'Voeg het gehakt toe en bak het rul en bruin, ca. 5 minuten. Bak knoflook en tomatenpuree 1 minuut mee.', min: 5 },
    { t: 'Blus af met de wijn (of een scheut water). Voeg passata en oregano toe, breng op smaak met zout en peper. Laat 25 minuten zachtjes pruttelen met de deksel op een kier.', min: 25 },
    { t: 'Bechamel: smelt de boter in de steelpan, roer de bloem erdoor en laat 1 minuut garen. Klop de melk er in scheutjes door met de garde tot een gladde, dikke saus. Breng op smaak met nootmuskaat en zout.' },
    { t: 'Verwarm de oven voor op 180 °C (hetelucht 160 °C).', m: 'oven' },
    { t: 'Verwarm de airfryer voor op 160 °C.', m: 'airfryer' },
    { t: 'Bouw op in de schaal: een dun laagje ragù, lasagnebladen, ragù, bechamel. Herhaal tot alles op is en eindig met bechamel en de kaas.' },
    { t: 'Bak de lasagne 35 à 40 minuten in het midden van de oven, tot hij goudbruin is en aan de randen borrelt.', m: 'oven', min: 35 },
    { t: 'Dek de schaal af met aluminiumfolie en bak 20 minuten. Haal de folie weg en bak nog 8 à 10 minuten tot de kaas goudbruin is.', m: 'airfryer', min: 30 },
    { t: 'Laat de lasagne 10 minuten rusten voordat je hem aansnijdt, dan blijven de lagen mooi.', min: 10 }
  ],
  tips: ['De ragù is nog lekkerder als je hem een dag van tevoren maakt.'],
  alt: ['Geen oven en geen airfryer? Maak lasagne uit de pan: breek de bladen in stukken, voeg ze met 300 ml extra water aan de ragù toe en laat 12 minuten garen met de deksel erop. Schep er bechamel of ricotta over.']
},
{
  id: 'risotto-paddenstoelen', naam: 'Risotto met paddenstoelen', keuken: 'Italiaans', soort: 'Hoofdgerecht',
  tijd: 40, pers: 4, niveau: 'Gemiddeld', vega: true,
  intro: 'Romig, aards en verrassend eenvoudig, zolang je de tijd neemt om te roeren.',
  gerei: [
    { tool: 'hapjespan', tekst: 'Brede hapjespan of braadpan met dikke bodem (26 cm)' },
    { tool: 'kookpan', tekst: 'Steelpan om de bouillon warm te houden' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de paddenstoelen' }
  ],
  ingr: [
    { n: 'risottorijst', q: 320, u: 'g', x: 'arborio of carnaroli' },
    { n: 'kastanjechampignons', q: 400, u: 'g', x: 'in plakjes' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'fijngesnipperd' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'witte wijn', q: 125, u: 'ml' },
    { n: 'groentebouillon', q: 1200, u: 'ml' },
    { n: 'boter', q: 40, u: 'g' },
    { n: 'Parmezaanse kaas', q: 60, u: 'g', x: 'vegetarische variant, geraspt' },
    { n: 'verse peterselie', q: 10, u: 'g' },
    { n: 'olijfolie', q: 2, u: 'el' }
  ],
  stappen: [
    { t: 'Breng de bouillon aan de kook in de steelpan en houd hem warm op een laag vuurtje.' },
    { t: 'Bak de champignons in de koekenpan in 1 el olie op hoog vuur 5 à 6 minuten goudbruin. Doe niet te veel tegelijk in de pan, anders gaan ze koken in plaats van bakken. Zout erover en zet apart.', min: 6 },
    { t: 'Fruit de ui in de hapjespan in de rest van de olie en de helft van de boter 4 minuten glazig. Bak de knoflook 1 minuut mee.', min: 4 },
    { t: 'Voeg de rijst toe en roer 2 minuten tot de korrels aan de randen glazig zijn. Blus af met de wijn en laat die verdampen.', min: 2 },
    { t: 'Voeg steeds een soeplepel hete bouillon toe en roer regelmatig. Voeg pas nieuwe bouillon toe als het vocht bijna is opgenomen. Dit duurt 18 à 20 minuten.', min: 18 },
    { t: 'Is de rijst beetgaar en romig? Zet het vuur uit. Roer de rest van de boter, de kaas en de champignons erdoor. Deksel erop, 2 minuten laten rusten en bestrooien met peterselie.' }
  ],
  tips: ['De risotto is goed als hij "golft": als je de pan schuin houdt, vloeit hij langzaam mee.'],
  alt: ['Geen witte wijn? Gebruik extra bouillon met 1 tl citroensap.']
},
{
  id: 'pizza-margherita', naam: 'Pizza margherita', keuken: 'Italiaans', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '1 uur rijzen', pers: 2, niveau: 'Gemiddeld', vega: true,
  intro: 'Zelfgemaakt deeg met tomaat, mozzarella en basilicum. Lukt in de oven, de airfryer én in een koekenpan.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'koekenpan', naam: 'Koekenpan' } ],
  gerei: [
    { tool: 'bakplaat', tekst: 'Bakplaat of pizzasteen, met bakpapier', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer, pizza op bakpapier en iets kleiner dan de mand', m: 'airfryer' },
    { tool: 'koekenpan', tekst: 'Dikke of gietijzeren koekenpan (28 cm) met passende deksel', m: 'koekenpan' }
  ],
  ingr: [
    { kop: 'Deeg' },
    { n: 'bloem', q: 300, u: 'g', x: 'bij voorkeur tipo 00' },
    { n: 'lauw water', q: 190, u: 'ml' },
    { n: 'gedroogde gist', q: 5, u: 'g' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'olijfolie', q: 1, u: 'el' },
    { kop: 'Beleg' },
    { n: 'passata', q: 150, u: 'ml' },
    { n: 'mozzarella', q: 2, u: 'bol', x: 'à 125 g, uitgelekt' },
    { n: 'verse basilicum', q: 10, u: 'g', vers: 'gaat er rauw op' },
    { n: 'gedroogde oregano', q: 0.5, u: 'tl' }
  ],
  stappen: [
    { t: 'Meng bloem, gist en zout in een kom. Voeg het water en de olie toe en kneed 8 à 10 minuten tot een glad, soepel deeg.', min: 10 },
    { t: 'Laat het deeg afgedekt op een warme plek rijzen tot het in volume verdubbeld is, ongeveer 1 uur.', min: 60 },
    { t: 'Verdeel het deeg in 2 bollen en druk ze met je vingers uit tot dunne pizza\'s van ca. 28 cm.' },
    { t: 'Zet de bakplaat in de oven en verwarm voor op de hoogste stand (250 °C of hoger), minimaal 20 minuten.', m: 'oven', min: 20 },
    { t: 'Beleg een pizza met passata, oregano en stukjes mozzarella. Schuif hem op bakpapier op de hete plaat en bak 8 à 10 minuten bovenin de oven.', m: 'oven', min: 9 },
    { t: 'Verwarm de airfryer voor op 200 °C. Maak de pizza\'s zo groot dat ze in de mand passen.', m: 'airfryer' },
    { t: 'Beleg een pizza met passata, oregano en stukjes mozzarella. Leg hem op bakpapier in de mand en bak 7 à 9 minuten tot de rand goudbruin is.', m: 'airfryer', min: 8 },
    { t: 'Verhit de droge koekenpan op middelhoog vuur. Leg het deeg erin en bak 2 minuten tot de onderkant bruine vlekken heeft.', m: 'koekenpan', min: 2 },
    { t: 'Beleg de pizza snel met passata, oregano en mozzarella. Deksel erop en bak 5 à 6 minuten op middellaag vuur tot de kaas gesmolten is.', m: 'koekenpan', min: 6 },
    { t: 'Leg de basilicumblaadjes er pas na het bakken op en besprenkel met een beetje olijfolie.' }
  ],
  tips: ['Deeg kan ook 24 uur in de koelkast rijzen; dan wordt het nog smaakvoller.'],
  alt: ['Geen tijd om te laten rijzen? Gebruik een kant-en-klare pizzabodem. De baktijden blijven gelijk.']
},
{
  id: 'penne-arrabbiata', naam: 'Penne all\'arrabbiata', keuken: 'Italiaans', soort: 'Hoofdgerecht',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: true, pit: 2,
  intro: 'Pittige tomatensaus met veel knoflook. Klaar in de tijd dat de pasta kookt.',
  gerei: [
    { tool: 'kookpan', tekst: 'Grote kookpan voor de pasta' },
    { tool: 'hapjespan', tekst: 'Hapjespan of grote koekenpan (28 cm) voor de saus' }
  ],
  ingr: [
    { n: 'penne', q: 400, u: 'g' },
    { n: 'tomatenblokjes', q: 800, u: 'g', x: 'een blik is 400 g' },
    { n: 'knoflook', q: 4, u: 'teen', x: 'in plakjes' },
    { n: 'rode peper', p: 'rode pepers', q: 1, u: 'st', x: 'of 1 tl chilivlokken' },
    { n: 'olijfolie', q: 4, u: 'el' },
    { n: 'suiker', q: 0.125, u: 'tl' },
    { n: 'verse peterselie', q: 10, u: 'g' },
    { n: 'Parmezaanse kaas', q: 40, u: 'g', opt: true, x: 'om te serveren' }
  ],
  stappen: [
    { t: 'Breng een grote pan water met zout aan de kook.', min: 10 },
    { t: 'Verwarm de olie in de hapjespan op middellaag vuur. Bak knoflook en gesneden peper 2 minuten zacht; de knoflook mag niet bruin worden.', min: 2 },
    { t: 'Voeg de tomatenblokjes, de suiker en wat zout toe. Laat 12 minuten zachtjes inkoken.', min: 12 },
    { t: 'Kook intussen de penne beetgaar volgens de verpakking. Houd een half kopje kookvocht apart.', min: 11 },
    { t: 'Schep de penne door de saus met een scheut kookvocht en laat alles 1 minuut samen garen. Bestrooi met peterselie en eventueel kaas.' }
  ],
  tips: ['Arrabbiata betekent "boos": maak hem zo pittig als je durft.'],
  alt: ['Geen verse peper? Gebruik ½ tot 1 tl chilivlokken of sambal.']
},
{
  id: 'pasta-pesto-kip', naam: 'Pasta pesto met kip', keuken: 'Italiaans', soort: 'Hoofdgerecht',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Verse basilicumpesto, goudbruine kip en zongedroogde tomaat. Een doordeweekse favoriet.',
  gerei: [
    { tool: 'kookpan', tekst: 'Grote kookpan voor de pasta' },
    { tool: 'koekenpan', tekst: 'Koekenpan (28 cm) voor de kip' },
    { tool: 'staafmixer', tekst: 'Staafmixer of hakmolen voor de pesto', of: 'Geen staafmixer? Gebruik 190 g pesto uit een pot.' }
  ],
  ingr: [
    { n: 'fusilli', q: 400, u: 'g', x: 'of andere pasta' },
    { n: 'kipfilet', q: 400, u: 'g', x: 'in reepjes' },
    { n: 'zongedroogde tomaten', q: 80, u: 'g', x: 'in reepjes' },
    { kop: 'Pesto' },
    { n: 'verse basilicum', q: 50, u: 'g', vers: 'de basilicum is de saus' },
    { n: 'pijnboompitten', q: 40, u: 'g' },
    { n: 'Parmezaanse kaas', q: 40, u: 'g', x: 'geraspt' },
    { n: 'knoflook', q: 1, u: 'teen' },
    { n: 'olijfolie', q: 100, u: 'ml' }
  ],
  stappen: [
    { t: 'Rooster de pijnboompitten 2 à 3 minuten in de droge koekenpan tot ze lichtbruin zijn. Laat ze afkoelen op een bord.', min: 3 },
    { t: 'Pureer basilicum, pijnboompitten, kaas, knoflook en olie met de staafmixer tot een grove pesto. Breng op smaak met zout.' },
    { t: 'Kook de pasta beetgaar volgens de verpakking. Houd een half kopje kookvocht apart.', min: 11 },
    { t: 'Bestrooi de kip met zout en peper. Bak in een scheut olie in de koekenpan op middelhoog vuur 6 à 7 minuten rondom goudbruin en gaar.', min: 7 },
    { t: 'Meng pasta, kip, zongedroogde tomaat en pesto. Maak de saus wat losser met 2 el kookvocht.' }
  ],
  tips: ['Verwarm pesto niet in de pan: dan verliest de basilicum zijn frisse kleur en smaak.'],
  alt: ['Kip vervangen? Kikkererwten uit blik (2 blikken, uitgelekt) maken het vegetarisch.']
},
{
  id: 'tiramisu', naam: 'Tiramisu', keuken: 'Italiaans', soort: 'Dessert',
  tijd: 30, wacht: '4 uur opstijven', pers: 6, niveau: 'Makkelijk', vega: true,
  intro: 'Luchtige mascarponecrème, in koffie gedrenkte lange vingers en een laag cacao.',
  gerei: [
    { tool: 'mixer', tekst: 'Handmixer om eieren en room luchtig te kloppen', of: 'Met een garde lukt het ook, het kost alleen meer armkracht.' },
    { tool: 'ovenschaal', tekst: 'Schaal van ca. 20 × 25 cm (een ovenschaal is prima)' }
  ],
  ingr: [
    { n: 'mascarpone', q: 500, u: 'g' },
    { n: 'ei', p: 'eieren', q: 4, u: 'st', x: 'heel vers, gesplitst' },
    { n: 'suiker', q: 100, u: 'g' },
    { n: 'lange vingers', q: 250, u: 'g' },
    { n: 'sterke koffie', q: 300, u: 'ml', x: 'afgekoeld' },
    { n: 'amaretto', q: 3, u: 'el', opt: true },
    { n: 'cacaopoeder', q: 2, u: 'el' }
  ],
  stappen: [
    { t: 'Klop de eidooiers met de suiker met de mixer 3 minuten tot een bleke, dikke crème.', min: 3 },
    { t: 'Spatel de mascarpone erdoor tot het mengsel glad is.' },
    { t: 'Klop de eiwitten in een schone, vetvrije kom stijf. Spatel ze in twee keer luchtig door het mascarponemengsel.' },
    { t: 'Meng de koffie met de amaretto. Doop de lange vingers er kort in, 1 seconde per kant, en leg ze naast elkaar in de schaal.' },
    { t: 'Smeer de helft van de crème erover. Herhaal met een laag lange vingers en de rest van de crème.' },
    { t: 'Dek af en laat minimaal 4 uur, of een nacht, opstijven in de koelkast. Zeef vlak voor het serveren de cacao erover.', min: 240 }
  ],
  tips: ['Liever geen rauw ei? Vervang de eieren door 250 ml stijfgeklopte slagroom.'],
  alt: ['Geen amaretto? Laat hem weg of gebruik een paar druppels amandelextract.']
}
);
