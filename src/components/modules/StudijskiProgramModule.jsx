import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NextPageBlock from '../NextPageBlock'
import { programs } from '../../data/content'

const ENROLLMENT = {
  'prijediplomski': {
    conditions: [
      'Završena srednja škola u trajanju od četiri godine',
      'Rangiranje prema bodovnom sustavu (FIPU kriteriji upisa)',
    ],
    note: null,
  },
  'diplomski-inf': {
    conditions: [
      'Završen prijediplomski studij informatike (min. 180 ECTS)',
      'Prijediplomski studij poslovne informatike ili informatičkog menadžmenta (min. 180 ECTS)',
      'Prijediplomski studiji IT-a, računarstva, ekonomije, elektrotehnike, matematike ili fizike',
    ],
    note: 'Pristupnici s nesrodnih studija moraju položiti razlikovne predmete: Programiranje, Strukture podataka i algoritmi, Mrežni sustavi, Baze podataka 1, Operacijski sustavi, Programsko inženjerstvo.',
  },
  'diplomski-nast': {
    conditions: [
      'Završen prijediplomski studij informatike (min. 180 ECTS)',
      'Prijediplomski studij poslovne informatike ili informatičkog menadžmenta (min. 180 ECTS)',
      'Prijediplomski studiji IT-a, računarstva, ekonomije, elektrotehnike, matematike ili fizike',
    ],
    note: 'Pristupnici s nesrodnih studija moraju položiti razlikovne predmete (Programiranje, Strukture podataka i algoritmi, Mrežni sustavi, Baze podataka 1, Operacijski sustavi, Programsko inženjerstvo) prije prijave diplomskog rada.',
  },
}

const OUTCOMES_FULL = {
  'prijediplomski': [
    'Temeljni koncepti računalnih sustava, IKT i informacijskih sustava',
    'Napredno znanje nekoliko programskih jezika',
    'Primjena različitih tipova podataka i algoritama',
    'Modeliranje, implementacija i administracija relacijskih baza podataka',
    'Projektiranje poslovnih informacijskih sustava',
    'Interpretacija procesa i principa modeliranja složenih procesa',
    'Funkcioniranje, arhitektura i administracija komunikacijskih mreža',
    'Primjena matematičkih i statističkih tehnika',
    'Osnove upravljanja poslovanjem',
    'Etička, pravna i normativna načela struke',
  ],
  'diplomski-inf': [
    'Analitičke i konceptualne vještine te sustavni pristup problematici',
    'Sposobnost identificiranja i rješavanja problema kroz kritičko prosuđivanje',
    'Razumijevanje informacijskih sustava kao organiziranih cjelina',
    'Vještine timskog rada i etičkog djelovanja s učinkovitom komunikacijom',
    'Modeliranje organizacijskih procesa i podataka',
    'Nadograđivanje znanja iz suvremenih ICT-a i razvoj tehnike programiranja',
    'Primjena ICT znanja u različitim industrijama i sektorima',
  ],
  'diplomski-nast': [
    'Sustavni koncepti za razumijevanje i identificiranje problema',
    'Primjena klasičnih i novih koncepata znanja u obrazovanju',
    'Kritičko prosuđivanje i rješavanje problema',
    'Razumijevanje informacijskih sustava kao organizirane cjeline',
    'Rad u timu uz etičke principe i komunikacijske vještine',
    'Pedagoška i didaktička kompetentnost za nastavu informatike',
    'Menadžment obrazovnih organizacija i e-učenje',
  ],
}

