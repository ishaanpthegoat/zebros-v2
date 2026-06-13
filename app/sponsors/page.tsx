import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = { title: "Sponsors" };

export default function SponsorsPage() {
  return (
    <ComingSoon
      title="Sponsors"
      note={`Sponsorship details coming soon. To reach the team, email ${siteConfig.email}.`}
    />
  );
}
