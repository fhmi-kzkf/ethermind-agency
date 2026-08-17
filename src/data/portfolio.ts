import { CaseStudy } from "@/types/portfolio";

export const caseStudies: CaseStudy[] = [
  {
    id: "multiagentcrisis",
    title: "MultiAgentCrisis — Multi-Agent Simulation & Policy Sandbox",
    clientName: "Disaster Preparedness & Research Lab",
    thumbnailUrl: "/images/multiagentcrisis.webp",
    problem:
      "Disaster management planners relied on static models that failed to capture human psychological variables (panic, empathy, greed), cascading infrastructure failures, or real-time emergency crowd dynamics.",
    solution:
      "We engineered MultiAgentCrisis — a large-scale computational simulation using Multi-Agent Reinforcement Learning (MARL) and a 3-tier Causal XAI Debriefing engine powered by DeepSeek AI. Simulates 10,000+ autonomous agents across GIS maps with policy sandbox testing.",
    impactMetrics: [
      { label: "Agents Simulated", value: "10,000+" },
      { label: "Tick Rate", value: "60 FPS" },
      { label: "Log Compression", value: "98.5%" },
      { label: "AI Latency", value: "< 5s" },
    ],
    techStack: ["Next.js", "Python", "FastAPI", "DeepSeek API", "NetworkX", "DuckDB", "Mapbox"],
    category: "AI",
  },
  {
    id: "syncflow",
    title: "SyncFlow AI — Multi-Channel Automated Workflow Engine",
    clientName: "SyncFlow Operations",
    thumbnailUrl: "/images/Syncflow.webp",
    problem:
      "Media agencies faced severe bottlenecks managing multi-platform distribution across Telegram, webhooks, and CMS tools. Manual scheduling and cross-channel sync took over 20 hours per week per client.",
    solution:
      "We engineered SyncFlow AI — an autonomous workflow pipeline powered by fine-tuned LLM agents and FastAPI event busses. Automates content generation, formats platform payloads, and monitors engagement analytics in real-time.",
    impactMetrics: [
      { label: "Workflow Speed", value: "10x Faster" },
      { label: "Time Saved", value: "22h/week" },
      { label: "Channel Sync", value: "Sub-second" },
      { label: "Error Rate", value: "< 0.1%" },
    ],
    techStack: ["Python", "FastAPI", "OpenAI", "LangChain", "PostgreSQL", "Redis"],
    category: "AI",
  },
  {
    id: "multibot",
    title: "MultiBot Tele — Autonomous Multi-Agent Telegram Platform",
    clientName: "TeleScale Network",
    thumbnailUrl: "/images/Multibottele.webp",
    problem:
      "Large Web3 projects struggled with managing dozens of high-traffic Telegram channels simultaneously. Community managers were overwhelmed by spam, repeated inquiries, and delayed moderation.",
    solution:
      "We built MultiBot Tele — a centralized multi-agent Telegram management engine orchestrating 50+ bots simultaneously. Features automated spam filtering, AI intent classification, and real-time moderation logging.",
    impactMetrics: [
      { label: "Bots Managed", value: "50+ Active" },
      { label: "Moderation Time", value: "< 1s" },
      { label: "Spam Blocked", value: "99.4%" },
      { label: "Daily Messages", value: "100k+" },
    ],
    techStack: ["Python", "Pyrogram", "Asyncio", "Prisma", "PostgreSQL", "Docker"],
    category: "AI",
  },
  {
    id: "pactwarden",
    title: "PactWarden — Smart Contract Risk Audit & Stress-Test Platform",
    clientName: "PactWarden Protocol",
    thumbnailUrl: "/images/Pacwarden.webp",
    problem:
      "DeFi protocols required automated stress-testing for smart contracts and digital legal agreements before deployment. Manual audits were slow, costly, and lacked automated edge-case simulation.",
    solution:
      "We shipped PactWarden as a full-stack MVP in 5 weeks — featuring automated contract vulnerability parsing, simulated stress-test boards, threat scoring dashboards, and itemized compliance report downloads.",
    impactMetrics: [
      { label: "Launch Speed", value: "5 Weeks" },
      { label: "Contracts Audited", value: "1,200+" },
      { label: "Vulnerabilities Caught", value: "98.7%" },
      { label: "Audit Cost", value: "-70%" },
    ],
    techStack: ["Next.js", "TypeScript", "Solidity Parser", "Tailwind CSS", "Vercel"],
    category: "MVP",
  },
  {
    id: "tarifguard",
    title: "TariffGuard AI — Import Duty & Customs Compliance Audit Engine",
    clientName: "TariffGuard Global",
    thumbnailUrl: "/images/tariffguard.webp",
    problem:
      "Cross-border e-commerce brands and freight forwarders faced millions in unexpected customs penalties due to mistagged HS codes and outdated international tariff regulations.",
    solution:
      "We deployed TariffGuard AI — an automated customs tariff auditor that cross-references shipment manifests against international trade databases, predicts exact duty costs, and flags regulatory compliance risks in real time.",
    impactMetrics: [
      { label: "Duty Savings", value: "24% Avg" },
      { label: "Manifest Audit", value: "< 3s" },
      { label: "HS Code Accuracy", value: "97.8%" },
      { label: "Penalties Avoided", value: "$450k+" },
    ],
    techStack: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "AWS"],
    category: "MVP",
  },
  {
    id: "datamind",
    title: "DataMind (Auto Analis + ML) — Automated Analytics & AutoML Dashboard",
    clientName: "DataMind Systems",
    thumbnailUrl: "/images/Datamind.webp",
    problem:
      "Data science teams spent days performing repetitive exploratory data analysis (EDA), data cleaning, regression modeling, and RL environment configuration for custom datasets.",
    solution:
      "We developed DataMind (Auto Analis + ML) — a bespoke internal tool that automates data ingestion, CSV profiling, automated classification/regression model training, and generates interactive visual analytical dashboards.",
    impactMetrics: [
      { label: "EDA Speedup", value: "15x Faster" },
      { label: "AutoML Models", value: "5 Models" },
      { label: "Time Saved", value: "18h Saved" },
      { label: "Accuracy Score", value: "96.2%" },
    ],
    techStack: ["Python", "Streamlit", "Scikit-Learn", "Pandas", "PyTorch", "Docker"],
    category: "Tools",
  },
  {
    id: "memscroll",
    title: "Memscroll AI — Spaced-Repetition Micro-Learning Interface",
    clientName: "Memscroll Learning",
    thumbnailUrl: "/images/memscroll.webp",
    problem:
      "Traditional e-learning applications struggled with low student completion rates (under 12%) and clunky navigation that made daily spaced-repetition studying tedious.",
    solution:
      "We designed Memscroll AI — a vertical-scroll micro-learning UI/UX interface inspired by social feeds. Features smooth card transitions, dark-mode glassmorphic aesthetics, adaptive flashcard algorithms, and micro-gamification.",
    impactMetrics: [
      { label: "Completion Rate", value: "74%" },
      { label: "Daily Active Retention", value: "+310%" },
      { label: "App Store Rating", value: "4.9★" },
      { label: "User Onboarding", value: "< 45s" },
    ],
    techStack: ["Figma", "React Native", "TypeScript", "Tailwind CSS", "Prisma"],
    category: "UI/UX",
  },
];
