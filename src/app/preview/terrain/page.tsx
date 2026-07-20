import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { cta } from "@/lib/cta";
import { solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preview — Photo terrain",
  robots: { index: false, follow: false },
};

export default function PreviewTerrainPage() {
  const univers = solutions.filter((s) => s.slug !== "auto-entrepreneurs");

  return (
    <>
      <div className="bg-amber-400/90 px-4 py-2 text-center text-sm font-bold text-ink">
        Preview A · Photo terrain ·{" "}
        <Link href="/preview" className="underline">
          Retour comparateur
        </Link>
      </div>

      {/* Hero full-bleed métier */}
      <section className="relative min-h-[min(92vh,54rem)] overflow-hidden">
        <Image
          src="/hero-mockup-opt.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/35"
          aria-hidden
        />
        <div className="container relative flex min-h-[min(92vh,54rem)] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24">
          <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-[#B8F5D4]">
            PROGESTI · Terrain
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[2.5rem] font-extrabold leading-[1.05] text-white md:text-[3.4rem]">
            Organisez le ménage là où il se passe — sur le terrain
          </h1>
          <p className="mt-5 max-w-lg text-lg text-white/90">
            Planning, pointage mobile, preuves photos, facturation. Pour bureaux, syndics et fin de
            chantier.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={cta.trialApp} size="lg" event="trial_start">
              Essai 2 mois sans CB
            </ButtonLink>
            <ButtonLink href={cta.demo} size="lg" variant="outline-white">
              Voir la démo
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-[#0a1620] py-10 text-white">
        <div className="container grid gap-6 sm:grid-cols-3">
          {[
            ["Agents", "Pointage + géoloc sur mobile"],
            ["Sites", "Fréquences et backups lisibles"],
            ["Clients", "Preuves et factures reliées"],
          ].map(([t, d]) => (
            <div key={t} className="border-l-2 border-[#B8F5D4] pl-4">
              <p className="font-display text-lg font-bold">{t}</p>
              <p className="mt-1 text-sm text-white/80">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-[#F7F5F0]">
        <div className="container">
          <h2 className="max-w-xl text-3xl font-extrabold text-[#1a1208] md:text-4xl">
            Quatre univers, une organisation
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {univers.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group relative min-h-[14rem] overflow-hidden rounded-sm"
              >
                <Image
                  src="/dashboard-mockup-opt.webp"
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/85">{s.navHint}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <Image src="/dashboard-mockup-opt.webp" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#0B3D6E]/92" />
        <div className="container relative text-center text-white">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Testez 2 mois sur vos vrais sites
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/90">
            Sans carte bancaire. Dès 29,99 € HT/mois après l’essai.
          </p>
          <div className="mt-8">
            <ButtonLink href={cta.trialApp} size="lg" event="trial_start">
              Commencer l’essai
            </ButtonLink>
          </div>
        </div>
      </section>

      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCtaBar />
    </>
  );
}
