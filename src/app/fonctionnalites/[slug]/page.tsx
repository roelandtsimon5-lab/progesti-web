import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
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
  const others = modules.filter((m) => m.slug !== slug).slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-[#F5F8FB]">
        <div className="container relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="inline-flex rounded-full border border-green-action/25 bg-green-action/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-deep">
              Module · Inclus partout
            </p>
            <h1 className="mt-5 font-display text-[2.2rem] font-extrabold leading-[1.08] text-blue-deep md:text-[3rem]">
              {mod.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate">{mod.short}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={cta.trialApp}
                size="lg"
                event="trial_start"
                eventPayload={{ cta: "v3_module_trial", module: slug }}
              >
                Tester ce module
              </ButtonLink>
              <ButtonLink href={cta.demo} size="lg" variant="secondary">
                Voir la démo
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm font-medium text-slate">
              <span className="text-green-deep">✓</span> Essai 2 mois sans CB · Dès 29,99 € HT/mois
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-blue-mist bg-white shadow-[0_24px_60px_rgba(11,61,110,0.12)]">
            <Image
              src="/dashboard-mockup-opt.webp"
              alt={`Module ${mod.title} — PROGESTI`}
              width={800}
              height={480}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid max-w-5xl gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Le problème</p>
            <h2 className="mt-3 text-2xl font-extrabold text-blue-deep">Sur le terrain</h2>
            <p className="mt-3 text-slate">{mod.pain}</p>
            <p className="eyebrow mt-10">La réponse PROGESTI</p>
            <h2 className="mt-3 text-2xl font-extrabold text-blue-deep">Ce que change le module</h2>
            <ul className="mt-4 space-y-3 text-slate">
              <li className="flex gap-2">
                <span className="text-green-deep">✓</span>
                {mod.short}
              </li>
              <li className="flex gap-2">
                <span className="text-green-deep">✓</span>
                Accessible cloud, Android et iOS.
              </li>
              <li className="flex gap-2">
                <span className="text-green-deep">✓</span>
                Inclus dans Starter, Pro et Premium — pas de module payant en plus.
              </li>
              <li className="flex gap-2">
                <span className="text-green-deep">✓</span>
                Relié au planning, au terrain et à la facturation.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-mist bg-[#F5F8FB] p-7">
            <h2 className="text-xl font-extrabold text-blue-deep">Pour qui ?</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              <li>
                <Link href="/solutions/bureaux" className="font-semibold text-blue-royal hover:underline">
                  Nettoyage de bureaux
                </Link>
              </li>
              <li>
                <Link href="/solutions/syndics" className="font-semibold text-blue-royal hover:underline">
                  Syndics & copropriétés
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/professionnels"
                  className="font-semibold text-blue-royal hover:underline"
                >
                  Professionnels & commerces
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/fin-de-chantier"
                  className="font-semibold text-blue-royal hover:underline"
                >
                  Fin de chantier
                </Link>
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <ButtonLink
                href={cta.trialApp}
                event="trial_start"
                eventPayload={{ cta: "v3_module_side_trial", module: slug }}
              >
                Commencer l’essai
              </ButtonLink>
              <ButtonLink href="/tarifs" variant="secondary">
                Voir les tarifs
              </ButtonLink>
              <Link
                href="/fonctionnalites"
                className="text-center text-sm font-bold text-blue-royal hover:underline"
              >
                ← Toutes les fonctionnalités
              </Link>
            </div>
          </div>
        </div>
      </section>

      {others.length ? (
        <section className="section bg-[#F5F8FB]">
          <div className="container">
            <h2 className="text-2xl font-extrabold text-blue-deep">Autres modules</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/fonctionnalites/${m.slug}`}
                    className="block rounded-xl border border-blue-mist bg-white p-4 transition hover:border-blue-royal"
                  >
                    <span className="font-display text-sm font-bold text-blue-deep">{m.title}</span>
                    <span className="mt-1 block text-xs text-slate">{m.short}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <ConversionBlock variant="essai" />
      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCtaBar />
    </>
  );
}
