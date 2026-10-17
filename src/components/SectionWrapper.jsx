import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionWrapper({ id, children, className = '', onVisible }) {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.5 })

  useEffect(() => {
    if (inView) onVisible?.(id)
  }, [inView, id, onVisible])

  return (
    <section id={id} ref={ref} className={`full-section ${className}`}>
      <motion.div
        className="section-content"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
