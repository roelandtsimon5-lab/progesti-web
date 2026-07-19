import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { cta } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Créer un compte",
};

export default function SignupPage() {
  redirect(cta.trialApp);
}
