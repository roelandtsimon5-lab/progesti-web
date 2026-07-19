import { redirect } from "next/navigation";
import { appUrl } from "@/lib/env";

/** Reset MDP = logiciel Railway. */
export default function ForgotPasswordPage() {
  redirect(appUrl("/forgot-password"));
}
