/* Gedeelde hulpfuncties: opslag, getallen, omrekenen en ingrediënten matchen. */
const Hulp = (() => {
  /* Opslag in deze browser. Elke wijziging krijgt een tijdstempel, zodat synchroniseren (js/sync.js)
     per onderdeel de nieuwste versie kan kiezen. */
  const opslag = {
    lees(sleutel, standaard) {
      try {
        const waarde = localStorage.getItem('receptenboek:' + sleutel);
        return waarde == null ? standaard : JSON.parse(waarde);
      } catch (e) { return standaard; }
    },
    schrijf(sleutel, waarde, { tijd, stil } = {}) {
      try {
        const nieuw = JSON.stringify(waarde);
        if (localStorage.getItem('receptenboek:' + sleutel) === nieuw && !tijd) return;
        localStorage.setItem('receptenboek:' + sleutel, nieuw);
        localStorage.setItem('receptenboek:tijd:' + sleutel, String(tijd || Date.now()));
      } catch (e) { return; /* opslag niet beschikbaar */ }
      if (!stil) document.dispatchEvent(new CustomEvent('opslag-gewijzigd', { detail: sleutel }));
    },
    tijd(sleutel) {
      try { return Number(localStorage.getItem('receptenboek:tijd:' + sleutel)) || 0; } catch (e) { return 0; }
    },
    heeft(sleutel) {
      try { return localStorage.getItem('receptenboek:' + sleutel) != null; } catch (e) { return false; }
    },
    wis(sleutel) {
      try { localStorage.removeItem('receptenboek:' + sleutel); } catch (e) { /* genegeerd */ }
    }
  };

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/['’]/g, '').trim();

  /* Nederlandse notatie: komma als decimaalteken. */
  function getal(x, decimalen = 0) {
    const f = Math.pow(10, decimalen);
    const r = Math.round(x * f) / f;
    return r.toLocaleString('nl-NL', { maximumFractionDigits: decimalen });
  }

  /* Rond af op kwarten en toon als breuk: 1,5 → "1½". */
  function breuk(x, stap = 0.25) {
    if (x > 0 && x < 0.2 && stap < 0.5) return '⅛';
    let r = Math.round(x / stap) * stap;
    if (r === 0) r = stap;
    const heel = Math.floor(r + 1e-9);
    const rest = Math.round((r - heel) * 100) / 100;
    const teken = { 0.25: '¼', 0.5: '½', 0.75: '¾' }[rest] || '';
    if (heel === 0) return teken || '0';
    return heel + teken;
  }

  function rondAf(x) {
    if (x < 10) return Math.round(x * 2) / 2;
    if (x < 50) return Math.round(x);
    if (x < 250) return Math.round(x / 5) * 5;
    if (x < 1000) return Math.round(x / 10) * 10;
    return Math.round(x / 50) * 50;
  }

  /* Geeft { aantal, eenheid, naam } voor een ingrediënt met een vermenigvuldigingsfactor. */
  function hoeveelheid(ingr, factor = 1) {
    if (ingr.q == null) return { aantal: '', eenheid: '', naam: ingr.n, waarde: null };
    const def = EENHEDEN[ingr.u] || EENHEDEN.st;
    let waarde = ingr.q * factor;
    let aantal, eenheid = '', meervoud = false;

    if (def.soort === 'gewicht' || def.soort === 'volume') {
      const groot = def.soort === 'gewicht' ? 'kg' : 'l';
      let basis = (ingr.u === 'kg' || ingr.u === 'l') ? waarde * 1000 : waarde;
      basis = rondAf(basis);
      if (basis >= 1000) {
        aantal = getal(basis / 1000, 2);
        eenheid = EENHEDEN[groot].e;
      } else {
        aantal = getal(basis, basis < 10 ? 1 : 0);
        eenheid = def.soort === 'gewicht' ? 'g' : 'ml';
      }
    } else {
      // Hele stuks ronden we af op halven; lepels en kleine stukken (½ citroen) op kwarten.
      const stap = def.soort === 'stuk' && ingr.q >= 1 ? 0.5 : 0.25;
      aantal = breuk(waarde, stap);
      meervoud = Math.max(stap, Math.round(waarde / stap) * stap) >= 2;
      eenheid = ingr.u === 'st' ? '' : (meervoud ? def.m : def.e);
    }
    const naam = (ingr.u === 'st' && meervoud && ingr.p) ? ingr.p : ingr.n;
    const pak = verpakt(ingr, waarde);
    if (pak) return { ...pak, gram: `${aantal} ${eenheid}`, naam, waarde };
    return { aantal, eenheid, naam, waarde };
  }

  /* Gram omgerekend naar zakjes, bossen of blikken (js/data/gereedschap.js, PAKMATEN): de grootste
     verpakking die op een hele of halve uitkomt, anders de kleinste in kwarten. Null als het niet past. */
  function verpakt(ingr, waarde) {
    const maten = (window.PAKMATEN || {})[norm(ingr.n)];
    if (!maten || !['g', 'kg'].includes(ingr.u)) return null;
    const gram = ingr.u === 'kg' ? waarde * 1000 : waarde;
    const opties = Object.entries(maten).sort((a, b) => b[1] - a[1]);
    let keus = opties.find(([, g]) => gram / g >= 0.5 && Math.abs(gram / g * 2 - Math.round(gram / g * 2)) < 0.1);
    if (!keus) { const kleinste = opties[opties.length - 1]; if (gram / kleinste[1] >= 0.25) keus = kleinste; }
    if (!keus) return null;
    const [u, g] = keus;
    const n = Math.round(gram / g * 4) / 4;
    return { aantal: breuk(n), eenheid: n >= 2 ? EENHEDEN[u].m : EENHEDEN[u].e };
  }

  function hoeveelheidTekst(ingr, factor) {
    const h = hoeveelheid(ingr, factor);
    return [h.aantal, h.eenheid, h.naam].filter(Boolean).join(' ') + (h.gram ? ` (${h.gram})` : '');
  }

  /* Vervanger voor een vers ingrediënt (js/data/vervangers.js): { tekst } of { vers }, of null.
     ofPer is de vervanger per eenheid, zoals het boodschappenlijstje hem bewaart. */
  function vervanger(i, factor = 1) {
    if (i.vers) return { vers: i.vers === true ? 'vers nodig' : 'vers nodig: ' + i.vers };
    if (typeof i.of === 'string') return { tekst: i.of };
    const metQ = (q, u, n, p) => {
      if (u === 'tl' && q >= 3) { q /= 3; u = 'el'; } else if (u === 'el' && q < 1) { q *= 3; u = 'tl'; }
      return { tekst: 'of ' + hoeveelheidTekst({ q, u, n, p }, 1) };
    };
    if (i.of) return metQ(i.of.q * factor, i.of.u, i.of.n, i.of.p);
    if (i.ofPer) return i.q == null ? null : metQ(i.q * i.ofPer.q * factor, i.ofPer.u, i.ofPer.n, i.ofPer.p);
    const v = (window.VERVANGERS || []).find((v) => v.n.some((n) => norm(n) === norm(i.n)));
    if (!v) return null;
    const x = norm(i.x || '');
    if ((v.tenzij || []).some((w) => x.includes(norm(w)))) return null;
    if (v.versAls && v.versAls.test(x)) return { vers: v.versTekst || 'vers nodig' };
    if (v.alleenAls && !v.alleenAls.test(x)) return null;
    if (v.tekst) return { tekst: v.tekst };
    const u = i.u === 'kg' ? 'g' : i.u === 'l' ? 'ml' : (i.u || 'st');
    const per = v.per[u];
    if (i.q == null || !per) return null;
    return metQ(i.q * (u === i.u || !i.u ? 1 : 1000) * per * factor, v.u, v.wat, v.mv);
  }
  const vervangerTekst = (i, factor) => { const v = vervanger(i, factor); return v ? (v.tekst || v.vers) : ''; };

  /* Het alternatief uit de uitleg ("droge kruidenmix; of 2 tl ketoembar + 1 tl djinten") als losse
     ingrediënten voor het boodschappenlijstje, voor het originele aantal personen. Alleen als elk deel
     een ingrediënt is dat elders in het boek staat; anders null. Zonder hoeveelheid ("; of kipfilet")
     geldt die van het recept. */
  let bekend = null;
  const GETAL = { '½': 0.5, '¼': 0.25, '¾': 0.75 };
  function leesGetal(s) {
    const m = s.match(/^(\d+(?:,\d+)?)?([½¼¾])?$/);
    if (!m || (!m[1] && !m[2])) return null;
    return (m[1] ? parseFloat(m[1].replace(',', '.')) : 0) + (GETAL[m[2]] || 0);
  }
  function alternatief(i) {
    const of = (i.x || '').split('; of ')[1];
    if (!of || i.q == null) return null;
    if (!bekend) {
      bekend = new Map();
      (window.RECEPTEN || []).forEach((r) => (r.ingr || []).forEach((g) => {
        if (!g.n) return;
        bekend.set(norm(g.n), { n: g.n, p: g.p });
        if (g.p) bekend.set(norm(g.p), { n: g.n, p: g.p });
      }));
    }
    const eenheid = new Map();
    Object.entries(window.EENHEDEN || {}).forEach(([u, d]) => { if (d.e) { eenheid.set(d.e, u); eenheid.set(d.m, u); } });
    const delen = of.split(' of ')[0].split(/ \+ |, /);
    const uit = delen.map((d) => {
      const w = d.trim().split(/\s+/);
      const q = leesGetal(w[0]);
      if (q == null) return delen.length === 1 && bekend.has(norm(d)) ? { ...bekend.get(norm(d)), q: i.q, u: i.u } : null;
      const u = eenheid.get(w[1]);
      const ing = bekend.get(norm(w.slice(u ? 2 : 1).join(' ')));
      return ing ? { ...ing, q, u: u || 'st' } : null;
    });
    return uit.every(Boolean) ? uit : null;
  }

  /* Basisvoorraad die vrijwel iedereen heeft. */
  const BASIS = ['zout', 'peper', 'zwarte peper', 'water', 'lauw water', 'olijfolie', 'zonnebloemolie', 'olie'];
  const isBasis = (ingr) => BASIS.includes(norm(ingr.n));

  /* Matcht een zoekterm ("kip") met een ingrediënt ("kippendijfilet"). */
  // Woorden die van een groente of vlees iets anders maken: paprika ≠ paprikapoeder, kip ≠ kippenbouillon.
  const AFGELEID = /(poeder|puree|pasta|saus|bouillon|kruiden|vlokken|zaad|chips|olie|azijn|meel)$/;

  function termPast(term, ingr) {
    const t = norm(term);
    if (!t) return false;
    const namen = [ingr.n, ingr.p].filter(Boolean).map(norm);
    return namen.some((nm) => {
      if (nm === t) return true;
      if (nm.length >= 4 && t.split(/[\s-]+/).includes(nm)) return true;   // "kipfilet met vel" ⊃ "kipfilet"
      if (t.includes(' ') && nm.includes(t)) return true;
      return nm.split(/[\s-]+/).some((w) => {
        if (AFGELEID.test(w) && !AFGELEID.test(t)) return false;
        if (t.length >= 4) return w.includes(t);
        if (t.length === 3) return w.startsWith(t);
        // Heel korte woorden (ui, ei): alleen het woord zelf of het meervoud, dus "ui" ≠ "uitjes".
        return w === t || w === t + 'en' || w === t + 'eren' || (t === 'ei' && /^ei(dooier|wit)/.test(w));
      });
    });
  }

  /* Groentemixen staan in de voorraad als "mix:<id>"; voor het matchen tellen de groenten die erin zitten. */
  const MIXEN = () => new Map((window.GROENTEMIXEN || []).map((m) => [m.id, m]));
  const isMix = (t) => typeof t === 'string' && t.startsWith('mix:');
  const mixVan = (t) => MIXEN().get(t.slice(4));
  const voorraadTermen = (voorraad) => voorraad.flatMap((t) => (isMix(t) ? ((mixVan(t) || {}).bevat || []) : [t]));

  /* Gewicht in gram van een ingrediënt, om aan te geven hoeveel van een groentemix je gebruikt. */
  function gram(i) {
    if (i.q == null) return 0;
    const per = { g: 1, kg: 1000, blik: 250, stengel: 40, handje: 30, bos: 50 }[i.u || 'st'];
    if (per) return i.q * per;
    if ((i.u || 'st') === 'st') return i.q * ((window.STUKGEWICHT || {})[norm(i.n)] || 100);
    return 0;
  }

  /* Welke groenten uit een recept een mix vervangt, en ongeveer hoeveel gram mix je dan gebruikt. */
  function mixDekking(recept, mix, factor = 1) {
    const gedekt = ingrediënten(recept).filter((i) => !isBasis(i) && mix.bevat.some((t) => termPast(t, i)));
    const totaal = gedekt.reduce((som, i) => som + gram(i), 0) * factor;
    const aanrader = (mix.aanraders || []).includes(recept.id);
    // Vervangt de mix niets maar past hij er wel bij? Dan ± 100 g per persoon erbij.
    const erbij = !gedekt.length && aanrader ? Math.round((recept.pers * factor * 100) / 50) * 50 : 0;
    return { gedekt, aanrader, gram: totaal ? Math.max(100, Math.round(totaal / 50) * 50) : 0, erbij };
  }

  /* Mixen uit de voorraad die bij dit recept passen. */
  function mixenVoor(recept, voorraad, factor = 1) {
    return voorraad.filter(isMix).map(mixVan).filter(Boolean)
      .map((mix) => ({ mix, ...mixDekking(recept, mix, factor) }))
      .filter((d) => d.gedekt.length || d.aanrader);
  }

  /* Unieke, echte ingrediënten van een recept (zonder kopjes en dubbelingen). */
  function ingrediënten(recept) {
    const gezien = new Set();
    return recept.ingr.filter((i) => {
      if (i.kop) return false;
      const k = norm(i.n);
      if (gezien.has(k)) return false;
      gezien.add(k);
      return true;
    });
  }

  /* Vergelijkt voorraad met een recept. */
  function match(recept, voorraad, basisAan) {
    const lijst = ingrediënten(recept).filter((i) => !i.opt && !(basisAan && isBasis(i)));
    const heb = [], mist = [];
    const termen = voorraadTermen(voorraad);
    lijst.forEach((i) => (termen.some((t) => termPast(t, i)) ? heb : mist).push(i.n));
    // Welke gekozen ingrediënten (of mixen) dit recept echt gebruikt; een mix telt ook als het recept hem aanraadt.
    const nodig = ingrediënten(recept).filter((i) => !i.opt);
    const gebruikt = voorraad.filter((v) => {
      const mix = isMix(v) ? mixVan(v) : null;
      if (mix && (mix.aanraders || []).some((id) => id === recept.id || id === recept.groep)) return true;
      const ts = isMix(v) ? ((mix || {}).bevat || []) : [v];
      return nodig.some((i) => ts.some((t) => termPast(t, i)));
    });
    return { heb, mist, gebruikt, totaal: lijst.length, pct: lijst.length ? heb.length / lijst.length : 0 };
  }

  /* Apparatuur */
  const heeftTool = (tool, keuken) => !(GEREEDSCHAP[tool] && GEREEDSCHAP[tool].apparaat) || keuken.includes(tool);

  function methodes(recept, keuken) {
    return (recept.methodes || []).map((m) => ({ ...m, heb: heeftTool(m.id, keuken) }));
  }

  function maakbaar(recept, keuken) {
    const vast = recept.gerei.filter((g) => !g.m && !g.of).every((g) => heeftTool(g.tool, keuken));
    const ms = methodes(recept, keuken);
    return vast && (!ms.length || ms.some((m) => m.heb));
  }

  function tijdTekst(min) {
    if (min < 60) return String(min).replace('.', ',') + ' min';
    const u = Math.floor(min / 60), m = min % 60;
    return u + ' uur' + (m ? ' ' + m + ' min' : '');
  }

  /* Pittigheid zoals op een restaurantmenu: 1 tot 3 pepertjes (pit in het recept). Zonder pit: lege tekst. */
  const PIT = ['', 'Een beetje pittig', 'Pittig', 'Heel pittig'];
  const pitTekst = (r) => PIT[r.pit] || '';

  /* Aantal tikfouten tussen twee woorden (letter erbij, eraf, anders of omgedraaid). */
  function afstand(a, b) {
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const kost = a[i - 1] === b[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + kost);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
    return d[a.length][b.length];
  }

  /* Lijkt een (genormaliseerde) zoekterm op een woord, ook met een tikfout? "ommelet" ≈ "omelet". */
  function lijktOp(term, woord) {
    if (term.length < 3) return false;
    const max = term.length <= 4 ? 1 : 2;
    if (Math.abs(woord.length - term.length) <= max && afstand(term, woord) <= max) return true;
    // Nog aan het typen: begin van een lang woord, met hooguit één tikfout.
    if (term.length >= 4 && woord.length > term.length && afstand(term, woord.slice(0, term.length)) <= (term.length >= 8 ? 2 : 1)) return true;
    // Samenstellingen: "ommelet" in "boerenomelet", "spagetti" in "spaghettisaus".
    if (term.length >= 5 && woord.length > term.length) {
      for (let lengte = term.length - 1; lengte <= term.length + 1; lengte++) {
        for (let i = 1; i + lengte <= woord.length; i++) {
          if (afstand(term, woord.slice(i, i + lengte)) <= 1) return true;
        }
      }
    }
    return false;
  }

  /* Welke pannen en apparaten een recept gebruikt, voor het filter "Bereid in". */
  function bereidIn(recept) {
    const tools = new Set(recept.gerei.map((g) => g.tool));
    (recept.methodes || []).forEach((m) => tools.add(m.id));
    if (recept.gerei.some((g) => /braadpan|stoofpan|dutch oven|tajine/i.test(g.tekst))) tools.add('braadpan');
    return tools;
  }

  /* Advies voor één stuk keukengerei, afgestemd op de pannen die je hebt.
     `gezien` voorkomt dat hetzelfde advies twee keer in één recept staat. */
  function panAdvies(g, recept, keuken, gezien) {
    const heb = (k) => keuken.includes(k);
    const eenmalig = (sleutel, advies) => { if (gezien.has(sleutel)) return null; gezien.add(sleutel); return advies; };
    const tekst = norm(g.tekst);
    const ovenMethode = (recept.methodes || []).some((m) => m.id === 'oven');

    if (g.tool === 'braadpan') {
      if (heb('dutchoven')) {
        return { soort: 'ok', tekst: 'Gebruik je Dutch oven. ' + (ovenMethode
          ? 'Hij kan met deksel en al de oven in.'
          : 'Gietijzer houdt de warmte goed vast, dus het vuur kan een stand lager dan je gewend bent.') };
      }
      if (heb('hapjespan')) return { soort: 'vervang', tekst: 'Geen Dutch oven? Een hapjespan met deksel werkt ook. Houd het vuur laag en roer wat vaker.' };
      return { soort: 'vervang', tekst: 'Geen Dutch oven? Gebruik je dikste kookpan met deksel op het kleinste pit.' };
    }

    if (g.tool === 'hapjespan' && !heb('hapjespan')) {
      if (heb('dutchoven')) return eenmalig('hapjespan', { soort: 'vervang', tekst: 'Je hebt geen hapjespan: gebruik je Dutch oven. Zet het vuur een stand lager, want gietijzer wordt heter.' });
      return eenmalig('hapjespan', { soort: 'vervang', tekst: 'Je hebt geen hapjespan: gebruik je grootste koekenpan of een brede kookpan.' });
    }

    if (g.tool === 'wok' && !heb('wok')) {
      if (heb('rvs-koekenpan') || heb('gietijzer-koekenpan')) {
        return { soort: 'vervang', tekst: `Gebruik je ${heb('rvs-koekenpan') ? 'RVS-koekenpan' : 'gietijzeren koekenpan'}: die kan net als een wok heel heet worden. Bak in kleine porties, anders gaat het koken in plaats van bakken.` };
      }
      if (heb('dutchoven')) return { soort: 'vervang', tekst: 'Gebruik je Dutch oven op hoog vuur en bak in kleine porties.' };
    }

    if (g.tool === 'koekenpan') {
      const anti = heb('antiaanbakpan'), rvs = heb('rvs-koekenpan'), gij = heb('gietijzer-koekenpan');
      // Recepten die juist een hete, stevige pan willen (smash burgers).
      if (/gietijzer|rvs/.test(tekst)) {
        if (rvs || gij) return eenmalig('koekenpan', { soort: 'ok', tekst: `Perfect voor je ${gij ? 'gietijzeren pan' : 'RVS-pan'}: die wordt heel heet en geeft een mooie korst.` });
        if (anti) return { soort: 'tip', tekst: 'Je antiaanbakpan mag niet zo heet worden. Bak op middelhoog vuur; de korst wordt iets minder krokant.' };
        return null;
      }
      // Recepten die makkelijk aanplakken: ei, beslag, vis.
      const teer = /antiaanbak/.test(tekst) || /pannenkoe|pancake|spiegelei|omelet|roerei|tortilla de|frittata|tamagoyaki|uitsmijter|menemen|huevos|vis|zalm|wentelteef|french toast|crepe|poffert|kaiserschmarrn|foe yong|gyoza/.test(norm(recept.naam + ' ' + g.tekst));
      if (teer && anti) return null;
      if (rvs && !anti) {
        if (teer) return eenmalig('koekenpan-teer', { soort: 'tip', tekst: 'Met je RVS-pan: verhit hem 2 minuten droog op middelhoog vuur tot een druppel water als een balletje rondrolt. Doe dan royaal boter of olie erin en zet het vuur een stand lager. Keer pas als het vanzelf loslaat.' });
        return eenmalig('koekenpan', { soort: 'tip', tekst: 'Met je RVS-pan: verhit hem eerst droog tot een druppel water als een balletje rondrolt en doe dan pas de olie erin. Wat je bakt plakt eerst vast en laat vanzelf los als het klaar is om te keren.' });
      }
      if (gij && !anti && teer) return eenmalig('koekenpan-teer', { soort: 'tip', tekst: 'Met je gietijzeren pan: goed voorverwarmen en wat extra vet gebruiken, dan plakt er niets.' });
    }

    if (g.tool === 'contactgrill' && heb('contactgrill')) {
      return { soort: 'ok', tekst: 'Met je OptiGrill: kies het passende programma, leg het eten er pas op als hij aangeeft dat hij is voorverwarmd, en houd de gaarheidsaanduiding in de gaten. Omdraaien is niet nodig.' };
    }

    if (g.tool === 'optigrill-bak' && heb('optigrill-bak')) {
      return eenmalig('optigrill-bak', { soort: 'tip', tekst: 'Met je OptiGrill-bak: zet de bak in de plaats van de onderste plaat vóórdat je hem aanzet, kies de handmatige modus, stel de temperatuur in en druk op OK. Doe het eten er pas in als hij klaar is met voorverwarmen. De bovenplaat zit dichtbij, dus alles moet onder de rand blijven en de bovenkant kleurt sneller dan in een oven.' });
    }

    if (g.tool === 'kookpan' && heb('rijstkoker') && /rijst/.test(tekst)) {
      return eenmalig('rijst', { soort: 'vervang', tekst: 'Gebruik je rijstkoker: spoel de rijst, vul water bij tot het streepje voor het aantal maatbekers en zet hem aan. Hij houdt de rijst daarna warm.' });
    }

    if (g.tool === 'kookpan' && heb('rvs-kookpan') && /bechamel|saus|melk|room/.test(tekst)) {
      return eenmalig('steelpan', { soort: 'tip', tekst: 'In je RVS-steelpan brandt melk of saus snel aan: houd het vuur middelhoog en blijf roeren met een garde.' });
    }
    return null;
  }

  /* Restjes: per ingrediënt met een vaste verpakking (js/data/verpakkingen.js) wat je koopt en wat je
     overhoudt, voor het aantal personen dat je nu kookt. Optionele ingrediënten tellen mee (opt), want als je ze gebruikt, koop je ze ook.
     Geeft per verpakkingssoort { regels: [{ naam, zin, opt }], tip }. */
  const MEERVOUD = { pak: 'pakken', blik: 'blikken', blikje: 'blikjes', beker: 'bekers', bak: 'bakken', bakje: 'bakjes', blok: 'blokken', fles: 'flessen', zak: 'zakken', stuk: 'stuks' };
  const OMREKEN = { g: 1, ml: 1, kg: 1000, l: 1000, el: 15, tl: 5 };

  function inBasis(i, v) {
    const u = i.u || 'st';
    if (v.maat === 'st') return u === 'st' ? 1 : null;
    return (v.per && v.per[u]) || OMREKEN[u] || null;
  }

  function verpakkingVoor(i) {
    const naam = norm(i.n);
    return (window.VERPAKKINGEN || []).find((v) => v.n.some((n) => norm(n) === naam) && (
      v.eiwit || (v.vaag ? (v.tot ? ['g', 'kg'].includes(i.u) : i.u !== 'bos') : inBasis(i, v) != null)));
  }

  function restjes(recept, factor = 1) {
    const nodig = new Map();   // verpakking → Map(naam → hoeveelheid in de maat van de verpakking)
    for (const i of recept.ingr || []) {
      if (i.kop || i.q == null) continue;
      const v = verpakkingVoor(i);
      if (!v) continue;
      const per = v.vaag || v.eiwit ? (['kg'].includes(i.u) ? 1000 : 1) : inBasis(i, v);
      if (!nodig.has(v)) nodig.set(v, new Map());
      const m = nodig.get(v);
      if (!m.has(i.n)) m.set(i.n, { hv: 0, opt: true });
      const x = m.get(i.n);
      x.hv += i.q * factor * per;
      x.opt = x.opt && !!i.opt;   // alleen optioneel als elke regel met deze naam optioneel is
    }
    const uit = [];
    for (const [v, m] of nodig) {
      const regels = [];
      for (const [naam, { hv, opt }] of m) {
        if (v.eiwit) {
          const n = Math.round(hv);
          regels.push({ naam: 'eiwit', opt, zin: `je houdt ${n} ${n === 1 ? 'eiwit' : 'eiwitten'} over.` });
          continue;
        }
        if (v.vaag) {
          if (v.tot && hv >= v.tot) continue;
          regels.push({ naam, opt, zin: '' });
          continue;
        }
        if (v.vanaf && hv < v.vanaf) continue;
        // Kies de minste rest; bij gelijke rest de minste verpakkingen. Ook een grote plus een kleine (1 liter + 250 ml).
        const opties = v.pak.map((s) => ({ s, k: Math.max(1, Math.ceil(hv / s - 1e-9)), t: 0 }));
        for (const s of v.pak) for (const t of v.pak) {
          const k = Math.floor(hv / s + 1e-9);
          if (t < s && k >= 1 && k * s < hv - 1e-9 && k * s + t >= hv - 1e-9) opties.push({ s, k, t });
        }
        let beste = null;
        for (const o of opties) {
          o.rest = o.k * o.s + o.t - hv;
          o.aantal = o.k + (o.t ? 1 : 0);
          if (!beste || o.rest < beste.rest - 1e-9 || (Math.abs(o.rest - beste.rest) < 1e-9 && o.aantal < beste.aantal)) beste = o;
        }
        const { s, k, t, rest } = beste;
        if (v.maat === 'st' ? rest < 0.25 : rest / (k * s + t) < 0.2) continue;
        let zin;
        if (v.maat === 'st' && s === 1) {
          zin = `je houdt ${breuk(rest)} ${naam} over.`;
        } else if (v.maat === 'st') {
          zin = `een ${v.wat} heeft er meestal ${s}, dan houd je er ${getal(Math.round(rest))} over.`;
        } else {
          const maat = (x) => (x >= 1000 ? `${getal(x / 1000, 1)}\u00a0${v.maat === 'g' ? 'kg' : 'liter'}` : `${getal(x)}\u00a0${v.maat}`);
          zin = `koop ${k === 1 ? `een ${v.wat}` : `${k} ${MEERVOUD[v.wat] || v.wat}`} van ${maat(s)}${t ? ` en een ${v.wat} van ${maat(t)}` : ''}, dan houd je ± ${maat(rondAf(Math.max(5, Math.round(rest / 5) * 5)))} over.`;
        }
        regels.push({ naam, opt, zin });
      }
      if (regels.length) uit.push({ regels, tip: v.tip });
    }
    return uit;
  }

  /* Foto van het recept; een variant zonder eigen foto laat die van het basisrecept zien. */
  const foto = (r) => (window.FOTOS && (FOTOS[r.id] || (r.groep && FOTOS[r.groep]))) || null;


  /* Zet de hoeveelheid in de staptekst: "Strooi de bloem erover" → "Strooi de **2 el** bloem erover".
     Alleen na "de"/"het", de eerste keer dat een ingrediënt genoemd wordt, niet na "rest van" of "helft van",
     en niet bij één stuk ("de 1 ui"). Ingrediënten die twee keer in de lijst staan slaan we over. */
  function stapMetHoeveelheden(tekst, recept, factor, gebruikt, overslaan = new Set()) {
    const lijst = recept.ingr.filter((i) => !i.kop && i.q != null);
    const telling = new Map();
    lijst.forEach((i) => telling.set(norm(i.n), (telling.get(norm(i.n)) || 0) + 1));
    const kandidaten = lijst.filter((i) => telling.get(norm(i.n)) === 1 && !overslaan.has(i.n) && !isBasis(i)
      && !(i.u === 'st' && i.q * factor < 1.75));
    const past = (i, w) => {
      const n = norm(i.n), p = i.p ? norm(i.p) : '';
      if (n === w || p === w) return true;
      const laatste = n.split(' ').pop();
      if (laatste === w || (p && p.split(' ').pop() === w)) return true;
      return !n.includes(' ') && w.length >= 5 && n.endsWith(w);
    };
    let uit = '', vanaf = 0;
    const re = /(^|[^\p{L}])((?:de|het) )([\p{L}'-]+)/giu;
    let m;
    while ((m = re.exec(tekst))) {
      const woord = norm(m[3]);
      const ervoor = norm(tekst.slice(Math.max(0, m.index - 12), m.index + m[1].length));
      if (/(rest|helft|deel|beetje) van\s*$|\bvis $/.test(ervoor + ' ')) continue;
      const treffers = kandidaten.filter((i) => past(i, woord));
      if (treffers.length !== 1 || gebruikt.has(treffers[0].n)) continue;
      const i = treffers[0];
      gebruikt.add(i.n);
      const h = hoeveelheid(i, factor);
      const hv = [h.aantal, h.eenheid].filter(Boolean).join(' ');
      const plek = m.index + m[1].length + m[2].length;
      uit += esc(tekst.slice(vanaf, plek)) + `<b class="stap-hv">${esc(hv)}</b> `;
      vanaf = plek;
    }
    return uit + esc(tekst.slice(vanaf));
  }

  /* Vlees en vis uit de vriezer (js/data/vriezer.js): welke ingrediënten van dit recept kunnen eruit komen? */
  const vriezerVan = (i) => !i.kop && (window.VRIEZER || []).find((v) => v.n.includes(norm(i.n)));
  const vriezerbaar = (recept) => ingrediënten(recept).filter(vriezerVan);

  function minutenTekst(min) {
    const kwartier = Math.max(15, Math.round(min / 15) * 15);
    if (kwartier < 60) return `${kwartier} minuten`;
    return `${breuk(kwartier / 60, 0.5)} uur`;
  }

  /* Per gekozen ingrediënt: hoe lang ontdooien, wanneer eruit halen, wat als je het vergeten bent en
     wat er in dit recept anders gaat. Rekent met de hoeveelheid die je nu kookt. */
  function vriezer(recept, namen, factor = 1, methode = null) {
    const stappen = recept.stappen.filter((s) => !s.m || s.m === methode);
    const alles = stappen.map((s) => s.t).join(' ');
    const stooft = /stoof|stoven|sudder|smoor/i.test(alles) || recept.tijd >= 120;
    const frituurt = /frituur|frituren|cm olie|olie[^.]* tot 1[5-9]0 °C/i.test(alles);
    const kneedt = /\b(balletjes|ballen|burgers?|kneed|kneden|köfte|kofte)\b/i.test(alles);
    const items = ingrediënten(recept).filter((i) => namen.includes(i.n)).map((i) => {
      const v = vriezerVan(i);
      const eigen = (recept.vriezer || {})[i.n];
      const s = { ...VRIEZER_SOORTEN[v.soort], ...eigen };
      const per = { g: 1, kg: 1000 }[i.u] || v.stuk || 0;
      const gram = i.q == null ? 0 : i.q * per * factor;
      const uur = s.uur && Math.round(Math.max(s.uur[0], (gram / 1000) * s.uur[1]));
      const stap = stappen.find((x) => s.stap.test(x.t));
      const inOven = stappen.some((x) => s.stap.test(x.t) && /(?<!dutch )\boven\b|airfryer|optigrill/i.test(x.t));
      const situatie = eigen && eigen.bevroren ? 'bevroren' : s.kneden && kneedt ? 'kneden' : s.stoof && stooft ? 'stoof' : s.oven && inOven ? 'oven' : 'bevroren';
      const regels = [];
      if (uur) {
        const wanneer = uur <= 14 ? 'haal het de avond van tevoren uit de vriezer'
          : uur <= 30 ? 'haal het een dag van tevoren uit de vriezer' : 'haal het 2 dagen van tevoren uit de vriezer';
        regels.push(`<b>Ontdooien:</b> ± ${uur} uur in de koelkast, dus ${wanneer}. Zet het in een bakje op de onderste plank, dan druppelt er niets op de rest.`);
        if (s.water) regels.push(`<b>Vergeten?</b> Leg het in de dichte verpakking of een diepvrieszak in een bak koud water en ververs het water elk half uur. Dan is het in ± ${minutenTekst(Math.max(gram, 250) / 500 * s.water)} ontdooid; gebruik het daarna meteen.`);
      }
      // Frituren: bevroren in hete olie spat gevaarlijk, wat de soort ook zegt.
      const tekst = frituurt && s.droog && uur ? `${s.bevroren} Nooit bevroren in hete olie: het ijs laat de olie gevaarlijk spatten.` : s[situatie];
      regels.push(`<b>${uur ? 'Bevroren?' : 'Zo doe je het:'}</b> ${esc(tekst)}`);
      if (!eigen && ['kip', 'stoof', 'kortBakken'].includes(v.soort) && /reepjes|repen|plakjes|blokjes|stukjes|\bdun/i.test(i.x || '')) {
        regels.push('<b>Snijden:</b> doe dat als het nog net een beetje bevroren is. Dan snij je veel makkelijker dunne, gelijke stukjes.');
      }
      const hv = hoeveelheidTekst(i, factor);
      return {
        i, soort: v.soort, droog: s.droog, uur, stap,
        titel: i.q == null ? i.n : hv,
        kort: uur ? `± ${uur} uur ontdooien in de koelkast` : s.inStap,
        inStap: (!frituurt && s[{ kneden: 'inStapKneden', stoof: 'inStapStoof', oven: 'inStapOven' }[situatie]]) || s.inStap,
        regels
      };
    });
    // Wat voor het hele recept geldt, één keer onderaan.
    const algemeen = [];
    if (!items.length) return { items, algemeen };
    if (/marine/i.test(alles) && items.some((x) => x.uur)) {
      const wacht = recept.wacht && /marine/i.test(recept.wacht) ? ` (${esc(recept.wacht)})` : '';
      algemeen.push(`<b>Marinade:</b> die kan pas op het vlees als het ontdooid is, dus tel de marineertijd${wacht} erbij. Handig: laat het in de koelkast ontdooien tot je het kunt snijden, snijd het en laat het in de marinade verder ontdooien. Dan is het marineren klaar als het ontdooid is.`);
    }
    if (items.some((x) => x.droog && x.uur)) algemeen.push('<b>Na het ontdooien:</b> giet het vocht uit de verpakking weg en dep het droog met keukenpapier. Wat nat is, kookt in de pan in plaats van dat het bruin bakt, en het spat.');
    if (items.some((x) => x.uur)) algemeen.push('Ontdooid vlees of vis gebruik je binnen een dag. Rauw ontdooid vries je niet opnieuw in; als gaar gerecht mag dat wel.');
    return { items, algemeen };
  }

  return { vriezerbaar, vriezer, stapMetHoeveelheden, foto, isMix, mixVan, mixDekking, mixenVoor, afstand, lijktOp, opslag, esc, norm, getal, breuk, hoeveelheid, hoeveelheidTekst, vervanger, vervangerTekst, alternatief, isBasis, termPast, ingrediënten, match, heeftTool, methodes, maakbaar, tijdTekst, pitTekst, bereidIn, panAdvies, restjes };
})();
