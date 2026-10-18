import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const words = ['Studij.', 'Posao.', 'Život.', 'Sve zajedno.']

export default function Hero({ onNavigate }) {
  const badgeRef = useRef(null)

  useEffect(() => {
    const el = badgeRef.current
    if (!el) return
    const entry = el.animate(
      [
        { opacity: 0, transform: 'translateY(-20px)' },
        { opacity: 1, transform: 'translateY(0px)' },
      ],
      { duration: 600, delay: 200, fill: 'forwards', easing: 'ease-out' }
    )
    entry.onfinish = () => {
      el.animate(
        [
          { transform: 'translateY(0px)' },
          { transform: 'translateY(-12px)' },
          { transform: 'translateY(0px)' },
        ],
        { duration: 1400, iterations: Infinity, easing: 'ease-in-out' }
      )
    }
  }, [])

  return (
    <section id="hero" className="full-section hero-section">
      <div className="hero-bg">
        <img src="/images/photos/student-waterfront.jpg" alt="Student studira uz more" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-badge" ref={badgeRef} style={{ opacity: 0 }}>
          <img src="/favicon.svg" alt="FIPU" className="hero-logo" />
          <span>Fakultet informatike u Puli</span>
        </div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Online izvanredni<br />
          <span className="hero-accent">studij Informatike</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          Prvi sveučilišni online studij informatike u Hrvatskoj.<br />
          Studiraš kada i gdje ti odgovara — uz redovni posao.
        </motion.p>

        <motion.div
          className="hero-words"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {words.map((w, i) => (
            <motion.span
              key={w}
              className="hero-word"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 + i * 0.15, duration: 0.5 }}
            >
              {w}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          <button className="btn-primary" onClick={() => onNavigate('programs')}>
            Istraži studijske programe
          </button>
          <button className="btn-secondary" onClick={() => onNavigate('quiz')}>
            Je li ovo za mene?
          </button>
        </motion.div>

        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="scroll-arrow"
          >
            ↓
          </motion.div>
          <span>scroll za nastavak</span>
        </motion.div>
      </div>
    </section>
  )
}
