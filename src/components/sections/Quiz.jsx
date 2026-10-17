import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { selfAssessmentQuestions } from '../../data/content'

export default function Quiz({ onNavigate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  // answers[i] = true (da) | false (ne) | undefined (nije odgovoreno)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const answer = (i, val) => {
    if (submitted) return
    setAnswers((prev) => {
      // Drugi klik na istu opciju = poništi odgovor
      if (prev[i] === val) {
        const next = { ...prev }
        delete next[i]
        return next
      }
      return { ...prev, [i]: val }
    })
  }

  const answered = Object.keys(answers).length
  const score = Object.values(answers).filter(Boolean).length
  const total = selfAssessmentQuestions.length
  const allAnswered = answered === total

  const getResult = () => {
    if (score === total) return { label: 'Odlično!', detail: 'Online studij je savršen za tebe.', color: '#27AE60', advice: 'Imaš sve preduvjete. Pogledaj studijske programe i kreni s upisom!' }
    if (score >= 6) return { label: 'Dobro!', detail: 'Uz malo pripreme možeš uspjeti.', color: '#F39C12', advice: 'Provjeri koje uvjete još možeš riješiti i kontaktiraj nas za savjet.' }
    if (score >= 4) return { label: 'Razmisli.', detail: 'Vrijedi razgovarati s nama.', color: '#E67E22', advice: 'Preporučujemo razgovor s timom FIPU kako bismo procijenili opcije.' }
    return { label: 'Možda još ne.', detail: 'Online studij sad možda nije pravi.', color: '#E74C3C', advice: 'Javi nam se — zajedno možemo pronaći rješenje ili pravi trenutak.' }
  }

  return (
    <section id="quiz" className="full-section quiz-section" ref={ref}>
      <div className="quiz-bg">
        <img src="/images/photos/students-coast.jpg" alt="Studenti uz more" />
        <div className="quiz-overlay" />
      </div>

      <div className="section-content quiz-content">
        {/* Lijeva kolumna */}
        <div className="quiz-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Samoprocjena</span>
            <h2>Je li online studij <span className="accent">za tebe?</span></h2>
            <p className="quiz-intro">Za svako pitanje odaberi <strong>DA</strong> ili <strong>NE</strong>, pa dobij svoju procjenu.</p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="progress-panel"
                className="quiz-progress-panel"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: 0.3 }}
              >
                <div className="quiz-ring-wrap">
                  <svg viewBox="0 0 100 100" className="quiz-ring">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle
                      cx="50" cy="50" r="42" fill="none"
                      stroke="var(--accent)" strokeWidth="8"
                      strokeDasharray={`${(answered / total) * 264} 264`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                      style={{ transition: 'stroke-dasharray 0.4s ease' }}
                    />
                  </svg>
                  <div className="quiz-ring-label">
                    <span className="ring-num">{answered}</span>
                    <span className="ring-den">/ {total}</span>
                  </div>
                </div>
                <p className="quiz-status">
                  {answered === 0 && 'Odgovori na pitanja desno →'}
                  {answered > 0 && answered < total && `${total - answered} pitanja preostalo`}
                  {allAnswered && '✓ Spreman/a za rezultat!'}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="result-panel"
                className="quiz-result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="result-score">
                  <svg viewBox="0 0 100 100" className="quiz-ring large">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle
                      cx="50" cy="50" r="42" fill="none"
                      stroke={getResult().color} strokeWidth="8"
                      strokeDasharray={`${(score / total) * 264} 264`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="quiz-ring-label">
                    <span className="ring-num" style={{ color: getResult().color }}>{score}</span>
                    <span className="ring-den">/ {total}</span>
                  </div>
                </div>
                <h3 style={{ color: getResult().color }}>{getResult().label}</h3>
                <p className="result-detail">{getResult().detail}</p>
                <p className="result-advice">{getResult().advice}</p>
                <div className="result-actions">
                  <button className="btn-primary" onClick={() => onNavigate('programs')}>
                    Istraži programe
                  </button>
                  <button className="btn-ghost" onClick={() => { setAnswers({}); setSubmitted(false) }}>
                    Ponovi kviz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desna kolumna — pitanja s DA/NE */}
        <div className="quiz-right">
          <div className="quiz-questions">
            {selfAssessmentQuestions.map((q, i) => (
              <motion.div
                key={i}
                className={`quiz-item ${answers[i] === true ? 'yes' : answers[i] === false ? 'no' : ''}`}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.06 }}
              >
                <span className="quiz-num">{i + 1}</span>
                <span className="quiz-q">{q}</span>
                <div className="quiz-yesno">
                  <button
                    className={`yn-btn yes ${answers[i] === true ? 'active' : ''}`}
                    onClick={() => answer(i, true)}
                    aria-label="Da"
                  >
                    Da
                  </button>
                  <button
                    className={`yn-btn no ${answers[i] === false ? 'active' : ''}`}
                    onClick={() => answer(i, false)}
                    aria-label="Ne"
                  >
                    Ne
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="quiz-footer"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
          >
            <div className="quiz-progress-bar-wrap">
              <div className="quiz-progress-bar" style={{ width: `${(answered / total) * 100}%` }} />
            </div>
            <button
              className={`btn-primary quiz-submit ${!allAnswered ? 'disabled' : ''}`}
              onClick={() => allAnswered && setSubmitted(true)}
              disabled={!allAnswered}
            >
              {allAnswered ? 'Prikaži rezultat →' : `Odgovori na sva pitanja (${answered}/${total})`}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
