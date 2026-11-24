/* Kibbeling (2026-11-24, Mark vroeg erom): Hollandse vis in beslag met remoulade en knoflooksaus.
   Geen oven: frituren in de Dutch oven of met een panko-jasje uit de airfryer; de friet komt uit de airfryer. */
RECEPTEN.push(
{
  id: 'kibbeling', toegevoegd: '2026-11-24', naam: 'Kibbeling met remoulade en knoflooksaus',
  ook: ['kibbeling', 'kibbeling met friet', 'kibbeling uit de airfryer', 'kibbeling met remouladesaus', 'kibbeling met knoflooksaus', 'gebakken vis', 'gefrituurde vis', 'vis in beslag', 'kibbelingkruiden', 'remoulade', 'remouladesaus', 'vissnack', 'viskraam'],
  keuken: 'Nederlands', soort: 'Hoofdgerecht',
  tijd: 45, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Zoals van de viskraam op de markt: stukjes witvis in een gekruid, krokant beslag, met een romige remoulade, een snelle knoflooksaus en citroen. Je bakt ze in een laagje hete olie in de Dutch oven, of met een knapperig panko-jasje in de airfryer. Met friet en een frisse komkommersalade is het een hele maaltijd.',
  methodes: [ { id: 'braadpan', naam: 'Frituren in de pan' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven (24 cm) met 3 à 4 cm olie, een schuimspaan en een keukenthermometer', m: 'braadpan', of: 'Een hoge hapjespan werkt ook; houd dan de olie op 3 cm en bak in kleinere porties.' },
    { tool: 'airfryer', tekst: 'Airfryer voor de friet', m: 'braadpan' },
    { tool: 'airfryer', tekst: 'Airfryer voor de friet en de vis, en een oliespuit of -verstuiver', m: 'airfryer' },
    { tool: 'bakplaat', tekst: 'Twee kommen en een bord voor het beslag en de bloem, en een rooster of bord met keukenpapier' }
  ],
  ingr: [
    { kop: 'Vis' },
    { n: 'kabeljauwfilet', q: 600, u: 'g', x: 'of koolvis of Alaska pollak; in stukken van 3 à 4 cm' },
    { n: 'bloem', q: 25, u: 'g', x: 'om te bestuiven' },
    { n: 'zout', q: 0.5, u: 'tl' },
    { kop: 'Beslag' },
    { n: 'bloem', q: 125, u: 'g' },
    { n: 'bakpoeder', q: 1, u: 'tl' },
    { n: 'paprikapoeder', q: 2, u: 'tl', x: 'gewoon, niet gerookt' },
    { n: 'knoflookpoeder', q: 1, u: 'tl' },
    { n: 'uienpoeder', q: 1, u: 'tl' },
    { n: 'kerriepoeder', q: 0.5, u: 'tl', x: 'mild' },
    { n: 'witte peper', q: 0.5, u: 'tl', x: 'gemalen' },
    { n: 'zout', q: 1, u: 'tl' },
    { n: 'bier', q: 200, u: 'ml', x: 'ijskoud, pils; of ijskoud bruisend mineraalwater' },
    { n: 'panko', q: 100, u: 'g', x: 'alleen voor de airfryer', opt: true },
    { kop: 'Bakken' },
    { n: 'zonnebloemolie', q: 1.5, u: 'l', x: 'om te frituren; voor de airfryer 2 el in een verstuiver' },
    { kop: 'Remoulade' },
    { n: 'mayonaise', q: 6, u: 'el' },
    { n: 'augurk', p: 'augurken', q: 2, u: 'st', x: 'fijngehakt' },
    { n: 'kappertjes', q: 1, u: 'el', x: 'fijngehakt' },
    { n: 'sjalot', p: 'sjalotten', q: 1, u: 'st', x: 'heel fijn gesnipperd' },
    { n: 'mosterd', q: 1, u: 'tl', x: 'grove of gewone' },
    { n: 'verse peterselie', q: 1, u: 'el', x: 'fijngehakt' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'een kneepje sap, de rest in partjes' },
    { kop: 'Knoflooksaus' },
    { n: 'Turkse yoghurt', q: 100, u: 'g', x: 'of Griekse yoghurt' },
    { n: 'mayonaise', q: 3, u: 'el' },
    { n: 'knoflook', q: 1, u: 'teen', x: 'geperst of fijngeraspt', vers: 'gaat er rauw in' },
    { n: 'zout', q: 1, u: 'snuf' },
    { kop: 'Erbij' },
    { n: 'diepvriesfriet', q: 750, u: 'g', x: 'of zelfgemaakt zoals bij Steak frites' },
    { n: 'komkommer', p: 'komkommers', q: 1, u: 'st', x: 'in flinterdunne plakjes' },
    { n: 'azijn', q: 3, u: 'el' },
    { n: 'suiker', q: 1, u: 'tl' }
  ],
  stappen: [
    { kop: 'Erbij', t: 'Maak eerst de komkommersalade: roer de azijn, de suiker, 3 el water en een snuf zout door elkaar in een kom. Schep de komkommerplakjes erdoor en zet hem in de koelkast; hij wordt lekkerder als hij even trekt.' },
    { kop: 'Remoulade', t: 'Roer de mayonaise, augurk, kappertjes, sjalot, mosterd en peterselie door elkaar met een kneepje citroensap. Proef: friszuurder met nog wat citroen. Zet koud weg.' },
    { kop: 'Knoflooksaus', t: 'Wrijf de knoflook met de snuf zout op je plank met de platte kant van je mes fijn tot een papje. Roer de yoghurt en mayonaise erdoor en zet koud weg. Wil je hem zoals van de shoarmazaak, maak dan de Knoflooksaus uit het boek.' },
    { kop: 'Vis', t: 'Dep de vis goed droog met keukenpapier en snijd hem in stukken van 3 à 4 cm. Bestrooi ze met het zout. Doe de bloem om te bestuiven op een bord.' },
    { kop: 'Beslag', t: 'Klop de bloem, het bakpoeder, alle kruiden en het zout met het ijskoude bier tot een glad beslag, zo dik als yoghurt. Een paar klontjes zijn prima. Maak het pas vlak voor het bakken, dan blijft het luchtig.' },
    { kop: 'Bakken', t: 'Bak de friet in de airfryer op 200 °C volgens de verpakking, meestal 15 à 18 minuten, en schud elke 5 minuten. Intussen bak je de vis in de pan.', m: 'braadpan', min: 16 },
    { t: 'Verhit de olie in de Dutch oven tot 180 °C. Geen thermometer? Steek de steel van een houten lepel in de olie: borrelen er meteen veel belletjes langs, dan is hij heet genoeg.', m: 'braadpan', min: 8 },
    { t: 'Haal de stukjes vis door de bloem, klop het teveel eraf en haal ze door het beslag. Laat ze even afdruipen en laat ze een voor een van je af in de olie zakken. Bak in 3 porties 3 à 4 minuten, tot ze goudbruin en knapperig zijn; schep ze halverwege om. Laat uitlekken op een rooster of keukenpapier en laat de olie tussendoor weer op 180 °C komen.', m: 'braadpan', min: 4 },
    { kop: 'Bakken', t: 'Bak eerst de friet in de airfryer op 200 °C volgens de verpakking, meestal 15 à 18 minuten, en schud elke 5 minuten. Doe hem in een schaal met aluminiumfolie erover; hij gaat straks nog even terug.', m: 'airfryer', min: 16 },
    { t: 'Verwarm de airfryer voor op 200 °C. Doe de panko op een tweede bord. Haal de stukjes vis door de bloem, dan door het beslag, laat ze goed afdruipen en rol ze door de panko; druk hem stevig aan. Nat beslag zonder panko druipt door de mand, dus sla de panko niet over.', m: 'airfryer' },
    { t: 'Spuit de stukjes rondom in met olie tot er geen droge, witte plekken meer zijn. Leg ze in één laag in de mand, met wat ruimte ertussen, en bak ze 8 à 10 minuten tot ze goudbruin zijn. Keer ze halverwege en spuit droge plekken nog eens in. Bak zo nodig in 2 rondes.', m: 'airfryer', min: 9 },
    { t: 'Doe de friet nog 3 minuten terug in de airfryer, zodat hij weer heet en krokant is.', m: 'airfryer', min: 3 },
    { kop: 'Serveren', t: 'Strooi meteen een snufje zout over de kibbeling en serveer hem warm met de remoulade, de knoflooksaus, partjes citroen, de friet en de komkommersalade.' }
  ],
  tips: [
    'IJskoud bier of bruiswater in hete olie maakt het beslag luchtig en krokant. Zet het 15 minuten in de vriezer voordat je begint.',
    'Kibbeling was vroeger van de wangen van de kabeljauw; nu is het meestal kabeljauw, koolvis of Alaska pollak. Koolvis en pollak zijn goedkoper en werken net zo goed. Diepvriesvis kan ook: laat hem een nacht in de koelkast ontdooien en dep hem extra goed droog.',
    'Geen zin om de kruiden af te meten? Een potje kibbelingkruiden uit de supermarkt werkt ook: 1 el door het beslag en laat het zout dan weg.',
    'Laat de olie in de pan afkoelen, zeef hem en bewaar hem in een fles; je kunt hem nog een keer gebruiken om vis te bakken.'
  ],
  alt: [
    'Lekkerbekje: bak hele stukken filet van ongeveer 150 g, in de pan 5 à 6 minuten, in de airfryer 12 à 14 minuten.',
    'Ravigottesaus in plaats van remoulade: roer 1 fijngehakt hardgekookt ei, wat bieslook en wat dragon door de remoulade.',
    'Geen bier? Neem ijskoud bruisend mineraalwater, of melk voor een wat zachter beslag.'
  ],
  bij: ['knoflooksaus']
}
);
