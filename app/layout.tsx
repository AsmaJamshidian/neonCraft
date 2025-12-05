import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins, Vazirmatn } from "next/font/google";
import { I18nProvider } from "@/components/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-fa",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeonCraft | Futuristic Portfolio",
  description:
    "Neon-infused personal portfolio spotlighting frontier projects, elite skills, and contact-ready workflows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${vazirmatn.variable}`}>
      <body className="bg-background text-white font-body">
        <I18nProvider>
          {
            <div className="min-h-screen bg-gradient-to-b from-black via-surface to-black">
              {children}
            </div>
          }
        </I18nProvider>
      </body>
    </html>
  );
}
