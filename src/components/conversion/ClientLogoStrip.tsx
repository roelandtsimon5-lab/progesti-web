import { logoWordmark, testimonials } from "@/lib/testimonials";

/** Bandeau logos clients — preuve sociale visuelle. */
export function ClientLogoStrip() {
  const items = testimonials.slice(0, 8);

  return (
    <section className="border-y border-blue-mist/70 bg-white py-10" aria-label="Entreprises clientes">
      <div className="container">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-slate">
          Ils structurent leur activité avec PROGESTI
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-6 md:gap-x-8">
          {items.map((t) => (
            <li
              key={t.id}
              className="flex h-12 items-center rounded-[2px] border border-blue-mist/60 bg-[#F8FBFD] px-3 py-2 opacity-90 transition hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoWordmark(t.logo)}
                alt={t.logoAlt}
                width={180}
                height={48}
                className="h-8 w-auto max-w-[150px] object-contain object-left md:h-9"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
