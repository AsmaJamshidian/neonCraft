"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/types/portfolio";
import { useI18n } from "./i18n";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useI18n();

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={project.image}
          alt={t(project.titleKey)}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      <div className="space-y-4 px-6 py-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-display">{t(project.titleKey)}</h3>
          <Link
            href={project.github}
            target="_blank"
            className="rounded-full border border-white/10 bg-white/10 p-2 text-accent-cyan transition-colors hover:bg-white/20"
          >
            <FaGithub size={18} />
          </Link>
        </div>
        <p className="text-muted">{t(project.descriptionKey)}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide text-accent-purple"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}

