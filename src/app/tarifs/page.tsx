import type { Metadata } from "next";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";
import { PricingTable } from "@/components/pricing/PricingTable";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { PageHero } from "@/components/sections/PageHero";
import { trustBadges } from "@/lib/site";
import { cta } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs PROGESTI : Starter, Pro, Premium. Essai gratuit 2 mois. Tous modules inclus.",
};

const pricingFaq = [
  {
    q: "Les modules sont-ils tous inclus ?",
    a: "Oui. Starter, Pro et Premium incluent l’ensemble des modules. Seul le nombre d’utilisateurs change.",
  },
  {
    q: "Que se passe-t-il après l’essai ?",
    a: "Vous choisissez une offre pour continuer, ou vous arrêtez. Aucune carte n’est demandée pendant les 2 mois.",
  },
  {
    q: "Puis-je payer à l’année ?",
    a: "Oui. L’offre annuelle inclut 2 mois offerts (prix = 10 mois).",
  },
  {
    q: "Y a-t-il des frais d’installation ?",
    a: "Non. Mise en place offerte. Pas de frais cachés.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tarifs publics"
        title="Choisissez selon votre équipe"
        lead="Prix clairs, modules complets, essai 2 mois sans carte bancaire. Aucun frais caché."
        primaryHref={cta.trialApp}
        primaryLabel="Essai gratuit 2 mois"
        secondaryHref={cta.demo}
        secondaryLabel="Voir la démo"
      />

      <section className="border-y border-blue-mist bg-white">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            ["2 mois", "d’essai sans CB"],
            ["29,99 €", "HT/mois dès Starter"],
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

      <section className="section bg-[#F5F8FB]">
        <div className="container">
          <PricingTable />
          <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate">
            {trustBadges.map((b) => (
              <li key={b.title}>
                <span className="text-green-deep">{b.title}</span> — {b.text}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink
              href={cta.trialApp}
              size="lg"
              event="trial_start"
              eventPayload={{ cta: "v3_tarifs_cta" }}
            >
              Commencer l’essai gratuit
            </ButtonLink>
          </div>
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

      <ConversionBlock variant="essai" />
      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCtaBar />
    </>
  );
}
