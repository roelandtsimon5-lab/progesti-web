import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alternative à Propret",
  description:
    "Vous comparez les logiciels propreté ? Découvrez PROGESTI : essai 2 mois, tarifs publics, modules inclus. Comparaison factuelle.",
  alternates: { canonical: "/alternative-propret" },
};

export default function AlternativePropretPage() {
  return (
    <>
      <PageHero
        eyebrow="Comparaison"
        title="PROGESTI, une alternative à Propret"
        lead="Même niche (entreprises de nettoyage). Différences clés : essai 2 mois, parcours conversion moderne, accompagnement migration possible."
        primaryHref="/essai-gratuit"
        primaryLabel="Tester PROGESTI 2 mois"
        secondaryHref="/comparatifs"
        secondaryLabel="Voir les comparatifs"
      />
      <section className="section !pt-0">
        <div className="container max-w-3xl space-y-6 rounded-2xl border border-line bg-white p-8">
          <h2 className="text-2xl font-extrabold text-ink">Comparaison factuelle</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-fog-2">
                <tr>
                  <th className="px-3 py-2 font-bold text-ink">Critère</th>
                  <th className="px-3 py-2 font-bold text-ink">PROGESTI</th>
                  <th className="px-3 py-2 font-bold text-muted">Propret (public)</th>
                </tr>
              </thead>
              <tbody className="text-anthracite">
                <tr className="border-t border-line">
                  <td className="px-3 py-2">Essai</td>
                  <td className="px-3 py-2 font-semibold text-ink">2 mois sans CB</td>
                  <td className="px-3 py-2">14 jours (annonce site)</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-3 py-2">Tarifs dès</td>
                  <td className="px-3 py-2 font-semibold text-ink">29,99€ HT/mois</td>
                  <td className="px-3 py-2">29,99€ HT/mois</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-3 py-2">Modules</td>
                  <td className="px-3 py-2 font-semibold text-ink">Tous inclus</td>
                  <td className="px-3 py-2">Tous inclus (annonce)</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-3 py-2">Cible</td>
                  <td className="px-3 py-2 font-semibold text-ink">AE & petites structures</td>
                  <td className="px-3 py-2">Entreprises propreté</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted">
            Les informations concurrentes sont basées sur des éléments publics et peuvent évoluer.
            Le meilleur moyen de comparer reste un essai sur vos propres sites.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/lp/alternative">Landing switch</ButtonLink>
            <Link href="/blog/progesti-vs-propret" className="font-bold text-emerald-dark underline">
              Article détaillé
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
