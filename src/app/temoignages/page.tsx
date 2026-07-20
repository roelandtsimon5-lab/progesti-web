import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";
import { cta } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "Retours d’entreprises de nettoyage sur PROGESTI. Nous ne publions que des avis réels — pas de faux témoignages.",
};

const examples = [
  {
    segment: "Bureaux",
    href: "/solutions/bureaux",
    quote:
      "« On a réduit les allers-retours WhatsApp pour les absences. Le planning est enfin lisible pour toute l’équipe. »",
    note: "Exemple illustratif — pas un avis client publié.",
  },
  {
    segment: "Syndics",
    href: "/solutions/syndics",
    quote:
      "« Les preuves de passage sur les parties communes nous aident dans les échanges avec le syndic. »",
    note: "Exemple illustratif — pas un avis client publié.",
  },
  {
    segment: "Fin de chantier",
    href: "/solutions/fin-de-chantier",
    quote:
      "« Facturer juste après la livraison, avec les bons signés, a changé notre trésorerie. »",
    note: "Exemple illustratif — pas un avis client publié.",
  },
];

export default function TemoignagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Témoignages"
        title="La preuve par le terrain"
        lead="Nous ne publions que des avis réels. En attendant des retours validés, voici le type de bénéfices attendus — clairement marqués comme exemples — et l’invitation à tester vous-même."
        primaryHref={cta.trialApp}
        primaryLabel="Essai gratuit"
        secondaryHref="/demo"
        secondaryLabel="Démo interactive"
      />
      <section className="section !pt-0">
        <div className="container">
          <p className="max-w-2xl rounded-lg border border-amber/40 bg-amber/10 px-4 py-3 text-sm text-anthracite">
            <strong className="text-ink">Transparence :</strong> les citations ci-dessous sont des{" "}
            <em>exemples illustratifs</em>, pas des témoignages clients. Dès que nous disposerons
            d’avis réels, ils remplaceront ces placeholders.
          </p>

          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {examples.map((ex) => (
              <li key={ex.segment} className="border-t border-line pt-5">
                <p className="font-display text-xs font-bold uppercase tracking-wide text-petrol">
                  {ex.segment}
                </p>
                <blockquote className="mt-3 text-anthracite">{ex.quote}</blockquote>
                <p className="mt-3 text-xs text-muted">{ex.note}</p>
                <Link
                  href={ex.href}
                  className="mt-4 inline-block text-sm font-bold text-emerald-dark hover:underline"
                >
                  Voir la solution →
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-14 max-w-xl border-t border-line pt-8">
            <p className="text-anthracite">
              Vous utilisez déjà PROGESTI et souhaitez partager votre retour ?
            </p>
            <a
              className="mt-3 inline-block font-bold text-emerald-dark"
              href={`mailto:${site.email}?subject=Témoignage%20PROGESTI`}
            >
              Envoyer un témoignage →
            </a>
            <div className="mt-6">
              <ButtonLink href="/faq" variant="secondary">
                Lire la FAQ
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
