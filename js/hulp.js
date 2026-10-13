/* Gedeelde hulpfuncties: opslag, getallen, omrekenen en ingrediënten matchen. */
const Hulp = (() => {
  const opslag = {
    lees(sleutel, standaard) {
      try {
        const waarde = localStorage.getItem('receptenboek:' + sleutel);
        return waarde == null ? standaard : JSON.parse(waarde);
      } catch (e) { return standaard; }
    },
    schrijf(sleutel, waarde) {
      try { localStorage.setItem('receptenboek:' + sleutel, JSON.stringify(waarde)); } catch (e) { /* opslag niet beschikbaar */ }
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
    return { aantal, eenheid, naam, waarde };
  }

  function hoeveelheidTekst(ingr, factor) {
    const h = hoeveelheid(ingr, factor);
    return [h.aantal, h.eenheid, h.naam].filter(Boolean).join(' ');
  }

  /* Basisvoorraad die vrijwel iedereen heeft. */
  const BASIS = ['zout', 'peper', 'zwarte peper', 'water', 'lauw water', 'olijfolie', 'zonnebloemolie', 'olie'];
  const isBasis = (ingr) => BASIS.includes(norm(ingr.n));

  /* Matcht een zoekterm ("kip") met een ingrediënt ("kippendijfilet"). */
  function termPast(term, ingr) {
    const t = norm(term);
    if (!t) return false;
    const namen = [ingr.n, ingr.p].filter(Boolean).map(norm);
    return namen.some((nm) => {
      if (nm === t) return true;
      if (t.length >= 4 && nm.includes(t)) return true;
      if (nm.length >= 4 && t.includes(nm)) return true;
      return nm.split(/[\s-]+/).some((w) => w.startsWith(t));
    });
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
    lijst.forEach((i) => (voorraad.some((t) => termPast(t, i)) ? heb : mist).push(i.n));
    return { heb, mist, totaal: lijst.length, pct: lijst.length ? heb.length / lijst.length : 0 };
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
    if (min < 60) return min + ' min';
    const u = Math.floor(min / 60), m = min % 60;
    return u + ' uur' + (m ? ' ' + m + ' min' : '');
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
      const teer = /antiaanbak/.test(tekst) || /pannenkoe|pancake|spiegelei|omelet|vis|zalm/.test(norm(recept.naam + ' ' + g.tekst));
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

    if (g.tool === 'kookpan' && heb('rijstkoker') && /rijst/.test(tekst)) {
      return eenmalig('rijst', { soort: 'vervang', tekst: 'Gebruik je rijstkoker: spoel de rijst, vul water bij tot het streepje voor het aantal maatbekers en zet hem aan. Hij houdt de rijst daarna warm.' });
    }

    if (g.tool === 'kookpan' && heb('rvs-kookpan') && /bechamel|saus|melk|room/.test(tekst)) {
      return eenmalig('steelpan', { soort: 'tip', tekst: 'In je RVS-steelpan brandt melk of saus snel aan: houd het vuur middelhoog en blijf roeren met een garde.' });
    }
    return null;
  }

  return { opslag, esc, norm, getal, breuk, hoeveelheid, hoeveelheidTekst, isBasis, termPast, ingrediënten, match, heeftTool, methodes, maakbaar, tijdTekst, bereidIn, panAdvies };
})();
