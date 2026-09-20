import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FinalPush } from "@/components/conversion/FinalPush";
import { HeroSocialProof, TestimonialsSection } from "@/components/conversion/TestimonialsSection";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { cta, trialAppUrl } from "@/lib/cta";

export const dynamic = "force-static";
import { pageMeta } from "@/lib/seo";
import { pricingCopy, site, trialCopy } from "@/lib/site";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { FaqPageLd } from "@/components/seo/FaqPageLd";

const pageUrl = `${site.url}/securite`;

const trialCtaUrl = trialAppUrl({
  vertical: "security",
  source: "landing_securite",
});

const demoCtaUrl = `${cta.demo}?source=landing_securite`;

const securityFaq = [
  {
    q: "Qu'est-ce que PROGESTI apporte aux sociétés de sécurité ?",
    a: "Un outil métier pour planifier vos vacations, gérer vos agents et sites, pointer les prises de poste et facturer vos clients. Tout au même endroit — sans Excel ni WhatsApp.",
  },
  {
    q: "Puis-je tester avant de m'engager ?",
    a: `Oui. Essai ${site.trialDays} jours gratuit, sans carte bancaire. Vous testez sur vos vrais sites et agents.`,
  },
  {
    q: "Comment mes agents pointent-ils leur prise de poste ?",
    a: "Ils utilisent l'app mobile (Android/iOS). Arrivée, départ, géolocalisation si activée. Les données remontent au bureau en temps réel.",
  },
  {
    q: "PROGESTI gère-t-il le planning multi-sites avec différentes vacations ?",
    a: "Oui. Vous définissez la fréquence et les créneaux de chaque site, affectez vos agents, et le planning se répète automatiquement. Remplacements et absences au même endroit.",
  },
  {
    q: "Puis-je facturer à partir du réalisé terrain ?",
    a: "Oui. Le planning et le pointage alimentent directement la facturation. Vous facturez ce qui a été fait, sans double saisie.",
  },
  {
    q: "Combien coûte PROGESTI ?",
    a: "Gratuit pour indépendants (1 admin, tous modules). Pro 49,99 € HT/mois (5 utilisateurs), Premium 99,99 € HT/mois (20 utilisateurs). Mise en place offerte.",
  },
  {
    q: "Comment suivre les informations CNAPS de mes agents ?",
    a: "Les fiches agents permettent de centraliser les informations réglementaires (numéro CNAPS, dates de validité). Vous gardez la main sur le suivi de conformité.",
  },
  {
    q: "Le support comprend-il le métier sécurité ?",
    a: `Oui. Équipe FR joignable au ${site.phone}, basée à Toulouse (31).`,
  },
] as const;

const breadcrumbs = [
  { label: "Accueil", href: "/" },
  { label: "Sécurité & Gardiennage" },
];

export const metadata: Metadata = pageMeta({
  title: "Logiciel sécurité & gardiennage — Planning, pointage, facturation",
  description: `Logiciel pour sociétés de sécurité et gardiennage : planning vacations, prise de poste mobile, gestion agents et sites, facturation. ${trialCopy.metaSuffix}`,
  path: "/securite",
  openGraph: {
    title: "Logiciel sécurité & gardiennage — Planning, pointage, facturation",
    description: `Logiciel pour sociétés de sécurité et gardiennage : planning vacations, prise de poste mobile, gestion agents et sites, facturation. ${trialCopy.metaSuffix}`,
  },
});

