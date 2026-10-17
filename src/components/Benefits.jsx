import { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { useInView } from '../hooks/useInView'
import { benefits } from '../data/programs'

export default function Benefits() {
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      anime({
        targets: '.benefit-card',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(110),
        duration: 700,
        easing: 'easeOutExpo',
      })
    }
  }, [inView])

  return (
    <section className="section section--dark" ref={ref}>
      <div className="container">
        <div className="section-header section-header--center">
          <p className="section-label section-label--white">Zašto online studij</p>
          <h2 className="section-title section-title--white">
            Prednosti <span className="accent">online</span> učenja
          </h2>
          <p className="section-subtitle section-subtitle--white">
            E-učenje studentima omogućava učinkovito integriranje znanja i vještina
            u svakodnevni život kroz cjeloživotno obrazovanje.
          </p>
        </div>

        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card" style={{ opacity: 0 }}>
              <span className="benefit-card__icon">{b.icon}</span>
              <h3 className="benefit-card__title">{b.title}</h3>
              <p className="benefit-card__text">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
