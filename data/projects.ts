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
    technologies: ["Python", "OpenCV (cv2)", "DeepFace", "CSV"و"OS"],
    image:
      "/images/vigiemotion.png",
    github: "https://github.com/AsmaJamshidian/VigiEmotion"
  },
  {
    titleKey: "projects.handControl.title",
    descriptionKey: "projects.handControl.description",
    technologies: ["Python", "OpenCV (cv2)", "MediaPipe Hands", "pyautogui","threading"],
    image: "/images/hand control.png",
    github: "https://github.com/AsmaJamshidian/HandControl"
  },
  {
    titleKey: "projects.nova.title",
    descriptionKey: "projects.nova.description",
    technologies: ["Python", "speech_recognition", "pyttsx3", "wikipedia"و"requests"و"subprocess","os","psutil"],
    image:
      "/images/nova.png",
    github: "https://github.com/AsmaJamshidian/nova"
  }
] as const;
