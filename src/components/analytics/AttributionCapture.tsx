"use client";

import { useEffect } from "react";
import { captureFirstTouchAttribution } from "@/lib/attribution";

/**
 * Captures first-touch marketing attribution on initial page load.
 * Stores referrer, UTM params, gclid, and landing path in localStorage.
 * Works regardless of analytics consent (first-party functional data).
 * Place once in the root layout.
 */
export function AttributionCapture() {
  useEffect(() => {
    captureFirstTouchAttribution();
  }, []);

  return null;
}
