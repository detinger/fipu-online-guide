export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">
            <div className="footer__logo-circle">FIPU</div>
            <div className="footer__logo-text">
              Fakultet informatike u Puli · Sveučilište Jurja Dobrile u Puli
            </div>
          </div>

          <div className="footer__links">
            <a href="https://fipu.unipu.hr" target="_blank" rel="noopener noreferrer" className="footer__link">fipu.unipu.hr</a>
            <a href="https://www.unipu.hr" target="_blank" rel="noopener noreferrer" className="footer__link">unipu.hr</a>
            <a href="https://moodle.srce.hr" target="_blank" rel="noopener noreferrer" className="footer__link">Merlin</a>
            <a href="https://www.unipu.hr/upisi" target="_blank" rel="noopener noreferrer" className="footer__link">Upisi</a>
            <a href="/docs/fipu-vodic-online.pdf" download className="footer__link">Preuzmi vodič</a>
          </div>

          <div className="footer__copy">
            © {year} Fakultet informatike u Puli · OIB: 61738073226
          </div>
        </div>
      </div>
    </footer>
  )
}
