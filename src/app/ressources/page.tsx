import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ressources",
  description: "Guides, blog, comparatifs et pages piliers pour piloter une entreprise de nettoyage.",
};

export default function RessourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ressources"
        title="Le hub pour progresser dans le métier"
        lead="Guides opérationnels, comparatifs et pages piliers SEO pour dirigeants de sociétés de nettoyage."
      />
      <section className="section !pt-0">
        <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["/guides", "Guides", "Méthodes terrain et organisation"],
            ["/comparatifs", "Comparatifs", "Choisir le bon logiciel"],
            ["/blog", "Blog", `${blogPosts.length} articles`],
            ["/logiciel-entreprise-nettoyage", "Pilier nettoyage", "Page SEO principale"],
            ["/logiciel-planning-nettoyage", "Pilier planning", "Organiser les équipes"],
            ["/logiciel-facturation-proprete", "Pilier facturation", "Facturer plus vite"],
            ["/alternative-propret", "Alternative Propret", "Comparaison factuelle"],
            ["/faq", "FAQ", "Toutes les objections"],
            ["/demo", "Démo", "Tester en 30 secondes"],
          ].map(([href, title, desc]) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-line bg-white p-6 transition hover:border-emerald"
            >
              <h2 className="text-xl font-bold text-ink">{title}</h2>
              <p className="mt-2 text-sm text-muted">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
