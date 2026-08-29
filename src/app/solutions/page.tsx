import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FinalPush } from "@/components/conversion/FinalPush";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { solutions, modules, site } from "@/lib/site";
import { cta, ctaLabels } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Solutions — bureaux, syndics, professionnels, fin de chantier",
  description:
    "PROGESTI pour le nettoyage de bureaux, syndics & copropriétés, professionnels & commerces, fin de chantier et auto-entrepreneurs.",
  path: "/solutions",
});

export default function SolutionsIndexPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <section className="industry-hero-bg relative overflow-hidden">
        <div className="container relative max-w-3xl py-14 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-cta/90">
            Solutions métier
          </p>
          <h1 className="mt-3 font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-tight text-white md:text-[3rem]">
            Un logiciel, plusieurs univers de propreté
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Bureaux, syndics, locaux pros, fin de chantier — le parcours planning → terrain →
            facture reste le même. Essai {site.trialDays} jours gratuit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={cta.trial}
              size="lg"
              variant="trial"
              className="!rounded-[2px]"
              event="trial_start"
              eventPayload={{ cta: "v3_solutions_hub_trial" }}
            >
              {ctaLabels.trialShort}
            </ButtonLink>
            <ButtonLink
              href={cta.demo}
              size="lg"
              variant="outline-white"
              className="!rounded-[2px]"
              eventPayload={{ cta: "v3_solutions_hub_demo" }}
            >
              {ctaLabels.demoGate}
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm text-white/55">
            Essai {site.trialDays} jours · 149 € HT/mois · Tous modules inclus
          </p>
        </div>
        <div className="industry-hero-wave" aria-hidden />
      </section>

      <section className="border-y border-blue-mist bg-white">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            [`${site.trialDays} jours`, "d’essai gratuit"],
            ["149 €", "HT/mois tout inclus"],
            [`${modules.length}`, "modules inclus"],
            ["0 €", "frais d’installation"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="font-display text-2xl font-extrabold text-blue-deep">{v}</p>
              <p className="mt-1 text-sm font-medium text-slate">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white pb-28 lg:pb-16">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Pour qui</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
              Choisissez votre contexte terrain
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delayMs={i * 40}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col rounded-[2px] border border-blue-mist bg-white p-6 transition hover:border-blue-royal hover:shadow-[0_16px_48px_rgba(11,61,110,0.1)]"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-royal">
                    {s.navHint}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-extrabold text-blue-deep group-hover:text-blue-royal">
                    {s.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{s.lead}</p>
                  <span className="mt-5 text-sm font-bold text-lime-cta group-hover:underline">
                    Voir la solution →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalPush />
      <MobileCtaBar />
    </>
  );
}
