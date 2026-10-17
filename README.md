# FIPU Online Vodič

Interaktivni web vodič za online izvanredni studij Informatike na Fakultetu informatike u Puli (FIPU). Izgrađen prema "Academic Cyber-Campus" design sustavu — četiri tematska modula s potpuno reaktivnim UI komponentama.

## Pokretanje

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

## Tech stack

| Tehnologija | Verzija | Uloga |
|---|---|---|
| [Vite](https://vitejs.dev/) | 5.x | Build tool / dev server |
| [React](https://react.dev/) | 18.x | UI framework |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.x | Utility-first CSS s custom design tokenima |
| [PostCSS](https://postcss.org/) + Autoprefixer | — | CSS pipeline |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animacije prijelaza između pogleda |
| Google Material Symbols Outlined | — | Ikonografija (icon font) |
| Plus Jakarta Sans + Inter | — | Tipografija (Google Fonts) |

## Struktura projekta

```
vodic-online/
├── public/
│   └── images/
│       ├── hero-student-sea.jpg
│       ├── campus-aerial.jpg
│       ├── techstack.jpg
│       ├── study-writing.jpg
│       ├── ...
│       └── journeys/
│           ├── journey-upis.jpg
│           ├── journey-studiranje.jpg
│           ├── journey-ispiti.jpg
│           ├── journey-problemi.jpg
│           └── journey-iskustvo.jpg
├── src/
│   ├── components/
│   │   ├── TopNav.jsx           # Fiksna navigacijska traka s 4 pogleda
│   │   └── modules/
│   │       ├── HomeModule.jsx       # Početna & O studiju
│   │       ├── NastavaModule.jsx    # Nastava, IPN & Alati
│   │       ├── PutovanjeModule.jsx  # Putovanje studenta (tabovi + lightbox)
│   │       └── KvizModule.jsx       # Samoprocjena & FAQ
│   ├── App.jsx       # Root — AnimatePresence + routing po pogledima
│   ├── main.jsx
│   └── index.css     # @tailwind directives + custom CSS za app shell i TopNav
├── tailwind.config.js   # Design tokeni: boje, spacing, tipografija
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Arhitektura — 4 pogleda

| Pogled | Modul | Interaktivnost |
|--------|-------|----------------|
| `home` | `HomeModule` | CTA gumbi za navigaciju, bento grid, usporedna tablica |
| `nastava` | `NastavaModule` | Simulator ocjene — 3 klizača (useState), live ECTS kalkulator |
| `putovanje` | `PutovanjeModule` | 4-tab navigator (upis/studiranje/ispiti/referada), lightbox modal s Escape/backdrop zatvaranjem |
| `kviz` | `KvizModule` | 3-tab kontrolna lista s progress barom, 8-pitanjski kviz (state machine), accordion FAQ s filtrom pretrage |

## Design sustav — Academic Cyber-Campus

Tailwind v3 konfiguracija replicira sve tokene iz stitch dizajna:

- **Boje:** `forest-dark #0A7A52`, `surface-mint #E0F6EE`, `fipu-cyan #59BCD8`, `primary-container #0e1c2f`, `unipu-blue #1A6BBF`
- **Tipografija:** `Plus Jakarta Sans` (naslovi/bedževi), `Inter` (tijelo/labeli/kod)
- **Fontovi kao Tailwind klase:** `font-headline-lg`, `text-body-md`, `text-badge-caps` itd.
- **Spacing:** `space-xs` → `space-xl`, `margin`, `gutter`

## Deploy na Netlify

1. Push na GitHub:
   ```bash
   git remote add origin <github-url>
   git push -u origin main
   ```
2. Na [netlify.com](https://netlify.com) → **Add new site → Import from Git**
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Svaki push na `main` automatski deploya novu verziju.

## Autor

Prof. dr. sc. Darko Etinger, Dekan FIPU Pula  
[fipu.unipu.hr](https://fipu.unipu.hr)
