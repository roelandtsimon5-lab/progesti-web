import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides",
  description: "Guides pratiques pour entreprises de nettoyage — planning, facturation, migration.",
};

export default function GuidesPage() {
  const guides = blogPosts.filter((p) => p.category === "guides" || p.category === "conseils-metier");
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Guides métier nettoyage"
        lead="Méthodes actionnables pour planning, facturation, pointage et migration d’outil."
      />
      <section className="section !pt-0">
        <div className="container grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/blog/${g.slug}`}
              className="rounded-2xl border border-line bg-white p-6 hover:border-emerald"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-dark">{g.category}</p>
              <h2 className="mt-2 text-xl font-bold text-ink">{g.title}</h2>
              <p className="mt-2 text-sm text-muted">{g.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
