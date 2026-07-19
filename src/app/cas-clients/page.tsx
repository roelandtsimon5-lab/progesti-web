import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";

import { cta } from "@/lib/cta";
export const metadata: Metadata = {
  title: "Cas clients",
  description: "Études de cas PROGESTI pour entreprises de nettoyage — publication en cours.",
};

export default function CasClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Cas clients"
        title="Des résultats concrets, documentés"
        lead="Les études de cas détaillées (avant/après planning, facturation, temps gagné) seront publiées avec métriques validées."
        primaryHref="/contact"
        primaryLabel="Devenir cas client"
        secondaryHref={cta.trialApp}
        secondaryLabel="Tester sur mon activité"
      />
      <section className="section !pt-0">
        <div className="container max-w-3xl grid gap-4 md:grid-cols-3">
          {[
            ["Avant", "Excel + WhatsApp, factures en retard"],
            ["Pendant", "Essai 2 mois sur sites réels"],
            ["Après", "Planning stable, facturation plus rapide"],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-line bg-white p-5">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-emerald-dark">
                {t}
              </p>
              <p className="mt-2 text-sm text-anthracite">{d}</p>
            </div>
          ))}
        </div>
        <div className="container mt-8 text-center text-sm text-muted">
          Contact :{" "}
          <a className="font-semibold text-emerald-dark" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <div className="mt-4">
            <ButtonLink href="/logiciel-entreprise-nettoyage">Page pilier produit</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
