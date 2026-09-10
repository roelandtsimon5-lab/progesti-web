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
  title: "Alternative Propret — Logiciel nettoyage, essai 15j",
  description: `Vous comparez une alternative à Propret ? PROGESTI structure planning, pointage et facture. Dès 29,99 € HT/mois, essai ${site.trialDays}j sans CB · ${site.phone}.`,
  path: "/alternative-propret",
});

const pricingRows = [
  {
    label: "Formule entrée",
    propret: "29,99 € HT/mois",
    progesti: "29,99 € HT/mois (Starter)",
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
    progesti: "Starter 1 · Pro 5 · Premium 20",
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
    progesti: "Nettoyage : bureaux, syndics, pros, fin de chantier, AE",
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
    a: "Non — et ce n'est pas l'argument. Les deux affichent publiquement la même grille (29,99 / 49,99 / 99,99 € HT/mois) avec tous les modules inclus. La différence se joue sur le métier nettoyage (vocabulaire, workflows), la chaîne planning → pointage → facture, et le support FR basé à Toulouse.",
  },
  {
    q: "Je suis déjà sur Propret : la migration est-elle lourde ?",
    a: "On reprend clients, sites et contrats. La plupart des gérants sont opérationnels en quelques heures. L'équipe Toulouse peut accompagner l'import — appelez le 05 82 95 09 19 ou démarrez l'essai 15 jours sans CB pour tester sur vos vrais sites avant de basculer.",
  },
  {
    q: "Quels modules sont inclus dans chaque offre ?",
    a: `Les ${modules.length} modules sont inclus dès Starter : planning, pointage & télégestion, clients, devis, facturation, impayés, RH / prépaie, tableaux de bord… Pas de module surprise en fin de mois. Les paliers changent surtout le nombre d'utilisateurs (1 / 5 / 20).`,
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
    a: "Oui. Starter à 29,99 € HT/mois est pensé pour les auto-entrepreneurs et très petites équipes (1 administrateur). Pro (5 utilisateurs) et Premium (20) suivent la croissance. Même stack métier à chaque palier.",
  },
] as const;

