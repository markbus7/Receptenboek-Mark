/* Versie en update-check.
   Toont onder de titel welke versie je hebt en wanneer die is bijgewerkt (Nederlandse tijd),
   en kijkt of er online een nieuwere versie staat. De check haalt js/versie.js opnieuw op,
   buiten de cache om: eerst van dezelfde site (dat krijg je bij herladen), anders van GitHub.
   Bij het openen, als je terugkomt in de app (hooguit eens per 10 minuten) en elk uur. */
const Update = (() => {
  const GITHUB = 'https://raw.githubusercontent.com/markbus7/Receptenboek-Mark/main/js/versie.js';
  const REPO = 'https://github.com/markbus7/Receptenboek-Mark';
  const ZONE = 'Europe/Amsterdam';
  let laatst = 0;
  let bezig = null;
  let status = { soort: 'nog' };

  // Na "Nu bijwerken" staat ?update=x.y.z in de adresbalk (om de cache van de pagina te omzeilen); weg ermee.
  try {
    const zoek = new URLSearchParams(location.search);
    if (zoek.has('update')) {
      zoek.delete('update');
      const rest = zoek.toString();
      history.replaceState(null, '', location.pathname + (rest ? `?${rest}` : '') + location.hash);
    }
  } catch (e) { /* genegeerd */ }

  const opSite = /^https?:$/.test(location.protocol);

  function datumTekst(iso, kort) {
    const d = new Date(iso);
    if (!iso || Number.isNaN(d.getTime())) return '';
    try {
      const dag = new Intl.DateTimeFormat('nl-NL', { timeZone: ZONE, day: 'numeric', month: kort ? 'short' : 'long', year: 'numeric' }).format(d);
      const tijd = new Intl.DateTimeFormat('nl-NL', { timeZone: ZONE, hour: '2-digit', minute: '2-digit' }).format(d);
      return `${dag} om ${tijd}`;
    } catch (e) {
      return d.toLocaleString('nl-NL');
    }
  }
  const tijdTekst = (ms) => {
    try { return new Intl.DateTimeFormat('nl-NL', { timeZone: ZONE, hour: '2-digit', minute: '2-digit' }).format(new Date(ms)); } catch (e) { return ''; }
  };

  // -1: a ouder dan b, 0: gelijk, 1: a nieuwer.
  function vergelijk(a, b) {
    const x = String(a).split('.').map(Number);
    const y = String(b).split('.').map(Number);
    for (let i = 0; i < 3; i++) {
      if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) < (y[i] || 0) ? -1 : 1;
    }
    return 0;
  }

  async function haal(url) {
    const r = await fetch(`${url}?nocache=${Date.now()}`, { cache: 'no-store' });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const tekst = await r.text();
    const versie = (tekst.match(/VERSIE\s*=\s*'(\d+\.\d+\.\d+)'/) || [])[1];
    if (!versie) throw new Error('geen versie gevonden');
    return { versie, datum: (tekst.match(/VERSIE_DATUM\s*=\s*'([^']+)'/) || [])[1] || '' };
  }

  async function online() {
    if (opSite) {
      try { return { ...(await haal(new URL('js/versie.js', location.href).href)), bron: 'site' }; } catch (e) { /* dan GitHub */ }
    }
    return { ...(await haal(GITHUB)), bron: 'github' };
  }

  function check() {
    if (bezig) return bezig;
    status = { ...status, soort: 'bezig' };
    toon();
    bezig = online().then((o) => {
      const nieuwer = vergelijk(window.VERSIE, o.versie) < 0;
      status = { soort: nieuwer ? 'oud' : 'ok', ...o, om: Date.now() };
    }).catch(() => {
      status = { soort: 'fout', om: Date.now() };
    }).then(() => {
      laatst = Date.now();
      bezig = null;
      toon();
      return status;
    });
    return bezig;
  }

  function bijwerken() {
    // Een ander adres dan net, zodat de browser ook index.html opnieuw ophaalt.
    const zoek = new URLSearchParams(location.search);
    zoek.set('update', status.versie || Date.now());
    location.replace(`${location.pathname}?${zoek.toString()}${location.hash}`);
  }

  function toon() {
    const regel = document.getElementById('versie-regel');
    if (regel) {
      const datum = datumTekst(window.VERSIE_DATUM);
      let stand = '';
      if (status.soort === 'bezig') stand = '<span class="versie-stand">controleren…</span>';
      else if (status.soort === 'ok') stand = `<span class="versie-stand versie-ok" title="Gecontroleerd om ${tijdTekst(status.om)}">✓ nieuwste versie</span>`;
      else if (status.soort === 'oud') stand = `<span class="versie-stand versie-oud">nieuwere versie: ${status.versie}</span>`;
      else if (status.soort === 'fout') stand = '<span class="versie-stand versie-fout">kon niet controleren</span>';
      regel.innerHTML = `<button type="button" class="versie-knop" id="versie-check" title="Opnieuw kijken of er een nieuwere versie is">`
        + `versie ${window.VERSIE || '?'}${datum ? ` · bijgewerkt ${datum}` : ''}${stand ? ` · ${stand}` : ''}</button>`;
    }
    const balk = document.getElementById('update-balk');
    if (!balk) return;
    if (status.soort !== 'oud') { balk.hidden = true; return; }
    const wanneer = datumTekst(status.datum, true);
    const knop = opSite && status.bron === 'site'
      ? '<button type="button" class="knop" id="update-nu">Nu bijwerken</button>'
      : `<a class="knop" href="${REPO}" target="_blank" rel="noopener">Haal hem op GitHub</a>`;
    balk.innerHTML = `<p><b>Er is een nieuwere versie: ${status.versie}</b>${wanneer ? ` (bijgewerkt ${wanneer})` : ''}. Jij hebt nu ${window.VERSIE}.</p>`
      + `<div class="update-knoppen">${knop}<button type="button" class="knop knop-zacht" id="update-later">Later</button></div>`;
    balk.hidden = false;
  }

  function start() {
    toon();
    document.addEventListener('click', (e) => {
      if (e.target.closest('#versie-check')) {
        check().then((s) => {
          if (typeof window.toast !== 'function') return;
          if (s.soort === 'ok') window.toast(`Je hebt de nieuwste versie (${window.VERSIE})`);
          else if (s.soort === 'fout') window.toast('Kon niet kijken of er een update is. Heb je internet?');
        });
      } else if (e.target.closest('#update-nu')) bijwerken();
      else if (e.target.closest('#update-later')) document.getElementById('update-balk').hidden = true;
    });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && Date.now() - laatst > 10 * 60 * 1000) check();
    });
    setInterval(() => { if (document.visibilityState === 'visible') check(); }, 60 * 60 * 1000);
    check();
  }

  return { start, check, vergelijk, datumTekst, status: () => status };
})();
