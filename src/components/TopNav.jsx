const NAV_ITEMS = [
  { id: 'home',      label: 'O online studiju' },
  { id: 'putovanje', label: 'Hodogram studija' },
  { id: 'nastava',   label: 'Organizacija nastave' },
  { id: 'kviz',      label: 'Samoprocjena' },
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
      </div>
      <div className="top-nav-main">
        <button className="nav-brand" onClick={() => onNavigate('home')}>
          <img src="/images/fipu-hr.png" alt="FIPU" className="nav-brand-logo" />
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

      </div>
    </header>
  )
}
