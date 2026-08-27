import Link from "next/link";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta, ctaLabels } from "@/lib/cta";

export default function NotFound() {
  return (
    <section className="industry-hero-bg relative flex min-h-[60vh] items-center pb-28 lg:pb-16">
      <div className="container max-w-xl py-16 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-cta/90">Erreur 404</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-white md:text-5xl">
          Page introuvable
        </h1>
        <p className="mt-4 text-lg text-white/75">
          Ce lien ne mène pas à une page active. Retournez à l&apos;accueil ou démarrez un essai.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" className="!rounded-[2px]">
            Accueil
          </ButtonLink>
          <ButtonLink
            href={cta.trial}
            variant="trial"
            className="!rounded-[2px]"
            event="trial_start"
            eventPayload={{ cta: "404_trial" }}
          >
            {ctaLabels.trialShort}
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-white/55">
          <Link href="/contact" className="font-semibold text-white/80 underline-offset-4 hover:underline">
            Besoin d&apos;aide ? Contactez-nous
          </Link>
        </p>
        <nav className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-white/60" aria-label="Pages utiles">
          {[
            ["/tarifs", "Tarifs"],
            ["/demo", ctaLabels.demoGate],
            ["/temoignages", "Avis clients"],
            ["/fonctionnalites", "Fonctionnalités"],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="font-semibold hover:text-white/90 hover:underline">
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <MobileCtaBar />
    </section>
  );
}
