import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";

import { cta } from "@/lib/cta";
export const metadata: Metadata = {
  title: "Comparatifs",
  description: "Comparatif logiciels pour entreprises de nettoyage — PROGESTI vs alternatives.",
};

export default function ComparatifsPage() {
  return (
    <>
      <PageHero
        eyebrow="Comparatifs"
        title="Choisir un logiciel propreté sans se tromper"
        lead="Critères : essai, prix public, modules inclus, mobile terrain, accompagnement migration."
      />
      <section className="section !pt-0">
        <div className="container max-w-3xl rounded-2xl border border-line bg-white p-8">
          <h2 className="text-2xl font-extrabold">PROGESTI vs Propret</h2>
          <ul className="mt-4 space-y-2 text-anthracite">
            <li>• Même niche : AE et petites entreprises de nettoyage</li>
            <li>• Grille tarifaire comparable (Starter / Pro / Premium)</li>
            <li>• Différenciation PROGESTI : essai 2 mois, parcours conversion, accompagnement données</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={cta.trialApp}>Tester PROGESTI</ButtonLink>
            <Link href="/blog/progesti-vs-propret" className="font-semibold text-emerald-dark underline">
              Lire l’article comparatif
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
