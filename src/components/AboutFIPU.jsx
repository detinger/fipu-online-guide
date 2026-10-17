import { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { useInView } from '../hooks/useInView'

const milestones = [
  {
    year: '2011',
    title: 'Osnivanje studija Informatike',
    desc: 'Prijediplomski studij informatike pokrenut unutar Fakulteta ekonomije i turizma.',
  },
  {
    year: '2018',
    title: 'FIPU postaje sastavnica UNIPU',
    desc: 'Registracija Fakulteta informatike u Puli kao zasebne sastavnice Sveučilišta.',
  },
  {
    year: '2022',
    title: 'Nacionalno vijeće odobrava online studij',
    desc: 'FIPU postaje prvi sveučilišni online studij Informatike u Hrvatskoj.',
  },
  {
    year: '2023',
    title: 'Pokretanje online studija',
    desc: 'Akademska godina 2023./2024. — prve generacije online studenata.',
  },
]

export default function AboutFIPU() {
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      anime({
        targets: '.about__milestone',
        opacity: [0, 1],
        translateX: [-24, 0],
        delay: anime.stagger(150),
        duration: 700,
        easing: 'easeOutExpo',
      })
    }
  }, [inView])

  return (
    <section className="section" id="o-fipu" ref={ref}>
      <div className="container">
        <div className="about__layout">
          <div>
            <p className="section-label">Fakultet informatike u Puli</p>
            <h2 className="section-title">
              Najmoderniji<br />
              <span className="accent">developerski</span><br />
              programi
            </h2>

            <blockquote className="about__mission">
              „FIPU je posvećen izvrsnosti u znanstvenom radu i nastavi, pružajući
              visokokvalitetno obrazovanje koje integrira suvremene tehnologije i
              praktične vještine. Snažno podržavamo unapređenje studentskog
              iskustva i zadovoljstva studenata, te promičemo inovacije u
              obrazovnom procesu i praktičnu primjenu znanja u realnom svijetu."
            </blockquote>

            <p className="about__text">
              Fakultet informatike u Puli sastavnica je UNIPU — Sveučilišta Jurja Dobrile u Puli.
              Na FIPU studira 400-tinjak studenata, a studij godišnje završava 50-ak
              prvostupnika i diplomiranih informatičara.
            </p>
            <p className="about__text">
              Suosnivači smo Udruge ICT Istra, partneri u EDIH Adria konzorciju
              i aktivni sudionici CARNET projekta e-Sveučilišta.
              Uspostavili smo Centar za primjenu umjetne inteligencije u suradnji s CARNET-om.
            </p>
          </div>

          <div>
            <div className="about__milestones">
              {milestones.map((m) => (
                <div key={m.year} className="about__milestone" style={{ opacity: 0 }}>
                  <div className="about__milestone-year">{m.year}</div>
                  <div className="about__milestone-content">
                    <div className="about__milestone-title">{m.title}</div>
                    <div className="about__milestone-desc">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__visual" style={{ marginTop: '3rem' }}>
              <div className="about__photo">
                <img
                  src="/images/students-coastal.jpg"
                  alt="Studenti na obali Pule"
                  loading="lazy"
                />
              </div>
              <div className="about__badge">
                <div className="about__badge-num">1.</div>
                <div className="about__badge-text">Online sveučilišni studij<br />Informatike u Hrvatskoj</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
