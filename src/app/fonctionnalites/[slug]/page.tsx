import type { Metadata } from "next";
import Link from "next/link";
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
        <div className="container grid max-w-4xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-ink">Le problème sur le terrain</h2>
            <p className="mt-3 text-muted">{mod.pain}</p>
            <h2 className="mt-8 text-2xl font-extrabold text-ink">Ce que change PROGESTI</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-anthracite">
              <li>{mod.short}</li>
              <li>Accessible cloud, Android et iOS.</li>
              <li>Inclus dans Starter, Pro et Premium — pas de module payant en plus.</li>
              <li>Relie planning, terrain et facturation dans le même flux.</li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              Adapté aux{" "}
              <Link href="/solutions/bureaux" className="font-semibold text-emerald-dark hover:underline">
                bureaux
              </Link>
              ,{" "}
              <Link href="/solutions/syndics" className="font-semibold text-emerald-dark hover:underline">
                syndics
              </Link>
              ,{" "}
              <Link
                href="/solutions/professionnels"
                className="font-semibold text-emerald-dark hover:underline"
              >
                professionnels
              </Link>{" "}
              et{" "}
              <Link
                href="/solutions/fin-de-chantier"
                className="font-semibold text-emerald-dark hover:underline"
              >
                fin de chantier
              </Link>
              .
            </p>
          </div>
          <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h2 className="text-xl font-extrabold text-ink">Passer à l’action</h2>
            <p className="mt-3 text-sm text-muted">
              L’essai 2 mois ouvre tous les modules, y compris {mod.title.toLowerCase()}.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href={cta.trialApp} eventPayload={{ cta: "v2_module_trial" }}>
                Commencez gratuitement
              </ButtonLink>
              <ButtonLink href="/tarifs" variant="secondary" eventPayload={{ cta: "v2_module_tarifs" }}>
                Voir les tarifs
              </ButtonLink>
              <ButtonLink href="/fonctionnalites" variant="ghost">
                ← Toutes les fonctionnalités
              </ButtonLink>
              <ButtonLink href="/blog" variant="ghost">
                Lire le blog →
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
