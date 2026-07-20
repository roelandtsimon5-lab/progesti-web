import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité ${site.name} — traitement des données personnelles.`,
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        eyebrow="Légal"
        title="Politique de confidentialité"
        lead="Traitement des données personnelles collectées via le site et les formulaires PROGESTI."
      />
      <section className="section !pt-0">
        <div className="container max-w-3xl space-y-6 text-sm leading-relaxed text-anthracite">
          <section>
            <h2 className="font-extrabold text-ink">Responsable de traitement</h2>
            <p className="mt-2">
              {site.company.legalName}, {site.company.address}, {site.company.city} —{" "}
              <a className="font-semibold text-emerald-dark" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </section>
          <section>
            <h2 className="font-extrabold text-ink">Données collectées</h2>
            <p className="mt-2">
              Identité, entreprise, email, téléphone, besoin, logiciel actuel, données de navigation
              (si cookies analytics activés).
            </p>
          </section>
          <section>
            <h2 className="font-extrabold text-ink">Finalités</h2>
            <p className="mt-2">
              Réponse commerciale, création d’essai, prise de rendez-vous, suivi prospect,
              amélioration du site, mesure d’audience.
            </p>
          </section>
          <section>
            <h2 className="font-extrabold text-ink">Base légale</h2>
            <p className="mt-2">
              Mesures précontractuelles, intérêt légitime, et consentement le cas échéant (cookies).
            </p>
          </section>
          <section>
            <h2 className="font-extrabold text-ink">Durée de conservation</h2>
            <p className="mt-2">
              Le temps nécessaire au traitement de la demande, puis archivage commercial raisonnable
              conforme aux obligations légales.
            </p>
          </section>
          <section>
            <h2 className="font-extrabold text-ink">Vos droits</h2>
            <p className="mt-2">
              Accès, rectification, effacement, opposition, limitation — contactez {site.email}. Vous
              pouvez aussi saisir la CNIL.
            </p>
          </section>
          <section>
            <h2 className="font-extrabold text-ink">Cookies / mesure d’audience</h2>
            <p className="mt-2">
              Le site utilise Google Tag Manager (conteneur {`GTM-K65MM8Q4`}) avec le mode Consentement
              Google (Consent Mode v2). Sur les pages marketing, les cookies analytics / pubs ne sont
              déposés qu’après acceptation via le bandeau. Sur les landing pages publicitaires
              (`/lp/ads/*`), la mesure de campagne est activée pour attribuer les conversions Google
              Ads. Vous pouvez vous opposer en écrivant à {site.email}.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
