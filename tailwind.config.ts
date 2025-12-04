import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0f0f11",
        accent: {
          cyan: "#32f6f6",
          purple: "#b366ff"
        },
        muted: "#8c92a4"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        fa: ["var(--font-body-fa)", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 20px rgba(50, 246, 246, 0.4)",
        neonPurple: "0 0 20px rgba(179, 102, 255, 0.45)"
      },
      backgroundImage: {
        "grid-glow":
          "linear-gradient(transparent 95%, rgba(50,246,246,0.1) 95%), linear-gradient(90deg, transparent 95%, rgba(179,102,255,0.1) 95%)"
      }
    }
  },
  plugins: []
};

export default config;

