/* Deelkaart: een recept als pdf in de stijl van het boek, om te delen of te bewaren.
   De pagina wordt als HTML opgebouwd (buiten beeld), met html2canvas gefotografeerd en met jsPDF
   op A4 gezet. Beide bibliotheken staan in js/lib en worden pas geladen als je voor het eerst deelt.
   Kleuren staan hier vast (licht), zodat de pdf er in donkere modus hetzelfde uitziet. */
const DeelKaart = (() => {
  const BREED = 794;                 // A4-breedte in CSS-pixels (96 dpi)
  const HOOG = Math.round(BREED * 297 / 210);
  const MARGE = 40;                  // boven- en ondermarge op vervolgpagina's
  const PAPIER = '#FFFDF8';
  const geladen = {};

  function laad(src) {
    if (!geladen[src]) {
      geladen[src] = new Promise((klaar, fout) => {
        const s = document.createElement('script');
        s.src = `${src}?v=${window.VERSIE || ''}`;
        s.onload = klaar;
        s.onerror = () => { delete geladen[src]; fout(new Error(`Kon ${src} niet laden`)); };
        document.head.appendChild(s);
      });
    }
    return geladen[src];
  }

  /* Hoofdstukkleur gemengd met papier, zoals color-mix in de CSS (html2canvas kent color-mix niet). */
  function meng(hex, deel) {
    const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
    const a = rgb(hex), b = rgb(PAPIER);
    return `rgb(${a.map((x, i) => Math.round(x * deel + b[i] * (1 - deel))).join(',')})`;
  }

  function html(r, o) {
    const esc = Hulp.esc;
    const pers = Math.round(r.pers * o.factor);
    const m = o.methodes.find((x) => x.id === o.methode);
    const meta = [
      Hulp.tijdTekst(r.tijd) + (r.wacht ? ` + ${r.wacht}` : ''),
      `${pers} ${r.stuks || (pers === 1 ? 'persoon' : 'personen')}`,
      r.niveau,
      r.vega ? 'Vegetarisch' : '',
      m && o.methodes.length > 1 ? `Bereiden met: ${m.naam}` : ''
    ].filter(Boolean);
    const gerei = r.gerei.filter((g) => !g.m || g.m === o.methode);
    const stappen = r.stappen.filter((s) => !s.m || s.m === o.methode);
    const foto = Hulp.foto(r);
    // Restjes komen als kant-en-klare HTML uit Detail (met vetgedrukte namen); de rest is platte tekst.
    const notitie = (titel, lijst, isHtml) => (lijst && lijst.length
      ? `<aside class="dk-notitie" data-breek><h3>${titel}</h3><ul>${lijst.map((x) => `<li>${isHtml ? x : esc(x)}</li>`).join('')}</ul></aside>` : '');

    return `
      <header class="dk-kop" data-breek>
        <p class="dk-loopkop"><span>Receptenboek van Mark</span><span>Hoofdstuk ${o.hoofdstuk.nr} · ${esc(r.keuken)}</span></p>
        <p class="dk-soort">${esc(r.soort)}</p>
        <h1>${esc(r.naam)}</h1>
        ${o.varianten.length > 1 ? `<p class="dk-varianten">${o.varianten.map((v) => `<span class="${v.id === r.id ? 'is-gekozen' : ''}">${esc(v.variant || v.naam)}</span>`).join('')}</p>` : ''}
        <p class="dk-intro">${esc(r.intro)}</p>
        <p class="dk-meta">${meta.map((x) => `<span>${esc(x)}</span>`).join('')}</p>
      </header>
      <div class="dk-midden">
        <section class="dk-ingr">
          <h2 data-breek>Ingrediënten</h2>
          <ul>${r.ingr.map((i) => {
            if (i.kop) return `<li class="dk-ingr-kop" data-breek>${esc(i.kop)}</li>`;
            const h = Hulp.hoeveelheid(i, o.factor);
            const extra = i.x || (i.q == null ? 'naar smaak' : '');
            return `<li data-breek><b>${esc([h.aantal, h.eenheid].filter(Boolean).join(' '))}</b><span>${esc(h.naam)}${i.opt ? ' <em>(optioneel)</em>' : ''}${extra ? `<small>, ${esc(extra)}</small>` : ''}</span></li>`;
          }).join('')}</ul>
        </section>
        <section class="dk-rechts">
          ${foto ? `<figure data-dk-foto><img src="${esc(foto.src)}" alt=""><figcaption>Foto: ${esc(foto.auteur)}, ${esc(foto.licentie)}</figcaption></figure>` : ''}
          ${gerei.length ? `<h2 data-breek>Pannen en apparatuur</h2><ul class="dk-gerei">${gerei.map((g) => `<li data-breek>${esc(g.tekst)}${g.of ? `<small>Alternatief: ${esc(g.of)}</small>` : ''}</li>`).join('')}</ul>` : ''}
        </section>
      </div>
      <section class="dk-stappen">
        <h2 data-breek>Bereiding</h2>
        <ol>${stappen.map((s, n) => `<li data-breek><span class="dk-nr">${n + 1}</span><p>${esc(s.t)}</p></li>`).join('')}</ol>
      </section>
      <div class="dk-notities">${notitie('Tip', r.tips)}${notitie('Alternatieven', r.alt)}${notitie('Restjes', o.restjes, true)}</div>
      <footer class="dk-voet" data-breek>Uit het Receptenboek van Mark · <span>${esc(o.link)}</span></footer>`;
  }

  /* Waar een pagina mag eindigen: onder een kop, ingrediënt, stap of notitie, nooit midden in een regel. */
  function breekpunten(kaart) {
    const top = kaart.getBoundingClientRect().top;
    const punten = [...kaart.querySelectorAll('[data-breek]')].map((el) => Math.ceil(el.getBoundingClientRect().bottom - top));
    return [...new Set(punten)].sort((a, b) => a - b);
  }

  function paginas(totaal, punten) {
    const grenzen = [];
    let begin = 0;
    while (totaal - begin > HOOG - (begin ? 2 * MARGE : MARGE)) {
      const ruimte = HOOG - (begin ? 2 * MARGE : MARGE);
      const passend = punten.filter((p) => p > begin + ruimte * 0.4 && p <= begin + ruimte);
      const eind = passend.length ? passend[passend.length - 1] + 8 : begin + ruimte;
      grenzen.push([begin, eind]);
      begin = eind;
    }
    grenzen.push([begin, totaal]);
    return grenzen;
  }

  async function foto(kaart, schaal) {
    const opties = { scale: schaal, backgroundColor: PAPIER, useCORS: true, logging: false, windowWidth: BREED };
    try {
      const doek = await html2canvas(kaart, opties);
      doek.toDataURL('image/jpeg', 0.1); // gooit een fout als de foto het doek "besmet" (bijv. lokaal geopend bestand)
      return doek;
    } catch (e) {
      const fig = kaart.querySelector('[data-dk-foto]');
      if (!fig) throw e;
      fig.remove();
      return html2canvas(kaart, opties);
    }
  }

  /* Maakt de pdf en geeft hem terug als File. o: { factor, methode, methodes, varianten, hoofdstuk, restjes, link } */
  async function maak(r, o) {
    await Promise.all([laad('js/lib/html2canvas.min.js'), laad('js/lib/jspdf.umd.min.js')]);
    const kaart = document.createElement('article');
    kaart.className = 'deelkaart';
    kaart.style.setProperty('--k', o.hoofdstuk.kleur);
    kaart.style.setProperty('--k-vlak', meng(o.hoofdstuk.kleur, 0.12));
    kaart.innerHTML = html(r, o);
    document.body.appendChild(kaart);
    try {
      await Promise.all([...kaart.querySelectorAll('img')].map((img) => (img.complete ? null : new Promise((k) => { img.onload = img.onerror = k; }))));
      if (document.fonts) {
        await Promise.all(['16px "Young Serif"', '16px Literata', 'italic 16px Literata', '600 16px Figtree', '700 16px Caveat']
          .map((f) => document.fonts.load(f).catch(() => null)));
      }
      const schaal = 2;
      const doek = await foto(kaart, schaal);
      const punten = breekpunten(kaart);
      const totaal = Math.ceil(doek.height / schaal);

      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({ unit: 'pt', format: 'a4', compress: true });
      const pt = pdf.internal.pageSize.getWidth() / BREED;
      const stuk = document.createElement('canvas');
      stuk.width = doek.width;
      paginas(totaal, punten).forEach(([van, tot], n) => {
        if (n) pdf.addPage();
        pdf.setFillColor(PAPIER); pdf.rect(0, 0, BREED * pt, HOOG * pt, 'F');
        const hoogte = tot - van;
        stuk.height = Math.round(hoogte * schaal);
        const c = stuk.getContext('2d');
        c.fillStyle = PAPIER; c.fillRect(0, 0, stuk.width, stuk.height);
        c.drawImage(doek, 0, Math.round(van * schaal), doek.width, stuk.height, 0, 0, stuk.width, stuk.height);
        const y = n ? MARGE : 0;
        pdf.addImage(stuk.toDataURL('image/jpeg', 0.88), 'JPEG', 0, y * pt, BREED * pt, hoogte * pt);
      });
      const naam = r.naam.replace(/[\\/:*?"<>|]+/g, '').trim() || 'Recept';
      return new File([pdf.output('blob')], `${naam}.pdf`, { type: 'application/pdf' });
    } finally {
      kaart.remove();
    }
  }

  return { maak };
})();
