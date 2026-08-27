import type { Metadata } from "next";
import Link from "next/link";
import { FinalPush } from "@/components/conversion/FinalPush";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { getAllPosts, getCategoryLabel, getActiveBlogCategories } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Blog — guides nettoyage & propreté",
  description:
    "Guides opérationnels, conseils métier, comparatifs et verticales (bureaux, syndics, fin de chantier) pour entreprises de nettoyage.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const activeCategories = getActiveBlogCategories();

  return (
    <>
      <IndustryPageHero
        eyebrow="Blog"
        title="Ressources pour piloter une entreprise de propreté"
        lead="Planning, terrain, facturation, syndics, bureaux et fin de chantier — du contenu utile pour décideurs et gérants."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Blog" },
        ]}
        trialEvent="blog_trial"
        demoEvent="blog_demo"
      />

      <section className="section bg-white pb-28 lg:pb-16">
        <div className="container">
          <nav aria-label="Catégories" className="mb-10 flex flex-wrap gap-x-4 gap-y-2">
            <Link
              href="/blog"
              className="font-display text-xs font-bold uppercase tracking-wide text-blue-deep underline-offset-4 hover:underline"
            >
              Tous
            </Link>
            {activeCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/categorie/${c.slug}`}
                className="font-display text-xs font-bold uppercase tracking-wide text-blue-royal underline-offset-4 hover:underline"
              >
                {c.label}
              </Link>
            ))}
          </nav>

          <ul className="divide-y divide-blue-mist">
            {posts.map((post) => (
              <li key={post.slug} className="py-7 first:pt-0">
                <Link href={`/blog/${post.slug}`} className="group block max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-wide text-green-deep">
                    {getCategoryLabel(post.category)}
                    <span className="mx-2 text-blue-mist">·</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="mx-2 text-blue-mist">·</span>
                    {post.readingTime} min
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold text-blue-deep transition group-hover:text-blue-royal md:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-slate">{post.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalPush />
      <MobileCtaBar />
    </>
  );
}
