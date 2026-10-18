/* Boodschappenlijst: samengevoegde hoeveelheden, afvinken en kopiëren. */
const Boodschappen = (() => {
  let items = Hulp.opslag.lees('boodschappen', []);

  /* Oudere lijsten bewaarden het alternatief ("of: ...") niet: zoek het op in het recept. */
  function vulAlternatievenAan(lijst) {
    lijst.forEach((it) => {
      if (it.eigen || it.x) return;
      const naam = it.k.split('|')[0];
      for (const r of RECEPTEN) {
        if (!it.recepten.includes(r.naam) || !r.ingr) continue;
        const i = r.ingr.find((g) => g.x && Hulp.norm(g.n || '') === naam);
        if (i) { it.x = i.x; break; }
      }
    });
    return lijst;
  }
  vulAlternatievenAan(items);

  const bewaar = () => {
    Hulp.opslag.schrijf('boodschappen', items);
    document.dispatchEvent(new CustomEvent('lijst-gewijzigd'));
  };

  /* Zet kg/l om naar g/ml zodat hoeveelheden optelbaar zijn. */
  function basis(ingr, factor) {
    let q = ingr.q * factor, u = ingr.u || 'st';
    if (u === 'kg') { q *= 1000; u = 'g'; }
    if (u === 'l') { q *= 1000; u = 'ml'; }
    return { q, u };
  }

  /* Water uit de kraan hoeft niet op het lijstje. */
  const isWater = (i) => /^(lauw )?water$/.test(Hulp.norm(i.n));

  function voegIngrToe(recept, i, factor) {
    // Zonder hoeveelheid (zout, peper naar smaak) gaat het als los item mee, met het recept erbij.
    if (i.q == null) {
      const k = 'smaak-' + Hulp.norm(i.n);
      const bestaand = items.find((x) => x.k === k);
      if (bestaand) {
        bestaand.klaar = false;
        if (!bestaand.recepten.includes(recept.naam)) bestaand.recepten.push(recept.naam);
      } else {
        items.push({ k, n: i.n, eigen: true, recepten: [recept.naam], klaar: false });
      }
      return;
    }
    const { q, u } = basis(i, factor);
    const k = Hulp.norm(i.n) + '|' + u;
    const bestaand = items.find((x) => x.k === k);
    // Een eigen vervanger in het recept bewaren we per eenheid, zodat hij meetelt met de hoeveelheid.
    const ofPer = i.of && typeof i.of === 'object' ? { ...i.of, q: i.of.q * factor / q } : null;
    if (bestaand) {
      bestaand.q += q;
      bestaand.klaar = false;
      if (!bestaand.recepten.includes(recept.naam)) bestaand.recepten.push(recept.naam);
      if (i.x && !bestaand.x) bestaand.x = i.x;
      if (i.vers) bestaand.vers = true;
      if (typeof i.of === 'string' && !bestaand.of) bestaand.of = i.of;
      if (ofPer && !bestaand.ofPer) bestaand.ofPer = ofPer;
    } else {
      const nieuw = { k, n: i.n, p: i.p, q, u, x: i.x, recepten: [recept.naam], klaar: false };
      if (i.vers) nieuw.vers = true;
      if (typeof i.of === 'string') nieuw.of = i.of;
      if (ofPer) nieuw.ofPer = ofPer;
      items.push(nieuw);
    }
  }

  function voegReceptToe(recept, factor, overslaan = new Set()) {
    let aantal = 0;
    recept.ingr.forEach((i) => {
      if (i.kop || i.q == null || isWater(i) || overslaan.has(i.n)) return;
      voegIngrToe(recept, i, factor);
      aantal++;
    });
    bewaar();
    return aantal;
  }

  /* Eén ingrediënt uit een recept, zoals je het nu ziet (met het gekozen aantal personen). */
  function voegEenToe(recept, i, factor) {
    if (i.kop) return;
    voegIngrToe(recept, i, factor);
    bewaar();
  }

  /* Staat dit ingrediënt al op de lijst (nog niet afgevinkt) voor dit recept? */
  function staatErop(recept, i) {
    const naam = Hulp.norm(i.n);
    return items.some((x) => !x.klaar && x.recepten.includes(recept.naam)
      && (x.k === 'smaak-' + naam || x.k.split('|')[0] === naam && !x.eigen));
  }

  function voegEigenToe(tekst) {
    const t = tekst.trim();
    if (!t) return;
    items.push({ k: 'eigen-' + Date.now(), n: t, eigen: true, recepten: [], klaar: false });
    bewaar();
  }

  /* Receptnaam als link, zodat je vanaf het lijstje meteen terug bent in het recept. */
  function bronLink(naam) {
    const r = RECEPTEN.find((x) => x.naam === naam);
    return r ? `<a href="#${Hulp.esc(r.id)}" data-open="${Hulp.esc(r.id)}">${Hulp.esc(naam)}</a>` : Hulp.esc(naam);
  }

  const tekstVan = (it) => it.eigen ? it.n : Hulp.hoeveelheidTekst(it, 1);
  /* "of ½ tl gemberpoeder" of "vers nodig", voor de hele hoeveelheid op de lijst. */
  const ofVan = (it) => it.eigen ? '' : Hulp.vervangerTekst(it, 1);

  /* Geschatte prijs van wat nog op de lijst staat, per supermarkt (js/prijzen.js). */
  function renderPrijs(el, open) {
    const uitkomst = el && Prijzen.actief && Prijzen.lijst(open.filter((x) => !x.eigen).map((it) => ({ i: it, factor: 1 })));
    if (!el) return;
    el.hidden = !uitkomst;
    if (el.hidden) { el.innerHTML = ''; return; }
    const e = Prijzen.euro;
    el.innerHTML = `
      <h3 id="lijst-prijs-titel">Wat kost het?</h3>
      ${Prijzen.winkelLijst(uitkomst.winkels)}
      <p class="bon-mix">Haal je alles waar het het goedkoopst is: ± ${e(uitkomst.goedkoopst)} gebruikt, ± ${e(uitkomst.goedkoopstKassa)} aan de kassa. Per product zie je hierboven waar dat is.</p>
      <p class="bon-voet"><i>Gebruikt</i> is het deel van de verpakkingen dat je nodig hebt, <i>kassa</i> wat je afrekent met hele verpakkingen. Webshopprijzen van ${Hulp.esc(Prijzen.datum())} (via <a href="https://www.checkjebon.nl" target="_blank" rel="noopener">Checkjebon.nl</a>); aanbiedingen tellen niet altijd mee.${uitkomst.zonder.length ? ` Zonder prijs: ${Hulp.esc(uitkomst.zonder.join(', '))}.` : ''}</p>`;
  }

  function prijsVan(it) {
    const r = !it.eigen && Prijzen.actief ? Prijzen.regel(it, 1) : null;
    if (!r) return '';
    const k = r.beste.kassa;
    return `± ${Prijzen.euro(r.beste.bedrag)} bij ${Prijzen.winkelNaam(r.beste.id)}${k && Math.abs(k.bedrag - r.beste.bedrag) >= 0.01 ? `, kassa ${k.aantal > 1 ? `${k.aantal}× ` : ''}${Prijzen.euro(k.pak)}` : ''}`;
  }

  function render(lijstEl, subEl, prijsEl) {
    const open = items.filter((x) => !x.klaar);
    const klaar = items.filter((x) => x.klaar);
    renderPrijs(prijsEl, open);
    subEl.textContent = items.length
      ? `${open.length} nog te halen, ${klaar.length} afgevinkt.`
      : 'Voeg ingrediënten toe vanuit een recept. Hoeveelheden worden samengevoegd.';
    if (!items.length) {
      lijstEl.innerHTML = '<li class="lijst-leeg">Je lijst is nog leeg. Open een recept en kies <strong>Op boodschappenlijst</strong>, of tik op het mandje naast één ingrediënt.</li>';
      return;
    }
    lijstEl.innerHTML = [...open, ...klaar].map((it) => `
      <li class="item${it.klaar ? ' is-klaar' : ''}">
        <label>
          <input type="checkbox" data-k="${Hulp.esc(it.k)}" ${it.klaar ? 'checked' : ''}>
          <span class="item-woorden">
            <span class="item-tekst">${Hulp.esc(tekstVan(it))}</span>
            ${it.x ? `<span class="item-x">${Hulp.esc(it.x)}</span>` : ''}
            ${ofVan(it) ? `<span class="item-x item-of">${Hulp.esc(ofVan(it))}</span>` : ''}
            ${!it.klaar && prijsVan(it) ? `<span class="item-x item-prijs">${Hulp.esc(prijsVan(it))}</span>` : ''}
          </span>
        </label>
        ${it.recepten.length ? `<span class="item-bron">${it.recepten.map(bronLink).join(', ')}</span>` : ''}
        <button type="button" class="ikoon-knop" data-weg="${Hulp.esc(it.k)}" aria-label="Verwijder ${Hulp.esc(it.n)}"><svg viewBox="0 0 24 24"><use href="#i-sluit"/></svg></button>
      </li>`).join('');
  }

  function wissel(k, klaarStatus) {
    const it = items.find((x) => x.k === k);
    if (it) { it.klaar = klaarStatus; bewaar(); }
  }
  function verwijder(k) { items = items.filter((x) => x.k !== k); bewaar(); }
  function wisAfgevinkt() { items = items.filter((x) => !x.klaar); bewaar(); }
  function wisAlles() { items = []; bewaar(); }
  const alsTekst = () => items.filter((x) => !x.klaar).map((x) => '- ' + tekstVan(x) + (x.x ? ` (${x.x})` : '') + (ofVan(x) ? ` (${ofVan(x)})` : '')).join('\n');
  const aantalOpen = () => items.filter((x) => !x.klaar).length;
  /* Opnieuw inlezen, bijvoorbeeld nadat een ander apparaat de lijst heeft gewijzigd. */
  const herlaad = () => { items = vulAlternatievenAan(Hulp.opslag.lees('boodschappen', [])); };

  return { herlaad, voegReceptToe, voegEenToe, staatErop, isWater, voegEigenToe, render, wissel, verwijder, wisAfgevinkt, wisAlles, alsTekst, aantalOpen };
})();
