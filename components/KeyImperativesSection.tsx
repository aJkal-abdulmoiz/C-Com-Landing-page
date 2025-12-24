"use client";

import { motion, Variants } from "framer-motion";

export default function KeyImperativesSection() {
  const imperatives = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="9" cy="7" r="4" strokeWidth="1.6" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
      title: "Be /Present",
      description:
        "Convert Brand digital footprint to be conversational and be present inside LLMs.",
      direction: "left" as const,
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8" strokeWidth="1.6" />
          <path d="M21 21l-4.35-4.35" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
      title: "Be /Discovered",
      description:
        "Win Generative Engine Optimization (GEO) on top of SEO. Master playbook to ensure visibility in AI-powered discovery.",
      direction: "bottom" as const,
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="3" strokeWidth="1.6" />
          <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
      title: "Be /Connected",
      description:
        "Develop strategies to actively engage. Act proactively and reactively to user needs in conversational contexts.",
      direction: "right" as const,
    },
  ];

  const getCardVariants = (direction: "left" | "right" | "bottom"): Variants => {
    const initial = {
      left: { opacity: 0, x: -60, y: 0 },
      right: { opacity: 0, x: 60, y: 0 },
      bottom: { opacity: 0, x: 0, y: 60 },
    };

    return {
      hidden: initial[direction],
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
    };
  };

  return (
    <section
      id="key-imperatives"
      className="py-20 px-4 relative overflow-hidden bg-[var(--background)]"
    >
      {/* subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[200px] -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          background: "var(--primary-green)",
          filter: "blur(140px)",
          opacity: 0.12,
        }}
      />

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
            <span className="text-[var(--primary-green)] text-xs md:text-sm font-medium tracking-[0.18em] uppercase">
              Strategic Imperatives
            </span>
          </div>
        </motion.div>

        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4"
        >
          Key Imperatives to Embrace
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base"
        >
          Three foundational shifts every organization must internalize to lead in the conversational era.
        </motion.p>

        {/* three cards in staggered grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {imperatives.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={getCardVariants(item.direction)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="c-com-paradigm-card group"
              style={{
                marginTop: idx === 1 ? "2rem" : "0", // middle card offset down
              }}
            >
              {/* Icon circle */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + idx * 0.1,
                  ease: [0.34, 1.56, 0.64, 1] // Spring-like ease
                }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-green)]/10 border border-[var(--primary-green)]/20 text-[var(--primary-green)] mb-4 group-hover:bg-[var(--primary-green)]/20 transition-colors"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
