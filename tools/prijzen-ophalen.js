#!/usr/bin/env node
/* Haalt actuele supermarktprijzen op en schrijft js/data/prijzen.js.
   Gebruik: node tools/prijzen-ophalen.js                 (download de nieuwste prijzen)
            node tools/prijzen-ophalen.js supermarkets.json (gebruik een eerder gedownload bestand)
            node tools/prijzen-ophalen.js --controle        (laat per ingrediënt zien welk product gekozen is)

   Bron: Checkjebon (https://github.com/supermarkt/checkjebon, MIT-licentie), dat de webshopprijzen
   van Nederlandse supermarkten verzamelt. Per ingrediënt zoekt dit script bij elke supermarkt het
   goedkoopste passende product (per kilo, liter of stuk). Welk product bij welk ingrediënt hoort,
   stuur je bij in tools/prijskoppeling.js. Een GitHub Action draait dit elke maandag. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const BRON = 'https://raw.githubusercontent.com/supermarkt/checkjebon/main/data/supermarkets.json';
const args = process.argv.slice(2);
const controle = args.includes('--controle');
const bestand = args.find((a) => !a.startsWith('--'));

/* Recepten laden zoals de app doet (inclusief varianten). */
const ctx = {};
ctx.window = ctx;
vm.createContext(ctx);
const laad = (f) => vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
const data = path.join(ROOT, 'js', 'data');
laad(path.join(data, 'gereedschap.js'));
laad(path.join(data, 'hoofdstukken.js'));
fs.readdirSync(data).filter((f) => /^recepten-\d+\.js$/.test(f)).forEach((f) => laad(path.join(data, f)));
laad(path.join(ROOT, 'js', 'varianten.js'));
laad(path.join(__dirname, 'prijskoppeling.js'));
const KOPPELING = ctx.PRIJSKOPPELING;
const BASIS = ['zout', 'peper', 'zwarte peper', 'water', 'lauw water'];

