import Image from "next/image";
import Link from "next/link";
import { AdsV2LeadForm } from "@/components/sections/ads-v2/AdsV2LeadForm";
import { AdsV2TrialForm } from "@/components/sections/ads-v2/AdsV2TrialForm";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta } from "@/lib/cta";
import { formatEuro, plans, site } from "@/lib/site";

export type MonthStep = {
  label: string;
  price: string;
  detail: string;
  highlight?: boolean;
};

export type AdsGoogleContent = {
  campaign: string;
  badge: string;
  headline: string;
  subhead: string;
  priceAnchor?: string;
  formType: "trial" | "lead";
  formTitle: string;
  formLead: string;
  formCta: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  secondaryHref?: string;
  trustItems: string[];
  monthTimelineTitle: string;
  monthTimelineLead: string;
  months: MonthStep[];
  roiTitle: string;
  roiLead: string;
  roiItems: { label: string; value: string; note: string }[];
  painTitle: string;
  pains: { title: string; text: string }[];
  beforeAfterTitle: string;
  before: string[];
  after: string[];
  demoTitle: string;
  demoLead: string;
  demoSteps: { title: string; text: string }[];
  testimonials: { quote: string; author: string; role: string }[];
  stepsTitle: string;
  steps: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  finalTitle: string;
  finalLead: string;
  guarantee: string[];
};

function MonthTimeline({
  monthTimelineTitle,
  monthTimelineLead,
  months,
}: Pick<AdsGoogleContent, "monthTimelineTitle" | "monthTimelineLead" | "months">) {
  return (
    <section className="border-b border-line bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-center text-2xl font-extrabold text-navy sm:text-3xl">{monthTimelineTitle}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-anthracite">{monthTimelineLead}</p>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {months.map((m, i) => (
            <li
              key={m.label}
              className={`relative rounded-2xl border p-6 ${
                m.highlight
                  ? "border-emerald bg-emerald/10 shadow-[0_12px_40px_rgba(18,183,106,0.12)]"
                  : "border-line bg-[#F9FAFB]"
              }`}
            >
              {i < months.length - 1 ? (
                <span
                  className="absolute -right-2 top-1/2 hidden h-0.5 w-4 -translate-y-1/2 bg-emerald md:block lg:w-6"
                  aria-hidden
                />
              ) : null}
              <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-emerald-dark">
                {m.label}
              </p>
              <p className="mt-3 font-display text-3xl font-extrabold text-navy">{m.price}</p>
              <p className="mt-2 text-sm leading-relaxed text-anthracite">{m.detail}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-center text-sm font-semibold text-muted">
          Essai {site.trialMonths} mois sans carte bancaire · Résiliable à tout moment après l’essai
        </p>
      </div>
    </section>
  );
}

function PricingMonths() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
      <h2 className="text-center text-2xl font-extrabold text-navy sm:text-3xl">
        Tarifs publics — facturation mensuelle
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-anthracite">
        Tous les modules inclus dans chaque offre. Pas de frais cachés. Mise en place offerte.
      </p>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`rounded-2xl border bg-white p-6 ${
              plan.highlight ? "border-2 border-emerald" : "border-line"
            }`}
          >
            {plan.highlight ? (
              <span className="inline-block rounded-full bg-emerald/15 px-3 py-1 text-xs font-bold text-emerald-dark">
                Le plus populaire
              </span>
            ) : null}
            <h3 className="mt-2 font-display text-xl font-extrabold text-navy">{plan.name}</h3>
            <p className="text-sm text-muted">{plan.users}</p>
            <p className="mt-4 font-display text-[2.5rem] font-extrabold leading-none text-navy">
              {formatEuro(plan.monthly)}
            </p>
            <p className="mt-1 text-sm font-semibold text-anthracite">HT / mois</p>
            {plan.perUserHint ? (
              <p className="mt-1 text-xs text-muted">{plan.perUserHint}</p>
            ) : null}
          </article>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted">
        Option annuelle : 2 mois offerts (10 mois facturés pour 12 mois d’usage).
      </p>
    </section>
  );
}

