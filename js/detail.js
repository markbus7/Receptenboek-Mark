/* Receptweergave: omrekenen, bereidingswijze kiezen, timers en scherm aan houden. */

const Timers = (() => {
  const el = document.getElementById('timers');
  let lijst = [], tik = null, audio = null;

  function start(label, minuten) {
    try { audio = audio || new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { audio = null; }
    lijst.push({ id: Date.now() + Math.random(), label, eind: Date.now() + minuten * 60000, klaar: false });
    if (!tik) tik = setInterval(render, 1000);
    render();
  }

  function piep() {
    if (navigator.vibrate) navigator.vibrate([300, 150, 300]);
    if (!audio) return;
    [0, 0.35, 0.7].forEach((t) => {
      const o = audio.createOscillator(), g = audio.createGain();
      o.frequency.value = 880; o.connect(g); g.connect(audio.destination);
      g.gain.setValueAtTime(0.25, audio.currentTime + t);
      g.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + t + 0.3);
      o.start(audio.currentTime + t); o.stop(audio.currentTime + t + 0.3);
    });
  }

  function render() {
    const nu = Date.now();
    lijst.forEach((t) => {
      if (!t.klaar && nu >= t.eind) { t.klaar = true; piep(); App.toast(`Timer klaar: ${t.label}`); }
    });
    el.hidden = !lijst.length;
    if (!lijst.length) { clearInterval(tik); tik = null; return; }
    el.innerHTML = lijst.map((t) => {
      const s = Math.max(0, Math.round((t.eind - nu) / 1000));
      const tijd = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
      return `<div class="timer${t.klaar ? ' is-klaar' : ''}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-klok"/></svg>
        <span class="timer-label">${Hulp.esc(t.label)}</span>
        <span class="timer-tijd">${t.klaar ? 'Klaar!' : tijd}</span>
        <button type="button" class="knop knop-klein knop-zacht" data-timer="${t.id}">${t.klaar ? 'OK' : 'Stop'}</button>
      </div>`;
    }).join('');
  }

  el.addEventListener('click', (e) => {
    const b = e.target.closest('[data-timer]');
    if (!b) return;
    lijst = lijst.filter((t) => String(t.id) !== b.dataset.timer);
    render();
  });

  return { start };
})();

