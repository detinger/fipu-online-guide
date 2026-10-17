import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contact" className="full-section contact-section" ref={ref}>
      <div className="contact-bg">
        <img src="/images/photos/students-promenade.jpg" alt="Studenti na šetnici" />
        <div className="contact-overlay" />
      </div>

      <div className="section-content contact-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Tu smo za tebe</span>
          <h2>Kontaktiraj <span className="accent">FIPU</span></h2>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="contact-icon">📍</span>
            <h3>Adresa</h3>
            <p>Fakultet informatike<br />Sveučilište Jurja Dobrile u Puli<br />Ulica Alda Negrija 6, 52100 Pula</p>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="contact-icon">📧</span>
            <h3>E-mail</h3>
            <p>
              <a href="mailto:fipu-ured@unipu.hr">fipu-ured@unipu.hr</a><br />
              <a href="mailto:ured-za-studente@unipu.hr">ured-za-studente@unipu.hr</a>
            </p>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <span className="contact-icon">📞</span>
            <h3>Telefon</h3>
            <p>
              <a href="tel:+38552877438">+385/52-877-438</a><br />
              <small>052/377-006 · 052/377-010 · 052/377-043</small>
            </p>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <span className="contact-icon">🌐</span>
            <h3>Web</h3>
            <p>
              <a href="https://fipu.unipu.hr" target="_blank" rel="noopener">fipu.unipu.hr</a><br />
              <a href="https://www.unipu.hr/upisi/" target="_blank" rel="noopener">unipu.hr/upisi</a>
            </p>
          </motion.div>
        </div>

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="fipu-footer-logo">
            <img src="/favicon.svg" alt="FIPU" />
            <div>
              <strong>FIPU</strong> — Fakultet informatike u Puli<br />
              <small>Sveučilište Jurja Dobrile u Puli · Online izvanredni studij Informatike</small>
            </div>
          </div>
          <p className="footer-note">
            © {new Date().getFullYear()} FIPU · Interaktivni vodič za studente online izvanrednih studija
          </p>
        </motion.div>
      </div>
    </section>
  )
}
