import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { PersonCard } from "@/components/person-card";
import { members, rosterNote, joinCta } from "@/data/members";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Team",
  description: `The ${members.length}-student roster of ${siteConfig.fullName}.`,
};

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <PageHeader eyebrow="Team" title="The Team" description={rosterNote} />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map((member, i) => (
          <Reveal key={member.id} delay={(i % 4) * 0.04} className="h-full">
            <PersonCard
              name={member.name}
              initials={member.initials}
              focusAreas={member.focusAreas}
            />
          </Reveal>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
        <p className="text-muted-foreground">{joinCta}</p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Email the team
        </a>
      </div>
    </div>
  );
}
