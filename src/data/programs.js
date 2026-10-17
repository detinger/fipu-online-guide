export const programs = [
  {
    id: 'prijediplomski',
    label: 'Prijediplomski',
    labelFull: 'Prijediplomski sveučilišni studij Informatika',
    type: 'Prijediplomski sveučilišni',
    duration: '3 godine',
    ects: '180 ECTS',
    fee: '2.000 EUR/god.',
    title: 'sveučilišni prvostupnik informatike',
    description:
      'Studij Informatike omogućava stjecanje širokog skupa znanja i vještina iz informatike te sposobnost njihove primjene u praksi. Prva online sveučilišna studijska programa Informatike u Hrvatskoj.',
    semesters: [
      {
        num: 1,
        year: '1. godina — Zimski semestar',
        ects: 30,
        courses: [
          { name: 'Osnove IKT', ects: 6 },
          { name: 'Multimedijalni sustavi', ects: 6 },
          { name: 'Programiranje', ects: 6 },
          { name: 'Logika i diskretna matematika', ects: 4 },
          { name: 'Diferencijalni i integralni račun', ects: 2 },
          { name: 'Osnove podatkovne znanosti', ects: 6 },
        ],
      },
      {
        num: 2,
        year: '1. godina — Ljetni semestar',
        ects: 30,
        courses: [
          { name: 'Baze podataka 1', ects: 6 },
          { name: 'Geometrija i linearna algebra', ects: 3 },
          { name: 'Informacijski sustavi', ects: 6 },
          { name: 'Matematička analiza', ects: 3 },
          { name: 'Operacijski sustavi', ects: 6 },
          { name: 'Programiranje u skriptnim jezicima', ects: 6 },
        ],
      },
      {
        num: 3,
        year: '2. godina — Zimski semestar',
        ects: 30,
        courses: [
          { name: 'Baze podataka 2', ects: 6 },
          { name: 'Strukture podataka i algoritmi', ects: 6 },
          { name: 'Mrežni sustavi', ects: 6 },
          { name: 'Statistika', ects: 6 },
          {
            name: 'Izborni predmet I',
            ects: 6,
            elective: true,
            options: ['Računovodstvo u virtualnom okruženju', 'Osnove ekonomije', 'Geoinformacijski sustavi'],
          },
        ],
      },
      {
        num: 4,
        year: '2. godina — Ljetni semestar',
        ects: 30,
        courses: [
          { name: 'Objektno orijentirano programiranje', ects: 6 },
          { name: 'Umjetna inteligencija', ects: 6 },
          { name: 'Programsko inženjerstvo', ects: 6 },
          { name: 'Šifre i kodovi', ects: 6 },
          {
            name: 'Izborni predmet II',
            ects: 6,
            elective: true,
            options: ['Sustavi temeljeni na znanju', 'Računovodstveni informacijski sustavi', 'Teorija informacija'],
          },
        ],
      },
      {
        num: 5,
        year: '3. godina — Zimski semestar',
        ects: 30,
        courses: [
          { name: 'Upravljanje poslovnim procesima', ects: 6 },
          { name: 'Operacijska istraživanja', ects: 6 },
          { name: 'Web aplikacije', ects: 6 },
          { name: 'Praktikum', ects: 6 },
          {
            name: 'Izborni predmet III',
            ects: 6,
            elective: true,
            options: ['Računovodstvo u virtualnom okruženju', 'Geoinformacijski sustavi', 'Stručna praksa'],
          },
        ],
      },
      {
        num: 6,
        year: '3. godina — Ljetni semestar',
        ects: 30,
        courses: [
          { name: 'Dizajn i programiranje računalnih igara', ects: 6 },
          { name: 'Programiranje na Java virtualnom stroju', ects: 6 },
          { name: 'Skladišta i rudarenje podataka', ects: 6 },
          { name: 'Završni rad', ects: 6 },
          {
            name: 'Izborni predmet IV',
            ects: 6,
            elective: true,
            options: ['Sustavi temeljeni na znanju', 'Računovodstveni informacijski sustavi', 'Teorija informacija'],
          },
        ],
      },
    ],
  },
  {
    id: 'diplomski-informatika',
    label: 'Diplomski — Informatika',
    labelFull: 'Diplomski sveučilišni studij Informatika (smjer Informatika)',
    type: 'Diplomski sveučilišni',
    duration: '2 godine',
    ects: '120 ECTS',
    fee: '3.000 EUR/god.',
    title: 'magistar informatike (mag. inf.)',
    description:
      'Cilj diplomskog sveučilišnog studija je obrazovati vrsne stručnjake iz raznih informatičkih disciplina uz dobro razumijevanje poslovnog svijeta koji primjenjuje IKT rješenja.',
    semesters: [
      {
        num: 1,
        year: '1. godina — Zimski semestar',
        ects: 30,
        courses: [
          { name: 'IT Management', ects: 6 },
          { name: 'Modeli računarstva', ects: 6 },
          { name: 'Mobilne aplikacije', ects: 6 },
          { name: 'Raspodijeljeni sustavi', ects: 6 },
          {
            name: 'Izborni predmet I',
            ects: 6,
            elective: true,
            options: ['Upravljanje projektima', 'Geoinformacijski sustavi', 'Računovodstvo u virtualnom okruženju', 'Stručna praksa (diplomski)'],
          },
        ],
      },
      {
        num: 2,
        year: '1. godina — Ljetni semestar',
        ects: 30,
        courses: [
          { name: 'Neuronske mreže i duboko učenje', ects: 6 },
          { name: 'Analiza podataka i obrada informacija', ects: 6 },
          { name: 'Modeliranje i simulacije', ects: 6 },
          { name: 'Interakcija čovjeka i računala', ects: 6 },
          {
            name: 'Izborni predmet II (min. 2)',
            ects: 6,
            elective: true,
            options: ['Sustavi elektroničkog učenja', 'Blockchain aplikacije', 'Forenzičko računovodstvo', 'Sustavi temeljeni na znanju', 'Teorija informacija', 'Robotika'],
          },
        ],
      },
      {
        num: 3,
        year: '2. godina — Zimski semestar',
        ects: 30,
        courses: [
          { name: 'Internet stvari', ects: 6 },
          { name: 'Funkcijsko programiranje', ects: 6 },
          { name: 'Napredni algoritmi i strukture podataka', ects: 6 },
          { name: 'Razvoj IT rješenja', ects: 6 },
          {
            name: 'Izborni predmet III',
            ects: 6,
            elective: true,
            options: ['Upravljanje projektima', 'Geoinformacijski sustavi', 'Stručna praksa (diplomski)'],
          },
        ],
      },
      {
        num: 4,
        year: '2. godina — Ljetni semestar',
        ects: 30,
        courses: [{ name: 'Diplomski rad', ects: 30 }],
      },
    ],
  },
  {
    id: 'diplomski-nastavni',
    label: 'Diplomski — Nastavni',
    labelFull: 'Diplomski sveučilišni studij Informatika (Nastavni smjer)',
    type: 'Diplomski sveučilišni — Nastavni smjer',
    duration: '2 godine',
    ects: '120 ECTS',
    fee: '3.000 EUR/god.',
    title: 'magistar edukacije informatike (mag. educ. inf.)',
    description:
      'Nastavni smjer obrazuje vrsne stručnjake za prijenos informatičkih znanja. Studenti stječu pedagoške kompetencije uz napredna znanja iz IKT i modernih obrazovnih tehnologija.',
    semesters: [
      {
        num: 1,
        year: '1. godina — Zimski semestar',
        ects: 30,
        courses: [
          { name: 'Digitalne kompetencije u obrazovanju', ects: 6 },
          { name: 'Obrazovanje posebnih skupina', ects: 6 },
          { name: 'Didaktika', ects: 6 },
          { name: 'Pedagogija', ects: 6 },
          {
            name: 'Izborni predmet I',
            ects: 6,
            elective: true,
            options: ['Upravljanje projektima', 'IT Management', 'Modeli računarstva', 'Raspodijeljeni sustavi', 'Mobilne aplikacije'],
          },
        ],
      },
      {
        num: 2,
        year: '1. godina — Ljetni semestar',
        ects: 30,
        courses: [
          { name: 'Metodika edukacije informatike 1', ects: 6 },
          { name: 'Sustavi elektroničkog učenja', ects: 6 },
          { name: 'Praktikum za edukatore informatike', ects: 6 },
          {
            name: 'Izborni predmeti (min. 2)',
            ects: 12,
            elective: true,
            options: ['Interakcija čovjeka i računala', 'Modeliranje i simulacije', 'Neuronske mreže i duboko učenje', 'Analiza podataka i obrada informacija'],
          },
        ],
      },
      {
        num: 3,
        year: '2. godina — Zimski semestar',
        ects: 30,
        courses: [
          { name: 'IT i edukacija', ects: 6 },
          { name: 'Metodika edukacije informatike 2 s praksom', ects: 6 },
          { name: 'Praksa edukacije informatike', ects: 6 },
          {
            name: 'Izborni predmeti (min. 2)',
            ects: 12,
            elective: true,
            options: ['Funkcijsko programiranje', 'Internet stvari', 'Napredni algoritmi i strukture podataka', 'Upravljanje projektima'],
          },
        ],
      },
      {
        num: 4,
        year: '2. godina — Ljetni semestar',
        ects: 30,
        courses: [{ name: 'Diplomski rad', ects: 30 }],
      },
    ],
  },
]

