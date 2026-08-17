import { ServicePillar } from "@/types/service";

export const services: ServicePillar[] = [
  {
    id: "1",
    slug: "ai-automation",
    title: "AI Automation",
    subtitle: "Intelligent systems that work while you sleep",
    description:
      "We design and deploy AI-powered automation pipelines that transform your business operations. From intelligent chatbots that handle customer inquiries to custom ML models that predict market trends — we build systems that learn, adapt, and scale with your ambitions.",
    icon: "Brain",
    deliverables: [
      "Custom AI chatbots & virtual assistants",
      "Data pipeline automation",
      "ML model training & deployment",
      "Natural language processing solutions",
      "Predictive analytics dashboards",
      "AI-powered content generation tools",
    ],
    useCases: [
      {
        title: "Customer Support Automation",
        description:
          "Deploy an AI assistant that handles 80% of support tickets automatically, reducing response time from hours to seconds while maintaining human-like conversation quality.",
      },
      {
        title: "Data-Driven Decision Making",
        description:
          "Build predictive models that analyze your business data and surface actionable insights — from sales forecasting to churn prediction — so you can act before problems arise.",
      },
      {
        title: "Content & Workflow Automation",
        description:
          "Automate repetitive tasks like report generation, email campaigns, and data entry with intelligent agents that understand context and learn from feedback.",
      },
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI API",
      "LangChain",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    id: "2",
    slug: "mvp-website",
    title: "MVP Website",
    subtitle: "From concept to launch in weeks, not months",
    description:
      "We specialize in building minimum viable products that validate your idea fast. Our rapid development process delivers production-ready web applications with modern architecture, clean code, and scalable infrastructure — everything you need to go to market and start learning from real users.",
    icon: "Rocket",
    deliverables: [
      "Full-stack web application development",
      "Responsive, mobile-first UI",
      "Authentication & user management",
      "Payment integration",
      "Admin dashboard & CMS",
      "Deployment & CI/CD pipeline",
    ],
    useCases: [
      {
        title: "SaaS Platform Launch",
        description:
          "Go from idea to a working SaaS product with user auth, subscription billing, and a clean dashboard — ready for your first 100 users and investor demos.",
      },
      {
        title: "Marketplace MVP",
        description:
          "Build a two-sided marketplace with listings, search, messaging, and payment escrow — validate supply-demand dynamics before scaling.",
      },
      {
        title: "Landing Page & Lead Gen",
        description:
          "Create a high-converting landing page with integrated analytics, A/B testing, and CRM integration to start capturing leads on day one.",
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Vercel",
    ],
  },
  {
    id: "3",
    slug: "custom-tools",
    title: "Custom Tools",
    subtitle: "Bespoke software for your unique workflow",
    description:
      "Off-the-shelf software rarely fits perfectly. We build custom internal tools, dashboards, and automation scripts tailored to your exact workflow — eliminating manual processes, reducing errors, and giving your team superpowers they didn't know they needed.",
    icon: "Wrench",
    deliverables: [
      "Custom internal dashboards",
      "Workflow automation scripts",
      "API development & integration",
      "Browser extensions & desktop apps",
      "Data scraping & transformation tools",
      "Monitoring & alerting systems",
    ],
    useCases: [
      {
        title: "Operations Dashboard",
        description:
          "Consolidate data from multiple sources into a single, real-time dashboard that gives your operations team complete visibility and control.",
      },
      {
        title: "Process Automation",
        description:
          "Replace manual, error-prone workflows with automated pipelines — from invoice processing to inventory management — saving hours every week.",
      },
      {
        title: "Third-Party Integration",
        description:
          "Connect your existing tools (CRM, ERP, payment gateways) with custom APIs and webhooks that make them work together seamlessly.",
      },
    ],
    techStack: [
      "Python",
      "Node.js",
      "React",
      "Express",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
  },
  {
    id: "4",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Interfaces that users fall in love with",
    description:
      "Great design is invisible — it just works. Our design process starts with deep user research and ends with pixel-perfect interfaces that feel intuitive, look stunning, and drive measurable business outcomes. We don't just make things pretty; we make them work.",
    icon: "Palette",
    deliverables: [
      "User research & persona development",
      "Information architecture",
      "Wireframing & prototyping",
      "High-fidelity UI design",
      "Design system creation",
      "Usability testing & iteration",
    ],
    useCases: [
      {
        title: "Product Redesign",
        description:
          "Transform an existing product with a modern, cohesive design system that improves usability scores, increases engagement, and reduces support tickets.",
      },
      {
        title: "New Product Design",
        description:
          "Design a new digital product from scratch — from user flows and wireframes to a polished UI kit that your engineering team can implement with confidence.",
      },
      {
        title: "Design System",
        description:
          "Create a comprehensive, scalable design system with reusable components, tokens, and documentation that ensures consistency as your product grows.",
      },
    ],
    techStack: [
      "Figma",
      "Framer",
      "Adobe Creative Suite",
      "Principle",
      "Miro",
      "Maze",
      "Storybook",
      "Tailwind CSS",
    ],
  },
];
