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

      {/* Hero V2 style */}
      <section className="relative overflow-hidden bg-blue-deep">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        <div className="container relative grid items-center gap-10 pb-16 pt-12 lg:grid-cols-2 lg:gap-16 lg:pb-20 lg:pt-16">
          <div>
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
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
              <Image
                src="/screen-telegestion.webp"
                alt="Télégestion PROGESTI — pointages terrain et suivi interventions"
                width={800}
                height={500}
                priority
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
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

      <section className="section bg-paper">
        <div className="container">
          <h2 className="max-w-xl text-3xl font-extrabold text-blue-deep md:text-4xl">
            Quatre univers, une organisation
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {univers.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group block rounded-2xl border border-blue-mist/60 bg-white p-6 shadow-[0_8px_30px_rgba(11,61,110,0.06)] transition hover:border-blue-royal hover:shadow-[0_12px_36px_rgba(11,61,110,0.1)]"
              >
                <h3 className="font-display text-xl font-bold text-blue-deep group-hover:text-blue-royal">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate">{s.navHint}</p>
                <span className="mt-4 inline-block text-sm font-bold text-green-deep">
                  Voir la solution →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-blue-deep">
        <div className="container text-center text-white">
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
      <MobileCtaBar />
    </>
  );
}