function RoiBlock({
  roiTitle,
  roiLead,
  roiItems,
}: Pick<AdsGoogleContent, "roiTitle" | "roiLead" | "roiItems">) {
  return (
    <section className="bg-navy py-14 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-center text-2xl font-extrabold sm:text-3xl">{roiTitle}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-white/75">{roiLead}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {roiItems.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#B8F5D4]">{item.label}</p>
              <p className="mt-3 font-display text-3xl font-extrabold">{item.value}</p>
              <p className="mt-2 text-sm text-white/70">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdsGoogleLanding(c: AdsGoogleContent) {
  return (
    <div className="ads-lp min-h-screen bg-fog text-ink">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-2.5">
            <Image src="/logo-opt.webp" alt="" width={36} height={36} className="h-9 w-9" />
            <span className="font-display text-xl font-extrabold tracking-tight text-navy">PROGESTI</span>
          </div>
          <p className="rounded-full bg-emerald/15 px-3.5 py-2 text-xs font-bold text-emerald-dark sm:text-sm">
            {c.badge}
          </p>
        </div>
      </header>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-14">
          <div>
            {c.priceAnchor ? (
              <p className="inline-block rounded-full bg-navy px-4 py-1.5 font-display text-sm font-extrabold text-white">
                {c.priceAnchor}
              </p>
            ) : null}
            <p className="mt-4 font-display text-xs font-bold uppercase tracking-[0.14em] text-emerald-dark">
              Logiciel entreprises de nettoyage
            </p>
            <h1 className="mt-4 max-w-xl text-[1.85rem] font-extrabold leading-[1.12] tracking-tight text-navy sm:text-[2.4rem] md:text-[2.75rem]">
              {c.headline}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-anthracite sm:text-lg">{c.subhead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink
                href="#acces"
                size="lg"
                eventPayload={{ campaign: c.campaign, cta: "v3_hero_primary" }}
              >
                {c.primaryCtaLabel}
              </ButtonLink>
              <ButtonLink
                href={c.secondaryHref ?? cta.trialApp}
                size="lg"
                variant="secondary"
                event="trial_start"
                eventPayload={{ campaign: c.campaign, cta: "v3_hero_secondary" }}
              >
                {c.secondaryCtaLabel}
              </ButtonLink>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-anthracite">
              {c.trustItems.map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <span className="text-[#B8F5D4]" aria-hidden>
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div
            id="acces"
            className="scroll-mt-6 rounded-3xl border border-line bg-white p-6 shadow-[0_20px_60px_rgba(17,24,39,0.1)] sm:p-8 lg:sticky lg:top-6"
          >
            <div className="mb-3 h-1.5 w-14 rounded-full bg-emerald" />
            <h2 className="text-[1.45rem] font-extrabold leading-tight text-navy sm:text-2xl">{c.formTitle}</h2>
            <p className="mt-2 text-sm font-medium text-muted">{c.formLead}</p>
            <div className="mt-6">
              {c.formType === "trial" ? (
                <AdsV2TrialForm campaign={c.campaign} submitLabel={c.formCta} />
              ) : (
                <AdsV2LeadForm campaign={c.campaign} submitLabel={c.formCta} />
              )}
            </div>
          </div>
        </div>
      </section>

      <MonthTimeline
        monthTimelineTitle={c.monthTimelineTitle}
        monthTimelineLead={c.monthTimelineLead}
        months={c.months}
      />
      <PricingMonths />
      <RoiBlock roiTitle={c.roiTitle} roiLead={c.roiLead} roiItems={c.roiItems} />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <h2 className="text-center text-2xl font-extrabold text-navy sm:text-3xl">{c.painTitle}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {c.pains.map((p) => (
            <div key={p.title} className="rounded-2xl border border-[#FECACA] bg-[#FEF2F2] px-5 py-6">
              <h3 className="text-lg font-bold text-[#991B1B]">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#7F1D1D]">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-center text-2xl font-extrabold text-navy sm:text-3xl">{c.beforeAfterTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-[#F9FAFB] p-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.12em] text-muted">Avant</p>
              <ul className="mt-4 space-y-3">
                {c.before.map((b) => (
                  <li key={b} className="flex gap-2 text-sm font-medium text-anthracite">
                    <span className="text-danger" aria-hidden>
                      ✕
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald/40 bg-emerald/10 p-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.12em] text-emerald-dark">
                Avec PROGESTI
              </p>
              <ul className="mt-4 space-y-3">
                {c.after.map((a) => (
                  <li key={a} className="flex gap-2 text-sm font-semibold text-emerald-dark">
                    <span className="text-[#B8F5D4]" aria-hidden>
                      ✓
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{c.demoTitle}</h2>
            <p className="mt-3 text-base text-anthracite">{c.demoLead}</p>
            <ol className="mt-8 space-y-5">
              {c.demoSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald font-display text-sm font-extrabold text-navy">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-navy">{s.title}</h3>
                    <p className="mt-1 text-sm text-anthracite">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_16px_50px_rgba(17,24,39,0.08)]">
            <div className="flex items-center gap-2 border-b border-line bg-[#F9FAFB] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D1D5DB]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D1D5DB]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D1D5DB]" />
              <span className="ml-2 text-xs font-semibold text-muted">Aperçu PROGESTI</span>
            </div>
            <Image
              src="/dashboard-mockup-opt.webp"
              alt="Aperçu du logiciel PROGESTI"
              width={900}
              height={640}
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-center text-2xl font-extrabold text-navy sm:text-3xl">
            Ce que disent des gérants comme vous
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-muted">
            Exemples illustratifs — à remplacer par vos avis clients réels.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {c.testimonials.map((t) => (
              <blockquote key={t.author} className="rounded-2xl border border-line bg-[#F9FAFB] p-6">
                <p className="text-base font-medium leading-relaxed text-ink">« {t.quote} »</p>
                <footer className="mt-4 text-sm font-bold text-navy">
                  {t.author}
                  <span className="font-medium text-muted"> — {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <h2 className="text-center text-2xl font-extrabold text-navy sm:text-3xl">{c.stepsTitle}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {c.steps.map((s, i) => (
            <div key={s.title} className="border-t-2 border-emerald pt-5">
              <p className="font-display text-sm font-bold text-emerald-dark">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-anthracite">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Questions fréquentes</h2>
            <div className="mt-6 space-y-3">
              {c.faq.map((o) => (
                <details
                  key={o.q}
                  className="group rounded-xl border border-line bg-[#F9FAFB] open:border-emerald/40"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 font-display text-base font-bold text-navy marker:content-none">
                    <span className="flex items-start justify-between gap-3">
                      {o.q}
                      <span className="text-emerald-dark transition group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="border-t border-line px-5 py-4 text-sm text-anthracite">{o.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-navy p-7 text-white sm:p-8">
            <h2 className="text-2xl font-extrabold">{c.finalTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{c.finalLead}</p>
            <ul className="mt-6 space-y-2.5">
              {c.guarantee.map((g) => (
                <li key={g} className="flex gap-2 text-sm font-semibold text-white/90">
                  <span className="text-[#B8F5D4]" aria-hidden>
                    ✓
                  </span>
                  {g}
                </li>
              ))}
            </ul>
            <a
              href="#acces"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-emerald px-6 font-display text-sm font-extrabold text-navy transition hover:bg-emerald-dark hover:text-white"
            >
              {c.primaryCtaLabel}
            </a>
            <Link
              href={cta.trialApp}
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/40 px-6 font-display text-sm font-extrabold text-white transition hover:bg-white hover:text-navy"
            >
              Créer mon essai {site.trialMonths} mois sans CB
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 backdrop-blur lg:hidden">
        <a
          href="#acces"
          className="flex min-h-12 w-full items-center justify-center rounded-xl bg-emerald font-display text-sm font-extrabold text-navy"
        >
          {c.primaryCtaLabel}
        </a>
      </div>
      <div className="h-20 lg:hidden" aria-hidden />
    </div>
  );
}
