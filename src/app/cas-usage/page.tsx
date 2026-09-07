import type { Metadata } from "next";
import Link from "next/link";
import { UseCaseCard } from "@/components/conversion/UseCaseSection";
import { FinalPush } from "@/components/conversion/FinalPush";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pageMeta } from "@/lib/seo";
import { site, modules } from "@/lib/site";
import { cta, ctaLabels } from "@/lib/cta";
import { useCases, productFacts } from "@/lib/use-cases";

export const metadata: Metadata = pageMeta({
  title: "Cas d'usage — entreprises de nettoyage",
  description:
    "Cas d'usage PROGESTI pour entreprises de propreté : gain de temps admin, preuves de passage, facturation accélérée. Dès 29,99 € HT/mois.",
  path: "/cas-usage",
});

export default function CasUsagePage() {
  return (
    <>
      <IndustryPageHero
        eyebrow="Cas d'usage"
        title="Des problèmes concrets, des solutions métier"
        lead="PROGESTI répond aux défis quotidiens des entreprises de propreté — planning, pointage terrain et facturation dans un seul outil."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Cas d'usage" },
        ]}
        trialEvent="cas_usage_trial"
        demoEvent="cas_usage_demo"
      />
      <section className="border-b border-line bg-white py-8">
        <div className="container">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            <li>
              <p className="font-display text-3xl font-extrabold text-brand-navy">
                {modules.length}
              </p>
              <p className="text-sm text-slate">modules inclus</p>
            </li>
            <li>
              <p className="font-display text-3xl font-extrabold text-brand-navy">
                {productFacts.support}
              </p>
              <p className="text-sm text-slate">{productFacts.supportLabel}</p>
            </li>
            <li>
              <p className="font-display text-3xl font-extrabold text-brand-navy">
                {productFacts.trial}
              </p>
              <p className="text-sm text-slate">{productFacts.trialLabel}</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="section bg-warm-light pb-28 lg:pb-16">
        <div className="container">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item, i) => (
              <Reveal key={item.id} delayMs={i * 40} className="h-full">
                <li className="h-full list-none">
                  <UseCaseCard item={item} />
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-14 max-w-xl border-t border-blue-mist pt-8">
            <p className="text-anthracite">
              Vous utilisez PROGESTI et souhaitez partager votre retour ?
            </p>
            <a
              className="mt-3 inline-block font-bold text-blue-royal hover:underline"
              href={`mailto:${site.email}?subject=Retour%20PROGESTI`}
            >
              Envoyer un retour →
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink
                href={cta.trial}
                variant="trial"
                event="trial_start"
                eventPayload={{ cta: "cas_usage_trial" }}
              >
                Essai {site.trialDays} jours
              </ButtonLink>
              <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "cas_usage_demo" }}>
                {ctaLabels.demoGate}
              </ButtonLink>
              <Link href="/faq" className="inline-flex items-center text-sm font-bold text-blue-royal hover:underline">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FinalPush title="Prêt à structurer votre activité ?" />
      <MobileCtaBar />
    </>
  );
}
