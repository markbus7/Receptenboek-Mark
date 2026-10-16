#!/usr/bin/env node
/* Controleert alle receptbestanden op fouten in de gegevens.
   Gebruik: node tools/controleer-recepten.js            (alles)
            node tools/controleer-recepten.js 12 13      (alleen fouten in recepten-12.js en -13.js tonen) */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const map = path.join(__dirname, '..', 'js', 'data');
const ctx = { window: {} };
ctx.window = ctx;
vm.createContext(ctx);
const laad = (f) => vm.runInContext(fs.readFileSync(path.join(map, f), 'utf8'), ctx, { filename: f });
laad('gereedschap.js');
laad('hoofdstukken.js');

const bestanden = fs.readdirSync(map).filter((f) => /^recepten-\d+\.js$/.test(f))
  .sort((a, b) => parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10));
const herkomst = new Map();
for (const f of bestanden) {
  const voor = ctx.RECEPTEN.length;
  try { laad(f); } catch (e) { console.log(`${f}: kan niet laden: ${e.message}`); process.exitCode = 1; continue; }
  ctx.RECEPTEN.slice(voor).forEach((r) => herkomst.set(r.id, f));
}

// Varianten: controleer de ruwe gegevens, en vul ze daarna aan met het basisrecept (zoals de app doet).
const ruw = new Map(ctx.RECEPTEN.map((r) => [r.id, r]));
const variantFouten = [];
for (const r of ctx.RECEPTEN) {
  const fout = (m) => variantFouten.push({ f: herkomst.get(r.id), id: r.id, m });
  if (r.gerecht !== undefined && (typeof r.gerecht !== 'string' || !r.gerecht.trim())) fout('gerecht moet tekst zijn');
  if (r.variant !== undefined && (typeof r.variant !== 'string' || !r.variant.trim())) fout('variant moet een korte naam zijn (bijv. \'Kip\')');
  if (r.vervang !== undefined && !r.variantVan) fout('vervang werkt alleen bij een variant (variantVan)');
  if (!r.variantVan) continue;
  const basis = ruw.get(r.variantVan);
  if (!basis) { fout(`variantVan: onbekend recept "${r.variantVan}"`); continue; }
  if (basis.variantVan) fout(`variantVan: "${r.variantVan}" is zelf een variant; verwijs naar het basisrecept`);
  if (!r.variant) fout('variant ontbreekt (de naam op de knop, bijv. \'Kip\')');
  if (!basis.variant) fout(`basisrecept "${basis.id}" heeft geen variant-naam`);
  for (const n of Object.keys(r.vervang || {})) {
    if (!(r.ingr || basis.ingr).some((i) => i.n === n || i.kop === n)) fout(`vervang: "${n}" staat niet in de ingrediënten`);
  }
}
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'varianten.js'), 'utf8'), ctx, { filename: 'varianten.js' });
const labels = new Map();
for (const r of ctx.RECEPTEN) {
  const sleutel = `${r.groep}|${r.variant}`;
  if (r.variant && labels.has(sleutel)) variantFouten.push({ f: herkomst.get(r.id), id: r.id, m: `variant "${r.variant}" komt twee keer voor bij hetzelfde gerecht` });
  labels.set(sleutel, r.id);
}

const alleen = process.argv.slice(2).map((n) => `recepten-${n}.js`);
const SOORTEN = ['Hoofdgerecht', 'Soep', 'Salade & bijgerecht', 'Ontbijt & lunch', 'Saus', 'Dessert'];
const NIVEAUS = ['Makkelijk', 'Gemiddeld', 'Moeilijk'];
const KEUKENS = ctx.HOOFDSTUKKEN.map((h) => h.keuken);
const ids = new Map();
const fouten = [...variantFouten];

