import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LeadForm } from "@/components/forms/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prendre rendez-vous",
  description: "Réservez un échange avec l’équipe PROGESTI pour une démo ou une migration.",
};

export default function RendezVousPage() {
  const calendarUrl = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL || "";

  return (
    <>
      <PageHero
        eyebrow="Rendez-vous"
        title="Parlons de votre organisation terrain"
        lead="Démo, qualification de besoin ou plan d’intégration de vos données — choisissez le format qui vous convient."
      />
      <section className="section !pt-0">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-ink">Formulaire de qualification</h2>
            <p className="mt-2 text-sm text-muted">
              Nous vous recontactons pour proposer un créneau.
            </p>
            <div className="mt-6">
              <LeadForm intent="rdv" submitLabel="Demander un créneau" />
            </div>
          </div>
          <div className="rounded-2xl border border-emerald/40 bg-fog p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-ink">Google Agenda</h2>
            {calendarUrl ? (
              <>
                <p className="mt-3 text-anthracite">
                  Choisissez un créneau directement dans l’agenda.
                </p>
                <a
                  className="mt-6 inline-flex min-h-12 items-center rounded-xl bg-emerald px-5 py-3 font-display text-sm font-extrabold text-navy"
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
                  Le lien Google Calendar Appointment Schedules sera branché via{" "}
                  <code className="text-xs">NEXT_PUBLIC_GOOGLE_CALENDAR_URL</code>. En attendant,
                  écrivez-nous.
                </p>
                <a
                  className="mt-6 inline-flex min-h-12 items-center rounded-xl border-2 border-navy px-5 py-3 font-display text-sm font-extrabold text-navy"
                  href={`mailto:${site.email}?subject=Demande%20de%20rendez-vous%20PROGESTI`}
                >
                  Écrire à {site.email}
                </a>
              </>
            )}
            <ol className="mt-8 list-decimal space-y-2 pl-5 text-sm text-anthracite">
              <li>Lead reçu</li>
              <li>Notification équipe</li>
              <li>Créneau proposé</li>
              <li>Démo / intégration</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
