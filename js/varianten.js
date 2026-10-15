/* Varianten: één gerecht in meerdere versies, zoals taco's met gehakt of met kip.
   Een variant is een gewoon recept met variantVan: '<id van het basisrecept>' en een korte variant-naam.
   Alles wat de variant zelf niet invult, neemt hij over van het basisrecept. Met vervang ruil je
   losse ingrediënten (of een tussenkopje) om: { kipfilet: { n: 'biefstuk', q: 500, u: 'g' }, Kip: { kop: 'Vlees' } };
   Alleen de eerste regel met die naam telt; null haalt hem weg, een lijst zet er meerdere voor in de plaats. Een veld op null zetten
   (bijv. methodes: null) betekent: dit van het basisrecept níet overnemen.
   In het overzicht staat elk gerecht één keer, met de varianten om uit te kiezen. */
window.VARIANTEN = (() => {
  const NIET_ERVEN = ['id', 'naam', 'ook', 'gerecht', 'variant', 'variantVan', 'vervang'];
  const perId = new Map(RECEPTEN.map((r) => [r.id, r]));

  RECEPTEN.forEach((r, idx) => {
    const basis = r.variantVan && perId.get(r.variantVan);
    if (!basis) return;
    const v = {};
    Object.keys(basis).forEach((k) => { if (!NIET_ERVEN.includes(k)) v[k] = basis[k]; });
    Object.assign(v, r);
    if (r.vervang) {
      // Alleen de eerste regel met die naam wordt vervangen (sojasaus "voor de kip", niet die in de saus).
      const open = new Set(Object.keys(r.vervang));
      v.ingr = v.ingr.flatMap((i) => {
        const k = i.kop !== undefined ? i.kop : i.n;
        if (!open.has(k)) return [i];
        open.delete(k);
        return [].concat(r.vervang[k] || []);
      });
    }
    Object.keys(v).forEach((k) => { if (v[k] === null) delete v[k]; });
    RECEPTEN[idx] = v;
    perId.set(v.id, v);
  });

  const groepen = new Map();
  RECEPTEN.forEach((r) => {
    r.groep = r.variantVan && perId.has(r.variantVan) ? r.variantVan : r.id;
    if (!groepen.has(r.groep)) groepen.set(r.groep, []);
    groepen.get(r.groep).push(r);
  });
  // Het basisrecept staat altijd vooraan, daarna de varianten in de volgorde van de receptbestanden.
  groepen.forEach((leden, g) => leden.sort((a, b) => (a.id === g ? 0 : 1) - (b.id === g ? 0 : 1)));

  const leden = (r) => groepen.get(r.groep) || [r];
  return {
    leden,
    heeft: (r) => leden(r).length > 1,
    basis: (r) => perId.get(r.groep) || r,
    /* Naam van het gerecht als geheel ("Curry madras"), los van de variant. */
    gerecht: (r) => { const b = perId.get(r.groep) || r; return b.gerecht || b.naam; },
    label: (r) => r.variant || r.naam,
    aantalGerechten: () => groepen.size
  };
})();