for (const r of ctx.RECEPTEN) {
  const f = herkomst.get(r.id);
  const fout = (m) => fouten.push({ f, id: r.id, m });
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.id || '')) fout('id moet kleine letters, cijfers en streepjes zijn');
  if (ids.has(r.id)) fout(`dubbel id (ook in ${ids.get(r.id)})`);
  ids.set(r.id, f);
  for (const k of ['naam', 'intro']) if (typeof r[k] !== 'string' || !r[k].trim()) fout(`${k} ontbreekt`);
  if (!KEUKENS.includes(r.keuken)) fout(`onbekende keuken "${r.keuken}"`);
  if (!SOORTEN.includes(r.soort)) fout(`onbekende soort "${r.soort}"`);
  if (!NIVEAUS.includes(r.niveau)) fout(`niveau moet ${NIVEAUS.join(' of ')} zijn`);
  if (!Number.isInteger(r.tijd) || r.tijd <= 0) fout('tijd moet een heel aantal minuten zijn');
  if (!Number.isInteger(r.pers) || r.pers <= 0) fout('pers moet een heel getal zijn');
  if (typeof r.vega !== 'boolean') fout('vega moet true of false zijn');
  if (r.wacht !== undefined && typeof r.wacht !== 'string') fout('wacht moet tekst zijn');
  if (r.stuks !== undefined && (typeof r.stuks !== 'string' || !r.stuks)) fout('stuks moet tekst zijn (bijv. \'wafels\')');
  if (r.ook !== undefined && !(Array.isArray(r.ook) && r.ook.every((x) => typeof x === 'string'))) fout('ook moet een lijst met namen zijn');
  for (const k of ['tips', 'alt']) if (!Array.isArray(r[k]) || !r[k].every((x) => typeof x === 'string')) fout(`${k} moet een lijst met teksten zijn (mag leeg)`);

  const mids = (r.methodes || []).map((m) => m.id);
  if (r.methodes) {
    if (!Array.isArray(r.methodes) || r.methodes.length < 2) fout('methodes heeft minstens 2 keuzes nodig (of laat het veld weg)');
    for (const m of r.methodes) {
      if (!ctx.GEREEDSCHAP[m.id]) fout(`methode-id "${m.id}" is geen gereedschap`);
      if (!m.naam) fout(`methode "${m.id}" heeft geen naam`);
      if (!r.stappen.some((s) => s.m === m.id)) fout(`methode "${m.id}" heeft geen eigen stap`);
    }
    if (new Set(mids).size !== mids.length) fout('dubbele methode-id');
  }
  if (!Array.isArray(r.gerei) || !r.gerei.length) fout('gerei ontbreekt');
  for (const g of r.gerei || []) {
    if (!ctx.GEREEDSCHAP[g.tool]) fout(`onbekend gereedschap "${g.tool}"`);
    if (!g.tekst) fout(`gerei "${g.tool}" heeft geen tekst`);
    if (g.m && !mids.includes(g.m)) fout(`gerei "${g.tool}" verwijst naar onbekende methode "${g.m}"`);
    if (g.tool === 'wok' && !g.of) fout('wok heeft een "of" nodig (niet iedereen heeft een wok)');
  }
  if (!Array.isArray(r.ingr) || r.ingr.length < 2) fout('ingr ontbreekt');
  for (const i of r.ingr || []) {
    if (i.kop !== undefined) { if (typeof i.kop !== 'string' || Object.keys(i).length !== 1) fout('kop-regel mag alleen { kop } bevatten'); continue; }
    if (typeof i.n !== 'string' || !i.n.trim()) { fout('ingrediënt zonder naam'); continue; }
    if (i.n !== i.n.toLowerCase() && !/^[A-Z][a-zéèêëàâîïôöûüç]+( |$)/.test(i.n)) fout(`ingrediëntnaam "${i.n}" in kleine letters (behalve eigennamen)`);
    if (i.q !== undefined && !(typeof i.q === 'number' && i.q > 0)) fout(`"${i.n}": q moet een positief getal zijn`);
    if (i.u !== undefined && !ctx.EENHEDEN[i.u]) fout(`"${i.n}": onbekende eenheid "${i.u}"`);
    if (i.u !== undefined && i.q === undefined) fout(`"${i.n}": eenheid zonder hoeveelheid`);
    if (i.p !== undefined && typeof i.p !== 'string') fout(`"${i.n}": p (meervoud) moet tekst zijn`);
    if (i.vers !== undefined && i.vers !== true && !(typeof i.vers === 'string' && i.vers.trim())) fout(`"${i.n}": vers moet true of een reden zijn`);
    if (i.of !== undefined && !(typeof i.of === 'string' && i.of.trim())
      && !(i.of && typeof i.of.n === 'string' && typeof i.of.q === 'number' && i.of.q > 0 && ctx.EENHEDEN[i.of.u])) fout(`"${i.n}": of moet tekst zijn of { q, u, n } met een bekende eenheid`);
    if (i.of !== undefined && i.vers !== undefined) fout(`"${i.n}": vers en of gaan niet samen`);
    const onbekend = Object.keys(i).filter((k) => !['n', 'p', 'q', 'u', 'x', 'opt', 'vers', 'of'].includes(k));
    if (onbekend.length) fout(`"${i.n}": onbekende velden ${onbekend.join(', ')}`);
  }
  if (!Array.isArray(r.stappen) || r.stappen.length < 2) fout('stappen ontbreken');
  for (const s of r.stappen || []) {
    if (typeof s.t !== 'string' || !s.t.trim()) fout('stap zonder tekst');
    if (s.min !== undefined && !(typeof s.min === 'number' && s.min > 0)) fout(`stap "${(s.t || '').slice(0, 30)}": min moet positief zijn`);
    if (s.m && !mids.includes(s.m)) fout(`stap "${(s.t || '').slice(0, 30)}": onbekende methode "${s.m}"`);
  }
  const bekend = new Set(['id', 'naam', 'ook', 'keuken', 'soort', 'tijd', 'wacht', 'pers', 'stuks', 'niveau', 'vega', 'intro', 'methodes', 'gerei', 'ingr', 'stappen', 'tips', 'alt', 'bij', 'gerecht', 'variant', 'variantVan', 'vervang', 'groep']);
  const vreemd = Object.keys(r).filter((k) => !bekend.has(k));
  if (vreemd.length) fout(`onbekende velden: ${vreemd.join(', ')}`);
}
for (const r of ctx.RECEPTEN) {
  for (const b of r.bij || []) if (!ids.has(b)) fouten.push({ f: herkomst.get(r.id), id: r.id, m: `bij: onbekend recept "${b}"` });
  if (r.bij !== undefined && !Array.isArray(r.bij)) fouten.push({ f: herkomst.get(r.id), id: r.id, m: 'bij moet een lijst met ids zijn' });
}

