"use client";

import { motion, Variants } from "framer-motion";

export default function FrameworkSection() {
  const steps = [
    {
      number: "1",
      title: "Discovery",
      description: "Evaluate maturity and capability gaps.",
    },
    {
      number: "2",
      title: "Define",
      description: "Define outcomes, prioritize use cases and create a roadmap.",
    },
    {
      number: "3",
      title: "Build",
      description: "Deploy tools, develop skills and establish operational excellence.",
    },
    {
      number: "4",
      title: "Optimize",
      description: "Measure impact and continuously improve performance.",
    },
  ];

  const valueChainBlocks = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Go-to-Market",
      description: "Turning AI into revenue, not just reach.",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="7" width="20" height="14" rx="2" strokeWidth="1.6" />
          <path d="M16 3H8v4h8V3z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Media",
      description: "Rebuilding paid, owned & earned media strategy for AI discovery.",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="14,2 14,8 20,8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="16" y1="13" x2="8" y2="13" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="16" y1="17" x2="8" y2="17" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="10" y1="9" x2="8" y2="9" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
      title: "Content",
      description: "Scaling content from creation to conversion.",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Innovation",
      description: "Experimenting for rapid product and pricing models.",
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.85,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const glowVariants: Variants = {
    hidden: { 
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: [0, 1, 1, 0.6],
      transition: {
        duration: 1.8,
        ease: [0.25, 0.1, 0.25, 1],
        opacity: {
          duration: 1.8,
          times: [0, 0.2, 0.7, 1],
        }
      },
    },
  };

  const getCardVariants = (idx: number): Variants => {
    const directions = ["left", "bottom", "bottom", "right"];
    const direction = directions[idx];
    
    const initial = {
      left: { opacity: 0, x: -60, y: 0 },
      right: { opacity: 0, x: 60, y: 0 },
      bottom: { opacity: 0, x: 0, y: 60 },
    };

    return {
      hidden: initial[direction as keyof typeof initial],
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
    <section id="framework" className="py-20 px-4 relative overflow-hidden bg-[var(--background)]">
      <div className="max-w-[75rem] mx-auto relative">
        {/* Background glow effects */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,188,189,0.15), transparent 70%)",
            filter: "blur(80px)",
            opacity: 0.6,
          }}
        />

        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center px-6 py-2 rounded-full border border-[var(--primary-green)]/30 bg-[var(--primary-green)]/5">
              <span className="text-[var(--primary-green)] text-sm font-medium uppercase">
                Strategic Approach
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
          >
            Conversational AI Readiness Framework
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center text-gray-400 text-base md:text-lg mb-16 max-w-3xl mx-auto"
          >
            Conversational Commerce opportunity isn&apos;t adopting AI faster, it is adopting it with intention. This framework helps assess current state and embark with a purpose.
          </motion.p>

          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto mb-24">
            {/* Horizontal Line - Base (dark) */}
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="absolute top-[60px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#222] to-transparent origin-left"
            />

            {/* Horizontal Line - Glow Layer (teal) */}
            <motion.div
              variants={glowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="absolute top-[60px] left-0 right-0 h-[3px] origin-left"
              style={{
                background: "linear-gradient(to right, transparent, rgba(6,188,189,0.8) 20%, rgba(6,188,189,0.8) 80%, transparent)",
                filter: "blur(4px)",
              }}
            />

            {/* Additional sharp glow line */}
            <motion.div
              variants={glowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="absolute top-[59px] left-0 right-0 h-[1px] origin-left"
              style={{
                background: "linear-gradient(to right, transparent, rgba(6,188,189,1) 30%, rgba(6,188,189,1) 70%, transparent)",
              }}
            />

            {/* Steps Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
            >
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center"
                >
                  {/* Vertical connector line */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 + idx * 0.3 }}
                    className="w-[2px] h-8 bg-gradient-to-b from-[#222] to-transparent origin-top"
                  />

                  {/* Number Circle */}
                  <div className="relative mb-6 group cursor-pointer">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 rounded-full bg-[var(--primary-green)]/10 border-2 border-[var(--primary-green)]/30 flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:border-[var(--primary-green)] group-hover:bg-[var(--primary-green)]/15"
                    >
                      <span className="text-2xl font-bold text-[var(--primary-green)]">
                        {step.number}
                      </span>
                    </motion.div>
                    {/* Glow effect on hover */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(6,188,189,0.5), transparent 70%)",
                        filter: "blur(20px)",
                        zIndex: -1,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* AI Across the Value Chain Section */}
          <div className="relative mt-20">
            {/* Subtle glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[200px] -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                background: "var(--primary-green)",
                filter: "blur(140px)",
                opacity: 0.12,
              }}
            />

            {/* Heading */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-center text-white mb-8"
            >
              Areas of focus across the Value Chain
            </motion.h3>

            {/* Four cards grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueChainBlocks.map((block, idx) => (
                <motion.div
                  key={block.title}
                  variants={getCardVariants(idx)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="c-com-paradigm-card group"
                >
                  {/* Icon circle */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + idx * 0.1,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-green)]/10 border border-[var(--primary-green)]/20 text-[var(--primary-green)] mb-4 group-hover:bg-[var(--primary-green)]/20 transition-colors"
                  >
                    {block.icon}
                  </motion.div>

                  <h4 className="text-lg md:text-xl font-bold text-white mb-3">
                    {block.title}
                  </h4>

                  <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
                    {block.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
