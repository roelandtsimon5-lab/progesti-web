import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FinalPush } from "@/components/conversion/FinalPush";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { getTerm, glossaryTerms } from "@/lib/glossary";
import { glossaryLinkLabel } from "@/lib/glossary-links";
import { cta } from "@/lib/cta";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) return {};
  const path = `/glossaire/${term.slug}`;
  return {
    title: `${term.term} — glossaire propreté`,
    description: term.definition.slice(0, 155),
    alternates: { canonical: path },
    openGraph: {
      title: `${term.term} — glossaire propreté | ${site.name}`,
      description: term.definition.slice(0, 155),
      url: `${site.url}${path}`,
    },
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
      <section className="industry-hero-bg relative overflow-hidden">
        <div className="container relative max-w-3xl py-12 md:py-14">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Glossaire", href: "/glossaire" },
              { label: term.term },
            ]}
            dark
          />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-lime-cta/90">Glossaire</p>
          <h1 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.1] text-white md:text-[2.75rem]">
            {term.term}
          </h1>
        </div>
      </section>
      <article className="section bg-white pb-28 lg:pb-16">
        <div className="container max-w-3xl">
          <p className="text-lg leading-relaxed text-anthracite">{term.definition}</p>
          {term.related?.length ? (
            <div className="mt-10 border-t border-blue-mist pt-6">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-blue-royal">
                Voir aussi
              </p>
              <ul className="mt-3 space-y-2">
                {term.related.map((href) => (
                  <li key={href}>
                    <Link href={href} className="font-semibold text-blue-royal hover:underline">
                      {glossaryLinkLabel(href)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="mt-10 flex flex-wrap gap-3 border-t border-blue-mist pt-8">
            <ButtonLink href={cta.trial} variant="secondary" eventPayload={{ cta: "glossary_term_trial" }}>
              Essai {site.trialDays} jours
            </ButtonLink>
            <Link href="/glossaire" className="inline-flex items-center text-sm font-bold text-blue-royal hover:underline">
              ← Tout le glossaire
            </Link>
          </div>
        </div>
      </article>

      <FinalPush />
      <MobileCtaBar />
    </>
  );
}
