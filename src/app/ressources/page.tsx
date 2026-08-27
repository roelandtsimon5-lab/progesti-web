import type { Metadata } from "next";
import Link from "next/link";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { getAllPosts, getCategoryLabel } from "@/lib/blog";
import { modules, solutions } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Ressources — guides, piliers SEO, solutions",
  description:
    "Hub ressources PROGESTI : pages piliers, solutions métier, blog et glossaire pour entreprises de nettoyage.",
  path: "/ressources",
});

const pillars = [
  {
    href: "/logiciel-entreprise-nettoyage",
    title: "Logiciel entreprise de nettoyage",
    text: "Vue d'ensemble du métier et du parcours planning → facture.",
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
] as const;

export default function RessourcesPage() {
  const latest = getAllPosts().slice(0, 6);

  return (
    <>
      <IndustryPageHero
        eyebrow="Ressources"
        title="Tout pour décider et démarrer"
        lead="Piliers SEO, solutions verticales, blog et glossaire — une porte d'entrée claire vers PROGESTI."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Ressources" },
        ]}
        trialEvent="ressources_trial"
        demoEvent="ressources_demo"
      />

      <section className="section bg-white">
        <div className="container space-y-16">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep">Pages piliers</h2>
            <ul className="mt-6 grid gap-5 md:grid-cols-2">
              {pillars.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="industry-card-lift block rounded-[3px] border border-blue-mist/80 bg-[#F5F8FB] p-5"
                  >
                    <span className="font-display text-lg font-bold text-blue-deep hover:text-blue-royal">
                      {p.title}
                    </span>
                    <p className="mt-1 text-sm text-slate">{p.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep">Solutions métier</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="font-semibold text-blue-deep hover:text-blue-royal hover:underline"
                  >
                    {s.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep">Modules produit</h2>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {modules.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/fonctionnalites/${m.slug}`}
                    className="text-slate hover:text-blue-royal hover:underline"
                  >
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-extrabold text-blue-deep">Derniers articles</h2>
              <Link href="/blog" className="text-sm font-bold text-blue-royal hover:underline">
                Tout le blog →
              </Link>
            </div>
            <ul className="mt-6 divide-y divide-blue-mist/70">
              {latest.map((post) => (
                <li key={post.slug} className="py-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-royal">
                    {getCategoryLabel(post.category)}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-1 block font-display text-lg font-bold text-blue-deep hover:text-blue-royal"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep">Glossaire & outils</h2>
            <p className="mt-2 text-slate">
              Vocabulaire métier (vacation, parties communes, bon d&apos;intervention…) et liens utiles.
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
          </Reveal>
        </div>
      </section>
      <MobileCtaBar />
    </>
  );
}
