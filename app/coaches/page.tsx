import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { PersonCard } from "@/components/person-card";
import { coaches } from "@/data/coaches";

export const metadata: Metadata = {
  title: "Coaches",
  description: "The mentors behind the Zebros: Coach John and Coach Jai.",
};

export default function CoachesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <PageHeader
        eyebrow="Coaches"
        title="Our Coaches"
        description="The mentors guiding our engineering, strategy, and program."
      />

      <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
        {coaches.map((coach, i) => (
          <Reveal key={coach.id} delay={i * 0.05} className="h-full">
            <PersonCard
              name={coach.name}
              initials={coach.initials}
              focusAreas={coach.focusAreas}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
