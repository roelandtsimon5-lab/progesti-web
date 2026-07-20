import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import Link from "next/link";
import { cta } from "@/lib/cta";

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
        lead="Même niche (entreprises de nettoyage). Différences clés : essai 2 mois sans CB, tarifs publics, parcours moderne — bureaux, syndics, pros et fin de chantier."
        primaryHref={cta.trialApp}
        primaryLabel="Tester PROGESTI 2 mois"
        secondaryHref="/comparatifs"
        secondaryLabel="Voir les comparatifs"
      />
      <section className="section !pt-0">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-extrabold text-ink">Comparaison factuelle</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-3 pr-3 font-bold text-ink">Critère</th>
                  <th className="py-3 pr-3 font-bold text-ink">PROGESTI</th>
                  <th className="py-3 font-bold text-muted">Propret (public)</th>
                </tr>
              </thead>
              <tbody className="text-anthracite">
                <tr className="border-b border-line/70">
                  <td className="py-3 pr-3">Essai</td>
                  <td className="py-3 pr-3 font-semibold text-ink">2 mois sans CB</td>
                  <td className="py-3">14 jours (annonce site)</td>
                </tr>
                <tr className="border-b border-line/70">
                  <td className="py-3 pr-3">Tarifs dès</td>
                  <td className="py-3 pr-3 font-semibold text-ink">29,99€ HT/mois</td>
                  <td className="py-3">29,99€ HT/mois</td>
                </tr>
                <tr className="border-b border-line/70">
                  <td className="py-3 pr-3">Modules</td>
                  <td className="py-3 pr-3 font-semibold text-ink">Tous inclus</td>
                  <td className="py-3">Tous inclus (annonce)</td>
                </tr>
                <tr className="border-b border-line/70">
                  <td className="py-3 pr-3">Cible</td>
                  <td className="py-3 pr-3 font-semibold text-ink">
                    AE, TPE, bureaux, syndics, chantiers
                  </td>
                  <td className="py-3">Entreprises propreté</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted">
            Les informations concurrentes sont basées sur des éléments publics et peuvent évoluer.
            Le meilleur moyen de comparer reste un essai sur vos propres sites.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/lp/alternative" eventPayload={{ cta: "v2_alt_propret_lp" }}>
              Landing switch
            </ButtonLink>
            <Link
              href="/blog/progesti-vs-propret"
              className="inline-flex items-center font-bold text-emerald-dark underline-offset-4 hover:underline"
            >
              Article détaillé
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center font-bold text-emerald-dark underline-offset-4 hover:underline"
            >
              Solutions métier
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
