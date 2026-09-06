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
  title: "Logiciel pointage propreté — Télégestion mobile & preuves terrain",
  description: `Logiciel de pointage pour entreprise de nettoyage : app mobile, géolocalisation, heures terrain en direct. Dès 29,99 € HT/mois, ${trialCopy.metaSuffix}`,
  path: "/logiciel-pointage-proprete",
});

export default function PillarPointagePage() {
  return (
    <>
      <SoftwareApplicationLd />
      <IndustryPageHero
        eyebrow="Pointage propreté"
        title="Logiciel de pointage pour le nettoyage"
        lead="Vos agents pointent sur mobile, les heures remontent au bureau en direct. Fini les feuilles papier et les heures contestées."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Logiciel pointage propreté" },
        ]}
        trialEvent="pillar_pointage_trial"
        demoEvent="pillar_pointage_demo"
      />

      <section className="section bg-white">
        <div className="container grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Pourquoi un pointage mobile pour la propreté ?
            </h2>
            <p className="mt-4 text-slate">
              Dans une entreprise de nettoyage, les agents travaillent sur le terrain — souvent seuls, parfois tôt le matin ou tard le soir. Sans outil de pointage adapté, les heures se perdent entre les feuilles papier, les appels et les estimations de fin de semaine.
            </p>
            <p className="mt-4 text-slate">
              PROGESTI transforme le smartphone de vos agents en outil de pointage connecté au reste de l&apos;activité. Ils consultent leur planning, pointent arrivée et départ, et les heures remontent au bureau en direct. Plus de ressaisie le vendredi, plus de litiges sur les heures travaillées.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Pointage mobile sur Android et iOS",
                "Géolocalisation optionnelle pour confirmer la présence",
                "Heures terrain visibles au bureau en direct",
                "Base pour la prépaie et la facturation",
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
              <ButtonLink
                href={cta.trial}
                variant="trial"
                event="trial_start"
                eventPayload={{ cta: "pillar_pointage_trial" }}
              >
                Essai {site.trialDays} jours
              </ButtonLink>
              <ButtonLink
                href={cta.demo}
                variant="secondary"
                eventPayload={{ cta: "pillar_pointage_demo" }}
              >
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delayMs={60}>
            <div className="overflow-hidden rounded-[3px] border border-blue-mist/60 shadow-[0_20px_56px_rgba(11,61,110,0.12)]">
              <Image
                src="/screen-telegestion.webp"
                alt="Télégestion PROGESTI — pointage mobile et suivi interventions"
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
              Du terrain au bureau : un flux automatique
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate">
              Le pointage PROGESTI n&apos;est pas un outil isolé. Il s&apos;inscrit dans le flux complet de gestion : ce que vous planifiez, vos agents le pointent. Ce qu&apos;ils pointent alimente la paie et la facturation.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <Reveal delayMs={0}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">1</p>
                <h3 className="mt-2 font-display font-extrabold text-blue-deep">Planning</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  L&apos;agent voit ses sites du jour sur l&apos;app mobile. Il sait où aller, quand, et quelles consignes respecter.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={50}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">2</p>
                <h3 className="mt-2 font-display font-extrabold text-blue-deep">Arrivée</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Pointage arrivée depuis le smartphone. Horodatage automatique, géolocalisation optionnelle.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">3</p>
                <h3 className="mt-2 font-display font-extrabold text-blue-deep">Départ</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Pointage départ en fin d&apos;intervention. Les heures sont enregistrées, rattachées au site et au client.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={150}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">4</p>
                <h3 className="mt-2 font-display font-extrabold text-blue-deep">Bureau</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Les heures remontent en direct. Prépaie et facturation s&apos;appuient sur le réalisé terrain.
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
              Géolocalisation optionnelle : preuve sans flicage
            </h2>
            <p className="mt-4 text-slate">
              Certains clients exigent des preuves de passage — syndics, donneurs d&apos;ordre publics, facility managers. La géolocalisation optionnelle de PROGESTI permet de confirmer que l&apos;agent était bien sur site au moment du pointage.
            </p>
            <p className="mt-4 text-slate">
              Vous activez ou désactivez cette fonction selon vos contrats et votre politique interne. L&apos;objectif n&apos;est pas de surveiller en permanence, mais de pouvoir répondre avec des faits quand une question se pose.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Preuves syndic</p>
                <p className="mt-2 text-sm text-slate">
                  Quand un gestionnaire demande si le hall a été nettoyé mardi, vous avez l&apos;horodatage et la position.
                </p>
              </div>
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Litiges heures</p>
                <p className="mt-2 text-sm text-slate">
                  Un agent conteste ses heures ? Vous avez les pointages horodatés, pas un souvenir.
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
              Prépaie et facturation : les heures sont déjà là
            </h2>
            <p className="mt-4 text-slate">
              Le problème classique : fin de mois, course aux feuilles papier, recomptage des heures, saisie dans le tableur de paie. Et à côté, la facturation qui attend des chiffres fiables.
            </p>
            <p className="mt-4 text-slate">
              Avec PROGESTI, les heures pointées alimentent directement la gestion RH pour les variables de paie, et la facturation pour facturer le réalisé. Plus de double saisie, moins d&apos;écarts entre ce qui a été fait et ce qui est payé ou facturé.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Heures terrain exportables pour la prépaie",
                "Facturation alignée sur le réalisé",
                "Historique consultable par site, agent, période",
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
              Multi-sites, multi-interventions
            </h2>
            <p className="mt-4 text-slate">
              Un agent de nettoyage peut enchaîner trois sites dans la même matinée. Avec PROGESTI, chaque pointage est rattaché au bon site et au bon client. Pas de confusion à la fin de la semaine, pas de recherche dans les mails pour savoir qui était où.
            </p>
            <p className="mt-4 text-slate">
              L&apos;agent voit son planning du jour sur l&apos;app. Il pointe son arrivée sur le premier site, son départ, puis recommence sur le suivant. Le bureau suit en direct qui est en intervention et où.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={cta.trial}
                variant="trial"
                event="trial_start"
                eventPayload={{ cta: "pillar_pointage_trial2" }}
              >
                Essai {site.trialDays} jours
              </ButtonLink>
              <ButtonLink
                href={cta.demo}
                variant="secondary"
                eventPayload={{ cta: "pillar_pointage_demo2" }}
              >
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-slate">
              Une question ?{" "}
              <a href={`tel:${site.phoneTel}`} className="font-semibold text-blue-royal hover:underline">
                {site.phone}
              </a>
            </p>
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
                <h3 className="font-display font-extrabold text-blue-deep">App mobile</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Android et iOS. Pointage, planning du jour, consignes d&apos;accès — tout dans la poche de l&apos;agent.
                </p>
              </li>
            </Reveal>
            <Reveal delayMs={50}>
              <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Lien planning & facture</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Le pointage s&apos;inscrit dans le flux complet : ce qui est planifié, pointé, puis facturé.
                </p>
              </li>
            </Reveal>
            <Reveal delayMs={100}>
              <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Dès 29,99 € tout inclus</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Pointage + planning + facturation. Starter, Pro ou Premium, tous modules inclus.
                </p>
              </li>
            </Reveal>
          </ul>
          <Reveal delayMs={150}>
            <p className="mt-8 text-center text-sm text-slate">
              Voir aussi :{" "}
              <Link href="/logiciel-planning-nettoyage" className="font-semibold text-blue-royal hover:underline">
                logiciel planning nettoyage
              </Link>
              {" · "}
              <Link href="/fonctionnalites/pointage" className="font-semibold text-blue-royal hover:underline">
                module pointage
              </Link>
              {" · "}
              <Link href="/logiciel-facturation-proprete" className="font-semibold text-blue-royal hover:underline">
                logiciel facturation propreté
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
