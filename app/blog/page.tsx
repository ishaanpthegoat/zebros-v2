import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <ComingSoon
      title="Blog"
      note="Our weekly updates will live here, each with its own shareable page and tag filters. Coming in the next phase."
    />
  );
}
