import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LeadForm } from "@/components/forms/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez MSNE SAS / PROGESTI — support commercial et questions produit.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Une question ? Écrivons-nous"
        lead="Commercial, essai, migration ou partenariat — l’équipe PROGESTI vous répond."
      />
      <section className="section !pt-0">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-navy p-7 text-white">
            <h2 className="text-xl font-bold text-white">Coordonnées</h2>
            <p className="mt-4 text-sm text-white/80">{site.company.legalName}</p>
            <p className="mt-1 text-sm text-white/80">
              {site.company.address}
              <br />
              {site.company.city}
            </p>
            <p className="mt-4">
              <a className="font-semibold text-emerald" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="mt-6 text-xs text-white/55">
              SIREN {site.company.siren} · SIRET {site.company.siret}
              <br />
              TVA {site.company.tva} · RCS {site.company.rcs}
            </p>
          </div>
          <div className="border border-line bg-white p-6">
            <LeadForm intent="contact" submitLabel="Envoyer le message" />
          </div>
        </div>
      </section>
    </>
  );
}
