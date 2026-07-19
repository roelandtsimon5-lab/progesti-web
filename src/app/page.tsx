import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { PricingTable } from "@/components/pricing/PricingTable";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import {
  benefits,
  faqItems,
  modules,
  site,
  trustBadges,
  whyPoints,
} from "@/lib/site";

import { cta } from "@/lib/cta";
export const metadata: Metadata = {
  title: "Logiciel pour entreprises de nettoyage",
  description: site.description,
};

const compareRows = [
  {
    label: "Planning agents / sites",
    excel: "Tableaux fragiles",
    whatsapp: "Messages perdus",
    progesti: "Planning métier clair",
  },
  {
    label: "Preuve terrain",
    excel: "Papier / oubli",
    whatsapp: "Photos éparpillées",
    progesti: "Pointage + bons",
  },
  {
    label: "Facturation",
    excel: "Saisie manuelle",
    whatsapp: "Pas adapté",
    progesti: "Liée au réalisé",
  },
  {
    label: "Vision d’activité",
    excel: "Fichiers multiples",
    whatsapp: "Aucune",
    progesti: "Cockpit temps réel",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-white pb-14 pt-10 md:pb-20 md:pt-14">
        <div className="container grid items-center gap-10 lg:grid-cols-[minmax(0,34rem)_1fr] lg:gap-14">
          <div className="anim-rise">
            <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.22em] text-navy">
              {site.name} · Logiciel propreté
            </p>
            <h1 className="mt-4 text-[2.35rem] font-extrabold leading-[1.05] tracking-tight text-ink md:text-[3.1rem] lg:text-[3.35rem]">
              Stop Excel & WhatsApp.
              <span className="mt-1 block text-emerald-dark">Pilotez votre nettoyage.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Un seul outil pour planifier vos agents, pointer le terrain et facturer — conçu pour
              auto-entrepreneurs et petites entreprises de propreté.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={cta.trialApp}
                size="lg"
                event="trial_start"
                eventPayload={{ cta: "home_hero" }}
              >
                Commencez gratuitement
              </ButtonLink>
              <ButtonLink href={cta.demo} size="lg" variant="secondary" eventPayload={{ cta: "home_demo" }}>
                Voir une démonstration
              </ButtonLink>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-anthracite">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-dark">✓</span> 2 mois sans CB
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-dark">✓</span> Accès immédiat
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-dark">✓</span> Dès 29,99€ HT/mois
              </li>
            </ul>
          </div>

          <div className="anim-rise-delay relative min-w-0">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald/15 via-transparent to-navy/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-line bg-fog shadow-[0_28px_80px_rgba(11,21,36,0.16)]">
              <div className="flex items-center gap-2 border-b border-line bg-white px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="ml-2 text-xs font-semibold text-muted">app.progesti.fr</span>
              </div>
              <Image
                src="/dashboard-mockup-opt.webp"
                alt="Tableau de bord PROGESTI pour entreprise de nettoyage"
                width={1200}
                height={900}
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-fog-2 py-7">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm font-semibold text-anthracite md:text-left">
            Remplace les bricolages du quotidien — sans formation de 3 jours.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs font-bold uppercase tracking-wide">
            {["AE", "TPE", "Multi-sites", "Terrain"].map((t) => (
              <span key={t} className="rounded-full border border-line bg-white px-3 py-1.5 text-ink">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Avant / après</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold md:text-4xl">
              Pourquoi les boîtes de nettoyage passent à PROGESTI
            </h2>
          </Reveal>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-fog-2 text-ink">
                <tr>
                  <th className="px-4 py-3 font-display font-bold">Besoin</th>
                  <th className="px-4 py-3 font-display font-bold text-muted">Excel</th>
                  <th className="px-4 py-3 font-display font-bold text-muted">WhatsApp</th>
                  <th className="px-4 py-3 font-display font-bold text-emerald-dark">PROGESTI</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label} className="border-t border-line bg-white">
                    <td className="px-4 py-3.5 font-semibold text-ink">{row.label}</td>
                    <td className="px-4 py-3.5 text-muted">{row.excel}</td>
                    <td className="px-4 py-3.5 text-muted">{row.whatsapp}</td>
                    <td className="px-4 py-3.5 font-semibold text-ink">{row.progesti}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-fog">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Pourquoi PROGESTI</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold md:text-4xl">
              Clair dès la première minute
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whyPoints.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 80}>
                <div className="h-full border-t-2 border-emerald pt-6">
                  <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Fonctionnalités</p>
                <h2 className="mt-3 max-w-xl text-3xl font-extrabold md:text-4xl">
                  Du planning à la facture
                </h2>
              </div>
              <ButtonLink href="/fonctionnalites" variant="secondary">
                Toutes les fonctionnalités
              </ButtonLink>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.slice(0, 6).map((m, i) => (
              <Reveal key={m.slug} delayMs={i * 50}>
                <Link
                  href={`/fonctionnalites/${m.slug}`}
                  className="block h-full rounded-2xl border border-line bg-fog p-6 transition hover:-translate-y-0.5 hover:border-emerald hover:bg-white hover:shadow-[0_16px_40px_rgba(11,21,36,0.08)]"
                >
                  <h3 className="text-lg font-bold text-ink">{m.title}</h3>
                  <p className="mt-2 text-sm text-muted">{m.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-fog">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Dans le logiciel</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Essayez l’interface, pas une vidéo figée
            </h2>
            <p className="lead mt-4">
              La démo interactive vous place dans un cockpit avec des sites, agents et factures
              fictifs — compréhensible en moins de 30 secondes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={cta.demo} size="lg">
                Lancer la démo
              </ButtonLink>
              <ButtonLink href={cta.trialApp} size="lg" variant="secondary" event="trial_start">
                Essai 2 mois
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <Image
              src="/hero-mockup-opt.webp"
              alt="Aperçu produit PROGESTI"
              width={1200}
              height={800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full rounded-2xl border border-line shadow-[0_20px_60px_rgba(11,21,36,0.1)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="section surface-dark">
        <div className="container">
          <Reveal>
            <p className="eyebrow !text-emerald">Bénéfices</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold md:text-4xl">
              Ce que vous gagnez concrètement
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delayMs={i * 60}>
                <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-6">
                  <h3 className="text-xl font-bold text-white">{b.title}</h3>
                  <p className="mt-2 text-white/75">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Confiance</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold md:text-4xl">
              Des garanties simples, sans jargon
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustBadges.map((t, i) => (
              <Reveal key={t.title} delayMs={i * 40}>
                <div className="rounded-2xl border border-line bg-fog px-5 py-6">
                  <p className="font-display text-lg font-bold text-ink">{t.title}</p>
                  <p className="mt-1 text-sm text-muted">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 grid gap-4 rounded-2xl border border-line bg-fog-2 p-6 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-8">
              <div>
                <h3 className="text-xl font-bold text-ink">Comment démarrer sans risque</h3>
                <ol className="mt-4 space-y-2 text-sm text-anthracite md:text-base">
                  <li>
                    <strong className="text-ink">1.</strong> Créez votre essai (2 min)
                  </li>
                  <li>
                    <strong className="text-ink">2.</strong> Explorez planning, sites, facturation
                  </li>
                  <li>
                    <strong className="text-ink">3.</strong> Décidez après 2 mois — ou plus tôt
                  </li>
                </ol>
              </div>
              <div className="text-center md:text-right">
                <ButtonLink href={cta.trialApp} event="trial_start">
                  Commencer l’essai
                </ButtonLink>
                <p className="mt-3 text-xs text-muted">
                  Avis clients détaillés à venir — early users en cours.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-fog" id="tarifs">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Tarifs</p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                Prix publics, modules complets
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Starter, Pro ou Premium — même périmètre. Vous choisissez selon le nombre
                d’utilisateurs.
              </p>
            </div>
          </Reveal>
          <div className="mt-12">
            <PricingTable />
          </div>
        </div>
      </section>

      <section className="section bg-white" id="faq">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Avant de vous lancer</h2>
          </Reveal>
          <div className="mt-10">
            <FaqAccordion items={[...faqItems].slice(0, 8)} />
          </div>
          <div className="mt-6 text-center">
            <Link href="/faq" className="font-bold text-emerald-dark hover:underline">
              Voir toute la FAQ →
            </Link>
          </div>
        </div>
      </section>

      <section className="section surface-dark">
        <div className="container text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Prêt à reprendre le contrôle ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">
              Essai immédiat dans l’application — ou démo interactive en 30 secondes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href={cta.trialApp} size="lg" variant="white" event="trial_start">
                Commencez gratuitement
              </ButtonLink>
              <ButtonLink
                href={cta.demo}
                size="lg"
                variant="secondary"
                className="!border-white !bg-transparent !text-white hover:!bg-white hover:!text-navy"
              >
                Voir une démonstration
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCtaBar />
    </>
  );
}
