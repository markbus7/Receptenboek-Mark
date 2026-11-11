/* Logboek: elke keer dat je een recept gemaakt hebt, met de datum en twee beoordelingen
   (hoe lekker en hoe leuk om te maken), plus één eigen notitie. Per recept-id, dus elke variant apart.
   Uit alle keren samen komt een gemiddelde score.
   Bewaard onder 'logboek' in Hulp.opslag, zodat het meesynchroniseert met je andere apparaten.

   Vorm: { id: { keren: [{ t, smaak, maken }], notitie } }. Oudere gegevens hadden keren als losse
   tijdstempels en één beoordeling voor het hele recept; die beoordeling gaat naar de laatste keer. */
const Logboek = (() => {
  const { opslag } = Hulp;
  const SLEUTEL = 'logboek';
  const SMAAK = ['', 'Niet lekker', 'Gaat wel', 'Lekker', 'Erg lekker', 'Heerlijk'];
  const MAKEN = ['', 'Geen pretje', 'Niet zo leuk', 'Prima', 'Leuk', 'Heel leuk'];

  let data = opslag.lees(SLEUTEL, {});

  function van(id) {
    const ruw = data[id] || {};
    const keren = (ruw.keren || [])
      .map((k) => (typeof k === 'number' ? { t: k, smaak: 0, maken: 0 } : { smaak: 0, maken: 0, ...k }))
      .sort((a, b) => a.t - b.t);
    const r = { keren, notitie: ruw.notitie || '', smaak: ruw.smaak || 0, maken: ruw.maken || 0 };
    // Oude losse beoordeling: hoort bij de laatste keer.
    if (keren.length && (r.smaak || r.maken)) {
      const laatst = keren[keren.length - 1];
      if (!laatst.smaak) laatst.smaak = r.smaak;
      if (!laatst.maken) laatst.maken = r.maken;
      r.smaak = r.maken = 0;
    }
    return r;
  }

  function bewaar(id, r) {
    const regel = { keren: r.keren, notitie: r.notitie };
    // Een beoordeling zonder dat je het gemaakt hebt (van vóór 1.84.0) blijft bewaard.
    if (!r.keren.length) { if (r.smaak) regel.smaak = r.smaak; if (r.maken) regel.maken = r.maken; }
    const ietsOver = regel.keren.length || regel.smaak || regel.maken || regel.notitie.trim();
    data = { ...data };
    if (ietsOver) data[id] = regel; else delete data[id];
    opslag.schrijf(SLEUTEL, data);
    document.dispatchEvent(new CustomEvent('logboek-gewijzigd'));
  }

  /* 'jjjj-mm-dd' van een tijdstempel, in je eigen tijdzone (voor <input type="date">). */
  const dag = (t) => {
    const d = new Date(t);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  /* Gemiddelde van de keren dat je een beoordeling gaf (0 als je nog niets gaf); ids mag één id of een lijst zijn. */
  function gemiddelde(ids, soort) {
    const scores = [].concat(ids).flatMap((id) => van(id).keren.map((k) => k[soort]).filter(Boolean));
    return { gem: scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0, aantal: scores.length };
  }

  return {
    SMAAK, MAKEN, dag,
    van, gemiddelde,
    keer: (id) => van(id).keren.length,
    /* Vandaag (nog een keer) gemaakt. */
    gemaakt(id) {
      const r = van(id);
      r.keren.push({ t: Date.now(), smaak: 0, maken: 0 });
      bewaar(id, r);
      return r.keren.length;
    },
    /* Eén keer weghalen (index in de op datum gesorteerde lijst). */
    weg(id, i) {
      const r = van(id);
      r.keren.splice(i, 1);
      bewaar(id, r);
      return r.keren.length;
    },
    /* Andere datum voor een keer ('jjjj-mm-dd'); de tijd wordt 12:00 zodat de dag in elke tijdzone klopt. */
    zetDatum(id, i, waarde) {
      const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(waarde || '');
      const r = van(id);
      if (!m || !r.keren[i]) return;
      r.keren[i].t = new Date(+m[1], +m[2] - 1, +m[3], 12).getTime();
      r.keren.sort((a, b) => a.t - b.t);
      bewaar(id, r);
    },
    /* Beoordeling 1–5 voor één keer; dezelfde waarde nog eens kiezen zet hem uit. */
    beoordeel(id, i, soort, waarde) {
      const r = van(id);
      const k = r.keren[i];
      if (!k) return 0;
      k[soort] = k[soort] === waarde ? 0 : waarde;
      bewaar(id, r);
      return k[soort];
    },
    notitie(id, tekst) {
      const r = van(id);
      r.notitie = tekst;
      bewaar(id, r);
    },
    herlaad() { data = opslag.lees(SLEUTEL, {}); }
  };
})();
