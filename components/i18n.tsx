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
    "hero.badge": "ENGINEERING INTELLIGENT & SCALABLE SYSTEMS",
    "hero.title": "I'm Asma — building next-gen Android, AI-powered, and full-stack ecosystems.",
    "hero.body":
      "Developer focused on Android applications, image processing, data analysis, and scalable full-stack systems. I merge clean engineering with intelligent automation to create apps that adapt, learn, and grow with real-world demand.",
    "hero.cta.work": "View Work",
    "hero.cta.contact": "Collaborate",

    // Home: About
    "home.about.eyebrow": "About Me",
    "home.about.title": "Product engineering that feels like science fiction.",
    "home.about.description":
      "I architect resilient cloud systems, choreograph Framer Motion experiences, and translate ambiguous business problems into polished product surfaces.",
    "home.about.p1":
      "From YC rocketships to Fortune 50 labs, I have been the bridge between visionary founders, product strategy, and the engineering execution that makes ideas tangible.",
    "home.about.p2":
      "I operate full-stack with a focus on the DX that empowers teams: typed APIs, AI copilots inside tooling, and design systems that scale. Every build is benchmarked for performance, accessibility, and an emotional wow-factor.",

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
    "home.projects.title": "Operational-grade builds with neon polish.",
    "home.projects.description":
      "Selected case studies blending immersive UI, AI copilots, and cloud-native backbones.",
    "home.projects.cta": "View Full Portfolio",

    // Home: Skills
    "home.skills.eyebrow": "Skills",
    "home.skills.title": "A battle-tested skill matrix for modern product orgs.",
    "home.skills.description":
      "From ideation to launch, I plug into squads as an engineering lead with design fluency.",

    // Generic skills
    "skills.android.label": "Android Development",
    "skills.android.detail":
      "Building scalable and performant Android apps with modern architecture patterns and clean code.",
    "skills.image.label": "Image Processing",
    "skills.image.detail":
      "Applying advanced computer vision algorithms and ML pipelines for accurate image analysis.",
    "skills.data.label": "Data Analysis",
    "skills.data.detail":
      "Designing data pipelines, real-time analytics, and dashboards for actionable insights.",
    "skills.fullstack.label": "Full-Stack Web Development",
    "skills.fullstack.detail":
      "Creating scalable web applications using React, Next.js, Node.js, and database design.",

    // Projects page
    "projects.header.eyebrow": "Projects",
    "projects.header.title": "A curated set of builds.",
    "projects.header.description":
      "Every launch is benchmarked, instrumented, and narrated with the same craftsmanship you see here.",

    // Individual projects (titles/descriptions override)
    "projects.cryptex.title": "Cryptex",
    "projects.cryptex.description":
      "Hybrid encryption program using RSA and AES to securely encrypt and decrypt passwords, then hash them with BCrypt for secure storage.",
    "projects.vigiEmotion.title": "VigiEmotion",
    "projects.vigiEmotion.description":
      "Streaming analytics layer that merges IoT signals with GPT copilots so operators can query infrastructure in plain language.",
    "projects.handControl.title": "HandControl",
    "projects.handControl.description":
      "Hand-tracking system using MediaPipe and OpenCV to control mouse, clicks, drags, and slide navigation with gestures.",
    "projects.nova.title": "nova assitant",
    "projects.nova.description":
      "Voice assistant “Nova” with speech recognition, AI chat, Wikipedia search, app management, time reporting, and system control.",

    // Contact page
    "contact.header.eyebrow": "Contact",
    "contact.header.title": "Let’s architect your next flagship experience.",
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
    "resume.header.title": "Engineering depth with real-world results.",
    "resume.header.description":
      "A blend of mobile engineering, AI-driven development, and scalable systems. This is the high-level snapshot — download the full PDF for full project breakdowns.",
    "resume.narrative.1":
      "Full-Stack & Android Engineer — Built scalable mobile apps, real-time dashboards, and high-performance backend systems for products serving thousands of active users.",
    "resume.narrative.2":
      "Computer Vision & Image Processing Developer — Designed custom preprocessing pipelines, detection models, and optimized inference workflows for production environments.",
    "resume.narrative.3":
      "Data Analyst & AI Integrator — Implemented machine-learning-ready data flows, analytics layers, and automated reporting systems that improved decision accuracy across projects.",
    "resume.narrative.4":
      "Cloud & System Architect — Developed containerized services, event-driven APIs, and elastic infrastructures capable of scaling under heavy concurrency.",
    "resume.narrative.5":
      "Independent Product Engineer — Delivered end-to-end software for clients, from UX flows and frontend interfaces to backend logic, model deployment, and long-term optimization.",
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
      "hero.badge": "مهندسی سیستم‌های هوشمند و مقیاس‌پذیر",
      "hero.title": "من اسما هستم — توسعه‌دهنده اندروید نسل بعد، سیستم‌های هوش مصنوعی و فول‌استک.",
      "hero.body":
        "توسعه‌دهنده‌ای متخصص در اپلیکیشن‌های اندروید، پردازش تصویر، تحلیل داده و سیستم‌های فول‌استک مقیاس‌پذیر. مهندسی تمیز را با اتوماسیون هوشمند ترکیب می‌کنم تا برنامه‌هایی بسازم که با نیاز واقعی کاربران رشد کنند.",
      "hero.cta.work": "مشاهده کارها",
      "hero.cta.contact": "همکاری",
  
      // Home: About
      "home.about.eyebrow": "درباره من",
      "home.about.title": "مهندسی محصولی که حس علمی‌تخیلی دارد.",
      "home.about.description":
        "زیرساخت‌های ابری مقاوم طراحی می‌کنم، تجربه‌های تعاملی با Framer Motion می‌سازم و مسائل پیچیده کسب‌وکار را به محصولات کاربردی و شفاف تبدیل می‌کنم.",
      "home.about.p1":
        "از استارتاپ‌های شتاب‌دهنده تا شرکت‌های بزرگ، پل بین بنیان‌گذاران، استراتژی محصول و اجرای مهندسی بوده‌ام تا ایده‌ها واقعی شوند.",
      "home.about.p2":
        "فول‌استک کار می‌کنم و تمرکزم روی تجربه توسعه‌دهنده است: APIهای تایپ‌شده، کوپایلوت‌های هوش مصنوعی داخل ابزارها و سیستم‌های طراحی مقیاس‌پذیر. هر محصول از نظر عملکرد، دسترس‌پذیری و تاثیر احساسی بررسی می‌شود.",
  
      // Home: Highlights
      "home.highlight.years": "سال تجربه در تولید محصولات آینده‌نگر",
      "home.highlight.yearsValue": "۱۰+",
      "home.highlight.products": "محصولات ارائه‌شده در صنایع مختلف",
      "home.highlight.productsValue": "۴۵",
      "home.highlight.roi": "میانگین بهبود بازگشت سرمایه",
      "home.highlight.roiValue": "۳۷٪",
      "home.highlight.remote": "همکاری‌های دورکاری",
      "home.highlight.remoteValue": "۱۲ منطقه زمانی",
  
      // Home: Projects
      "home.projects.eyebrow": "پروژه‌ها",
      "home.projects.title": "ساخت‌هایی در سطح عملیاتی با طراحی جذاب",
      "home.projects.description":
        "نمونه‌هایی منتخب که ترکیبی از رابط کاربری جذاب، کوپایلوت‌های هوش مصنوعی و زیرساخت ابری دارند.",
      "home.projects.cta": "مشاهده همه پروژه‌ها",
  
      // Home: Skills
      "home.skills.eyebrow": "مهارت‌ها",
      "home.skills.title": "ماتریس مهارت‌های آزموده‌شده برای تیم‌های محصول مدرن",
      "home.skills.description":
        "از ایده تا ارائه، به عنوان لید مهندسی با درک طراحی در تیم‌ها مشارکت می‌کنم.",
  
      // Generic skills
      "skills.android.label": "توسعه اندروید",
      "skills.android.detail": "ساخت اپلیکیشن‌های اندروید مقیاس‌پذیر و با عملکرد بالا با معماری مدرن و کد تمیز.",
      "skills.image.label": "پردازش تصویر",
      "skills.image.detail": "کار با الگوریتم‌های پیشرفته بینایی کامپیوتر و پایپلاین‌های یادگیری ماشین برای تحلیل دقیق تصاویر.",
      "skills.data.label": "تحلیل داده",
      "skills.data.detail": "طراحی جریان داده، تحلیل بلادرنگ و داشبوردهای قابل اقدام برای تصمیم‌گیری هوشمندانه.",
      "skills.fullstack.label": "توسعه وب فول‌استک",
      "skills.fullstack.detail": "ساخت وب‌اپ‌های مقیاس‌پذیر با React، Next.js، Node.js و طراحی دیتابیس اصولی.",
  
      // Projects page
      "projects.header.eyebrow": "پروژه‌ها",
      "projects.header.title": "مجموعه‌ای منتخب از پروژه‌ها",
      "projects.header.description":
        "هر پروژه با دقت، مانیتورینگ و روایت حرفه‌ای ساخته شده است.",
  
      // Individual projects
      "projects.cryptex.title": "کریپتکس",
      "projects.cryptex.description":
        "برنامه‌ای برای رمزنگاری هیبریدی با RSA و AES که گذرواژه‌ها را امن رمزگذاری و رمزگشایی می‌کند و سپس با BCrypt برای ذخیره امن هش می‌کند.",
      "projects.vigiEmotion.title": "ویجی‌اِموشن",
      "projects.vigiEmotion.description":
        "لایه‌ای برای تحلیل داده‌های لحظه‌ای که سیگنال‌های IoT را با کوپایلوت‌های GPT ترکیب می‌کند تا اپراتورها بتوانند زیرساخت‌ها را به زبان ساده مدیریت کنند.",
      "projects.handControl.title": "هندکنترل",
      "projects.handControl.description":
        "سیستم ردیابی دست با MediaPipe و OpenCV برای کنترل ماوس، کلیک، کشیدن و ناوبری اسلایدها با حرکات دست.",
      "projects.nova.title": "دستیار نووا",
      "projects.nova.description":
        "دستیار صوتی «نووا» با تشخیص گفتار، چت هوش مصنوعی، جستجوی ویکی‌پدیا، مدیریت برنامه‌ها، گزارش‌گیری زمانی و کنترل سیستم.",
  
      // Contact page
      "contact.header.eyebrow": "تماس",
      "contact.header.title": "بیایید تجربه شاخص بعدی شما را طراحی کنیم",
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
      "resume.header.title": "عمق مهندسی با نتایج واقعی",
      "resume.header.description":
        "ترکیبی از مهندسی موبایل، توسعه مبتنی بر هوش مصنوعی و سیستم‌های مقیاس‌پذیر. این یک نمای کلی است — برای جزئیات کامل پروژه‌ها PDF را دانلود کنید.",
      "resume.narrative.1":
        "مهندس فول‌استک و اندروید — ساخت اپلیکیشن‌های موبایل مقیاس‌پذیر، داشبوردهای بلادرنگ و سیستم‌های بک‌اند پرقدرت برای هزاران کاربر فعال.",
      "resume.narrative.2":
        "توسعه‌دهنده بینایی کامپیوتر و پردازش تصویر — طراحی پایپلاین‌های پیش‌پردازش، مدل‌های تشخیص و بهینه‌سازی پردازش برای محیط‌های عملیاتی.",
      "resume.narrative.3":
        "تحلیل‌گر داده و ادغام‌کننده هوش مصنوعی — پیاده‌سازی جریان‌های داده آماده ML، لایه‌های تحلیلی و سیستم‌های گزارش‌گیری خودکار برای بهبود دقت تصمیم‌گیری.",
      "resume.narrative.4":
        "معمار سیستم و کلود — توسعه سرویس‌های کانتینری، APIهای رویدادمحور و زیرساخت‌های انعطاف‌پذیر که توان مقیاس‌پذیری بالا دارند.",
      "resume.narrative.5":
        "مهندس محصول مستقل — ارائه نرم‌افزار end-to-end برای مشتریان؛ از طراحی UX و رابط کاربری تا منطق بک‌اند، استقرار مدل و بهینه‌سازی بلندمدت.",
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

  // Initialize from localStorage / browser
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "en" || stored === "fa") {
        setLocaleState(stored);
        return;
      }
    } catch {
      // ignore
    }

    if (typeof navigator !== "undefined") {
      const lang = navigator.language.toLowerCase();
      if (lang.startsWith("fa")) {
        setLocaleState("fa");
      }
    }
  }, []);

  // Sync lang/dir + fonts + persist
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
    } catch {
      // ignore
    }
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