export const quizQuestions = [
  'Zainteresirani ste za online učenje i samostalno upravljanje vremenom?',
  'Imate posebno, mirno mjesto gdje možete učiti?',
  'Imate stabilan pristup računalu i brzom internetu?',
  'Imate dobre vještine čitanja i pisanja na hrvatskom i engleskom?',
  'Sigurni ste u komunikaciji usmenim i pisanim putem?',
  'Imate dobre tehnološke vještine (izvan društvenih mreža)?',
  'Imate podršku okoline za studij (obitelj, posao, raspored)?',
  'Možete svaki dan izdvojiti nekoliko sati za online studij?',
]

export const benefits = [
  {
    icon: '🕐',
    title: 'Fleksibilno',
    text: 'Sami birate kada i gdje učite. Online studij prilagođen je vašem radnom i životnom ritmu.',
  },
  {
    icon: '🌍',
    title: 'Dostupno svima',
    text: 'Studij možete pohađati iz bilo kojeg mjesta u Hrvatskoj i inozemstvu.',
  },
  {
    icon: '💡',
    title: 'Suvremene tehnologije',
    text: 'AI, blockchain, IoT, web razvoj, mobilne aplikacije — učite tehnologije budućnosti.',
  },
  {
    icon: '🤝',
    title: 'Osobni kontakt',
    text: 'Sinkrona predavanja putem Google Meet-a osiguravaju direktan kontakt s profesorima.',
  },
  {
    icon: '🏆',
    title: 'Priznat stupanj',
    text: 'Stječete punopravnu sveučilišnu diplomu Sveučilišta Jurja Dobrile u Puli.',
  },
]

