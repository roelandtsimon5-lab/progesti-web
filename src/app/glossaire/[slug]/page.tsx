import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTerm, glossaryTerms } from "@/lib/glossary";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) return {};
  return {
    title: `${term.term} — glossaire propreté`,
    description: term.definition.slice(0, 155),
  };
}

export default async function GlossaryTermPage({ params }: Props) {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      { "@type": "ListItem", position: 2, name: "Glossaire", item: `${site.url}/glossaire` },
      {
        "@type": "ListItem",
        position: 3,
        name: term.term,
        item: `${site.url}/glossaire/${term.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <article className="section-tight surface-atmosphere">
        <div className="container max-w-3xl">
          <nav className="text-sm text-muted">
            <Link href="/glossaire" className="hover:text-ink">
              Glossaire
            </Link>
            <span className="mx-2">/</span>
            <span>{term.term}</span>
          </nav>
          <h1 className="mt-4 text-4xl font-extrabold">{term.term}</h1>
          <p className="mt-6 text-lg leading-relaxed text-anthracite">{term.definition}</p>
          {term.related?.length ? (
            <div className="mt-10 border-t border-line pt-6">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-petrol">
                Voir aussi
              </p>
              <ul className="mt-3 space-y-2">
                {term.related.map((href) => (
                  <li key={href}>
                    <Link href={href} className="font-semibold text-emerald-dark hover:underline">
                      {href}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <p className="mt-10">
            <Link href="/glossaire" className="text-sm font-bold text-emerald-dark hover:underline">
              ← Tout le glossaire
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
