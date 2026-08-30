import type { Metadata } from "next";
import Link from "next/link";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { LeadForm } from "@/components/forms/LeadForm";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta } from "@/lib/cta";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Prendre rendez-vous",
  description: "Réservez un échange avec l'équipe PROGESTI pour une démo ou une migration.",
  path: "/rendez-vous",
});

export default function RendezVousPage() {
  const calendarUrl = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL || "";

  return (
    <>
      <IndustryPageHero
        eyebrow="Rendez-vous"
        title="Parlons de votre organisation terrain"
        lead="Démo, qualification de besoin ou plan d'intégration — choisissez le format qui vous convient."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Rendez-vous" },
        ]}
        trialEvent="rdv_trial"
        demoEvent="rdv_demo"
      />
      <section className="section bg-white pb-28 lg:pb-16">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="rounded-[3px] border border-blue-mist/80 bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-display text-2xl font-extrabold text-blue-deep">Formulaire de qualification</h2>
            <p className="mt-2 text-sm text-slate">Nous vous recontactons pour proposer un créneau.</p>
            <div className="mt-6">
              <LeadForm id="rdv-form" intent="rdv" submitLabel="Demander un créneau" />
            </div>
          </div>
          <div className="rounded-[3px] border border-lime-cta/40 bg-[#F5F8FB] p-6 md:p-8">
            <h2 className="font-display text-2xl font-extrabold text-blue-deep">Google Agenda</h2>
            {calendarUrl ? (
              <>
                <p className="mt-3 text-anthracite">Choisissez un créneau directement dans l&apos;agenda.</p>
                <a
                  className="mt-6 inline-flex min-h-12 items-center rounded-[2px] bg-lime-cta px-5 py-3 font-display text-sm font-extrabold text-brand-navy transition hover:bg-lime-cta-hover"
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ouvrir Google Agenda
                </a>
              </>
            ) : (
              <>
                <p className="mt-3 text-anthracite">
                  Le lien de prise de rendez-vous en ligne sera disponible prochainement. Contactez-nous
                  pour planifier un échange.
                </p>
                <ButtonLink href="/contact" className="mt-6">
                  Nous contacter
                </ButtonLink>
                <a
                  className="mt-3 block text-sm font-bold text-blue-royal hover:underline"
                  href={`mailto:${site.email}?subject=Demande%20de%20rendez-vous%20PROGESTI`}
                >
                  {site.email}
                </a>
              </>
            )}
            <ol className="mt-8 list-decimal space-y-2 pl-5 text-sm text-slate">
              <li>Lead reçu</li>
              <li>Notification équipe</li>
              <li>Créneau proposé</li>
              <li>Démo / intégration</li>
            </ol>
            <p className="mt-6 text-sm text-slate">
              Préférez tester seul ?{" "}
              <Link href={cta.demo} className="font-bold text-blue-royal hover:underline">
                Démo interactive
              </Link>
              {" · "}
              <Link href={cta.trial} className="font-bold text-blue-royal hover:underline">
                Essai {site.trialDays} jours
              </Link>
            </p>
          </div>
        </div>
      </section>
      <MobileCtaBar
        primary={{
          href: "#rdv-form",
          label: "Demander un créneau",
          variant: "trial",
          anchor: true,
          className:
            "flex flex-1 items-center justify-center rounded-[2px] bg-lime-cta py-3.5 font-display text-sm font-bold text-blue-deep transition hover:bg-lime-cta-hover",
        }}
      />
    </>
  );
}
