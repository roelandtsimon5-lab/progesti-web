import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Clients",
  description: "PROGESTI accompagne les professionnels de la propreté. Références clients à venir.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Conçu pour les pros du nettoyage"
        lead="Auto-entrepreneurs, TPE et structures multi-sites. Les logos et références publiques seront publiés avec l’accord des early users."
        primaryHref="/essai-gratuit"
        primaryLabel="Rejoindre les early users"
        secondaryHref="/cas-clients"
        secondaryLabel="Cas clients"
      />
      <section className="section !pt-0">
        <div className="container grid gap-4 md:grid-cols-3">
          {["Auto-entrepreneurs", "Petites équipes", "Multi-sites"].map((label) => (
            <div key={label} className="rounded-2xl border border-line bg-white p-6 text-center">
              <p className="font-display text-lg font-bold text-ink">{label}</p>
            </div>
          ))}
        </div>
        <div className="container mt-8 text-center">
          <ButtonLink href="/demo" variant="secondary">
            Voir la démo produit
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
