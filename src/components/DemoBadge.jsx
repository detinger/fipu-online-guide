import { useState } from 'react'

export default function DemoBadge() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'fixed', top: 36, right: 24, zIndex: 1000 }}>
      {/* Collapsed circle */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          title="Ogledni demo kolegij"
          style={{
            width: 100, height: 100, borderRadius: '50%',
            background: 'var(--navy)',
            border: '3px solid var(--fipu-cyan)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 2,
            cursor: 'pointer', boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
            color: 'var(--fipu-cyan)', textAlign: 'center',
            fontSize: '0.65rem', fontWeight: 800, lineHeight: 1.25,
            textTransform: 'uppercase', letterSpacing: '0.04em',
            transform: 'rotate(-6deg)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            padding: 0,
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'rotate(-6deg) scale(1.08)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,0.45)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'rotate(-6deg)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.35)' }}
        >
          <span style={{ fontSize: '1.7rem', lineHeight: 1 }}>🎓</span>
          <span>Demo</span>
          <span>Kolegij</span>
        </button>
      )}

      {/* Expanded card */}
      {open && (
        <div style={{
          width: 280, borderRadius: 16,
          background: 'var(--navy)',
          border: '2px solid var(--fipu-cyan)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.45)',
          transform: 'rotate(-2deg)',
          overflow: 'hidden',
          animation: 'demoOpen 0.22s ease-out',
        }}>
          <style>{`
            @keyframes demoOpen {
              from { opacity: 0; transform: rotate(-2deg) scale(0.88); }
              to   { opacity: 1; transform: rotate(-2deg) scale(1); }
            }
          `}</style>

          {/* Screenshot */}
          <div style={{ position: 'relative' }}>
            <img
              src="/images/fipu-demo-kolegij.png"
              alt="FIPU Demo kolegij"
              style={{ width: '100%', display: 'block', maxHeight: 160, objectFit: 'cover', objectPosition: 'top' }}
            />
            <button
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute', top: 8, right: 8,
                width: 26, height: 26, borderRadius: '50%',
                background: 'rgba(0,0,0,0.55)', border: 'none',
                color: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', lineHeight: 1,
              }}
              title="Zatvori"
            >×</button>
          </div>

          {/* Content */}
          <div style={{ padding: '14px 16px 16px' }}>
            <span style={{
              display: 'inline-block', marginBottom: 8,
              background: 'var(--fipu-cyan)', color: 'var(--navy)',
              fontSize: '0.6rem', fontWeight: 800,
              padding: '2px 8px', borderRadius: 9999,
              textTransform: 'uppercase', letterSpacing: '0.06em',
            }}>
              Ogledni kolegij
            </span>
            <p style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 700, margin: '0 0 6px', lineHeight: 1.35 }}>
              Online izvanredni studij — Informatika
            </p>
            <a
              href="https://fipu.unipu.hr/fipu/demo"
              target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                color: 'var(--fipu-cyan)', fontSize: '0.72rem', fontWeight: 600,
                textDecoration: 'none', marginBottom: 12,
              }}
            >
              fipu.unipu.hr/fipu/demo
              <span style={{ fontSize: '0.7rem' }}>↗</span>
            </a>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 6px' }}>
              Primjeri lekcija:
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {['Osnove IKT', 'Programiranje u skriptnim jezicima', 'Baze podataka 1', 'Programiranje'].map(k => (
                <li key={k} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.85)', fontSize: '0.73rem' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--fipu-cyan)', flexShrink: 0, display: 'inline-block' }} />
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
