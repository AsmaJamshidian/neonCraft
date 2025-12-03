import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    titleKey: "projects.cryptex.title",
    descriptionKey: "projects.cryptex.description",
    technologies: ["Next.js", "Three.js", "GraphQL", "Turborepo"],
    image: "/images/cryptex.png",
    github: "https://github.com/example/nebula-ops"
  },
  {
    titleKey: "projects.vigiEmotion.title",
    descriptionKey: "projects.vigiEmotion.description",
    technologies: ["Edge Functions", "WebSockets", "OpenAI", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    github: "https://github.com/example/pulse-analytics"
  },
  {
    titleKey: "projects.handControl.title",
    descriptionKey: "projects.handControl.description",
    technologies: ["Next.js", "Prisma", "Stripe", "Framer Motion"],
    image: "/images/095305.png",
    github: "https://github.com/AsmaJamshidian/HandControl"
  },
  {
    titleKey: "projects.aurora.title",
    descriptionKey: "projects.aurora.description",
    technologies: ["React Server Components", "Postgres", "LangChain", "D3"],
    image:
      "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=1400&q=80",
    github: "https://github.com/example/aurora-hub"
  }
] as const;
