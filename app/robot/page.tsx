import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = { title: "Robot / Engineering" };

export default function RobotPage() {
  return (
    <ComingSoon
      title="Robot / Engineering"
      note="Subsystem breakdowns, CAD, and build notes are coming in the next phase."
    />
  );
}
