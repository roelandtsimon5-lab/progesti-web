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
  return (
    <section className={`section-tight ${dark ? "surface-dark" : "surface-atmosphere"}`}>
      <div className="container max-w-3xl">
        {eyebrow ? <p className={`eyebrow ${dark ? "!text-emerald" : ""}`}>{eyebrow}</p> : null}
        <h1 className={`mt-3 text-4xl font-extrabold md:text-5xl ${dark ? "text-white" : "text-ink"}`}>
          {title}
        </h1>
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/80" : "text-muted"}`}>
          {lead}
        </p>
        {(primaryHref || secondaryHref) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryHref && primaryLabel ? (
              <ButtonLink
                href={primaryHref}
                size="lg"
                variant={dark ? "white" : "primary"}
                eventPayload={{ cta: "v2_page_hero_primary" }}
              >
                {primaryLabel}
              </ButtonLink>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <ButtonLink
                href={secondaryHref}
                size="lg"
                variant={dark ? "white" : "secondary"}
                className={
                  dark ? "!border-white/70 !bg-transparent !text-white hover:!bg-white hover:!text-navy" : ""
                }
                eventPayload={{ cta: "v2_page_hero_secondary" }}
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
