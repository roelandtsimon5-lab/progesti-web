import { ButtonLink } from "@/components/ui/ButtonLink";

type Props = {
  eyebrow?: string;
  title: string;
  lead: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  dark?: boolean;
};

/** Hero pages internes — même famille que HomeValidated (fond clair). */
export function PageHero({
  eyebrow,
  title,
  lead,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  dark = false,
}: Props) {
  if (dark) {
    return (
      <section className="section-tight bg-blue-deep">
        <div className="container max-w-3xl">
          {eyebrow ? (
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#B8F5D4]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">{title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-white/90">{lead}</p>
          {(primaryHref || secondaryHref) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryHref && primaryLabel ? (
                <ButtonLink
                  href={primaryHref}
                  size="lg"
                  eventPayload={{ cta: "v3_page_hero_primary" }}
                >
                  {primaryLabel}
                </ButtonLink>
              ) : null}
              {secondaryHref && secondaryLabel ? (
                <ButtonLink
                  href={secondaryHref}
                  size="lg"
                  variant="outline-white"
                  eventPayload={{ cta: "v3_page_hero_secondary" }}
                >
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#F5F8FB]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(31,168,107,0.12),transparent)]"
        aria-hidden
      />
      <div className="container relative max-w-3xl py-14 md:py-16">
        {eyebrow ? (
          <p className="inline-flex items-center gap-2 rounded-full border border-green-action/25 bg-green-action/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-deep">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-5 font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-tight text-blue-deep md:text-[3rem]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">{lead}</p>
        {(primaryHref || secondaryHref) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryHref && primaryLabel ? (
              <ButtonLink
                href={primaryHref}
                size="lg"
                event="trial_start"
                eventPayload={{ cta: "v3_page_hero_primary" }}
              >
                {primaryLabel}
              </ButtonLink>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <ButtonLink
                href={secondaryHref}
                size="lg"
                variant="secondary"
                eventPayload={{ cta: "v3_page_hero_secondary" }}
              >
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        )}
        <p className="mt-5 text-sm font-medium text-slate">
          <span className="text-green-deep">✓</span> Sans CB{" "}
          <span className="mx-2 text-blue-mist">·</span>
          <span className="text-green-deep">✓</span> Dès{" "}
          <strong className="text-blue-deep">29,99 € HT/mois</strong>{" "}
          <span className="mx-2 text-blue-mist">·</span>
          <span className="text-green-deep">✓</span> Tous modules inclus
        </p>
      </div>
    </section>
  );
}