export const tools = [
  { icon: '📚', name: 'Merlin (e-učenje)', primary: true },
  { icon: '📧', name: 'Gmail', primary: true },
  { icon: '📅', name: 'Google Calendar', primary: true },
  { icon: '📹', name: 'Google Meet', primary: true },
  { icon: '💾', name: 'Google Drive', primary: true },
  { icon: '🎓', name: 'Google Classroom', primary: true },
  { icon: '📝', name: 'Google Docs', primary: true },
  { icon: '📊', name: 'Google Sheets', primary: true },
  { icon: '🤖', name: 'Google Gemini', primary: true },
  { icon: '🧪', name: 'NotebookLM', primary: true },
  { icon: '🔬', name: 'Google Colab', primary: true },
  { icon: '💬', name: 'Google Chat', primary: true },
  { icon: '🌐', name: 'CARNET / AAI@EduHr', primary: false },
  { icon: '🖥️', name: 'Srce / Dabar', primary: false },
  { icon: '📖', name: 'Hrčak', primary: false },
  { icon: '🔍', name: 'Scopus', primary: false },
  { icon: '📰', name: 'Web of Science', primary: false },
  { icon: '🏛️', name: 'Sveučilišna knjižnica (SKPU)', primary: false },
  { icon: '📋', name: 'Studomat / ISVU', primary: false },
]

export const journeySteps = [
  {
    icon: '🔍',
    title: 'Informiraj se',
    text: 'Web stranica FIPU, chatbox, e-mail, ovaj vodič.',
  },
  {
    icon: '📋',
    title: 'Prijavi se',
    text: 'Elektronička prijava putem informacijskog sustava UNIPU.',
  },
  {
    icon: '✍️',
    title: 'Upiši se',
    text: 'Studentski ugovor, plaćanje školarine, digitalni identitet.',
  },
  {
    icon: '💻',
    title: 'Pohađaj kolegije',
    text: 'Merlin, Google Meet, Classroom — sinkrono i asinkrono.',
  },
  {
    icon: '🎓',
    title: 'Diplomski',
    text: 'Položi sve ispite, napiši završni ili diplomski rad.',
  },
]

export const enrollmentSteps = [
  {
    num: '1',
    title: 'Informiraj se',
    text: 'Pogledaj sve informacije na web stranici FIPU i UNIPU ili nas kontaktiraj.',
    link: 'https://fipu.unipu.hr',
    linkText: 'fipu.unipu.hr',
  },
  {
    num: '2',
    title: 'Prijavi se',
    text: 'Elektronička prijava za upis putem informacijskog sustava Sveučilišta.',
    link: 'https://www.unipu.hr/upisi',
    linkText: 'unipu.hr/upisi',
  },
  {
    num: '3',
    title: 'Upiši se',
    text: 'Potpiši studentski ugovor, uplati školarinu (moguće obročno) i dobij digitalni identitet.',
    link: null,
    linkText: null,
  },
  {
    num: '4',
    title: 'Počni učiti',
    text: 'Pristupi Merlinu, Google Workspaceu i kolegijima predviđenim za prvu godinu.',
    link: 'https://moodle.srce.hr',
    linkText: 'Merlin (Srce)',
  },
]
