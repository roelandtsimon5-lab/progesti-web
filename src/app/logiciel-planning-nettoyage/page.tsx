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
import { site, trialCopy, mainPlan } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Logiciel planning nettoyage — Multi-sites, remplacements, facturation",
  description:
    `Logiciel de planning pour entreprise de nettoyage : affectez agents et sites, gérez absences et remplacements. 149 € HT/mois, ${trialCopy.metaSuffix}`,
  path: "/logiciel-planning-nettoyage",
});

export default function PillarPlanningPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <IndustryPageHero
        eyebrow="Planning propreté"
        title="Logiciel de planning pour le nettoyage"
        lead="Affectez le bon agent au bon site, au bon créneau — bureaux, syndics, locaux pros ou fin de chantier, sans Excel ni messages perdus."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Logiciel planning nettoyage" },
        ]}
        trialEvent="pillar_planning_trial"
        demoEvent="pillar_planning_demo"
      />

      <section className="section bg-white">
        <div className="container grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Pourquoi un planning métier pour la propreté ?
            </h2>
            <p className="mt-4 text-slate">
              Un tableau Excel peut suffire avec trois agents et cinq sites. Mais dès que l&apos;activité grandit — dix sites, des fréquences différentes, des clients exigeants — le bricolage ne tient plus. Les oublis se multiplient, les remplacements se gèrent par SMS, et personne ne sait vraiment qui était où la semaine dernière.
            </p>
            <p className="mt-4 text-slate">
              PROGESTI est un{" "}
              <Link href="/logiciel-entreprise-nettoyage" className="font-semibold text-blue-royal hover:underline">
                logiciel conçu pour les entreprises de nettoyage
              </Link>
              . Le planning n&apos;est pas un module isolé : il est relié au pointage terrain et à la facturation. Ce que vous planifiez, vos agents le pointent sur mobile. Ce qu&apos;ils pointent alimente directement vos factures. Pas de double saisie, pas de fichier parallèle.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Vue semaine par agent ou par site",
                "Fréquences et récurrences automatiques",
                "Remplacements et absences gérés au même endroit",
                "Base pour le pointage mobile et la facturation",
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
              <ButtonLink href={cta.trial} variant="trial" event="trial_start" eventPayload={{ cta: "pillar_planning_trial" }}>
                Essai {site.trialDays} jours
              </ButtonLink>
              <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "pillar_planning_demo" }}>
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delayMs={60}>
            <div className="overflow-hidden rounded-[3px] border border-blue-mist/60 shadow-[0_20px_56px_rgba(11,61,110,0.12)]">
              <Image
                src="/hero-planning.png"
                alt="Planning PROGESTI — vue semaine des passages"
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
              Planning multi-sites : bureaux, syndics, commerces
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate">
              Chaque site a ses contraintes : fréquence de passage, horaires d&apos;accès, interlocuteur sur place. Un logiciel de planning propreté doit gérer cette diversité sans complexité inutile.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal delayMs={0}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Bureaux et tertiaire</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Open spaces, étages multiples, horaires décalés. Planifiez des passages quotidiens ou hebdomadaires selon les besoins du client, avec des créneaux adaptés (tôt le matin, en journée, le soir).
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={50}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Syndics et copropriétés</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Halls, cages d&apos;escalier, locaux poubelles. Gérez plusieurs immeubles avec des fréquences différentes (2× par semaine, mensuel pour les vitres). Gardez l&apos;historique pour répondre aux questions du syndic.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Commerces et locaux pros</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Restaurants, cabinets médicaux, commerces de détail. Des créneaux serrés avant l&apos;ouverture ou après la fermeture, des exigences d&apos;hygiène strictes. Le planning doit être précis et respecté.
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
              Absences et remplacements : réagir sans panique
            </h2>
            <p className="mt-4 text-slate">
              Un agent malade à 6h du matin. Un arrêt de travail qui tombe un vendredi. Une absence prévue qu&apos;on avait oubliée. Dans une entreprise de nettoyage, les imprévus font partie du quotidien.
            </p>
            <p className="mt-4 text-slate">
              Avec PROGESTI, absences et remplacements se gèrent dans le même écran que le planning. Vous voyez immédiatement quels sites sont à découvert, quels agents sont disponibles, et vous réaffectez en quelques clics. Pas besoin de jongler entre un fichier Excel, une messagerie et un planning papier.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Absences prévues</p>
                <p className="mt-2 text-sm text-slate">
                  Congés, formations, rendez-vous : saisissez l&apos;absence à l&apos;avance, le planning s&apos;ajuste et vous alerte si un site reste sans agent.
                </p>
              </div>
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Remplacements de dernière minute</p>
                <p className="mt-2 text-sm text-slate">
                  Maladie ou imprévu le matin même : identifiez rapidement un remplaçant disponible et réaffectez le site sans perdre de temps.
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
              Du pointage terrain à la facture : un seul flux
            </h2>
            <p className="mt-4 text-slate">
              Le planning ne sert pas qu&apos;à savoir qui va où. C&apos;est la base de toute votre chaîne : ce que vous planifiez, vos agents le pointent. Ce qu&apos;ils pointent devient des heures travaillées. Ces heures alimentent vos factures.
            </p>
            <p className="mt-4 text-slate">
              Dans PROGESTI, le lien est automatique. Quand un agent pointe son arrivée et son départ sur l&apos;application mobile, les données remontent au bureau. Vous voyez en temps réel si le passage a eu lieu, combien de temps il a duré, et si la géolocalisation confirme la présence sur site. Au moment de facturer, les heures réalisées sont déjà là — pas besoin de ressaisir, pas de risque d&apos;oublier un passage.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Le planning définit ce qui doit être fait",
                "Le pointage mobile trace ce qui a été fait",
                "La facturation s&apos;appuie sur le réalisé terrain",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate md:text-base">
                  <span className="font-bold text-lime-cta" aria-hidden>
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate">
              Voir aussi :{" "}
              <Link href="/logiciel-facturation-proprete" className="font-semibold text-blue-royal hover:underline">
                facturation propreté
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Fini le bricolage Excel et WhatsApp
            </h2>
            <p className="mt-4 text-slate">
              Excel a ses mérites : c&apos;est gratuit, flexible, tout le monde sait s&apos;en servir. Mais pour gérer un planning de propreté avec dix, vingt ou trente sites, les limites apparaissent vite.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
            <p className="mt-6 text-slate">
              Le passage à un logiciel métier n&apos;est pas une révolution. C&apos;est un gain de temps chaque semaine, moins d&apos;erreurs, et une vision claire de l&apos;activité — pour vous et pour vos clients.
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
                <h3 className="font-display font-extrabold text-blue-deep">Multi-sites</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Bureaux, syndics, commerces — tous vos sites dans un seul planning lisible, avec fréquences et récurrences.
                </p>
              </li>
            </Reveal>
            <Reveal delayMs={50}>
              <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Statuts en temps réel</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  En cours, terminé, retard : le bureau voit l&apos;avancement sans appeler le terrain.
                </p>
              </li>
            </Reveal>
            <Reveal delayMs={100}>
              <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">{mainPlan.monthly} € tout inclus</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Planning + pointage + facturation — pas de module en supplément. {mainPlan.users}.
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
              <Link href="/solutions/bureaux" className="font-semibold text-blue-royal hover:underline">
                bureaux
              </Link>
              {" · "}
              <Link href="/solutions/syndics" className="font-semibold text-blue-royal hover:underline">
                syndics
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
