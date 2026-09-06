import type { Metadata } from "next";
import Link from "next/link";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FinalPush } from "@/components/conversion/FinalPush";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { cta, ctaLabels } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";
import { modules, site, trialCopy } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Alternative à Propret — Comparaison logiciels propreté",
  description: `Vous cherchez une alternative à Propret ? Découvrez PROGESTI : ${trialCopy.label.toLowerCase()}, dès 29,99 € HT/mois (Starter, Pro, Premium). Comparaison factuelle des tarifs et fonctionnalités.`,
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
    progesti: "Entreprises de nettoyage : bureaux, syndics, pros, chantiers",
  },
  {
    label: "Planning multi-sites",
    propret: "Oui",
    progesti: "Oui · fréquences, remplacements, affectations",
  },
  {
    label: "Pointage terrain",
    propret: "Oui",
    progesti: "Oui · app mobile avec géolocalisation",
  },
  {
    label: "Facturation",
    propret: "Oui",
    progesti: "Oui · alignée sur le réalisé terrain",
  },
  {
    label: "Support FR",
    propret: "Non précisé",
    progesti: `Équipe Toulouse · ${site.phone}`,
  },
] as const;

export default function AlternativePropretPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <IndustryPageHero
        eyebrow="Comparaison"
        title="PROGESTI, une alternative à Propret"
        lead={`Vous êtes gérant d'une entreprise de nettoyage et vous cherchez une alternative à Propret ? Cette page compare les deux solutions sur la base d'éléments publics : tarifs, durée d'essai et positionnement.`}
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
              Propret et PROGESTI ciblent le même marché : les entreprises de nettoyage et de propreté
              qui ont besoin de structurer leur activité — planning des agents, pointage terrain et
              facturation. Les deux solutions proposent une stack intégrée plutôt qu&apos;un assemblage
              de modules à la carte.
            </p>
            <p>
              Les gérants qui comparent ces outils cherchent généralement à résoudre les mêmes problèmes :
              sortir d&apos;Excel et WhatsApp, tracer les passages sur le terrain, facturer plus vite et
              réduire les litiges avec les clients. La question n&apos;est donc pas « qui fait quoi »
              (les fonctions de base sont similaires), mais plutôt : quel outil correspond le mieux à
              votre contexte — taille d&apos;équipe, budget, besoin d&apos;accompagnement.
            </p>
            <p>
              Cette page vous donne les éléments factuels pour décider. Elle ne prétend pas lister
              exhaustivement les fonctionnalités de Propret (que nous ne pouvons pas vérifier en détail) ;
              elle compare ce qui est publiquement accessible : les grilles tarifaires et le positionnement
              produit.
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
            Tarifs HT mensuels affichés publiquement au moment de la rédaction. Vérifiez sur chaque site
            pour les conditions actuelles.
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
              <strong className="text-blue-deep">À noter :</strong> Propret et PROGESTI affichent
              trois paliers publics (29,99 / 49,99 / 99,99 € HT/mois) avec tous les modules inclus.
              PROGESTI propose un essai de {site.trialDays} jours sans carte bancaire.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Positionnement et fonctionnalités
          </h2>
          <p className="mt-2 text-sm text-slate">
            Les deux outils couvrent la même chaîne : planning, pointage, facturation. Le tableau
            ci-dessous résume les points vérifiables publiquement.
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
                    Propret
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
            Trois différences à considérer
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-[3px] border border-blue-mist/70 bg-white p-5">
              <h3 className="font-display text-lg font-bold text-blue-deep">Modèle tarifaire</h3>
              <p className="mt-2 text-sm text-slate">
                Les deux outils affichent des tarifs publics Starter / Pro / Premium (29,99 / 49,99 /
                99,99 € HT/mois). Chez PROGESTI, tous les modules sont inclus dans chaque offre —
                pas de surprise en fin de mois.
              </p>
            </div>
            <div className="rounded-[3px] border border-blue-mist/70 bg-white p-5">
              <h3 className="font-display text-lg font-bold text-blue-deep">Durée d&apos;essai</h3>
              <p className="mt-2 text-sm text-slate">
                Propret affiche un essai de 14 jours. PROGESTI propose {site.trialDays} jours
                d&apos;essai sans carte bancaire requise pour démarrer.
              </p>
            </div>
            <div className="rounded-[3px] border border-blue-mist/70 bg-white p-5">
              <h3 className="font-display text-lg font-bold text-blue-deep">Accompagnement</h3>
              <p className="mt-2 text-sm text-slate">
                PROGESTI inclut un support FR (équipe basée à Toulouse, joignable au{" "}
                {site.phone}) et peut accompagner la migration de vos données existantes.
                Le niveau d&apos;accompagnement proposé par Propret n&apos;est pas détaillé publiquement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Quand PROGESTI est-il pertinent ?
          </h2>
          <div className="prose prose-slate mt-4 max-w-none">
            <p>
              PROGESTI s&apos;adresse aux gérants d&apos;entreprises de nettoyage qui veulent un outil
              complet avec des tarifs publics clairs. L&apos;offre Starter (29,99 € HT/mois) convient
              aux auto-entrepreneurs ; Pro et Premium accompagnent la croissance jusqu&apos;à 20
              utilisateurs.
            </p>
            <p>
              Concrètement, PROGESTI couvre toute la chaîne opérationnelle d&apos;une entreprise
              de propreté :
            </p>
            <ul>
              <li>
                <strong>Planning multi-sites</strong> : affectez vos agents sur différents sites
                avec des fréquences variées (quotidien, hebdomadaire, ponctuel). Gérez les
                remplacements sans ressaisir.
              </li>
              <li>
                <strong>Pointage mobile</strong> : vos agents pointent depuis l&apos;app (Android/iOS)
                avec géolocalisation optionnelle. Les heures remontent automatiquement.
              </li>
              <li>
                <strong>Facturation alignée</strong> : facturez à partir du réalisé terrain,
                sans double saisie. Suivez les impayés et relancez depuis l&apos;outil.
              </li>
              <li>
                <strong>RH et prépaie</strong> : centralisez les contrats, absences et variables
                de paie au même endroit.
              </li>
            </ul>
            <p>
              Si vous gérez des{" "}
              <Link href="/logiciel-entreprise-nettoyage" className="font-semibold text-blue-royal hover:underline">
                bureaux
              </Link>
              , des{" "}
              <Link href="/solutions/syndics" className="font-semibold text-blue-royal hover:underline">
                syndics
              </Link>
              {" "}ou des{" "}
              <Link href="/solutions/fin-de-chantier" className="font-semibold text-blue-royal hover:underline">
                chantiers ponctuels
              </Link>
              , PROGESTI adapte le vocabulaire et les workflows à ces contextes.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-blue-sky/30">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Pour aller plus loin
          </h2>
          <p className="mt-2 text-sm text-slate">
            Explorez les pages ci-dessous pour mieux comprendre ce que PROGESTI propose :
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            <li>
              <Link
                href="/logiciel-entreprise-nettoyage"
                className="block rounded-[3px] border border-blue-mist/70 bg-white p-4 font-semibold text-blue-royal hover:border-blue-royal"
              >
                Logiciel pour entreprise de nettoyage →
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
                href="/essai-gratuit"
                className="block rounded-[3px] border border-lime-cta bg-lime-cta/10 p-4 font-semibold text-blue-deep hover:bg-lime-cta/20"
              >
                Essai gratuit {site.trialDays} jours →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="section bg-white pb-28 lg:pb-16">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Prêt à comparer concrètement ?
          </h2>
          <p className="mt-2 text-slate">
            Le meilleur test reste un essai sur vos propres sites. Créez votre espace en quelques
            minutes et voyez si PROGESTI correspond à votre façon de travailler.
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
            <Link
              href="/blog/progesti-vs-propret"
              className="inline-flex items-center font-bold text-blue-royal underline-offset-4 hover:underline"
            >
              Article détaillé
            </Link>
          </div>
        </div>
      </section>

      <FinalPush title="Le meilleur comparatif, c'est votre propre essai" />
      <MobileCtaBar />
    </>
  );
}
