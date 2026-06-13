import { siteConfig } from "./site-config";

// Back-compat identity view derived from the single source of truth
// (site-config.ts). Consumed by app/layout.tsx metadata and referenced by the
// design system (design-system/zebros/MASTER.md → colors: ["pink", "black"]).
export const team = {
  name: siteConfig.teamName,
  number: siteConfig.teamNumber,
  location: siteConfig.location,
  affiliation: siteConfig.affiliation,
  program: siteConfig.program,
  colors: ["pink", "black"] as const,
};
