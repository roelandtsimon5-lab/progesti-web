import type { Metadata } from "next";

import { LeadForm } from "@/components/forms/LeadForm";

import { IndustryPageHero } from "@/components/industry/IndustryPageHero";

import { MobileCtaBar } from "@/components/layout/MobileCtaBar";

import { site } from "@/lib/site";

import { pageMeta } from "@/lib/seo";



export const metadata: Metadata = pageMeta({

  title: "Contact",

  description: "Contactez MSNE SAS / PROGESTI — support commercial et questions produit.",

  path: "/contact",

});



export default function ContactPage() {

  return (

    <>

      <IndustryPageHero

        eyebrow="Équipe MSNE SAS · Toulouse"

        title="Parlons de votre activité"

        lead="Commercial, essai, migration ou question produit — réponse sous 24h ouvrées."

        breadcrumbs={[

          { label: "Accueil", href: "/" },

          { label: "Contact" },

        ]}

        trialEvent="contact_hero_trial"

        demoEvent="contact_hero_demo"

      />



      <section className="section bg-white pb-28 lg:pb-16">

        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          <div className="rounded-[3px] bg-gradient-to-br from-blue-deep to-blue-royal p-8 text-white">

            <h2 className="font-display text-xl font-extrabold">Coordonnées directes</h2>

            <p className="mt-4 text-sm text-white/85">{site.company.legalName}</p>

            <p className="mt-1 text-sm text-white/85">

              {site.company.address}

              <br />

              {site.company.city}

            </p>

            <p className="mt-6">

              <a

                className="block text-xl font-extrabold text-lime-cta hover:underline"

                href={`tel:${site.phoneTel}`}

              >

                {site.phone}

              </a>

              <a

                className="mt-2 block text-base font-semibold text-white/90 hover:underline"

                href={`mailto:${site.email}`}

              >

                {site.email}

              </a>

            </p>

            <ul className="mt-8 space-y-2 text-sm text-white/80">

              <li>✓ Essai {site.trialDays} jours · sans CB</li>

              <li>✓ 149 € HT/mois · tout inclus</li>

              <li>✓ Apps Android & iOS</li>

            </ul>

            <p className="mt-8 text-xs text-white/55">

              SIREN {site.company.siren} · RCS {site.company.rcs}

            </p>

          </div>

          <div className="rounded-[3px] border border-blue-mist bg-[#F5F8FB] p-6 md:p-8">

            <h2 className="font-display text-xl font-extrabold text-blue-deep">Envoyer un message</h2>

            <p className="mt-1 text-sm text-slate">On vous rappelle — pas de bot, pas de ticket anonyme.</p>

            <div className="mt-6">

              <LeadForm id="contact-form" intent="contact" submitLabel="Envoyer le message" />

            </div>

          </div>

        </div>

      </section>



      <MobileCtaBar
        primary={{
          href: "#contact-form",
          label: "Envoyer un message",
          variant: "trial",
          anchor: true,
          className:
            "flex flex-1 items-center justify-center rounded-[2px] bg-lime-cta py-3.5 font-display text-sm font-bold text-blue-deep transition hover:bg-lime-cta-hover",
        }}
        secondary={{
          href: `tel:${site.phoneTel}`,
          label: site.phone,
          variant: "outline-white",
          className:
            "flex flex-1 items-center justify-center rounded-[2px] border-2 border-white/40 py-3.5 font-display text-sm font-bold text-white",
        }}
      />

    </>

  );

}

