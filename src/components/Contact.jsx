export default function Contact() {
  return (
    <section className="section section--dark" id="kontakt">
      <div className="container">
        <div className="contact__layout">
          <div className="contact__info">
            <p className="section-label section-label--white">Kontaktiraj nas</p>
            <h2 className="section-title section-title--white">
              Tu smo<br />
              <span className="accent">za tebe</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,.6)', marginTop: '1rem', marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '.95rem' }}>
              Za više informacija o studiju, prijavi ili studiranju —
              slobodno nam se javi. Odgovaramo u roku 48 sati.
            </p>

            <div className="contact__item">
              <div className="contact__item-icon">📍</div>
              <div>
                <div className="contact__item-label">Adresa</div>
                <div className="contact__item-value">
                  Ulica Alda Negrija 6, 52100 Pula<br />
                  <span style={{ color: 'rgba(255,255,255,.45)', fontSize: '.85rem' }}>Sveučilište Jurja Dobrile u Puli</span>
                </div>
              </div>
            </div>

            <div className="contact__item">
              <div className="contact__item-icon">📧</div>
              <div>
                <div className="contact__item-label">E-mail</div>
                <div className="contact__item-value">
                  <a href="mailto:fipu-ured@unipu.hr">fipu-ured@unipu.hr</a>
                </div>
              </div>
            </div>

            <div className="contact__item">
              <div className="contact__item-icon">📞</div>
              <div>
                <div className="contact__item-label">Telefon</div>
                <div className="contact__item-value">
                  <a href="tel:+38552877438">+385/52-877-438</a><br />
                  <span style={{ color: 'rgba(255,255,255,.45)', fontSize: '.85rem' }}>
                    052/377-006 · 052/377-010 · 052/377-043
                  </span>
                </div>
              </div>
            </div>

            <div className="contact__item">
              <div className="contact__item-icon">🌐</div>
              <div>
                <div className="contact__item-label">Web</div>
                <div className="contact__item-value">
                  <a href="https://fipu.unipu.hr" target="_blank" rel="noopener noreferrer">fipu.unipu.hr</a>
                  {' · '}
                  <a href="https://www.unipu.hr" target="_blank" rel="noopener noreferrer">unipu.hr</a>
                </div>
              </div>
            </div>

            <div className="contact__actions">
              <a
                href="/docs/fipu-vodic-online.pdf"
                download
                className="btn btn-primary btn-lg"
              >
                ⬇️ Preuzmi vodič (PDF)
              </a>
              <a
                href="https://fipu.unipu.hr/fipu/studijski_programi/online_studiji"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                Online studiji →
              </a>
            </div>
          </div>

          <div className="contact__visual">
            <img
              src="/images/pula-coastal.jpg"
              alt="Pula, Hrvatska"
              loading="lazy"
            />
            <div className="contact__visual-overlay">
              <div className="contact__visual-text">Pula, Istra · Hrvatska</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
