"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useI18n } from "./i18n";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const { t } = useI18n();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sent");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8"
    >
      <div>
        <label className="text-sm uppercase tracking-[0.3em] text-muted">
          {t("contact.form.name")}
        </label>
        <input
          type="text"
          name="name"
          required
          className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-accent-cyan focus:outline-none"
        />
      </div>
      <div>
        <label className="text-sm uppercase tracking-[0.3em] text-muted">
          {t("contact.form.email")}
        </label>
        <input
          type="email"
          name="email"
          required
          className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-accent-cyan focus:outline-none"
        />
      </div>
      <div>
        <label className="text-sm uppercase tracking-[0.3em] text-muted">
          {t("contact.form.message")}
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-accent-cyan focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full border border-white/10 bg-accent-purple/20 py-3 font-display uppercase tracking-[0.4em] text-white shadow-neonPurple transition hover:bg-accent-purple/30"
      >
        {status === "sent" ? t("contact.form.queued") : t("contact.form.send")}
      </button>
      {status === "sent" && (
        <p className="text-center text-xs uppercase tracking-[0.3em] text-accent-cyan">
          {t("contact.form.note")}
        </p>
      )}
    </motion.form>
  );
}

