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
import { OfferLd } from "@/components/seo/OfferLd";
import { cta, ctaLabels } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Logiciel nettoyage gratuit — Facturation, clients, planning",
  description:
    "Logiciel de nettoyage gratuit pour indépendants et auto-entrepreneurs. Facturation, suivi clients, planning — 0 € par mois, tous modules inclus.",
  path: "/logiciel-nettoyage-gratuit",
  openGraph: {
    title: "Logiciel nettoyage gratuit — 0 € pour indépendants",
    description:
      "Gérez votre activité de nettoyage avec un logiciel complet et gratuit. Factures, clients, planning — conçu pour les indépendants et auto-entrepreneurs.",
  },
});

const faq = [
  {
    q: "Le logiciel est-il vraiment gratuit ?",
    a: "Oui. L'offre Gratuit est à 0 € HT par mois, sans limite de durée. Elle inclut tous les modules : facturation, suivi clients, planning, pointage. C'est l'offre idéale pour les indépendants, auto-entrepreneurs et micro-entreprises.",
  },
  {
    q: "Quelles sont les limites de l'offre Gratuit ?",
    a: "L'offre Gratuit est conçue pour 1 administrateur. Tous les modules sont inclus, sans restriction fonctionnelle. Quand votre activité grandit et que vous recrutez, vous passez à Pro ou Premium.",
  },
  {
    q: "Faut-il une carte bancaire pour commencer ?",
    a: `Non. Vous créez votre compte et utilisez PROGESTI immédiatement. Pas de CB demandée, pas d'engagement. Pour les offres payantes, l'essai ${site.trialDays} jours est également sans CB.`,
  },
  {
    q: "Puis-je facturer mes clients avec l'offre Gratuit ?",
    a: "Oui. Devis, factures, suivi des paiements — tout est inclus. Vous facturez au réalisé, sans ressaisie si vous utilisez le planning et le pointage.",
  },
  {
    q: "Comment passer de Gratuit à Pro quand je recrute ?",
    a: "Depuis votre espace, vous changez d'offre en quelques clics. Vos données sont conservées. Pro (5 utilisateurs) à 49,99 € HT/mois, Premium (20 utilisateurs) à 99,99 € HT/mois.",
  },
  {
    q: "PROGESTI est-il adapté aux auto-entrepreneurs en nettoyage ?",
    a: "Oui. C'est exactement le cas d'usage de l'offre Gratuit : un indépendant qui gère ses clients, ses passages et ses factures sans se noyer dans les outils.",
  },
  {
    q: "Y a-t-il un support même en Gratuit ?",
    a: `Oui. Support FR inclus, équipe à Toulouse. Joignable au ${site.phone}.`,
  },
  {
    q: "Mes données sont-elles conservées si je passe à Pro ?",
    a: "Oui. Historique clients, factures, planning — tout reste en place. Vous ajoutez simplement des utilisateurs pour votre équipe.",
  },
] as const;

