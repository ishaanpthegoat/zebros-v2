import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { BlogList } from "@/components/blog-list";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Weekly updates from the Zebros workshop — build progress, outreach, and competition recaps.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <PageHeader
        eyebrow="Blog"
        title="From the workshop"
        description="Weekly updates on our build, outreach, and competitions."
      />
      <div className="mt-12">
        <BlogList posts={blogPosts} />
      </div>
    </div>
  );
}
