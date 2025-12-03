"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type ContactLinkProps = {
  href: string;
  label: string;
  icon: IconType;
};

export function ContactLink({ href, label, icon: Icon }: ContactLinkProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link
        href={href}
        target="_blank"
        className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.2em] text-muted transition-colors hover:text-white hover:bg-white/10"
      >
        <Icon size={18} className="text-accent-cyan" />
        {label}
      </Link>
    </motion.div>
  );
}

