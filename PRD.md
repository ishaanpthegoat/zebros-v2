\# Product Requirements Document

\## Zebros Team 30415 Website, Version 2



\*\*Owner:\*\* Ishaan Pemmaraju

\*\*Team:\*\* FTC Team 30415, Zebros. Cary, North Carolina. Affiliated with Zebra Robotics.

\*\*Current site:\*\* http://zebrosrobotics.com (static HTML/CSS/JS on GitHub Pages, Squarespace domain)

\*\*Status:\*\* Draft for review

\*\*Goal of this doc:\*\* Define what version 2 should be. Keep all the good content. Drop the current design. Rebuild as a premium Next.js app using UI UX Pro Max for the design system and 21st.dev Magic for components.



\---



\## 1. Summary



The current site works and has solid content. It covers the team, the season results, and a weekly blog. The problem is the design and a few content bugs, not the information.



Version 2 keeps every real content piece listed in this doc. It moves to a premium Next.js build. The design system comes from UI UX Pro Max. The components come from 21st.dev Magic. It fixes the broken stat counters, adds an engineering/robot page that helps with FTC judged awards, adds a social page, makes the home page open and easy to explore, and makes the blog easier to update each week.



The site starts in dark mode. The Sponsors page and the Gallery page ship as simple "coming soon" pages for now.



This doc does not include any code. It defines the plan only. The build kickoff prompt is in Appendix A.



\---



\## 2. Goals and success metrics



\*\*Primary goals\*\*



1\. Make the site look premium and trustworthy. This matters most for FTC judges and future sponsors.

2\. Keep all existing content. Nothing real should be lost in the rebuild.

3\. Make weekly blog updates fast and simple to post.

4\. Support FTC judged awards (Connect, Design, Think) by showing the team's work and outreach clearly.



\*\*How we measure success\*\*



\- An FTC judge can find season results, outreach, and engineering work in one or two clicks.

\- A new blog post takes under five minutes to publish.

\- The site loads fast and scores well on Lighthouse (target 90+ on performance and accessibility).

\- The site runs on HTTPS with no mixed-content warnings.



\---



\## 3. Current site analysis



\### 3.1 Pages that exist today



| Page | Purpose |

|------|---------|

| Home (`index.html`) | Hero, stats, what we do, blog teaser, sponsor call to action |

| About (`about.html`) | Team story, timeline, values |

| Team (`team.html`) | Member roster with roles and click-to-open profiles |

| Coaches (`coaches.html`) | Adult mentors |

| Past Seasons (`past-seasons.html`) | 2025 rookie results for 30415 and 30416 |

| Blog (`blog.html`) | Weekly updates, all on one page |

| Sponsors (`sponsors.html`) | Partnership value, three tiers, current sponsor slots |



\### 3.2 Problems found



1\. \*\*Stat counters show 0.\*\* Home page shows zero for all four numbers. Real numbers exist on the Past Seasons page. This makes the site look broken or empty.

2\. \*\*Site runs on HTTP.\*\* It should run on HTTPS. Judges or sponsors may see a "not secure" warning.

3\. \*\*Blog is one long page.\*\* Each post has no own link. You cannot share a single update. Posting requires editing one big file.

4\. \*\*No engineering or robot page.\*\* FTC judged awards reward showing your design process. The site does not show the robot, CAD, or subsystems.

5\. \*\*No social page.\*\* The team's TikTok and Instagram are not on the site.

6\. \*\*Light on SEO basics.\*\* No clear meta descriptions, social share image, or sitemap.



\---



\## 4. Content to preserve



This is the locked list. Every item here must carry over to version 2.



\### 4.1 Team identity

\- Name: Zebros. Number: FTC Team 30415. (Confirmed.)

\- Location: Cary, North Carolina.

\- Affiliation: Zebra Robotics.

\- Colors: pink and black.

\- Logo mark (the zebra wearing glasses).

\- Program: FIRST Tech Challenge.



\### 4.2 Contact and social

\- Address: 1408 Boulderstone Way, Cary, NC 27519

\- Phone: (919) 650-6333

\- Email: infocary@zebrarobotics.com

\- TikTok: @zebros308

\- Instagram: @zebros30415



\### 4.3 Story and background

\- The two-team origin (30415 and 30416 as homeschool rookie teams in 2025).

\- The off-season reorganization for 2026.

\- The five timeline milestones.

\- The four team values.



