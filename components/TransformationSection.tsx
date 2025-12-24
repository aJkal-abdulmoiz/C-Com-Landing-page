"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Conversational AI readiness?",
    answer:
      "Conversational AI readiness is the combination of strategy, capabilities, and governance required for your organization to adopt, scale, and trust AI-driven conversations across products, support, and internal workflows.",
  },
  {
    question: "Why isn’t experimentation with a few chatbots enough?",
    answer:
      "Isolated pilots rarely change how your organization actually operates. Readiness means linking conversational use cases to business outcomes, roles, and decision-making, so experiments can scale into durable capabilities.",
  },
  {
    question: "Who is this work best suited for?",
    answer:
      "Founders, executives, and leadership teams who want more than demos—they want clarity on where Conversational AI creates leverage, how to govern it, and how to align teams around a long-term roadmap.",
  },
  {
    question: "Do I need a dedicated AI team before starting?",
    answer:
      "No. The work often starts by clarifying ownership, defining initial responsibilities, and identifying the minimum capabilities you need. From there, you can intentionally grow roles, skills, and structures as adoption matures.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 px-4 border-t border-[#192f24] relative overflow-hidden">
      {/* soft background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[260px] -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          background: "var(--primary-green)",
          filter: "blur(160px)",
          opacity: 0.12,
        }}
      ></div>

      <div className="max-w-[75rem] mx-auto relative z-10">
        {/* Top pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-6 py-2 rounded-full border border-[var(--primary-green)]/30 bg-[var(--primary-green)]/5">
            <span className="text-[var(--primary-green)] text-xs font-semibold tracking-[0.18em] uppercase">
              FAQs
            </span>
          </div>
        </div>

        {/* Heading + subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Here are some of the most common questions leaders ask about building Conversational AI readiness.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <button
                key={item.question}
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full text-left"
              >
                <div className="relative bg-[#050508]/95 border border-[#222] rounded-2xl px-6 md:px-8 py-5 md:py-6 overflow-hidden transition-colors duration-200 hover:border-[var(--primary-green)]/40">
                  {/* subtle texture */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.22]"
                    style={{
                      backgroundImage:
                        "url('/bg-pattern.webp')",
                      backgroundRepeat: "repeat",
                      backgroundPosition: "left top",
                      backgroundSize: "160px 160px",
                    }}
                  ></div>

                  <div className="relative flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-sm md:text-base font-semibold text-white mb-2">
                        {item.question}
                      </h3>
                      {isOpen && (
                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                          {item.answer}
                        </p>
                      )}
                    </div>

                    {/* +/- icon */}
                    <div className="mt-1 flex-shrink-0">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                        {isOpen ? "–" : "+"}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
