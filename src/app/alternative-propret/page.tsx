import type { Metadata } from "next";
import Link from "next/link";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FinalPush } from "@/components/conversion/FinalPush";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import { cta, ctaLabels } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";
import { modules, site, trialCopy } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Alternative Propret 2026 — Comparatif prix, essai, modules",
  description: `Comparez Propret et PROGESTI : même entrée gratuite (indépendants), essai ${site.trialDays}j sans CB, ${modules.length} modules inclus. Tableau comparatif factuel + avis terrain.`,
  path: "/alternative-propret",
});

const pricingRows = [
  {
    label: "Formule entrée",
    propret: "Gratuit (indépendants)",
    progesti: "Gratuit (indépendants)",
  },
  {
    label: "Formule intermédiaire",
    propret: "49,99 € HT/mois",
    progesti: "49,99 € HT/mois (Pro)",
  },
  {
    label: "Formule avancée",
    propret: "99,99 € HT/mois",
    progesti: "99,99 € HT/mois (Premium)",
  },
  {
    label: "Utilisateurs inclus",
    propret: "Starter 1 · Pro 5 · Premium 20",
    progesti: "Gratuit 1 · Pro 5 · Premium 20",
  },
  {
    label: "Modules",
    propret: "Tous inclus (annonce)",
    progesti: `${modules.length} modules · tous inclus`,
  },
  {
    label: "Durée d'essai",
    propret: "14 jours",
    progesti: `${site.trialDays} jours`,
  },
  {
    label: "CB à l'essai",
    propret: "Non précisé publiquement",
    progesti: "Non requise",
  },
] as const;

const featureRows = [
  {
    label: "Cible métier",
    propret: "Entreprises de propreté",
    progesti: "Nettoyage : bureaux, syndics, pros, fin de chantier, indépendants",
  },
  {
    label: "Chaîne ops",
    propret: "Planning · pointage · facturation (annonce)",
    progesti: "Planning → pointage → facture du réalisé",
  },
  {
    label: "Planning multi-sites",
    propret: "Oui",
    progesti: "Oui · fréquences, remplacements, affectations",
  },
  {
    label: "Pointage terrain",
    propret: "Oui",
    progesti: "Oui · app mobile, géolocalisation optionnelle",
  },
  {
    label: "Facturation",
    propret: "Oui",
    progesti: "Oui · alignée sur le réalisé terrain",
  },
  {
    label: "Support FR",
    propret: "Non précisé publiquement",
    progesti: `Équipe Toulouse · ${site.phone}`,
  },
] as const;

const faqItems = [
  {
    q: "PROGESTI est-il vraiment moins cher que Propret ?",
    a: "Non — et ce n'est pas l'argument. Les deux affichent publiquement la même grille (0 € (indépendants) / 49,99 / 99,99 € HT/mois) avec tous les modules inclus. La différence se joue sur le métier nettoyage (vocabulaire, workflows), la chaîne planning → pointage → facture, et le support FR basé à Toulouse.",
  },
  {
    q: "Je suis déjà sur Propret : la migration est-elle lourde ?",
    a: "On reprend clients, sites et contrats. La plupart des gérants sont opérationnels en quelques heures. L'équipe Toulouse peut accompagner l'import — appelez le 07 67 68 55 67 ou démarrez l'essai 15 jours sans CB pour tester sur vos vrais sites avant de basculer.",
  },
  {
    q: "Quels modules sont inclus dans chaque offre ?",
    a: `Les ${modules.length} modules sont inclus Gratuit pour indépendants : planning, pointage & télégestion, clients, devis, facturation, impayés, RH / prépaie, tableaux de bord… Pas de module surprise en fin de mois. Les paliers changent surtout le nombre d'utilisateurs (1 / 5 / 20).`,
  },
  {
    q: "En quoi PROGESTI se différencie concrètement ?",
    a: "Sur le terrain du gérant de nettoyage : fréquences multi-sites, remplacements du lundi, preuves pour un syndic, facture du réalisé sans double saisie. Support FR joignable, équipe à Toulouse — pas un chatbot générique.",
  },
  {
    q: "Puis-je tester avant de changer d'outil ?",
    a: `Oui. Essai ${site.trialDays} jours gratuit, sans carte bancaire. Vous créez votre espace, importez quelques sites et voyez si le planning → pointage → facture tient sur votre activité. Sans engagement.`,
  },
  {
    q: "L'essai suffit-il pour une petite équipe ou un AE ?",
    a: "Oui. L'offre Gratuit est pensée pour les indépendants et micro-entreprises (1 administrateur, tous modules inclus). Pro (5 utilisateurs) et Premium (20) accompagnent la croissance. Voir aussi : logiciel nettoyage gratuit.",
  },
] as const;

