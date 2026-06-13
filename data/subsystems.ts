import type { Subsystem } from "./types";

// Robot subsystems (PRD §6.5): drivetrain, intake, slides, transfer, brake.
// Status and copy are drawn from the build blog (the June 1 and June 8, 2026
// posts in data/blog.ts), as directed by PRD §6.5. Images are intentionally
// absent — the Robot page launches with clean placeholders and swaps in real
// CAD renders / build photos later (PRD §6.5, §11).
export const subsystems: Subsystem[] = [
  {
    name: "Drivetrain",
    status: "CAD complete, fabrication started",
    body: "Drivetrain CAD is finished and the Mechanical team has begun fabrication, building out two drivetrain sides as part of a full robot teardown.",
  },
  {
    name: "Intake",
    status: "Prototyping",
    body: "Two prototype squads are comparing a linear slide intake against a roller-bar design. The slide had a working v1 first, while the roller picked up faster off the ground — both are still under test.",
  },
  {
    name: "Slides",
    status: "CAD complete",
    body: "CAD for the intake/slide assembly is complete and ready to feed into fabrication once the intake style is locked in.",
  },
  {
    name: "Transfer",
    status: "CAD complete",
    body: "The intake-to-outtake transfer path is modeled. The motor and middle section were reworked after a design review caught a mounting issue.",
  },
  {
    name: "Brake",
    status: "Planned",
    body: "The brake system has been planned alongside the intake, slides, and drivetrain, with design work to follow.",
  },
];
