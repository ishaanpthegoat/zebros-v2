import type { TeamSeason, CombinedSeason } from "./types";

// 2025 rookie-season records (PRD §4.6). Team totals and awards are confirmed.
// Per-event records (eventList: rank, qual/playoff records, notable matches) live
// on the current site and are NOT in the PRD — see the Phase 1 content gap. The
// empty eventList renders a clean fallback (PRD §10) until those records load.

export const team30415 = {
  teamNumber: "30415",
  teamName: "Zebros",
  location: "Cary, North Carolina",
  rookieYear: 2025,
  sponsor: "Home School",
  wins: 6,
  losses: 11,
  events: 3,
  awardsCount: 2,
  awards: [
    { name: "Judges' Choice", event: "Southeast Raleigh Qualifier (Q3)" },
    {
      name: "Design Award",
      place: "2nd Place",
      event: "Cardinal Gibbons Qualifier",
    },
  ],
  eventList: [], // TODO: load per-event records from the live site
} satisfies TeamSeason;

export const team30416 = {
  teamNumber: "30416",
  teamName: "Zebros",
  location: "Cary, North Carolina",
  rookieYear: 2025,
  sponsor: "Home School",
  // Totals derived from combined − 30415 (PRD §4.6). Verify against live records.
  wins: 8,
  losses: 13,
  events: 3,
  awardsCount: 2,
  awards: [
    { name: "Design Award", event: "Ascend Qualifier (Q2)" },
    {
      name: "Think Award",
      place: "2nd Place",
      event: "Cardinal Gibbons Qualifier",
    },
  ],
  eventList: [], // TODO: load per-event records from the live site
} satisfies TeamSeason;

// Both teams, for the Past Seasons toggle (PRD §6.6).
export const teamSeasons: TeamSeason[] = [team30415, team30416];

// The separate "Combined" section on Past Seasons (PRD §4.6, §6.6).
export const combinedSeason = {
  year: 2025,
  wins: 14,
  losses: 24,
  awards: 4,
  events: 6,
  summary:
    "In their 2025 rookie season, Zebros teams 30415 and 30416 competed across 6 events and earned 4 awards between them. The rosters reorganized into a single program for 2026.",
} satisfies CombinedSeason;