const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/['’]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const woorden = (s) => norm(s).split(' ').filter(Boolean);

/* Eenheden in de recepten: welke rekenen in gram/ml, welke in stuks. */
const STUKS = ['st', 'teen', 'bos', 'takje', 'stengel', 'zakje', 'vel', 'bol', 'blokje'];

/* Alle ingrediënten met de eenheden waarin ze voorkomen. */
const ingrediënten = new Map();
for (const r of ctx.RECEPTEN) {
  for (const i of r.ingr) {
    if (i.kop || !i.n || BASIS.includes(norm(i.n))) continue;
    const k = norm(i.n);
    if (!ingrediënten.has(k)) ingrediënten.set(k, { n: i.n, p: new Set(), u: new Map() });
    const x = ingrediënten.get(k);
    if (i.p) x.p.add(i.p);
    const u = i.u || 'st';
    x.u.set(u, (x.u.get(u) || 0) + 1);
  }
}

/* Verpakking van een product uit de maattekst of de productnaam: { e: 'g'|'st', q }. ml telt als gram. */
const FACTOR = { g: 1, gr: 1, gram: 1, grams: 1, kg: 1000, kilo: 1000, kilogram: 1000, ml: 1, mililiters: 1, milliliter: 1, milliliters: 1,
  cl: 10, centiliter: 10, l: 1000, lt: 1000, liter: 1000, liters: 1000 };
const EENHEID = '(kg|kilogram|kilo|gram|grams|gr|g|mililiters|milliliters|milliliter|ml|centiliter|cl|liters|liter|lt|l)';
const getal = (s) => parseFloat(s.replace(',', '.'));
function verpakking(maat, naam) {
  for (const t of [maat, naam]) {
    const s = String(t || '').toLowerCase();
    if (!s) continue;
    let m = s.match(new RegExp(`(\\d+)\\s*x\\s*(\\d+(?:[.,]\\d+)?)\\s*${EENHEID}\\b`));
    if (m) return { e: 'g', q: getal(m[1]) * getal(m[2]) * FACTOR[m[3]] };
    m = s.match(new RegExp(`(\\d+(?:[.,]\\d+)?)\\s*${EENHEID}\\s*x\\s*(\\d+)\\b`));
    if (m) return { e: 'g', q: getal(m[1]) * FACTOR[m[2]] * getal(m[3]) };
    m = s.match(new RegExp(`(\\d+(?:[.,]\\d+)?)\\s*${EENHEID}\\b`));
    if (m && getal(m[1]) > 0) return { e: 'g', q: getal(m[1]) * FACTOR[m[2]] };
    m = s.match(/(\d+)\s*(stuks|stuk|st|eieren|tenen|zakjes)\b/);
    if (m && getal(m[1]) > 0) return { e: 'st', q: getal(m[1]) };
    if (/per (stuk|bos|bosje)|\bstuk\b|\bper st\b|\bbosje\b/.test(s)) return { e: 'st', q: 1 };
    if (/per (kilo|kg)\b/.test(s)) return { e: 'g', q: 1000 };
  }
  return null;
}

/* Woorden in een productnaam die bijna altijd betekenen dat het een bewerkt product is, geen ingrediënt. */
const NIET = ['saus', 'soep', 'chips', 'snack', 'spread', 'salade', 'dressing', 'marinade', 'maaltijd', 'pizza', 'drink',
  'drank', 'smoothie', 'snoep', 'koek', 'koekjes', 'reep', 'taart', 'cake', 'ijs', 'baby', 'kat', 'kattenvoer', 'hond',
  'hondenvoer', 'shampoo', 'zeep', 'thee', 'limonade', 'siroop', 'yoghurtdrank', 'kruidenmix', 'mix', 'smaak',
  'kaars', 'geur', 'crackers', 'toast', 'chocolade', 'bonbons', 'proteine', 'eiwitreep', 'wrap', 'burger', 'nuggets',
  'kroket', 'kroketten', 'loempia', 'quiche', 'tapas', 'dip', 'hummus', 'pesto', 'tosti', 'broodje', 'sandwich',
  'sap', 'yoghurt', 'kwark', 'vla', 'toetje', 'pudding', 'hapje', 'groentehapje', 'verspakket', 'bakmix', 'thuisbakmix',
  'wasmiddel', 'luchtverfrisser', 'schoonmaak', 'ovenschotel', 'honing', 'jam', 'snijder', 'roomkaas', 'smeerkaas',
  'muesli', 'granola', 'cruesli', 'ontbijtkoek', 'parfum', 'deodorant', 'tandpasta', 'douche', 'bodylotion', 'maskers',
  'zalf', 'capsules', 'koffie', 'cappuccino', 'frisdrank', 'likeur', 'wijn', 'bier', 'gin', 'wodka', 'rum',
  'vruchtenhagel', 'hagelslag', 'pindakaas', 'stroop', 'sorbet', 'gebak', 'wafels', 'biscuits', 'repen', 'mueslireep',
  'kaarsen', 'tabletten', 'vitamine', 'supplement', 'thee', 'infusion', 'gel', 'olie', 'azijn', 'poeder', 'gedroogd',
  'gedroogde', 'tablet'];

/* Woorden die niets zeggen over wat het product is: huismerken, maten en "vers". */
const GEWOON = ['ah', 'jumbo', 'plus', 'dirk', 'lidl', 'spar', 'vomar', 'poiesz', 'hoogvliet', 'dekamarkt', 'dekavers', 'gwoon',
  '1', 'de', 'beste', 'bio', 'biologisch', 'biologische', 'vers', 'verse', 'g', 'gr', 'gram', 'kg', 'ml', 'l', 'liter', 'stuks', 'st',
  'per', 'ca', 'stuk', 'x', 'en', 'met', 'van', 'het', 'een', 'in', 'zak', 'bak', 'bakje', 'pak', 'voordeel', 'voordeelverpakking',
  'groot', 'grote', 'klein', 'kleine', 'heel', 'hele', 'los', 'losse', 'verpakt', 'boerentrots', 'eat', 'me', 'zakje', 'schaal', 'netje', 'bos', 'bosje'];

function laadBron() {
  if (bestand) return Promise.resolve(JSON.parse(fs.readFileSync(bestand, 'utf8')));
  return fetch(BRON).then((res) => {
    if (!res.ok) throw new Error(`Download mislukt: ${res.status} ${res.statusText}`);
    return res.json();
  });
}

function zoektermen(k, ingr, kop) {
  if (kop.zoek) return kop.zoek.map(woorden);
  return [ingr.n, ...ingr.p].map(woorden);
}

/* Past een zoekterm bij de woorden van een product? Elk woord van de term moet erin staan
   (ook als meervoud: ui → uien, tomaat → tomaten). */
function past(term, pw) {
  return term.every((t) => pw.some((w) => w === t || w === t + 's' || w === t + 'en' || w === t + 'n'));
}

async function main() {
  const bron = await laadBron();
  const winkels = bron.filter((w) => w.d && w.d.length);
  const producten = winkels.map((w) => ({
    id: w.n, naam: String(w.c).replace(/ \(via .*\)$/, ''), url: w.u,
    d: w.d.map((p) => ({ n: p.n, l: p.l, p: p.p, s: p.s || '', w: woorden(p.n), v: verpakking(p.s, p.n) }))
      .filter((p) => p.p > 0 && p.v)
  }));

  const uit = {};
  const verslag = [];
  for (const [k, ingr] of [...ingrediënten].sort((a, b) => a[0].localeCompare(b[0], 'nl'))) {
    let kop = KOPPELING[k] || {};
    if (kop.geen) continue;
    if (kop.als) {
      // Zoek zoals bij een ander ingrediënt, maar met de eigen eenheid en omrekening.
      const { als, ...eigen } = kop;
      const basis = KOPPELING[norm(als)] || {};
      kop = { ...basis, zoek: basis.zoek || [als], ...eigen };
    }
    // Rekenen we dit ingrediënt in gram of in stuks? Wat de recepten het meest gebruiken, tenzij de koppeling het zegt.
    let stuks = 0, gewicht = 0;
    ingr.u.forEach((n, u) => { if (STUKS.includes(u)) stuks += n; else gewicht += n; });
    const e = kop.e || (stuks > gewicht ? 'st' : 'g');
    const termen = zoektermen(k, ingr, kop);
    const niet = (kop.niet || []).map(norm);
    const ook = new Set(termen.flat());
    let kandidaten = [];
    for (const w of producten) {
      for (const p of w.d) {
        if (!termen.some((t) => past(t, p.w))) continue;
        const naam = ' ' + p.w.join(' ');
        if (niet.some((x) => naam.includes(' ' + x))) continue;
        if (p.w.some((x) => !ook.has(x) && NIET.some((y) => x === y || (y.length >= 4 && x.endsWith(y))))) continue;
        // Prijs per eenheid van het ingrediënt: per kilo/liter bij gram, per stuk bij stuks.
        let per = null;
        if (e === 'g') {
          if (p.v.e === 'g') per = p.p / p.v.q * 1000;
          else if (kop.st) per = p.p / (p.v.q * kop.st) * 1000;
        } else {
          if (p.v.e === 'st') per = p.p / p.v.q;
          else if (kop.st) per = p.p / (p.v.q / kop.st);
        }
        if (per == null || !isFinite(per)) continue;
        const merk = woorden(w.naam);
        const extra = p.w.filter((x) => !merk.includes(x) && !GEWOON.includes(x) && !/\d/.test(x) && !termen.some((t) => t.some((tt) => past([tt], [x])))).length;
        kandidaten.push({ w, p, per, extra });
      }
    }
    if (!kandidaten.length) { verslag.push(`${k}: geen product gevonden`); continue; }
    // Producten met veel woorden extra zijn meestal iets anders ("Allesreiniger citroengras & gember" bij gember).
    // Houd alleen de producten met het minste aantal woorden extra over, met wat ruimte voor merk en soort.
    const minst = Math.min(...kandidaten.map((x) => x.extra));
    kandidaten = kandidaten.filter((x) => x.extra <= minst + (kop.ruim ?? 2));
    // Uitschieters weg: een veel te goedkoop product is bijna altijd iets anders (een bakje kruiden bij "basilicum").
    const lijst = kandidaten.map((x) => x.per).sort((a, b) => a - b);
    const mediaan = lijst[Math.floor(lijst.length / 2)];
    const onder = mediaan / (kop.marge || 3), boven = mediaan * (kop.marge || 3);
    const perWinkel = {};
    for (const x of kandidaten) {
      if (x.per < onder || x.per > boven) continue;
      const nu = perWinkel[x.w.id];
      if (!nu || x.per < nu.per) perWinkel[x.w.id] = x;
    }
    const ids = Object.keys(perWinkel);
    if (!ids.length) { verslag.push(`${k}: geen bruikbaar product`); continue; }
    const regel = { e, w: {} };
    if (kop.st) regel.st = kop.st;
    if (kop.om) regel.om = kop.om;
    for (const id of ids) {
      const { w, p, per } = perWinkel[id];
      regel.w[id] = [Math.round(per * 100) / 100, p.p, p.n, p.l, p.s || ''];
    }
    uit[k] = regel;
    if (controle) {
      const rij = ids.map((id) => perWinkel[id]).sort((a, b) => a.per - b.per)
        .map((x) => `${x.w.id} €${x.per.toFixed(2)}/${e === 'g' ? 'kg' : 'st'} ${x.p.n} (${x.p.s || '-'})`);
      verslag.push(`${k} [${e}; ${[...ingr.u.keys()].join(",")}]\n   ${rij.slice(0, 3).join('\n   ')}`);
    }
  }

  const prijzen = {
    bijgewerkt: new Date().toISOString().slice(0, 10),
    bron: 'Checkjebon',
    winkels: Object.fromEntries(producten.map((w) => [w.id, { naam: w.naam, url: w.url }])),
    p: uit
  };
  const doel = path.join(data, 'prijzen.js');
  fs.writeFileSync(doel, '/* Supermarktprijzen per ingrediënt, wekelijks bijgewerkt door tools/prijzen-ophalen.js (bron: Checkjebon).\n' +
    '   Per winkel: [prijs per kilo/liter of per stuk, prijs van het product, productnaam, link, verpakking]. */\n' +
    `window.PRIJZEN = ${JSON.stringify(prijzen)};\n`);
  const zonder = verslag.filter((x) => !x.includes('\n'));
  if (controle) console.log(verslag.join('\n'));
  console.log(`${Object.keys(uit).length} ingrediënten met een prijs, ${zonder.length} zonder. Geschreven naar js/data/prijzen.js.`);
  if (!controle && zonder.length) console.log('Zonder prijs: ' + zonder.map((x) => x.split(':')[0]).join(', '));
}

main().catch((e) => { console.error(e.message); process.exit(1); });
