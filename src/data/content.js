export const stats = [
  { value: 400, suffix: '+', label: 'studenata' },
  { value: 50, suffix: '/god', label: 'diplomanata' },
  { value: 2018, suffix: '', label: 'godina osnivanja' },
  { value: 1, suffix: '.', label: 'online CS studij u HR' },
]

export const milestones = [
  'ICT Istra, Let\'s Grow konferencija, CARNET projekt e-Sveučilišta',
  'EDIH Adria — European Digital Innovation Hub konzorcij',
  'Međunarodna konferencija SISY s Obuda University',
  'FIPUlab projekti (Cenosco, Aquapod…)',
  'Digitalna strategija UNIPU i ustroj ICT UNIPU',
  'Centar za primjenu umjetne inteligencije (s CARNET-om)',
  '2023./24. — pokrenut 1. online sveučilišni studij informatike u HR',
]

export const programs = [
  {
    id: 'prijediplomski',
    name: 'Prijediplomski studij',
    title: 'Prijediplomski sveučilišni studij Informatika',
    subtitle: 'Online izvanredni studij',
    duration: '3 godine',
    ects: 180,
    tuition: '2.000 EUR / god.',
    degree: 'sveučilišni prvostupnik informatike',
    color: '#5DADE2',
    outcomes: [
      'Poznavanje temeljnih koncepata računalnih sustava i IKT',
      'Napredno poznavanje programskih jezika',
      'Modeliranje i administriranje relacijskih baza podataka',
      'Projektiranje kompleksnih poslovnih informacijskih sustava',
      'Primjena matematičkih i statističkih tehnika',
      'Poznavanje arhitekture komunikacijskih mreža',
    ],
    semesters: [
      {
        year: 1, sem: 1,
        courses: [
          { name: 'Osnove IKT', ects: 6, type: 'obvezni' },
          { name: 'Multimedijalni sustavi', ects: 6, type: 'obvezni' },
          { name: 'Programiranje', ects: 6, type: 'obvezni' },
          { name: 'Logika i diskretna matematika', ects: 4, type: 'obvezni' },
          { name: 'Diferencijalni i integralni račun', ects: 2, type: 'obvezni' },
          { name: 'Osnove podatkovne znanosti', ects: 6, type: 'obvezni' },
        ],
      },
      {
        year: 1, sem: 2,
        courses: [
          { name: 'Geometrija i linearna algebra', ects: 3, type: 'obvezni' },
          { name: 'Matematička analiza', ects: 3, type: 'obvezni' },
          { name: 'Baze podataka 1', ects: 6, type: 'obvezni' },
          { name: 'Informacijski sustavi', ects: 6, type: 'obvezni' },
          { name: 'Operacijski sustavi', ects: 6, type: 'obvezni' },
          { name: 'Programiranje u skriptnim jezicima', ects: 6, type: 'obvezni' },
        ],
      },
      {
        year: 2, sem: 3,
        courses: [
          { name: 'Baze podataka 2', ects: 6, type: 'obvezni' },
          { name: 'Strukture podataka i algoritmi', ects: 6, type: 'obvezni' },
          { name: 'Mrežni sustavi', ects: 6, type: 'obvezni' },
          { name: 'Statistika', ects: 6, type: 'obvezni' },
          { name: 'Računovodstvo u virtualnom okruženju', ects: 6, type: 'izborni' },
          { name: 'Osnove ekonomije', ects: 6, type: 'izborni' },
          { name: 'Geoinformacijski sustavi', ects: 6, type: 'izborni' },
        ],
      },
      {
        year: 2, sem: 4,
        courses: [
          { name: 'Objektno orijentirano programiranje', ects: 6, type: 'obvezni' },
          { name: 'Umjetna inteligencija', ects: 6, type: 'obvezni' },
          { name: 'Programsko inženjerstvo', ects: 6, type: 'obvezni' },
          { name: 'Šifre i kodovi', ects: 6, type: 'obvezni' },
          { name: 'Sustavi temeljeni na znanju', ects: 6, type: 'izborni' },
          { name: 'Računovodstveni informacijski sustavi', ects: 6, type: 'izborni' },
          { name: 'Teorija informacija', ects: 6, type: 'izborni' },
        ],
      },
      {
        year: 3, sem: 5,
        courses: [
          { name: 'Upravljanje poslovnim procesima', ects: 6, type: 'obvezni' },
          { name: 'Operacijska istraživanja', ects: 6, type: 'obvezni' },
          { name: 'Web aplikacije', ects: 6, type: 'obvezni' },
          { name: 'Praktikum', ects: 6, type: 'obvezni' },
          { name: 'Računovodstvo u virtualnom okruženju', ects: 6, type: 'izborni' },
          { name: 'Geoinformacijski sustavi', ects: 6, type: 'izborni' },
          { name: 'Stručna praksa', ects: 6, type: 'izborni' },
        ],
      },
      {
        year: 3, sem: 6,
        courses: [
          { name: 'Dizajn i programiranje računalnih igara', ects: 6, type: 'obvezni' },
          { name: 'Programiranje na Java virtualnom stroju', ects: 6, type: 'obvezni' },
          { name: 'Skladišta i rudarenje podataka', ects: 6, type: 'obvezni' },
          { name: 'Završni rad', ects: 6, type: 'obvezni' },
          { name: 'Sustavi temeljeni na znanju', ects: 6, type: 'izborni' },
          { name: 'Računovodstveni informacijski sustavi', ects: 6, type: 'izborni' },
          { name: 'Teorija informacija', ects: 6, type: 'izborni' },
        ],
      },
    ],
  },
  {
    id: 'diplomski-inf',
    name: 'Diplomski — Informatika',
    title: 'Diplomski sveučilišni studij Informatika',
    subtitle: 'Smjer Informatika — Online izvanredni studij',
    duration: '2 godine',
    ects: 120,
    tuition: '3.000 EUR / god.',
    degree: 'magistar informatike (mag. inf.)',
    color: '#2E86AB',
    outcomes: [
      'Suvremene tehnike programiranja i mobilne aplikacije',
      'Dinamičke web aplikacije i jezični procesori',
      'Virtualizacija OS-a, kriptografija, baze znanja',
      'Razvoj poslovnih informacijskih sustava',
      'Napredni algoritmi i primijenjena statistika',
      'GIS sustavi i sustavi elektroničkog učenja',
    ],
    semesters: [
      {
        year: 1, sem: 1,
        courses: [
          { name: 'IT Management', ects: 6, type: 'obvezni' },
          { name: 'Modeli računarstva', ects: 6, type: 'obvezni' },
          { name: 'Mobilne aplikacije', ects: 6, type: 'obvezni' },
          { name: 'Raspodijeljeni sustavi', ects: 6, type: 'obvezni' },
          { name: 'Upravljanje projektima', ects: 6, type: 'izborni' },
          { name: 'Geoinformacijski sustavi', ects: 6, type: 'izborni' },
          { name: 'Stručna praksa (diplomski)', ects: 6, type: 'izborni' },
        ],
      },
      {
        year: 1, sem: 2,
        courses: [
          { name: 'Neuronske mreže i duboko učenje', ects: 6, type: 'obvezni' },
          { name: 'Analiza podataka i obrada informacija', ects: 6, type: 'obvezni' },
          { name: 'Modeliranje i simulacije', ects: 6, type: 'obvezni' },
          { name: 'Interakcija čovjeka i računala', ects: 6, type: 'obvezni' },
          { name: 'Sustavi elektroničkog učenja', ects: 6, type: 'izborni' },
          { name: 'Blockchain aplikacije', ects: 6, type: 'izborni' },
          { name: 'Forenzičko računovodstvo', ects: 6, type: 'izborni' },
          { name: 'Robotika', ects: 6, type: 'izborni' },
        ],
      },
      {
        year: 2, sem: 3,
        courses: [
          { name: 'Internet stvari', ects: 6, type: 'obvezni' },
          { name: 'Funkcijsko programiranje', ects: 6, type: 'obvezni' },
          { name: 'Napredni algoritmi i strukture podataka', ects: 6, type: 'obvezni' },
          { name: 'Razvoj IT rješenja', ects: 6, type: 'obvezni' },
          { name: 'Upravljanje projektima', ects: 6, type: 'izborni' },
          { name: 'Geoinformacijski sustavi', ects: 6, type: 'izborni' },
          { name: 'Stručna praksa (diplomski)', ects: 6, type: 'izborni' },
        ],
      },
      {
        year: 2, sem: 4,
        courses: [
          { name: 'Diplomski rad', ects: 30, type: 'obvezni' },
        ],
      },
    ],
  },
  {
    id: 'diplomski-nast',
    name: 'Diplomski — Nastavni',
    title: 'Diplomski sveučilišni studij Informatika',
    subtitle: 'Nastavni smjer — Online izvanredni studij',
    duration: '2 godine',
    ects: 120,
    tuition: '3.000 EUR / god.',
    degree: 'magistar edukacije informatike (mag. educ. inf.)',
    color: '#1B4F72',
    outcomes: [
      'Pedagoška komunikacija i suvremene kompetencije nastavnika',
      'Obrazovanje posebnih skupina i psihologija učenja',
      'Stolno izdavaštvo, mrežne tehnologije i AI u nastavi',
      'Sustavi obrazovanja na daljinu i e-learning',
      'Menadžment obrazovnih organizacija',
      'Ekologija i sociologija obrazovanja',
    ],
    semesters: [
      {
        year: 1, sem: 1,
        courses: [
          { name: 'Digitalne kompetencije u obrazovanju', ects: 6, type: 'obvezni' },
          { name: 'Obrazovanje posebnih skupina', ects: 6, type: 'obvezni' },
          { name: 'Didaktika', ects: 6, type: 'obvezni' },
          { name: 'Pedagogija', ects: 6, type: 'obvezni' },
          { name: 'Upravljanje projektima', ects: 6, type: 'izborni' },
          { name: 'IT Management', ects: 6, type: 'izborni' },
          { name: 'Modeli računarstva', ects: 6, type: 'izborni' },
        ],
      },
      {
        year: 1, sem: 2,
        courses: [
          { name: 'Metodika edukacije informatike 1', ects: 6, type: 'obvezni' },
          { name: 'Sustavi elektroničkog učenja', ects: 6, type: 'obvezni' },
          { name: 'Praktikum za edukatore informatike', ects: 6, type: 'obvezni' },
          { name: 'Interakcija čovjeka i računala', ects: 6, type: 'izborni' },
          { name: 'Modeliranje i simulacije', ects: 6, type: 'izborni' },
          { name: 'Neuronske mreže i duboko učenje', ects: 6, type: 'izborni' },
        ],
      },
      {
        year: 2, sem: 3,
        courses: [
          { name: 'IT i edukacija', ects: 6, type: 'obvezni' },
          { name: 'Metodika edukacije informatike 2 s praksom', ects: 6, type: 'obvezni' },
          { name: 'Praksa edukacije informatike', ects: 6, type: 'obvezni' },
          { name: 'Funkcijsko programiranje', ects: 6, type: 'izborni' },
          { name: 'Internet stvari', ects: 6, type: 'izborni' },
          { name: 'Napredni algoritmi i strukture podataka', ects: 6, type: 'izborni' },
        ],
      },
      {
        year: 2, sem: 4,
        courses: [
          { name: 'Diplomski rad', ects: 30, type: 'obvezni' },
        ],
      },
    ],
  },
]

