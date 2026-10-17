import { useState, useEffect } from 'react'

const links = [
  { label: 'O FIPU', href: '#o-fipu' },
  { label: 'Je li za mene?', href: '#quiz' },
  { label: 'Programi', href: '#programi' },
  { label: 'Kako studiraš?', href: '#nastava' },
  { label: 'Alati', href: '#alati' },
  { label: 'Upis', href: '#upis' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar__inner">
          <a href="#" className="navbar__logo" onClick={close}>
            <div className="navbar__logo-circle">
              <svg viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="16" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16" fill="white" letterSpacing="1">FIPU</text>
              </svg>
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Fakultet informatike</span>
              <span className="navbar__logo-sub">Online vodič · Pula</span>
            </div>
          </a>

          <div className="navbar__links">
            {links.map(l => (
              <a key={l.href} href={l.href} className="navbar__link">{l.label}</a>
            ))}
            <a href="#kontakt" className="navbar__cta">Kontakt</a>
          </div>

          <button
            className="navbar__burger"
            aria-label="Izbornik"
            onClick={() => setOpen(o => !o)}
          >
            <span style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : '' }} />
          </button>
        </div>
      </nav>

      <div className={`navbar__mobile${open ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="navbar__link" onClick={close}>{l.label}</a>
        ))}
        <a href="#kontakt" className="navbar__cta" onClick={close} style={{ marginTop: '.5rem', textAlign: 'center' }}>Kontakt</a>
      </div>
    </>
  )
}
