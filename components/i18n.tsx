'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";

type Locale = "en" | "fa";

type Messages = Record<string, string>;

type AllMessages = Record<Locale, Messages>;

const messages: AllMessages = {
  en: {
    // Navigation
    "nav.brand": "NeonCraft",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.resume": "Resume",
    "nav.contact": "Contact",
    "nav.lang.en": "EN",
    "nav.lang.fa": "FA",

    // Hero
    "hero.badge": "BUILDING INTELLIGENT & AUTONOMOUS SYSTEMS",
    "hero.title": "I'm Asma — **AI** Engineer & Full-Stack Developer crafting smart ecosystems.",
    "hero.body":
      "Developer specializing in **AI**-powered solutions, machine learning pipelines, computer vision, and scalable full-stack systems. I combine clean engineering with intelligent automation to create software that learns, adapts, and evolves with real-world demand.",
    "hero.cta.work": "Explore Work",
    "hero.cta.contact": "Collaborate",

    // Home: About
    "home.about.eyebrow": "About Me",
    "home.about.title": "Engineering products that feel futuristic with **AI** insights.",
    "home.about.description":
      "I design resilient cloud systems, intelligent experiences, and translate complex data problems into actionable, high-impact products.",
    "home.about.p1":
      "From startups to large-scale labs, I bridge the gap between visionary ideas, **AI** strategy, and engineering execution.",
    "home.about.p2":
      "My focus is building full-stack systems enhanced with **AI**: predictive models, ML pipelines, autonomous agents, and intelligent APIs. Every project is optimized for performance, accessibility, and smart functionality.",

    // Home: Highlights
    "home.highlight.years": "Years shipping futuristic products",
    "home.highlight.yearsValue": "10+",
    "home.highlight.products": "Products launched across industries",
    "home.highlight.productsValue": "45",
    "home.highlight.roi": "Avg. ROI uplift unlocked",
    "home.highlight.roiValue": "37%",
    "home.highlight.remote": "Remote collaborations",
    "home.highlight.remoteValue": "12 timezones",

    // Home: Projects
    "home.projects.eyebrow": "Projects",
    "home.projects.title": "Operational-grade builds with **AI** polish.",
    "home.projects.description":
      "Selected case studies blending intelligent systems, ML models, and cloud-native backbones.",
    "home.projects.cta": "View Full Portfolio",

    // Home: Skills
    "home.skills.eyebrow": "Skills",
    "home.skills.title": "A battle-tested skill matrix for modern product orgs.",
    "home.skills.description":
      "From ideation to launch, I plug into squads as an engineering lead with design fluency.",

    // Skills (unchanged)
    "skills.android.label": "Android Development",
    "skills.android.detail": "Developing Android applications using Kotlin, Java, and modern frameworks.",
    "skills.image.label": "Image Processing",
    "skills.image.detail": "Working with computer vision, OpenCV, MediaPipe, and ML models.",
    "skills.data.label": "Data Analysis",
    "skills.data.detail": "Analyzing data, building ML-ready pipelines, and generating insights.",
    "skills.fullstack.label": "Full-Stack Development",
    "skills.fullstack.detail": "Building scalable web and mobile applications with backend and frontend integration.",
    "skills.ai.label": "Artificial Intelligence",
    "skills.ai.detail": "Developing intelligent systems, training ML models, and integrating **AI** into real-world applications.",
    "skills.security.label": "Cybersecurity",
    "skills.security.detail": "Implementing secure architectures, hybrid cryptography, and conducting penetration testing.",
    "skills.backend.label": "Backend Engineering",
    "skills.backend.detail": "Building reliable APIs, designing scalable architectures, and integrating cloud services like S3.",
    "skills.voice.label": "Voice Assistant Development",
    "skills.voice.detail": "Creating custom voice-controlled systems with NLP, command pipelines, and automation logic.",
    "skills.game.label": "Game Development",
    "skills.game.detail": "Designing and developing interactive 2D/3D experiences using modern game engines.",
    "skills.hardware.label": "Hardware & Embedded",
    "skills.hardware.detail": "Working with Arduino, sensors, and system-level logic to build functional hardware–software systems.",
    "skills.uiux.label": "UI/UX Design",
    "skills.uiux.detail": "Designing clean, modern, and user-focused interfaces with strong attention to detail and usability.",

    // Projects page
    "projects.header.eyebrow": "Projects",
    "projects.header.title": "A curated set of **AI**-powered builds.",
    "projects.header.description":
      "Every launch is instrumented and optimized with intelligent systems and ML pipelines.",

    "projects.cryptex.title": "Cryptex",
    "projects.cryptex.description":
      "Hybrid encryption system enhanced with **AI**-based password analysis and secure storage.",

    "projects.vigiEmotion.title": "VigiEmotion",
    "projects.vigiEmotion.description":
      "Real-time analytics combining IoT signals and GPT-powered copilots for infrastructure monitoring.",

    "projects.handControl.title": "HandControl",
    "projects.handControl.description":
      "Hand gesture recognition system using MediaPipe & OpenCV with **AI** for smart device control.",

    "projects.nova.title": "Nova Assistant",
    "projects.nova.description":
      "Voice assistant integrating **AI** chat, automation, scheduling, and smart system controls.",

    // Contact page
    "contact.header.eyebrow": "Contact",
    "contact.header.title": "Let’s architect your next **AI**-driven experience.",
    "contact.header.description":
      "Drop a note with the challenge you’re facing. I usually reply within one business day.",
    "contact.links.email": "Email",
    "contact.links.linkedin": "LinkedIn",
    "contact.links.github": "GitHub",
    "contact.links.x": "X / Twitter",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.queued": "Message Queued",
    "contact.form.note": "I reply within 24 hours.",

    // Resume page
    "resume.header.eyebrow": "Resume",
    "resume.header.title": "Engineering depth with **AI** results.",
    "resume.header.description":
      "A blend of **AI** engineering, machine learning pipelines, and scalable systems. Download the full PDF for complete project breakdowns.",
    "resume.narrative.1":
      "Full-Stack & **AI** Engineer — Built **AI**-powered mobile apps, real-time dashboards, and intelligent backend systems for thousands of users.",
    "resume.narrative.2":
      "Computer Vision Developer — Designed ML pipelines and optimized inference workflows for production environments.",
    "resume.narrative.3":
      "Data Analyst & **AI** Integrator — Implemented ML-ready data flows and automated reporting systems for enhanced decision-making.",
    "resume.narrative.4":
      "Cloud & System Architect — Developed scalable, event-driven APIs and elastic infrastructures integrating **AI** services.",
    "resume.narrative.5":
      "Independent Product Engineer — Delivered end-to-end intelligent software, from UX to backend, model deployment, and optimization.",
    "resume.download": "Download Resume"
  },
  fa: {
    // Navigation
    "nav.brand": "نئون‌کرفت",
    "nav.home": "خانه",
    "nav.projects": "پروژه‌ها",
    "nav.resume": "رزومه",
    "nav.contact": "تماس",
    "nav.lang.en": "انگ",
    "nav.lang.fa": "فا",

    // Hero
    "hero.badge": "ساخت سیستم‌های هوشمند و خودکار",
    "hero.title": "من اسما هستم — مهندس **AI** و فول‌استک، خلق اکوسیستم‌های هوشمند.",
    "hero.body":
      "توسعه‌دهنده‌ای متخصص در راهکارهای مبتنی بر **AI**، پایپلاین‌های یادگیری ماشین، پردازش تصویر و سیستم‌های فول‌استک مقیاس‌پذیر. مهندسی تمیز را با اتوماسیون هوشمند ترکیب می‌کنم تا نرم‌افزاری بسازم که یاد می‌گیرد، تطبیق می‌دهد و با نیاز واقعی رشد می‌کند.",
    "hero.cta.work": "مشاهده کارها",
    "hero.cta.contact": "همکاری",

    // Home: About
    "home.about.eyebrow": "درباره من",
    "home.about.title": "مهندسی محصولات با بینش **AI** و حس آینده‌نگر.",
    "home.about.description":
      "زیرساخت‌های ابری مقاوم و تجربه‌های هوشمند طراحی می‌کنم و مسائل داده‌ای پیچیده را به محصولات کاربردی تبدیل می‌کنم.",
    "home.about.p1":
      "از استارتاپ‌ها تا آزمایشگاه‌های بزرگ، پل بین ایده‌های نوآورانه، استراتژی **AI** و اجرای مهندسی بوده‌ام.",
    "home.about.p2":
      "تمرکزم روی ساخت سیستم‌های فول‌استک تقویت‌شده با **AI** است: مدل‌های پیش‌بینی، پایپلاین‌های ML، عوامل خودکار و APIهای هوشمند. هر پروژه برای عملکرد، دسترس‌پذیری و هوشمندی بهینه‌سازی شده است.",

    // Home: Highlights
    "home.highlight.years": "سال تجربه در محصولات آینده‌نگر",
    "home.highlight.yearsValue": "۱۰+",
    "home.highlight.products": "محصولات ارائه‌شده در صنایع مختلف",
    "home.highlight.productsValue": "۴۵",
    "home.highlight.roi": "میانگین بهبود بازگشت سرمایه",
    "home.highlight.roiValue": "۳۷٪",
    "home.highlight.remote": "همکاری‌های دورکاری",
    "home.highlight.remoteValue": "۱۲ منطقه زمانی",

    // Home: Projects
    "home.projects.eyebrow": "پروژه‌ها",
    "home.projects.title": "ساخت‌های عملیاتی با تمرکز **AI**",
    "home.projects.description":
      "نمونه‌هایی منتخب که ترکیبی از سیستم‌های هوشمند، مدل‌های ML و زیرساخت ابری دارند.",
    "home.projects.cta": "مشاهده کل نمونه‌ها",

    // Home: Skills
    "home.skills.eyebrow": "مهارت‌ها",
    "home.skills.title": "ماتریس مهارت‌های آزموده‌شده برای تیم‌های محصول مدرن",
    "home.skills.description":
      "از ایده تا ارائه، به عنوان لید مهندسی با درک طراحی در تیم‌ها مشارکت می‌کنم.",

    // Skills (unchanged)
    "skills.android.label": "توسعه اندروید",
    "skills.android.detail": "ساخت اپلیکیشن‌های اندروید با Kotlin، Java و فریم‌ورک‌های مدرن.",
    "skills.image.label": "پردازش تصویر",
    "skills.image.detail": "کار با بینایی کامپیوتر، OpenCV، MediaPipe و مدل‌های ML.",
    "skills.data.label": "تحلیل داده",
    "skills.data.detail": "تحلیل داده‌ها، ساخت جریان‌های داده آماده ML و استخراج بینش‌ها.",
    "skills.fullstack.label": "توسعه فول‌استک",
    "skills.fullstack.detail": "ساخت اپلیکیشن‌های وب و موبایل مقیاس‌پذیر با یکپارچه‌سازی بک‌اند و فرانت‌اند.",
    "skills.ai.label": "هوش مصنوعی",
    "skills.ai.detail": "توسعه سیستم‌های هوشمند، آموزش مدل‌های ML و یکپارچه‌سازی **AI** در کاربردهای واقعی.",
    "skills.security.label": "امنیت سایبری",
    "skills.security.detail": "طراحی معماری‌های امن، پیاده‌سازی رمزنگاری ترکیبی و انجام تست نفوذ حرفه‌ای.",
    "skills.backend.label": "مهندسی بک‌اند",
    "skills.backend.detail": "ساخت APIهای قابل‌اعتماد، طراحی معماری‌های مقیاس‌پذیر و یکپارچه‌سازی سرویس‌های ابری مانند S3.",
    "skills.voice.label": "توسعه دستیار صوتی",
    "skills.voice.detail": "ساخت سیستم‌های کنترل صوتی سفارشی با پردازش زبان طبیعی و پایپلاین‌های فرمان‌دهی.",
    "skills.game.label": "بازی‌سازی",
    "skills.game.detail": "طراحی و توسعه تجربه‌های تعاملی دو‌بعدی و سه‌بعدی با موتورهای بازی‌سازی مدرن.",
    "skills.hardware.label": "سخت‌افزار و امبدد",
    "skills.hardware.detail": "کار با آردوینو، سنسورها و پیاده‌سازی منطق سیستم برای ساخت پروژه‌های سخت‌افزار–نرم‌افزار.",
    "skills.uiux.label": "طراحی UI/UX",
    "skills.uiux.detail": "طراحی رابط‌های کاربری مدرن، ساده و کاربرمحور با توجه دقیق به زیبایی و تجربه استفاده.",

    // Projects page
    "projects.header.eyebrow": "پروژه‌ها",
    "projects.header.title": "مجموعه‌ای منتخب از پروژه‌های **AI**",
    "projects.header.description":
      "هر پروژه با دقت و بهینه‌سازی برای سیستم‌های هوشمند و پایپلاین‌های ML ساخته شده است.",

    "projects.cryptex.title": "کریپتکس",
    "projects.cryptex.description":
      "سیستم رمزنگاری هیبریدی با تحلیل گذرواژه مبتنی بر **AI** و ذخیره امن.",

    "projects.vigiEmotion.title": "ویجی‌اِموشن",
    "projects.vigiEmotion.description":
      "تحلیل داده‌های بلادرنگ با سیگنال‌های IoT و کوپایلوت‌های GPT برای مدیریت زیرساخت‌ها.",

    "projects.handControl.title": "هندکنترل",
    "projects.handControl.description":
      "سیستم تشخیص حرکت دست مبتنی بر **AI** با MediaPipe و OpenCV برای کنترل هوشمند دستگاه‌ها.",

    "projects.nova.title": "دستیار نووا",
    "projects.nova.description":
      "دستیار صوتی با چت هوشمند، اتوماسیون، زمان‌بندی و کنترل هوشمند سیستم‌ها.",

    // Contact page
    "contact.header.eyebrow": "تماس",
    "contact.header.title": "بیایید تجربه بعدی هوشمند شما را طراحی کنیم",
    "contact.header.description":
      "چالش یا ایده‌ای که دارید را بنویسید. معمولا ظرف یک روز کاری پاسخ می‌دهم.",
    "contact.links.email": "ایمیل",
    "contact.links.linkedin": "لینکدین",
    "contact.links.github": "گیت‌هاب",
    "contact.links.x": "ایکس / توییتر",
    "contact.form.name": "نام",
    "contact.form.email": "ایمیل",
    "contact.form.message": "پیام",
    "contact.form.send": "ارسال پیام",
    "contact.form.sending": "در حال ارسال...",
    "contact.form.queued": "پیام ثبت شد",
    "contact.form.note": "معمولاً ظرف ۲۴ ساعت پاسخ می‌دهم.",

    // Resume page
    "resume.header.eyebrow": "رزومه",
    "resume.header.title": "عمق مهندسی با نتایج **AI**",
    "resume.header.description":
      "ترکیبی از مهندسی **AI**، پایپلاین‌های ML و سیستم‌های مقیاس‌پذیر. برای جزئیات کامل پروژه‌ها PDF را دانلود کنید.",
    "resume.narrative.1":
      "مهندس فول‌استک و **AI** — ساخت اپلیکیشن‌ها و سیستم‌های هوشمند با داشبورد بلادرنگ و بک‌اند هوشمند.",
    "resume.narrative.2":
      "توسعه‌دهنده بینایی کامپیوتر — طراحی پایپلاین‌ها و بهینه‌سازی پردازش برای محیط‌های عملیاتی.",
    "resume.narrative.3":
      "تحلیل‌گر داده و ادغام‌کننده **AI** — پیاده‌سازی جریان‌های داده آماده ML و سیستم‌های گزارش‌گیری خودکار برای تصمیم‌گیری دقیق‌تر.",
    "resume.narrative.4":
      "معمار سیستم و کلود — توسعه APIهای رویدادمحور و زیرساخت‌های انعطاف‌پذیر با خدمات **AI**.",
    "resume.narrative.5":
      "مهندس محصول مستقل — ارائه نرم‌افزار end-to-end هوشمند از UX تا استقرار مدل و بهینه‌سازی بلندمدت.",
    "resume.download": "دانلود رزومه"
  }
};

type I18nContextValue = {
  locale: Locale;
  t: (key: string) => string;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

type I18nProviderProps = {
  children: ReactNode;
};

const STORAGE_KEY = "neon-portfolio-locale";

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "en" || stored === "fa") {
        setLocaleState(stored);
        return;
      }
    } catch {}

    if (typeof navigator !== "undefined") {
      const lang = navigator.language.toLowerCase();
      if (lang.startsWith("fa")) {
        setLocaleState("fa");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      const body = document.body;
      root.lang = locale === "fa" ? "fa" : "en";
      root.dir = locale === "fa" ? "rtl" : "ltr";
      if (body) {
        body.classList.toggle("font-fa", locale === "fa");
        body.classList.toggle("font-body", locale !== "fa");
      }
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {}
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const t = useCallback(
    (key: string) => {
      const current = messages[locale]?.[key];
      if (current != null) return current;
      const fallback = messages.en[key];
      return fallback ?? key;
    },
    [locale]
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t
    }),
    [locale, setLocale, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
