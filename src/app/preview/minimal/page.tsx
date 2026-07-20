import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { cta } from "@/lib/cta";
import { modules, solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preview — Minimal",
  robots: { index: false, follow: false },
};

export default function PreviewMinimalPage() {
  const univers = solutions.filter((s) => s.slug !== "auto-entrepreneurs").slice(0, 4);

  return (
    <>
      <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-center text-sm font-medium text-neutral-700">
        Preview C · Minimal ·{" "}
        <Link href="/preview" className="underline underline-offset-2">
          Retour comparateur
        </Link>
      </div>

      <section className="bg-white">
        <div className="container max-w-3xl py-24 md:py-32">
          <p className="text-sm font-medium tracking-wide text-neutral-500">PROGESTI</p>
          <h1 className="mt-6 font-display text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-neutral-900 md:text-[4rem]">
            Logiciel de nettoyage professionnel.
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-neutral-600">
            Planning. Pointage. Facturation. Essai 2 mois sans carte bancaire.
          </p>
          <div className="mt-10">
            <ButtonLink
              href={cta.trialApp}
              size="lg"
              className="!rounded-none !bg-neutral-900 !shadow-none hover:!bg-neutral-800"
              event="trial_start"
            >
              Essai gratuit
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-neutral-500">
            Dès 29,99 € HT/mois ·{" "}
            <Link href={cta.demo} className="underline underline-offset-4">
              Démo
            </Link>
          </p>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="container py-6">
          <p className="text-center text-sm text-neutral-600">
            2 mois d’essai · 11 modules inclus · Sans engagement · Support FR
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container max-w-3xl py-24">
          <h2 className="font-display text-2xl font-bold text-neutral-900 md:text-3xl">
            Remplace Excel et WhatsApp.
          </h2>
          <div className="mt-16 space-y-12">
            {[
              ["01", "Planifier", "Sites, agents, fréquences."],
              ["02", "Pointer", "Mobile, preuves, bons."],
              ["03", "Facturer", "Du réalisé à la facture."],
            ].map(([n, t, d]) => (
              <div key={n} className="grid gap-2 border-t border-neutral-200 pt-8 sm:grid-cols-[4rem_1fr]">
                <span className="font-display text-sm text-neutral-400">{n}</span>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">{t}</h3>
                  <p className="mt-1 text-neutral-600">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="container py-16">
          <div className="mx-auto max-w-4xl overflow-hidden border border-neutral-200 bg-white">
            <Image
              src="/dashboard-mockup-opt.webp"
              alt="Interface PROGESTI"
              width={1100}
              height={660}
              className="h-auto w-full"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container max-w-3xl py-24">
          <h2 className="text-2xl font-bold text-neutral-900">Pour qui</h2>
          <ul className="mt-10 space-y-0">
            {univers.map((s) => (
              <li key={s.slug} className="border-t border-neutral-200">
                <Link
                  href={`/solutions/${s.slug}`}
                  className="flex items-baseline justify-between gap-4 py-5 text-neutral-900 hover:text-neutral-600"
                >
                  <span className="font-medium">{s.title}</span>
                  <span className="text-neutral-400">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="container max-w-3xl pb-24">
          <h2 className="text-2xl font-bold text-neutral-900">Modules</h2>
          <p className="mt-8 columns-1 gap-8 text-neutral-700 sm:columns-2">
            {modules.map((m) => (
              <span key={m.slug} className="mb-2 block">
                {m.title}
              </span>
            ))}
          </p>
          <div className="mt-16 border-t border-neutral-200 pt-12">
            <p className="text-lg text-neutral-600">Prêt à tester ?</p>
            <div className="mt-6">
              <ButtonLink
                href={cta.trialApp}
                size="lg"
                className="!rounded-none !bg-neutral-900 !shadow-none hover:!bg-neutral-800"
                event="trial_start"
              >
                Essai 2 mois
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCtaBar />
    </>
  );
}
