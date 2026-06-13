import { cn } from "@/lib/utils";

// Shared card for team members and coaches (PRD §6.3, §6.4). Shows an initials
// avatar (the photo fallback — no photos exist yet) and focus-area pills.
export function PersonCard({
  name,
  initials,
  focusAreas,
  className,
}: {
  name: string;
  initials: string;
  focusAreas: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/40",
        className,
      )}
    >
      <div className="flex size-20 items-center justify-center rounded-full bg-secondary font-heading text-2xl font-bold text-foreground ring-1 ring-border">
        {initials}
      </div>
      <h3 className="font-heading text-lg font-semibold text-foreground">
        {name}
      </h3>
      {focusAreas.length > 0 ? (
        <ul className="flex flex-wrap justify-center gap-1.5">
          {focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {area}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
