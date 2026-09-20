/* eslint-disable */
/**
 * Specs Sécurité — assemblage
 * part1 (SEC-01→09 radical) + legacy enrichi (SEC-10→32) + new (SEC-33→36)
 */
import { secSpecsPart1 } from "./specs-part1";
import { secSpecsLegacyRest } from "./specs-legacy-rest";
import { secSpecsNew } from "./specs-new";
import type { SecPageSpec } from "./build";

export const secSpecs: SecPageSpec[] = [
  ...secSpecsPart1,
  ...secSpecsLegacyRest,
  ...secSpecsNew,
];
