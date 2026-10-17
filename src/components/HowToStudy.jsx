import { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { useInView } from '../hooks/useInView'

const forms = [
  {
    letter: 'P',
    badge: 'P',
    title: 'Sinkrona predavanja',
    text: 'Predavanja se odvijaju online putem Google Meet-a u terminima objavljenim u Google Calendaru. Nisu obvezna za online studente — sami birate hoćete li ih pohađati uživo.',
    detail: 'Tipično: 9 sati po kolegiju, radnim danom od 18:00',
    icon: '📹',
  },
  {
    letter: 'V',
    badge: 'V',
    title: 'Sinkrone vježbe',
    text: 'Vježbe se također odvijaju online putem Google Meet-a. Praktičan rad, rješavanje zadataka i interakcija s nastavnicima. Nisu obvezne za online studente.',
    detail: 'Tipično: 6 sati po kolegiju, prema rasporedu',
    icon: '🖥️',
  },
  {
    letter: 'A',
    badge: 'A',
    title: 'Asinkrono e-učenje',
    text: 'Merlin e-kolegiji, Google Chat, video predavanja, materijali za čitanje, kvizovi za samoprocjenu — sve dostupno 24/7. Ovo je srž online studija — učiš vlastitim tempom.',
    detail: 'Tipično: 45 sati asinkronih aktivnosti po kolegiju',
    icon: '📚',
  },
]

export default function HowToStudy() {
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      anime({
        targets: '.how-card',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(150),
        duration: 700,
        easing: 'easeOutExpo',
      })
    }
  }, [inView])

  return (
    <section className="section section--dark" id="nastava" ref={ref}>
      <div className="container">
        <div className="section-header section-header--center">
          <p className="section-label section-label--white">Oblici nastave</p>
          <h2 className="section-title section-title--white">
            Kako <span className="accent">studiraš?</span>
          </h2>
          <p className="section-subtitle section-subtitle--white">
            Online studij kombinira tri oblika nastave. Primjer kolegija 9P·6V·45A znači:
            9 sati predavanja, 6 sati vježbi i 45 sati asinkrona e-nastava.
          </p>
        </div>

        <div className="how-grid" ref={ref}>
          {forms.map((f, i) => (
            <div key={i} className="how-card" style={{ opacity: 0 }}>
              <div className="how-card__letter">{f.letter}</div>
              <div className="how-card__badge">{f.badge}</div>
              <h3 className="how-card__title">{f.title}</h3>
              <p className="how-card__text">{f.text}</p>
              <p className="how-card__detail">ℹ️ {f.detail}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '3rem',
          background: 'rgba(93,173,226,.08)',
          border: '1px solid rgba(93,173,226,.2)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.5rem 2rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💡</span>
          <div>
            <p style={{ color: 'var(--white)', fontWeight: 600, marginBottom: '.3rem' }}>
              Self-paced studiranje
            </p>
            <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.875rem', lineHeight: 1.65 }}>
              Nema obveze prisustvovati sinkronoj nastavi — sami birate kada ćete gledati
              snimke i raditi materijale. Isti kolegij na redovnom studiju ima 30P·30V, dok
              online studenti imaju 9P·6V·45A. Razlika je u tome što sinkrona nastava
              nije identična redovnoj nastavi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
