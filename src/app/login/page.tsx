import { redirect } from "next/navigation";
import { appUrl } from "@/lib/env";

/** Connexion réelle = logiciel Railway (plus de faux login landing). */
export default function LoginPage() {
  redirect(appUrl("/login"));
}
