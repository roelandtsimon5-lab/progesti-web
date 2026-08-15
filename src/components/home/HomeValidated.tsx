import Image from "next/image";
import Link from "next/link";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { getAllPosts, getCategoryLabel } from "@/lib/blog";
import { faqItems, plans, planInclusions, formatEuro } from "@/lib/site";
import { cta } from "@/lib/cta";

const pains = [
  {
    title: "Planning Excel + WhatsApp",
    text: "Absences, backups et multi-sites gérés au fil des messages. Sites orphelins, heures perdues.",
  },
  {
    title: "Preuves dans 4 apps",
    text: "Photos et bons d'intervention dispersés. Impossible de répondre vite à un syndic ou un client.",
  },
  {
    title: "Factures en retard",
    text: "Ressaisie manuelle du réalisé. Relances, litiges d'heures, trésorerie qui traîne.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Planifier",
    text: "Sites, fréquences, agents et remplacements sur un planning métier. Code couleur, vision claire.",
    image: "/passages-mockup.png",
    alt: "Interface Progesti — liste des passages et missions de nettoyage",
  },
  {
    step: "02",
    title: "Pointer",
    text: "App mobile : prise de service, géoloc, bons d'intervention. La preuve terrain centralisée.",
    image: "/telegestion-mockup.png",
    alt: "Interface Progesti — télégestion et pointage des agents",
  },
  {
    step: "03",
    title: "Facturer",
    text: "Du réalisé à la facture sans double saisie. Devis, contrats, suivi client au même endroit.",
    image: "/factures-mockup.png",
    alt: "Interface Progesti — gestion des factures et paiements",
  },
];

