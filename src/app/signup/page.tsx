import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { cta } from "@/lib/cta";
import { trialCopy } from "@/lib/site";

export const metadata: Metadata = {
  title: "Créer un compte",
  description: `Créez votre essai PROGESTI — ${trialCopy.noCard}.`,
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  redirect(cta.trial);
}
