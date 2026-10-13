/* Boodschappenlijst: samengevoegde hoeveelheden, afvinken en kopiëren. */
const Boodschappen = (() => {
  let items = Hulp.opslag.lees('boodschappen', []);

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

  function voegReceptToe(recept, factor) {
    let aantal = 0;
    recept.ingr.forEach((i) => {
      if (i.kop || i.q == null || /^(lauw )?water$/.test(Hulp.norm(i.n))) return;
      const { q, u } = basis(i, factor);
      const k = Hulp.norm(i.n) + '|' + u;
      const bestaand = items.find((x) => x.k === k);
      if (bestaand) {
        bestaand.q += q;
        bestaand.klaar = false;
        if (!bestaand.recepten.includes(recept.naam)) bestaand.recepten.push(recept.naam);
      } else {
        items.push({ k, n: i.n, p: i.p, q, u, recepten: [recept.naam], klaar: false });
      }
      aantal++;
    });
    bewaar();
    return aantal;
  }

  function voegEigenToe(tekst) {
    const t = tekst.trim();
    if (!t) return;
    items.push({ k: 'eigen-' + Date.now(), n: t, eigen: true, recepten: [], klaar: false });
    bewaar();
  }

  const tekstVan = (it) => it.eigen ? it.n : Hulp.hoeveelheidTekst(it, 1);

  function render(lijstEl, subEl) {
    const open = items.filter((x) => !x.klaar);
    const klaar = items.filter((x) => x.klaar);
    subEl.textContent = items.length
      ? `${open.length} nog te halen, ${klaar.length} afgevinkt.`
      : 'Voeg ingrediënten toe vanuit een recept. Hoeveelheden worden samengevoegd.';
    if (!items.length) {
      lijstEl.innerHTML = '<li class="lijst-leeg">Je lijst is nog leeg. Open een recept en kies <strong>Op boodschappenlijst</strong>.</li>';
      return;
    }
    lijstEl.innerHTML = [...open, ...klaar].map((it) => `
      <li class="item${it.klaar ? ' is-klaar' : ''}">
        <label>
          <input type="checkbox" data-k="${Hulp.esc(it.k)}" ${it.klaar ? 'checked' : ''}>
          <span class="item-tekst">${Hulp.esc(tekstVan(it))}</span>
        </label>
        ${it.recepten.length ? `<span class="item-bron">${Hulp.esc(it.recepten.join(', '))}</span>` : ''}
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
  const alsTekst = () => items.filter((x) => !x.klaar).map((x) => '- ' + tekstVan(x)).join('\n');
  const aantalOpen = () => items.filter((x) => !x.klaar).length;
  /* Opnieuw inlezen, bijvoorbeeld nadat een ander apparaat de lijst heeft gewijzigd. */
  const herlaad = () => { items = Hulp.opslag.lees('boodschappen', []); };

  return { herlaad, voegReceptToe, voegEigenToe, render, wissel, verwijder, wisAfgevinkt, wisAlles, alsTekst, aantalOpen };
})();
