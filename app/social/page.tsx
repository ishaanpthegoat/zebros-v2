import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = { title: "Social" };

export default function SocialPage() {
  return (
    <ComingSoon
      title="Social"
      note="A dedicated page for our TikTok and Instagram is coming next — for now, the links live in the footer."
    />
  );
}
