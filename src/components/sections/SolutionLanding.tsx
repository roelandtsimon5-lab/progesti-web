import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClientLogoStrip } from "@/components/conversion/ClientLogoStrip";
import { FinalPush } from "@/components/conversion/FinalPush";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { cta, ctaLabels } from "@/lib/cta";
import { modules, site, trialCopy } from "@/lib/site";

export type SolutionContent = {
  slug: string;
  title: string;
  headline: string;
  lead: string;
  badge: string;
  pains: { title: string; text: string }[];
  responses: { moduleSlug: string; text: string }[];
  day: { time: string; text: string }[];
  faq: { q: string; a: string }[];
  seoDescription: string;
};

const proofBar = [
  { value: `${site.trialDays} jours`, label: "d’essai gratuit" },
  { value: "149 €", label: "HT/mois tout inclus" },
  { value: String(modules.length), label: "modules inclus" },
  { value: "0 €", label: "frais d’installation" },
];

export function SolutionLanding({ content }: { content: SolutionContent }) {
  return (
    <>
      {/* Hero — navy blue style */}
      <section className="relative overflow-hidden bg-blue-deep">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        <div className="container relative grid items-center gap-10 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-20 lg:pt-16">
          <div className="anim-rise">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90">
              {site.name} · {content.badge}
            </span>
            <h1 className="mt-5 font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-tight text-white md:text-[3rem]">
              {content.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{content.lead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink
                href={cta.trial}
                size="lg"
                variant="trial"
                event="trial_start"
                eventPayload={{ cta: `v3_solution_${content.slug}_hero` }}
              >
                {trialCopy.free}
              </ButtonLink>
              <ButtonLink
                href={cta.demo}
                size="lg"
                variant="outline-white"
                eventPayload={{ cta: `v3_solution_${content.slug}_demo` }}
              >
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-white/60">
              ✓ {trialCopy.label} · ✓ 149 € HT/mois · ✓ Jusqu'à 5 utilisateurs
            </p>
          </div>

          <div className="anim-rise-delay relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/hero-planning.png"
                alt={`Planning PROGESTI — vue semaine des passages`}
                width={900}
                height={560}
                priority
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 520px"
                quality={95}

              />
            </div>
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <section className="border-y border-blue-mist bg-white">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-4">
          {proofBar.map((item) => (
            <div key={item.label} className="text-center md:text-left">
              <p className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Douleurs */}
      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Le problème</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-blue-deep md:text-4xl">
              Ce qui freine le {content.title.toLowerCase()} au quotidien
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {content.pains.map((p, i) => (
              <Reveal key={p.title} delayMs={i * 60}>
                <div className="border-t-2 border-blue-royal pt-5">
                  <h3 className="font-display text-lg font-bold text-blue-deep">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Réponses modules */}
      <section className="section bg-[#F5F8FB]">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Comment PROGESTI répond</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-blue-deep md:text-4xl">
              Modules liés à ce métier
            </h2>
            <p className="lead mt-4">
              Tout inclus dans chaque offre — planning, terrain et facturation reliés.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {content.responses.map((r, i) => {
              const mod = modules.find((m) => m.slug === r.moduleSlug);
              return (
                <Reveal key={r.moduleSlug} delayMs={i * 40}>
                  <li>
                    <Link
                      href={`/fonctionnalites/${r.moduleSlug}`}
                      className="group block h-full rounded-xl border border-blue-mist bg-white p-6 transition hover:border-blue-royal hover:shadow-[0_12px_36px_rgba(11,61,110,0.08)]"
                    >
                      <h3 className="font-display text-lg font-bold text-blue-deep group-hover:text-blue-royal">
                        {mod?.title ?? r.moduleSlug}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">{r.text}</p>
                      <span className="mt-4 inline-block text-sm font-bold text-green-deep">
                        Voir le module →
                      </span>
                    </Link>
                  </li>
                </Reveal>
              );
            })}
          </ul>
          <div className="mt-12 overflow-hidden rounded-2xl border border-blue-mist/60 shadow-[0_16px_50px_rgba(11,61,110,0.1)]">
            <Image
              src="/screen-telegestion.webp"
              alt="Télégestion PROGESTI — pointages terrain et suivi interventions"
              width={1200}
              height={700}
              className="h-auto w-full"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* Journée type */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="eyebrow">Journée type</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
              Un fil de journée avec PROGESTI
            </h2>
          </Reveal>
          <ol className="mt-10 space-y-0">
            {content.day.map((d, i) => (
              <Reveal key={`${d.time}-${i}`} delayMs={i * 40}>
                <li className="grid gap-2 border-t border-blue-mist py-6 sm:grid-cols-[7rem_1fr] sm:gap-8">
                  <span className="font-display text-sm font-bold text-blue-royal">{d.time}</span>
                  <p className="text-slate">{d.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Pourquoi / différenciation */}
      <section className="section bg-blue-deep text-white">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#B8F5D4]">
              Pourquoi PROGESTI
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
              Testez PROGESTI sur vos vrais sites
            </h2>
            <p className="mt-4 text-lg text-white/90">
              <strong className="text-white">149 € HT/mois</strong>, jusqu'à 5 utilisateurs, tous
              modules inclus — pour piloter votre activité de {content.title.toLowerCase()}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={cta.trial}
                size="lg"
                variant="trial"
                event="trial_start"
                eventPayload={{ cta: `v3_solution_${content.slug}_why` }}
              >
                {ctaLabels.trialShort}
              </ButtonLink>
              <ButtonLink
                href={cta.demo}
                size="lg"
                variant="outline-white"
                eventPayload={{ cta: `v3_solution_${content.slug}_why_demo` }}
              >
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#F5F8FB] pb-28 lg:pb-16">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep">
              Questions — {content.title}
            </h2>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={content.faq} />
          </div>
          <p className="mt-6 text-sm">
            <Link href="/faq" className="font-bold text-blue-royal hover:underline">
              Toute la FAQ →
            </Link>
            {" · "}
            <Link href="/tarifs" className="font-bold text-blue-royal hover:underline">
              Tarifs →
            </Link>
            {" · "}
            <Link href="/solutions" className="font-bold text-blue-royal hover:underline">
              Toutes les solutions →
            </Link>
          </p>
        </div>
      </section>

      <ClientLogoStrip />
      <FinalPush title={`${content.title} — prêt à tester ?`} />
      <MobileCtaBar />
    </>
  );
}

export function solutionMetadata(content: SolutionContent): Metadata {
  return {
    title: `${content.title} — logiciel nettoyage`,
    description: content.seoDescription,
    alternates: { canonical: `/solutions/${content.slug}` },
    openGraph: {
      title: `${content.title} | ${site.name}`,
      description: content.seoDescription,
      url: `${site.url}/solutions/${content.slug}`,
    },
  };
}
