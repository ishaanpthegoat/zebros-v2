import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SeasonExplorer } from "@/components/season-explorer";
import { teamSeasons, combinedSeason } from "@/data/seasons";

export const metadata: Metadata = {
  title: "Past Seasons",
  description:
    "2025 rookie-season results for Zebros teams 30415 and 30416, plus combined totals.",
};

export default function PastSeasonsPage() {
  const combinedTotals: [string, number][] = [
    ["Wins", combinedSeason.wins],
    ["Losses", combinedSeason.losses],
    ["Awards", combinedSeason.awards],
    ["Events", combinedSeason.events],
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <PageHeader
        eyebrow="Past Seasons"
        title="2025 Season"
        description="Our rookie season across two teams. Switch between them, then see the combined totals below."
      />

      <div className="mt-12">
        <SeasonExplorer teams={teamSeasons} />
      </div>

      {/* Separate combined section (PRD §6.6) */}
      <section className="mt-16 border-t border-border pt-12">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Combined {combinedSeason.year} — both teams
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          {combinedSeason.summary}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {combinedTotals.map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-border bg-card p-4"
            >
              <div className="font-mono text-3xl font-bold tabular-nums text-foreground">
                {value}
              </div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
