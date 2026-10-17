import { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { useInView } from '../hooks/useInView'
import { tools } from '../data/programs'

export default function Tools() {
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      anime({
        targets: '.tool-badge',
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: anime.stagger(40),
        duration: 400,
        easing: 'easeOutExpo',
      })
    }
  }, [inView])

  const primary = tools.filter(t => t.primary)
  const secondary = tools.filter(t => !t.primary)

  return (
    <section className="section section--gray" id="alati" ref={ref}>
      <div className="container">
        <div className="section-header section-header--center">
          <p className="section-label">Digitalni ekosustav</p>
          <h2 className="section-title">
            Alati i <span className="accent">servisi</span>
          </h2>
          <p className="section-subtitle">
            Za studiranje koristiš napredni digitalni ekosustav koji uključuje
            Google Workspace for Education, Merlin, CARNET infrastrukturu i mnogo više.
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, var(--fipu-navy) 0%, var(--fipu-navy-3) 100%)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              marginBottom: '2rem',
            }}
          >
            <p className="tools__section-title" style={{ color: 'rgba(255,255,255,.4)' }}>
              🎓 Google Workspace for Education + Merlin (primarni alati)
            </p>
            <div className="tools__primary">
              {primary.map((t, i) => (
                <span key={i} className="tool-badge" style={{ opacity: 0, background: 'rgba(255,255,255,.07)', borderColor: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.85)' }}>
                  <span className="tool-badge__icon">{t.icon}</span>
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          <p className="tools__section-title">🔗 Ostali servisi i resursi</p>
          <div className="tools__secondary">
            {secondary.map((t, i) => (
              <span key={i} className="tool-badge tool-badge--secondary" style={{ opacity: 0 }}>
                <span className="tool-badge__icon">{t.icon}</span>
                {t.name}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: '3rem',
            padding: '1.25rem 1.75rem',
            background: 'var(--white)',
            border: '1px solid var(--gray-200)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            maxWidth: '860px',
            margin: '3rem auto 0',
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>🔐</span>
          <p style={{ fontSize: '.875rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
            Nakon upisa dobivaš <strong>AAI@EduHr digitalni identitet</strong> (npr.{' '}
            <code style={{ background: 'var(--gray-100)', padding: '.1rem .3rem', borderRadius: '4px', fontSize: '.8rem' }}>
              ime.prezime@student.unipu.hr
            </code>
            ) koji ti daje pristup svim sustavima — Merlinu, Google Workspaceu i svim digitalnim resursima UNIPU.
          </p>
        </div>
      </div>
    </section>
  )
}
