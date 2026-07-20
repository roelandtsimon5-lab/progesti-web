import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta } from "@/lib/cta";
import {
  getAllPosts,
  getCategoryLabel,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);
  const categoryLabel = getCategoryLabel(post.category);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryLabel,
        item: `${site.url}/blog/categorie/${post.category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: `${site.url}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <article>
        <header className="surface-atmosphere section-tight">
          <div className="container max-w-3xl">
            <nav className="text-sm text-muted" aria-label="Fil d’Ariane">
              <Link href="/blog" className="hover:text-ink">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <Link
                href={`/blog/categorie/${post.category}`}
                className="hover:text-ink"
              >
                {categoryLabel}
              </Link>
            </nav>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
            <p className="mt-4 text-sm text-anthracite">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {" · "}
              {post.readingTime} min de lecture
              {" · "}
              Mis à jour{" "}
              <time dateTime={post.updatedAt}>
                {new Date(post.updatedAt).toLocaleDateString("fr-FR")}
              </time>
            </p>
          </div>
        </header>

        <div className="section !pt-10">
          <div className="container max-w-3xl">
            <div
              className="prose-v2"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <aside className="mt-14 border-t border-line pt-8">
              <p className="font-display text-lg font-bold text-ink">
                Prêt à organiser votre nettoyage professionnel ?
              </p>
              <p className="mt-2 text-sm text-muted">
                Essai PROGESTI 2 mois sans carte bancaire — tous les modules inclus.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink
                  href={cta.trialApp}
                  event="trial_start"
                  eventPayload={{ cta: "v2_blog_article_cta", slug: post.slug }}
                >
                  Essai gratuit 2 mois
                </ButtonLink>
                <ButtonLink href="/fonctionnalites" variant="secondary">
                  Voir les fonctionnalités
                </ButtonLink>
                <Link
                  href="/blog"
                  className="self-center text-sm font-semibold text-emerald-dark underline-offset-4 hover:underline"
                >
                  ← Blog
                </Link>
              </div>
            </aside>

            {related.length ? (
              <section className="mt-14 border-t border-line pt-10">
                <h2 className="text-2xl font-extrabold">Articles liés</h2>
                <ul className="mt-6 space-y-5">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/blog/${r.slug}`}
                        className="font-display text-lg font-bold text-ink hover:text-emerald-dark"
                      >
                        {r.title}
                      </Link>
                      <p className="mt-1 text-sm text-muted">{r.excerpt}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </div>
      </article>
    </>
  );
}
