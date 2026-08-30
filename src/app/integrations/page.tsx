import type { Metadata } from "next";

import Link from "next/link";

import { FinalPush } from "@/components/conversion/FinalPush";

import { IndustryPageHero } from "@/components/industry/IndustryPageHero";

import { MobileCtaBar } from "@/components/layout/MobileCtaBar";

import { Reveal } from "@/components/ui/Reveal";

import { pageMeta } from "@/lib/seo";

import { site } from "@/lib/site";



export const metadata: Metadata = pageMeta({

  title: "Intégrations",

  description:

    "Intégrations PROGESTI : apps mobile Android/iOS, exports comptables, Google Agenda pour les démos. CRM interne pour les leads site.",

  path: "/integrations",

});



const integrations = [

  {

    title: "Apps mobile Android & iOS",

    text: "Pointage terrain, bons d'intervention et photos depuis le smartphone de vos agents — synchronisés avec le planning bureau.",

    tags: ["Terrain", "Pointage", "Offline partiel"],

  },

  {

    title: "Exports comptables",

    text: "Factures et écritures exportables pour votre cabinet ou logiciel comptable. Formats standards, pas de double saisie.",

    tags: ["Facturation", "Export", "Compta"],

  },

  {

    title: "Google Agenda",

    text: "Prise de rendez-vous commerciaux et démos via calendrier partagé — lien configurable pour votre équipe.",

    tags: ["Commercial", "Démo"],

  },

  {

    title: "CRM interne leads",

    text: "Les demandes essai, démo et contact du site alimentent un suivi interne — webhook configurable pour votre CRM.",

    tags: ["Leads", "Webhook"],

  },

  {

    title: "Télégestion & supervision",

    text: "Vue consolidée des passages, retards et sites non pointés pour les responsables d'exploitation.",

    tags: ["Pilotage", "Multi-sites"],

  },

  {

    title: "API & évolutions",

    text: "Besoin d'une connexion spécifique (ERP, badgeuse, BI) ? Contactez l'équipe — roadmap orientée métier propreté.",

    tags: ["Sur mesure", "Support FR"],

  },

] as const;



export default function IntegrationsPage() {

  return (

    <>

      <IndustryPageHero

        eyebrow="Écosystème"

        title="PROGESTI s'interface avec votre quotidien"

        lead={`Mobile terrain, exports comptables, prise de rendez-vous — sans usine à gaz. Support FR au ${site.phone}.`}

        breadcrumbs={[

          { label: "Accueil", href: "/" },

          { label: "Intégrations" },

        ]}

        trialEvent="integrations_trial"

        demoEvent="integrations_demo"

      />



      <section className="section bg-white pb-28 lg:pb-16">

        <div className="container">

          <Reveal>

            <p className="eyebrow">Connecteurs & flux</p>

            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep">Ce qui est disponible aujourd'hui</h2>

            <p className="mt-3 max-w-2xl text-slate">

              Pas de marketplace à 200 connecteurs — des briques utiles pour le métier, documentées honnêtement.

            </p>

          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {integrations.map((item, i) => (

              <Reveal key={item.title} delayMs={i * 40}>

                <li className="industry-card-lift flex h-full flex-col rounded-[3px] border border-blue-mist/80 border-t-[3px] border-t-lime-cta bg-[#F5F8FB] p-6">

                  <h2 className="font-display text-lg font-extrabold text-blue-deep">{item.title}</h2>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{item.text}</p>

                  <ul className="mt-4 flex flex-wrap gap-2">

                    {item.tags.map((tag) => (

                      <li

                        key={tag}

                        className="rounded-[2px] bg-white px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-blue-royal"

                      >

                        {tag}

                      </li>

                    ))}

                  </ul>

                </li>

              </Reveal>

            ))}

          </ul>

          <p className="mt-12 text-sm text-slate">

            Voir aussi le{" "}

            <Link href="/fonctionnalites" className="font-semibold text-blue-royal hover:underline">

              détail des modules

            </Link>{" "}

            et les{" "}

            <Link href="/demo" className="font-semibold text-blue-royal hover:underline">

              démo ou rendez-vous

            </Link>

            .

          </p>

        </div>

      </section>



      <FinalPush
        title="Une connexion manquante ?"
        lead="Parlez-nous de votre ERP, compta ou badgeuse — roadmap orientée métier propreté."
      />

      <MobileCtaBar />

    </>

  );

}

