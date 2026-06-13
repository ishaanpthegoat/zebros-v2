import type { BlogPost } from "./types";

// All 12 weekly blog posts (PRD §4.7). Full text, dates, and tags live on the
// current site and are NOT in the PRD — none are loaded yet (Phase 1 content gap).
// The blog list page, per-post pages, and the home "latest post" teaser are all
// generated from this array (PRD §10), so they show a clean empty state until the
// posts are loaded.
//
// Open decision (deferred to Phase 3 / when content arrives): keep posts here as
// typed entries, or move each to content/blog/*.md with frontmatter for a faster
// weekly publish flow. Either way the BlogPost shape stays the same.
// TODO: load the 12 posts (slug, weekOf, date, title, body, tags) once sourced.
export const blogPosts: BlogPost[] = [];
