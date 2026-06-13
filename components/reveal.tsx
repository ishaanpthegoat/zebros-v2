"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Subtle scroll-reveal: fade + small translate-y, once, on enter (design system
// motion rules). Honors prefers-reduced-motion by rendering statically.
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
