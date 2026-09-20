import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalPush } from "@/components/conversion/FinalPush";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import { cta, ctaLabels } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";
import { site, trialCopy, pricingCopy } from "@/lib/site";

const planningFaq = [
  {
    q: "Comment fonctionne le planning multi-sites ?",
    a: "Vous créez vos sites (bureaux, syndics, commerces), définissez les fréquences (quotidien, 2×/semaine, mensuel) et affectez vos agents. Le planning se répète automatiquement — plus besoin de reconstruire chaque semaine.",
  },
  {
    q: "Comment gérer un remplacement de dernière minute ?",
    a: "Dans le même écran que le planning. Vous voyez les agents disponibles, réaffectez le site en quelques clics. L'agent remplaçant reçoit la notification sur l'app mobile.",
  },
  {
    q: "Le planning est-il relié au pointage ?",
    a: "Oui. Ce que vous planifiez, vos agents le pointent sur mobile (arrivée, départ, géoloc). Les données remontent au bureau en temps réel — plus de feuilles papier ni d'heures contestées.",
  },
  {
    q: "Peut-on facturer à partir du planning ?",
    a: "Oui. Le flux planning → pointage → facture est automatique. Ce qui est pointé alimente la facturation, sans double saisie. Voir aussi : logiciel facturation propreté.",
  },
  {
    q: "Combien coûte le module planning ?",
    a: `Le planning est inclus dans toutes les offres (${pricingCopy.plansSummary}). Pas de module payant en plus. Essai ${site.trialDays} jours sans CB.`,
  },
  {
    q: "Le planning fonctionne-t-il sur mobile ?",
    a: "Oui. L'app mobile (Android/iOS) montre le planning de l'agent, permet de pointer arrivée et départ, et remonte les données au bureau.",
  },
] as const;

export const metadata: Metadata = pageMeta({
  title: "Logiciel planning nettoyage — Multi-sites → pointage → facture",
  description: `Planning nettoyage multi-sites : affectez agents et sites, gérez absences et remplacements. Du planning au pointage mobile puis à la facture. Gratuit pour indépendants, ${trialCopy.metaSuffix}`,
  path: "/logiciel-planning-nettoyage",
});

