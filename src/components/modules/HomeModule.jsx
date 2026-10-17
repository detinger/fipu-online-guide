export default function HomeModule({ onNavigate }) {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-primary-container text-on-primary py-space-xl">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-fipu-cyan/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-accent/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-margin relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Hero Text & Metrics */}
            <div className="lg:col-span-7 flex flex-col space-y-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-mint/15 text-secondary-fixed max-w-fit shadow-sm">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">emoji_events</span>
                <span className="font-badge-caps text-badge-caps uppercase tracking-wider">Prekretnica 2. studenoga 2022. • Prvi u Republici Hrvatskoj</span>
              </div>
              <h1 className="font-display-hero text-display-hero text-on-primary tracking-tight leading-tight">
                Online sveučilišni studij <span className="text-fipu-cyan">Informatike</span> na FIPU
              </h1>
              <p className="font-body-lg text-body-lg text-inverse-primary max-w-2xl leading-relaxed">
                Akreditirani sveučilišni program Sveučilišta Jurja Dobrile u Puli krojen za novu generaciju softverskih inženjera, zaposlene profesionalce i studente na daljinu. Vrhunski standardi mentorstva, fleksibilan tempo i cjelovita digitalna podrška.
              </p>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <button
                  onClick={() => onNavigate('kviz')}
                  className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-full bg-emerald-accent text-on-primary hover:bg-forest-dark font-label-lg text-label-lg transition-all shadow-lg shadow-emerald-accent/20 border-none cursor-pointer"
                >
                  <span>Riješi upitnik spremnosti</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
                <button
                  onClick={() => onNavigate('nastava')}
                  className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-full bg-surface-container-highest/20 text-on-primary hover:bg-surface-container-highest/30 font-label-lg text-label-lg transition-colors border-none cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px] text-fipu-cyan">terminal</span>
                  <span>Metodologija i Alati</span>
                </button>
              </div>
              {/* Hero Metrics Bento */}
              <div className="grid grid-cols-3 gap-space-sm pt-space-md">
                <div className="p-space-md rounded-xl bg-surface-container-highest/10 backdrop-blur-md shadow-sm">
                  <span className="font-badge-caps text-badge-caps text-secondary-fixed uppercase">Režim rada</span>
                  <p className="font-headline-md text-headline-md text-on-primary mt-1">Self-paced</p>
                  <p className="font-body-sm text-body-sm text-surface-variant/80">Vlastiti tempo učenja i mentorska podrška</p>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-highest/10 backdrop-blur-md shadow-sm">
                  <span className="font-badge-caps text-badge-caps text-fipu-cyan uppercase">ECTS bodovi</span>
                  <p className="font-headline-md text-headline-md text-on-primary mt-1">180 + 120</p>
                  <p className="font-body-sm text-body-sm text-surface-variant/80">Preddiplomski + diplomski stupanj</p>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-highest/10 backdrop-blur-md shadow-sm">
                  <span className="font-badge-caps text-badge-caps text-secondary-fixed uppercase">Akreditacija</span>
                  <p className="font-headline-md text-headline-md text-on-primary mt-1">#1</p>
                  <p className="font-body-sm text-body-sm text-surface-variant/80">Sveučilišni online studij inf. u RH</p>
                </div>
              </div>
            </div>
            {/* Visual Hero Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="p-space-md rounded-2xl bg-surface-container-highest/15 backdrop-blur-xl shadow-2xl relative">
                <div className="relative w-full h-80 rounded-xl overflow-hidden bg-primary-container shadow-inner">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/hero-student-sea.jpg"
                    alt="Student FIPU Online"
                    style={{ objectPosition: 'center 25%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <span className="inline-block px-space-xs py-0.5 rounded bg-fipu-cyan text-primary-container font-badge-caps text-badge-caps uppercase">Virtualni Kampus</span>
                      <p className="font-title-card text-title-card text-on-primary mt-0.5">Green Room &amp; Merlin LMS</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-mint text-forest-dark flex items-center justify-center font-label-md">
                      <span className="material-symbols-outlined text-[20px]">play_circle</span>
                    </div>
                  </div>
                </div>
                {/* Mini stats row */}
                <div className="mt-space-md grid grid-cols-2 gap-space-sm font-body-sm text-body-sm text-surface-variant">
                  <div className="flex items-center gap-space-xs bg-surface-container-highest/10 p-space-sm rounded-lg">
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px]">verified_user</span>
                    <span>NVVO akreditacija</span>
                  </div>
                  <div className="flex items-center gap-space-xs bg-surface-container-highest/10 p-space-sm rounded-lg">
                    <span className="material-symbols-outlined text-fipu-cyan text-[18px]">video_camera_front</span>
                    <span>Asinkroni video moduli</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC OVERVIEW & STATS BAR */}
      <section className="w-full bg-surface-container-low py-space-lg">
        <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md items-center">
            <div className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="w-11 h-11 rounded-lg bg-surface-mint flex items-center justify-center text-forest-dark shrink-0">
                <span className="material-symbols-outlined text-[24px]">school</span>
              </div>
              <div>
                <p className="font-title-card text-title-card text-on-surface">3 godine (180 ECTS)</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Preddiplomski studij</p>
              </div>
            </div>
            <div className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="w-11 h-11 rounded-lg bg-surface-container-high flex items-center justify-center text-unipu-blue shrink-0">
                <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
              </div>
              <div>
                <p className="font-title-card text-title-card text-on-surface">univ. bacc. inf.</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Sveučilišni akademski naziv</p>
              </div>
            </div>
            <div className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="w-11 h-11 rounded-lg bg-surface-mint flex items-center justify-center text-forest-dark shrink-0">
                <span className="material-symbols-outlined text-[24px]">laptop_chromebook</span>
              </div>
              <div>
                <p className="font-title-card text-title-card text-on-surface">100% Online Ispiti</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Kontinuirano praćenje</p>
              </div>
            </div>
            <div className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="w-11 h-11 rounded-lg bg-surface-container-high flex items-center justify-center text-unipu-blue shrink-0">
                <span className="material-symbols-outlined text-[24px]">public</span>
              </div>
              <div>
                <p className="font-title-card text-title-card text-on-surface">Dijaspora i regija</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Studij s bilo koje lokacije</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREDNOSTI ONLINE UČENJA NA FIPU */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
            <div className="space-y-space-xs">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-mint text-forest-dark font-badge-caps text-badge-caps uppercase">
                <span>Metodologija • E-učenje</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                💡 Prednosti online učenja na FIPU
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Inovativan model visokoškolskog obrazovanja koji spaja akademsku strogost i fleksibilnost suvremenog softverskog razvoja.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="font-code-inline text-code-inline text-on-surface-variant px-space-md py-space-xs rounded-full bg-surface-container-low inline-block">
                Standard: CARNET e-Sveučilišta
              </span>
            </div>
          </div>
          {/* Bento Cards Grid for 5 Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {/* Benefit 1 (Wide card on desktop) */}
            <div className="lg:col-span-2 p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-mint text-forest-dark flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[28px]">forum</span>
                </div>
                <div className="flex items-center gap-space-xs mb-space-xs">
                  <span className="font-badge-caps text-badge-caps uppercase text-forest-dark font-bold">Stalna interakcija</span>
                  <span className="text-outline-variant">•</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Sinkrono + Asinkrono</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                  E-učenje &amp; direktan kontakt s profesorima
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Online studij na FIPU nije pasivno čitanje PDF-ova. Kroz Merlin LMS, strukturirane tjedne forume, žive konzultacije preko video linka i mentorske sesije u malim grupama, student je u permanentnom dijalogu s nastavnim osobljem i kolegama inženjerima.
                </p>
              </div>
              <div className="pt-space-md flex items-center justify-between">
                <span className="font-label-md text-label-md text-forest-dark font-semibold">Tjedni feedback i evaluacija zadataka</span>
                <span className="material-symbols-outlined text-forest-dark text-[22px]">check_circle</span>
              </div>
            </div>
            {/* Benefit 2 */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-high text-unipu-blue flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[28px]">code</span>
                </div>
                <span className="font-badge-caps text-badge-caps uppercase text-unipu-blue font-bold">Hands-on Inženjerstvo</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs mb-space-xs">
                  Individualno stjecanje vještina za digitalno doba
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Praktični rad na stvarnim projektima: od Git repozitorija, Docker kontejnera, razvoja cloud arhitektura do suvremenih JavaScript i Python okruženja.
                </p>
              </div>
              <div className="pt-space-md">
                <span className="inline-flex items-center gap-space-xs font-label-md text-label-md text-unipu-blue">
                  <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                  Priprema za IT industriju
                </span>
              </div>
            </div>
            {/* Benefit 3 */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-mint text-forest-dark flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[28px]">update</span>
                </div>
                <span className="font-badge-caps text-badge-caps uppercase text-forest-dark font-bold">Reskilling &amp; Upskilling</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs mb-space-xs">
                  Cjeloživotno obrazovanje uz posao
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Arhitektura kolegija dopušta zaposlenim polaznicima učenje u večernjim satima i vikendima. Nastavni materijali u video formatu visoke rezolucije dostupni su 24/7.
                </p>
              </div>
              <div className="pt-space-md">
                <span className="inline-flex items-center gap-space-xs font-label-md text-label-md text-forest-dark">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  Potpuno prilagođeno radnom vremenu
                </span>
              </div>
            </div>
            {/* Benefit 4 */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-high text-unipu-blue flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[28px]">public</span>
                </div>
                <span className="font-badge-caps text-badge-caps uppercase text-unipu-blue font-bold">Bez fizičkih granica</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs mb-space-xs">
                  Pristup iz čitave HR i dijaspore
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Uštedite na troškovima preseljenja, najma stana i putovanja. Studirajte na hrvatskom sveučilištu bez obzira jeste li u Zagrebu, Splitu, Slavoniji, Irskoj ili Njemačkoj.
                </p>
              </div>
              <div className="pt-space-md">
                <span className="inline-flex items-center gap-space-xs font-label-md text-label-md text-unipu-blue">
                  <span className="material-symbols-outlined text-[16px]">location_off</span>
                  0 EUR troškova preseljenja
                </span>
              </div>
            </div>
            {/* Benefit 5 */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-mint text-forest-dark flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[28px]">balance</span>
                </div>
                <span className="font-badge-caps text-badge-caps uppercase text-forest-dark font-bold">Inkluzivnost</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs mb-space-xs">
                  Pravedan i jednak pristup
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Standardizirani kriteriji ocjenjivanja kroz kontinuirano prikupljanje bodova, otvorena digitalna knjižnica i jednaka dostupnost mentorske pomoći svakom upisanom polazniku.
                </p>
              </div>
              <div className="pt-space-md">
                <span className="inline-flex items-center gap-space-xs font-label-md text-label-md text-forest-dark">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  Transparentan ECTS sustav
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION: REDOVNI VS IZVANREDNI STUDIJ */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-space-lg space-y-space-xs">
            <span className="font-badge-caps text-badge-caps uppercase px-space-md py-space-xs rounded-full bg-surface-container text-on-surface font-bold">
              Struktura i modalitet
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              ⚖️ Redovni vs. Izvanredni studij — Ključne razlike
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Proučite detaljnu usporedbu kako biste odabrali status koji najviše odgovara vašoj trenutnoj životnoj i karijernoj situaciji.
            </p>
          </div>
          {/* Matrix Table Card */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden mb-space-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container text-on-surface">
                    <th className="p-space-md font-badge-caps text-badge-caps uppercase text-forest-dark">Kriterij usporedbe</th>
                    <th className="p-space-md font-title-card text-title-card text-on-surface">Redovni studij (Klasični / Online)</th>
                    <th className="p-space-md font-title-card text-title-card text-forest-dark bg-surface-mint/60">Izvanredni online studij</th>
                  </tr>
                </thead>
                <tbody className="divide-y-0 font-body-sm text-body-sm text-on-surface-variant">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="p-space-md font-semibold text-on-surface">Ciljana skupina</td>
                    <td className="p-space-md">Učenici nakon srednje škole, redoviti studenti s punim radnim vremenom posvećenim studiju</td>
                    <td className="p-space-md bg-surface-mint/20 font-medium text-on-surface">Zaposleni stručnjaci, poduzetnici, sportaši, studenti s obiteljskim obvezama</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors bg-surface-ice">
                    <td className="p-space-md font-semibold text-on-surface">Raspored i prisutnost</td>
                    <td className="p-space-md">Fiksni jutarnji i popodnevni termini u predavaonici ili sinkrono online</td>
                    <td className="p-space-md bg-surface-mint/20 font-medium text-on-surface">Asinkrono učenje u vlastitom terminu uz snimke i povremene večernje online sesije</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="p-space-md font-semibold text-on-surface">Studentska prava (Iksica, rad)</td>
                    <td className="p-space-md">Puna studentska prava, subvencionirana prehrana, rad preko Student servisa</td>
                    <td className="p-space-md bg-surface-mint/20 font-medium text-on-surface">Mogućnost paralelnog ugovora o radu na neodređeno/određeno bez gubitka statusa</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors bg-surface-ice">
                    <td className="p-space-md font-semibold text-on-surface">Polaganje ispita i kolokvija</td>
                    <td className="p-space-md">Klasične dvorane uz raspored ispitnih rokova u Puli</td>
                    <td className="p-space-md bg-surface-mint/20 font-medium text-on-surface">Kontinuirano kroz Merlin LMS i proctored online provjere znanja</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="p-space-md font-semibold text-on-surface">Diploma i ECTS ekvivalencija</td>
                    <td className="p-space-md">180 ECTS, sveučilišni prvostupnik informatike (univ. bacc. inf.)</td>
                    <td className="p-space-md bg-surface-mint/20 font-medium text-on-surface">Potpuno identična sveučilišna diploma i jednaka pravna vrijednost u RH i EU</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* 3 Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
              <div className="space-y-space-xs">
                <div className="w-10 h-10 rounded-lg bg-surface-mint text-forest-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">videocam</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Green Room Studio FIPU</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Fakultet informatike u Puli investirao je u vlastiti profesionalni video studio s tehnologijom virtualnog chroma-keyinga. Predavanja se snimaju u televizijskoj kvaliteti s interaktivnim vizualizacijama programskog koda.
                </p>
              </div>
              <span className="font-code-inline text-code-inline text-forest-dark pt-space-sm font-semibold">
                Snimanje lekcija u 4K rezoluciji
              </span>
            </div>
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
              <div className="space-y-space-xs">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-unipu-blue flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">hub</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Projekt CARNET e-Sveučilišta</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  FIPU aktivno sudjeluje u nacionalnom projektu digitalne transformacije visokog obrazovanja. Svi kolegiji prolaze stroge pedagoške i tehničke recenzije za e-učenje.
                </p>
              </div>
              <span className="font-code-inline text-code-inline text-unipu-blue pt-space-sm font-semibold">
                Akreditirano od strane NVVO
              </span>
            </div>
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
              <div className="space-y-space-xs">
                <div className="w-10 h-10 rounded-lg bg-surface-container text-on-surface flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">rocket_launch</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Strateška vizija FIPU</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Povezati Istru i cijelu Hrvatsku s globalnim IT tržištem rada. FIPU priprema programere, data inženjere i voditelje projekata kroz agilne kolegije temeljene na suvremenim tehnologijama.
                </p>
              </div>
              <span className="font-code-inline text-code-inline text-on-surface pt-space-sm font-semibold">
                Partnerstvo s tehnološkim sektorom
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PULA & KAMPUS SHOWCASE */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
            <div className="space-y-space-xs">
              <span className="font-badge-caps text-badge-caps uppercase px-space-sm py-0.5 rounded-full bg-surface-mint text-forest-dark font-bold">
                Lokacija • Sveučilište Jurja Dobrile
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Istarski centar znanja: Pula &amp; Kampus
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Iako studirate online, vaš akademski dom nalazi se u tisućljetnom mediteranskom gradu Puli, na suvremenom sveučilišnom kampusu s bogatom tradicijom.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-forest-dark">pin_drop</span>
                Rovinjska 14, 52100 Pula
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
            <div className="md:col-span-7 group relative rounded-2xl overflow-hidden shadow-sm h-80 md:h-96">
              <img alt="Sveučilišni kampus u Puli" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/images/campus-aerial.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-space-xs py-0.5 rounded bg-surface-mint text-forest-dark font-badge-caps text-badge-caps uppercase">Infrastruktura</span>
                <h3 className="font-headline-md text-headline-md text-on-primary mt-1">Sveučilišni kampus u Puli</h3>
                <p className="font-body-sm text-body-sm text-surface-variant mt-0.5">Moderni laboratoriji, studentski dom, knjižnica i istraživački centri FIPU-a.</p>
              </div>
            </div>
            <div className="md:col-span-5 group relative rounded-2xl overflow-hidden shadow-sm h-80 md:h-96">
              <img alt="Pula i mediteranska obala" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/images/pula-coastal.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-space-xs py-0.5 rounded bg-fipu-cyan text-primary-container font-badge-caps text-badge-caps uppercase">Okruženje</span>
                <h3 className="font-headline-md text-headline-md text-on-primary mt-1">Pula i mediteranska obala</h3>
                <p className="font-body-sm text-body-sm text-surface-variant mt-0.5">Savršena sinergija inspirativne prirode, IT konferencija i akademske izvrsnosti.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTION CTA HUB */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-space-lg">
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Sve što trebate za početak
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              Odaberite modul i saznajte točne korake upisa, tehničku opremu ili provjerite svoju spremnost za samostalno učenje.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded-xl bg-surface-mint text-forest-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">route</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-forest-dark transition-colors">
                  Putovanje studenta
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Od online prijave na Postani-student, potvrde upisa, uvodnog orijentacijskog tjedna do obrane završnog rada.
                </p>
              </div>
              <div className="pt-space-md">
                <button
                  onClick={() => onNavigate('putovanje')}
                  className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-forest-dark font-bold hover:underline bg-transparent border-none cursor-pointer p-0"
                >
                  <span>Pregledaj hodogram</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high text-unipu-blue flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">memory</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-unipu-blue transition-colors">
                  Nastava, Alati i Oprema
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Minimalna i preporučena hardverska konfiguracija, pristup sustavima Merlin, MS Teams i Git laboratorijima.
                </p>
              </div>
              <div className="pt-space-md">
                <button
                  onClick={() => onNavigate('nastava')}
                  className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-unipu-blue font-bold hover:underline bg-transparent border-none cursor-pointer p-0"
                >
                  <span>Tehničke specifikacije</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">quiz</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-forest-dark transition-colors">
                  Kviz samoprocjene
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Kratak interaktivni upitnik od 8 pitanja koji procjenjuje je li asinkroni online model idealan za vaše navike.
                </p>
              </div>
              <div className="pt-space-md">
                <button
                  onClick={() => onNavigate('kviz')}
                  className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-forest-dark font-bold hover:underline bg-transparent border-none cursor-pointer p-0"
                >
                  <span>Pokreni brzi kviz</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL FACULTY CONTACT & SUPPORT BANNER */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-margin">
          <div className="rounded-3xl bg-primary-container text-on-primary p-space-lg md:p-space-xl relative overflow-hidden shadow-xl">
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-fipu-cyan/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-8 space-y-space-xs">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-mint text-forest-dark font-badge-caps text-badge-caps uppercase">
                  <span>Studentska referada i podrška</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
                  Trebate pomoć pri upisu ili odabiru smjera?
                </h2>
                <p className="font-body-md text-body-md text-inverse-primary max-w-xl">
                  Naš ured za studente i voditelji studijskog programa dostupni su svakodnevno putem e-pošte, telefona ili zakazanih virtualnih konzultacija.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-md font-body-sm text-body-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px]">mail</span>
                    <span>fipu-ured@unipu.hr</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-fipu-cyan text-[20px]">call</span>
                    <span>+385 52 877 438</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px]">location_on</span>
                    <span>Rovinjska 14, Pula</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-space-sm">
                <a
                  className="w-full inline-flex items-center justify-center gap-space-xs py-3 px-space-md rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg font-bold hover:bg-surface-mint transition-colors shadow-sm"
                  href="https://isvu.hr/studomat/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">account_circle</span>
                  <span>Pristup Studomatu</span>
                </a>
                <a
                  className="w-full inline-flex items-center justify-center gap-space-xs py-3 px-space-md rounded-full bg-surface-container-highest/20 text-on-primary font-label-lg text-label-lg font-semibold hover:bg-surface-container-highest/30 transition-colors"
                  href="https://moodle.srce.hr/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px] text-fipu-cyan">school</span>
                  <span>Prijava u Merlin LMS</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
