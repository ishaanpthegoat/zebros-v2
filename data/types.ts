// Central type definitions for the Zebros data layer.
// These are the shapes from PRD.md §10 (Data Contract). Every page reads typed
// data from data/*.ts — no team content is hardcoded inside components.

// One source of truth for identity, contact, and social links.
export interface SiteConfig {
  teamName: string; // "Zebros"
  teamNumber: string; // "30415"
  fullName: string; // "FTC Team 30415, Zebros"
  location: string; // "Cary, North Carolina"
  affiliation: string; // "Zebra Robotics"
  program: string; // "FIRST Tech Challenge"
  address: string; // "1408 Boulderstone Way, Cary, NC 27519"
  phone: string; // "(919) 650-6333"
  email: string; // "infocary@zebrarobotics.com"
  socials: {
    tiktok: { handle: string; url: string };
    instagram: { handle: string; url: string };
  };
  colors: { accent: string; dark: string; light: string }; // pink, navy, off-white
  defaultTheme: "dark" | "light";
  reorgNote: string; // teams reorganized for 2026; see Past Seasons
}

// Home stat counters. Values are derived from the 30415 season data, not hand-typed.
export interface Stat {
  label: string; // "Match Wins"
  value: number; // 6
  source: string; // where it is derived from
}

// Home pillars: Build, Compete, Mentor.
export interface Pillar {
  index: string; // "01"
  label: string; // "BUILD"
  title: string;
  body: string;
}

// About values (four).
export interface Value {
  icon: string;
  title: string;
  body: string;
}

// About timeline (five milestones).
export interface Milestone {
  date: string;
  title: string;
  body: string;
}

// Team members (ten).
export interface Member {
  id: string;
  name: string; // "Ishaan Pemmaraju"
  initials: string; // "IP" fallback avatar
  focusAreas: string[];
  photo?: string;
  bio?: string;
  funFact?: string;
}

// Coaches (two: Coach John, Coach Jai).
export interface Coach {
  id: string;
  name: string; // "Coach John"
  initials: string; // "JO"
  focusAreas: string[];
  bio?: string;
}

// Season results.
export interface Award {
  name: string;
  place?: string;
  event: string;
}

export interface SeasonEvent {
  name: string;
  date: string;
  rank: number;
  rankOf: number;
  qualRecord: string; // "1 W, 4 L"
  playoffResult: string; // "Did not appear" or "0 W, 2 L (Round 1 alliance)"
  notableMatch: string; // "Q15, won 125 to 58"
  awardAtEvent?: string;
}

export interface TeamSeason {
  teamNumber: string; // "30415"
  teamName: string; // "Zebros"
  location: string;
  rookieYear: number; // 2025
  sponsor: string; // "Home School"
  wins: number; // 30415: 6
  losses: number; // 30415: 11
  events: number; // 30415: 3
  awardsCount: number; // 30415: 2
  awards: Award[];
  eventList: SeasonEvent[];
}

// The separate combined section on Past Seasons.
export interface CombinedSeason {
  year: number; // 2025
  wins: number; // 14
  losses: number; // 24
  awards: number; // 4
  events: number; // 6
  summary: string;
}

// Blog posts (one entry each, twelve to start).
export interface BlogPost {
  slug: string;
  weekOf: string; // "June 8, 2026"
  date: string; // ISO date for sorting
  title: string;
  body: string; // markdown
  tags: string[];
}

// Robot / Engineering page (placeholders until photos exist).
export interface Subsystem {
  name: string; // "Drivetrain"
  status: string; // "CAD complete, fabrication started"
  body: string;
  image?: string; // none yet, use placeholder
}
