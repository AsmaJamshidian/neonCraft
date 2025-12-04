import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    titleKey: "projects.cryptex.title",
    descriptionKey: "projects.cryptex.description",
    technologies: ["C# (.NET)", "RSA", "Aes", "Hashing"],
    image: "/images/cryptex.png",
    github: "https://github.com/AsmaJamshidian/Cryptex"
  },
  {
    titleKey: "projects.vigiEmotion.title",
    descriptionKey: "projects.vigiEmotion.description",
    technologies: ["Edge Functions", "WebSockets", "OpenAI", "Tailwind"],
    image:
      "/images/vigiemotion.png",
    github: "https://github.com/AsmaJamshidian/VigiEmotion"
  },
  {
    titleKey: "projects.handControl.title",
    descriptionKey: "projects.handControl.description",
    technologies: ["Next.js", "Prisma", "Stripe", "Framer Motion"],
    image: "/images/hand control.png",
    github: "https://github.com/AsmaJamshidian/HandControl"
  },
  {
    titleKey: "projects.nova.title",
    descriptionKey: "projects.nova.description",
    technologies: ["React Server Components", "Postgres", "LangChain", "D3"],
    image:
      "/images/nova.png",
    github: "https://github.com/AsmaJamshidian/nova"
  }
] as const;
