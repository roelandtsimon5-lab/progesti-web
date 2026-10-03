import type { Metadata } from "next";
import Link from "next/link";
import { FinalPush } from "@/components/conversion/FinalPush";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { BreadcrumbListLd } from "@/components/seo/BreadcrumbListLd";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { cta, ctaLabels } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const directAnswer =
  "Un logiciel de devis pour entreprise de nettoyage permet de créer des devis rattachés à chaque client et site, d'en suivre le statut (brouillon, envoyé, signé, accepté, refusé) et de les convertir en contrat sans ressaisie. Dans PROGESTI, le module Devis est inclus dans toutes les offres : Gratuit pour indépendants, Pro 49,99 € HT/mois, Premium 99,99 € HT/mois.";

const devisFaq = [
  {
    q: "Que doit contenir un devis de nettoyage ?",
    a: "Le client et les sites concernés, les prestations, la fréquence ou la date, un prix à l'heure ou au forfait avec total HT, TVA et TTC, les conditions de règlement et une date de validité (30 jours par défaut dans PROGESTI).",
  },
  {
    q: "Peut-on convertir un devis accepté en contrat sans tout ressaisir ?",
    a: "Oui : à l'acceptation, le devis se convertit en contrat, et les sites, fréquences et tarifs alimentent le planning sans ressaisie.",
  },
  {
    q: "Comment suivre les devis en attente et les relancer ?",
    a: "Les statuts (brouillon, envoyé, signé, accepté, refusé) sont suivis dans l'outil, avec l'historique des devis par client. Les relances se gèrent dans le CRM intégré ; une règle de relance de devis est paramétrable et reste à activer : vous gardez la main sur le contenu et le moment.",
  },
  {
    q: "Le client peut-il signer le devis en ligne ?",
    a: "Oui : il reçoit un lien, saisit son nom et accepte le devis ; le PDF signé est horodaté et conservé avec une piste d'audit. C'est la signature en ligne interne PROGESTI. L'envoi se fait par e-mail ou en export PDF.",
  },
  {
    q: "Y a-t-il une offre gratuite pour un auto-entrepreneur du nettoyage ?",
    a: "Oui : l'offre Gratuit (0 € HT/mois) est réservée aux indépendants, auto-entrepreneurs et micro-entreprises, avec 1 administrateur et tous les modules, dont Devis.",
  },
  {
    q: "Combien coûte le logiciel et puis-je l'essayer ?",
    a: "Gratuit pour les indépendants (0 € HT/mois) ; Pro 49,99 € HT/mois (5 utilisateurs) ; Premium 99,99 € HT/mois (20 utilisateurs). Essai de 15 jours sans carte bancaire pour les offres payantes.",
  },
] as const;

export const metadata: Metadata = pageMeta({
  title: "Logiciel devis nettoyage : devis signé en ligne",
  description: `Faites vos devis de nettoyage en ligne : prestations types, total HT/TTC, signature du client en ligne. Gratuit pour indépendants, essai ${site.trialDays} j sans CB.`,
  path: "/logiciel-devis-nettoyage",
});

