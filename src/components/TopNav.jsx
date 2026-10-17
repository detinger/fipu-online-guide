const NAV_ITEMS = [
  { id: 'home',      label: 'Početna & O studiju' },
  { id: 'putovanje', label: 'Putovanje studenta' },
  { id: 'nastava',   label: 'Nastava & Alati' },
  { id: 'kviz',      label: 'Samoprocjena & Kviz' },
]

export default function TopNav({ active, onNavigate }) {
  return (
    <header className="top-nav">
      <div className="top-nav-topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span>Sveučilište Jurja Dobrile u Puli • Fakultet informatike u Puli</span>
          <span>📞 +385 52 877 438</span>
          <span>✉️ fipu-ured@unipu.hr</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="nav-topbar-badge">Akreditirani Online Studij</span>
          <a href="https://moodle.srce.hr/" target="_blank" rel="noreferrer"
             style={{ color: 'var(--on-surface-variant)', fontSize: '0.76rem' }}>
            Merlin LMS
          </a>
          <span style={{ color: 'var(--outline-variant)' }}>•</span>
          <a href="https://www.isvu.hr/studomat/" target="_blank" rel="noreferrer"
             style={{ color: 'var(--on-surface-variant)', fontSize: '0.76rem' }}>
            Studomat
          </a>
        </div>
      </div>
      <div className="top-nav-main">
        <button className="nav-brand" onClick={() => onNavigate('home')}>
          <div className="nav-brand-logo">F</div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">
              FIPU
              <span className="nav-brand-badge">Online</span>
            </span>
            <span className="nav-brand-sub">Studij Informatike</span>
          </div>
        </button>

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

        <button className="nav-cta" onClick={() => onNavigate('kviz')}>
          Provjeri spremnost →
        </button>
      </div>
    </header>
  )
}
