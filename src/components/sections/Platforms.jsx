import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { platforms } from '../../data/content'

export default function Platforms() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="platforms" className="full-section platforms-section" ref={ref}>
      <div className="section-content platforms-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Gdje se odvija studij</span>
          <h2>Platforme i <span className="accent">alati</span></h2>
          <p className="section-intro">
            Online studij koristi moderni ekosustav alata za asinkrono i sinkrono učenje.
          </p>
        </motion.div>

        <div className="platforms-grid">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              className="platform-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <span className="platform-icon">{p.icon}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="sync-async"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="sync-card">
            <h4>🎥 Sinkrona nastava (P / V)</h4>
            <p>Predavanja i vježbe putem Google Meeta — <strong>od 18h nadalje</strong>, radnim danima. Prisustvo nije obvezno — možeš pratiti snimke.</p>
            <div className="notation-example">
              <span>9P – 6V – 45A</span>
              <small>= 9h predavanja + 6h vježbi + 45h asinkronih aktivnosti</small>
            </div>
          </div>
          <div className="sync-card">
            <h4>📚 Asinkrona nastava (A)</h4>
            <p>Video lekcije, čitanje, diskusije, projekti, konzultacije na forumima — sve na Merlinu. Učiš <strong>vlastitim tempom</strong>, bez fiksnih termina.</p>
            <div className="notation-example">
              <span>Self-paced</span>
              <small>Bez obveze prisustvovati nastavi — sam odlučuješ kada i koliko učiš</small>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