export default function LogicielDevisNettoyagePage() {
  return (
    <>
      <SoftwareApplicationLd />
      <FaqPageLd items={[...devisFaq]} />
      <BreadcrumbListLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Logiciel entreprise nettoyage", path: "/logiciel-entreprise-nettoyage" },
          { name: "Logiciel devis nettoyage" },
        ]}
      />
      <IndustryPageHero
        eyebrow="Devis propreté"
        title="Logiciel de devis nettoyage : envoyez, faites signer, suivez"
        lead="Du devis envoyé au contrat planifié : un seul outil, relié au client, au planning et à la facture."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Logiciel entreprise nettoyage", href: "/logiciel-entreprise-nettoyage" },
          { label: "Logiciel devis nettoyage" },
        ]}
        trialEvent="pillar_devis_trial"
        demoEvent="pillar_devis_demo"
      />

      <DirectAnswer>{directAnswer}</DirectAnswer>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Pourquoi un logiciel de devis plutôt que Word ou Excel ?
            </h2>
            <p className="mt-4 text-slate">
              Un devis de nettoyage rédigé dans Word, c&apos;est vite des fichiers nommés <em>devis_v2_final</em>, un
              envoi par e-mail sans suivi, et un contrat que l&apos;exploitation ne découvre qu&apos;après la
              signature. Il faut alors recréer le client, les sites, les fréquences et les montants dans le planning
              et dans la facturation. Chaque ressaisie est une occasion d&apos;erreur.
            </p>
            <p className="mt-4 text-slate">
              PROGESTI est un{" "}
              <Link href="/logiciel-entreprise-nettoyage" className="font-semibold text-blue-royal hover:underline">
                logiciel pour entreprise de nettoyage
              </Link>
              . Le devis part de la fiche client ou prospect, reste rattaché à ses sites, et devient contrat quand le
              client accepte. Les informations saisies une fois circulent jusqu&apos;à la facture.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={cta.trial} variant="trial" event="trial_start" eventPayload={{ cta: "pillar_devis_trial_body" }}>
                Essai {site.trialDays} jours sans carte bancaire
              </ButtonLink>
              <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "pillar_devis_demo_body" }}>
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
            <p className="mt-3 text-sm text-slate">Gratuit pour indépendants · sans CB · tarif public</p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Ce qu&apos;un bon devis de nettoyage doit contenir
              </h2>
            <p className="mt-4 text-slate">
              Quel que soit l&apos;outil, un devis clair évite les malentendus avec le client. Voici la liste de
              contrôle que nous recommandons :
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Le client et le ou les sites concernés, avec les interlocuteurs utiles.",
                "Les prestations décrites par zone (sols, sanitaires, vitres, parties communes…).",
                "La fréquence de passage pour un contrat récurrent, ou la date et la durée pour une intervention ponctuelle.",
                "Le prix : à l'heure ou au forfait, avec le total hors taxes, la TVA et le total TTC.",
                "Les conditions : date de validité du devis, mode de règlement, conditions générales.",
                "Les informations de votre société (forme juridique, SIRET, numéro de TVA).",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate md:text-base">
                  <span className="font-bold text-lime-cta" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate">
              Dans PROGESTI, les lignes du devis sont à l&apos;heure ou au forfait, et le total HT, la TVA et le TTC
              sont calculés pour vous. Pour un contrat hebdomadaire à l&apos;heure, le montant affiché est une
              estimation sur quatre semaines, avec une note explicite. Le devis reprend les informations de votre
              société, le SIRET et le numéro de TVA du client lorsqu&apos;ils sont renseignés, et une date de validité
              (30 jours par défaut). Pour savoir ce qui est imposé ou seulement recommandé, lisez les{" "}
              <Link href="/blog/mentions-obligatoires-devis-nettoyage" className="font-semibold text-blue-royal hover:underline">
                mentions obligatoires d&apos;un devis de nettoyage
              </Link>
              , et pour un exemple rempli le{" "}
              <Link href="/blog/modele-devis-nettoyage-bureaux" className="font-semibold text-blue-royal hover:underline">
                modèle de devis de nettoyage de bureaux
              </Link>
              . Pour les règles légales applicables à votre situation, rapprochez-vous de votre expert-comptable ou de{" "}
              <a
                href="https://entreprendre.service-public.gouv.fr/"
                className="font-semibold text-blue-royal hover:underline"
                rel="noopener noreferrer"
              >
                Service Public Entreprendre
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>


      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Word ou Excel, ou un logiciel de devis métier : ce qui change
            </h2>
            <div className="mt-6 overflow-x-auto">
              <table className="industry-data-table w-full text-left text-sm">
                <thead>
                  <tr>
                    <th>Étape</th>
                    <th>Word / Excel</th>
                    <th>Logiciel de devis PROGESTI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Création</td>
                    <td>Copier-coller de l&apos;adresse du client</td>
                    <td>Devis créé depuis la fiche client ou prospect</td>
                  </tr>
                  <tr>
                    <td>Suivi</td>
                    <td>Liste à part, ou mémoire du commercial</td>
                    <td>Statuts et historique par client</td>
                  </tr>
                  <tr>
                    <td>Après l&apos;acceptation</td>
                    <td>Ressaisie du client, des sites et des fréquences</td>
                    <td>Conversion en contrat, planning alimenté</td>
                  </tr>
                  <tr>
                    <td>Versions</td>
                    <td>Fichiers <em>_v2</em>, <em>_final</em> éparpillés</td>
                    <td>Devis rattachés au client, au même endroit</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-slate">
              Un tableur reste suffisant pour quelques devis par an. Dès que vous répondez à plusieurs prospects en
              parallèle, que vous gérez des contrats récurrents et que l&apos;exploitation doit démarrer vite après la
              signature, le temps perdu à ressaisir se voit. Si vous comparez plusieurs solutions, le comparatif{" "}
              <Link href="/alternative-propret" className="font-semibold text-blue-royal hover:underline">
                alternative à Propret
              </Link>{" "}
              présente les tarifs publics et les différences de façon factuelle.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Du devis signé au contrat et au planning
            </h2>
            <p className="mt-4 text-slate">
              Quand le client accepte, le devis se convertit en contrat : les sites, les fréquences et les tarifs
              alimentent le{" "}
              <Link href="/logiciel-planning-nettoyage" className="font-semibold text-blue-royal hover:underline">
                logiciel de planning nettoyage
              </Link>{" "}
              sans ressaisie. Ce que vos agents pointent ensuite sur le terrain sert de base à la facture : c&apos;est
              le rôle du{" "}
              <Link href="/logiciel-facturation-proprete" className="font-semibold text-blue-royal hover:underline">
                logiciel de facturation pour la propreté
              </Link>
              .
            </p>
            <p className="mt-4 text-slate">
              Pour voir comment fonctionne l&apos;écran de création pas à pas, consultez la fiche{" "}
              <Link href="/fonctionnalites/devis" className="font-semibold text-blue-royal hover:underline">
                module Devis
              </Link>
              .
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["1. Devis", "Créé depuis la fiche client ou prospect, rattaché à ses sites."],
                ["2. Contrat", "À l'acceptation, conversion en contrat sans ressaisie."],
                ["3. Planning et facture", "Les fréquences alimentent le planning ; le réalisé alimente la facture."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-[3px] border border-line bg-paper p-5">
                  <p className="font-display font-bold text-ink">{t}</p>
                  <p className="mt-2 text-sm text-slate">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Suivi commercial : statuts, relances, historique
            </h2>
            <p className="mt-4 text-slate">
              Chaque devis a un statut : brouillon, envoyé, signé, accepté ou refusé. Le commercial voit ce qui est en
              attente, et l&apos;historique des devis reste consultable par client. Le devis porte une date de
              validité, imprimée sur le PDF.
            </p>
            <p className="mt-4 text-slate">
              Pour les relances, le CRM intégré garde le fil des échanges. Une règle de relance de devis est
              paramétrable ; elle reste à activer, et vous gardez la main sur le contenu comme sur le moment de
              l&apos;envoi.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Devis pour un syndic, des bureaux ou une fin de chantier
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Syndic et copropriété</p>
                <p className="mt-2 text-sm text-slate">
                  Un devis par immeuble, avec des prestations récurrentes claires par zone (halls, escaliers, locaux
                  techniques). À l&apos;acceptation, les sites et fréquences sont prêts pour le planning. Voir la
                  page{" "}
                  <Link href="/solutions/syndics" className="font-semibold text-blue-royal hover:underline">
                    solution syndics
                  </Link>
                  .
                </p>
              </div>
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Bureaux</p>
                <p className="mt-2 text-sm text-slate">
                  Un contrat récurrent avec des lignes distinctes (open space quotidien, sanitaires hebdomadaires,
                  vitrerie mensuelle). Chaque ligne devient une fréquence planifiable. Voir la page{" "}
                  <Link href="/solutions/bureaux" className="font-semibold text-blue-royal hover:underline">
                    solution bureaux
                  </Link>
                  .
                </p>
              </div>
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Fin de chantier</p>
                <p className="mt-2 text-sm text-slate">
                  Un devis ponctuel, au forfait ou au temps passé, pour une remise en état. Voir la page{" "}
                  <Link href="/solutions/fin-de-chantier" className="font-semibold text-blue-royal hover:underline">
                    solution fin de chantier
                  </Link>
                  .
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
              Envoyer le devis : e-mail, PDF ou signature en ligne
            </h2>
            <p className="mt-4 text-slate">
              Vous envoyez le devis par e-mail depuis PROGESTI ou vous l&apos;exportez en PDF. Le client peut aussi
              le signer en ligne : il reçoit un lien, saisit son nom et accepte le devis ; le PDF signé est horodaté
              et conservé avec une piste d&apos;audit. C&apos;est la signature en ligne interne PROGESTI.
            </p>
            <p className="mt-4 text-slate">
              Côté présentation, vous ajoutez votre logo, vos mentions (conditions générales, mode de règlement,
              acceptation) et un préfixe de numérotation. Le numéro du devis se compose de ce préfixe, de la date et de
              deux chiffres.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Tarifs : le module Devis est inclus
            </h2>
            <p className="mt-4 text-slate">
              Le module Devis n&apos;est pas un supplément : tous les modules sont inclus dans chaque offre.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link
                href="/solutions/auto-entrepreneurs"
                className="rounded-[3px] border border-blue-mist/70 bg-blue-sky/10 p-5 text-center hover:border-blue-royal"
              >
                <p className="font-display text-2xl font-extrabold text-blue-deep">Gratuit</p>
                <p className="text-sm text-slate">0 € HT/mois · 1 admin · indépendants, AE, micro</p>
              </Link>
              <div className="rounded-[3px] border-2 border-lime-cta bg-lime-cta/10 p-5 text-center">
                <p className="font-display text-2xl font-extrabold text-blue-deep">Pro · 49,99 €</p>
                <p className="text-sm text-slate">HT/mois · 5 utilisateurs</p>
              </div>
              <div className="rounded-[3px] border border-blue-mist/70 bg-blue-sky/10 p-5 text-center">
                <p className="font-display text-2xl font-extrabold text-blue-deep">Premium · 99,99 €</p>
                <p className="text-sm text-slate">HT/mois · 20 utilisateurs</p>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-slate">
              Essai {site.trialDays} jours sans CB ·{" "}
              <Link href="/tarifs" className="font-semibold text-blue-royal hover:underline">
                tarifs publics →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-blue-sky/30">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Questions fréquentes — devis nettoyage
          </h2>
          <div className="mt-6">
            <IndustryFaq items={devisFaq} />
          </div>
          <p className="mt-6 text-sm text-slate">
            Une autre question ?{" "}
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-blue-royal hover:underline">
              {site.phone}
            </a>{" "}
            ·{" "}
            <Link href="/contact" className="font-semibold text-blue-royal hover:underline">
              Contact
            </Link>
          </p>
        </div>
      </section>

      <FinalPush
        title="Essayez sur vos vrais devis"
        lead={`Essai ${site.trialDays} jours sans CB · Devis, planning et facture inclus · Support FR ${site.phone}`}
      />
      <MobileCtaBar />
    </>
  );
}
