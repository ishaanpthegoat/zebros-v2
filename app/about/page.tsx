import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { story } from "@/data/about";
import { timeline } from "@/data/timeline";
import { values } from "@/data/values";

export const metadata: Metadata = {
  title: "About",
  description:
    "How two homeschool FTC rookie teams became the Zebros — our story, timeline, and values.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <PageHeader
        eyebrow="About"
        title="Our Story"
        description="How two homeschool rookie teams became the Zebros."
      />

      {/* Story */}
      <div className="mx-auto mt-14 max-w-3xl space-y-5">
        {story.map((paragraph, i) => (
          <Reveal key={i}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>

      {/* Timeline */}
      {timeline.length > 0 ? (
        <section className="mt-20">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Timeline
          </h2>
          <ol className="relative mt-8 border-l border-border">
            {timeline.map((milestone, i) => (
              <Reveal key={i} delay={(i % 5) * 0.04}>
                <li className="relative ml-6 pb-10 last:pb-0">
                  <span className="absolute -left-[1.875rem] top-1 size-3 rounded-full bg-primary ring-4 ring-background" />
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">
                    {milestone.date}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{milestone.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>
      ) : null}

      {/* Values */}
      {values.length > 0 ? (
        <section className="mt-20">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            What we value
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 2) * 0.05} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon name={value.icon} className="size-5" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
