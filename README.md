# Receptenboek Mark

Een receptenboek in de browser met 45 recepten uit 15 keukens. Je opent het door `index.html` in je browser te openen; er is geen installatie of server nodig.

## Wat kan het

- **Filteren** op keuken (Italiaans, Indiaas, Thais, Nederlands, …), soort gerecht, maximale bereidingstijd en vegetarisch.
- **Wat heb ik in huis?** Typ de ingrediënten die je hebt. Recepten waarvoor je het minst hoeft te kopen komen bovenaan, met per recept wat je nog mist.
- **Omrekenen.** Pas het aantal personen aan, of vul in hoeveel je van één ingrediënt hebt (bijvoorbeeld *300 g kipfilet*). Alle andere hoeveelheden schalen mee.
- **Pannen en apparatuur** staan per recept bovenaan: welke pan, welk formaat, en wat je kunt gebruiken als je hem niet hebt.
- **Mijn keuken.** Vink aan welke apparaten je hebt (oven, airfryer, wok, …). Recepten met meerdere bereidingswijzen kiezen dan automatisch de juiste; de stappen veranderen mee.
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
