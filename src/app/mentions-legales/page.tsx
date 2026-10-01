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
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: c.legalName,
    alternateName: [c.tradeName, site.name],
    url: site.url,
    email: site.email,
    telephone: site.phone,
    taxID: c.tva,
    iso6523Code: `0002:${c.siren}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: c.address,
      addressLocality: c.locality,
      postalCode: c.postalCode,
      addressCountry: "FR",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
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
            <strong className="text-blue-deep">Éditeur :</strong> {c.legalName} (nom commercial {c.tradeName}), éditeur du
            logiciel {site.name}. Forme juridique : {c.legalForm}.
          </p>
          <p>
            <strong className="text-blue-deep">Siège social :</strong> {c.address}, {c.city}
          </p>
          <p>
            <strong className="text-blue-deep">Capital social :</strong> {c.capital}
          </p>
          <p>
            <strong className="text-blue-deep">RCS :</strong> {c.rcs} {c.siren} — <strong className="text-blue-deep">SIREN :</strong>{" "}
            {c.siren} — <strong className="text-blue-deep">SIRET (siège) :</strong> {c.siret}
          </p>
          <p>
            <strong className="text-blue-deep">TVA intracommunautaire :</strong> {c.tva}
          </p>
          <p>
            <strong className="text-blue-deep">Gérant :</strong> {c.manager}
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
            <strong className="text-blue-deep">Hébergeur du site :</strong> Railway Corporation, 548 Market St, PMB 68956, San Francisco,
            California 94104, États-Unis —{" "}
            <a className="font-semibold text-blue-royal hover:underline" href="https://railway.com" rel="noopener noreferrer">
              railway.com
            </a>
            . Le trafic du site transite par le réseau de diffusion et de protection Cloudflare.
          </p>
          <p>
            <strong className="text-blue-deep">Directeur de la publication :</strong> {c.manager}, gérant de {c.legalName}
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
