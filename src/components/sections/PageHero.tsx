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
    <section className="relative overflow-hidden bg-[#F5F8FB]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(31,168,107,0.14),transparent)]"
        aria-hidden
      />
      <div className="container relative py-16 text-center lg:py-20">
        <Reveal>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-[2.25rem] font-extrabold leading-[1.1] tracking-tight text-blue-deep md:text-[3rem]">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate">{lead}</p>

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
                  variant="secondary"
                  eventPayload={{ cta: "page_hero_secondary" }}
                >
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}

          <p className="mt-5 text-sm font-medium text-slate">
            <span className="text-green-deep">✓</span> 149 € HT/mois{" "}
            <span className="mx-2 text-blue-mist">·</span>
            <span className="text-green-deep">✓</span> Tous modules inclus{" "}
            <span className="mx-2 text-blue-mist">·</span>
            <span className="text-green-deep">✓</span> Support FR
          </p>
        </Reveal>
      </div>
    </section>
  );
}
