import type { Member } from "./types";

// 10-member roster (PRD §4.4). Names are confirmed. Focus areas, bios, and fun
// facts live on the current site and are NOT in the PRD — see the Phase 1 content
// gap; they fill the empty fields below once sourced. `initials` is the avatar
// fallback shown when a member has no photo (PRD §6.3). No formal leadership roles.
export const members: Member[] = [
  { id: "aarnavi-boppana", name: "Aarnavi Boppana", initials: "AB", focusAreas: [] },
  { id: "amir-islamkulov", name: "Amir Islamkulov", initials: "AI", focusAreas: [] },
  { id: "avani-poondota", name: "Avani Poondota", initials: "AP", focusAreas: [] },
  { id: "hrithik-ajith", name: "Hrithik Ajith", initials: "HA", focusAreas: [] },
  { id: "ishaan-pemmaraju", name: "Ishaan Pemmaraju", initials: "IP", focusAreas: [] },
  { id: "peter-napoleonak", name: "Peter Napoleonak", initials: "PN", focusAreas: [] },
  { id: "saisri-kondapaneni", name: "Saisri Kondapaneni", initials: "SK", focusAreas: [] },
  { id: "sanya-patel", name: "Sanya Patel", initials: "SP", focusAreas: [] },
  { id: "virja-mehta", name: "Virja Mehta", initials: "VM", focusAreas: [] },
  { id: "yuvika-kandel", name: "Yuvika Kandel", initials: "YK", focusAreas: [] },
];
