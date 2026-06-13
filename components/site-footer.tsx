import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

// Site-wide footer (PRD §6.1, §6.8): contact details + social links, all from the
// siteConfig single source of truth.
export function SiteFooter() {
  const { tiktok, instagram } = siteConfig.socials;
  const telHref = `tel:+1${siteConfig.phone.replace(/\D/g, "")}`;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-bold text-foreground">
              {siteConfig.teamName}{" "}
              <span className="font-mono text-sm text-muted-foreground">
                #{siteConfig.teamNumber}
              </span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.program} · {siteConfig.location}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Affiliated with {siteConfig.affiliation}
            </p>
          </div>

          <div className="grid content-start gap-2 text-sm text-muted-foreground">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Mail className="size-4 shrink-0" />
              {siteConfig.email}
            </a>
            <a
              href={telHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Phone className="size-4 shrink-0" />
              {siteConfig.phone}
            </a>
            <p className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {siteConfig.address}
            </p>
          </div>

          <div className="grid content-start gap-2 text-sm">
            <p className="font-medium text-foreground">Follow us</p>
            <a
              href={tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              TikTok {tiktok.handle}
              <ArrowUpRight className="size-3.5" />
            </a>
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram {instagram.handle}
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {year} {siteConfig.fullName}. {siteConfig.affiliation}.
        </p>
      </div>
    </footer>
  );
}
