import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";

import { cta } from "@/lib/cta";

/** Libellés volontairement sans « introuvable » / « n'existe pas » (soft-404 crawlers Play Store). */
export default function NotFound() {
  return (
    <section className="section bg-white">
      <div className="container max-w-xl text-center">
        <p className="eyebrow">Erreur</p>
        <h1 className="mt-3 text-4xl font-extrabold text-ink">Contenu indisponible</h1>
        <p className="mt-4 text-muted">
          Ce lien ne mène pas à une page active. Revenez à l’accueil ou démarrez un essai.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Accueil</ButtonLink>
          <ButtonLink href={cta.trialApp} variant="secondary">
            Essai gratuit
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-muted">
          <Link href="/contact" className="font-semibold text-emerald-dark hover:underline">
            Besoin d’aide ? Contactez-nous
          </Link>
        </p>
      </div>
    </section>
  );
}