export const journeys = [
  {
    id: 'iskustvo',
    title: 'Iskustvo online studiranja',
    subtitle: 'Od informiranja do diplome',
    image: '/images/journeys/journey-iskustvo.jpg',
    steps: [
      'Informiraj se o online studiju na web stranicama FIPU',
      'Upiši se na online studij',
      'Pohađaj kolegije u tekućoj akademskoj godini',
      'Položi ispite u tekućoj akademskoj godini',
      'Upiši sljedeću godinu',
      'Studij završen — diplomirani informatičar!',
    ],
  },
  {
    id: 'studiranje',
    title: 'Pohađanje kolegija',
    subtitle: 'Kako napredovati kroz gradivo',
    image: '/images/journeys/journey-studiranje.jpg',
    steps: [
      'Izaberi kolegij na Merlinu',
      'Gledaj video lekcije',
      'Čitaj pripremljene materijale',
      'Čitaj i gledaj dodatne preporučene materijale',
      'Procjeni svoje znanje pomoću automatiziranih kvizova',
      'Pristupi ispitu',
    ],
  },
  {
    id: 'upis',
    title: 'Prijava na online studij',
    subtitle: 'Korak-po-korak do upisa',
    image: '/images/journeys/journey-upis.jpg',
    steps: [
      'Informiraj se putem chatboxa i ureda za studente',
      'Prijavi se za upis na UNIPU web stranici',
      'Potpiši studentski ugovor i plati upisninu',
      'Zaprimio si digitalni identitet i instrukcije za početak studija',
      'Online studij uspješno upisan!',
    ],
  },
  {
    id: 'problemi',
    title: 'Rješavanje problema',
    subtitle: 'Administrativne poteškoće',
    image: '/images/journeys/journey-problemi.jpg',
    steps: [
      'Pojavio se administrativni problem',
      'Pošalji upit referadi što je prije moguće',
      'Odgovor u roku 48 sati (ovisno o danu u tjednu)',
      'Po potrebi pošalji dodatne dokumente',
      'Administrativni problem riješen!',
    ],
  },
  {
    id: 'ispiti',
    title: 'Polaganje ispita',
    subtitle: 'Od prijave do ECTS bodova',
    image: '/images/journeys/journey-ispiti.jpg',
    steps: [
      'Prijavi se na ispitni rok',
      'Ispuni obveze predviđene IPN-om kolegija',
      'Položi pismeni, usmeni ili završni ispit kolegija (online)',
      'Ostvaren broj ECTS bodova!',
    ],
  },
]

