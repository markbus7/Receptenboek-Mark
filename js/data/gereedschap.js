/* Keukengerei en apparaten.
   `apparaat: true` betekent: niet iedereen heeft dit, dus het staat in "Mijn keuken".
   `standaard` is of het vinkje standaard aan staat. */
window.GEREEDSCHAP = {
  oven:       { naam: 'Oven',              icoon: 'oven',       apparaat: true, standaard: true },
  airfryer:   { naam: 'Airfryer',          icoon: 'airfryer',   apparaat: true, standaard: true },
  wok:        { naam: 'Wok',               icoon: 'wok',        apparaat: true, standaard: false },
  grillpan:   { naam: 'Grillpan',          icoon: 'grillpan',   apparaat: true, standaard: false },
  staafmixer: { naam: 'Staafmixer / blender', icoon: 'staafmixer', apparaat: true, standaard: true },
  mixer:      { naam: 'Handmixer',         icoon: 'mixer',      apparaat: true, standaard: true },
  slowcooker: { naam: 'Slowcooker',        icoon: 'slowcooker', apparaat: true, standaard: false },
  magnetron:  { naam: 'Magnetron',         icoon: 'magnetron',  apparaat: true, standaard: true },
  contactgrill: { naam: 'Contactgrill',    sub: 'zoals Tefal OptiGrill', icoon: 'contactgrill', apparaat: true, standaard: true },
  rijstkoker: { naam: 'Rijstkoker',        icoon: 'rijstkoker', apparaat: true, standaard: true },
  koekenpan:  { naam: 'Koekenpan',         icoon: 'koekenpan' },
  hapjespan:  { naam: 'Hapjespan',         icoon: 'hapjespan' },
  kookpan:    { naam: 'Kookpan',           icoon: 'kookpan' },
  braadpan:   { naam: 'Dutch oven (braadpan)', icoon: 'braadpan' },
  ovenschaal: { naam: 'Ovenschaal',        icoon: 'ovenschaal' },
  bakplaat:   { naam: 'Bakplaat',          icoon: 'bakplaat' },
  bakvorm:    { naam: 'Bakvorm',           icoon: 'bakvorm' }
};

/* Eenheden: enkelvoud, meervoud, en hoe fijn we afronden bij het omrekenen. */
window.EENHEDEN = {
  g:      { e: 'g',      m: 'g',       soort: 'gewicht' },
  kg:     { e: 'kg',     m: 'kg',      soort: 'gewicht' },
  ml:     { e: 'ml',     m: 'ml',      soort: 'volume' },
  l:      { e: 'liter',  m: 'liter',   soort: 'volume' },
  el:     { e: 'el',     m: 'el',      soort: 'lepel' },
  tl:     { e: 'tl',     m: 'tl',      soort: 'lepel' },
  teen:   { e: 'teen',   m: 'tenen',   soort: 'stuk' },
  st:     { e: '',       m: '',        soort: 'stuk' },
  blik:   { e: 'blik',   m: 'blikken', soort: 'stuk' },
  bos:    { e: 'bos',    m: 'bossen',  soort: 'stuk' },
  takje:  { e: 'takje',  m: 'takjes',  soort: 'stuk' },
  plak:   { e: 'plak',   m: 'plakken', soort: 'stuk' },
  snuf:   { e: 'snuf',   m: 'snufjes', soort: 'lepel' },
  zakje:  { e: 'zakje',  m: 'zakjes',  soort: 'stuk' },
  stengel:{ e: 'stengel',m: 'stengels',soort: 'stuk' },
  blokje: { e: 'blokje', m: 'blokjes', soort: 'stuk' },
  vel:    { e: 'vel',    m: 'vellen',  soort: 'stuk' },
  bol:    { e: 'bol',    m: 'bollen',  soort: 'stuk' },
  handje: { e: 'handje', m: 'handjes', soort: 'lepel' }
};

/* Pannen die je zelf aanvinkt onder "Mijn keuken". Recepten gebruiken de algemene namen
   hierboven (braadpan, koekenpan, hapjespan); deze lijst bepaalt welk advies je krijgt. */
window.PANNEN = {
  dutchoven:            { naam: 'Dutch oven', sub: 'gietijzer, met deksel', icoon: 'braadpan', standaard: true },
  'rvs-koekenpan':      { naam: 'RVS-koekenpan', sub: 'roestvrij staal', icoon: 'koekenpan', standaard: true },
  'rvs-kookpan':        { naam: 'RVS-kookpan en steelpan', sub: 'roestvrij staal', icoon: 'kookpan', standaard: true },
  antiaanbakpan:        { naam: 'Antiaanbak koekenpan', sub: 'teflon of keramisch', icoon: 'koekenpan', standaard: false },
  'gietijzer-koekenpan':{ naam: 'Gietijzeren koekenpan', sub: 'of carbonstaal', icoon: 'koekenpan', standaard: false },
  hapjespan:            { naam: 'Hapjespan', sub: 'koekenpan met hoge rand', icoon: 'hapjespan', standaard: false }
};

window.RECEPTEN = window.RECEPTEN || [];
