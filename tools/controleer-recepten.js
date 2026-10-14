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
  ctx.RECEPTEN.slice(voor).forEach((r) => herkomst.set(r, f));
}

const alleen = process.argv.slice(2).map((n) => `recepten-${n}.js`);
const SOORTEN = ['Hoofdgerecht', 'Soep', 'Salade & bijgerecht', 'Ontbijt & lunch', 'Saus', 'Dessert'];
const NIVEAUS = ['Makkelijk', 'Gemiddeld', 'Moeilijk'];
const KEUKENS = ctx.HOOFDSTUKKEN.map((h) => h.keuken);
const ids = new Map();
const fouten = [];

for (const r of ctx.RECEPTEN) {
  const f = herkomst.get(r);
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
    const onbekend = Object.keys(i).filter((k) => !['n', 'p', 'q', 'u', 'x', 'opt'].includes(k));
    if (onbekend.length) fout(`"${i.n}": onbekende velden ${onbekend.join(', ')}`);
  }
  if (!Array.isArray(r.stappen) || r.stappen.length < 2) fout('stappen ontbreken');
  for (const s of r.stappen || []) {
    if (typeof s.t !== 'string' || !s.t.trim()) fout('stap zonder tekst');
    if (s.min !== undefined && !(typeof s.min === 'number' && s.min > 0)) fout(`stap "${(s.t || '').slice(0, 30)}": min moet positief zijn`);
    if (s.m && !mids.includes(s.m)) fout(`stap "${(s.t || '').slice(0, 30)}": onbekende methode "${s.m}"`);
  }
  const bekend = new Set(['id', 'naam', 'ook', 'keuken', 'soort', 'tijd', 'wacht', 'pers', 'stuks', 'niveau', 'vega', 'intro', 'methodes', 'gerei', 'ingr', 'stappen', 'tips', 'alt', 'bij']);
  const vreemd = Object.keys(r).filter((k) => !bekend.has(k));
  if (vreemd.length) fout(`onbekende velden: ${vreemd.join(', ')}`);
}
for (const r of ctx.RECEPTEN) {
  for (const b of r.bij || []) if (!ids.has(b)) fouten.push({ f: herkomst.get(r), id: r.id, m: `bij: onbekend recept "${b}"` });
  if (r.bij !== undefined && !Array.isArray(r.bij)) fouten.push({ f: herkomst.get(r), id: r.id, m: 'bij moet een lijst met ids zijn' });
}

const toon = fouten.filter((x) => !alleen.length || alleen.includes(x.f));
toon.forEach((x) => console.log(`${x.f} · ${x.id}: ${x.m}`));
const telling = {};
ctx.RECEPTEN.forEach((r) => { telling[r.keuken] = (telling[r.keuken] || 0) + 1; });
console.log(`\n${ctx.RECEPTEN.length} recepten, ${toon.length} fouten${alleen.length ? ` in ${alleen.join(', ')}` : ''}.`);
console.log(KEUKENS.map((k) => `${k} ${telling[k] || 0}`).join(' · '));
if (toon.length) process.exitCode = 1;
