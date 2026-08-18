import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import Link from "next/link";
import { cta } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Logiciel facturation propreté",
  description:
    "Facturez plus vite votre activité de nettoyage : devis, factures et suivi liés au réalisé terrain. 149 € HT/mois, essai 7 jours.",
  path: "/logiciel-facturation-proprete",
});

export default function PillarFacturationPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <PageHero
        eyebrow="Facturation"
        title="Logiciel de facturation pour la propreté"
        lead="Passez du terrain à la facture sans ressaisie — entretien récurrent comme fin de chantier. 149 € HT/mois, essai 7 jours."
        primaryHref={cta.demo}
        primaryLabel="Demander une démo"
        secondaryHref={cta.trial}
        secondaryLabel="Essai 7 jours gratuit"
      />
      <section className="section !pt-0">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-extrabold text-ink">Du réalisé à la facture</h2>
          <p className="mt-3 text-muted">
            Quand le pointage et les bons d’intervention sont dans le même outil, la facturation
            devient un contrôle — plus une chasse aux informations dans Excel.
          </p>
          <ul className="mt-6 space-y-2 text-anthracite">
            <li>✓ Devis et factures alignés sur les sites</li>
            <li>✓ Suivi des envois et paiements</li>
            <li>✓ Moins de relances manuelles</li>
            <li>✓ Facturation post-chantier sans oublis d’extras</li>
          </ul>
          <p className="mt-6 text-sm text-muted">
            Voir aussi :{" "}
            <Link
              href="/solutions/fin-de-chantier"
              className="font-semibold text-emerald-dark hover:underline"
            >
              fin de chantier
            </Link>
            {" · "}
            <Link href="/blog" className="font-semibold text-emerald-dark hover:underline">
              guides facturation
            </Link>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={cta.demo}
              eventPayload={{ cta: "v3_pillar_factu_demo" }}
            >
              Demander une démo
            </ButtonLink>
            <ButtonLink href={cta.trial} variant="secondary" eventPayload={{ cta: "v3_pillar_factu_trial" }}>
              Essai 7 jours gratuit
            </ButtonLink>
          </div>
        </div>
      </section>
      <ConversionBlock variant="essai" />
    </>
  );
}
