import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { faqItems, modules, mainPlan, trustBadges, site } from "@/lib/site";
import { cta } from "@/lib/cta";

const problemPoints = [
  {
    before: "Planning sur Excel",
    after: "Planning visuel avec affectations",
    icon: "📊",
  },
  {
    before: "Pointage sur papier",
    after: "Pointage mobile géolocalisé",
    icon: "📱",
  },
  {
    before: "Factures Word/Excel",
    after: "Facturation automatisée",
    icon: "📄",
  },
  {
    before: "WhatsApp pour tout",
    after: "Données centralisées",
    icon: "💬",
  },
];

const flowSteps = [
  { label: "Prospects", color: "bg-blue-royal" },
  { label: "Clients", color: "bg-blue-deep" },
  { label: "Devis", color: "bg-blue-royal" },
  { label: "Contrats", color: "bg-blue-deep" },
  { label: "Planning", color: "bg-green-deep" },
  { label: "Pointage", color: "bg-green-action" },
  { label: "Facturation", color: "bg-blue-royal" },
  { label: "Rentabilité", color: "bg-blue-deep" },
];

const targetAudiences = [
  {
    title: "Entreprises de nettoyage",
    description: "Bureaux, locaux professionnels, commerces",
  },
  {
    title: "Sociétés de propreté",
    description: "Multi-sites, syndics, copropriétés",
  },
  {
    title: "Équipes multi-agents",
    description: "Coordination terrain et planning centralisé",
  },
];

const migrationPoints = [
  {
    title: "Accompagnement personnalisé",
    description: "Un interlocuteur dédié vous guide dans la prise en main.",
  },
  {
    title: "Import de vos données",
    description: "Nous vous aidons à reprendre clients, sites et contrats existants.",
  },
  {
    title: "Formation incluse",
    description: "Prise en main rapide pour vous et vos équipes.",
  },
];

