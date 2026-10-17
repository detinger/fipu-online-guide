import { useState } from 'react'
import { programs } from '../data/programs'

function CourseRow({ course }) {
  return (
    <div className="course-row">
      <span className={`course-row__name${course.elective ? ' course-row__name--elective' : ''}`}>
        {course.name}
        {course.elective && course.options && (
          <span className="elective-group"> — bira se od: {course.options.join(', ')}</span>
        )}
      </span>
      <span className={`course-badge${course.elective ? ' course-badge--gray' : ''}`}>
        {course.ects} ECTS
      </span>
    </div>
  )
}

function Semester({ sem }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`semester${open ? ' open' : ''}`}>
      <div className="semester__header" onClick={() => setOpen(o => !o)}>
        <div className="semester__title">
          <div className="semester__num">{sem.num}</div>
          <div>
            <div className="semester__name">{sem.year}</div>
            <div className="semester__meta">{sem.courses.length} kolegija · {sem.ects} ECTS</div>
          </div>
        </div>
        <div className="semester__toggle">▾</div>
      </div>
      <div className="semester__body">
        <div className="semester__courses">
          {sem.courses.map((c, i) => <CourseRow key={i} course={c} />)}
        </div>
      </div>
    </div>
  )
}

function ProgramPanel({ program }) {
  return (
    <div>
      <div className="program-info">
        <div className="program-info__item">
          <div className="program-info__label">Tip studija</div>
          <div className="program-info__value program-info__value--sm">{program.type}</div>
        </div>
        <div className="program-info__item">
          <div className="program-info__label">Trajanje</div>
          <div className="program-info__value">{program.duration}</div>
        </div>
        <div className="program-info__item">
          <div className="program-info__label">Ukupno</div>
          <div className="program-info__value">{program.ects}</div>
        </div>
        <div className="program-info__item">
          <div className="program-info__label">Školarina</div>
          <div className="program-info__value">{program.fee}</div>
        </div>
      </div>

      <p style={{ color: 'var(--text-body)', marginBottom: '2rem', fontSize: '.95rem', lineHeight: 1.7 }}>
        {program.description}
      </p>

      <div
        style={{
          background: 'var(--off-white)',
          borderRadius: 'var(--radius-md)',
          padding: '.75rem 1.25rem',
          marginBottom: '1.5rem',
          fontSize: '.85rem',
          color: 'var(--gray-500)',
          display: 'flex',
          gap: '.5rem',
          alignItems: 'center',
        }}
      >
        <span>🎓</span>
        <span>Akademski naziv: <strong style={{ color: 'var(--text-dark)' }}>{program.title}</strong></span>
      </div>

      <div className="semester-accordion">
        {program.semesters.map(sem => <Semester key={sem.num} sem={sem} />)}
      </div>

      <p style={{ marginTop: '1.5rem', fontSize: '.82rem', color: 'var(--gray-400)' }}>
        Struktura studija i izvedbeni planovi nastave dostupni su na{' '}
        <a
          href="https://fipu.unipu.hr/fipu/za_studente/nastavni_planovi"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--fipu-blue)' }}
        >
          fipu.unipu.hr
        </a>
      </p>
    </div>
  )
}

export default function Programs() {
  const [active, setActive] = useState(0)

  return (
    <section className="section" id="programi">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Studijski programi</p>
          <h2 className="section-title">
            Online izvanredni<br />
            <span className="accent">programi FIPU</span>
          </h2>
          <p className="section-subtitle">
            Prijediplomski i diplomski sveučilišni studij Informatike —
            u potpunosti online, na hrvatskom jeziku.
          </p>
        </div>

        <div className="programs__tabs">
          {programs.map((p, i) => (
            <button
              key={p.id}
              className={`programs__tab${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              {p.label}
            </button>
          ))}
        </div>

        {programs.map((p, i) => (
          <div key={p.id} className={`programs__panel${active === i ? ' active' : ''}`}>
            <ProgramPanel program={p} />
          </div>
        ))}
      </div>
    </section>
  )
}
