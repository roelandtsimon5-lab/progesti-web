import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
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
      <SoftwareApplicationLd />
      <section className="relative overflow-hidden bg-blue-deep">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        <div className="container relative grid items-center gap-10 pb-16 pt-12 lg:grid-cols-2 lg:gap-16 lg:pb-20 lg:pt-16">
          <div>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90">
              Produit · 11 modules
            </span>
            <h1 className="mt-5 font-display text-[2.2rem] font-extrabold leading-[1.08] text-white md:text-[3rem]">
              Une suite complète pour le métier de la propreté
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Du planning à la facture, du pointage terrain à la supervision — tout inclus dès
              149 € HT/mois. Essai 7 jours gratuit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={cta.trialApp}
                size="lg"
                event="trial_start"
                eventPayload={{ cta: "v3_features_hub_trial" }}
              >
                Demander une démo
              </ButtonLink>
              <ButtonLink href={cta.demo} size="lg" variant="outline-white">
                Voir la démo
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-white/60">
              ✓ Essai 7 jours · ✓ 149 € HT/mois · ✓ Jusqu'à 5 utilisateurs
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src="/hero-planning.png"
              alt="Planning PROGESTI — vue semaine des passages par site"
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
            ["7 jours", "d’essai gratuit"],
            ["149 €", "HT/mois tout inclus"],
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
