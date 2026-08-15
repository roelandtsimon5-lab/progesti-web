"use client";

import Image from "next/image";
import Link from "next/link";
import { cta } from "@/lib/cta";
import { site } from "@/lib/site";

export function HomeValidated() {
  return (
    <div className="home-dark grain">
      {/* Sticky dark nav */}
      <nav className="nav-dark">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-lg font-semibold tracking-tight text-white">
              Progesti
            </span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#product"
              className="text-sm text-[var(--dark-text-muted)] transition hover:text-white"
            >
              Produit
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-[var(--dark-text-muted)] transition hover:text-white"
            >
              Tarif
            </Link>
            <Link
              href={cta.login}
              className="text-sm text-[var(--dark-text-muted)] transition hover:text-white"
            >
              Connexion
            </Link>
            <Link href={cta.trialApp} className="btn-primary-dark !py-2.5 !px-5 !text-sm">
              Essai gratuit
            </Link>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO — Full-bleed dark with giant product
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen pt-16">
        {/* Subtle gradient accent */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(34, 197, 94, 0.15), transparent 70%)",
          }}
          aria-hidden
        />

        <div className="container relative z-10 pt-24 md:pt-32">
          <div className="anim-rise mx-auto max-w-3xl text-center">
            <p className="mb-6 text-sm font-medium tracking-wide text-[var(--dark-accent)]">
              Le système d'exploitation des entreprises de propreté
            </p>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Arrêtez de piloter vos sites sur Excel et WhatsApp.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--dark-text-muted)] md:text-xl">
              Planning, pointage, facture. Un seul fil pour le ménage professionnel.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={cta.trialApp} className="btn-primary-dark">
                Essayer 2 mois, sans carte
              </Link>
              <Link href="#product" className="btn-ghost-dark">
                Voir le produit
              </Link>
            </div>

            <p className="mt-6 text-sm text-[var(--dark-text-subtle)]">
              Dès 29,99 € HT/mois · Tous les modules inclus · Résiliable
            </p>
          </div>
        </div>

        {/* Giant product shot — cinematic */}
        <div className="anim-rise-delay container relative z-10 mt-16 pb-24 md:mt-20">
          <div className="product-frame mx-auto max-w-[1100px]">
            <Image
              src="/passages-mockup.png"
              alt="Progesti — Planning et suivi des passages"
              width={1100}
              height={619}
              priority
              className="w-full"
              sizes="(max-width: 1200px) 95vw, 1100px"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROBLEM STRIP — Three punchy words
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-[var(--dark-border)] bg-[var(--dark-surface)]">
        <div className="container py-12 md:py-16">
          <div className="grid gap-8 text-center md:grid-cols-3 md:gap-4 md:text-left">
            {[
              { word: "Excel", problem: "Planning chaos" },
              { word: "WhatsApp", problem: "Preuves perdues" },
              { word: "Ressaisie", problem: "Factures en retard" },
            ].map((item) => (
              <div key={item.word}>
                <p className="text-2xl font-semibold text-white md:text-3xl">
                  {item.word}
                </p>
                <p className="mt-1 text-[var(--dark-text-muted)]">{item.problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PRODUCT FILM — Planifier → Pointer → Facturer
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="product" className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Un fil, du terrain à la facture
            </h2>
            <p className="mt-4 text-lg text-[var(--dark-text-muted)]">
              Tout relié, sans ressaisie.
            </p>
          </div>

          {/* Cinematic product sequence */}
          <div className="mt-20 space-y-32">
            {/* Step 1: Planifier */}
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="order-2 lg:order-1">
                <div className="product-frame">
                  <Image
                    src="/passages-mockup.png"
                    alt="Planification des passages"
                    width={700}
                    height={394}
                    className="w-full"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-sm font-medium text-[var(--dark-accent)]">01</p>
                <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  Planifier
                </h3>
                <p className="mt-4 max-w-md text-[var(--dark-text-muted)] leading-relaxed">
                  Sites, fréquences, agents et remplacements sur un planning métier.
                  Code couleur, vision claire.
                </p>
              </div>
            </div>

            {/* Step 2: Pointer */}
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-sm font-medium text-[var(--dark-accent)]">02</p>
                <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  Pointer
                </h3>
                <p className="mt-4 max-w-md text-[var(--dark-text-muted)] leading-relaxed">
                  App mobile : prise de service, géoloc, bons d'intervention.
                  La preuve terrain centralisée.
                </p>
              </div>
              <div>
                <div className="product-frame">
                  <Image
                    src="/telegestion-mockup.png"
                    alt="Pointage et télégestion"
                    width={700}
                    height={394}
                    className="w-full"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Facturer */}
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="order-2 lg:order-1">
                <div className="product-frame">
                  <Image
                    src="/factures-mockup.png"
                    alt="Facturation"
                    width={700}
                    height={394}
                    className="w-full"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-sm font-medium text-[var(--dark-accent)]">03</p>
                <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  Facturer
                </h3>
                <p className="mt-4 max-w-md text-[var(--dark-text-muted)] leading-relaxed">
                  Du réalisé à la facture sans double saisie.
                  Devis, contrats, suivi client au même endroit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MÉTIER MOMENT — Syndic / Preuves
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-[var(--dark-border)] bg-[var(--dark-surface)] py-24 md:py-32">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-medium text-[var(--dark-accent)]">
                Cas métier
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
                Syndics & copropriétés
              </h2>
              <p className="mt-4 text-lg text-[var(--dark-text-muted)] leading-relaxed">
                Preuves de passage prêtes pour le reporting. Plus besoin de chasser
                dans la galerie du téléphone.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Pointage géolocalisé",
                  "Photos horodatées",
                  "Export PDF",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[var(--dark-text-muted)]"
                  >
                    <span className="text-[var(--dark-accent)]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href={cta.trialApp} className="btn-primary-dark">
                  Tester sur vos copropriétés
                </Link>
              </div>
            </div>
            <div className="product-frame">
              <Image
                src="/telegestion-mockup.png"
                alt="Preuves de passage"
                width={700}
                height={394}
                className="w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PRICING — Quiet, confident
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Un prix, tout inclus
            </h2>
            <div className="mt-10">
              <p className="text-6xl font-semibold tracking-tight text-white md:text-7xl">
                29,99 €
              </p>
              <p className="mt-2 text-lg text-[var(--dark-text-muted)]">
                HT / mois · Starter · 1 admin
              </p>
            </div>
            <p className="mx-auto mt-8 max-w-md text-[var(--dark-text-muted)]">
              Tous les modules inclus. Pro (5 users) et Premium (20 users) disponibles.
              Mêmes fonctionnalités, seul le nombre d'utilisateurs change.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={cta.trialApp} className="btn-primary-dark">
                Commencer l'essai 2 mois
              </Link>
              <Link href="/tarifs" className="btn-ghost-dark">
                Voir les offres
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHO — Honest, minimal
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[var(--dark-border)] py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-lg text-white">
              Édité par <strong className="font-semibold">MSNE SAS</strong>, Tournefeuille (31)
            </p>
            <p className="mt-4 text-[var(--dark-text-muted)]">
              On n'invente pas d'avis. Testez 2 mois sur vos sites.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER — Editorial, stripped
      ═══════════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-[var(--dark-border)] bg-[var(--dark-surface)] py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-6">
              <Link href="/" className="font-semibold text-white">
                Progesti
              </Link>
              <Link
                href="/fonctionnalites"
                className="text-sm text-[var(--dark-text-muted)] hover:text-white"
              >
                Fonctionnalités
              </Link>
              <Link
                href="/tarifs"
                className="text-sm text-[var(--dark-text-muted)] hover:text-white"
              >
                Tarifs
              </Link>
              <Link
                href="/contact"
                className="text-sm text-[var(--dark-text-muted)] hover:text-white"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/mentions-legales"
                className="text-sm text-[var(--dark-text-subtle)] hover:text-[var(--dark-text-muted)]"
              >
                Mentions légales
              </Link>
              <Link
                href="/confidentialite"
                className="text-sm text-[var(--dark-text-subtle)] hover:text-[var(--dark-text-muted)]"
              >
                Confidentialité
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-[var(--dark-text-subtle)]">
            © {new Date().getFullYear()} {site.company.legalName}
          </div>
        </div>
      </footer>

      {/* Mobile CTA bar */}
      <div className="mobile-cta-dark">
        <Link
          href={cta.trialApp}
          className="btn-primary-dark flex-1 justify-center !py-3"
        >
          Essai gratuit
        </Link>
        <Link
          href={cta.login}
          className="btn-ghost-dark flex-1 justify-center !py-3"
        >
          Connexion
        </Link>
      </div>
      <div className="h-20 lg:hidden" aria-hidden />
    </div>
  );
}
