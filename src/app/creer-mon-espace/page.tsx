import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { appUrl } from "@/lib/env";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/** Redirect to app signup - preserves query params for prefill. */
export default function CreerMonEspacePage() {
  redirect(appUrl("/creer-mon-espace"));
}
