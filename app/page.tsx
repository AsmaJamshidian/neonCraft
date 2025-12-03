"use client";

import { Hero } from "@/components/Hero";
import { NeonButton } from "@/components/NeonButton";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteHeader } from "@/components/SiteHeader";
import { useI18n } from "@/components/i18n";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";

export default function HomePage() {
  const { t } = useI18n();

  const highlights = [
    { label: t("home.highlight.years"), value: t("home.highlight.yearsValue") },
    {
      label: t("home.highlight.products"),
      value: t("home.highlight.productsValue"),
    },
    { label: t("home.highlight.roi"), value: t("home.highlight.roiValue") },
    {
      label: t("home.highlight.remote"),
      value: t("home.highlight.remoteValue"),
    },
  ];

  return (
    <>
      <SiteHeader />
      <Hero />
      <main className="mx-auto flex max-w-5xl flex-col gap-24 px-6 py-16">
        <section className="space-y-10">
          <SectionHeader
            eyebrow={t("home.about.eyebrow")}
            title={t("home.about.title")}
            description={t("home.about.description")}
          />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
              <p>{t("home.about.p1")}</p>
              <p className="text-muted">{t("home.about.p2")}</p>
            </div>
            <div className="grid gap-4">
              {highlights.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-4">
                  <span className="text-muted">{item.label}</span>
                  <span className="font-display text-2xl text-accent-cyan">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeader
            eyebrow={t("home.projects.eyebrow")}
            title={t("home.projects.title")}
            description={t("home.projects.description")}
          />
          <div className="grid gap-8 md:grid-cols-2">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.titleKey} project={project} />
            ))}
          </div>
          <div className="flex justify-center">
            <NeonButton href="/projects">{t("home.projects.cta")}</NeonButton>
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeader
            eyebrow={t("home.skills.eyebrow")}
            title={t("home.skills.title")}
            description={t("home.skills.description")}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.labelKey}
                className="rounded-3xl border border-white/5 bg-white/5 p-6 shadow-inner">
                <p className="text-xs uppercase tracking-[0.4em] text-muted">
                  {t(skill.labelKey)}
                </p>
                <p className="mt-3 text-3xl font-display text-accent-purple">
                  {skill.strength}%
                </p>
                <p className="mt-4 text-sm text-muted">{t(skill.detailKey)}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
