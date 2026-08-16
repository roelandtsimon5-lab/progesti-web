import type { Metadata } from "next";
import Link from "next/link";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { PageHero } from "@/components/sections/PageHero";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { mainPlan, planInclusions, trustBadges } from "@/lib/site";
import { cta } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Tarifs — 149 € HT/mois, tout inclus",
  description:
    "Tarifs PROGESTI : 149 € HT/mois, jusqu'à 5 utilisateurs, tous modules inclus. Essai 7 jours sans engagement.",
  path: "/tarifs",
});

const pricingFaq = [
  {
    q: "Les modules sont-ils tous inclus ?",
    a: "Oui. Planning, pointage, facturation, RH, CRM et tous les autres modules sont inclus dans l'offre à 149 € HT/mois.",
  },
  {
    q: "Combien d'utilisateurs sont inclus ?",
    a: "Jusqu'à 5 utilisateurs. Contactez-nous si vous avez besoin de plus.",
  },
  {
    q: "Y a-t-il des frais d'installation ?",
    a: "Non. Mise en place offerte. Pas de frais cachés.",
  },
  {
    q: "Puis-je essayer avant de m'engager ?",
    a: "Oui. Essai 7 jours gratuit, sans engagement. Demandez une démo pour découvrir le logiciel.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <PageHero
        eyebrow="Tarif unique"
        title="149 € HT / mois"
        lead="Jusqu'à 5 utilisateurs. Tous les modules inclus. Essai 7 jours sans engagement."
        primaryHref={cta.demo}
        primaryLabel="Demander une démo"
        secondaryHref={cta.trial}
        secondaryLabel="Essai 7 jours gratuit"
      />

      <section className="border-y border-blue-mist bg-white">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {trustBadges.map((badge) => (
            <div key={badge.title}>
              <p className="font-display text-2xl font-extrabold text-blue-deep">{badge.title}</p>
              <p className="mt-1 text-sm font-medium text-slate">{badge.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-[#F5F8FB]">
        <div className="container max-w-3xl">
          <div className="rounded-2xl border-2 border-green-action/30 bg-white p-8 shadow-[0_16px_50px_rgba(11,61,110,0.08)]">
            <div className="text-center">
              <h2 className="font-display text-4xl font-extrabold text-blue-deep md:text-5xl">
                {mainPlan.monthly} € <span className="text-xl font-bold text-slate">HT / mois</span>
              </h2>
              <p className="mt-2 text-lg text-slate">{mainPlan.users}</p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {mainPlan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 font-bold text-green-action">✓</span>
                  <span className="text-slate">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-center gap-4 border-t border-blue-mist pt-8 sm:flex-row sm:justify-center">
              <ButtonLink
                href={cta.demo}
                size="lg"
                eventPayload={{ cta: "tarifs_demo" }}
              >
                Demander une démo
              </ButtonLink>
              <ButtonLink
                href={cta.trial}
                size="lg"
                variant="secondary"
                eventPayload={{ cta: "tarifs_trial" }}
              >
                Essai 7 jours gratuit
              </ButtonLink>
            </div>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate">
            {planInclusions.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-green-action">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-extrabold text-blue-deep">Questions tarifs</h2>
          <div className="mt-6">
            <FaqAccordion items={pricingFaq} />
          </div>
        </div>
      </section>

      <ConversionBlock variant="demo" />
      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCtaBar />
    </>
  );
}
