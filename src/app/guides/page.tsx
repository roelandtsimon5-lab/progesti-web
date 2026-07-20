import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { getPostsByCategory, getCategoryLabel } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Guides",
  description: "Guides opérationnels PROGESTI pour organiser planning, terrain et facturation.",
};

export default function GuidesPage() {
  const guides = [
    ...getPostsByCategory("guides"),
    ...getPostsByCategory("conseils-metier"),
  ].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Guides opérationnels propreté"
        lead="Méthodes concrètes pour planifier, pointer et facturer — issues du blog PROGESTI."
      />
      <section className="section !pt-0">
        <div className="container max-w-3xl">
          <ul className="divide-y divide-line">
            {guides.map((post) => (
              <li key={post.slug} className="py-6">
                <p className="text-xs font-bold uppercase tracking-wide text-petrol">
                  {getCategoryLabel(post.category)}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-1 block font-display text-xl font-bold hover:text-emerald-dark"
                >
                  {post.title}
                </Link>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