\### 4.4 Roster (10 members, keep names and roles)

\- Aarnavi Boppana, Amir Islamkulov, Avani Poondota, Hrithik Ajith, Ishaan Pemmaraju, Peter Napoleonak, Saisri Kondapaneni, Sanya Patel, Virja Mehta, Yuvika Kandel.

\- Keep each member's focus areas.

\- Keep the "no formal leadership roles" note.



\### 4.5 Coaches (confirmed: two coaches)

\- Coach John (Engineering, Strategy)

\- Coach Jai (Workshop Host, Program Director)



\### 4.6 Season results (keep all of it)

\- 30415 awards: Judges' Choice (Southeast Raleigh Q3), Design Award 2nd Place (Cardinal Gibbons).

\- 30416 awards: Design Award (Ascend Q2), Think Award 2nd Place (Cardinal Gibbons).

\- All event records, ranks, dates, and notable match scores for both teams.

\- 30415 season totals: 6 wins, 11 losses, 2 awards, 3 events.

\- Combined 2025 totals (both teams): 14 wins, 24 losses, 4 awards, 6 events.



\### 4.7 Blog

\- All 12 existing posts with their dates, titles, full text, and tags.



\### 4.8 Sponsor content

\- The Sponsors page goes "coming soon" in v2.

\- The two-way partnership section is removed. Do not bring it back.

\- The three sponsor tiers (Silver, Gold, Title) are saved in Appendix B for the future sponsor page. They are not shown at launch.



\---



\## 5. Information architecture for version 2



```

Home

About

Team

Coaches

Robot / Engineering   (NEW, launches with placeholders, no photos yet)

Past Seasons          (toggle 30415 / 30416 + separate combined section)

Blog

&#x20; └ individual post pages  (NEW)

Social                (NEW, TikTok + Instagram)

Gallery               (coming soon page)

Sponsors              (coming soon page)

```



\*\*Notes on the pages\*\*



\- \*\*Robot / Engineering (new).\*\* Shows the build process, CAD, and subsystems. We have no robot photos yet, so it launches with clean placeholders.

\- \*\*Past Seasons.\*\* Show 30415 and 30416 separately with a toggle. Add a separate combined section below.

\- \*\*Blog.\*\* Each weekly update gets its own link.

\- \*\*Social (new).\*\* A page for the team's TikTok and Instagram.

\- \*\*Gallery and Sponsors.\*\* Live in the nav but show clean "coming soon" pages for now.



\---



\## 6. Page requirements for version 2



\### 6.1 Home (open and explore-first)



No big hero. The home page is a friendly front door. A visitor should land, quickly get who the Zebros are, and jump to anything they want. The whole page is built for easy navigation and exploring.



\*\*Navbar (always visible)\*\*

\- Clean and simple. Small logo on the left. Links to every page: About, Team, Coaches, Robot, Past Seasons, Blog, Social, Gallery, Sponsors.

\- Easy to scan on desktop. Collapses to a tidy menu on mobile.



\*\*Welcome band (compact, not a hero)\*\*

\- The team name and a short one or two line intro of who the team is.

\- Two buttons: Meet the team, and View results.

\- Keep it short. The point is to invite people in, not to fill the screen.



\*\*Quick stats strip (30415 numbers)\*\*

\- The 30415 team's own numbers. Count up on scroll. From one shared data source.

\- Active Members 10, Awards Won 2, Events Attended 3, Match Wins 6.

\- Add a short line noting the teams reorganized for 2026, with a link to Past Seasons for the combined totals. Example: "30415 and 30416 reorganized rosters for 2026. See Past Seasons for combined results."



\*\*Explore grid (the main way people navigate)\*\*

\- A set of clear cards. Each card is a doorway into a section, with a title, a one-line description, and a link.

\- Suggested cards: Our Story (About), The Team (Team), Our Coaches (Coaches), The Robot (Robot), Season Results (Past Seasons), The Blog (Blog), Follow Us (Social).

\- This grid is the heart of the home page. It lets people pick what they care about and go.



\*\*Latest from the blog\*\*

\- The newest post teaser, pulled automatically, with a link to the full blog.



\*\*Footer\*\*

\- Contact details and the social links.



\*\*Optional logo touch\*\*

\- The playful logo with cursor-following eyes can still appear as a small, calm accent near the welcome band if you want a bit of personality. It is no longer a hero. The reference is in `zebros-hero-demo.html`. This is optional, and easy to leave out.



