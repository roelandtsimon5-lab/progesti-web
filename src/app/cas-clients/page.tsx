import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";
import { cta } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Cas clients",
  description:
    "Scénarios d’usage PROGESTI pour entreprises de nettoyage. Études de cas chiffrées publiées dès validation — pas de faux résultats.",
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
];

export default function CasClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Cas clients"
        title="Scénarios métier, résultats à venir"
        lead="Les études de cas chiffrées (temps gagné, facturation) seront publiées avec métriques validées. En attendant : journées type par segment — clairement présentées comme scénarios, pas comme résultats clients."
        primaryHref="/contact"
        primaryLabel="Devenir cas client"
        secondaryHref={cta.trialApp}
        secondaryLabel="Tester sur mon activité"
      />
      <section className="section !pt-0">
        <div className="container">
          <p className="max-w-2xl rounded-lg border border-amber/40 bg-amber/10 px-4 py-3 text-sm text-anthracite">
            <strong className="text-ink">Transparence :</strong> aucun chiffre client n’est inventé
            ici. Les parcours ci-dessous illustrent l’usage PROGESTI par univers métier.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Avant", "Excel + WhatsApp, factures en retard"],
              ["Pendant", "Essai 2 mois sur sites réels"],
              ["Après", "Planning stable, facturation plus rapide"],
            ].map(([t, d]) => (
              <div key={t} className="border-t border-line pt-4">
                <p className="font-display text-sm font-bold uppercase tracking-wide text-emerald-dark">
                  {t}
                </p>
                <p className="mt-2 text-sm text-anthracite">{d}</p>
              </div>
            ))}
          </div>

          <ul className="mt-14 grid gap-10 lg:grid-cols-3">
            {scenarios.map((s) => (
              <li key={s.title} className="border-t border-line pt-5">
                <h2 className="font-display text-xl font-bold">{s.title}</h2>
                <ol className="mt-4 space-y-2 text-sm text-anthracite">
                  {s.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <Link
                  href={s.href}
                  className="mt-4 inline-block text-sm font-bold text-emerald-dark hover:underline"
                >
                  Détail solution →
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-sm text-muted">
            Contact :{" "}
            <a className="font-semibold text-emerald-dark" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <div className="mt-4 flex flex-wrap gap-3">
              <ButtonLink href="/logiciel-entreprise-nettoyage">Page pilier produit</ButtonLink>
              <ButtonLink href="/temoignages" variant="secondary">
                Témoignages
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
