import type { Metadata } from "next";
import Link from "next/link";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { getPostsByCategory, getCategoryLabel } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Guides",
  description: "Guides opérationnels PROGESTI pour organiser planning, terrain et facturation.",
  path: "/guides",
});

export default function GuidesPage() {
  const guides = [
    ...getPostsByCategory("guides"),
    ...getPostsByCategory("conseils-metier"),
  ].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <IndustryPageHero
        eyebrow="Guides"
        title="Guides opérationnels propreté"
        lead="Méthodes concrètes pour planifier, pointer et facturer — issues du blog PROGESTI."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Guides" },
        ]}
        trialEvent="guides_trial"
        demoEvent="guides_demo"
      />
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <ul className="divide-y divide-blue-mist">
            {guides.map((post) => (
              <li key={post.slug} className="py-6">
                <p className="text-xs font-bold uppercase tracking-wide text-blue-royal">
                  {getCategoryLabel(post.category)}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-1 block font-display text-xl font-bold text-blue-deep hover:text-blue-royal"
                >
                  {post.title}
                </Link>
                <p className="mt-2 text-sm text-slate">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <MobileCtaBar />
    </>
  );
}