\### 6.2 About

\- Keep the full story, the five-milestone timeline, and the four values.

\- Present the timeline as a clean vertical or horizontal track.



\### 6.3 Team

\- 10 member cards in a responsive grid.

\- Real photos where possible. Use a clean initials avatar as the fallback, styled to match.

\- Click opens a profile with a short bio, focus areas, and maybe a fun fact.

\- Keep the "no formal leadership roles" note and the join call to action.



\### 6.4 Coaches

\- Two coach cards only: Coach John and Coach Jai.

\- Same card and profile pattern as the Team page.



\### 6.5 Robot / Engineering (new, launches with placeholders)

\- Short intro on the current build.

\- Subsystem breakdown (drivetrain, intake, slides, transfer, brake) with a line or two each.

\- We have no robot photos yet. Use clean image placeholders that match the design system. Swap in real CAD renders and build photos later.

\- Optional link to an engineering portfolio or notebook PDF.

\- Pull real detail from the blog (the June 8 post already describes the drivetrain and intake work).



\### 6.6 Past Seasons

\- Keep both team blocks in full.

\- Add a toggle at the top to switch between 30415 and 30416. Show one team at a time.

\- Below the toggle, add a separate "Combined" section that shows the combined 2025 totals (14 wins, 24 losses, 4 awards, 6 events) and a short summary.

\- Use clean cards or a table for events.



\### 6.7 Blog

\- Keep all 12 posts.

\- Each post is its own file or entry.

\- Generate the list page and the latest-post teaser from those entries.

\- Keep tags. Make them filterable.

\- Add an individual page per post with its own link.



\### 6.8 Social (new)

\- A page for the team's social accounts.

\- TikTok: @zebros308, linking to https://www.tiktok.com/@zebros308

\- Instagram: @zebros30415, linking to https://www.instagram.com/zebros30415

\- Clean cards with the platform icon, handle, and a follow button.

\- Optional later: embed a recent feed. For now, simple links are enough.

\- Also add these social links to the site footer.



\### 6.9 Gallery (coming soon)

\- The page exists and sits in the nav.

\- It shows a clean, on-brand "coming soon" message.

\- Build the real grid later.



\### 6.10 Sponsors (coming soon)

\- The whole page is a clean, on-brand "coming soon" page.

\- Do not show the two-way partnership content. It is removed.

\- Do not show the tiers at launch. They are saved in Appendix B.

\- Optional: a single line like "Sponsorship details coming soon. To reach the team, email infocary@zebrarobotics.com."



\---



\## 7. Improvements, prioritized



\*\*Must do for launch\*\*



1\. Fix the stat counters with real, shared 30415 data.

2\. Run the site on HTTPS and enforce it.

3\. Add basic SEO: page titles, meta descriptions, a social share image, and a favicon.

4\. Make sure every page works well on phones.

5\. Add real alt text to all images for accessibility.

6\. Start the site in dark mode by default.



\*\*Should do\*\*



7\. Make the home page open and explore-first, with a clear navbar and section cards.

8\. Add the Robot / Engineering page (placeholders for now).

9\. Switch the blog to per-post entries with their own links.

10\. Add real member and coach profiles.

11\. Build the Past Seasons toggle and the separate combined section.

12\. Add the Social page.



\*\*Nice to have\*\*



13\. Add privacy-friendly analytics for later, when the sponsor page goes live.

14\. Add an RSS feed for the blog.

15\. Highlight outreach impact numbers (for example, 80 kids reached at the Cary Library STEM day) as a small stat strip. This helps the Connect Award.

16\. Optional: the small cursor-following eyes logo accent near the welcome band. Reference in `zebros-hero-demo.html`.



\---



\## 8. Design direction



Drop the current design. The new look should feel premium, calm, and confident, like Apple, Stripe, Linear, and Vercel. We get there using two tools: UI UX Pro Max for the design system, and 21st.dev Magic for the components.



\### 8.1 The tools



\*\*UI UX Pro Max (design system)\*\*

\- An AI design skill that builds a full design system from the project needs.

\- It picks the style, color palette, font pairing, spacing, and UX rules, and saves them to the project.

\- We feed it this PRD and the brand rules below.



\*\*21st.dev Magic (components)\*\*

\- An MCP server that generates React, Next.js, and Tailwind components from plain-English prompts.

\- It works with shadcn/ui and Framer Motion.

