import { ButtonLink } from "@/components/ui/ButtonLink";

import { cta, ctaLabels } from "@/lib/cta";

import { socialProofStats } from "@/lib/testimonials";



type Props = {

  title?: string;

  lead?: string;

  className?: string;

  /** Une seule CTA essai — pour pages où la barre sticky couvre déjà démo + tel */
  compact?: boolean;

  eventModule?: string;

};



/** CTA de clôture — bandeau encre (pas un 2e hero bleu). */

export function FinalPush({

  title = "Prêt à structurer votre activité ?",

  lead = `149 € HT/mois tout inclus · ${ctaLabels.trialShort} sans CB · support ${socialProofStats.rating}/5`,

  className = "",

  compact = false,

  eventModule,

}: Props) {

  return (

    <section

      className={`border-t border-line bg-brand-chrome text-white ${compact ? "py-8 md:py-9" : "py-12 md:py-14"} ${className}`.trim()}

    >

      <div className={`container flex flex-col items-center gap-6 text-center ${compact ? "" : "lg:flex-row lg:justify-between lg:text-left"}`}>

        <div className={compact ? "max-w-lg" : "max-w-xl"}>

          <p className="text-xs font-bold uppercase tracking-[0.14em] text-lime-cta/90">PROGESTI</p>

          <h2 className={`mt-2 font-display font-extrabold ${compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"}`}>{title}</h2>

          <p className="mt-2 text-sm text-white/70 md:text-base">{lead}</p>

        </div>

        <div className={`flex w-full flex-col gap-3 ${compact ? "sm:w-auto sm:flex-row sm:justify-center" : "sm:w-auto sm:flex-row sm:justify-center"}`}>

          <ButtonLink

            href={cta.trial}

            size={compact ? "md" : "lg"}

            variant="trial"

            className="!rounded-[2px] sm:min-w-[12rem]"

            event="trial_start"

            eventPayload={{ cta: compact ? "module_final_trial" : "final_push_trial", module: eventModule }}

          >

            {ctaLabels.trial}

          </ButtonLink>

          {compact ? null : (

          <ButtonLink

            href={cta.demo}

            size="lg"

            variant="outline-white"

            className="!rounded-[2px] sm:min-w-[12rem]"

            eventPayload={{ cta: "final_push_demo" }}

          >

            {ctaLabels.demoGate}

          </ButtonLink>

          )}

        </div>

      </div>

    </section>

  );

}


