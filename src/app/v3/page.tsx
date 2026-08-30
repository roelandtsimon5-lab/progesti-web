import type { Metadata } from "next";
import Link from "next/link";
import { IndustryLandingV3 } from "@/components/industry/IndustryLandingV3";
import { defaultIndustryConfig } from "@/lib/industry";

export const metadata: Metadata = {
  title: "V3 — Archive (avant proportions Jobber)",
  description:
    "Snapshot figé de la homepage IndustryLanding avant le recalibrage des dimensions type Jobber.",
  robots: { index: false, follow: false },
};

export default function V3ArchivePage() {
  return (
    <>
      <div className="border-b border-amber-300/80 bg-amber-50 px-4 py-2.5 text-center text-sm text-amber-950">
        Archive V3 — proportions pré-Jobber ·{" "}
        <Link href="/" className="font-bold underline underline-offset-2">
          Voir le site actuel →
        </Link>
      </div>
      <IndustryLandingV3 config={defaultIndustryConfig} />
    </>
  );
}