\- We use it to build navbars, hero sections, cards, stat blocks, and more, all matched to the design system.

\- Note: the cursor-tracking eyes hero is a custom interactive piece. 21st.dev can scaffold the hero layout, but the eye-tracking logic is custom and built to the spec in section 6.1.



\### 8.2 Brand rules the design system must follow



These are locked. The tools work within them.



\- \*\*Dark mode first.\*\* The site starts in dark mode by default. Offer a light mode toggle too, but dark is the default.

\- \*\*Color.\*\* Base the site on near-black and off-white. Mostly monochrome. Use the team pink as the single accent color. Pink on buttons, links, active tags, and small highlights only. Exact brand colors from the logo: pink `#DC4F72`, navy `#141E42`, white `#FFFDFE`. The navy works well for deep backgrounds and dark UI.

\- \*\*Type.\*\* One strong, modern sans-serif for everything. Large, tight headings. Comfortable body text. Clear size steps.

\- \*\*Space.\*\* Generous spacing. Wide margins. Clean grid.

\- \*\*Cards.\*\* Soft rounded corners and thin borders. Consistent image shapes.

\- \*\*Motion.\*\* Subtle scroll reveals. Stat counters that count up once. Smooth hover states. The hero eyes track the cursor gently. Keep all motion light, and respect reduced-motion settings.



\### 8.3 The premium feel we are aiming for



\- \*\*Apple.\*\* Lots of white space. Big confident headings. One clear idea per section.

\- \*\*Stripe.\*\* Crisp cards. Clean layout. Subtle gradient accents in small doses.

\- \*\*Linear.\*\* Smooth quiet motion. A modern tight typeface. A dark mode that looks intentional.

\- \*\*Vercel.\*\* High contrast. Geometric sans type. Minimal. Fast.



The end result: a quiet, high-contrast dark site with one confident accent color, lots of space, clean type, and gentle motion. The home page is open and easy to explore, so people can quickly find what they want and learn about the team.



\---



\## 9. Technical notes and constraints



\*\*Stack\*\*

\- Next.js 15

\- TypeScript

\- Tailwind CSS

\- shadcn/ui

\- Framer Motion

\- UI UX Pro Max (design system)

\- 21st.dev Magic MCP (components)



\*\*Hosting: locked to Vercel\*\*

\- Version 2 deploys on Vercel. Final decision, not an option.

\- Reasons: native home for Next.js, easy weekly deploys, fast builds, free HTTPS, preview deploys per change, no static-export limits.

\- Domain: keep the Squarespace domain. Point its DNS at Vercel instead of GitHub Pages. Vercel issues and renews HTTPS automatically.

\- Do not build for GitHub Pages or use Next.js static export.



\*\*Theme\*\*

\- Dark mode is the default at first load. A light mode toggle is available but dark is the starting state.



\*\*Performance\*\*

\- Keep the site fast and light. Target Lighthouse 90+ on performance and accessibility.



\---



\## 10. Data contract



This is the data-first foundation. Build the data layer before any page or component. Every page reads from these data files. No content is hardcoded inside a component.



\*\*Core rules\*\*

\- One source of truth per kind of data.

\- Home stat counters are derived from the 30415 season data, not typed in by hand. This fixes the "shows 0" bug and stops numbers from drifting.

\- Identity, contact, and social links live in one `siteConfig` file used everywhere (footer, contact lines, metadata, social page).

\- Blog posts are individual entries. The blog list page and the home teaser are generated from them.

\- All types live in TypeScript. If a field is missing, the UI shows a clean fallback (for example, initials instead of a photo).



\*\*Shapes (TypeScript)\*\*



