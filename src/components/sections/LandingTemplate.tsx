import { ButtonLink } from "@/components/ui/ButtonLink";
import { LeadForm } from "@/components/forms/LeadForm";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";

type Props = {
  badge: string;
  headline: string;
  subhead: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  trustLine?: string;
  proofPoints?: string[];
  steps?: { title: string; text: string }[];
  benefits: string[];
  objections: { q: string; a: string }[];
  formIntent?: "demo" | "callback" | "switch" | "onboarding" | "contact";
  formLabel?: string;
  formTitle?: string;
  formLead?: string;
  finalTitle?: string;
  finalLead?: string;
  campaign?: string;
};

/** Landing marketing non-ads — alignée home validée. Formulaire haut si formIntent. */
export function LandingTemplate({
  badge,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  trustLine = "Sans carte bancaire · Essai 2 mois · Tous modules · Dès 29,99€ HT/mois",
  proofPoints,
  steps,
  benefits,
  objections,
  formIntent,
  formLabel,
  formTitle = "Parlez-nous de votre besoin",
  formLead = "Réponse sous 24h ouvrées.",
  campaign,
}: Props) {
  const hasForm = Boolean(formIntent);

  return (
    <>
      <section className="relative overflow-hidden bg-[#F5F8FB]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(31,168,107,0.12),transparent)]"
          aria-hidden
        />
        <div
          className={`container relative py-12 md:py-14 ${
            hasForm
              ? "grid max-w-5xl items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12"
              : "max-w-3xl text-center"
          }`}
        >
          <div className={hasForm ? "order-2 lg:order-1" : undefined}>
            <p className="inline-flex rounded-full border border-green-action/25 bg-green-action/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-deep">
              {badge}
            </p>
            <h1
              className={`mt-5 font-display font-extrabold leading-[1.08] text-blue-deep ${
                hasForm
                  ? "text-[2.1rem] md:text-[2.75rem]"
                  : "text-[2.15rem] md:text-5xl"
              }`}
            >
              {headline}
            </h1>
            <p className={`mt-5 text-lg text-slate ${hasForm ? "max-w-lg" : "mx-auto max-w-2xl"}`}>
              {subhead}
            </p>
            {!hasForm ? (
              <>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <ButtonLink
                    href={primaryCta.href}
                    size="lg"
                    event="trial_start"
                    eventPayload={{ campaign, cta: "v3_lp_hero_primary" }}
                  >
                    {primaryCta.label}
                  </ButtonLink>
                  {secondaryCta ? (
                    <ButtonLink
                      href={secondaryCta.href}
                      size="lg"
                      variant="secondary"
                      eventPayload={{ campaign, cta: "v3_lp_hero_secondary" }}
                    >
                      {secondaryCta.label}
                    </ButtonLink>
                  ) : null}
                </div>
                <p className="mt-5 text-sm font-medium text-slate">{trustLine}</p>
              </>
            ) : (
              <>
                <p className="mt-5 text-sm font-medium text-slate">{trustLine}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink
                    href={primaryCta.href}
                    size="lg"
                    event="trial_start"
                    eventPayload={{ campaign, cta: "v3_lp_hero_primary" }}
                  >
                    {primaryCta.label}
                  </ButtonLink>
                  {secondaryCta ? (
                    <ButtonLink
                      href={secondaryCta.href}
                      size="lg"
                      variant="secondary"
                      eventPayload={{ campaign, cta: "v3_lp_hero_secondary" }}
                    >
                      {secondaryCta.label}
                    </ButtonLink>
                  ) : null}
                </div>
              </>
            )}
            {proofPoints?.length ? (
              <ul
                className={`mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-blue-deep ${
                  hasForm ? "" : "mx-auto max-w-2xl justify-center"
                }`}
              >
                {proofPoints.map((p) => (
                  <li key={p}>✓ {p}</li>
                ))}
              </ul>
            ) : null}
          </div>

          {hasForm ? (
            <div id="lp-form" className="order-1 lg:order-2 lg:sticky lg:top-24">
              <div className="rounded-2xl border border-blue-mist bg-white p-6 shadow-[0_24px_70px_rgba(11,61,110,0.12)] md:p-8">
                <h2 className="text-2xl font-extrabold text-blue-deep">{formTitle}</h2>
                <p className="mt-2 text-sm text-slate">{formLead}</p>
                <div className="mt-6">
                  <LeadForm intent={formIntent!} submitLabel={formLabel ?? "Envoyer"} compact />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-y border-blue-mist bg-white">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            ["2 mois", "d’essai sans CB"],
            ["29,99 €", "HT/mois dès Starter"],
            ["11", "modules inclus"],
            ["0 €", "frais d’installation"],
          ].map(([v, l]) => (
            <div key={l} className="text-center md:text-left">
              <p className="font-display text-2xl font-extrabold text-blue-deep">{v}</p>
              <p className="mt-1 text-sm font-medium text-slate">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {steps?.length ? (
        <section className="section-tight bg-white">
          <div className="container">
            <h2 className="text-center text-3xl font-extrabold text-blue-deep">
              Comment ça se passe
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.title} className="border-t-2 border-blue-royal pt-5">
                  <p className="font-display text-sm font-bold text-green-deep">0{i + 1}</p>
                  <h3 className="mt-2 text-lg font-bold text-blue-deep">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className={`section ${steps?.length ? "bg-[#F5F8FB]" : "bg-white"}`}>
        <div className="container">
          <h2 className="text-3xl font-extrabold text-blue-deep">Ce que vous gagnez concrètement</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex gap-3 border-t border-blue-mist pt-4 text-slate">
                <span className="font-bold text-green-deep" aria-hidden>
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section !pt-0 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-blue-deep">Questions fréquentes</h2>
          <div className="mt-6 space-y-1">
            {objections.map((o) => (
              <details
                key={o.q}
                className="group border-b border-blue-mist open:border-green-action/40"
              >
                <summary className="cursor-pointer list-none py-4 font-display text-base font-bold text-blue-deep marker:content-none">
                  <span className="flex items-start justify-between gap-3">
                    {o.q}
                    <span className="text-green-deep transition group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </span>
                </summary>
                <p className="pb-4 text-sm text-slate">{o.a}</p>
              </details>
            ))}
          </div>
          {hasForm ? (
            <p className="mt-8 text-center">
              <a
                href="#lp-form"
                className="font-display text-sm font-bold text-blue-royal underline-offset-4 hover:underline"
              >
                ↑ Retour au formulaire
              </a>
            </p>
          ) : null}
        </div>
      </section>

      <ConversionBlock variant={formIntent === "demo" ? "demo" : "essai"} />

      <div className="h-20 lg:hidden" aria-hidden />
      {hasForm ? (
        <div className="mobile-cta lg:hidden">
          <a
            href="#lp-form"
            className="flex flex-1 items-center justify-center rounded-lg bg-green-action py-3.5 font-display text-sm font-bold text-white"
          >
            {formLabel ?? "Remplir le formulaire"}
          </a>
          <ButtonLink
            href={primaryCta.href}
            variant="outline-white"
            className="flex-1 !py-3.5"
            event="trial_start"
            eventPayload={{ campaign, cta: "v3_lp_mobile_trial" }}
          >
            Essai 2 mois
          </ButtonLink>
        </div>
      ) : (
        <MobileCtaBar />
      )}
    </>
  );
}
