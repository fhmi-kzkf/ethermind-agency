# Ethermind — Boutique Tech & Design Agency

> **Ethermind** is a boutique 4-person tech & design agency specializing in AI Automation, MVP Development, Custom Tools, and UI/UX Design.

---

## ⚡ Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Styling**: Tailwind CSS v4 + Vanilla CSS Custom Tokens
- **Animations & Effects**: GSAP 3 + ScrollTrigger, Framer Motion
- **AI Chatbot**: Gemini 3.5 Flash-Lite (`@google/generative-ai` REST integration with strict guardrails)
- **Email Notifications**: Nodemailer (Gmail SMTP integration for booking leads)
- **Icons & Graphics**: Lucide React + Bespoke SVG Preview Components
- **Type Safety & Validation**: TypeScript 5 + Zod Schema Validation

---

## 🚀 Key Features

1. **Full-Bleed Video Background Hero**: 3 sequential video loops with GSAP word-by-word headline reveal, parallax scrub, and video progress indicators.
2. **4 Core Agency Pillars**:
   - **AI Automation**: Intelligent chatbots, virtual assistants, data pipelines, fine-tuned LLM models.
   - **MVP Website**: Rapid full-stack Next.js web app development from concept to launch in 2-4 weeks.
   - **Custom Tools**: Bespoke internal admin dashboards, API integrations, workflow automation.
   - **UI/UX Design**: Conversion-focused interfaces, Figma design systems, interactive prototypes.
3. **Interactive Pricing Scope Estimator**: Glassmorphic proposal status badge, visual risk/scale meters, and live tier preset switcher.
4. **4-Person Specialist Team Grid**: Interactive grayscale-to-color cards for Dhani (Agency Lead), Hakim (Business & Marketing), Fahmi (AI & Fullstack), and Nehemia (UI/UX & Frontend).
5. **Editorial Portfolio Showcase (`/portfolio`)**: Live category filter tabs (*All, AI, MVP, Tools, UI/UX*), 7 real project case studies with WebP screenshots, and a chronological project activity log.
6. **Gemini AI Chatbot Widget**: Floating trigger button, glassmorphic chat modal, suggestions chips, markdown list formatter, and off-topic guardrails.
7. **Gmail Booking Lead Integration (`/book`)**: Consultation form backed by Zod validation and Nodemailer HTML email notifications sent straight to your agency's Gmail inbox.

---

## 🛠️ Environment Setup & Configuration

Create a `.env.local` file inside the `app/` directory:

```env
# Gemini AI Assistant API Key
GEMINI_API_KEY=your_gemini_api_key_here

# Gmail Lead Notification Setup (Google App Password)
GMAIL_USER=hello@ethermind.agency
GMAIL_APP_PASSWORD=your_16_character_app_password
NOTIFICATION_EMAIL=hello@ethermind.agency
```

### 🔐 Generating Google App Password:
1. Go to your Gmail's **[Google Account Security](https://myaccount.google.com/security)** page.
2. Ensure **2-Step Verification** is enabled.
3. Search for **App Passwords**, generate a code for `Ethermind Website`, and copy the 16-character string into `GMAIL_APP_PASSWORD`.

---

## 💻 Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 📦 Production Build

```bash
npm run build
npm run start
```

---

## 🛡️ Security & Privacy

- Sensitive environment variables (`GEMINI_API_KEY`, `GMAIL_APP_PASSWORD`) are **never** prefixed with `NEXT_PUBLIC_`, ensuring they are strictly isolated to the server-side runtime and excluded from client JS bundles.
- All client-side debug console logs are automatically suppressed for a clean browser experience.
- Strict input validation via Zod protects API endpoints from payload overload and injection attacks.

---

© 2026 **Ethermind Agency**. All rights reserved.
