"use client";



import Link from "next/link";

import { useEffect } from "react";

import { MobileCtaBar } from "@/components/layout/MobileCtaBar";

import { ButtonLink } from "@/components/ui/ButtonLink";

import { cta, ctaLabels } from "@/lib/cta";

import { site } from "@/lib/site";



type Props = {

  error: Error & { digest?: string };

  reset: () => void;

};



export default function ErrorPage({ error, reset }: Props) {

  useEffect(() => {

    console.error(error);

  }, [error]);



  return (

    <section className="industry-hero-bg relative flex min-h-[60vh] items-center pb-28 lg:pb-16">

      <div className="container max-w-xl py-16 text-center">

        <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-cta/90">Erreur</p>

        <h1 className="mt-3 font-display text-4xl font-extrabold text-white md:text-5xl">

          Un problème est survenu

        </h1>

        <p className="mt-4 text-lg text-white/75">

          La page n&apos;a pas pu s&apos;afficher. Réessayez ou contactez-nous si le problème persiste.

        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">

          <button

            type="button"

            onClick={reset}

            className="inline-flex min-h-12 items-center justify-center rounded-[2px] bg-white px-5 py-3 font-display text-sm font-extrabold text-blue-deep transition hover:bg-white/90"

          >

            Réessayer

          </button>

          <ButtonLink href="/" className="!rounded-[2px]">

            Accueil

          </ButtonLink>

          <ButtonLink

            href={cta.trial}

            variant="trial"

            className="!rounded-[2px]"

            event="trial_start"

            eventPayload={{ cta: "error_trial" }}

          >

            {ctaLabels.trialShort}

          </ButtonLink>

        </div>

        <p className="mt-6 text-sm text-white/55">

          <Link href="/contact" className="font-semibold text-white/80 underline-offset-4 hover:underline">

            Contacter le support

          </Link>

          {" · "}

          <a href={`tel:${site.phoneTel}`} className="font-semibold text-white/80 underline-offset-4 hover:underline">

            {site.phone}

          </a>

        </p>

        <nav className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-white/60" aria-label="Pages utiles">

          {[

            ["/tarifs", "Tarifs"],

            ["/demo", ctaLabels.demoGate],

            ["/temoignages", "Avis clients"],

            ["/fonctionnalites", "Fonctionnalités"],

          ].map(([href, label]) => (

            <Link key={href} href={href} className="font-semibold hover:text-white/90 hover:underline">

              {label}

            </Link>

          ))}

        </nav>

      </div>

      <MobileCtaBar />

    </section>

  );

}


