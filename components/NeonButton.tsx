"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type NeonButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "cyan" | "purple";
  className?: string;
};

export function NeonButton({
  href,
  children,
  variant = "cyan",
  className
}: NeonButtonProps) {
  const shadow =
    variant === "cyan" ? "shadow-neon text-accent-cyan" : "shadow-neonPurple text-accent-purple";

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={`relative inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 font-display text-sm uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-white/10 ${shadow} ${className ?? ""}`}
      >
        {children}
        <span
          className={`absolute inset-0 -z-10 blur-3xl ${
            variant === "cyan" ? "bg-accent-cyan/30" : "bg-accent-purple/30"
          }`}
        />
      </Link>
    </motion.div>
  );
}

