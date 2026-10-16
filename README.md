# Receptenboek Mark

Een receptenboek in de browser met 184 gerechten uit 22 keukens, waarvan 21 in meerdere varianten (bijvoorbeeld met kip of met gehakt). Je opent het door `index.html` in je browser te openen; er is geen installatie of server nodig.

## Wat kan het

- **Zoeken** met suggesties terwijl je typt (recepten, hoofdstukken, soorten en ingrediënten). Een tikfout is geen probleem: "ommelet" of "spagetti" vindt toch het juiste gerecht. Andere namen werken ook: *french toast* vindt wentelteefjes, *pasteitje* of *ragout* de vol-au-vent, *pasta bolognese* de spaghetti bolognese, en *sauzen* of *toetje* geeft alle sauzen of desserts.
- **Filteren** op keuken (Italiaans, Indiaas, Indonesisch, Surinaams, Thais, Nederlands, …), soort gerecht, pan of apparaat (*Bereid in*: Dutch oven, koekenpan, oven, airfryer, …), maximale bereidingstijd en vegetarisch.
- **Sauzen en basissauzen** hebben een eigen soort (*Saus*): pepersaus, champignonroomsaus, bearnaise, hollandaise, bechamel, kaassaus, jus, mayonaise, tomatensaus, pesto, pindasaus, knoflooksaus, salsa en barbecuesaus. Onder *Lekker met* zie je welke saus bij welk gerecht past, en andersom.
- **Varianten.** Gerechten die je met verschillend vlees of vis maakt, staan maar één keer in het boek: taco's met gehakt of kip, curry madras met rundvlees, kip of lam, saté van kip of varkensvlees, fajitas met kip of biefstuk, enzovoort. Onder de kaart en bovenaan het recept tik je de variant aan die je wilt maken; ingrediënten, bereiding en tips wisselen mee, het aantal personen blijft staan.
- **Wat heb ik in huis?** Typ de ingrediënten die je hebt. Recepten waarvoor je het minst hoeft te kopen komen bovenaan, met per recept wat je nog mist.
- **Omrekenen.** Pas het aantal personen aan, of vul in hoeveel je van één ingrediënt hebt (bijvoorbeeld *300 g kipfilet*). Alle andere hoeveelheden schalen mee.
- **Pannen en apparatuur** staan per recept bovenaan: welke pan, welk formaat, en wat je kunt gebruiken als je hem niet hebt.
- **Groentemixen.** Kies bij *Wat heb ik in huis?* je diepvries groentemix (wokgroente, nasi/bamigroente, mediterrane of Mexicaanse mix, soepgroente, spinazie, …). Je krijgt een kaartje met hoe je hem bereidt, een snel idee en de recepten waar hij het best in past. In een recept zie je welke groenten de mix vervangt en hoeveel gram je ervan gebruikt.
- **Mijn keuken.** Vink aan welke pannen (Dutch oven, RVS-koekenpan, antiaanbak, gietijzer, …) en apparaten (oven, airfryer, contactgrill, rijstkoker, wok, …) je hebt. Recepten met meerdere bereidingswijzen kiezen dan automatisch de juiste, en bij elk recept staat advies voor jouw pannen, zoals hoe je een RVS-pan voorverwarmt of wanneer je Dutch oven een hapjespan vervangt.
- **Delen als pdf.** Met de knop *Deel* bovenaan een recept maak je een pdf in de stijl van het boek: met hoofdstukkleur, foto, ingrediënten, bereiding en de tips als geeltje. Op telefoon en tablet stuur je hem meteen via WhatsApp, Berichten of mail; op de computer wordt hij gedownload. De pdf toont het recept zoals je het ziet (gekozen variant, bereidingswijze en aantal personen), met onderaan een link die het recept precies zo opent.
- **Restjes.** Bij elk recept staat op een briefje wat je overhoudt van pakken, blikken en bosjes (een blikje tomatenpuree, een pak room, een halve komkommer, eiwitten), met een tip wat je ermee doet. Het rekent mee als je het aantal personen aanpast.
- **Mijn logboek.** Onder elk recept vink je af dat je het gemaakt hebt, zo vaak als je wilt: je ziet hoe vaak (bijv. *5× gemaakt*) en wanneer de laatste keer was, en op de receptkaart in het overzicht staat het ook. Geef met sterren aan hoe lekker je het vindt en hoe leuk het is om te maken, en schrijf er een eigen notitie bij. Elke variant heeft een eigen logboek; de kaart telt alle varianten samen.
- **Timers** bij stappen, **favorieten**, een **boodschappenlijst** die hoeveelheden samenvoegt, en een knop die je scherm aan houdt tijdens het koken.

Favorieten, je boodschappenlijst, je voorraad, je keukeninstellingen en je logboek worden in je eigen browser bewaard. Wil je ze op al je apparaten hebben, koppel dan je GitHub-account (zie hieronder).