```ts

// One source of truth for identity, contact, and social.

interface SiteConfig {

&#x20; teamName: string;        // "Zebros"

&#x20; teamNumber: string;      // "30415"

&#x20; fullName: string;        // "FTC Team 30415, Zebros"

&#x20; location: string;        // "Cary, North Carolina"

&#x20; affiliation: string;     // "Zebra Robotics"

&#x20; program: string;         // "FIRST Tech Challenge"

&#x20; address: string;         // "1408 Boulderstone Way, Cary, NC 27519"

&#x20; phone: string;           // "(919) 650-6333"

&#x20; email: string;           // "infocary@zebrarobotics.com"

&#x20; socials: {

&#x20;   tiktok: { handle: string; url: string };    // "@zebros308", "https://www.tiktok.com/@zebros308"

&#x20;   instagram: { handle: string; url: string };  // "@zebros30415", "https://www.instagram.com/zebros30415"

&#x20; };

&#x20; colors: { accent: string; dark: string; light: string }; // pink #DC4F72, navy #141E42, off-white #FFFDFE

&#x20; defaultTheme: "dark" | "light";  // "dark"

&#x20; reorgNote: string;       // short line: teams reorganized for 2026, see Past Seasons

}



// Home stat counters. Values come from the 30415 season data, not hand-typed.

interface Stat {

&#x20; label: string;           // "Match Wins"

&#x20; value: number;           // 6

&#x20; source: string;          // where it is derived from

}



// Home pillars: Build, Compete, Mentor.

interface Pillar {

&#x20; index: string;           // "01"

&#x20; label: string;           // "BUILD"

&#x20; title: string;

&#x20; body: string;

}



// About values (four).

interface Value { icon: string; title: string; body: string; }



// About timeline (five milestones).

interface Milestone { date: string; title: string; body: string; }



// Team members (ten).

interface Member {

&#x20; id: string;

&#x20; name: string;            // "Ishaan Pemmaraju"

&#x20; initials: string;        // "IP" fallback avatar

&#x20; focusAreas: string\[];

&#x20; photo?: string;

&#x20; bio?: string;

&#x20; funFact?: string;

}



// Coaches (two: Coach John, Coach Jai).

interface Coach {

&#x20; id: string;

&#x20; name: string;            // "Coach John"

&#x20; initials: string;        // "JO"

&#x20; focusAreas: string\[];

&#x20; bio?: string;

}



// Season results.

interface Award { name: string; place?: string; event: string; }



interface SeasonEvent {

&#x20; name: string;

&#x20; date: string;

&#x20; rank: number;

&#x20; rankOf: number;

&#x20; qualRecord: string;      // "1 W, 4 L"

&#x20; playoffResult: string;   // "Did not appear" or "0 W, 2 L (Round 1 alliance)"

&#x20; notableMatch: string;    // "Q15, won 125 to 58"

&#x20; awardAtEvent?: string;

}



interface TeamSeason {

&#x20; teamNumber: string;      // "30415"

&#x20; teamName: string;        // "Zebros"

&#x20; location: string;

&#x20; rookieYear: number;      // 2025

&#x20; sponsor: string;         // "Home School"

&#x20; wins: number;            // 30415: 6

&#x20; losses: number;          // 30415: 11

&#x20; events: number;          // 30415: 3

&#x20; awardsCount: number;     // 30415: 2

&#x20; awards: Award\[];

&#x20; eventList: SeasonEvent\[];

}



// The separate combined section on Past Seasons.

interface CombinedSeason {

&#x20; year: number;            // 2025

&#x20; wins: number;            // 14

&#x20; losses: number;          // 24

&#x20; awards: number;          // 4

&#x20; events: number;          // 6

&#x20; summary: string;

}



// Blog posts (one entry each, twelve to start).

interface BlogPost {

&#x20; slug: string;

&#x20; weekOf: string;          // "June 8, 2026"

&#x20; date: string;            // ISO date for sorting

&#x20; title: string;

&#x20; body: string;            // markdown

&#x20; tags: string\[];

}



// Robot / Engineering page (placeholders until photos exist).

interface Subsystem {

&#x20; name: string;            // "Drivetrain"

&#x20; status: string;          // "CAD complete, fabrication started"

&#x20; body: string;

&#x20; image?: string;          // none yet, use placeholder

}

```



\*\*Files (suggested)\*\*

\- `data/site-config.ts`

\- `data/stats.ts` (derived from the 30415 season data)

\- `data/pillars.ts`

\- `data/values.ts`

\- `data/timeline.ts`

\- `data/members.ts`

\- `data/coaches.ts`

\- `data/seasons.ts` (both teams plus the combined totals)

\- `data/subsystems.ts`

\- `content/blog/\*.md` or `data/blog.ts` (one post per entry)



\---



\## 11. Out of scope for version 2



\- Full Sponsors page content. It is a coming-soon page for now.

\- Gallery photos and grid. The page is coming soon for now.

\- Real robot photos on the Robot page. Placeholders for now.

\- Embedded live social feeds. Simple links for now.

\- Online payments or a sponsor checkout.

\- User logins or accounts.

\- A full custom CMS. A simple file-based blog is enough.

