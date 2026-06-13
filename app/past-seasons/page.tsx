import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = { title: "Past Seasons" };

export default function PastSeasonsPage() {
  return (
    <ComingSoon
      title="Past Seasons"
      note="Full event records, the 30415 / 30416 toggle, and combined totals are coming in the next phase."
    />
  );
}
