import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ModuleHeader from '../ModuleHeader'
import { techRequirements } from '../../data/content'

const tabs = [
  { id: 'hardware',      label: '🖥️ Hardver',           items: techRequirements.hardware },
  { id: 'software',      label: '⚙️ Softver',            items: techRequirements.software },
  { id: 'digitalSkills', label: '🧠 Digitalne vještine', items: techRequirements.digitalSkills },
]

export default function RequirementsModule() {
  const [activeTab, setActiveTab] = useState('hardware')
  const [checked, setChecked] = useState({})

  const toggle = (tabId, idx) => {
    const key = `${tabId}-${idx}`
    setChecked(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const totalItems = tabs.reduce((sum, t) => sum + t.items.length, 0)
  const checkedCount = Object.values(checked).filter(Boolean).length
  const pct = Math.round((checkedCount / totalItems) * 100)

  const currentTab = tabs.find(t => t.id === activeTab)

  return (
    <div>
      <ModuleHeader
        tag="Tehnički zahtjevi"
        title="Provjeri jesi li "
        accentWord="spreman"
        subtitle="Klikni na stavke koje već imaš i prati svoju spremnost"
        image="/images/student-sea-study.jpg"
        imgPosition="center 20%"
      />

      <div className="module-body">
        <div className="mod-section">
          <div className="req-header-row">
            <div className="req-tabs">
              {tabs.map(t => (
                <button
                  key={t.id}
                  className={`req-tab ${activeTab === t.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="readiness-pill">
              {checkedCount} / {totalItems} <span>potvrđeno</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="checklist">
                {currentTab.items.map((item, i) => {
                  const key = `${activeTab}-${i}`
                  const isChecked = !!checked[key]
                  return (
                    <div
                      key={i}
                      className={`check-item ${isChecked ? 'checked' : ''}`}
                      onClick={() => toggle(activeTab, i)}
                    >
                      <div className="check-box">{isChecked ? '✓' : ''}</div>
                      <span className="check-label">{item}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="readiness-bar-wrap">
            <div className="readiness-bar" style={{ width: `${pct}%` }} />
          </div>
          <div className="readiness-label">
            Ukupna spremnost: <span>{pct}%</span>
          </div>
        </div>

        {/* Napomene */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">💡</span>Napomene</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              ['🌐', 'Brzina interneta', 'Minimalno 4 Mbit/s preuzimanje i 1 Mbit/s slanje. Preporučujemo 10+ Mbit/s za video konferencije bez problema.'],
              ['📷', 'Web kamera', 'Preporučujemo vanjsku USB kameru boljih performansi. Potrebna je za usmene ispite.'],
              ['🎧', 'Slušalice s mikrofonom', 'Kvalitetne slušalice značajno poboljšavaju iskustvo sinkrone nastave.'],
              ['💻', 'Starija računala', 'Računala starija od 5 godina mogu imati problema s video konferencijama. Provjeri specifikacije.'],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ display: 'flex', gap: 12, padding: '13px 16px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--white)', marginBottom: 3 }}>{title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.55 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
