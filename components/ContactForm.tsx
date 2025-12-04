"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useI18n } from "./i18n";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { t } = useI18n();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Validate data
    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      setErrorMessage("لطفاً تمام فیلدها را پر کنید");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        throw new Error("خطا در دریافت پاسخ از سرور");
      }

      if (!response.ok) {
        throw new Error(result.error || "خطا در ارسال پیام");
      }

      // Check if email was sent successfully
      if (result.emailSent) {
        setStatus("sent");
        // Reset form
        event.currentTarget.reset();
      } else {
        // Email not sent - show message but don't open mailto automatically
    setStatus("sent");
        // Reset form
        event.currentTarget.reset();
        // Log for debugging
        if (result.error) {
          console.warn("Email not sent:", result.error);
        }
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "خطا در ارسال پیام. لطفاً دوباره تلاش کنید."
      );
    }
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
        disabled={status === "sending"}
        className="w-full rounded-full border border-white/10 bg-accent-purple/20 py-3 font-display uppercase tracking-[0.4em] text-white shadow-neonPurple transition hover:bg-accent-purple/30 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending"
          ? t("contact.form.sending")
          : status === "sent"
          ? t("contact.form.queued")
          : t("contact.form.send")}
      </button>
      {status === "sent" && (
        <p className="text-center text-xs uppercase tracking-[0.3em] text-accent-cyan">
          {t("contact.form.note")}
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-xs uppercase tracking-[0.3em] text-red-400">
          {errorMessage}
        </p>
      )}
    </motion.form>
  );
}

