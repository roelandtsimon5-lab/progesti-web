import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Témoignages",
  description: "Avis d’entreprises de nettoyage sur PROGESTI. Publication dès validation.",
};

export default function TemoignagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Témoignages"
        title="La preuve par le terrain"
        lead="Nous ne publions que des avis réels. En attendant, testez le produit vous-même en démo ou essai 2 mois."
        primaryHref="/essai-gratuit"
        primaryLabel="Essai gratuit"
        secondaryHref="/demo"
        secondaryLabel="Démo interactive"
      />
      <section className="section !pt-0">
        <div className="container max-w-2xl rounded-2xl border border-line bg-white p-8 text-center">
          <p className="text-anthracite">
            Vous utilisez déjà PROGESTI et souhaitez partager votre retour ?
          </p>
          <a
            className="mt-4 inline-block font-bold text-emerald-dark"
            href={`mailto:${site.email}?subject=Témoignage%20PROGESTI`}
          >
            Envoyer un témoignage →
          </a>
          <div className="mt-8">
            <ButtonLink href="/faq" variant="secondary">
              Lire la FAQ
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
