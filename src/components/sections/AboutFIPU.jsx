import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats, milestones } from '../../data/content'

function AnimatedCounter({ value, suffix, inView }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) { setDisplay(value); clearInterval(timer) }
      else setDisplay(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return <span>{value === 2018 ? value : display}{suffix}</span>
}

export default function AboutFIPU() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="full-section about-section" ref={ref}>
      <div className="about-bg">
        <img src="/images/photos/pula-arena.jpg" alt="Pula Arena" />
        <div className="about-overlay" />
      </div>

      <div className="section-content about-content">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Tko smo mi</span>
          <h2>Fakultet informatike<br /><span className="accent">u Puli</span></h2>
          <p className="about-intro">
            Sastavnica Sveučilišta Jurja Dobrile u Puli, osnovana 2018. Najprosperitetnija sastavnica UNIPU.
            Pokretači <strong>prvog sveučilišnog online studija informatike u Hrvatskoj</strong>.
          </p>
        </motion.div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-value">
                {inView && <AnimatedCounter value={s.value} suffix={s.suffix} inView={inView} />}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="milestones"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3>Ključne prekretnice</h3>
          <ul className="milestones-list">
            {milestones.map((m, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
              >
                <span className="milestone-dot" />
                {m}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.blockquote
          className="mission-quote"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          „FIPU je posvećen izvrsnosti u znanstvenom radu i nastavi, pružajući visokokvalitetno
          obrazovanje koje integrira suvremene tehnologije i praktične vještine."
        </motion.blockquote>
      </div>
    </section>
  )
}
