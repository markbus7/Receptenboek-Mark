# Receptenboek Mark

Een receptenboek in de browser met 184 recepten uit 22 keukens. Je opent het door `index.html` in je browser te openen; er is geen installatie of server nodig.

## Wat kan het

- **Zoeken** met suggesties terwijl je typt (recepten, hoofdstukken, soorten en ingrediënten). Een tikfout is geen probleem: "ommelet" of "spagetti" vindt toch het juiste gerecht. Andere namen werken ook: *french toast* vindt wentelteefjes, *pasteitje* of *ragout* de vol-au-vent, *pasta bolognese* de spaghetti bolognese, en *sauzen* of *toetje* geeft alle sauzen of desserts.
- **Filteren** op keuken (Italiaans, Indiaas, Indonesisch, Surinaams, Thais, Nederlands, …), soort gerecht, pan of apparaat (*Bereid in*: Dutch oven, koekenpan, oven, airfryer, …), maximale bereidingstijd en vegetarisch.
- **Sauzen en basissauzen** hebben een eigen soort (*Saus*): pepersaus, champignonroomsaus, bearnaise, hollandaise, bechamel, kaassaus, jus, mayonaise, tomatensaus, pesto, pindasaus, knoflooksaus, salsa en barbecuesaus. Onder *Lekker met* zie je welke saus bij welk gerecht past, en andersom.
- **Wat heb ik in huis?** Typ de ingrediënten die je hebt. Recepten waarvoor je het minst hoeft te kopen komen bovenaan, met per recept wat je nog mist.
- **Omrekenen.** Pas het aantal personen aan, of vul in hoeveel je van één ingrediënt hebt (bijvoorbeeld *300 g kipfilet*). Alle andere hoeveelheden schalen mee.
- **Pannen en apparatuur** staan per recept bovenaan: welke pan, welk formaat, en wat je kunt gebruiken als je hem niet hebt.
- **Groentemixen.** Kies bij *Wat heb ik in huis?* je diepvries groentemix (wokgroente, nasi/bamigroente, mediterrane of Mexicaanse mix, soepgroente, spinazie, …). Je krijgt een kaartje met hoe je hem bereidt, een snel idee en de recepten waar hij het best in past. In een recept zie je welke groenten de mix vervangt en hoeveel gram je ervan gebruikt.
- **Mijn keuken.** Vink aan welke pannen (Dutch oven, RVS-koekenpan, antiaanbak, gietijzer, …) en apparaten (oven, airfryer, contactgrill, rijstkoker, wok, …) je hebt. Recepten met meerdere bereidingswijzen kiezen dan automatisch de juiste, en bij elk recept staat advies voor jouw pannen, zoals hoe je een RVS-pan voorverwarmt of wanneer je Dutch oven een hapjespan vervangt.
- **Timers** bij stappen, **favorieten**, een **boodschappenlijst** die hoeveelheden samenvoegt, en een knop die je scherm aan houdt tijdens het koken.

Favorieten, je boodschappenlijst, je voorraad en je keukeninstellingen worden in je eigen browser bewaard. Wil je ze op al je apparaten hebben, koppel dan je GitHub-account (zie hieronder).

## Synchroniseren tussen apparaten

De app kan je favorieten, boodschappenlijst, voorraad en keukeninstellingen bewaren in een **geheime gist** in je eigen GitHub-account. Elk apparaat dat je koppelt, haalt ze daar op en werkt ze bij. Per onderdeel wint de nieuwste wijziging.

