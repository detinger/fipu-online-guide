import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { benefits } from '../../data/content'

export default function Benefits() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="benefits" className="full-section benefits-section" ref={ref}>
      <div className="benefits-bg">
        <img src="/images/photos/pula-aerial.jpg" alt="Istarska obala iz zraka" />
        <div className="benefits-overlay" />
      </div>

      <div className="section-content benefits-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Zašto online studij</span>
          <h2>Prednosti <span className="accent">online učenja</span></h2>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="benefit-card"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <span className="benefit-icon">{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
