import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";
import { cta } from "@/lib/cta";

export const metadata: Metadata = {
  title: "À propos",
  description: `À propos de ${site.name} — logiciel de gestion pour entreprises de nettoyage, édité par ${site.company.legalName}.`,
};

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="PROGESTI, conçu pour le terrain de la propreté"
        lead="Nous construisons un logiciel simple et complet pour les entreprises de nettoyage — bureaux, syndics, professionnels, fin de chantier et indépendants — qui veulent organiser le métier sans Excel ni WhatsApp comme système."
        primaryHref={cta.trialApp}
        primaryLabel="Essayer 2 mois"
        secondaryHref="/contact"
        secondaryLabel="Nous contacter"
      />
      <section className="section !pt-0">
        <div className="container grid max-w-4xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-ink">Notre intention</h2>
            <p className="mt-3 text-muted">
              Donner aux dirigeants une vision claire : qui va où, ce qui a été fait, et ce qui
              doit être facturé — avec le vocabulaire du ménage professionnel.
            </p>
            <ul className="mt-5 space-y-2 text-anthracite">
              <li>✓ Métier d’abord (propreté / services terrain)</li>
              <li>✓ Prix publics, modules inclus</li>
              <li>✓ Essai long pour décider sereinement</li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              Découvrir les{" "}
              <Link href="/solutions" className="font-semibold text-emerald-dark hover:underline">
                solutions
              </Link>{" "}
              et le{" "}
              <Link href="/blog" className="font-semibold text-emerald-dark hover:underline">
                blog
              </Link>
              .
            </p>
          </div>
          <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h2 className="text-2xl font-extrabold text-ink">Éditeur</h2>
            <p className="mt-3 text-sm text-anthracite">
              <strong className="text-ink">{site.company.legalName}</strong>
              <br />
              {site.company.address}
              <br />
              {site.company.city}
              <br />
              SIREN {site.company.siren} · RCS {site.company.rcs}
            </p>
            <p className="mt-4 text-sm">
              <a className="font-bold text-emerald-dark" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <div className="mt-6">
              <ButtonLink href="/logiciel-entreprise-nettoyage" variant="secondary">
                Découvrir le produit
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
