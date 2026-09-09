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
import { site, trialCopy } from "@/lib/site";

const pageUrl = `${site.url}/logiciel-entreprise-nettoyage`;

const pillarFaq = [
  {
    q: "Combien coûte PROGESTI pour mon entreprise de nettoyage ?",
    a: "Dès 29,99 € HT/mois — Starter, Pro ou Premium — tous modules inclus : planning multi-sites, pointage mobile, devis, facturation, impayés, RH, tableaux de bord. Pas de module payant en plus, pas de frais d'installation.",
  },
  {
    q: "Puis-je tester avant de m'engager ?",
    a: `Oui. Essai ${site.trialDays} jours gratuit, sans carte bancaire. Vous testez sur vos vrais sites et agents. Si ça ne convient pas, vous arrêtez sans justification.`,
  },
  {
    q: "Je gère tout sur Excel et WhatsApp — la migration est-elle compliquée ?",
    a: "Non. Vous pouvez reprendre vos clients, sites et contrats existants. La plupart des gérants sont opérationnels en quelques heures. L'équipe peut vous accompagner sur l'import si besoin.",
  },
  {
    q: "PROGESTI gère-t-il le planning de plusieurs sites avec différentes fréquences ?",
    a: "Oui. Vous définissez la fréquence de chaque site (quotidien, 2×/semaine, mensuel…), affectez vos agents, et le planning se répète automatiquement. Remplacements et absences se gèrent au même endroit.",
  },
  {
    q: "Comment mes agents pointent-ils sur le terrain ?",
    a: "Ils utilisent l'app mobile (Android/iOS). Arrivée, départ, géolocalisation si activée. Les données remontent au bureau en temps réel — plus de feuilles papier ni d'heures contestées.",
  },
  {
    q: "Puis-je facturer à partir du réalisé terrain sans ressaisir ?",
    a: "Oui. Le planning et le pointage alimentent directement la facturation. Vous facturez ce qui a été fait, sans double saisie ni oubli.",
  },
  {
    q: "Quelles sont les trois offres PROGESTI ?",
    a: "Starter à 29,99 € HT/mois (1 administrateur principal), Pro à 49,99 € HT/mois (5 utilisateurs) et Premium à 99,99 € HT/mois (20 utilisateurs). Tous les modules sont inclus dans chaque offre. Pas de surprise en fin de mois.",
  },
  {
    q: "PROGESTI est-il adapté aux auto-entrepreneurs et petites équipes ?",
    a: "Oui. L'offre Starter à 29,99 € HT/mois est conçue pour les indépendants et petites structures. Pro et Premium accompagnent la croissance jusqu'à 20 utilisateurs.",
  },
  {
    q: "Existe-t-il une app mobile pour mes agents ?",
    a: "Oui. PROGESTI propose une application mobile native sur Android et iOS. Vos agents voient leur planning, pointent leur arrivée et départ, et signent les bons d'intervention sur place.",
  },
  {
    q: "Comment contacter le support ?",
    a: `Support FR inclus, équipe basée à Toulouse. Joignable au ${site.phone}. Nous vous accompagnons dès la mise en place et sur la durée.`,
  },
] as const;

export const metadata: Metadata = pageMeta({
  title: "Logiciel pour entreprise de nettoyage — Essai gratuit",
  description:
    `Gérant d'entreprise de nettoyage ? Planning, pointage, facture en un seul logiciel. Dès 29,99 € HT/mois, ${trialCopy.metaSuffix}`,
  path: "/logiciel-entreprise-nettoyage",
  openGraph: {
    title: "Logiciel pour entreprise de nettoyage — Essai gratuit",
    description:
      `Gérant d'entreprise de nettoyage ? Planning, pointage, facture en un seul logiciel. Dès 29,99 € HT/mois, ${trialCopy.metaSuffix}`,
  },
});

