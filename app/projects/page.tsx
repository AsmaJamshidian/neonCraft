"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/data/projects";
import { useI18n } from "@/components/i18n";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const { t } = useI18n();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16 space-y-12">
        <SectionHeader
          eyebrow={t("projects.header.eyebrow")}
          title={t("projects.header.title")}
          description={t("projects.header.description")}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-10 md:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </main>
    </>
  );
}