function HandMark({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-lime-cta ${className}`} viewBox="0 0 180 12" fill="none" aria-hidden>
      <path
        d="M2 8C28 2 52 10 78 5C104 1 132 9 158 4C166 3 174 5 178 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function SecurityLandingPage() {
  return (
    <>
      <SoftwareApplicationLd url={pageUrl} />
      <FaqPageLd items={[...securityFaq]} />

      <section className="industry-hero-bg relative overflow-hidden">
        <div className="container relative grid items-center gap-8 pb-9 pt-7 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-10 lg:pb-11 lg:pt-6">
          <div className="industry-hero-rise relative z-10">
            <Breadcrumb items={breadcrumbs} dark />
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-lime-cta/90">
              Logiciel sécurité · France · prix public
            </p>
            <h1 className="font-sans text-[1.85rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-white md:text-[2.25rem] lg:text-[2.4rem]">
              <span className="block text-balance">Logiciel pour sociétés de sécurité</span>
              <span className="mt-2 block max-w-[22ch] text-[1.05rem] font-semibold leading-snug tracking-normal text-white/75 md:text-[1.2rem] lg:text-[1.3rem]">
                Planning vacations, prise de poste, facturation — sans tableur ni chaos
              </span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/75 md:text-[1.05rem]">
              Vous gérez des agents sur plusieurs sites, des vacations de jour comme de nuit, des remplacements urgents ? PROGESTI centralise tout : du planning à la facture, avec preuves terrain.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink
                href={trialCtaUrl}
                size="lg"
                variant="trial"
                className="!rounded-[2px] !px-8 !py-3.5 !text-[1.05rem] !font-bold sm:w-auto"
                event="trial_start"
                eventPayload={{ cta: "securite_hero_trial" }}
              >
                Créer mon espace
              </ButtonLink>
              <ButtonLink
                href={demoCtaUrl}
                size="lg"
                variant="outline-white"
                className="!rounded-[2px] !border-white/40 !px-8 !py-3.5 !text-[1.05rem] !font-bold sm:w-auto"
                eventPayload={{ cta: "securite_hero_demo" }}
              >
                Demander une démo
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-white/55">
              Sans carte bancaire · {pricingCopy.from} · Gratuit, Pro ou Premium
            </p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Points de confiance">
              {[
                "Planning vacations",
                `Essai ${site.trialDays} j · sans CB`,
                "Prix public · pas de devis",
                `Support FR · ${site.company.city}`,
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-[2px] border border-white/15 bg-white/8 px-2.5 py-1 text-[11px] font-bold text-white/90 sm:text-xs"
                >
                  {item}
                </li>
              ))}
            </ul>
            <HeroSocialProof />
          </div>

          <div className="industry-hero-rise industry-hero-rise-delay relative">
            <a
              href={demoCtaUrl}
              className="group relative block overflow-hidden rounded-[2px] shadow-[0_32px_90px_rgba(0,0,0,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A8E300]"
              aria-label="Voir une démo PROGESTI"
              rel="noopener noreferrer"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src="/hero-planning.webp"
                  alt="Planning des vacations de sécurité"
                  fill
                  priority
                  className="object-cover object-[center_22%] transition duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 680px"
                  quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/45 to-transparent" />

                <span className="industry-play absolute left-1/2 top-[38%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 md:top-[40%]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-[2px] bg-lime-cta text-brand-navy shadow-[0_14px_44px_rgba(0,0,0,0.45)] transition group-hover:scale-105 md:h-16 md:w-16">
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-7 w-7 fill-current" aria-hidden>
                      <path d="M8 5v14l11-7L8 5Z" />
                    </svg>
                  </span>
                  <span className="rounded-[2px] bg-brand-navy/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white md:text-xs">
                    Voir l&apos;application
                  </span>
                </span>

                <div className="absolute inset-x-5 bottom-4 sm:inset-x-7 sm:bottom-5">
                  <p className="max-w-lg font-sans text-[1.5rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-white sm:text-[1.9rem] md:text-[2.25rem]">
                    <span className="text-lime-cta">«</span> De la vacation à la{" "}
                    <span className="text-lime-cta">facture</span>{" "}
                    <span className="text-lime-cta">»</span>
                  </p>
                  <p className="mt-1 text-sm text-white/85">Gardiennage, événementiel, sites sensibles</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="container flex flex-col gap-3.5 py-3.5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <p className="text-sm font-semibold text-white md:text-[0.95rem]">
              <span className="text-lime-cta">PROGESTI</span>
              <span className="text-white/35"> — </span>
              Conçu pour les sociétés de sécurité françaises
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-white/70">
              {[
                `Essai ${site.trialDays} jours`,
                "Sans carte bancaire",
                "Gratuit pour indépendants",
              ].map((item) => (
                <li key={item} className="font-bold text-lime-cta">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="industry-hero-wave -mt-px bg-[var(--warm-light)]" aria-hidden />

      <section className="section relative bg-white" id="produit">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Explorer produit</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-[3.1rem] md:leading-[1.05]">
                Vous gérez une société de sécurité. Pas un tableur.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate md:text-lg md:leading-relaxed">
                Plannings sur Excel. Prises de poste par SMS. Absences gérées au téléphone. Facturation de mémoire. PROGESTI remplace ce chaos : un seul outil pour planifier, pointer et facturer — sans retaper, sans oublier.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Planning vacations",
                text: "Affectez vos agents aux sites par créneaux. Jour, nuit, week-end — les récurrences se répètent sans reconstruire la semaine.",
                href: "/fonctionnalites/planification",
              },
              {
                title: "Prise de poste mobile",
                text: "Vos agents pointent sur l'app mobile. Arrivée, départ, géoloc — le bureau voit le terrain en temps réel.",
                href: "/fonctionnalites/pointage",
              },
              {
                title: "Gestion agents & CNAPS",
                text: "Fiches agents avec infos réglementaires. Centralisez numéros CNAPS, dates de validité, qualifications.",
                href: "/fonctionnalites/gestion-rh",
              },
              {
                title: "Clients & sites",
                text: "Fiches clients, sites rattachés, consignes d'accès. Une seule vérité pour l'équipe.",
                href: "/fonctionnalites/clients",
              },
              {
                title: "Facturation sans ressaisie",
                text: "Le planning et le pointage alimentent la facturation. Facturez ce qui a été fait, sans oubli.",
                href: "/fonctionnalites/facturation",
              },
              {
                title: "Remplacements & absences",
                text: "Gérez les imprévus au même endroit que le planning. Trouvez un remplaçant sans appeler tout le monde.",
                href: "/fonctionnalites/gestion-rh",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delayMs={i * 50}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-[2px] border border-line bg-paper p-6 transition hover:border-brand-navy/20 hover:shadow-md"
                >
                  <h3 className="font-display text-lg font-bold text-ink group-hover:text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{item.text}</p>
                  <span className="mt-4 text-sm font-semibold text-brand-navy group-hover:underline">
                    En savoir plus →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex flex-col items-center gap-3 text-center md:mt-14">
              <ButtonLink
                href={trialCtaUrl}
                size="lg"
                variant="trial"
                className="!rounded-[2px] !px-8"
                event="trial_start"
                eventPayload={{ cta: "securite_features_trial" }}
              >
                Créer mon espace
              </ButtonLink>
              <p className="text-sm text-slate">Sans carte bancaire · {pricingCopy.from}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-paper py-14 md:py-20">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-extrabold md:text-3xl">
                Le terrain remonte tout seul
              </h2>
              <p className="mt-3 text-slate">
                Prise de poste mobile · géoloc · statuts live — le bureau voit sans harceler le téléphone.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="relative mx-auto mt-12 max-w-5xl">
              <div className="absolute -inset-6 rounded-[2px] bg-[radial-gradient(circle_at_30%_40%,rgba(184,240,0,0.08)_0%,transparent_55%),radial-gradient(circle_at_80%_70%,rgba(15,36,56,0.04)_0%,transparent_50%)] opacity-90" />
              <div className="relative overflow-hidden rounded-[2px] border border-line shadow-[0_28px_80px_rgba(1,41,57,0.08)]">
                <Image
                  src="/screen-telegestion.webp"
                  alt="Pointage PROGESTI — prise de poste agents de sécurité"
                  width={4320}
                  height={2700}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 960px"
                  quality={95}
                />
              </div>
              <div className="absolute -bottom-3 left-3 z-10 rotate-[-2deg] transition-transform duration-300 hover:rotate-0 md:-bottom-4 md:left-8">
                <div className="rounded-[2px] border border-line bg-white px-3 py-2 shadow-[0_14px_36px_rgba(15,36,56,0.08)] md:px-4 md:py-2.5">
                  <p className="text-xs font-bold text-ink md:text-sm">2 agents sur site</p>
                  <p className="text-[11px] text-slate">Prise de poste · 22:00</p>
                </div>
              </div>
              <div className="absolute bottom-8 right-4 z-10 rounded-[2px] bg-lime-cta px-3 py-1.5 text-xs font-extrabold text-ink shadow-md md:bottom-12 md:right-6 md:text-sm">
                Poste validé ✓
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <TestimonialsSection limit={4} />

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-extrabold md:text-4xl">
              Conçu avec le métier — pas une usine à logiciels
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center font-display text-xl italic leading-snug text-ink/90 md:text-2xl">
              « Fait par des gens du terrain, pas par une usine à logiciels. »
            </p>
            <div className="mx-auto mt-2 flex justify-center">
              <HandMark className="h-3 w-44" />
            </div>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3 md:gap-5">
            {[
              {
                title: "Prix public",
                text: "Gratuit pour indépendants. Pro et Premium pour les équipes. Tous modules inclus.",
              },
              {
                title: "Tout inclus",
                text: "Planning, pointage, devis, factures, impayés, RH, tableaux de bord — sans module payant en plus.",
              },
              {
                title: "Support FR",
                text: `${site.phone} · équipe MSNE SAS à Toulouse (31), qui parle le terrain.`,
              },
            ].map((item, i) => (
              <Reveal key={item.title} delayMs={i * 70}>
                <div className="industry-card-lift h-full rounded-[2px] border border-line bg-paper p-6 text-center md:text-left">
                  <p className="font-display text-xl font-extrabold text-ink">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate md:text-[15px]">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper py-16 md:py-20">
        <div className="container relative max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Support humain</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
              Vous avez le terrain.{" "}
              <span className="relative inline-block">
                On a votre dos.
                <HandMark className="absolute -bottom-1 left-0 h-2.5 w-full" />
              </span>
            </h2>
            <p className="mt-5 text-lg text-slate">
              Support FR inclus — joignable au{" "}
              <a href={`tel:${site.phoneTel}`} className="font-bold text-ink underline-offset-4 hover:underline">
                {site.phone}
              </a>
              .
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={trialCtaUrl}
                size="lg"
                variant="trial"
                className="!px-8"
                event="trial_start"
                eventPayload={{ cta: "securite_support_trial" }}
              >
                Créer mon espace
              </ButtonLink>
              <ButtonLink
                href={demoCtaUrl}
                size="lg"
                variant="secondary"
                className="!rounded-[2px]"
                eventPayload={{ cta: "securite_support_demo" }}
              >
                Parler à l&apos;équipe
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white" id="tarifs">
        <div className="container max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Tarifs publics · tout inclus</p>
            <h2 className="mt-3 font-display text-5xl font-extrabold tracking-tight md:text-6xl">
              <span>Gratuit</span>
              <span className="ml-2 text-2xl font-bold text-slate md:text-3xl">HT / mois</span>
            </h2>
            <p className="mt-3 text-lg text-slate">Gratuit, Pro ou Premium · Tous les modules · Pas de surprise</p>
            <p className="mt-2 text-sm text-slate">
              Annuel = 2 mois offerts. Voir les{" "}
              <Link href="/tarifs" className="link-accent font-bold">
                tarifs Gratuit / Pro / Premium
              </Link>
            </p>
            <ul className="mx-auto mt-8 max-w-md space-y-2 text-left text-sm text-slate">
              {[
                "Planning, pointage, devis, facturation, impayés, RH",
                "Clients & sites illimités",
                `Essai ${site.trialDays} jours sans carte bancaire`,
              ].map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="font-bold text-lime-cta" aria-hidden>
                    ✓
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={trialCtaUrl}
                size="lg"
                variant="trial"
                className="!px-8"
                event="trial_start"
                eventPayload={{ cta: "securite_pricing_trial" }}
              >
                Créer mon espace
              </ButtonLink>
              <ButtonLink
                href="/tarifs"
                size="lg"
                variant="secondary"
                className="!rounded-[3px]"
                eventPayload={{ cta: "securite_pricing_detail" }}
              >
                Détail des tarifs
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white pb-28 lg:pb-16" id="faq" data-cta-sticky-safe>
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold">FAQ</h2>
          <p className="mt-3 text-slate">
            Une autre question ?{" "}
            <Link href="/contact" className="font-semibold text-green-deep hover:underline">
              Contactez-nous
            </Link>
            {" · "}
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-green-deep hover:underline">
              {site.phone}
            </a>
          </p>
          <div className="mt-8">
            <IndustryFaq items={securityFaq} />
          </div>
        </div>
      </section>

      <FinalPush />
      <MobileCtaBar />
    </>
  );
}
