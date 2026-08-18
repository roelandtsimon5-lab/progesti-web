import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import Link from "next/link";
import { cta } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Alternative à Propret",
  description:
    "Vous comparez les logiciels propreté ? Découvrez PROGESTI : essai 7 jours, 149 € HT/mois, tous modules inclus. Comparaison factuelle.",
  path: "/alternative-propret",
});

export default function AlternativePropretPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <PageHero
        eyebrow="Comparaison"
        title="PROGESTI, une alternative à Propret"
        lead="Même niche (entreprises de nettoyage). Différences clés : essai 7 jours, 149 € HT/mois tout inclus, parcours moderne — bureaux, syndics, pros et fin de chantier."
        primaryHref={cta.demo}
        primaryLabel="Demander une démo"
        secondaryHref={cta.trial}
        secondaryLabel="Essai 7 jours gratuit"
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
                  <td className="py-3 pr-3 font-semibold text-ink">7 jours sans engagement</td>
                  <td className="py-3">14 jours (annonce site)</td>
                </tr>
                <tr className="border-b border-line/70">
                  <td className="py-3 pr-3">Tarif</td>
                  <td className="py-3 pr-3 font-semibold text-ink">149 € HT/mois (5 users)</td>
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
                    TPE propreté, bureaux, syndics, chantiers
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
            <ButtonLink
              href={cta.demo}
              eventPayload={{ cta: "v3_alt_propret_demo" }}
            >
              Demander une démo
            </ButtonLink>
            <ButtonLink href={cta.trial} variant="secondary" eventPayload={{ cta: "v3_alt_propret_trial" }}>
              Essai 7 jours gratuit
            </ButtonLink>
            <Link
              href="/blog/progesti-vs-propret"
              className="inline-flex items-center font-bold text-blue-royal underline-offset-4 hover:underline"
            >
              Article détaillé
            </Link>
          </div>
        </div>
      </section>
      <ConversionBlock variant="essai" />
    </>
  );
}
