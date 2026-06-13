import type { Metadata } from "next";
import { Camera } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { subsystems, robotIntro } from "@/data/subsystems";

export const metadata: Metadata = {
  title: "Robot / Engineering",
  description:
    "Our 2026 robot, subsystem by subsystem — drivetrain, intake, slides, transfer, and brake.",
};

export default function RobotPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <PageHeader
        eyebrow="Engineering"
        title="The Robot"
        description={robotIntro}
      />

      <div className="mt-12 grid gap-6">
        {subsystems.map((subsystem, i) => (
          <Reveal key={subsystem.name} delay={(i % 3) * 0.05}>
            <div className="grid gap-6 rounded-xl border border-border bg-card p-6 md:grid-cols-[1fr_1.3fr] md:items-center">
              {/* Image placeholder — no CAD/photos yet (PRD §6.5) */}
              <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-secondary/40 text-muted-foreground">
                <div className="flex flex-col items-center gap-2">
                  <Camera className="size-6" />
                  <span className="text-xs">Photo coming soon</span>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    {subsystem.name}
                  </h2>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {subsystem.status}
                  </span>
                </div>
                <p className="mt-2 text-muted-foreground">{subsystem.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
