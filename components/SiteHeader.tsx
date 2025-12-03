"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "./i18n";

export function SiteHeader() {
  const { t, locale, setLocale } = useI18n();

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/resume", label: t("nav.resume") },
    { href: "/contact", label: t("nav.contact") }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-xl"
        >
          {t("nav.brand")}
        </motion.div>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-4 text-sm uppercase tracking-[0.3em]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted transition-colors hover:text-accent-cyan"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 text-xs uppercase tracking-[0.2em]">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-full px-2 py-1 border border-transparent ${
                locale === "en"
                  ? "border-accent-cyan text-accent-cyan"
                  : "text-muted hover:text-accent-cyan"
              }`}
            >
              {t("nav.lang.en")}
            </button>
            <span className="text-muted">/</span>
            <button
              type="button"
              onClick={() => setLocale("fa")}
              className={`rounded-full px-2 py-1 border border-transparent ${
                locale === "fa"
                  ? "border-accent-purple text-accent-purple"
                  : "text-muted hover:text-accent-purple"
              }`}
            >
              {t("nav.lang.fa")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