export default function AlternativePropretPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <FaqPageLd items={[...faqItems]} />
      <IndustryPageHero
        eyebrow="Comparatif factuel 2026"
        title="Alternative Propret : faites le bon choix pour votre entreprise"
        lead={`Vous comparez Propret et ses concurrents ? Voici les faits publics : même entrée gratuite (indépendants), essai ${site.trialDays} jours sans CB chez PROGESTI, support FR à Toulouse. Décidez sur des critères concrets.`}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Comparatifs", href: "/comparatifs" },
          { label: "Alternative Propret" },
        ]}
        trialEvent="alt_propret_trial"
        demoEvent="alt_propret_demo"
      />

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Pourquoi comparer avant de choisir ?
          </h2>
          <div className="prose prose-slate mt-4 max-w-none">
            <p>
              Vous gérez une entreprise de nettoyage. Excel et WhatsApp saturent : remplacements du
              lundi matin, passages à tracer pour un syndic, factures en retard. Vous comparez les
              logiciels métier — Propret, Kliner et d&apos;autres apparaissent dans vos recherches.
            </p>
            <p>
              <strong>Ce qui compte pour trancher :</strong> le prix d&apos;entrée, la durée d&apos;essai,
              les modules inclus, et le support quand ça coince un vendredi soir. Cette page répond
              avec des faits publics uniquement — pas de notes inventées ni de fonctions qu&apos;on ne
              peut pas vérifier.
            </p>
            <p>
              Propret et PROGESTI affichent la même entrée gratuite pour indépendants. La différence
              se joue sur l&apos;essai ({site.trialDays} jours sans CB chez PROGESTI vs 14 jours chez
              Propret) et sur l&apos;accompagnement : support FR joignable au {site.phone}, équipe à
              Toulouse.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-blue-sky/30">
        <div className="container max-w-4xl">
          <div className="mb-10 rounded-[3px] border border-lime-cta/40 bg-lime-cta/10 p-5">
            <h3 className="font-display text-lg font-bold text-blue-deep">
              Comment choisir ? 3 critères concrets
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate">
              <li className="flex gap-2">
                <span className="font-bold text-lime-cta">1.</span>
                <span><strong>Durée d&apos;essai</strong> — 14 jours suffisent rarement pour tester sur vos vrais sites et vos agents. PROGESTI : {site.trialDays} jours sans CB.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-lime-cta">2.</span>
                <span><strong>Prix d&apos;entrée</strong> — Les deux proposent une entrée gratuite pour indépendants. Pro et Premium : mêmes paliers (49,99 / 99,99 € HT/mois).</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-lime-cta">3.</span>
                <span><strong>Support humain</strong> — Qui répond quand le planning casse un lundi matin ? PROGESTI : équipe FR au {site.phone}.</span>
              </li>
            </ul>
          </div>

          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Tableau comparatif des tarifs publics
          </h2>
          <p className="mt-2 text-sm text-slate">
            Tarifs HT mensuels affichés publiquement au moment de la rédaction. Vérifiez sur chaque
            site pour les conditions actuelles. Même grille ≠ même produit.
          </p>

          <div className="mt-8 md:hidden">
            <ul className="space-y-3">
              {pricingRows.map((row) => (
                <li
                  key={row.label}
                  className="rounded-[3px] border border-blue-mist/70 bg-white p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-royal">
                    {row.label}
                  </p>
                  <p className="mt-2 text-sm text-slate">Propret : {row.propret}</p>
                  <p className="mt-2 border-t border-blue-mist/60 pt-2 text-sm font-semibold text-blue-deep">
                    PROGESTI : {row.progesti}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 hidden overflow-x-auto md:block">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-blue-mist">
                  <th className="py-3 pr-4 font-display text-xs font-bold uppercase tracking-wide text-slate">
                    Critère
                  </th>
                  <th className="py-3 px-4 font-display text-xs font-bold uppercase tracking-wide text-slate">
                    Propret (public)
                  </th>
                  <th className="bg-blue-deep/5 py-3 pl-4 font-display text-xs font-bold uppercase tracking-wide text-lime-cta">
                    PROGESTI
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.label} className="border-b border-blue-mist/60">
                    <td className="py-4 pr-4 font-semibold text-blue-deep">{row.label}</td>
                    <td className="py-4 px-4 text-slate">{row.propret}</td>
                    <td className="bg-blue-sky/25 py-4 pl-4 font-semibold text-blue-deep">
                      {row.progesti}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-[3px] border-l-4 border-lime-cta bg-white p-4">
            <p className="text-sm text-slate">
              <strong className="text-blue-deep">Ce qu&apos;il faut retenir :</strong> Même entrée
              gratuite pour indépendants chez les deux. PROGESTI se distingue sur l&apos;essai{" "}
              <strong>({site.trialDays} jours sans CB)</strong> vs 14 jours chez Propret. Pour les
              équipes : paliers identiques (49,99 / 99,99 € HT/mois). Le vrai différenciateur :
              support FR joignable au {site.phone}, équipe à Toulouse.{" "}
              <Link href="/tarifs" className="font-semibold text-blue-royal hover:underline">
                Voir tous les tarifs →
              </Link>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink
              href={cta.trial}
              variant="trial"
              event="trial_start"
              eventPayload={{ cta: "alt_propret_mid_trial" }}
            >
              {trialCopy.free}
            </ButtonLink>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center rounded-[3px] border border-blue-mist bg-white px-4 py-2.5 text-sm font-bold text-blue-deep hover:border-blue-royal"
            >
              {site.phone}
            </a>
            <span className="text-sm text-slate">Support FR · Toulouse · sans engagement</span>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Positionnement : ce qui se voit publiquement
          </h2>
          <p className="mt-2 text-sm text-slate">
            Les deux outils couvrent planning, pointage et facturation. Voici les points
            vérifiables — sans inventer de fonctions côté concurrent.
          </p>

          <div className="mt-8 md:hidden">
            <ul className="space-y-3">
              {featureRows.map((row) => (
                <li
                  key={row.label}
                  className="rounded-[3px] border border-blue-mist/70 bg-blue-sky/20 p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-royal">
                    {row.label}
                  </p>
                  <p className="mt-2 text-sm text-slate">Propret : {row.propret}</p>
                  <p className="mt-2 border-t border-blue-mist/60 pt-2 text-sm font-semibold text-blue-deep">
                    PROGESTI : {row.progesti}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 hidden overflow-x-auto md:block">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-blue-mist">
                  <th className="py-3 pr-4 font-display text-xs font-bold uppercase tracking-wide text-slate">
                    Fonction
                  </th>
                  <th className="py-3 px-4 font-display text-xs font-bold uppercase tracking-wide text-slate">
                    Propret (public)
                  </th>
                  <th className="bg-blue-deep/5 py-3 pl-4 font-display text-xs font-bold uppercase tracking-wide text-lime-cta">
                    PROGESTI
                  </th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row) => (
                  <tr key={row.label} className="border-b border-blue-mist/60">
                    <td className="py-4 pr-4 font-semibold text-blue-deep">{row.label}</td>
                    <td className="py-4 px-4 text-slate">{row.propret}</td>
                    <td className="bg-blue-sky/25 py-4 pl-4 font-semibold text-blue-deep">
                      {row.progesti}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-blue-sky/30">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Pourquoi choisir PROGESTI plutôt que Propret ?
          </h2>
          <p className="mt-2 text-sm text-slate">
            Les deux outils sont sérieux. Voici ce qui fait la différence concrète :
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-[3px] border-2 border-lime-cta/60 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-lime-cta">Avantage</p>
              <h3 className="mt-1 font-display text-lg font-bold text-blue-deep">
                Essai {site.trialDays} jours
              </h3>
              <p className="mt-2 text-sm text-slate">
                vs 14 jours chez Propret. Testez sur vos vrais sites, avec vos agents. Sans carte
                bancaire.
              </p>
            </div>
            <div className="rounded-[3px] border-2 border-lime-cta/60 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-lime-cta">Avantage</p>
              <h3 className="mt-1 font-display text-lg font-bold text-blue-deep">
                Support humain FR
              </h3>
              <p className="mt-2 text-sm text-slate">
                Équipe à Toulouse, joignable au {site.phone}. Pas un chatbot ni un ticket anonyme.
              </p>
            </div>
            <div className="rounded-[3px] border-2 border-lime-cta/60 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-lime-cta">Avantage</p>
              <h3 className="mt-1 font-display text-lg font-bold text-blue-deep">
                Chaîne complète
              </h3>
              <p className="mt-2 text-sm text-slate">
                Planning → pointage → facture. Ce qui est planifié est pointé, ce qui est pointé
                alimente la facture. Moins de double saisie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Choisir PROGESTI : dans quels cas ?
          </h2>
          <div className="prose prose-slate mt-4 max-w-none">
            <p>
              Vous voulez un outil avec tarifs publics clairs, sans devis opaque. Gratuit pour
              indépendants ; Pro et Premium jusqu&apos;à 20 utilisateurs. Voici ce que PROGESTI fait
              concrètement :
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[3px] border border-blue-mist/70 bg-blue-sky/10 p-5">
              <h3 className="font-display font-bold text-blue-deep">Planning multi-sites</h3>
              <p className="mt-2 text-sm text-slate">
                Fréquences (quotidien, hebdo, ponctuel), remplacements d&apos;urgence sans
                ressaisir.{" "}
                <Link
                  href="/logiciel-planning-nettoyage"
                  className="font-semibold text-blue-royal hover:underline"
                >
                  Détail planning →
                </Link>
              </p>
            </div>
            <div className="rounded-[3px] border border-blue-mist/70 bg-blue-sky/10 p-5">
              <h3 className="font-display font-bold text-blue-deep">Pointage mobile</h3>
              <p className="mt-2 text-sm text-slate">
                App Android/iOS, géolocalisation optionnelle. Les heures remontent au bureau sans
                feuilles papier.
              </p>
            </div>
            <div className="rounded-[3px] border border-blue-mist/70 bg-blue-sky/10 p-5">
              <h3 className="font-display font-bold text-blue-deep">Facturation du réalisé</h3>
              <p className="mt-2 text-sm text-slate">
                Sans double saisie. Facturez ce qui a été pointé, suivez les impayés.{" "}
                <Link
                  href="/logiciel-facturation-proprete"
                  className="font-semibold text-blue-royal hover:underline"
                >
                  Détail facturation →
                </Link>
              </p>
            </div>
            <div className="rounded-[3px] border border-blue-mist/70 bg-blue-sky/10 p-5">
              <h3 className="font-display font-bold text-blue-deep">RH et prépaie</h3>
              <p className="mt-2 text-sm text-slate">
                Contrats, absences, variables au même endroit. Prépaie centralisée pour vos exports.
              </p>
            </div>
          </div>
          <div className="prose prose-slate mt-6 max-w-none">
            <p>
              Pilier métier :{" "}
              <Link
                href="/logiciel-entreprise-nettoyage"
                className="font-semibold text-blue-royal hover:underline"
              >
                logiciel pour entreprise de nettoyage
              </Link>
              . Verticales :{" "}
              <Link href="/solutions/syndics" className="font-semibold text-blue-royal hover:underline">
                syndics
              </Link>
              {", "}
              <Link
                href="/solutions/fin-de-chantier"
                className="font-semibold text-blue-royal hover:underline"
              >
                fin de chantier
              </Link>
              {", "}
              <Link href="/solutions/bureaux" className="font-semibold text-blue-royal hover:underline">
                bureaux
              </Link>
              {", "}
              <Link
                href="/solutions/auto-entrepreneurs"
                className="font-semibold text-blue-royal hover:underline"
              >
                auto-entrepreneurs
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-blue-sky/30">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Questions avant de choisir
          </h2>
          <p className="mt-2 text-sm text-slate">
            Migration, prix, modules — réponses factuelles, sans avis inventés.
          </p>
          <div className="mt-6">
            <IndustryFaq items={faqItems} />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">Pour aller plus loin</h2>
          <p className="mt-2 text-sm text-slate">
            Pages utiles si vous affinez votre choix d&apos;alternative à Propret :
          </p>
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
                href="/logiciel-planning-nettoyage"
                className="block rounded-[3px] border border-blue-mist/70 bg-white p-4 font-semibold text-blue-royal hover:border-blue-royal"
              >
                Logiciel de planning nettoyage →
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
                href="/logiciel-nettoyage-gratuit"
                className="block rounded-[3px] border border-blue-mist/70 bg-white p-4 font-semibold text-blue-royal hover:border-blue-royal"
              >
                Logiciel nettoyage gratuit (AE / indépendants) →
              </Link>
            </li>
            <li>
              <Link
                href="/tarifs"
                className="block rounded-[3px] border border-blue-mist/70 bg-white p-4 font-semibold text-blue-royal hover:border-blue-royal"
              >
                Tarifs publics Gratuit / Pro / Premium →
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
            <li>
              <a
                href={`tel:${site.phoneTel}`}
                className="block rounded-[3px] border border-blue-mist/70 bg-white p-4 font-semibold text-blue-royal hover:border-blue-royal"
              >
                Appeler {site.phone} →
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="section bg-blue-sky/30 pb-28 lg:pb-16">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Votre décision : testez sur vos vrais sites
          </h2>
          <p className="mt-2 text-slate">
            Le meilleur comparatif, c&apos;est un essai sur votre activité. {site.trialDays} jours
            pour voir si le planning → pointage → facture tient sur vos sites. {trialCopy.noCard}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={cta.trial}
              variant="trial"
              size="lg"
              event="trial_start"
              eventPayload={{ cta: "alt_propret_decision_trial" }}
            >
              Tester {site.trialDays} jours sans CB
            </ButtonLink>
            <ButtonLink
              href={cta.demo}
              variant="secondary"
              size="lg"
              eventPayload={{ cta: "alt_propret_decision_demo" }}
            >
              {ctaLabels.demoGate}
            </ButtonLink>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center rounded-[3px] border border-blue-mist bg-white px-4 py-3 text-sm font-bold text-blue-deep hover:border-blue-royal"
            >
              Appeler {site.phone}
            </a>
          </div>
          <p className="mt-4 text-sm text-slate">
            Questions sur la migration depuis Propret ?{" "}
            <Link
              href="/blog/progesti-vs-propret"
              className="font-semibold text-blue-royal underline-offset-4 hover:underline"
            >
              Article détaillé
            </Link>{" "}
            · Support FR inclus
          </p>
        </div>
      </section>

      <FinalPush
        title="Décidez sur vos vrais sites, pas sur des promesses"
        lead={`Essai ${site.trialDays} jours sans CB · Gratuit pour indépendants · Support FR ${site.phone}`}
      />
      <MobileCtaBar />
    </>
  );
}
