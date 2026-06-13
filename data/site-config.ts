import type { SiteConfig } from "./types";

// Single source of truth for identity, contact, and social links (PRD §10).
// Used everywhere: footer, contact lines, page metadata, and the Social page.
export const siteConfig = {
  url: "https://zebrosrobotics.com",
  teamName: "Zebros",
  teamNumber: "30415",
  fullName: "FTC Team 30415, Zebros",
  location: "Cary, North Carolina",
  affiliation: "Zebra Robotics",
  program: "FIRST Tech Challenge",
  address: "1408 Boulderstone Way, Cary, NC 27519",
  phone: "(919) 650-6333",
  email: "infocary@zebrarobotics.com",
  socials: {
    tiktok: { handle: "@zebros308", url: "https://www.tiktok.com/@zebros308" },
    instagram: {
      handle: "@zebros30415",
      url: "https://www.instagram.com/zebros30415",
    },
  },
  // Brand colors from the logo (PRD §8.2): pink accent, navy, off-white.
  colors: { accent: "#DC4F72", dark: "#141E42", light: "#FFFDFE" },
  defaultTheme: "dark",
  reorgNote:
    "30415 and 30416 reorganized rosters for 2026. See Past Seasons for combined results.",
} satisfies SiteConfig;
