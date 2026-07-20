import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { getAllPosts, getCategoryLabel } from "@/lib/blog";
import { modules, solutions } from "@/lib/site";
import { cta } from "@/lib/cta";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Ressources — guides, piliers SEO, solutions",
  description:
    "Hub ressources PROGESTI : pages piliers, solutions métier, blog et glossaire pour entreprises de nettoyage.",
};

const pillars = [
  {
    href: "/logiciel-entreprise-nettoyage",
    title: "Logiciel entreprise de nettoyage",
    text: "Vue d’ensemble du métier et du parcours planning → facture.",
  },
  {
    href: "/logiciel-planning-nettoyage",
    title: "Logiciel planning nettoyage",
    text: "Affecter agents et sites sans Excel ni fils WhatsApp.",
  },
  {
    href: "/logiciel-facturation-proprete",
    title: "Logiciel facturation propreté",
    text: "Du réalisé terrain à la facture, sans ressaisie.",
  },
  {
    href: "/alternative-propret",
    title: "Alternative à Propret",
    text: "Comparer essai, tarifs et parcours de switch.",
  },
];

export default function RessourcesPage() {
  const latest = getAllPosts().slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow="Ressources"
        title="Tout pour décider et démarrer"
        lead="Piliers SEO, solutions verticales, blog et glossaire — une porte d’entrée claire vers PROGESTI."
        primaryHref={cta.trialApp}
        primaryLabel="Essai 2 mois"
        secondaryHref="/blog"
        secondaryLabel="Lire le blog"
      />

      <section className="section !pt-0">
        <div className="container space-y-16">
          <div>
            <h2 className="text-2xl font-extrabold">Pages piliers</h2>
            <ul className="mt-6 grid gap-6 md:grid-cols-2">
              {pillars.map((p) => (
                <li key={p.href} className="border-t border-line pt-4">
                  <Link href={p.href} className="font-display text-lg font-bold hover:text-emerald-dark">
                    {p.title}
                  </Link>
                  <p className="mt-1 text-sm text-muted">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold">Solutions métier</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="font-semibold text-ink hover:text-emerald-dark"
                  >
                    {s.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold">Modules produit</h2>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {modules.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/fonctionnalites/${m.slug}`}
                    className="text-anthracite hover:text-emerald-dark"
                  >
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl font-extrabold">Derniers articles</h2>
              <Link href="/blog" className="text-sm font-bold text-emerald-dark hover:underline">
                Tout le blog →
              </Link>
            </div>
            <ul className="mt-6 divide-y divide-line">
              {latest.map((post) => (
                <li key={post.slug} className="py-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-petrol">
                    {getCategoryLabel(post.category)}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-1 block font-display text-lg font-bold hover:text-emerald-dark"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-line pt-10">
            <h2 className="text-2xl font-extrabold">Glossaire & outils</h2>
            <p className="mt-2 text-muted">
              Vocabulaire métier (vacation, parties communes, bon d’intervention…) et liens utiles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/glossaire" variant="secondary">
                Glossaire métier
              </ButtonLink>
              <ButtonLink href="/guides" variant="ghost">
                Guides
              </ButtonLink>
              <ButtonLink href="/comparatifs" variant="ghost">
                Comparatifs
              </ButtonLink>
              <ButtonLink href="/faq" variant="ghost">
                FAQ
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
