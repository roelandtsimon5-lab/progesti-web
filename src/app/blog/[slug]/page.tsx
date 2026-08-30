import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FinalPush } from "@/components/conversion/FinalPush";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { cta, ctaLabels } from "@/lib/cta";
import {
  getAllPosts,
  getCategoryLabel,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { DEFAULT_OG } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${site.url}${path}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
      images: [DEFAULT_OG],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [DEFAULT_OG.url],
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
        <header className="industry-hero-bg relative overflow-hidden">
          <div className="container relative max-w-3xl py-12 md:py-14">
            <Breadcrumb
              dark
              items={[
                { label: "Accueil", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: categoryLabel, href: `/blog/categorie/${post.category}` },
                { label: post.title },
              ]}
            />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-lime-cta/90">
              {categoryLabel}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-white/80">{post.excerpt}</p>
            <p className="mt-4 text-sm text-white/55">
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
          <div className="industry-hero-wave" aria-hidden />
        </header>

        <div className="section !pt-10 bg-white pb-28 lg:pb-16">
          <div className="container max-w-3xl">
            <div
              className="prose-v2"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <aside className="mt-14 rounded-[2px] border border-line bg-paper p-6 md:p-8">
              <p className="font-display text-lg font-bold text-brand-navy">
                Prêt à organiser votre nettoyage professionnel ?
              </p>
              <p className="mt-2 text-sm text-slate">
                149 € HT/mois · jusqu&apos;à 5 utilisateurs · essai {site.trialDays} jours sans CB
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink
                  href={cta.trial}
                  variant="trial"
                  className="!rounded-[2px]"
                  event="trial_start"
                  eventPayload={{ cta: "v3_blog_article_trial", slug: post.slug }}
                >
                  {ctaLabels.trial}
                </ButtonLink>
                <ButtonLink
                  href={cta.demo}
                  variant="secondary"
                  className="!rounded-[2px]"
                  eventPayload={{ cta: "v3_blog_article_cta", slug: post.slug }}
                >
                  {ctaLabels.demoGate}
                </ButtonLink>
                <Link
                  href="/blog"
                  className="self-center text-sm font-semibold text-blue-royal underline-offset-4 hover:underline"
                >
                  ← Blog
                </Link>
              </div>
            </aside>

            {related.length ? (
              <section className="mt-14 border-t border-blue-mist pt-10">
                <h2 className="text-2xl font-extrabold text-blue-deep">Articles liés</h2>
                <ul className="mt-6 space-y-5">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/blog/${r.slug}`}
                        className="font-display text-lg font-bold text-blue-deep hover:text-blue-royal"
                      >
                        {r.title}
                      </Link>
                      <p className="mt-1 text-sm text-slate">{r.excerpt}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </div>
      </article>

      <FinalPush title="Passez de la lecture à l'action" />
      <MobileCtaBar />
    </>
  );
}
