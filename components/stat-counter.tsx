"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// A single home stat that counts up once when scrolled into view (PRD §6.1).
// The value is passed in from the derived stats data — never hardcoded here.
// Honors prefers-reduced-motion (shows the final value, no animation).
export function StatCounter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    if (reduced || !inView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setAnimated(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, value]);

  const display = reduced ? value : animated;

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span className="font-mono text-4xl font-bold tabular-nums text-foreground md:text-5xl">
        {display}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
