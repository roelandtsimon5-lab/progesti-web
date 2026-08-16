import { redirect } from "next/navigation";
import { appUrl } from "@/lib/env";

/** Redirect to app signup - preserves query params for prefill. */
export default function CreerMonEspacePage() {
  redirect(appUrl("/creer-mon-espace"));
}
