import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { appUrl } from "@/lib/env";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/** Connexion réelle = logiciel Railway (plus de faux login landing). */
export default function LoginPage() {
  redirect(appUrl("/login"));
}
