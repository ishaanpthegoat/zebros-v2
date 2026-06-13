import type { Member } from "./types";

// 10-member roster (PRD §4.4), loaded from the current site's Team page. Names
// and focus areas are confirmed. The site shows no bios or fun facts (cards list
// focus areas only), so those optional fields stay unset and the UI falls back to
// the initials avatar (PRD §6.3).
export const members: Member[] = [
  {
    id: "aarnavi-boppana",
    name: "Aarnavi Boppana",
    initials: "AB",
    focusAreas: ["Social Media", "Project Management", "Portfolio"],
  },
  {
    id: "amir-islamkulov",
    name: "Amir Islamkulov",
    initials: "AI",
    focusAreas: ["Mechanical", "CAD", "Design"],
  },
  {
    id: "avani-poondota",
    name: "Avani Poondota",
    initials: "AP",
    focusAreas: ["Programming", "Social Media", "Project Management", "Script"],
  },
  {
    id: "hrithik-ajith",
    name: "Hrithik Ajith",
    initials: "HA",
    focusAreas: ["Project Management", "Programming", "Portfolio"],
  },
  {
    id: "ishaan-pemmaraju",
    name: "Ishaan Pemmaraju",
    initials: "IP",
    focusAreas: ["Management", "STEM Connections", "Script", "Portfolio"],
  },
  {
    id: "peter-napoleonak",
    name: "Peter Napoleonak",
    initials: "PN",
    focusAreas: ["Mood Booster", "Helper"],
  },
  {
    id: "saisri-kondapaneni",
    name: "Saisri Kondapaneni",
    initials: "SK",
    focusAreas: ["Script", "CAD", "Mechanical"],
  },
  {
    id: "sanya-patel",
    name: "Sanya Patel",
    initials: "SP",
    focusAreas: ["Bot Maintenance", "Portfolio", "Mechanical"],
  },
  {
    id: "virja-mehta",
    name: "Virja Mehta",
    initials: "VM",
    focusAreas: ["Bot Maintenance", "Portfolio", "Mechanical"],
  },
  {
    id: "yuvika-kandel",
    name: "Yuvika Kandel",
    initials: "YK",
    focusAreas: ["Programming", "Project Management"],
  },
];

// Preserved Team-page copy (PRD §4.4, §6.3).
export const rosterNote =
  "The team operates without formal leadership roles; everyone contributes across the focus areas listed on their card.";

export const joinCta = "Interested in joining the team? Contact us.";
