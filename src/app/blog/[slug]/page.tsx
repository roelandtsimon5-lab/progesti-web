import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { blogPosts } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} lead={post.excerpt} />
      <section className="section !pt-0">
        <article className="container max-w-3xl rounded-2xl border border-line bg-white p-8">
          <div className="space-y-4 text-anthracite">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-6">
            <ButtonLink href="/essai-gratuit">Essai gratuit 2 mois</ButtonLink>
            <ButtonLink href="/fonctionnalites" variant="secondary">
              Voir les fonctionnalités
            </ButtonLink>
            <Link href="/blog" className="self-center font-semibold text-emerald-dark underline">
              ← Blog
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
