"use client";

import { motion, Variants } from "framer-motion";

export default function PitfallsSection() {
  const pitfalls = [
    {
      title: "Underestimating Change Management",
      description:
        "AI reshapes decisions, workflows and value creation. Ignoring change management means systems go unused.",
    },
    {
      title: "Mistaking Speed for Strategy",
      description:
        "Rushing to 'keep up' produces activities, not outcomes. Speed without purpose can make advantage disappear.",
    },
    {
      title: "Deferring Governance Until Failure",
      description:
        "Late guardrails increase risk and slow progress. Governance must evolve alongside capability.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="pitfalls" className="pb-20 px-4 relative overflow-hidden bg-[var(--background)]">
      <div className="max-w-[75rem] mx-auto relative">
        {/* Background glow effects - subtle to blend with above section */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,188,189,0.08), transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.5,
          }}
        />

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-left text-white mb-6"
            >
              Common Pitfalls To Avoid
            </motion.h3>
        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Title and Body - No badge for seamless integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-12 max-w-5xl mr-auto"
          >
            <div className="flex md:justify-between md:items-start items-center justify-center md:flex-row flex-col-reverse">
            <div className="space-y-4 text-base md:text-lg text-gray-300 text-left leading-relaxed">
              <p>Competitive pressure can push organizations to adopt AI tools quickly.</p>
              <p>When business outcomes are not defined, AI becomes an experiment and soon changes into wasted effort, stalled adoption and unrealized promise.</p> 
            </div>
     {/* Warning Icon - centered with URGENT GLOW */}
     <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-12 md:-mt-[46px]"
          >
            <div className="relative">
              {/* Outer pulsing ring */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full border-2 border-[var(--primary-green)]"
                style={{
                  filter: "blur(2px)",
                }}
              />

              {/* Icon with breathing animation */}
              <motion.svg
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 md:w-26 md:h-26 relative z-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <motion.path
                  d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[var(--primary-green)]"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg>

              {/* Primary glow - pulsing */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(6,188,189,0.6), transparent 60%)",
                  filter: "blur(25px)",
                  zIndex: -1,
                }}
              />

              {/* Secondary glow - offset pulse for urgency */}
              <motion.div
                animate={{
                  scale: [1.2, 1.5, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(6,188,189,0.5), transparent 70%)",
                  filter: "blur(35px)",
                  zIndex: -2,
                }}
              />

              {/* Fast flash for urgency */}
              <motion.div
                animate={{
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(6,188,189,0.8), transparent 50%)",
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
              />
            </div>
          </motion.div>
            </div>
          </motion.div>

     

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
          >
            {pitfalls.map((pitfall, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="pitfall-card relative"
              >
                {/* Left gradient border */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-lg overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, rgba(6,188,189,0.8) 30%, rgba(6,188,189,0.8) 70%, transparent)",
                    }}
                  />
                </div>

                {/* Right gradient border */}
                <div className="absolute right-0 top-0 bottom-0 w-[4px] rounded-r-lg overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, rgba(6,188,189,0.8) 30%, rgba(6,188,189,0.8) 70%, transparent)",
                    }}
                  />
                </div>

                {/* Card content */}
                <div className="relative z-10 h-full flex flex-col p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {pitfall.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {pitfall.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