export default function PillarNettoyagePage() {
  return (
    <>
      <SoftwareApplicationLd url={pageUrl} />
      <FaqPageLd items={[...pillarFaq]} />

      <IndustryPageHero
        eyebrow="Logiciel propreté · France"
        title="Logiciel pour entreprise de nettoyage"
        lead="Planning multi-sites, pointage mobile, facturation — sans Excel ni WhatsApp. PROGESTI centralise tout pour les gérants d'entreprises de propreté."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Logiciel entreprise de nettoyage" },
        ]}
        trialEvent="pillar_nettoyage_trial"
        demoEvent="pillar_nettoyage_demo"
      />

      <section className="section bg-white">
        <div className="container grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Vous êtes gérant. Votre semaine ne devrait pas ressembler à ça.
            </h2>
            <p className="mt-4 text-slate">
              Dimanche soir à refaire le planning sur Excel. Lundi matin à gérer une absence par SMS. Mardi à chercher qui était sur quel site. Vendredi à facturer de mémoire parce que les feuilles de pointage sont illisibles.
            </p>
            <p className="mt-4 text-slate">
              PROGESTI remplace ce chaos : un seul outil pour affecter, pointer, prouver et facturer — sans retaper, sans oublier. Le logiciel a été conçu par des gens qui connaissent le nettoyage. Le vocabulaire est celui du métier : sites, agents, vacations, syndics, fin de chantier.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Planning multi-sites avec fréquences personnalisées",
                "Pointage mobile avec géolocalisation",
                "Facturation alignée sur le réalisé terrain",
                "Suivi des impayés et relances intégrées",
                "Variables RH et prépaie centralisées",
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
              <ButtonLink href={cta.trial} variant="trial" event="trial_start" eventPayload={{ cta: "pillar_nettoyage_hero_trial" }}>
                Essai {site.trialDays} jours
              </ButtonLink>
              <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "pillar_nettoyage_hero_demo" }}>
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delayMs={60}>
            <div className="overflow-hidden rounded-[3px] border border-blue-mist/60 shadow-[0_20px_56px_rgba(11,61,110,0.12)]">
              <Image
                src="/screen-telegestion.webp"
                alt="PROGESTI — logiciel entreprise de nettoyage"
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
              Du planning à la facture : un flux intégré
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate">
              PROGESTI n&apos;est pas une suite de modules disparates. C&apos;est un flux continu : ce que vous planifiez, vos agents le pointent. Ce qu&apos;ils pointent alimente la facturation. Pas de double saisie, pas de fichier parallèle.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal delayMs={0}>
              <Link
                href="/logiciel-planning-nettoyage"
                className="industry-card-lift block h-full rounded-[3px] border border-blue-mist/80 bg-white p-6 transition hover:border-blue-royal"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">1</p>
                <h3 className="mt-2 font-display font-extrabold text-blue-deep">Planning multi-sites</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Affectez le bon agent au bon site, au bon créneau. Gérez les fréquences différentes (quotidien, hebdo, mensuel), les absences et les remplacements au même endroit.
                </p>
                <p className="mt-4 text-sm font-semibold text-blue-royal">En savoir plus →</p>
              </Link>
            </Reveal>
            <Reveal delayMs={50}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">2</p>
                <h3 className="mt-2 font-display font-extrabold text-blue-deep">Pointage mobile</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Vos agents pointent depuis l&apos;app mobile (Android/iOS). Arrivée, départ, géolocalisation optionnelle. Les données remontent au bureau en temps réel — plus de feuilles papier ni d&apos;heures contestées.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <Link
                href="/logiciel-facturation-proprete"
                className="industry-card-lift block h-full rounded-[3px] border border-blue-mist/80 bg-white p-6 transition hover:border-blue-royal"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">3</p>
                <h3 className="mt-2 font-display font-extrabold text-blue-deep">Facturation terrain</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Facturez à partir du réalisé terrain, sans ressaisie. Contrats récurrents ou fin de chantier : les heures pointées alimentent directement vos factures.
                </p>
                <p className="mt-4 text-sm font-semibold text-blue-royal">En savoir plus →</p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Pourquoi un logiciel métier pour la propreté ?
            </h2>
            <p className="mt-4 text-slate">
              Un ERP générique peut faire beaucoup de choses. Mais il ne parle pas votre métier. Vous passez des heures à le paramétrer pour reproduire ce qu&apos;un outil pensé pour le nettoyage fait nativement : gérer des sites avec des fréquences différentes, affecter des titulaires et des backups, relier le planning au pointage terrain, facturer ce qui a vraiment été fait.
            </p>
            <p className="mt-4 text-slate">
              PROGESTI a été conçu par des gens qui connaissent le nettoyage. Le vocabulaire est celui du métier : sites, agents, vacations, syndics, fin de chantier. Pas de traduction mentale entre votre réalité et les écrans du logiciel. Vous retrouvez tout de suite vos repères.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Adapté à tous les secteurs du nettoyage
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate">
              Bureaux, syndics, commerces ou fin de chantier — PROGESTI s&apos;adapte à votre activité. Retrouvez les pages dédiées à votre secteur :
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Reveal delayMs={0}>
              <Link
                href="/solutions/bureaux"
                className="industry-card-lift block h-full rounded-[3px] border border-blue-mist/80 bg-white p-6 transition hover:border-blue-royal"
              >
                <h3 className="font-display font-extrabold text-blue-deep">Bureaux et tertiaire</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Open spaces, étages multiples, horaires décalés. Planifiez des passages quotidiens ou hebdomadaires selon les besoins du client.
                </p>
              </Link>
            </Reveal>
            <Reveal delayMs={50}>
              <Link
                href="/solutions/syndics"
                className="industry-card-lift block h-full rounded-[3px] border border-blue-mist/80 bg-white p-6 transition hover:border-blue-royal"
              >
                <h3 className="font-display font-extrabold text-blue-deep">Syndics et copropriétés</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Halls, cages d&apos;escalier, locaux poubelles. Gérez plusieurs immeubles avec des fréquences différentes.
                </p>
              </Link>
            </Reveal>
            <Reveal delayMs={100}>
              <Link
                href="/solutions/professionnels"
                className="industry-card-lift block h-full rounded-[3px] border border-blue-mist/80 bg-white p-6 transition hover:border-blue-royal"
              >
                <h3 className="font-display font-extrabold text-blue-deep">Commerces et locaux pros</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Restaurants, cabinets médicaux, commerces. Créneaux serrés avant l&apos;ouverture ou après la fermeture.
                </p>
              </Link>
            </Reveal>
            <Reveal delayMs={150}>
              <Link
                href="/solutions/fin-de-chantier"
                className="industry-card-lift block h-full rounded-[3px] border border-blue-mist/80 bg-white p-6 transition hover:border-blue-royal"
              >
                <h3 className="font-display font-extrabold text-blue-deep">Fin de chantier</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Remise en état après travaux. Planning serré, preuves photos, facturation dès la livraison.
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Ce que vous gagnez avec PROGESTI
            </h2>
            <p className="mt-4 text-slate">
              Le passage à un logiciel métier n&apos;est pas une révolution. C&apos;est un gain de temps chaque semaine, moins d&apos;erreurs, et une vision claire de l&apos;activité — pour vous et pour vos clients.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal delayMs={0}>
              <div className="rounded-[3px] border border-line bg-paper p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Gagnez des heures chaque semaine</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Moins de double saisie entre Excel, WhatsApp et la facturation. Le planning, le pointage et la facturation sont reliés automatiquement.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={50}>
              <div className="rounded-[3px] border border-line bg-paper p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Réduisez les litiges</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Pointage et bons d&apos;intervention tracent le réalisé sur le terrain. Vous avez les preuves quand un client conteste.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="rounded-[3px] border border-line bg-paper p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Facturez plus vite</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Passez du terrain à la facture sans perdre d&apos;informations. Les heures sont déjà là, pas besoin de ressaisir.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={150}>
              <div className="rounded-[3px] border border-line bg-paper p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Pilotez sereinement</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Un cockpit simple pour voir l&apos;activité, la charge et les priorités. Vous savez où vous en êtes sans jongler entre fichiers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-extrabold text-blue-deep">
              Tarifs publics — tout inclus
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate">
              Trois offres claires. Tous les modules dans chaque offre. Pas de surprise en fin de mois.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal delayMs={0}>
              <div className="h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display text-xl font-extrabold text-blue-deep">Starter</h3>
                <p className="mt-1 text-sm text-slate">1 administrateur principal</p>
                <p className="mt-4 font-display text-3xl font-extrabold text-blue-deep">29,99 €</p>
                <p className="text-sm text-slate">HT/mois</p>
              </div>
            </Reveal>
            <Reveal delayMs={50}>
              <div className="h-full rounded-[3px] border-2 border-lime-cta bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">Le plus populaire</p>
                <h3 className="mt-1 font-display text-xl font-extrabold text-blue-deep">Pro</h3>
                <p className="text-sm text-slate">5 utilisateurs</p>
                <p className="mt-4 font-display text-3xl font-extrabold text-blue-deep">49,99 €</p>
                <p className="text-sm text-slate">HT/mois · soit 9,99 €/utilisateur</p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display text-xl font-extrabold text-blue-deep">Premium</h3>
                <p className="mt-1 text-sm text-slate">20 utilisateurs</p>
                <p className="mt-4 font-display text-3xl font-extrabold text-blue-deep">99,99 €</p>
                <p className="text-sm text-slate">HT/mois · soit 4,99 €/utilisateur</p>
              </div>
            </Reveal>
          </div>
          <Reveal delayMs={150}>
            <div className="mt-8 text-center">
              <Link href="/tarifs" className="font-bold text-blue-royal underline-offset-4 hover:underline">
                Voir le détail des tarifs →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Vous cherchez une alternative ?
            </h2>
            <p className="mt-4 text-slate">
              Si vous comparez plusieurs logiciels pour votre entreprise de nettoyage, consultez nos pages de comparaison. Nous y détaillons les différences factuelles entre PROGESTI et d&apos;autres solutions du marché.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/alternative-propret"
                className="block rounded-[3px] border border-blue-mist px-5 py-4 transition hover:border-blue-royal hover:bg-blue-sky/30"
              >
                <p className="font-display font-bold text-blue-deep">Alternative à Propret</p>
                <p className="mt-1 text-sm text-slate">
                  Comparaison des tarifs et du positionnement. Durée d&apos;essai, modules inclus, accompagnement.
                </p>
              </Link>
              <Link
                href="/tarifs"
                className="block rounded-[3px] border border-blue-mist px-5 py-4 transition hover:border-blue-royal hover:bg-blue-sky/30"
              >
                <p className="font-display font-bold text-blue-deep">Détail des tarifs</p>
                <p className="mt-1 text-sm text-slate">
                  Starter, Pro, Premium : toutes les offres détaillées. Ce qui est inclus, ce qui ne l&apos;est pas.
                </p>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Support humain</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
                Vous avez le terrain. On a votre dos.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate">
                Support FR inclus — équipe basée à Toulouse, joignable au{" "}
                <a href={`tel:${site.phoneTel}`} className="font-semibold text-blue-royal hover:underline">
                  {site.phone}
                </a>
                . Nous vous accompagnons dès la mise en place et sur la durée.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <ButtonLink
                  href={cta.trial}
                  variant="trial"
                  event="trial_start"
                  eventPayload={{ cta: "pillar_nettoyage_support_trial" }}
                >
                  Essai {site.trialDays} jours gratuit
                </ButtonLink>
                <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "pillar_nettoyage_support_demo" }}>
                  {ctaLabels.demoGate}
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white pb-28 lg:pb-16" data-cta-sticky-safe>
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
            Questions fréquentes — Logiciel entreprise de nettoyage
          </h2>
          <p className="mt-3 text-slate">
            Une autre question ?{" "}
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-blue-royal hover:underline">
              {site.phone}
            </a>
            {" · "}
            <Link href="/contact" className="font-semibold text-blue-royal hover:underline">
              Contactez-nous
            </Link>
          </p>
          <div className="mt-8">
            <IndustryFaq items={pillarFaq} />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink
              href={cta.trial}
              variant="trial"
              event="trial_start"
              eventPayload={{ cta: "pillar_nettoyage_faq_trial" }}
            >
              Essai {site.trialDays} jours gratuit
            </ButtonLink>
            <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "pillar_nettoyage_faq_demo" }}>
              {ctaLabels.demoGate}
            </ButtonLink>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center gap-2 font-bold text-blue-royal underline-offset-4 hover:underline"
            >
              <span aria-hidden>📞</span> {site.phone}
            </a>
          </div>
        </div>
      </section>

      <FinalPush />
      <MobileCtaBar />
    </>
  );
}
