# Receptenboek Mark

Een receptenboek in de browser met 76 recepten uit 21 keukens. Je opent het door `index.html` in je browser te openen; er is geen installatie of server nodig.

## Wat kan het

- **Filteren** op keuken (Italiaans, Indiaas, Indonesisch, Surinaams, Thais, Nederlands, …), soort gerecht, pan of apparaat (*Bereid in*: Dutch oven, koekenpan, oven, airfryer, …), maximale bereidingstijd en vegetarisch.
- **Wat heb ik in huis?** Typ de ingrediënten die je hebt. Recepten waarvoor je het minst hoeft te kopen komen bovenaan, met per recept wat je nog mist.
- **Omrekenen.** Pas het aantal personen aan, of vul in hoeveel je van één ingrediënt hebt (bijvoorbeeld *300 g kipfilet*). Alle andere hoeveelheden schalen mee.
- **Pannen en apparatuur** staan per recept bovenaan: welke pan, welk formaat, en wat je kunt gebruiken als je hem niet hebt.
- **Mijn keuken.** Vink aan welke pannen (Dutch oven, RVS-koekenpan, antiaanbak, gietijzer, …) en apparaten (oven, airfryer, wok, …) je hebt. Recepten met meerdere bereidingswijzen kiezen dan automatisch de juiste, en bij elk recept staat advies voor jouw pannen, zoals hoe je een RVS-pan voorverwarmt of wanneer je Dutch oven een hapjespan vervangt.
- **Timers** bij stappen, **favorieten**, een **boodschappenlijst** die hoeveelheden samenvoegt, en een knop die je scherm aan houdt tijdens het koken.

Favorieten, je boodschappenlijst, je voorraad en je keukeninstellingen worden in je eigen browser bewaard.

## Een recept toevoegen

Recepten staan in `js/data/recepten-*.js`. Een recept ziet er zo uit:

```js
{
  id: 'uniek-id', naam: 'Naam', keuken: 'Italiaans', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '1 uur rijzen', pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Korte omschrijving.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ], // optioneel
  gerei: [
    { tool: 'hapjespan', tekst: 'Hapjespan (28 cm)', of: 'Alternatief als je hem niet hebt' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal 20 × 30 cm', m: 'oven' }          // alleen bij de ovenmethode
  ],
  ingr: [
    { kop: 'Saus' },                                                            // tussenkopje
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'gesnipperd' },
    { n: 'zout' }                                                               // zonder hoeveelheid = naar smaak
  ],
  stappen: [ { t: 'Stap voor alle methodes.', min: 10 }, { t: 'Alleen voor de airfryer.', m: 'airfryer' } ],
  tips: ['…'], alt: ['…']
}
```

Beschikbare `tool`-waarden en eenheden (`u`) staan in `js/data/gereedschap.js`.

## Foto's

`python3 tools/fotos-ophalen.py` haalt per recept een foto van Wikimedia Commons op (alleen vrije licenties: CC0, publiek domein, CC BY, CC BY-SA). De foto's komen in `img/` en de bronvermelding in `js/data/fotos.js`; de app toont de maker en licentie onder elke foto. Recepten zonder foto tonen een Delfts-blauw tegeltje. Welk Wikipedia-artikel bij welk recept hoort, staat bovenin het script.

## Versies

Het versienummer staat bovenin de app, onder de titel. Zet bij elke wijziging die live gaat een nieuw nummer met `python3 tools/nieuwe-versie.py x.y.z`. Dat werkt `js/versie.js` bij en geeft alle CSS- en JS-bestanden in `index.html` een `?v=x.y.z`, zodat browsers na een update meteen de nieuwe bestanden laden.

- **1.2.1**: updates verschijnen direct (geen oude kopie meer uit de browsercache) en meer foto's.
- **1.2.0**: foto's bij de recepten (Wikimedia Commons, met bronvermelding) en een versienummer in de app.
- **1.1.0**: Mijn pannen (Dutch oven, RVS, antiaanbak, gietijzer) met advies per recept, filter *Bereid in*, 31 nieuwe recepten (76 in totaal).
- **1.0.0**: eerste versie met 45 recepten, filters, voorraad, omrekenen, timers, favorieten en boodschappenlijst.
