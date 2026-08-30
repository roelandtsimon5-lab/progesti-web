/**
 * Charte couleurs PROGESTI — alignée Jobber (leader field service / cleaning SaaS).
 * Source tokens CSS : src/app/globals.css
 */
export const brand = {
  navy: "#012939",
  chrome: "#011B25",
  navySoft: "#023448",
  lime: "#A8E300",
  limeHover: "#97CC00",
  paper: "#FAFAFA",
  warm: "#F6F8F9",
  line: "#E4E8EB",
  ink: "#012939",
  slate: "#5C6B73",
  muted: "#6B7C85",
  white: "#FFFFFF",
} as const;

export type BrandColor = keyof typeof brand;
