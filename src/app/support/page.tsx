import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Support Progesti",
    description: `Support technique et assistance PROGESTI — logiciel de planning, pointage terrain, devis et facturation pour entreprises de nettoyage.`,
    path: "/support",
  }),
  robots: { index: true, follow: true },
};

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Support Progesti"
        lead="Assistance technique pour le logiciel de gestion PROGESTI — planning, pointage terrain, devis et facturation pour entreprises de nettoyage."
      />
      <section className="section !pt-0">
        <div className="container max-w-3xl">
          <div className="rounded-2xl border border-blue-mist bg-white p-8 shadow-[0_16px_48px_rgba(11,61,110,0.08)]">
            <h2 className="text-xl font-extrabold text-blue-deep">Éditeur</h2>
            <p className="mt-3 text-anthracite">
              {site.company.legalName} / ILICO
            </p>
            <p className="mt-1 text-sm text-slate">
              {site.company.address}
              <br />
              {site.company.city}
            </p>

            <h2 className="mt-8 text-xl font-extrabold text-blue-deep">
              Nous contacter
            </h2>
            <p className="mt-3">
              <a
                className="text-lg font-semibold text-emerald-dark hover:underline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </p>
            <p className="mt-2">
              <a
                className="text-lg font-semibold text-emerald-dark hover:underline"
                href={`tel:${site.phoneTel}`}
              >
                {site.phone}
              </a>
            </p>

            <h2 className="mt-8 text-xl font-extrabold text-blue-deep">
              Horaires du support
            </h2>
            <p className="mt-3 text-anthracite">
              Jours ouvrés : 9h – 18h (heure de Paris)
            </p>

            <h2 className="mt-8 text-xl font-extrabold text-blue-deep">
              Ce que nous accompagnons
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-anthracite">
              <li>Logiciel de planning pour entreprises de nettoyage</li>
              <li>Pointage terrain et télégestion (application mobile ILICO)</li>
              <li>Devis et facturation pour la propreté</li>
            </ul>

            <h2 className="mt-8 text-xl font-extrabold text-blue-deep">
              Informations légales
            </h2>
            <p className="mt-3 text-anthracite">
              Consultez notre{" "}
              <Link
                href="/confidentialite"
                className="font-semibold text-emerald-dark hover:underline"
              >
                politique de confidentialité
              </Link>{" "}
              pour en savoir plus sur le traitement de vos données.
            </p>

            <p className="mt-8 text-xs text-slate">
              SIREN {site.company.siren} · SIRET {site.company.siret}
              <br />
              TVA {site.company.tva} · RCS {site.company.rcs}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
