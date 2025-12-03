'use client';

import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description
}: SectionHeaderProps) {
  return (
    <div className="space-y-3 text-center max-w-3xl mx-auto">
      <motion.span
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-accent-cyan"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-4xl font-display"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-muted"
      >
        {description}
      </motion.p>
    </div>
  );
}

