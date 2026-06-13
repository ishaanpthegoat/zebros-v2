# Zebros Design System — Master File

> **LOGIC:** When building a specific page, first check `design-system/zebros/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Zebros — FIRST Tech Challenge Team #30415 (Cary, NC · Zebra Robotics)
**Generated:** 2026-06-12 (ui-ux-pro-max, brand-corrected to pink/black)
**Category:** Robotics team site (sports-team energy × tech portfolio)
**Theme:** **Dark mode is the DEFAULT.** Light mode is the override.

---

## Brand

- **Colors:** Pink + Black (source of truth: `data/team.ts` → `colors: ["pink", "black"]`)
- **Personality:** Bold, energetic, competitive, technical. Zebra heritage → high-contrast black/white structure with hot-pink as the single loud accent.
- **Style direction:** Dark Mode (OLED) base + Vibrant & Block-based energy — deep near-black surfaces, vivid pink accents, bold oversized type, geometric block layouts, minimal glow used sparingly.

## Implementation Contract (Tailwind v4 + shadcn/ui)

1. Tokens live as CSS variables in `app/globals.css` (`:root` = light, `.dark` = dark) and are bridged via `@theme inline`. **Never hardcode colors in components** — use semantic utilities (`bg-background`, `text-foreground`, `bg-primary`, `text-muted-foreground`, …).
2. Dark-by-default is implemented by setting `class="dark"` on `<html>` in `app/layout.tsx`. A future theme toggle (next-themes) manages that class; until then it is static.
3. Fonts load via `next/font/google` in `app/layout.tsx` and are exposed as `--font-sans` (DM Sans), `--font-heading` (Space Grotesk), `--font-mono` (Geist Mono). Use `font-heading` for h1–h3 and display text.
4. All content comes from the data layer (`data/*.ts`) — never hardcode team facts in JSX.

## Color Tokens (oklch)

### Dark (default — `.dark`, applied to `<html>`)

| Token | Value | Notes |
|-------|-------|-------|
| `--background` | `oklch(0.13 0.01 345)` | Near-black, faint pink cast |
| `--foreground` | `oklch(0.97 0.005 345)` | Near-white |
| `--card` | `oklch(0.17 0.012 345)` | Elevated surface |
| `--card-foreground` | `oklch(0.97 0.005 345)` | |
| `--popover` | `oklch(0.17 0.012 345)` | |
| `--popover-foreground` | `oklch(0.97 0.005 345)` | |
| `--primary` | `oklch(0.656 0.241 354.31)` | Hot pink (≈ pink-500) |
| `--primary-foreground` | `oklch(0.145 0.03 354)` | Near-black on pink — ≈5.3:1 (white on this pink fails AA) |
| `--secondary` | `oklch(0.24 0.015 345)` | |
| `--secondary-foreground` | `oklch(0.97 0.005 345)` | |
| `--muted` | `oklch(0.21 0.012 345)` | |
| `--muted-foreground` | `oklch(0.71 0.015 345)` | ≥4.5:1 on background |
| `--accent` | `oklch(0.27 0.045 350)` | Pink-tinted hover surface |
| `--accent-foreground` | `oklch(0.97 0.005 345)` | |
| `--destructive` | `oklch(0.704 0.191 22.216)` | |
| `--border` | `oklch(1 0 0 / 12%)` | |
| `--input` | `oklch(1 0 0 / 16%)` | |
| `--ring` | `oklch(0.656 0.241 354.31)` | Pink focus ring |
| `--chart-1` | `oklch(0.656 0.241 354.31)` | Pink |
| `--chart-2` | `oklch(0.74 0.238 322.16)` | Fuchsia |
| `--chart-3` | `oklch(0.714 0.203 305.5)` | Purple |
| `--chart-4` | `oklch(0.87 0 0)` | Neutral light |
| `--chart-5` | `oklch(0.712 0.194 13.43)` | Rose |
| `--sidebar` | `oklch(0.17 0.012 345)` | = card |
| `--sidebar-primary` | `oklch(0.656 0.241 354.31)` | |
| `--sidebar-accent` | `oklch(0.24 0.015 345)` | |
| `--sidebar-border` | `oklch(1 0 0 / 12%)` | |
| `--sidebar-ring` | `oklch(0.656 0.241 354.31)` | |

### Light (override — `:root`)

| Token | Value | Notes |
|-------|-------|-------|
| `--background` | `oklch(0.985 0.004 340)` | Warm white, faint pink |
| `--foreground` | `oklch(0.155 0.015 345)` | |
| `--card` | `oklch(1 0 0)` | |
| `--popover` | `oklch(1 0 0)` | |
| `--primary` | `oklch(0.525 0.223 3.958)` | Deep pink (≈ pink-700) — white text passes AA (≈5.5:1) |
| `--primary-foreground` | `oklch(0.985 0.004 340)` | |
| `--secondary` / `--muted` | `oklch(0.96 0.008 340)` | |
| `--muted-foreground` | `oklch(0.5 0.015 345)` | |
| `--accent` | `oklch(0.94 0.025 350)` | |
| `--destructive` | `oklch(0.577 0.245 27.325)` | |
| `--border` / `--input` | `oklch(0.91 0.008 340)` | Visible, not white/10 |
| `--ring` | `oklch(0.592 0.249 0.584)` | ≈ pink-600 |
| `--chart-1…5` | pink-600, fuchsia-600, purple-600, neutral-700, rose-500 | Darker variants for light bg |

## Typography

- **Heading / Display:** **Space Grotesk** (`--font-heading`, weights 400–700) — techy, characterful, robotics-appropriate.
- **Body / UI:** **DM Sans** (`--font-sans`, weights 400–700) — highly readable.
- **Mono (stats, code, team number):** **Geist Mono** (`--font-mono`).
- Load via `next/font/google` (no CSS `@import` — Next.js optimizes and self-hosts).
- Scale: display `clamp(2.5rem, 6vw, 4.5rem)` w700 tight tracking; h1 36–48 w700; h2 30–36 w600; h3 24 w600; body 16–18 / 1.6; small 14 / 1.5; min 16px body on mobile.

## Spacing, Radius, Elevation

- Spacing: Tailwind 4px scale. Sections: `py-24` desktop / `py-16` mobile (48px+ gaps between blocks per style).
- Radius base: `--radius: 0.75rem` (cards `rounded-xl`, buttons `rounded-md`, pills for tags).
- Elevation on dark = **lighter surface + border**, not heavy shadows. Optional accent glow for hero CTAs only: `box-shadow: 0 0 24px oklch(0.656 0.241 354.31 / 25%)` — sparingly.

## Motion (Framer Motion)

- Micro-interactions: 150–300ms ease-out; hover = color/opacity/border shifts (no layout-shifting scale).
- Entrances: fade + 8–16px translate-y, stagger 60–100ms; scroll-triggered `whileInView` once.
- **Always respect `prefers-reduced-motion`** (`useReducedMotion()`).

## Page Pattern (default)

**Pattern:** Portfolio Grid (team/robot/season showcases) — visuals first, fast loading.
**Section order:** 1. Hero (team identity + number), 2. Highlight grid (robots/seasons/awards), 3. About/Philosophy, 4. Contact/Sponsors CTA.
**CTA placement:** Hero primary + footer contact. Card hover reveals info overlay.

## Anti-Patterns (Do NOT Use)

- ❌ Hardcoded colors (`bg-pink-500`, hex in JSX) — use semantic tokens
- ❌ White `#FFFFFF` page backgrounds in dark mode contexts
- ❌ White text on hot pink (`--primary` dark) — fails contrast; use the dark foreground token
- ❌ Emojis as icons — use Lucide SVG icons
- ❌ Missing `cursor-pointer` on clickable elements
- ❌ Layout-shifting hovers (scale transforms that move siblings)
- ❌ Text contrast below 4.5:1
- ❌ Instant state changes — transition 150–300ms
- ❌ Invisible focus states — pink ring must be visible
- ❌ Static content / hardcoded team facts — pull from `data/*.ts`

## Pre-Delivery Checklist

- [ ] No emojis as icons (Lucide SVG only)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150–300ms)
- [ ] Contrast ≥ 4.5:1 in BOTH themes (test light override too)
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
- [ ] All content sourced from `data/*.ts`
