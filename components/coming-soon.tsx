// Interim placeholder for routes whose real pages are built in later phases
// (Robot, Past Seasons, Blog, Social in Phase 3; Gallery, Sponsors in Phase 4).
// Keeps the navbar fully navigable with no 404s. Replace per phase.
export function ComingSoon({
  title,
  note,
}: {
  title: string;
  note?: string;
}) {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
        Coming soon
      </p>
      <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        {note ?? "This page is part of a later build phase. Check back soon."}
      </p>
    </section>
  );
}
