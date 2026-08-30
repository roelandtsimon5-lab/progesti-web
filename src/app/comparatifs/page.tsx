import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FinalPush } from "@/components/conversion/FinalPush";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { cta } from "@/lib/cta";
import { mainPlan, modules, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Comparatifs",
  description:
    "Comparatif logiciels pour entreprises de nettoyage — PROGESTI vs Excel, WhatsApp et alternatives. Prix public 149 € HT/mois.",
  path: "/comparatifs",
});

const rows = [
  {
    label: "Prix",
    progesti: "149 € HT/mois · public",
    other: "Devis / modules en plus",
  },
  {
    label: "Essai",
    progesti: `${site.trialDays} jours · sans CB`,
    other: "CB souvent exigée",
  },
  {
    label: "Modules",
    progesti: `${modules.length} modules inclus`,
    other: "Options facturées à part",
  },
  {
    label: "Support",
    progesti: `FR · ${site.phone}`,
    other: "Ticket générique",
  },
] as const;

export default function ComparatifsPage() {
  return (
    <>
      <IndustryPageHero
        eyebrow="Comparatifs"
        title="Choisir un logiciel propreté sans se tromper"
        lead="Critères concrets : essai, prix public, modules inclus, mobile terrain, accompagnement migration."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Comparatifs" },
        ]}
        trialEvent="comparatifs_trial"
        demoEvent="comparatifs_demo"
      />

      <section className="section bg-white pb-28 lg:pb-16">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-blue-deep">PROGESTI vs le chaos Excel / WhatsApp</h2>
            <div className="mt-8 overflow-x-auto rounded-[3px] border border-blue-mist">
              <table className="industry-data-table w-full min-w-[520px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-blue-mist">
                    <th className="py-3 pr-4 font-bold text-slate">Critère</th>
                    <th className="py-3 px-4 font-bold text-slate">Alternatives courantes</th>
                    <th className="py-3 pl-4 font-bold text-lime-cta bg-blue-deep/5">PROGESTI</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.label} className="border-b border-blue-mist/60">
                      <td className="py-4 pr-4 font-semibold text-blue-deep">{row.label}</td>
                      <td className="py-4 px-4 text-slate">{row.other}</td>
                      <td className="py-4 pl-4 font-semibold text-blue-deep bg-blue-sky/25">{row.progesti}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delayMs={60}>
            <div className="mt-12 rounded-[3px] border border-blue-mist bg-[#F5F8FB] p-8">
              <h2 className="font-display text-xl font-extrabold text-blue-deep">PROGESTI vs Propret</h2>
              <ul className="mt-4 space-y-2 text-slate">
                <li>• Même niche : entreprises de nettoyage en France</li>
                <li>• PROGESTI : tarif unique {mainPlan.monthly} € HT/mois — pas de Starter/Pro/Premium</li>
                <li>• Essai {site.trialDays} jours sans CB · support FR · fait par des gens du métier</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={cta.trial} event="trial_start" eventPayload={{ cta: "comparatifs_trial" }}>
                  Essai {site.trialDays} jours
                </ButtonLink>
                <Link href="/alternative-propret" className="inline-flex items-center font-bold text-blue-royal hover:underline">
                  Page alternative Propret →
                </Link>
                <Link href="/blog/progesti-vs-propret" className="inline-flex items-center font-bold text-blue-royal hover:underline">
                  Article comparatif →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalPush title="Comparez sur votre activité, pas sur une brochure" />
      <MobileCtaBar />
    </>
  );
}
