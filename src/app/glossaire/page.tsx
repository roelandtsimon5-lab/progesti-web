import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { glossaryTerms } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Glossaire métier — nettoyage & propreté",
  description:
    "Définitions des termes du métier de la propreté : vacation, parties communes, pointage, fin de chantier, prépaie…",
};

export default function GlossairePage() {
  const sorted = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term, "fr"));

  return (
    <>
      <PageHero
        eyebrow="Glossaire"
        title="Le vocabulaire du nettoyage professionnel"
        lead="Des définitions courtes pour décideurs et équipes — reliées aux pages solutions, modules et articles du blog."
      />
      <section className="section !pt-0">
        <div className="container max-w-3xl">
          <ul className="divide-y divide-line">
            {sorted.map((t) => (
              <li key={t.slug} className="py-5">
                <Link
                  href={`/glossaire/${t.slug}`}
                  className="font-display text-xl font-bold text-ink hover:text-emerald-dark"
                >
                  {t.term}
                </Link>
                <p className="mt-2 text-sm text-muted line-clamp-2">{t.definition}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
