import { useState, useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { useInView } from '../hooks/useInView'
import { quizQuestions } from '../data/programs'

export default function IsItForMe() {
  const [answers, setAnswers] = useState({})
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      anime({
        targets: '.quiz__question',
        opacity: [0, 1],
        translateY: [16, 0],
        delay: anime.stagger(80),
        duration: 500,
        easing: 'easeOutExpo',
      })
    }
  }, [inView])

  const toggle = (i) => {
    setAnswers(a => ({ ...a, [i]: a[i] === 'yes' ? 'no' : 'yes' }))
  }

  const answered = Object.keys(answers).length
  const yesCount = Object.values(answers).filter(v => v === 'yes').length
  const pct = answered ? Math.round((answered / quizQuestions.length) * 100) : 0
  const allAnswered = answered === quizQuestions.length
  const great = yesCount >= 6

  return (
    <section className="section section--gray" id="quiz" ref={ref}>
      <div className="container">
        <div className="section-header section-header--center">
          <p className="section-label">Samoprocjena</p>
          <h2 className="section-title">
            Online studij —<br />
            <span className="accent">je li to za mene?</span>
          </h2>
          <p className="section-subtitle">
            Odgovori iskreno na ova pitanja. Oni koji nemaju osigurane
            adekvatne uvjete za studiranje online, teže će ostvariti dobre rezultate.
          </p>
        </div>

        <div className="quiz__layout">
          <div className="quiz__progress">
            <div className="quiz__progress-bar" style={{ width: `${pct}%` }} />
          </div>
          <p style={{ fontSize: '.8rem', color: 'var(--gray-500)', marginBottom: '1.5rem', textAlign: 'center' }}>
            {answered} / {quizQuestions.length} odgovoreno
          </p>

          <div className="quiz__grid">
            {quizQuestions.map((q, i) => (
              <div
                key={i}
                className={`quiz__question${answers[i] ? ' ' + answers[i] : ''}`}
                style={{ opacity: 0 }}
                onClick={() => toggle(i)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && toggle(i)}
              >
                <div className="quiz__q-num">{i + 1}</div>
                <div className="quiz__q-text">{q}</div>
                <div className="quiz__q-icon">
                  {answers[i] === 'yes' ? '✅' : answers[i] === 'no' ? '⬜' : '⬜'}
                </div>
              </div>
            ))}
          </div>

          {allAnswered && (
            <div className={`quiz__result quiz__result--${great ? 'great' : 'maybe'}`}>
              <div className="quiz__result-icon">{great ? '🚀' : '💭'}</div>
              <div className="quiz__result-title">
                {great
                  ? `Odlično! ${yesCount}/8 — Spreman/na za online studij`
                  : `${yesCount}/8 — Razmisli još jednom`}
              </div>
              <p className="quiz__result-text">
                {great
                  ? 'Imaš sve preduvjete za uspješan online studij na FIPU. Istraži studijske programe i prijavi se!'
                  : 'Preporučamo da se detaljno informiraš o uvjetima online studiranja. Slobodno nas kontaktiraj za razgovor.'}
              </p>
              {great && (
                <a
                  href="#programi"
                  className="btn btn-primary"
                  style={{ marginTop: '1.25rem', display: 'inline-flex' }}
                >
                  Pogledaj programe →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
