import { logoWordmark, testimonials } from "@/lib/testimonials";

/** Bandeau logos clients — preuve sociale visuelle. */
export function ClientLogoStrip() {
  const items = testimonials.slice(0, 10);

  return (
    <section className="border-y border-line bg-white py-8" aria-label="Entreprises clientes">
      <div className="container">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
          Ils structurent leur activité avec PROGESTI
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-5 md:gap-x-7 lg:gap-x-8">
          {items.map((t) => (
            <li key={t.id} className="opacity-80 transition hover:opacity-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoWordmark(t.logo)}
                alt={t.logoAlt}
                width={180}
                height={48}
                className="h-10 w-auto max-w-[170px] object-contain object-left md:h-11"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
