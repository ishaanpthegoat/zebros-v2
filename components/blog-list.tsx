"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/data/types";

// Blog index with client-side tag filtering (PRD §6.7). Posts come in as props
// (newest first) from the page; per-post pages live at /blog/[slug].
export function BlogList({ posts }: { posts: BlogPost[] }) {
  const tags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? posts.filter((p) => p.tags.includes(active)) : posts;

  const chip = (selected: boolean) =>
    cn(
      "cursor-pointer rounded-full px-3 py-1 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      selected
        ? "bg-primary text-primary-foreground"
        : "border border-border text-muted-foreground hover:text-foreground",
    );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          className={chip(active === null)}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActive(tag)}
            className={chip(active === tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4">
        {shown.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-mono uppercase tracking-wide text-muted-foreground">
                Week of {post.weekOf}
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-2 py-0.5 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-3 font-heading text-xl font-semibold text-foreground">
              {post.title}
            </h2>
            <p className="mt-2 line-clamp-2 text-muted-foreground">
              {post.body}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Read post
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
