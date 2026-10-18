import NextPageBlock from '../NextPageBlock'

export default function HomeModule({ onNavigate }) {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section
        className="relative w-full overflow-hidden min-h-[400px] md:min-h-[440px] flex items-stretch text-on-primary"
        style={{ backgroundImage: 'url(/images/splash.png)', backgroundSize: 'cover', backgroundPosition: 'center 40%' }}
      >
        {/* Gradient overlay — keeps text readable at all breakpoints */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/75 via-primary-container/40 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-margin-mobile md:px-margin py-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 flex flex-col space-y-space-md">
              <h1 className="font-display-hero text-display-hero text-on-primary tracking-tight leading-tight">
                Online sveučilišni studij <span className="text-fipu-cyan">Informatike</span> na FIPU
              </h1>
              <p className="font-body-lg text-body-lg text-inverse-primary max-w-xl leading-relaxed">
                Akreditirani sveučilišni program Sveučilišta Jurja Dobrile u Puli krojen za novu generaciju softverskih inženjera, zaposlene profesionalce i studente na daljinu.
              </p>
              <p className="font-body-md text-body-md text-surface-variant/90">
                Vrhunski standardi mentorstva, fleksibilan tempo i cjelovita digitalna podrška.
              </p>
              {/* Hero Metrics Bento */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-md">
                <div className="p-space-md rounded-xl bg-black/20 backdrop-blur-md shadow-sm">
                  <div className="flex items-center gap-space-xs mb-1">
                    <span className="material-symbols-outlined text-secondary-fixed text-[16px]">tune</span>
                    <span className="font-badge-caps text-badge-caps text-secondary-fixed uppercase">Modalitet studiranja</span>
                  </div>
                  <p className="font-headline-md text-headline-md text-on-primary mt-1">Self-paced</p>
                  <p className="font-body-sm text-body-sm text-surface-variant/80">Vlastiti tempo učenja i mentorska podrška</p>
                </div>
                <div className="p-space-md rounded-xl bg-black/20 backdrop-blur-md shadow-sm">
                  <div className="flex items-center gap-space-xs mb-1">
                    <span className="material-symbols-outlined text-fipu-cyan text-[16px]">school</span>
                    <span className="font-badge-caps text-badge-caps text-fipu-cyan uppercase">ECTS bodovi</span>
                  </div>
                  <p className="font-headline-md text-headline-md text-on-primary mt-1">180 + 120</p>
                  <p className="font-body-sm text-body-sm text-surface-variant/80">Prijediplomski + diplomski stupanj</p>
                </div>
                <div className="p-space-md rounded-xl bg-black/20 backdrop-blur-md shadow-sm">
                  <div className="flex items-center gap-space-xs mb-1">
                    <span className="material-symbols-outlined text-secondary-fixed text-[16px]">military_tech</span>
                    <span className="font-badge-caps text-badge-caps text-secondary-fixed uppercase">Akreditacija</span>
                  </div>
                  <p className="font-headline-md text-headline-md text-on-primary mt-1">#1</p>
                  <p className="font-body-sm text-body-sm text-surface-variant/80">Sveučilišni izvanredni online studij u HR</p>
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
                <p className="font-title-card text-title-card text-on-surface">3 god. · 180 ECTS</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Prijediplomski · univ. bacc. inf.</p>
              </div>
            </div>
            <div className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="w-11 h-11 rounded-lg bg-surface-container-high flex items-center justify-center text-unipu-blue shrink-0">
                <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
              </div>
              <div>
                <p className="font-title-card text-title-card text-on-surface">2 god. · 120 ECTS</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Diplomski · mag. inf.</p>
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
                <p className="font-title-card text-title-card text-on-surface">Studij na daljinu</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">HR, dijaspora i inozemstvo</p>
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
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                💡 Prednosti online učenja na FIPU
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Inovativan model visokoškolskog obrazovanja koji spaja akademsku strogost i fleksibilnost suvremenog softverskog razvoja.
              </p>
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
            </div>
            {/* Benefit 2 */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-high text-unipu-blue flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[28px]">code</span>
                </div>
                <span className="font-badge-caps text-badge-caps uppercase text-unipu-blue font-bold">Hands-on Pristup</span>
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
                    <th className="p-space-md font-title-card text-title-card text-on-surface">Redovni studij</th>
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
                  Kolegiji se isporučuju kroz profesionalne video lekcije, interaktivne vizualizacije programskog koda i custom aplikacije za učenje razvijene posebno za ovaj studij.
                </p>
              </div>
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
                Ulica Alda Negrija 6, 52100 Pula
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
            <div className="md:col-span-7 group relative rounded-2xl overflow-hidden shadow-sm h-80 md:h-96">
              <img
                alt="Pogled iz zraka na Pulu s rimskom Arenom u prvom planu i lukom u pozadini"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="/images/pula-aerial2.jpg"
                style={{ objectPosition: 'center 30%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-space-xs py-0.5 rounded bg-surface-mint text-forest-dark font-badge-caps text-badge-caps uppercase">Akademski grad</span>
                <h3 className="font-headline-md text-headline-md text-on-primary mt-1">Pula — tisućljetni mediteranski grad</h3>
                <p className="font-body-sm text-body-sm text-surface-variant mt-0.5">Rimska arena, sveučilišni kampus i moderni IT centar u jednom.</p>
              </div>
            </div>
            <div className="md:col-span-5 group relative rounded-2xl overflow-hidden shadow-sm h-80 md:h-96">
              <img
                alt="Kristalno čisto more i uvala istarskog poluotoka snimljeni dronom"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="/assets/extracted/vodic-015.jpg"
                style={{ objectPosition: 'center center' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-space-xs py-0.5 rounded bg-fipu-cyan text-primary-container font-badge-caps text-badge-caps uppercase">Priroda & Okruženje</span>
                <h3 className="font-headline-md text-headline-md text-on-primary mt-1">Istarsko more i mediteranska priroda</h3>
                <p className="font-body-sm text-body-sm text-surface-variant mt-0.5">Savršena inspiracija za studente iz čitave Hrvatske i dijaspore.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NextPageBlock
        title="Informiraj se o hodogramu studija"
        description="Saznaj sve korake — od online prijave i upisa do obrane završnog ili diplomskog rada."
        label="Hodogram studija"
        target="putovanje"
        onNavigate={onNavigate}
      />
    </div>
  )
}
