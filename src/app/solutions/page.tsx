import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { solutions } from "@/lib/site";
import { cta } from "@/lib/cta";
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
      <section className="relative overflow-hidden bg-blue-deep">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        <div className="container relative max-w-3xl py-14 md:py-16">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90">
            Solutions métier
          </span>
          <h1 className="mt-5 font-display text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-white md:text-[3.15rem]">
            Un logiciel, plusieurs univers de propreté
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Bureaux, syndics, locaux pros, fin de chantier — le parcours planning → terrain →
            facture reste le même. Essai 7 jours gratuit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={cta.demo}
              size="lg"
              eventPayload={{ cta: "v3_solutions_hub_demo" }}
            >
              Demander une démo
            </ButtonLink>
            <ButtonLink
              href={cta.trialApp}
              size="lg"
              variant="outline-white"
              event="trial_start"
              eventPayload={{ cta: "v3_solutions_hub_trial" }}
            >
              Essai 7 jours gratuit
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-white/60">
            ✓ Essai 7 jours · ✓ 149 € HT/mois · ✓ Tous modules inclus
          </p>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-white">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            ["7 jours", "d’essai gratuit"],
            ["149 €", "HT/mois tout inclus"],
            ["11", "modules inclus"],
            ["0 €", "frais d’installation"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="font-display text-2xl font-extrabold text-blue-deep">{v}</p>
              <p className="mt-1 text-sm font-medium text-slate">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Pour qui</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
              Choisissez votre contexte terrain
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-blue-mist border-y border-blue-mist">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delayMs={i * 40}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group flex flex-col gap-2 py-7 transition sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                >
                  <div>
                    <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-blue-royal">
                      0{i + 1} · {s.navHint}
                    </p>
                    <h2 className="mt-2 font-display text-xl font-bold text-blue-deep group-hover:text-blue-royal md:text-2xl">
                      {s.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-sm text-slate">{s.lead}</p>
                  </div>
                  <span className="shrink-0 font-display text-sm font-bold text-green-deep">
                    Découvrir →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConversionBlock variant="essai" />

      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCtaBar />
    </>
  );
}
