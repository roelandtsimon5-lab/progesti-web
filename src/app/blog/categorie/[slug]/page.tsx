import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";
import { PageHero } from "@/components/sections/PageHero";
import {
  categoryExists,
  getCategoryLabel,
  getPostsByCategory,
} from "@/lib/blog";
import { blogCategories } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!categoryExists(slug)) return {};
  const label = getCategoryLabel(slug);
  return {
    title: `Blog — ${label}`,
    description: `Articles PROGESTI dans la catégorie ${label} : conseils et guides pour entreprises de nettoyage.`,
  };
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  if (!categoryExists(slug)) notFound();

  const label = getCategoryLabel(slug);
  const posts = getPostsByCategory(slug);

  return (
    <>
      <PageHero
        eyebrow="Catégorie"
        title={label}
        lead={`Articles de la catégorie « ${label} » pour gérants d’entreprises de nettoyage et de propreté.`}
      />
      <section className="section !pt-0 bg-white">
        <div className="container max-w-3xl">
          <p className="mb-8 text-sm">
            <Link href="/blog" className="font-semibold text-blue-royal hover:underline">
              ← Tout le blog
            </Link>
          </p>
          {posts.length === 0 ? (
            <p className="text-slate">Aucun article dans cette catégorie pour le moment.</p>
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
      <ConversionBlock variant="essai" />
    </>
  );
}
