import type { Subsystem } from "./types";

// Robot subsystems (PRD §6.5): drivetrain, intake, slides, transfer, brake.
// The names are fixed. Status and body copy should be pulled from the build blog
// (the June 8 post describes the drivetrain and intake work), which is NOT in the
// PRD — pending content (Phase 1 content gap). Images are intentionally absent:
// the Robot page launches with clean placeholders and swaps in real CAD/photos
// later (PRD §6.5, §11).
// TODO: fill status + body for each subsystem once the build-blog detail is sourced.
export const subsystems: Subsystem[] = [
  { name: "Drivetrain", status: "Details coming soon", body: "" },
  { name: "Intake", status: "Details coming soon", body: "" },
  { name: "Slides", status: "Details coming soon", body: "" },
  { name: "Transfer", status: "Details coming soon", body: "" },
  { name: "Brake", status: "Details coming soon", body: "" },
];
