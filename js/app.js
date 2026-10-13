/* Overzicht: filters, voorraad, mijn keuken, kaarten en navigatie. */
const App = (() => {
  const $ = (s) => document.querySelector(s);
  const { opslag, esc } = Hulp;

  const KEUKENS = [...new Set(RECEPTEN.map((r) => r.keuken))].sort((a, b) => a.localeCompare(b, 'nl'));
  const SOORTEN = ['Hoofdgerecht', 'Soep', 'Salade & bijgerecht', 'Ontbijt & lunch', 'Dessert'].filter((s) => RECEPTEN.some((r) => r.soort === s));
  const TIJDEN = [20, 30, 45, 60];
  const APPARATEN = Object.entries(GEREEDSCHAP).filter(([, g]) => g.apparaat);
  const standaardKeuken = APPARATEN.filter(([, g]) => g.standaard).map(([k]) => k);
  const standaardPannen = Object.entries(PANNEN).filter(([, p]) => p.standaard).map(([k]) => k);
  const BEREID = [['braadpan', 'Dutch oven'], ['koekenpan', 'Koekenpan'], ['oven', 'Oven'], ['airfryer', 'Airfryer'], ['slowcooker', 'Slowcooker'], ['wok', 'Wok']];
  const BEREID_PER_RECEPT = new Map(RECEPTEN.map((r) => [r.id, Hulp.bereidIn(r)]));
  const ALIASSEN = { indisch: ['indonesisch', 'indiaas', 'surinaams'], 'dutch oven': ['braadpan', 'stoofpan'], dutchoven: ['braadpan'] };
  const ZOEKTEKST = new Map(RECEPTEN.map((r) => [r.id, Hulp.norm([r.naam, r.keuken, r.soort, r.intro, ...r.ingr.map((i) => i.n || ''), ...r.gerei.map((g) => g.tekst)].join(' | '))]));

  const state = {
    view: 'alle',
    zoek: '',
    keukens: new Set(),
    soorten: new Set(),
    tijd: null,
    vega: false,
    voorraad: opslag.lees('voorraad', []),
    basis: opslag.lees('basis', true),
    compleet: false,
    keuken: opslag.lees('keuken', standaardKeuken),
    pannen: opslag.lees('pannen', standaardPannen),
    bereid: new Set(),
    maakbaar: false,
    sorteer: 'match',
    favs: new Set(opslag.lees('favorieten', []))
  };

  const mijnKeuken = () => [...state.keuken, ...state.pannen];
  const icoon = (naam) => `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-${naam}"/></svg>`;

  /* ---------- Toast ---------- */
  let toastTimer = null;
  function toast(tekst) {
    const el = $('#toast');
    el.textContent = tekst;
    el.classList.add('zichtbaar');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('zichtbaar'), 2600);
  }

  /* ---------- Filters opbouwen ---------- */
  function chip(groep, waarde, label, aan) {
    return `<button type="button" class="chip" data-groep="${groep}" data-waarde="${esc(waarde)}" aria-pressed="${aan}">${esc(label)}</button>`;
  }

  function renderFilters() {
    const aantalPer = (veld, w) => RECEPTEN.filter((r) => r[veld] === w).length;
    $('#f-keuken').innerHTML = KEUKENS.map((k) => chip('keuken', k, `${k} ${aantalPer('keuken', k)}`, state.keukens.has(k))).join('');
    $('#f-soort').innerHTML = SOORTEN.map((s) => chip('soort', s, s, state.soorten.has(s))).join('');
    $('#f-tijd').innerHTML = TIJDEN.map((t) => chip('tijd', t, `≤ ${t} min`, state.tijd === t)).join('');
    $('#f-bereid').innerHTML = BEREID.map(([k, l]) => chip('bereid', k, l, state.bereid.has(k))).join('');
    $('#f-vega').checked = state.vega;
    $('#basis').checked = state.basis;
    $('#alleen-compleet').checked = state.compleet;
    $('#f-maakbaar').checked = state.maakbaar;
    const optie = (attr, k, item, aan) => `
      <label class="gerei-optie">
        <input type="checkbox" ${attr}="${k}" ${aan ? 'checked' : ''}>
        <span class="tegel tegel-mini">${icoon(item.icoon)}</span>
        <span class="gerei-optie-tekst">${esc(item.naam)}${item.sub ? `<small>${esc(item.sub)}</small>` : ''}</span>
      </label>`;
    $('#mijn-keuken').innerHTML = `
      <p class="gerei-groep">Pannen</p>
      <div class="gerei-keuze pannen">${Object.entries(PANNEN).map(([k, p]) => optie('data-pan', k, p, state.pannen.includes(k))).join('')}</div>
      <p class="gerei-groep">Apparaten</p>
      <div class="gerei-keuze">${APPARATEN.map(([k, g]) => optie('data-tool', k, g, state.keuken.includes(k))).join('')}</div>`;
    renderVoorraad();
  }

  function renderVoorraad() {
    $('#voorraad-chips').innerHTML = state.voorraad.map((v) =>
      `<button type="button" class="chip chip-voorraad" data-weg-voorraad="${esc(v)}" aria-label="Verwijder ${esc(v)}">${esc(v)} ${icoon('sluit')}</button>`).join('');
  }

  function vulDatalist() {
    const namen = new Set();
    RECEPTEN.forEach((r) => Hulp.ingrediënten(r).forEach((i) => { if (!Hulp.isBasis(i)) namen.add(i.n.toLowerCase()); }));
    $('#ingr-lijst').innerHTML = [...namen].sort((a, b) => a.localeCompare(b, 'nl')).map((n) => `<option value="${esc(n)}"></option>`).join('');
  }

  /* ---------- Filteren en sorteren ---------- */
  function zoektermPast(r, q) {
    const t = Hulp.norm(q);
    if (!t) return true;
    const tekst = ZOEKTEKST.get(r.id);
    return [t, ...(ALIASSEN[t] || [])].some((x) => tekst.includes(x));
  }

  function resultaten() {
    const metVoorraad = state.voorraad.length > 0;
    let lijst = RECEPTEN.map((r) => ({
      r,
      m: metVoorraad ? Hulp.match(r, state.voorraad, state.basis) : null,
      maakbaar: Hulp.maakbaar(r, mijnKeuken())
    }));
    lijst = lijst.filter(({ r, m, maakbaar }) =>
      (state.view !== 'fav' || state.favs.has(r.id)) &&
      zoektermPast(r, state.zoek) &&
      (!state.keukens.size || state.keukens.has(r.keuken)) &&
      (!state.soorten.size || state.soorten.has(r.soort)) &&
      (!state.tijd || r.tijd <= state.tijd) &&
      (!state.bereid.size || [...state.bereid].some((t) => BEREID_PER_RECEPT.get(r.id).has(t))) &&
      (!state.vega || r.vega) &&
      (!state.maakbaar || maakbaar) &&
      (!metVoorraad || m.heb.length > 0) &&
      (!metVoorraad || !state.compleet || m.mist.length === 0)
    );
    const opNaam = (a, b) => a.r.naam.localeCompare(b.r.naam, 'nl');
    const sorteer = {
      match: (a, b) => metVoorraad ? (a.m.mist.length - b.m.mist.length) || (b.m.pct - a.m.pct) || opNaam(a, b) : opNaam(a, b),
      naam: opNaam,
      tijd: (a, b) => (a.r.tijd - b.r.tijd) || opNaam(a, b),
      keuken: (a, b) => a.r.keuken.localeCompare(b.r.keuken, 'nl') || opNaam(a, b)
    }[state.sorteer];
    return lijst.sort(sorteer);
  }

  /* ---------- Kaarten ---------- */
  function hoofdTool(r) {
    if (r.methodes && r.methodes.length) return r.methodes[0].id;
    const g = r.gerei.find((x) => !x.m);
    return g ? g.tool : 'koekenpan';
  }

  function gereiRegel(r) {
    if (r.methodes && r.methodes.length) {
      return r.methodes.map((m) => {
        const heb = Hulp.heeftTool(m.id, state.keuken);
        const naam = m.naam === 'Braadpan' && state.pannen.includes('dutchoven') ? 'Dutch oven' : m.naam;
        return `<span class="${heb ? '' : 'doorgestreept'}">${esc(naam)}</span>`;
      }).join('<span class="punt" aria-hidden="true">·</span>');
    }
    const namen = [...new Set(r.gerei.filter((g) => !g.m).map((g) => (GEREEDSCHAP[g.tool] || {}).naam).filter(Boolean))];
    return namen.map((n) => `<span>${esc(n)}</span>`).join('<span class="punt" aria-hidden="true">·</span>');
  }

  function kaart({ r, m, maakbaar }) {
    const fav = state.favs.has(r.id);
    const foto = window.FOTOS && FOTOS[r.id];
    const tegelIcoon = icoon((GEREEDSCHAP[hoofdTool(r)] || {}).icoon || 'koekenpan');
    const matchHtml = m ? `
      <div class="match${m.mist.length === 0 ? ' is-compleet' : ''}">
        <div class="match-balk" aria-hidden="true"><span style="width:${Math.round(m.pct * 100)}%"></span></div>
        <span class="match-tekst">${m.mist.length === 0 ? 'Alles in huis' : `${m.heb.length} van ${m.totaal} in huis`}</span>
      </div>
      ${m.mist.length ? `<p class="mist-tekst"><span>Mist:</span> ${esc(m.mist.slice(0, 4).join(', '))}${m.mist.length > 4 ? ` en nog ${m.mist.length - 4}` : ''}</p>` : ''}` : '';
    return `
      <article class="kaart${maakbaar ? '' : ' niet-maakbaar'}${foto ? ' met-foto' : ''}">
        <a class="kaart-link" href="#${r.id}" data-open="${r.id}">
          ${foto
            ? `<span class="kaart-foto"><img src="${esc(foto.src)}" alt="" loading="lazy" decoding="async"><span class="tegel tegel-mini kaart-foto-tegel" aria-hidden="true">${tegelIcoon}</span></span>`
            : `<span class="tegel kaart-tegel" aria-hidden="true">${tegelIcoon}</span>`}
          <span class="kaart-body">
            <span class="eyebrow">${esc(r.keuken)} · ${esc(r.soort)}</span>
            <span class="kaart-titel">${esc(r.naam)}</span>
            <span class="kaart-meta">
              <span>${icoon('klok')} ${Hulp.tijdTekst(r.tijd)}${r.wacht ? '<span class="plus">+</span>' : ''}</span>
              <span>${icoon('personen')} ${r.pers}</span>
              ${r.vega ? `<span class="vega">${icoon('blad')} Vega</span>` : ''}
            </span>
            <span class="kaart-gerei">${gereiRegel(r)}</span>
            ${maakbaar ? '' : '<span class="label-mist">Je mist apparatuur</span>'}
          </span>
        </a>
        ${matchHtml ? `<div class="kaart-voet">${matchHtml}</div>` : ''}
        <button type="button" class="ikoon-knop fav-knop kaart-fav" data-fav="${r.id}" aria-pressed="${fav}" aria-label="${fav ? 'Verwijder' : 'Bewaar'} ${esc(r.naam)} ${fav ? 'uit' : 'bij'} favorieten">${icoon('hart')}</button>
      </article>`;
  }

  function actieveFilters() {
    const items = [];
    state.keukens.forEach((k) => items.push(['keuken', k, k]));
    state.soorten.forEach((s) => items.push(['soort', s, s]));
    if (state.tijd) items.push(['tijd', state.tijd, `≤ ${state.tijd} min`]);
    state.bereid.forEach((b) => items.push(['bereid', b, BEREID.find(([k]) => k === b)[1]]));
    if (state.vega) items.push(['vega', '1', 'Vegetarisch']);
    if (state.maakbaar) items.push(['maakbaar', '1', 'Past bij mijn keuken']);
    if (state.compleet) items.push(['compleet', '1', 'Alles in huis']);
    return items;
  }

  function render() {
    const lijst = resultaten();
    $('#raster').innerHTML = lijst.map(kaart).join('');
    const leeg = !lijst.length;
    $('#leeg').hidden = !leeg;
    if (leeg && state.view === 'fav' && !state.favs.size) {
      $('#leeg-titel').textContent = 'Nog geen favorieten';
      $('#leeg-tekst').textContent = 'Tik op het hartje bij een recept om het hier te bewaren.';
      $('#leeg-wis').hidden = true;
    } else {
      $('#leeg-titel').textContent = 'Geen recepten gevonden';
      $('#leeg-tekst').textContent = state.voorraad.length
        ? 'Geen recept gebruikt deze ingrediënten met de huidige filters. Haal een filter weg of voeg meer ingrediënten toe.'
        : 'Probeer een andere zoekterm of minder filters.';
      $('#leeg-wis').hidden = false;
    }

    const n = lijst.length;
    let tekst = `${n} ${n === 1 ? 'recept' : 'recepten'}`;
    if (state.view === 'fav') tekst += ' in je favorieten';
    if (state.voorraad.length) tekst += `, gesorteerd op wat je in huis hebt`;
    $('#resultaat-tekst').textContent = tekst;

    const af = actieveFilters();
    $('#actieve-filters').innerHTML = af.map(([g, w, l]) =>
      `<button type="button" class="chip chip-actief" data-wis-groep="${g}" data-wis-waarde="${esc(w)}" aria-label="Wis filter ${esc(l)}">${esc(l)} ${icoon('sluit')}</button>`).join('');
    const aantal = af.length + state.voorraad.length;
    $('#filter-aantal').textContent = aantal || '';

    $('#fav-aantal').textContent = state.favs.size || '';
    $('#lijst-aantal').textContent = Boodschappen.aantalOpen() || '';
  }

  function renderLijst() {
    Boodschappen.render($('#boodschappen'), $('#lijst-sub'));
    $('#lijst-aantal').textContent = Boodschappen.aantalOpen() || '';
  }

  /* ---------- Weergave wisselen ---------- */
  function zetView(view) {
    state.view = view;
    document.querySelectorAll('.tab').forEach((t) => t.setAttribute('aria-pressed', String(t.dataset.view === view)));
    $('#view-recepten').hidden = view === 'lijst';
    $('#view-lijst').hidden = view !== 'lijst';
    document.body.classList.toggle('view-lijst', view === 'lijst');
    if (view === 'lijst') renderLijst(); else render();
    window.scrollTo({ top: 0 });
  }

  /* ---------- Recept openen en sluiten ---------- */
  const context = {
    get keuken() { return mijnKeuken(); },
    isFav: (id) => state.favs.has(id),
    wisselFav: (id) => wisselFav(id),
    sluit: () => sluitRecept()
  };

  function openRecept(id, viaHistorie) {
    const r = RECEPTEN.find((x) => x.id === id);
    if (!r) return;
    Detail.open(r, context);
    if (!viaHistorie) {
      try { history.pushState({ recept: id }, '', '#' + id); } catch (e) { /* geen historie beschikbaar */ }
    }
  }

  function sluitRecept() {
    if (history.state && history.state.recept) {
      try { history.back(); return; } catch (e) { /* val terug op direct sluiten */ }
    }
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) { /* genegeerd */ }
    Detail.sluit();
  }

  window.addEventListener('popstate', () => {
    const id = location.hash.slice(1);
    if (id && RECEPTEN.some((r) => r.id === id)) openRecept(id, true);
    else Detail.sluit();
  });

  function wisselFav(id) {
    if (state.favs.has(id)) state.favs.delete(id); else state.favs.add(id);
    opslag.schrijf('favorieten', [...state.favs]);
    render();
    return state.favs.has(id);
  }

  /* ---------- Gebeurtenissen ---------- */
  function bewaarVoorraad() { opslag.schrijf('voorraad', state.voorraad); renderVoorraad(); render(); }

  function wisAlles() {
    state.keukens.clear(); state.soorten.clear(); state.bereid.clear(); state.tijd = null; state.vega = false;
    state.maakbaar = false; state.compleet = false; state.voorraad = []; state.zoek = '';
    $('#zoek').value = '';
    opslag.schrijf('voorraad', []);
    renderFilters(); render();
  }

  function koppel() {
    let zoekTimer;
    $('#zoek').addEventListener('input', (e) => {
      clearTimeout(zoekTimer);
      zoekTimer = setTimeout(() => {
        state.zoek = e.target.value;
        if (state.view === 'lijst') zetView('alle'); else render();
      }, 120);
    });

    document.querySelectorAll('.tab').forEach((t) => t.addEventListener('click', () => zetView(t.dataset.view)));

    $('#paneel').addEventListener('click', (e) => {
      const c = e.target.closest('[data-groep]');
      if (c) {
        const { groep, waarde } = c.dataset;
        if (groep === 'keuken') state.keukens.has(waarde) ? state.keukens.delete(waarde) : state.keukens.add(waarde);
        if (groep === 'soort') state.soorten.has(waarde) ? state.soorten.delete(waarde) : state.soorten.add(waarde);
        if (groep === 'tijd') state.tijd = state.tijd === +waarde ? null : +waarde;
        if (groep === 'bereid') state.bereid.has(waarde) ? state.bereid.delete(waarde) : state.bereid.add(waarde);
        renderFilters(); render();
        return;
      }
      const v = e.target.closest('[data-weg-voorraad]');
      if (v) {
        state.voorraad = state.voorraad.filter((x) => x !== v.dataset.wegVoorraad);
        bewaarVoorraad();
      }
    });

    $('#paneel').addEventListener('change', (e) => {
      const t = e.target;
      if (t.id === 'f-vega') state.vega = t.checked;
      if (t.id === 'basis') { state.basis = t.checked; opslag.schrijf('basis', t.checked); }
      if (t.id === 'alleen-compleet') state.compleet = t.checked;
      if (t.id === 'f-maakbaar') state.maakbaar = t.checked;
      if (t.dataset.tool) {
        state.keuken = APPARATEN.map(([k]) => k).filter((k) => $(`[data-tool="${k}"]`).checked);
        opslag.schrijf('keuken', state.keuken);
      }
      if (t.dataset.pan) {
        state.pannen = Object.keys(PANNEN).filter((k) => $(`[data-pan="${k}"]`).checked);
        opslag.schrijf('pannen', state.pannen);
      }
      render();
    });

    $('#voorraad-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const veld = $('#voorraad-input');
      const nieuw = veld.value.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
      nieuw.forEach((n) => { if (!state.voorraad.includes(n)) state.voorraad.push(n); });
      veld.value = '';
      if (nieuw.length) { state.sorteer = 'match'; $('#sorteer').value = 'match'; bewaarVoorraad(); }
    });

    $('#sorteer').addEventListener('change', (e) => { state.sorteer = e.target.value; render(); });

    $('#actieve-filters').addEventListener('click', (e) => {
      const c = e.target.closest('[data-wis-groep]');
      if (!c) return;
      const { wisGroep: g, wisWaarde: w } = c.dataset;
      if (g === 'keuken') state.keukens.delete(w);
      if (g === 'soort') state.soorten.delete(w);
      if (g === 'tijd') state.tijd = null;
      if (g === 'bereid') state.bereid.delete(w);
      if (g === 'vega') state.vega = false;
      if (g === 'maakbaar') state.maakbaar = false;
      if (g === 'compleet') state.compleet = false;
      renderFilters(); render();
    });

    $('#wis-filters').addEventListener('click', wisAlles);
    $('#leeg-wis').addEventListener('click', wisAlles);

    $('#raster').addEventListener('click', (e) => {
      const f = e.target.closest('[data-fav]');
      if (f) { const aan = wisselFav(f.dataset.fav); toast(aan ? 'Bewaard bij je favorieten' : 'Verwijderd uit je favorieten'); return; }
      const a = e.target.closest('[data-open]');
      if (a && !e.metaKey && !e.ctrlKey) { e.preventDefault(); openRecept(a.dataset.open); }
    });

    // Filterpaneel als schuiflade op kleine schermen.
    const zetPaneel = (open) => {
      document.body.classList.toggle('paneel-open', open);
      $('#filter-knop').setAttribute('aria-expanded', String(open));
      if (open) $('#paneel').scrollTop = 0;
    };
    $('#filter-knop').addEventListener('click', () => zetPaneel(!document.body.classList.contains('paneel-open')));
    $('#paneel-sluit').addEventListener('click', () => zetPaneel(false));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && document.body.classList.contains('paneel-open')) zetPaneel(false); });

    // Boodschappenlijst
    $('#boodschappen').addEventListener('change', (e) => { if (e.target.dataset.k) Boodschappen.wissel(e.target.dataset.k, e.target.checked); });
    $('#boodschappen').addEventListener('click', (e) => { const b = e.target.closest('[data-weg]'); if (b) Boodschappen.verwijder(b.dataset.weg); });
    $('#lijst-form').addEventListener('submit', (e) => { e.preventDefault(); Boodschappen.voegEigenToe($('#lijst-input').value); $('#lijst-input').value = ''; });
    $('#lijst-afgevinkt').addEventListener('click', () => Boodschappen.wisAfgevinkt());
    $('#lijst-wis').addEventListener('click', () => { $('#lijst-bevestig').hidden = false; });
    $('#lijst-wis-nee').addEventListener('click', () => { $('#lijst-bevestig').hidden = true; });
    $('#lijst-wis-ja').addEventListener('click', () => { Boodschappen.wisAlles(); $('#lijst-bevestig').hidden = true; toast('Boodschappenlijst gewist'); });
    $('#lijst-kopieer').addEventListener('click', () => {
      const tekst = Boodschappen.alsTekst();
      if (!tekst) return toast('Er staat niets open op je lijst');
      const fallback = () => {
        const ta = $('#lijst-tekst');
        ta.value = tekst; ta.select();
        try { document.execCommand('copy'); toast('Lijst gekopieerd'); } catch (err) { toast('Kopiëren lukt hier niet; selecteer de lijst handmatig'); }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(tekst).then(() => toast('Lijst gekopieerd'), fallback);
      } else fallback();
    });
    document.addEventListener('lijst-gewijzigd', () => { if (state.view === 'lijst') renderLijst(); else $('#lijst-aantal').textContent = Boodschappen.aantalOpen() || ''; });
  }

  function start() {
    $('#teller').textContent = `${RECEPTEN.length} recepten uit ${KEUKENS.length} keukens · versie ${window.VERSIE || '?'}`;
    vulDatalist();
    renderFilters();
    koppel();
    render();
    const id = location.hash.slice(1);
    if (id && RECEPTEN.some((r) => r.id === id)) openRecept(id, true);
  }

  return { start, toast };
})();

App.start();