export function HomeValidated() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#F5F8FB]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(31,168,107,0.14),transparent)]"
          aria-hidden
        />
        <div className="container relative grid items-center gap-10 pb-12 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-16 lg:pt-16">
          <div className="anim-rise">
            <p className="inline-flex items-center gap-2 rounded-full border border-green-action/25 bg-green-action/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-deep">
              Logiciel pour entreprises de nettoyage
            </p>
            <h1 className="mt-5 font-display text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-blue-deep md:text-[3.15rem]">
              Arrêtez de piloter vos sites sur Excel et WhatsApp.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
              Planning, pointage, facture. Un seul fil, pour le ménage pro. Pas un ERP générique.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink
                href={cta.trialApp}
                size="lg"
                event="trial_start"
                eventPayload={{ cta: "home_hero_trial" }}
              >
                Essayer 2 mois, sans carte
              </ButtonLink>
              <ButtonLink
                href="#workflow"
                size="lg"
                variant="secondary"
                eventPayload={{ cta: "home_hero_product" }}
              >
                Voir le produit
              </ButtonLink>
            </div>

            <p className="mt-5 text-sm font-medium text-slate">
              Dès <strong className="text-blue-deep">29,99 € HT/mois</strong> après l'essai
              <span className="mx-2 text-blue-mist">·</span>
              tous les modules
              <span className="mx-2 text-blue-mist">·</span>
              résiliable
            </p>
          </div>

          <div className="anim-rise-delay relative">
            <div className="overflow-hidden rounded-2xl border border-blue-mist/80 bg-white shadow-[0_28px_80px_rgba(11,61,110,0.14)]">
              <Image
                src="/passages-mockup.png"
                alt="Interface Progesti — planning et suivi des passages de nettoyage"
                width={900}
                height={506}
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

      {/* ── Proof bar ── */}
      <section className="border-y border-blue-mist bg-white">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-4">
          {[
            { value: "2 mois", label: "d'essai sans CB" },
            { value: "29,99 €", label: "HT/mois dès Starter" },
            { value: "11", label: "modules inclus" },
            { value: "0 €", label: "frais d'installation" },
          ].map((item) => (
            <div key={item.label} className="text-center md:text-left">
              <p className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bloc 1 : Le chaos ── */}
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

      {/* ── Bloc 2 : Le fil Planifier → Pointer → Facturer ── */}
      <section id="workflow" className="section bg-[#F5F8FB]">
        <div className="container">
          <Reveal>
            <p className="eyebrow">La solution</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-blue-deep md:text-4xl">
              Planifier → Pointer → Facturer
            </h2>
            <p className="lead mt-4">
              Un fil unique du terrain à la facture. Tout relié, sans ressaisie.
            </p>
          </Reveal>

          <div className="mt-14 space-y-16">
            {workflow.map((w, i) => (
              <Reveal key={w.step} delayMs={i * 80}>
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                    i % 2 === 1 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                    <span className="font-display text-sm font-extrabold text-green-deep">
                      {w.step}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-blue-deep md:text-3xl">{w.title}</h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-slate">{w.text}</p>
                  </div>
                  <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                    <div className="overflow-hidden rounded-2xl border border-blue-mist bg-white shadow-[0_20px_60px_rgba(11,61,110,0.1)]">
                      <Image
                        src={w.image}
                        alt={w.alt}
                        width={800}
                        height={450}
                        className="h-auto w-full"
                        sizes="(max-width: 1024px) 100vw, 600px"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bloc 3 : Cas métier syndic ── */}
      <section className="section bg-blue-deep text-white">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#B8F5D4]">
                Cas métier
              </p>
              <h2 className="mt-3 max-w-lg text-3xl font-extrabold text-white md:text-4xl">
                Syndics & copropriétés : preuves de passage prêtes pour le reporting
              </h2>
              <p className="mt-4 max-w-lg text-lg text-white/90">
                Halls, cages d'escalier, locaux techniques. Vos agents pointent sur l'app, 
                les preuves sont centralisées. Plus besoin de chasser dans la galerie du téléphone 
                pour répondre à un gestionnaire.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Pointage géolocalisé à chaque passage",
                  "Photos et bons d'intervention horodatés",
                  "Export PDF pour le rapport syndic",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/90">
                    <span className="mt-1 text-[#B8F5D4]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink
                  href={cta.trialApp}
                  size="lg"
                  event="trial_start"
                  eventPayload={{ cta: "home_syndic_trial" }}
                >
                  Tester sur vos copropriétés
                </ButtonLink>
              </div>
              <p className="mt-4">
                <Link
                  href="/fonctionnalites"
                  className="text-sm font-bold text-[#B8F5D4] underline-offset-4 hover:underline"
                >
                  Voir toutes les fonctions →
                </Link>
              </p>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="overflow-hidden rounded-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <Image
                  src="/telegestion-mockup.png"
                  alt="Télégestion Progesti — pointage et preuves de passage"
                  width={800}
                  height={450}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Bloc 4 : Tarifs ── */}
      <section className="section bg-white" id="tarifs">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Tarifs</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
              Dès 29,99 € HT/mois — tout inclus
            </h2>
            <p className="lead mt-4">
              Starter, Pro ou Premium : mêmes modules, seul le nombre d'utilisateurs change.
              <br />
              Essai 2 mois sans CB. Résiliable.
            </p>
          </Reveal>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {plans.map((plan, idx) => {
              const isFirst = idx === 0;
              return (
                <article
                  key={plan.id}
                  className={`relative flex flex-col border bg-white p-7 ${
                    isFirst ? "border-green-action border-2" : "border-blue-mist"
                  }`}
                >
                  {isFirst ? (
                    <span className="absolute -top-3 left-6 bg-green-action px-3 py-1 font-display text-xs font-extrabold tracking-wide text-white">
                      Recommandé pour démarrer
                    </span>
                  ) : null}

                  <h3 className="font-display text-2xl font-extrabold text-ink">{plan.name}</h3>
                  <p className="mt-1 text-sm font-medium text-muted">{plan.users}</p>

                  <div className="mt-6">
                    <p className="font-display text-[2.75rem] font-extrabold leading-none text-ink">
                      {formatEuro(plan.monthly)}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-anthracite">HT / mois</p>
                    {plan.perUserHint ? (
                      <p className="mt-1 text-xs text-muted">{plan.perUserHint}</p>
                    ) : null}
                  </div>

                  {isFirst ? (
                    <ul className="mt-7 flex-1 space-y-2.5">
                      {planInclusions.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-anthracite">
                          <span className="mt-0.5 font-bold text-green-deep" aria-hidden>
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-7 flex-1 text-sm text-slate">
                      Tous les modules inclus, comme Starter.
                    </p>
                  )}

                  <div className="mt-8">
                    <ButtonLink
                      href={cta.trialApp}
                      className="w-full !py-3.5"
                      variant={isFirst ? "primary" : "secondary"}
                      event="trial_start"
                      eventPayload={{ plan: plan.id, cta: "home_pricing" }}
                    >
                      Commencer l'essai
                    </ButtonLink>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-center">
            <Link
              href="/tarifs"
              className="font-display text-sm font-bold text-blue-royal underline-offset-4 hover:underline"
            >
              Détail des offres →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Bloc 5 : Qui ── */}
      <section className="section bg-[#F5F8FB]">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Qui sommes-nous</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
              MSNE SAS, Tournefeuille
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              On n'invente pas d'avis. Testez 2 mois sur vos sites.
            </p>
            <p className="mt-4 text-base text-slate">
              Progesti est édité par MSNE SAS, basée près de Toulouse (31). 
              Un logiciel pensé pour les entreprises de propreté, pas un ERP générique reconditionné.
            </p>
          </Reveal>
          <div className="mt-10">
            <ButtonLink
              href={cta.trialApp}
              size="lg"
              event="trial_start"
              eventPayload={{ cta: "home_who_trial" }}
            >
              Démarrer l'essai 2 mois
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ── Blog (max 3 articles) ── */}
      {latestPosts.length > 0 && latestPosts.length <= 3 ? (
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
          </p>
        </div>
      </section>

      {/* ── Bloc 6 : CTA final ── */}
      <ConversionBlock variant="essai" />

      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCtaBar />
    </>
  );
}
