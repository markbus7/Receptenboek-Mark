/* Cocktails: een eigen deel van het boek, met de bekendste klassiekers, long drinks, tropische cocktails
   en een paar zonder alcohol. Alles voor 2 glazen, in ml, met gewone supermarkt- en slijterijnamen.
   Sterke drank (meer dan 15% alcohol: rum, gin, wodka, tequila, whisky, triple sec, Campari) verkoopt
   een supermarkt niet; die haal je bij de slijterij (Gall & Gall, vaak naast de Albert Heijn, of Mitra).
   Prosecco, Aperol, vermout, sappen, frisdrank en ijs zijn gewoon bij AH en Jumbo te koop.
   Een shaker is niet nodig: een jampot met een deksel dat goed dichtzit werkt net zo goed. */
(() => {
  const SHAKER = { tool: 'shaker', tekst: 'Cocktailshaker', of: 'Geen shaker? Een grote jampot of een drinkfles met een deksel dat goed dichtzit. Schud net zo hard, en giet daarna door een theezeefje (of houd het deksel op een kier) zodat het ijs in de pot blijft.' };
  const MAATJE = { tool: 'maatje', tekst: 'Maatglaasje (jigger) of maatbeker', of: 'Een eetlepel is 15 ml en een theelepel 5 ml. Een shotglaasje is meestal 30 à 40 ml.' };
  const ROERGLAS = { tool: 'glas', tekst: 'Groot glas of maatbeker om in te roeren, en een lange lepel', of: 'Een lange theelepel of een eetstokje werkt ook.' };
  const STAMPER = { tool: 'glas', tekst: 'Stamper (muddler) om limoen en munt te kneuzen', of: 'Geen stamper? Het uiteinde van een deegroller of de steel van een houten lepel.' };
  const glas = (tekst) => ({ tool: 'glas', tekst });
  const IJS = { n: 'ijsblokjes', x: 'een flinke schep: om te schudden en in het glas' };
  const GECRUSHT = { n: 'ijsblokjes', x: 'fijngeslagen (crushed ice): in een schone theedoek met een deegroller of pan' };
  const KOUD = 'Zet de glazen 10 minuten in de vriezer, of vul ze met ijs en water terwijl je de cocktail maakt en giet dat weg vlak voor het inschenken. In een koud glas blijft de cocktail langer koud.';
  const SCHUD = 'Doe de ingrediënten met een flinke schep ijs in de shaker of jampot, doe hem goed dicht en schud 12 à 15 seconden heel hard, tot de buitenkant ijskoud aanvoelt.';
  const SIROOP = 'Geen suikersiroop? Maak het zelf: verwarm 100 g suiker met 100 ml water tot de suiker is opgelost en laat afkoelen. In een schone fles 2 weken houdbaar in de koelkast.';

  RECEPTEN.push(
  /* ---------- Klassiekers ---------- */
  {
    id: 'old-fashioned', toegevoegd: '2026-10-29', naam: 'Old fashioned',
    ook: ['old fashioned', 'oldfashioned', 'whiskey cocktail', 'bourbon cocktail', 'whisky cocktail'],
    keuken: 'Klassiekers', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Een van de oudste cocktails: bourbon met een beetje suiker en een paar druppels bitters, geroerd op ijs en met een reep sinaasappelschil. Sterk, warm en een beetje zoet. Je drinkt hem langzaam.',
    gerei: [glas('2 lage glazen (tumbler), het liefst met een groot ijsblok'), ROERGLAS, MAATJE],
    ingr: [
      { n: 'bourbon', q: 120, u: 'ml', x: 'zoals Jim Beam, Four Roses of Maker\'s Mark' },
      { n: 'suikersiroop', q: 15, u: 'ml', of: '2 suikerklontjes met een paar druppels water' },
      { n: 'Angostura bitters', q: 1, u: 'tl', x: '3 à 4 druppels (dashes) per glas' },
      { n: 'sinaasappel', q: 1, u: 'st', x: 'alleen 2 brede repen schil' },
      IJS
    ],
    stappen: [
      { t: 'Doe de bourbon, suikersiroop en bitters in een groot glas of maatbeker. Vul het voor driekwart met ijs.' },
      { t: 'Roer 30 seconden rustig met een lange lepel. Zo wordt het koud en komt er net genoeg smeltwater bij.' },
      { t: 'Leg in elk laag glas een groot ijsblok of een paar ijsblokjes en giet de cocktail erover, zonder het roerijs.' },
      { t: 'Schil met een dunschiller 2 brede repen van de sinaasappel. Knijp elke reep boven het glas dubbel, met de schil naar beneden, zodat de olie op de drank spat. Wrijf hem langs de rand en hang hem in het glas.' }
    ],
    tips: ['Een groot ijsblok smelt langzamer dan kleine blokjes, dan wordt de drank niet waterig. Vries water in een siliconen muffinvorm of een bakje.', 'Lekker met een cocktailkers erbij.'],
    alt: ['Met Schotse whisky of rogge-whisky (rye) in plaats van bourbon: droger en kruidiger.', SIROOP]
  },
  {
    id: 'negroni', toegevoegd: '2026-10-29', naam: 'Negroni',
    ook: ['negroni', 'campari cocktail', 'gin campari'],
    keuken: 'Klassiekers', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Italiaanse klassieker van gelijke delen gin, Campari en rode vermout. Bitter, zoet en kruidig tegelijk, met sinaasappel. Een echte aperitief: je drinkt hem vóór het eten.',
    gerei: [glas('2 lage glazen (tumbler)'), ROERGLAS, MAATJE],
    ingr: [
      { n: 'gin', q: 60, u: 'ml' },
      { n: 'Campari', q: 60, u: 'ml' },
      { n: 'rode vermout', q: 60, u: 'ml', x: 'zoals Martini Rosso' },
      { n: 'sinaasappel', q: 1, u: 'st', x: '2 plakjes of 2 repen schil' },
      IJS
    ],
    stappen: [
      { t: 'Doe de gin, Campari en rode vermout in een groot glas of maatbeker met een flinke schep ijs.' },
      { t: 'Roer 20 à 30 seconden tot het ijskoud is.' },
      { t: 'Giet over vers ijs in de lage glazen en maak af met een plakje sinaasappel of een reep schil.' }
    ],
    tips: ['Te bitter? Neem minder Campari (40 ml) en iets meer vermout.'],
    alt: ['Negroni sbagliato: vervang de gin door prosecco en roer niet, maar schenk alles direct in het glas.', 'Boulevardier: bourbon in plaats van gin.']
  },
  {
    id: 'manhattan', toegevoegd: '2026-10-29', naam: 'Manhattan',
    ook: ['manhattan', 'whiskey vermouth', 'whisky vermout'],
    keuken: 'Klassiekers', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Whisky met rode vermout en een paar druppels bitters, geroerd en zonder ijs geschonken in een koud glas, met een cocktailkers. Vol en zacht, een beetje zoet.',
    gerei: [glas('2 cocktailglazen (coupe of martiniglas), of kleine wijnglazen'), ROERGLAS, MAATJE],
    ingr: [
      { n: 'bourbon', q: 100, u: 'ml', x: 'of rogge-whisky (rye)' },
      { n: 'rode vermout', q: 50, u: 'ml' },
      { n: 'Angostura bitters', q: 0.5, u: 'tl', x: '2 druppels (dashes) per glas' },
      { n: 'cocktailkers', p: 'cocktailkersen', q: 2, u: 'st' },
      IJS
    ],
    stappen: [
      { t: KOUD },
      { t: 'Doe de bourbon, vermout en bitters in een groot glas of maatbeker met een flinke schep ijs. Roer 30 seconden.' },
      { t: 'Giet de cocktail zonder het ijs in de koude glazen en laat in elk glas een cocktailkers zakken.' }
    ],
    tips: ['Vermout is wijn: zet een geopende fles in de koelkast, dan blijft hij 1 à 2 maanden goed.'],
    alt: ['Perfect manhattan: neem 25 ml rode en 25 ml droge vermout.']
  },
  {
    id: 'whisky-sour', toegevoegd: '2026-10-29', naam: 'Whisky sour',
    ook: ['whisky sour', 'whiskey sour', 'bourbon sour', 'sour'],
    keuken: 'Klassiekers', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Gemiddeld', vega: true,
    intro: 'Bourbon met vers citroensap en suiker, flink geschud. Met een eiwit erbij krijgt hij een zachte, witte schuimkraag. Fris en zuur, met de warmte van whisky.',
    gerei: [glas('2 lage glazen (tumbler) of cocktailglazen'), SHAKER, MAATJE, { tool: 'glas', tekst: 'Theezeefje' }],
    ingr: [
      { n: 'bourbon', q: 100, u: 'ml' },
      { n: 'citroen', q: 1, u: 'st', x: 'geperst: ongeveer 50 ml sap' },
      { n: 'suikersiroop', q: 40, u: 'ml' },
      { n: 'ei', q: 1, u: 'st', opt: true, x: 'alleen het eiwit, voor de schuimkraag' },
      { n: 'Angostura bitters', q: 0.5, u: 'tl', opt: true, x: 'een paar druppels op het schuim' },
      IJS
    ],
    stappen: [
      { t: 'Pers de citroen. Doe de bourbon, het citroensap, de suikersiroop en het eiwit in de shaker of jampot, nog zónder ijs.' },
      { t: 'Doe hem dicht en schud 15 seconden zonder ijs (dry shake). Zo klopt het eiwit op tot schuim.' },
      { t: 'Doe er een flinke schep ijs bij en schud nog eens 15 seconden heel hard.' },
      { t: 'Giet door een theezeefje in de glazen, op vers ijs of zonder. Laat het schuim even boven komen en druppel er een paar druppels bitters op.' }
    ],
    tips: ['Zonder eiwit is hij ook goed: sla de eerste keer schudden dan over.', 'Het eiwit proef je niet; het maakt de cocktail alleen zacht en romig. Gebruik een vers ei.'],
    alt: ['Geen eiwit? 30 ml kikkererwtenvocht (aquafaba) uit een blik schuimt net zo goed en is vegan.', SIROOP]
  },
  {
    id: 'daiquiri', toegevoegd: '2026-10-29', naam: 'Daiquiri', gerecht: 'Daiquiri', variant: 'Klassiek',
    ook: ['daiquiri', 'daiquiri classic', 'rum sour'],
    keuken: 'Klassiekers', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'De echte daiquiri uit Cuba is heel simpel: witte rum, vers limoensap en suiker, ijskoud geschud. Fris, zuur en licht zoet. De aardbeienversie is een frozen cocktail uit de blender.',
    gerei: [glas('2 cocktailglazen (coupe of martiniglas), of kleine wijnglazen'), SHAKER, MAATJE],
    ingr: [
      { n: 'witte rum', q: 100, u: 'ml', x: 'zoals Bacardi Carta Blanca of Havana Club 3 Años' },
      { n: 'limoen', q: 2, u: 'st', x: 'geperst: ongeveer 50 ml sap' },
      { n: 'suikersiroop', q: 30, u: 'ml' },
      IJS
    ],
    stappen: [
      { t: KOUD },
      { t: 'Pers de limoenen. ' + SCHUD },
      { t: 'Giet door een zeefje in de koude glazen, zonder ijs.' }
    ],
    tips: ['Proef: limoenen verschillen. Te zuur? Een scheut van 5 ml suikersiroop erbij. Te zoet? Een beetje meer limoen.', 'Rol een limoen eerst stevig over het aanrecht, dan geeft hij meer sap.'],
    alt: [SIROOP]
  },
  {
    id: 'daiquiri-aardbei', toegevoegd: '2026-10-29', variantVan: 'daiquiri', variant: 'Aardbei (frozen)', naam: 'Frozen strawberry daiquiri',
    ook: ['strawberry daiquiri', 'aardbeien daiquiri', 'frozen daiquiri', 'aardbeiendaiquiri'],
    intro: 'Rum met aardbeien, limoen en ijs, in de blender gemalen tot een koude slush. Zoet, fruitig en heel makkelijk. Met diepvriesaardbeien heb je bijna geen ijs nodig.',
    gerei: [glas('2 hoge glazen of grote cocktailglazen'), { tool: 'staafmixer', tekst: 'Blender, of een staafmixer met een hoge beker' }, MAATJE],
    vervang: {
      limoen: { n: 'limoen', q: 1, u: 'st', x: 'geperst: ongeveer 25 ml sap' },
      suikersiroop: [
        { n: 'aardbeien', q: 250, u: 'g', x: 'diepvries, of vers en 1 uur ingevroren' },
        { n: 'suikersiroop', q: 40, u: 'ml' }
      ],
      ijsblokjes: { n: 'ijsblokjes', q: 150, u: 'g', x: 'ongeveer 8 blokjes; met verse aardbeien het dubbele' }
    },
    stappen: [
      { t: 'Pers de limoen. Doe de rum, het limoensap, de suikersiroop, de bevroren aardbeien en het ijs in de blender of de hoge beker van de staafmixer.' },
      { t: 'Maal 30 à 60 seconden tot het een gladde, dikke slush is. Te dik? Een scheut water of rum erbij. Te dun? Nog wat ijs of aardbeien.' },
      { t: 'Proef, en maak eventueel zoeter met wat suikersiroop. Schenk in de glazen en zet er een aardbei op de rand.' }
    ],
    tips: ['Met een staafmixer gaat het het best als je eerst de vloeistof en de aardbeien maalt en dan het ijs in twee keer erbij doet.'],
    alt: ['Met mango (diepvries) in plaats van aardbeien heb je een mango daiquiri.']
  },
  {
    id: 'margarita', toegevoegd: '2026-10-29', naam: 'Margarita',
    ook: ['margarita', 'margaritha', 'tequila cocktail', 'margarita op ijs'],
    keuken: 'Klassiekers', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'De beroemdste Mexicaanse cocktail: tequila, sinaasappellikeur en vers limoensap, met een rand van zout op het glas. Zuur, zout en fris.',
    gerei: [glas('2 lage glazen of cocktailglazen, en een bordje voor het zout'), SHAKER, MAATJE],
    ingr: [
      { n: 'tequila', q: 100, u: 'ml', x: 'liefst 100% agave, zoals Olmeca Altos of Espolòn Blanco' },
      { n: 'triple sec', q: 40, u: 'ml', x: 'zoals Cointreau' },
      { n: 'limoen', q: 2, u: 'st', x: 'geperst: ongeveer 50 ml sap, plus 1 partje voor de rand' },
      { n: 'suikersiroop', q: 10, u: 'ml', opt: true },
      { n: 'zout', q: 1, u: 'el', x: 'grof zeezout of gewoon zout, voor de rand' },
      IJS
    ],
    stappen: [
      { kop: 'Zoutrand', t: 'Strooi het zout op een bordje. Wrijf met een partje limoen over de buitenrand van de glazen en rol de rand door het zout. Liever een halve rand, dan kun je kiezen: met of zonder zout.' },
      { t: 'Pers de limoenen. ' + SCHUD },
      { t: 'Giet door een zeefje in de glazen, op vers ijs of zonder.' }
    ],
    tips: ['Tommy\'s margarita: vervang de triple sec door 20 ml agavesiroop of honing (verdund met een beetje warm water).'],
    alt: ['Frozen margarita: alles met 200 g ijs 30 seconden in de blender.']
  },
  {
    id: 'cosmopolitan', toegevoegd: '2026-10-29', naam: 'Cosmopolitan',
    ook: ['cosmopolitan', 'cosmo', 'cranberry cocktail', 'sex and the city cocktail'],
    keuken: 'Klassiekers', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Roze cocktail van wodka, sinaasappellikeur, cranberrysap en limoen, bekend van Sex and the City. Fris, een beetje zuur en fruitig.',
    gerei: [glas('2 cocktailglazen (coupe of martiniglas)'), SHAKER, MAATJE],
    ingr: [
      { n: 'wodka', q: 80, u: 'ml', x: 'gewone of citroenwodka' },
      { n: 'triple sec', q: 30, u: 'ml' },
      { n: 'cranberrysap', q: 60, u: 'ml' },
      { n: 'limoen', q: 1, u: 'st', x: 'geperst: ongeveer 25 ml sap' },
      { n: 'sinaasappel', q: 1, u: 'st', opt: true, x: 'een reep schil voor erop' },
      IJS
    ],
    stappen: [
      { t: KOUD },
      { t: 'Pers de limoen. ' + SCHUD },
      { t: 'Giet door een zeefje in de koude glazen. Knijp een reep sinaasappelschil boven het glas en leg hem op de rand.' }
    ],
    tips: ['Cranberrysap staat bij de sappen, vaak als Ocean Spray. Neem geen light: dan is hij te zuur.'],
    alt: []
  },
  {
    id: 'espresso-martini', toegevoegd: '2026-10-29', naam: 'Espresso martini',
    ook: ['espresso martini', 'koffie cocktail', 'koffiecocktail', 'espressomartini'],
    keuken: 'Klassiekers', soort: 'Cocktail', tijd: 10, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Wodka met verse espresso en koffielikeur, zo hard geschud dat er een romige laag schuim op komt. Koud, bitter en zoet tegelijk, met drie koffiebonen erop.',
    gerei: [glas('2 cocktailglazen (coupe of martiniglas)'), SHAKER, MAATJE, { tool: 'glas', tekst: 'Espressoapparaat of koffiemachine', of: 'Heel sterke oploskoffie werkt ook: 2 tl in 60 ml heet water.' }],
    ingr: [
      { n: 'wodka', q: 100, u: 'ml' },
      { n: 'koffielikeur', q: 50, u: 'ml', x: 'zoals Kahlúa of Tia Maria' },
      { n: 'espresso', q: 60, u: 'ml', x: '2 shots, vers gezet en 5 minuten afgekoeld' },
      { n: 'suikersiroop', q: 10, u: 'ml', opt: true },
      { n: 'koffiebonen', q: 6, u: 'st', opt: true, x: 'voor erop' },
      IJS
    ],
    stappen: [
      { t: 'Zet 2 espresso\'s en laat ze 5 minuten afkoelen. ' + KOUD, min: 5 },
      { t: 'Doe de wodka, koffielikeur, espresso en suikersiroop met een flinke schep ijs in de shaker of jampot. Schud 20 seconden zo hard als je kunt: hoe harder, hoe meer schuim.' },
      { t: 'Giet door een zeefje in de koude glazen. Wacht een paar seconden tot het schuim bovenkomt en leg er 3 koffiebonen op.' }
    ],
    tips: ['Verse, nog lauwe espresso geeft het meeste schuim. Koffie uit de koelkast schuimt veel minder.'],
    alt: ['Zonder koffielikeur: 30 ml suikersiroop en een paar druppels vanille-extract.']
  },
  {
    id: 'martini', toegevoegd: '2026-10-29', naam: 'Dry martini',
    ook: ['martini', 'dry martini', 'gin martini', 'vodka martini', 'wodka martini', 'shaken not stirred'],
    keuken: 'Klassiekers', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Gin met een klein beetje droge vermout, ijskoud geroerd, met een olijf of een reepje citroenschil. Helder, sterk en droog. James Bond neemt hem met wodka, geschud.',
    gerei: [glas('2 cocktailglazen (martiniglas of coupe)'), ROERGLAS, MAATJE],
    ingr: [
      { n: 'gin', q: 120, u: 'ml', x: 'of wodka' },
      { n: 'droge vermout', q: 20, u: 'ml', x: 'zoals Martini Extra Dry of Noilly Prat' },
      { n: 'groene olijven', q: 2, u: 'st', x: 'op een prikker, of een reepje citroenschil' },
      IJS
    ],
    stappen: [
      { t: KOUD },
      { t: 'Doe de gin en vermout in een groot glas of maatbeker met veel ijs en roer 30 seconden, tot het glas beslaat.' },
      { t: 'Giet zonder ijs in de koude glazen en doe er een olijf op een prikker in.' }
    ],
    tips: ['Dirty martini: doe er 1 tl van het vocht uit de olijvenpot bij.'],
    alt: ['Vodka martini, zoals James Bond: wodka in plaats van gin, en geschud in plaats van geroerd.']
  },
  {
    id: 'amaretto-sour', toegevoegd: '2026-10-29', naam: 'Amaretto sour',
    ook: ['amaretto sour', 'amaretto cocktail', 'disaronno sour'],
    keuken: 'Klassiekers', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Gemiddeld', vega: true,
    intro: 'Zoete amandellikeur met citroen en een scheut bourbon, geschud met eiwit tot een zachte schuimkraag. Zoet en zuur, en minder sterk dan je denkt.',
    gerei: [glas('2 lage glazen (tumbler)'), SHAKER, MAATJE],
    ingr: [
      { n: 'amaretto', q: 90, u: 'ml', x: 'zoals Disaronno' },
      { n: 'bourbon', q: 30, u: 'ml', opt: true, x: 'maakt hem minder zoet' },
      { n: 'citroen', q: 1, u: 'st', x: 'geperst: ongeveer 50 ml sap' },
      { n: 'suikersiroop', q: 10, u: 'ml' },
      { n: 'ei', q: 1, u: 'st', opt: true, x: 'alleen het eiwit' },
      { n: 'cocktailkers', p: 'cocktailkersen', q: 2, u: 'st', opt: true },
      IJS
    ],
    stappen: [
      { t: 'Pers de citroen. Doe de amaretto, bourbon, het citroensap, de suikersiroop en het eiwit in de shaker of jampot en schud 15 seconden zonder ijs.' },
      { t: 'Doe er een flinke schep ijs bij en schud nog 15 seconden hard.' },
      { t: 'Giet door een zeefje op vers ijs in de glazen en maak af met een cocktailkers.' }
    ],
    tips: ['Zonder eiwit kan ook: schud dan meteen met ijs.'],
    alt: ['30 ml kikkererwtenvocht (aquafaba) in plaats van het eiwit.']
  },

  /* ---------- Long drinks ---------- */
  {
    id: 'gin-tonic', toegevoegd: '2026-10-29', naam: 'Gin-tonic',
    ook: ['gin tonic', 'gin-tonic', 'g&t', 'gin en tonic', 'gintonic'],
    keuken: 'Long drinks', soort: 'Cocktail', tijd: 3, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Gin met tonic op veel ijs, met limoen of komkommer. De simpelste en populairste long drink: fris, bitter en bruisend.',
    gerei: [glas('2 grote ballonglazen of longdrinkglazen'), MAATJE],
    ingr: [
      { n: 'gin', q: 100, u: 'ml', x: 'zoals Bombay Sapphire, Tanqueray of Hendrick\'s' },
      { n: 'tonic', q: 300, u: 'ml', x: 'goed gekoeld, zoals Fever-Tree of Schweppes' },
      { n: 'limoen', q: 0.5, u: 'st', x: 'in partjes, of een paar plakjes komkommer' },
      IJS
    ],
    stappen: [
      { t: 'Vul de glazen helemaal met ijs. Veel ijs is beter dan weinig: dan smelt het langzamer.' },
      { t: 'Giet de gin erover en knijp een partje limoen uit boven het glas. Doe het partje erin.' },
      { t: 'Schenk de koude tonic er langzaam langs een lange lepel bij, dan blijven de bubbels erin. Roer één keer zachtjes.' }
    ],
    tips: ['1 deel gin op 3 delen tonic is de standaard. Sterker of lichter mag natuurlijk.', 'Bij Hendrick\'s past komkommer, bij een citrusgin een reepje sinaasappelschil.'],
    alt: ['Alcoholvrij: neem een 0.0 gin, zoals Gordon\'s 0.0 of Tanqueray 0.0 (bij AH en Jumbo).']
  },
  {
    id: 'moscow-mule', toegevoegd: '2026-10-29', naam: 'Moscow mule',
    ook: ['moscow mule', 'mule', 'wodka gemberbier', 'vodka ginger beer'],
    keuken: 'Long drinks', soort: 'Cocktail', tijd: 3, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Wodka met pittig gemberbier en limoen, op veel ijs. Traditioneel in een koperen mok. Fris, scherp van de gember en heel makkelijk.',
    gerei: [glas('2 koperen mokken of longdrinkglazen'), MAATJE],
    ingr: [
      { n: 'wodka', q: 100, u: 'ml' },
      { n: 'gemberbier', q: 300, u: 'ml', x: 'ginger beer, zoals Fever-Tree of Gosling\'s' },
      { n: 'limoen', q: 1, u: 'st', x: 'half geperst, half in partjes' },
      { n: 'verse munt', q: 2, u: 'takje', opt: true },
      IJS
    ],
    stappen: [
      { t: 'Vul de mokken of glazen met ijs. Pers een halve limoen uit en verdeel het sap over de glazen.' },
      { t: 'Giet de wodka erbij en vul aan met koud gemberbier. Roer één keer.' },
      { t: 'Maak af met een partje limoen en een takje munt.' }
    ],
    tips: ['Gemberbier (ginger beer) is pittiger dan ginger ale. Ginger ale werkt ook, maar is zoeter en milder.'],
    alt: []
  },
  {
    id: 'dark-n-stormy', toegevoegd: '2026-10-29', naam: 'Dark \'n stormy',
    ook: ['dark n stormy', 'dark and stormy', 'dark \'n stormy', 'rum gemberbier'],
    keuken: 'Long drinks', soort: 'Cocktail', tijd: 3, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Donkere rum die als een onweerswolk op gemberbier drijft, met limoen. Uit Bermuda. Kruidig, zoet en pittig.',
    gerei: [glas('2 longdrinkglazen'), MAATJE],
    ingr: [
      { n: 'bruine rum', q: 100, u: 'ml', x: 'liefst donkere rum, zoals Gosling\'s Black Seal of Captain Morgan Dark' },
      { n: 'gemberbier', q: 300, u: 'ml' },
      { n: 'limoen', q: 1, u: 'st', x: 'half geperst, half in partjes' },
      IJS
    ],
    stappen: [
      { t: 'Vul de glazen met ijs en giet het sap van een halve limoen en het gemberbier erin.' },
      { t: 'Giet de rum er langzaam over de bolle kant van een lepel bovenop, dan blijft hij als een donkere laag drijven.' },
      { t: 'Zet er een partje limoen op en roer pas als je gaat drinken.' }
    ],
    tips: [],
    alt: ['Met witte rum en cola in plaats van gemberbier heb je een cuba libre.']
  },
  {
    id: 'aperol-spritz', toegevoegd: '2026-10-29', naam: 'Aperol spritz',
    ook: ['aperol spritz', 'spritz', 'aperol', 'spritz veneziano'],
    keuken: 'Long drinks', soort: 'Cocktail', tijd: 3, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Oranje Italiaanse zomerdrank van prosecco, Aperol en een scheut bruiswater, met een plak sinaasappel. Licht bitter, fris en niet sterk. Alles koop je gewoon in de supermarkt.',
    gerei: [glas('2 grote wijnglazen'), MAATJE],
    ingr: [
      { n: 'prosecco', q: 180, u: 'ml', x: 'goed gekoeld' },
      { n: 'Aperol', q: 120, u: 'ml' },
      { n: 'sodawater', q: 60, u: 'ml', x: 'of bruisend mineraalwater' },
      { n: 'sinaasappel', q: 0.5, u: 'st', x: 'in plakjes' },
      IJS
    ],
    stappen: [
      { t: 'Vul de wijnglazen met ijs.' },
      { t: 'Schenk eerst de prosecco erin, dan de Aperol en als laatste het sodawater. Zo mengt het vanzelf.' },
      { t: 'Roer één keer zachtjes en doe er een plakje sinaasappel in.' }
    ],
    tips: ['Onthoud 3-2-1: 3 delen prosecco, 2 delen Aperol, 1 deel bruiswater.', 'Een open fles prosecco blijft met een champagnestop 2 à 3 dagen bruisend in de koelkast.'],
    alt: ['Campari spritz: Campari in plaats van Aperol, bitterder en roder.', 'Hugo: met vlierbloesemsiroop en munt (staat ook in dit hoofdstuk).']
  },
  {
    id: 'hugo', toegevoegd: '2026-10-29', naam: 'Hugo',
    ook: ['hugo', 'hugo spritz', 'vlierbloesem spritz', 'elderflower spritz'],
    keuken: 'Long drinks', soort: 'Cocktail', tijd: 3, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Prosecco met vlierbloesemsiroop, munt, limoen en bruiswater. Bloemig, zoet en fris: de lichtere zus van de Aperol spritz.',
    gerei: [glas('2 grote wijnglazen'), MAATJE],
    ingr: [
      { n: 'prosecco', q: 240, u: 'ml', x: 'goed gekoeld' },
      { n: 'vlierbloesemsiroop', q: 40, u: 'ml' },
      { n: 'sodawater', q: 80, u: 'ml' },
      { n: 'verse munt', q: 4, u: 'takje' },
      { n: 'limoen', q: 0.5, u: 'st', x: 'in plakjes' },
      IJS
    ],
    stappen: [
      { t: 'Klap de muntblaadjes één keer tussen je handen, dan komt de geur vrij. Verdeel ze met de limoen over de glazen.' },
      { t: 'Giet de vlierbloesemsiroop erin, vul met ijs en schenk de prosecco en het sodawater erbij.' },
      { t: 'Roer één keer zachtjes.' }
    ],
    tips: [],
    alt: ['Alcoholvrij: alcoholvrije mousserende wijn of alleen bruiswater.']
  },
  {
    id: 'paloma', toegevoegd: '2026-10-29', naam: 'Paloma',
    ook: ['paloma', 'tequila grapefruit', 'grapefruit cocktail'],
    keuken: 'Long drinks', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'In Mexico drinken ze dit vaker dan margarita: tequila met grapefruit, limoen en bruiswater, en een zoutrandje. Bitterzoet en heel fris.',
    gerei: [glas('2 longdrinkglazen, en een bordje voor het zout'), MAATJE],
    ingr: [
      { n: 'tequila', q: 100, u: 'ml' },
      { n: 'grapefruitsap', q: 120, u: 'ml', x: 'liefst roze grapefruit' },
      { n: 'limoen', q: 1, u: 'st', x: 'geperst: ongeveer 25 ml sap' },
      { n: 'suikersiroop', q: 20, u: 'ml' },
      { n: 'sodawater', q: 100, u: 'ml' },
      { n: 'zout', q: 1, u: 'tl', opt: true, x: 'voor de rand' },
      IJS
    ],
    stappen: [
      { t: 'Wrijf met een stukje limoen over de rand van de glazen en rol ze door het zout op een bordje.' },
      { t: 'Vul de glazen met ijs. Verdeel de tequila, het grapefruitsap, het limoensap en de suikersiroop erover en roer even.' },
      { t: 'Vul aan met sodawater en roer nog één keer zachtjes.' }
    ],
    tips: ['Snelle versie: tequila en limoen aangevuld met grapefruitfrisdrank (zoals Schweppes Pink Grapefruit of Fanta Grapefruit), dan zijn sap, siroop en sodawater niet nodig.'],
    alt: []
  },
  {
    id: 'cuba-libre', toegevoegd: '2026-10-29', naam: 'Cuba libre',
    ook: ['cuba libre', 'rum cola', 'bacardi cola', 'rum-cola'],
    keuken: 'Long drinks', soort: 'Cocktail', tijd: 3, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Rum-cola, maar dan goed: met vers uitgeknepen limoen erin. Dat maakt het verschil tussen een zoet drankje en een frisse cocktail.',
    gerei: [glas('2 longdrinkglazen'), MAATJE],
    ingr: [
      { n: 'witte rum', q: 100, u: 'ml', x: 'of bruine rum, voluller van smaak' },
      { n: 'cola', q: 300, u: 'ml', x: 'goed gekoeld' },
      { n: 'limoen', q: 1, u: 'st', x: 'in partjes' },
      IJS
    ],
    stappen: [
      { t: 'Knijp in elk glas 2 partjes limoen uit en laat ze erin vallen.' },
      { t: 'Vul met ijs, giet de rum erover en vul aan met koude cola. Roer één keer.' }
    ],
    tips: [],
    alt: []
  },
  {
    id: 'tequila-sunrise', toegevoegd: '2026-10-29', naam: 'Tequila sunrise',
    ook: ['tequila sunrise', 'sunrise', 'tequila sinaasappel'],
    keuken: 'Long drinks', soort: 'Cocktail', tijd: 3, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Tequila met sinaasappelsap en grenadine, die naar de bodem zakt zodat het glas kleurt als een zonsopkomst. Zoet en fruitig.',
    gerei: [glas('2 longdrinkglazen'), MAATJE],
    ingr: [
      { n: 'tequila', q: 100, u: 'ml' },
      { n: 'sinaasappelsap', q: 240, u: 'ml', x: 'vers geperst of uit de koeling' },
      { n: 'grenadine', q: 30, u: 'ml' },
      { n: 'sinaasappel', q: 0.5, u: 'st', opt: true, x: 'plakjes voor de rand' },
      { n: 'cocktailkers', p: 'cocktailkersen', q: 2, u: 'st', opt: true },
      IJS
    ],
    stappen: [
      { t: 'Vul de glazen met ijs, giet de tequila erin en vul aan met sinaasappelsap. Roer even.' },
      { t: 'Giet de grenadine langzaam langs de binnenkant van het glas (of over de bolle kant van een lepel). Hij zakt naar de bodem. Niet meer roeren.' },
      { t: 'Maak af met een plakje sinaasappel en een kers.' }
    ],
    tips: [],
    alt: ['Zonder tequila is het een alcoholvrije sunrise, lekker voor kinderen.']
  },
  {
    id: 'long-island-iced-tea', toegevoegd: '2026-10-29', naam: 'Long Island iced tea',
    ook: ['long island', 'long island iced tea', 'long island ice tea', 'lit'],
    keuken: 'Long drinks', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Gemiddeld', vega: true,
    intro: 'Er zit geen thee in: vijf soorten drank met citroen en een scheut cola, zodat het eruitziet als ijsthee. Smaakt licht, maar is heel sterk.',
    gerei: [glas('2 hoge longdrinkglazen'), SHAKER, MAATJE],
    ingr: [
      { n: 'wodka', q: 30, u: 'ml' },
      { n: 'gin', q: 30, u: 'ml' },
      { n: 'witte rum', q: 30, u: 'ml' },
      { n: 'tequila', q: 30, u: 'ml' },
      { n: 'triple sec', q: 30, u: 'ml' },
      { n: 'citroen', q: 1, u: 'st', x: 'geperst: ongeveer 50 ml sap' },
      { n: 'suikersiroop', q: 30, u: 'ml' },
      { n: 'cola', q: 120, u: 'ml' },
      IJS
    ],
    stappen: [
      { t: 'Pers de citroen. Doe alles behalve de cola met een schep ijs in de shaker of jampot en schud 10 seconden.' },
      { t: 'Giet met ijs en al in de hoge glazen en vul aan met cola, net genoeg voor een theekleur. Doe er een schijfje citroen op.' }
    ],
    tips: ['Elk glas heeft ruim 2 shots sterke drank: drink er rustig één.'],
    alt: []
  },
  {
    id: 'bloody-mary', toegevoegd: '2026-10-29', naam: 'Bloody Mary',
    ook: ['bloody mary', 'bloody', 'tomaten cocktail', 'tomatencocktail', 'virgin mary'],
    keuken: 'Long drinks', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: false, pit: 1,
    intro: 'Hartige cocktail van wodka en tomatensap met citroen, worcestershiresaus, pepersaus en peper, met een stengel bleekselderij. Een beetje pittig. Klassiek bij een late brunch.',
    gerei: [glas('2 longdrinkglazen'), ROERGLAS, MAATJE],
    ingr: [
      { n: 'wodka', q: 100, u: 'ml' },
      { n: 'tomatensap', q: 300, u: 'ml', x: 'goed gekoeld' },
      { n: 'citroen', q: 0.5, u: 'st', x: 'geperst: ongeveer 20 ml sap' },
      { n: 'worcestershiresaus', q: 1, u: 'tl' },
      { n: 'hete saus', q: 0.5, u: 'tl', x: 'zoals Tabasco: 4 à 6 druppels, of naar smaak' },
      { n: 'selderijzout', q: 1, u: 'snuf', of: 'een snufje gewoon zout' },
      { n: 'zwarte peper', q: 1, u: 'snuf', x: 'versgemalen' },
      { n: 'bleekselderij', q: 2, u: 'stengel', x: 'met blad, om in het glas te zetten' },
      IJS
    ],
    stappen: [
      { t: 'Doe alles behalve de bleekselderij in een groot glas of maatbeker met een paar ijsblokjes.' },
      { t: 'Giet het 4 à 5 keer over in een tweede glas en terug (rollen). Zo mengt het zonder dat het tomatensap gaat schuimen, zoals bij schudden.' },
      { t: 'Proef en maak op smaak met meer pepersaus, citroen of peper. Schenk op vers ijs in de glazen en zet er een stengel bleekselderij in.' }
    ],
    tips: ['Worcestershiresaus bevat ansjovis. Voor een vegetarische versie neem je een vegetarische worcestershiresaus of 1 tl sojasaus.', 'Virgin Mary: laat de wodka weg.'],
    alt: []
  },

  /* ---------- Tropisch ---------- */
  {
    id: 'mojito', toegevoegd: '2026-10-29', naam: 'Mojito',
    ook: ['mojito', 'mohito', 'rum munt', 'cuban mojito'],
    keuken: 'Tropisch', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'De bekendste cocktail van Cuba: witte rum met gekneusde munt, limoen en suiker, aangevuld met bruiswater op gecrusht ijs. Fris, zoet en zomers.',
    gerei: [glas('2 longdrinkglazen'), STAMPER, MAATJE],
    ingr: [
      { n: 'witte rum', q: 100, u: 'ml' },
      { n: 'limoen', q: 2, u: 'st', x: 'in partjes' },
      { n: 'verse munt', q: 4, u: 'takje', x: 'ongeveer 20 blaadjes, plus 2 toppen voor erop' },
      { n: 'suikersiroop', q: 40, u: 'ml', of: '4 tl bruine suiker of rietsuiker' },
      { n: 'sodawater', q: 120, u: 'ml' },
      GECRUSHT
    ],
    stappen: [
      { t: 'Verdeel de limoenpartjes, de muntblaadjes en de suikersiroop over de glazen.' },
      { t: 'Druk met de stamper 5 à 6 keer stevig op de limoen, tot het sap eruit komt. Op de munt druk je maar zachtjes: kapotgestampte munt wordt bitter.' },
      { t: 'Vul de glazen tot driekwart met gecrusht ijs en giet de rum erover. Roer van onder naar boven, zodat de munt door het glas verdeeld raakt.' },
      { t: 'Vul aan met ijs en sodawater en steek er een munttop in.' }
    ],
    tips: ['Gecrusht ijs maak je door ijsblokjes in een schone theedoek te slaan met een deegroller of de bodem van een pan.', 'Gewone munt uit de supermarkt (in een bakje of potje) is prima.'],
    alt: ['Alcoholvrij: zie de nojito in het hoofdstuk Alcoholvrij.', 'Aardbeienmojito: stamp 4 aardbeien mee met de limoen.']
  },
  {
    id: 'pina-colada', toegevoegd: '2026-10-29', naam: 'Piña colada',
    ook: ['pina colada', 'piña colada', 'pinacolada', 'ananas kokos', 'kokos cocktail'],
    keuken: 'Tropisch', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Romig en zoet uit Puerto Rico: witte rum met ananassap en kokos, geschud of uit de blender. Smaakt naar vakantie.',
    gerei: [glas('2 grote glazen (orkaanglas of longdrinkglas)'), SHAKER, MAATJE],
    ingr: [
      { n: 'witte rum', q: 100, u: 'ml' },
      { n: 'ananassap', q: 180, u: 'ml' },
      { n: 'kokosmelk', q: 80, u: 'ml', x: 'romige uit blik, goed geschud; of kokosroom' },
      { n: 'suikersiroop', q: 30, u: 'ml' },
      { n: 'limoen', q: 0.5, u: 'st', opt: true, x: 'een paar druppels maken hem minder zoet' },
      { n: 'ananas', q: 2, u: 'st', opt: true, x: 'stukjes of schijfjes voor de rand' },
      IJS
    ],
    stappen: [
      { t: 'Schud het blik kokosmelk goed, zodat de room en het water mengen.' },
      { t: 'Doe de rum, het ananassap, de kokosmelk, de suikersiroop en een paar druppels limoen met een flinke schep ijs in de shaker of jampot. Schud 15 seconden hard: dan wordt hij schuimig.' },
      { t: 'Giet op vers ijs in de glazen en maak af met een stukje ananas en een kers.' }
    ],
    tips: ['Frozen: doe alles met 200 g ijs 30 seconden in de blender of in de hoge beker van de staafmixer.', 'Wat over is van het blik kokosmelk kun je invriezen in een ijsblokjesvorm, voor de volgende keer of een curry.'],
    alt: ['Met Malibu (kokoslikeur) in plaats van kokosmelk en suikersiroop: lichter en zoeter.']
  },
  {
    id: 'mai-tai', toegevoegd: '2026-10-29', naam: 'Mai tai',
    ook: ['mai tai', 'maitai', 'tiki cocktail', 'tiki'],
    keuken: 'Tropisch', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Gemiddeld', vega: true,
    intro: 'De beroemdste tiki-cocktail: witte en bruine rum met limoen, sinaasappellikeur en amandelsiroop, op gecrusht ijs met munt. Zoet, zuur en nootachtig.',
    gerei: [glas('2 lage glazen of tiki-mokken'), SHAKER, MAATJE],
    ingr: [
      { n: 'witte rum', q: 60, u: 'ml' },
      { n: 'bruine rum', q: 60, u: 'ml' },
      { n: 'triple sec', q: 30, u: 'ml' },
      { n: 'amandelsiroop', q: 30, u: 'ml', x: 'orgeat', of: '30 ml amaretto en 10 ml suikersiroop' },
      { n: 'limoen', q: 2, u: 'st', x: 'geperst: ongeveer 50 ml sap; bewaar een halve schil' },
      { n: 'verse munt', q: 2, u: 'takje', x: 'voor erop' },
      GECRUSHT
    ],
    stappen: [
      { t: 'Pers de limoenen. Doe de witte rum, triple sec, amandelsiroop en het limoensap met een schep ijs in de shaker of jampot en schud 10 seconden.' },
      { t: 'Vul de glazen met gecrusht ijs en giet de cocktail erover.' },
      { t: 'Giet de bruine rum er langzaam bovenop, en zet er een takje munt en een uitgeperste halve limoenschil op (dat is het eilandje).' }
    ],
    tips: [],
    alt: []
  },
  {
    id: 'caipirinha', toegevoegd: '2026-10-29', naam: 'Caipirinha',
    ook: ['caipirinha', 'caipirinha cachaca', 'braziliaanse cocktail', 'caipiroska'],
    keuken: 'Tropisch', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'De nationale cocktail van Brazilië: limoen, rietsuiker en cachaça (Braziliaanse suikerrietbrandewijn) op gecrusht ijs. Zuur, zoet en stevig.',
    gerei: [glas('2 lage glazen (tumbler)'), STAMPER, MAATJE],
    ingr: [
      { n: 'cachaça', q: 120, u: 'ml', x: 'zoals Pitú of Sagatiba' },
      { n: 'limoen', q: 2, u: 'st', x: 'in 8 partjes per limoen' },
      { n: 'bruine suiker', q: 4, u: 'tl', x: 'of rietsuiker' },
      GECRUSHT
    ],
    stappen: [
      { t: 'Snijd de uiteinden en het witte middenstuk van de limoenen af (dat is bitter) en snijd ze in partjes. Verdeel ze met de suiker over de glazen.' },
      { t: 'Stamp de limoen met de suiker tot de suiker grotendeels is opgelost in het sap.' },
      { t: 'Vul de glazen met gecrusht ijs, giet de cachaça erover en roer goed door.' }
    ],
    tips: [],
    alt: ['Caipiroska: met wodka in plaats van cachaça.']
  },
  {
    id: 'pornstar-martini', toegevoegd: '2026-10-29', naam: 'Pornstar martini',
    ook: ['pornstar martini', 'passion fruit martini', 'passievrucht cocktail', 'passionfruit martini'],
    keuken: 'Tropisch', soort: 'Cocktail', tijd: 10, pers: 2, stuks: 'glazen', niveau: 'Gemiddeld', vega: true,
    intro: 'Een van de populairste cocktails van dit moment: wodka met passievrucht en vanille, geschud en geserveerd met een shotje prosecco ernaast. Fruitig, zoet en een beetje zuur.',
    gerei: [glas('2 cocktailglazen en 2 shotglaasjes'), SHAKER, MAATJE, { tool: 'glas', tekst: 'Theezeefje' }],
    ingr: [
      { n: 'wodka', q: 80, u: 'ml', x: 'liefst vanillewodka' },
      { n: 'passievrucht', p: 'passievruchten', q: 3, u: 'st', x: 'rijp en gerimpeld' },
      { n: 'limoen', q: 1, u: 'st', x: 'geperst: ongeveer 25 ml sap' },
      { n: 'suikersiroop', q: 30, u: 'ml' },
      { n: 'vanille-extract', q: 0.25, u: 'tl', x: 'alleen bij gewone wodka' },
      { n: 'prosecco', q: 100, u: 'ml', x: 'gekoeld, voor ernaast' },
      IJS
    ],
    stappen: [
      { t: KOUD },
      { t: 'Halveer 2 passievruchten en schep het vruchtvlees met de pitjes in de shaker of jampot. Bewaar de derde om te halveren voor erop.' },
      { t: 'Doe de wodka, het limoensap, de suikersiroop en de vanille erbij en een flinke schep ijs. Schud 15 seconden heel hard.' },
      { t: 'Giet door een theezeefje in de koude glazen; druk de pitjes even aan. Leg op elk glas een halve passievrucht. Schenk de prosecco in shotglaasjes ernaast: je drinkt hem tussendoor of giet hem erbij.' }
    ],
    tips: ['Passievruchten liggen bij AH en Jumbo bij het exotische fruit. Ze zijn het lekkerst als de schil gerimpeld is.'],
    alt: ['Met 20 ml passievruchtenlikeur (Passoã) erbij is hij nog fruitiger.']
  },
  {
    id: 'sex-on-the-beach', toegevoegd: '2026-10-29', naam: 'Sex on the beach',
    ook: ['sex on the beach', 'sotb', 'perzik cocktail'],
    keuken: 'Tropisch', soort: 'Cocktail', tijd: 3, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Zoete, fruitige long drink van wodka, perziklikeur, sinaasappelsap en cranberrysap. Rood-oranje van kleur en makkelijk te drinken.',
    gerei: [glas('2 longdrinkglazen'), MAATJE],
    ingr: [
      { n: 'wodka', q: 80, u: 'ml' },
      { n: 'perziklikeur', q: 40, u: 'ml', x: 'zoals De Kuyper Peachtree' },
      { n: 'sinaasappelsap', q: 120, u: 'ml' },
      { n: 'cranberrysap', q: 120, u: 'ml' },
      { n: 'sinaasappel', q: 0.5, u: 'st', opt: true, x: 'plakjes voor de rand' },
      IJS
    ],
    stappen: [
      { t: 'Vul de glazen met ijs. Giet de wodka, perziklikeur en het sinaasappelsap erin en roer.' },
      { t: 'Giet het cranberrysap er langzaam bovenop voor een mooie kleurovergang, en maak af met een plakje sinaasappel.' }
    ],
    tips: [],
    alt: ['Alcoholvrij: perzikdiksap of perzik-ijsthee in plaats van de wodka en likeur.']
  },

  /* ---------- Alcoholvrij ---------- */
  {
    id: 'nojito', toegevoegd: '2026-10-29', naam: 'Nojito (alcoholvrije mojito)',
    ook: ['nojito', 'virgin mojito', 'alcoholvrije mojito', 'mocktail mojito', 'munt limonade'],
    keuken: 'Alcoholvrij', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Alles van een mojito behalve de rum: gekneusde munt en limoen met suiker, aangevuld met bruiswater op gecrusht ijs. Ook lekker voor kinderen.',
    gerei: [glas('2 longdrinkglazen'), STAMPER, MAATJE],
    ingr: [
      { n: 'limoen', q: 2, u: 'st', x: 'in partjes' },
      { n: 'verse munt', q: 4, u: 'takje' },
      { n: 'suikersiroop', q: 40, u: 'ml', of: '4 tl bruine suiker' },
      { n: 'sodawater', q: 300, u: 'ml', x: 'of 7Up/Sprite voor een zoetere versie (dan minder siroop)' },
      GECRUSHT
    ],
    stappen: [
      { t: 'Verdeel de limoenpartjes, de muntblaadjes en de suikersiroop over de glazen en stamp de limoen stevig, de munt zachtjes.' },
      { t: 'Vul met gecrusht ijs en schenk het sodawater erbij. Roer van onder naar boven en zet er een munttop in.' }
    ],
    tips: ['Een scheut appelsap (50 ml per glas) maakt hem voller.'],
    alt: []
  },
  {
    id: 'virgin-colada', toegevoegd: '2026-10-29', naam: 'Virgin colada',
    ook: ['virgin colada', 'virgin pina colada', 'alcoholvrije pina colada', 'ananas kokos drankje'],
    keuken: 'Alcoholvrij', soort: 'Cocktail', tijd: 5, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Piña colada zonder rum: ananassap en kokos, geschud of uit de blender tot een romige, tropische drank.',
    gerei: [glas('2 grote glazen'), SHAKER, MAATJE],
    ingr: [
      { n: 'ananassap', q: 240, u: 'ml' },
      { n: 'kokosmelk', q: 100, u: 'ml', x: 'romige uit blik, goed geschud' },
      { n: 'suikersiroop', q: 20, u: 'ml' },
      { n: 'limoen', q: 0.5, u: 'st', x: 'een paar druppels sap' },
      IJS
    ],
    stappen: [
      { t: 'Doe het ananassap, de kokosmelk, de suikersiroop en een paar druppels limoen met een flinke schep ijs in de shaker of jampot. Schud 15 seconden hard.' },
      { t: 'Giet op vers ijs in de glazen en maak af met een stukje ananas.' }
    ],
    tips: ['Frozen: alles met 200 g ijs in de blender of de hoge beker van de staafmixer.'],
    alt: []
  },
  {
    id: 'virgin-mule', toegevoegd: '2026-10-29', naam: 'Virgin mule',
    ook: ['virgin mule', 'alcoholvrije moscow mule', 'gemberbier limoen', 'ginger mule'],
    keuken: 'Alcoholvrij', soort: 'Cocktail', tijd: 3, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Pittig gemberbier met limoen, munt en een scheut appelsap op veel ijs. Net zo fris als een moscow mule, zonder wodka.',
    gerei: [glas('2 koperen mokken of longdrinkglazen')],
    ingr: [
      { n: 'gemberbier', q: 400, u: 'ml' },
      { n: 'appelsap', q: 80, u: 'ml', x: 'helder of troebel' },
      { n: 'limoen', q: 1, u: 'st', x: 'half geperst, half in partjes' },
      { n: 'verse munt', q: 2, u: 'takje' },
      IJS
    ],
    stappen: [
      { t: 'Vul de glazen met ijs en verdeel het sap van een halve limoen en het appelsap erover.' },
      { t: 'Vul aan met koud gemberbier, roer één keer en zet er een partje limoen en een takje munt in.' }
    ],
    tips: [],
    alt: []
  },
  {
    id: 'pink-lemonade', toegevoegd: '2026-10-29', naam: 'Pink lemonade met frambozen',
    ook: ['pink lemonade', 'roze limonade', 'frambozenlimonade', 'mocktail', 'zelfgemaakte limonade'],
    keuken: 'Alcoholvrij', soort: 'Cocktail', tijd: 10, pers: 2, stuks: 'glazen', niveau: 'Makkelijk', vega: true,
    intro: 'Zelfgemaakte roze limonade van citroen en frambozen met bruiswater. Fris, zoetzuur en mooi van kleur.',
    gerei: [glas('2 longdrinkglazen of een kan'), STAMPER, { tool: 'glas', tekst: 'Zeef' }],
    ingr: [
      { n: 'frambozen', q: 100, u: 'g', x: 'diepvries (ontdooid) of vers' },
      { n: 'citroen', q: 2, u: 'st', x: 'geperst: ongeveer 80 ml sap' },
      { n: 'suikersiroop', q: 60, u: 'ml' },
      { n: 'sodawater', q: 400, u: 'ml' },
      { n: 'verse munt', q: 2, u: 'takje', opt: true },
      IJS
    ],
    stappen: [
      { t: 'Stamp de frambozen met de suikersiroop in een kom of kan tot moes.' },
      { t: 'Pers de citroenen en roer het sap erdoor. Druk het door een zeef als je geen pitjes wilt.' },
      { t: 'Verdeel over de glazen met ijs, vul aan met sodawater en roer even. Maak af met munt.' }
    ],
    tips: ['Voor een kan van 1 liter: alles keer 2,5, en het bruiswater pas erbij vlak voor het schenken.'],
    alt: ['Met prosecco in plaats van bruiswater is het een frambozen-spritz.']
  }
  );
})();
