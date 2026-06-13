// Site structure — one source of truth for the navbar links and the home
// "explore grid" cards (PRD §6.1). Icon strings are lucide-react names, resolved
// by components/icon.tsx. These are navigational labels/descriptions (site chrome),
// not team facts.

export interface NavLink {
  label: string;
  href: string;
}

// Every page in the nav (PRD §6.1). Home is reached via the logo.
export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Coaches", href: "/coaches" },
  { label: "Robot", href: "/robot" },
  { label: "Past Seasons", href: "/past-seasons" },
  { label: "Blog", href: "/blog" },
  { label: "Social", href: "/social" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
];

export interface ExploreCard {
  title: string;
  description: string;
  href: string;
  icon: string;
}

// The explore grid — the main way to navigate the home page (PRD §6.1).
export const exploreCards: ExploreCard[] = [
  {
    title: "Our Story",
    description: "How two rookie teams became the Zebros.",
    href: "/about",
    icon: "BookOpen",
  },
  {
    title: "The Team",
    description: "The ten students who design, build, and drive.",
    href: "/team",
    icon: "Users",
  },
  {
    title: "Our Coaches",
    description: "The mentors guiding engineering and strategy.",
    href: "/coaches",
    icon: "GraduationCap",
  },
  {
    title: "The Robot",
    description: "Our current build, subsystem by subsystem.",
    href: "/robot",
    icon: "Bot",
  },
  {
    title: "Season Results",
    description: "Every event, award, and match from 2025.",
    href: "/past-seasons",
    icon: "Trophy",
  },
  {
    title: "The Blog",
    description: "Weekly updates from the workshop.",
    href: "/blog",
    icon: "Newspaper",
  },
  {
    title: "Follow Us",
    description: "Catch us on TikTok and Instagram.",
    href: "/social",
    icon: "Share2",
  },
];
