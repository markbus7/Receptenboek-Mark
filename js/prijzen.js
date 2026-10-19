/* Wat kost het? Geschatte prijs van een recept of boodschappenlijst per supermarkt, met de prijzen
   uit js/data/prijzen.js (wekelijks bijgewerkt door tools/prijzen-ophalen.js, bron: Checkjebon).
   Twee bedragen: wat je gebruikt (het deel van de verpakking dat in het recept gaat) en wat je
   aan de kassa betaalt (hele verpakkingen, de goedkoopste manier om genoeg te kopen). */
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

  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
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

  /* Hele verpakkingen voor hoeveelheid hv: { bedrag, aantal, pak, naam, link, maat } voor de goedkoopste keuze
     tussen het product met de laagste kiloprijs en de kleinste verpakking. Inhoud 0 is los (per kilo): dan
     betaal je wat je gebruikt. */
  function kassa(hv, gebruikt, [, pak, naam, link, maat, inhoud, klein]) {
    if (inhoud === 0) return { bedrag: gebruikt, aantal: 1, pak: gebruikt, naam, link, maat };
    const opties = [[pak, naam, link, maat, inhoud], ...(klein ? [klein] : [])];
    let beste = null;
    for (const [pk, nm, ln, mt, inh] of opties) {
      const aantal = inh > 0 ? Math.max(1, Math.ceil(hv / inh - 1e-6)) : 1;
      if (!beste || aantal * pk < beste.bedrag) beste = { bedrag: aantal * pk, aantal, pak: pk, naam: nm, link: ln, maat: mt };
    }
    return beste;
  }

  /* Prijs van één ingrediëntregel: { per, kassa: { winkel: bedrag }, beste: { id, bedrag, kassa, naam, link, maat },
     kassaBeste: { id, bedrag, aantal, pak, naam, link, maat } } of null. kassaBeste is de winkel waar je met hele
     verpakkingen het minst afrekent; dat kan een andere zijn dan beste (kleinere verpakking). */
  function regel(i, factor = 1) {
    if (!P || i.kop || i.q == null || !i.n) return null;
    const p = P.p[sleutel(i.n)];
    if (!p) return null;
    const hv = hoeveelheid(p, i.q * factor, i.u || 'st');
    if (hv == null || !(hv > 0)) return null;
    const per = {}, kas = {};
    let beste = null, kassaBeste = null;
    for (const [id, w] of Object.entries(p.w)) {
      const [prijs, pak, naam, link, maat] = w;
      const bedrag = p.e === 'g' ? hv / 1000 * prijs : hv * prijs;
      const k = kassa(hv, bedrag, w);
      per[id] = bedrag;
      kas[id] = k.bedrag;
      if (!beste || bedrag < beste.bedrag) beste = { id, bedrag, naam, link: winkelLink(id, link), maat, pak, kassa: { ...k, link: winkelLink(id, k.link) } };
      if (!kassaBeste || k.bedrag < kassaBeste.bedrag) kassaBeste = { id, ...k, link: winkelLink(id, k.link) };
    }
    return { per, kassa: kas, beste, kassaBeste };
  }

  /* Totaal per supermarkt voor een lijst ingrediënten. Heeft een winkel een ingrediënt niet,
     dan telt de middelste prijs van de andere winkels mee. Een winkel telt alleen mee als hij
     zelf minstens driekwart van het bedrag dekt (een ontbrekend potje kruiden mag, het vlees niet). */
  function lijst(regels) {
    const metPrijs = [], zonder = [];
    for (const { i, factor, naam } of regels) {
      const r = regel(i, factor);
      if (r) metPrijs.push({ i, factor, naam, ...r });
      else if (i.q != null && !i.kop && !BASIS.includes(sleutel(i.n))) zonder.push(naam || i.n);
    }
    if (!metPrijs.length) return null;
    const ids = Object.keys(P.winkels);
    const middelste = (o) => { const rest = Object.values(o).sort((a, b) => a - b); return rest[Math.floor(rest.length / 2)]; };
    const winkels = ids.map((id) => {
      let totaal = 0, eigen = 0, kas = 0;
      for (const r of metPrijs) {
        if (r.per[id] != null) { totaal += r.per[id]; eigen += r.per[id]; kas += r.kassa[id]; continue; }
        totaal += middelste(r.per);
        kas += middelste(r.kassa);
      }
      return { id, naam: winkelNaam(id), totaal, kassa: kas, dekking: totaal ? eigen / totaal : 0 };
    }).filter((w) => w.dekking >= 0.75).sort((a, b) => a.totaal - b.totaal);
    const goedkoopst = metPrijs.reduce((s, r) => s + r.beste.bedrag, 0);
    const goedkoopstKassa = metPrijs.reduce((s, r) => s + r.kassaBeste.bedrag, 0);
    return { regels: metPrijs, zonder, winkels, goedkoopst, goedkoopstKassa };
  }

  /* De goedkoopste vier winkels en de duurste, als regels op het bonnetje. */
  function winkelLijst(winkels) {
    if (!winkels.length) return '';
    const veel = winkels.length > 5;
    const getoond = veel ? [...winkels.slice(0, 4), winkels[winkels.length - 1]] : winkels;
    return `<ol class="bon-winkels"><li class="bon-kop"><span></span><span>gebruikt</span><span>kassa</span></li>${getoond.map((w, n) => `${veel && n === 4 ? '<li class="bon-puntjes" aria-hidden="true">…</li>' : ''}<li${n === 0 ? ' class="is-goedkoopst"' : ''}><span>${esc(w.naam)}${n === 0 ? ' <em>goedkoopst</em>' : ''}</span><span>${euro(w.totaal)}</span><span>${euro(w.kassa)}</span></li>`).join('')}</ol>`;
  }

  const product = (naam, link) => link ? `<a href="${esc(link)}" target="_blank" rel="noopener">${esc(naam)}</a>` : esc(naam);

  /* "aan de kassa: Hoogvliet, Kokosmelk (400 ml) 2× € 0,72 = € 1,44" als je met hele verpakkingen iets anders
     afrekent dan het product hierboven: meer pakken, een kleinere verpakking of een andere winkel. */
  function kassaTekst({ id, pak, naam }, k) {
    if (!k || (k.id === id && k.aantal === 1 && k.naam === naam && k.pak === pak)) return '';
    const winkel = k.id === id ? '' : ` ${esc(winkelNaam(k.id))},`;
    const wat = k.naam === naam && k.pak === pak ? '' : ` ${product(k.naam, k.link)}${k.maat ? ` (${esc(k.maat)})` : ''}`;
    return `<br>aan de kassa:${winkel}${wat} ${k.aantal > 1 ? `${k.aantal}× ${euro(k.pak)} = ` : ''}${euro(k.bedrag)}`;
  }

  /* Per ingrediënt het product waar het het goedkoopst is, met de naam zoals de supermarkt het noemt.
     Samen zijn dit de bedragen van "Verdeeld over meerdere winkels". */
  function productLijst(regels) {
    return `<ul class="bon-regels">${regels.map(({ i, factor, beste, kassaBeste }) => `<li>
      <span>${esc(Hulp.hoeveelheidTekst(i, factor))}<small>${product(beste.naam, beste.link)}${beste.maat ? ` · ${esc(beste.maat)}` : ''} · ${euro(beste.pak)}${kassaTekst(beste, kassaBeste)}</small></span>
      <span>${esc(winkelNaam(beste.id))}</span><span>${euro(beste.bedrag)}</span>
    </li>`).join('')}</ul>`;
  }

  /* Het totaal als je elk product haalt waar het het goedkoopst is (dus bij verschillende winkels). */
  const mixTekst = (u) => `<b>Verdeeld over meerdere winkels:</b> ± ${euro(u.goedkoopst)} gebruikt, ± ${euro(u.goedkoopstKassa)} aan de kassa. Dat is wat je betaalt als je elk product haalt bij de winkel waar het het goedkoopst is, in plaats van alles bij één winkel.`;

  const datum = () => P ? new Date(P.bijgewerkt).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long' }) : '';

  return { actief: !!P, regel, lijst, euro, datum, winkelNaam, winkelLijst, productLijst, mixTekst };
})();
