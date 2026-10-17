import { motion } from 'framer-motion'
import ModuleHeader from '../ModuleHeader'
import { enrollmentSteps } from '../../data/content'

export default function EnrollmentModule() {
  return (
    <div>
      <ModuleHeader
        tag="Upis na studij"
        title="Koraci do "
        accentWord="upisa"
        subtitle="Od prve informacije do prvog dana studiranja"
        image="/images/student-waterfront.jpg"
        imgPosition="center 40%"
      />

      <div className="module-body">
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">📝</span>Postupak upisa</h2>
          <div className="steps-timeline">
            {enrollmentSteps.map((s, i) => (
              <motion.div
                key={i}
                style={{ display: 'flex', gap: 16, position: 'relative' }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.35 }}
              >
                {i < enrollmentSteps.length - 1 && (
                  <div style={{ position: 'absolute', left: 21, top: 46, bottom: 0, width: 2, background: 'var(--border)' }} />
                )}
                <div className="step-num">{s.step}</div>
                <div className="step-body">
                  <div className="step-title">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Uvjeti upisa */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">✅</span>Uvjeti upisa</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              ['🎓', 'Prijediplomski studij', 'Završena četverogodišnja srednja škola i položena državna matura. Bez posebnih preduvjeta iz informatike.'],
              ['📜', 'Diplomski studij', 'Završen prijediplomski ili stručni studij odgovarajućeg smjera. Uvjeti za upis definirani su pravilnikom studija.'],
              ['💰', 'Školarina', 'Prijediplomski: 2.000 EUR/god. · Diplomski: 3.000 EUR/god. Moguće plaćanje u ratama.'],
              ['📅', 'Rok za upis', 'Upisi se objavljuju svake godine. Pratite unipu.hr/upisi za aktualni rokove i procedure.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="card">
                <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{icon}</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--white)', marginBottom: 5 }}>{title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Kontakt */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">📬</span>Pitanja o upisu?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div className="card" style={{ background: 'var(--accent-dim)', borderColor: 'var(--accent-glow)' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: 8 }}>✉️</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--white)', marginBottom: 5 }}>E-mail</div>
              <a href="mailto:fipu-ured@unipu.hr" style={{ fontSize: '0.82rem', color: 'var(--accent)' }}>fipu-ured@unipu.hr</a>
            </div>
            <div className="card" style={{ background: 'var(--accent-dim)', borderColor: 'var(--accent-glow)' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: 8 }}>📞</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--white)', marginBottom: 5 }}>Telefon</div>
              <a href="tel:+38552877438" style={{ fontSize: '0.82rem', color: 'var(--accent)' }}>+385 52 877 438</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