export default function AlternativePropretPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <FaqPageLd items={[...faqItems]} />
      <IndustryPageHero
        eyebrow="Comparaison factuelle"
        title="Alternative à Propret pour entreprises de nettoyage"
        lead="Même grille tarifaire publique que Propret (29,99 / 49,99 / 99,99 € HT/mois). La différence : un outil pensé métier nettoyage — planning → pointage → facture — avec support FR à Toulouse."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Alternative Propret" },
        ]}
        trialEvent="alt_propret_trial"
        demoEvent="alt_propret_demo"
      />

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Pourquoi chercher une alternative à Propret ?
          </h2>
          <div className="prose prose-slate mt-4 max-w-none">
            <p>
              Vous gérez une entreprise de nettoyage. Excel et WhatsApp saturent : remplacements du
              lundi, passages à tracer pour un syndic, facture à sortir avant la fin du mois. Vous
              comparez les logiciels — Propret apparaît souvent. Cette page répond à la question
              « alternative Propret » avec des faits publics uniquement.
            </p>
            <p>
              Propret et PROGESTI ciblent le même marché et affichent la même grille publique. La
              question n&apos;est pas « qui est moins cher » (personne ne l&apos;est sur ces paliers).
              C&apos;est : quel outil colle à votre métier — bureaux, syndics, fin de chantier, AE —
              et qui vous répond quand ça coince un vendredi soir.
            </p>
            <p>
              On ne liste pas les fonctions internes de Propret que nous ne pouvons pas vérifier.
              On compare tarifs publics, durée d&apos;essai affichée, et ce que PROGESTI fait
              concrètement sur la chaîne planning → pointage → facture.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-blue-sky/30">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Comparaison des tarifs publics
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
              <strong className="text-blue-deep">À noter :</strong> même grille publique (29,99 /
              49,99 / 99,99 € HT/mois), modules inclus des deux côtés. PROGESTI propose un essai de{" "}
              {site.trialDays} jours <strong>sans carte bancaire</strong>. Détail des paliers sur{" "}
              <Link href="/tarifs" className="font-semibold text-blue-royal hover:underline">
                /tarifs
              </Link>
              .
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
            Trois critères pour trancher (sans blabla « moins cher »)
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-[3px] border border-blue-mist/70 bg-white p-5">
              <h3 className="font-display text-lg font-bold text-blue-deep">Métier nettoyage</h3>
              <p className="mt-2 text-sm text-slate">
                Vocabulaire et workflows pour bureaux, syndics, locaux pros, fin de chantier et AE —
                pas un ERP générique recollé sur la propreté.
              </p>
            </div>
            <div className="rounded-[3px] border border-blue-mist/70 bg-white p-5">
              <h3 className="font-display text-lg font-bold text-blue-deep">
                Planning → pointage → facture
              </h3>
              <p className="mt-2 text-sm text-slate">
                Ce que vous planifiez, l&apos;agent le pointe. Ce qui est pointé alimente la facture.
                Moins de double saisie, moins de litiges « qui était où ».
              </p>
            </div>
            <div className="rounded-[3px] border border-blue-mist/70 bg-white p-5">
              <h3 className="font-display text-lg font-bold text-blue-deep">Support FR Toulouse</h3>
              <p className="mt-2 text-sm text-slate">
                Équipe joignable au {site.phone}. Essai {site.trialDays} jours sans CB (Propret
                affiche 14 jours ; CB non précisée publiquement de leur côté).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Quand PROGESTI est pertinent comme alternative
          </h2>
          <div className="prose prose-slate mt-4 max-w-none">
            <p>
              Si vous voulez un outil complet avec tarifs publics clairs, sans argument « on est
              moins cher ». Starter (29,99 € HT/mois) pour AE / solo ; Pro et Premium jusqu&apos;à
              20 utilisateurs.
            </p>
            <ul>
              <li>
                <strong>Planning multi-sites</strong> : fréquences (quotidien, hebdo, ponctuel),
                remplacements sans ressaisir — détail sur{" "}
                <Link
                  href="/logiciel-planning-nettoyage"
                  className="font-semibold text-blue-royal hover:underline"
                >
                  logiciel planning nettoyage
                </Link>
                .
              </li>
              <li>
                <strong>Pointage mobile</strong> : app Android/iOS, géolocalisation optionnelle,
                heures qui remontent au bureau.
              </li>
              <li>
                <strong>Facturation du réalisé</strong> : sans double saisie, suivi des impayés —
                voir{" "}
                <Link
                  href="/logiciel-facturation-proprete"
                  className="font-semibold text-blue-royal hover:underline"
                >
                  facturation propreté
                </Link>
                .
              </li>
              <li>
                <strong>RH et prépaie</strong> : contrats, absences, variables au même endroit.
              </li>
            </ul>
            <p>
              Pour le pilier métier :{" "}
              <Link
                href="/logiciel-entreprise-nettoyage"
                className="font-semibold text-blue-royal hover:underline"
              >
                logiciel pour entreprise de nettoyage
              </Link>
              . Verticales{" "}
              <Link href="/solutions/syndics" className="font-semibold text-blue-royal hover:underline">
                syndics
              </Link>
              ,{" "}
              <Link
                href="/solutions/fin-de-chantier"
                className="font-semibold text-blue-royal hover:underline"
              >
                fin de chantier
              </Link>
              ,{" "}
              <Link href="/solutions/bureaux" className="font-semibold text-blue-royal hover:underline">
                bureaux
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-blue-sky/30">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Questions fréquentes (objections réelles)
          </h2>
          <p className="mt-2 text-sm text-slate">
            Migration, prix, modules — sans avis inventés ni stats fantômes.
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
                href="/tarifs"
                className="block rounded-[3px] border border-blue-mist/70 bg-white p-4 font-semibold text-blue-royal hover:border-blue-royal"
              >
                Tarifs publics Starter / Pro / Premium →
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
            Prêt à comparer sur vos sites ?
          </h2>
          <p className="mt-2 text-slate">
            Le meilleur comparatif reste un essai sur votre activité. {trialCopy.noCard}. Ou un
            appel rapide avec l&apos;équipe Toulouse.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={cta.trial}
              variant="trial"
              event="trial_start"
              eventPayload={{ cta: "alt_propret_trial" }}
            >
              {trialCopy.free}
            </ButtonLink>
            <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "alt_propret_demo" }}>
              {ctaLabels.demoGate}
            </ButtonLink>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center rounded-[3px] border border-blue-mist bg-white px-4 py-2.5 text-sm font-bold text-blue-deep hover:border-blue-royal"
            >
              {site.phone}
            </a>
            <Link
              href="/blog/progesti-vs-propret"
              className="inline-flex items-center font-bold text-blue-royal underline-offset-4 hover:underline"
            >
              Article détaillé
            </Link>
          </div>
        </div>
      </section>

      <FinalPush
        title="Le meilleur comparatif, c'est votre propre essai"
        lead={`Dès 29,99 € HT/mois tout inclus · ${trialCopy.noCard} · Support FR ${site.phone}`}
      />
      <MobileCtaBar />
    </>
  );
}
