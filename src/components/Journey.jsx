import { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { useInView } from '../hooks/useInView'
import { journeySteps } from '../data/programs'

export default function Journey() {
  const [ref, inView] = useInView()
  const lineRef = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    if (inView && !animated.current) {
      animated.current = true

      anime({
        targets: '.journey__step',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(200),
        duration: 600,
        easing: 'easeOutExpo',
        complete: () => {
          document.querySelectorAll('.journey__step').forEach(el => {
            el.classList.add('active')
          })
        },
      })

      if (lineRef.current) {
        anime({
          targets: lineRef.current,
          width: ['0%', '80%'],
          duration: 1600,
          delay: 400,
          easing: 'easeInOutQuart',
        })
      }
    }
  }, [inView])

  return (
    <section className="section journey" id="hodogram" ref={ref}>
      <div className="container">
        <div className="section-header section-header--center">
          <p className="section-label section-label--white">Student Journey</p>
          <h2 className="section-title section-title--white">
            Tvoj put do <span className="accent">diplome</span>
          </h2>
          <p className="section-subtitle section-subtitle--white">
            Od prve informacije do diplome — evo kako izgleda studijski put
            na FIPU online studiju.
          </p>
        </div>

        <div className="journey__track" style={{ marginTop: '3.5rem' }}>
          <div className="journey__line" />
          <div className="journey__line-fill" ref={lineRef} />

          {journeySteps.map((step, i) => (
            <div key={i} className="journey__step" style={{ opacity: 0 }}>
              <div className="journey__node">
                <span>{step.icon}</span>
                <div className="journey__step-num">{i + 1}</div>
              </div>
              <h3 className="journey__step-title">{step.title}</h3>
              <p className="journey__step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
