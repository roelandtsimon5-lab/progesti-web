import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta } from "@/lib/cta";
import { faqItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "FAQ complète PROGESTI : essai, sécurité, hébergement, mobile, résiliation, import de données.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Toutes les réponses avant de vous lancer"
        lead="Essai, sécurité, mobile, résiliation, import — tout ce qu’il faut pour décider sereinement."
        primaryHref={cta.trialApp}
        primaryLabel="Commencez gratuitement"
        secondaryHref={cta.demo}
        secondaryLabel="Voir une démonstration"
      />
      <section className="section !pt-0">
        <div className="container max-w-3xl">
          <FaqAccordion items={[...faqItems]} />
          <div className="mt-10 rounded-2xl border border-line bg-fog p-6 text-center">
            <p className="font-medium text-anthracite">Une question reste sans réponse ?</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact">Nous contacter</ButtonLink>
              <ButtonLink href={cta.trialApp} variant="secondary">
                Essayer quand même
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
