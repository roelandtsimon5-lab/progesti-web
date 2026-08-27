import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import Link from "next/link";

import { cta } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const pageUrl = `${site.url}/logiciel-entreprise-nettoyage`;

export const metadata: Metadata = pageMeta({
  title: "Logiciel pour entreprise de nettoyage — Essai gratuit",
  description:
    "Gérant d'entreprise de nettoyage ? Planning, pointage, facture en un seul logiciel. 149 € HT/mois, 5 utilisateurs inclus. Essai 7 jours sans engagement.",
  path: "/logiciel-entreprise-nettoyage",
  openGraph: {
    title: "Logiciel pour entreprise de nettoyage — Essai gratuit",
    description:
      "Gérant d'entreprise de nettoyage ? Planning, pointage, facture en un seul logiciel. 149 € HT/mois, 5 utilisateurs inclus. Essai 7 jours sans engagement.",
  },
});

const faq = [
  {
    q: "Qu'est-ce qu'un logiciel pour entreprise de nettoyage ?",
    a: "C'est un outil métier qui centralise planning des agents, pointage terrain, bons d'intervention, facturation et suivi d'activité — à la place d'Excel, de WhatsApp et de factures manuelles. Il relie le bureau au terrain pour éviter les ressaisies et les oublis.",
  },
  {
    q: "PROGESTI convient-il aux petites structures ?",
    a: "Oui. L'offre à 149 € HT/mois inclut jusqu'à 5 utilisateurs et tous les modules. Idéal pour les TPE et petites équipes de propreté.",
  },
  {
    q: "Combien coûte PROGESTI ?",
    a: "149 € HT/mois, jusqu'à 5 utilisateurs, tous modules inclus. Pas de frais cachés, pas de module en supplément. Essai 7 jours sans engagement.",
  },
  {
    q: "L'essai est-il vraiment sans engagement ?",
    a: "Oui. 7 jours complets pour tester sur vos propres sites. Vous décidez ensuite de continuer ou non.",
  },
  {
    q: "Faut-il installer quelque chose ?",
    a: "Non. PROGESTI fonctionne en cloud (navigateur web) et via des apps Android et iOS pour le terrain. Pas de frais d'installation, pas de serveur à gérer.",
  },
  {
    q: "Peut-on importer ses données depuis Excel ?",
    a: "Oui. Vous pouvez reprendre clients, sites et contrats. L'équipe peut vous accompagner sur l'intégration si besoin.",
  },
  {
    q: "Le logiciel gère-t-il plusieurs sites et plusieurs clients ?",
    a: "Oui. Planning multi-sites, fiches clients illimitées, contrats avec fréquences et renouvellements — c'est le cœur du logiciel.",
  },
  {
    q: "Y a-t-il un module de pointage mobile ?",
    a: "Oui. L'application mobile permet aux agents de pointer leur arrivée et leur départ sur site, avec géolocalisation si activée. Les données remontent au bureau en temps réel.",
  },
];

