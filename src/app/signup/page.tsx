import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Créer un compte",
};

export default function SignupPage() {
  redirect("/essai-gratuit");
}
