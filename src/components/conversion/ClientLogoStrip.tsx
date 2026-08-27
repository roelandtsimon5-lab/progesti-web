import { featuredTestimonials } from "@/lib/testimonials";

/** Bandeau logos clients — preuve sociale visuelle. */
export function ClientLogoStrip() {
  const items = featuredTestimonials(6);

  return (
    <section className="border-y border-line bg-white py-8" aria-label="Entreprises clientes">
      <div className="container">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
          Ils structurent leur activité avec PROGESTI
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-10">
          {items.map((t) => (
            <li key={t.id} className="flex items-center gap-2.5 opacity-80 transition hover:opacity-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.logo} alt="" width={36} height={36} className="h-9 w-9 rounded-[2px]" aria-hidden />
              <span className="font-display text-sm font-extrabold text-ink/70">{t.company}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
