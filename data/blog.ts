import type { BlogPost } from "./types";

// Weekly blog posts (PRD §4.7), loaded verbatim from the current site's Blog page,
// newest first. NOTE: the PRD says "12 posts," but the live site has exactly 11 —
// all 11 real posts are preserved here; no 12th was invented.
//
// The blog list page, per-post pages, and the home "latest post" teaser are all
// generated from this array (PRD §10). `date` (ISO) is for sorting; `weekOf` is
// the display label; `body` is markdown.
//
// Open decision (deferred to Phase 3): keep posts here as typed entries, or move
// each to content/blog/*.md with frontmatter for a faster weekly publish flow.
// The BlogPost shape stays the same either way.
export const blogPosts: BlogPost[] = [
  {
    slug: "outreach-momentum-and-first-drivetrain-build",
    weekOf: "June 8, 2026",
    date: "2026-06-08",
    title: "Outreach momentum & first drivetrain build",
    tags: ["Outreach", "CAD", "Drivetrain"],
    body: `A big week on two fronts: public-facing outreach and sponsorship, and the first real robot design and drivetrain work. We landed our first partner, stood up this team website, and started fabricating the drivetrain.

Outreach & sponsorship. Landed Lunespark as a partner — now waiting on their call to choose a package. Mapped out our social media, summer STEM outreach, and team merch strategy (and found a reputable, affordable merch seller), and launched this website to showcase past seasons, current plans, and sponsor needs in support of Connect Award–style outreach.

Robot development. The Design team planned the brake system, intake, slides, and drivetrain, and completed CAD for the drivetrain, intake/slide, and the intake-to-outtake transfer path — reworking the motor and middle section after catching a mounting issue in review. The Mechanical team began fabrication, building two drivetrain sides and running a full robot teardown.

Team ops & tooling. Finalized member roles (cosmetic team info still in progress) and continued setting up our internal AI / Claude tooling and workflow.`,
  },
  {
    slug: "off-season-prototyping-begins",
    weekOf: "June 1, 2026",
    date: "2026-06-01",
    title: "Off-season prototyping begins",
    tags: ["Build", "Prototype"],
    body: `First week of summer build. We split into two prototype squads to compare a linear slide intake against a roller bar design. The slide squad had a working v1 by Friday, though the roller pickup proved faster off the ground. We will continue testing both before deciding.`,
  },
  {
    slug: "season-review",
    weekOf: "May 25, 2026",
    date: "2026-05-25",
    title: "Season review",
    tags: ["Strategy", "Team"],
    body: `The full team sat down to review every event from the 2025 season. Highlights included our Judges' Choice run at Southeast Raleigh. We also identified a recurring servo failure pattern from Ascend, which we are addressing in our preventive maintenance plan.`,
  },
  {
    slug: "roster-reorganization-complete",
    weekOf: "May 18, 2026",
    date: "2026-05-18",
    title: "Roster reorganization complete",
    tags: ["Team", "Milestone"],
    body: `This week wrapped up the off-season roster reorganization. Both 30415 and 30416 continue to compete, with new lineups drawn from across the prior rosters. Coach walked through the off-season roadmap and we began reorganizing the pit.`,
  },
  {
    slug: "cad-training-for-new-members",
    weekOf: "May 11, 2026",
    date: "2026-05-11",
    title: "CAD training for new members",
    tags: ["Training", "CAD"],
    body: `Our experienced CAD members ran a training session this week. Three new members are now comfortable enough in Onshape to mock up a custom mounting plate. Next week we will review the designs together as a sub-team.`,
  },
  {
    slug: "stem-day-at-the-cary-library",
    weekOf: "May 4, 2026",
    date: "2026-05-04",
    title: "STEM day at the Cary Library",
    tags: ["Outreach", "Community"],
    body: `Six team members ran a robotics demo booth at the Cary Library STEM day. Around 80 children came through to drive a practice bot on a mini-field. Several families requested information packets about local FLL teams.`,
  },
  {
    slug: "workshop-organization-and-inventory",
    weekOf: "April 27, 2026",
    date: "2026-04-27",
    title: "Workshop organization and inventory",
    tags: ["Logistics"],
    body: `A focused week of organization. We sorted every fastener, labeled every drawer, and discarded the bin of stripped screws we had been holding onto. The pit is in good shape for the start of build season.`,
  },
  {
    slug: "strategy-planning-for-next-season",
    weekOf: "April 20, 2026",
    date: "2026-04-20",
    title: "Strategy planning for next season",
    tags: ["Strategy"],
    body: `With the season finished, we held our first strategy meeting for the upcoming FTC game. We rewatched last season's game reveal and brainstormed scoring priorities and robot architectures. Final architecture calls will come once the next game is announced.`,
  },
  {
    slug: "fll-mentorship-visit",
    weekOf: "April 13, 2026",
    date: "2026-04-13",
    title: "FLL mentorship visit",
    tags: ["Outreach", "Mentorship"],
    body: `Three of us visited a local FIRST LEGO League team to help them prepare for their qualifier. We ran mock judging sessions and reviewed their engineering notebook with them. Good to see the next generation working hard.`,
  },
  {
    slug: "first-sponsor-outreach-round",
    weekOf: "April 6, 2026",
    date: "2026-04-06",
    title: "First sponsor outreach round",
    tags: ["Sponsorship"],
    body: `Sent out the first batch of sponsorship proposals this week. The whole team is working through edits to the sponsorship package. We are aiming to lock in at least one local partner before the new build season starts.`,
  },
  {
    slug: "end-of-competition-season-recap",
    weekOf: "March 30, 2026",
    date: "2026-03-30",
    title: "End of competition season recap",
    tags: ["Season Recap"],
    body: `We wrapped up the competition season with our Southeast Raleigh appearance. Final tally for 30415: 6 wins, 11 losses, 2 awards. Now begins the part of the year where we learn from what worked and what didn't.`,
  },
];
