// Shared page title block (eyebrow + heading + optional description).
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      ) : null}
    </header>
  );
}
