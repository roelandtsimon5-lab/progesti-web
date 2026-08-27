import type { Metadata } from "next";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Mentions légales",
  description: `Mentions légales ${site.name} — éditeur ${site.company.legalName}.`,
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  const c = site.company;
  return (
    <>
      <IndustryPageHero
        eyebrow="Légal"
        title="Mentions légales"
        lead={`Éditeur du site ${site.name}.`}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Mentions légales" },
        ]}
        showCtas={false}
      />
      <section className="section bg-white">
        <div className="container max-w-3xl space-y-4 text-sm text-anthracite">
          <p>
            <strong className="text-blue-deep">Éditeur :</strong> {c.legalName}
          </p>
          <p>
            <strong className="text-blue-deep">Siège social :</strong> {c.address}, {c.city}
          </p>
          <p>
            <strong className="text-blue-deep">SIREN :</strong> {c.siren} — <strong className="text-blue-deep">SIRET :</strong> {c.siret}
          </p>
          <p>
            <strong className="text-blue-deep">TVA intracommunautaire :</strong> {c.tva}
          </p>
          <p>
            <strong className="text-blue-deep">RCS :</strong> {c.rcs} — <strong className="text-blue-deep">Capital social :</strong> {c.capital}
          </p>
          <p>
            <strong className="text-blue-deep">Contact :</strong>{" "}
            <a className="font-semibold text-blue-royal hover:underline" href={`tel:${site.phoneTel}`}>
              {site.phone}
            </a>
            {" · "}
            <a className="font-semibold text-blue-royal hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p>
            <strong className="text-blue-deep">Hébergeur du site :</strong> infrastructure cloud (déploiement type Vercel /
            OVH selon environnement de production).
          </p>
          <p>
            <strong className="text-blue-deep">Directeur de la publication :</strong> {c.legalName}
          </p>
          <p>
            <strong className="text-blue-deep">Marque commerciale :</strong> {site.name}
          </p>
        </div>
      </section>
      <MobileCtaBar />
    </>
  );
}
