/* Nederlands: zoetigheid, stamppotten, stoofvlees, soep, snackbar, kip kerrie met perzik en sauzen */
RECEPTEN.push(
{
  id: 'wentelteefjes', naam: 'Wentelteefjes', ook: ['french toast', 'pain perdu', 'verloren brood'],
  keuken: 'Nederlands', soort: 'Ontbijt & lunch',
  tijd: 20, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Oud brood krijgt een tweede leven: gedrenkt in eiermelk met kaneel en goudbruin gebakken in boter. Krokant randje, zacht als pudding vanbinnen.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan van 24 à 28 cm, liefst antiaanbak, en een spatel' },
    { tool: 'ovenschaal', tekst: 'Diep bord of ovenschaal om het brood in te laten weken' }
  ],
  ingr: [
    { n: 'brood', q: 8, u: 'plak', x: 'oud wit brood of brioche, 1 à 2 dagen oud' },
    { n: 'ei', p: 'eieren', q: 3, u: 'st' },
    { n: 'melk', q: 250, u: 'ml' },
    { n: 'suiker', q: 3, u: 'el', x: '1 el voor de eiermelk, de rest om te bestrooien' },
    { n: 'kaneel', q: 1.5, u: 'tl', x: '1 tl voor de eiermelk, ½ tl voor de suiker' },
    { n: 'vanillesuiker', q: 1, u: 'zakje', opt: true },
    { n: 'zout', q: 1, u: 'snuf' },
    { n: 'boter', q: 40, u: 'g', x: 'om in te bakken' },
    { n: 'stroop', q: 4, u: 'el', x: 'in plaats van suiker', opt: true }
  ],
  stappen: [
    { t: 'Klop in het diepe bord de eieren, melk, 1 el suiker, 1 tl kaneel, de vanillesuiker en een snuf zout los tot je geen slierten eiwit meer ziet.' },
    { t: 'Leg de sneetjes brood in de eiermelk en laat ze 20 à 30 seconden per kant weken. Oud brood mag goed doortrekken; vers brood maar heel kort, anders valt het uit elkaar.' },
    { t: 'Smelt een klont boter in de koekenpan op middelhoog vuur tot het schuim wegtrekt. Leg er zoveel sneetjes in als er naast elkaar passen.' },
    { t: 'Bak de wentelteefjes 2 à 3 minuten per kant tot ze goudbruin en knapperig zijn. Zet het vuur iets lager als de boter te snel bruin wordt.', min: 5 },
    { t: 'Houd ze warm onder een schone theedoek of in de oven op 100 °C. Bak de rest, steeds met een nieuw klontje boter.' },
    { t: 'Meng de rest van de suiker met ½ tl kaneel en strooi dat over de warme wentelteefjes. Of geef er stroop bij.' }
  ],
  tips: ['Hoe ouder het brood, hoe beter: het zuigt de eiermelk op zonder te verpappen. Brioche of krentenbrood geeft een extra zachte, feestelijke versie.'],
  alt: [
    'Amerikaanse french toast: bak dikke sneden brioche en serveer ze met ahornsiroop, blauwe bessen of aardbeien en een schep Griekse yoghurt.',
    'Hartig: laat suiker, kaneel en vanille weg en doe zout, peper en een snuf nootmuskaat in de eiermelk. Leg op het gebakken brood een plak ham en kaas en laat de kaas smelten met een deksel op de pan.'
  ]
},
{
  id: 'stoofpeertjes', naam: 'Stoofpeertjes', ook: ['stoofperen'],
  keuken: 'Nederlands', soort: 'Dessert',
  tijd: 20, wacht: '2½ uur stoven', pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Harde stoofperen die urenlang zacht garen in rode wijn met kaneel en kruidnagel, tot ze dieprood en glanzend zijn. Als toetje, of naast wild en stoofvlees.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of kookpan met deksel, waar de peren rechtop of in één laag in passen' }
  ],
  ingr: [
    { n: 'stoofpeer', p: 'stoofperen', q: 8, u: 'st', x: 'gieser wildeman, ca. 1 kg' },
    { n: 'rode wijn', q: 375, u: 'ml', x: 'of bessensap' },
    { n: 'water', q: 250, u: 'ml' },
    { n: 'suiker', q: 100, u: 'g' },
    { n: 'kaneelstokje', p: 'kaneelstokjes', q: 1, u: 'st' },
    { n: 'kruidnagel', p: 'kruidnagels', q: 4, u: 'st' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'alleen de schil, in repen', opt: true },
    { n: 'maïzena', q: 1, u: 'el', x: 'om de saus te binden', opt: true }
  ],
  stappen: [
    { t: 'Schil de peren dun met een dunschiller en laat de steeltjes eraan zitten. Kleine peren laat je heel, grote halveer je in de lengte.' },
    { t: 'Doe wijn, water, suiker, kaneelstokje, kruidnagels en citroenschil in de Dutch oven. Breng al roerend aan de kook tot de suiker is opgelost.', min: 5 },
    { t: 'Zet de peren rechtop of leg ze in één laag in de pan. Het vocht moet ze voor minstens driekwart bedekken; vul zo nodig aan met water.' },
    { t: 'Leg de deksel op de pan en laat de peren 2 à 3 uur heel zachtjes stoven op het kleinste vuur. Draai ze elk half uur, zodat ze gelijkmatig rood kleuren.', min: 150 },
    { t: 'De peren zijn klaar als een satéprikker er zonder weerstand in glijdt. Haal ze uit de pan.' },
    { t: 'Laat het vocht zonder deksel 10 à 15 minuten inkoken tot een stroperige saus. Sneller: roer de maïzena los met 2 el koud water, roer dit door het kokende vocht en laat 1 minuut koken.', min: 12 },
    { t: 'Leg de peren terug in de saus. Serveer ze warm of koud.' }
  ],
  tips: [
    'Laat de peren een nacht in het vocht staan: ze worden dan nog dieper rood. In de koelkast blijven ze een week goed.',
    'Stoven in de oven kan ook: zet de Dutch oven met deksel 3 uur op 150 °C. Dan hoef je er niet naar om te kijken.'
  ],
  alt: [
    'Zonder alcohol: vervang de wijn door bessensap of rood druivensap en gebruik 50 g minder suiker.',
    'Geen stoofperen? Stevige handperen zoals Conference kunnen ook, maar die zijn al na 30 à 45 minuten zacht en kleuren minder diep.'
  ],
  bij: ['hachee', 'vlaamse-stoverij', 'draadjesvlees']
},
{
  id: 'appelflappen', naam: 'Appelflappen', ook: ['appelflap'],
  keuken: 'Nederlands', soort: 'Dessert',
  tijd: 25, wacht: '25 min bakken', pers: 8, stuks: 'appelflappen', niveau: 'Makkelijk', vega: true,
  intro: 'Knapperig bladerdeeg vol appel, rozijnen en kaneel, met een suikerkorstje. Net zo lekker als bij de bakker, en lauw uit de oven nog beter.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer met bakpapier of een bakmatje; je bakt in twee rondes', m: 'airfryer' }
  ],
  ingr: [
    { n: 'bladerdeeg', q: 8, u: 'plak', x: 'uit de diepvries, of een rol uit de koeling in 8 vierkanten' },
    { n: 'appel', p: 'appels', q: 2, u: 'st', x: 'zuur, zoals elstar of goudrenet' },
    { n: 'rozijnen', q: 40, u: 'g' },
    { n: 'suiker', q: 4, u: 'el', x: '3 el voor de vulling, 1 el om over te strooien' },
    { n: 'kaneel', q: 1, u: 'tl' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { n: 'maïzena', q: 1, u: 'tl', x: 'of paneermeel; houdt het appelsap vast' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st', x: 'losgeklopt, om te bestrijken' }
  ],
  stappen: [
    { t: 'Leg de plakjes bladerdeeg naast elkaar en laat ze 10 minuten ontdooien. Week de rozijnen intussen in heet water.', min: 10 },
    { t: 'Verwarm de oven voor op 200 °C (hetelucht 180 °C).', m: 'oven' },
    { t: 'Verwarm de airfryer voor op 180 °C.', m: 'airfryer' },
    { t: 'Schil de appels, verwijder de klokhuizen en snijd ze in kleine blokjes van 1 cm. Meng ze met de uitgelekte rozijnen, 3 el suiker, de kaneel, het citroensap en de maïzena.' },
    { t: 'Rol elk plakje deeg iets groter uit. Schep een hoopje vulling op één helft en laat een rand van 1 cm vrij. Bestrijk de rand met ei, vouw dicht tot een driehoek en druk de randen goed aan met een vork.' },
    { t: 'Bestrijk de bovenkant met ei, strooi er wat suiker over en snijd 2 kleine sneetjes in het deeg, zodat de stoom kan ontsnappen.' },
    { t: 'Leg de flappen op de bakplaat en bak ze 20 à 25 minuten in het midden van de oven, tot ze goudbruin en opgepoft zijn.', m: 'oven', min: 22 },
    { t: 'Leg 4 flappen met ruimte ertussen op bakpapier in de mand. Bak ze 12 à 15 minuten tot ze goudbruin zijn. Bak de rest in een tweede ronde.', m: 'airfryer', min: 14 },
    { t: 'Laat de appelflappen 10 minuten afkoelen, want de vulling is gloeiend heet. Lekker lauw, eventueel met slagroom.', min: 10 }
  ],
  tips: ['Vooruit maken: vries de ongebakken flappen in op een plaat en bewaar ze daarna in een zak. Bak ze bevroren, met 5 minuten extra.'],
  alt: ['Geen rozijnen? Laat ze weg of gebruik een handje gehakte walnoten. Ook lekker: een lepel appelmoes of wat geraspte marsepein in de vulling.']
},
{
  id: 'poffertjes', naam: 'Poffertjes',
  keuken: 'Nederlands', soort: 'Dessert',
  tijd: 30, wacht: '1 uur rijzen', pers: 4, niveau: 'Gemiddeld', vega: true,
  intro: 'Luchtige gistpannenkoekjes met boekweitmeel, zoals op de kermis: met een klontje boter en een berg poedersuiker.',
  gerei: [
    { tool: 'koekenpan', tekst: 'Grote koekenpan (28 cm), liefst antiaanbak, en een spuitzak, knijpfles of theelepel om kleine rondjes te maken', of: 'Heb je een poffertjespan? Daarin worden ze mooi bol: vet de kuiltjes in, vul ze bijna tot de rand en keer de poffertjes met een vork zodra de randen droog zijn.' }
  ],
  ingr: [
    { n: 'boekweitmeel', q: 125, u: 'g' },
    { n: 'bloem', q: 125, u: 'g' },
    { n: 'gedroogde gist', q: 7, u: 'g', x: '1 zakje' },
    { n: 'suiker', q: 1, u: 'el' },
    { n: 'zout', q: 1, u: 'snuf' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st' },
    { n: 'melk', q: 375, u: 'ml', x: 'lauw' },
    { n: 'boter', q: 100, u: 'g', x: 'de helft gesmolten om in te bakken, de rest om te serveren' },
    { n: 'poedersuiker', q: 4, u: 'el' }
  ],
  stappen: [
    { t: 'Verwarm de melk tot hij lauw is (handwarm, niet heet). Roer de gist en de suiker erdoor en laat 5 minuten staan tot het licht schuimt.', min: 5 },
    { t: 'Meng boekweitmeel, bloem en zout in een kom. Klop het ei en de gistmelk er in scheutjes door met een garde, tot een glad beslag zo dik als yoghurt.' },
    { t: 'Dek de kom af en laat het beslag 1 uur rijzen op een warme plek, tot het vol belletjes zit en duidelijk gerezen is.', min: 60 },
    { t: 'Roer het beslag kort door en doe het in een spuitzak met een opening van 1 cm, een knijpfles of een diepvrieszakje met een puntje eraf.' },
    { t: 'Verhit de koekenpan op middelhoog vuur en vet hem in met keukenpapier en wat gesmolten boter. Spuit rondjes van 3 à 4 cm in de pan, met wat ruimte ertussen.' },
    { t: 'Bak ze ongeveer 1 minuut, tot de bovenkant droog begint te worden en vol gaatjes zit. Keer ze met een vork of spatel en bak de andere kant 1 minuut goudbruin.', min: 2 },
    { t: 'Vet de pan steeds opnieuw in en bak zo al het beslag. Houd de poffertjes warm onder een theedoek. Serveer met een klontje boter en veel poedersuiker.' }
  ],
  tips: ['In de koekenpan worden ze iets platter dan uit een poffertjespan, maar net zo luchtig. Bak eerst een proefje: te bleek of te donker, pas dan het vuur aan.'],
  alt: ['Geen boekweitmeel? Gebruik 250 g bloem. Ze worden dan lichter van kleur en iets minder uitgesproken van smaak.']
},
{
  id: 'oliebollen', naam: 'Oliebollen', ook: ['oliebol', 'smoutebollen'],
  keuken: 'Nederlands', soort: 'Dessert',
  tijd: 60, wacht: '1 uur rijzen', pers: 10, niveau: 'Gemiddeld', vega: true,
  intro: 'Zelfgebakken oliebollen met krenten, rozijnen en appel: knapperig van buiten, luchtig van binnen. Goed voor ongeveer 20 stuks.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven (24 à 28 cm) voor 5 à 6 cm olie, met een schuimspaan en een frituurthermometer' },
    { tool: 'mixer', tekst: 'Handmixer met deeghaken', of: 'Met een houten lepel lukt het ook: klop dan 5 minuten flink door.' }
  ],
  ingr: [
    { n: 'bloem', q: 500, u: 'g' },
    { n: 'gedroogde gist', q: 7, u: 'g', x: '1 zakje' },
    { n: 'melk', q: 450, u: 'ml', x: 'lauw' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st' },
    { n: 'suiker', q: 2, u: 'el' },
    { n: 'zout', q: 1.5, u: 'tl' },
    { n: 'krenten', q: 125, u: 'g' },
    { n: 'rozijnen', q: 125, u: 'g' },
    { n: 'appel', p: 'appels', q: 1, u: 'st', x: 'zuur, geschild en in kleine blokjes' },
    { n: 'zonnebloemolie', q: 1.5, u: 'l', x: 'of frituurolie, om te frituren' },
    { n: 'poedersuiker', x: 'om te bestuiven' }
  ],
  stappen: [
    { t: 'Verwarm de melk tot hij lauw is (handwarm). Roer de gist erdoor en laat 5 minuten staan.', min: 5 },
    { t: 'Doe bloem, suiker en zout in een grote kom. Voeg de gistmelk en het ei toe en klop 5 minuten met de deeghaken tot een glad, taai beslag dat in slierten van de haken valt.', min: 5 },
    { t: 'Spoel de krenten en rozijnen, dep ze droog en schep ze met de appelblokjes door het beslag.' },
    { t: 'Dek de kom af met huishoudfolie of een natte theedoek en laat het beslag 1 uur rijzen op een warme plek, tot het in volume verdubbeld is.', min: 60 },
    { t: 'Verhit 5 à 6 cm olie in de Dutch oven tot 180 °C. Geen thermometer? Steek een houten lepel in de olie: komen er direct veel belletjes omheen, dan is hij heet genoeg.', min: 10 },
    { t: 'Doop twee eetlepels of een ijsschep in de olie, schep een bol beslag en laat die met de tweede lepel in de olie glijden. Bak 4 à 5 bollen tegelijk 6 à 8 minuten, tot ze rondom donker goudbruin zijn. Draaien ze niet vanzelf om, keer ze dan halverwege.', min: 7 },
    { t: 'Schep de oliebollen eruit met de schuimspaan en laat ze uitlekken op keukenpapier. Laat de olie weer op 180 °C komen voor de volgende lichting. Bestuif ze ruim met poedersuiker.' }
  ],
  tips: [
    'Breek de eerste oliebol open. Is hij vanbinnen nog nat, zet het vuur dan iets lager en bak de volgende langer.',
    'Oliebollen kun je goed invriezen. Warm ze bevroren op: 10 minuten in de oven op 180 °C of 5 minuten in de airfryer op 160 °C.'
  ],
  alt: [
    'Bakken in de airfryer werkt hier niet: het beslag is te nat en zakt door de mand voordat er een korst op komt. Frituren in de Dutch oven gaat prima, want de dikke wand houdt de olie mooi op temperatuur.',
    'Naturel: laat krenten, rozijnen en appel weg. Lekker met poedersuiker of gevuld met slagroom.'
  ]
},
{
  id: 'zuurkoolstamppot', naam: 'Zuurkoolstamppot met rookworst en spekjes', ook: ['zuurkool met worst'],
  keuken: 'Nederlands', soort: 'Hoofdgerecht',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Frisse, licht zure stamppot met krokante spekjes en een dikke rookworst. Winterkost uit één grote pan.',
  gerei: [
    { tool: 'kookpan', tekst: 'Grote kookpan (5 liter) met deksel' },
    { tool: 'kookpan', tekst: 'Kleine pan voor de rookworst' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de spekjes' }
  ],
  ingr: [
    { n: 'kruimige aardappelen', q: 1000, u: 'g', x: 'geschild, in stukken' },
    { n: 'zuurkool', q: 500, u: 'g', x: 'vers of uit een zak, uitgelekt' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 1, u: 'st' },
    { n: 'jeneverbes', p: 'jeneverbessen', q: 4, u: 'st', opt: true },
    { n: 'spekblokjes', q: 150, u: 'g' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'gesnipperd' },
    { n: 'rookworst', p: 'rookworsten', q: 1, u: 'st', x: 'ca. 275 g' },
    { n: 'melk', q: 150, u: 'ml', x: 'warm' },
    { n: 'boter', q: 30, u: 'g' },
    { n: 'mosterd', q: 1, u: 'el', opt: true },
    { n: 'peper' }, { n: 'zout' }
  ],
  stappen: [
    { t: 'Doe de aardappelen in de grote pan met water tot ze net onder staan en een theelepel zout. Leg de zuurkool er los bovenop, met het laurierblad en de jeneverbessen. Breng aan de kook.' },
    { t: 'Kook alles met de deksel op de pan 20 à 25 minuten, tot de aardappelen gaar zijn. De zuurkool gaart in de stoom.', min: 22 },
    { t: 'Verwarm de rookworst 15 minuten in de kleine pan in heet water dat niet kookt, anders barst het vel.', min: 15 },
    { t: 'Bak intussen de spekblokjes zonder olie in de koekenpan op middelhoog vuur in 6 minuten krokant. Bak de ui de laatste 3 minuten mee tot hij zacht en goudgeel is.', min: 6 },
    { t: 'Giet de aardappelen en zuurkool af en vis het laurierblad en de jeneverbessen eruit. Stamp de aardappelen fijn met de warme melk en de boter.' },
    { t: 'Schep de zuurkool, spekjes, ui en het uitgebakken vet erdoor. Breng op smaak met peper en eventueel mosterd; zout is meestal niet meer nodig.' },
    { t: 'Serveer met de rookworst in plakken en een kuiltje jus.' }
  ],
  tips: ['Vind je zuurkool erg zuur? Spoel hem eerst kort af in een vergiet en knijp hem uit. Wil je het juist frisser, roer dan een scheutje zuurkoolvocht door de stamppot.'],
  alt: [
    'Zuurkool met ananas: roer een uitgelekt blikje ananasstukjes en een theelepel kerriepoeder door de stamppot.',
    'Vegetarisch? Neem een vegetarische rookworst en roer 100 g blokjes belegen kaas door de warme stamppot in plaats van de spekjes.'
  ]
},
{
  id: 'andijviestamppot', naam: 'Andijviestamppot met spekjes',
  keuken: 'Nederlands', soort: 'Hoofdgerecht',
  tijd: 30, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Romige aardappelpuree met rauwe andijvie en krokante spekjes. De andijvie blijft fris en knapperig, met een kuiltje jus erin is hij compleet.',
  gerei: [
    { tool: 'kookpan', tekst: 'Grote kookpan (5 liter) met deksel' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de spekjes' }
  ],
  ingr: [
    { n: 'kruimige aardappelen', q: 1000, u: 'g', x: 'geschild, in stukken' },
    { n: 'andijvie', q: 500, u: 'g', x: 'gesneden, of 1 grote krop' },
    { n: 'spekblokjes', q: 200, u: 'g' },
    { n: 'melk', q: 150, u: 'ml', x: 'warm' },
    { n: 'boter', q: 30, u: 'g' },
    { n: 'nootmuskaat', q: 1, u: 'snuf' },
    { n: 'belegen kaas', q: 100, u: 'g', x: 'in kleine blokjes', opt: true },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Doe de aardappelen in de grote pan met water tot ze net onder staan en een theelepel zout. Kook ze met de deksel op de pan in 20 minuten gaar.', min: 20 },
    { t: 'Was de andijvie, slinger hem droog in de slacentrifuge of dep hem droog, en snijd hem in reepjes van 1 cm.' },
    { t: 'Bak de spekblokjes zonder olie in de koekenpan op middelhoog vuur in 6 à 8 minuten bruin en krokant.', min: 7 },
    { t: 'Giet de aardappelen af en stamp ze met de warme melk en de boter tot een smeuïge puree. Breng op smaak met nootmuskaat, peper en een beetje zout.' },
    { t: 'Schep de rauwe andijvie in delen door de hete puree, zonder dat de pan nog op het vuur staat. De andijvie slinkt een beetje maar blijft knapperig.' },
    { t: 'Roer de spekjes met het uitgebakken vet en eventueel de kaasblokjes erdoor. Maak op elk bord een kuiltje en vul dat met jus.' }
  ],
  tips: ['Roer de andijvie er pas vlak voor het opscheppen door, dan blijft hij fris. Met een gehaktbal in jus ernaast heb je de echte zondagse versie.'],
  alt: [
    'Vegetarisch? Laat het spek weg en roer 150 g blokjes belegen kaas en een handje geroosterde walnoten door de stamppot.',
    'Liever zachte andijvie? Leg hem de laatste 5 minuten op de kokende aardappelen en stamp hem mee.'
  ]
},
{
  id: 'hachee', naam: 'Hachee',
  keuken: 'Nederlands', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '2½ uur stoven', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Oudhollands stoofvlees met heel veel uien, laurier en kruidnagel, in een zoetzure saus die gebonden wordt met ontbijtkoek. Mals, donker en vol smaak.',
  methodes: [ { id: 'braadpan', naam: 'Op het vuur' }, { id: 'slowcooker', naam: 'Slowcooker' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan (24 cm) met deksel' },
    { tool: 'slowcooker', tekst: 'Slowcooker van minimaal 3,5 liter; braad het vlees eerst aan in de Dutch oven', m: 'slowcooker' }
  ],
  ingr: [
    { n: 'runderlappen', q: 800, u: 'g', x: 'sukadelappen of riblappen' },
    { n: 'ui', p: 'uien', q: 4, u: 'st', x: 'ca. 500 g, in halve ringen' },
    { n: 'boter', q: 50, u: 'g' },
    { n: 'bloem', q: 2, u: 'el' },
    { n: 'runderbouillon', q: 500, u: 'ml' },
    { n: 'azijn', q: 2, u: 'el', x: 'of rode wijnazijn' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 3, u: 'st' },
    { n: 'kruidnagel', p: 'kruidnagels', q: 4, u: 'st' },
    { n: 'ontbijtkoek', q: 2, u: 'plak', x: 'of 2 el appelstroop' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Dep het vlees droog en snijd het in stukken van 4 à 5 cm. Bestrooi met zout, peper en de bloem.' },
    { t: 'Laat de helft van de boter bruin worden in de Dutch oven op hoog vuur. Braad het vlees in 2 delen rondom bruin, ca. 5 minuten per portie. Haal het eruit.', min: 10 },
    { t: 'Zet het vuur middelhoog. Bak de uien in de rest van de boter in 10 minuten zacht en goudbruin, en schraap intussen de aanbaksels los.', min: 10 },
    { t: 'Doe het vlees terug en voeg bouillon, azijn, laurier en kruidnagels toe. Het vlees moet net onder staan; vul zo nodig aan met water.' },
    { t: 'Breng aan de kook, leg de deksel op de pan en laat 2½ uur heel zachtjes stoven op het kleinste vuur. Roer af en toe en voeg wat water toe als het te droog wordt.', m: 'braadpan', min: 150 },
    { t: 'Schep vlees, uien en vocht over in de slowcooker; 150 ml minder bouillon is genoeg, want er verdampt bijna niets. Gaar 7 à 8 uur op LOW of 4 uur op HIGH.', m: 'slowcooker', min: 240 },
    { t: 'Verkruimel de ontbijtkoek boven de saus en laat 10 minuten zonder deksel meekoken (in de slowcooker op HIGH), tot de saus gebonden en glanzend is.', min: 10 },
    { t: 'Vis de laurierbladeren en kruidnagels eruit. Breng op smaak met zout, peper en eventueel nog een scheutje azijn: de saus moet zoetzuur zijn.' }
  ],
  tips: ['Hachee is op de tweede dag nog lekkerder. Klassiek met gekookte aardappelen of puree en rode kool, of met stoofpeertjes ernaast.'],
  alt: ['In de oven: zet de Dutch oven met deksel 2½ à 3 uur op 150 °C. Dan brandt er niets aan en hoef je niet te roeren.']
},
{
  id: 'hollandse-macaroni', naam: 'Hollandse macaroni met ham en kaas', ook: ['macaroni'],
  keuken: 'Nederlands', soort: 'Hoofdgerecht',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Het bekende gezinsrecept: macaroni in tomatensaus met gehakt, hamreepjes en paprika, met een laag gesmolten kaas. Uit de pan of krokant uit de oven.',
  methodes: [ { id: 'hapjespan', naam: 'Alleen pan' }, { id: 'oven', naam: 'Oven (gegratineerd)' } ],
  gerei: [
    { tool: 'kookpan', tekst: 'Grote kookpan voor de macaroni' },
    { tool: 'hapjespan', tekst: 'Hapjespan of grote koekenpan (28 cm) met deksel' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal van ca. 20 × 30 cm', m: 'oven' }
  ],
  ingr: [
    { n: 'macaroni', q: 350, u: 'g' },
    { n: 'rundergehakt', q: 300, u: 'g', x: 'of half-om-half' },
    { n: 'ham', q: 150, u: 'g', x: 'reepjes of blokjes' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'gesnipperd' },
    { n: 'rode paprika', p: 'rode paprika\'s', q: 1, u: 'st', x: 'in blokjes' },
    { n: 'knoflook', q: 1, u: 'teen' },
    { n: 'tomatenpuree', q: 70, u: 'g', x: 'een klein blikje is 70 g' },
    { n: 'tomatenblokjes', q: 1, u: 'blik', x: '400 g' },
    { n: 'paprikapoeder', q: 1, u: 'tl' },
    { n: 'gedroogde oregano', q: 1, u: 'tl', x: 'of Italiaanse kruiden' },
    { n: 'ketchup', q: 2, u: 'el', opt: true },
    { n: 'zonnebloemolie', q: 1, u: 'el' },
    { n: 'geraspte kaas', q: 125, u: 'g', x: 'jong belegen of belegen' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Verwarm de oven voor op 200 °C (hetelucht 180 °C).', m: 'oven' },
    { t: 'Kook de macaroni in ruim water met zout 1 minuut korter dan op de verpakking staat. Giet af.', min: 9 },
    { t: 'Verhit de olie in de hapjespan op middelhoog vuur. Bak het gehakt in 5 minuten rul en bruin. Bak de ui, paprika en knoflook 4 minuten mee.', min: 9 },
    { t: 'Roer de tomatenpuree, het paprikapoeder en de oregano erdoor en bak 1 minuut. Voeg de tomatenblokjes, ketchup en ham toe en laat 5 minuten zachtjes pruttelen. Breng op smaak met zout en peper.', min: 5 },
    { t: 'Schep de macaroni door de saus. Te droog? Doe er een scheutje water bij.' },
    { t: 'Strooi de kaas erover, leg de deksel op de pan en laat 3 minuten op laag vuur staan tot de kaas gesmolten is.', m: 'hapjespan', min: 3 },
    { t: 'Schep de macaroni in de ovenschaal en strooi de kaas erover. Bak 15 minuten in het midden van de oven, tot de kaas goudbruin en knapperig is.', m: 'oven', min: 15 }
  ],
  tips: ['Zet ketchup en sambal op tafel, zoals thuis. Hollandse macaroni is goed in te vriezen; doe de kaas er dan pas bij het opwarmen op.'],
  alt: [
    'Geen oven? Gratineer de macaroni in een ovenvaste schaal die in de mand past 8 à 10 minuten in de airfryer op 180 °C.',
    'Vegetarisch? Gebruik vegetarisch gehakt en vervang de ham door 250 g gebakken champignons.'
  ]
},
{
  id: 'groentesoep-balletjes', naam: 'Groentesoep met balletjes', ook: ['soep met balletjes'],
  keuken: 'Nederlands', soort: 'Soep',
  tijd: 40, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Heldere bouillon vol soepgroente, vermicelli en zelfgedraaide gehaktballetjes. Zoals de soep bij oma op zondag.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of grote soeppan (minimaal 4 liter) met deksel, en een schuimspaan' }
  ],
  ingr: [
    { n: 'kippenbouillon', q: 1500, u: 'ml', x: 'of runderbouillon; van blokjes is prima' },
    { n: 'wortel', p: 'wortels', q: 2, u: 'st', x: 'in plakjes' },
    { n: 'bleekselderij', q: 2, u: 'stengel', x: 'in boogjes' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'gesnipperd' },
    { n: 'bloemkool', q: 200, u: 'g', x: 'in kleine roosjes' },
    { n: 'prei', p: 'preien', q: 1, u: 'st', x: 'in dunne ringen' },
    { n: 'vermicelli', q: 50, u: 'g' },
    { n: 'verse selderij', q: 1, u: 'handje', x: 'of peterselie, fijngesneden' },
    { kop: 'Balletjes' },
    { n: 'rundergehakt', q: 300, u: 'g', x: 'of half-om-half' },
    { n: 'paneermeel', q: 2, u: 'el' },
    { n: 'melk', q: 1, u: 'el' },
    { n: 'nootmuskaat', q: 1, u: 'snuf' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Meng gehakt, paneermeel, melk, nootmuskaat, ½ tl zout en wat peper. Draai er met natte handen balletjes van zo groot als een knikker; dat worden er ongeveer 30.' },
    { t: 'Breng de bouillon aan de kook in de Dutch oven. Voeg wortel, bleekselderij en ui toe en laat 5 minuten zachtjes koken.', min: 5 },
    { t: 'Laat de balletjes en de bloemkool in de soep glijden en laat 5 minuten zachtjes koken. Schep het grijze schuim eraf met de schuimspaan.', min: 5 },
    { t: 'Voeg de prei en de vermicelli toe en kook nog 4 minuten, tot de vermicelli gaar is en de balletjes stevig aanvoelen.', min: 4 },
    { t: 'Breng de soep op smaak met zout en peper en roer de selderij erdoor.' }
  ],
  tips: [
    'Ouderwetse bouillon: laat 500 g soepvlees (runderschenkel) met 2 liter water, een ui, een laurierblad en wat peperkorrels 2½ uur zachtjes trekken in de Dutch oven. Zeef de bouillon en doe het fijngeplukte vlees terug in de soep.',
    'Vries de soep in zonder vermicelli; die wordt papperig bij het opwarmen. Kook hem er vers in.'
  ],
  alt: ['Geen bloemkool of bleekselderij? Een bakje soepgroente uit de supermarkt (ca. 400 g) werkt net zo goed.']
},
{
  id: 'kapsalon', naam: 'Kapsalon',
  keuken: 'Nederlands', soort: 'Hoofdgerecht',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'De Rotterdamse snackbarklassieker: friet met shoarma en gesmolten Goudse kaas, met frisse sla, knoflooksaus en sambal erop. Zelfgemaakt minder vet en minstens zo lekker.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'bakplaat', tekst: 'Bakplaat met bakpapier voor de friet', m: 'oven' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal van ca. 20 × 30 cm, of 4 aluminium bakjes', m: 'oven' },
    { tool: 'airfryer', tekst: 'Airfryer, plus een ovenvast schaaltje dat in de mand past om te gratineren', m: 'airfryer' },
    { tool: 'koekenpan', tekst: 'Grote koekenpan (28 cm) voor de shoarma' }
  ],
  ingr: [
    { n: 'friet', q: 800, u: 'g', x: 'diepvries, voor oven of airfryer' },
    { n: 'kippendijfilet', q: 500, u: 'g', x: 'in dunne reepjes, of kant-en-klaar kipshoarmavlees' },
    { n: 'shoarmakruiden', q: 2, u: 'el' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { n: 'geraspte kaas', q: 200, u: 'g', x: 'Goudse, jong belegen of belegen' },
    { n: 'ijsbergsla', q: 0.5, u: 'st', x: 'krop, in reepjes' },
    { n: 'tomaat', p: 'tomaten', q: 2, u: 'st', x: 'in blokjes' },
    { n: 'komkommer', p: 'komkommers', q: 0.5, u: 'st', x: 'in blokjes' },
    { n: 'knoflooksaus', q: 150, u: 'ml' },
    { n: 'sambal oelek', q: 2, u: 'tl', x: 'naar smaak', opt: true },
    { n: 'zout' }
  ],
  stappen: [
    { t: 'Meng de kipreepjes met de shoarmakruiden, de olie en een snuf zout.' },
    { t: 'Verwarm de oven voor op 220 °C. Spreid de friet uit over de bakplaat en bak hem 20 à 25 minuten goudbruin en krokant. Keer halverwege.', m: 'oven', min: 22 },
    { t: 'Bak de friet in 2 porties 15 à 18 minuten in de airfryer op 200 °C, tot hij goudbruin en krokant is. Schud de mand 2 keer.', m: 'airfryer', min: 16 },
    { t: 'Verhit intussen de koekenpan op hoog vuur. Bak de kip in 2 delen 5 à 6 minuten, tot de randjes bruin en krokant zijn.', min: 6 },
    { t: 'Leg de friet in de ovenschaal, verdeel de shoarma erover en strooi de kaas erop. Zet de schaal 5 à 7 minuten bovenin de oven, tot de kaas gesmolten is en bruine plekjes krijgt.', m: 'oven', min: 6 },
    { t: 'Schep per portie friet en shoarma in het schaaltje en strooi de kaas erover. Zet het 3 à 4 minuten in de airfryer op 200 °C, tot de kaas gesmolten is en bubbelt.', m: 'airfryer', min: 4 },
    { t: 'Leg direct de sla, tomaat en komkommer erop. Besprenkel ruim met knoflooksaus (kant-en-klaar, of de zelfgemaakte knoflooksaus uit het hoofdstuk Midden-Oosters) en schep er sambal bij naar smaak.' }
  ],
  tips: [
    'De kapsalon is in 2003 in Rotterdam bedacht door een kapper die bij zijn shoarmazaak om de hoek steeds deze combinatie bestelde. Vandaar de naam.',
    'Leg de sla pas op het laatst op de kaas, anders wordt hij slap van de warmte.'
  ],
  alt: [
    'Liever döner of lamsshoarma? Bak 500 g kant-en-klaar shoarma- of dönervlees kort op hoog vuur.',
    'Vegetarisch? Vervang de kip door uitgelekte kikkererwten, gemengd met de shoarmakruiden en 10 minuten krokant geroosterd, of door verkruimelde falafel.'
  ]
},
{
  id: 'kip-kerrie-perzik', toegevoegd: '2026-10-16', naam: 'Pittige kip kerrie met perzik', ook: ['kip kerrie met perzik', 'kipkerrie', 'kip kerrie', 'kip met perzik', 'kerriekip met perzik', 'perzikkip'],
  keuken: 'Nederlands', soort: 'Hoofdgerecht',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'De Hollandse huiskamerklassieker: kip in een romige kerriesaus met sambal en zoete perzikpartjes uit blik. Pittig en zoet tegelijk, en altijd met een berg rijst.',
  gerei: [
    { tool: 'hapjespan', tekst: 'Hapjespan of grote koekenpan (28 cm) met deksel', of: 'Een wok of Dutch oven werkt ook.' },
    { tool: 'kookpan', tekst: 'Kookpan of rijstkoker voor de rijst' }
  ],
  ingr: [
    { n: 'rijst', q: 300, u: 'g', x: 'pandan- of basmatirijst' },
    { n: 'kippendijfilet', q: 600, u: 'g', x: 'in stukjes van 3 cm; of kipfilet' },
    { n: 'kerriepoeder', q: 2, u: 'el' },
    { n: 'zonnebloemolie', q: 2, u: 'el' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'gesnipperd' },
    { n: 'knoflook', q: 2, u: 'teen', x: 'geperst' },
    { n: 'rode peper', p: 'rode pepers', q: 1, u: 'st', x: 'fijngesneden, met de zaadjes voor extra pit' },
    { n: 'sambal oelek', q: 2, u: 'tl', x: 'of meer als je het heel pittig wilt' },
    { n: 'bloem', q: 1, u: 'el' },
    { n: 'perziken op siroop', q: 1, u: 'blik', x: 'ca. 410 g; laat ze uitlekken en bewaar 100 ml siroop' },
    { n: 'kippenbouillon', q: 150, u: 'ml' },
    { n: 'kookroom', q: 250, u: 'ml', x: 'of 200 ml kokosmelk' },
    { n: 'zout' },
    { n: 'lente-ui', p: 'lente-uien', q: 2, u: 'st', x: 'in ringetjes', opt: true }
  ],
  stappen: [
    { t: 'Kook de rijst volgens de verpakking.', min: 15 },
    { t: 'Meng de kip met 1 el kerriepoeder en een snuf zout. Snijd de perziken in partjes.' },
    { t: 'Verhit de olie in de hapjespan op middelhoog vuur en bak de kip in 5 minuten rondom goudbruin. Hij hoeft nog niet gaar te zijn. Haal hem uit de pan.', min: 5 },
    { t: 'Fruit de ui 3 minuten in het achtergebleven vet. Bak knoflook, rode peper, sambal en de rest van de kerriepoeder 1 minuut mee, tot het geurt.', min: 4 },
    { t: 'Strooi de bloem erover en roer 1 minuut. Giet er al roerend de bouillon, de perzikensiroop en de kookroom bij en breng aan de kook.', min: 1 },
    { t: 'Doe de kip terug in de pan en laat met de deksel op een kier 10 minuten zachtjes pruttelen, tot de kip gaar is en de saus gebonden.', min: 10 },
    { t: 'Schep de perzikpartjes erdoor en warm ze 2 minuten mee; langer maakt ze slap. Proef en maak op smaak met zout en eventueel extra sambal.', min: 2 },
    { t: 'Serveer met de rijst en strooi de lente-ui erover.' }
  ],
  tips: [
    'Pittig en zoet maken elkaar goed: de siroop tempert de sambal. Wil je het minder pittig, laat dan de rode peper weg en neem 1 tl sambal.',
    'Neem perziken op siroop of op sap; verse perziken zijn vaak te hard en minder zoet. In de zomer kan het wel met 3 rijpe perziken in partjes en een el honing in de saus.'
  ],
  alt: [
    'Met ananas: neem een blik ananasstukjes in plaats van perziken, met het sap voor de saus.',
    'Met kokosmelk in plaats van kookroom wordt hij wat Indischer van smaak.',
    'Groente erbij: bak een rode paprika in reepjes mee met de ui.'
  ]
},
{
  id: 'kaassaus', naam: 'Kaassaus', ook: ['mornaysaus'],
  keuken: 'Nederlands', soort: 'Saus',
  tijd: 15, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Romige, gladde saus van boter, bloem, melk en belegen kaas. Maakt van gekookte bloemkool, broccoli of witlof met ham een feestmaal.',
  gerei: [
    { tool: 'kookpan', tekst: 'Steelpan met dikke bodem en een garde, voor de saus' }
  ],
  ingr: [
    { n: 'boter', q: 30, u: 'g' },
    { n: 'bloem', q: 30, u: 'g' },
    { n: 'melk', q: 500, u: 'ml', x: 'koud' },
    { n: 'belegen kaas', q: 125, u: 'g', x: 'geraspt, of half belegen en half oud' },
    { n: 'mosterd', q: 1, u: 'tl' },
    { n: 'nootmuskaat', q: 1, u: 'snuf' },
    { n: 'zout' }, { n: 'peper' }
  ],
  stappen: [
    { t: 'Smelt de boter in de steelpan op middelhoog vuur. Roer de bloem erdoor en laat deze roux 1 à 2 minuten zachtjes garen, al roerend. Hij mag niet bruin worden.', min: 2 },
    { t: 'Giet er een scheut melk bij en klop met de garde tot een dikke, gladde pap. Klop de rest van de melk er in 3 à 4 keer door; wacht steeds tot de saus weer glad is.' },
    { t: 'Breng al kloppend aan de kook en laat 3 minuten zachtjes doorkoken, tot de saus gebonden is en niet meer naar bloem smaakt.', min: 3 },
    { t: 'Haal de pan van het vuur en roer de kaas er in delen door tot hij gesmolten is. Laat de saus daarna niet meer koken, anders wordt de kaas draderig.' },
    { t: 'Breng op smaak met mosterd, nootmuskaat, peper en zout. Te dik? Klop er een scheutje melk door.' }
  ],
  tips: ['Dit is een bechamelsaus met kaas; de Fransen noemen dat een mornaysaus. Klassiek over bloemkool of broccoli, of over witlof met ham: rol gekookte witlofstronken in een plak ham, schenk de saus erover en bak 20 minuten in de oven op 200 °C.'],
  alt: [
    'Meer smaak: neem oude kaas of een stuk Gruyère, met een snuf cayennepeper.',
    'Glutenvrij: sla de roux over en bind de kokende melk met 2 el maïzena, aangelengd met een scheutje koude melk.'
  ]
},
{
  id: 'jus', naam: 'Jus (vleesjus)', ook: ['jus de veau', 'gravy', 'bruine saus'],
  keuken: 'Nederlands', soort: 'Saus',
  tijd: 15, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Het kuiltje in je stamppot. Maak hem van de aanbaksels in de pan waarin je vlees bakte, of snel en zonder vlees van bruine boter, ui en bouillon.',
  gerei: [
    { tool: 'koekenpan', tekst: 'De koekenpan of braadpan waarin het vlees bakte, en een houten spatel' },
    { tool: 'kookpan', tekst: 'Steelpan en een garde, voor de snelle jus' }
  ],
  ingr: [
    { n: 'runderbouillon', q: 300, u: 'ml', x: 'of water met een half bouillonblokje' },
    { n: 'maïzena', q: 2, u: 'tl', x: 'aangelengd met 2 el koud water' },
    { n: 'boter', q: 30, u: 'g' },
    { n: 'zout' }, { n: 'peper' },
    { kop: 'Extra voor de snelle jus' },
    { n: 'ui', p: 'uien', q: 0.5, u: 'st', x: 'of 1 sjalot, fijngesnipperd' },
    { n: 'ketjap manis', q: 1, u: 'el', x: 'of 2 tl sojasaus' },
    { n: 'laurierblad', p: 'laurierbladeren', q: 1, u: 'st', opt: true }
  ],
  stappen: [
    { t: 'Jus uit de pan: haal het gebakken vlees uit de pan en houd het warm. Giet het vet af tot er ongeveer 2 el overblijft; de bruine aanbaksels laat je zitten.' },
    { t: 'Zet de pan op middelhoog vuur en giet er een scheut bouillon bij. Schraap met de houten spatel alle aanbaksels los; daar zit de smaak.' },
    { t: 'Giet de rest van de bouillon erbij en laat 3 à 4 minuten inkoken. Roer de aangelengde maïzena erdoor en laat 1 minuut koken tot de jus licht gebonden is. Klop er buiten het vuur een klontje koude boter door voor glans en breng op smaak.', min: 4 },
    { t: 'Snelle jus zonder braadresten: smelt de boter in de steelpan op middelhoog vuur en laat hem lichtbruin worden, tot hij nootachtig ruikt.' },
    { t: 'Bak de ui erin in 5 minuten goudbruin. Hoe bruiner de ui, hoe donkerder en voller de jus.', min: 5 },
    { t: 'Giet de bouillon en de ketjap erbij, voeg het laurierblad toe en laat 5 minuten zachtjes koken.', min: 5 },
    { t: 'Roer de aangelengde maïzena erdoor en laat 1 minuut doorkoken tot de jus glanst. Zeef de ui eruit als je een gladde jus wilt en breng op smaak met zout en peper.', min: 1 }
  ],
  tips: [
    'Bruine boter is het geheim van Hollandse jus: laat de boter echt kleuren voordat de bouillon erbij gaat, maar niet zwart worden.',
    'Maak gerust een dubbele portie en vries de rest in kleine bakjes in. Dan heb je altijd jus voor de stamppot.'
  ],
  alt: ['Vegetarische jus: gebruik groentebouillon, bak 100 g fijngehakte champignons mee met de ui en neem sojasaus voor de kleur.'],
  bij: ['kip-dutch-oven', 'hutspot-rookworst', 'boerenkool-stamppot', 'zuurkoolstamppot', 'andijviestamppot', 'stoemp']
}
);
