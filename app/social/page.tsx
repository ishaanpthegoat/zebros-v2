import type { Metadata } from "next";
import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Social",
  description: "Follow the Zebros on TikTok and Instagram.",
};

// Lucide has no TikTok brand mark, so inline the logo glyph.
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.6 5.82c-1.04-.68-1.79-1.79-2.02-3.08-.05-.27-.08-.55-.08-.84h-3.3v13.27c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1-2.72-2.72 2.72 2.72 0 0 1 3.5-2.6V9.2a6.04 6.04 0 0 0-.78-.05A6.02 6.02 0 0 0 2.46 15.17 6.02 6.02 0 0 0 8.48 21.2a6.02 6.02 0 0 0 6.02-6.02V8.42a7.1 7.1 0 0 0 4.16 1.33V6.45c-.8 0-1.55-.23-2.06-.63z" />
    </svg>
  );
}

// Lucide 1.18 dropped brand marks, so inline the Instagram glyph too.
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function SocialPage() {
  const { tiktok, instagram } = siteConfig.socials;

  const accounts: {
    name: string;
    handle: string;
    url: string;
    Icon: ComponentType<{ className?: string }>;
  }[] = [
    { name: "TikTok", handle: tiktok.handle, url: tiktok.url, Icon: TikTokIcon },
    {
      name: "Instagram",
      handle: instagram.handle,
      url: instagram.url,
      Icon: InstagramIcon,
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <PageHeader
        eyebrow="Social"
        title="Follow Us"
        description="Keep up with the Zebros between updates."
      />

      <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
        {accounts.map((account, i) => (
          <Reveal key={account.name} delay={i * 0.05} className="h-full">
            <div className="flex h-full flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <account.Icon className="size-7" />
              </span>
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground">
                  {account.name}
                </h2>
                <p className="text-sm text-muted-foreground">{account.handle}</p>
              </div>
              <Button asChild className="h-10 px-5 text-sm">
                <a href={account.url} target="_blank" rel="noopener noreferrer">
                  Follow
                </a>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
