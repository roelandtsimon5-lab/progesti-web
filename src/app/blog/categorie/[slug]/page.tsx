import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalPush } from "@/components/conversion/FinalPush";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  categoryExists,
  getCategoryLabel,
  getPostsByCategory,
} from "@/lib/blog";
import { blogCategories, site } from "@/lib/site";
import { cta } from "@/lib/cta";

type Props = { params: Promise<{ slug: string }> };

/** Titres/descriptions dédiés (catégories avec impressions) — les autres gardent le gabarit. */
const categorySeo: Record<string, { title: string; description: string }> = {
  comparatifs: {
    title: "Comparatifs : alternatives logiciel nettoyage",
    description:
      "Comparatifs et alternatives aux logiciels de nettoyage : les articles PROGESTI pour comparer les critères avant de choisir votre outil.",
  },
};

export function generateStaticParams() {
  return blogCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!categoryExists(slug)) return {};
  const label = getCategoryLabel(slug);
  const path = `/blog/categorie/${slug}`;
  const override = categorySeo[slug];
  const title = override?.title ?? `Blog — ${label}`;
  const description =
    override?.description ??
    `Articles PROGESTI dans la catégorie ${label} : conseils et guides pour entreprises de nettoyage.`;
  return {
    title,
    description,
    alternates: { canonical: `${site.url}${path}` },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: `${site.url}${path}`,
    },
  };
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  if (!categoryExists(slug)) notFound();

  const label = getCategoryLabel(slug);
  const posts = getPostsByCategory(slug);

  return (
    <>
      <IndustryPageHero
        eyebrow="Catégorie"
        title={label}
        lead={`Articles de la catégorie « ${label} » pour gérants d'entreprises de nettoyage et de propreté.`}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label },
        ]}
        trialEvent="blog_category_trial"
        demoEvent="blog_category_demo"
      />
      <section className="section bg-white pb-28 lg:pb-16">
        <div className="container max-w-3xl">
          <p className="mb-8 text-sm">
            <Link href="/blog" className="font-semibold text-blue-royal hover:underline">
              ← Tout le blog
            </Link>
          </p>
          {posts.length === 0 ? (
            <div className="rounded-[3px] border border-blue-mist bg-[#F5F8FB] p-8 text-center">
              <p className="text-slate">Aucun article dans cette catégorie pour le moment.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <ButtonLink href="/blog" variant="secondary">
                  Voir tout le blog
                </ButtonLink>
                <ButtonLink href={cta.trial} variant="trial" event="trial_start" eventPayload={{ cta: "blog_category_empty_trial" }}>
                  Essai {site.trialDays} jours
                </ButtonLink>
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-blue-mist">
              {posts.map((post) => (
                <li key={post.slug} className="py-6">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <h2 className="font-display text-xl font-bold text-blue-deep group-hover:text-blue-royal">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-slate">{post.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <FinalPush />

      <MobileCtaBar />
    </>
  );
}
