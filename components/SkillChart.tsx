"use client";

import { motion } from "framer-motion";
import { useI18n } from "./i18n";

type Skill = {
  labelKey: string;
  strength: number; // 0-100
  detailKey: string;
};

type SkillChartProps = {
  skills: Skill[];
};

export function SkillChart({ skills }: SkillChartProps) {
  const { t } = useI18n();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.labelKey}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur"
        >
          <div className="flex items-center justify-between">
            <h4 className="font-display text-xl">{t(skill.labelKey)}</h4>
            <span className="text-sm text-muted">{skill.strength}%</span>
          </div>
          <div className="mt-4 h-2 rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple shadow-neon"
              style={{ width: `${skill.strength}%` }}
            />
          </div>
          <p className="mt-4 text-sm text-muted">{t(skill.detailKey)}</p>
        </motion.div>
      ))}
    </div>
  );
}

