/* Overzicht: filters, voorraad, mijn keuken, kaarten en navigatie. */
const App = (() => {
  const $ = (s) => document.querySelector(s);
  const { opslag, esc } = Hulp;

  // Hoofdstukken in boekvolgorde; een keuken die (nog) niet in HOOFDSTUKKEN staat komt achteraan.
  const KEUKENS = [...HOOFDSTUKKEN.map((h) => h.keuken), ...new Set(RECEPTEN.map((r) => r.keuken))]
    .filter((k, i, a) => a.indexOf(k) === i && RECEPTEN.some((r) => r.keuken === k));
  const HK = new Map(KEUKENS.map((k, i) => [k, { nr: i + 1, kleur: (HOOFDSTUKKEN.find((h) => h.keuken === k) || {}).kleur || '#5A5048' }]));
  const SOORTEN = ['Hoofdgerecht', 'Soep', 'Salade & bijgerecht', 'Ontbijt & lunch', 'Saus', 'Dessert'].filter((s) => RECEPTEN.some((r) => r.soort === s));
  // Paginanummers: elk hoofdstuk opent met één pagina, elk recept beslaat een dubbele pagina.
  const BLZ = new Map();
  (() => {
    let p = 9;
    KEUKENS.forEach((k) => {
      p += 1;
      // Varianten van één gerecht delen een dubbele pagina.
      RECEPTEN.filter((r) => r.keuken === k && r.groep === r.id)
        .sort((a, b) => (SOORTEN.indexOf(a.soort) - SOORTEN.indexOf(b.soort)) || VARIANTEN.gerecht(a).localeCompare(VARIANTEN.gerecht(b), 'nl'))
        .forEach((r) => { VARIANTEN.leden(r).forEach((v) => BLZ.set(v.id, p)); p += 2; });
      // Een variant in een ander hoofdstuk dan zijn basisrecept krijgt toch een eigen pagina.
      RECEPTEN.filter((r) => r.keuken === k && !BLZ.has(r.id)).forEach((r) => { BLZ.set(r.id, p); p += 2; });
    });
  })();
  // Voor "Minste ingrediënten": zout, peper, olie en water tellen niet mee, optionele ingrediënten ook niet.
  const AANTAL_INGR = new Map(RECEPTEN.map((r) => [r.id, Hulp.ingrediënten(r).filter((i) => !i.opt && !Hulp.isBasis(i)).length]));
  const NIVEAUS = ['Makkelijk', 'Gemiddeld', 'Moeilijk'];
  const hk = (keuken) => HK.get(keuken) || { nr: 0, kleur: '#5A5048' };
  const TIJDEN = [20, 30, 45, 60];
  const APPARATEN = Object.entries(GEREEDSCHAP).filter(([, g]) => g.apparaat);
  const standaardKeuken = APPARATEN.filter(([, g]) => g.standaard).map(([k]) => k);
  const standaardPannen = Object.entries(PANNEN).filter(([, p]) => p.standaard).map(([k]) => k);
  // Nieuwe apparaten met standaard: true worden ook aangevinkt bij wie "Mijn keuken" al eerder had ingesteld.
  const OUDE_APPARATEN = ['oven', 'airfryer', 'wok', 'grillpan', 'staafmixer', 'mixer', 'slowcooker', 'magnetron'];
  function laadKeuken() {
    const keuken = opslag.lees('keuken', standaardKeuken);
    const bekend = opslag.lees('apparaten-bekend', OUDE_APPARATEN);
    APPARATEN.forEach(([k, g]) => { if (!bekend.includes(k) && g.standaard && !keuken.includes(k)) keuken.push(k); });
    opslag.schrijf('apparaten-bekend', APPARATEN.map(([k]) => k), { stil: true });
    // Automatische aanpassingen houden de oude tijd, zodat ze bij synchroniseren niet winnen van een ander apparaat.
    opslag.schrijf('keuken', keuken, { tijd: opslag.tijd('keuken') || 1, stil: true });
    return keuken;
  }
  const BEREID = [['braadpan', 'Dutch oven'], ['koekenpan', 'Koekenpan'], ['oven', 'Oven'], ['airfryer', 'Airfryer'], ['contactgrill', 'Contactgrill'], ['slowcooker', 'Slowcooker'], ['wok', 'Wok']];
  const BEREID_PER_RECEPT = new Map(RECEPTEN.map((r) => [r.id, Hulp.bereidIn(r)]));
  const ALIASSEN = {
    indisch: ['indonesisch', 'indiaas', 'surinaams'], 'dutch oven': ['braadpan', 'stoofpan'], dutchoven: ['braadpan'],
    duitsland: ['duits'], oostenrijk: ['oostenrijks']
  };
  /* Zoek je op een soort gerecht ("sauzen", "toetje"), dan krijg je precies die soort,
     niet alles waar toevallig sojasaus in zit. */
  const SOORT_WOORDEN = {
    saus: 'Saus', sauzen: 'Saus', sausje: 'Saus', basissaus: 'Saus', basissauzen: 'Saus',
    dessert: 'Dessert', desserts: 'Dessert', toetje: 'Dessert', toetjes: 'Dessert', nagerecht: 'Dessert', nagerechten: 'Dessert',
    soep: 'Soep', soepen: 'Soep', hoofdgerecht: 'Hoofdgerecht', hoofdgerechten: 'Hoofdgerecht',
    ontbijt: 'Ontbijt & lunch', lunch: 'Ontbijt & lunch', bijgerecht: 'Salade & bijgerecht', bijgerechten: 'Salade & bijgerecht',
    salade: 'Salade & bijgerecht', salades: 'Salade & bijgerecht'
  };
  const splits = (tekst) => Hulp.norm(tekst).split(/[^a-z0-9]+/).filter((w) => w.length > 1);
  // Woorden per recept voor korte zoektermen en tikfouten: naam, keuken, soort, ingrediënten en gerei.
  const WOORDEN = new Map(RECEPTEN.map((r) => [r.id, new Set(splits([
    r.naam, VARIANTEN.gerecht(r), ...(r.ook || []), r.keuken, r.soort, ...r.ingr.flatMap((i) => [i.n || '', i.p || '']),
    ...r.gerei.map((g) => (GEREEDSCHAP[g.tool] || {}).naam || ''), ...(r.methodes || []).map((m) => m.naam)
  ].join(' ')))]));
  const INGR_AANTAL = new Map();
  RECEPTEN.forEach((r) => Hulp.ingrediënten(r).forEach((i) => {
    if (Hulp.isBasis(i)) return;
    const n = i.n.toLowerCase();
    INGR_AANTAL.set(n, (INGR_AANTAL.get(n) || 0) + 1);
  }));
  const INGR_NAMEN = [...INGR_AANTAL.keys()].sort((a, b) => a.localeCompare(b, 'nl'));
  const ZOEKTEKST = new Map(RECEPTEN.map((r) => [r.id, Hulp.norm([r.naam, VARIANTEN.gerecht(r), ...(r.ook || []), r.keuken, r.soort, r.intro, ...r.ingr.map((i) => i.n || ''), ...r.gerei.map((g) => g.tekst)].join(' | '))]));

  /* Tab Nieuw: de 3 recepten met de jongste datum bij toegevoegd (nieuwste eerst). */
  const NIEUW = RECEPTEN.filter((r) => r.toegevoegd)
    .sort((a, b) => b.toegevoegd.localeCompare(a.toegevoegd)).slice(0, 3).map((r) => r.id);

  const state = {
    view: 'alle',
    zoek: '',
    keukens: new Set(),
    soorten: new Set(),
    niveaus: new Set(),
    tijd: null,
    vega: false,
    voorraad: opslag.lees('voorraad', []),
    basis: opslag.lees('basis', true),
    compleet: false,
    keuken: laadKeuken(),
    pannen: opslag.lees('pannen', standaardPannen),
    bereid: new Set(),
    maakbaar: false,
    sorteer: 'keuken',
    omgekeerd: false,
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
    $('#f-soort').innerHTML = SOORTEN.map((s) => chip('soort', s, s, state.soorten.has(s))).join('');
    $('#f-niveau').innerHTML = NIVEAUS.filter((n) => RECEPTEN.some((r) => r.niveau === n)).map((n) => chip('niveau', n, n, state.niveaus.has(n))).join('');
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
    $('#voorraad-chips').innerHTML = state.voorraad.map((v) => {
      const mix = Hulp.isMix(v) ? Hulp.mixVan(v) : null;
      const label = mix ? `${mix.naam} (mix)` : v;
      return `<button type="button" class="chip chip-voorraad${mix ? ' chip-mix' : ''}" data-weg-voorraad="${esc(v)}" aria-label="Verwijder ${esc(label)}">${esc(label)} ${icoon('sluit')}</button>`;
    }).join('');
    renderIngrSuggesties();
    renderMixSuggesties();
  }

  /* Klikbare suggesties onder het invoerveld. Leeg veld: de ingrediënten die het vaakst in de recepten
     staan. Tijdens het typen: namen die beginnen met wat je typt, daarna namen waar het in zit. */
  const INGR_POPULAIR = [...INGR_AANTAL.entries()].sort((a, b) => b[1] - a[1]).map(([n]) => n);
  function ingrSuggesties(tekst) {
    const t = Hulp.norm(tekst.split(',').pop());
    const vrij = (n) => !state.voorraad.includes(n);
    if (!t) return INGR_POPULAIR.filter(vrij).slice(0, 12);
    const begin = [], erin = [];
    INGR_POPULAIR.filter(vrij).forEach((n) => {
      const g = Hulp.norm(n);
      if (g === t) begin.unshift(n);
      else if (g.startsWith(t) || g.includes(' ' + t)) begin.push(n);
      else if (t.length >= 3 && g.includes(t)) erin.push(n);
    });
    return [...begin, ...erin].slice(0, 10);
  }
  function renderIngrSuggesties() {
    $('#voorraad-sugg').innerHTML = ingrSuggesties($('#voorraad-input').value)
      .map((n) => `<button type="button" class="chip chip-sugg" data-sugg-ingr="${esc(n)}">+ ${esc(n)}</button>`).join('');
  }

  /* Groentemixen zoeken op naam, voorbeeld en wat erin zit; pas tonen als je typt. */
  function mixSuggesties(tekst) {
    const t = Hulp.norm(tekst);
    if (!t) return [];
    return GROENTEMIXEN.filter((m) => !state.voorraad.includes('mix:' + m.id)).map((m) => {
      const naam = Hulp.norm(m.naam + ' ' + m.voorbeeld);
      const score = naam.startsWith(t) ? 0 : naam.includes(t) ? 1 : m.bevat.some((b) => Hulp.norm(b).includes(t)) ? 2 : -1;
      return [m, score];
    }).filter(([, s]) => s >= 0).sort((a, b) => a[1] - b[1]).map(([m]) => m).slice(0, 6);
  }
  function renderMixSuggesties() {
    const tekst = $('#mix-input').value;
    const mixen = mixSuggesties(tekst);
    $('#mix-sugg').innerHTML = mixen.length
      ? mixen.map((m) => `<button type="button" class="chip chip-sugg chip-mix" data-sugg-mix="mix:${m.id}"><span>+ ${esc(m.naam)} <small>${esc(m.voorbeeld)}</small></span></button>`).join('')
      : (Hulp.norm(tekst) ? '<p class="hint">Geen groentemix gevonden.</p>' : '');
  }

  function voegToe(namen) {
    const nieuw = namen.map((s) => s.trim().toLowerCase()).filter((n) => n && !state.voorraad.includes(n));
    if (!nieuw.length) return;
    state.voorraad.push(...nieuw);
    state.sorteer = 'match'; $('#sorteer').value = 'match';
    bewaarVoorraad();
  }

  function voegMixToe(v) {
    const mix = Hulp.mixVan(v);
    $('#mix-input').value = '';
    if (!mix || state.voorraad.includes(v)) { renderMixSuggesties(); return; }
    state.voorraad.push(v);
    state.sorteer = 'match'; $('#sorteer').value = 'match';
    bewaarVoorraad();
    toast(`${mix.naam} toegevoegd: de recepten waar hij in past staan bovenaan`);
  }

  /* ---------- Filteren en sorteren ---------- */
  /* Elk woord uit de zoekopdracht moet passen. Korte woorden ("ei", "ui") alleen aan het begin van een woord,
     anders zou "ei" ook "geitenkaas" vinden. Met vaag = true tellen tikfouten ook mee. */
  function zoektermPast(r, q, vaag = false) {
    const heel = Hulp.norm(q).trim();
    if (!heel) return true;
    const tekst = ZOEKTEKST.get(r.id), woorden = WOORDEN.get(r.id);
    if (SOORT_WOORDEN[heel]) return r.soort === SOORT_WOORDEN[heel];
    if (ALIASSEN[heel] && ALIASSEN[heel].some((x) => tekst.includes(x))) return true;
    return heel.split(/\s+/).every((t) => {
      if ([t, ...(ALIASSEN[t] || [])].some((x) => (x.length < 4 ? [...woorden].some((w) => w.startsWith(x)) : tekst.includes(x)))) return true;
      return vaag && [...woorden].some((w) => Hulp.lijktOp(t, w));
    });
  }

  function resultaten() {
    const metVoorraad = state.voorraad.length > 0;
    let lijst = RECEPTEN.map((r) => ({
      r,
      m: metVoorraad ? Hulp.match(r, state.voorraad, state.basis) : null,
      maakbaar: Hulp.maakbaar(r, mijnKeuken())
    }));
    const filter = (vaag) => lijst.filter(({ r, m, maakbaar }) =>
      (state.view !== 'fav' || state.favs.has(r.id)) &&
      (state.view !== 'nieuw' || NIEUW.includes(r.id)) &&
      (state.view !== 'gemaakt' || Logboek.keer(r.id) > 0) &&
      zoektermPast(r, state.zoek, vaag) &&
      (!state.keukens.size || state.keukens.has(r.keuken)) &&
      (!state.soorten.size || state.soorten.has(r.soort)) &&
      (!state.niveaus.size || state.niveaus.has(r.niveau)) &&
      (!state.tijd || r.tijd <= state.tijd) &&
      (!state.bereid.size || [...state.bereid].some((t) => BEREID_PER_RECEPT.get(r.id).has(t))) &&
      (!state.vega || r.vega) &&
      (!state.maakbaar || maakbaar) &&
      (!metVoorraad || m.heb.length > 0 || isAanrader(r)) &&
      (!metVoorraad || !state.compleet || m.mist.length === 0)
    );
    // Niets gevonden? Probeer het opnieuw met tikfouten, zodat "ommelet" toch omelet vindt.
    state.vaag = false;
    let gevonden = filter(false);
    if (!gevonden.length && Hulp.norm(state.zoek).trim().length >= 3) {
      gevonden = filter(true);
      state.vaag = gevonden.length > 0;
    }
    lijst = gevonden;
    const opNaam = (a, b) => a.r.naam.localeCompare(b.r.naam, 'nl');
    const aanrader = (x) => (isAanrader(x.r) ? 0 : 1);
    const opBlz = (a, b) => BLZ.get(a.r.id) - BLZ.get(b.r.id);
    const fav = (x) => (state.favs.has(x.r.id) ? 0 : 1);
    const sorteer = {
      match: (a, b) => metVoorraad ? (aanrader(a) - aanrader(b)) || (a.m.mist.length - b.m.mist.length) || (b.m.pct - a.m.pct) || opBlz(a, b) : opBlz(a, b),
      naam: opNaam,
      tijd: (a, b) => (a.r.tijd - b.r.tijd) || opBlz(a, b),
      ingr: (a, b) => (AANTAL_INGR.get(a.r.id) - AANTAL_INGR.get(b.r.id)) || (a.r.tijd - b.r.tijd) || opNaam(a, b),
      niveau: (a, b) => (NIVEAUS.indexOf(a.r.niveau) - NIVEAUS.indexOf(b.r.niveau)) || (a.r.tijd - b.r.tijd) || opBlz(a, b),
      soort: (a, b) => (SOORTEN.indexOf(a.r.soort) - SOORTEN.indexOf(b.r.soort)) || opNaam(a, b),
      fav: (a, b) => (fav(a) - fav(b)) || opBlz(a, b),
      keuken: opBlz,
      nieuw: (a, b) => NIEUW.indexOf(a.r.id) - NIEUW.indexOf(b.r.id)
    }[state.view === 'nieuw' ? 'nieuw' : state.sorteer];
    lijst.sort(sorteer);
    if (state.omgekeerd) lijst.reverse();
    return perGerecht(lijst);
  }

  /* Elk gerecht één keer in het overzicht. Past het basisrecept, dan staat dat op de kaart;
     anders de variant die het best past (bijvoorbeeld de kipversie als je op "kip" zoekt).
     Met voorraad wint de variant waarvoor je het minst hoeft te halen. */
  function perGerecht(lijst) {
    const opPlek = new Map();
    const uit = [];
    lijst.forEach((x) => {
      const g = x.r.groep;
      if (!opPlek.has(g)) { opPlek.set(g, uit.length); uit.push(x); return; }
      if (x.r.id === g && !state.voorraad.length) uit[opPlek.get(g)] = x;
    });
    return uit;
  }

  /* ---------- Groentemixen ---------- */
  const mixenInVoorraad = () => state.voorraad.filter(Hulp.isMix).map(Hulp.mixVan).filter(Boolean);
  const isAanrader = (r) => mixenInVoorraad().some((m) => (m.aanraders || []).some((id) => id === r.id || id === r.groep));

  function renderMixInfo() {
    const mixen = mixenInVoorraad();
    $('#mix-info').innerHTML = mixen.map((m) => `
      <aside class="mix-kaart">
        <h3>Je ${esc(m.naam.toLowerCase())}</h3>
        <p class="mix-bevat">Zit er meestal in: ${esc(m.bevat.slice(0, 8).join(', '))}.</p>
        <p><b>Zo gebruik je hem:</b> ${esc(m.bereiding)}</p>
        <p><b>Snel idee:</b> ${esc(m.snel)}</p>
        <p class="mix-aanraders"><b>Past het best in:</b> ${(m.aanraders || []).map((id) => RECEPTEN.find((r) => r.id === id)).filter(Boolean)
          .map((r) => `<a href="#${r.id}" data-open="${r.id}">${esc(r.naam)}</a>`).join(', ')}</p>
      </aside>`).join('');
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
    // Apparatuur die je niet hebt, staat doorgestreept: zo zie je waarom een kaart 'Je mist apparatuur' heeft.
    const tools = [...new Set(r.gerei.filter((g) => !g.m && GEREEDSCHAP[g.tool]).map((g) => g.tool))];
    return tools.map((t) => `<span class="${Hulp.heeftTool(t, mijnKeuken()) || !r.gerei.some((g) => g.tool === t && !g.m && !g.of) ? '' : 'doorgestreept'}">${esc(GEREEDSCHAP[t].naam)}</span>`)
      .join('<span class="punt" aria-hidden="true">·</span>');
  }

  /* Bord-illustratie in de kleur van het hoofdstuk, voor recepten zonder foto. */
  const bord = (r, extra = '') => `<span class="bord${extra}" aria-hidden="true">${icoon((GEREEDSCHAP[hoofdTool(r)] || {}).icoon || 'koekenpan')}</span>`;

  function kaart({ r, m, maakbaar }) {
    const fav = state.favs.has(r.id);
    const foto = Hulp.foto(r);
    const h = hk(r.keuken);
    const gemaakt = VARIANTEN.leden(r).reduce((som, v) => som + Logboek.keer(v.id), 0);
    // NIEUW zolang het recept in de tab Nieuw staat; is alleen een andere variant nieuw, dan met de naam van die variant.
    const nieuweVariant = NIEUW.includes(r.id) ? null : VARIANTEN.leden(r).find((v) => NIEUW.includes(v.id));
    const nieuw = NIEUW.includes(r.id) ? 'Nieuw' : nieuweVariant ? `Nieuw: ${VARIANTEN.label(nieuweVariant)}` : '';
    const matchHtml = m ? `
      <div class="match${m.mist.length === 0 ? ' is-compleet' : ''}">
        <div class="match-balk" aria-hidden="true"><span style="width:${Math.round(m.pct * 100)}%"></span></div>
        <span class="match-tekst">${m.mist.length === 0 ? 'Alles in huis' : `${m.heb.length} van ${m.totaal} in huis`}</span>
      </div>
      ${m.mist.length ? `<p class="mist-tekst"><span>Nog halen:</span> ${esc(m.mist.slice(0, 4).join(', '))}${m.mist.length > 4 ? ` en nog ${m.mist.length - 4}` : ''}</p>` : ''}` : '';
    return `
      <article class="kaart hk${maakbaar ? '' : ' niet-maakbaar'}" style="--k:${h.kleur}">
        <a class="kaart-link" href="#${r.id}" data-open="${r.id}">
          <span class="kaart-beeld">${foto ? `<img src="${esc(foto.src)}" alt="" loading="lazy" decoding="async">` : bord(r)}${nieuw ? `<span class="label-nieuw">${esc(nieuw)}</span>` : ''}</span>
          <span class="kaart-tekst">
            <span class="kaart-kop"><span class="kaart-keuken">${esc(r.keuken)} · ${esc(r.soort)}</span><span class="kaart-blz">blz. ${BLZ.get(r.id)}</span></span>
            <span class="kaart-titel">${esc(VARIANTEN.heeft(r) ? VARIANTEN.gerecht(r) : r.naam)}</span>
            <span class="kaart-meta">
              <span>${Hulp.tijdTekst(r.tijd)}${r.wacht ? ` <span class="plus">+ ${esc(r.wacht)}</span>` : ''}</span>
              <span>${r.pers} ${esc(r.stuks || 'pers.')}</span>
              <span class="niveau" data-niveau="${NIVEAUS.indexOf(r.niveau) + 1}"><span class="niveau-stip" aria-hidden="true"><i></i><i></i><i></i></span>${esc(r.niveau)}</span>
              ${r.vega ? `<span class="vega">${icoon('blad')} vega</span>` : ''}
              ${r.pit ? `<span class="pit" role="img" aria-label="${Hulp.pitTekst(r)}" title="${Hulp.pitTekst(r)}">${icoon('peper').repeat(r.pit)}</span>` : ''}
              ${gemaakt ? `<span class="gemaakt" title="Zo vaak heb je dit gemaakt">${icoon('vink')} ${gemaakt}× gemaakt</span>` : ''}
            </span>
            <span class="kaart-gerei">${gereiRegel(r)}</span>
            ${maakbaar ? '' : '<span class="label-mist">Je mist apparatuur</span>'}
          </span>
        </a>
        ${VARIANTEN.heeft(r) ? `
        <div class="kaart-varianten" role="group" aria-label="Varianten van ${esc(VARIANTEN.gerecht(r))}">
          <span class="kaart-varianten-label">Varianten:</span>
          ${VARIANTEN.leden(r).map((v) => `<a class="variant-chip" href="#${v.id}" data-open="${v.id}"${v.id === r.id ? ' aria-current="true"' : ''} title="${esc(v.naam)}">${esc(VARIANTEN.label(v))}</a>`).join('')}
        </div>` : ''}
        ${matchHtml ? `<div class="kaart-voet">${matchHtml}</div>` : ''}
        <button type="button" class="ikoon-knop fav-knop kaart-fav" data-fav="${r.id}" aria-pressed="${fav}" aria-label="${fav ? 'Verwijder' : 'Bewaar'} ${esc(r.naam)} ${fav ? 'uit' : 'bij'} favorieten">${icoon('hart')}</button>
      </article>`;
  }

  function hoofdstukKop(keuken, aantal) {
    const h = hk(keuken);
    return `<header class="hoofdstuk-kop hk" style="--k:${h.kleur}">
      <span class="hoofdstuk-nr">Hoofdstuk ${h.nr}</span>
      <h2>${esc(keuken)}</h2>
      <span class="hoofdstuk-aantal">${aantal} ${aantal === 1 ? 'recept' : 'recepten'}</span>
    </header>`;
  }

  function renderTabbladen() {
    const alleen = state.keukens.size === 1 ? [...state.keukens][0] : null;
    $('#tabbladen').innerHTML =
      `<button type="button" class="tabblad tabblad-alle" data-tab="" aria-pressed="${!state.keukens.size}">Alle</button>` +
      KEUKENS.map((k) => `<button type="button" class="tabblad hk" style="--k:${hk(k).kleur}" data-tab="${esc(k)}" aria-pressed="${alleen === k}">${esc(k)}</button>`).join('');
  }

  function actieveFilters() {
    const items = [];
    state.keukens.forEach((k) => items.push(['keuken', k, k]));
    state.soorten.forEach((s) => items.push(['soort', s, s]));
    state.niveaus.forEach((n) => items.push(['niveau', n, n]));
    if (state.tijd) items.push(['tijd', state.tijd, `≤ ${state.tijd} min`]);
    state.bereid.forEach((b) => items.push(['bereid', b, BEREID.find(([k]) => k === b)[1]]));
    if (state.vega) items.push(['vega', '1', 'Vegetarisch']);
    if (state.maakbaar) items.push(['maakbaar', '1', 'Past bij mijn keuken']);
    if (state.compleet) items.push(['compleet', '1', 'Alles in huis']);
    return items;
  }

  function render() {
    const lijst = resultaten();
    const perHoofdstuk = state.view !== 'nieuw' && state.sorteer === 'keuken' || (state.sorteer === 'match' && !state.voorraad.length);
    let html = '', vorige = null;
    lijst.forEach((item) => {
      if (perHoofdstuk && item.r.keuken !== vorige) {
        vorige = item.r.keuken;
        html += hoofdstukKop(vorige, lijst.filter((x) => x.r.keuken === vorige).length);
      }
      html += kaart(item);
    });
    $('#raster').innerHTML = html;
    renderTabbladen();
    renderMixInfo();
    const leeg = !lijst.length;
    $('#leeg').hidden = !leeg;
    if (leeg && state.view === 'fav' && !state.favs.size) {
      $('#leeg-titel').textContent = 'Nog geen favorieten';
      $('#leeg-tekst').textContent = 'Tik op het hartje bij een recept om het hier te bewaren.';
      $('#leeg-wis').hidden = true;
    } else if (leeg && state.view === 'gemaakt' && !RECEPTEN.some((r) => Logboek.keer(r.id))) {
      $('#leeg-titel').textContent = 'Nog niets gemaakt';
      $('#leeg-tekst').textContent = 'Open een recept en tik onder Mijn logboek op Gemaakt. Dan staat het hier.';
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
    if (state.vaag) tekst = `Niets gevonden voor “${state.zoek.trim()}”. Wel ${n} ${n === 1 ? 'recept dat erop lijkt' : 'recepten die erop lijken'}:`;
    if (state.view === 'fav') tekst += ' in je favorieten';
    if (state.view === 'gemaakt') tekst += n === 1 ? ' dat je gemaakt hebt' : ' die je gemaakt hebt';
    if (state.view === 'nieuw') tekst = n === NIEUW.length ? `De ${n} nieuwste recepten, nieuwste eerst` : `${tekst} van de ${NIEUW.length} nieuwste`;
    if (state.voorraad.length) tekst += `, gesorteerd op wat je in huis hebt`;
    $('#resultaat-tekst').textContent = tekst;
    $('.sorteer-groep').hidden = state.view === 'nieuw';

    const af = actieveFilters();
    $('#actieve-filters').innerHTML = af.map(([g, w, l]) =>
      `<button type="button" class="chip chip-actief" data-wis-groep="${g}" data-wis-waarde="${esc(w)}" aria-label="Wis filter ${esc(l)}">${esc(l)} ${icoon('sluit')}</button>`).join('');
    const aantal = af.length + state.voorraad.length;
    $('#filter-aantal').textContent = aantal || '';

    $('#lijst-aantal').textContent = Boodschappen.aantalOpen() || '';
  }

  function renderLijst() {
    Boodschappen.render($('#boodschappen'), $('#lijst-sub'), $('#lijst-prijs'));
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
    blz: (id) => BLZ.get(id),
    get voorraad() { return state.voorraad; },
    hoofdstuk: (keuken) => hk(keuken),
    isFav: (id) => state.favs.has(id),
    isNieuw: (id) => NIEUW.includes(id),
    wisselFav: (id) => wisselFav(id),
    sluit: () => sluitRecept(),
    open: (id) => openRecept(id),
    recept: (id) => RECEPTEN.find((r) => r.id === id),
    varianten: (r) => VARIANTEN.leden(r),
    /* Andere variant van hetzelfde gerecht kiezen: vervangt het recept in de geschiedenis, zodat Terug naar het overzicht gaat. */
    kiesVariant: (id) => {
      const v = RECEPTEN.find((x) => x.id === id);
      if (!v) return;
      Detail.open(v, context, { houd: true });
      try { history.replaceState({ recept: id }, '', '#' + id); } catch (e) { /* geen historie beschikbaar */ }
    },
    /* Gerechten en sauzen die bij elkaar passen, in beide richtingen; bij varianten telt het hele gerecht. */
    lekkerMet: (r) => {
      const eigen = VARIANTEN.leden(r).map((x) => x.id);
      const gezien = new Set();
      return RECEPTEN.filter((x) => !eigen.includes(x.id) && ((r.bij || []).includes(x.id) || (x.bij || []).some((b) => eigen.includes(b))))
        .filter((x) => !gezien.has(x.groep) && gezien.add(x.groep))
        .map((x) => (VARIANTEN.heeft(x) ? { id: x.id, naam: VARIANTEN.gerecht(x) } : x));
    }
  };

  /* Een receptlink is #id, eventueel met een aantal personen: #tacos-kip?personen=6 (zo deelt de Deel-knop hem). */
  function uitLink() {
    const [id, query] = location.hash.slice(1).split('?');
    const personen = parseInt(new URLSearchParams(query || '').get('personen'), 10);
    return { id: decodeURIComponent(id), personen: personen > 0 && personen < 100 ? personen : null };
  }

  function openRecept(id, viaHistorie, personen = null) {
    const r = RECEPTEN.find((x) => x.id === id);
    if (!r) return;
    Detail.open(r, context, { personen });
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
    const { id, personen } = uitLink();
    if (id && RECEPTEN.some((r) => r.id === id)) openRecept(id, true, personen);
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
    state.keukens.clear(); state.soorten.clear(); state.niveaus.clear(); state.bereid.clear(); state.tijd = null; state.vega = false;
    state.maakbaar = false; state.compleet = false; state.voorraad = []; state.zoek = '';
    $('#zoek').value = '';
    opslag.schrijf('voorraad', []);
    renderFilters(); render();
  }

  /* ---------- Zoeksuggesties ---------- */
  let sugLijst = [], sugActief = -1;

  function maakSuggesties(q) {
    const t = Hulp.norm(q).trim();
    if (t.length < 2) return [];
    const uit = [];
    const woordenVan = (s) => Hulp.norm(s).split(/[^a-z0-9]+/).filter(Boolean);
    const score = (naam) => {
      const n = Hulp.norm(naam), w = woordenVan(naam);
      if (n.startsWith(t)) return 0;
      if (w.some((x) => x.startsWith(t))) return 1;
      if (t.length >= 3 && n.includes(t)) return 2;
      if (w.some((x) => Hulp.lijktOp(t, x))) return 3;
      return -1;
    };
    // Een recept telt ook mee via zijn andere namen ("french toast" → wentelteefjes); de beste naam wint.
    const recepten = RECEPTEN.map((r) => {
      const namen = [r.naam, ...(r.ook || [])].map((n) => [n, score(n)]).filter(([, s]) => s >= 0).sort((x, y) => x[1] - y[1]);
      return namen.length ? [r, namen[0][1], namen[0][0] === r.naam ? null : namen[0][0]] : null;
    }).filter(Boolean);
    const hoofdstukken = KEUKENS.map((k) => [k, (ALIASSEN[t] || []).some((x) => Hulp.norm(k).startsWith(x) || Hulp.norm(k).includes(' ' + x)) ? 1 : score(k)]).filter(([, s]) => s >= 0);
    const ingredienten = INGR_NAMEN.map((n) => [n, score(n)]).filter(([, s]) => s >= 0);
    const soort = SOORT_WOORDEN[t] || (t.length >= 3 && SOORTEN.find((s) => Hulp.norm(s).startsWith(t)));
    // Tikfout-treffers (score 3) alleen tonen als er niets echts gevonden is.
    const alleenVaag = ![...recepten, ...hoofdstukken, ...ingredienten].some(([, s]) => s < 3);
    const houd = ([, s]) => alleenVaag || s < 3;
    recepten.filter(houd).sort((a, b) => (a[1] - b[1]) || a[0].naam.localeCompare(b[0].naam, 'nl')).slice(0, 6)
      .forEach(([r, , via]) => uit.push({ type: 'recept', id: r.id, label: r.naam, extra: `${via ? `ook: ${via} · ` : ''}${r.keuken} · blz. ${BLZ.get(r.id)}` }));
    if (soort) {
      const n = RECEPTEN.filter((r) => r.soort === soort).length;
      uit.unshift({ type: 'soort', waarde: soort, label: soort === 'Saus' ? 'Sauzen' : soort, extra: `${n} recepten` });
    }
    hoofdstukken.filter(houd).sort((a, b) => a[1] - b[1]).slice(0, 3)
      .forEach(([k]) => uit.push({ type: 'hoofdstuk', waarde: k, label: k, extra: `Hoofdstuk ${hk(k).nr}` }));
    ingredienten.filter(houd).sort((a, b) => (a[1] - b[1]) || (INGR_AANTAL.get(b[0]) - INGR_AANTAL.get(a[0]))).slice(0, 3)
      .forEach(([n]) => uit.push({ type: 'ingredient', waarde: n, label: n, extra: `${INGR_AANTAL.get(n)} ${INGR_AANTAL.get(n) === 1 ? 'recept' : 'recepten'}` }));
    return uit;
  }

  function markeer(label, q) {
    const i = label.toLowerCase().indexOf(q.trim().toLowerCase());
    if (!q.trim() || i < 0) return esc(label);
    const j = i + q.trim().length;
    return esc(label.slice(0, i)) + '<mark>' + esc(label.slice(i, j)) + '</mark>' + esc(label.slice(j));
  }

  function toonSuggesties() {
    const veld = $('#zoek'), el = $('#suggesties');
    sugLijst = document.activeElement === veld ? maakSuggesties(veld.value) : [];
    sugActief = -1;
    const SOORT = { recept: 'Recept', hoofdstuk: 'Hoofdstuk', ingredient: 'Ingrediënt', soort: 'Soort' };
    el.innerHTML = sugLijst.map((s, i) => `
      <li class="sug" role="option" id="sug-${i}" data-i="${i}" aria-selected="false">
        <span class="sug-type">${SOORT[s.type]}</span>
        <span class="sug-label">${markeer(s.label, veld.value)}</span>
        <span class="sug-extra">${esc(s.extra)}</span>
      </li>`).join('');
    el.hidden = !sugLijst.length;
    veld.setAttribute('aria-expanded', String(!!sugLijst.length));
    veld.removeAttribute('aria-activedescendant');
  }

  function sluitSuggesties() {
    $('#suggesties').hidden = true;
    $('#zoek').setAttribute('aria-expanded', 'false');
    sugLijst = []; sugActief = -1;
  }

  function kiesSuggestie(i) {
    const s = sugLijst[i];
    if (!s) return;
    const veld = $('#zoek');
    sluitSuggesties();
    if (s.type === 'recept') {
      openRecept(s.id);
    } else if (s.type === 'hoofdstuk') {
      veld.value = ''; state.zoek = '';
      state.keukens = new Set([s.waarde]);
      if (state.view === 'lijst') zetView('alle'); else render();
      veld.blur();
    } else if (s.type === 'soort') {
      veld.value = ''; state.zoek = '';
      state.soorten = new Set([s.waarde]);
      renderFilters();
      if (state.view === 'lijst') zetView('alle'); else render();
      veld.blur();
    } else {
      veld.value = s.waarde; state.zoek = s.waarde;
      if (state.view === 'lijst') zetView('alle'); else render();
      veld.blur();
    }
  }

  function zetActief(i) {
    const items = $('#suggesties').querySelectorAll('.sug');
    if (!items.length) return;
    sugActief = (i + items.length) % items.length;
    items.forEach((li, n) => li.setAttribute('aria-selected', String(n === sugActief)));
    items[sugActief].scrollIntoView({ block: 'nearest' });
    $('#zoek').setAttribute('aria-activedescendant', 'sug-' + sugActief);
  }

  function koppel() {
    let zoekTimer;
    $('#zoek').addEventListener('input', (e) => {
      toonSuggesties();
      clearTimeout(zoekTimer);
      zoekTimer = setTimeout(() => {
        state.zoek = e.target.value;
        if (state.view === 'lijst') zetView('alle'); else render();
      }, 120);
    });
    $('#zoek').addEventListener('focus', toonSuggesties);
    $('#zoek').addEventListener('blur', () => setTimeout(sluitSuggesties, 150));
    $('#zoek').addEventListener('keydown', (e) => {
      if ($('#suggesties').hidden) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); zetActief(sugActief + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); zetActief(sugActief - 1); }
      else if (e.key === 'Enter') { if (sugActief >= 0) { e.preventDefault(); kiesSuggestie(sugActief); } else sluitSuggesties(); }
      else if (e.key === 'Escape') { e.stopPropagation(); sluitSuggesties(); }
    });
    // mousedown in plaats van click: anders sluit de lijst door de blur voordat de klik aankomt.
    $('#suggesties').addEventListener('mousedown', (e) => {
      const li = e.target.closest('.sug');
      if (!li) return;
      e.preventDefault();
      kiesSuggestie(+li.dataset.i);
    });

    document.querySelectorAll('.tab').forEach((t) => t.addEventListener('click', () => zetView(t.dataset.view)));

    $('#paneel').addEventListener('click', (e) => {
      const c = e.target.closest('[data-groep]');
      if (c) {
        const { groep, waarde } = c.dataset;
        if (groep === 'keuken') state.keukens.has(waarde) ? state.keukens.delete(waarde) : state.keukens.add(waarde);
        if (groep === 'soort') state.soorten.has(waarde) ? state.soorten.delete(waarde) : state.soorten.add(waarde);
        if (groep === 'niveau') state.niveaus.has(waarde) ? state.niveaus.delete(waarde) : state.niveaus.add(waarde);
        if (groep === 'tijd') state.tijd = state.tijd === +waarde ? null : +waarde;
        if (groep === 'bereid') state.bereid.has(waarde) ? state.bereid.delete(waarde) : state.bereid.add(waarde);
        renderFilters(); render();
        return;
      }
      const si = e.target.closest('[data-sugg-ingr]');
      if (si) {
        // Wat je al getypt had vóór de laatste komma telt ook mee; het laatste stuk wordt de suggestie.
        const veld = $('#voorraad-input');
        const eerder = veld.value.split(',').slice(0, -1);
        veld.value = '';
        voegToe([...eerder, si.dataset.suggIngr]);
        renderIngrSuggesties();
        return;
      }
      const sm = e.target.closest('[data-sugg-mix]');
      if (sm) { voegMixToe(sm.dataset.suggMix); return; }
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
      const namen = veld.value.split(',');
      veld.value = '';
      voegToe(namen);
      renderIngrSuggesties();
    });
    $('#voorraad-input').addEventListener('input', renderIngrSuggesties);

    $('#sorteer').addEventListener('change', (e) => { state.sorteer = e.target.value; render(); });
    $('#sorteer-om').addEventListener('click', (e) => {
      state.omgekeerd = !state.omgekeerd;
      e.currentTarget.setAttribute('aria-pressed', state.omgekeerd);
      render();
    });

    $('#mix-input').addEventListener('input', renderMixSuggesties);
    $('#mix-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const eerste = mixSuggesties($('#mix-input').value)[0];
      if (eerste) voegMixToe('mix:' + eerste.id);
    });
    $('#mix-info').addEventListener('click', (e) => {
      const a = e.target.closest('[data-open]');
      if (a && !e.metaKey && !e.ctrlKey) { e.preventDefault(); openRecept(a.dataset.open); }
    });

    $('#tabbladen').addEventListener('click', (e) => {
      const t = e.target.closest('[data-tab]');
      if (!t) return;
      const k = t.dataset.tab;
      state.keukens = new Set(k && !(state.keukens.size === 1 && state.keukens.has(k)) ? [k] : []);
      if (state.view === 'lijst') zetView('alle'); else render();
      t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    });

    $('#actieve-filters').addEventListener('click', (e) => {
      const c = e.target.closest('[data-wis-groep]');
      if (!c) return;
      const { wisGroep: g, wisWaarde: w } = c.dataset;
      if (g === 'keuken') state.keukens.delete(w);
      if (g === 'soort') state.soorten.delete(w);
      if (g === 'niveau') state.niveaus.delete(w);
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
    $('#boodschappen').addEventListener('click', (e) => {
      const a = e.target.closest('[data-open]');
      if (a && !e.metaKey && !e.ctrlKey) { e.preventDefault(); return openRecept(a.dataset.open); }
      const b = e.target.closest('[data-weg]'); if (b) Boodschappen.verwijder(b.dataset.weg);
    });
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
    // Afgevinkt of weggehaald: de teller op de kaart en de tab Gemaakt kloppen meteen weer.
    document.addEventListener('logboek-gewijzigd', () => { if (state.view !== 'lijst') render(); });
    document.addEventListener('lijst-gewijzigd', () => { if (state.view === 'lijst') renderLijst(); else $('#lijst-aantal').textContent = Boodschappen.aantalOpen() || ''; });
  }

  /* Na ontvangst van nieuwere gegevens van een ander apparaat: alles opnieuw inlezen en tonen. */
  function herlaadOpslag() {
    state.voorraad = opslag.lees('voorraad', []);
    state.basis = opslag.lees('basis', true);
    state.keuken = opslag.lees('keuken', standaardKeuken);
    state.pannen = opslag.lees('pannen', standaardPannen);
    state.favs = new Set(opslag.lees('favorieten', []));
    Boodschappen.herlaad();
    Logboek.herlaad();
    Detail.herlaadLog();
    renderFilters();
    if (state.view === 'lijst') renderLijst(); else render();
    toast('Bijgewerkt met je andere apparaten');
  }

  function start() {
    const metVarianten = new Set(RECEPTEN.filter((r) => VARIANTEN.heeft(r)).map((r) => r.groep)).size;
    $('#teller').textContent = `${VARIANTEN.aantalGerechten()} recepten · ${metVarianten} met varianten · ${KEUKENS.length} hoofdstukken · versie ${window.VERSIE || '?'}`;
    renderFilters();
    koppel();
    render();
    Sync.start(herlaadOpslag);
    const { id, personen } = uitLink();
    if (id && RECEPTEN.some((r) => r.id === id)) openRecept(id, true, personen);
  }

  return { start, toast };
})();

App.start();
