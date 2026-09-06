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
  title: "Logiciel pointage propreté — Télégestion & preuves terrain",
  description:
    `Logiciel de pointage pour entreprise de nettoyage : app mobile, géolocalisation, preuves de passages. Dès 29,99 € HT/mois, ${trialCopy.metaSuffix}`,
  path: "/logiciel-pointage-proprete",
});

export default function PillarPointagePage() {
  return (
    <>
      <SoftwareApplicationLd />
      <IndustryPageHero
        eyebrow="Pointage propreté"
        title="Logiciel de pointage pour la propreté"
        lead="Tracez chaque intervention sur le terrain — arrivée, départ, géolocalisation. Fini les feuilles papier et les heures contestées."
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
              Pourquoi un pointage métier pour la propreté ?
            </h2>
            <p className="mt-4 text-slate">
              Les feuilles de pointage papier se perdent. Les heures déclarées par SMS sont contestées. 
              Et quand un client demande une preuve de passage, vous improvisez. Dans une entreprise de 
              nettoyage, le terrain est la vérité — encore faut-il la capturer.
            </p>
            <p className="mt-4 text-slate">
              PROGESTI est un{" "}
              <Link href="/logiciel-entreprise-nettoyage" className="font-semibold text-blue-royal hover:underline">
                logiciel conçu pour les entreprises de nettoyage
              </Link>
              . Le pointage mobile n&apos;est pas un gadget isolé : il est relié au planning et à la 
              facturation. Quand un agent pointe, les données remontent au bureau. Quand vous facturez, 
              les heures terrain sont déjà là.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Pointage mobile (Android & iOS)",
                "Géolocalisation optionnelle",
                "Preuves de passages horodatées",
                "Lien direct avec planning et facturation",
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
              <ButtonLink href={cta.trial} variant="trial" event="trial_start" eventPayload={{ cta: "pillar_pointage_trial" }}>
                Essai {site.trialDays} jours
              </ButtonLink>
              <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "pillar_pointage_demo" }}>
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delayMs={60}>
            <div className="overflow-hidden rounded-[3px] border border-blue-mist/60 shadow-[0_20px_56px_rgba(11,61,110,0.12)]">
              <Image
                src="/screen-telegestion.webp"
                alt="Pointage PROGESTI — télégestion mobile"
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
              Pointage terrain : bureaux, syndics, commerces
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate">
              Que vous interveniez en open space, dans un hall d&apos;immeuble ou chez un commerçant, 
              le pointage mobile trace le passage — sans papier, sans contestation possible.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal delayMs={0}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Bureaux et tertiaire</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Équipes tôt le matin ou le soir : le pointage confirme l&apos;arrivée et le départ, 
                  même quand personne n&apos;est là pour vérifier.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={50}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Syndics et copropriétés</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Preuves de passages pour le syndic : historique, horaires, et géolocalisation si activée. 
                  Vous répondez aux questions avec des faits.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Commerces et locaux pros</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Créneaux serrés avant ouverture ou après fermeture : le pointage horodaté rassure 
                  le client — et documente le travail effectué.
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
              Fini les heures contestées
            </h2>
            <p className="mt-4 text-slate">
              « Mon agent dit qu&apos;il était là, le client dit qu&apos;il n&apos;a vu personne. » 
              Ce genre de litige coûte du temps, de l&apos;argent et parfois un contrat.
            </p>
            <p className="mt-4 text-slate">
              Avec le pointage mobile PROGESTI, chaque arrivée et chaque départ sont horodatés. 
              La géolocalisation optionnelle confirme la présence sur site. En cas de contestation, 
              vous avez les données — pas juste une parole contre une autre.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Arrivée et départ tracés</p>
                <p className="mt-2 text-sm text-slate">
                  L&apos;agent pointe sur son mobile. L&apos;heure exacte est enregistrée — pas de déclaration 
                  approximative le lendemain.
                </p>
              </div>
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Géolocalisation optionnelle</p>
                <p className="mt-2 text-sm text-slate">
                  Si vous l&apos;activez, la position GPS confirme que l&apos;agent était bien sur le site 
                  au moment du pointage.
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
              Du pointage à la facture : un seul flux
            </h2>
            <p className="mt-4 text-slate">
              Le pointage ne sert pas qu&apos;à contrôler. C&apos;est la base de votre facturation. 
              Dans PROGESTI, ce qui est pointé alimente directement les heures facturables — sans ressaisie.
            </p>
            <p className="mt-4 text-slate">
              Le{" "}
              <Link href="/logiciel-planning-nettoyage" className="font-semibold text-blue-royal hover:underline">
                planning
              </Link>{" "}
              définit ce qui doit être fait. Le pointage trace ce qui a été fait. Et la{" "}
              <Link href="/logiciel-facturation-proprete" className="font-semibold text-blue-royal hover:underline">
                facturation
              </Link>{" "}
              s&apos;appuie sur ces données. Moins d&apos;oublis, moins d&apos;écarts, des factures alignées sur le terrain.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Le planning définit les interventions prévues",
                "Le pointage mobile trace les passages réels",
                "La facturation s'aligne sur le réalisé terrain",
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
              App mobile pour vos agents
            </h2>
            <p className="mt-4 text-slate">
              Vos agents ont leur planning dans la poche. Ils voient les sites à couvrir, 
              les consignes d&apos;accès, et pointent en un tap. Pas besoin de formation compliquée : 
              l&apos;interface est pensée pour le terrain.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Android & iOS</p>
                <p className="mt-2 text-sm text-slate">
                  Compatible avec les smartphones de vos agents — pas besoin de matériel spécifique.
                </p>
              </div>
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Mode hors-ligne</p>
                <p className="mt-2 text-sm text-slate">
                  Le pointage fonctionne même sans réseau — les données se synchronisent dès que la 
                  connexion revient.
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
                <h3 className="font-display font-extrabold text-blue-deep">Pointage mobile</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Arrivée, départ, géoloc optionnelle. Les données remontent au bureau en temps réel.
                </p>
              </li>
            </Reveal>
            <Reveal delayMs={50}>
              <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Preuves de passages</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Historique conservé, horodatage, prêt pour répondre aux questions clients ou syndics.
                </p>
              </li>
            </Reveal>
            <Reveal delayMs={100}>
              <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                <h3 className="font-display font-extrabold text-blue-deep">Dès 29,99 € tout inclus</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Pointage + planning + facturation — pas de module en supplément. Starter, Pro ou Premium.
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
              <Link href="/logiciel-facturation-proprete" className="font-semibold text-blue-royal hover:underline">
                facturation propreté
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
