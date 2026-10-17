import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { enrollmentSteps } from '../../data/content'

export default function Enrollment() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="enrollment" className="full-section enrollment-section" ref={ref}>
      <div className="section-content enrollment-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Kako se upisati</span>
          <h2>Upis na <span className="accent">online studij</span></h2>
          <p className="section-intro">
            Pet koraka do statusa studenta FIPU.
          </p>
        </motion.div>

        <div className="enrollment-steps">
          {enrollmentSteps.map((s, i) => (
            <motion.div
              key={s.step}
              className="enroll-step"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.6 }}
            >
              <div className="step-connector">
                <div className="step-circle">
                  <span>{s.step}</span>
                </div>
                {i < enrollmentSteps.length - 1 && <div className="step-line" />}
              </div>
              <div className="step-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="enrollment-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <p>Svake godine objavljuju se svježe informacije za aktualni upis:</p>
          <a href="https://www.unipu.hr/upisi/" className="btn-primary" target="_blank" rel="noopener">
            Informacije o upisu — unipu.hr
          </a>
          <p className="enrollment-note">
            Za pitanja: <strong>fipu-ured@unipu.hr</strong> · <strong>+385/52-877-438</strong>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