export const techRequirements = {
  hardware: [
    'Moderan PC ili Laptop (ne stariji od 5 godina)',
    'Pristup internetu — širokopojasni, min. 10 Mbit/s download, 5 Mbit/s upload, neograničen paket',
    'Namjenska web kamera (vanjska, npr. USB)',
    'Slušalice i mikrofon',
  ],
  software: [
    'OS: Windows 10+, macOS 12+, GNU/Linux (Debian, Ubuntu)',
    'Web preglednik: Chrome, Firefox, Safari',
    'Preglednik PDF dokumenata',
    'Visual Studio Code',
    'Python 3.10+, Jupyter (ili Anaconda)',
    'C++ radno okruženje (LLVM, GCC)',
  ],
  digitalSkills: [
    'Informacijska/podatkovna pismenost (ECDL osnovna razina)',
    'Komunikacija i suradnja online',
    'Stvaranje digitalnog sadržaja',
    'Sigurnost i zaštita podataka',
    'Rješavanje problema (problem-solving skills)',
  ],
}

export const platforms = [
  {
    name: 'Merlin',
    desc: 'Sustav za e-učenje (održava Srce). Sve e-kolegije, materijale, video lekcije, kvizove i ispite pronalaziš ovdje.',
    icon: '📚',
    url: 'https://merlin.srce.hr',
  },
  {
    name: 'Google Workspace for Education',
    desc: 'Gmail, Google Meet (sinkrona nastava), Google Calendar (raspored), Google Chat (komunikacija student–profesor).',
    icon: '🎓',
    url: null,
  },
  {
    name: 'Studomat / ISVU',
    desc: 'Evidencija studenata, upis kolegija, ispitni rokovi, ocjene i administrativni podaci.',
    icon: '🏛️',
    url: 'https://www.isvu.hr',
  },
  {
    name: 'Google Calendar',
    desc: 'Raspored sinkrone nastave — predavanja i vježbe od 18h nadalje, radnim danima.',
    icon: '📅',
    url: null,
  },
]