export default function StudijskiProgramModule({ onNavigate }) {
  const [activeProg, setActiveProg] = useState(0)
  const [activeSem, setActiveSem] = useState(0)

  const prog = programs[activeProg]
  const enrollment = ENROLLMENT[prog.id]
  const outcomes = OUTCOMES_FULL[prog.id]

  const handleProg = (i) => { setActiveProg(i); setActiveSem(0) }

  return (
    <div className="flex flex-col w-full">

      {/* HERO */}
      <section className="w-full px-margin py-space-xl">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-7 space-y-space-md">
              <h1 className="font-headline-lg text-headline-lg md:text-display-hero text-on-surface tracking-tight">
                Studijski programi FIPU
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Online sveučilišni studij informatike u tri razine. Sve informacije o uvjetima upisa, ishodima učenja, nastavnim planovima i akademskim uslugama na jednom mjestu.
              </p>
              <div className="flex flex-wrap gap-space-sm">
                <span className="px-space-md py-space-xs rounded-full bg-surface-mint text-forest-dark font-badge-caps text-badge-caps uppercase">3 programa</span>
                <span className="px-space-md py-space-xs rounded-full bg-surface-container text-on-surface-variant font-badge-caps text-badge-caps uppercase">180 + 120 ECTS</span>
                <span className="px-space-md py-space-xs rounded-full bg-surface-container text-on-surface-variant font-badge-caps text-badge-caps uppercase">Online izvanredni</span>
              </div>
            </div>
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[340px]">
                <img
                  src="/images/research-lab.jpg"
                  alt="Student FIPU-a na laboratorijskim vježbama izrađuje BCI prototip s elektroničkim komponentama"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-space-xs py-0.5 rounded bg-fipu-cyan text-primary-container font-badge-caps text-badge-caps uppercase">FIPUlab</span>
                  <p className="font-title-card text-title-card text-on-primary mt-0.5">Praktični rad i istraživanje</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="w-full px-margin py-space-xl bg-surface-container-low">
        <div className="max-w-[1240px] mx-auto space-y-space-xl">
          <div>
            <span className="font-badge-caps text-badge-caps text-forest-dark uppercase">Uvjeti upisa · Ishodi učenja · Školarina · Kolegiji</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Odaberi studijski program</h2>
          </div>

          <div className="flex flex-wrap gap-space-sm">
            {programs.map((p, i) => (
              <button
                key={p.id}
                onClick={() => handleProg(i)}
                className={`px-space-lg py-space-sm rounded-full font-label-lg text-label-lg transition-colors ${
                  activeProg === i
                    ? 'bg-primary-container text-on-primary shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-mint hover:text-forest-dark'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProg}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-space-lg"
            >
              {/* Program meta */}
              <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start gap-space-lg">
                  <div className="flex-1 space-y-space-xs">
                    <h3 className="font-headline-md text-headline-md text-on-surface">{prog.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{prog.subtitle}</p>
                    <div className="flex items-center gap-space-xs mt-space-sm">
                      <span className="material-symbols-outlined text-forest-dark text-[18px]">school</span>
                      <span className="font-label-md text-label-md text-on-surface">{prog.degree}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-space-sm shrink-0">
                    <div className="flex flex-col items-center bg-surface-mint rounded-xl px-space-lg py-space-md min-w-[100px]">
                      <span className="font-headline-md text-headline-md text-forest-dark">{prog.duration}</span>
                      <span className="font-badge-caps text-badge-caps text-forest-dark uppercase">Trajanje</span>
                    </div>
                    <div className="flex flex-col items-center bg-surface-container rounded-xl px-space-lg py-space-md min-w-[90px]">
                      <span className="font-headline-md text-headline-md text-on-surface">{prog.ects}</span>
                      <span className="font-badge-caps text-badge-caps text-on-surface-variant uppercase">ECTS</span>
                    </div>
                    <div className="flex flex-col items-center bg-surface-container rounded-xl px-space-lg py-space-md min-w-[130px]">
                      <span className="font-headline-sm text-headline-sm text-on-surface">{prog.tuition}</span>
                      <span className="font-badge-caps text-badge-caps text-on-surface-variant uppercase">Školarina</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Uvjeti upisa + Ishodi učenja */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
                <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-unipu-blue text-[22px]">how_to_reg</span>
                    <h3 className="font-title-card text-title-card text-on-surface">Uvjeti upisa</h3>
                  </div>
                  <div className="space-y-space-sm">
                    {enrollment.conditions.map((c, i) => (
                      <div key={i} className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-xl">
                        <span className="material-symbols-outlined text-forest-dark text-[18px] mt-0.5 shrink-0">check_circle</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">{c}</span>
                      </div>
                    ))}
                  </div>
                  {enrollment.note && (
                    <div className="flex items-start gap-space-xs p-space-sm bg-surface-ice rounded-xl">
                      <span className="material-symbols-outlined text-unipu-blue text-[16px] mt-0.5 shrink-0">info</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant italic">{enrollment.note}</span>
                    </div>
                  )}
                </div>

                <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-forest-dark text-[22px]">workspace_premium</span>
                    <h3 className="font-title-card text-title-card text-on-surface">Ishodi učenja</h3>
                  </div>
                  <div className="divide-y divide-surface-container">
                    {outcomes.map((o, i) => (
                      <div key={i} className="flex items-start gap-space-xs py-space-xs">
                        <span className="font-badge-caps text-badge-caps text-forest-dark bg-surface-mint px-1.5 py-0.5 rounded shrink-0 mt-0.5">{i + 1}</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Kolegiji po semestrima */}
              <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-unipu-blue text-[22px]">menu_book</span>
                  <h3 className="font-title-card text-title-card text-on-surface">Kolegiji po semestrima</h3>
                </div>

                <div className="flex flex-wrap gap-space-xs">
                  {prog.semesters.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSem(i)}
                      className={`px-space-md py-space-xs rounded-full font-label-md text-label-md transition-colors ${
                        activeSem === i
                          ? 'bg-surface-mint text-forest-dark'
                          : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {s.year}. god. · {s.sem}. sem.
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSem}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="overflow-x-auto">
                      <table className="w-full text-left font-body-sm text-body-sm">
                        <thead>
                          <tr className="bg-surface-container text-on-surface-variant font-badge-caps text-badge-caps uppercase">
                            <th className="py-space-sm px-space-md rounded-l-lg">Kolegij</th>
                            <th className="py-space-sm px-space-md text-center">ECTS</th>
                            <th className="py-space-sm px-space-md rounded-r-lg text-center">Vrsta</th>
                          </tr>
                        </thead>
                        <tbody>
                          {prog.semesters[activeSem].courses.map((c, i) => (
                            <tr key={i} className={`${i % 2 === 0 ? '' : 'bg-surface-ice/30'} hover:bg-surface-ice transition-colors`}>
                              <td className="py-space-sm px-space-md font-label-md text-on-surface">{c.name}</td>
                              <td className="py-space-sm px-space-md text-center text-on-surface-variant">{c.ects}</td>
                              <td className="py-space-sm px-space-md text-center">
                                <span className={`px-space-sm py-0.5 rounded-full font-badge-caps text-badge-caps uppercase ${
                                  c.type === 'obvezni'
                                    ? 'bg-surface-mint text-forest-dark'
                                    : 'bg-surface-container text-on-surface-variant'
                                }`}>
                                  {c.type}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* NASTAVNI PLANOVI + DOKUMENTI */}
      <section className="w-full px-margin py-space-xl">
        <div className="max-w-[1240px] mx-auto space-y-space-lg">
          <div>
            <span className="font-badge-caps text-badge-caps text-forest-dark uppercase">Pregled i dokumentacija</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Nastavni planovi i važni dokumenti</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded-xl bg-surface-mint text-forest-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">auto_stories</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Detaljni nastavni planovi</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Pregled svih kolegija po studijskim godinama i semestrima s ECTS bodovima, obveznim i izbornim predmetima za sve razine studija.
                </p>
              </div>
              <a
                href="https://fipu.unipu.hr/fipu/za_studente/nastavni_planovi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-mint text-forest-dark hover:bg-secondary-fixed font-label-lg text-label-lg transition-colors self-start"
              >
                <span>Nastavni planovi na FIPU</span>
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high text-unipu-blue flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">folder_open</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Važni dokumenti</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Pravilnici, obrasci, studentski ugovor, zahtjevi za priznavanjem kolegija, potvrde o studiranju i drugi službeni dokumenti Fakulteta.
                </p>
              </div>
              <a
                href="https://fipu.unipu.hr/fipu/za_studente/dokumenti"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-container-high text-unipu-blue hover:bg-surface-container font-label-lg text-label-lg transition-colors self-start"
              >
                <span>Dokumenti na FIPU</span>
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AKADEMSKE USLUGE */}
      <section className="w-full px-margin py-space-xl bg-surface-container-low">
        <div className="max-w-[1240px] mx-auto space-y-space-xl">
          <div>
            <span className="font-badge-caps text-badge-caps text-forest-dark uppercase">Akademske usluge</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Priznavanja, prijenos ocjena i raspored nastave</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">

            {/* Uznavanje ECTS */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-md">
              <div className="flex items-center gap-space-xs">
                <div className="w-10 h-10 rounded-xl bg-surface-mint text-forest-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                </div>
                <h3 className="font-title-card text-title-card text-on-surface">Priznavanje ECTS bodova i prijenos ocjena</h3>
              </div>
              <div className="flex items-start gap-space-xs p-space-sm bg-surface-ice rounded-xl">
                <span className="material-symbols-outlined text-unipu-blue text-[18px] mt-0.5 shrink-0">support_agent</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Obratite se na <strong className="text-on-surface">Ured za studente i obrazovne programe</strong>
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Nakon upisa student može zatražiti <strong className="text-on-surface">priznavanje ECTS bodova i prijenos ocjena</strong> s prethodno položenih kolegija.
              </p>
              <div className="space-y-space-xs">
                <p className="font-label-md text-label-md text-on-surface">Postupak podnošenja zahtjeva:</p>
                {[
                  'Zahtjev se podnosi nositelju kolegija',
                  'Dostavlja se ispunjena prijavnica za priznavanje kolegija',
                  'Prilaže se prijepis ocjena s datumom polaganja, ECTS bodovima i IPN-om kolegija',
                  'Odluku o priznavanju donosi nositelj kolegija',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-space-xs">
                    <span className="font-badge-caps text-badge-caps bg-surface-mint text-forest-dark px-1.5 py-0.5 rounded shrink-0 mt-0.5">{i + 1}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Raspored sinkrone nastave */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-md">
              <div className="flex items-center gap-space-xs">
                <div className="w-10 h-10 rounded-xl bg-surface-container-high text-unipu-blue flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                </div>
                <h3 className="font-title-card text-title-card text-on-surface">Raspored sinkrone nastave</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Raspored sinkrone nastave putem <strong className="text-on-surface">Google Meeta</strong> objavljuje se na početku semestra na mrežnim stranicama FIPU.
              </p>
              <div className="flex items-start gap-space-xs p-space-sm bg-surface-ice rounded-xl">
                <span className="material-symbols-outlined text-forest-dark text-[18px] mt-0.5 shrink-0">notifications_active</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Studenti se obavještavaju o svim promjenama u rasporedu putem službenih kanala (e-mail, Google Calendar).
                </span>
              </div>
              <div className="p-space-md bg-surface-mint rounded-xl space-y-space-xs">
                <div className="flex items-center gap-space-xs mb-space-xs">
                  <span className="material-symbols-outlined text-forest-dark text-[18px]">event</span>
                  <span className="font-label-md text-label-md text-forest-dark">Korisni podsjetnici</span>
                </div>
                {[
                  'Nastava se odvija radnim danima od 18:00 h nadalje',
                  'Sinkrona predavanja nisu obvezna za ostvarivanje potpisa',
                  'Raspored je vidljiv u dijeljenom Google Calendaru',
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-space-xs">
                    <span className="text-forest-dark shrink-0 mt-1 text-[10px]">●</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <NextPageBlock
        title="Provjeri jesi li spreman za online studij"
        description="Kratki interaktivni upitnik o tehničkoj opremljenosti, digitalnoj zrelosti i samodisciplini."
        label="Pokreni samoprocjenu"
        target="kviz"
        onNavigate={onNavigate}
      />
    </div>
  )
}
