/* Vlees en vis uit de vriezer. In een recept tik je aan wat uit de vriezer komt; de app zegt dan
   hoe lang het moet ontdooien (voor de hoeveelheid die je nu kookt), wanneer je het uit de vriezer haalt,
   wat je doet als je het vergeten bent en wat er in dit recept anders gaat.

   VRIEZER: welke ingrediënten (n, zoals ze in de recepten staan) bij welke soort horen.
     stuk: gewicht van één stuk of plak in gram, voor ingrediënten die in stuks in een recept staan
   VRIEZER_SOORTEN: per soort
     uur:     [minimaal, per kg] uren ontdooien in de koelkast; null = niet van tevoren ontdooien
     water:   minuten per 500 g in koud water (in een dichte zak, water elk half uur verversen)
     stap:    woorden in de bereiding waar het vlees de pan in gaat; daar komt een krabbel bij
     inStap:  die krabbel (inStapStoof, inStapOven, inStapKneden: als dat recept stooft, de oven in gaat of je kneedt)
     bevroren: wat je doet als je het (half) bevroren gebruikt, of waarom dat niet kan
     stoof:   in plaats van bevroren, als het recept stooft, suddert of lang in de oven gaat
     oven:    in plaats van bevroren, als het in de oven of airfryer gaat
     kneden:  in plaats van bevroren, als je het kneedt (balletjes, burgers)
     droog:   na het ontdooien droogdeppen
   Een recept kan per ingrediënt iets anders zeggen, bijvoorbeeld voor rauwe vis of vlees dat je half bevroren snijdt:
     vriezer: { zalmfilet: { bevroren: 'tekst', inStap: 'krabbel', water: null } }
   Die velden gaan dan voor de soort. */
window.VRIEZER_SOORTEN = {
  gehakt: {
    uur: [10, 20], water: 35, droog: false,
    stap: /gehakt|balletjes|ballen|burgers?\b|köfte|kofte/i,
    inStap: 'ontdooid, of bevroren ± 10 min langer', inStapKneden: 'helemaal ontdooid',
    bevroren: 'Rul gehakt kan bevroren in de pan: bak het blok op middelhoog vuur, schraap steeds de ontdooide laag eraf en schep het vocht weg. Reken op ± 10 minuten extra. Of ontdooi het op de ontdooistand van de magnetron (halverwege omdraaien) en bak het meteen.',
    kneden: 'Hier kneed je het gehakt, dus het moet helemaal ontdooid zijn: half bevroren gehakt mengt niet en de balletjes vallen uit elkaar. Snel: de ontdooistand van de magnetron, halverwege omdraaien, en daarna meteen verder.'
  },
  kip: {
    uur: [12, 16], water: 35, droog: true,
    stap: /\bkip|kippen/i,
    inStap: 'helemaal ontdooid, drooggedept', inStapStoof: 'ontdooid, of bevroren de helft langer', inStapOven: 'ontdooid, of bevroren de helft langer',
    bevroren: 'Bak kip nooit bevroren: dan is de buitenkant klaar terwijl het midden nog rauw is. Druk op het dikste stuk: voel je nog ijs, dan is hij niet klaar om te bakken.',
    stoof: 'In een stoofpot of soep kan kip desnoods bevroren, maar dan los van elkaar: leg de stukken in het hete vocht en reken op de helft langer. Snijd het dikste stuk door: het moet wit zijn, niet roze.',
    oven: 'In de oven of airfryer kan het desnoods bevroren, maar dan los van elkaar en zonder marinade: reken op de helft langer en kijk bij het bot of het sap helder is (niet roze).'
  },
  heleKip: {
    uur: [24, 16], water: 35, droog: true,
    stap: /\bkip/i,
    inStap: 'helemaal ontdooid, ook van binnen',
    bevroren: 'Een hele kip moet helemaal ontdooid zijn, ook van binnen: voel in de holte of er nog ijs zit en haal er het zakje met binnenwerk uit als dat erin zit.'
  },
  stoof: {
    uur: [12, 18], water: 35, droog: true,
    stap: /vlees|lappen|schenkel|schouder|buik|procureur|krabbetjes|\blam\b|riblappen/i,
    inStap: 'ontdooid en drooggedept', inStapStoof: 'ontdooid aanbraden, of bevroren de helft langer stoven',
    bevroren: 'Bevroren kun je het niet aanbraden of snijden: laat het helemaal ontdooien.',
    stoof: 'Kan als je haast hebt, maar aanbraden lukt dan niet. Leg het bevroren in hele stukken in het hete stoofvocht en reken op de helft langer stoven. De bruine aanbaklaag mist, dus de saus wordt iets minder diep van smaak.'
  },
  kortBakken: {
    uur: [10, 16], water: 35, droog: true,
    stap: /biefstuk|entrecote|steak|varkenshaas|haas|schnitzel|vlees/i,
    inStap: 'ontdooid, 30 min op kamertemperatuur, drooggedept',
    bevroren: 'Bak het niet bevroren: dan krijg je geen korst en is het van binnen ongelijk gaar. Haal het na het ontdooien 30 minuten voor het bakken uit de koelkast.'
  },
  vis: {
    uur: [8, 16], water: 30, droog: true,
    stap: /vis|kabeljauw|zalm|filet/i,
    inStap: 'ontdooid en goed drooggedept', inStapOven: 'mag bevroren, de helft langer',
    bevroren: 'In de pan of in een saus moet vis eerst ontdooien: bevroren valt hij uit elkaar en spat het vet.',
    oven: 'In de oven kan vis recht uit de vriezer: spoel het ijslaagje eraf, dep hem droog en reken op de helft langer. Hij is gaar als hij makkelijk uit elkaar valt.'
  },
  garnalen: {
    uur: null, droog: true,
    stap: /garnalen/i,
    inStap: 'ontdooid onder de koude kraan, drooggedept',
    bevroren: 'Niet van tevoren uit de vriezer halen. Laat ze in een vergiet onder de koude kraan ontdooien, dat duurt ± 10 minuten, en dep ze goed droog. Rauwe (grijze) garnalen bak je daarna gewoon; voorgekookte (roze) warm je alleen 1 minuut mee, anders worden ze taai.'
  },
  spek: {
    uur: null, droog: false,
    stap: /spek|pancetta/i,
    inStap: 'mag bevroren, ± 2 min langer',
    bevroren: 'Niet ontdooien: doe ze bevroren in de koude pan en bak ze op middelhoog vuur uit. Eerst komt er wat vocht vrij; als dat verdampt is worden ze knapperig, ± 2 minuten later dan normaal. Zitten ze aan elkaar vast, sla de zak dan even op het aanrecht.'
  },
  spekPlakjes: {
    uur: null, droog: false,
    stap: /spek|bacon/i,
    inStap: 'mag bevroren, ± 2 min langer',
    bevroren: 'Niet van tevoren ontdooien. Zitten de plakjes aan elkaar vast, leg het dichte pakje dan 10 minuten in koud water: dan gaan ze los. Bak ze daarna gewoon, ± 2 minuten langer.'
  },
  rookworst: {
    uur: [8, 16], water: 30, droog: false,
    stap: /rookworst/i,
    inStap: 'kan bevroren, ± 15 min langer',
    bevroren: 'Rookworst kan recht uit de vriezer: leg hem in heet water (niet koken) of in de soep en reken op ± 15 minuten langer. Wil je hem in plakjes, laat hem dan eerst ontdooien.'
  },
  worst: {
    uur: [8, 16], water: 30, droog: false,
    stap: /worst/i,
    inStap: 'ontdooid, of bevroren op laag vuur',
    bevroren: 'Bevroren kan ook: bak ze op laag vuur met een deksel op de pan en keer ze vaak, ± 10 minuten langer. Ze zijn gaar als ze van binnen niet meer roze zijn.'
  },
  mosselen: {
    uur: null, droog: false,
    stap: /mosselen/i,
    inStap: 'uit de vriezer: alleen opwarmen',
    bevroren: 'Diepvriesmosselen zijn al gekookt en meestal zonder schelp. Niet ontdooien: maak de bouillon met de groente zoals in het recept en warm de bevroren mosselen er de laatste 4 à 5 minuten in op, niet langer, anders worden ze taai. Reken op ± 1 kg diepvriesmosselen (zonder schelp) voor 4 personen.'
  }
};

