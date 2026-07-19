import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Logiciel planning nettoyage",
  description:
    "Logiciel de planning pour entreprise de nettoyage : affectez agents et sites, évitez les oublis. Essai PROGESTI 2 mois.",
  alternates: { canonical: "/logiciel-planning-nettoyage" },
};

export default function PillarPlanningPage() {
  return (
    <>
      <PageHero
        eyebrow="Planning propreté"
        title="Logiciel de planning pour le nettoyage"
        lead="Affectez le bon agent au bon site, au bon créneau — sans Excel ni messages perdus."
        primaryHref="/essai-gratuit"
        primaryLabel="Essayer le planning 2 mois"
        secondaryHref="/fonctionnalites/planification"
        secondaryLabel="Détail du module"
      />
      <section className="section !pt-0">
        <div className="container max-w-3xl space-y-6 rounded-2xl border border-line bg-white p-8">
          <h2 className="text-2xl font-extrabold text-ink">Pourquoi un planning métier ?</h2>
          <p className="text-muted">
            Un tableau Excel ne gère ni les absences, ni le multi-sites, ni le lien avec le pointage.
            PROGESTI relie planning, terrain et facturation dans le même flux.
          </p>
          <ul className="space-y-2 text-anthracite">
            <li>✓ Vue semaine agents / sites</li>
            <li>✓ Moins d’oublis et de doublons</li>
            <li>✓ Base pour le pointage mobile</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href="/demo">Voir en démo</ButtonLink>
            <Link href="/logiciel-entreprise-nettoyage" className="font-bold text-emerald-dark underline">
              Retour page pilier
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
