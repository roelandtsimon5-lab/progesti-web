import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta } from "@/lib/cta";
import { site } from "@/lib/site";

type Props = {
  moduleTitle: string;
  slug: string;
};

export function ModuleFaqHelp({ moduleTitle, slug }: Props) {
  return (
    <div className="mt-10 rounded-[2px] border border-line bg-white p-5 md:flex md:items-center md:justify-between md:gap-6 md:p-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Besoin d&apos;aide ?</p>
        <p className="mt-2 font-sans text-lg font-extrabold text-brand-navy">
          On vous guide sur {moduleTitle}
        </p>
        <p className="mt-1 text-sm text-slate">
          Équipe métier propreté · {site.phone} · réponse sous 24 h ouvrées
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 md:mt-0 md:shrink-0">
        <ButtonLink
          href={cta.demo}
          variant="secondary"
          size="md"
          className="!rounded-[2px]"
          eventPayload={{ cta: "module_faq_demo", module: slug }}
        >
          Demander une démo
        </ButtonLink>
        <ButtonLink
          href={cta.trial}
          variant="trial"
          size="md"
          className="!rounded-[2px]"
          event="trial_start"
          eventPayload={{ cta: "module_faq_trial", module: slug }}
        >
          Essai {site.trialDays} jours
        </ButtonLink>
        <Link
          href="/tarifs"
          className="inline-flex items-center rounded-[2px] border border-line px-4 py-2.5 text-sm font-bold text-brand-navy hover:border-brand-navy-soft"
        >
          Tarifs
        </Link>
      </div>
    </div>
  );
}
