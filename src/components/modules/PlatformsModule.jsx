import { motion } from 'framer-motion'
import ModuleHeader from '../ModuleHeader'
import { techStack } from '../../data/content'

const platforms = [
  {
    icon: '📚',
    name: 'Merlin (Moodle/SRCE)',
    desc: 'Polazno mjesto za sve — kolegiji, video lekcije, materijali, kvizovi, ocjene, obavijesti i pristup svim alatima.',
    code: 'merlin.srce.hr',
  },
  {
    icon: '💬',
    name: 'Google Chat (Spaces)',
    desc: 'Brza komunikacija s profesorima i kolegama. Svaki kolegij ima vlastiti Space. Umjesto e-maila — koristi Chat!',
    code: 'FIPU online: AAAAQS945n4',
  },
  {
    icon: '📹',
    name: 'Google Meet',
    desc: 'Sinkrona nastava, konzultacije i grupni sastanci. Linkovi za predavanja nalaze se u Google Calendaru i na Merlinu.',
    code: null,
  },
  {
    icon: '📅',
    name: 'Google Calendar',
    desc: 'Raspored sinkrone nastave — predavanja i vježbe najčešće od 18:00 nadalje radnim danima.',
    code: null,
  },
  {
    icon: '💾',
    name: 'Google Drive',
    desc: 'Dijeljenje dokumenata, snimke predavanja i suradnja na projektima. Pristup putem Merlina ili direktno.',
    code: null,
  },
  {
    icon: '🐍',
    name: 'Google Colab',
    desc: 'Za laboratorijske vježbe i projekte u Pythonu. Integracija s Google Driveom — nema instalacije.',
    code: null,
  },
  {
    icon: '🦊',
    name: 'GitLab',
    desc: 'Verzioniranje koda za softverske projekte. Nastavnik prati napredak, studenti surađuju na repozitorijima.',
    code: null,
  },
  {
    icon: '🏛️',
    name: 'Studomat / ISVU',
    desc: 'Evidencija studenata, upis kolegija, prijave ispitnih rokova, rezultati ispita i administrativni podaci.',
    code: 'isvu.hr',
  },
  {
    icon: '✨',
    name: 'Gemini (Google AI)',
    desc: 'AI asistent dostupan studentima i nastavnicima u sklopu Google Workspace for Education licencije.',
    code: null,
  },
]

const stagger = (i) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.04 * i, duration: 0.35 } })

export default function PlatformsModule() {
  return (
    <div>
      <ModuleHeader
        tag="Platforme i alati"
        title="Ekosustav "
        accentWord="alata"
        subtitle="Merlin · Google Workspace · GitLab · ISVU · AI asistenti"
        image="/images/tech-bg.jpg"
        imgPosition="center 60%"
      />

      <div className="module-body">
        {/* Platforme */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">🛠️</span>Platforme koje koristiš</h2>
          <div className="platform-cards">
            {platforms.map((p, i) => (
              <motion.div key={i} className="platform-card" {...stagger(i)}>
                <div className="platform-icon">{p.icon}</div>
                <div className="platform-name">{p.name}</div>
                <div className="platform-desc">{p.desc}</div>
                {p.code && <div className="platform-code">{p.code}</div>}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Communication priority */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">📋</span>Prioritet komunikacije</h2>
          <div className="card">
            <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: 14 }}>
              Kada naiđeš na pitanje ili problem, koristi ovaj redoslijed kontaktiranja:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                ['1', 'Merlin', 'Forum kolegija — javno pitanje koristi svim studentima'],
                ['2', 'Google Chat', 'Brza pitanja nositelju kolegija ili asistentu'],
                ['3', 'Google Chat', 'Prodekan za nastavu (složenija pitanja)'],
                ['4', 'Google Chat / e-mail', 'Dekan ili referada za administrativna pitanja'],
              ].map(([n, platform, desc]) => (
                <div key={n} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--accent-dim)', color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</span>
                  <div>
                    <span style={{ fontSize: '0.83rem', fontWeight: 700, color: 'var(--white)' }}>{platform}</span>
                    <span style={{ fontSize: '0.76rem', color: 'var(--muted)', display: 'block' }}>{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">🧑‍💻</span>Tehnologije koje učiš</h2>
          <div className="techstack-img-wrap" style={{ marginBottom: 18 }}>
            <img src="/images/techstack.jpg" alt="FIPU Tech Stack 2026" />
          </div>
          <div className="tech-categories">
            {techStack.map((cat, i) => (
              <motion.div key={i} className="tech-category" {...stagger(i)}>
                <div className="tech-cat-name">{cat.category}</div>
                <div className="tech-items">
                  {cat.items.map((item, j) => (
                    <div key={j} className="tech-item">{item}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sigurnost */}
        <div className="mod-section">
          <h2 className="mod-section-title"><span className="icon">🔒</span>Sigurnost i privatnost</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              ['✅', 'Koristi institucionalni Google račun', 'Sve komunikacije i rad obavljaj putem UNIPU računа (@unipu.hr).'],
              ['🚫', 'Ne dijeli povjerljive info', 'Osjetljive informacije ostaju privatne — ne dijelite ih putem Chata ili Drivea.'],
              ['📵', 'Bez snimanja nastave', 'Snimanje nastave bez dozvole je zabranjeno radi zaštite sudionika.'],
              ['⚠️', 'Sankcije za kršenje pravila', 'Kršenje privatnosti i neprihvatljiva komunikacija bit će sankcionirani.'],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ display: 'flex', gap: 11, padding: '13px 14px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--white)', marginBottom: 3 }}>{title}</div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--muted)', lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
