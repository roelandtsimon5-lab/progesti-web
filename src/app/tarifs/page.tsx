import type { Metadata } from "next";
import Link from "next/link";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { ProgestiPricing } from "@/components/pricing/ProgestiPricing";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { FinalPush } from "@/components/conversion/FinalPush";
import { ReviewsLd } from "@/components/seo/ReviewsLd";
import { cta, ctaLabels } from "@/lib/cta";
import { socialProofStats } from "@/lib/testimonials";
import { pricingCopy, solutions, site, trustBadges, trialCopy } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Tarifs — dès 29,99 € HT/mois",
  description: `Tarifs PROGESTI : Starter 29,99 €, Pro 49,99 €, Premium 99,99 € HT/mois. Tous modules inclus. ${trialCopy.free}, sans engagement.`,
  path: "/tarifs",
});

const pricingFaq = [
  {
    q: "Les modules sont-ils tous inclus ?",
    a: "Oui. Planning, pointage, facturation, RH, CRM et tous les autres modules sont inclus dans chaque offre (Starter, Pro, Premium).",
  },
  {
    q: "Combien d'utilisateurs sont inclus ?",
    a: "Starter : 1 administrateur principal. Pro : 5 utilisateurs. Premium : 20 utilisateurs. Contactez-nous si vous avez besoin de plus.",
  },
  {
    q: "Y a-t-il des frais d'installation ?",
    a: "Non. Mise en place offerte. Pas de frais cachés. Stockage illimité et mises à jour gratuites.",
  },
  {
    q: "Puis-je essayer avant de m'engager ?",
    a: `Oui. Essai ${site.trialDays} jours gratuit, sans carte bancaire.`,
  },
  {
    q: "Quelles sont les offres ?",
    a: "Trois tarifs publics : Starter 29,99 € HT/mois, Pro 49,99 € HT/mois (soit 9,99 € HT/utilisateur), Premium 99,99 € HT/mois (soit 4,99 € HT/utilisateur). Tous modules inclus.",
  },
  {
    q: "L'offre annuelle est-elle avantageuse ?",
    a: "Oui. L'annuel équivaut à 2 mois offerts (10 mois facturés pour 12 mois d'usage).",
  },
];

export default function TarifsPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <ReviewsLd />
      <FaqPageLd items={pricingFaq} />
      <section className="industry-hero-bg relative overflow-hidden">
        <div className="container relative py-14 md:py-16">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Tarifs" },
            ]}
            dark
          />
          <h1 className="mt-4 max-w-2xl font-sans text-[2.35rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-white md:text-[3rem]">
            Des tarifs publics. Tout inclus.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            {pricingCopy.plansSummary}. Pas de devis opaque, pas de surprise en fin de mois.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={cta.trial}
              size="lg"
              variant="trial"
              className="!rounded-[2px]"
              event="trial_start"
              eventPayload={{ cta: "tarifs_hero_trial" }}
            >
              Essai {site.trialDays} jours
            </ButtonLink>
            <ButtonLink
              href={cta.demo}
              size="lg"
              variant="outline-white"
              className="!rounded-[2px]"
              eventPayload={{ cta: "tarifs_hero_demo" }}
            >
              {ctaLabels.demoGate}
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm text-white/55">
            Sans carte bancaire ·{" "}
            <Link href="/contact" className="font-semibold text-white/80 underline-offset-4 hover:underline">
              une question ?
            </Link>
          </p>
        </div>
        <div className="industry-hero-wave" aria-hidden />
      </section>

      <section className="border-y border-blue-mist bg-white">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {trustBadges.map((badge) => (
            <div key={badge.title}>
              <p className="font-display text-2xl font-extrabold text-blue-deep">{badge.title}</p>
              <p className="mt-1 text-sm font-medium text-slate">{badge.text}</p>
            </div>
          ))}
        </div>
        <p className="container border-t border-blue-mist/60 pb-8 pt-6 text-center text-sm text-slate">
          <span className="font-bold text-blue-deep">{socialProofStats.rating}/5</span> support ·{" "}
          <span className="font-bold text-blue-deep">{socialProofStats.modules} modules</span> ·{" "}
          <Link href="/temoignages" className="font-bold text-blue-royal hover:underline">
            lire les avis clients
          </Link>
        </p>
      </section>

      <section className="section surface-atmosphere">
        <div className="container">
          <Reveal>
            <ProgestiPricing />
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Adapté à votre métier
            </h2>
            <p className="mt-3 max-w-xl text-slate">
              Mêmes offres, même outil — bureaux, syndics, locaux pros ou fin de chantier.
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="block rounded-[2px] border border-blue-mist px-4 py-3 text-sm font-semibold text-blue-deep transition hover:border-blue-royal hover:bg-blue-sky/30"
                >
                  {s.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-[#F5F8FB] pb-28 lg:pb-16" data-cta-sticky-safe>
        <div className="container max-w-2xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">Questions tarifs</h2>
          <div className="mt-6">
            <IndustryFaq items={pricingFaq} />
          </div>
          <p className="mt-8 text-center text-sm text-slate">
            Une question ?{" "}
            <a href={`tel:${site.phoneTel}`} className="font-bold text-blue-royal hover:underline">
              {site.phone}
            </a>
            {" · "}
            <Link href={cta.demo} className="font-bold text-blue-royal hover:underline">
              {ctaLabels.demoGate}
            </Link>
          </p>
        </div>
      </section>

      <FinalPush title="Tarifs publics. Testez sur votre activité." />
      <MobileCtaBar />
    </>
  );
}
