import { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { useInView } from '../hooks/useInView'
import { enrollmentSteps } from '../data/programs'

export default function Enrollment() {
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      anime({
        targets: '.enroll-step',
        opacity: [0, 1],
        translateY: [24, 0],
        delay: anime.stagger(180),
        duration: 700,
        easing: 'easeOutExpo',
      })
    }
  }, [inView])

  return (
    <section className="section section--gray" id="upis" ref={ref}>
      <div className="container">
        <div className="section-header section-header--center">
          <p className="section-label">Kako se upisati</p>
          <h2 className="section-title">
            Koraci do <span className="accent">upisa</span>
          </h2>
          <p className="section-subtitle">
            Upis na online izvanredni studij Informatike na FIPU je jednostavan.
            Evo koraka koje trebaš slijediti.
          </p>
        </div>

        <div className="enrollment__steps">
          {enrollmentSteps.map((step, i) => (
            <div key={i} className="enroll-step" style={{ opacity: 0 }}>
              <div className="enroll-step__node">{step.num}</div>
              <h3 className="enroll-step__title">{step.title}</h3>
              <p className="enroll-step__text">{step.text}</p>
              {step.link && (
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enroll-step__link"
                >
                  → {step.linkText}
                </a>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '4rem',
            background: 'var(--fipu-navy)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 900, color: 'var(--white)', textTransform: 'uppercase', marginBottom: '.75rem' }}>
              Imaš pitanja?
            </h3>
            <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.9rem', lineHeight: 1.65 }}>
              Slobodno nas kontaktiraj — putem e-maila, telefona ili chatbox-a na web stranici.
              Odgovaramo u roku 48 sati (ovisno o danu u tjednu).
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <a href="mailto:fipu-ured@unipu.hr" className="btn btn-primary">
              📧 Pošalji upit
            </a>
            <a href="#kontakt" className="btn btn-outline">
              Kontakt info
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
