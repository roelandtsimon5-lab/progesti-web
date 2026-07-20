import Image from "next/image";
import Link from "next/link";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { PricingTable } from "@/components/pricing/PricingTable";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { getAllPosts, getCategoryLabel } from "@/lib/blog";
import { faqItems, modules, solutions } from "@/lib/site";
import { cta } from "@/lib/cta";

/** Différenciateurs vs marché (Propret 14j, ERP sur devis, etc.) */
const proofBar = [
  { value: "2 mois", label: "d’essai sans CB" },
  { value: "29,99 €", label: "HT/mois dès Starter" },
  { value: "11", label: "modules inclus" },
  { value: "0 €", label: "frais d’installation" },
];

const pains = [
  {
    title: "Planning Excel + WhatsApp",
    text: "Absences, backups et multi-sites gérés au fil des messages — sites orphelins, heures perdues.",
  },
  {
    title: "Preuves terrain dispersées",
    text: "Photos et bons d’intervention dans 4 apps différentes. Impossible de répondre vite à un syndic.",
  },
  {
    title: "Facturation en retard",
    text: "Ressaisie manuelle du réalisé. Relances, litiges d’heures, trésorerie qui traîne.",
  },
];

const outcomes = [
  {
    title: "Planifier",
    text: "Sites, fréquences, agents et remplacements sur un planning métier — code couleur, vision claire.",
  },
  {
    title: "Pointer",
    text: "App mobile : prise de service, géoloc, bons d’intervention. La preuve terrain centralisée.",
  },
  {
    title: "Facturer",
    text: "Du réalisé à la facture sans double saisie. Devis, contrats, suivi client au même endroit.",
  },
  {
    title: "Piloter",
    text: "RH, prépaie, stock, tableaux de bord — une seule source de vérité pour décider.",
  },
];

const whyUs = [
  {
    title: "Essai 2 mois — pas 14 jours",
    text: "Chez la plupart des concurrents, l’essai dure 2 semaines. Chez PROGESTI : 2 mois complets, sans carte bancaire, pour vraiment tester sur votre activité.",
  },
  {
    title: "Prix public, tout inclus",
    text: "Dès 29,99 € HT/mois. Aucun module payant en plus. Pas de devis opaque, pas de frais d’installation.",
  },
  {
    title: "Fait pour le métier",
    text: "Bureaux, syndics, commerces, fin de chantier : le vocabulaire de la propreté, pas un ERP générique.",
  },
  {
    title: "Mise en place offerte",
    text: "Cloud + Android & iOS. Résiliable. Support FR. Vous démarrez sans usine à gaz.",
  },
];

