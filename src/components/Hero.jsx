import { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'

export default function Hero() {
  const logoRef = useRef(null)
  const tagRef = useRef(null)
  const subtitleRef = useRef(null)
  const actionsRef = useRef(null)
  const scrollRef = useRef(null)
  const onlineRef = useRef(null)
  const izvanRef = useRef(null)
  const studijRef = useRef(null)
  const infoRef = useRef(null)

  useEffect(() => {
    const tl = anime.timeline({ easing: 'easeOutExpo' })

    tl
      .add({
        targets: logoRef.current,
        scale: [0, 1],
        opacity: [0, 1],
        duration: 700,
      })
      .add({
        targets: tagRef.current,
        opacity: [0, 1],
        translateY: [12, 0],
        duration: 500,
      }, '-=300')
      .add({
        targets: onlineRef.current,
        translateY: ['110%', '0%'],
        duration: 800,
        easing: 'easeOutQuart',
      }, '-=200')
      .add({
        targets: izvanRef.current,
        translateY: ['110%', '0%'],
        duration: 700,
        easing: 'easeOutQuart',
      }, '-=550')
      .add({
        targets: studijRef.current,
        translateY: ['110%', '0%'],
        duration: 700,
        easing: 'easeOutQuart',
      }, '-=600')
      .add({
        targets: infoRef.current,
        translateY: ['110%', '0%'],
        duration: 700,
        easing: 'easeOutQuart',
      }, '-=650')
      .add({
        targets: subtitleRef.current,
        opacity: [0, 1],
        translateY: [16, 0],
        duration: 600,
      }, '-=400')
      .add({
        targets: actionsRef.current,
        opacity: [0, 1],
        translateY: [12, 0],
        duration: 500,
      }, '-=300')
      .add({
        targets: scrollRef.current,
        opacity: [0, 1],
        duration: 400,
      }, '-=100')
  }, [])

  return (
    <section className="hero" id="pocetna">
      <div className="hero__bg" />
      <div className="hero__overlay" />
      <div className="hero__grid" />
      <div className="hero__shape hero__shape--1" />
      <div className="hero__shape hero__shape--2" />

      <div className="hero__content">
        <div ref={logoRef} className="hero__logo" style={{ opacity: 0 }}>
          <span className="hero__logo-text">FIPU</span>
        </div>

        <div ref={tagRef} className="hero__tag" style={{ opacity: 0 }}>
          #EvolveUnipu &nbsp;·&nbsp; Fakultet informatike u Puli
        </div>

        <div className="hero__headline">
          <div style={{ overflow: 'hidden' }}>
            <span ref={onlineRef} className="hero__word hero__word--online" style={{ display: 'block', transform: 'translateY(110%)' }}>
              Online
            </span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <span ref={izvanRef} className="hero__word hero__word--izvanredni" style={{ display: 'block', transform: 'translateY(110%)' }}>
              Izvanredni
            </span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <span ref={studijRef} className="hero__word hero__word--studij" style={{ display: 'block', transform: 'translateY(110%)' }}>
              Studij
            </span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <span ref={infoRef} className="hero__word hero__word--info" style={{ display: 'block', transform: 'translateY(110%)' }}>
              Informatika
            </span>
          </div>
        </div>

        <p ref={subtitleRef} className="hero__subtitle" style={{ opacity: 0 }}>
          Vodič za studente online izvanrednih studija Informatike —
          Sveučilište Jurja Dobrile u Puli
        </p>

        <div ref={actionsRef} className="hero__actions" style={{ opacity: 0 }}>
          <a href="#programi" className="btn btn-primary btn-lg">
            Istraži programe →
          </a>
          <a href="#quiz" className="btn btn-outline btn-lg">
            Je li to za mene?
          </a>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="hero__scroll"
        style={{ opacity: 0 }}
        onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="hero__scroll-arrow" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
