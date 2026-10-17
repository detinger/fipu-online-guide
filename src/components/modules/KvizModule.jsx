import { useState, useMemo } from 'react'
import ContactFooter from '../ContactFooter'

const CHECKLIST_TABS = [
  { id: 'hw', label: 'Hardver' },
  { id: 'sw', label: 'Softver' },
  { id: 'skills', label: 'Digitalne vještine' },
]

const CHECKLIST_ITEMS = {
  hw: [
    { id: 'hw1', icon: 'laptop_mac', color: 'text-forest-dark', title: 'PC ili prijenosno računalo', text: 'Starost manja od 5 godina, procesor min. 4 jezgre, preporučeno 8GB+ RAM memorije za kompajliranje i kontejnere.', tag: 'Obavezno' },
    { id: 'hw2', icon: 'wifi', color: 'text-unipu-blue', title: 'Internet veza (4/1 Mbps)', text: 'Stabilna širokopojasna veza s min. 4 Mbps preuzimanja i 1 Mbps slanja za nesmetan video prijenos predavanja.', tag: 'Stabilnost prioriteta' },
    { id: 'hw3', icon: 'videocam', color: 'text-forest-dark', title: 'Web kamera (HD/USB)', text: 'Ugrađena ili vanjska USB kamera min. 720p rezolucije za online kolokvije, ispite i interaktivne laboratorije.', tag: 'Identifikacija' },
    { id: 'hw4', icon: 'headset_mic', color: 'text-unipu-blue', title: 'Slušalice i mikrofon', text: 'Kvalitetan mikrofon s redukcijom šuma i slušalice kako se ne bi stvarala mikrofonija tijekom konzultacija.', tag: 'Jasna komunikacija' },
  ],
  sw: [
    { id: 'sw1', icon: 'terminal', color: 'text-primary-container', title: 'Windows 10+, macOS 11+, Linux', text: 'Ažuran 64-bitni operativni sustav s administrativnim ovlastima za instalaciju razvojnih alata.', tag: 'Admin pristup' },
    { id: 'sw2', icon: 'public', color: 'text-unipu-blue', title: 'Google Chrome ili Firefox', text: 'Podrška za WebRTC i najnovije standarde za pristup sustavima Merlin LMS i ISVU Studomat.', tag: 'LMS kompatibilnost' },
    { id: 'sw3', icon: 'code', color: 'text-forest-dark', title: 'Visual Studio Code', text: 'Glavni integrirani uređivač koda s podrškom za Git repozitorije, ekstenzije i remote debugging.', tag: 'Primarni IDE' },
    { id: 'sw4', icon: 'integration_instructions', color: 'text-fipu-cyan', title: 'Python 3.10+ & C++ (GCC/LLVM)', text: 'Konfigurirano runtime okruženje s Jupyter bilježnicama za kolegije programiranja i analize podataka.', tag: 'Kompajleri' },
  ],
  skills: [
    { id: 'sk1', icon: 'badge', color: 'text-forest-dark', title: 'ECDL / Osnove računala', text: 'Samostalno upravljanje datotekama, instalacija softverskih paketa, rad s komprimiranim arhivama (.zip).', tag: 'Temeljne vještine' },
    { id: 'sk2', icon: 'forum', color: 'text-unipu-blue', title: 'Digitalna komunikacija', text: 'Korištenje institucionalnog AAI@EduHr računa, akademska email korespondencija i rad u timskim kanalima.', tag: 'Netiquette' },
    { id: 'sk3', icon: 'security', color: 'text-forest-dark', title: 'Kibernetička higijena', text: 'Prepoznavanje phishinga, sigurno upravljanje lozinkama i redovita izrada sigurnosnih kopija radova.', tag: 'Zaštita' },
    { id: 'sk4', icon: 'troubleshoot', color: 'text-unipu-blue', title: 'Samostalno rješavanje grešaka', text: 'Sposobnost čitanja error logova, pretrage dokumentacije (Stack Overflow, MDN) i otklanjanja jednostavnih zastoja.', tag: 'Inženjerski stav' },
  ],
}

