import type { IndustryPageConfig } from "@/lib/industry/types";

export type MarketingPageEntry = {
  id: string;
  path: string;
  type: string;
  primaryKw: string;
  config: IndustryPageConfig;
};
