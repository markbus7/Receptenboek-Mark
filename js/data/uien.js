/* Welke ui? Per recept de ui die het best past, waarom, en wat ook goed werkt.
   In het recept en op het boodschappenlijstje staat dan de beste ui ("1 gele ui", "3 sjalotten") in plaats van "ui".
   Per recept: { ui: ['beste', 'waarom', 'ook goed', ...] }, per ingrediëntnaam (ui, rode ui, sjalot, lente-ui, ...).
   Staat een recept er niet in, dan geldt het standaardadvies hieronder. Varianten nemen het advies van hun basisrecept over. */
window.UIEN = {
  /* Soorten die je tegen elkaar kunt ruilen: perUi is hoeveel je er nodig hebt voor één gewone ui. */
  soorten: {
    ui: { perUi: 1 },
    'gele ui': { p: 'gele uien', perUi: 1 },
    'rode ui': { p: 'rode uien', perUi: 1 },
    'witte ui': { p: 'witte uien', perUi: 1 },
    sjalot: { p: 'sjalotten', perUi: 2.5 }
  },

  standaard: {
    ui: ['gele ui', 'De gewone ui: hij wordt zoet als je hem bakt of stooft, en is het goedkoopst', 'witte ui', 'rode ui'],
    'rode ui': ['rode ui', 'Rauw is hij milder en zoeter dan een gele ui, en hij staat mooi op het bord', 'sjalot', 'witte ui'],
    'witte ui': ['witte ui', 'Fris, knapperig en net iets scherper: de ui van de Mexicaanse keuken', 'rode ui', 'gele ui'],
    sjalot: ['sjalot', 'Fijner en zoeter dan een gewone ui, en hij valt helemaal weg in een saus', 'gele ui'],
    'lente-ui': ['lente-ui', 'Fris en mild; je eet hem rauw of maar heel kort gebakken', 'bieslook', 'heel fijn gesneden rode ui'],
    zilveruitjes: ['zilveruitjes', 'Kleine uitjes die heel blijven. Neem verse of diepvries, niet de zoetzure uit een pot', 'kleine sjalotjes']
  },

  recepten: {
    /* Italiaans */
    'lasagne-bolognese': { ui: ['gele ui', 'Hij stooft lang mee in de ragù en wordt dan zoet en vol', 'witte ui', 'sjalot'] },
    'risotto-paddenstoelen': { ui: ['sjalot', 'Fijner en zoeter dan een gewone ui: hij valt helemaal weg in de romige rijst', 'gele ui'] },
    'spaghetti-bolognese': { ui: ['gele ui', 'De basis van de soffritto: in 10 minuten fruiten wordt hij zacht en zoet', 'witte ui'] },
    minestrone: { ui: ['gele ui', 'Zacht gefruit geeft hij de soep een zoete basis', 'witte ui', 'rode ui'] },
    tomatensaus: { ui: ['gele ui', 'Hij trekt heel mee en maakt de saus zoeter en ronder; daarna vis je hem eruit', 'witte ui'] },
    'gehaktballen-tomatensaus': { ui: ['gele ui', 'Gefruit wordt hij zoet en valt hij weg in de tomatensaus', 'witte ui', 'sjalot'] },
    ossobuco: { ui: ['gele ui', 'Hij stooft uren mee in de soffritto en maakt de saus zoet', 'witte ui'] },

    /* Spaans, Grieks, Turks, Midden-Oosten, Marokko */
    'tortilla-patatas': { ui: ['gele ui', 'Hij gaart langzaam in de olie tot hij zacht en zoet is, zoals in Spanje', 'witte ui'] },
    gazpacho: { ui: ['rode ui', 'Hij gaat rauw in de soep: milder en zoeter dan een gele ui, dus geen scherpe nasmaak', 'sjalot', 'witte ui'] },
    paella: { ui: ['gele ui', 'Hij gaat in de sofrito en bakt zoet met paprika en knoflook', 'witte ui'] },
    spanakopita: { ui: ['gele ui', 'Gefruit is hij zacht en zoet tussen de spinazie en de zoute feta', 'witte ui', 'sjalot'] },
    moussaka: { ui: ['gele ui', 'Hij bakt mee in de gehaktsaus met kaneel en wordt zoet', 'witte ui', 'rode ui'] },
    'linzensoep-mercimek': { ui: ['gele ui', 'Hij kookt helemaal stuk in de soep en geeft zoetheid', 'witte ui', 'rode ui'] },
    kofte: { ui: ['gele ui', 'Geraspt geeft hij sap en smaak aan het gehakt', 'witte ui', 'rode ui'] },
    menemen: { ui: ['gele ui', 'Hij bakt zacht en zoet mee met de paprika', 'witte ui', 'rode ui'] },
    lahmacun: { ui: ['gele ui', 'Gemalen in de vulling: sappig, en hij gaart mee in de oven', 'witte ui'] },
    karniyarik: { ui: ['gele ui', 'Gefruit in de gehaktvulling wordt hij zacht en zoet', 'witte ui', 'rode ui'] },
    shakshuka: { ui: ['gele ui', 'Hij bakt 8 minuten zacht en zoet met de paprika', 'rode ui'] },
    falafel: { ui: ['gele ui', 'Hij gaat rauw in het mengsel en gaart in het frituren; dat geeft sap en smaak', 'witte ui', 'rode ui'] },
    'kip-shoarma': { ui: ['gele ui', 'Hij bakt krokant bruin mee met de kip', 'rode ui'] },
    harira: { ui: ['gele ui', 'Hij pruttelt lang mee en maakt de soep zoet en rond', 'witte ui', 'rode ui'] },
    groentecouscous: { ui: ['gele ui', 'De partjes stoven zacht en zoet mee met de groente', 'rode ui'] },
    'kefta-tajine': { ui: ['gele ui', 'Geraspt in de balletjes en gefruit als basis van de saus', 'witte ui'] },
    'kip-tajine': { ui: ['gele ui', 'Hij stooft zo zacht dat hij bijna saus wordt', 'rode ui'] },

    /* Frans en Belgisch */
    'franse-uiensoep': { ui: ['gele ui', 'Hij heeft de meeste suiker en karamelliseert diep goudbruin; een rode ui wordt grauw en sjalotten pellen is veel werk', 'witte ui'] },
    ratatouille: { ui: ['gele ui', 'Hij bakt zacht mee met de groenten', 'rode ui', 'witte ui'] },
    'boeuf-bourguignon': {
      ui: ['gele ui', 'Hij gaat met de wortel in de basis van de saus en kookt daarin weg', 'sjalot'],
      zilveruitjes: ['zilveruitjes', 'Kleine hele uitjes die heel blijven in de wijnsaus. Neem verse of diepvries, niet de zoetzure uit een pot', 'kleine sjalotjes']
    },
    'coq-au-vin': { sjalot: ['sjalot', 'Hele sjalotjes blijven heel in de wijnsaus en worden zacht en zoet', 'verse zilveruitjes', 'gele ui in partjes'] },
    bearnaise: { sjalot: ['sjalot', 'Hij is fijn en zoet in de reductie; een gewone ui is te grof en te scherp', 'gele ui'] },
    'kip-dutch-oven': { ui: ['rode ui', 'De partjes roosteren zoet en blijven mooi van kleur tussen de krieltjes', 'gele ui', 'sjalot'] },
    mosselen: { ui: ['gele ui', 'Hij smoort zacht met selderij en prei; zoet zonder te overheersen', 'witte ui', 'sjalot'] },
    'gentse-waterzooi': { ui: ['gele ui', 'Hij trekt heel mee in de bouillon en gaat er daarna weer uit', 'witte ui'] },
    stoemp: { ui: ['gele ui', 'Gesmoord wordt hij zacht en zoet in de puree', 'sjalot', 'rode ui'] },
    'vlaamse-stoverij': { ui: ['gele ui', 'Hij bakt bruin en stooft daarna zoet in het bier', 'rode ui'] },

    /* Nederlands, Duits, Brits, Hongaars */
    boerenomelet: { ui: ['gele ui', 'Hij kleurt goudbruin mee met de aardappel', 'rode ui', 'sjalot'] },
    zuurkoolstamppot: { ui: ['gele ui', 'Goudbruin gebakken in het spekvet is hij zoet tegen de zure kool', 'sjalot', 'rode ui'] },
    hachee: { ui: ['gele ui', 'Een pond ui die urenlang stooft en de saus zoet en dik maakt; gele uien zijn daar het best en het goedkoopst voor', 'rode ui', 'sjalot'] },
    'pannenkoeken-pittig-gehakt': { ui: ['gele ui', 'Fijngesnipperd bakt hij zacht en zoet mee in het gehakt, en dat zoet tempert de Spaanse peper', 'witte ui', 'sjalot'] },
    'hollandse-macaroni': { ui: ['gele ui', 'Hij bakt mee met het gehakt en de paprika', 'witte ui', 'rode ui'] },
    'groentesoep-balletjes': { ui: ['gele ui', 'Hij kookt zacht in de bouillon en geeft zoetheid', 'witte ui', 'sjalot'] },
    'kip-kerrie-perzik': { ui: ['gele ui', 'Gefruit wordt hij zoet en draagt hij de kerrie', 'witte ui', 'sjalot'] },
    jus: { ui: ['sjalot', 'Fijn en zoet, en hij kleurt snel goudbruin: dat geeft de jus een ronde smaak', 'gele ui'] },
    'hutspot-rookworst': { ui: ['gele ui', 'Hij kookt mee en wordt zoet in de stamppot', 'witte ui'] },
    erwtensoep: { ui: ['gele ui', 'Hij kookt uren mee in de soep en valt helemaal weg', 'witte ui'] },
    draadjesvlees: { ui: ['gele ui', 'Hij stooft uren mee en maakt de saus zoet', 'rode ui', 'sjalot'] },
    currywurst: { ui: ['gele ui', 'Gefruit en gepureerd maakt hij de saus zoet en dik', 'witte ui', 'sjalot'] },
    kartoffelsalat: { ui: ['gele ui', 'Even meegekookt in de bouillon verliest hij zijn scherpte', 'sjalot', 'rode ui'] },
    'shepherds-pie': { ui: ['gele ui', 'Hij stooft mee in de gehaktsaus', 'witte ui', 'sjalot'] },
    'paprikas-csirke': { ui: ['gele ui', 'Hongaarse paprikagerechten beginnen met veel zacht gefruite ui: die bindt de saus', 'witte ui'] },
    gulyasleves: { ui: ['gele ui', 'Goudgeel gefruit is hij de basis van elke goulash', 'witte ui'] },
    'hongaarse-goulash': { ui: ['gele ui', 'Goudbruin gebakken is hij de basis van goulash', 'witte ui'] },
    'toltott-paprika': { ui: ['gele ui', 'Rauw in het gehakt gaart hij mee, en in de tomatensaus wordt hij zoet', 'witte ui'] },
    'rakott-krumpli': { ui: ['gele ui', 'Hij bakt zacht en zoet in het worstvet', 'rode ui', 'sjalot'] },

    /* Amerika en Mexico */
    'huevos-rancheros': { ui: ['witte ui', 'In Mexico de gewone ui: fris en knapperig, ook in een gebakken salsa', 'gele ui', 'rode ui'] },
    tacos: {
      ui: ['gele ui', 'Hij gaat mee in het gekruide gehakt', 'witte ui'],
      'witte ui': ['witte ui', 'Rauw met koriander is dit de klassieke topping: fris en knapperig', 'rode ui']
    },
    enchiladas: { ui: ['gele ui', 'Glazig gefruit valt hij weg in de saus', 'witte ui', 'rode ui'] },
    'guisado-carne-molida': { ui: ['witte ui', 'De helft gaat rauw in de saus: een witte ui is daar frisser en minder zoet dan een gele', 'gele ui'] },
    'salsa-fresca': { ui: ['witte ui', 'Rauw is een witte ui knapperig en fris: de klassieke keuze voor deze salsa', 'rode ui', 'sjalot'] },
    'chili-con-carne': { ui: ['gele ui', 'Hij stooft mee en maakt de chili zoet', 'witte ui', 'rode ui'] },
    'kip-fajitas': { 'rode ui': ['rode ui', 'De partjes worden zoet in de pan en blijven mooi van kleur', 'gele ui', 'witte ui'] },
    barbecuesaus: { ui: ['gele ui', 'Zacht gefruit maakt hij de saus zoet', 'witte ui', 'sjalot'] },
    'smash-burgers': { ui: ['rode ui', 'Hij gaat rauw op de burger: milder en knapperig', 'witte ui', 'gele ui'] },
    'pulled-pork': { ui: ['gele ui', 'Hij ligt onderin, stooft zacht en maakt het vocht zoet', 'rode ui'] },

    /* Suriname, Indonesië */
    'roti-kip': { ui: ['gele ui', 'Hij wordt zacht en zoet in de masala', 'rode ui', 'sjalot'] },
    'saoto-soep': { ui: ['sjalot', 'De basis van de boemboe: zoeter en minder waterig dan een gewone ui', 'gele ui'] },
    pom: { ui: ['gele ui', 'Zacht en lichtbruin gebakken maakt hij de vulling zoet en sappig', 'witte ui'] },
    'surinaamse-pastei': { ui: ['gele ui', 'Hij fruit zoet in de vulling', 'witte ui', 'sjalot'] },
    pindasaus: { ui: ['sjalot', 'Zoeter en fijner dan een ui en hij valt helemaal weg in de saus; zo maken ze het in Indonesië', 'gele ui'] },
    'nasi-goreng': { ui: ['sjalot', 'Zoals in Indonesië: zoeter, hij kleurt sneller en wordt niet waterig in de rijst', 'gele ui'] },
    'bami-goreng': { ui: ['sjalot', 'Zoals in Indonesië: zoeter, en hij kleurt snel in de hete wok', 'gele ui'] },
    'ajam-pedis': { ui: ['sjalot', 'In de Indonesische boemboe is sjalot zoeter en voller dan ui', 'gele ui'] },
    'babi-ketjap': { ui: ['gele ui', 'Halve ringen die zacht meestoven in de ketjapsaus', 'sjalot'] },
    rendang: { sjalot: ['sjalot', 'De basis van de boemboe: sjalot geeft zoetheid en bindt de saus', 'gele ui'] },
    'sajoer-lodeh': { sjalot: ['sjalot', 'Fijngemalen geeft hij de kokossoep een zoete basis', 'gele ui'] },

    /* Azië */
    'pho-bo': { ui: ['gele ui', 'Met schil zwart geblakerd geeft hij de bouillon een diepe, zoete smaak en kleur', 'sjalot'] },
    'massaman-curry': { ui: ['gele ui', 'De partjes stoven mee en worden zacht en zoet', 'witte ui', 'sjalot'] },
    'kip-cashew': { ui: ['gele ui', 'In partjes geroerbakt blijft hij knapperig en wordt hij zoet aan de randjes', 'witte ui', 'rode ui'] },
    'bo-luc-lac': { 'rode ui': ['rode ui', 'Snel ingelegd in azijn en suiker wordt hij mild, knapperig en roze', 'sjalot', 'witte ui'] },
    'foe-yong-hai': { ui: ['gele ui', 'Hij bakt kort en blijft een beetje knapperig in de omelet', 'witte ui', 'lente-ui'] },
    'tjap-tjoy': { ui: ['gele ui', 'De partjes blijven knapperig in de wok', 'witte ui'] },
    'babi-pangang': { ui: ['gele ui', 'Gefruit wordt hij zoet in de saus', 'witte ui'] },
    'zoetzure-kip': { ui: ['gele ui', 'De partjes blijven knapperig en vallen niet uit elkaar in de wok', 'witte ui', 'rode ui'] },
    bulgogi: { ui: ['gele ui', 'Gemarineerd en meegegrild wordt hij zoet en glazig', 'witte ui'] },
    'kimchi-fried-rice': { ui: ['gele ui', 'Hij roerbakt zoet tegen de zure kimchi', 'witte ui'] },
    japchae: { ui: ['gele ui', 'Dunne halve ringen die zoet worden in de wok', 'witte ui'] },
    'kimchi-jjigae': { ui: ['gele ui', 'Hij kookt zacht en zoet in de pittige soep', 'witte ui'] },
    yakisoba: { ui: ['gele ui', 'Hij roerbakt zacht en zoet tussen de kool en de noedels', 'witte ui'] },
    'chicken-katsu': { ui: ['gele ui', 'Japanse kerriesaus begint met zacht gefruite ui: zoet en rond', 'witte ui'] },

    /* Indiaas: in India is de rode ui de gewone ui. */
    'butter-chicken': { ui: ['gele ui', 'Zacht gefruit en gepureerd in de romige saus', 'rode ui', 'witte ui'] },
    'chana-masala': { ui: ['rode ui', 'In India de gewone ui: 10 minuten goudbruin bakken geeft de masala zijn smaak', 'gele ui'] },
    dal: { ui: ['gele ui', 'Hij kookt mee met de linzen en valt weg', 'rode ui'] },
    'curry-madras': { ui: ['rode ui', 'In India de gewone ui: goudbruin gebakken geeft hij de saus diepte', 'gele ui'] },
    'chicken-tikka-masala': { ui: ['gele ui', 'Hij bakt zacht met de paprika en wordt zoet', 'rode ui'] },
    'kip-korma': { ui: ['gele ui', 'Zacht gesmoord zonder kleur, zodat de saus licht en romig blijft', 'witte ui'] },
    'kip-biryani': { ui: ['gele ui', 'Hij bakt gelijkmatig krokant, en de olie die overblijft is lekker voor de rijst', 'rode ui'] },
    'saag-paneer': { ui: ['gele ui', 'Hij fruit zacht in de boter', 'rode ui'] },
    'tandoori-kip': { 'rode ui': ['rode ui', 'Rauw bij de kip, zoals in Indiase restaurants: mild en knapperig', 'witte ui'] },
    'aloo-gobi': { ui: ['rode ui', 'In India de gewone ui: hij bakt in tot een dikke masala', 'gele ui'] }
  }
};
