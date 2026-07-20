import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { modules } from "@/lib/site";
import { cta } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description:
    "Toutes les fonctionnalités PROGESTI pour piloter une entreprise de nettoyage : planning, RH, facturation, terrain.",
};

export default function FonctionnalitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Produit"
        title="Une suite complète pour le métier de la propreté"
        lead="Du planning à la facture, du pointage terrain à la supervision : PROGESTI couvre le cycle opérationnel des entreprises de nettoyage — bureaux, syndics, professionnels et fin de chantier."
        primaryHref={cta.trialApp}
        primaryLabel="Essayer 2 mois"
        secondaryHref="/demo"
        secondaryLabel="Voir la démo"
      />
      <section className="section !pt-0">
        <div className="container">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <li key={m.slug} className="border-t border-line pt-5">
                <Link href={`/fonctionnalites/${m.slug}`} className="group block">
                  <h2 className="font-display text-xl font-bold text-ink group-hover:text-emerald-dark">
                    {m.title}
                  </h2>
                  <p className="mt-2 text-sm text-anthracite">{m.short}</p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wide text-petrol">
                    Problème résolu
                  </p>
                  <p className="mt-1 text-sm text-muted">{m.pain}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-sm text-muted">
            Voir aussi nos{" "}
            <Link href="/solutions" className="font-semibold text-emerald-dark hover:underline">
              solutions par métier
            </Link>{" "}
            et le{" "}
            <Link href="/blog" className="font-semibold text-emerald-dark hover:underline">
              blog
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
