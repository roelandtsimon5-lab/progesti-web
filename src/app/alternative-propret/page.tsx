import type { Metadata } from "next";
import Link from "next/link";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FinalPush } from "@/components/conversion/FinalPush";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { cta, ctaLabels } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";
import { modules, site, trialCopy } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Alternative à Propret",
  description:
    `Vous comparez les logiciels propreté ? Découvrez PROGESTI : ${trialCopy.label.toLowerCase()}, 149 € HT/mois, tous modules inclus. Comparaison factuelle.`,
  path: "/alternative-propret",
});

const rows = [
  {
    label: "Essai",
    propret: "14 jours (annonce site)",
    progesti: `${site.trialDays} jours sans engagement`,
  },
  {
    label: "Carte bancaire à l'essai",
    propret: "Non précisé publiquement",
    progesti: "Non requise",
  },
  {
    label: "Tarif affiché",
    propret: "149 € HT/mois",
    progesti: "149 € HT/mois · prix public",
  },
  {
    label: "Utilisateurs inclus",
    propret: "Non précisé publiquement",
    progesti: "5 utilisateurs",
  },
  {
    label: "Modules",
    propret: "Tous inclus (annonce)",
    progesti: `${modules.length} modules · tout inclus`,
  },
  {
    label: "Cible",
    propret: "Entreprises propreté",
    progesti: "TPE propreté, bureaux, syndics, chantiers",
  },
  {
    label: "Support",
    propret: "Non précisé publiquement",
    progesti: `FR · ${site.phone}`,
  },
] as const;

export default function AlternativePropretPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <IndustryPageHero
        eyebrow="Comparaison"
        title="PROGESTI, une alternative à Propret"
        lead={`Même niche (entreprises de nettoyage). Différences clés : ${trialCopy.label.toLowerCase()}, 149 € HT/mois tout inclus, parcours moderne — bureaux, syndics, pros et fin de chantier.`}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Alternative Propret" },
        ]}
        trialEvent="alt_propret_trial"
        demoEvent="alt_propret_demo"
      />
      <section className="section bg-white pb-28 lg:pb-16">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">Comparaison factuelle</h2>
          <p className="mt-2 text-sm text-slate">
            Basée sur des éléments publics — le meilleur test reste un essai sur vos propres sites.
          </p>

          <div className="mt-8 md:hidden">
            <ul className="space-y-3">
              {rows.map((row) => (
                <li
                  key={row.label}
                  className="rounded-[3px] border border-blue-mist/70 bg-blue-sky/20 p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-royal">{row.label}</p>
                  <p className="mt-2 text-sm text-slate">Propret : {row.propret}</p>
                  <p className="mt-2 border-t border-blue-mist/60 pt-2 text-sm font-semibold text-blue-deep">
                    PROGESTI : {row.progesti}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 hidden overflow-x-auto md:block">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-blue-mist">
                  <th className="py-3 pr-4 font-display text-xs font-bold uppercase tracking-wide text-slate">
                    Critère
                  </th>
                  <th className="py-3 px-4 font-display text-xs font-bold uppercase tracking-wide text-slate">
                    Propret (public)
                  </th>
                  <th className="bg-blue-deep/5 py-3 pl-4 font-display text-xs font-bold uppercase tracking-wide text-lime-cta">
                    PROGESTI
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-blue-mist/60">
                    <td className="py-4 pr-4 font-semibold text-blue-deep">{row.label}</td>
                    <td className="py-4 px-4 text-slate">{row.propret}</td>
                    <td className="bg-blue-sky/25 py-4 pl-4 font-semibold text-blue-deep">{row.progesti}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={cta.trial}
              variant="trial"
              event="trial_start"
              eventPayload={{ cta: "alt_propret_trial" }}
            >
              {trialCopy.free}
            </ButtonLink>
            <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "alt_propret_demo" }}>
              {ctaLabels.demoGate}
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
      <FinalPush title="Le meilleur comparatif, c'est votre propre essai" />
      <MobileCtaBar />
    </>
  );
}
