"use client";

import { useState } from "react";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TeamSeason } from "@/data/types";

// Past Seasons toggle (PRD §6.6): switch between teams, show one at a time —
// totals, awards, and per-event records. Data comes in as props from the page.
export function SeasonExplorer({ teams }: { teams: TeamSeason[] }) {
  const [active, setActive] = useState(0);
  const team = teams[active];

  const totals: [string, number][] = [
    ["Wins", team.wins],
    ["Losses", team.losses],
    ["Events", team.events],
    ["Awards", team.awardsCount],
  ];

  return (
    <div>
      {/* Team toggle */}
      <div
        role="tablist"
        aria-label="Select a team"
        className="inline-flex rounded-lg border border-border bg-card p-1"
      >
        {teams.map((t, i) => (
          <button
            key={t.teamNumber}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={cn(
              "cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              active === i
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            #{t.teamNumber} · {t.teamName}
          </button>
        ))}
      </div>

      {/* Selected team */}
      <div className="mt-8">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            {team.teamName}
          </h2>
          <span className="font-mono text-sm text-muted-foreground">
            #{team.teamNumber} · Rookie {team.rookieYear} · {team.sponsor}
          </span>
        </div>

        {/* Totals */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {totals.map(([label, value]) => (
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

        {/* Awards */}
        {team.awards.length > 0 ? (
          <div className="mt-10">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Awards
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {team.awards.map((award) => (
                <li
                  key={`${award.name}-${award.event}`}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <Trophy className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">
                      {award.name}
                      {award.place ? `, ${award.place}` : ""}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {award.event}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Events */}
        {team.eventList.length > 0 ? (
          <div className="mt-10">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Events
            </h3>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {team.eventList.map((event) => (
                <div
                  key={event.name}
                  className="flex flex-col rounded-xl border border-border bg-card p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">
                        {event.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {event.date}
                      </p>
                    </div>
                    {event.awardAtEvent ? (
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        <Trophy className="size-3" />
                        Award
                      </span>
                    ) : null}
                  </div>
                  <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Rank</dt>
                      <dd className="font-mono text-foreground">
                        {event.rank} of {event.rankOf}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Qualifiers</dt>
                      <dd className="font-mono text-foreground">
                        {event.qualRecord}
                      </dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-muted-foreground">Playoffs</dt>
                      <dd className="text-foreground">{event.playoffResult}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-muted-foreground">Notable match</dt>
                      <dd className="text-foreground">{event.notableMatch}</dd>
                    </div>
                    {event.awardAtEvent ? (
                      <div className="col-span-2">
                        <dt className="text-muted-foreground">Award</dt>
                        <dd className="text-primary">{event.awardAtEvent}</dd>
                      </div>
                    ) : null}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