export function HomeValidated() {
  const univers = solutions.filter((s) => s.slug !== "auto-entrepreneurs");
  const latestPosts = getAllPosts().slice(0, 3);
  const featuredModules = modules.slice(0, 8);

  return (
    <>
      {/* ── HERO type Propret/Jobber : bénéfice + produit + CTA ── */}
      <section className="relative overflow-hidden bg-[#F5F8FB]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(31,168,107,0.14),transparent)]"
          aria-hidden
        />
        <div className="container relative grid items-center gap-10 pb-12 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-16 lg:pt-16">
          <div className="anim-rise">
            <p className="inline-flex items-center gap-2 rounded-full border border-green-action/25 bg-green-action/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-deep">
              Logiciel entreprises de nettoyage
            </p>
            <h1 className="mt-5 font-display text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-blue-deep md:text-[3.15rem]">
              Le logiciel qui simplifie votre société de propreté
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
              Centralisez planning, pointage terrain, RH et facturation. Remplacez Excel et WhatsApp
              par un outil pensé pour le ménage professionnel.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink
                href={cta.trialApp}
                size="lg"
                event="trial_start"
                eventPayload={{ cta: "v3_home_hero_trial" }}
              >
                Essai gratuit 2 mois
              </ButtonLink>
              <ButtonLink
                href={cta.demo}
                size="lg"
                variant="secondary"
                eventPayload={{ cta: "v3_home_hero_demo" }}
              >
                Voir la démo
              </ButtonLink>
            </div>

            <p className="mt-5 text-sm font-medium text-slate">
              <span className="text-green-deep">✓</span> Sans carte bancaire{" "}
              <span className="mx-2 text-blue-mist">·</span>
              <span className="text-green-deep">✓</span> Dès{" "}
              <strong className="text-blue-deep">29,99 € HT/mois</strong>{" "}
              <span className="mx-2 text-blue-mist">·</span>
              <span className="text-green-deep">✓</span> Tous modules inclus
            </p>
          </div>

          <div className="anim-rise-delay relative">
            <div className="overflow-hidden rounded-2xl border border-blue-mist/80 bg-white shadow-[0_28px_80px_rgba(11,61,110,0.14)]">
              <Image
                src="/dashboard-mockup-opt.webp"
                alt="Interface PROGESTI — planning et suivi d’activité nettoyage"
                width={900}
                height={560}
                priority
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 flex flex-wrap justify-center gap-2 sm:left-auto sm:right-6 sm:justify-end">
              <span className="rounded-lg bg-blue-deep px-3 py-2 text-xs font-bold text-white shadow-lg">
                App agents Android & iOS
              </span>
              <span className="rounded-lg bg-white px-3 py-2 text-xs font-bold text-blue-deep shadow-lg ring-1 ring-blue-mist">
                Cloud · sans installation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof bar (chiffres concrets = pattern Jobber/Propret) ── */}
      <section className="border-y border-blue-mist bg-white">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-4">
          {proofBar.map((item) => (
            <div key={item.label} className="text-center md:text-left">
              <p className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Douleurs (pattern CleanGuru / Housecall) ── */}
      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Le problème</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-blue-deep md:text-4xl">
              Ce qui freine les entreprises de nettoyage au quotidien
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pains.map((p, i) => (
              <Reveal key={p.title} delayMs={i * 70}>
                <div className="border-t-2 border-blue-royal pt-5">
                  <h3 className="font-display text-lg font-bold text-blue-deep">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution parcours ── */}
      <section className="section bg-[#F5F8FB]">
        <div className="container">
          <Reveal>
            <p className="eyebrow">La solution PROGESTI</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-blue-deep md:text-4xl">
              Du planning à la facture, sans double saisie
            </h2>
            <p className="lead mt-4">
              Comme les logiciels qui performent sur le marché propreté : tout relié — terrain,
              bureau, client.
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o, i) => (
              <Reveal key={o.title} delayMs={i * 60}>
                <li className="rounded-xl bg-white p-6 shadow-[0_8px_30px_rgba(11,61,110,0.06)] ring-1 ring-blue-mist/60">
                  <span className="font-display text-sm font-extrabold text-green-deep">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-blue-deep">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{o.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12 overflow-hidden rounded-2xl border border-blue-mist bg-white shadow-[0_20px_60px_rgba(11,61,110,0.1)]">
            <Image
              src="/hero-mockup-opt.webp"
              alt="PROGESTI — vue produit planning et interventions"
              width={1200}
              height={700}
              className="h-auto w-full"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* ── Pourquoi nous (angle concurrentiel) ── */}
      <section className="section bg-blue-deep text-white">
        <div className="container">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#B8F5D4]">
              Pourquoi PROGESTI
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-white md:text-4xl">
              Ce que le marché promet — avec un essai 4× plus long
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Même logique que les leaders (prix public, tout inclus, cloud) — avec{" "}
              <strong className="text-white">2 mois d’essai</strong> au lieu de 14 jours, pour
              valider sur vos vrais sites.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delayMs={i * 50}>
                <div className="rounded-xl border border-white/25 bg-white/10 p-6">
                  <h3 className="font-display text-lg font-bold text-white">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink
              href={cta.trialApp}
              size="lg"
              event="trial_start"
              eventPayload={{ cta: "v3_home_why_trial" }}
            >
              Démarrer l’essai 2 mois
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ── Modules (grille type Propret) ── */}
      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Fonctionnalités</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
              Un logiciel tout-en-un pour la propreté
            </h2>
            <p className="lead mt-4">
              11 modules inclus dans chaque offre — pas de surprise à la facture.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredModules.map((m, i) => (
              <Reveal key={m.slug} delayMs={i * 30}>
                <li>
                  <Link
                    href={`/fonctionnalites/${m.slug}`}
                    className="group block h-full rounded-xl border border-blue-mist bg-[#F5F8FB] p-5 transition hover:border-blue-royal hover:bg-white hover:shadow-[0_12px_36px_rgba(11,61,110,0.08)]"
                  >
                    <h3 className="font-display text-base font-bold text-blue-deep group-hover:text-blue-royal">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate">{m.short}</p>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              href="/fonctionnalites"
              className="font-display text-sm font-bold text-blue-royal underline-offset-4 hover:underline"
            >
              Voir les 11 modules →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Segments (liens typo, style Kliner « pour qui ») ── */}
      <section className="section bg-[#F5F8FB]">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Pour qui</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
              Adapté à votre type de prestations
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-blue-mist border-y border-blue-mist">
            {univers.map((s, i) => (
              <Reveal key={s.slug} delayMs={i * 40}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group flex flex-col gap-2 py-6 transition sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                >
                  <div>
                    <h3 className="font-display text-xl font-bold text-blue-deep group-hover:text-blue-royal">
                      {s.title}
                    </h3>
                    <p className="mt-1 max-w-xl text-sm text-slate">{s.lead}</p>
                  </div>
                  <span className="shrink-0 font-display text-sm font-bold text-green-deep">
                    Découvrir →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tarifs (transparence = levier Propret) ── */}
      <section className="section bg-white" id="tarifs">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Tarifs publics</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
              Dès 29,99 € HT/mois — tout inclus
            </h2>
            <p className="lead mt-4">
              Starter, Pro ou Premium. Mêmes modules. Essai 2 mois sans CB. Sans engagement long.
            </p>
          </Reveal>
          <div className="mt-12">
            <PricingTable />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink
              href={cta.trialApp}
              size="lg"
              event="trial_start"
              eventPayload={{ cta: "v3_home_pricing_trial" }}
            >
              Essai gratuit 2 mois
            </ButtonLink>
            <ButtonLink
              href="/tarifs"
              size="lg"
              variant="secondary"
              eventPayload={{ cta: "v3_home_pricing_detail" }}
            >
              Détail des offres
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ── Comment démarrer (3 steps Propret) ── */}
      <section className="section bg-[#F5F8FB]">
        <div className="container max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow">Mise en place</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
              Opérationnel en quelques minutes
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 text-left md:grid-cols-3">
            {[
              {
                n: "1",
                t: "Créez votre compte",
                d: "Essai 2 mois, sans carte. Accès immédiat à tous les modules.",
              },
              {
                n: "2",
                t: "Paramétrez vos sites",
                d: "Clients, sites, agents, fréquences — avec données de démo pour partir vite.",
              },
              {
                n: "3",
                t: "Pilotez le terrain",
                d: "Planning, pointage mobile, facturation. On vous accompagne si besoin.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delayMs={i * 60}>
                <li>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-action font-display text-lg font-extrabold text-white">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-blue-deep">{s.t}</h3>
                  <p className="mt-2 text-sm text-slate">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12">
            <ButtonLink
              href={cta.trialApp}
              size="lg"
              event="trial_start"
              eventPayload={{ cta: "v3_home_steps_trial" }}
            >
              Créer mon essai gratuit
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      {latestPosts.length > 0 ? (
        <section className="section bg-white">
          <div className="container">
            <Reveal>
              <p className="eyebrow">Ressources</p>
              <h2 className="mt-3 text-3xl font-extrabold text-blue-deep">
                Guides pour piloter une entreprise de propreté
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {latestPosts.map((post, i) => (
                <Reveal key={post.slug} delayMs={i * 40}>
                  <li>
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <p className="text-xs font-bold uppercase tracking-wide text-green-deep">
                        {getCategoryLabel(post.category)}
                      </p>
                      <h3 className="mt-2 font-display text-lg font-bold text-blue-deep group-hover:text-blue-royal">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-slate">{post.excerpt}</p>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
            <p className="mt-8">
              <Link
                href="/blog"
                className="font-display text-sm font-bold text-blue-royal hover:underline"
              >
                Voir le blog →
              </Link>
            </p>
          </div>
        </section>
      ) : null}

      {/* ── FAQ ── */}
      <section className="section bg-[#F5F8FB]">
        <div className="container max-w-3xl">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep">Questions fréquentes</h2>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={faqItems.slice(0, 6)} />
          </div>
          <p className="mt-6">
            <Link href="/faq" className="text-sm font-bold text-blue-royal hover:underline">
              Toute la FAQ →
            </Link>
            {" · "}
            <Link
              href="/alternative-propret"
              className="text-sm font-bold text-blue-royal hover:underline"
            >
              Alternative à Propret →
            </Link>
          </p>
        </div>
      </section>

      <ConversionBlock variant="essai" />

      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCtaBar />
    </>
  );
}
