export type LegalBlock = string | string[];

export interface LegalSection {
  id: string;
  title: string;
  /** A string renders as a paragraph, a string[] renders as a list. */
  body: LegalBlock[];
}

export interface LegalDocument {
  title: string;
  eyebrow: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const CONTACT_EMAIL = "hello@ethermind.agency";

export const termsOfService: LegalDocument = {
  title: "Terms of Service",
  eyebrow: "Legal",
  intro:
    "These terms govern your use of the Ethermind website and the way we engage with prospective clients. They are written to be read, so please take a few minutes with them.",
  lastUpdated: "October 26, 2026",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of these terms",
      body: [
        "By accessing or using the Ethermind website (the \"Site\"), submitting a consultation request, or using our AI assistant, you agree to be bound by these Terms of Service and by our Privacy Policy. If you do not agree, please do not use the Site.",
        "If you use the Site on behalf of a company or other organization, you confirm that you have the authority to bind that organization to these terms.",
      ],
    },
    {
      id: "about",
      title: "Who we are and what these terms cover",
      body: [
        "Ethermind is a boutique technology and design agency (\"Ethermind\", \"we\", \"us\"). These terms cover your use of the Site and the pre-engagement process: browsing, requesting a consultation, receiving a proposal, and chatting with our assistant.",
        "They do not replace a project agreement. Once you and Ethermind sign a proposal, statement of work, or master services agreement, that document governs the project work. If it conflicts with these terms, the signed project document prevails.",
      ],
    },
    {
      id: "services",
      title: "Our services",
      body: [
        "We offer four service areas, described on the Site:",
        [
          "AI Automation: chatbots, virtual assistants, data pipelines, and LLM-based systems.",
          "MVP Website Development: full-stack web applications taken from concept to launch.",
          "Custom Tools: internal dashboards, API integrations, and workflow automation.",
          "UI/UX Design: interface design, design systems, and interactive prototypes.",
        ],
        "Descriptions on the Site, including timelines such as express MVP sprints, are general in nature. The scope, deliverables, and schedule of any engagement are set only in a written proposal that both parties accept.",
      ],
    },
    {
      id: "consultations",
      title: "Consultations, proposals, and pricing",
      body: [
        "Initial consultations are free and carry no obligation on either side. Submitting the booking form does not create a contract for services.",
        "We price projects individually, based on scale, complexity, and timeline. Budget ranges shown in the booking form are only a way for you to tell us what you have in mind. They are not a quote, a price list, or a commitment by either party.",
        "A proposal is an offer to provide specific services for a stated fee. Unless the proposal says otherwise, it stays open for 30 days from the date we send it. Work begins only after the proposal is accepted in writing and any agreed deposit has been paid.",
      ],
    },
    {
      id: "engagements",
      title: "Project engagements",
      body: [
        "Each engagement is governed by its accepted proposal or agreement, which sets out scope, fees, payment schedule, revision rounds, timelines, and acceptance criteria. Changes to scope are handled through a written change request and may adjust the fee and timeline.",
        "Timelines depend on timely feedback, content, and access from you. Delays on your side can move delivery dates.",
      ],
    },
    {
      id: "ip",
      title: "Intellectual property",
      body: [
        "The Site, including its text, design, graphics, code, logos, and portfolio presentation, belongs to Ethermind or its licensors and is protected by intellectual property law. You may view it for personal or business evaluation, but you may not copy, modify, redistribute, or reverse engineer it without our written permission.",
        "For client work, ownership of the final deliverables transfers to you once all fees under the relevant agreement are paid in full, unless that agreement says otherwise. We keep ownership of our pre-existing tools, frameworks, templates, and know-how, and we grant you a license to use them as embedded in the deliverables. Third-party and open-source components stay under their own licenses.",
        "Unless a client asks us in writing not to, we may describe completed work in our portfolio and case studies. We will not disclose confidential information or credentials in doing so.",
      ],
    },
    {
      id: "use",
      title: "Acceptable use",
      body: [
        "When using the Site you agree not to:",
        [
          "submit false, misleading, or someone else's personal information;",
          "send spam, malware, or content that is unlawful, abusive, or infringes the rights of others;",
          "probe, scan, or test the Site's security, or attempt to access systems or data you are not authorized to reach;",
          "overload the Site or its APIs, including by automated or scripted requests;",
          "use the AI assistant to generate harmful content or to extract its instructions or underlying data.",
        ],
        "We may block access or remove submissions that violate these rules.",
      ],
    },
    {
      id: "assistant",
      title: "AI assistant",
      body: [
        "The Site includes an AI-powered assistant that answers general questions about Ethermind. Its responses are generated automatically and may be incomplete or wrong. They are for information only and are not a quote, proposal, professional advice, or a binding statement by Ethermind.",
        "Please do not enter passwords, financial details, health information, or other sensitive data into the chat. See the Privacy Policy for how chat messages are processed.",
      ],
    },
    {
      id: "third-parties",
      title: "Third-party services and links",
      body: [
        "The Site links to third-party services such as Instagram and relies on third-party providers to host the Site, deliver email, and power the assistant. We do not control those services and are not responsible for their content, availability, or practices. Your use of them is subject to their own terms.",
      ],
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      body: [
        "The Site is provided \"as is\" and \"as available\". To the fullest extent permitted by law, we disclaim all warranties, express or implied, including fitness for a particular purpose and uninterrupted or error-free operation.",
        "Nothing on the Site is a guarantee of specific business results, such as revenue, conversion rates, or funding outcomes.",
      ],
    },
    {
      id: "liability",
      title: "Limitation of liability",
      body: [
        "To the extent permitted by law, Ethermind is not liable for indirect, incidental, special, or consequential damages, or for loss of profits, data, or goodwill, arising from your use of the Site.",
        "Our total liability for any claim relating to the Site is limited to IDR 1,000,000. Liability under a signed project agreement is governed by that agreement. Nothing in these terms excludes liability that cannot be excluded under applicable law.",
      ],
    },
    {
      id: "changes-access",
      title: "Suspension and changes to the Site",
      body: [
        "We may modify, suspend, or discontinue any part of the Site at any time, and we may restrict access for anyone who breaches these terms.",
      ],
    },
    {
      id: "law",
      title: "Governing law and disputes",
      body: [
        "These terms are governed by the laws of the Republic of Indonesia. We encourage you to contact us first so we can try to resolve any dispute in good faith. If we cannot, the courts of Indonesia have jurisdiction, unless a signed project agreement specifies otherwise.",
      ],
    },
    {
      id: "updates",
      title: "Changes to these terms",
      body: [
        "We may update these terms from time to time. The \"Last updated\" date at the top shows when they last changed. Continued use of the Site after an update means you accept the revised terms. If we make a material change, we will make it visible on the Site.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      body: [
        `Questions about these terms can be sent to ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  eyebrow: "Legal",
  intro:
    "This policy explains what personal data Ethermind collects through this website, why we collect it, who sees it, and the choices you have.",
  lastUpdated: "October 26, 2026",
  sections: [
    {
      id: "who",
      title: "Who we are",
      body: [
        `Ethermind is a boutique technology and design agency and the controller of personal data collected through this website. You can reach us at ${CONTACT_EMAIL}.`,
      ],
    },
    {
      id: "collect",
      title: "What we collect",
      body: [
        "Information you give us:",
        [
          "Booking form: your first and last name, email address, company name, project type, estimated budget range, and the project description you write.",
          "AI assistant: the messages you type into the chat widget.",
          "Direct contact: anything you include when you email us or message us on social media.",
        ],
        "Information collected automatically:",
        [
          "Our hosting provider and infrastructure may record standard technical data when you visit, such as IP address, browser and device type, pages requested, and timestamps. This is used to deliver the Site and keep it secure.",
        ],
        "We do not ask you to create an account, and we do not knowingly collect sensitive personal data. Please do not include it in the form or the chat.",
      ],
    },
    {
      id: "use",
      title: "How we use your information",
      body: [
        [
          "To respond to your consultation request and prepare a proposal;",
          "To communicate with you about your project and follow up on your inquiry;",
          "To answer your questions through the AI assistant;",
          "To operate, secure, and improve the Site;",
          "To meet legal obligations and protect our rights.",
        ],
        "We rely on your consent and on our legitimate interest in running our business and replying to people who contact us. We do not use your information for automated decisions that have legal effects on you, and we do not sell it.",
      ],
    },
    {
      id: "ai",
      title: "AI assistant and chat messages",
      body: [
        "When you use the chat widget, your messages are sent to a third-party AI model provider (Google's Gemini API) so that a response can be generated. Messages are processed to produce an answer, and the provider's own terms apply to that processing.",
        "Because of this, please keep chat messages free of personal, confidential, or sensitive details. If you want to discuss a project privately, use the booking form or email us.",
      ],
    },
    {
      id: "sharing",
      title: "Who we share it with",
      body: [
        "We share personal data only as needed and only with:",
        [
          "Service providers that help us run the Site and our business, including web hosting, email delivery (your booking details are forwarded to our team by email), and the AI model provider described above;",
          "Professional advisers, authorities, or courts when the law requires or when we need to protect our rights;",
          "A successor, in the event of a merger, acquisition, or sale of our business, subject to the same protections.",
        ],
        "These providers may only use your data to deliver their services to us.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and tracking",
      body: [
        "At the time of writing, the Site does not use advertising or analytics cookies or third-party trackers. Our hosting provider and your browser may use strictly technical mechanisms needed to serve pages. If we add analytics or similar tools in the future, we will update this policy and, where required, ask for your consent.",
      ],
    },
    {
      id: "retention",
      title: "How long we keep it",
      body: [
        "We keep personal data only as long as needed for the purpose it was collected. Inquiries that do not lead to a project are kept for a reasonable period so that we can follow up, then deleted. If we work together, project and billing records are kept for as long as the agreement and applicable tax and accounting laws require.",
      ],
    },
    {
      id: "security",
      title: "Security",
      body: [
        "We use reasonable technical and organizational measures to protect your data, including encrypted connections (HTTPS) and restricted access to submissions. No system is completely secure, so we cannot guarantee absolute security. If a breach affects your personal data, we will notify you and the relevant authorities as the law requires.",
      ],
    },
    {
      id: "transfers",
      title: "International transfers",
      body: [
        "Some of our providers operate servers outside Indonesia, so your data may be processed in other countries. Where this happens, we take steps to make sure it stays protected in line with applicable law.",
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      body: [
        "Under Indonesia's Personal Data Protection Law (Law No. 27 of 2022) and other laws that may apply to you, you can ask us to:",
        [
          "tell you what personal data we hold about you and give you a copy;",
          "correct data that is inaccurate or incomplete;",
          "delete your data or stop processing it;",
          "withdraw consent you previously gave, where we rely on consent;",
          "object to or restrict certain processing.",
        ],
        `To exercise any of these rights, email ${CONTACT_EMAIL}. We may need to verify your identity first, and we will respond within the time the law requires. You may also complain to the competent data protection authority.`,
      ],
    },
    {
      id: "children",
      title: "Children",
      body: [
        "The Site is aimed at businesses and is not intended for children. We do not knowingly collect personal data from anyone under 18. If you believe a child has sent us information, contact us and we will delete it.",
      ],
    },
    {
      id: "links",
      title: "Third-party links",
      body: [
        "The Site links to other services, such as our Instagram page. Their privacy practices are their own, and we encourage you to read their policies.",
      ],
    },
    {
      id: "updates",
      title: "Changes to this policy",
      body: [
        "We may update this policy as the Site or the law changes. The \"Last updated\" date at the top shows the latest revision. If a change is material, we will make it visible on the Site.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      body: [
        `For questions or requests about your personal data, email ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};
