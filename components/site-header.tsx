"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";
import { navLinks } from "@/data/navigation";

// Always-visible navbar (PRD §6.1): logo + links to every page, active state,
// collapses to a menu on mobile. Reads team identity + links from the data layer.
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 font-heading text-lg font-bold text-foreground transition-opacity hover:opacity-80"
        >
          {siteConfig.teamName}
          <span className="rounded-md bg-primary/15 px-1.5 py-0.5 font-mono text-xs text-primary">
            #{siteConfig.teamNumber}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm transition-colors",
                  isActive(link.href)
                    ? "text-foreground after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:rounded-full after:bg-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-0.5 px-6 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm transition-colors",
                    isActive(link.href)
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
