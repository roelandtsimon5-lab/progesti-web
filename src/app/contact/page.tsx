import type { Metadata } from "next";
import { ConversionBlock } from "@/components/conversion/ConversionBlock";
import { LeadForm } from "@/components/forms/LeadForm";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";
import { cta } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description: "Contactez MSNE SAS / PROGESTI — support commercial et questions produit.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-blue-deep py-14 text-white md:py-16">
        <div className="container max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-green-action">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Parlons de votre activité</h1>
          <p className="mt-4 text-lg text-white/85">
            Commercial, essai, migration ou partenariat — l’équipe PROGESTI vous répond sous 24h
            ouvrées.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={cta.trialApp}
              event="trial_start"
              eventPayload={{ cta: "v3_contact_hero_trial" }}
            >
              Essai gratuit
            </ButtonLink>
            <ButtonLink
              href={cta.demo}
              variant="outline-white"
              eventPayload={{ cta: "v3_contact_hero_demo" }}
            >
              Demander une démo
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section !pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl bg-gradient-to-br from-blue-deep to-blue-royal p-8 text-white">
            <h2 className="text-xl font-bold text-white">Coordonnées</h2>
            <p className="mt-4 text-sm text-white/85">{site.company.legalName}</p>
            <p className="mt-1 text-sm text-white/85">
              {site.company.address}
              <br />
              {site.company.city}
            </p>
            <p className="mt-6">
              <a
                className="block text-lg font-semibold text-green-action hover:underline"
                href={`tel:${site.phoneTel}`}
              >
                {site.phone}
              </a>
              <a className="mt-2 block text-lg font-semibold text-green-action hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <ul className="mt-8 space-y-2 text-sm text-white/80">
              <li>· Essai 2 mois sans CB</li>
              <li>· Mise en place offerte</li>
              <li>· Logiciel cloud — Android & iOS</li>
            </ul>
            <p className="mt-8 text-xs text-white/55">
              SIREN {site.company.siren} · SIRET {site.company.siret}
              <br />
              TVA {site.company.tva} · RCS {site.company.rcs}
            </p>
          </div>
          <div className="rounded-2xl border border-blue-mist bg-white p-6 shadow-[0_16px_48px_rgba(11,61,110,0.08)] md:p-8">
            <h2 className="text-xl font-extrabold text-blue-deep">Envoyer un message</h2>
            <p className="mt-1 text-sm text-slate">Essai, démo, question commerciale ou support.</p>
            <div className="mt-6">
              <LeadForm intent="contact" submitLabel="Envoyer le message" />
            </div>
          </div>
        </div>
      </section>

      <ConversionBlock variant="demo" />
    </>
  );
}
