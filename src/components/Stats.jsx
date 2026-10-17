import { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { useInView } from '../hooks/useInView'

const stats = [
  { value: 400, suffix: '+', label: 'Aktivnih studenata' },
  { value: 50, suffix: '+', label: 'Diplomiranih godišnje' },
  { value: 180, suffix: ' ECTS', label: 'Prijediplomski studij' },
  { value: 120, suffix: ' ECTS', label: 'Diplomski studij' },
]

export default function Stats() {
  const [ref, inView] = useInView()
  const animated = useRef(false)
  const numRefs = useRef([])

  useEffect(() => {
    if (inView && !animated.current) {
      animated.current = true
      numRefs.current.forEach((el, i) => {
        if (!el) return
        const stat = stats[i]
        anime({
          targets: el,
          innerHTML: [0, stat.value],
          duration: 1800,
          delay: i * 180,
          easing: 'easeOutExpo',
          round: 1,
          update: (anim) => {
            const v = Math.round(anim.animations[0]?.currentValue ?? 0)
            if (el) el.textContent = v + stat.suffix
          },
        })
      })
      anime({
        targets: '.stats__item',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(120),
        duration: 600,
        easing: 'easeOutExpo',
      })
    }
  }, [inView])

  return (
    <section className="stats" id="stats" ref={ref}>
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <div key={i} className="stats__item">
              <div
                className="stats__number"
                ref={el => (numRefs.current[i] = el)}
              >
                0{s.suffix}
              </div>
              <div className="stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
