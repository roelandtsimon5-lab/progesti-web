import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta } from "@/lib/cta";
import { modules } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mod = modules.find((m) => m.slug === slug);
  if (!mod) return {};
  return {
    title: `${mod.title} — module PROGESTI`,
    description: `${mod.short} ${mod.pain}`,
  };
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const mod = modules.find((m) => m.slug === slug);
  if (!mod) notFound();

  return (
    <>
      <PageHero
        eyebrow="Module"
        title={mod.title}
        lead={mod.short}
        primaryHref={cta.trialApp}
        primaryLabel="Tester ce module"
        secondaryHref={cta.demo}
        secondaryLabel="Voir la démo"
      />
      <section className="section !pt-0">
        <div className="container grid max-w-4xl gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-8">
            <h2 className="text-2xl font-extrabold text-ink">Le problème sur le terrain</h2>
            <p className="mt-3 text-muted">{mod.pain}</p>
            <h2 className="mt-8 text-2xl font-extrabold text-ink">Ce que change PROGESTI</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-anthracite">
              <li>{mod.short}</li>
              <li>Accessible cloud, Android et iOS.</li>
              <li>Inclus dans Starter, Pro et Premium — pas de module payant en plus.</li>
              <li>Relie planning, terrain et facturation dans le même flux.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-fog p-8">
            <h2 className="text-xl font-extrabold text-ink">Passer à l’action</h2>
            <p className="mt-3 text-sm text-muted">
              L’essai 2 mois ouvre tous les modules, y compris {mod.title.toLowerCase()}.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href={cta.trialApp}>Commencez gratuitement</ButtonLink>
              <ButtonLink href="/tarifs" variant="secondary">
                Voir les tarifs
              </ButtonLink>
              <ButtonLink href="/fonctionnalites" variant="ghost">
                ← Toutes les fonctionnalités
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