export const techStack = [
  { category: 'Programski jezici', items: ['Python', 'JavaScript', 'Java / Kotlin', 'C++', 'R'] },
  { category: 'Web & Mobile', items: ['Vue.js', 'Express', 'Android / iOS', 'HTML5 / CSS3'] },
  { category: 'Baze podataka', items: ['PostgreSQL', 'MySQL / MariaDB', 'Oracle', 'MongoDB'] },
  { category: 'Data Science & AI', items: ['TensorFlow', 'Jupyter', 'OpenCV', 'Scikit-learn'] },
  { category: 'Poslovni sustavi', items: ['Camunda', 'Apromore', 'Signavio', 'Blockchain (Ethereum)'] },
  { category: 'Platforme', items: ['Google Workspace', 'Merlin / Moodle', 'CARNET', 'GitHub'] },
]

export const enrollmentSteps = [
  {
    step: 1,
    title: 'Informiraj se',
    desc: 'Posjeti web stranicu FIPU i UNIPU. Pošalji upit na fipu-ured@unipu.hr ili nazvati +385/52-877-438.',
  },
  {
    step: 2,
    title: 'Podnesi prijavu',
    desc: 'Svake godine objavljuju se svježe upute za upis na unipu.hr/upisi. Slijedi aktualni postupak za tekuću akademsku godinu.',
  },
  {
    step: 3,
    title: 'Potpiši ugovor',
    desc: 'Nakon prihvaćanja, potpisuješ studentski ugovor i plaćaš upisninu (moguća obročna otplata).',
  },
  {
    step: 4,
    title: 'Dobij digitalni identitet',
    desc: 'Zaprimaš UNIPU e-mail, pristup Merlinu, Google Workspaceu i uputama za početak studija.',
  },
  {
    step: 5,
    title: 'Kreni s učenjem!',
    desc: 'Prijaviš se na Merlin, otvoriš kolegije 1. semestra i kreneš self-paced studirati.',
  },
]

