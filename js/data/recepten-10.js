/* Surinaams, Turks, Vietnamees, Marokkaans, Brits */
RECEPTEN.push(
{
  id: 'roti-kip', naam: 'Roti met kip kerrie', keuken: 'Surinaams', soort: 'Hoofdgerecht',
  tijd: 30, wacht: '45 min stoven', pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Surinaamse kip kerrie met aardappel, kousenband en een gekookt ei, gewikkeld in een zachte roti.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of braadpan (24 à 26 cm) met deksel voor de kip' },
    { tool: 'koekenpan', tekst: 'Koekenpan voor de kousenband en om de roti op te warmen' },
    { tool: 'kookpan', tekst: 'Kookpan voor de eieren' }
  ],
  ingr: [
    { n: 'kippenpoten', q: 1000, u: 'g', x: 'in stukken, of 600 g kippendij' },
    { n: 'masala', q: 3, u: 'el', x: 'Surinaamse masala (toko) of milde kerrie' },
    { n: 'ui', p: 'uien', q: 2, u: 'st' },
    { n: 'knoflook', q: 4, u: 'teen' },
    { n: 'madame jeanette', p: 'madame jeanettes', q: 1, u: 'st', x: 'heel, of 1 tl sambal' },
    { n: 'tomatenpuree', q: 1, u: 'el' },
    { n: 'vastkokende aardappelen', q: 600, u: 'g', x: 'geschild, gehalveerd' },
    { n: 'kippenbouillon', q: 500, u: 'ml' },
    { n: 'ei', p: 'eieren', q: 4, u: 'st' },
    { n: 'kousenband', q: 400, u: 'g', x: 'in stukken van 4 cm, of sperziebonen' },
    { n: 'rotivellen', q: 4, u: 'st', x: 'kant-en-klaar uit de toko of supermarkt' },
    { n: 'zonnebloemolie', q: 3, u: 'el' }
  ],
  stappen: [
    { t: 'Meng de kip met 2 el masala, zout en een geperste teen knoflook. Laat 15 minuten staan.', min: 15 },
    { t: 'Verhit 2 el olie in de Dutch oven en bak de rest van de masala 1 minuut. Bak de ui en de rest van de knoflook 5 minuten.', min: 6 },
    { t: 'Voeg de kip toe en bak 5 minuten rondom. Roer de tomatenpuree erdoor.', min: 5 },
    { t: 'Voeg aardappelen, bouillon en de hele madame jeanette toe. Laat met de deksel erop 40 à 45 minuten zachtjes stoven. De aardappels mogen een beetje uit elkaar vallen; dat bindt de saus.', min: 45 },
    { t: 'Kook de eieren 9 minuten hard, pel ze en leg ze de laatste 10 minuten in de kerrie.', min: 9 },
    { t: 'Bak de kousenband 6 minuten in 1 el olie met knoflook, zout en peper.', min: 6 },
    { t: 'Haal de madame jeanette eruit voordat hij openbarst. Verwarm de roti 30 seconden per kant in een droge koekenpan. Serveer met kip, aardappel, ei en kousenband.' }
  ],
  tips: ['Een madame jeanette is heel heet. Prik er met een vork gaatjes in als je het pittiger wilt.'],
  alt: ['Geen roti? Eet de kip kerrie met rijst; dat heet dan rijst met kip.']
},
{
  id: 'bakabana', naam: 'Bakabana met pindasaus', ook: ['gebakken banaan', 'bananenbeignets'], keuken: 'Surinaams', soort: 'Salade & bijgerecht',
  tijd: 25, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Plakken rijpe bakbanaan in een krokant beslag, met warme pindasaus. De favoriete Surinaamse snack.',
  methodes: [ { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'koekenpan', tekst: 'Koekenpan met hoge rand en 1 cm olie', m: 'koekenpan' },
    { tool: 'airfryer', tekst: 'Airfryer met bakpapier', m: 'airfryer' },
    { tool: 'kookpan', tekst: 'Steelpan voor de pindasaus' }
  ],
  ingr: [
    { n: 'bakbanaan', p: 'bakbananen', q: 2, u: 'st', x: 'rijp: geel met zwarte vlekken' },
    { n: 'bloem', q: 125, u: 'g' },
    { n: 'suiker', q: 1, u: 'el' },
    { n: 'bakpoeder', q: 1, u: 'tl' },
    { n: 'zout', q: 1, u: 'snuf' },
    { n: 'water', q: 150, u: 'ml', x: 'koud' },
    { n: 'zonnebloemolie', q: 250, u: 'ml', x: 'voor de koekenpan; 1 el voor de airfryer' },
    { kop: 'Pindasaus' },
    { n: 'pindakaas', q: 125, u: 'g' },
    { n: 'kokosmelk', q: 100, u: 'ml', x: 'of water' },
    { n: 'ketjap manis', q: 1, u: 'el' },
    { n: 'sambal oelek', q: 0.5, u: 'tl' }
  ],
  stappen: [
    { t: 'Klop bloem, suiker, bakpoeder, zout en water tot een glad, dik beslag.' },
    { t: 'Schil de bakbananen en snijd ze schuin in lange plakken van 1 cm.' },
    { t: 'Verhit de olie tot 175 °C (een druppel beslag sist meteen). Haal de plakken door het beslag en bak ze in porties 2 à 3 minuten per kant goudbruin. Laat uitlekken op keukenpapier.', m: 'koekenpan', min: 6 },
    { t: 'Haal de plakken door het beslag, leg ze op bakpapier in de mand en besproei met olie. Bak 10 à 12 minuten op 190 °C. Keer halverwege. Ze worden minder bol dan gefrituurd.', m: 'airfryer', min: 11 },
    { t: 'Verwarm de ingrediënten voor de pindasaus op laag vuur en roer tot hij glad is.', min: 3 },
    { t: 'Serveer de bakabana warm met de pindasaus.' }
  ],
  tips: ['Hoe rijper de bakbanaan, hoe zoeter. Groene bakbananen zijn te zetmeelrijk.'],
  alt: ['Geen bakbanaan? Gewone, stevige bananen werken ook, maar zijn zachter.']
},
{
  id: 'linzensoep-mercimek', naam: 'Turkse linzensoep', ook: ['mercimek', 'mercimek çorbası'], keuken: 'Turks', soort: 'Soep',
  tijd: 35, pers: 4, niveau: 'Makkelijk', vega: true,
  intro: 'Fluweelzachte soep van rode linzen (mercimek çorbası) met paprikaboter en citroen.',
  gerei: [
    { tool: 'kookpan', tekst: 'Soeppan of Dutch oven (3 liter)' },
    { tool: 'staafmixer', tekst: 'Staafmixer', of: 'Geen staafmixer? Kook de soep 10 minuten langer en klop hem met een garde; de linzen vallen vanzelf uit elkaar.' },
    { tool: 'koekenpan', tekst: 'Klein pannetje voor de paprikaboter' }
  ],
  ingr: [
    { n: 'rode linzen', q: 250, u: 'g', x: 'gewassen' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'wortel', p: 'wortels', q: 1, u: 'st' },
    { n: 'aardappel', p: 'aardappelen', q: 1, u: 'st', x: 'kruimig' },
    { n: 'tomatenpuree', q: 1, u: 'el' },
    { n: 'komijn', q: 1, u: 'tl' },
    { n: 'groentebouillon', q: 1200, u: 'ml' },
    { n: 'olijfolie', q: 2, u: 'el' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st', x: 'in partjes' },
    { kop: 'Paprikaboter' },
    { n: 'boter', q: 30, u: 'g' },
    { n: 'paprikapoeder', q: 1, u: 'tl' },
    { n: 'pul biber', q: 0.5, u: 'tl', x: 'Turkse chilivlokken, of gewone' },
    { n: 'gedroogde munt', q: 1, u: 'tl' }
  ],
  stappen: [
    { t: 'Bak ui, wortel en aardappel in kleine blokjes 6 minuten in de olie. Bak tomatenpuree en komijn 1 minuut mee.', min: 7 },
    { t: 'Voeg de linzen en de bouillon toe. Breng aan de kook en laat 20 minuten zachtjes koken tot alles zacht is.', min: 20 },
    { t: 'Pureer de soep glad. Breng op smaak met zout. Te dik? Voeg wat water toe.' },
    { t: 'Smelt de boter in het pannetje. Haal van het vuur en roer paprika, pul biber en munt erdoor.' },
    { t: 'Schep de soep in kommen, sprenkel de paprikaboter erover en knijp er flink citroen boven uit.' }
  ],
  tips: ['De citroen is niet optioneel: die maakt de soep af.'],
  alt: ['Vegan? Gebruik olijfolie in plaats van boter voor de paprikaolie.']
},
{
  id: 'kofte', naam: 'Köfte met yoghurtsaus', ook: ['turkse gehaktballetjes'], keuken: 'Turks', soort: 'Hoofdgerecht',
  tijd: 30, pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Gekruide gehaktrolletjes met peterselie en komijn, met knoflookyoghurt en geroosterde paprika.',
  methodes: [ { id: 'contactgrill', naam: 'Contactgrill' }, { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'grillpan', naam: 'Grillpan' } ],
  gerei: [
    { tool: 'contactgrill', tekst: 'Contactgrill', m: 'contactgrill' },
    { tool: 'koekenpan', tekst: 'Grote koekenpan (28 cm)', m: 'koekenpan' },
    { tool: 'airfryer', tekst: 'Airfryer', m: 'airfryer' },
    { tool: 'grillpan', tekst: 'Grillpan of barbecue', m: 'grillpan' }
  ],
  ingr: [
    { n: 'lamsgehakt', q: 500, u: 'g', x: 'of half lam, half rund' },
    { n: 'ui', p: 'uien', q: 1, u: 'st', x: 'geraspt en uitgeknepen' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'verse peterselie', q: 1, u: 'handje', x: 'fijngehakt' },
    { n: 'komijn', q: 1, u: 'tl' },
    { n: 'paprikapoeder', q: 1, u: 'tl' },
    { n: 'pul biber', q: 0.5, u: 'tl', opt: true },
    { n: 'paneermeel', q: 2, u: 'el' },
    { n: 'puntpaprika', p: 'puntpaprika\'s', q: 2, u: 'st' },
    { kop: 'Yoghurtsaus' },
    { n: 'Turkse yoghurt', q: 250, u: 'g' },
    { n: 'knoflook', q: 1, u: 'teen', x: 'geperst' },
    { n: 'gedroogde munt', q: 1, u: 'tl' },
    { kop: 'Serveren' },
    { n: 'Turks brood', q: 1, u: 'st', x: 'of 4 pita\'s' }
  ],
  stappen: [
    { t: 'Kneed gehakt, ui, knoflook, peterselie, specerijen, paneermeel en een theelepel zout 2 minuten tot het plakt. Vorm 12 langwerpige rolletjes. Laat 10 minuten opstijven in de koelkast.', min: 10 },
    { t: 'Leg de köfte en de paprika\'s op de voorverwarmde contactgrill en sluit de deksel. Grill 6 à 7 minuten tot de köfte gaar zijn.', m: 'contactgrill', min: 7 },
    { t: 'Bak de köfte in een scheut olie op middelhoog vuur 8 à 10 minuten rondom bruin en gaar. Bak de paprika\'s ernaast mee tot ze zwarte vlekken hebben.', m: 'koekenpan', min: 9 },
    { t: 'Bak de köfte en paprika\'s 10 à 12 minuten in de airfryer op 200 °C. Schud halverwege.', m: 'airfryer', min: 11 },
    { t: 'Gril de köfte en paprika\'s op een gloeiend hete grillpan 8 à 10 minuten. Keer regelmatig.', m: 'grillpan', min: 9 },
    { t: 'Roer yoghurt, knoflook, munt en een snuf zout door elkaar.' },
    { t: 'Serveer de köfte met de paprika\'s, yoghurtsaus en warm Turks brood.' }
  ],
  tips: ['Uitknijpen van de geraspte ui voorkomt dat de köfte uit elkaar vallen.'],
  alt: ['Geen lamsgehakt? Rundergehakt werkt prima; voeg dan 1 el olijfolie toe aan het gehakt.']
},
{
  id: 'pho-bo', naam: 'Pho bo', ook: ['vietnamese noedelsoep'], keuken: 'Vietnamees', soort: 'Soep',
  tijd: 30, wacht: '2 uur trekken', pers: 4, niveau: 'Gemiddeld', vega: false,
  intro: 'Vietnamese noedelsoep met een heldere, kruidige bouillon van steranijs en kaneel, rijstnoedels en dun rundvlees.',
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of grote soeppan (minimaal 4 liter)' },
    { tool: 'koekenpan', tekst: 'Droge koekenpan om ui, gember en specerijen te roosteren' },
    { tool: 'kookpan', tekst: 'Kookpan voor de noedels' }
  ],
  ingr: [
    { n: 'runderschenkel', q: 800, u: 'g', x: 'met bot, of soepvlees' },
    { n: 'water', q: 2500, u: 'ml' },
    { n: 'runderbouillonblokje', p: 'runderbouillonblokjes', q: 2, u: 'st' },
    { n: 'ui', p: 'uien', q: 2, u: 'st', x: 'gehalveerd, met schil' },
    { n: 'gember', q: 60, u: 'g', x: 'in de lengte gehalveerd' },
    { n: 'steranijs', q: 4, u: 'st' },
    { n: 'kaneelstokje', p: 'kaneelstokjes', q: 1, u: 'st' },
    { n: 'kruidnagel', p: 'kruidnagels', q: 4, u: 'st' },
    { n: 'korianderzaad', q: 1, u: 'tl' },
    { n: 'vissaus', q: 3, u: 'el' },
    { n: 'suiker', q: 1, u: 'el' },
    { kop: 'In de kom' },
    { n: 'platte rijstnoedels', q: 300, u: 'g' },
    { n: 'biefstuk', q: 250, u: 'g', x: 'flinterdun gesneden' },
    { n: 'taugé', q: 150, u: 'g' },
    { n: 'lente-ui', p: 'lente-uien', q: 3, u: 'st' },
    { n: 'Thaise basilicum', q: 1, u: 'handje' },
    { n: 'verse koriander', q: 1, u: 'handje' },
    { n: 'limoen', p: 'limoenen', q: 2, u: 'st', x: 'in partjes' },
    { n: 'sriracha', q: 2, u: 'el', opt: true },
    { n: 'hoisinsaus', q: 2, u: 'el', opt: true }
  ],
  stappen: [
    { t: 'Rooster ui en gember met de snijkant naar beneden in de droge koekenpan op hoog vuur 5 minuten tot ze zwart geblakerd zijn. Rooster de specerijen 1 minuut mee tot ze geuren.', min: 6 },
    { t: 'Doe het vlees in de Dutch oven met koud water en breng aan de kook. Schep de eerste 10 minuten het schuim er steeds af; zo blijft de bouillon helder.', min: 10 },
    { t: 'Voeg ui, gember, specerijen, bouillonblokjes, vissaus en suiker toe. Laat 2 uur heel zachtjes trekken, net onder de kook.', min: 120 },
    { t: 'Zeef de bouillon. Pluk het vlees van het bot en snijd het klein. Breng de bouillon op smaak met vissaus en zout.' },
    { t: 'Kook de noedels volgens de verpakking en verdeel ze met het getrokken vlees over 4 kommen. Leg de rauwe plakjes biefstuk erop.', min: 5 },
    { t: 'Schenk de kokende bouillon erover: die gaart het rauwe vlees. Serveer met taugé, kruiden, limoen, sriracha en hoisin zodat iedereen zelf zijn kom afmaakt.' }
  ],
  tips: ['Leg de biefstuk 20 minuten in de vriezer, dan kun je hem flinterdun snijden.'],
  alt: ['Pho ga (kip): gebruik een hele kip of 1 kg kippenpoten en laat 1 uur trekken.']
},
{
  id: 'bun-cha-gio', naam: 'Vietnamese noedelsalade met citroengraskip', ook: ['bun cha gio', 'bun'], keuken: 'Vietnamees', soort: 'Salade & bijgerecht',
  tijd: 35, wacht: '30 min marineren', pers: 4, niveau: 'Makkelijk', vega: false,
  intro: 'Koude rijstnoedels met gegrilde citroengraskip, verse kruiden, komkommer en een frisse nuoc cham-dressing.',
  methodes: [ { id: 'contactgrill', naam: 'Contactgrill' }, { id: 'koekenpan', naam: 'Koekenpan' }, { id: 'airfryer', naam: 'Airfryer' }, { id: 'grillpan', naam: 'Grillpan' } ],
  gerei: [
    { tool: 'contactgrill', tekst: 'Contactgrill', m: 'contactgrill' },
    { tool: 'koekenpan', tekst: 'Grote koekenpan', m: 'koekenpan' },
    { tool: 'airfryer', tekst: 'Airfryer', m: 'airfryer' },
    { tool: 'grillpan', tekst: 'Grillpan', m: 'grillpan' },
    { tool: 'kookpan', tekst: 'Kookpan voor de noedels' }
  ],
  ingr: [
    { n: 'kippendijfilet', q: 500, u: 'g' },
    { n: 'citroengras', q: 2, u: 'stengel', x: 'alleen het zachte binnenste, heel fijn gehakt' },
    { n: 'knoflook', q: 2, u: 'teen' },
    { n: 'vissaus', q: 2, u: 'el' },
    { n: 'bruine suiker', q: 1, u: 'el' },
    { n: 'rijstvermicelli', q: 250, u: 'g' },
    { n: 'komkommer', p: 'komkommers', q: 1, u: 'st', x: 'in reepjes' },
    { n: 'wortel', p: 'wortels', q: 2, u: 'st', x: 'julienne' },
    { n: 'ijsbergsla', q: 0.5, u: 'st', x: 'krop' },
    { n: 'verse munt', q: 1, u: 'handje' },
    { n: 'verse koriander', q: 1, u: 'handje' },
    { n: 'ongezouten pinda\'s', q: 40, u: 'g', x: 'geroosterd en gehakt' },
    { kop: 'Nuoc cham' },
    { n: 'vissaus', q: 3, u: 'el' },
    { n: 'limoen', p: 'limoenen', q: 2, u: 'st', x: 'sap' },
    { n: 'suiker', q: 2, u: 'el' },
    { n: 'water', q: 6, u: 'el', x: 'warm' },
    { n: 'rode peper', p: 'rode pepers', q: 1, u: 'st', x: 'fijngesneden' }
  ],
  stappen: [
    { t: 'Meng de kip met citroengras, knoflook, vissaus, suiker en 1 el olie. Laat minimaal 30 minuten marineren.', min: 30 },
    { t: 'Roer de ingrediënten voor de nuoc cham door elkaar tot de suiker is opgelost.' },
    { t: 'Kook de vermicelli volgens de verpakking, spoel koud af en laat uitlekken.', min: 4 },
    { t: 'Leg de kippendijen plat op de voorverwarmde contactgrill en sluit de deksel. Grill 7 à 9 minuten tot ze gaar zijn en mooi karamelliseren.', m: 'contactgrill', min: 8 },
    { t: 'Bak de kip in de koekenpan op middelhoog vuur 5 à 6 minuten per kant tot hij gaar is en karamelliseert.', m: 'koekenpan', min: 11 },
    { t: 'Bak de kip 14 à 16 minuten in de airfryer op 200 °C. Keer halverwege.', m: 'airfryer', min: 15 },
    { t: 'Gril de kip 5 minuten per kant op een hete grillpan.', m: 'grillpan', min: 10 },
    { t: 'Snijd de kip in reepjes. Verdeel sla, noedels, groenten, kruiden en kip over kommen. Bestrooi met pinda\'s en schenk de nuoc cham erover.' }
  ],
  tips: ['De kip mag best een beetje zwart worden aan de randjes: dat is de smaak.'],
  alt: ['Vegetarisch? Gebruik stevige tofu en sojasaus in plaats van vissaus.']
},
{
  id: 'harira', naam: 'Harira', ook: ['marokkaanse soep'], keuken: 'Marokkaans', soort: 'Soep',
  tijd: 30, wacht: '1 uur trekken', pers: 6, niveau: 'Makkelijk', vega: false,
  intro: 'Vullende Marokkaanse soep met lamsvlees, kikkererwten, linzen, tomaat en veel verse kruiden.',
  gerei: [ { tool: 'braadpan', tekst: 'Dutch oven of soeppan (minimaal 4 liter)' } ],
  ingr: [
    { n: 'lamsvlees', q: 300, u: 'g', x: 'schouder, in kleine blokjes (of rundvlees)' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'bleekselderij', q: 2, u: 'stengel' },
    { n: 'tomatenpuree', q: 2, u: 'el' },
    { n: 'tomatenblokjes', q: 1, u: 'blik', x: '400 g' },
    { n: 'groene linzen', q: 100, u: 'g', x: 'gewassen' },
    { n: 'kikkererwten', q: 1, u: 'blik', x: '400 g, uitgelekt' },
    { n: 'kurkuma', q: 1, u: 'tl' },
    { n: 'gemberpoeder', q: 1, u: 'tl' },
    { n: 'kaneel', q: 0.5, u: 'tl' },
    { n: 'water', q: 1500, u: 'ml' },
    { n: 'vermicelli', q: 50, u: 'g', x: 'of 2 el rijst' },
    { n: 'verse koriander', q: 1, u: 'bos' },
    { n: 'verse peterselie', q: 1, u: 'bos' },
    { n: 'bloem', q: 2, u: 'el', x: 'aangelengd met 100 ml water' },
    { n: 'citroen', p: 'citroenen', q: 1, u: 'st' },
    { n: 'olijfolie', q: 2, u: 'el' }
  ],
  stappen: [
    { t: 'Bak het vlees in de olie in de Dutch oven 5 minuten rondom bruin. Bak ui en selderij 5 minuten mee.', min: 10 },
    { t: 'Roer tomatenpuree, kurkuma, gember, kaneel en de helft van de gehakte kruiden erdoor en bak 1 minuut.' },
    { t: 'Voeg tomaten, linzen en water toe. Breng aan de kook en laat met de deksel op een kier 45 minuten zachtjes koken.', min: 45 },
    { t: 'Voeg kikkererwten en vermicelli toe en kook 10 minuten.', min: 10 },
    { t: 'Roer het bloemmengsel erdoor en laat 3 minuten doorkoken tot de soep fluweelzacht bindt.', min: 3 },
    { t: 'Breng op smaak met zout, peper en citroensap. Roer de rest van de kruiden erdoor. Serveer met dadels en brood.' }
  ],
  tips: ['Harira wordt in de ramadan traditioneel gegeten om het vasten te breken.'],
  alt: ['Vegetarisch? Laat het vlees weg en gebruik groentebouillon in plaats van water.']
},
{
  id: 'shepherds-pie', naam: 'Shepherd\'s pie', ook: ['herderspastei'], keuken: 'Brits', soort: 'Hoofdgerecht',
  tijd: 45, wacht: '30 min bakken', pers: 6, niveau: 'Makkelijk', vega: false,
  intro: 'Gestoofd lamsgehakt met groenten onder een dikke laag romige aardappelpuree, goudbruin gebakken.',
  methodes: [ { id: 'oven', naam: 'Oven' }, { id: 'airfryer', naam: 'Airfryer' } ],
  gerei: [
    { tool: 'braadpan', tekst: 'Dutch oven of hapjespan voor de vulling. Een ovenvaste Dutch oven kan meteen de oven in.' },
    { tool: 'kookpan', tekst: 'Kookpan voor de aardappelen' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal van 20 × 30 cm (of je Dutch oven)', m: 'oven' },
    { tool: 'ovenschaal', tekst: 'Ovenschaal die in de mand past', m: 'airfryer' }
  ],
  ingr: [
    { n: 'lamsgehakt', q: 600, u: 'g', x: 'of rundergehakt (dan heet het cottage pie)' },
    { n: 'ui', p: 'uien', q: 1, u: 'st' },
    { n: 'wortel', p: 'wortels', q: 2, u: 'st', x: 'in blokjes' },
    { n: 'bleekselderij', q: 1, u: 'stengel' },
    { n: 'tomatenpuree', q: 2, u: 'el' },
    { n: 'worcestershiresaus', q: 2, u: 'el' },
    { n: 'bloem', q: 1, u: 'el' },
    { n: 'runderbouillon', q: 300, u: 'ml' },
    { n: 'verse tijm', q: 3, u: 'takje' },
    { n: 'doperwten', q: 150, u: 'g', x: 'diepvries' },
    { kop: 'Puree' },
    { n: 'kruimige aardappelen', q: 1200, u: 'g' },
    { n: 'boter', q: 60, u: 'g' },
    { n: 'melk', q: 150, u: 'ml', x: 'warm' },
    { n: 'cheddar', q: 75, u: 'g', x: 'geraspt' }
  ],
  stappen: [
    { t: 'Kook de aardappelen in 20 minuten gaar. Stamp ze met boter en warme melk tot een smeuïge puree. Breng op smaak.', min: 20 },
    { t: 'Bak het gehakt in de Dutch oven rul en bruin. Bak ui, wortel en selderij 6 minuten mee.', min: 10 },
    { t: 'Roer tomatenpuree en bloem erdoor en bak 1 minuut. Voeg worcestershiresaus, bouillon en tijm toe en laat 15 minuten inkoken tot een dikke saus. Roer de doperwten erdoor.', min: 15 },
    { t: 'Schep de vulling in de schaal, of laat hem in de Dutch oven. Verdeel de puree erover, trek er strepen in met een vork en strooi de kaas erover.' },
    { t: 'Bak 25 à 30 minuten in een voorverwarmde oven op 200 °C tot de bovenkant goudbruin en knapperig is.', m: 'oven', min: 28 },
    { t: 'Bak 15 à 18 minuten in de airfryer op 180 °C tot de bovenkant goudbruin is.', m: 'airfryer', min: 16 },
    { t: 'Laat 5 minuten staan voor het opscheppen.', min: 5 }
  ],
  tips: ['De vorkstrepen in de puree worden de krokantste randjes.'],
  alt: ['Vegetarisch? Vervang het gehakt door 400 g gekookte linzen en 200 g champignons.']
}
);