1. Maak op GitHub een token: [Settings → Developer settings → Fine-grained tokens → Generate new token](https://github.com/settings/personal-access-tokens/new).
   - Geef het een naam, bijvoorbeeld *Receptenboek*, en kies een vervaldatum.
   - *Repository access*: laat op **Public repositories** staan (alleen lezen).
   - *Account permissions → Gists*: zet op **Read and write**. Verder niets.
2. Kopieer het token (het begint met `github_pat_`).
3. Open het receptenboek, ga naar het paneel (op telefoon/iPad: **Filters**) en plak het token helemaal onderaan bij **Op al je apparaten**. Tik op **Koppel**.
4. Doe stap 3 op je andere apparaten met hetzelfde token.

Het token wordt alleen in de browser van dat apparaat bewaard en komt nooit in deze repository. Zet een token nooit in de code: deze repository is openbaar. Synchroniseren werkt op de GitHub-site, niet in de Claude-versie van de app.

## Een recept toevoegen

Recepten staan in `js/data/recepten-*.js`. Een recept ziet er zo uit:

```js
{
  id: 'uniek-id', naam: 'Naam', ook: ['andere naam'], keuken: 'Italiaans', soort: 'Hoofdgerecht',
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
  tips: ['…'], alt: ['…'],
  bij: ['steak-frites']                                                         // optioneel: "Lekker met"
}
```

Beschikbare `tool`-waarden en eenheden (`u`) staan in `js/data/gereedschap.js`. Met `ook` vind je een recept ook onder een andere naam (*french toast* → wentelteefjes). `bij` koppelt een saus of bijgerecht aan gerechten; de link verschijnt in beide recepten. Controleer je werk met `node tools/controleer-recepten.js`.

## Foto's

`python3 tools/fotos-ophalen.py` haalt per recept een foto van Wikimedia Commons op (alleen vrije licenties: CC0, publiek domein, CC BY, CC BY-SA). De foto's komen in `img/` en de bronvermelding in `js/data/fotos.js`; de app toont de maker en licentie onder elke foto. Recepten zonder foto tonen een Delfts-blauw tegeltje. Welk Wikipedia-artikel bij welk recept hoort, staat bovenin het script.

## Versies

Het versienummer staat bovenin de app, onder de titel. Zet bij elke wijziging die live gaat een nieuw nummer met `python3 tools/nieuwe-versie.py x.y.z`. Dat werkt `js/versie.js` bij en geeft alle CSS- en JS-bestanden in `index.html` een `?v=x.y.z`, zodat browsers na een update meteen de nieuwe bestanden laden.

- **1.9.3**: foto's bij draadjesvlees en ajam pedis; nu heeft elk recept een foto.
- **1.9.2**: zoeken kent meer Nederlandse namen: *pasteitje* of *ragout* vindt de vol-au-vent, *stoofvlees* het draadjesvlees en de stoverij, *snert* de erwtensoep, *herderspastei* de shepherd's pie en *boterkip* de butter chicken. Ruim 40 recepten kregen zo extra zoeknamen.
- **1.9.1**: de hoofdstuktabbladen vullen op een breed scherm elke volle rij tot de rand van de pagina, in plaats van er net voor te stoppen.
- **1.9.0**: 96 nieuwe recepten (184 in totaal) en elke keuken minstens 5 gerechten, met bekende klassiekers als spaghetti bolognese, taco's, burrito's, guisado con carne molida, wentelteefjes, stoofpeertjes, appelflappen, apfelstrudel, steak frites, mosselen en sushi; 11 nieuwe wokgerechten (15 in totaal); nieuw hoofdstuk Duits & Oostenrijks; sauzen en basissauzen als eigen soort met *Lekker met*-links tussen saus en gerecht; zoeken op andere namen en op soort.
- **1.8.0**: groentemixen uit de diepvries (13 soorten) met bereidingstips, aanraders en hoeveelheden per recept; strengere ingrediëntmatch (paprika ≠ paprikapoeder, ui ≠ gebakken uitjes, bloemkool ≠ bloem).
- **1.7.0**: 11 ei- en lunchgerechten (o.a. omelet, boerenomelet, uitsmijter, roerei, tortilla, frittata, menemen, eggs Benedict, eieren koken); zoeksuggesties terwijl je typt; zoeken vindt ook gerechten met een tikfout ("ommelet" → omelet).
- **1.6.0**: synchroniseren tussen apparaten via een geheime GitHub-gist (met je eigen token).
- **1.5.0**: contactgrill (zoals Tefal OptiGrill) en rijstkoker bij Mijn keuken; contactgrill als bereidingswijze bij saté, souvlaki, köfte, quesadilla's, teriyaki zalm en citroengraskip; rijstkoker-tip bij recepten met rijst.
- **1.4.0**: nieuw recept: Indiase kip madras met kipfilet (met foto).
- **1.3.1**: foto's bij 74 van de 76 recepten (Wikimedia Commons, met bronvermelding); zes foto's met de hand gekozen omdat de standaardfoto niet het gerecht liet zien.
- **1.3.0**: nieuw uiterlijk als echt kookboek: hoofdstukken per keuken met eigen kleur en tabbladen, paginanummers, een recept opent als dubbele pagina, tips met de hand geschreven en de boodschappenlijst als notitieblok.
- **1.2.1**: updates verschijnen direct (geen oude kopie meer uit de browsercache) en meer foto's.
- **1.2.0**: foto's bij de recepten (Wikimedia Commons, met bronvermelding) en een versienummer in de app.
- **1.1.0**: Mijn pannen (Dutch oven, RVS, antiaanbak, gietijzer) met advies per recept, filter *Bereid in*, 31 nieuwe recepten (76 in totaal).
- **1.0.0**: eerste versie met 45 recepten, filters, voorraad, omrekenen, timers, favorieten en boodschappenlijst.
