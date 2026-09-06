import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { appUrl } from "@/lib/env";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/** Redirect to app password reset. */
export default function ForgotPasswordPage() {
  redirect(appUrl("/forgot-password"));
}
