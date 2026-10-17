import { navItems } from '../data/content'

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <img className="sidebar-logo" src="/favicon.svg" alt="FIPU" />
        <div>
          <span className="sidebar-brand-name">FIPU</span>
          <span className="sidebar-brand-sub">Vodič za studente</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-item ${active === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>
              <span className="sidebar-label">{item.label}</span>
              <span className="sidebar-sublabel">{item.sub}</span>
            </span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-footer-inner">
          <img src="/favicon.svg" alt="FIPU" />
          <span>
            Online izvanredni studij Informatike
            <br />© {new Date().getFullYear()} FIPU · Pula
          </span>
        </div>
      </div>
    </aside>
  )
}