\- Reusing any of the current design.

\- GitHub Pages hosting or Next.js static export. Hosting is Vercel.



\---



\## 12. Open questions to settle before build



\*\*Resolved\*\*

\- Hosting: Vercel. Locked.

\- Theme: dark mode by default at launch.

\- Coaches: two. Coach John and Coach Jai.

\- Team name: Zebros 30415.

\- Past Seasons: 30415 and 30416 separately with a toggle, plus a separate combined section.

\- Home stats: use 30415's own numbers (6 wins, 2 awards, 3 events, 10 members), with a note about the reorganization and a link to the combined totals.

\- Robot page: launches with placeholders, no photos yet.

\- Social: own page with TikTok @zebros308 and Instagram @zebros30415.

\- Gallery and Sponsors: coming-soon pages.



\*\*Still open\*\*

\- None blocking. Ready for Phase 0 once you approve.



\---



\## 13. Suggested build phases



Work in stages. Pause after each phase and wait for review.



\*\*Phase 0: Setup and design system\*\*

\- Stand up the Next.js 15 + TypeScript + Tailwind project.

\- Install and configure the 21st.dev Magic MCP.

\- Install and init UI UX Pro Max. Generate the design system from this PRD and the brand rules, with dark mode as default.

\- Install shadcn/ui and Framer Motion.

\- The design system must exist and be committed before any UI is built.



\*\*Phase 1: Data layer\*\*

\- Build the full data layer from section 10, the Data Contract.

\- Load all preserved content into the typed files.

\- Derive the home stats from the 30415 season data.

\- No visual components yet.



\*\*Phase 2: Foundation UI\*\*

\- Build the navbar and the open, explore-first home page first: welcome band, quick stats strip, and the explore grid of section cards. Nothing else.

\- Then finish Home, About, Team, Coaches, all reading from the data layer.



\*\*Phase 3: Proof and content\*\*

\- Past Seasons rebuild with the toggle and the separate combined section.

\- Blog with per-post pages.

\- Robot / Engineering page with placeholders.

\- Social page.



\*\*Phase 4: Placeholders and polish\*\*

\- Sponsors coming-soon page.

\- Gallery coming-soon page.

\- SEO, accessibility pass.

\- Deploy to Vercel and point the Squarespace domain at it.



\---



\## Appendix A: Build kickoff prompt



Paste this into your AI coding tool to start the build. Save this PRD in your repo as `PRD.md` first so the prompt can find it.



\---



You are now responsible for building my premium v2 redesign of the Zebros Team 30415 website.



CONTEXT:

\- This is the website for FTC Team 30415, the Zebros, in Cary, North Carolina, affiliated with Zebra Robotics.

\- My current live site is a plain HTML, CSS, and JavaScript site on GitHub Pages. It is not yet a Next.js project.

\- Treat v2 as a fresh Next.js 15 rebuild that preserves all real content from the current site.

\- The full plan, the locked content list, and the Data Contract are in PRD.md.

\- Do NOT delete or overwrite real content blindly. Preserve everything listed in PRD.md.



BRAND:

\- Colors: pink and black. Near-black and off-white base. Pink is the only accent color.

\- Dark mode is the default at first load. A light mode toggle exists, but dark is the starting state.

\- Premium, calm, high-contrast feel, inspired by Apple, Stripe, Linear, and Vercel.



HOSTING:

\- Target Vercel only. Do not build for GitHub Pages and do not use Next.js static export. Assume a full Next.js runtime on Vercel.



HARD RULES (do not break these):

1\. NO UI BEFORE DESIGN SYSTEM. Do not build any component, page, or layout until the UI UX Pro Max design system has been generated, saved to the project, and committed. If it does not exist yet, stop and create it first.

2\. DATA FIRST. Do not build any page that shows real content until the data layer from the Data Contract in PRD.md exists. All content is read from typed data files. Never hardcode team content inside a component.

3\. STAGE BY STAGE. Follow the phases in PRD.md in order. Do exactly one phase, then STOP and wait for my approval before the next. Do not jump ahead. Do not build the whole site at once.

4\. AT EACH STOP, give me a short summary of what you did, what files changed, and what the next phase will do. Then wait.

5\. DO NOT DELETE existing pages or content unless PRD.md explicitly says to.

6\. PRODUCTION READY. Everything in a stage must build, run, and be clean.



SPECIAL FEATURES:

