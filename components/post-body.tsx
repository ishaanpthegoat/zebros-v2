// Renders a blog post body. The current posts are plain prose paragraphs
// separated by blank lines, so we split on blank lines and render <p> blocks —
// no markdown library needed yet. If posts later use real markdown syntax,
// swap this for a markdown renderer (the BlogPost.body shape stays the same).
export function PostBody({ body }: { body: string }) {
  const paragraphs = body
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );
}
