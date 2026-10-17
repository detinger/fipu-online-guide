import { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { useInView } from '../hooks/useInView'

const requirements = [
  {
    icon: '💻',
    title: 'Hardver',
    items: [
      'Moderan PC ili laptop (ne stariji od 5 godina)',
      'Pristup internetu — širokopojasni, min. 10 Mbit/s nizvodno, 5 Mbit/s uzvodno',
      'Neograničen podatkovni paket',
      'Namjenska vanjska web kamera (npr. USB)',
      'Slušalice i mikrofon',
    ],
  },
  {
    icon: '🖥️',
    title: 'Softver',
    items: [
      'Operacijski sustav: Windows 10+, macOS 12+ ili GNU/Linux',
      'Web preglednik: Chrome, Firefox ili Safari (aktualna verzija)',
      'Preglednik PDF dokumenata',
      'Visual Studio Code (preporučeno)',
      'Python 3.10+, Jupyter (ili Anaconda)',
      'C++ radno okruženje (LLVM, GCC)',
    ],
  },
  {
    icon: '🧠',
    title: 'Digitalne vještine',
    items: [
      'Informacijska / podatkovna pismenost (ECDL osnovna razina)',
      'Komunikacija i suradnja u digitalnom okruženju',
      'Stvaranje digitalnog sadržaja',
      'Sigurnost i zaštita podataka',
      'Rješavanje problema (problem-solving skills)',
    ],
  },
]

export default function TechRequirements() {
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      anime({
        targets: '.tech-card',
        opacity: [0, 1],
        translateY: [24, 0],
        delay: anime.stagger(150),
        duration: 700,
        easing: 'easeOutExpo',
      })
    }
  }, [inView])

  return (
    <section className="section" id="tehnicko" ref={ref}>
      <div className="container">
        <div className="section-header section-header--center">
          <p className="section-label">Preduvjeti</p>
          <h2 className="section-title">
            Minimalni <span className="accent">tehnički</span> zahtjevi
          </h2>
          <p className="section-subtitle">
            Za online studij potrebna ti je odgovarajuća tehnička oprema i
            digitalne vještine. Evo što je minimalno potrebno.
          </p>
        </div>

        <div className="tech__grid">
          {requirements.map((r, i) => (
            <div key={i} className="tech-card" style={{ opacity: 0 }}>
              <div className="tech-card__header">
                <span className="tech-card__icon">{r.icon}</span>
                <h3 className="tech-card__title">{r.title}</h3>
              </div>
              <ul className="tech-list">
                {r.items.map((item, j) => (
                  <li key={j} className="tech-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
