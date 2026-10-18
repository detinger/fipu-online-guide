import { ArrowRight } from 'lucide-react'

export default function NextPageBlock({ title, description, label, target, onNavigate }) {
  return (
    <section className="w-full py-space-xl mt-space-xl">
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-margin">
        <div className="rounded-2xl bg-primary-container px-space-xl py-space-xl flex flex-col md:flex-row md:items-center justify-between gap-space-lg">
          <div className="max-w-xl">
            <h3 className="font-headline-sm text-headline-sm text-on-primary">
              {title}
            </h3>
            {description && (
              <p className="font-body-md text-body-md text-on-primary/70 mt-space-xs">
                {description}
              </p>
            )}
          </div>
          <button
            onClick={() => onNavigate(target)}
            className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-emerald-accent text-on-primary hover:bg-forest-dark font-label-lg text-label-lg transition-all shadow-lg shrink-0 border-none cursor-pointer"
          >
            <span>{label}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
