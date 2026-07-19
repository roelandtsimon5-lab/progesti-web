import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Logiciel facturation propreté",
  description:
    "Facturez plus vite votre activité de nettoyage : devis, factures et suivi liés au réalisé terrain avec PROGESTI.",
  alternates: { canonical: "/logiciel-facturation-proprete" },
};

export default function PillarFacturationPage() {
  return (
    <>
      <PageHero
        eyebrow="Facturation"
        title="Logiciel de facturation pour la propreté"
        lead="Passez du terrain à la facture sans ressaisie. Moins de retards, moins de litiges."
        primaryHref="/essai-gratuit"
        primaryLabel="Commencer l’essai"
        secondaryHref="/fonctionnalites/facturation"
        secondaryLabel="Module facturation"
      />
      <section className="section !pt-0">
        <div className="container max-w-3xl space-y-6 rounded-2xl border border-line bg-white p-8">
          <h2 className="text-2xl font-extrabold text-ink">Du réalisé à la facture</h2>
          <p className="text-muted">
            Quand le pointage et les bons d’intervention sont dans le même outil, la facturation
            devient un contrôle — plus une chasse aux informations.
          </p>
          <ul className="space-y-2 text-anthracite">
            <li>✓ Devis et factures alignés sur les sites</li>
            <li>✓ Suivi des envois et paiements</li>
            <li>✓ Moins de relances manuelles</li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/tarifs">Voir les tarifs</ButtonLink>
            <Link href="/logiciel-entreprise-nettoyage" className="font-bold text-emerald-dark underline">
              Logiciel entreprise de nettoyage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
