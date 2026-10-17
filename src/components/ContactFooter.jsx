export default function ContactFooter() {
  return (
    <footer className="w-full bg-surface py-space-xl">
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-margin">
        <div className="rounded-3xl bg-primary-container text-on-primary p-space-lg md:p-space-xl relative overflow-hidden shadow-xl">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-fipu-cyan/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div className="lg:col-span-8 space-y-space-xs">
              <h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
                Trebate pomoć pri upisu ili odabiru smjera?
              </h2>
              <p className="font-body-md text-body-md text-inverse-primary max-w-xl">
                Naš ured i voditelji studijskog programa dostupni su svakodnevno putem e-pošte, telefona ili zakazanih virtualnih konzultacija.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-md font-body-sm text-body-sm">
                <a
                  href="mailto:fipu-ured@unipu.hr"
                  className="flex items-center gap-space-xs text-on-primary hover:text-secondary-fixed transition-colors no-underline"
                >
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">mail</span>
                  <span>fipu-ured@unipu.hr</span>
                </a>
                <a
                  href="tel:+38552877438"
                  className="flex items-center gap-space-xs text-on-primary hover:text-fipu-cyan transition-colors no-underline"
                >
                  <span className="material-symbols-outlined text-fipu-cyan text-[20px]">call</span>
                  <span>+385 52 877 438</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ulica+Alda+Negrija+6%2C+Pula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-space-xs text-on-primary hover:text-secondary-fixed transition-colors no-underline"
                >
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">location_on</span>
                  <span>Ulica Alda Negrija 6, Pula</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
