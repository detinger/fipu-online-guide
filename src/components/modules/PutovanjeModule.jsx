import { useState, useEffect, useCallback } from 'react'
import NextPageBlock from '../NextPageBlock'

const TABS = [
  { id: 'upis',       icon: 'how_to_reg',    label: '1. Upis na studij' },
  { id: 'studiranje', icon: 'menu_book',      label: '2. Studij & Učenje' },
  { id: 'ispiti',     icon: 'verified',       label: '3. Polaganje ispita' },
  { id: 'referada',   icon: 'support_agent',  label: '4. Referada & Podrška' },
]

function DiagramPreview({ imgSrc, alt, title, desc, onOpen }) {
  return (
    <div
      className="relative group bg-surface-ice p-space-md rounded-xl cursor-pointer shadow-sm hover:shadow-md transition-shadow"
      onClick={() => onOpen(imgSrc, title, desc)}
    >
      <img alt={alt} className="w-full h-auto object-contain rounded-lg" src={imgSrc} />
      <div className="absolute inset-0 bg-primary-container/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-space-xs text-on-primary font-label-lg text-label-lg">
        <span className="material-symbols-outlined text-[20px]">zoom_in</span>
        <span>Uvećaj procesni dijagram</span>
      </div>
      <div className="mt-space-xs flex items-center justify-between text-on-surface-variant font-code-inline text-code-inline">
        <span>Kliknite za uvećanje toka</span>
        <span className="material-symbols-outlined text-[16px]">open_in_full</span>
      </div>
    </div>
  )
}