const ALL_ITEMS = [...CHECKLIST_ITEMS.hw, ...CHECKLIST_ITEMS.sw, ...CHECKLIST_ITEMS.skills]
const TOTAL = ALL_ITEMS.length

const QUIZ_QUESTIONS = [
  { category: 'Organizacija vremena', text: 'Možeš li izdvojiti 15 do 20 sati tjedno za praćenje predavanja, laboratorijske vježbe i samostalno rješavanje programskih zadataka?', hint: 'Online studij na FIPU ima jednak akademski volumen ECTS bodova kao i klasični studij, što zahtijeva redovito tjedno ulaganje vremena.' },
  { category: 'Samostalnost i disciplina', text: 'Smatraš li se sposobnim organizirati vlastiti tjedni raspored učenja bez svakodnevnog fizičkog odlaska na fakultet?', hint: 'Samousmjerenost i proaktivnost ključne su vrline uspješnih online polaznika u virtualnim učionicama.' },
  { category: 'Hardverska opremljenost', text: 'Imaš li pouzdano računalo (manje od 5 god.), mikrofon i HD web kameru za izvođenje interaktivnih vježbi i kolokvija?', hint: 'Kontinuirana provjera znanja i praktične prezentacije koda traže stabilnu i podržanu hardversku konfiguraciju.' },
  { category: 'Mrežna infrastruktura', text: 'Posjeduješ li stabilan kućni pristup internetu s brzinom od barem 4 Mbps za video prijenos predavanja uživo?', hint: 'Interaktivna predavanja i radionice koriste video streaming visoke kvalitete putem Google Meeta.' },
  { category: 'Tehnički afinitet', text: 'Jesi li spreman/na samostalno instalirati alate poput VS Code-a, Pythona, Gita i rješavati programske greške uz dokumentaciju?', hint: 'Prva godina studija brzo uvodi studente u programiranje gdje se očekuje istraživački stav prema greškama u kodu.' },
  { category: 'Komunikacija na daljinu', text: 'Osjećaš li se ugodno postavljati pitanja profesorima i asistentima pismenim putem ili putem video poziva?', hint: 'Online nastava potiče aktivnu kulturu postavljanja pitanja u forumima i konzultacijama bez ustručavanja.' },
  { category: 'Timski rad i kolaboracija', text: 'Možeš li surađivati s kolegama na daljinu u izradi timskih softverskih projekata i laboratorijskih zadataka?', hint: 'Softversko inženjerstvo timski je sport; vještina kolaboracije u Git repozitorijima gradi se od prve godine.' },
  { category: 'Motivacija i ciljevi', text: 'Imaš li jasan cilj zašto želiš diplomirati informatiku na FIPU (npr. promjena karijere, IT zaposlenje, inženjerska diploma)?', hint: 'Jasna vizija krajnjeg cilja najbolji je oslonac tijekom zahtjevnih ispitnih rokova i kompleksnih kolegija.' },
]

const FAQ_ITEMS = [
  {
    q: 'Koja su prava i obveze izvanrednih studenata na online studiju?',
    a: 'Izvanredni studenti na online studiju informatike imaju jednaku vrijednost diplome — prijediplomski studij nosi 180 ECTS i daje naziv sveučilišnog prvostupnika (univ. bacc. inf.), a diplomski studij nosi 120 ECTS i izvodi se u dva smjera: Informatika (mag. inf.) i Nastavni smjer informatike (mag. inf. et inf. educ.). Nastava je prilagođena zaposlenima (asinkroni materijali i večernja online predavanja uživo), a studentska prava ostvaruju se putem sustava ISVU i studentske iskaznice.',
  },
  {
    q: 'Mogu li se kolokviji i ispiti polagati potpuno na daljinu?',
    a: 'Sukladno akreditacijskoj odluci i Pravilniku o studiranju, kontinuirano praćenje (zadaće, mini-projekti, online kvizovi znanja) provodi se online kroz Merlin LMS. Završni ispiti i provjere identiteta izvode se sukladno izvedbenom planu kolegija putem video nadzora ili u posebno organiziranim ispitnim terminima.',
  },
  {
    q: 'Kako funkcionira plaćanje školarine i upis godine?',
    a: 'Školarina se definira odlukom Senata Sveučilišta Jurja Dobrile u Puli za svaku akademsku godinu. Mogućnost obročnog plaćanja regulirana je aktima Sveučilišta Jurja Dobrile u Puli, uz generiranje uplatnica na Studomatu. Prijave se provode kroz portal Postani-student za prijediplomski studij te studij.hr za diplomski studij. Studenti prijelaznici prijavljuju se izravno putem upisnog ureda FIPU-a.',
  },
  {
    q: 'Što ako zapnem s instalacijom razvojnog okruženja ili koda?',
    a: 'Svaki student ima pristup tjednim online konzultacijama s asistentima i profesorima, kao i službenom Google Chat kanalu kolegija gdje mentori i kolege pružaju tehničku pomoć oko postavljanja alata, biblioteka i repozitorija.',
  },
]

