import type { Metadata } from "next";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Politique de confidentialité",
    description: `Politique de confidentialité ${site.name} — site web, SaaS et application mobile ILICO Télégestion.`,
    path: "/confidentialite",
  }),
  robots: { index: true, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <>
      <IndustryPageHero
        eyebrow="Légal"
        title="Politique de confidentialité"
        lead="Traitement des données personnelles via le site PROGESTI, le logiciel SaaS et l'application mobile ILICO Télégestion (fr.ilico.telegestion)."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Confidentialité" },
        ]}
        showCtas={false}
      />
      <section className="section bg-white">
        <div className="container max-w-3xl space-y-8 text-sm leading-relaxed text-anthracite">
          <p className="text-xs text-muted">Dernière mise à jour : 11 août 2026</p>

          <section>
            <h2 className="font-extrabold text-ink">1. Responsable de traitement</h2>
            <p className="mt-2">
              Pour les données de compte et de relation commerciale avec {site.company.legalName} :{" "}
              {site.company.legalName}, SIRET {site.company.siret}, {site.company.address},{" "}
              {site.company.city} —{" "}
              <a className="font-semibold text-blue-royal" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
            <p className="mt-2">
              Pour les données métier saisies dans l’espace client (agents, clients, pointages,
              factures, photos d’intervention, notes de frais) : l’entreprise cliente est
              responsable de traitement ; {site.company.legalName} agit en sous-traitant (base
              dédiée par entreprise). Un accord de sous-traitance (DPA) peut être annexé sur
              demande.
            </p>
          </section>

          <section>
            <h2 className="font-extrabold text-ink">2. Données collectées</h2>
            <p className="mt-2 font-semibold text-ink">Site web et formulaires marketing</p>
            <p className="mt-1">
              Identité, entreprise, email, téléphone, besoin, logiciel actuel, données de
              navigation (si cookies analytics activés après consentement).
            </p>
            <p className="mt-3 font-semibold text-ink">Application web (SaaS)</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>Identité et coordonnées (nom, prénom, e-mail, rôle)</li>
              <li>Données opérationnelles : clients, sites, planning, absences, messagerie</li>
              <li>Données de facturation et règlements</li>
              <li>Logs techniques de connexion et de sécurité</li>
            </ul>
            <p className="mt-3 font-semibold text-ink">Application mobile ILICO Télégestion</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                <strong>Localisation précise (GPS)</strong> — au démarrage et à la fin d’une
                intervention, pour valider le pointage sur site (pas de suivi continu en
                arrière-plan)
              </li>
              <li>
                <strong>Photos et images</strong> — photos d’intervention, justificatifs de frais,
                signatures client
              </li>
              <li>
                <strong>Caméra</strong> — scan de QR codes d’accès chantier et prise de photos
              </li>
              <li>
                <strong>NFC</strong> — lecture / programmation de tags d’accès sur site (si le
                téléphone le permet)
              </li>
              <li>
                <strong>Identifiants techniques appareil</strong> — modèle, plateforme, version de
                l’application
              </li>
              <li>
                Contenu métier saisi par l’agent : commentaires, checklists, incidents, notes de
                frais, messages
              </li>
            </ul>
            <p className="mt-2">
              L’application mobile ne contient <strong>pas de publicités</strong>, ne revend pas de
              données personnelles et n’utilise pas de cookies publicitaires tiers.
            </p>
          </section>

          <section>
            <h2 className="font-extrabold text-ink">3. Finalités et bases légales</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Exécution du contrat</strong> — fourniture du Service (télégestion,
                planning, support, facturation de l’abonnement)
              </li>
              <li>
                <strong>Mesures précontractuelles / intérêt légitime</strong> — réponse commerciale,
                démo, essai, sécurité, prévention des abus, amélioration du Service
              </li>
              <li>
                <strong>Consentement</strong> — cookies analytics / pubs le cas échéant
              </li>
              <li>
                <strong>Obligation légale</strong> — conservation des pièces comptables et réponses
                aux autorités
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-extrabold text-ink">4. Durées de conservation</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Demandes marketing : le temps du traitement puis archivage commercial raisonnable</li>
              <li>Compte utilisateur : durée du contrat + 1 an</li>
              <li>
                Données agents / planning / pointages : selon besoins du client, puis archivage
                légal paie (jusqu’à 5 ans)
              </li>
              <li>
                Photos, signatures et justificatifs : besoin métier client + obligations légales
              </li>
              <li>Facturation B2B : 10 ans</li>
              <li>Logs de connexion : 12 mois</li>
            </ul>
          </section>

          <section>
            <h2 className="font-extrabold text-ink">5. Destinataires et sous-traitants</h2>
            <p className="mt-2">
              Hébergement applicatif et bases de données : Railway Corp (
              <a
                className="font-semibold text-blue-royal"
                href="https://railway.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                railway.app
              </a>
              ). Signature électronique (si activée) : Yousign. E-mails transactionnels : SMTP /
              Brevo selon configuration. Mesure d’audience site : Google Tag Manager (conteneur
              GTM-K65MM8Q4) avec Consent Mode v2, uniquement après acceptation du bandeau sur les
              pages marketing.
            </p>
            <p className="mt-2">
              <strong>Aucune vente de données personnelles.</strong>
            </p>
          </section>

          <section>
            <h2 className="font-extrabold text-ink">6. Transferts hors UE</h2>
            <p className="mt-2">
              L’hébergeur peut opérer depuis les États-Unis. Les transferts s’effectuent avec les
              garanties appropriées (clauses contractuelles types / mesures techniques). Les
              données métier restent isolées par base entreprise.
            </p>
          </section>

          <section>
            <h2 className="font-extrabold text-ink">7. Droits des personnes</h2>
            <p className="mt-2">
              Accès, rectification, effacement, limitation, opposition, portabilité — dans les
              conditions du RGPD. Les salariés / agents adressent en priorité leur demande à leur
              employeur. Demandes auprès de l’éditeur :{" "}
              <a className="font-semibold text-blue-royal" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              ou via l’export RGPD dans l’application (agents). Délai de réponse : 1 mois. Vous
              pouvez aussi saisir la CNIL (
              <a
                className="font-semibold text-blue-royal"
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.cnil.fr
              </a>
              ).
            </p>
          </section>

          <section>
            <h2 className="font-extrabold text-ink">8. Sécurité</h2>
            <p className="mt-2">
              Isolation DB-per-tenant, mots de passe hashés, sessions et jetons sécurisés,
              rate-limit login, sauvegardes quotidiennes par entreprise, contrôle d’accès par rôle,
              communications chiffrées en transit (HTTPS).
            </p>
          </section>

          <section>
            <h2 className="font-extrabold text-ink">9. Cookies et stockage local</h2>
            <p className="mt-2">
              Le Service web utilise des cookies / stockage local strictement nécessaires à
              l’authentification et au fonctionnement. L’application mobile stocke localement des
              jetons de session et, le cas échéant, une file d’attente hors ligne. Pas de cookies
              publicitaires tiers dans l’application mobile.
            </p>
          </section>

          <section>
            <h2 className="font-extrabold text-ink">10. Contact</h2>
            <p className="mt-2">
              Responsable confidentialité : {site.email}
              <br />
              Téléphone support : {site.phone} (jours ouvrés 9h–18h)
            </p>
          </section>
        </div>
      </section>
      <MobileCtaBar />
    </>
  );
}
