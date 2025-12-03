"use client";

import { NeonButton } from "@/components/NeonButton";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillChart } from "@/components/SkillChart";
import { skills } from "@/data/skills";
import { useI18n } from "@/components/i18n";
import { motion } from "framer-motion";

export default function ResumePage() {
  const { t } = useI18n();

  const resumeNarrative = [
    t("resume.narrative.1"),
    t("resume.narrative.2"),
    t("resume.narrative.3"),
    t("resume.narrative.4"),
    t("resume.narrative.5")
  ];

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16 space-y-12">
        
        <SectionHeader
          eyebrow={t("resume.header.eyebrow")}
          title={t("resume.header.title")}
          description={t("resume.header.description")}
        />

        <SkillChart skills={skills} />

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-6">
          {resumeNarrative.map((line) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {line}
            </motion.p>
          ))}
        </section>

        <div className="flex justify-center">
          <NeonButton href="/resume.pdf" variant="purple">
            {t("resume.download")}
          </NeonButton>
        </div>
        
      </main>
    </>
  );
}
