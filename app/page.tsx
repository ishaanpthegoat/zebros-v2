import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { StatCounter } from "@/components/stat-counter";
import { Icon } from "@/components/icon";
import { siteConfig } from "@/data/site-config";
import { stats } from "@/data/stats";
import { exploreCards } from "@/data/navigation";
import { blogPosts } from "@/data/blog";

export default function Home() {
  const latest = blogPosts[0];

  return (
    <>
      {/* Welcome band — compact, not a hero (PRD §6.1) */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
        <Reveal className="max-w-3xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
            {siteConfig.program} · Team #{siteConfig.teamNumber}
          </p>
          <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-foreground">
            {siteConfig.teamName}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            A {siteConfig.program} robotics team from {siteConfig.location},
            affiliated with {siteConfig.affiliation}. Explore our team, our
            robot, and our season.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="h-11 px-6 text-sm">
              <Link href="/team">Meet the team</Link>
            </Button>
            <Button asChild variant="outline" className="h-11 px-6 text-sm">
              <Link href="/past-seasons">View results</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Quick stats strip — 30415's own numbers, counting up (PRD §6.1) */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
            {siteConfig.reorgNote}
          </p>
          <Link
            href="/past-seasons"
            className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            View combined results
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Explore grid — the main way to navigate (PRD §6.1) */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Explore
          </h2>
          <p className="mt-2 text-muted-foreground">
            Pick a section and dive in.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exploreCards.map((card, i) => (
            <Reveal key={card.href} delay={(i % 3) * 0.05} className="h-full">
              <Link
                href={card.href}
                className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-accent/40"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={card.icon} className="size-5" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Visit
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Latest from the blog (PRD §6.1) */}
      {latest ? (
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Reveal>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    Latest from the blog
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Weekly updates from the workshop.
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="hidden shrink-0 items-center gap-1 text-sm text-primary hover:underline sm:inline-flex"
                >
                  All posts
                  <ArrowRight className="size-4" />
                </Link>
              </div>
              <Link
                href="/blog"
                className="group mt-8 block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 md:p-8"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-mono uppercase tracking-wide text-muted-foreground">
                    Week of {latest.weekOf}
                  </span>
                  {latest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2 py-0.5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 font-heading text-xl font-semibold text-foreground md:text-2xl">
                  {latest.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-muted-foreground">
                  {latest.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read on the blog
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      ) : null}
    </>
  );
}
