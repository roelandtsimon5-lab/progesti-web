import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  lead: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: Props) {
  const showCta = primaryHref && primaryLabel;

  return (
    <section className="relative overflow-hidden bg-blue-deep">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
      <div className="container relative py-16 text-center lg:py-20">
        <Reveal>
          {eyebrow ? (
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-[2.25rem] font-extrabold leading-[1.1] tracking-tight text-white md:text-[3rem]">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">{lead}</p>

          {showCta ? (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink
                href={primaryHref}
                size="lg"
                eventPayload={{ cta: "page_hero_primary" }}
              >
                {primaryLabel}
              </ButtonLink>
              {secondaryHref && secondaryLabel ? (
                <ButtonLink
                  href={secondaryHref}
                  size="lg"
                  variant="outline-white"
                  eventPayload={{ cta: "page_hero_secondary" }}
                >
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}

          <p className="mt-6 text-sm text-white/60">
            ✓ 149 € HT/mois · ✓ Tous modules inclus · ✓ Support FR
          </p>
        </Reveal>
      </div>
    </section>
  );
}
