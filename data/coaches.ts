import type { Coach } from "./types";

// Two coaches (PRD §4.5). Names and focus areas are confirmed; bios pending.
export const coaches: Coach[] = [
  {
    id: "coach-john",
    name: "Coach John",
    initials: "JO",
    focusAreas: ["Engineering", "Strategy"],
  },
  {
    id: "coach-jai",
    name: "Coach Jai",
    initials: "JA",
    focusAreas: ["Workshop Host", "Program Director"],
  },
];
