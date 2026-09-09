import type { Metadata } from "next";
import Link from "next/link";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";
import { cta } from "@/lib/cta";

/** Avis non validés — noindex,follow + self-canonical, comme /cas-clients. */
export const metadata: Metadata = {
  title: "Avis clients",
  description:
    "Les témoignages clients PROGESTI seront publiés après validation. Pas de citations inventées.",
  alternates: { canonical: "https://progesti.fr/temoignages" },
  robots: { index: false, follow: true },
};

export default function TemoignagesPage() {
  return (
    <>
      <IndustryPageHero
        eyebrow="Avis clients"
        title="Témoignages publiés après validation"
        lead="Nous ne publions pas de citations ni de notes clients tant qu'elles ne sont pas validées. Les retours terrain arriveront ici dès qu'ils le sont."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Témoignages" },
        ]}
        trialEvent="temoignages_trial"
        demoEvent="temoignages_demo"
      />
      <section className="section bg-white">
        <div className="container">
          <p className="max-w-2xl rounded-[3px] border border-amber/40 bg-amber/10 px-4 py-3 text-sm text-anthracite">
            <strong className="text-blue-deep">Transparence :</strong> aucun avis client n&apos;est inventé
            sur cette page. En attendant, voir les{" "}
            <Link href="/cas-usage" className="font-bold text-blue-royal hover:underline">
              cas d&apos;usage
            </Link>{" "}
            et les{" "}
            <Link href="/cas-clients" className="font-bold text-blue-royal hover:underline">
              scénarios métier
            </Link>
            .
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              className="inline-flex items-center font-bold text-blue-royal hover:underline"
              href={`mailto:${site.email}?subject=Témoignage%20PROGESTI`}
            >
              Envoyer un témoignage →
            </a>
            <ButtonLink
              href={cta.trial}
              variant="secondary"
              event="trial_start"
              eventPayload={{ cta: "temoignages_trial" }}
            >
              Essai {site.trialDays} jours
            </ButtonLink>
            <Link href="/faq" className="text-sm font-bold text-blue-royal hover:underline">
              FAQ →
            </Link>
          </div>
        </div>
      </section>
      <MobileCtaBar />
    </>
  );
}
