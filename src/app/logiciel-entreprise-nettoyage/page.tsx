import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Logiciel entreprise de nettoyage",
  description:
    "PROGESTI : logiciel de gestion pour entreprise de nettoyage. Planning, pointage, facturation. Essai 2 mois sans carte bancaire.",
  alternates: { canonical: "/logiciel-entreprise-nettoyage" },
};

const faq = [
  {
    q: "Qu’est-ce qu’un logiciel pour entreprise de nettoyage ?",
    a: "C’est un outil qui centralise planning des agents, suivi des sites, pointage terrain et facturation — à la place d’Excel et WhatsApp.",
  },
  {
    q: "PROGESTI convient-il aux auto-entrepreneurs ?",
    a: "Oui. L’offre Starter est conçue pour démarrer seul, puis grandir avec Pro ou Premium.",
  },
  {
    q: "Combien coûte PROGESTI ?",
    a: "À partir de 29,99€ HT/mois, tous modules inclus. Essai 2 mois sans carte bancaire.",
  },
];

export default function PillarNettoyagePage() {
  return (
    <>
      <PageHero
        eyebrow="Page pilier SEO"
        title="Logiciel pour entreprise de nettoyage"
        lead="Planifiez vos agents, suivez vos sites et facturez le réalisé — un logiciel pensé pour la propreté, pas un ERP générique."
        primaryHref="/essai-gratuit"
        primaryLabel="Commencez gratuitement"
        secondaryHref="/demo"
        secondaryLabel="Voir une démonstration"
      />
      <section className="section !pt-0 bg-white">
        <div className="container grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-ink">Le problème du quotidien</h2>
            <p className="mt-3 text-muted">
              Entre les plannings Excel, les messages WhatsApp du dimanche soir et les factures en
              retard, beaucoup de dirigeants de sociétés de nettoyage perdent des heures chaque
              semaine — sans vision claire de l’activité.
            </p>
            <h2 className="mt-8 text-2xl font-extrabold text-ink">Ce que fait PROGESTI</h2>
            <ul className="mt-3 space-y-2 text-anthracite">
              <li>✓ Planning agents / sites</li>
              <li>✓ Pointage et bons d’intervention</li>
              <li>✓ Facturation liée au terrain</li>
              <li>✓ Tableaux de bord d’activité</li>
            </ul>
            <div className="mt-8">
              <ButtonLink href="/fonctionnalites">Voir les fonctionnalités</ButtonLink>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="rounded-2xl border border-line bg-fog p-6">
              <h2 className="text-xl font-extrabold text-ink">Pour qui ?</h2>
              <ul className="mt-4 space-y-3 text-sm text-anthracite">
                <li>
                  <strong className="text-ink">Auto-entrepreneurs</strong> — démarrer simple, sans
                  usine à gaz.
                </li>
                <li>
                  <strong className="text-ink">Petites entreprises</strong> — structurer équipes et
                  multi-sites.
                </li>
                <li>
                  <strong className="text-ink">Structures en croissance</strong> — passer de Pro à
                  Premium sans changer d’outil.
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted">
                Voir aussi :{" "}
                <Link href="/logiciel-planning-nettoyage" className="font-semibold text-emerald-dark">
                  planning
                </Link>
                ,{" "}
                <Link
                  href="/logiciel-facturation-proprete"
                  className="font-semibold text-emerald-dark"
                >
                  facturation
                </Link>
                ,{" "}
                <Link href="/alternative-propret" className="font-semibold text-emerald-dark">
                  alternative Propret
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section bg-fog">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-ink">FAQ</h2>
          <div className="mt-8">
            <FaqAccordion items={faq} />
          </div>
        </div>
      </section>
    </>
  );
}
