import { useState, useEffect } from 'react'
import NextPageBlock from '../NextPageBlock'

function GradeCalculator() {
  const [zadaci, setZadaci] = useState(85)
  const [projekt, setProjekt] = useState(90)
  const [ispit, setIspit] = useState(80)

  const zBod = (zadaci * 0.10).toFixed(1)
  const pBod = (projekt * 0.40).toFixed(1)
  const iBod = (ispit * 0.50).toFixed(1)
  const total = (parseFloat(zBod) + parseFloat(pBod) + parseFloat(iBod)).toFixed(1)
  const numTotal = parseFloat(total)

  let ocjena, ocjenaBoja
  if (numTotal >= 89.5) { ocjena = 'Izvrstan (5)'; ocjenaBoja = 'text-forest-dark' }
  else if (numTotal >= 76.5) { ocjena = 'Vrlo dobar (4)'; ocjenaBoja = 'text-forest-dark' }
  else if (numTotal >= 63.5) { ocjena = 'Dobar (3)'; ocjenaBoja = 'text-unipu-blue' }
  else if (numTotal >= 50.0) { ocjena = 'Dovoljan (2)'; ocjenaBoja = 'text-on-surface-variant' }
  else { ocjena = 'Nedovoljan (1)'; ocjenaBoja = 'text-error-line' }

  return (
    <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between">
      <div className="space-y-space-md">
        <div className="flex items-center justify-between">
          <span className="font-title-card text-title-card text-on-surface">Simulator završne ocjene</span>
          <span className="material-symbols-outlined text-forest-dark">tune</span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Povucite klizače da provjerite projekciju bodova prema formuli IPN-a.
        </p>
        <div className="space-y-space-md pt-space-xs">
          <div className="space-y-1">
            <div className="flex justify-between font-label-md text-label-md">
              <span className="text-on-surface">Samostalni zadaci (10%)</span>
              <span className="text-forest-dark">{zadaci}% • {zBod} bodova</span>
            </div>
            <input
              className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-[#0A7A52]"
              type="range" min="0" max="100" value={zadaci}
              onChange={e => setZadaci(parseInt(e.target.value))}
            />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between font-label-md text-label-md">
              <span className="text-on-surface">Projektni rad (40%)</span>
              <span className="text-forest-dark">{projekt}% • {pBod} bodova</span>
            </div>
            <input
              className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-[#0A7A52]"
              type="range" min="0" max="100" value={projekt}
              onChange={e => setProjekt(parseInt(e.target.value))}
            />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between font-label-md text-label-md">
              <span className="text-on-surface">Završni ispit (50%)</span>
              <span className="text-forest-dark">{ispit}% • {iBod} bodova</span>
            </div>
            <input
              className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-[#0A7A52]"
              type="range" min="0" max="100" value={ispit}
              onChange={e => setIspit(parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
      <div className="mt-space-lg p-space-md bg-surface-mint rounded-xl flex items-center justify-between">
        <div>
          <span className="font-badge-caps text-badge-caps text-forest-dark uppercase">Konačni zbroj</span>
          <div className="flex items-baseline gap-space-xs">
            <span className="font-display-hero text-headline-lg font-bold text-on-surface">{total}</span>
            <span className="font-body-md text-body-md text-on-surface-variant">/ 100 bodova</span>
          </div>
        </div>
        <div className="text-right">
          <span className="font-badge-caps text-badge-caps text-forest-dark uppercase">Predviđena ocjena</span>
          <div className={`font-headline-md text-headline-md ${ocjenaBoja}`}>{ocjena}</div>
        </div>
      </div>
    </div>
  )
}

export default function NastavaModule({ onNavigate }) {
  return (
    <div className="flex flex-col w-full">
      {/* TOP HEADER & KEY METRICS */}
      <section className="w-full px-margin py-space-xl">
        <div className="max-w-[1240px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="space-y-space-xs max-w-2xl">
              <h1 className="font-headline-lg text-headline-lg md:text-display-hero text-on-surface tracking-tight">
                Nastava, IPN &amp; Tehnološki Alati
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Usklađeno za zaposlene studente, digitalne nomade i buduće inženjere. Upoznajte arhitekturu studiranja temeljenu na fleksibilnoj asinkronoj komponenti i preciznim ishodima učenja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: MODEL NASTAVE 9P - 6V - 45A */}
      <section className="w-full px-margin py-space-xl bg-surface-container-low">
        <div className="max-w-[1240px] mx-auto space-y-space-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
            <div>
              <span className="font-badge-caps text-badge-caps text-forest-dark uppercase">Struktura semestralnih sati</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Model nastave: 9P — 6V — 45A</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Za razliku od klasičnog kontaktnog studija (30P - 30V), online studij informatike na FIPU optimizira vrijeme i omogućuje potpunu kontrolu dinamike usvajanja znanja.
            </p>
          </div>
          {/* Bento Grid for 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* 9P */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden group">
              <div className="space-y-space-md">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-xl bg-surface-mint text-forest-dark flex items-center justify-center font-headline-md text-headline-md">9P</span>
                  <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant font-badge-caps text-badge-caps uppercase">Sinkrono • Google Meet</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Predavanja uživo</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  9 nastavnih sati interaktivnih predavanja preko Google Meeta s profesorima i asistentima. Fokus je na sintezi gradiva, raspravama i usmjeravanju na ključne koncepte.
                </p>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-ice rounded-lg p-space-sm flex items-center gap-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px] text-forest-dark">info</span>
                <span className="font-body-sm text-body-sm font-label-md">Prisustvo nije obvezno, ali je preporučeno</span>
              </div>
            </div>
            {/* 6V */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden group">
              <div className="space-y-space-md">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-xl bg-surface-container-high text-unipu-blue flex items-center justify-center font-headline-md text-headline-md">6V</span>
                  <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant font-badge-caps text-badge-caps uppercase">Sinkrono • Praktikum</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Laboratorijske vježbe</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  6 nastavnih sati praktičnog rada, demonstracija koda uživo, rješavanja problemskih zadataka i interaktivnog otklanjanja poteškoća s asistentima.
                </p>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-ice rounded-lg p-space-sm flex items-center gap-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px] text-unipu-blue">check_circle</span>
                <span className="font-body-sm text-body-sm font-label-md">Konzultacije koda u realnom vremenu</span>
              </div>
            </div>
            {/* 45A */}
            <div className="bg-primary-container text-on-primary rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-space-md">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-xl bg-forest-dark text-on-primary flex items-center justify-center font-headline-md text-headline-md">45A</span>
                  <span className="px-space-sm py-space-xs rounded-full bg-surface-container/20 text-fipu-cyan font-badge-caps text-badge-caps uppercase">Najvažnija komponenta</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-primary">Asinkrono e-učenje</h3>
                <p className="font-body-md text-body-md text-surface-variant">
                  45 sati vođenog samostalnog rada na sustavu Merlin: videolekcije, interaktivne vježbe, projektni sprintovi, tjedni forumi i strukturirano programiranje vlastitim tempom.
                </p>
              </div>
              <div className="mt-space-lg pt-space-md bg-white/10 rounded-lg p-space-sm flex items-center gap-space-xs text-surface-mint">
                <span className="material-symbols-outlined text-[18px]">all_inclusive</span>
                <span className="font-body-sm text-body-sm font-label-md">Dostupno 24/7 s bilo kojeg uređaja</span>
              </div>
            </div>
          </div>
          {/* Comparison Card */}
          <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-5 space-y-space-sm">
                <span className="font-badge-caps text-badge-caps text-forest-dark uppercase">Usporedna analiza</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Zašto 9P - 6V - 45A savršeno odgovara zaposlenim studentima?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Klasični model zahtijeva 60 sati fizičke prisutnosti u točno određenom terminu tjedno. FIPU model prebacuje težište na individualnu autonomiju:
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="bg-surface-ice p-space-md rounded-lg space-y-space-xs">
                  <div className="flex items-center gap-space-xs text-error-line">
                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                    <span className="font-title-card text-title-card">Klasični studij (30P - 30V)</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    60 sati fiksnog rasporeda u dvorani. Izostanak stvara praznine u gradivu. Teško uskladivo s radnim smjenama, obitelji i poslovnim putovanjima.
                  </p>
                </div>
                <div className="bg-surface-mint p-space-md rounded-lg space-y-space-xs">
                  <div className="flex items-center gap-space-xs text-forest-dark">
                    <span className="material-symbols-outlined text-[20px]">bolt</span>
                    <span className="font-title-card text-title-card">FIPU Online (9P - 6V - 45A)</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Samo 15 sati sinkronog kontakta raspoređenog u blokovima — prisustvo nije obvezno, već usluga studentima. Čak 75% fonda odvija se u vašim slobodnim terminima uz stalnu podršku nastavnika.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP — LAB VJEŽBE */}
      <section className="w-full relative overflow-hidden h-[400px] md:h-[520px]">
        <img
          src="/images/pula-coastal.jpg"
          alt="Pogled na obalu Pule s kristalno čistim Jadranskim morem — mediteransko okruženje online studija"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/65 via-primary-container/25 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1240px] mx-auto px-margin">
            <span className="font-badge-caps text-badge-caps text-fipu-cyan uppercase">Online studij · Pula, Istra</span>
            <p className="font-headline-lg text-headline-lg text-on-primary mt-space-xs max-w-xl">
              Uči na daljinu, živi uz Jadransko more
            </p>
            <p className="font-body-md text-body-md text-inverse-primary mt-space-xs max-w-md">
              Akreditirani online program smješten u mediteranskom gradu Puli — savršena kombinacija kvalitetnog studija i životnog stila.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: IPN TABLE + GRADE CALCULATOR */}
      <section className="w-full px-margin py-space-xl">
        <div className="max-w-[1240px] mx-auto space-y-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="space-y-space-xs max-w-xl">
              <span className="font-badge-caps text-badge-caps text-forest-dark uppercase">Izvedbeni plan nastave (IPN)</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Distribucija ECTS-a &amp; Interaktivni simulator ocjene</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Standardni kolegij nosi točno <strong>6.0 ECTS bodova</strong> i obuhvaća <strong>180 sati</strong> ukupnog studentskog rada — vrijedi za oba stupnja: prijediplomski (180 ECTS) i diplomski (120 ECTS). Testirajte formulu bodovanja uživo.
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                ⚠️ Napomena: prikazani podaci su ilustrativni primjer. Stvarna raspodjela sati, bodova i postotaka ovisi o pojedinom kolegiju i njegovom izvedbenom planu nastave.
              </p>
            </div>
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container font-code-inline text-code-inline text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-forest-dark">calculate</span>
              <span>Ocjena = (Zadaci × 0.1) + (Projekt × 0.4) + (Ispit × 0.5)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            {/* IPN Table */}
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-sm p-space-lg space-y-space-md">
              <div className="flex items-center justify-between pb-space-xs">
                <h3 className="font-title-card text-title-card text-on-surface uppercase tracking-wider">Aktivnosti i opterećenje</h3>
                <span className="font-badge-caps text-badge-caps text-forest-dark bg-surface-mint px-space-sm py-0.5 rounded-full">Standard 6 ECTS</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-sm text-body-sm">
                  <thead>
                    <tr className="bg-surface-mint text-forest-dark font-badge-caps text-badge-caps uppercase">
                      <th className="py-space-sm px-space-md rounded-l-lg">Aktivnost</th>
                      <th className="py-space-sm px-space-md">Sati</th>
                      <th className="py-space-sm px-space-md">ECTS</th>
                      <th className="py-space-sm px-space-md">Udio</th>
                      <th className="py-space-sm px-space-md rounded-r-lg text-right">Bodovi</th>
                    </tr>
                  </thead>
                  <tbody className="text-on-surface-variant">
                    <tr className="hover:bg-surface-ice transition-colors">
                      <td className="py-space-sm px-space-md font-label-lg text-on-surface flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[16px] text-fipu-cyan">cast_for_education</span>
                        Predavanja (P)
                      </td>
                      <td className="py-space-sm px-space-md">60 h</td>
                      <td className="py-space-sm px-space-md">2.0</td>
                      <td className="py-space-sm px-space-md">0%</td>
                      <td className="py-space-sm px-space-md text-right text-outline">Formativa</td>
                    </tr>
                    <tr className="bg-surface-ice/40 hover:bg-surface-ice transition-colors">
                      <td className="py-space-sm px-space-md font-label-lg text-on-surface flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[16px] text-unipu-blue">code</span>
                        Vježbe (V)
                      </td>
                      <td className="py-space-sm px-space-md">30 h</td>
                      <td className="py-space-sm px-space-md">1.0</td>
                      <td className="py-space-sm px-space-md">0%</td>
                      <td className="py-space-sm px-space-md text-right text-outline">Formativa</td>
                    </tr>
                    <tr className="hover:bg-surface-ice transition-colors">
                      <td className="py-space-sm px-space-md font-label-lg text-on-surface flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[16px] text-emerald-accent">assignment</span>
                        Samostalni zadaci
                      </td>
                      <td className="py-space-sm px-space-md">15 h</td>
                      <td className="py-space-sm px-space-md">0.5</td>
                      <td className="py-space-sm px-space-md font-label-md text-forest-dark">10%</td>
                      <td className="py-space-sm px-space-md text-right font-label-md text-on-surface">10 bodova</td>
                    </tr>
                    <tr className="bg-surface-ice/40 hover:bg-surface-ice transition-colors">
                      <td className="py-space-sm px-space-md font-label-lg text-on-surface flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[16px] text-forest-dark">deployed_code</span>
                        Semestralni projekt
                      </td>
                      <td className="py-space-sm px-space-md">15 h</td>
                      <td className="py-space-sm px-space-md">0.5</td>
                      <td className="py-space-sm px-space-md font-label-md text-forest-dark">40%</td>
                      <td className="py-space-sm px-space-md text-right font-label-md text-on-surface">40 bodova</td>
                    </tr>
                    <tr className="hover:bg-surface-ice transition-colors">
                      <td className="py-space-sm px-space-md font-label-lg text-on-surface flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[16px] text-unipu-blue">quiz</span>
                        Završni ispit
                      </td>
                      <td className="py-space-sm px-space-md">60 h</td>
                      <td className="py-space-sm px-space-md">2.0</td>
                      <td className="py-space-sm px-space-md font-label-md text-forest-dark">50%</td>
                      <td className="py-space-sm px-space-md text-right font-label-md text-on-surface">50 bodova</td>
                    </tr>
                    <tr className="bg-surface-container font-title-card text-on-surface">
                      <td className="py-space-md px-space-md rounded-l-lg">UKUPNO OPTEREĆENJE</td>
                      <td className="py-space-md px-space-md">180 h</td>
                      <td className="py-space-md px-space-md">6.0 ECTS</td>
                      <td className="py-space-md px-space-md">100%</td>
                      <td className="py-space-md px-space-md rounded-r-lg text-right text-forest-dark">100 bodova</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-space-sm bg-surface-container-low rounded-lg text-on-surface-variant font-body-sm flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-forest-dark">verified</span>
                <span>Uspjeh na kontinuiranom radu (Zadaci + Projekt) nosi 50% ukupnog uspjeha prije ispita.</span>
              </div>
            </div>
            {/* Grade Calculator */}
            <GradeCalculator />
          </div>
        </div>
      </section>

      {/* SECTION 3: PRAVILA PONAŠANJA */}
      <section className="w-full px-margin py-space-xl bg-surface-container-low">
        <div className="max-w-[1240px] mx-auto space-y-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
            <div className="space-y-space-xs max-w-xl">
              <span className="font-badge-caps text-badge-caps text-forest-dark uppercase">Etika i kultura online predavanja</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Pravila ponašanja na sinkronoj nastavi</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Usklađeni standardi komunikacije na Google Meet predavanjima i vježbama jamče visoku profesionalnost i ugodnu radnu atmosferu za sve sudionike.
              </p>
            </div>
            <div className="flex items-center gap-space-xs text-forest-dark font-label-md text-label-md">
              <span className="material-symbols-outlined text-[20px]">gavel</span>
              <span>Službeni akademski kodeks FIPU</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {[
              { icon: 'event_available', title: '1. Fleksibilnost prisustva', color: 'bg-surface-mint text-forest-dark', desc: 'Prisutnost na predavanjima i vježbama uživo nije obvezna za ostvarivanje potpisa. Sinkroni termini se ne snimaju, no svim studentima dostupni su video nastavni materijali na Merlinu.' },
              { icon: 'schedule', title: '2. Pravovremenost dolaska', color: 'bg-surface-container-high text-unipu-blue', desc: 'Ako se odlučite za sudjelovanje uživo, spojite se 2-3 minute prije početka. Prekidanje predavanja naknadnim ulaskom u virtualnu sobu ometa fokus predavača i ostalih studenata.' },
              { icon: 'videocam', title: '3. Kamera i vizualni kontakt', color: 'bg-surface-mint text-forest-dark', desc: 'Kamera je obavezna tijekom diskusija i laboratorijskih konzultacija. To potiče autentičnu suradničku klimu i omogućuje prirodniju inženjersku komunikaciju.' },
              { icon: 'headset_mic', title: '4. Tehnička audio oprema', color: 'bg-surface-container-high text-unipu-blue', desc: 'Preporučujemo koristiti slušalice radi uklanjanja jeke i buke iz okoline. Mikrofon držite isključenim (mute) dok predavač ili kolege izlažu.' },
              { icon: 'forum', title: '5. Aktivno sudjelovanje', color: 'bg-surface-mint text-forest-dark', desc: 'Pitanja i nedoumice postavljajte podizanjem virtualne ruke na Meetu ili putem tekstualnog chata. Nastavnici redovito odvajaju vrijeme za odgovore na kraju nastavnog bloka.' },
              { icon: 'do_not_disturb_on', title: '6. Zabrana neovlaštenog snimanja', color: 'bg-error-container text-error-text', titleColor: 'text-error-text', desc: 'Strogo je zabranjeno neovlašteno snimanje, fotografiranje zaslona ili javna redistribucija materijala. Službena snimanja vrši isključivo nositelj kolegija prema GDPR pravilima.' },
            ].map((rule, i) => (
              <div key={i} className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm">
                <div className={`w-10 h-10 rounded-lg ${rule.color} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-[22px]">{rule.icon}</span>
                </div>
                <h3 className={`font-title-card text-title-card ${rule.titleColor || 'text-on-surface'}`}>{rule.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TEHNOLOŠKI EKOSUSTAV */}
      <section className="w-full px-margin py-space-xl">
        <div className="max-w-[1240px] mx-auto space-y-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
            <div className="space-y-space-xs max-w-xl">
              <span className="font-badge-caps text-badge-caps text-forest-dark uppercase">Službena IT Infrastruktura</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Tehnološki ekosustav i alati za učenje</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Ekosustav FIPU objedinjuje nacionalnu akademsku infrastrukturu (CARNET, SRCE) s vodećim svjetskim alatima oblaka i umjetne inteligencije.
              </p>
            </div>
            <div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
              <span className="material-symbols-outlined text-[16px] text-fipu-cyan">cloud_sync</span>
              <span>AAI@EduHr jedinstvena prijava (SSO)</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden p-space-md md:p-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              <div className="lg:col-span-7 flex flex-col items-center">
                <div className="w-full rounded-xl overflow-hidden bg-white shadow-inner flex items-center justify-center p-space-xs">
                  <img
                    alt="FIPU Tehnološki ekosustav"
                    className="w-full h-auto object-contain max-h-[460px]"
                    src="/images/techstack.jpg"
                  />
                </div>
                <span className="mt-space-sm font-badge-caps text-badge-caps text-on-surface-variant text-center">
                  Prikaz interakcije sustava: Google Workspace • Gemini AI • CARNET • SRCE • SKPU
                </span>
              </div>
              <div className="lg:col-span-5 space-y-space-md">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Integrirani digitalni alati</h3>
                <div className="p-space-md bg-surface-ice rounded-xl space-y-space-xs">
                  <div className="flex items-center gap-space-xs font-title-card text-title-card text-on-surface">
                    <span className="material-symbols-outlined text-forest-dark text-[20px]">smart_toy</span>
                    <span>Google for Education + Gemini AI</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Svaki student dobiva sveučilišni Google račun s pristupom Google Meetu bez vremenskog ograničenja, Google Drive-u, Google Colabu za vježbe i integriranom Gemini Notebooku.
                  </p>
                </div>
                <div className="p-space-md bg-surface-ice rounded-xl space-y-space-xs">
                  <div className="flex items-center gap-space-xs font-title-card text-title-card text-on-surface">
                    <span className="material-symbols-outlined text-unipu-blue text-[20px]">school</span>
                    <span>Merlin LMS (Moodle Srce)</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Centralni repozitorij svih nastavnih materijala, interaktivnih testova, predaje projektnih zadataka, evidencije ocjena i asinkrone diskusije na forumima kolegija.
                  </p>
                </div>
                <div className="p-space-md bg-surface-ice rounded-xl space-y-space-xs">
                  <div className="flex items-center gap-space-xs font-title-card text-title-card text-on-surface">
                    <span className="material-symbols-outlined text-emerald-accent text-[20px]">vpn_key</span>
                    <span>CARNET AAI@EduHr &amp; Baze podataka</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Elektronički identitet omogućuje pristup ISVU Studomatu, Web of Science, Scopus bazama, Sveučilišnoj knjižnici (SKPU) i softverskim licencama za razvoj softvera.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MERLIN STANDARDI */}
      <section className="w-full px-margin py-space-xl bg-surface-container-low">
        <div className="max-w-[1240px] mx-auto space-y-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
            <div className="space-y-space-xs max-w-xl">
              <span className="font-badge-caps text-badge-caps text-forest-dark uppercase">Kvaliteta e-kolegija</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Merlin standardi: Više od 90% naprednih kolegija</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Fakultet informatike u Puli kolegije prilagođava prema smjernicama za e-učenje, osiguravajući visoke pedagoške i digitalne standarde za sve studente.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-badge-caps text-badge-caps text-forest-dark bg-surface-mint px-space-sm py-0.5 rounded-full uppercase">Struktura</span>
                <span className="material-symbols-outlined text-forest-dark">menu_book</span>
              </div>
              <h3 className="font-title-card text-title-card text-on-surface">Modularno raščlanjeno gradivo</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Gradivo je podijeljeno u tjedne module s jasno naznačenim ishodima učenja i izravnim poveznicama na video materijale i literaturu.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-badge-caps text-badge-caps text-unipu-blue bg-surface-container-high px-space-sm py-0.5 rounded-full uppercase">Praćenje</span>
                <span className="material-symbols-outlined text-unipu-blue">checklist</span>
              </div>
              <h3 className="font-title-card text-title-card text-on-surface">Praćenje napretka</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Napredak studenta prati se kroz aktivnosti na Merlin LMS i Google for Education Plus platformi — predane zadaće, sudjelovanje na forumima i ostvareni bodovi.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-badge-caps text-badge-caps text-forest-dark bg-surface-mint px-space-sm py-0.5 rounded-full uppercase">Feedback</span>
                <span className="material-symbols-outlined text-forest-dark">rate_review</span>
              </div>
              <h3 className="font-title-card text-title-card text-on-surface">Kontinuirana formativna procjena</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Brzi kvizovi za provjeru znanja nakon svake tematske cjeline s trenutnom povratnom informacijom kako biste znali jeste li spremni za projektni zadatak.
              </p>
            </div>
          </div>
        </div>
      </section>
      <NextPageBlock
        title="Studijski programi, uvjeti upisa i nastavni planovi"
        description="Pregled sva tri online studijska programa s ishodima učenja, cijenama i kolegijima po semestrima."
        label="Studijski program"
        target="studijskiprogram"
        onNavigate={onNavigate}
      />
    </div>
  )
}
