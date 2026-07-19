import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";

import { cta } from "@/lib/cta";
export default function NotFound() {
  return (
    <section className="section bg-white">
      <div className="container max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-ink">Page introuvable</h1>
        <p className="mt-4 text-muted">
          Cette page n’existe pas ou a été déplacée. Revenez à l’accueil ou démarrez un essai.
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
