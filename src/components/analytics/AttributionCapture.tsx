"use client";

import { useEffect } from "react";
import { captureFirstTouchAttribution } from "@/lib/attribution";

/**
 * Mémorise l'origine de la visite (domaine du referrer, UTM, page d'entrée) EN MÉMOIRE de l'onglet.
 * Aucun cookie, aucun localStorage/sessionStorage, aucun identifiant. À placer une fois dans le layout racine.
 */
export function AttributionCapture() {
  useEffect(() => {
    captureFirstTouchAttribution();
  }, []);

  return null;
}
