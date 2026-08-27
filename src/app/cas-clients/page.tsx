import type { Metadata } from "next";
import Link from "next/link";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";
import { cta } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Cas clients",
  description:
    "Scénarios d'usage PROGESTI pour entreprises de nettoyage. Études de cas chiffrées publiées dès validation — pas de faux résultats.",
  robots: { index: false, follow: true },
};

const scenarios = [
  {
    title: "Journée type — bureaux",
    href: "/solutions/bureaux",
    steps: [
      "06:30 — Planning mobile consulté par les agents",
      "09:30 — Pointages open spaces validés",
      "14:00 — Réaffectation backup sur un immeuble",
      "17:30 — Préparation facturation hebdo",
    ],
  },
  {
    title: "Journée type — syndics",
    href: "/solutions/syndics",
    steps: [
      "07:00 — Tournées parties communes par immeuble",
      "11:00 — Bons et photos archivés",
      "15:00 — Relance sites non pointés",
      "18:00 — Vue pour point avec le syndic",
    ],
  },
  {
    title: "Journée type — fin de chantier",
    href: "/solutions/fin-de-chantier",
    steps: [
      "08:00 — Brief zones et planning serré",
      "12:00 — Photos des zones livrées",
      "16:30 — Bon signé avec le client",
      "17:30 — Facture émise + extras",
    ],
  },
] as const;

export default function CasClientsPage() {
  return (
    <>
      <IndustryPageHero
        eyebrow="Cas clients"
        title="Scénarios métier, résultats à venir"
        lead="Les études chiffrées seront publiées avec métriques validées. En attendant : journées type par segment — scénarios, pas témoignages inventés."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Cas clients" },
        ]}
        trialEvent="cas_clients_trial"
        demoEvent="cas_clients_demo"
      />
      <section className="section bg-white">
        <div className="container">
          <p className="max-w-2xl rounded-[3px] border border-amber/40 bg-amber/10 px-4 py-3 text-sm text-anthracite">
            <strong className="text-blue-deep">Transparence :</strong> aucun chiffre client n&apos;est inventé
            ici. Les parcours ci-dessous illustrent l&apos;usage PROGESTI par univers métier.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Avant", "Excel + WhatsApp, factures en retard"],
              ["Pendant", `Essai ${site.trialDays} jours sur sites réels`],
              ["Après", "Planning stable, facturation plus rapide"],
            ].map(([t, d]) => (
              <Reveal key={t}>
                <div className="rounded-[3px] border border-blue-mist/80 bg-[#F5F8FB] p-5">
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-blue-royal">{t}</p>
                  <p className="mt-2 text-sm text-slate">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <ul className="mt-14 grid gap-8 lg:grid-cols-3">
            {scenarios.map((s, i) => (
              <Reveal key={s.title} delayMs={i * 50}>
                <li className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 border-t-[3px] border-t-lime-cta p-6">
                  <h2 className="font-display text-xl font-extrabold text-blue-deep">{s.title}</h2>
                  <ol className="mt-4 space-y-2 text-sm text-slate">
                    {s.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <Link
                    href={s.href}
                    className="mt-4 inline-block text-sm font-bold text-blue-royal hover:underline"
                  >
                    Détail solution →
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-blue-mist pt-8">
            <ButtonLink href="/contact">Devenir cas client</ButtonLink>
            <ButtonLink href={cta.trial} variant="secondary" event="trial_start" eventPayload={{ cta: "cas_clients_trial" }}>
              Essai {site.trialDays} jours
            </ButtonLink>
            <Link href="/logiciel-entreprise-nettoyage" className="text-sm font-bold text-blue-royal hover:underline">
              Page pilier produit →
            </Link>
          </div>
        </div>
      </section>
      <MobileCtaBar />
    </>
  );
}
