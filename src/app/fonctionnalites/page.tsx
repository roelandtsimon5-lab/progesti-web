import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { modules } from "@/lib/site";
import { cta } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Fonctionnalités",
  description:
    "Toutes les fonctionnalités PROGESTI pour piloter une entreprise de nettoyage : planning, RH, facturation, terrain.",
  path: "/fonctionnalites",
});

export default function FonctionnalitesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F5F8FB]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(31,168,107,0.12),transparent)]"
          aria-hidden
        />
        <div className="container relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="inline-flex rounded-full border border-green-action/25 bg-green-action/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-deep">
              Produit · 11 modules
            </p>
            <h1 className="mt-5 font-display text-[2.2rem] font-extrabold leading-[1.08] text-blue-deep md:text-[3rem]">
              Une suite complète pour le métier de la propreté
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate">
              Du planning à la facture, du pointage terrain à la supervision — tout inclus dès
              29,99 € HT/mois. Essai 2 mois sans CB.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={cta.trialApp}
                size="lg"
                event="trial_start"
                eventPayload={{ cta: "v3_features_hub_trial" }}
              >
                Essayer 2 mois
              </ButtonLink>
              <ButtonLink href={cta.demo} size="lg" variant="secondary">
                Voir la démo
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-blue-mist bg-white shadow-[0_24px_60px_rgba(11,61,110,0.12)]">
            <Image
              src="/dashboard-mockup-opt.webp"
              alt="Modules PROGESTI"
              width={800}
              height={480}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-white">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            ["2 mois", "d’essai sans CB"],
            ["29,99 €", "HT/mois dès Starter"],
            ["11", "modules inclus"],
            ["0 €", "module payant en plus"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="font-display text-2xl font-extrabold text-blue-deep">{v}</p>
              <p className="mt-1 text-sm font-medium text-slate">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Tous les modules</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep">
              Inclus dans chaque offre
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => (
              <Reveal key={m.slug} delayMs={i * 25}>
                <li>
                  <Link
                    href={`/fonctionnalites/${m.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-blue-mist bg-[#F5F8FB] p-5 transition hover:border-blue-royal hover:bg-white hover:shadow-[0_12px_36px_rgba(11,61,110,0.08)]"
                  >
                    <h2 className="font-display text-lg font-bold text-blue-deep group-hover:text-blue-royal">
                      {m.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-slate">{m.short}</p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-wide text-blue-royal">
                      Problème résolu
                    </p>
                    <p className="mt-1 text-sm text-muted">{m.pain}</p>
                    <span className="mt-4 text-sm font-bold text-green-deep">Voir le module →</span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
          <p className="mt-12 text-sm text-slate">
            Voir aussi nos{" "}
            <Link href="/solutions" className="font-semibold text-blue-royal hover:underline">
              solutions par métier
            </Link>{" "}
            et le{" "}
            <Link href="/blog" className="font-semibold text-blue-royal hover:underline">
              blog
            </Link>
            .
          </p>
        </div>
      </section>

      <ConversionBlock variant="essai" />
      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCtaBar />
    </>
  );
}