## Synchroniseren tussen apparaten

De app kan je favorieten, boodschappenlijst, voorraad, keukeninstellingen en logboek bewaren in een **geheime gist** in je eigen GitHub-account. Elk apparaat dat je koppelt, haalt ze daar op en werkt ze bij. Per onderdeel wint de nieuwste wijziging.

1. Maak op GitHub een token via [deze link](https://github.com/settings/personal-access-tokens/new?name=Receptenboek&description=Synchroniseren%20van%20het%20receptenboek%20tussen%20apparaten&expires_in=365&gists=write). Naam, vervaldatum (een jaar) en rechten staan dan al ingevuld; de app heeft dezelfde link.
   - *Repository access*: laat op **Public repositories** staan (alleen lezen).
   - *Permissions → Gists*: controleer dat dit op **Read and write** staat. Verder niets.
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

### Een variant toevoegen

Maak je een gerecht ook met ander vlees of vis, voeg het dan toe als variant in plaats van als los recept. Geef het basisrecept een `variant` (de naam op de knop) en eventueel een `gerecht` (de naam van het gerecht als geheel, op de kaart). De variant is een recept met `variantVan` en neemt alles over wat hij zelf niet invult:

```js
// basisrecept
{ id: 'tacos', naam: 'Taco\'s met gekruid gehakt', gerecht: 'Taco\'s', variant: 'Gehakt', ... },
// variant
{
  id: 'tacos-kip', variantVan: 'tacos', variant: 'Kip', naam: 'Taco\'s met kip',
  intro: '…',
  vervang: { rundergehakt: { n: 'kippendijfilet', q: 500, u: 'g' }, Gehakt: { kop: 'Kip' } },  // eerste regel met die naam
  stappen: [ … ]                                                                                // als de bereiding anders is
}
```

Met `vervang` ruil je een ingrediënt (of tussenkopje) om; `null` haalt het weg. Een veld op `null` zetten (bijv. `methodes: null`) betekent dat de variant het níet overneemt. Een variant zonder eigen foto toont die van het basisrecept.

Beschikbare `tool`-waarden en eenheden (`u`) staan in `js/data/gereedschap.js`. Gangbare verpakkingsgroottes en de tips voor restjes staan in `js/data/verpakkingen.js`; kies hoeveelheden die op een hele verpakking uitkomen als het gerecht daar niet slechter van wordt. Met `ook` vind je een recept ook onder een andere naam (*french toast* → wentelteefjes). `bij` koppelt een saus of bijgerecht aan gerechten; de link verschijnt in beide recepten. Controleer je werk met `node tools/controleer-recepten.js`.

## Foto's

`python3 tools/fotos-ophalen.py` haalt per recept een foto van Wikimedia Commons op (alleen vrije licenties: CC0, publiek domein, CC BY, CC BY-SA). De foto's komen in `img/` en de bronvermelding in `js/data/fotos.js`; de app toont de maker en licentie onder elke foto. Recepten zonder foto tonen een Delfts-blauw tegeltje. Welk Wikipedia-artikel bij welk recept hoort, staat bovenin het script.

## Versies

Het versienummer staat bovenin de app, onder de titel. Zet bij elke wijziging die live gaat een nieuw nummer met `python3 tools/nieuwe-versie.py x.y.z`. Dat werkt `js/versie.js` bij en geeft alle CSS- en JS-bestanden in `index.html` een `?v=x.y.z`, zodat browsers na een update meteen de nieuwe bestanden laden.

- **1.17.1**: het boodschappenlijstje is op de telefoon helemaal leesbaar. Lange ingrediënten lopen door op een volgende regel in plaats van af te breken met "...", en de receptnaam staat klein onder het ingrediënt. Wat in het recept onder een ingrediënt staat (zoals het alternatief voor madras-kerriepoeder, of "fijngesnipperd") staat nu ook op het lijstje en gaat mee bij *Kopieer lijst*; ook op lijstjes die je al had.
- **1.17.0**: *Mijn logboek* onder elk recept: afvinken dat je het gemaakt hebt (meerdere keren, met de datum van de laatste keer en een knop om een keer weg te halen), sterren voor hoe lekker en hoe leuk om te maken, en een eigen notitie. De receptkaart toont hoe vaak je het gemaakt hebt. Het logboek synchroniseert mee met je andere apparaten.
- **1.16.1**: melk kent nu ook pakjes van 250 ml, en de app combineert verpakkingen als dat minder overlaat (bijv. een pak van 500 ml en een van 250 ml). De melktip zegt hoe lang open melk goed blijft en wat je met de rest doet.
- **1.16.0**: *Deel* maakt nu een pdf in de stijl van het boek in plaats van platte tekst. De pdf-bibliotheken (jsPDF en html2canvas) staan in `js/lib` en laden pas als je voor het eerst deelt. Open je het boek als los bestand op je computer, dan komt de foto niet in de pdf (de browser staat dat niet toe); op de GitHub-site wel.
- **1.15.0**: minder verspilling. Elk recept heeft een briefje *Restjes*: hoeveel verpakkingen je koopt, wat je overhoudt (ook als je het aantal personen aanpast) en wat je met de rest doet, voor onder meer room, zure room, crème fraîche, melk, yoghurt, tomatenpuree, passata, kokosmelk, gehakt, spekblokjes, taugé, champignons, verse kruiden, bleekselderij, wijn en eiwitten. Hoeveelheden zijn waar het kan afgerond op een hele verpakking: een heel blikje tomatenpuree in bolognese, lasagne, chili, goulash, shepherd's pie en harira; een heel pakje slagroom (200 ml) in waterzooi, pepersaus en vol-au-vent; een hele zak taugé (200 g) in bami, pho, foe yong hai, tjap tjoy, yakisoba, bibimbap en gado-gado; 2 bekers zure room in paprikás csirke en lángos; een hele fles passata in currywurst en tikka masala; een bak gehakt van 300 of 500 g in karnıyarık, bibimbap, groentesoep en vol-au-vent; 2 blokken feta in spanakopita; een heel bakje champignons in tom kha kai en tjap tjoy. De tekst op de gele briefjes (Tip, Alternatieven, Restjes, Lekker met en de groentemix) staat nu in een gewone leesletter; alleen de kopjes zijn nog handgeschreven.
- **1.14.0**: knop *Deel* bovenaan elk recept. Op telefoon opent het deelmenu, op de computer gaat het recept naar je klembord. De tekst heeft de ingrediënten (omgerekend), de bereiding, de tip en een link die het recept met dezelfde variant en hetzelfde aantal personen opent (bijv. `#tacos-kip?personen=6`).
- **1.13.0**: varianten. Gerechten met ander vlees of vis staan nu één keer in het boek, met klikbare varianten op de kaart en bovenaan het recept. *Curry madras met rundvlees* en *kip madras* zijn samengevoegd (met een nieuwe lamsversie), en 20 gerechten kregen een nieuwe variant: taco's met kip, burrito's met gehakt, fajitas met biefstuk, pad thai met kip, saté babi, gyros van kip, cottage pie, massaman met kip, kipschnitzel, pad kra pao moo, pad see ew met rundvlees, banh mi met kip, gà lúc lắc, foe yong hai met garnalen, tjap tjoy met varkensvlees, koe lo yuk, kip met broccoli, dwaeji bulgogi, ajam ketjap en waterzooi met vis.
- **1.12.0**: nieuw recept *Gehaktballen in tomatensaus* (polpette al sugo), met foto; in de pan of met de ballen uit de airfryer. Je vindt het ook als *polpette*, *italiaanse gehaktballen*, *balletjes in tomatensaus* of *meatballs*.
- **1.11.4**: bij *Op al je apparaten* staat een link die het GitHub-tokenformulier al invult (naam, een jaar geldig, alleen *Gists: Read and write*), met een korte stap-voor-stap uitleg.
- **1.11.3**: bij recepten met slagroom staat erbij dat het vloeibare slagroom uit een pak is (geen spuitbus), met kookroom of crème fraîche als alternatief waar dat kan. Pepersaus en champignonroomsaus hebben een tip over welke room je pakt en wat je met een restje doet.
- **1.11.2**: elke receptkaart in het overzicht toont de moeilijkheidsgraad (Makkelijk, Gemiddeld of Moeilijk, met één tot drie stipjes).
- **1.11.1**: met de knop *Andersom* naast Sorteer draai je elke sortering om, bijvoorbeeld moeilijkste eerst, meeste ingrediënten eerst, langste bereidingstijd eerst of Z–A.
- **1.11.0**: meer sorteerkeuzes: *Minste ingrediënten* (zout, peper, olie en water tellen niet mee), *Makkelijkste eerst*, *Per soort gerecht* en *Favorieten eerst*; nieuw filter *Moeilijkheidsgraad*. Het niveau van alle recepten is opnieuw beoordeeld: er is nu ook *Moeilijk* (sushi, gyoza, eggs Benedict, tamagoyaki en béarnaise); naan en mayonaise werden Gemiddeld, Franse uiensoep en ossobuco Makkelijk.
- **1.10.1**: foto's bij draadjesvlees en ajam pedis; nu heeft elk recept een foto.
- **1.10.0**: bij *Wat heb ik in huis?* staan klikbare suggesties onder het invoerveld: eerst de ingrediënten die het vaakst in de recepten voorkomen, en tijdens het typen de namen die passen. De diepvries groentemix kies je nu door te typen (bijv. *wok*, *soep* of *spinazie*), waarna de passende mixen als suggestie verschijnen.
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
