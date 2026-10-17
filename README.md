# FIPU Online Vodič

Interaktivni web vodič za online izvanredni sveučilišni studij Informatike na Fakultetu informatike u Puli (FIPU). Sadrži četiri tematska modula s potpuno reaktivnim UI komponentama.

Dostupno na: **fipu.unipu.hr** (ili vlastitoj Netlify domeni)

---

## Lokalno pokretanje

```bash
# Instalacija ovisnosti (samo prvi put)
npm install

# Razvoj — lokalni server na http://localhost:5173
npm run dev

# Produkcijski build → dist/
npm run build

# Pregled produkcijskog builda lokalno
npm run preview
```

---

## Deploy na Netlify

### Opcija A — automatski (preporučeno)

1. Push repozitorij na GitHub
2. Na [netlify.com](https://netlify.com) → **Add new site → Import from Git**
3. Odaberi repozitorij
4. Postavi:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Klikni **Deploy site**

Svaki push na `main` automatski deploya novu verziju.

### Opcija B — ručni deploy (drag & drop)

```bash
npm run build
```

Zatim na Netlify dashboardu → **Sites → Deploy manually** → povuci `dist/` mapu u preglednik.

> **Napomena:** Datoteka `public/_redirects` već je uključena u projekt i osigurava ispravan SPA routing (bez 404 na osvježavanje stranice).

---

## Tech stack

| Tehnologija | Verzija | Uloga |
|---|---|---|
| [Vite](https://vitejs.dev/) | 5.x | Build tool / dev server |
| [React](https://react.dev/) | 18.x | UI framework |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.x | Utility-first CSS s custom design tokenima |
| [Framer Motion](https://www.framer.com/motion/) | 14.x | Animacije prijelaza između pogleda |
| Google Material Symbols Outlined | — | Ikonografija (icon font) |
| Plus Jakarta Sans + Inter | — | Tipografija (Google Fonts) |

---

## Struktura projekta

```
vodic-online/
├── public/
│   ├── favicon.svg
│   ├── _redirects                  # Netlify SPA routing
│   ├── docs/
│   │   └── fipu-vodic-online.pdf
│   └── images/
│       ├── fipu-hr.png             # Logo FIPU
│       ├── fipu-demo-kolegij.png   # Screenshot demo kolegija
│       ├── hero-student-sea.jpg
│       ├── study-writing.jpg
│       ├── techstack.jpg
│       ├── journeys/               # Procesni dijagrami (tabovi Hodogram)
│       └── photos/
├── src/
│   ├── components/
│   │   ├── TopNav.jsx              # Fiksna navigacijska traka
│   │   ├── DemoBadge.jsx           # Plutajući badge — ogledni kolegij
│   │   ├── ContactFooter.jsx       # Kontaktni blok (na dnu zadnje stranice)
│   │   ├── NextPageBlock.jsx       # Navigacijski CTA prema sljedećoj stranici
│   │   └── modules/
│   │       ├── HomeModule.jsx       # O online studiju
│   │       ├── PutovanjeModule.jsx  # Hodogram studija (tabovi + lightbox)
│   │       ├── NastavaModule.jsx    # Organizacija nastave, IPN & Alati
│   │       └── KvizModule.jsx       # Samoprocjena & FAQ
│   ├── data/
│   │   ├── programs.js
│   │   └── content.js
│   ├── App.jsx        # Root — view routing + scroll to top
│   ├── main.jsx
│   └── index.css      # @tailwind directives + custom CSS (app shell, TopNav)
├── tailwind.config.js  # Design tokeni: boje, spacing, tipografija
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## Četiri modula

| Modul | Navigacija | Opis |
|-------|------------|------|
| `HomeModule` | O online studiju | Hero sekcija, stats bar, prednosti online učenja, usporedna tablica, CTA prema Hodogramu |
| `PutovanjeModule` | Hodogram studija | 4-tab navigator (Upis / Studij & Učenje / Ispiti / Referada), lightbox za procesne dijagrame |
| `NastavaModule` | Organizacija nastave | IPN tablica, ECTS kalkulator (3 klizača), ponašanje na nastavi, alati i platforma |
| `KvizModule` | Samoprocjena | 3-tab kontrolna lista (Hardver / Softver / Navike), 8-pitanjski kviz, accordion FAQ s pretragom |

---

## Design sustav

Tailwind v3 konfiguracija s custom tokenima:

- **Primarne boje:** `primary-container #0A1628` (tamna pozadina), `forest-dark #0A7A52` (zelena akcija), `fipu-cyan #59BCD8`, `unipu-blue #1A6BBF`, `surface-mint #E0F6EE`
- **Tipografija:** `Plus Jakarta Sans` (naslovi, bedževi), `Inter` (tijelo, labeli, kod)
- **Fontovi kao Tailwind klase:** `font-display-hero`, `font-headline-lg`, `font-body-md`, `font-badge-caps` itd.
- **Spacing:** `space-xs` → `space-xl`, `margin`, `section-px`

---

## Autor

Prof. dr. sc. Darko Etinger, Dekan FIPU Pula
[fipu.unipu.hr](https://fipu.unipu.hr) · fipu-ured@unipu.hr
