import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'home',             label: 'O online studiju' },
  { id: 'putovanje',        label: 'Hodogram studija' },
  { id: 'nastava',          label: 'Organizacija nastave' },
  { id: 'studijskiprogram', label: 'Studijski program' },
  { id: 'kviz',             label: 'Samoprocjena' },
]

export default function TopNav({ active, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = (id) => {
    onNavigate(id)
    setMenuOpen(false)
  }

  return (
    <header className="top-nav">
      <div className="top-nav-topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span>Sveučilište Jurja Dobrile u Puli • Fakultet informatike u Puli</span>
          <span>📞 +385 52 877 438</span>
          <span>✉️ fipu-ured@unipu.hr</span>
        </div>
      </div>
      <div className="top-nav-main">
        <div className="nav-left-group">
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Zatvori izbornik' : 'Otvori izbornik'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button className="nav-brand" onClick={() => handleNavigate('home')}>
            <img src="/images/fipu-hr.png" alt="FIPU" className="nav-brand-logo" />
          </button>
        </div>

        <nav className="nav-pill-container">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              className={`nav-pill-item${active === item.id ? ' active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <nav className="nav-mobile-menu" aria-label="Mobilni izbornik">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              className={`nav-mobile-item${active === item.id ? ' active' : ''}`}
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