export const selfAssessmentQuestions = [
  'Zainteresiran/a sam za online studij i spreman/a sam preuzeti odgovornost za vlastito učenje?',
  'Imam posebno, mirno mjesto gdje mogu učiti bez ometanja?',
  'Imam pristup modernom računalu i stabilnom internetu (min. 10 Mbit/s)?',
  'Imam dobre vještine čitanja, pisanja i pisane komunikacije?',
  'Osjećam se sigurno u pisanoj i usmenoj online komunikaciji?',
  'Imam dobre tehnološke vještine izvan društvenih medija (instalacija softvera, rad s datotekama...)?',
  'Imam podršku obitelji i okoline za online studiranje?',
  'Mogu svaki dan posvetiti 2-4 sata online studiju uz redovni posao?',
]

export const benefits = [
  {
    icon: '🌍',
    title: 'Studij iz bilo kojeg mjesta',
    desc: 'Učiš iz svog doma, ureda, s plaže — bez preseljenja u Pulu.',
  },
  {
    icon: '⏰',
    title: 'Self-paced učenje',
    desc: 'Nema obvezne sinkrone nastave. Sam upravljaš svojim vremenom učenja.',
  },
  {
    icon: '💼',
    title: 'Uz redovni posao',
    desc: 'Studij je dizajniran za zaposlene. Sinkrona nastava, ako je ima, od 18h nadalje.',
  },
  {
    icon: '🎓',
    title: 'Puno vrijedna diploma',
    desc: 'Ista diploma kao redovni studij — sveučilišni prvostupnik ili magistar informatike.',
  },
  {
    icon: '🤝',
    title: 'Direktan kontakt s industrijom',
    desc: 'ICT Istra, Infobip i partner-kompanije. Stručna praksa i mentori iz prakse.',
  },
  {
    icon: '🤖',
    title: 'Moderni curriculum',
    desc: 'AI, IoT, Blockchain, Data Science — programi kontinuirano usklađeni s tržištem.',
  },
]

export const teachingForms = [
  {
    letter: 'P',
    name: 'Predavanja',
    badge: 'Sinkrono · Google Meet',
    mandatory: false,
    color: '#5DADE2',
    desc: 'Termini objavljeni u Google Calendaru. Nije obvezno za online studente. Snimke mogu biti dostupne naknadno.',
    detail: 'Sinkrona predavanja odvijaju se putem Google Meet-a. Nastavnik u stvarnom vremenu prezentira gradivo. Za online studente prisustvo NIJE obvezno — ali je preporučeno za postavljanje pitanja.',
  },
  {
    letter: 'V',
    name: 'Vježbe',
    badge: 'Sinkrono · Google Meet',
    mandatory: false,
    color: '#2E86AB',
    desc: 'Termini objavljeni u Google Calendaru. Nije obvezno za online studente. Snimke mogu biti dostupne naknadno.',
    detail: 'Praktični rad uz vodstvo nastavnika. Online studenti prate vježbe putem Google Meet-a. Fokus je na primjeni gradiva i rješavanju zadataka.',
  },
  {
    letter: 'A',
    name: 'Asinkrono',
    badge: 'Vlastiti tempo · Merlin',
    mandatory: true,
    color: '#00C9A7',
    desc: 'Diskusije, materijali, konzultacije na forumu Merlina. Ključni dio online studija — self-paced.',
    detail: 'Srce online studiranja. Na Merlinu su svi materijali, video lekcije, kvizovi za samoprocjenu i forum. Učiš kada ti odgovara — nema fiksnih termina.',
  },
]

