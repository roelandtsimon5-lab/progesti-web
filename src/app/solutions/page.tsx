import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Lead, Section } from "@/components/ui/Section";
import { solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions — bureaux, syndics, professionnels, fin de chantier",
  description:
    "PROGESTI pour le nettoyage de bureaux, syndics & copropriétés, professionnels & commerces, fin de chantier et auto-entrepreneurs.",
};

export default function SolutionsIndexPage() {
  return (
    <Section atmosphere>
      <div className="container">
        <Eyebrow>Solutions</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-4xl font-extrabold md:text-5xl">
          Un logiciel, plusieurs univers de propreté
        </h1>
        <Lead className="mt-4">
          Choisissez votre contexte métier — le parcours planning → terrain → facture reste le même.
        </Lead>
        <ul className="mt-14 grid gap-8 md:grid-cols-2">
          {solutions.map((s, i) => (
            <li key={s.slug} className="border-t border-line pt-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-petrol">
                0{i + 1}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold">
                <Link href={`/solutions/${s.slug}`} className="hover:text-emerald-dark">
                  {s.title}
                </Link>
              </h2>
              <p className="mt-2 text-muted">{s.lead}</p>
              <Link
                href={`/solutions/${s.slug}`}
                className="mt-4 inline-block text-sm font-bold text-emerald-dark hover:underline"
              >
                Découvrir →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
