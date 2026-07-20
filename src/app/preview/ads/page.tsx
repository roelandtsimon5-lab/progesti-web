import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { cta } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Preview — Ads agressive",
  robots: { index: false, follow: false },
};

export default function PreviewAdsPage() {
  return (
    <>
      <div className="bg-red-600 px-4 py-2 text-center text-sm font-bold text-white">
        Preview B · Ads agressive ·{" "}
        <Link href="/preview" className="underline">
          Retour comparateur
        </Link>
      </div>

      {/* Bandeau urgence */}
      <div className="bg-[#0B3D6E] px-4 py-2.5 text-center text-sm font-semibold text-white">
        Essai <span className="text-[#B8F5D4]">2 mois</span> sans CB — les autres offrent souvent{" "}
        <span className="line-through opacity-70">14 jours</span> seulement
      </div>

      <section className="bg-white">
        <div className="container grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:py-16">
          <div>
            <p className="inline-block bg-[#1FA86B] px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white">
              Stop Excel + WhatsApp
            </p>
            <h1 className="mt-4 font-display text-[2.4rem] font-extrabold leading-[1.05] text-[#0F2438] md:text-[3.25rem]">
              Arrêtez de perdre des heures (et de l’argent) chaque semaine
            </h1>
            <p className="mt-5 text-lg font-medium text-[#3d5268]">
              Planning agents · pointage terrain · facturation. Un seul logiciel pour sociétés de
              nettoyage. Dès <strong className="text-[#0F2438]">29,99 € HT/mois</strong>.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "2 mois d’essai — 4× plus long que l’offre classique du marché",
                "Tous les modules inclus (pas de surprise)",
                "Sans carte bancaire · résiliable",
                "Mise en place offerte",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-base font-semibold text-[#0F2438]">
                  <span className="text-[#1FA86B]">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={cta.trialApp}
                size="lg"
                className="!min-h-14 !text-lg"
                event="trial_start"
                eventPayload={{ cta: "preview_ads_hero" }}
              >
                Je commence mon essai gratuit →
              </ButtonLink>
              <ButtonLink href={cta.demo} size="lg" variant="secondary">
                Démo rapide
              </ButtonLink>
            </div>
          </div>

          {/* Formulaire sticky style ads */}
          <div className="rounded-2xl border-2 border-[#0B3D6E] bg-[#F5F8FB] p-6 shadow-[0_20px_60px_rgba(11,61,110,0.15)] md:p-8">
            <p className="font-display text-xs font-bold uppercase tracking-wide text-[#1FA86B]">
              Accès immédiat
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0F2438]">
              Créez votre espace en 2 min
            </h2>
            <p className="mt-2 text-sm text-[#4a6178]">
              Pas de rendez-vous obligatoire. Vous testez, vous décidez.
            </p>
            <div className="mt-6 space-y-3">
              <ButtonLink
                href={cta.trialApp}
                size="lg"
                className="w-full !min-h-14"
                event="trial_start"
                eventPayload={{ cta: "preview_ads_box" }}
              >
                Essai gratuit 2 mois
              </ButtonLink>
              <ButtonLink href="/essai-gratuit" size="lg" variant="secondary" className="w-full">
                Remplir le formulaire d’abord
              </ButtonLink>
            </div>
            <p className="mt-4 text-center text-xs text-[#4a6178]">
              Ou{" "}
              <Link href="/contact" className="font-bold text-[#1565A8] underline">
                demandez un rappel
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Avant / après agressif */}
      <section className="border-y border-[#C5DCF0] bg-[#0B3D6E] py-14 text-white">
        <div className="container">
          <h2 className="text-center text-3xl font-extrabold">Avant vs PROGESTI</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-black/25 p-6 ring-1 ring-white/20">
              <p className="text-sm font-bold uppercase tracking-wide text-red-300">Avant</p>
              <ul className="mt-4 space-y-2 text-white/90">
                <li>✗ Planning Excel cassé</li>
                <li>✗ Absences sur WhatsApp</li>
                <li>✗ Photos perdues</li>
                <li>✗ Factures en retard</li>
              </ul>
            </div>
            <div className="rounded-xl bg-[#1FA86B]/25 p-6 ring-2 ring-[#B8F5D4]">
              <p className="text-sm font-bold uppercase tracking-wide text-[#B8F5D4]">Avec PROGESTI</p>
              <ul className="mt-4 space-y-2 text-white">
                <li>✓ Planning métier clair</li>
                <li>✓ Backups & multi-sites</li>
                <li>✓ Pointage + bons</li>
                <li>✓ Facture liée au réalisé</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8E6] py-14">
        <div className="container max-w-3xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-[#B45309]">
            Offre claire
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0F2438] md:text-4xl">
            29,99 € HT/mois · tout inclus · 2 mois offerts pour tester
          </h2>
          <p className="mt-4 text-[#4a6178]">
            Pas de devis opaque. Pas de module caché. Pas de CB pour l’essai.
          </p>
          <div className="mt-8">
            <ButtonLink
              href={cta.trialApp}
              size="lg"
              className="!min-h-14 !px-10 !text-lg"
              event="trial_start"
            >
              Oui, je teste 2 mois gratuitement
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-[#4a6178]">
            Déjà convaincu ?{" "}
            <Link href="/tarifs" className="font-bold text-[#1565A8] underline">
              Voir les tarifs
            </Link>
          </p>
        </div>
      </section>

      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCtaBar />
    </>
  );
}
