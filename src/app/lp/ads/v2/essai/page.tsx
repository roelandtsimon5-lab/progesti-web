import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdsV2TrialForm } from "@/components/sections/ads-v2/AdsV2TrialForm";

export const metadata: Metadata = {
  title: "Créer mon compte — Essai 2 mois PROGESTI",
  description:
    "Créez votre compte PROGESTI en 2 minutes. Logiciel de gestion pour entreprises de nettoyage. Essai 2 mois, tous modules, sans carte bancaire.",
  robots: { index: false },
};

const faq = [
  {
    q: "Vais-je entrer directement dans l’application ?",
    a: "Oui. Après validation du formulaire, votre essai s’ouvre immédiatement — pas d’attente commerciale.",
  },
  {
    q: "Faut-il une carte bancaire ?",
    a: "Non. Essai 2 mois sans CB. Vous choisissez ensuite de continuer ou d’arrêter.",
  },
  {
    q: "Qu’est-ce qui est inclus ?",
    a: "Tous les modules : planning, pointage terrain, facturation, pilotage. Conçu pour le nettoyage et les services à la personne.",
  },
];

export default function AdsV2EssaiPage() {
  return (
    <div className="ads-lp min-h-screen bg-[#F3F4F6] text-[#111827]">
      <header className="border-b border-[#E5E7EB] bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-2.5">
            <Image src="/logo-opt.webp" alt="" width={36} height={36} className="h-9 w-9" />
            <span className="font-display text-xl font-extrabold tracking-tight text-[#0F1F33]">
              PROGESTI
            </span>
          </div>
          <p className="rounded-full bg-[#ECFDF3] px-3.5 py-2 text-xs font-bold text-[#067647] sm:text-sm">
            Essai 2 mois · Sans CB
          </p>
        </div>
      </header>

      <section className="mx-auto grid max-w-5xl gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#067647]">
            Accès immédiat · Logiciel nettoyage
          </p>
          <h1 className="mt-4 text-[1.85rem] font-extrabold leading-[1.12] tracking-tight text-[#0F1F33] sm:text-[2.35rem] md:text-[2.6rem]">
            Créez votre compte PROGESTI en 2 minutes.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#374151] sm:text-lg">
            Logiciel de gestion pour entreprises de nettoyage et services à la personne. Essai 2
            mois, tous modules, sans carte bancaire — vous arrivez directement dans l’application.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Sans carte bancaire",
              "Tous les modules ouverts",
              "Données de démo pour démarrer vite",
              "Résiliable après l’essai",
            ].map((item) => (
              <li key={item} className="flex gap-2 text-sm font-semibold text-[#111827] sm:text-base">
                <span className="text-[#12B76A]" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_12px_40px_rgba(17,24,39,0.08)]">
            <div className="flex items-center gap-2 border-b border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D1D5DB]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D1D5DB]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D1D5DB]" />
              <span className="ml-2 text-xs font-semibold text-[#6B7280]">app.progesti.fr</span>
            </div>
            <Image
              src="/dashboard-mockup-opt.webp"
              alt="Interface PROGESTI"
              width={800}
              height={560}
              priority
              className="w-full"
            />
          </div>
        </div>

        <div
          id="creer"
          className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-[0_20px_60px_rgba(17,24,39,0.1)] sm:p-8 lg:sticky lg:top-6"
        >
          <div className="mb-3 h-1.5 w-14 rounded-full bg-[#12B76A]" />
          <h2 className="text-[1.45rem] font-extrabold leading-tight text-[#0F1F33] sm:text-2xl">
            Créer mon essai gratuit
          </h2>
          <p className="mt-2 text-sm font-medium text-[#4B5563]">
            Compte créé → ouverture immédiate de l’app. Aucun rendez-vous obligatoire.
          </p>
          <div className="mt-6">
            <AdsV2TrialForm campaign="ads_v2_essai" />
          </div>
          <p className="mt-5 text-center text-xs text-[#6B7280]">
            Vous préférez juste regarder ?{" "}
            <Link href="/demo" className="font-bold text-[#067647] hover:underline">
              Voir une démo
            </Link>
            {" · "}
            <Link href="/rendez-vous" className="font-bold text-[#067647] hover:underline">
              Être rappelé
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-[#E5E7EB] bg-white py-12">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="text-xl font-extrabold text-[#0F1F33] sm:text-2xl">En 3 réponses</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {faq.map((o) => (
              <div key={o.q} className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-5 py-4">
                <h3 className="text-sm font-bold text-[#0F1F33]">{o.q}</h3>
                <p className="mt-2 text-sm text-[#4B5563]">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E5E7EB] bg-white/95 p-3 backdrop-blur lg:hidden">
        <a
          href="#creer"
          className="flex min-h-12 w-full items-center justify-center rounded-xl bg-[#12B76A] font-display text-sm font-extrabold text-[#0F1F33]"
        >
          Créer mon essai gratuit
        </a>
      </div>
      <div className="h-20 lg:hidden" aria-hidden />
    </div>
  );
}
