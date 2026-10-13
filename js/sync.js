/* Synchroniseren tussen apparaten via een geheime GitHub-gist.
   Het token blijft alleen in deze browser (localStorage) en wordt nooit gesynchroniseerd.
   Per onderdeel wint de nieuwste versie (tijdstempel uit Hulp.opslag). */
const Sync = (() => {
  const { opslag, esc } = Hulp;
  const ONDERDELEN = ['favorieten', 'boodschappen', 'voorraad', 'basis', 'keuken', 'pannen'];
  const BESTAND = 'receptenboek-mark.json';
  const API = 'https://api.github.com';
  const TOKEN_LINK = 'https://github.com/settings/personal-access-tokens/new';

  let token = opslag.lees('sync-token', null);
  let gistId = opslag.lees('sync-gist', null);
  let laatst = opslag.lees('sync-laatst', null);
  let toestand = token ? 'ok' : 'uit';
  let fout = '';
  let bezig = false, opnieuw = false, timer = null;
  let naOntvangst = () => {};

  async function api(pad, opties = {}) {
    let r;
    try {
      r = await fetch(API + pad, {
        ...opties,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          ...(opties.body ? { 'Content-Type': 'application/json' } : {})
        }
      });
    } catch (e) {
      throw new Error('GitHub is niet bereikbaar. Controleer je internetverbinding. In de Claude-versie van het receptenboek werkt synchroniseren niet; gebruik daarvoor de GitHub-site.');
    }
    if (r.status === 401) throw new Error('GitHub accepteert dit token niet. Misschien is het verlopen of verkeerd gekopieerd.');
    if (r.status === 403 || r.status === 404) throw new Error('Dit token mag geen gists lezen of schrijven. Geef het token de rechten "Gists: Read and write".');
    if (!r.ok) throw new Error(`GitHub gaf foutcode ${r.status}. Probeer het later nog eens.`);
    return r.status === 204 ? null : r.json();
  }

  /* Wat in deze browser staat, met tijdstempels. Oude gegevens zonder tijd tellen als heel oud. */
  function lokaal() {
    const data = {};
    ONDERDELEN.forEach((k) => {
      if (opslag.heeft(k)) data[k] = { t: opslag.tijd(k) || 1, v: opslag.lees(k, null) };
    });
    return data;
  }

  const inhoud = () => JSON.stringify({ app: 'Receptenboek Mark', versie: window.VERSIE, data: lokaal() }, null, 1);

  async function zoekGist() {
    if (gistId) {
      try { return await api('/gists/' + gistId); } catch (e) { if (!/mag geen gists/.test(e.message)) throw e; }
    }
    for (let pagina = 1; pagina <= 5; pagina++) {
      const lijst = await api(`/gists?per_page=100&page=${pagina}`);
      const gevonden = lijst.find((g) => g.files && g.files[BESTAND]);
      if (gevonden) { gistId = gevonden.id; opslag.schrijf('sync-gist', gistId, { stil: true }); return api('/gists/' + gistId); }
      if (lijst.length < 100) break;
    }
    return null;
  }

  /* Neemt nieuwere onderdelen van GitHub over; geeft terug of er lokaal iets nieuwer is. */
  function samenvoegen(gist) {
    let ontvangen = false, versturen = false;
    let extern = {};
    try { extern = JSON.parse(gist.files[BESTAND].content).data || {}; } catch (e) { versturen = true; }
    const hier = lokaal();
    ONDERDELEN.forEach((k) => {
      const e = extern[k], h = hier[k];
      if (e && (!h || e.t > h.t)) { opslag.schrijf(k, e.v, { tijd: e.t, stil: true }); ontvangen = true; }
      else if (h && (!e || h.t > e.t)) versturen = true;
    });
    return { ontvangen, versturen };
  }

  async function synchroniseer() {
    if (!token) return;
    if (bezig) { opnieuw = true; return; }
    bezig = true; toestand = 'bezig'; render();
    try {
      let gist = await zoekGist();
      if (!gist) {
        gist = await api('/gists', { method: 'POST', body: JSON.stringify({
          description: 'Receptenboek Mark: favorieten, boodschappen en keukeninstellingen',
          public: false,
          files: { [BESTAND]: { content: inhoud() } }
        }) });
        gistId = gist.id; opslag.schrijf('sync-gist', gistId, { stil: true });
      } else {
        const { ontvangen, versturen } = samenvoegen(gist);
        if (versturen) await api('/gists/' + gistId, { method: 'PATCH', body: JSON.stringify({ files: { [BESTAND]: { content: inhoud() } } }) });
        if (ontvangen) naOntvangst();
      }
      laatst = Date.now(); opslag.schrijf('sync-laatst', laatst, { stil: true });
      toestand = 'ok'; fout = '';
    } catch (e) {
      toestand = 'fout'; fout = e.message;
    } finally {
      bezig = false; render();
      if (opnieuw) { opnieuw = false; synchroniseer(); }
    }
  }

  async function koppel(nieuwToken) {
    token = nieuwToken.trim();
    if (!token) return;
    gistId = null;
    opslag.schrijf('sync-token', token, { stil: true });
    await synchroniseer();
    if (toestand === 'fout') {
      const melding = fout;
      ontkoppel();
      toestand = 'fout'; fout = melding; render();
    } else {
      App.toast('Gekoppeld: je gegevens staan nu ook op GitHub');
    }
  }

  function ontkoppel() {
    token = null; gistId = null; laatst = null; toestand = 'uit'; fout = '';
    ['sync-token', 'sync-gist', 'sync-laatst'].forEach((k) => opslag.wis(k));
    render();
  }

  function render() {
    const el = document.getElementById('sync');
    if (!el) return;
    const tijd = laatst ? new Date(laatst).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' }) : null;
    const foutHtml = toestand === 'fout' ? `<p class="sync-fout" role="alert">${esc(fout)}</p>` : '';
    if (!token) {
      el.innerHTML = `
        <p class="hint">Bewaar je favorieten, boodschappenlijst, voorraad en keuken in je eigen GitHub-account. Dan heb je ze op al je apparaten.</p>
        <form id="sync-form" class="voorraad-invoer" autocomplete="off">
          <label for="sync-token" class="sr">GitHub-token</label>
          <input id="sync-token" type="password" placeholder="Plak je GitHub-token" spellcheck="false">
          <button type="submit" class="knop knop-klein">Koppel</button>
        </form>
        ${foutHtml}
        <p class="hint"><a href="${TOKEN_LINK}" target="_blank" rel="noopener">Maak een token op GitHub</a> met alleen <em>Gists: Read and write</em>. Het token blijft in deze browser en geeft geen toegang tot je repositories.</p>`;
      return;
    }
    el.innerHTML = `
      <p class="sync-status sync-${toestand}">${toestand === 'bezig' ? 'Bezig met synchroniseren…' : toestand === 'fout' ? 'Synchroniseren mislukt' : `Gekoppeld${tijd ? ` · bijgewerkt om ${tijd}` : ''}`}</p>
      ${foutHtml}
      <div class="sync-knoppen">
        <button type="button" class="knop knop-klein" id="sync-nu"${toestand === 'bezig' ? ' disabled' : ''}>Nu synchroniseren</button>
        <button type="button" class="knop knop-klein knop-zacht" id="sync-uit">Ontkoppelen</button>
      </div>`;
  }

  function start(bijOntvangst) {
    naOntvangst = bijOntvangst;
    render();
    const el = document.getElementById('sync');
    el.addEventListener('submit', (e) => {
      if (e.target.id !== 'sync-form') return;
      e.preventDefault();
      koppel(document.getElementById('sync-token').value);
    });
    el.addEventListener('click', (e) => {
      if (e.target.closest('#sync-nu')) synchroniseer();
      if (e.target.closest('#sync-uit')) { ontkoppel(); App.toast('Ontkoppeld; je gegevens blijven in deze browser staan'); }
    });
    // Wijzigingen na een korte pauze versturen; bij terugkeren naar de app ophalen.
    document.addEventListener('opslag-gewijzigd', (e) => {
      if (!token || !ONDERDELEN.includes(e.detail)) return;
      clearTimeout(timer);
      timer = setTimeout(synchroniseer, 2000);
    });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && token && (!laatst || Date.now() - laatst > 20000)) synchroniseer();
    });
    if (token) synchroniseer();
  }

  return { start, synchroniseer };
})();
