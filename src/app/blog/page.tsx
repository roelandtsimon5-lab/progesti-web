import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { blogCategories, blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guides, conseils métier et comparatifs pour entreprises de nettoyage.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Ressources pour piloter une entreprise de propreté"
        lead="Contenu SEO structuré par catégories : guides, conseils, comparatifs, études de cas, nouveautés."
      />
      <section className="section !pt-0">
        <div className="container">
          <div className="mb-8 flex flex-wrap gap-2">
            {blogCategories.map((c) => (
              <span
                key={c.slug}
                className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy"
              >
                {c.label}
              </span>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-line bg-white p-5 hover:border-emerald"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-dark">
                  {post.category}
                </p>
                <h2 className="mt-2 font-display text-lg font-bold">{post.title}</h2>
                <p className="mt-2 text-sm text-anthracite">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