window.VRIEZER = [
  { n: ['rundergehakt', 'half-om-half gehakt', 'varkensgehakt', 'lamsgehakt'], soort: 'gehakt' },
  { n: ['kipfilet'], soort: 'kip', stuk: 150 },
  { n: ['kippendijfilet', 'kippendijen'], soort: 'kip', stuk: 100 },
  { n: ['kippenpoten'], soort: 'kip', stuk: 250 },
  { n: ['kippenvleugels'], soort: 'kip', stuk: 90 },
  { n: ['hele kip'], soort: 'heleKip', stuk: 1500 },
  { n: ['runderlappen', 'runderstoofvlees', 'runderschenkel', 'lamsschouder', 'lamsvlees', 'varkensschouder', 'varkensbuik', 'varkensvlees', 'procureur', 'krabbetjes'], soort: 'stoof' },
  { n: ['kalfsschenkel'], soort: 'stoof', stuk: 300 },
  { n: ['biefstuk', 'entrecote', 'varkenshaas'], soort: 'kortBakken' },
  { n: ['schnitzel'], soort: 'kortBakken', stuk: 150 },
  { n: ['kabeljauwfilet'], soort: 'vis', stuk: 125 },
  { n: ['zalmfilet'], soort: 'vis', stuk: 125 },
  { n: ['garnalen'], soort: 'garnalen' },
  { n: ['spekblokjes', 'pancetta'], soort: 'spek' },
  { n: ['ontbijtspek'], soort: 'spekPlakjes', stuk: 15 },
  { n: ['rookworst'], soort: 'rookworst', stuk: 275 },
  { n: ['braadworst'], soort: 'worst', stuk: 100 },
  { n: ['ontbijtworstje'], soort: 'worst', stuk: 50 },
  { n: ['mosselen'], soort: 'mosselen' }
];
