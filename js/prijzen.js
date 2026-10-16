/* Wat kost het? Geschatte prijs van een recept of boodschappenlijst per supermarkt, met de prijzen
   uit js/data/prijzen.js (wekelijks bijgewerkt door tools/prijzen-ophalen.js, bron: Checkjebon).
   Er wordt gerekend met wat je gebruikt, niet met hele verpakkingen. */
const Prijzen = (() => {
  const P = window.PRIJZEN && PRIJZEN.p ? PRIJZEN : null;

  /* Recepteenheden in gram/ml. Een eetlepel is ± 15 g, een handje kruiden ± 10 g. */
  const NAAR_G = { g: 1, kg: 1000, ml: 1, l: 1000, el: 15, tl: 5, snuf: 0.5, handje: 10, plak: 20, blik: 400 };
  const STUKS = ['st', 'teen', 'bos', 'takje', 'stengel', 'zakje', 'vel', 'bol', 'blokje'];
  /* Hier zoeken we geen prijs voor (zie tools/prijzen-ophalen.js), en we noemen ze ook niet als "zonder prijs". */
  const BASIS = ['zout', 'peper', 'zwarte peper', 'water', 'lauw water'];

  /* Zelfde sleutel als tools/prijzen-ophalen.js: kleine letters, zonder accenten en leestekens. */
  const sleutel = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/['’]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

  const euro = (x) => x < 0.005 ? '< € 0,01' : x.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' });
  const winkelNaam = (id) => (P.winkels[id] || {}).naam || id;
  const winkelLink = (id, link) => (P.winkels[id] && link ? P.winkels[id].url + link : '');

  /* Hoeveelheid in de eenheid waarin het ingrediënt geprijsd is (gram/ml of stuks), of null. */
  function hoeveelheid(p, q, u) {
    if (p.om && p.om[u] != null) return q * p.om[u];
    if (p.e === 'g') {
      if (NAAR_G[u]) return q * NAAR_G[u];
      if (STUKS.includes(u) && p.st) return q * p.st;
      return null;
    }
    if (STUKS.includes(u)) return q;
    if (NAAR_G[u] && p.st) return q * NAAR_G[u] / p.st;
    return null;
  }

  /* Prijs van één ingrediëntregel: { per: { winkel: bedrag }, beste: { id, bedrag, naam, link, maat } } of null. */
  function regel(i, factor = 1) {
    if (!P || i.kop || i.q == null || !i.n) return null;
    const p = P.p[sleutel(i.n)];
    if (!p) return null;
    const hv = hoeveelheid(p, i.q * factor, i.u || 'st');
    if (hv == null || !(hv > 0)) return null;
    const per = {};
    let beste = null;
    for (const [id, [prijs, pak, naam, link, maat]] of Object.entries(p.w)) {
      const bedrag = p.e === 'g' ? hv / 1000 * prijs : hv * prijs;
      per[id] = bedrag;
      if (!beste || bedrag < beste.bedrag) beste = { id, bedrag, naam, link: winkelLink(id, link), maat, pak };
    }
    return { per, beste };
  }

  /* Totaal per supermarkt voor een lijst ingrediënten. Heeft een winkel een ingrediënt niet,
     dan telt de middelste prijs van de andere winkels mee. Een winkel telt alleen mee als hij
     zelf minstens driekwart van het bedrag dekt (een ontbrekend potje kruiden mag, het vlees niet). */
  function lijst(regels) {
    const metPrijs = [], zonder = [];
    for (const { i, factor, naam } of regels) {
      const r = regel(i, factor);
      if (r) metPrijs.push({ i, naam, ...r });
      else if (i.q != null && !i.kop && !BASIS.includes(sleutel(i.n))) zonder.push(naam || i.n);
    }
    if (!metPrijs.length) return null;
    const ids = Object.keys(P.winkels);
    const winkels = ids.map((id) => {
      let totaal = 0, eigen = 0;
      for (const r of metPrijs) {
        if (r.per[id] != null) { totaal += r.per[id]; eigen += r.per[id]; continue; }
        const rest = Object.values(r.per).sort((a, b) => a - b);
        totaal += rest[Math.floor(rest.length / 2)];
      }
      return { id, naam: winkelNaam(id), totaal, dekking: totaal ? eigen / totaal : 0 };
    }).filter((w) => w.dekking >= 0.75).sort((a, b) => a.totaal - b.totaal);
    const goedkoopst = metPrijs.reduce((s, r) => s + r.beste.bedrag, 0);
    return { regels: metPrijs, zonder, winkels, goedkoopst };
  }

  /* De goedkoopste vier winkels en de duurste, als regels op het bonnetje. */
  function winkelLijst(winkels) {
    if (!winkels.length) return '';
    const veel = winkels.length > 5;
    const getoond = veel ? [...winkels.slice(0, 4), winkels[winkels.length - 1]] : winkels;
    const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    return `<ol class="bon-winkels">${getoond.map((w, n) => `${veel && n === 4 ? '<li class="bon-puntjes" aria-hidden="true">…</li>' : ''}<li${n === 0 ? ' class="is-goedkoopst"' : ''}><span>${esc(w.naam)}${n === 0 ? ' <em>goedkoopst</em>' : ''}</span><span>${euro(w.totaal)}</span></li>`).join('')}</ol>`;
  }

  const datum = () => P ? new Date(P.bijgewerkt).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long' }) : '';

  return { actief: !!P, regel, lijst, euro, datum, winkelNaam, winkelLijst };
})();
