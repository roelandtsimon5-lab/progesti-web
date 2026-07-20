import { ButtonLink } from "@/components/ui/ButtonLink";
import { LeadForm } from "@/components/forms/LeadForm";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";

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
  finalTitle = "Passez à l’action maintenant",
  finalLead = "L’essai est le chemin le plus rapide pour juger sur vos propres sites.",
  campaign,
}: Props) {
  return (
    <>
      <section className="surface-dark relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(47,158,107,0.18),transparent_65%)]" />
        <div className="container relative max-w-3xl py-14 text-center md:py-20">
          <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-emerald">
            {badge}
          </p>
          <h1 className="mt-4 text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">
            {headline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 md:text-lg">{subhead}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink
              href={primaryCta.href}
              size="lg"
              variant="white"
              event="trial_start"
              eventPayload={{ campaign, cta: "v2_lp_hero_primary" }}
            >
              {primaryCta.label}
            </ButtonLink>
            {secondaryCta ? (
              <ButtonLink
                href={secondaryCta.href}
                size="lg"
                variant="secondary"
                className="!border-white !bg-transparent !text-white hover:!bg-white hover:!text-navy"
                eventPayload={{ campaign, cta: "v2_lp_hero_secondary" }}
              >
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
          <p className="mt-5 text-sm font-medium text-white/65">{trustLine}</p>
          {proofPoints?.length ? (
            <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-white/85">
              {proofPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {steps?.length ? (
        <section className="section-tight bg-white">
          <div className="container">
            <h2 className="text-center text-3xl font-extrabold text-ink">Comment ça se passe</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.title} className="border-t-2 border-emerald pt-5">
                  <p className="font-display text-sm font-bold text-emerald-dark">0{i + 1}</p>
                  <h3 className="mt-2 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className={`section ${steps?.length ? "surface-atmosphere" : "bg-white"}`}>
        <div className="container">
          <h2 className="text-3xl font-extrabold text-ink">Ce que vous gagnez concrètement</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex gap-3 border-t border-line pt-4 text-anthracite">
                <span className="font-bold text-emerald-dark" aria-hidden>
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section !pt-0">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink">Questions fréquentes</h2>
            <div className="mt-6 space-y-1">
              {objections.map((o) => (
                <details
                  key={o.q}
                  className="group border-b border-line open:border-emerald/30"
                >
                  <summary className="cursor-pointer list-none py-4 font-display text-base font-bold text-ink marker:content-none">
                    <span className="flex items-start justify-between gap-3">
                      {o.q}
                      <span className="text-emerald-dark transition group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="pb-4 text-sm text-muted">{o.a}</p>
                </details>
              ))}
            </div>
          </div>

          {formIntent ? (
            <div className="border border-line bg-white p-6 md:p-8">
              <h2 className="text-2xl font-extrabold text-ink">{formTitle}</h2>
              <p className="mt-2 text-sm text-muted">{formLead}</p>
              <div className="mt-6">
                <LeadForm intent={formIntent} submitLabel={formLabel ?? "Envoyer"} compact />
              </div>
            </div>
          ) : (
            <div className="border border-line bg-white p-6 md:p-8">
              <h2 className="text-2xl font-extrabold text-ink">Prêt à tester ?</h2>
              <p className="mt-3 text-sm text-muted">
                Créez votre essai en 2 minutes. Vous arrivez directement dans l’application.
              </p>
              <div className="mt-6">
                <ButtonLink
                  href={primaryCta.href}
                  size="lg"
                  className="w-full"
                  event="trial_start"
                  eventPayload={{ campaign, cta: "v2_lp_side_cta" }}
                >
                  {primaryCta.label}
                </ButtonLink>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-anthracite">
                <li>✓ Sans carte bancaire</li>
                <li>✓ Tous modules ouverts</li>
                <li>✓ Résiliable après l’essai</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section surface-dark">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold text-white">{finalTitle}</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/75">{finalLead}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink
              href={primaryCta.href}
              size="lg"
              variant="white"
              event="trial_start"
              eventPayload={{ campaign, cta: "v2_lp_final" }}
            >
              {primaryCta.label}
            </ButtonLink>
            {secondaryCta ? (
              <ButtonLink
                href={secondaryCta.href}
                size="lg"
                variant="secondary"
                className="!border-white !bg-transparent !text-white hover:!bg-white hover:!text-navy"
                eventPayload={{ campaign, cta: "v2_lp_final_secondary" }}
              >
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </section>

      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCtaBar />
    </>
  );
}
