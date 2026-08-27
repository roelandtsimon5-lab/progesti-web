import type { Metadata } from "next";
import Link from "next/link";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { glossaryTerms } from "@/lib/glossary";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Glossaire métier — nettoyage & propreté",
  description:
    "Définitions des termes du métier de la propreté : vacation, parties communes, pointage, fin de chantier, prépaie…",
  path: "/glossaire",
});

export default function GlossairePage() {
  const sorted = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term, "fr"));

  return (
    <>
      <IndustryPageHero
        eyebrow="Glossaire"
        title="Le vocabulaire du nettoyage professionnel"
        lead="Des définitions courtes pour décideurs et équipes — reliées aux pages solutions, modules et articles du blog."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Glossaire" },
        ]}
        trialEvent="glossary_trial"
        demoEvent="glossary_demo"
      />
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <ul className="divide-y divide-blue-mist">
            {sorted.map((t) => (
              <li key={t.slug} className="py-5">
                <Link
                  href={`/glossaire/${t.slug}`}
                  className="font-display text-xl font-bold text-blue-deep hover:text-blue-royal"
                >
                  {t.term}
                </Link>
                <p className="mt-2 line-clamp-2 text-sm text-slate">{t.definition}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <MobileCtaBar />
    </>
  );
}
