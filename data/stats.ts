import type { Stat } from "./types";
import { team30415 } from "./seasons";
import { members } from "./members";

// Home quick-stats strip (PRD §6.1, §10). Every value is DERIVED from the 30415
// season data and the roster — never hand-typed — so the numbers can't drift or
// show 0 (this fixes the "stats show 0" bug). These are 30415's OWN numbers, not
// the combined totals; the home page links to Past Seasons for the combined set.
export const stats: Stat[] = [
  {
    label: "Active Members",
    value: members.length,
    source: "data/members.ts (roster length)",
  },
  {
    label: "Awards Won",
    value: team30415.awards.length,
    source: "data/seasons.ts → team30415.awards",
  },
  {
    label: "Events Attended",
    value: team30415.events,
    source: "data/seasons.ts → team30415.events",
  },
  {
    label: "Match Wins",
    value: team30415.wins,
    source: "data/seasons.ts → team30415.wins",
  },
];