function getQuizResult(score) {
  if (score >= 7) return { icon: 'rocket_launch', iconBg: 'bg-surface-mint text-forest-dark', title: '🚀 Idealan si kandidat za online studij!', desc: 'Imaš sve što je potrebno — izvrsnu radnu disciplinu, tehničke preduvjete i motivaciju. Upiši se i započni svoju karijeru u programskom inženjerstvu na FIPU!' }
  if (score >= 5) return { icon: 'thumb_up', iconBg: 'bg-surface-mint text-forest-dark', title: '👍 Dobra baza za uspjeh!', desc: 'Uz malo dodatne organizacije vremena i pripremljenosti radnog prostora, online studij je pravo rješenje za tebe. FIPU profesori i mentori pružit će ti svu podršku.' }
  if (score >= 3) return { icon: 'fitness_center', iconBg: 'bg-surface-container-high text-unipu-blue', title: '💪 Ima prostora za napredak', desc: 'Razmisli o stavkama u kojima imaš poteškoća (vrijeme, tehnika ili disciplina) prije konačnog upisa. Preporučujemo da proučiš naš nastavni plan i alate.' }
  return { icon: 'help', iconBg: 'bg-error-subtle text-error-text', title: '🤔 Možda je klasični studij bolji izbor', desc: 'U ovom trenutku tvoje obveze ili tehnički uvjeti mogli bi predstavljati značajan izazov za online format. Razmotri redovni kontaktni studij informatike na FIPU u Puli.' }
}

