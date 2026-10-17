import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { stats, milestones, benefits } from '../../data/content'

function AnimCounter({ target, suffix, duration = 1800 }) {
  const [val, setVal] = useState(0)
  const started = useRef(false)
  useEffect(() => {
    if (started.current) return
    started.current = true
    const steps = 50
    const increment = target / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= target) { setVal(target); clearInterval(interval) }
      else setVal(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(interval)
  }, [target, duration])
  return <>{val}{suffix}</>
}

function Accordion({ icon, title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`accordion ${open ? 'open' : ''}`}>
      <button className="acc-header" onClick={() => setOpen(!open)}>
        <span>{icon}</span>
        <span className="acc-title">{title}</span>
        <span className="acc-arrow">▶</span>
      </button>
      {open && <div className="acc-body">{children}</div>}
    </div>
  )
}

const stagger = (i) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.05 * i, duration: 0.4 } })

export default function IntroModule({ onNavigate }) {
  return (
    <div>
      {/* ── Stitch Hero ─────────────────────────────────────────────────── */}
      <section className="module-hero">
        <div className="hero-inner">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="hero-badge">
              <span>🏆</span>
              <span>Prekretnica 2. studenoga 2022. • Prvi u Republici Hrvatskoj</span>
            </div>
            <h1 className="hero-title">
              Online sveučilišni studij <span className="accent">Informatike</span> na FIPU
            </h1>
            <p className="hero-subtitle">
              Akreditirani sveučilišni program Sveučilišta Jurja Dobrile u Puli — krojen za novu generaciju softverskih inženjera, zaposlene profesionalce i studente na daljinu.
            </p>
            <div className="hero-btns">
              <button className="hero-btn-primary" onClick={() => onNavigate('kviz')}>
                Riješi upitnik spremnosti →
              </button>
              <button className="hero-btn-secondary" onClick={() => onNavigate('nastava')}>
                ⌨️ Metodologija i alati
              </button>
            </div>
            <div className="hero-metrics">
              <div className="hero-metric">
                <div className="hero-metric-label">Režim rada</div>
                <div className="hero-metric-value">Self-paced</div>
                <div className="hero-metric-desc">Vlastiti tempo učenja</div>
              </div>
              <div className="hero-metric">
                <div className="hero-metric-label">ECTS bodovi</div>
                <div className="hero-metric-value">180 + 120</div>
                <div className="hero-metric-desc">Preddiplomski + diplomski</div>
              </div>
              <div className="hero-metric">
                <div className="hero-metric-label">Akreditacija</div>
                <div className="hero-metric-value">#1</div>
                <div className="hero-metric-desc">Sveučilišni online studij inf. u RH</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-img-card"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="hero-img-inner">
              <img src="/images/hero-student-sea.jpg" alt="Student FIPU" style={{ objectPosition: 'center 25%' }} />
              <div className="hero-img-overlay">
                <div>
                  <span style={{ display: 'inline-block', padding: '2px 9px', background: 'var(--fipu-cyan)', color: 'var(--navy)', fontSize: '0.62rem', fontWeight: 800, borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 5 }}>
                    Virtualni Kampus
                  </span>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', margin: 0 }}>Green Room · Merlin LMS</p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div style={{ background: 'rgba(216,227,251,0.1)', padding: '10px 12px', borderRadius: 9, display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ fontSize: '0.9rem' }}>✅</span>
                <span style={{ fontSize: '0.73rem', color: 'var(--inverse-primary)' }}>NVVO akreditacija</span>
              </div>
              <div style={{ background: 'rgba(216,227,251,0.1)', padding: '10px 12px', borderRadius: 9, display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ fontSize: '0.9rem' }}>🎬</span>
                <span style={{ fontSize: '0.73rem', color: 'var(--inverse-primary)' }}>Asinkroni video moduli</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────────────────────────────────── */}
      <div className="stats-bar">
        <div className="stats-bar-inner">
          {stats.map((s, i) => (
            <motion.div key={i} className="stat-card" {...stagger(i)}>
              <div className="stat-icon">{s.icon || '📊'}</div>
              <div>
                <span className="stat-value">
                  <AnimCounter target={s.value} suffix={s.suffix} />
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="module-body">
        {/* O nama */}
        <div className="mod-section">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="card">
              <div className="module-tag" style={{ marginBottom: 10 }}>O studiju</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: 12 }}>
                Fakultet informatike u Puli dobio je odobrenje za izvođenje <strong style={{ color: 'var(--white)' }}>prvog sveučilišnog online studija informatike u Hrvatskoj</strong> — prekretnica koja se dogodila 2. studenoga 2022.
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                Studij je namijenjen svima koji žele studirati uz posao, iz udaljenih mjesta ili <strong style={{ color: 'var(--white)' }}>vlastitim tempom</strong> — bez preseljenja u Pulu.
              </p>
            </div>
            <div className="card" style={{ backgroundImage: 'url(/images/campus-aerial.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: 180, position: 'relative', padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,13,26,0.45)', borderRadius: 'var(--radius)' }} />
              <div style={{ position: 'relative', padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)', fontStyle: 'italic' }}>
                  Sveučilište Jurja Dobrile u Puli · Kampus
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Prednosti */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">💡</span>Prednosti online studija na FIPU</h2>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <motion.div key={i} className="benefit-card" {...stagger(i)}>
                <div className="benefit-icon">{b.icon}</div>
                <div className="benefit-title">{b.title}</div>
                <div className="benefit-desc">{b.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        {milestones && milestones.length > 0 && (
          <div className="mod-section">
            <h2 className="mod-section-title"><span className="icon">🏆</span>FIPU u zajednici</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {milestones.map((m, i) => (
                <motion.div key={i} {...stagger(i)} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 14px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--forest-dark)', flexShrink: 0, marginTop: 5 }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>{m}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">❓</span>Česta pitanja</h2>
          <Accordion icon="⚖️" title="Razlika između redovnog i izvanrednog studija">
            <p>Prema Zakonu o visokom obrazovanju, studenti mogu biti <strong>redoviti</strong> ili <strong>izvanredni</strong>.</p>
            <p><strong>Redoviti studenti</strong> studiraju prema programu punog opterećenja, a troškove im može pokriti državni proračun.</p>
            <p><strong>Izvanredni studenti</strong> pohađaju program uz rad ili drugu aktivnost, imaju prilagođene termine nastave i školarinu plaćaju sami. Naš online studij je izvanredni studij — idealan za zaposlene ili one koji ne mogu fizički dolaziti u Pulu.</p>
          </Accordion>
          <Accordion icon="🎯" title="Zašto je FIPU otvorilo online studij?">
            <p>Otvaranje online studija bila je strateška odrednica UNIPU. Ključni razlozi:</p>
            <ul>
              <li>Brojni upiti studenata koji ne mogu dolaziti u Pulu ili rade</li>
              <li>Projekt e-Sveučilišta (CARNET, Srce) i uvođenje suvremenih alata</li>
              <li>Izgradnja Green Room Studija za multimedijske obrazovne sadržaje</li>
              <li>Inovacije u edutech sektoru i transformacija visokog obrazovanja</li>
            </ul>
          </Accordion>
          <Accordion icon="🌐" title="Tko može studirati online?">
            <p>Online studij je otvoren za sve koji ispunjavaju uvjete upisa — bez obzira na lokaciju.</p>
            <p>Posebno pogodan za <strong>zaposlene profesionalce</strong> koji žele steći ili nadograditi akademsku kvalifikaciju uz posao, roditeljske obaveze ili geografsku udaljenost.</p>
          </Accordion>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
        >
          <button className="btn-primary" onClick={() => onNavigate('home')}>
            Istraži studijske programe →
          </button>
          <button className="btn-ghost" onClick={() => onNavigate('kviz')}>
            Je li online studij za mene?
          </button>
        </motion.div>
      </div>
    </div>
  )
}