export default function PillarPlanningPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <FaqPageLd items={[...planningFaq]} />
      <IndustryPageHero
        eyebrow="Planning multi-sites"
        title="Logiciel de planning nettoyage : du site à la facture"
        lead={`Affectez agents et sites, gérez absences et remplacements en quelques clics. Le planning alimente le pointage mobile puis la facture — sans double saisie. Gratuit pour indépendants, essai ${site.trialDays} jours sans CB.`}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Logiciel entreprise nettoyage", href: "/logiciel-entreprise-nettoyage" },
          { label: "Planning nettoyage" },
        ]}
        trialEvent="pillar_planning_trial"
        demoEvent="pillar_planning_demo"
      />

      <section className="section bg-white">
        <div className="container grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Pourquoi un planning métier pour la propreté ?
            </h2>
            <p className="mt-4 text-slate">
              Un tableau Excel peut suffire avec trois agents et cinq sites. Mais dès que l&apos;activité grandit — dix sites, des fréquences différentes, des clients exigeants — le bricolage ne tient plus. Les oublis se multiplient, les remplacements se gèrent par SMS, et personne ne sait vraiment qui était où la semaine dernière.
            </p>
            <p className="mt-4 text-slate">
              PROGESTI est un{" "}
              <Link href="/logiciel-entreprise-nettoyage" className="font-semibold text-blue-royal hover:underline">
                logiciel conçu pour les entreprises de nettoyage
              </Link>
              . Le planning n&apos;est pas un module isolé : il est relié au pointage terrain et à la facturation. Ce que vous planifiez, vos agents le pointent sur mobile. Ce qu&apos;ils pointent alimente directement vos factures. Pas de double saisie, pas de fichier parallèle.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Vue semaine par agent ou par site",
                "Fréquences et récurrences automatiques",
                "Remplacements et absences gérés au même endroit",
                "Base pour le pointage mobile et la facturation",
              ].map((b) => (
                <li key={b} className="flex gap-2 text-sm text-slate md:text-base">
                  <span className="font-bold text-lime-cta" aria-hidden>
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={cta.trial} variant="trial" event="trial_start" eventPayload={{ cta: "pillar_planning_trial" }}>
                Essai {site.trialDays} jours
              </ButtonLink>
              <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "pillar_planning_demo" }}>
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delayMs={60}>
            <div className="overflow-hidden rounded-[3px] border border-blue-mist/60 shadow-[0_20px_56px_rgba(11,61,110,0.12)]">
              <Image
                src="/hero-planning.png"
                alt="Planning PROGESTI — vue semaine des passages"
                width={800}
                height={500}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Planning multi-sites : bureaux, syndics, commerces
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate">
              Chaque site a ses contraintes : fréquence de passage, horaires d&apos;accès, interlocuteur sur place. Un logiciel de planning propreté doit gérer cette diversité sans complexité inutile.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal delayMs={0}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Bureaux et tertiaire</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Open spaces, étages multiples, horaires décalés. Planifiez des passages quotidiens ou hebdomadaires selon les besoins du client, avec des créneaux adaptés (tôt le matin, en journée, le soir).
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={50}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Syndics et copropriétés</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Halls, cages d&apos;escalier, locaux poubelles. Gérez plusieurs immeubles avec des fréquences différentes (2× par semaine, mensuel pour les vitres). Gardez l&apos;historique pour répondre aux questions du syndic.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Commerces et locaux pros</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Restaurants, cabinets médicaux, commerces de détail. Des créneaux serrés avant l&apos;ouverture ou après la fermeture, des exigences d&apos;hygiène strictes. Le planning doit être précis et respecté.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Absences et remplacements : réagir sans panique
            </h2>
            <p className="mt-4 text-slate">
              Un agent malade à 6h du matin. Un arrêt de travail qui tombe un vendredi. Une absence prévue qu&apos;on avait oubliée. Dans une entreprise de nettoyage, les imprévus font partie du quotidien.
            </p>
            <p className="mt-4 text-slate">
              Avec PROGESTI, absences et remplacements se gèrent dans le même écran que le planning. Vous voyez immédiatement quels sites sont à découvert, quels agents sont disponibles, et vous réaffectez en quelques clics. Pas besoin de jongler entre un fichier Excel, une messagerie et un planning papier.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Absences prévues</p>
                <p className="mt-2 text-sm text-slate">
                  Congés, formations, rendez-vous : saisissez l&apos;absence à l&apos;avance, le planning s&apos;ajuste et vous alerte si un site reste sans agent.
                </p>
              </div>
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Remplacements de dernière minute</p>
                <p className="mt-2 text-sm text-slate">
                  Maladie ou imprévu le matin même : identifiez rapidement un remplaçant disponible et réaffectez le site sans perdre de temps.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Le flux complet : planning → pointage → facture
            </h2>
            <p className="mt-4 text-slate">
              Le planning n&apos;est pas un outil isolé. C&apos;est le point de départ de toute votre
              chaîne opérationnelle : ce que vous planifiez, vos agents le pointent sur mobile. Ce
              qu&apos;ils pointent alimente directement vos factures.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Reveal delayMs={0}>
              <div className="rounded-[3px] border-2 border-lime-cta/40 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-lime-cta">Étape 1</p>
                <h3 className="mt-1 font-display font-bold text-blue-deep">Planifier</h3>
                <p className="mt-2 text-sm text-slate">
                  Créez sites, affectez agents, définissez fréquences. Le planning se répète
                  automatiquement sans reconstruire chaque semaine.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={50}>
              <div className="rounded-[3px] border-2 border-lime-cta/40 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-lime-cta">Étape 2</p>
                <h3 className="mt-1 font-display font-bold text-blue-deep">Pointer</h3>
                <p className="mt-2 text-sm text-slate">
                  Les agents pointent sur mobile (arrivée, départ, géoloc). Les données remontent au
                  bureau en temps réel. Plus de feuilles papier.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="rounded-[3px] border-2 border-lime-cta/40 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-lime-cta">Étape 3</p>
                <h3 className="mt-1 font-display font-bold text-blue-deep">Facturer</h3>
                <p className="mt-2 text-sm text-slate">
                  Ce qui est pointé alimente la facturation. Facturez le réalisé terrain sans
                  ressaisir, sans oublier un passage.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delayMs={150}>
            <p className="mt-6 text-sm text-slate">
              Voir aussi :{" "}
              <Link
                href="/logiciel-facturation-proprete"
                className="font-semibold text-blue-royal hover:underline"
              >
                logiciel facturation propreté →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Fini le bricolage Excel et WhatsApp
            </h2>
            <p className="mt-4 text-slate">
              Excel a ses mérites : c&apos;est gratuit, flexible, tout le monde sait s&apos;en servir. Mais pour gérer un planning de propreté avec dix, vingt ou trente sites, les limites apparaissent vite.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Avec Excel et WhatsApp</p>
                <ul className="mt-3 space-y-2 text-sm text-slate">
                  <li>• Planning reconstruit chaque semaine</li>
                  <li>• Remplacements gérés par messages</li>
                  <li>• Pas de lien avec le pointage</li>
                  <li>• Facturation manuelle, oublis fréquents</li>
                </ul>
              </div>
              <div className="rounded-[3px] border border-lime-cta/30 bg-lime-cta/5 p-5">
                <p className="font-display font-bold text-ink">Avec PROGESTI</p>
                <ul className="mt-3 space-y-2 text-sm text-slate">
                  <li>• Récurrences automatiques</li>
                  <li>• Absences et remplacements centralisés</li>
                  <li>• Pointage mobile relié au planning</li>
                  <li>• Facturation alignée sur le terrain</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-slate">
              Le passage à un logiciel métier n&apos;est pas une révolution. C&apos;est un gain de temps chaque semaine, moins d&apos;erreurs, et une vision claire de l&apos;activité — pour vous et pour vos clients.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-extrabold text-blue-deep">
              Ce que le planning PROGESTI gère concrètement
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate">
              Pas un simple calendrier partagé. Un outil métier relié au terrain et à la facturation.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            <Reveal delayMs={0}>
              <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Multi-sites & fréquences</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Bureaux, syndics, commerces — tous vos sites. Fréquences quotidiennes, hebdo, mensuel. Récurrences automatiques sans reconstruire.
                </p>
              </li>
            </Reveal>
            <Reveal delayMs={50}>
              <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Statuts live</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  En cours, terminé, retard : le bureau voit l&apos;avancement des passages sans appeler le terrain. Réagissez avant que le client ne remarque.
                </p>
              </li>
            </Reveal>
            <Reveal delayMs={100}>
              <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Relié à la facture</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Ce qui est planifié et pointé alimente la facturation. Facturez le réalisé sans double saisie, sans oubli de passage.
                </p>
              </li>
            </Reveal>
          </ul>
          <Reveal delayMs={150}>
            <p className="mt-8 text-center text-sm text-slate">
              Univers métier :{" "}
              <Link href="/solutions/bureaux" className="font-semibold text-blue-royal hover:underline">
                bureaux
              </Link>
              {" · "}
              <Link href="/solutions/syndics" className="font-semibold text-blue-royal hover:underline">
                syndics
              </Link>
              {" · "}
              <Link href="/solutions/fin-de-chantier" className="font-semibold text-blue-royal hover:underline">
                fin de chantier
              </Link>
              {" · "}
              <Link href="/solutions/auto-entrepreneurs" className="font-semibold text-blue-royal hover:underline">
                auto-entrepreneurs
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Tarifs : planning inclus dans toutes les offres
            </h2>
            <p className="mt-4 text-slate">
              Le planning multi-sites n&apos;est pas un module payant en plus. Il est inclus dans
              chaque offre, avec pointage, facturation et tous les autres modules.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-[3px] border border-blue-mist/70 bg-blue-sky/10 p-5 text-center">
                <p className="font-display text-2xl font-extrabold text-blue-deep">Gratuit</p>
                <p className="text-sm text-slate">1 admin · indépendants</p>
              </div>
              <div className="rounded-[3px] border-2 border-lime-cta bg-lime-cta/10 p-5 text-center">
                <p className="font-display text-2xl font-extrabold text-blue-deep">49,99 €</p>
                <p className="text-sm text-slate">HT/mois · 5 utilisateurs</p>
              </div>
              <div className="rounded-[3px] border border-blue-mist/70 bg-blue-sky/10 p-5 text-center">
                <p className="font-display text-2xl font-extrabold text-blue-deep">99,99 €</p>
                <p className="text-sm text-slate">HT/mois · 20 utilisateurs</p>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-slate">
              Tous modules inclus · Essai {site.trialDays} jours sans CB ·{" "}
              <Link href="/tarifs" className="font-semibold text-blue-royal hover:underline">
                Détail des tarifs →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-blue-sky/30">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Questions fréquentes — planning nettoyage
          </h2>
          <div className="mt-6">
            <IndustryFaq items={planningFaq} />
          </div>
          <p className="mt-6 text-sm text-slate">
            Une autre question ?{" "}
            <a
              href={`tel:${site.phoneTel}`}
              className="font-semibold text-blue-royal hover:underline"
            >
              {site.phone}
            </a>{" "}
            ·{" "}
            <Link href="/contact" className="font-semibold text-blue-royal hover:underline">
              Contact
            </Link>
          </p>
        </div>
      </section>

      <section className="section bg-white pb-28 lg:pb-16">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Pour aller plus loin
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            <li>
              <Link
                href="/logiciel-entreprise-nettoyage"
                className="block rounded-[3px] border border-blue-mist/70 bg-white p-4 font-semibold text-blue-royal hover:border-blue-royal"
              >
                Pilier — logiciel entreprise de nettoyage →
              </Link>
            </li>
            <li>
              <Link
                href="/logiciel-facturation-proprete"
                className="block rounded-[3px] border border-blue-mist/70 bg-white p-4 font-semibold text-blue-royal hover:border-blue-royal"
              >
                Logiciel de facturation propreté →
              </Link>
            </li>
            <li>
              <Link
                href="/alternative-propret"
                className="block rounded-[3px] border border-blue-mist/70 bg-white p-4 font-semibold text-blue-royal hover:border-blue-royal"
              >
                Alternative Propret →
              </Link>
            </li>
            <li>
              <Link
                href="/essai-gratuit"
                className="block rounded-[3px] border border-lime-cta bg-lime-cta/10 p-4 font-semibold text-blue-deep hover:bg-lime-cta/20"
              >
                Essai gratuit {site.trialDays} jours →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <FinalPush
        title="Structurez votre planning — testez sur vos vrais sites"
        lead={`Essai ${site.trialDays} jours sans CB · Planning + pointage + facture inclus · Support FR ${site.phone}`}
      />
      <MobileCtaBar />
    </>
  );
}