\- HOME PAGE, EXPLORE-FIRST. No big hero. Build the home page as an open front door: a clean always-visible navbar with links to every page, a compact welcome band (team name, a short intro, two buttons), a quick stats strip with the 30415 numbers counting up, and an explore grid of cards that each link into a section (Our Story, The Team, Our Coaches, The Robot, Season Results, The Blog, Follow Us). Then a latest-blog teaser and a footer with contact and socials. The goal is easy navigation and exploring.

\- OPTIONAL LOGO ACCENT. The Zebros logo (`zebros-logo.jpg`) can appear as a small, calm accent near the welcome band, with the eyes following the cursor through tinted lenses. This is optional and not a hero. A working reference is in `zebros-hero-demo.html` (near lens at 74.3% across and 41.6% down, far lens at 62.7% across and 42.4% down). Respect reduced-motion and no-pointer devices. Brand colors: pink #DC4F72, navy #141E42.

\- SOCIAL PAGE. Its own page with TikTok @zebros308 (https://www.tiktok.com/@zebros308) and Instagram @zebros30415 (https://www.instagram.com/zebros30415). Clean cards with icon, handle, and a follow button. Add the same social links to the footer.



TASKS, IN THIS ORDER:

1\. Analyze the entire codebase and PRD.md first. Summarize what you found. Then STOP and wait.

2\. Phase 0: Set up Next.js 15, TypeScript, Tailwind, shadcn/ui, and Framer Motion. Install and configure the 21st.dev Magic MCP. Install and initialize UI UX Pro Max and generate the DESIGN SYSTEM (dark mode default) from PRD.md and the brand rules. Commit it. Then STOP and wait.

3\. Phase 1: Build the full data layer from the Data Contract in PRD.md. Load all preserved content. Derive the home stats from the 30415 season data. No UI yet. Then STOP and wait.

4\. Phase 2: Build the navbar and the open, explore-first home page only (welcome band, quick stats strip, and the explore grid of section cards), reading from the data layer and following the design system. Then STOP and wait.

5\. Continue through the remaining phases in PRD.md, one at a time, stopping after each.



STACK:

\- Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, UI UX Pro Max design system, 21st.dev Magic components where appropriate.



SITE STRUCTURE (from PRD.md):

\- Pages: Home, About, Team, Coaches, Robot/Engineering, Past Seasons, Blog (with per-post pages), Social, Gallery, Sponsors.

\- Coaches: two only, Coach John and Coach Jai.

\- Past Seasons: a toggle between 30415 and 30416, plus a separate combined section.

\- Robot page: launches with placeholders, no photos yet.

\- Social page: TikTok and Instagram as described above.

\- Gallery: a clean coming-soon page for now.

\- Sponsors: a clean coming-soon page for now. No two-way partnership content. No sponsor tiers at launch.

\- Home stat counters: use the 30415 team's own numbers (Active Members 10, Awards 2, Events 3, Match Wins 6), derived from the season data, counting up on scroll. Include a short note that the teams reorganized for 2026, linking to Past Seasons for the combined totals.



Start with Task 1: analyze the repo and PRD.md, summarize what you found, and STOP. Wait for my go-ahead.



\---



\## Appendix B: Saved sponsor tiers (for the future Sponsors page, not shown at launch)



Kept here so the content is not lost. Use it when the Sponsors page goes live.



\*\*Silver, $1,000 and under\*\*

\- Your logo on our robot, website, and team merch

\- Mentioned at all charity and outreach events we host

\- We host our larger team events at your location



\*\*Gold, $2,000 and under (Best Value)\*\*

\- Everything in Silver

\- Advertised across our team social media

\- Mentioned and highlighted at all competitions

\- Weekly email updates on the team's progress

\- Request us for any meeting or event you want us at

\- Primary sponsor and lead mention at all outreach events



\*\*Title Sponsor, $3,000 and under\*\*

\- Everything in Gold

\- Official title sponsor: your name joins ours at competitions, e.g. "\[Your Business] Zebros"

\- Largest, prime-spot logo on the robot and all merch

\- A free robotics demo and workshop at your location for your students

\- Featured in our season highlight video and any team press

\- First option to renew as title sponsor next season

\- A framed team photo and plaque to display at your location



Note: the two-way referral and shared-space content from the old page has been removed and should not be reused.



\---



\*End of PRD. No code included by design. Section 12 is clear, so this is ready for Phase 0 on your approval.\*