export default function PutovanjeModule({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('upis')
  const [modal, setModal] = useState({ open: false, imgSrc: '', title: '', desc: '' })

  const openModal = useCallback((imgSrc, title, desc) => {
    setModal({ open: true, imgSrc, title, desc })
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setModal(m => ({ ...m, open: false }))
    document.body.style.overflow = ''
  }, [])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [closeModal])

  return (
    <div className="flex flex-col w-full">
      {/* LIGHTBOX MODAL */}
      {modal.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/90 backdrop-blur-md p-space-md"
          onClick={e => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div className="relative max-w-5xl w-full bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-space-lg py-space-md bg-surface-container-low">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-forest-dark text-[22px]">account_tree</span>
                <span className="font-headline-sm text-headline-sm text-on-surface">{modal.title || 'Dijagram toka procesa'}</span>
              </div>
              <button
                className="w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-variant flex items-center justify-center text-on-surface transition-colors cursor-pointer"
                onClick={closeModal}
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-space-lg flex flex-col items-center justify-center bg-surface-bright max-h-[75vh] overflow-auto">
              <img
                alt="FIPU Dijagram"
                className="max-h-[65vh] w-auto object-contain rounded-lg shadow-sm"
                src={modal.imgSrc}
              />
              {modal.desc && (
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-md text-center max-w-2xl">{modal.desc}</p>
              )}
            </div>
            <div className="px-space-lg py-space-sm bg-surface-container-low flex justify-between items-center text-on-surface-variant font-label-md text-label-md">
              <span>FIPU Službena procesna metodologija</span>
              <button
                className="px-space-md py-space-xs rounded-full bg-primary-container text-on-primary hover:bg-forest-dark transition-colors font-label-md text-label-md"
                onClick={closeModal}
              >Zatvori pregled</button>
            </div>
          </div>
        </div>
      )}

      {/* HEADER / BREADCRUMB */}
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-[1240px] mx-auto px-margin">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
            <div className="max-w-3xl">
              <h1 className="font-headline-lg text-headline-lg md:text-display-hero text-on-surface tracking-tight mb-space-xs">
                Hodogram studija kroz FIPU Online
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Od prvog upita do stjecanja diplome: transparentan, digitaliziran i predvidiv proces. Istražite korak po korak procesne dijagrame izvedbene nastave i studentskih servisa.
              </p>
            </div>
            <div className="flex items-center gap-space-md bg-surface-container-lowest p-space-sm px-space-md rounded-xl shadow-sm">
              <div className="text-center px-space-sm">
                <span className="font-headline-md text-headline-md text-forest-dark block">Brzo</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Podrška</span>
              </div>
              <div className="w-px h-8 bg-surface-dim"></div>
              <div className="text-center px-space-sm">
                <span className="font-headline-md text-headline-md text-unipu-blue block">100%</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Online Ispiti</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN JOURNEY STEPPER */}
      <section className="w-full py-space-xl">
        <div className="max-w-[1240px] mx-auto px-margin space-y-space-xl">
          {/* Tab Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm bg-surface-container-low p-space-xs rounded-xl shadow-sm">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-space-xs py-space-sm px-space-md rounded-lg font-title-card text-title-card transition-all ${
                  activeTab === tab.id
                    ? 'bg-surface-mint text-forest-dark shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container-lowest'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* TAB 1: UPIS */}
          {activeTab === 'upis' && (
            <div className="flex flex-col gap-space-xl">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="flex flex-col lg:flex-row gap-space-lg items-center">
                  <div className="w-full lg:w-7/12 space-y-space-md">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-space-sm py-space-xs rounded-full bg-surface-mint text-forest-dark font-badge-caps text-badge-caps uppercase">Faza 01</span>
                      <span className="font-title-card text-title-card text-on-surface">Upisni postupak &amp; Pristup sustavu</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Od informiranja do AAI@EduHr identiteta</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Upis na online prijediplomski studij informatike FIPU-a provodi se u potpunosti digitalno bez potrebe za fizičkim dolaskom u Pulu. Studentska služba vodi vas kroz svaki korak, od provjere uvjeta do aktivacije službenog Merlin kolegija.
                    </p>
                    <div className="flex flex-wrap gap-space-xs pt-space-xs">
                      {['Bez fizičkog dolaska', 'Elektronički ugovor', 'AAI@EduHr u 24h'].map(tag => (
                        <span key={tag} className="px-space-sm py-1 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px] text-forest-dark">check_circle</span>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full lg:w-5/12">
                    <DiagramPreview
                      imgSrc="/images/journeys/journey-upis.jpg"
                      alt="Upisni tok na FIPU"
                      title="Upisni tok: Od interesa do uspješnog upisa"
                      desc="Prikaz toka upisa: Chatbox informiranje, online prijava, ugovor i uplata upisnine, izdavanje digitalnog identiteta."
                      onOpen={openModal}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {[
                  { n: 1, icon: 'smart_toy',         title: 'Informiranje & Upiti',    footer: 'Referada',   text: 'Kandidat postavlja upit studentskoj referadi putem e-pošte za provjeru priznavanja ranijih ECTS bodova.' },
                  { n: 2, icon: 'app_registration',   title: 'Online Prijava',          footer: 'UNIPU Upisni Portal',       text: 'Ispunjavanje elektroničkog obrasca za upis na UNIPU portalu. Učitavanje relevantne dokumentacije (svjedodžbe, diploma, osobna iskaznica) u PDF formatu.' },
                  { n: 3, icon: 'payments',            title: 'Ugovor & Školarina',      footer: 'Sigurno plaćanje / R1',     text: 'Verifikacija studentskog ugovora i uplata upisnine/školarine putem internet bankarstva (jednokratno ili u obrocima prema važećem pravilniku).' },
                  { n: 4, icon: 'key',                 title: 'Digitalni Identitet',     footer: 'Status: Uspješno upisan!',  text: 'Zaprimanje AAI@EduHr korisničkih podataka, lozinke i službenog @student.unipu.hr maila. Trenutačni pristup sustavima Merlin LMS i ISVU Studomat.' },
                ].map(s => (
                  <div key={s.n} className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                    <div className="space-y-space-sm">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-full bg-forest-dark text-on-primary flex items-center justify-center font-headline-sm text-headline-sm">{s.n}</div>
                        <span className="material-symbols-outlined text-forest-dark text-[22px]">{s.icon}</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">{s.title}</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{s.text}</p>
                    </div>
                    <div className="pt-space-md text-forest-dark font-label-md text-label-md">{s.footer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: STUDIRANJE */}
          {activeTab === 'studiranje' && (
            <div className="flex flex-col gap-space-xl">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="flex flex-col lg:flex-row gap-space-lg items-center">
                  <div className="w-full lg:w-7/12 space-y-space-md">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-space-sm py-space-xs rounded-full bg-surface-mint text-forest-dark font-badge-caps text-badge-caps uppercase">Faza 02</span>
                      <span className="font-title-card text-title-card text-on-surface">Tjedni ritam &amp; Nastavni ciklus</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Učenje prema vlastitom rasporedu (Asinkrono + Sinkrono)</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Nastava je strukturirana u tjedne module. Svaki kolegij sadrži unaprijed snimljene video lekcije, interaktivne programske zadatke, skripte i redovite konzultacije s nositeljima kolegija.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                      <div className="p-space-sm bg-surface-container-low rounded-lg">
                        <span className="font-title-card text-title-card text-on-surface flex items-center gap-1">
                          <span className="material-symbols-outlined text-forest-dark text-[18px]">play_circle</span>
                          Video lekcije na zahtjev
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Gledanje lekcija u bilo koje doba dana ili noći s neograničenim ponavljanjem.</p>
                      </div>
                      <div className="p-space-sm bg-surface-container-low rounded-lg">
                        <span className="font-title-card text-title-card text-on-surface flex items-center gap-1">
                          <span className="material-symbols-outlined text-forest-dark text-[18px]">quiz</span>
                          Automatizirani kvizovi
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Instant provjera razumijevanja nakon svake obrađene cjeline s detaljnim feedbackom.</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-5/12">
                    <DiagramPreview
                      imgSrc="/images/journeys/journey-studiranje.jpg"
                      alt="Proces učenja lekcija na FIPU"
                      title="Studiranje i učenje po lekcijama"
                      desc="Prikaz izvedbe kolegija: Odabir kolegija, video lekcije, pripremljeni materijali, preporučena literatura, samoprovjera kvizovima i konzultacije."
                      onOpen={openModal}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                {[
                  { icon: 'laptop_mac', color: 'text-forest-dark', title: '1. Pripremljeni materijali', text: 'Službene skripte, repozitoriji koda (Git), prezentacije i dodatna preporučena literatura dostupni su u Merlin LMS repozitoriju.' },
                  { icon: 'contact_support', color: 'text-unipu-blue', title: '2. Pomoć nastavnika', text: 'Ukoliko naiđete na problem pri savladavanju koncepta, na raspolaganju su tjedne online konzultacije putem video poziva te asinkroni forumski upiti.' },
                  { icon: 'skip_next', color: 'text-forest-dark', title: '3. Prolazak na sljedeću lekciju', text: 'Nakon što uspješno riješite samoprovjeru i mini-kviz, otključava se pristup sljedećim tematskim cjelinama kolegija i praktičnim zadacima.' },
                ].map((c, i) => (
                  <div key={i} className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm">
                    <div className={`w-10 h-10 rounded-xl bg-surface-container-low ${c.color} flex items-center justify-center`}>
                      <span className="material-symbols-outlined text-[22px]">{c.icon}</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">{c.title}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ISPITI */}
          {activeTab === 'ispiti' && (
            <div className="flex flex-col gap-space-xl">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="flex flex-col lg:flex-row gap-space-lg items-center">
                  <div className="w-full lg:w-7/12 space-y-space-md">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-space-sm py-space-xs rounded-full bg-surface-mint text-forest-dark font-badge-caps text-badge-caps uppercase">Faza 03</span>
                      <span className="font-title-card text-title-card text-on-surface">Ispitni rokovi &amp; Kontinuirana provjera</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Transparentno ocjenjivanje i ECTS bodovi</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Svaki kolegij ima jasno definiran Izvedbeni Nastavni Plan (IPN). Ocjena se formira kroz kontinuirani rad tijekom semestra (kolokviji, praktični programski projekti) te završni pismeni ili usmeni ispit proveden online.
                    </p>
                    <div className="space-y-space-xs pt-space-xs">
                      {[
                        'Kontinuirano praćenje: 70% ocjene moguće je ostvariti prije završnog ispita',
                        'Online proctoring: Sigurna provjera znanja uz identifikaciju kamerom',
                      ].map((point, i) => (
                        <div key={i} className="flex items-center gap-space-sm text-body-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-forest-dark text-[18px]">done_all</span>
                          <span dangerouslySetInnerHTML={{ __html: point.replace(/^([^:]+):/, '<strong>$1:</strong>') }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full lg:w-5/12">
                    <DiagramPreview
                      imgSrc="/images/journeys/journey-ispiti.jpg"
                      alt="Proces polaganja ispita FIPU"
                      title="Pristupanje ispitnim rokovima"
                      desc="Proces polaganja ispita: Ispunjenje IPN obveza kolegija, polaganje pismenog/usmenog ispita, unos ocjene i ostvarivanje ECTS bodova."
                      onOpen={openModal}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                {[
                  { badge: 'Uvjet 01', title: 'Ispunjenje IPN obveza', text: 'Pristup ispitu odobrava se nakon predaje programskih zadataka, rješavanja obveznih online kvizova i sudjelovanja u interaktivnim radionicama.' },
                  { badge: 'Izvedba 02', title: 'Pismeni & Usmeni ispit', text: 'Polaganje pismenog testa u Merlinu i usmeni ispit putem videokonferencijskih alata (Google Meet) s profesorom.' },
                  { badge: 'Uspjeh 03', title: 'Upis ocjene & ECTS', text: 'Automatski upis u nacionalni ISVU Studomat sustav. Prikupljanje ECTS bodova prema diplomi sveučilišnog prvostupnika informatike (univ. bacc. inf.) ili magistra informatike (mag. inf.) za diplomski studij.' },
                ].map((s, i) => (
                  <div key={i} className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                    <span className="font-badge-caps text-badge-caps text-forest-dark uppercase">{s.badge}</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">{s.title}</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: REFERADA */}
          {activeTab === 'referada' && (
            <div className="flex flex-col gap-space-xl">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="flex flex-col lg:flex-row gap-space-lg items-center">
                  <div className="w-full lg:w-7/12 space-y-space-md">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-space-sm py-space-xs rounded-full bg-surface-mint text-forest-dark font-badge-caps text-badge-caps uppercase">Faza 04</span>
                      <span className="font-title-card text-title-card text-on-surface">Administrativni servis &amp; Helpdesk</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Brza rješenja: Odgovor referade u najkraćem mogućem roku</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Online studenti nikada nisu prepušteni sami sebi. Sveučilišna referada i tehnička podrška FIPU-a odgovaraju u najkraćem mogućem roku, uz jednostavnu digitalnu dostavu dopunske dokumentacije.
                    </p>
                    <div className="p-space-sm bg-surface-container-low rounded-lg flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-forest-dark text-[24px]">verified_user</span>
                      <div>
                        <span className="font-title-card text-title-card text-on-surface block">Garantirani SLA (Service Level Agreement)</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Službeni upiti na fipu-ured@unipu.hr procesuiraju se sustavno prema internom protokolu.</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-5/12">
                    <DiagramPreview
                      imgSrc="/images/journeys/journey-problemi.jpg"
                      alt="Administrativna podrška FIPU"
                      title="Rješavanje administrativnih problema"
                      desc="Tijek rješavanja upita u referadi: Slanje upita, odgovor u najkraćem mogućem roku, slanje preostale dokumentacije i uspješno razrješenje problema."
                      onOpen={openModal}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
                {[
                  { badge: 'KORAK 1', title: 'Pojava problema', text: 'Poteškoće oko statusa studenta, prijave ispita u ISVU sustavu ili zahtjev za izdavanje potvrda.' },
                  { badge: 'KORAK 2', title: 'Slanje upita referadi', text: 'Slanje detaljnog upita putem službenog studentskog email računa s JMBAG brojem.' },
                  { badge: 'KORAK 3', title: 'Odgovor u najkraćem roku', text: 'Referada verificira upit i vraća uputu ili poziv za dopunu eventualno nedostajućih dokumenata.' },
                  { badge: 'KORAK 4', title: 'Problem uspješno riješen', text: 'Zatvaranje tiketa, slanje digitalno potpisane potvrde ili ažuriranje stanja u Studomatu.' },
                ].map((s, i) => (
                  <div key={i} className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                    <span className="font-badge-caps text-badge-caps text-forest-dark">{s.badge}</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">{s.title}</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PHOTO BANNER — STUDENTSKO ISKUSTVO */}
      <section className="w-full relative overflow-hidden h-[260px] md:h-[320px]">
        <img
          src="/assets/extracted/vodic-031.jpg"
          alt="Troje studenata FIPU Online surađuje na laptopima i tabletu uz Jadransko more"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 25%' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/70 via-primary-container/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1240px] mx-auto px-margin">
            <p className="font-display-hero text-display-hero text-on-primary max-w-lg leading-tight">
              Studij koji se uklapa u <span className="text-fipu-cyan">tvoj životni stil</span>
            </p>
            <p className="font-body-lg text-body-lg text-inverse-primary mt-space-xs max-w-md">
              Uči uz posao, obitelj ili avanturu — od kuće, kafića ili uz Jadransko more.
            </p>
          </div>
        </div>
      </section>

      {/* COMPLETE LIFECYCLE OVERVIEW */}
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-[1240px] mx-auto px-margin">
          <div className="bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm space-y-space-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-mint text-forest-dark font-badge-caps text-badge-caps uppercase">
                  Cjeloviti Pregled
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs">
                  Cjelokupno iskustvo studiranja na jednom mjestu
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  Svi ključni procesi povezani su u koherentnu cjelinu osmišljenu za zaposlene studente, sportaše i sve koji traže maksimalnu fleksibilnost uz visoke akademske standarde.
                </p>
              </div>
              <button
                className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary hover:bg-forest-dark transition-colors font-label-lg text-label-lg shadow-sm"
                onClick={() => openModal(
                  '/images/journeys/journey-iskustvo.jpg',
                  'Cjelokupno iskustvo studiranja na FIPU Online',
                  'Sveobuhvatni procesni model: Upis, nastava po lekcijama, polaganje ispita i studentska referada integrirani u jedinstveni ekosustav.'
                )}
              >
                <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                <span>Uvećaj cijeli procesni model</span>
              </button>
            </div>
            <div
              className="relative bg-surface-bright rounded-xl p-space-md shadow-sm overflow-hidden group cursor-pointer"
              onClick={() => openModal(
                '/images/journeys/journey-iskustvo.jpg',
                'Cjelokupno iskustvo studiranja na FIPU Online',
                'Sveobuhvatni procesni model: Upis, nastava po lekcijama, polaganje ispita i studentska referada integrirani u jedinstveni ekosustav.'
              )}
            >
              <img
                alt="Cjelokupno iskustvo studiranja FIPU Online"
                className="w-full h-auto object-contain max-h-[550px] mx-auto rounded-lg"
                src="/images/journeys/journey-iskustvo.jpg"
              />
              <div className="absolute inset-0 bg-primary-container/15 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-space-xs text-on-primary font-label-lg text-label-lg">
                <span className="material-symbols-outlined text-[24px]">fullscreen</span>
                <span>Otvorite model u punoj rezoluciji</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NextPageBlock
        title="Saznaj više o organizaciji nastave"
        description="Kako izgledaju predavanja, vježbe, ispiti i ECTS bodovi na online studiju."
        label="Organizacija nastave"
        target="nastava"
        onNavigate={onNavigate}
      />
    </div>
  )
}