export default function KvizModule() {
  // Checklist state
  const [activeTab, setActiveTab] = useState('hw')
  const [checked, setChecked] = useState(() => Object.fromEntries(ALL_ITEMS.map(i => [i.id, false])))

  const checkedCount = useMemo(() => Object.values(checked).filter(Boolean).length, [checked])
  const checkPct = Math.round((checkedCount / TOTAL) * 100)

  const toggleItem = id => setChecked(prev => ({ ...prev, [id]: !prev[id] }))

  let checkStatus, checkStatusClass
  if (checkedCount === TOTAL) { checkStatus = '✅ Spreman za studij (100%)'; checkStatusClass = 'text-forest-dark font-title-card' }
  else if (checkedCount >= 8) { checkStatus = `👍 Djelomično spremno (${checkPct}%)`; checkStatusClass = 'text-unipu-blue' }
  else { checkStatus = `Potrebno zadovoljiti uvjete (${checkPct}%)`; checkStatusClass = 'text-on-surface-variant' }

  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [quizDone, setQuizDone] = useState(false)

  const answerQuestion = (yes) => {
    const newScore = quizScore + (yes ? 1 : 0)
    const nextIndex = quizIndex + 1
    if (nextIndex < QUIZ_QUESTIONS.length) {
      setQuizScore(newScore)
      setQuizIndex(nextIndex)
    } else {
      setQuizScore(newScore)
      setQuizDone(true)
    }
  }

  const resetQuiz = () => { setQuizIndex(0); setQuizScore(0); setQuizDone(false) }

  const quizProgressPct = quizDone ? 100 : ((quizIndex + 1) / QUIZ_QUESTIONS.length) * 100
  const currentQ = QUIZ_QUESTIONS[quizIndex]
  const result = getQuizResult(quizScore)

  // FAQ state
  const [faqSearch, setFaqSearch] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  const filteredFaq = FAQ_ITEMS.filter(f =>
    (f.q + f.a).toLowerCase().includes(faqSearch.toLowerCase())
  )

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-surface-ice py-space-xl px-margin">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
            <h1 className="font-headline-lg text-headline-lg md:text-display-hero text-on-surface tracking-tight">
              Provjeri spremnost za <span className="text-forest-dark">FIPU Online</span> studij
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Online prijediplomski studij informatike zahtijeva tehničku opremljenost, digitalnu zrelost i visoku razinu samodiscipline. Riješi brzu interaktivnu provjeru i provjeri zadovoljavaš li akademske i tehničke preduvjete.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <a
                className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary hover:bg-forest-dark font-label-lg text-label-lg transition-all shadow-sm"
                href="#kviz-sekcija"
              >
                <span>Započni kviz spremnosti</span>
                <span className="material-symbols-outlined text-[18px] text-fipu-cyan">arrow_downward</span>
              </a>
              <a
                className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-mint font-label-lg text-label-lg transition-colors shadow-sm"
                href="#tehnicka-lista"
              >
                <span>Minimalni tehnički uvjeti</span>
                <span className="material-symbols-outlined text-[18px] text-forest-dark">verified</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-lowest p-space-md">
              <div className="relative w-full h-[320px] rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Student informatike pri studiranju"
                  src="/images/study-writing.jpg"
                />
              </div>
              <div className="grid grid-cols-3 gap-space-xs pt-space-sm text-center">
                <div className="bg-surface-container-low p-space-xs rounded-lg">
                  <span className="font-headline-sm text-headline-sm text-forest-dark block">8</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">Pitanja kviza</span>
                </div>
                <div className="bg-surface-container-low p-space-xs rounded-lg">
                  <span className="font-headline-sm text-headline-sm text-unipu-blue block">12</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">Tehničkih uvjeta</span>
                </div>
                <div className="bg-surface-container-low p-space-xs rounded-lg">
                  <span className="font-headline-sm text-headline-sm text-on-surface block">3 min</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">Vrijeme rješavanja</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL CHECKLIST */}
      <section className="w-full py-space-xl px-margin bg-surface" id="tehnicka-lista">
        <div className="max-w-[1240px] mx-auto space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-forest-dark">Preduvjeti za izvođenje nastave</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
                💻 Kontrolna lista minimalnih uvjeta
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-2xl">
                Označite stavke koje posjedujete ili kojima raspolažete kako biste provjerili tehničku kompatibilnost s platformama Merlin LMS, Google Meet i razvojnim alatima.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm min-w-[240px]">
              <div className="flex items-center justify-between mb-1">
                <span className="font-label-md text-label-md text-on-surface-variant">Ukupna usklađenost</span>
                <span className="font-headline-sm text-headline-sm text-forest-dark">{checkedCount}/{TOTAL}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                <div
                  className="h-full bg-secondary transition-all duration-300"
                  style={{ width: `${checkPct}%` }}
                />
              </div>
              <p className={`font-body-sm text-body-sm mt-2 text-right ${checkStatusClass}`}>{checkStatus}</p>
            </div>
          </div>

          <div className="flex items-center gap-space-xs p-1 bg-surface-container-low rounded-full w-fit">
            {CHECKLIST_TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-space-md py-space-xs rounded-full font-label-lg text-label-lg transition-colors ${
                  activeTab === tab.id ? 'bg-surface-mint text-forest-dark' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {CHECKLIST_ITEMS[activeTab].map(item => (
              <div
                key={item.id}
                className={`bg-surface-container-lowest p-space-md rounded-2xl shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer ${checked[item.id] ? 'ring-2 ring-forest-dark/30' : ''}`}
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-xl bg-surface-container-low ${item.color} flex items-center justify-center`}>
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                  <input
                    className="w-5 h-5 accent-[#10B981] rounded cursor-pointer"
                    type="checkbox"
                    checked={checked[item.id]}
                    onChange={() => toggleItem(item.id)}
                    onClick={e => e.stopPropagation()}
                  />
                </div>
                <h3 className="font-title-card text-title-card text-on-surface mt-space-md">{item.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{item.text}</p>
                <div className="mt-space-md pt-space-xs flex items-center gap-space-xs text-forest-dark font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[16px]">{checked[item.id] ? 'task_alt' : 'verified'}</span>
                  <span>{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIZ SECTION */}
      <section className="w-full py-space-xl px-margin bg-surface-ice" id="kviz-sekcija">
        <div className="max-w-[1000px] mx-auto space-y-space-lg">
          <div className="text-center max-w-2xl mx-auto space-y-space-xs">
            <span className="bg-surface-mint text-forest-dark font-badge-caps text-badge-caps px-space-md py-space-xs rounded-full uppercase tracking-wider inline-block">
              Službena evaluacija spremnosti
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              🤔 Kviz samoprocjene spremnosti (8 pitanja)
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Odgovorite iskreno na sljedećih 8 pitanja kako biste saznali jeste li spremni za dinamičan ritam online studiranja informatike na FIPU.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-3xl p-space-lg md:p-space-xl shadow-lg relative overflow-hidden">
            {/* Progress bar */}
            <div className="w-full mb-space-lg">
              <div className="flex items-center justify-between font-label-md text-label-md text-on-surface-variant mb-space-xs">
                <span>{quizDone ? 'Završena evaluacija' : `Pitanje ${quizIndex + 1} od ${QUIZ_QUESTIONS.length}`}</span>
                <span className="font-title-card text-title-card text-forest-dark">
                  {quizDone ? `Konačan zbroj: ${quizScore}` : `Bodovi: ${quizScore}`}
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                <div
                  className="h-full bg-secondary transition-all duration-300"
                  style={{ width: `${quizProgressPct}%` }}
                />
              </div>
            </div>

            {/* Quiz card */}
            {!quizDone ? (
              <div className="space-y-space-lg min-h-[260px] flex flex-col justify-between">
                <div className="space-y-space-sm">
                  <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-md bg-surface-container-low text-on-surface-variant font-code-inline text-code-inline">
                    <span className="material-symbols-outlined text-[14px] text-unipu-blue">help</span>
                    <span>{currentQ.category}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{currentQ.text}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{currentQ.hint}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-md">
                  <button
                    className="flex items-center justify-between p-space-md rounded-2xl bg-surface-mint hover:bg-secondary-fixed transition-all text-left shadow-sm group"
                    onClick={() => answerQuestion(true)}
                  >
                    <div className="flex items-center gap-space-md">
                      <span className="w-10 h-10 rounded-xl bg-forest-dark text-on-secondary flex items-center justify-center font-title-card text-title-card">DA</span>
                      <div>
                        <span className="font-title-card text-title-card text-forest-dark block">Apsolutno / Mogu</span>
                        <span className="font-body-sm text-body-sm text-on-secondary-fixed-variant">Potpuno se prepoznajem u ovome</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-forest-dark group-hover:translate-x-1 transition-transform">check_circle</span>
                  </button>
                  <button
                    className="flex items-center justify-between p-space-md rounded-2xl bg-error-subtle hover:bg-error-container transition-all text-left shadow-sm group"
                    onClick={() => answerQuestion(false)}
                  >
                    <div className="flex items-center gap-space-md">
                      <span className="w-10 h-10 rounded-xl bg-error-text text-on-error flex items-center justify-center font-title-card text-title-card">NE</span>
                      <div>
                        <span className="font-title-card text-title-card text-error-text block">Nisam siguran / Ne</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Trenutno imam ograničenja</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-error-text group-hover:translate-x-1 transition-transform">cancel</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center space-y-space-md py-space-md">
                <div className={`w-20 h-20 rounded-full ${result.iconBg} flex items-center justify-center shadow-inner`}>
                  <span className="material-symbols-outlined text-[44px]">{result.icon}</span>
                </div>
                <div className="space-y-space-xs max-w-lg">
                  <span className="font-badge-caps text-badge-caps uppercase tracking-wider px-space-md py-space-xs rounded-full bg-surface-container-low text-on-surface-variant inline-block">
                    Tvoj rezultat: {quizScore} / 8
                  </span>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface">{result.title}</h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">{result.desc}</p>
                </div>
                <div className="pt-space-md flex flex-wrap items-center justify-center gap-space-md">
                  <a
                    className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary hover:bg-forest-dark font-label-lg text-label-lg transition-colors shadow-sm"
                    href="https://fipu.unipu.hr/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>Službeni upisni postupak</span>
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                  <button
                    className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-container-low hover:bg-surface-mint text-on-surface-variant hover:text-forest-dark font-label-lg text-label-lg transition-colors"
                    onClick={resetQuiz}
                  >
                    <span className="material-symbols-outlined text-[18px]">replay</span>
                    <span>Ponovi kviz</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full py-space-xl px-margin bg-surface">
        <div className="max-w-[1240px] mx-auto space-y-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-forest-dark">Baza znanja &amp; Podrška</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
                ❓ Česta pitanja i službene smjernice
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Odgovori na najčešće upite budućih i novoupisanih studenata online studija.
              </p>
            </div>
            <div className="relative w-full md:w-80">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px]">search</span>
              <input
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-forest-dark shadow-sm"
                placeholder="Pretraži pitanja (npr. ispiti, školarina)..."
                type="text"
                value={faqSearch}
                onChange={e => setFaqSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            {/* FAQ list */}
            <div className="lg:col-span-8 space-y-space-sm">
              {filteredFaq.length === 0 && (
                <div className="text-on-surface-variant font-body-md text-body-md py-space-lg text-center">
                  Nema rezultata za "{faqSearch}"
                </div>
              )}
              {filteredFaq.map((f, i) => {
                const realIndex = FAQ_ITEMS.indexOf(f)
                const isOpen = openFaq === realIndex
                return (
                  <div key={realIndex} className={`bg-surface-container-lowest rounded-2xl p-space-md shadow-sm transition-colors ${isOpen ? 'bg-surface-mint/30' : ''}`}>
                    <button
                      className="w-full flex items-center justify-between text-left gap-space-md"
                      onClick={() => setOpenFaq(isOpen ? null : realIndex)}
                    >
                      <span className="font-title-card text-title-card text-on-surface">{f.q}</span>
                      <span className={`material-symbols-outlined text-outline-variant transition-transform ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
                    </button>
                    {isOpen && (
                      <div className="pt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {f.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Contact sidebar */}
            <div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-3xl shadow-md space-y-space-md">
              <div className="space-y-space-xs">
                <h3 className="font-headline-md text-headline-md text-on-surface">Trebate izravnu pomoć?</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Naš ured i koordinatori online studija stoje vam na raspolaganju za sva administrativna pitanja.
                </p>
              </div>
              <div className="space-y-space-sm pt-space-xs">
                {[
                  { icon: 'location_on', color: 'text-forest-dark', label: 'Fakultet informatike u Puli', sub: 'Ulica Alda Negrija 6, 52100 Pula, Hrvatska' },
                  { icon: 'call', color: 'text-unipu-blue', label: 'Telefon ureda', sub: '+385 52 877 438' },
                  { icon: 'mail', color: 'text-forest-dark', label: 'Službeni e-mail', sub: 'fipu-ured@unipu.hr', href: 'mailto:fipu-ured@unipu.hr' },
                  { icon: 'schedule', color: 'text-outline', label: 'Uredovno radno vrijeme', sub: 'Pon – Pet: 09:00 – 14:00 sati' },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-space-sm p-space-sm rounded-xl bg-surface-container-low">
                    <span className={`material-symbols-outlined ${c.color} text-[22px] mt-0.5`}>{c.icon}</span>
                    <div>
                      <span className="font-label-md text-label-md text-on-surface block">{c.label}</span>
                      {c.href
                        ? <a className="font-body-sm text-body-sm text-unipu-blue hover:underline" href={c.href}>{c.sub}</a>
                        : <span className="font-body-sm text-body-sm text-on-surface-variant">{c.sub}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-space-xs">
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactFooter />
    </div>
  )
}