export default function PillarNettoyagePage() {
  return (
    <>
      <SoftwareApplicationLd url={pageUrl} />
      <FaqPageLd items={faq} />

      {/* Hero — H1 unique */}
      <PageHero
        title="Logiciel pour entreprise de nettoyage"
        lead="Un logiciel de gestion qui relie planning, pointage terrain et facturation — conçu pour les entreprises de propreté. 149 € HT/mois, 5 utilisateurs, tout inclus. Essai 7 jours."
        primaryHref={cta.demo}
        primaryLabel="Demander une démo"
        secondaryHref={cta.trial}
        secondaryLabel="Essai 7 jours gratuit"
      />

      {/* Section 1 : Le problème */}
      <section className="section !pt-0 bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-ink">
              Le problème que vous connaissez
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Vous gérez les plannings sur Excel — une colonne par agent, une
              ligne par site. Les absences arrivent par SMS le dimanche soir.
              Vous ressaisissez les heures pour préparer la paie. Les factures
              partent en retard parce qu'il faut recouper le planning, les bons
              d'intervention et les heures pointées.
            </p>
            <ul className="mt-6 space-y-3 text-anthracite">
              <li className="flex gap-3">
                <span className="text-red-600">✗</span>
                <span>
                  <strong className="text-ink">Excel + WhatsApp</strong> : pas
                  de lien entre le planning et le terrain. L'info se perd.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">✗</span>
                <span>
                  <strong className="text-ink">Double saisie</strong> : vous
                  recopiez les heures, les sites, les clients — plusieurs fois
                  par semaine.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">✗</span>
                <span>
                  <strong className="text-ink">Factures en retard</strong> : sans
                  vision claire du réalisé, vous facturez à l'aveugle ou trop
                  tard.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">✗</span>
                <span>
                  <strong className="text-ink">Aucun historique fiable</strong>{" "}
                  : en cas de litige client, difficile de prouver les passages.
                </span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              Pour aller plus loin :{" "}
              <Link
                href="/blog/cout-cache-excel-whatsapp-entreprise-nettoyage"
                className="font-semibold text-emerald-dark hover:underline"
              >
                Le coût caché d'Excel + WhatsApp
              </Link>
              {" · "}
              <Link
                href="/blog/passer-de-excel-a-un-logiciel-nettoyage"
                className="font-semibold text-emerald-dark hover:underline"
              >
                Passer d'Excel à un logiciel
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section 2 : Ce que doit faire un logiciel */}
      <section className="section bg-[#F5F8FB]">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-ink">
              Ce que doit faire un logiciel pour entreprise de nettoyage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Un vrai logiciel métier ne se contente pas de stocker des données.
              Il relie les étapes du flux opérationnel : planifier les agents,
              suivre ce qui est fait sur le terrain, facturer le réalisé.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-line bg-white p-5">
                <h3 className="font-display text-lg font-bold text-ink">
                  Planification
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Affecter le bon agent au bon site, au bon créneau. Gérer les
                  fréquences (quotidien, hebdo, mensuel) et les remplacements.
                </p>
                <Link
                  href="/logiciel-planning-nettoyage"
                  className="mt-3 inline-block text-sm font-semibold text-emerald-dark hover:underline"
                >
                  Détail du planning →
                </Link>
              </div>
              <div className="rounded-xl border border-line bg-white p-5">
                <h3 className="font-display text-lg font-bold text-ink">
                  Pointage & bons d'intervention
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Savoir qui est passé, à quelle heure, avec preuve à l'appui.
                  Éviter les litiges et fiabiliser la prépaie.
                </p>
                <Link
                  href="/fonctionnalites/pointage"
                  className="mt-3 inline-block text-sm font-semibold text-emerald-dark hover:underline"
                >
                  Module pointage →
                </Link>
              </div>
              <div className="rounded-xl border border-line bg-white p-5">
                <h3 className="font-display text-lg font-bold text-ink">
                  Facturation liée au terrain
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Facturer ce qui a été réellement fait, sans ressaisie. Suivre
                  les impayés et les relances.
                </p>
                <Link
                  href="/logiciel-facturation-proprete"
                  className="mt-3 inline-block text-sm font-semibold text-emerald-dark hover:underline"
                >
                  Détail facturation →
                </Link>
              </div>
              <div className="rounded-xl border border-line bg-white p-5">
                <h3 className="font-display text-lg font-bold text-ink">
                  Tableaux de bord & pilotage
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Voir l'activité du mois, la charge par agent, la rentabilité
                  par contrat — sans exporter vers un tableur.
                </p>
                <Link
                  href="/fonctionnalites/rentabilite"
                  className="mt-3 inline-block text-sm font-semibold text-emerald-dark hover:underline"
                >
                  Module tableaux de bord →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 3 : Comment PROGESTI le fait */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-ink">
              Comment PROGESTI répond à ces besoins
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              PROGESTI est un logiciel de gestion conçu pour les entreprises de
              nettoyage — pas un ERP générique adapté après coup. Tous les
              modules sont pensés pour le vocabulaire et les flux du métier :
              sites, agents, fréquences, passages, heures, facturation récurrente.
            </p>
            <div className="mt-8">
              <h3 className="font-display text-lg font-bold text-ink">
                11 modules inclus, pas de supplément
              </h3>
              <ul className="mt-4 grid gap-2 text-sm text-anthracite sm:grid-cols-2">
                <li>
                  <Link
                    href="/fonctionnalites/planification"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="text-green-deep">✓</span>
                    <span>Planification agents / sites</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fonctionnalites/pointage"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="text-green-deep">✓</span>
                    <span>Pointage mobile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fonctionnalites/pointage"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="text-green-deep">✓</span>
                    <span>Bons d'intervention</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fonctionnalites/facturation"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="text-green-deep">✓</span>
                    <span>Facturation & relation client</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fonctionnalites/gestion-rh"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="text-green-deep">✓</span>
                    <span>Gestion RH</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fonctionnalites/gestion-rh"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="text-green-deep">✓</span>
                    <span>Prépaie (variables)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fonctionnalites"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="text-green-deep">✓</span>
                    <span>Contrats & renouvellements</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fonctionnalites"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="text-green-deep">✓</span>
                    <span>Stock consommables</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fonctionnalites"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="text-green-deep">✓</span>
                    <span>Géolocalisation</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fonctionnalites"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="text-green-deep">✓</span>
                    <span>Supervision qualité</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fonctionnalites/rentabilite"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="text-green-deep">✓</span>
                    <span>Tableaux de bord</span>
                  </Link>
                </li>
              </ul>
            </div>
            <p className="mt-6 text-sm text-muted">
              Tous les modules sont inclus à 149 € HT/mois. Pas de
              module payant en plus.{" "}
              <Link
                href="/fonctionnalites"
                className="font-semibold text-emerald-dark hover:underline"
              >
                Voir toutes les fonctionnalités
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section 4 : Pour qui */}
      <section className="section bg-[#F5F8FB]">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-ink">
              Pour qui est fait PROGESTI ?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              PROGESTI s'adresse aux TPE et petites PME de nettoyage —
              indépendants, structures jusqu'à 5 utilisateurs. Pas aux ETI de
              50+ salariés qui ont besoin d'un ERP sur mesure avec intégration
              SIRH et comptabilité groupe.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/solutions/bureaux"
                className="block rounded-xl border border-line bg-white p-5 transition hover:border-emerald"
              >
                <h3 className="font-display text-base font-bold text-ink">
                  Nettoyage de bureaux
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Open spaces, immeubles tertiaires, fréquences
                  hebdomadaires ou quotidiennes.
                </p>
              </Link>
              <Link
                href="/solutions/syndics"
                className="block rounded-xl border border-line bg-white p-5 transition hover:border-emerald"
              >
                <h3 className="font-display text-base font-bold text-ink">
                  Syndics & copropriétés
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Parties communes, multi-immeubles, reporting mensuel.
                </p>
              </Link>
              <Link
                href="/solutions/professionnels"
                className="block rounded-xl border border-line bg-white p-5 transition hover:border-emerald"
              >
                <h3 className="font-display text-base font-bold text-ink">
                  Locaux professionnels
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Cabinets médicaux, commerces, restaurants — horaires serrés.
                </p>
              </Link>
              <Link
                href="/solutions/fin-de-chantier"
                className="block rounded-xl border border-line bg-white p-5 transition hover:border-emerald"
              >
                <h3 className="font-display text-base font-bold text-ink">
                  Fin de chantier
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Remise en état après travaux, prestations ponctuelles.
                </p>
              </Link>
              <Link
                href="/solutions/auto-entrepreneurs"
                className="block rounded-xl border border-line bg-white p-5 transition hover:border-emerald"
              >
                <h3 className="font-display text-base font-bold text-ink">
                  Auto-entrepreneurs
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Démarrer simple, sans usine à gaz, avec un outil qui grandit
                  avec vous.
                </p>
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">
              Guides métier :{" "}
              <Link
                href="/blog/logiciel-nettoyage-bureaux-criteres"
                className="font-semibold text-emerald-dark hover:underline"
              >
                Critères bureaux
              </Link>
              {" · "}
              <Link
                href="/blog/travailler-avec-syndic-acces-reporting"
                className="font-semibold text-emerald-dark hover:underline"
              >
                Travailler avec un syndic
              </Link>
              {" · "}
              <Link
                href="/blog/ae-proprete-demarrer-sans-usine-a-gaz"
                className="font-semibold text-emerald-dark hover:underline"
              >
                Démarrer en AE
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section 5 : Prix */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-ink">
              Tarif unique, tout inclus
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Vous n'avez pas besoin d'un devis sur mesure pour savoir combien
              coûte PROGESTI. Le prix est affiché, les modules sont tous
              inclus, et l'essai est gratuit pendant 7 jours.
            </p>
            <div className="mt-8 rounded-xl border-2 border-green-action/30 bg-[#FAFCFE] p-6 text-center">
              <p className="font-display text-4xl font-extrabold text-blue-deep">
                149 € <span className="text-lg font-bold text-slate">HT / mois</span>
              </p>
              <p className="mt-2 text-lg text-slate">Jusqu'à 5 utilisateurs · Tous modules inclus</p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li>✓ Cloud + Android & iOS, sans frais d'installation</li>
              <li>✓ Mises à jour incluses, pas de version payante à part</li>
              <li>✓ Essai 7 jours sans engagement</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href="/tarifs"
                variant="secondary"
                eventPayload={{ cta: "v3_pillar_nettoyage_tarifs" }}
              >
                Voir les tarifs détaillés
              </ButtonLink>
              <ButtonLink
                href={cta.demo}
                variant="secondary"
                eventPayload={{ cta: "v3_pillar_nettoyage_demo" }}
              >
                Demander une démo
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 6 : FAQ */}
      <section className="section bg-[#F5F8FB]">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-blue-deep">
            Questions fréquentes
          </h2>
          <div className="mt-8">
            <FaqAccordion items={faq} />
          </div>
          <p className="mt-8 text-sm text-muted">
            D'autres questions ?{" "}
            <Link
              href="/faq"
              className="font-semibold text-emerald-dark hover:underline"
            >
              Voir toutes les FAQ
            </Link>
            {" · "}
            <Link
              href="/contact"
              className="font-semibold text-emerald-dark hover:underline"
            >
              Nous contacter
            </Link>
          </p>
        </div>
      </section>

      {/* CTA final */}
      <ConversionBlock variant="essai" />
    </>
  );
}
