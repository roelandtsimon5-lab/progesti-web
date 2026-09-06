import type { Metadata } from "next";
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
  title: "Facturation électronique propreté — Préparez la réforme 2026-2027",
  description: `Préparez votre entreprise de nettoyage à la facturation électronique obligatoire. Export structuré, conformité progressive. Dès 29,99 € HT/mois, ${trialCopy.metaSuffix}`,
  path: "/facturation-electronique-proprete",
});

export default function FacturationElectroniquePage() {
  return (
    <>
      <SoftwareApplicationLd />
      <IndustryPageHero
        eyebrow="Facturation électronique"
        title="Préparez la réforme e-facture 2026-2027"
        lead="La facturation électronique devient obligatoire pour toutes les entreprises françaises. Anticipez dès maintenant avec un outil qui structure vos données de facturation."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Facturation électronique propreté" },
        ]}
        trialEvent="efacture_trial"
        demoEvent="efacture_demo"
      />

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Réforme e-facture : ce qui change pour les entreprises de nettoyage
            </h2>
            <p className="mt-4 text-slate">
              À partir de 2026, puis progressivement jusqu&apos;en 2027, toutes les entreprises assujetties à la TVA devront émettre et recevoir leurs factures au format électronique via une plateforme de dématérialisation partenaire (PDP) ou le portail public de facturation.
            </p>
            <p className="mt-4 text-slate">
              Pour une entreprise de nettoyage, cela signifie que vos factures — contrats récurrents bureaux, prestations syndics, remises en état ponctuelles — devront respecter un format structuré (Factur-X, UBL ou CII) et transiter par un canal agréé.
            </p>
            <div className="mt-8 rounded-[3px] border-l-4 border-lime-cta bg-blue-sky/30 p-5">
              <p className="font-display font-bold text-blue-deep">
                Calendrier indicatif de la réforme
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate">
                <li>
                  <strong>1er septembre 2026</strong> : obligation de réception pour toutes les entreprises
                </li>
                <li>
                  <strong>1er septembre 2026</strong> : obligation d&apos;émission pour les grandes entreprises et ETI
                </li>
                <li>
                  <strong>1er septembre 2027</strong> : obligation d&apos;émission pour les PME et micro-entreprises
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate/80">
                Dates susceptibles d&apos;évolution selon les publications officielles.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Comment PROGESTI vous prépare
            </h2>
            <p className="mt-4 text-slate">
              PROGESTI structure vos données de facturation dès aujourd&apos;hui. Quand la réforme entrera en vigueur, vous disposerez d&apos;une base propre et exportable vers la solution de dématérialisation de votre choix.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal delayMs={0}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">
                  Données structurées
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Chaque facture PROGESTI contient les mentions légales, les lignes détaillées, les taux de TVA et les références client nécessaires à la conformité.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={50}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">
                  Export comptable
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Exportez vos factures vers votre logiciel comptable ou votre expert-comptable. Les données sont prêtes pour une intégration ultérieure avec une PDP.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">
                  Conformité progressive
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Pas besoin d&apos;attendre la date butoir. Commencez à structurer vos factures maintenant pour être prêt le jour J, sans migration de dernière minute.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={150}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">
                  Accompagnement FR
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  L&apos;équipe PROGESTI suit l&apos;évolution de la réforme et vous accompagne sur les questions de mise en conformité. Support au {site.phone}.
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
              Ce que PROGESTI fait — et ne fait pas
            </h2>
            <p className="mt-4 text-slate">
              PROGESTI est un logiciel de gestion pour entreprises de nettoyage : planning, pointage terrain et facturation. Il n&apos;est pas une plateforme de dématérialisation partenaire (PDP) agréée par l&apos;administration fiscale.
            </p>
            <p className="mt-4 text-slate">
              Concrètement, PROGESTI vous permet de :
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                "Créer des factures structurées avec toutes les mentions légales",
                "Exporter vos données vers votre outil comptable ou votre expert",
                "Préparer la transition vers la e-facture sans refondre votre organisation",
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
              Pour l&apos;envoi effectif des factures au format réglementaire (Factur-X, etc.), vous aurez besoin d&apos;une solution PDP ou du portail public. PROGESTI prépare vos données pour que cette étape soit fluide.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Un outil métier, pas un bricolage comptable
            </h2>
            <p className="mt-4 text-slate">
              La réforme e-facture pousse les entreprises à structurer leurs données. Pour une entreprise de nettoyage, le vrai enjeu n&apos;est pas seulement d&apos;émettre des factures au bon format — c&apos;est de savoir ce qu&apos;il y a dedans.
            </p>
            <p className="mt-4 text-slate">
              Avec PROGESTI, vos factures sont alignées sur le{" "}
              <Link href="/logiciel-planning-nettoyage" className="font-semibold text-blue-royal hover:underline">
                planning
              </Link>{" "}
              et le pointage terrain. Ce que vos agents font sur le terrain alimente directement vos factures. Pas de ressaisie, pas d&apos;écart entre le réalisé et le facturé.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={cta.trial}
                variant="trial"
                event="trial_start"
                eventPayload={{ cta: "efacture_trial" }}
              >
                Essai {site.trialDays} jours
              </ButtonLink>
              <ButtonLink
                href={cta.demo}
                variant="secondary"
                eventPayload={{ cta: "efacture_demo" }}
              >
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-slate">
              Une question sur la réforme ou sur PROGESTI ?{" "}
              <a href={`tel:${site.phoneTel}`} className="font-semibold text-blue-royal hover:underline">
                {site.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white pb-28 lg:pb-16">
        <div className="container">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-extrabold text-blue-deep">
              Inclus dans PROGESTI
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            <Reveal delayMs={0}>
              <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Planning + pointage</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Planifiez vos agents, suivez leurs passages sur mobile. La base de votre facturation.
                </p>
              </li>
            </Reveal>
            <Reveal delayMs={50}>
              <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Devis + factures</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Du devis signé à la facture structurée. Export comptable disponible.
                </p>
              </li>
            </Reveal>
            <Reveal delayMs={100}>
              <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Dès 29,99 € tout inclus</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Starter, Pro ou Premium. Tous modules inclus, pas de supplément par fonctionnalité.
                </p>
              </li>
            </Reveal>
          </ul>
          <Reveal delayMs={150}>
            <p className="mt-8 text-center text-sm text-slate">
              Voir aussi :{" "}
              <Link href="/logiciel-facturation-proprete" className="font-semibold text-blue-royal hover:underline">
                logiciel facturation propreté
              </Link>
              {" · "}
              <Link href="/fonctionnalites/facturation" className="font-semibold text-blue-royal hover:underline">
                module facturation
              </Link>
              {" · "}
              <Link href="/tarifs" className="font-semibold text-blue-royal hover:underline">
                tarifs
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <FinalPush title="Préparez la e-facture sans stress" />
      <MobileCtaBar />
    </>
  );
}
