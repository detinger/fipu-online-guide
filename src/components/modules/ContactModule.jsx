import { motion } from 'framer-motion'
import ModuleHeader from '../ModuleHeader'

const stagger = (i) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.08 * i, duration: 0.35 } })

export default function ContactModule() {
  return (
    <div>
      <ModuleHeader
        tag="Kontakt"
        title="Tu smo "
        accentWord="za tebe"
        subtitle="Studentska referada · Dekanat · FIPU online podrška"
        image="/images/pula-aerial2.jpg"
        imgPosition="center 50%"
      />

      <div className="module-body">
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">📬</span>Kontaktiraj FIPU</h2>
          <div className="contact-grid">
            {[
              { icon: '📍', title: 'Adresa', content: <>Fakultet informatike<br />Sveučilište Jurja Dobrile u Puli<br />Preradovićeva 1, 52100 Pula</> },
              { icon: '📧', title: 'E-mail', content: <><a href="mailto:fipu-ured@unipu.hr">fipu-ured@unipu.hr</a><br /><a href="mailto:ured-za-studente@unipu.hr">ured-za-studente@unipu.hr</a></> },
              { icon: '📞', title: 'Telefon', content: <><a href="tel:+38552877438">+385 52 877 438</a><br /><small style={{ color: 'var(--muted-lo)' }}>052/377-006 · 052/377-010 · 052/377-043</small></> },
              { icon: '🌐', title: 'Web', content: <><a href="https://fipu.unipu.hr" target="_blank" rel="noopener">fipu.unipu.hr</a><br /><a href="https://www.unipu.hr/upisi/" target="_blank" rel="noopener">unipu.hr/upisi</a></> },
            ].map((c, i) => (
              <motion.div key={i} className="contact-card" {...stagger(i)}>
                <span className="contact-icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Karta */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">🗺️</span>Lokacija</h2>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)', height: 280, position: 'relative', background: 'var(--bg-card)' }}>
            <img
              src="/images/campus-aerial.jpg"
              alt="FIPU kampus"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 50%', opacity: 0.7 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,13,26,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', padding: 20 }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>📍</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: 4 }}>FIPU · Preradovićeva 1, Pula</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>Sveučilište Jurja Dobrile u Puli</div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Chat */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">💬</span>Google Chat prostori (Spaces)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
            {[
              { name: 'FIPU', desc: 'Svi studenti i nastavnici', code: 'AAAAfaLaZw0' },
              { name: 'FIPU online studenti', desc: 'Online studenti i nastavnici', code: 'AAAAQS945n4' },
              { name: 'FIPU redoviti studenti', desc: 'Redoviti studenti i nastavnici', code: 'AAAAJ4Xne6g' },
            ].map((space) => (
              <div key={space.name} className="card">
                <div style={{ fontSize: '1.4rem', marginBottom: 7 }}>💬</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--white)', marginBottom: 3 }}>{space.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: 8 }}>{space.desc}</div>
                <div className="platform-code">Kôd: {space.code}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-footer-bar">
          <div className="contact-footer-logo">
            <img src="/favicon.svg" alt="FIPU" />
            <div>
              <strong>FIPU</strong>
              <small>Fakultet informatike u Puli · Sveučilište Jurja Dobrile</small>
            </div>
          </div>
          <div className="footer-note">
            © {new Date().getFullYear()} FIPU · Interaktivni vodič za studente online izvanrednih studija
          </div>
        </div>
      </div>
    </div>
  )
}
