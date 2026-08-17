export interface ProjectUpdate {
  id: string;
  category: "AI" | "MVP" | "Tools" | "UI/UX";
  projectName: string;
  title: string;
  date: string;
  description: string;
  badge?: string;
  metrics?: { label: string; value: string };
}

export const projectUpdates: ProjectUpdate[] = [
  {
    id: "u1",
    category: "AI",
    projectName: "SyncFlow AI Engine",
    title: "Multi-Channel Webhook & Async Event Bus Release v2.4",
    date: "August 2026",
    description:
      "Deployed automated multi-channel publisher with fine-tuned LLM content formatting and sub-second webhook execution.",
    badge: "AI Pipeline",
    metrics: { label: "Speedup", value: "10x Faster" },
  },
  {
    id: "u2",
    category: "AI",
    projectName: "MultiBot Tele Platform",
    title: "50+ Bot Autonomous Telegram Moderation Upgrade",
    date: "July 2026",
    description:
      "Integrated Pyrogram async message routing with zero-latency spam filtering and multi-group admin dashboard.",
    badge: "Bot Network",
    metrics: { label: "Spam Blocked", value: "99.4%" },
  },
  {
    id: "u3",
    category: "AI",
    projectName: "PRD Engine AI",
    title: "Automated TRD, Prisma Schema & AppFlow Generation",
    date: "July 2026",
    description:
      "Shipped 5-minute technical PRD/TRD generator converting product briefs into developer-ready architectural specs.",
    badge: "Productivity AI",
    metrics: { label: "Spec Time", value: "< 5 Mins" },
  },
  {
    id: "u4",
    category: "MVP",
    projectName: "PactWarden Protocol",
    title: "Smart Contract Risk Stress-Test & Vulnerability Board",
    date: "June 2026",
    description:
      "Shipped full-stack Next.js MVP in 5 weeks with automated contract vulnerability parsing and compliance PDF export.",
    badge: "MVP Launch",
    metrics: { label: "Time to Launch", value: "5 Weeks" },
  },
  {
    id: "u5",
    category: "MVP",
    projectName: "TariffGuard AI",
    title: "International Customs Duty & HS Code Auditor",
    date: "June 2026",
    description:
      "Built cross-border customs audit platform with real-time manifest scanning and automated tariff penalty prediction.",
    badge: "Compliance MVP",
    metrics: { label: "Duty Savings", value: "24% Avg" },
  },
  {
    id: "u6",
    category: "Tools",
    projectName: "DataMind (Auto Analis + ML)",
    title: "AutoML Regression & Interactive EDA Dashboard Release",
    date: "May 2026",
    description:
      "Engineered bespoke Python analytics dashboard with automated CSV profiling, regression model training, and RL data tools.",
    badge: "DevTool Release",
    metrics: { label: "EDA Speed", value: "15x Faster" },
  },
  {
    id: "u7",
    category: "UI/UX",
    projectName: "Memscroll AI",
    title: "Vertical Micro-Learning Interface & Dark UI Kit",
    date: "May 2026",
    description:
      "Designed revolutionary vertical-scroll spaced repetition UI with glassmorphic cards and micro-gamification animations.",
    badge: "UI/UX System",
    metrics: { label: "Completion Rate", value: "74%" },
  },
];
