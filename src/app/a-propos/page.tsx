import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";

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
        lead="Nous construisons un logiciel simple et complet pour les auto-entrepreneurs et petites entreprises de nettoyage qui veulent arrêter Excel et WhatsApp."
        primaryHref="/essai-gratuit"
        primaryLabel="Essayer 2 mois"
        secondaryHref="/contact"
        secondaryLabel="Nous contacter"
      />
      <section className="section !pt-0">
        <div className="container grid max-w-4xl gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-8">
            <h2 className="text-2xl font-extrabold text-ink">Notre intention</h2>
            <p className="mt-3 text-muted">
              Donner aux dirigeants de sociétés de nettoyage une vision claire : qui va où, ce qui
              a été fait, et ce qui doit être facturé — sans usine à gaz.
            </p>
            <ul className="mt-5 space-y-2 text-anthracite">
              <li>✓ Métier d’abord (propreté / services terrain)</li>
              <li>✓ Prix publics, modules inclus</li>
              <li>✓ Essai long pour décider sereinement</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-fog p-8">
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
