import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: `CGV du service SaaS ${site.name} édité par ${site.company.legalName}.`,
};

export default function CgvPage() {
  const c = site.company;
  return (
    <>
      <PageHero
        eyebrow="Légal"
        title="Conditions générales de vente"
        lead="Cadre contractuel de l’abonnement PROGESTI. Document à faire valider par votre conseil avant usage commercial définitif."
      />
      <section className="section !pt-0">
        <div className="container max-w-3xl space-y-8 rounded-2xl border border-line bg-white p-8 text-sm leading-relaxed text-anthracite">
          <section>
            <h2 className="text-lg font-extrabold text-ink">1. Objet</h2>
            <p className="mt-2">
              Les présentes CGV régissent l’accès et l’utilisation du logiciel SaaS {site.name},
              édité par {c.legalName}, destiné aux professionnels de la propreté et du nettoyage.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-extrabold text-ink">2. Offres et prix</h2>
            <p className="mt-2">
              Les offres Starter, Pro et Premium sont décrites sur la page Tarifs. Les prix sont
              indiqués en euros HT. Essai gratuit de 2 mois sans carte bancaire, tous modules
              inclus selon l’offre présentée.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-extrabold text-ink">3. Souscription et compte</h2>
            <p className="mt-2">
              La création d’un compte implique l’exactitude des informations fournies. Le client
              est responsable de la confidentialité de ses identifiants.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-extrabold text-ink">4. Paiement</h2>
            <p className="mt-2">
              Après l’essai, l’abonnement est payable selon la périodicité choisie (mensuelle ou
              annuelle) via prestataire de paiement sécurisé. Tout retard peut entraîner la
              suspension de l’accès.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-extrabold text-ink">5. Résiliation</h2>
            <p className="mt-2">
              Le client peut résilier selon les modalités de son abonnement. Aucun engagement de
              durée longue n’est imposé au-delà de la période facturée en cours, sauf offre
              particulière acceptée.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-extrabold text-ink">6. Données et sécurité</h2>
            <p className="mt-2">
              Le traitement des données personnelles est décrit dans la politique de
              confidentialité. Le client reste responsable des données qu’il importe dans
              l’outil.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-extrabold text-ink">7. Disponibilité et support</h2>
            <p className="mt-2">
              {site.name} s’efforce d’assurer une disponibilité élevée et un support humain. Des
              maintenances peuvent intervenir avec information préalable lorsque possible.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-extrabold text-ink">8. Responsabilité</h2>
            <p className="mt-2">
              La responsabilité de l’éditeur est limitée dans les conditions prévues par le droit
              applicable. Le logiciel est un outil d’aide à la gestion ; le client reste
              responsable de ses décisions opérationnelles et comptables.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-extrabold text-ink">9. Droit applicable</h2>
            <p className="mt-2">
              Droit français. En cas de litige, compétence des tribunaux du ressort du siège de{" "}
              {c.legalName}, sous réserve des règles d’ordre public.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-extrabold text-ink">10. Contact</h2>
            <p className="mt-2">
              {c.legalName} — {c.address}, {c.city} —{" "}
              <a className="font-semibold text-emerald-dark" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </section>
          <div className="border-t border-line pt-6">
            <ButtonLink href="/contact" variant="secondary">
              Une question sur les CGV ?
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
