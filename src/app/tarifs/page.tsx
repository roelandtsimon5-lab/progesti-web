import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PricingTable } from "@/components/pricing/PricingTable";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
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
];

export default function TarifsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tarifs"
        title="Choisissez selon votre équipe"
        lead="Prix publics, modules complets, essai 2 mois sans carte bancaire. Aucun frais caché."
      />
      <section className="section !pt-0 surface-atmosphere">
        <div className="container">
          <PricingTable />
          <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-anthracite">
            {trustBadges.map((b) => (
              <li key={b.title}>
                <span className="text-emerald-dark">{b.title}</span> — {b.text}
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-14 max-w-2xl">
            <h2 className="text-2xl font-extrabold text-ink">Questions tarifs</h2>
            <div className="mt-6">
              <FaqAccordion items={pricingFaq} />
            </div>
            <div className="mt-8 text-center">
              <ButtonLink href={cta.trialApp} eventPayload={{ cta: "v2_tarifs_cta" }}>
                Commencez gratuitement
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