export default function LogicielNettoyageGratuitPage() {
  return (
    <>
      <SoftwareApplicationLd url={`${site.url}/logiciel-nettoyage-gratuit`} />
      <FaqPageLd items={[...faq]} />
      <OfferLd
        name="PROGESTI Gratuit"
        description="Logiciel de nettoyage gratuit pour indépendants — facturation, clients, planning inclus"
        price={0}
        url={`${site.url}/logiciel-nettoyage-gratuit`}
      />

      <IndustryPageHero
        eyebrow="Logiciel nettoyage gratuit"
        title="Logiciel de nettoyage gratuit — 0 € par mois"
        lead="Facturation, suivi clients, planning et pointage : tout ce qu'il faut pour gérer votre activité d'indépendant ou d'auto-entrepreneur. Gratuit, tous modules inclus, sans limite de durée."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Logiciel nettoyage gratuit" },
        ]}
        trialEvent="gratuit_hero_trial"
        demoEvent="gratuit_hero_demo"
      />

      <section className="border-y border-blue-mist bg-white">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-extrabold text-blue-deep">0 €</p>
            <p className="mt-1 text-sm font-medium text-slate">par mois, sans CB</p>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold text-blue-deep">Tous modules</p>
            <p className="mt-1 text-sm font-medium text-slate">Facturation, planning, RH</p>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold text-blue-deep">Support FR</p>
            <p className="mt-1 text-sm font-medium text-slate">Équipe à Toulouse</p>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold text-blue-deep">Mobile</p>
            <p className="mt-1 text-sm font-medium text-slate">Android & iOS</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Gratuit pour les indépendants. Vraiment.
            </h2>
            <p className="mt-4 text-slate">
              Vous êtes auto-entrepreneur ou indépendant dans le nettoyage ? PROGESTI vous donne accès à un{" "}
              <strong>logiciel complet à 0 €</strong> : facturation, gestion clients, planning des passages, pointage terrain. Pas de version bridée, pas de « gratuit pendant 14 jours ».
            </p>
            <p className="mt-4 text-slate">
              L&apos;offre Gratuit est conçue pour ceux qui travaillent seuls. Vous gérez vos clients, vous planifiez vos passages, vous facturez ce que vous avez fait. Quand votre activité grandit et que vous recrutez, vous passez à Pro ou Premium — c&apos;est le chemin naturel de la croissance.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Facturation : devis, factures, suivi paiements",
                "Clients : fiches, sites rattachés, historique",
                "Planning : passages récurrents ou ponctuels",
                "Pointage mobile : preuves terrain, géolocalisation",
                "RH & tableaux de bord inclus",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate md:text-base">
                  <span className="font-bold text-lime-cta" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={cta.trial}
                variant="trial"
                size="lg"
                event="trial_start"
                eventPayload={{ cta: "gratuit_body_trial" }}
              >
                Créer mon compte gratuit
              </ButtonLink>
              <ButtonLink
                href={cta.demo}
                variant="secondary"
                size="lg"
                eventPayload={{ cta: "gratuit_body_demo" }}
              >
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delayMs={60}>
            <div className="overflow-hidden rounded-[3px] border border-blue-mist/60 shadow-[0_20px_56px_rgba(11,61,110,0.12)]">
              <Image
                src="/screen-factures.webp"
                alt="Facturation PROGESTI — logiciel nettoyage gratuit"
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
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Vous méritez mieux qu&apos;Excel et WhatsApp
            </h2>
            <p className="mt-4 text-slate">
              Si vous êtes comme la plupart des indépendants en nettoyage, votre semaine ressemble à ça : un tableur pour les clients, des SMS ou WhatsApp pour confirmer les passages, Word pour les factures, un carnet pour noter les heures. Le dimanche soir, vous rattrapez l&apos;administratif au lieu de vous reposer.
            </p>
            <p className="mt-4 text-slate">
              Ce bricolage fonctionne… jusqu&apos;à ce qu&apos;il ne fonctionne plus. Une facture oubliée, un passage non facturé, un client qui conteste des heures que vous n&apos;avez pas tracées. Vous perdez du temps et de l&apos;argent sur des tâches qui devraient être simples.
            </p>
            <p className="mt-4 text-slate">
              PROGESTI centralise tout au même endroit. Vos clients, vos passages, vos factures. Ce que vous planifiez alimente ce que vous facturez. Ce que vous pointez sur le terrain remonte au bureau. Plus de double saisie, plus d&apos;info qui se perd entre trois outils.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Du devis à la facture : un flux qui tient la route
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate">
              Dans une activité de nettoyage, tout est lié. Le client demande un devis, vous planifiez les passages, vous les réalisez, vous facturez. PROGESTI connecte ces étapes au lieu de les disperser.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <Reveal delayMs={0}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">1</p>
                <h3 className="mt-2 font-display font-extrabold text-blue-deep">Devis</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Créez un devis professionnel en quelques clics. Le client accepte ? Vous le transformez en contrat ou en intervention ponctuelle.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={50}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">2</p>
                <h3 className="mt-2 font-display font-extrabold text-blue-deep">Planning</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Les passages apparaissent dans votre planning. Récurrents ou ponctuels, vous voyez la semaine d&apos;un coup d&apos;œil et vous savez où aller.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">3</p>
                <h3 className="mt-2 font-display font-extrabold text-blue-deep">Pointage</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Sur le terrain, vous pointez votre arrivée et votre départ depuis l&apos;app mobile. Les heures sont tracées, horodatées, prêtes à facturer.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={150}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">4</p>
                <h3 className="mt-2 font-display font-extrabold text-blue-deep">Facture</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  En fin de mois, vous facturez ce qui a été fait. Les montants sont justes, les heures sont là, vous n&apos;oubliez rien.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Ce que vous pouvez faire avec l&apos;offre Gratuit
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate">
              Pas de fonctionnalité cachée, pas de module en supplément. Tout est inclus dès le départ.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal delayMs={0}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Facturer vos clients</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Créez des devis professionnels, convertissez-les en factures, suivez les paiements et les impayés. Les mentions obligatoires sont là, la numérotation est automatique. Plus besoin de Word ou Excel pour facturer.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={50}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Organiser vos passages</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Planning visuel de vos interventions. Définissez les récurrences (hebdo, bihebdo, mensuel), voyez votre charge, anticipez les créneaux libres. Vous savez où vous devez être et quand.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Garder l&apos;historique client</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Fiches clients complètes : coordonnées, sites rattachés, contrats, passages effectués, factures émises. Tout est centralisé. Quand un client appelle, vous avez le contexte en un clic.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Reveal delayMs={0}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Pointer depuis le terrain</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  App mobile Android et iOS. Pointez arrivée et départ, avec géolocalisation si vous le souhaitez. Les heures remontent au bureau et alimentent la facturation. Vous facturez le réalisé, pas le prévu.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={50}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Suivre votre trésorerie</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Voyez d&apos;un coup d&apos;œil qui a payé, qui est en retard, combien vous avez facturé ce mois-ci. Relancez les impayés depuis le même outil. Vous gardez le contrôle sur votre argent.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Travailler en mobilité</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Votre bureau, c&apos;est votre téléphone. Consultez une adresse client, vérifiez un horaire, envoyez un devis entre deux passages. Tout est accessible depuis l&apos;app, partout.
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
              Conçu pour les indépendants du nettoyage
            </h2>
            <p className="mt-4 text-slate">
              PROGESTI n&apos;est pas un logiciel généraliste adapté à la va-vite. C&apos;est un{" "}
              <Link href="/logiciel-entreprise-nettoyage" className="font-semibold text-blue-royal hover:underline">
                logiciel conçu pour le nettoyage
              </Link>{" "}
              — avec le vocabulaire du métier : sites, passages, fréquences, contrats d&apos;entretien. Vous n&apos;avez pas à bricoler des champs personnalisés ni à expliquer ce qu&apos;est un passage récurrent.
            </p>
            <p className="mt-4 text-slate">
              L&apos;offre Gratuit s&apos;adresse aux indépendants et auto-entrepreneurs qui veulent professionnaliser leur gestion sans payer un abonnement qui dépasse leur chiffre d&apos;affaires. Vous facturez vos clients, vous suivez vos passages, vous avez une vision claire de votre activité — pour 0 € par mois.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Auto-entrepreneur nettoyage</p>
                <p className="mt-2 text-sm text-slate">
                  Vous démarrez ou vous êtes installé depuis un moment : gérez vos clients, facturez au réalisé, gardez l&apos;historique de tout ce que vous avez fait. Découvrez notre{" "}
                  <Link href="/solutions/auto-entrepreneurs" className="font-semibold text-blue-royal hover:underline">
                    solution auto-entrepreneurs
                  </Link>.
                </p>
              </div>
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Indépendant propreté</p>
                <p className="mt-2 text-sm text-slate">
                  Micro-entreprise, TPE solo : mêmes besoins, même outil. Planning, pointage et{" "}
                  <Link href="/logiciel-facturation-proprete" className="font-semibold text-blue-royal hover:underline">
                    facturation propreté
                  </Link>{" "}
                  sans usine à gaz. Vous avez un outil pro sans le prix pro.
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
              Gratuit aujourd&apos;hui, Pro quand vous grandissez
            </h2>
            <p className="mt-4 text-slate">
              L&apos;offre Gratuit n&apos;a pas de date de fin. Vous l&apos;utilisez aussi longtemps que vous travaillez seul. Le jour où vous recrutez un premier agent ou un second administrateur, vous passez à Pro — et vos données suivent. C&apos;est le chemin naturel de la croissance.
            </p>
            <p className="mt-4 text-slate">
              Ce modèle reflète la réalité du métier. Un indépendant qui démarre n&apos;a pas le même budget qu&apos;une société établie, mais il a les mêmes besoins de base : gérer ses clients, planifier ses passages, facturer correctement. L&apos;offre Gratuit couvre ces besoins. Quand l&apos;activité se développe, l&apos;outil évolue avec vous.
            </p>
            <div className="mt-8 overflow-hidden rounded-[3px] border border-blue-mist bg-white">
              <div className="grid md:grid-cols-3">
                <div className="border-b border-blue-mist p-6 md:border-b-0 md:border-r">
                  <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">Gratuit</p>
                  <p className="mt-2 font-display text-2xl font-extrabold text-blue-deep">0 € HT/mois</p>
                  <p className="mt-1 text-sm text-slate">1 administrateur</p>
                  <p className="mt-3 text-sm text-slate">Indépendants, auto-entrepreneurs, micro-entreprises</p>
                </div>
                <div className="border-b border-blue-mist p-6 md:border-b-0 md:border-r">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-royal">Pro</p>
                  <p className="mt-2 font-display text-2xl font-extrabold text-blue-deep">49,99 € HT/mois</p>
                  <p className="mt-1 text-sm text-slate">5 utilisateurs</p>
                  <p className="mt-3 text-sm text-slate">Petites équipes, première embauche</p>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate">Premium</p>
                  <p className="mt-2 font-display text-2xl font-extrabold text-blue-deep">99,99 € HT/mois</p>
                  <p className="mt-1 text-sm text-slate">20 utilisateurs</p>
                  <p className="mt-3 text-sm text-slate">Équipes structurées, multi-sites</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-slate">
              Tous les modules inclus dans chaque offre.{" "}
              <Link href="/tarifs" className="font-semibold text-blue-royal hover:underline">
                Voir les tarifs détaillés
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Quand passer de Gratuit à Pro ?
            </h2>
            <p className="mt-4 text-slate">
              Le passage à Pro n&apos;est pas une obligation, c&apos;est le signe que votre activité se développe. Voici les situations typiques où ça a du sens :
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Vous embauchez un premier agent</p>
                <p className="mt-2 text-sm text-slate">
                  Cet agent a besoin de l&apos;app mobile pour pointer ses passages. Il lui faut un compte utilisateur. Vous passez à Pro, il reçoit son accès, et vous voyez ses pointages en temps réel.
                </p>
              </div>
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Vous déléguez l&apos;administratif</p>
                <p className="mt-2 text-sm text-slate">
                  Votre conjoint ou un assistant gère les factures et les relances. Il a besoin d&apos;un accès à PROGESTI. Vous passez à Pro, vous lui créez un compte, et il peut travailler depuis son poste.
                </p>
              </div>
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Vous structurez une petite équipe</p>
                <p className="mt-2 text-sm text-slate">
                  Deux ou trois agents sur le terrain, vous à la coordination. Chacun a besoin de voir son planning et de pointer. Pro vous donne 5 utilisateurs, Premium 20 si l&apos;équipe grossit encore.
                </p>
              </div>
            </div>
            <p className="mt-6 text-slate">
              Dans tous les cas, vos données restent : historique clients, factures, contrats. Vous ne repartez pas de zéro.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14" data-cta-sticky-safe>
        <div className="container max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Questions sur l&apos;offre Gratuit
            </h2>
            <div className="mt-6">
              <IndustryFaq items={faq} />
            </div>
            <p className="mt-8 text-center text-sm text-slate">
              Une question ?{" "}
              <a href={`tel:${site.phoneTel}`} className="font-bold text-blue-royal hover:underline">
                {site.phone}
              </a>
              {" · "}
              <Link href="/contact" className="font-bold text-blue-royal hover:underline">
                Nous contacter
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <FinalPush
        title="Logiciel nettoyage gratuit — commencez maintenant"
        lead="Créez votre compte en quelques minutes. Facturation, clients, planning — tout est inclus, 0 € pour les indépendants."
      />
      <MobileCtaBar />
    </>
  );
}
