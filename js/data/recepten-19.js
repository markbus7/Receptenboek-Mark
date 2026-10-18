/* Gebak: cake */
RECEPTEN.push(
{
  id: 'botercake', naam: 'Hollandse botercake', ook: ['cake', 'boter cake', 'marmercake', 'pondcake', 'cake bakken'],
  keuken: 'Nederlands', soort: 'Dessert',
  tijd: 20, wacht: '1 uur bakken', pers: 12, stuks: 'plakken', niveau: 'Makkelijk', vega: true,
  intro: 'Ouderwetse cake met een goudbruine scheur bovenop: luchtig, boterig en precies goed bij de koffie. Met een variant voor marmercake.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'bakvorm', tekst: 'Cakevorm van ca. 25 cm, ingevet en bestoven met bloem of bekleed met bakpapier' },
    { tool: 'mixer', tekst: 'Handmixer met gardes en een grote kom', of: 'Zonder mixer: klop de zachte boter en suiker 10 minuten flink met een houten lepel.' },
    { tool: 'airfryer', tekst: 'Airfryer waar een kleinere cakevorm (ca. 20 cm) in past', m: 'airfryer' }
  ],
  ingr: [
    { n: 'boter', q: 200, u: 'g', x: 'op kamertemperatuur, zacht' },
    { n: 'suiker', q: 200, u: 'g', x: 'fijne kristalsuiker' },
    { n: 'vanillesuiker', q: 1, u: 'zakje' },
    { n: 'ei', p: 'eieren', q: 4, u: 'st', x: 'op kamertemperatuur' },
    { n: 'zelfrijzend bakmeel', q: 200, u: 'g', x: 'of 200 g bloem met 2 tl bakpoeder' },
    { n: 'zout', q: 1, u: 'snuf' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'alleen de geraspte schil', opt: true },
    { n: 'melk', q: 2, u: 'el', opt: true },
    { n: 'cacaopoeder', q: 2, u: 'el', x: 'alleen voor marmercake', opt: true }
  ],
  stappen: [
    { t: 'Verwarm de oven voor op 175 °C (hetelucht 160 °C). Vet de cakevorm in en bestuif hem met bloem.', m: 'oven' },
    { t: 'Verwarm de airfryer voor op 160 °C. Gebruik ¾ van het beslag voor een kleinere vorm; bak de rest als muffins.', m: 'airfryer' },
    { t: 'Klop de zachte boter met de suiker, vanillesuiker en het zout in 5 minuten tot een lichte, bleke en luchtige massa. Dit is het geheim van een luchtige cake.', min: 5 },
    { t: 'Klop de eieren er één voor één door; wacht steeds tot het vorige ei helemaal is opgenomen. Gaat het schiften, klop dan een eetlepel van het bakmeel mee.' },
    { t: 'Zeef het bakmeel erboven en spatel het met de citroenrasp en eventueel de melk kort door het beslag, tot je geen meel meer ziet. Niet langer mixen, anders wordt de cake taai.' },
    { t: 'Marmercake: schep een derde van het beslag in een andere kom en roer de cacao erdoor. Schep beide beslagen om en om in de vorm en trek er met een vork een paar keer een slinger doorheen.' },
    { t: 'Schep het beslag in de vorm en strijk glad. Trek met een in boter gedoopt mes een lijn in de lengte over het midden: daar scheurt de cake mooi open.' },
    { t: 'Bak de cake 55 à 65 minuten in het midden van de oven. Hij is gaar als een satéprikker er droog uitkomt.', m: 'oven', min: 60 },
    { t: 'Bak de cake 40 à 45 minuten in de airfryer. Kleurt de bovenkant te snel, leg er dan na 25 minuten een stukje aluminiumfolie op.', m: 'airfryer', min: 42 },
    { t: 'Laat de cake 10 minuten in de vorm afkoelen en stort hem dan op een rooster. Pas aansnijden als hij lauw is.', min: 10 }
  ],
  tips: ['Alles op kamertemperatuur is het halve werk: koude eieren laten het beslag schiften. Goed ingepakt blijft de cake 4 dagen lekker en hij is prima in te vriezen.'],
  alt: ['Citroencake: roer na het bakken 75 g poedersuiker met 2 el citroensap tot een glazuur en schenk dat over de lauwe cake.', 'Met fruit: schep 150 g blauwe bessen of blokjes appel, licht door bloem gehaald, door het beslag.']
}
);
