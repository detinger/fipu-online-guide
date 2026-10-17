import { motion } from 'framer-motion'
import { sections } from '../data/content'

export default function SectionNav({ activeSection, onNavigate }) {
  return (
    <nav className="section-nav">
      {sections.map((s) => (
        <button
          key={s.id}
          className={`nav-dot ${activeSection === s.id ? 'active' : ''}`}
          onClick={() => onNavigate(s.id)}
          title={s.label}
          aria-label={s.label}
        >
          <motion.span
            className="dot-inner"
            animate={{ scale: activeSection === s.id ? 1 : 0.5, opacity: activeSection === s.id ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          />
          <span className="dot-label">{s.label}</span>
        </button>
      ))}
    </nav>
  )
}
