import type { Metadata } from "next";
import { IndustryPillarPage } from "@/components/industry/IndustryPillarPage";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { pageMeta } from "@/lib/seo";
import { trialCopy } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Logiciel planning nettoyage",
  description:
    `Logiciel de planning pour entreprise de nettoyage : affectez agents et sites, évitez les oublis. 149 € HT/mois, ${trialCopy.metaSuffix}`,
  path: "/logiciel-planning-nettoyage",
});

export default function PillarPlanningPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <IndustryPillarPage
        eyebrow="Planning propreté"
        title="Logiciel de planning pour le nettoyage"
        lead="Affectez le bon agent au bon site, au bon créneau — bureaux, syndics, locaux pros ou fin de chantier, sans Excel ni messages perdus."
        h2="Pourquoi un planning métier ?"
        body="Un tableau Excel ne gère ni les absences, ni le multi-sites, ni le lien avec le pointage. PROGESTI relie planning, terrain et facturation dans le même flux."
        bullets={[
          "Vue semaine agents / sites",
          "Fréquences et récurrences automatiques",
          "Remplacements et absences centralisés",
          "Base pour le pointage mobile et la facturation",
        ]}
        cards={[
          { title: "Multi-sites", text: "Bureaux, syndics, commerces — un seul planning lisible." },
          { title: "Statuts live", text: "En cours, OK, retard : le bureau voit sans appeler." },
          { title: "149 € tout inclus", text: "Planning + pointage + facture — pas de module en plus." },
        ]}
        image="/hero-planning.webp"
        imageAlt="Planning PROGESTI — vue semaine des passages"
        links={[
          { href: "/logiciel-entreprise-nettoyage", label: "logiciel nettoyage" },
          { href: "/solutions/bureaux", label: "bureaux" },
          { href: "/solutions/syndics", label: "syndics" },
        ]}
        trialEvent="pillar_planning_trial"
        demoEvent="pillar_planning_demo"
      />
    </>
  );
}
