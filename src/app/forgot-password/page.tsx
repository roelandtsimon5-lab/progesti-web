import { redirect } from "next/navigation";
import { appUrl } from "@/lib/env";

/** Redirect to app password reset. */
export default function ForgotPasswordPage() {
  redirect(appUrl("/forgot-password"));
}
