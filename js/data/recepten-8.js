/* Indonesisch / Indisch (extra) */
RECEPTEN.push(
{
  id: 'rendang', naam: 'Rendang', keuken: 'Indonesisch', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '3 uur stoven', pers: 4, niveau: 'Gemiddeld', vega: false, pit: 2,
  intro: 'Rundvlees dat uren stooft in kokosmelk en kruiden tot het donker, droog en ongelooflijk mals is.',
  methodes: [ { id: 'braadpan', naam: 'Braadpan' }, { id: 'oven', naam: 'Oven' }, { id: 'slowcooker', naam: 'Slowcooker' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan (24 à 26 cm) met dikke bodem' },
    { tool: 'staafmixer', tekst: 'Staafmixer of hakmolen voor de boemboe', of: 'Geen staafmixer? Gebruik 3 el kant-en-klare boemboe rendang en sla stap 1 over.' },
    { tool: 'slowcooker', tekst: 'Slowcooker', m: 'slowcooker' }
  ],
  ingr: [
    { n: 'runderlappen', q: 800, u: 'g', x: 'sukade of riblap, in blokken van 4 cm' },
    { n: 'kokosmelk', q: 400, u: 'ml' },
    { kop: 'Boemboe (kruidenpasta)' },
    { n: 'sjalot', p: 'sjalotten', q: 6, u: 'st' },
    { n: 'knoflook', q: 4, u: 'teen' },
    { n: 'rode peper', p: 'rode pepers', q: 4, u: 'st', x: 'zonder zaadjes voor minder pit' },
    { n: 'gember', q: 25, u: 'g' },
    { n: 'laos', q: 2, u: 'tl', x: 'gemalen, of 25 g vers' },
    { n: 'kurkuma', q: 1, u: 'tl' },
    { n: 'ketoembar', q: 2, u: 'tl' },
    { n: 'djinten', q: 1, u: 'tl', x: 'gemalen komijn' },
    { kop: 'Verder' },
    { n: 'citroengras', q: 2, u: 'stengel', x: 'gekneusd' },
    { n: 'djeroekbladeren', q: 4, u: 'st', x: 'kaffirlimoenblad' },
    { n: 'salamblad', q: 2, u: 'st', opt: true, x: 'of laurier' },
    { n: 'gula djawa', q: 1, u: 'el', x: 'of bruine suiker' },
    { n: 'asem', q: 1, u: 'el', x: 'tamarinde, of 1 el citroensap' },
    { n: 'geraspte kokos', q: 50, u: 'g', x: 'droog geroosterd' },
    { n: 'zonnebloemolie', q: 3, u: 'el' }
  ],
  stappen: [
    { t: 'Pureer alle ingrediënten voor de boemboe met 2 el olie tot een gladde pasta.' },
    { t: 'Rooster de geraspte kokos in de droge Dutch oven op middelhoog vuur 3 minuten goudbruin. Schep uit de pan.', min: 3 },
    { t: 'Bak de boemboe in de rest van de olie 5 minuten op middelhoog vuur tot hij geurt en de olie zich afscheidt.', min: 5 },
    { t: 'Voeg het vlees, citroengras, djeroek- en salamblad toe en bak 3 minuten. Giet de kokosmelk erbij met gula djawa, asem, de geroosterde kokos en een theelepel zout.', min: 3 },
    { t: 'Laat zonder deksel heel zachtjes 2½ à 3 uur stoven. Roer elk kwartier: het vocht kookt langzaam in tot een dikke, donkere saus. Het laatste half uur vaker roeren, dan brandt het niet aan.', m: 'braadpan', min: 180 },
    { t: 'Zet de pan zonder deksel 3 uur in een voorverwarmde oven op 150 °C. Roer elk half uur. Gietijzer is hier ideaal: niets brandt aan.', m: 'oven', min: 180 },
    { t: 'Doe alles over in de slowcooker en gaar 8 uur op LOW. Doe het daarna terug in de pan en laat 20 minuten zonder deksel inkoken tot de saus droog en donker is.', m: 'slowcooker', min: 480 },
    { t: 'Vis citroengras en bladeren eruit. Breng op smaak met zout. Serveer met witte rijst, atjar en sambal.' }
  ],
  tips: ['Rendang is na een nacht in de koelkast nog lekkerder.', 'De kruiden (laos, djeroekblad, salamblad, gula djawa) vind je bij de toko.'],
  alt: ['Minder tijd? Gebruik 800 g kippendijen en stoof 45 minuten. Dat heet rendang ajam.']
},
{
  id: 'babi-ketjap', naam: 'Babi ketjap', gerecht: 'Babi of ajam ketjap', variant: 'Varkensvlees', ook: ['babi kecap', 'ketjapvlees'], keuken: 'Indonesisch', soort: 'Hoofdgerecht',
  tijd: 20, wacht: '1½ uur stoven', pers: 4, niveau: 'Makkelijk', vega: false, pit: 1,
  intro: 'Zoet-zout gestoofd varkensvlees in ketjap, gember en knoflook. Indisch comfort food.',
  methodes: [ { id: 'braadpan', naam: 'Braadpan' }, { id: 'oven', naam: 'Oven' }, { id: 'slowcooker', naam: 'Slowcooker' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan (24 cm) met deksel' },
    { tool: 'slowcooker', tekst: 'Slowcooker', m: 'slowcooker' }
  ],
  ingr: [
    { n: 'varkensvlees', q: 800, u: 'g', x: 'procureur of speklappen, in blokjes van 3 cm' },
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'in halve ringen' },
    { n: 'knoflook', q: 4, u: 'teen' },
    { n: 'gember', q: 30, u: 'g', x: 'in dunne reepjes' },
    { n: 'ketjap manis', q: 6, u: 'el' },
    { n: 'sojasaus', q: 2, u: 'el' },
    { n: 'gula djawa', q: 1, u: 'el', x: 'of bruine suiker' },
    { n: 'sambal oelek', q: 1, u: 'tl' },
    { n: 'tomatenpuree', q: 1, u: 'el' },
    { n: 'water', q: 300, u: 'ml' },
    { n: 'zonnebloemolie', q: 2, u: 'el' }
  ],
  stappen: [
    { t: 'Bak het vlees in de olie in de Dutch oven op hoog vuur in 2 porties rondom bruin. Schep uit de pan.', min: 8 },
    { t: 'Bak ui, knoflook en gember 5 minuten op middelhoog vuur. Bak tomatenpuree en sambal 1 minuut mee.', min: 6 },
    { t: 'Doe het vlees terug met ketjap, sojasaus, gula djawa en water. Breng aan de kook.' },
    { t: 'Deksel erop en laat 1½ uur zachtjes stoven. Haal de laatste 15 minuten de deksel eraf om de saus te laten indikken.', m: 'braadpan', min: 90 },
    { t: 'Zet de pan met deksel 1¾ uur in een voorverwarmde oven op 160 °C. De laatste 20 minuten zonder deksel.', m: 'oven', min: 105 },
    { t: 'Doe alles in de slowcooker met 150 ml water. Gaar 7 uur op LOW. Kook de saus daarna eventueel in de pan in.', m: 'slowcooker', min: 420 },
    { t: 'Breng op smaak met extra ketjap of sambal. Serveer met rijst en kroepoek.' }
  ],
  tips: ['Een paar hardgekookte eieren de laatste 20 minuten meestoven: dat is telor ketjap.'],
  alt: []
},
{
  id: 'ajam-ketjap', variantVan: 'babi-ketjap', variant: 'Kip', naam: 'Ajam ketjap', ook: ['ajam kecap', 'kip ketjap', 'kip in ketjap'],
  wacht: '40 min stoven',
  intro: 'Zoet-zout gestoofde kippendijen in ketjap, gember en knoflook. Sneller klaar dan babi ketjap en net zo Indisch.',
  vervang: {
    varkensvlees: { n: 'kippendijen', q: 1000, u: 'g', x: 'met bot en vel; of 700 g kippendijfilet in grote stukken' }
  },
  stappen: [
    { t: 'Bestrooi de kip met zout. Bak hem in de olie in de Dutch oven op middelhoog vuur, met het vel naar beneden, in 2 porties 5 minuten tot het vel goudbruin is. Schep uit de pan.', min: 10 },
    { t: 'Bak ui, knoflook en gember 5 minuten op middelhoog vuur. Bak tomatenpuree en sambal 1 minuut mee.', min: 6 },
    { t: 'Doe de kip terug met ketjap, sojasaus, gula djawa en water. Breng aan de kook.' },
    { t: 'Deksel erop en laat 30 minuten zachtjes stoven. Haal dan de deksel eraf en laat de saus in 10 minuten indikken. Kippendijfilet is na 20 minuten al gaar.', m: 'braadpan', min: 40 },
    { t: 'Zet de pan met deksel 40 minuten in een voorverwarmde oven op 180 °C. De laatste 15 minuten zonder deksel.', m: 'oven', min: 40 },
    { t: 'Doe alles in de slowcooker met 150 ml water. Gaar 4 uur op LOW. Kook de saus daarna eventueel in de pan in.', m: 'slowcooker', min: 240 },
    { t: 'Breng op smaak met extra ketjap of sambal. Serveer met rijst en kroepoek.' }
  ]
},
{
  id: 'gado-gado', naam: 'Gado-gado', keuken: 'Indonesisch', soort: 'Salade & bijgerecht',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: true, pit: 1,
  intro: 'Kleurrijke schotel van gekookte groenten, ei, tahoe en een warme, romige pindasaus.',
  gerei: [
    { tool: 'kookpan', tekst: 'Kookpan om de groenten te blancheren' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de tahoe' },
    { tool: 'kookpan', tekst: 'Steelpan voor de pindasaus' }
  ],
  ingr: [
    { n: 'vastkokende aardappelen', q: 400, u: 'g', x: 'in plakken' },
    { n: 'sperziebonen', q: 200, u: 'g' },
    { n: 'witte kool', q: 200, u: 'g', x: 'in reepjes' },
    { n: 'taugé', q: 200, u: 'g' },
    { n: 'komkommer', p: 'komkommers', q: 0.5, u: 'st' },
    { n: 'ei', p: 'eieren', q: 4, u: 'st', x: 'hardgekookt' },
    { n: 'tahoe', q: 200, u: 'g', x: 'stevig, in blokjes' },
    { n: 'gebakken uitjes', q: 3, u: 'el' },
    { n: 'kroepoek', q: 1, u: 'zakje', opt: true },
    { kop: 'Pindasaus' },
    { n: 'pindakaas', q: 200, u: 'g' },
    { n: 'kokosmelk', q: 200, u: 'ml' },
    { n: 'ketjap manis', q: 2, u: 'el' },
    { n: 'sambal oelek', q: 1, u: 'tl' },
    { n: 'knoflook', q: 1, u: 'teen' },
    { n: 'limoen', p: 'limoenen', q: 0.5, u: 'st', x: 'sap' }
  ],
  stappen: [
    { t: 'Kook de aardappelplakken 10 minuten gaar in water met zout. Schep ze eruit.', min: 10 },
    { t: 'Kook in hetzelfde water de sperziebonen 5 minuten en de kool 2 minuten. Overgiet de taugé met kokend water. Laat alles uitlekken.', min: 7 },
    { t: 'Bak de tahoe in een scheut olie 6 minuten rondom goudbruin.', min: 6 },
    { t: 'Verwarm alle ingrediënten voor de pindasaus op laag vuur tot een gladde saus. Maak hem lopend met wat water.', min: 4 },
    { t: 'Leg de groenten, komkommer, tahoe en gehalveerde eieren op een grote schaal. Schenk de warme saus erover en bestrooi met gebakken uitjes. Serveer met kroepoek.' }
  ],
  tips: ['Gado-gado betekent zoiets als "mengelmoes": gebruik gerust de groenten die je hebt.'],
  alt: ['Vegan? Laat de eieren weg; de rest is al plantaardig.']
},
{
  id: 'bami-goreng', naam: 'Bami goreng', keuken: 'Indonesisch', soort: 'Hoofdgerecht',
  tijd: 30, pers: 4, niveau: 'Makkelijk', vega: false, pit: 1,
  intro: 'Gebakken mie met kip, groenten en ketjap. Snel klaar en een favoriet van jong en oud.',
  gerei: [
    { tool: 'wok', tekst: 'Wok (32 cm) voor hoog vuur', of: 'Geen wok? Gebruik de grootste pan die je hebt en bak in 2 porties.' },
    { tool: 'kookpan', tekst: 'Kookpan voor de mie' }
  ],
  ingr: [
    { n: 'mie', q: 250, u: 'g', x: 'Chinese eiermie' },
    { n: 'kipfilet', q: 300, u: 'g', x: 'in reepjes' },
    { n: 'witte kool', q: 250, u: 'g', x: 'in reepjes, of Chinese kool' },
    { n: 'prei', p: 'preien', q: 1, u: 'st', x: 'in ringen' },
    { n: 'wortel', p: 'wortels', q: 2, u: 'st', x: 'in reepjes' },
    { n: 'taugé', q: 200, u: 'g' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'bamikruiden', q: 1, u: 'zakje', x: 'of 1 tl ketoembar, ½ tl djinten, ½ tl laos' },
    { n: 'ketjap manis', q: 4, u: 'el' },
    { n: 'sojasaus', q: 1, u: 'el' },
    { n: 'sambal oelek', q: 1, u: 'tl' },
    { n: 'zonnebloemolie', q: 3, u: 'el' }
  ],
  stappen: [
    { t: 'Kook de mie volgens de verpakking, spoel af met koud water en laat goed uitlekken.', min: 4 },
    { t: 'Verhit 1 el olie in de wok op hoog vuur. Bak de kip 4 minuten gaar en schep uit de pan.', min: 4 },
    { t: 'Bak ui, knoflook, bamikruiden en sambal 1 minuut in de rest van de olie.' },
    { t: 'Voeg wortel, kool en prei toe en roerbak 4 minuten: ze moeten nog knapperig zijn.', min: 4 },
    { t: 'Doe de mie, kip en taugé erbij met ketjap en sojasaus. Schep 2 à 3 minuten om op hoog vuur tot alles heet is.', min: 3 },
    { t: 'Serveer met kroepoek, atjar en eventueel een gebakken ei.' }
  ],
  tips: ['Goed droge mie bakt beter. Schep er na het afgieten een drupje olie door, dan plakt hij niet.'],
  alt: ['Vegetarisch? Vervang de kip door tempeh of extra groenten en gebruik vegetarische bamikruiden.']
},
{
  id: 'sajoer-lodeh', naam: 'Sajoer lodeh', ook: ['sayur lodeh'], keuken: 'Indonesisch', soort: 'Soep',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: true, pit: 1,
  intro: 'Milde groentestoof in gekruide kokosbouillon. Lekker als soep of met rijst.',
  gerei: [ { tool: 'kookpan', tekst: 'Soeppan of Dutch oven (3 à 4 liter)' } ],
  ingr: [
    { n: 'kokosmelk', q: 400, u: 'ml' },
    { n: 'groentebouillon', q: 500, u: 'ml' },
    { n: 'sperziebonen', q: 200, u: 'g', x: 'in stukjes' },
    { n: 'witte kool', q: 200, u: 'g', x: 'in reepjes' },
    { n: 'courgette', p: 'courgettes', q: 1, u: 'st', x: 'in blokjes' },
    { n: 'wortel', p: 'wortels', q: 1, u: 'st', x: 'in plakjes' },
    { n: 'tempeh', q: 150, u: 'g', x: 'in blokjes', opt: true },
    { n: 'sjalot', p: 'sjalotten', q: 3, u: 'st' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'rode peper', p: 'rode pepers', q: 1, u: 'st' },
    { n: 'laos', q: 1, u: 'tl' },
    { n: 'kurkuma', q: 0.5, u: 'tl' },
    { n: 'ketoembar', q: 1, u: 'tl' },
    { n: 'djeroekbladeren', q: 2, u: 'st' },
    { n: 'zonnebloemolie', q: 2, u: 'el' }
  ],
  stappen: [
    { t: 'Snipper sjalot, knoflook en peper heel fijn of pureer ze. Bak ze 3 minuten in de olie met laos, kurkuma en ketoembar.', min: 3 },
    { t: 'Bak de tempeh 3 minuten mee.', min: 3 },
    { t: 'Voeg bouillon, kokosmelk en djeroekbladeren toe en breng aan de kook.' },
    { t: 'Doe wortel en sperziebonen erin en kook 6 minuten. Voeg kool en courgette toe en kook nog 5 minuten.', min: 11 },
    { t: 'Breng op smaak met zout en eventueel een snuf suiker. Serveer met rijst en sambal.' }
  ],
  tips: ['Laat het niet hard koken; de kokosmelk kan dan schiften.'],
  alt: ['Liever met vlees? Kook 300 g kipfilet in reepjes mee.']
},
{
  id: 'ajam-pedis', naam: 'Ajam pedis', ook: ['pittige kip'], keuken: 'Indonesisch', soort: 'Hoofdgerecht',
  tijd: 40, pers: 4, niveau: 'Makkelijk', vega: false, pit: 3,
  intro: 'Pittige kip in een rode saus van tomaat, sambal en ketjap. "Pedis" betekent scherp.',
  gerei: [
    { tool: 'hapjespan', tekst: 'Hapjespan of braadpan met deksel' }
  ],
  ingr: [
    { n: 'kippendijfilet', q: 600, u: 'g', x: 'in stukken' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'knoflook', q: 3, u: 'teen' },
    { n: 'gember', q: 15, u: 'g' },
    { n: 'sambal oelek', q: 2, u: 'el', x: 'minder voor milder' },
    { n: 'tomatenpuree', q: 2, u: 'el' },
    { n: 'tomaat', p: 'tomaten', q: 2, u: 'st', x: 'in blokjes', of: { q: 200, u: 'g', n: 'tomatenblokjes uit blik' } },
    { n: 'ketjap manis', q: 3, u: 'el' },
    { n: 'laos', q: 1, u: 'tl' },
    { n: 'djeroekbladeren', q: 2, u: 'st' },
    { n: 'citroen', p: 'citroenen', q: 0.5, u: 'st', x: 'sap' },
    { n: 'zonnebloemolie', q: 2, u: 'el' }
  ],
  stappen: [
    { t: 'Bestrooi de kip met zout en bak hem in de olie in 6 minuten rondom bruin. Schep uit de pan.', min: 6 },
    { t: 'Bak ui, knoflook en gember 4 minuten. Voeg sambal, tomatenpuree en laos toe en bak 1 minuut.', min: 5 },
    { t: 'Doe de kip terug met de tomaat, ketjap, djeroekbladeren en 150 ml water.' },
    { t: 'Laat met de deksel erop 20 minuten zachtjes stoven, daarna 5 minuten zonder deksel tot de saus dik is.', min: 25 },
    { t: 'Breng op smaak met citroensap en zout. Serveer met rijst en komkommer om te verkoelen.' }
  ],
  tips: ['Komkommer in plakjes en een gebakken ei maken de scherpte zachter.'],
  alt: ['Geen djeroekbladeren? Gebruik de geraspte schil van een halve limoen.']
},
{
  id: 'perkedel-djagung', naam: 'Perkedel djagung', ook: ['maiskoekjes', 'bakwan jagung'], keuken: 'Indonesisch', soort: 'Salade & bijgerecht',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Krokante maïskoekjes met lente-ui en selderij. Een heerlijke snack of bijgerecht bij de rijsttafel.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan met een laagje olie van een halve centimeter', m: 'koekenpan' },
    { tool: 'airfryer', tekst: 'Airfryer met bakpapier', m: 'airfryer' }
  ],
  ingr: [
    { n: 'mais', q: 300, u: 'g', x: 'uit blik, goed uitgelekt' },
    { n: 'bloem', q: 60, u: 'g' },
    { n: 'rijstebloem', q: 2, u: 'el', opt: true, x: 'maakt ze extra krokant' },
    { n: 'ei', p: 'eieren', q: 1, u: 'st' },
    { n: 'lente-ui', p: 'lente-uien', q: 2, u: 'st', x: 'fijngesneden' },
    { n: 'verse selderij', q: 2, u: 'el', x: 'blad, fijngehakt' },
    { n: 'knoflook', q: 1, u: 'teen' },
    { n: 'ketoembar', q: 1, u: 'tl' },
    { n: 'zonnebloemolie', q: 100, u: 'ml', x: 'voor de koekenpan' }
  ],
  stappen: [
    { t: 'Prak de helft van de mais grof. Meng met de rest van de mais, bloem, ei, lente-ui, selderij, knoflook, ketoembar en een halve theelepel zout tot een dik beslag.' },
    { t: 'Verhit de olie in de koekenpan op middelhoog vuur. Schep er per koekje een eetlepel beslag in en druk het iets plat. Bak 2 à 3 minuten per kant goudbruin. Laat uitlekken op keukenpapier.', m: 'koekenpan', min: 6 },
    { t: 'Schep het beslag in hoopjes op bakpapier in de mand, druk plat en besprenkel met olie. Bak 10 à 12 minuten op 190 °C. Keer halverwege.', m: 'airfryer', min: 11 },
    { t: 'Serveer warm met zoete chilisaus of ketjap met gesneden pepertjes.' }
  ],
  tips: ['Het beslag moet dik zijn. Te nat? Voeg een lepel bloem toe.'],
  alt: ['Bevroren mais werkt ook: laat hem eerst ontdooien en dep hem droog.']
}
);
