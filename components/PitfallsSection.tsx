"use client";

import { motion, Variants } from "framer-motion";

export default function PitfallsSection() {
  const pitfalls = [
    {
      title: "Underestimating Change Management",
      description:
        "Technical implementation is easy. Cultural adoption, workflow integration and behavior change require dedicated focus and sustained leadership commitment.",
    },
    {
      title: "Ignoring Governance Until it's too Late",
      description:
        "Waiting to establish guardrails until after deployment creates risk and slows momentum. Build governance frameworks early, even if they evolve over time.",
    },
    {
      title: "Treating AI as IT's Problem",
      description:
        "Conversational AI strategy requires cross-functional leadership. Cross functional units must all have voice and accountability in shaping adoption.",
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
    <section id="pitfalls" className="py-20 px-4 relative overflow-hidden bg-[var(--background)]">
      <div className="max-w-[75rem] mx-auto relative">
        {/* Background glow effects */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,188,189,0.1), transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.5,
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
              <span className="text-[var(--primary-green)] text-sm font-medium">
                Critical Insights
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
          >
            Common Pitfalls to Avoid
          </motion.h2>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
              The Technology-First Trap
            </h3>
            <div className="max-w-4xl mx-auto space-y-3 text-center">
              <p className="text-base text-gray-300">
                Many organizations rush to implement latest AI models without defining clear business outcomes.
              </p>
              <p className="text-base text-gray-300">
                Technology becomes the strategy rather than serving it.
              </p>
              <p className="text-base text-gray-300">
                Successful deployments start with the problem, not the solution. And focus on delivering measurable value to specific user segments.
              </p>
            </div>
          </motion.div>

          {/* Warning Icon - centered with URGENT GLOW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mb-12"
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
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 md:w-20 md:h-20 relative z-10"
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

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
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
