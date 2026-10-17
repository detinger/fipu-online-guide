import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ModuleHeader from '../ModuleHeader'
import { journeys } from '../../data/content'

const journeySteps = {
  upis: [
    { title: 'Informiraj se', desc: 'Detaljno se informiraj na web stranicama FIPU, putem Chatboxa ili Studentske referade.' },
    { title: 'Online prijava na UNIPU', desc: 'Slijedi proceduru online prijave na web stranici Sveučilišta u Puli.' },
    { title: 'Studentski ugovor i školarina', desc: 'Nakon prihvaćanja potpisuješ studentski ugovor i plaćaš upisninu (moguće obročno).' },
    { title: 'Digitalni identitet i početak', desc: 'Dobivaš UNIPU e-mail, pristup Merlinu, Google Workspaceu i uputama za početak.' },
  ],
  studiranje: [
    { title: 'Savladavanje gradiva', desc: 'Učiš prema vlastitom tempu — video predavanja, materijali, kvizovi za samoocjenjivanje na Merlinu.' },
    { title: 'Pomoć i konzultacije', desc: 'Naiđeš li na poteškoće, javi se nositelju kolegija putem foruma ili Google Chata.' },
    { title: 'Ispunjavanje obveza', desc: 'Predaješ zadatke, projekte i ostale obaveze predviđene IPN-om kolegija.' },
    { title: 'Upis sljedeće godine', desc: 'Položiš li sve ispite, upisuješ sljedeću godinu. Završiš li sve — dobivаš diplomu!' },
  ],
  ispiti: [
    { title: 'Prijava na ispitni rok', desc: 'Prijaviš se na ispit putem Studomata u predviđenom roku.' },
    { title: 'Ispunjavanje IPN obveza', desc: 'Pred ispit moraš imati predane sve zadatke i projekte predviđene IPN-om.' },
    { title: 'Pismeni ili praktični ispit', desc: 'Kad si siguran u znanje, pristupaš pismenom ili praktičnom dijelu — online putem Google Meet-a.' },
    { title: 'Usmeni ispit', desc: 'Usmeni dio ocjenjuje teorijsko razumijevanje — provodi se online putem videokonferencije.' },
  ],
  problemi: [
    { title: 'Pojavio se problem', desc: 'Naiđeš li na administrativnu ili studijsku poteškoću, reagiraj što prije.' },
    { title: 'Kontaktiraj referadu', desc: 'Pošalji upit na fipu-ured@unipu.hr ili putem Google Chata čim prije.' },
    { title: 'Odgovor u 48 sati', desc: 'Ovisno o danu u tjednu, odgovor od fakulteta možeš očekivati unutar 48 sati.' },
    { title: 'Rješavanje', desc: 'Po potrebi se šalju dodatni dokumenti, a problem se rješava u dogovoru s dekanatom.' },
  ],
  iskustvo: [
    { title: 'Informiraj se o studiju', desc: 'Posjeti web stranicu FIPU, pročitaj ovaj vodič, postavi pitanja putem Chatboxa.' },
    { title: 'Upiši se', desc: 'Slijedi proceduru upisa i dobij pristup svim sustavima.' },
    { title: 'Pohađaj kolegije', desc: 'Studiraš self-paced na Merlinu uz podršku nastavnika.' },
    { title: 'Položi ispite', desc: 'Ispiti se polažu online — pismeni, praktični i usmeni.' },
    { title: 'Diplomirao/la si!', desc: 'Završi sve kolegije i obranis završni/diplomski rad — sveučilišna diploma!' },
  ],
}

const tabLabels = {
  upis: '📝 Upis',
  studiranje: '📚 Studiranje',
  ispiti: '📋 Ispiti',
  problemi: '🆘 Podrška',
  iskustvo: '🎓 Cijelo iskustvo',
}

export default function JourneysModule() {
  const [active, setActive] = useState('upis')
  const [lightbox, setLightbox] = useState(null)
  const journey = journeys.find(j => j.id === active)
  const steps = journeySteps[active] || journey?.steps?.map(s => ({ title: s, desc: '' })) || []

  return (
    <div>
      <ModuleHeader
        tag="Putovanje studenta"
        title="Dijagrami "
        accentWord="procesa"
        subtitle="Vizualni prikaz svakog koraka online studiranja"
        image="/images/journeys/journey-upis.jpg"
        imgPosition="center 20%"
      />

      <div className="module-body">
        <div className="journey-tabs">
          {Object.entries(tabLabels).map(([id, label]) => (
            <button
              key={id}
              className={`journey-tab ${active === id ? 'active' : ''}`}
              onClick={() => setActive(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {journey && (
              <div style={{ marginBottom: 20 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>
                  {journey.title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{journey.subtitle}</p>
              </div>
            )}

            <div className="journey-layout">
              {journey?.image && (
                <div
                  className="journey-img-wrap"
                  onClick={() => setLightbox(journey.image)}
                >
                  <img src={journey.image} alt={journey.title} />
                  <span className="journey-img-hint">🔍 Klikni za zoom</span>
                </div>
              )}

              <div className="journey-steps">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    className="journey-step"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i }}
                  >
                    <div className="journey-step-num">{i + 1}</div>
                    <div className="journey-step-body">
                      <div className="journey-step-title">
                        {typeof step === 'string' ? step : step.title}
                      </div>
                      {step.desc && (
                        <div className="journey-step-desc">{step.desc}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>×</button>
          <img src={lightbox} alt="" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </div>
  )
}
