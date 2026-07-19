import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Intégrations",
  description: "Intégrations PROGESTI : Google Agenda, mobile, exports.",
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Produit"
        title="Intégrations"
        lead="Google Agenda pour les rendez-vous commerciaux, apps Android/iOS pour le terrain. CRM interne pour les leads site."
      />
      <section className="section !pt-0">
        <div className="container grid gap-4 md:grid-cols-3">
          {["Google Agenda", "Apps Android / iOS", "CRM interne leads"].map((item) => (
            <div key={item} className="rounded-2xl border border-line bg-white p-6">
              <h2 className="text-lg font-bold">{item}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
