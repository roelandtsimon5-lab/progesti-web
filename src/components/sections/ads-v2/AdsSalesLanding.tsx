import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { AdsV2LeadForm } from "./AdsV2LeadForm";

export type AdsSalesContent = {
  campaign: string;
  badge: string;
  headline: string;
  subhead: string;
  formTitle: string;
  formLead: string;
  formCta: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  secondaryHref?: string;
  trustItems: string[];
  proofStrip: string[];
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

export function AdsSalesLanding(c: AdsSalesContent) {
  return (
    <div className="ads-lp min-h-screen bg-[#F3F4F6] text-[#111827]">
      {/* Header */}
      <header className="border-b border-[#E5E7EB] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-2.5">
            <Image src="/logo-opt.webp" alt="" width={36} height={36} className="h-9 w-9" />
            <span className="font-display text-xl font-extrabold tracking-tight text-[#0F1F33]">
              PROGESTI
            </span>
          </div>
          <p className="rounded-full bg-[#ECFDF3] px-3.5 py-2 text-xs font-bold text-[#067647] sm:text-sm">
            {c.badge}
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-[#E5E7EB] bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-14">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#067647]">
              Logiciel entreprises de nettoyage
            </p>
            <h1 className="mt-4 max-w-xl text-[1.85rem] font-extrabold leading-[1.12] tracking-tight text-[#0F1F33] sm:text-[2.4rem] md:text-[2.75rem]">
              {c.headline}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#374151] sm:text-lg">
              {c.subhead}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink
                href="#acces"
                size="lg"
                eventPayload={{ campaign: c.campaign, cta: "v2_hero_primary" }}
              >
                {c.primaryCtaLabel}
              </ButtonLink>
              <ButtonLink
                href={c.secondaryHref ?? "/essai-gratuit"}
                size="lg"
                variant="secondary"
                event="trial_start"
                eventPayload={{ campaign: c.campaign, cta: "v2_hero_secondary" }}
              >
                {c.secondaryCtaLabel}
              </ButtonLink>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#374151]">
              {c.trustItems.map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <span className="text-[#12B76A]" aria-hidden>
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            {c.proofStrip.length ? (
              <ul className="mt-8 grid gap-2 sm:grid-cols-3">
                {c.proofStrip.map((p) => (
                  <li
                    key={p}
                    className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-3 text-center text-xs font-semibold text-[#374151]"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div
            id="acces"
            className="scroll-mt-6 rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-[0_20px_60px_rgba(17,24,39,0.1)] sm:p-8 lg:sticky lg:top-6"
          >
            <div className="mb-3 h-1.5 w-14 rounded-full bg-[#12B76A]" />
            <h2 className="text-[1.45rem] font-extrabold leading-tight text-[#0F1F33] sm:text-2xl">
              {c.formTitle}
            </h2>
            <p className="mt-2 text-sm font-medium text-[#4B5563]">{c.formLead}</p>
            <div className="mt-6">
              <AdsV2LeadForm campaign={c.campaign} submitLabel={c.formCta} />
            </div>
          </div>
        </div>
      </section>

      {/* Cost of inaction */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <h2 className="text-center text-2xl font-extrabold text-[#0F1F33] sm:text-3xl">
          {c.painTitle}
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {c.pains.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[#FECACA] bg-[#FEF2F2] px-5 py-6"
            >
              <h3 className="text-lg font-bold text-[#991B1B]">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#7F1D1D]">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-center text-2xl font-extrabold text-[#0F1F33] sm:text-3xl">
            {c.beforeAfterTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.12em] text-[#6B7280]">
                Avant
              </p>
              <ul className="mt-4 space-y-3">
                {c.before.map((b) => (
                  <li key={b} className="flex gap-2 text-sm font-medium text-[#4B5563]">
                    <span className="text-[#DC2626]" aria-hidden>
                      ✕
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#A7F3D0] bg-[#ECFDF3] p-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.12em] text-[#067647]">
                Avec PROGESTI
              </p>
              <ul className="mt-4 space-y-3">
                {c.after.map((a) => (
                  <li key={a} className="flex gap-2 text-sm font-semibold text-[#065F46]">
                    <span className="text-[#12B76A]" aria-hidden>
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

      {/* Product demo */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0F1F33] sm:text-3xl">{c.demoTitle}</h2>
            <p className="mt-3 text-base text-[#4B5563]">{c.demoLead}</p>
            <ol className="mt-8 space-y-5">
              {c.demoSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#12B76A] font-display text-sm font-extrabold text-[#0F1F33]">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#0F1F33]">{s.title}</h3>
                    <p className="mt-1 text-sm text-[#4B5563]">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_16px_50px_rgba(17,24,39,0.08)]">
            <div className="flex items-center gap-2 border-b border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D1D5DB]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D1D5DB]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D1D5DB]" />
              <span className="ml-2 text-xs font-semibold text-[#6B7280]">Aperçu PROGESTI</span>
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

      {/* Testimonials */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-center text-2xl font-extrabold text-[#0F1F33] sm:text-3xl">
            Ce que disent des gérants comme vous
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-[#6B7280]">
            Exemples illustratifs — à remplacer par vos avis clients réels.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {c.testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6"
              >
                <p className="text-base font-medium leading-relaxed text-[#111827]">
                  « {t.quote} »
                </p>
                <footer className="mt-4 text-sm font-bold text-[#0F1F33]">
                  {t.author}
                  <span className="font-medium text-[#6B7280]"> — {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <h2 className="text-center text-2xl font-extrabold text-[#0F1F33] sm:text-3xl">
          {c.stepsTitle}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {c.steps.map((s, i) => (
            <div key={s.title} className="border-t-2 border-[#12B76A] pt-5">
              <p className="font-display text-sm font-bold text-[#067647]">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-bold text-[#0F1F33]">{s.title}</h3>
              <p className="mt-2 text-sm text-[#4B5563]">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ + guarantee */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0F1F33] sm:text-3xl">
              Questions fréquentes
            </h2>
            <div className="mt-6 space-y-3">
              {c.faq.map((o) => (
                <details
                  key={o.q}
                  className="group rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] open:border-[#12B76A]/40"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 font-display text-base font-bold text-[#0F1F33] marker:content-none">
                    <span className="flex items-start justify-between gap-3">
                      {o.q}
                      <span className="text-[#067647] transition group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="border-t border-[#E5E7EB] px-5 py-4 text-sm text-[#4B5563]">{o.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#0F1F33] p-7 text-white sm:p-8">
            <h2 className="text-2xl font-extrabold text-white">{c.finalTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{c.finalLead}</p>
            <ul className="mt-6 space-y-2.5">
              {c.guarantee.map((g) => (
                <li key={g} className="flex gap-2 text-sm font-semibold text-white/90">
                  <span className="text-[#12B76A]" aria-hidden>
                    ✓
                  </span>
                  {g}
                </li>
              ))}
            </ul>
            <a
              href="#acces"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#12B76A] px-6 font-display text-sm font-extrabold text-[#0F1F33] transition hover:bg-[#0E9F5A] hover:text-white"
            >
              {c.primaryCtaLabel}
            </a>
            <Link
              href="/essai-gratuit"
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/40 px-6 font-display text-sm font-extrabold text-white transition hover:bg-white hover:text-[#0F1F33]"
            >
              Créer mon essai 2 mois sans CB
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E5E7EB] bg-white/95 p-3 backdrop-blur lg:hidden">
        <a
          href="#acces"
          className="flex min-h-12 w-full items-center justify-center rounded-xl bg-[#12B76A] font-display text-sm font-extrabold text-[#0F1F33]"
        >
          {c.primaryCtaLabel}
        </a>
      </div>
      <div className="h-20 lg:hidden" aria-hidden />
    </div>
  );
}
