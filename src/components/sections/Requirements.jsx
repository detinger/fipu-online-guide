import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { techRequirements } from '../../data/content'

const categories = [
  { key: 'hardware', label: '💻 Hardver', items: techRequirements.hardware },
  { key: 'software', label: '⚙️ Softver', items: techRequirements.software },
  { key: 'digitalSkills', label: '🧠 Digitalne vještine', items: techRequirements.digitalSkills },
]

export default function Requirements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="requirements" className="full-section requirements-section" ref={ref}>
      <div className="requirements-bg">
        <img src="/images/photos/students-lab2.jpg" alt="Studenti u laboratoriju" />
        <div className="requirements-overlay" />
      </div>

      <div className="section-content requirements-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Što trebaš imati</span>
          <h2>Minimalni <span className="accent">tehnički zahtjevi</span></h2>
        </motion.div>

        <div className="req-grid">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              className="req-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + ci * 0.15, duration: 0.5 }}
            >
              <h3>{cat.label}</h3>
              <ul className="req-list">
                {cat.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + ci * 0.15 + i * 0.07 }}
                  >
                    <span className="req-check">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
