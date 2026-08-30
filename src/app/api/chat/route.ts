import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are "Ethermind Assistant", an AI guide for Ethermind — a boutique tech & design agency.
Your goal is to guide visitors, answer FAQs about Ethermind, explain services, pricing, and encourage booking a free consultation.

[FORMATTING RULES - CRITICAL]
1. DO NOT USE ASTERISKS (*) anywhere in your response. Never use *text* or **text**. Write clean, plain text.
2. NEVER put a newline between a number/bullet and its title. ALWAYS write "1. Title" or "• Item" on the SAME single line.
3. Use clean numbered points (1., 2., 3.) or bullet points (•) for lists.
4. Keep answers clean, structured, and concise.

[ETHERMIND AGENCY FACTS]
- Agency Name: Ethermind
- Tagline: Boutique Tech & Design Agency
- Executive Leadership (C-Level Team):
  1. Dhani — Chief Executive Officer (CEO) & Agency Lead
  2. Hakim — Chief Marketing Officer (CMO) & Growth Director
  3. Fahmi — Chief Technology Officer (CTO) & Head of AI
  4. Nehemia — Chief Design Officer (CDO) & Head of Product Design
- Core Services (4 Pillars):
  1. AI Automation: Intelligent chatbots, virtual assistants, data pipelines, fine-tuned LLM models.
  2. MVP Website: Rapid full-stack Next.js web application development from concept to launch in weeks.
  3. Custom Tools: Internal dashboards, API integrations, workflow automation, custom software.
  4. UI/UX Design: Conversion-focused interfaces, Figma design systems, interactive prototypes.
- Pricing & Timeline: Custom pricing per project based on scale, complexity, and speed. Itemized proposal delivered within 48 hours. Express MVP sprints take 2-4 weeks.
- Contact: Proposals and consultation booking at /book or hello@ethermind.agency.

[STRICT GUARDRAILS & BOUNDARIES]
1. ONLY answer questions related to Ethermind agency, tech/design consulting, web development, AI, software MVP, pricing, process, or team.
2. DO NOT answer sensitive, political, illegal, offensive, explicit, adult, or completely off-topic questions (e.g., cooking recipes, trivia, personal advice).
3. If a question is off-topic or sensitive, politely decline with: "I'm designed to assist specifically with Ethermind's technology & design services. How can I help you with your next software or AI project?"
`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 400 }
      );
    }

    const lastUserMessage = messages[messages.length - 1]?.content || "";
    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  { text: SYSTEM_PROMPT },
                  { text: `User Question: ${lastUserMessage}` },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 350,
            },
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        let text =
          data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "I'm here to help you learn more about Ethermind's tech & design capabilities. Feel free to ask about our MVP builds, AI automation, or book a free consultation!";
        
        // Strip any residual asterisks from AI response for 100% clean formatting
        text = text.replace(/\*/g, "");
        
        return NextResponse.json({ reply: text });
      }
    }

    // Fallback AI responder with structured lists & guardrails
    const lower = lastUserMessage.toLowerCase();

    const offTopicKeywords = [
      "recipe",
      "resep",
      "politics",
      "politik",
      "president",
      "presiden",
      "election",
      "hack",
      "illegal",
      "weapon",
      "gambling",
      "joke",
      "weather",
    ];
    if (offTopicKeywords.some((kw) => lower.includes(kw))) {
      return NextResponse.json({
        reply:
          "I'm designed to assist specifically with Ethermind's technology & design services. How can I help you with your next software, MVP, or AI project?",
      });
    }

    let fallbackReply =
      "Ethermind is a boutique 4-person tech & design agency. Our core pillars:\n\n1. AI Automation & LLM Workflows\n2. MVP Web Application Builds\n3. Custom Internal Tools & Systems\n4. Conversion UI/UX Design\n\nWould you like to schedule a free proposal consultation?";

    if (lower.includes("service") || lower.includes("layanan") || lower.includes("do") || lower.includes("offer")) {
      fallbackReply =
        "Ethermind menyediakan 4 pilar layanan utama:\n\n1. AI Automation: Chatbot cerdas, LLM, dan otomatisasi data pipeline.\n2. MVP Website: Aplikasi web full-stack Next.js cepat dalam 2-4 minggu.\n3. Custom Tools: Dashboard internal dan integrasi API khusus.\n4. UI/UX Design: Sistem desain Figma dan antarmuka berfokus konversi.\n\nAda proyek yang ingin Anda konsultasikan?";
    } else if (lower.includes("price") || lower.includes("harga") || lower.includes("cost") || lower.includes("budget")) {
      fallbackReply =
        "Sistem harga kami transparan dan terukur:\n\n• Pengiriman Proposal: Dalam 48 jam setelah konsultasi.\n• Express MVP Sprint: 2 hingga 4 minggu.\n• Biaya Kustom: Disesuaikan dengan skala & kompleksitas teknik.\n\nKunjungi /book untuk meminta estimasi proposal!";
    } else if (lower.includes("team") || lower.includes("tim") || lower.includes("who") || lower.includes("siapa") || lower.includes("c-level") || lower.includes("ceo") || lower.includes("cto")) {
      fallbackReply =
        "Eksekutif & Tim Inti Ethermind (C-Level):\n\n1. Dhani — Chief Executive Officer (CEO)\n2. Hakim — Chief Marketing Officer (CMO)\n3. Fahmi — Chief Technology Officer (CTO)\n4. Nehemia — Chief Design Officer (CDO)";
    } else if (lower.includes("book") || lower.includes("contact") || lower.includes("call") || lower.includes("kontak")) {
      fallbackReply =
        "Anda dapat menghubungi kami langsung:\n\n• Jadwal Konsultasi: /book\n• Email: hello@ethermind.agency\n\nKami akan merespons dalam 24 jam!";
    }

    return NextResponse.json({ reply: fallbackReply });
  } catch (error) {
    console.error("Chatbot API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
