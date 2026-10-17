import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { journeys } from '../../data/content'

export default function Journeys() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const [active, setActive] = useState(0)

  const j = journeys[active]

  return (
    <section id="journeys" className="full-section journeys-section" ref={ref}>
      <div className="section-content journeys-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Putovanje studenta</span>
          <h2>Kako <span className="accent">studirati online?</span></h2>
          <p className="section-intro">Pet ključnih procesa prikazano kao vizualni putokaz.</p>
        </motion.div>

        <motion.div
          className="journey-tabs"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {journeys.map((j, i) => (
            <button
              key={j.id}
              className={`journey-tab ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {j.title}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="journey-detail"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35 }}
          >
            <div className="journey-diagram">
              <img src={j.image} alt={j.title} className="journey-img" />
            </div>

            <div className="journey-steps">
              <h3>{j.title}</h3>
              <p className="journey-subtitle">{j.subtitle}</p>
              <ol className="journey-step-list">
                {j.steps.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.09 }}
                  >
                    <span className="step-num">{i + 1}</span>
                    <span>{s}</span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
