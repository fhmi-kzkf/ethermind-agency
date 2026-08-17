"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, User, RefreshCw } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
}

const suggestionChips = [
  "What services do you offer?",
  "How much does an MVP cost?",
  "Tell me about the team",
  "How to book a consultation?",
];

function FormattedChatMessage({ text, isUser }: { text: string; isUser: boolean }) {
  if (isUser) return <span>{text}</span>;

  // Preprocess: Strip all raw asterisks and merge orphaned number/bullet newlines
  const cleaned = text
    .replace(/\*/g, "")
    .replace(/(\d+[\.\)])\s*\n+/g, "$1 ")
    .replace(/([\•\-\*])\s*\n+/g, "$1 ");

  const lines = cleaned.split("\n");

  return (
    <div className="space-y-1.5">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={idx} className="h-0.5" />;

        const isNumbered = /^\d+[\.\)]\s*/.test(trimmed);
        const isBulleted = /^[\•\-\*]\s*/.test(trimmed);

        const formatInline = (str: string) => {
          const parts = str.split(/(`.*?`)/g);
          return parts.map((part, i) => {
            if (part.startsWith("`") && part.endsWith("`")) {
              const codeVal = part.slice(1, -1);
              if (codeVal.startsWith("/")) {
                return (
                  <a
                    key={i}
                    href={codeVal}
                    className="underline text-ice-cyan font-normal hover:opacity-80"
                  >
                    {codeVal}
                  </a>
                );
              }
              return (
                <code
                  key={i}
                  className="bg-carbon border border-ice-cyan/20 px-1 py-0.5 rounded text-[11px] text-ice-cyan font-mono"
                >
                  {codeVal}
                </code>
              );
            }
            return part;
          });
        };

        if (isNumbered) {
          const numMatch = trimmed.match(/^(\d+)[\.\)]\s*(.*)/);
          if (numMatch) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-0.5 py-0.5">
                <span className="text-ice-cyan font-mono text-[11px] font-semibold shrink-0">
                  {numMatch[1]}.
                </span>
                <span className="flex-1 leading-relaxed">{formatInline(numMatch[2])}</span>
              </div>
            );
          }
        }

        if (isBulleted) {
          const bulletMatch = trimmed.match(/^[\•\-\*]\s*(.*)/);
          if (bulletMatch) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-1 py-0.5">
                <span className="text-ice-cyan/80 text-[10px] shrink-0 mt-0.5">•</span>
                <span className="flex-1 leading-relaxed">{formatInline(bulletMatch[1])}</span>
              </div>
            );
          }
        }

        return <p key={idx} className="leading-relaxed">{formatInline(trimmed)}</p>;
      })}
    </div>
  );
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "Hello! I'm Ethermind AI Guide.\n\nShy to chat directly? Feel free to ask about:\n1. Our 4 core services (AI, MVP, Tools, UI/UX)\n2. Pricing & proposal timelines\n3. Our 4-person specialist team",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });

      const data = await response.json();
      const aiReply =
        data.reply ||
        "I'm here to guide you on Ethermind's tech & design services. Feel free to ask about our MVP builds, AI automation, or booking a free consultation!";

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: aiReply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: "I'm having trouble connecting right now. Feel free to explore our services or book a consultation at /book!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9990]">
      {/* Expanded Mobile-Responsive Chat Window */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-[400px] h-[480px] sm:h-[520px] bg-carbon/95 border border-ice-cyan/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-3.5 sm:p-4 bg-void/80 border-b border-ice-cyan/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-ice-cyan/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan">
                <Bot size={18} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-light text-ice-cyan">
                    Ethermind Assistant
                  </h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-[10px] text-ice-cyan/40">
                  Powered by Gemini 3.5 Flash-Lite • Agency Guide
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-ice-cyan/40 hover:text-ice-cyan p-1.5 rounded-lg transition-colors"
              aria-label="Close chat"
              data-cursor="link"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3.5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "ai" && (
                  <div className="w-6 h-6 rounded-full bg-ice-cyan/10 border border-ice-cyan/20 flex items-center justify-center text-ice-cyan shrink-0 mt-0.5">
                    <Sparkles size={12} />
                  </div>
                )}

                <div
                  className={`max-w-[85%] p-3 sm:p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-ice-cyan text-carbon rounded-tr-none font-normal"
                      : "bg-void border border-ice-cyan/15 text-ice-cyan/90 rounded-tl-none font-light"
                  }`}
                >
                  <FormattedChatMessage text={msg.text} isUser={msg.sender === "user"} />
                </div>

                {msg.sender === "user" && (
                  <div className="w-6 h-6 rounded-full bg-ice-cyan/20 flex items-center justify-center text-ice-cyan shrink-0 mt-0.5">
                    <User size={12} />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 items-center text-ice-cyan/50 text-xs font-light">
                <RefreshCw size={12} className="animate-spin text-ice-cyan" />
                <span>Ethermind AI is formatting answer...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 sm:px-4 py-2 border-t border-ice-cyan/10 bg-void/40 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {suggestionChips.map((chip) => (
              <button
                key={chip}
                onClick={() => handleSend(chip)}
                className="text-[10px] whitespace-nowrap text-ice-cyan/60 hover:text-ice-cyan border border-ice-cyan/15 hover:border-ice-cyan/40 px-3 py-1 rounded-full bg-carbon/50 transition-all shrink-0"
                data-cursor="link"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-void border-t border-ice-cyan/15 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about AI, MVP, pricing..."
              className="flex-1 bg-carbon border border-ice-cyan/15 rounded-xl px-3.5 py-2 text-xs text-ice-cyan placeholder:text-ice-cyan/30 focus:outline-none focus:border-ice-cyan/40"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-9 h-9 rounded-xl bg-ice-cyan text-carbon flex items-center justify-center disabled:opacity-40 hover:bg-white transition-colors shrink-0"
              aria-label="Send message"
              data-cursor="link"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-carbon border border-ice-cyan/30 hover:border-ice-cyan flex items-center justify-center text-ice-cyan shadow-[0_0_20px_rgba(215,243,245,0.15)] hover:shadow-[0_0_30px_rgba(215,243,245,0.3)] transition-all duration-300"
        aria-label="Toggle AI Assistant"
        data-cursor="link"
      >
        <div className="absolute inset-0 rounded-full bg-ice-cyan/10 animate-ping opacity-30" />

        {isOpen ? (
          <X size={22} className="text-ice-cyan" />
        ) : (
          <MessageSquare size={22} className="text-ice-cyan group-hover:scale-110 transition-transform" />
        )}

        {!isOpen && (
          <span className="absolute top-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-400 border-2 border-carbon rounded-full" />
        )}
      </button>
    </div>
  );
}
