import {
  BookOpen,
  Bot,
  Cog,
  GraduationCap,
  Handshake,
  Newspaper,
  Share2,
  Sprout,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

// Resolves the lucide icon-name strings stored in the data layer (explore cards,
// values) to components. Only the icons actually used are imported, so the bundle
// stays small. Per the design system, icons are Lucide SVGs — never emoji.
const registry: Record<string, LucideIcon> = {
  BookOpen,
  Bot,
  Cog,
  GraduationCap,
  Handshake,
  Newspaper,
  Share2,
  Sprout,
  Trophy,
  Users,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = registry[name] ?? Cog;
  return <Cmp className={className} aria-hidden="true" />;
}
