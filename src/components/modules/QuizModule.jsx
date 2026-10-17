import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ModuleHeader from '../ModuleHeader'
import { selfAssessmentQuestions } from '../../data/content'

export default function QuizModule({ onNavigate }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const answer = (i, val) => {
    if (submitted) return
    setAnswers(prev => {
      if (prev[i] === val) { const n = { ...prev }; delete n[i]; return n }
      return { ...prev, [i]: val }
    })
  }

  const answered = Object.keys(answers).length
  const score = Object.values(answers).filter(Boolean).length
  const total = selfAssessmentQuestions.length
  const allAnswered = answered === total

  const getResult = () => {
    if (score === total) return { label: 'Odlično!',        detail: 'Online studij je savršen za tebe.',           color: '#27AE60', advice: 'Imaš sve preduvjete. Pogledaj studijske programe i kreni s upisom!' }
    if (score >= 6)     return { label: 'Dobro!',           detail: 'Uz malo pripreme možeš uspjeti.',             color: '#F39C12', advice: 'Provjeri koje uvjete još možeš riješiti i kontaktiraj nas za savjet.' }
    if (score >= 4)     return { label: 'Razmisli.',        detail: 'Vrijedi razgovarati s nama.',                 color: '#E67E22', advice: 'Preporučujemo razgovor s timom FIPU kako bismo procijenili opcije.' }
    return               { label: 'Možda još ne.',          detail: 'Online studij sad možda nije pravi izbor.',   color: '#E74C3C', advice: 'Javi nam se — zajedno možemo pronaći rješenje ili pravi trenutak.' }
  }

  const result = getResult()

  return (
    <div>
      <ModuleHeader
        tag="Samoprocjena"
        title="Je li online studij "
        accentWord="za tebe?"
        subtitle="8 pitanja · odgovori iskreno · saznaj odmah"
        image="/images/student-sea-study.jpg"
        imgPosition="center 15%"
      />

      <div className="module-body">
        <div className="quiz-layout">
          {/* Lijevo: ring + rezultat */}
          <div className="quiz-left-panel">
            <p className="quiz-intro-text">
              Za svako pitanje odaberi <strong style={{ color: 'var(--white)' }}>DA</strong> ili <strong style={{ color: 'var(--white)' }}>NE</strong>, pa dobij svoju procjenu.
            </p>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="progress"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="quiz-ring-wrap">
                    <svg viewBox="0 0 100 100" className="quiz-ring">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
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
                    {answered === 0 && 'Odgovori na pitanja →'}
                    {answered > 0 && answered < total && `${total - answered} pitanja preostalo`}
                    {allAnswered && '✓ Spreman/a za rezultat!'}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  className="quiz-result-panel"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="quiz-ring-wrap" style={{ width: 100, height: 100 }}>
                    <svg viewBox="0 0 100 100" className="quiz-ring">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                      <circle cx="50" cy="50" r="42" fill="none" stroke={result.color} strokeWidth="8"
                        strokeDasharray={`${(score / total) * 264} 264`} strokeLinecap="round" transform="rotate(-90 50 50)" />
                    </svg>
                    <div className="quiz-ring-label">
                      <span className="ring-num" style={{ color: result.color }}>{score}</span>
                      <span className="ring-den">/ {total}</span>
                    </div>
                  </div>
                  <div className="quiz-result-label" style={{ color: result.color }}>{result.label}</div>
                  <div className="quiz-result-detail">{result.detail}</div>
                  <div className="quiz-result-advice">{result.advice}</div>
                  <div className="result-btns">
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

          {/* Desno: pitanja */}
          <div className="quiz-questions-panel">
            <div className="quiz-q-list">
              {selfAssessmentQuestions.map((q, i) => (
                <div
                  key={i}
                  className={`quiz-q-item ${answers[i] === true ? 'yes' : answers[i] === false ? 'no' : ''}`}
                >
                  <div className="q-num">{i + 1}</div>
                  <div className="q-text">{q}</div>
                  <div className="q-yesno">
                    <button
                      className={`yn-btn yes ${answers[i] === true ? 'active' : ''}`}
                      onClick={() => answer(i, true)}
                    >Da</button>
                    <button
                      className={`yn-btn no ${answers[i] === false ? 'active' : ''}`}
                      onClick={() => answer(i, false)}
                    >Ne</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="quiz-footer">
              <div className="quiz-progress-bar-wrap">
                <div className="quiz-progress-bar" style={{ width: `${(answered / total) * 100}%` }} />
              </div>
              <button
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => allAnswered && setSubmitted(true)}
                disabled={!allAnswered}
              >
                {allAnswered ? 'Prikaži rezultat →' : `Odgovori na sva pitanja (${answered}/${total})`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
