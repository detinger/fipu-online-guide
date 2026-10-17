import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ModuleHeader from '../ModuleHeader'
import { programs } from '../../data/content'

export default function ProgramsModule() {
  const [activeProg, setActiveProg] = useState(0)
  const [activeSem, setActiveSem] = useState(0)
  const prog = programs[activeProg]

  const handleProg = (i) => { setActiveProg(i); setActiveSem(0) }

  return (
    <div>
      <ModuleHeader
        tag="Studijski programi"
        title="Prijediplomski i "
        accentWord="diplomski studij"
        subtitle="3 programa · 180 + 120 ECTS · Online izvanredni studij"
        image="/images/students-lab1.jpg"
        imgPosition="center 50%"
      />

      <div className="module-body">
        <div className="program-tabs">
          {programs.map((p, i) => (
            <button
              key={p.id}
              className={`program-tab ${activeProg === i ? 'active' : ''}`}
              onClick={() => handleProg(i)}
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
          >
            <div className="program-detail">
              <div className="program-meta">
                <div className="program-meta-title">{prog.title}</div>
                <div className="program-meta-sub">{prog.subtitle}</div>
                <div className="program-badges">
                  <span className="badge accent">⏱ {prog.duration}</span>
                  <span className="badge accent">📚 {prog.ects} ECTS</span>
                  <span className="badge">💰 {prog.tuition}</span>
                </div>
                <div className="degree-chip">🎓 {prog.degree}</div>
              </div>

              <div className="program-outcomes">
                <h4>Ishodi učenja</h4>
                <div className="outcomes-list">
                  {prog.outcomes.map((o, i) => (
                    <div key={i} className="outcome-item">{o}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Semestri */}
            <div className="card" style={{ padding: 20 }}>
              <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--white)', marginBottom: 14 }}>
                Kolegiji po semestrima
              </h3>
              <div className="sem-tabs">
                {prog.semesters.map((s, i) => (
                  <button
                    key={i}
                    className={`sem-tab ${activeSem === i ? 'active' : ''}`}
                    onClick={() => setActiveSem(i)}
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
                  <div className="course-list">
                    {prog.semesters[activeSem].courses.map((c, i) => (
                      <div key={i} className="course-item">
                        <span className="course-name">{c.name}</span>
                        <span className="course-ects">{c.ects} ECTS</span>
                        <span className={`course-type ${c.type}`}>{c.type}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