// Verpakkingen: elke naam moet in minstens één recept voorkomen, anders is het waarschijnlijk een tikfout.
vm.runInContext(fs.readFileSync(path.join(map, 'verpakkingen.js'), 'utf8'), ctx, { filename: 'verpakkingen.js' });
const namen = new Set(ctx.RECEPTEN.flatMap((r) => [...(r.ingr || []), ...Object.values(r.vervang || {}).filter(Boolean)]).map((i) => (i.n || '').toLowerCase()));
for (const v of ctx.VERPAKKINGEN) {
  for (const n of v.n) if (!namen.has(n)) fouten.push({ f: 'verpakkingen.js', id: n, m: 'komt in geen enkel recept voor' });
  if (!v.tip) fouten.push({ f: 'verpakkingen.js', id: v.n[0], m: 'tip ontbreekt' });
  if (!v.vaag && !v.eiwit && !(Array.isArray(v.pak) && v.pak.length && ['g', 'ml', 'st'].includes(v.maat) && v.wat)) fouten.push({ f: 'verpakkingen.js', id: v.n[0], m: 'maat (g, ml of st), pak en wat zijn nodig' });
}

// Vervangers voor verse ingrediënten: elke naam moet in een recept voorkomen, en elke eenheid bestaan.
vm.runInContext(fs.readFileSync(path.join(map, 'vervangers.js'), 'utf8'), ctx, { filename: 'vervangers.js' });
for (const v of ctx.VERVANGERS) {
  for (const n of v.n) if (!namen.has(n)) fouten.push({ f: 'vervangers.js', id: n, m: 'komt in geen enkel recept voor' });
  if (!v.tekst && !(v.per && v.wat && ctx.EENHEDEN[v.u] && Object.keys(v.per).every((u) => ctx.EENHEDEN[u]))) fouten.push({ f: 'vervangers.js', id: v.n[0], m: 'tekst, of per, u en wat met bekende eenheden, zijn nodig' });
}

const toon = fouten.filter((x) => !alleen.length || alleen.includes(x.f));
toon.forEach((x) => console.log(`${x.f} · ${x.id}: ${x.m}`));
const telling = {};
ctx.RECEPTEN.forEach((r) => { telling[r.keuken] = (telling[r.keuken] || 0) + 1; });
console.log(`\n${ctx.VARIANTEN.aantalGerechten()} gerechten (${ctx.RECEPTEN.length} recepten met varianten), ${toon.length} fouten${alleen.length ? ` in ${alleen.join(', ')}` : ''}.`);
console.log(KEUKENS.map((k) => `${k} ${telling[k] || 0}`).join(' · '));
if (toon.length) process.exitCode = 1;
