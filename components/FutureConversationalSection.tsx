"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, useEffect, useState, useRef } from "react";
import Script from "next/script";

type Step = {
  icon: ReactNode;
  label: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: (
      <svg
        className="w-5 h-5 text-[var(--primary-green)]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" strokeWidth="1.6" />
        <path d="M7 9h2M11 9h2M15 9h2M7 13h2M11 13h2M15 13h2" strokeWidth="1.6" />
      </svg>
    ),
    label: "Search → Prompts",
    description: "From queries to natural language intent.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-[var(--primary-green)]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <rect x="6" y="3" width="12" height="18" rx="2" ry="2" strokeWidth="1.6" />
        <path d="M10 7h4M10 11h4M10 15h2" strokeWidth="1.6" />
      </svg>
    ),
    label: "Keywords → Contexts",
    description: "From isolated terms to shared conversational context.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-[var(--primary-green)]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <rect x="4" y="4" width="16" height="12" rx="3" ry="3" strokeWidth="1.6" />
        <path d="M8 18h8" strokeWidth="1.6" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
    label: "Pages → Conversations",
    description: "From static pages to AI-mediated dialogue.",
  },
];

export default function FutureConversationalSection() {
  const [shouldLoadHalo, setShouldLoadHalo] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadHalo(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="future-conversational"
        className="pt-6 pb-20 px-4 relative overflow-hidden"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="max-w-[75rem] mx-auto relative z-10">
          {/* top pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center px-6 py-2 rounded-full border border-[var(--primary-green)]/30 bg-[var(--primary-green)]/5">
              <span className="text-[var(--primary-green)] text-sm font-medium uppercase">
                The Paradigm Shift
              </span>
            </div>
          </motion.div>

          {/* title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10"
            style={{ color: 'var(--text-primary)' }}
          >
            The Future is Conversational
          </motion.h2>

          {/* copy (left) + animated voice visual (right) */}
          <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-12 items-center mb-12">
            {/* Left: cleaner paragraph layout */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-1 mt-[-20px]"
            >
              <motion.p
                variants={textVariants}
                className="text-[15px] md:text-base leading-[1.7]"
                style={{ color: 'var(--text-primary)', opacity: 0.85 }}
              >
                <span className="font-bold">eCommerce is undergoing a seismic shift</span> in the way people discover, compare and buy products. What once began as a Google search moved to social media scrolling, and is now entering a new phase defined by conversational interfaces.
              </motion.p>
              <motion.p
                variants={textVariants}
                className="text-[15px] md:text-base leading-[1.7]"
                style={{ color: 'var(--text-primary)', opacity: 0.85 }}
              >
                <span className="font-bold">Platforms like ChatGPT have evolved</span> into a search engine, a product discovery platform and a check out experience - all inside a single conversation. 
              </motion.p>
              <motion.p
                variants={textVariants}
                className="text-[15px] md:text-base leading-[1.7]"
                style={{ color: 'var(--text-primary)', opacity: 0.85 }}
              >
                <span className="font-bold">This changes the rules for brands</span> to stay visible, relevant and competitive.
              </motion.p>
            </motion.div>

            {/* Right: animated conversation box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden md:block"
            >
              <div className="relative rounded-3xl overflow-hidden h-54 c-com-highlight-card">
                {/* Voice wave animation */}
                <div className="relative flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-[var(--primary-green)] rounded-full animate-voice-wave"
                      style={{
                        height: `${20 + i * 8}px`,
                        animationDelay: `${i * 0.15}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Conversation bubble */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative rounded-2xl px-4 py-3 max-w-[280px]"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
                    &quot;How do I integrate Conversational AI into my product roadmap?&quot;
                  </p>
                </motion.div>

                {/* Small typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="mt-4 flex gap-1"
                >
                  <div className="w-2 h-2 rounded-full bg-[var(--primary-green)]/60 animate-pulse"></div>
                  <div
                    className="w-2 h-2 rounded-full bg-[var(--primary-green)]/60 animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-[var(--primary-green)]/60 animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* gradient step cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.label}
                variants={cardVariants}
                className="c-com-paradigm-card"
              >
                <div className="relative flex flex-col items-start gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.15 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary-green)]/10"
                  >
                    {step.icon}
                  </motion.div>
                  <p className="text-base md:text-lg font-bold mb-2 leading-tight" style={{ color: 'var(--text-primary)' }}>
                    {step.label}
                  </p>
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Load Halo chat widget when section is in view */}
      {shouldLoadHalo && (
        <script
        src="https://app.noodleseed.com/embed.js"
        data-share-code="E2CQHYPC"
        async
      ></script>
      )}
    </>
  );
}
