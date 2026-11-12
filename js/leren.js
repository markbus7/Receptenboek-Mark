/* Leren: kruiden leren kennen (kaarten per smaakfamilie), proefjes om thuis te doen, een leerroute
   en een spelletje "Herken je het?". Inhoud staat in js/data/leren.js.
   Je eigen notities en wat je gedaan hebt staan onder 'leren' in Hulp.opslag (synchroniseert mee):
   { n: { kruidId: { tekst, sterren, geproefd } }, p: { proefjeId: tijdstempel } }. */
const Leren = (() => {
  const { opslag, esc } = Hulp;
  const SLEUTEL = 'leren';
  const L = () => window.LEREN || { FAMILIES: [], PROFIELEN: [], PROEFJES: [], ROUTE: [] };
  const SMAAK = ['', 'Niet lekker', 'Gaat wel', 'Lekker', 'Erg lekker', 'Heerlijk'];
  const icoon = (naam) => `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-${naam}"/></svg>`;

  let data = opslag.lees(SLEUTEL, {});
  let el = null, ctx = null;
  const st = { deel: 'kruiden', fam: '', vraag: null, goed: 0, gesteld: 0 };

  const notities = () => data.n || {};
  const notitie = (id) => notities()[id] || {};
  const gedaan = () => data.p || {};
  function bewaar(nieuw) {
    data = { ...data, ...nieuw };
    opslag.schrijf(SLEUTEL, data);
  }
  function zetNotitie(id, wijziging) {
    const n = { ...notitie(id), ...wijziging };
    if (!n.tekst) delete n.tekst;
    if (!n.sterren) delete n.sterren;
    if (!n.geproefd) delete n.geproefd;
    const alle = { ...notities() };
    if (Object.keys(n).length) alle[id] = n; else delete alle[id];
    bewaar({ n: alle });
  }
  const geproefd = (id) => !!notitie(id).geproefd;

  const profiel = (id) => L().PROFIELEN.find((p) => p.id === id);
  const kruid = (id) => (window.KRUIDEN || []).find((k) => k.id === id);
  const naam = (id) => { const k = kruid(id); return k ? k.naam : id; };
  const kortNaam = (id) => naam(id).replace(/ \(.*\)$/, '');
  const fam = (id) => L().FAMILIES.find((f) => f.id === id) || {};
  const proefje = (id) => L().PROEFJES.find((p) => p.id === id);

  /* Volgorde: wat in je kast staat eerst, binnen een familie. */
  function profielen() {
    const inKast = ctx.inKast();
    const volg = L().FAMILIES.map((f) => f.id);
    return L().PROFIELEN.slice().sort((a, b) => (volg.indexOf(a.fam) - volg.indexOf(b.fam))
      || (Number(inKast.has(b.id)) - Number(inKast.has(a.id))));
  }

  const kruidLink = (id) => (profiel(id)
    ? `<a href="#leer-${id}" data-leer-naar="${id}">${esc(kortNaam(id))}</a>`
    : esc(kortNaam(id)));

  /* ---------- Kruiden ---------- */
  function kaart(p) {
    const f = fam(p.fam);
    const inKast = ctx.inKast().has(p.id);
    const n = notitie(p.id);
    const rs = ctx.receptenMet(p.id);
    const sterren = [1, 2, 3, 4, 5].map((w) => `<button type="button" class="ster" data-leer-ster="${p.id}" data-waarde="${w}" aria-pressed="${w <= (n.sterren || 0)}" aria-label="${w} van 5: ${SMAAK[w]}" title="${SMAAK[w]}">${icoon('ster')}</button>`).join('');
    const rij = (kop, tekst) => (tekst ? `<p><b>${kop}:</b> ${esc(tekst)}</p>` : '');
    return `<article class="kruid leer-kaart" id="leer-${p.id}" style="--fam:${f.kleur || 'var(--pen)'}">
      <div class="kruid-kop"><p class="kruid-soort leer-fam">${esc(f.naam || '')}</p>
        <span class="leer-labels">${inKast ? '<span class="leer-label">In je kast</span>' : ''}${n.geproefd ? '<span class="leer-label leer-label-ok">✓ Geproefd</span>' : ''}</span></div>
      <h3>${esc(naam(p.id))}</h3>
      <div class="leer-zintuig">
        <p><span class="leer-icoon" aria-hidden="true">👃</span><b>Geur:</b> ${esc(p.geur)}</p>
        <p><span class="leer-icoon" aria-hidden="true">👅</span><b>Smaak:</b> ${esc(p.smaak)}</p>
      </div>
      ${rij('Wat het doet', p.doet)}
      ${rij('Wanneer erin', p.wanneer)}
      ${rij('Heel of gemalen', p.vorm)}
      ${rij('Let op', p.teveel)}
      <p><b>Past bij:</b> ${p.duo.map(kruidLink).join(', ')}. ${esc(p.samen)}</p>
      <div class="leer-proef"><p class="leer-proef-kop">Proef het zelf <span class="zacht">(rijsttest: ${esc(p.dosis)})</span></p>
        <p class="kruid-tip">${esc(p.proef)}</p></div>
      ${rs.length ? `<p class="kruid-recepten"><b>Proef het terug in:</b> ${rs.slice(0, 5).map((r) => `<a href="#${r.id}" data-open-recept="${r.id}">${esc(r.naam)}</a>`).join(', ')}${rs.length > 5 ? ` <span class="zacht">en ${rs.length - 5} meer</span>` : ''}</p>` : ''}
      <details class="leer-notitie">
        <summary>Mijn notitie${n.tekst ? `: <span class="zacht">${esc(n.tekst.slice(0, 60))}${n.tekst.length > 60 ? '…' : ''}</span>` : ''}</summary>
        <label class="leer-check"><input type="checkbox" data-leer-geproefd="${p.id}"${n.geproefd ? ' checked' : ''}> Ik heb het geproefd</label>
        <p class="leer-ster-rij">Hoe lekker vind je het? <span class="sterren">${sterren}</span></p>
        <label class="sr" for="leer-tekst-${p.id}">Wat rook en proefde je?</label>
        <textarea id="leer-tekst-${p.id}" data-leer-tekst="${p.id}" rows="3" placeholder="Wat rook en proefde je? Bijvoorbeeld: warm, een beetje bitter, past bij taco's.">${esc(n.tekst || '')}</textarea>
      </details>
    </article>`;
  }

  function renderKruiden() {
    const inKast = ctx.inKast();
    const alle = profielen();
    const filters = [['', 'Alles'], ['kast', 'In mijn kast'], ['nog', 'Nog niet geproefd'], ...L().FAMILIES.map((f) => [f.id, f.naam])];
    const lijst = alle.filter((p) => !st.fam || (st.fam === 'kast' ? inKast.has(p.id) : st.fam === 'nog' ? !geproefd(p.id) : p.fam === st.fam));
    const aantal = alle.filter((p) => geproefd(p.id)).length;
    const groepen = L().FAMILIES.map((f) => ({ f, ps: lijst.filter((p) => p.fam === f.id) })).filter((g) => g.ps.length);
    return `<p class="leer-voortgang"><b>${aantal} van ${alle.length}</b> kruiden geproefd</p>
      <div class="kruiden-filter">${filters.map(([id, l]) => `<button type="button" class="chip" data-leer-fam="${id}" aria-pressed="${st.fam === id}">${esc(l)}</button>`).join('')}</div>
      ${groepen.map(({ f, ps }) => `<section class="leer-groep" style="--fam:${f.kleur}">
        <h3 class="leer-groep-kop">${esc(f.naam)}</h3><p class="hint">${esc(f.over)}</p>
        <div class="kruiden-lijst">${ps.map(kaart).join('')}</div></section>`).join('')
        || '<p class="hint">Niets meer over: je hebt ze allemaal geproefd!</p>'}`;
  }

  /* ---------- Proefjes ---------- */
  function renderProefjes() {
    const klaar = gedaan();
    return `<p class="hint">Alles kan met de rijstkoker, een koekenpan en een paar kommetjes. Begin met de ruiktest en de rijsttest; de rest kan in elke volgorde. Tik op <b>Gedaan</b> als je een proefje hebt gedaan.</p>
      <div class="leer-proefjes">${L().PROEFJES.map((p, i) => `<article class="kruid leer-proefje" id="proefje-${p.id}">
        <div class="kruid-kop"><p class="kruid-soort">Proefje ${i + 1} · ${esc(p.tijd)}</p>
          ${klaar[p.id] ? '<span class="leer-label leer-label-ok">✓ Gedaan</span>' : ''}</div>
        <h3>${esc(p.titel)}</h3>
        <p>${esc(p.kort)}</p>
        <p><b>Nodig:</b> ${esc(p.nodig)}</p>
        <ol class="leer-stappen">${p.stappen.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
        <p class="kruid-tip">${esc(p.leer)}</p>
        ${p.kruiden.length ? `<p class="kruid-recepten"><b>Goed voor:</b> ${p.kruiden.map(kruidLink).join(', ')}</p>` : ''}
        <button type="button" class="knop knop-klein${klaar[p.id] ? '' : ' knop-heb'}" data-leer-gedaan="${p.id}">${klaar[p.id] ? 'Toch nog niet gedaan' : '✓ Gedaan'}</button>
      </article>`).join('')}</div>`;
  }

  /* ---------- Leerroute ---------- */
  function renderRoute() {
    const klaar = gedaan();
    return `<p class="hint">Acht korte proefsessies van ongeveer 20 minuten, van makkelijk naar moeilijk. Een sessie is af als je alle kruiden ervan als geproefd hebt aangevinkt. Kook daarna het recept: proef je de kruiden erin terug?</p>
      <ol class="leer-route">${L().ROUTE.map((s, i) => {
        const af = s.kruiden.filter(geproefd).length;
        const klaarSessie = af === s.kruiden.length;
        const r = ctx.recept(s.recept);
        return `<li class="kruid leer-sessie${klaarSessie ? ' leer-sessie-af' : ''}">
          <div class="kruid-kop"><p class="kruid-soort">Sessie ${i + 1}</p><span class="leer-label${klaarSessie ? ' leer-label-ok' : ''}">${klaarSessie ? '✓ Af' : `${af} van ${s.kruiden.length}`}</span></div>
          <h3>${esc(s.titel)}</h3>
          <p>${esc(s.over)}</p>
          <p><b>Kruiden:</b> ${s.kruiden.map((id) => `${kruidLink(id)}${geproefd(id) ? ' ✓' : ''}`).join(', ')}</p>
          <p><b>Proefjes:</b> ${s.proefjes.map((id) => `<a href="#proefje-${id}" data-leer-proefje="${id}">${esc(proefje(id).titel)}</a>${klaar[id] ? ' ✓' : ''}`).join(', ')}</p>
          ${r ? `<p><b>Daarna koken:</b> <a href="#${r.id}" data-open-recept="${r.id}">${esc(r.naam)}</a></p>` : ''}
        </li>`;
      }).join('')}</ol>`;
  }

  /* ---------- Herken je het? ---------- */
  function nieuweVraag() {
    const inKast = ctx.inKast();
    let pool = L().PROFIELEN.filter((p) => inKast.has(p.id));
    if (pool.length < 4) pool = L().PROFIELEN.slice();
    const vorige = st.vraag && st.vraag.id;
    const kandidaten = pool.filter((p) => p.id !== vorige);
    const p = kandidaten[Math.floor(Math.random() * kandidaten.length)];
    const anderen = pool.filter((x) => x.id !== p.id).sort(() => Math.random() - 0.5).slice(0, 3);
    st.vraag = { id: p.id, opties: [p, ...anderen].map((x) => x.id).sort(() => Math.random() - 0.5), antwoord: null };
  }
  function renderQuiz() {
    if (!st.vraag) nieuweVraag();
    const v = st.vraag, p = profiel(v.id);
    const opt = v.opties.map((id) => {
      let cls = '';
      if (v.antwoord) cls = id === v.id ? ' leer-goed' : id === v.antwoord ? ' leer-fout' : '';
      return `<button type="button" class="knop leer-optie${cls}" data-leer-antwoord="${id}"${v.antwoord ? ' disabled' : ''}>${esc(kortNaam(id))}</button>`;
    }).join('');
    const uitslag = v.antwoord
      ? `<p class="leer-uitslag">${v.antwoord === v.id ? '<b>Goed!</b>' : `<b>Niet goed.</b> Het was ${esc(kortNaam(v.id))}.`} ${esc(p.doet)}</p>
         <p class="leer-quiz-knoppen"><button type="button" class="knop knop-heb" data-leer-volgende>Volgende</button> <a href="#leer-${v.id}" data-leer-naar="${v.id}">Bekijk de kaart</a></p>`
      : '';
    return `<p class="hint">Welk kruid is dit? Vragen komen uit de kruiden in je kast. Pak het potje er gerust bij en ruik!</p>
      <article class="kruid leer-quiz">
        <p class="kruid-soort">Vraag ${st.gesteld + (v.antwoord ? 0 : 1)}${st.gesteld ? ` · ${st.goed} van ${st.gesteld} goed` : ''}</p>
        <p class="leer-quiz-tekst"><span aria-hidden="true">👃</span> ${esc(p.geur)}</p>
        <p class="leer-quiz-tekst"><span aria-hidden="true">👅</span> ${esc(p.smaak)}</p>
        <div class="leer-opties">${opt}</div>
        ${uitslag}
      </article>`;
  }

  /* ---------- Weergave ---------- */
  const DELEN = [['kruiden', 'Kruiden'], ['proefjes', 'Proefjes'], ['route', 'Leerroute'], ['quiz', 'Herken je het?']];
  function render() {
    if (!el) return;
    const inhoud = { kruiden: renderKruiden, proefjes: renderProefjes, route: renderRoute, quiz: renderQuiz }[st.deel]();
    el.innerHTML = `<div class="lijst-kop"><div>
        <h2>Leren: kruiden ruiken en proeven</h2>
        <p class="hint">Hoe ruikt en smaakt elk kruid, wat doet het in een gerecht en waar past het bij? Met proefjes om thuis te doen en je eigen notities.</p>
      </div></div>
      <div class="segment leer-delen" role="group" aria-label="Onderdeel">${DELEN.map(([id, l]) => `<button type="button" data-leer-deel="${id}" aria-pressed="${st.deel === id}">${l}</button>`).join('')}</div>
      <div class="leer-inhoud">${inhoud}</div>`;
  }

  function scrollNaar(elId) {
    requestAnimationFrame(() => {
      const doel = document.getElementById(elId);
      if (!doel) return;
      doel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (doel.classList.contains('leer-kaart')) doel.classList.add('leer-licht');
      setTimeout(() => doel.classList.remove('leer-licht'), 1600);
    });
  }

  /* Open de kaart van één kruid (vanuit de kast of een link). */
  function toon(id) {
    st.deel = 'kruiden';
    if (st.fam && !(st.fam === 'kast' ? ctx.inKast().has(id) : st.fam === 'nog' ? !geproefd(id) : (profiel(id) || {}).fam === st.fam)) st.fam = '';
    render();
    scrollNaar('leer-' + id);
  }

  function init(container, context) {
    el = container; ctx = context;
    el.addEventListener('click', (e) => {
      const t = e.target;
      const deel = t.closest('[data-leer-deel]');
      if (deel) { st.deel = deel.dataset.leerDeel; render(); return; }
      const f = t.closest('[data-leer-fam]');
      if (f) { st.fam = f.dataset.leerFam; render(); return; }
      const naar = t.closest('[data-leer-naar]');
      if (naar) { e.preventDefault(); toon(naar.dataset.leerNaar); return; }
      const pj = t.closest('[data-leer-proefje]');
      if (pj) { e.preventDefault(); st.deel = 'proefjes'; render(); scrollNaar('proefje-' + pj.dataset.leerProefje); return; }
      const ster = t.closest('[data-leer-ster]');
      if (ster) {
        const id = ster.dataset.leerSter, w = +ster.dataset.waarde;
        const nu = notitie(id).sterren === w ? 0 : w;
        zetNotitie(id, { sterren: nu, geproefd: notitie(id).geproefd || (nu ? Date.now() : 0) });
        return herteken(id);
      }
      const g = t.closest('[data-leer-gedaan]');
      if (g) {
        const id = g.dataset.leerGedaan, p = { ...gedaan() };
        if (p[id]) delete p[id]; else p[id] = Date.now();
        bewaar({ p }); render(); scrollNaar('proefje-' + id); return;
      }
      const a = t.closest('[data-leer-antwoord]');
      if (a && st.vraag && !st.vraag.antwoord) {
        st.vraag.antwoord = a.dataset.leerAntwoord;
        st.gesteld++; if (st.vraag.antwoord === st.vraag.id) st.goed++;
        render(); return;
      }
      if (t.closest('[data-leer-volgende]')) { nieuweVraag(); render(); return; }
      const r = t.closest('[data-open-recept]');
      if (r) { e.preventDefault(); ctx.open(r.dataset.openRecept); }
    });
    el.addEventListener('change', (e) => {
      const c = e.target.closest('[data-leer-geproefd]');
      if (c) { zetNotitie(c.dataset.leerGeproefd, { geproefd: c.checked ? Date.now() : 0 }); herteken(c.dataset.leerGeproefd); }
    });
    // Notitie bewaren terwijl je typt, zonder de kaart opnieuw te tekenen (dan blijft je cursor staan).
    el.addEventListener('input', (e) => {
      const ta = e.target.closest('[data-leer-tekst]');
      if (ta) zetNotitie(ta.dataset.leerTekst, { tekst: ta.value.trim() ? ta.value : '' });
    });
    el.addEventListener('focusout', (e) => {
      const ta = e.target.closest('[data-leer-tekst]');
      if (ta && ta.value.trim() && !geproefd(ta.dataset.leerTekst)) { zetNotitie(ta.dataset.leerTekst, { geproefd: Date.now() }); herteken(ta.dataset.leerTekst); }
    });
  }

  /* Eén kaart opnieuw tekenen (sterren, vinkje, labels), met de notitie open. */
  function herteken(id) {
    const oud = document.getElementById('leer-' + id);
    if (!oud || st.deel !== 'kruiden') return render();
    const tmp = document.createElement('div');
    tmp.innerHTML = kaart(profiel(id));
    const nieuw = tmp.firstElementChild;
    const d = nieuw.querySelector('details');
    if (d) d.open = true;
    oud.replaceWith(nieuw);
    const v = el.querySelector('.leer-voortgang');
    if (v) v.innerHTML = `<b>${L().PROFIELEN.filter((p) => geproefd(p.id)).length} van ${L().PROFIELEN.length}</b> kruiden geproefd`;
  }

  return {
    init, render, toon,
    heeft: (id) => !!profiel(id),
    herlaad() { data = opslag.lees(SLEUTEL, {}); }
  };
})();
