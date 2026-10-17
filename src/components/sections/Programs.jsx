import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { programs } from '../../data/content'

function CourseList({ semesters }) {
  const [openSem, setOpenSem] = useState(0)

  return (
    <div className="course-list">
      <div className="sem-tabs">
        {semesters.map((s, i) => (
          <button
            key={i}
            className={`sem-tab ${openSem === i ? 'active' : ''}`}
            onClick={() => setOpenSem(i)}
            style={openSem === i ? { borderBottomColor: 'var(--accent)' } : {}}
          >
            {s.year}. god. / {s.sem}. sem.
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={openSem}
          className="sem-courses"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          {semesters[openSem].courses.map((c) => (
            <div key={c.name} className={`course-item ${c.type}`}>
              <span className="course-name">{c.name}</span>
              <span className="course-ects">{c.ects} ECTS</span>
              <span className={`course-badge ${c.type}`}>{c.type}</span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default function Programs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const [activeProgram, setActiveProgram] = useState(0)

  const prog = programs[activeProgram]

  return (
    <section id="programs" className="full-section programs-section" ref={ref}>
      <div className="section-content programs-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Što možeš studirati</span>
          <h2>Studijski <span className="accent">programi</span></h2>
        </motion.div>

        <motion.div
          className="program-tabs"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {programs.map((p, i) => (
            <button
              key={p.id}
              className={`program-tab ${activeProgram === i ? 'active' : ''}`}
              style={activeProgram === i ? { borderColor: p.color, color: p.color } : {}}
              onClick={() => setActiveProgram(i)}
            >
              {p.name}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProgram}
            className="program-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className="program-info">
              <div className="program-header">
                <div>
                  <h3 style={{ color: prog.color }}>{prog.title}</h3>
                  <p className="program-subtitle">{prog.subtitle}</p>
                </div>
                <div className="program-meta">
                  <div className="meta-item">
                    <span className="meta-label">Trajanje</span>
                    <span className="meta-value">{prog.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">ECTS</span>
                    <span className="meta-value">{prog.ects}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Školarina</span>
                    <span className="meta-value">{prog.tuition}</span>
                  </div>
                </div>
              </div>

              <div className="program-degree">
                <span>🎓</span> {prog.degree}
              </div>

              <div className="program-body">
                <div className="program-outcomes">
                  <h4>Ishodi učenja</h4>
                  <ul>
                    {prog.outcomes.map((o) => (
                      <li key={o}><span className="check">✓</span>{o}</li>
                    ))}
                  </ul>
                </div>

                <div className="program-courses">
                  <h4>Popis kolegija</h4>
                  <CourseList semesters={prog.semesters} />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
