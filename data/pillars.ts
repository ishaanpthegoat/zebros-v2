import type { Pillar } from "./types";

// Home pillars — Build, Compete, Mentor (PRD §10). Labels and indices are fixed;
// the titles and bodies are copy that should be reviewed before shipping, so they
// are left empty here rather than invented.
// NOTE: the home-page spec (PRD §6.1) describes an "explore grid" of section
// cards, not a pillars section — confirm whether pillars are still used on Home,
// or whether this maps to a different section, before writing the copy.
// TODO: confirm usage, then fill titles/bodies.
export const pillars: Pillar[] = [
  { index: "01", label: "BUILD", title: "", body: "" },
  { index: "02", label: "COMPETE", title: "", body: "" },
  { index: "03", label: "MENTOR", title: "", body: "" },
];
