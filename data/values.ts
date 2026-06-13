import type { Value } from "./types";

// The four team values (PRD §4.3), loaded from the current site's About page.
// The live site used emoji icons; per the design system (no emoji as icons —
// Lucide only), `icon` holds a lucide-react icon name. Original emoji noted for
// reference: Prototype ⚙️, Gracious Professionalism 🤝, Shared ownership 🦓,
// Community outreach 🌱.
export const values: Value[] = [
  {
    icon: "Cog",
    title: "Prototype and iterate",
    body: "We prototype quickly, test early, and keep only what holds up on the field.",
  },
  {
    icon: "Handshake",
    title: "Gracious Professionalism",
    body: "A FIRST core value. We compete hard, offer help freely, and recognize the work of other teams.",
  },
  {
    icon: "Users",
    title: "Shared ownership",
    body: "Every drive coach has a backup. Every CAD file gets a second review. No single point of failure on the team.",
  },
  {
    icon: "Sprout",
    title: "Community outreach",
    body: "We mentor FLL teams, run library demos, and support STEM access in the Triangle community.",
  },
];