export function HomeNew() {
  return (
    <>
      {/* HERO — Full-bleed navy */}
      <section className="relative overflow-hidden bg-blue-deep">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        <div className="container relative grid items-center gap-10 pb-16 pt-12 lg:grid-cols-2 lg:gap-16 lg:pb-20 lg:pt-16">
          <div>
            <p className="mb-6 font-display text-xs font-bold uppercase tracking-[0.18em] text-[#B8F5D4]">
              Tournefeuille · Entreprises de propreté
            </p>
            
            <h1 className="font-display text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-white md:text-[3.25rem] lg:text-[3.5rem]">
              Gérez votre entreprise de nettoyage depuis un seul logiciel.
            </h1>
            
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
              Planning, salariés, clients, pointage terrain, devis et facturation. 
              Tout centralisé pour les entreprises de propreté.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink
                href={cta.demo}
                size="lg"
                eventPayload={{ cta: "home_hero_demo" }}
              >
                Demander une démo
              </ButtonLink>
              <ButtonLink
                href="#produit"
                size="lg"
                variant="outline-white"
                eventPayload={{ cta: "home_hero_scroll" }}
              >
                Voir le produit
              </ButtonLink>
            </div>

            <p className="mt-8 border-l-2 border-[#B8F5D4]/40 pl-4 text-sm italic text-white/70">
              « Fait par des gens du nettoyage, pas par une usine à logiciels. »
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.3)] [transform:perspective(1000px)_rotateY(-3deg)_rotateX(2deg)]">
              <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                <span className="ml-2 text-xs text-white/40">app.progesti.fr</span>
              </div>
              <Image
                src="/screen-passages.webp"
                alt="Interface PROGESTI — Planning des passages"
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

      {/* REASSURANCE BAR */}
      <section className="border-b border-blue-mist/60 bg-white">
        <div className="container grid grid-cols-2 gap-6 py-6 md:grid-cols-4 md:gap-4">
          {trustBadges.map((badge) => (
            <div key={badge.title} className="text-center md:text-left">
              <p className="font-display text-lg font-bold text-blue-deep">{badge.title}</p>
              <p className="mt-0.5 text-sm text-slate">{badge.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM SECTION — Aujourd'hui vs Avec PROGESTI */}
      <section className="section bg-paper" id="produit">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-extrabold text-blue-deep md:text-4xl">
                Votre entreprise ne devrait pas être gérée avec 5 logiciels différents.
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6">
                <h3 className="font-display text-lg font-bold text-red-800">Aujourd'hui</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3 text-slate">
                    <span className="mt-0.5 text-red-400">✗</span>
                    <span>Planning sur Excel</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate">
                    <span className="mt-0.5 text-red-400">✗</span>
                    <span>Pointage sur papier</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate">
                    <span className="mt-0.5 text-red-400">✗</span>
                    <span>Factures Word/Excel</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate">
                    <span className="mt-0.5 text-red-400">✗</span>
                    <span>WhatsApp pour tout coordonner</span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="rounded-2xl border-2 border-green-action/30 bg-white p-6 shadow-[0_8px_30px_rgba(31,168,107,0.08)]">
                <h3 className="font-display text-lg font-bold text-green-deep">Avec PROGESTI</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3 text-slate">
                    <span className="mt-0.5 text-green-action">✓</span>
                    <span>Planning visuel avec affectations</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate">
                    <span className="mt-0.5 text-green-action">✓</span>
                    <span>Pointage mobile géolocalisé</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate">
                    <span className="mt-0.5 text-green-action">✓</span>
                    <span>Facturation automatisée</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate">
                    <span className="mt-0.5 text-green-action">✓</span>
                    <span>Données centralisées</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MODULES SECTION */}
      <section className="section bg-[#F7FAFC]">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Fonctionnalités</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
              Tous les modules inclus
            </h2>
            <p className="lead mt-4">
              Planning, pointage, facturation et plus — sans supplément.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => (
              <Reveal key={m.slug} delayMs={i * 40}>
                <li className="group rounded-xl border border-blue-mist/60 bg-white p-6 transition hover:border-blue-royal/30 hover:shadow-[0_8px_30px_rgba(11,61,110,0.06)]">
                  <h3 className="font-display text-lg font-bold text-blue-deep">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{m.short}</p>
                </li>
              </Reveal>
            ))}
          </ul>

          <p className="mt-10 text-center">
            <Link
              href="/fonctionnalites"
              className="font-display text-sm font-bold text-blue-royal hover:underline"
            >
              Découvrir toutes les fonctionnalités →
            </Link>
          </p>
        </div>
      </section>

      {/* VISUAL SECTIONS - Planning */}
      <section className="section bg-white">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="eyebrow">Planning</p>
              <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
                Visualisez et gérez vos passages
              </h2>
              <p className="mt-4 text-lg text-slate">
                Affectez vos agents aux sites, gérez les récurrences et 
                suivez les passages validés en temps réel.
              </p>
              <ul className="mt-6 space-y-3">
                {["Vue calendrier par agent ou par site", "Gestion des récurrences", "Statuts en temps réel"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate">
                    <span className="mt-0.5 text-green-action">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="overflow-hidden rounded-2xl border border-blue-mist/60 shadow-[0_16px_50px_rgba(11,61,110,0.1)]">
              <Image
                src="/screen-passages.webp"
                alt="Interface Planning PROGESTI"
                width={700}
                height={440}
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISUAL SECTIONS - Télégestion */}
      <section className="section bg-[#F7FAFC]">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal delayMs={100} className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-blue-mist/60 shadow-[0_16px_50px_rgba(11,61,110,0.1)]">
              <Image
                src="/screen-telegestion.webp"
                alt="Interface Télégestion PROGESTI"
                width={700}
                height={440}
                className="h-auto w-full"
              />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <div>
              <p className="eyebrow">Pointage & Télégestion</p>
              <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
                Suivez le terrain en temps réel
              </h2>
              <p className="mt-4 text-lg text-slate">
                Vos agents pointent via l'app mobile. Départ, arrivée, 
                géolocalisation — tout remonte automatiquement.
              </p>
              <ul className="mt-6 space-y-3">
                {["Pointage mobile Android & iOS", "Géolocalisation des interventions", "Historique complet"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate">
                    <span className="mt-0.5 text-green-action">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISUAL SECTIONS - Facturation */}
      <section className="section bg-white">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="eyebrow">Facturation</p>
              <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
                Du devis à la facture sans ressaisie
              </h2>
              <p className="mt-4 text-lg text-slate">
                Créez vos devis, convertissez-les en contrats, puis en factures. 
                Le réalisé terrain alimente automatiquement la facturation.
              </p>
              <ul className="mt-6 space-y-3">
                {["Devis professionnels", "Conversion devis → contrat → facture", "Suivi des impayés"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate">
                    <span className="mt-0.5 text-green-action">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="overflow-hidden rounded-2xl border border-blue-mist/60 shadow-[0_16px_50px_rgba(11,61,110,0.1)]">
              <Image
                src="/screen-factures.webp"
                alt="Interface Facturation PROGESTI"
                width={700}
                height={440}
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FLOW SECTION */}
      <section className="section bg-blue-deep text-white">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#B8F5D4]">
                Un fil unique
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
                Du prospect à la rentabilité, tout est connecté
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Chaque étape alimente la suivante. Plus de ressaisie, plus de données perdues.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {flowSteps.map((step, i) => (
              <Reveal key={step.label} delayMs={i * 50}>
                <div className="flex items-center gap-3">
                  <span className={`rounded-lg ${step.color} px-4 py-2 text-sm font-bold text-white`}>
                    {step.label}
                  </span>
                  {i < flowSteps.length - 1 && (
                    <span className="text-white/40">→</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="section bg-white" id="tarifs">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Tarif unique</p>
              <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
                {mainPlan.monthly} € HT / mois
              </h2>
              <p className="mt-2 text-lg text-slate">
                {mainPlan.users} · Tout inclus (planning, pointage, facturation)
              </p>
              <p className="mt-4 text-sm text-slate">
                Pas 3 logiciels, pas de module en plus. Un seul abonnement, tout compris.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border-2 border-green-action/30 bg-[#FAFCFE] p-8">
              <ul className="grid gap-3 sm:grid-cols-2">
                {mainPlan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 text-green-action">✓</span>
                    <span className="text-slate">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <ButtonLink
                  href={cta.demo}
                  size="lg"
                  eventPayload={{ cta: "home_pricing_demo" }}
                >
                  Demander une démo
                </ButtonLink>
                <Link
                  href="/tarifs"
                  className="font-display text-sm font-bold text-blue-royal hover:underline"
                >
                  Voir le détail →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <section className="section bg-[#F7FAFC]">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Pour qui</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
              Conçu pour les entreprises de nettoyage
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {targetAudiences.map((audience, i) => (
              <Reveal key={audience.title} delayMs={i * 60}>
                <div className="rounded-xl border border-blue-mist/60 bg-white p-6">
                  <h3 className="font-display text-lg font-bold text-blue-deep">
                    {audience.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{audience.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MIGRATION SECTION */}
      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Migration</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
              On vous accompagne dès le départ
            </h2>
            <p className="lead mt-4">
              Pas de promesse d'import magique. Un accompagnement réel.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {migrationPoints.map((point, i) => (
              <Reveal key={point.title} delayMs={i * 60}>
                <div className="border-t-2 border-blue-royal pt-6">
                  <h3 className="font-display text-lg font-bold text-blue-deep">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#F7FAFC]">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep">
              Questions fréquentes
            </h2>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-deep py-16 text-white">
        <div className="container text-center">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#B8F5D4]">
              {site.name}
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold text-white md:text-4xl">
              Prêt à simplifier la gestion de votre entreprise ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/80">
              Demandez une démo et découvrez PROGESTI sur vos cas d'usage réels.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink
                href={cta.demo}
                size="lg"
                eventPayload={{ cta: "home_final_demo" }}
              >
                Demander une démo
              </ButtonLink>
              <ButtonLink
                href={cta.trial}
                size="lg"
                variant="outline-white"
                eventPayload={{ cta: "home_final_trial" }}
              >
                Essai 7 jours gratuit
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-white/60">
              {site.company.legalName} · {site.company.city} · Support FR
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
