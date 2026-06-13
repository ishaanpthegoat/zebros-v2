import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PostBody } from "@/components/post-body";
import { blogPosts } from "@/data/blog";

// Pre-render a static page per post (PRD §6.7 — each update is shareable).
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: `${post.body.slice(0, 150).trim()}…`,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = blogPosts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = blogPosts[index];
  // Array is newest-first: next index is older, previous index is newer.
  const older = blogPosts[index + 1];
  const newer = blogPosts[index - 1];

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        All posts
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
        <span className="font-mono uppercase tracking-wide text-muted-foreground">
          Week of {post.weekOf}
        </span>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-2 py-0.5 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {post.title}
      </h1>

      <div className="mt-8">
        <PostBody body={post.body} />
      </div>

      <nav className="mt-12 grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm">
        {older ? (
          <Link
            href={`/blog/${older.slug}`}
            className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 shrink-0" />
            <span className="line-clamp-1">Older: {older.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {newer ? (
          <Link
            href={`/blog/${newer.slug}`}
            className="group inline-flex items-center justify-end gap-1 text-right text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="line-clamp-1">Newer: {newer.title}</span>
            <ArrowRight className="size-4 shrink-0" />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
