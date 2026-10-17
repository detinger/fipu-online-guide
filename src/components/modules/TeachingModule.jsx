import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ModuleHeader from '../ModuleHeader'
import { teachingForms, synchronousRules, merlinContents, ipnTable } from '../../data/content'

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

const stagger = (i) => ({ initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.05 * i, duration: 0.35 } })

export default function TeachingModule() {
  const [activeForm, setActiveForm] = useState(null)

  return (
    <div>
      <ModuleHeader
        tag="Organizacija nastave"
        title="Kako funkcionira "
        accentWord="online nastava?"
        subtitle="Sinkroni i asinkroni oblici · IPN · Merlin · Pravila"
        image="/images/teaching-class.jpg"
        imgPosition="center 40%"
      />

      <div className="module-body">
        {/* P/V/A oblici nastave */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">📡</span>Oblici nastave</h2>
          <div className="teaching-cards">
            {teachingForms.map((f, i) => (
              <motion.div
                key={f.letter}
                className="teaching-card"
                style={{ borderColor: activeForm === i ? f.color + '55' : undefined }}
                onClick={() => setActiveForm(activeForm === i ? null : i)}
                {...stagger(i)}
              >
                <div className="teaching-letter" style={{ color: f.color }}>{f.letter}</div>
                <div className="teaching-name">{f.name}</div>
                <span
                  className="teaching-badge-pill"
                  style={{
                    background: f.color + '22',
                    color: f.color,
                    border: `1px solid ${f.color}44`,
                  }}
                >
                  {f.badge}
                </span>
                <div className="teaching-desc">{f.desc}</div>
                {f.mandatory && (
                  <div className="teaching-mandatory" style={{ color: 'var(--teal)' }}>
                    ★ Ključni oblik online studija
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {activeForm !== null && (
              <motion.div
                key={activeForm}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: 'hidden' }}
              >
                <div className="card" style={{ marginTop: 12, borderColor: teachingForms[activeForm].color + '44' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                    {teachingForms[activeForm].detail}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <p style={{ fontSize: '0.72rem', color: 'var(--muted-lo)', marginTop: 10 }}>
            Klikni na P, V ili A za više detalja.
          </p>
        </div>

        {/* Notacija */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">🔢</span>Notacija kolegija</h2>
          <div className="notation-box">
            <div className="notation-part">
              <div className="notation-letter" style={{ color: '#5DADE2' }}>9P</div>
              <div className="notation-val">9 sati predavanja</div>
            </div>
            <div className="notation-sep">·</div>
            <div className="notation-part">
              <div className="notation-letter" style={{ color: '#2E86AB' }}>6V</div>
              <div className="notation-val">6 sati vježbi</div>
            </div>
            <div className="notation-sep">·</div>
            <div className="notation-part">
              <div className="notation-letter" style={{ color: '#00C9A7' }}>45A</div>
              <div className="notation-val">45 sati asinkrono</div>
            </div>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.65, marginTop: 10 }}>
            Notacija <strong style={{ color: 'var(--white)' }}>9P · 6V · 45A</strong> znači: 9 sati sinkronih predavanja (Google Meet), 6 sati sinkronih vježbi (Google Meet) i 45 sati asinkronih aktivnosti na Merlinu.
            Isti kolegij na redovnom studiju ima opterećenje <strong style={{ color: 'var(--white)' }}>30P · 30V</strong>.
          </p>
        </div>

        {/* IPN tablica */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">📊</span>Izvedbeni plan nastave (IPN)</h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: 16 }}>
            Svaki kolegij ima IPN koji definira aktivnosti, broj sati, ECTS bodove i udio u završnoj ocjeni.
            Primjer za kolegij od 6 ECTS:
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table className="ipn-table">
              <thead>
                <tr>
                  <th>Aktivnost</th>
                  <th>Ishodi</th>
                  <th>Teme</th>
                  <th>Sati</th>
                  <th>ECTS</th>
                  <th>Udio ocjene</th>
                </tr>
              </thead>
              <tbody>
                {ipnTable.map((row, i) => (
                  <tr key={i}>
                    <td>{row.activity}</td>
                    <td>{row.outcomes}</td>
                    <td>{row.topics}</td>
                    <td>{row.hours}</td>
                    <td>{row.ects.toFixed(1)}</td>
                    <td>
                      <span className={`share-badge ${row.share === 0 ? 'zero' : 'pct'}`}>
                        {row.share}%
                      </span>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td><strong>Ukupno</strong></td>
                  <td>–</td>
                  <td>–</td>
                  <td><strong>180</strong></td>
                  <td><strong>6.0</strong></td>
                  <td><strong>100%</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="formula-row">
            <span className="formula-label">Ocjena =</span>
            <span className="formula-part">Zadaci × 0,1</span>
            <span className="formula-op">+</span>
            <span className="formula-part">Projekt × 0,4</span>
            <span className="formula-op">+</span>
            <span className="formula-part">Ispit × 0,5</span>
          </div>
        </div>

        {/* Merlin */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">📚</span>Što sadrži kolegij na Merlinu?</h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: 14 }}>
            Svaki e-kolegij na Merlinu mora sadržavati minimum:
          </p>
          <div className="merlin-list">
            {merlinContents.map((item, i) => (
              <motion.div key={i} className="merlin-item" {...stagger(i)}>
                {item}
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: 16, padding: '12px 16px', background: 'var(--accent-dim)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--accent-glow)' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 700 }}>
              Prema posljednjoj procjeni: <strong>&gt;90%</strong> kolegija zadovoljava minimalne kriterije, a <strong>&gt;10%</strong> nudi iznimno naprednu razinu sadržaja.
            </p>
          </div>
        </div>

        {/* Pravila sinkrone nastave */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">📹</span>Pravila sinkrone nastave (Google Meet)</h2>
          <div className="rules-list">
            {synchronousRules.map((rule, i) => (
              <motion.div key={i} className="rule-item" {...stagger(i)}>
                <span className="rule-icon">{rule.icon}</span>
                <div>
                  <div className="rule-title">{rule.title}</div>
                  <div className="rule-desc">{rule.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">❓</span>Česta pitanja o nastavi</h2>
          <Accordion icon="🎓" title="Moram li prisustvovati sinkronoj nastavi?">
            <p>Ne — prisustvo sinkronoj nastavi (predavanja i vježbe) <strong>nije obvezno</strong> za online studente.</p>
            <p>Sinkrona nastava odvija se putem Google Meet-a, najčešće od 18:00 nadalje radnim danima. Snimke su često dostupne naknadno na Google Driveu i putem Merlina.</p>
          </Accordion>
          <Accordion icon="📝" title="Kako izgledaju ispiti?">
            <p>Ispiti se provode <strong>online putem videokonferencije</strong> (Google Meet).</p>
            <ul>
              <li><strong>Pismeni/praktični ispit:</strong> Dokazuje sposobnost rješavanja zadataka iz prakse</li>
              <li><strong>Usmeni ispit:</strong> Ocjenjuje teorijsko razumijevanje gradiva</li>
            </ul>
            <p>Pred ispit moraš ispuniti sve obveze definirne IPN-om kolegija (zadaci, projekt).</p>
          </Accordion>
          <Accordion icon="⏰" title="Koliko sati tjedno trebam učiti?">
            <p>Preporučuje se <strong>2–4 sata dnevno</strong> za prosječan napredak kroz gradivo. To je individualno — online studij omogućuje fleksibilno učenje.</p>
            <p>Opterećenje ovisi o broju upisanih kolegija. Svaki ECTS bod predstavlja <strong>25–30 sati rada</strong> (uključujući predavanja, vježbe, samostalni rad i ispit).</p>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
