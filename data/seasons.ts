import type { TeamSeason, CombinedSeason } from "./types";

// 2025 rookie-season records (PRD §4.6), loaded from the current site's Past
// Seasons page. Team totals are computed from the per-event records below — the
// live page's "0 wins / 0 losses" counters are the broken-counter bug (PRD §3.2),
// so they are NOT used. 30416 competes as "Zebolts" (per the live site).

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
    { name: "Judges' Choice", event: "Southeast Raleigh High School Qualifier 3" },
    {
      name: "Design Award",
      place: "2nd Place",
      event: "Cardinal Gibbons High School",
    },
  ],
  eventList: [
    {
      name: "Cardinal Gibbons High School",
      date: "January 17, 2026",
      rank: 19,
      rankOf: 26,
      qualRecord: "1 W, 4 L",
      playoffResult: "Did not appear",
      notableMatch: "Q15, won 125 to 58",
      awardAtEvent: "Design Award, 2nd Place",
    },
    {
      name: "Ascend Leadership Academy Qualifier",
      date: "February 7, 2026",
      rank: 15,
      rankOf: 19,
      qualRecord: "1 W, 4 L",
      playoffResult: "Did not appear",
      notableMatch: "Q7, won 93 to 33",
    },
    {
      name: "Southeast Raleigh High School Qualifier 3",
      date: "February 15, 2026",
      rank: 6,
      rankOf: 24,
      qualRecord: "4 W, 1 L",
      playoffResult: "0 W, 2 L (Round 1 alliance)",
      notableMatch: "Q18, won 207 to 86",
      awardAtEvent: "Judges' Choice",
    },
  ],
} satisfies TeamSeason;

export const team30416 = {
  teamNumber: "30416",
  teamName: "Zebolts",
  location: "Cary, North Carolina",
  rookieYear: 2025,
  sponsor: "Home School",
  wins: 8,
  losses: 13,
  events: 3,
  awardsCount: 2,
  awards: [
    {
      name: "Design Award",
      event: "Ascend Leadership Academy Qualifier 2",
    },
    {
      name: "Think Award",
      place: "2nd Place",
      event: "Cardinal Gibbons High School",
    },
  ],
  eventList: [
    {
      name: "Cardinal Gibbons High School",
      date: "January 17, 2026",
      rank: 10,
      rankOf: 26,
      qualRecord: "3 W, 2 L",
      playoffResult: "0 W, 2 L (Captain of Alliance 6)",
      notableMatch: "Q3, won 176 to 58",
      awardAtEvent: "Think Award, 2nd Place",
    },
    {
      name: "Ascend Leadership Academy Qualifier 2",
      date: "February 8, 2026",
      rank: 9,
      rankOf: 18,
      qualRecord: "1 W, 4 L",
      playoffResult: "Did not appear",
      notableMatch: "Q20, won 109 to 28",
      awardAtEvent: "Design Award",
    },
    {
      name: "Southeast Raleigh High School Qualifier 3",
      date: "February 15, 2026",
      rank: 16,
      rankOf: 24,
      qualRecord: "2 W, 3 L",
      playoffResult: "2 W, 2 L (Round 1 alliance)",
      notableMatch: "UB R2 M4, won 142 to 100",
    },
  ],
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
    "In their 2025 rookie season, teams 30415 (Zebros) and 30416 (Zebolts) competed across 6 events and earned 4 awards between them. The two rosters reorganized into balanced lineups for 2026 and continue to compete independently.",
} satisfies CombinedSeason;
