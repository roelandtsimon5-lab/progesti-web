import type { Metadata } from "next";
import { HomeValidated } from "@/components/home/HomeValidated";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Ancienne homepage — archive",
    description: "Archive de la homepage PROGESTI V3 validée (avant landing Jobber).",
    path: "/ancien",
  }),
  robots: { index: false, follow: false },
};

export default function AncienHomePage() {
  return <HomeValidated />;
}
