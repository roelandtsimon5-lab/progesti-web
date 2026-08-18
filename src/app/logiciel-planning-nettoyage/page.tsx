import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import Link from "next/link";
import { cta } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Logiciel planning nettoyage",
  description:
    "Logiciel de planning pour entreprise de nettoyage : affectez agents et sites, évitez les oublis. 149 € HT/mois, essai 7 jours.",
  path: "/logiciel-planning-nettoyage",
});

export default function PillarPlanningPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <PageHero
        eyebrow="Planning propreté"
        title="Logiciel de planning pour le nettoyage"
        lead="Affectez le bon agent au bon site, au bon créneau — bureaux, syndics, locaux pros ou fin de chantier, sans Excel ni messages perdus. 149 € HT/mois."
        primaryHref={cta.demo}
        primaryLabel="Demander une démo"
        secondaryHref={cta.trial}
        secondaryLabel="Essai 7 jours gratuit"
      />
      <section className="section !pt-0">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-extrabold text-ink">Pourquoi un planning métier ?</h2>
          <p className="mt-3 text-muted">
            Un tableau Excel ne gère ni les absences, ni le multi-sites, ni le lien avec le pointage.
            PROGESTI relie planning, terrain et facturation dans le même flux — un{" "}
            <Link href="/logiciel-entreprise-nettoyage" className="font-semibold text-emerald-dark hover:underline">
              logiciel pour entreprise de nettoyage
            </Link>{" "}
            complet.
          </p>
          <ul className="mt-6 space-y-2 text-anthracite">
            <li>✓ Vue semaine agents / sites</li>
            <li>✓ Moins d’oublis et de doublons</li>
            <li>✓ Base pour le pointage mobile</li>
            <li>✓ Adapté aux fréquences bureaux et aux tournées parties communes</li>
          </ul>
          <p className="mt-6 text-sm text-muted">
            Cas d’usage :{" "}
            <Link href="/solutions/bureaux" className="font-semibold text-emerald-dark hover:underline">
              bureaux
            </Link>
            {" · "}
            <Link href="/solutions/syndics" className="font-semibold text-emerald-dark hover:underline">
              syndics
            </Link>
            {" · "}
            <Link href="/blog" className="font-semibold text-emerald-dark hover:underline">
              guides planning
            </Link>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={cta.demo}
              eventPayload={{ cta: "v3_pillar_planning_demo" }}
            >
              Demander une démo
            </ButtonLink>
            <ButtonLink href={cta.trial} variant="secondary" eventPayload={{ cta: "v3_pillar_planning_trial" }}>
              Essai 7 jours gratuit
            </ButtonLink>
          </div>
        </div>
      </section>
      <ConversionBlock variant="essai" />
    </>
  );
}
