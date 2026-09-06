import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import {
  featuredTestimonials,
  initials,
  socialProofStats,
  type Testimonial,
} from "@/lib/testimonials";

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-lime-cta ${className}`} aria-label="5 sur 5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current" aria-hidden>
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.27 5.06 16.7l.94-5.49-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="industry-card-lift flex h-full flex-col rounded-[2px] border border-blue-mist/80 bg-white p-6 shadow-[0_8px_28px_rgba(11,61,110,0.06)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[2px] border border-blue-mist bg-[#F5F8FB]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.logo} alt="" width={40} height={40} className="h-9 w-9 object-contain" />
          </span>
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-extrabold text-blue-deep">{item.company}</p>
            <p className="truncate text-xs text-slate">{item.city}</p>
          </div>
        </div>
        {item.result ? (
          <span className="shrink-0 rounded-[2px] bg-blue-deep px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-lime-cta">
            {item.result}
          </span>
        ) : null}
      </div>

      <div className="mt-4">
        <Stars />
      </div>

      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate md:text-[15px]">
        « {item.quote} »
      </blockquote>

      <footer className="mt-5 flex items-center gap-3 border-t border-blue-mist/70 pt-4">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] bg-blue-sky/50 font-display text-[11px] font-extrabold text-blue-deep"
          aria-hidden
        >
          {initials(item.author)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-extrabold text-blue-deep">{item.author}</p>
          <p className="text-xs text-slate">
            {item.role} · client depuis {item.since}
          </p>
        </div>
      </footer>

      <Link href={item.segmentHref} className="link-accent mt-3 text-xs font-bold">
        {item.segment} →
      </Link>
    </article>
  );
}

type Props = {
  title?: string;
  lead?: string;
  limit?: number;
  showStats?: boolean;
  showAllLink?: boolean;
  className?: string;
};

export function TestimonialsSection({
  title = "Ils ont structuré leur activité avec PROGESTI",
  lead = "Retours terrain de gérants de propreté — planning, pointage et facturation au quotidien.",
  limit = 4,
  showStats = true,
  showAllLink = true,
  className = "",
}: Props) {
  const items = featuredTestimonials(limit);

  return (
    <section className={`section bg-paper industry-anchor ${className}`.trim()} id="avis">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Avis clients</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">{title}</h2>
            <p className="mt-4 text-slate">{lead}</p>
          </div>
        </Reveal>

        {showStats ? (
          <Reveal delayMs={40}>
            <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
              <li>
                <p className="font-display text-2xl font-extrabold text-ink">{socialProofStats.headline}</p>
                <p className="text-xs font-semibold text-slate">{socialProofStats.headlineSub}</p>
              </li>
              <li>
                <p className="font-display text-2xl font-extrabold text-ink">
                  {socialProofStats.rating}
                  <span className="text-lg text-lime-cta">/5</span>
                </p>
                <p className="text-xs font-semibold text-slate">{socialProofStats.ratingLabel}</p>
              </li>
              <li>
                <p className="font-display text-2xl font-extrabold text-ink">{socialProofStats.modules}</p>
                <p className="text-xs font-semibold text-slate">{socialProofStats.modulesLabel}</p>
              </li>
            </ul>
          </Reveal>
        ) : null}

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {items.map((item, i) => (
            <Reveal key={item.id} delayMs={i * 60} className="h-full">
              <li className="h-full list-none">
                <TestimonialCard item={item} />
              </li>
            </Reveal>
          ))}
        </ul>

        {showAllLink ? (
          <p className="mt-10 text-center">
            <Link href="/temoignages" className="link-accent text-sm font-bold">
              Voir tous les avis clients →
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function HeroSocialProof({ className = "mt-6" }: { className?: string }) {
  const faces = featuredTestimonials(3);

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <div className="flex -space-x-2.5" aria-hidden>
        {faces.map((t) => (
          <span
            key={t.id}
            className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-[2px] border-2 border-white/35 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
            title={t.company}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.logo} alt="" width={36} height={36} className="h-8 w-8 object-contain" />
          </span>
        ))}
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <Stars className="text-[13px]" />
          <span className="font-display text-sm font-extrabold text-white">
            {socialProofStats.rating}
            <span className="text-lime-cta">/5</span>
          </span>
        </div>
        <p className="mt-0.5 text-xs font-medium text-white/75 md:text-[13px]">
          Avis clients · entreprises de propreté en France
        </p>
      </div>
    </div>
  );
}

export { TestimonialCard };
