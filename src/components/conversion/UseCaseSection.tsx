import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import {
  featuredUseCases,
  productFacts,
  type UseCase,
} from "@/lib/use-cases";
import { trustBadges } from "@/lib/site";

function UseCaseIcon({ icon }: { icon: UseCase["icon"] }) {
  const iconClass = "h-6 w-6 text-lime-cta";
  switch (icon) {
    case "time":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case "proof":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "cash":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      );
    case "planning":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );
    case "mobile":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      );
    case "simple":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      );
    default:
      return null;
  }
}

function UseCaseCard({ item }: { item: UseCase }) {
  return (
    <article className="industry-card-lift flex h-full flex-col rounded-[2px] border border-blue-mist/80 bg-white p-6 shadow-[0_8px_28px_rgba(11,61,110,0.06)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[2px] border border-blue-mist bg-blue-deep">
            <UseCaseIcon icon={item.icon} />
          </span>
          <div className="min-w-0">
            <p className="font-display text-sm font-extrabold text-blue-deep">{item.title}</p>
            <p className="truncate text-xs text-slate">{item.segment}</p>
          </div>
        </div>
        <span className="shrink-0 rounded-[2px] bg-blue-deep px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-lime-cta">
          {item.benefit}
        </span>
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold text-slate/80">Le problème</p>
        <p className="mt-1 text-sm leading-relaxed text-slate">{item.problem}</p>
      </div>

      <div className="mt-4 flex-1">
        <p className="text-xs font-semibold text-green-deep">La solution PROGESTI</p>
        <p className="mt-1 text-sm leading-relaxed text-ink">{item.solution}</p>
      </div>

      <Link href={item.segmentHref} className="link-accent mt-4 text-xs font-bold">
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

export function UseCaseSection({
  title = "Des problèmes concrets, des solutions métier",
  lead = "Cas d'usage courants pour les entreprises de propreté — planning, pointage et facturation.",
  limit = 4,
  showStats = true,
  showAllLink = true,
  className = "",
}: Props) {
  const items = featuredUseCases(limit);

  return (
    <section className={`section bg-paper industry-anchor ${className}`.trim()} id="cas-usage">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Cas d&apos;usage</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">{title}</h2>
            <p className="mt-4 text-slate">{lead}</p>
          </div>
        </Reveal>

        {showStats ? (
          <Reveal delayMs={40}>
            <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
              <li>
                <p className="font-display text-2xl font-extrabold text-ink">{productFacts.modules}</p>
                <p className="text-xs font-semibold text-slate">{productFacts.modulesLabel}</p>
              </li>
              <li>
                <p className="font-display text-2xl font-extrabold text-ink">{productFacts.support}</p>
                <p className="text-xs font-semibold text-slate">{productFacts.supportLabel}</p>
              </li>
              <li>
                <p className="font-display text-2xl font-extrabold text-ink">{productFacts.trial}</p>
                <p className="text-xs font-semibold text-slate">{productFacts.trialLabel}</p>
              </li>
            </ul>
          </Reveal>
        ) : null}

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {items.map((item, i) => (
            <Reveal key={item.id} delayMs={i * 60} className="h-full">
              <li className="h-full list-none">
                <UseCaseCard item={item} />
              </li>
            </Reveal>
          ))}
        </ul>

        {showAllLink ? (
          <p className="mt-10 text-center">
            <Link href="/cas-usage" className="link-accent text-sm font-bold">
              Voir tous les cas d&apos;usage →
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function HeroTrustBadges({ className = "mt-6" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <ul className="flex flex-wrap gap-2" aria-label="Points de confiance">
        {trustBadges.slice(0, 3).map((badge) => (
          <li
            key={badge.title}
            className="rounded-[2px] border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white"
          >
            <span className="text-lime-cta">✓</span> {badge.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { UseCaseCard };
