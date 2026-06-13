import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.fullName,
    short_name: siteConfig.teamName,
    description: `${siteConfig.program} Team #${siteConfig.teamNumber} — ${siteConfig.location}`,
    start_url: "/",
    display: "standalone",
    background_color: "#181318",
    theme_color: "#181318",
  };
}
