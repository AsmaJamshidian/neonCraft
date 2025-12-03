"use client";

import { motion } from "framer-motion";
import { NeonButton } from "./NeonButton";
import { useI18n } from "./i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 neon-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative space-y-6 max-w-3xl"
      >
        <p className="font-mono text-sm uppercase tracking-[0.6em] text-accent-cyan">
          {t("hero.badge")}
        </p>

        <h1 className="text-5xl md:text-6xl font-display leading-tight">
          {t("hero.title")}
        </h1>

        <p className="text-lg text-muted">{t("hero.body")}</p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <NeonButton href="/projects">{t("hero.cta.work")}</NeonButton>
          <NeonButton href="/contact" variant="purple">
            {t("hero.cta.contact")}
          </NeonButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="blur-beam absolute h-64 w-64 rounded-full bg-accent-purple/40"
      />
    </section>
  );
}
