import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  const c = site.company;
  return (
    <>
      <PageHero eyebrow="Légal" title="Mentions légales" lead={`Éditeur du site ${site.name}.`} />
      <section className="section !pt-0">
        <div className="container max-w-3xl space-y-4 rounded-2xl border border-line bg-white p-8 text-sm text-anthracite">
          <p>
            <strong>Éditeur :</strong> {c.legalName}
          </p>
          <p>
            <strong>Siège social :</strong> {c.address}, {c.city}
          </p>
          <p>
            <strong>SIREN :</strong> {c.siren} — <strong>SIRET :</strong> {c.siret}
          </p>
          <p>
            <strong>TVA intracommunautaire :</strong> {c.tva}
          </p>
          <p>
            <strong>RCS :</strong> {c.rcs} — <strong>Capital social :</strong> {c.capital}
          </p>
          <p>
            <strong>Contact :</strong>{" "}
            <a className="text-emerald-dark" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p>
            <strong>Hébergeur du site :</strong> infrastructure cloud (déploiement type Vercel /
            OVH selon environnement de production).
          </p>
          <p>
            <strong>Directeur de la publication :</strong> {c.legalName}
          </p>
          <p>
            <strong>Marque commerciale :</strong> {site.name}
          </p>
        </div>
      </section>
    </>
  );
}
