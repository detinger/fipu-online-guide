import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { techStack } from '../../data/content'

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="techstack" className="full-section techstack-section" ref={ref}>
      <div className="section-content techstack-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Što ćeš naučiti</span>
          <h2>Tech <span className="accent">Stack</span></h2>
          <p className="section-intro">
            Najmoderniji developerski curriculum — od programiranja do AI, Blockchaina i IoT-a.
          </p>
        </motion.div>

        <div className="techstack-layout">
          <motion.div
            className="techstack-infographic"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <img src="/images/techstack.jpg" alt="FIPU Tech Stack — Google for Education ecosystem" />
            <p className="infographic-caption">Google for Education ekosustav kojeg koristi FIPU</p>
          </motion.div>

          <div className="techstack-categories">
            {techStack.map((cat, i) => (
              <motion.div
                key={cat.category}
                className="tech-cat"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <h4>{cat.category}</h4>
                <div className="tech-tags">
                  {cat.items.map((item) => (
                    <span key={item} className="tech-tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
