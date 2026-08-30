import type { Metadata } from "next";
import { IndustryPillarPage } from "@/components/industry/IndustryPillarPage";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { pageMeta } from "@/lib/seo";
import { trialCopy } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Logiciel facturation propreté",
  description:
    `Facturez plus vite votre activité de nettoyage : devis, factures et suivi liés au réalisé terrain. 149 € HT/mois, ${trialCopy.metaSuffix}`,
  path: "/logiciel-facturation-proprete",
});

export default function PillarFacturationPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <IndustryPillarPage
        eyebrow="Facturation"
        title="Logiciel de facturation pour la propreté"
        lead="Passez du terrain à la facture sans ressaisie — entretien récurrent comme fin de chantier."
        h2="Du réalisé à la facture"
        body="Quand le pointage et les bons d'intervention sont dans le même outil, la facturation devient un contrôle — plus une chasse aux informations dans Excel."
        bullets={[
          "Devis et factures alignés sur les sites",
          "Suivi des envois et paiements",
          "Relances impayés intégrées",
          "Facturation post-chantier sans oublis d'extras",
        ]}
        cards={[
          { title: "Lien terrain", text: "Pointage alimente la facturation — zéro double saisie." },
          { title: "Devis pro", text: "Commercial et exploitation sur la même base clients." },
          { title: "Trésorerie", text: "Impayés visibles, relances sans tableur parallèle." },
        ]}
        image="/screen-factures.webp"
        imageAlt="Facturation PROGESTI — factures et suivi"
        links={[
          { href: "/solutions/fin-de-chantier", label: "fin de chantier" },
          { href: "/fonctionnalites/facturation", label: "module facturation" },
          { href: "/blog", label: "guides" },
        ]}
        trialEvent="pillar_factu_trial"
        demoEvent="pillar_factu_demo"
      />
    </>
  );
}