export const synchronousRules = [
  { icon: '🗓️', title: 'Fleksibilnost prisustva', desc: 'Prisustvo nije obvezno. Nastoj nas obavijestiti ako ne možeš doći, ali ne brinite ako to nije izvedivo.' },
  { icon: '⏰', title: 'Pravovremenost', desc: 'Dolazak na vrijeme odražava međusobno poštovanje i pomaže da iskoristimo zajedničko vrijeme maksimalno.' },
  { icon: '📷', title: 'Kamera uključena', desc: 'Potičemo da imaš kameru uključenu — pomaže u stvaranju osjećaja zajedništva i olakšava komunikaciju.' },
  { icon: '🎧', title: 'Tehnička spremnost', desc: 'Ispravno konfigurirane slušalice i mikrofon ključni su za fluidnu komunikaciju bez prekida.' },
  { icon: '🙋', title: 'Aktivno sudjelovanje', desc: 'Ohrabrujemo aktivno sudjelovanje — postavi pitanje, odgovori, komentiraj diskusiju.' },
  { icon: '🚫', title: 'Bez snimanja', desc: 'Snimanje nastave nije dopušteno radi zaštite privatnosti svih sudionika.' },
]

export const merlinContents = [
  'Osnovne informacije o nastavnicima s kontaktima',
  'Kratak opis i ishodi učenja kolegija',
  'Prihvaćeni izvedbeni plan predmeta (IPN)',
  'Raspis po temama — video predavanja, materijali, primjeri testova',
  'Oblici samoprocjene: online kvizovi, zbirka zadataka s rješenjima',
  'Linkovi na sve third-party resurse koji se koriste u kolegiju',
]

export const ipnTable = [
  { activity: 'Predavanja',       outcomes: '1–5', topics: '1–12', hours: 60,  ects: 2.0, share: 0  },
  { activity: 'Vježbe',           outcomes: '3–5', topics: '5–12', hours: 30,  ects: 1.0, share: 0  },
  { activity: 'Samostalni zadaci',outcomes: '1–5', topics: '1–12', hours: 15,  ects: 0.5, share: 10 },
  { activity: 'Projekt',          outcomes: '3–5', topics: '5–12', hours: 15,  ects: 0.5, share: 40 },
  { activity: 'Završni ispit',    outcomes: '1–5', topics: '1–12', hours: 60,  ects: 2.0, share: 50 },
]

export const navItems = [
  { id: 'intro',        label: 'Uvod',          icon: '🏠', sub: 'O FIPU i studiju' },
  { id: 'programs',     label: 'Programi',      icon: '🎓', sub: 'Prijediplomski & diplomski' },
  { id: 'teaching',     label: 'Nastava',       icon: '📡', sub: 'Org., IPN, Merlin' },
  { id: 'journeys',     label: 'Putovanje',     icon: '🗺️', sub: 'Dijagrami procesa' },
  { id: 'platforms',    label: 'Platforme',     icon: '🛠️', sub: 'Alati & tech stack' },
  { id: 'requirements', label: 'Zahtjevi',      icon: '💻', sub: 'Hardver i vještine' },
  { id: 'enrollment',   label: 'Upis',          icon: '📝', sub: 'Koraci do upisa' },
  { id: 'quiz',         label: 'Samoprocjena',  icon: '🤔', sub: 'Je li online za tebe?' },
  { id: 'contact',      label: 'Kontakt',       icon: '📬', sub: 'Pronađi nas' },
]