const Detail = (() => {
  const sheet = document.getElementById('sheet');
  const blad = document.getElementById('detail');
  let r = null, ctx = null, factor = 1, methode = null, ikHeb = null, wakeLock = null, wilScherm = false, terugFocus = null;

  const icoon = (naam) => `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-${naam}"/></svg>`;
  const toolIcoon = (tool) => icoon((GEREEDSCHAP[tool] || {}).icoon || 'koekenpan');
  const schaalbaar = () => r.ingr.map((i, idx) => ({ i, idx })).filter(({ i }) => !i.kop && i.q != null && !Hulp.isBasis(i));

  function eenheidLabel(i) {
    const def = EENHEDEN[i.u] || EENHEDEN.st;
    if (def.soort === 'gewicht' || def.soort === 'volume') return i.u === 'l' ? 'liter' : i.u;
    if (i.u === 'st') return i.p || i.n;
    return def.m;
  }

  /* Met { houd: true } (een andere variant kiezen) blijven het aantal personen, de bereidingswijze
     en de scrollpositie staan. Met { personen } opent het recept meteen omgerekend (uit een gedeelde link). */
  function open(recept, context, { houd = false, personen = null } = {}) {
    const vorige = houd && r ? { personen: r.pers * factor, methode, scroll: blad.scrollTop } : null;
    r = recept; ctx = context; factor = 1; ikHeb = null;
    if (sheet.hidden) terugFocus = document.activeElement;
    const ms = Hulp.methodes(r, ctx.keuken);
    methode = ms.length ? (ms.find((m) => m.heb) || ms[0]).id : null;
    if (vorige) {
      factor = Math.max(1, Math.round(vorige.personen)) / r.pers;
      if (ms.some((m) => m.id === vorige.methode)) methode = vorige.methode;
    } else if (personen > 0) factor = Math.round(personen) / r.pers;
    render();
    sheet.hidden = false;
    document.body.classList.add('sheet-open');
    blad.scrollTop = vorige ? vorige.scroll : 0;
    if (vorige) { const knop = blad.querySelector(`[data-variant="${r.id}"]`); if (knop) knop.focus({ preventScroll: true }); }
    else blad.focus({ preventScroll: true });
  }

  function sluit() {
    if (sheet.hidden) return;
    sheet.hidden = true;
    document.body.classList.remove('sheet-open');
    wilScherm = false;
    if (wakeLock) { wakeLock.release().catch(() => {}); wakeLock = null; }
    if (terugFocus && terugFocus.focus) terugFocus.focus({ preventScroll: true });
    r = null;
  }

  function render() {
    const fav = ctx.isFav(r.id);
    const foto = Hulp.foto(r);
    const ms = Hulp.methodes(r, ctx.keuken);
    const meta = [
      `<li>${icoon('klok')} ${Hulp.tijdTekst(r.tijd)}${r.wacht ? ` <span class="zacht">+ ${Hulp.esc(r.wacht)}</span>` : ''}</li>`,
      `<li>${icoon('personen')} ${r.pers} ${r.stuks || (r.pers === 1 ? 'persoon' : 'personen')}</li>`,
      `<li>${Hulp.esc(r.niveau)}</li>`,
      r.vega ? `<li class="vega">${icoon('blad')} Vegetarisch</li>` : '',
      r.pit ? `<li class="pit"><span class="pit-pepers" aria-hidden="true">${icoon('peper').repeat(r.pit)}</span> ${Hulp.pitTekst(r)}</li>` : '',
      `<li class="d-meta-log" id="d-meta-log"></li>`
    ].join('');

    const h = ctx.hoofdstuk(r.keuken);
    const blz = ctx.blz(r.id);
    blad.style.setProperty('--k', h.kleur);
    const beeld = foto
      ? `<figure class="d-foto">
          <img src="${Hulp.esc(foto.src)}" alt="${Hulp.esc(r.naam)}">
          <figcaption>Foto: ${foto.bron ? `<a href="${Hulp.esc(foto.bron)}" target="_blank" rel="noopener">${Hulp.esc(foto.auteur)}</a>` : Hulp.esc(foto.auteur)}, ${Hulp.esc(foto.licentie)}, via Wikimedia Commons</figcaption>
        </figure>`
      : `<figure class="d-foto d-foto-bord"><span class="bord bord-groot" aria-hidden="true">${toolIcoon(r.methodes && r.methodes.length ? r.methodes[0].id : (r.gerei[0] || {}).tool)}</span></figure>`;

    blad.innerHTML = `
      <header class="d-balk">
        <button type="button" class="ikoon-knop" data-sluit aria-label="Sluit recept">${icoon('sluit')}</button>
        <div class="d-balk-acties">
          <button type="button" class="knop knop-klein knop-zacht" id="d-deel" aria-label="Deel recept">${icoon('deel')} <span class="d-deel-tekst">Deel</span></button>
          <button type="button" class="knop knop-klein knop-zacht" id="d-scherm" aria-pressed="${wilScherm}">${icoon('scherm')} Scherm aan</button>
          <button type="button" class="ikoon-knop fav-knop" id="d-fav" aria-pressed="${fav}" aria-label="${fav ? 'Verwijder uit favorieten' : 'Voeg toe aan favorieten'}">${icoon('hart')}</button>
        </div>
      </header>
      <div class="d-spread hk">
        <section class="d-pagina d-links">
          <p class="d-loopkop">Hoofdstuk ${h.nr} · ${Hulp.esc(r.keuken)}</p>
          <div class="d-titelblok">
            <p class="d-soort">${Hulp.esc(r.soort)}${ctx.isNieuw(r.id) ? ' <span class="label-nieuw">Nieuw</span>' : ''}</p>
            <h2 id="d-titel">${Hulp.esc(r.naam)}</h2>
            ${(() => {
              const vs = ctx.varianten(r);
              return vs.length > 1 ? `
              <div class="varianten" role="group" aria-label="Kies je variant">
                <span class="methode-label">Kies je variant</span>
                <div class="segment segment-variant">
                  ${vs.map((v) => `<button type="button" data-variant="${v.id}" aria-pressed="${v.id === r.id}" title="${Hulp.esc(v.naam)}">${Hulp.esc(v.variant || v.naam)}</button>`).join('')}
                </div>
              </div>` : '';
            })()}
            <p class="d-intro">${Hulp.esc(r.intro)}</p>
            <ul class="d-meta">${meta}</ul>
          </div>
          ${beeld}
          <section class="d-gerei" aria-labelledby="d-gerei-titel">
            <h3 id="d-gerei-titel">Pannen en apparatuur</h3>
            ${ms.length ? `
              <div class="methode" role="group" aria-label="Bereidingswijze">
                <span class="methode-label">Bereiden met</span>
                <div class="segment">
                  ${ms.map((m) => `<button type="button" data-methode="${m.id}" aria-pressed="${m.id === methode}" class="${m.heb ? '' : 'mist'}">${toolIcoon(m.id)} ${Hulp.esc(m.naam === 'Braadpan' && ctx.keuken.includes('dutchoven') ? 'Dutch oven' : m.naam)}${m.heb ? '' : '<span class="sr"> (niet in jouw keuken)</span>'}</button>`).join('')}
                </div>
              </div>` : ''}
            <ul class="gerei-lijst" id="d-gerei-lijst"></ul>
          </section>
          <section class="d-ingr" aria-labelledby="d-ingr-titel">
            <h3 id="d-ingr-titel">Ingrediënten</h3>
            <div class="schaal">
              <div class="schaal-rij">
                <span class="schaal-label">${r.stuks ? 'Aantal' : 'Personen'}</span>
                <div class="stepper">
                  <button type="button" class="ikoon-knop" id="d-min" aria-label="Minder ${r.stuks || 'personen'}">−</button>
                  <output id="d-pers" aria-live="polite"></output>
                  <button type="button" class="ikoon-knop" id="d-plus" aria-label="Meer ${r.stuks || 'personen'}">+</button>
                </div>
              </div>
              <div class="schaal-rij schaal-heb">
                <label class="schaal-label" for="d-heb-ingr">Ik heb</label>
                <div class="heb-velden">
                  <input id="d-heb-aantal" type="number" inputmode="decimal" min="0" step="any" placeholder="300" aria-label="Hoeveelheid die je hebt">
                  <span class="heb-eenheid" id="d-heb-eenheid"></span>
                  <select id="d-heb-ingr">
                    ${schaalbaar().map(({ i, idx }) => `<option value="${idx}">${Hulp.esc(i.n)}</option>`).join('')}
                  </select>
                </div>
              </div>
              <p class="schaal-info" id="d-schaal-info"></p>
            </div>
            <div class="mix-notitie" id="d-mix" hidden></div>
          <ul class="ingr-lijst" id="d-ingr-lijst"></ul>
            <button type="button" class="knop knop-vol" id="d-lijst">${icoon('mand')} Op boodschappenlijst</button>
          </section>
          <p class="d-blz">${blz}</p>
        </section>
        <section class="d-pagina d-rechts">
          <p class="d-loopkop">${Hulp.esc(r.naam)}</p>
          <section class="d-stappen" aria-labelledby="d-stap-titel">
            <h3 id="d-stap-titel">Bereiding</h3>
            <ol class="stappen" id="d-stappen"></ol>
          </section>
          <div class="d-notities">
            ${(() => { const lm = ctx.lekkerMet(r); return lm.length ? `<aside class="notitie notitie-bij"><h3>Lekker met</h3><ul>${lm.map((x) => `<li><a href="#${x.id}" data-bij="${x.id}">${Hulp.esc(x.naam)}</a> <span class="zacht">blz. ${ctx.blz(x.id)}</span></li>`).join('')}</ul></aside>` : ''; })()}
            ${r.alt && r.alt.length ? `<aside class="notitie notitie-alt"><h3>Alternatieven</h3><ul>${r.alt.map((a) => `<li>${Hulp.esc(a)}</li>`).join('')}</ul></aside>` : ''}
            ${r.tips && r.tips.length ? `<aside class="notitie notitie-tip"><h3>Tip</h3><ul>${r.tips.map((a) => `<li>${Hulp.esc(a)}</li>`).join('')}</ul></aside>` : ''}
            <aside class="notitie notitie-rest" id="d-rest" aria-labelledby="d-rest-titel" hidden></aside>
            <aside class="bon" id="d-prijs" aria-labelledby="d-prijs-titel" hidden></aside>
            <aside class="notitie notitie-log" id="d-log" aria-labelledby="d-log-titel"></aside>
          </div>
          <p class="d-blz">${blz + 1}</p>
        </section>
      </div>`;

    renderGerei();
    renderIngr();
    renderStappen();
    zetHebEenheid();
    renderLog();
  }

  /* Mijn logboek: hoe vaak gemaakt, hoe lekker, hoe leuk om te maken en een eigen notitie. */
  const datum = (t) => new Date(t).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: new Date(t).getFullYear() === new Date().getFullYear() ? undefined : 'numeric' });

  function sterren(soort, waarde, labels, vraag) {
    return `<div class="log-rij" role="group" aria-labelledby="d-log-${soort}">
      <span class="log-vraag" id="d-log-${soort}">${vraag}</span>
      <span class="sterren">
        ${[1, 2, 3, 4, 5].map((n) => `<button type="button" class="ster" data-beoordeel="${soort}" data-waarde="${n}" aria-pressed="${n <= waarde}" aria-label="${n} van 5: ${labels[n]}" title="${labels[n]}">${icoon('ster')}</button>`).join('')}
      </span>
      <span class="log-label">${waarde ? labels[waarde] : ''}</span>
    </div>`;
  }

  function renderLog() {
    const log = Logboek.van(r.id);
    const n = log.keren.length;
    const meta = blad.querySelector('#d-meta-log');
    meta.hidden = !n;
    meta.innerHTML = n ? `${icoon('vink')} ${n}× gemaakt` : '';
    const el = blad.querySelector('#d-log');
    const veld = el.querySelector('#d-log-notitie');
    const tekst = veld ? veld.value : log.notitie;
    el.innerHTML = `
      <h3 id="d-log-titel">Mijn logboek</h3>
      <div class="log-gemaakt">
        <p class="log-teller" aria-live="polite">${n ? `<b>${n}×</b> gemaakt<span class="log-laatst">, laatst op ${datum(log.keren[n - 1])}</span>` : 'Nog niet gemaakt'}</p>
        <div class="log-knoppen">
          ${n ? `<button type="button" class="ikoon-knop log-terug" id="d-log-terug" aria-label="Haal de laatste keer weg" title="Haal de laatste keer weg">−</button>` : ''}
          <button type="button" class="knop knop-klein" id="d-log-gemaakt">${icoon('vink')} ${n ? 'Weer gemaakt' : 'Gemaakt'}</button>
        </div>
      </div>
      ${sterren('smaak', log.smaak, Logboek.SMAAK, 'Hoe lekker?')}
      ${sterren('maken', log.maken, Logboek.MAKEN, 'Leuk om te maken?')}
      <label class="log-vraag" for="d-log-notitie">Notitie</label>
      <textarea id="d-log-notitie" class="log-notitie" rows="3" placeholder="Bijv. volgende keer minder sambal">${Hulp.esc(tekst)}</textarea>`;
  }

  function renderGerei() {
    const lijst = r.gerei.filter((g) => !g.m || g.m === methode);
    const gezien = new Set();
    blad.querySelector('#d-gerei-lijst').innerHTML = lijst.map((g) => {
      const mist = !Hulp.heeftTool(g.tool, ctx.keuken);
      const advies = Hulp.panAdvies(g, r, ctx.keuken, gezien);
      return `<li class="${mist ? 'mist' : ''}">
        <span class="tegel tegel-klein">${toolIcoon(g.tool)}</span>
        <div class="gerei-tekst">
          <strong>${Hulp.esc(g.tekst)}</strong>
          ${mist ? `<span class="label-mist">Niet in jouw keuken</span>` : ''}
          ${g.of && !(advies && advies.soort === 'vervang') ? `<span class="gerei-of">${Hulp.esc(g.of)}</span>` : ''}
          ${advies ? `<span class="gerei-jij gerei-jij-${advies.soort}"><b>Jouw keuken:</b> ${Hulp.esc(advies.tekst)}</span>` : ''}
        </div>
      </li>`;
    }).join('');
  }

  function renderIngr() {
    const pers = r.pers * factor;
    const hele = Math.abs(pers - Math.round(pers)) < 0.05;
    blad.querySelector('#d-pers').textContent = hele ? Math.round(pers) : '≈ ' + Hulp.getal(pers, 1);

    const info = blad.querySelector('#d-schaal-info');
    if (factor === 1) {
      info.innerHTML = `Origineel recept. Pas het aantal ${r.stuks || 'personen'} aan, of vul in hoeveel je van één ingrediënt hebt.`;
    } else {
      let advies = '';
      if (factor >= 1.6) advies = ' Grotere hoeveelheid: gebruik een grotere pan of bak in delen. Stooftijden blijven ongeveer gelijk.';
      else if (factor <= 0.6) advies = ' Kleinere hoeveelheid: houd de baktijd in de gaten, het kan iets sneller gaar zijn.';
      info.innerHTML = `<strong>Aangepast ×${Hulp.getal(factor, 2)}</strong>${ikHeb ? ` op ${Hulp.esc(ikHeb)}` : ''}.${advies} <button type="button" class="knop-tekst" id="d-reset">Terug naar origineel</button>`;
    }

    // Groentemix uit "Wat heb ik in huis?": wat vervangt hij hier en hoeveel gebruik je?
    const mixen = Hulp.mixenVoor(r, ctx.voorraad || [], factor);
    const mixEl = blad.querySelector('#d-mix');
    mixEl.hidden = !mixen.length;
    mixEl.innerHTML = mixen.map(({ mix, gedekt, gram, erbij }) => `<p>${gedekt.length
      ? `<b>Met je ${Hulp.esc(mix.naam.toLowerCase())}:</b> die vervangt hier ${Hulp.esc(gedekt.map((i) => i.n).join(', '))}. Gebruik ± ${gram} g van je mix.`
      : `<b>Lekker met je ${Hulp.esc(mix.naam.toLowerCase())}:</b> voeg ± ${erbij} g toe.`} ${Hulp.esc(mix.bereiding)}</p>`).join('');

    const uitMix = new Map();
    mixen.forEach(({ mix, gedekt }) => gedekt.forEach((i) => uitMix.set(i.n, mix.naam.toLowerCase())));

    blad.querySelector('#d-ingr-lijst').innerHTML = r.ingr.map((i, idx) => {
      if (i.kop) return `<li class="ingr-kop">${Hulp.esc(i.kop)}</li>`;
      const mixNaam = uitMix.get(i.n);
      const h = Hulp.hoeveelheid(i, factor);
      const extra = i.x || (i.q == null ? 'naar smaak' : '');
      const ofTekst = mixNaam ? '' : Hulp.vervangerTekst(i, factor);
      return `<li class="ingr${i.opt ? ' is-opt' : ''}">
        <label>
          <input type="checkbox" data-ingr="${idx}">
          <span class="hv">${Hulp.esc([h.aantal, h.eenheid].filter(Boolean).join(' '))}</span>
          <span class="ingr-naam">${Hulp.esc(h.naam)}${i.opt ? ' <em>(optioneel)</em>' : ''}${extra ? `<span class="ingr-x">${Hulp.esc(extra)}</span>` : ''}${ofTekst ? `<span class="ingr-x ingr-of">${Hulp.esc(ofTekst)}</span>` : ''}${mixNaam ? `<span class="ingr-mix">uit je ${Hulp.esc(mixNaam)}</span>` : ''}</span>
        </label>
        ${Boodschappen.isWater(i) ? '' : lijstKnop(i, idx)}
      </li>`;
    }).join('');
    renderRest();
    renderPrijs();
  }

  /* Losse knop per ingrediënt: alleen dit ingrediënt op het boodschappenlijstje. */
  function lijstKnop(i, idx) {
    const erop = Boodschappen.staatErop(r, i);
    return `<button type="button" class="ingr-mand${erop ? ' is-erop' : ''}" data-mand="${idx}" aria-pressed="${erop}" aria-label="${erop ? 'Staat op je boodschappenlijst' : 'Zet op je boodschappenlijst'}: ${Hulp.esc(i.n)}" title="${erop ? 'Staat op je boodschappenlijst' : 'Op boodschappenlijst'}">${icoon(erop ? 'vink' : 'mand')}</button>`;
  }

  function renderLijstKnoppen() {
    blad.querySelectorAll('[data-mand]').forEach((b) => { b.outerHTML = lijstKnop(r.ingr[+b.dataset.mand], +b.dataset.mand); });
  }

  /* Restjes: wat je overhoudt van pakken, blikken en bosjes, voor het aantal personen dat je nu kookt. */
  function restRegels() {
    const hoofd = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    const naam = (x) => x.naam + (x.opt ? ' (als je het gebruikt)' : '');
    return Hulp.restjes(r, factor).map(({ regels, tip }) => {
      const vaag = regels.every((x) => !x.zin);
      const kop = vaag
        ? `<b>${Hulp.esc(hoofd(regels.map(naam).join(', ').replace(/, ([^,]*)$/, ' en $1')))}:</b>`
        : regels.map((x) => `<b>${Hulp.esc(hoofd(naam(x)))}:</b> ${Hulp.esc(x.zin)}`).join(' ');
      return `${kop} ${Hulp.esc(tip)}`;
    });
  }

  function renderRest() {
    const el = blad.querySelector('#d-rest');
    const rest = restRegels();
    el.hidden = !rest.length;
    el.innerHTML = rest.length ? `<h3 id="d-rest-titel">Restjes</h3><ul>${rest.map((x) => `<li>${x}</li>`).join('')}</ul>` : '';
  }

  /* "· aan de kassa 2× € 0,72" als je voor dit ingrediënt meer of iets anders koopt dan het product hierboven. */
  function kassaTekst({ pak, naam, kassa }) {
    if (!kassa || (kassa.aantal === 1 && kassa.naam === naam && kassa.pak === pak)) return '';
    const e = Prijzen.euro;
    const wat = kassa.naam === naam && kassa.pak === pak ? '' : ` ${kassa.naam === naam ? '' : Hulp.esc(kassa.naam)}${kassa.maat ? ` (${Hulp.esc(kassa.maat)})` : ''}`;
    return `<br>aan de kassa:${wat} ${kassa.aantal > 1 ? `${kassa.aantal}× ${e(kassa.pak)} = ` : ''}${e(kassa.bedrag)}`;
  }

  /* Wat kost het? Geschatte prijs per supermarkt als kassabonnetje, voor het aantal personen dat je nu kookt. */
  function renderPrijs() {
    const el = blad.querySelector('#d-prijs');
    const uitkomst = Prijzen.actief && Prijzen.lijst(r.ingr.filter((i) => !i.kop && !i.opt).map((i) => ({ i, factor })));
    el.hidden = !uitkomst;
    if (el.hidden) { el.innerHTML = ''; return; }
    const { winkels, regels, zonder } = uitkomst;
    const e = Prijzen.euro;
    const pers = r.pers * factor;
    // Geen winkel heeft (bijna) alles? Dan het totaal als je alles haalt waar het het goedkoopst is.
    const totaal = winkels.length ? winkels[0].totaal : uitkomst.goedkoopst;
    // Aan de kassa kan een andere winkel het goedkoopst zijn (kleinere verpakkingen).
    const kassaWinkel = winkels.reduce((a, w) => (!a || w.kassa < a.kassa ? w : a), null);
    const kassa = kassaWinkel ? kassaWinkel.kassa : uitkomst.goedkoopstKassa;
    const wie = r.stuks ? `${Hulp.getal(pers, 1)} ${r.stuks}` : `${Hulp.getal(pers, 1)} ${pers === 1 ? 'persoon' : 'personen'}`;
    el.innerHTML = `
      <h3 id="d-prijs-titel">Wat kost het?</h3>
      <p class="bon-totaal"><b>± ${e(totaal)}</b> voor ${Hulp.esc(wie)}${r.stuks || pers <= 1 ? '' : `, ${e(totaal / pers)} per persoon`}</p>
      <p class="bon-kassa">Aan de kassa ± ${e(kassa)}, met hele verpakkingen${kassaWinkel ? ` bij ${Hulp.esc(kassaWinkel.naam)}` : ''}</p>
      ${Prijzen.winkelLijst(winkels)}
      <details class="bon-details">
        <summary>Per ingrediënt, waar het het goedkoopst is</summary>
        <ul class="bon-regels">
          ${regels.map(({ i, beste }) => `<li>
            <span>${Hulp.esc(Hulp.hoeveelheidTekst(i, factor))}<small>${beste.link ? `<a href="${Hulp.esc(beste.link)}" target="_blank" rel="noopener">${Hulp.esc(beste.naam)}</a>` : Hulp.esc(beste.naam)}${beste.maat ? ` · ${Hulp.esc(beste.maat)}` : ''} · ${e(beste.pak)}${kassaTekst(beste)}</small></span>
            <span>${Hulp.esc(Prijzen.winkelNaam(beste.id))}</span><span>${e(beste.bedrag)}</span>
          </li>`).join('')}
        </ul>
        <p class="bon-mix">Haal je alles waar het het goedkoopst is: ± ${e(uitkomst.goedkoopst)} gebruikt, ± ${e(uitkomst.goedkoopstKassa)} aan de kassa.</p>
      </details>
      <p class="bon-voet">Webshopprijzen van ${Hulp.esc(Prijzen.datum())} (via <a href="https://www.checkjebon.nl" target="_blank" rel="noopener">Checkjebon.nl</a>). <i>Gebruikt</i> is het deel van de verpakkingen dat in dit recept gaat, <i>kassa</i> wat je afrekent als je alles nieuw koopt. Aanbiedingen tellen niet altijd mee.${zonder.length ? ` Zonder prijs: ${Hulp.esc(zonder.join(', '))}.` : ''}</p>`;
  }

  function renderStappen() {
    const stappen = r.stappen.filter((s) => !s.m || s.m === methode);
    blad.querySelector('#d-stappen').innerHTML = stappen.map((s, n) => `
      <li class="stap${s.m ? ' stap-methode' : ''}">
        <button type="button" class="stap-nr" data-stap aria-label="Markeer stap ${n + 1} als klaar">${n + 1}</button>
        <div class="stap-tekst">
          <p>${Hulp.esc(s.t)}</p>
          ${ctx.keuken.includes('rijstkoker') && /^Kook de .*rijst/i.test(s.t) ? '<span class="stap-notitie">of: in je rijstkoker</span>' : ''}
          ${s.min ? `<button type="button" class="timer-knop" data-min="${s.min}" data-label="Stap ${n + 1}">${icoon('klok')} Timer ${Hulp.tijdTekst(s.min)}</button>` : ''}
        </div>
      </li>`).join('');
  }

  function zetHebEenheid() {
    const sel = blad.querySelector('#d-heb-ingr');
    if (!sel || !sel.value) { const rij = blad.querySelector('.schaal-heb'); if (rij) rij.hidden = true; return; }
    const i = r.ingr[+sel.value];
    blad.querySelector('#d-heb-eenheid').textContent = eenheidLabel(i);
    blad.querySelector('#d-heb-aantal').placeholder = Hulp.getal(i.q * factor, 1);
  }

  function zetPersonen(p) {
    factor = Math.max(1, p) / r.pers;
    ikHeb = null;
    blad.querySelector('#d-heb-aantal').value = '';
    renderIngr(); zetHebEenheid();
  }

  function hebIngevuld() {
    const sel = blad.querySelector('#d-heb-ingr');
    const veld = blad.querySelector('#d-heb-aantal');
    const i = r.ingr[+sel.value];
    const waarde = parseFloat(String(veld.value).replace(',', '.'));
    zetHebEenheid();
    if (!(waarde > 0)) { if (ikHeb) { factor = 1; ikHeb = null; renderIngr(); } return; }
    factor = waarde / i.q;
    const def = EENHEDEN[i.u] || EENHEDEN.st;
    const eenheid = def.soort === 'gewicht' || def.soort === 'volume' ? eenheidLabel(i) : (waarde > 1 ? def.m : def.e);
    const naam = i.u === 'st' ? (waarde > 1 && i.p ? i.p : i.n) : `${eenheid} ${i.n}`;
    ikHeb = `${Hulp.getal(waarde, 2)} ${naam}`;
    renderIngr();
  }

  /* Het recept als platte tekst, precies zoals het nu op je scherm staat: gekozen variant,
     bereidingswijze en aantal personen. Onderaan een link die het recept zo weer opent. */
  function alsTekst() {
    const pers = Math.round(r.pers * factor);
    const ms = Hulp.methodes(r, ctx.keuken);
    const m = ms.find((x) => x.id === methode);
    const regels = [r.naam, ''];
    regels.push(`${pers} ${r.stuks || (pers === 1 ? 'persoon' : 'personen')} · ${Hulp.tijdTekst(r.tijd)}${r.wacht ? ` + ${r.wacht}` : ''} · ${r.niveau}${r.vega ? ' · vegetarisch' : ''}`);
    if (m && ms.length > 1) regels.push(`Bereiden met: ${m.naam}`);
    regels.push('', 'Ingrediënten');
    r.ingr.forEach((i) => {
      if (i.kop) return regels.push('', i.kop);
      const extra = i.x || (i.q == null ? 'naar smaak' : '');
      const ofTekst = Hulp.vervangerTekst(i, factor);
      regels.push(`- ${Hulp.hoeveelheidTekst(i, factor)}${extra ? `, ${extra}` : ''}${ofTekst ? ` (${ofTekst})` : ''}${i.opt ? ' (optioneel)' : ''}`);
    });
    regels.push('', 'Bereiding');
    r.stappen.filter((s) => !s.m || s.m === methode).forEach((s, n) => regels.push(`${n + 1}. ${s.t}`));
    if (r.tips && r.tips.length) regels.push('', 'Tip', ...r.tips.map((t) => `- ${t}`));
    regels.push('', link());
    return regels.join('\n');
  }

  function link() {
    const pers = Math.round(r.pers * factor);
    return `${location.href.split('#')[0]}#${r.id}${pers !== r.pers ? `?personen=${pers}` : ''}`;
  }

  function kopieer(tekst) {
    const terugval = () => {
      const ta = document.createElement('textarea');
      ta.value = tekst; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      let gelukt = false;
      try { gelukt = document.execCommand('copy'); } catch (e) { /* genegeerd */ }
      ta.remove();
      App.toast(gelukt ? 'Recept gekopieerd: plak het in een bericht of mail' : 'Kopiëren lukt hier niet');
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(tekst).then(() => App.toast('Recept gekopieerd: plak het in een bericht of mail'), terugval);
    } else terugval();
  }

  /* Het recept als tekst delen: alleen als de pdf niet lukt (bijv. een heel oude browser). */
  async function deelTekst() {
    const tekst = alsTekst();
    if (navigator.share) {
      try { await navigator.share({ title: r.naam, text: tekst }); return; }
      catch (e) { if (e && e.name === 'AbortError') return; }
    }
    kopieer(tekst);
  }

  function bewaar(bestand) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(bestand); a.download = bestand.name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 10000);
    App.toast('Pdf opgeslagen bij je downloads');
  }

  /* Het recept als pdf in de stijl van het boek. Op telefoon en tablet opent het deelmenu (WhatsApp,
     Berichten, mail, …); kan dat niet, dan wordt de pdf gedownload. Sommige browsers (Safari) staan
     delen alleen direct na een tik toe; is de pdf daarvoor te laat klaar, dan deelt de volgende tik hem meteen. */
  let pdf = null, bezig = false;
  async function deel(knop) {
    if (bezig) return;
    const sleutel = `${r.id}|${Math.round(r.pers * factor)}|${methode}`;
    if (!pdf || pdf.sleutel !== sleutel) {
      bezig = true;
      knop.setAttribute('aria-busy', 'true');
      const label = knop.querySelector('.d-deel-tekst');
      label.textContent = 'Pdf maken…';
      try {
        const bestand = await DeelKaart.maak(r, {
          factor, methode, methodes: Hulp.methodes(r, ctx.keuken), varianten: ctx.varianten(r),
          hoofdstuk: ctx.hoofdstuk(r.keuken), restjes: restRegels(), link: link()
        });
        pdf = { sleutel, bestand };
      } catch (e) {
        console.error(e);
        return deelTekst();
      } finally {
        bezig = false;
        knop.removeAttribute('aria-busy');
        label.textContent = 'Deel';
      }
    }
    const data = { files: [pdf.bestand], title: r.naam, text: `${r.naam} uit het Receptenboek van Mark: ${link()}` };
    if (navigator.canShare && navigator.canShare({ files: data.files })) {
      try { await navigator.share(data); return; }
      catch (e) {
        if (e && e.name === 'AbortError') return;
        if (e && e.name === 'NotAllowedError') return App.toast('De pdf is klaar: tik nog een keer op Deel');
      }
    }
    bewaar(pdf.bestand);
  }

  async function wisselScherm(knop) {
    if (wilScherm) {
      wilScherm = false;
      if (wakeLock) { wakeLock.release().catch(() => {}); wakeLock = null; }
      knop.setAttribute('aria-pressed', 'false');
      App.toast('Scherm mag weer uit');
      return;
    }
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => { wakeLock = null; });
      wilScherm = true;
      knop.setAttribute('aria-pressed', 'true');
      App.toast('Je scherm blijft aan zolang dit recept open is');
    } catch (e) {
      App.toast('Je browser staat niet toe dat het scherm aan blijft');
    }
  }

  blad.addEventListener('click', (e) => {
    const t = e.target;
    if (t.closest('[data-sluit]')) return ctx.sluit();
    const v = t.closest('[data-variant]');
    if (v) { if (v.dataset.variant !== r.id) ctx.kiesVariant(v.dataset.variant); return; }
    const m = t.closest('[data-methode]');
    if (m) {
      methode = m.dataset.methode;
      blad.querySelectorAll('[data-methode]').forEach((b) => b.setAttribute('aria-pressed', String(b === m)));
      renderGerei(); renderStappen();
      return;
    }
    if (t.closest('#d-min')) return zetPersonen(Math.ceil(r.pers * factor - 0.01) - 1);
    if (t.closest('#d-plus')) return zetPersonen(Math.floor(r.pers * factor + 0.01) + 1);
    if (t.closest('#d-reset')) return zetPersonen(r.pers);
    if (t.closest('#d-fav')) {
      const aan = ctx.wisselFav(r.id);
      const b = t.closest('#d-fav');
      b.setAttribute('aria-pressed', String(aan));
      b.setAttribute('aria-label', aan ? 'Verwijder uit favorieten' : 'Voeg toe aan favorieten');
      return App.toast(aan ? 'Bewaard bij je favorieten' : 'Verwijderd uit je favorieten');
    }
    if (t.closest('#d-log-gemaakt')) {
      const n = Logboek.gemaakt(r.id);
      renderLog();
      return App.toast(n === 1 ? 'Afgevinkt: je hebt dit recept gemaakt' : `Afgevinkt: nu ${n}× gemaakt`);
    }
    if (t.closest('#d-log-terug')) { Logboek.terug(r.id); renderLog(); return App.toast('Laatste keer weggehaald'); }
    const st = t.closest('[data-beoordeel]');
    if (st) { Logboek.beoordeel(r.id, st.dataset.beoordeel, +st.dataset.waarde); return renderLog(); }
    if (t.closest('#d-deel')) return deel(t.closest('#d-deel'));
    if (t.closest('#d-scherm')) return wisselScherm(t.closest('#d-scherm'));
    const bij = t.closest('[data-bij]');
    if (bij) { e.preventDefault(); return ctx.open(bij.dataset.bij); }
    if (t.closest('#d-lijst')) {
      const n = Boodschappen.voegReceptToe(r, factor);
      renderLijstKnoppen();
      return App.toast(`${n} ingrediënten op je boodschappenlijst gezet`);
    }
    const mand = t.closest('[data-mand]');
    if (mand) {
      const i = r.ingr[+mand.dataset.mand];
      const wat = i.q == null ? i.n : Hulp.hoeveelheidTekst(i, factor);
      const Wat = wat.charAt(0).toUpperCase() + wat.slice(1);
      if (Boodschappen.staatErop(r, i)) return App.toast(`${Wat} staat al op je boodschappenlijst`);
      Boodschappen.voegEenToe(r, i, factor);
      renderLijstKnoppen();
      return App.toast(`${Wat} op je boodschappenlijst gezet`);
    }
    const tk = t.closest('.timer-knop');
    if (tk) {
      Timers.start(`${r.naam}, ${tk.dataset.label.toLowerCase()}`, +tk.dataset.min);
      return App.toast(`Timer gestart: ${Hulp.tijdTekst(+tk.dataset.min)}`);
    }
    const nr = t.closest('[data-stap]');
    if (nr) {
      const li = nr.closest('.stap');
      li.classList.toggle('is-klaar');
      nr.setAttribute('aria-pressed', String(li.classList.contains('is-klaar')));
    }
  });

  let notitieTimer = null;
  blad.addEventListener('input', (e) => {
    if (e.target.id === 'd-heb-aantal') hebIngevuld();
    if (e.target.id === 'd-log-notitie') {
      const id = r.id, tekst = e.target.value;
      clearTimeout(notitieTimer);
      notitieTimer = setTimeout(() => Logboek.notitie(id, tekst), 500);
    }
  });
  blad.addEventListener('change', (e) => {
    if (e.target.id === 'd-heb-ingr') hebIngevuld();
    if (e.target.id === 'd-log-notitie') { clearTimeout(notitieTimer); Logboek.notitie(r.id, e.target.value); }
    if (e.target.matches('[data-ingr]')) e.target.closest('.ingr').classList.toggle('is-klaar', e.target.checked);
  });

  sheet.addEventListener('click', (e) => { if (e.target.matches('.sheet-achter')) ctx.sluit(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !sheet.hidden) ctx.sluit(); });
  document.addEventListener('visibilitychange', async () => {
    // De wake lock vervalt als je van tabblad wisselt; vraag hem opnieuw aan.
    if (document.visibilityState === 'visible' && !sheet.hidden && wilScherm && !wakeLock) {
      try { wakeLock = await navigator.wakeLock.request('screen'); } catch (e) { /* genegeerd */ }
    }
  });

  /* Na ontvangst van een ander apparaat; een notitie waar je nu in typt blijft staan. */
  function herlaadLog() {
    if (!r) return;
    const veld = blad.querySelector('#d-log-notitie');
    if (veld && document.activeElement !== veld) veld.value = Logboek.van(r.id).notitie;
    renderLog();
  }

  return { open, sluit, herlaadLog, isOpen: () => !sheet.hidden, huidig: () => r && r.id };
})();
