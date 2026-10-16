/* Logboek: hoe vaak je een recept gemaakt hebt, je eigen notitie en twee beoordelingen
   (hoe lekker en hoe leuk om te maken). Per recept-id, dus elke variant apart.
   Bewaard onder 'logboek' in Hulp.opslag, zodat het meesynchroniseert met je andere apparaten. */
const Logboek = (() => {
  const { opslag } = Hulp;
  const SLEUTEL = 'logboek';
  const SMAAK = ['', 'Niet lekker', 'Gaat wel', 'Lekker', 'Erg lekker', 'Heerlijk'];
  const MAKEN = ['', 'Geen pretje', 'Niet zo leuk', 'Prima', 'Leuk', 'Heel leuk'];

  let data = opslag.lees(SLEUTEL, {});

  const leeg = () => ({ keren: [], smaak: 0, maken: 0, notitie: '' });
  const van = (id) => ({ ...leeg(), ...(data[id] || {}) });

  function bewaar(id, regel) {
    const ietsOver = regel.keren.length || regel.smaak || regel.maken || regel.notitie.trim();
    data = { ...data };
    if (ietsOver) data[id] = regel; else delete data[id];
    opslag.schrijf(SLEUTEL, data);
  }

  return {
    SMAAK, MAKEN,
    van,
    keer: (id) => (data[id] && data[id].keren ? data[id].keren.length : 0),
    /* Vandaag (nog een keer) gemaakt. */
    gemaakt(id) {
      const r = van(id);
      r.keren = [...r.keren, Date.now()];
      bewaar(id, r);
      return r.keren.length;
    },
    /* Laatste keer weghalen, voor als je per ongeluk tikte. */
    terug(id) {
      const r = van(id);
      r.keren = r.keren.slice(0, -1);
      bewaar(id, r);
      return r.keren.length;
    },
    /* Beoordeling 1–5; dezelfde waarde nog eens kiezen zet hem uit. */
    beoordeel(id, soort, waarde) {
      const r = van(id);
      r[soort] = r[soort] === waarde ? 0 : waarde;
      bewaar(id, r);
      return r[soort];
    },
    notitie(id, tekst) {
      const r = van(id);
      r.notitie = tekst;
      bewaar(id, r);
    },
    herlaad() { data = opslag.lees(SLEUTEL, {}); }
  };
})();
