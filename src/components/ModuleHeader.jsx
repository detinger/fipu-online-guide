import { motion } from 'framer-motion'

export default function ModuleHeader({ tag, title, accentWord, subtitle, image, imgPosition = 'center 35%', variant = 'page' }) {
  if (variant === 'hero') {
    return (
      <section className="module-hero">
        <div className="hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {tag && (
              <div className="hero-badge">
                <span>🏆</span>
                <span>{tag}</span>
              </div>
            )}
            <h1 className="hero-title">
              {title}
              {accentWord && <span className="accent">{accentWord}</span>}
            </h1>
            {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          </motion.div>

          {image && (
            <motion.div
              className="hero-img-card"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <div className="hero-img-inner">
                <img src={image} alt="" style={{ objectPosition: imgPosition }} />
                <div className="hero-img-overlay">
                  <div>
                    <span style={{ display: 'inline-block', padding: '2px 9px', background: 'var(--fipu-cyan)', color: 'var(--navy)', fontSize: '0.65rem', fontWeight: 800, borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                      Virtualni Kampus
                    </span>
                    <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', margin: 0 }}>Merlin LMS · Google for Education Plus</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    )
  }

  return (
    <div className="page-header">
      <motion.div
        className="page-header-inner"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {tag && <span className="page-badge">{tag}</span>}
        <h1 className="page-title">
          {title}
          {accentWord && <span style={{ color: 'var(--forest-dark)' }}>{accentWord}</span>}
        </h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </motion.div>
    </div>
  )
}
