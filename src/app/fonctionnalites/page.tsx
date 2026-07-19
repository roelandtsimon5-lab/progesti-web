import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { modules } from "@/lib/site";

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
        lead="Du planning à la facture, du pointage terrain à la supervision : PROGESTI couvre le cycle opérationnel des entreprises de nettoyage."
        primaryHref="/essai-gratuit"
        primaryLabel="Essayer 2 mois"
        secondaryHref="/demo"
        secondaryLabel="Voir la démo"
      />
      <section className="section !pt-0">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <Link
              key={m.slug}
              href={`/fonctionnalites/${m.slug}`}
              className="rounded-2xl border border-line bg-white p-6 transition hover:border-emerald hover:shadow-[0_12px_40px_rgba(20,32,51,0.08)]"
            >
              <h2 className="font-display text-xl font-bold">{m.title}</h2>
              <p className="mt-2 text-sm text-anthracite">{m.short}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-emerald-dark">
                Problème résolu
              </p>
              <p className="mt-1 text-sm text-anthracite">{m.pain}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
