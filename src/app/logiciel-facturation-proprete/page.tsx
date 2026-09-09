import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalPush } from "@/components/conversion/FinalPush";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { cta, ctaLabels } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";
import { site, trialCopy } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Logiciel facturation propreté — Devis, réalisé terrain, factures",
  description:
    `Logiciel de facturation pour entreprise de nettoyage : du devis au règlement, aligné sur le pointage terrain. Dès 29,99 € HT/mois, ${trialCopy.metaSuffix}`,
  path: "/logiciel-facturation-proprete",
});

export default function PillarFacturationPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <IndustryPageHero
        eyebrow="Facturation propreté"
        title="Logiciel de facturation pour la propreté"
        lead="Du devis signé au règlement encaissé — passez du terrain à la facture sans ressaisie, que ce soit pour un contrat d'entretien récurrent ou une remise en état ponctuelle."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Logiciel facturation propreté" },
        ]}
        trialEvent="pillar_factu_trial"
        demoEvent="pillar_factu_demo"
      />

      <section className="section bg-white">
        <div className="container grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Pourquoi un logiciel de facturation métier pour la propreté ?
            </h2>
            <p className="mt-4 text-slate">
              Un tableur suffit pour éditer une facture de temps en temps. Mais quand vous gérez des dizaines de contrats récurrents, des prestations ponctuelles et des variables chaque mois, les limites apparaissent vite : oublis de facturation, heures terrain non facturées, relances manuelles qui traînent.
            </p>
            <p className="mt-4 text-slate">
              PROGESTI est un{" "}
              <Link href="/logiciel-entreprise-nettoyage" className="font-semibold text-blue-royal hover:underline">
                logiciel conçu pour les entreprises de nettoyage
              </Link>
              . La facturation n&apos;est pas un module isolé : elle est reliée au devis initial, au pointage terrain et au suivi des impayés. Ce que vos agents pointent sur le terrain alimente directement vos factures. Pas de double saisie, pas de fichier parallèle.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Devis convertis en contrats puis en factures",
                "Heures terrain automatiquement remontées",
                "Facturation récurrente et ponctuelle",
                "Suivi des paiements et relances intégrées",
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
              <ButtonLink href={cta.trial} variant="trial" event="trial_start" eventPayload={{ cta: "pillar_factu_trial" }}>
                Essai {site.trialDays} jours
              </ButtonLink>
              <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "pillar_factu_demo" }}>
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delayMs={60}>
            <div className="overflow-hidden rounded-[3px] border border-blue-mist/60 shadow-[0_20px_56px_rgba(11,61,110,0.12)]">
              <Image
                src="/screen-factures.webp"
                alt="Facturation PROGESTI — factures et suivi des paiements"
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
              Du devis au règlement : un flux continu
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate">
              Dans une entreprise de propreté, la facturation commence bien avant l&apos;envoi de la facture. Elle débute au devis, passe par l&apos;exécution terrain, et se termine au recouvrement. PROGESTI relie ces étapes.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <Reveal delayMs={0}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">1</p>
                <h3 className="mt-2 font-display font-extrabold text-blue-deep">Devis</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Créez un devis professionnel, envoyez-le au client. Une fois signé, convertissez-le en contrat ou en intervention ponctuelle en deux clics.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={50}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">2</p>
                <h3 className="mt-2 font-display font-extrabold text-blue-deep">Réalisé terrain</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Vos agents pointent leurs passages via l&apos;app mobile. Les heures travaillées remontent automatiquement, sans ressaisie.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">3</p>
                <h3 className="mt-2 font-display font-extrabold text-blue-deep">Facture</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Générez la facture à partir du réalisé. Contrats récurrents ou fin de chantier : les montants sont justes, les oublis impossibles.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={150}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">4</p>
                <h3 className="mt-2 font-display font-extrabold text-blue-deep">Impayés</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Suivez les échéances, identifiez les retards, relancez depuis le même outil. Pas de tableur parallèle pour gérer la trésorerie.
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
              Facturation récurrente ou fin de chantier : mêmes règles, même outil
            </h2>
            <p className="mt-4 text-slate">
              L&apos;entretien de bureaux hebdomadaire et la remise en état après travaux n&apos;ont pas la même logique. Pourtant, dans les deux cas, vous devez facturer ce qui a été fait, au bon tarif, sans oublier les extras.
            </p>
            <p className="mt-4 text-slate">
              PROGESTI gère les deux modes. Pour un contrat récurrent, la facturation est générée automatiquement selon la fréquence définie. Pour une prestation ponctuelle, vous validez le chantier terminé et éditez la facture dans la foulée — y compris les suppléments demandés sur place.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Entretien récurrent</p>
                <p className="mt-2 text-sm text-slate">
                  Bureaux, syndics, commerces : facturez chaque mois ou trimestre selon le contrat. Les heures pointées confirment que le travail a été fait.
                </p>
              </div>
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Fin de chantier</p>
                <p className="mt-2 text-sm text-slate">
                  Remise en état après travaux : facturez dès la livraison, avec les extras documentés (nettoyage vitres, évacuation déchets).
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
              Pointage terrain et facturation : le lien automatique
            </h2>
            <p className="mt-4 text-slate">
              Le problème classique : vos agents travaillent, mais les heures se perdent entre les feuilles papier, le tableur et la facture finale. Résultat, vous facturez moins que ce qui a été réellement fait.
            </p>
            <p className="mt-4 text-slate">
              Dans PROGESTI, le{" "}
              <Link href="/logiciel-planning-nettoyage" className="font-semibold text-blue-royal hover:underline">
                planning
              </Link>{" "}
              définit ce qui doit être fait. Le pointage mobile trace ce qui a été fait. Et la facturation s&apos;appuie sur ces données. Quand un agent pointe son arrivée et son départ, l&apos;information remonte au bureau. Au moment de facturer, les heures sont déjà là.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Le planning définit les interventions prévues",
                "Le pointage mobile trace les passages réels",
                "La facturation s'aligne sur le terrain",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate md:text-base">
                  <span className="font-bold text-lime-cta" aria-hidden>
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Impayés : voir, relancer, encaisser
            </h2>
            <p className="mt-4 text-slate">
              Une facture envoyée n&apos;est pas une facture payée. Dans beaucoup d&apos;entreprises de propreté, le suivi des impayés se fait sur un fichier à part, avec des relances manuelles qui finissent par se perdre.
            </p>
            <p className="mt-4 text-slate">
              PROGESTI centralise le suivi des paiements. Vous voyez en un coup d&apos;œil les factures échues, les retards et les montants en jeu. Les relances partent depuis le même outil, avec l&apos;historique client sous les yeux. Plus besoin de chercher dans les mails ou les tableurs.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Vue trésorerie</p>
                <p className="mt-2 text-sm text-slate">
                  Encours clients, factures échues, montants à relancer : une vision claire pour piloter la trésorerie.
                </p>
              </div>
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Relances intégrées</p>
                <p className="mt-2 text-sm text-slate">
                  Envoyez une relance depuis la fiche facture, avec l&apos;historique des échanges. Pas de copier-coller entre outils.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-extrabold text-blue-deep">
              Inclus dans PROGESTI
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            <Reveal delayMs={0}>
              <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Devis + factures</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Du devis signé à la facture envoyée. Conversion en un clic, sans ressaisie des lignes ni des tarifs.
                </p>
              </li>
            </Reveal>
            <Reveal delayMs={50}>
              <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Lien terrain</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Le pointage mobile alimente la facturation. Zéro double saisie entre le terrain et le bureau.
                </p>
              </li>
            </Reveal>
            <Reveal delayMs={100}>
              <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Dès 29,99 € tout inclus</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Facturation + planning + pointage — pas de module en supplément. Starter, Pro ou Premium.
                </p>
              </li>
            </Reveal>
          </ul>
          <Reveal delayMs={150}>
            <p className="mt-8 text-center text-sm text-slate">
              Voir aussi :{" "}
              <Link href="/logiciel-entreprise-nettoyage" className="font-semibold text-blue-royal hover:underline">
                logiciel entreprise de nettoyage
              </Link>
              {" · "}
              <Link href="/logiciel-planning-nettoyage" className="font-semibold text-blue-royal hover:underline">
                planning nettoyage
              </Link>
              {" · "}
              <Link href="/logiciel-pointage-proprete" className="font-semibold text-blue-royal hover:underline">
                pointage propreté
              </Link>
              {" · "}
              <Link href="/fonctionnalites/facturation" className="font-semibold text-blue-royal hover:underline">
                module facturation
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <FinalPush />
      <MobileCtaBar />
    </>
  );
}
