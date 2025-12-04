"use client";

import { ContactForm } from "@/components/ContactForm";
import { ContactLink } from "@/components/ContactLink";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteHeader } from "@/components/SiteHeader";
import { useI18n } from "@/components/i18n";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  const { t } = useI18n();

  const links = [
    { href: "mailto:jamshidiana154@gmail.com", label: t("contact.links.email"), icon: FaEnvelope },
    { href: "https://linkedin.com/in/armon", label: t("contact.links.linkedin"), icon: FaLinkedinIn },
    { href: "https://github.com/armon", label: t("contact.links.github"), icon: FaGithub },
    { href: "https://x.com/armon", label: t("contact.links.x"), icon: FaTwitter }
  ];

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16 space-y-12">
        <SectionHeader
          eyebrow={t("contact.header.eyebrow")}
          title={t("contact.header.title")}
          description={t("contact.header.description")}
        />
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <ContactForm />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4"
          >
            {links.map((link) => (
              <ContactLink key={link.href} {...link} />
            ))}
          </motion.div>
        </div>
      </main>
    </>
  );
}

