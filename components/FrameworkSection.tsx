"use client";

import { motion, Variants } from "framer-motion";

export default function FrameworkSection() {
  const steps = [
    {
      number: "1",
      title: "Discovery & Assessment",
      description:
        "Evaluate current AI maturity, identify capability gaps, and benchmark against industry leaders",
    },
    {
      number: "2",
      title: "Strategy Development",
      description:
        "Define vision, prioritize use cases, and create roadmap aligned with business objectives",
    },
    {
      number: "3",
      title: "Capability Building",
      description:
        "Develop organizational skills, implement governance, and establish operational excellence",
    },
    {
      number: "4",
      title: "Scale & Optimization",
      description:
        "Deploy across the enterprise, measure impact, and continuously improve performance",
    },
  ];

  // Animation variants - SLOWER durations
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

  // Glow variants that follow the line
  const glowVariants: Variants = {
    hidden: { 
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: [0, 1, 1, 0.6],  // Fade in bright then settle
      transition: {
        duration: 1.8,
        ease: [0.25, 0.1, 0.25, 1],
        opacity: {
          duration: 1.8,
          times: [0, 0.2, 0.7, 1],  // Control opacity keyframes
        }
      },
    },
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
              <span className="text-[var(--primary-green)] text-sm font-medium">
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
            Strategic Readiness Framework.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center text-gray-400 text-base md:text-lg mb-16 max-w-3xl mx-auto"
          >
            This framework helps organizations assess current state and plan next steps.
          </motion.p>

          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto">
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

                  {/* Number Circle - ONLY HOVER HERE */}
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

                  {/* Content - NO HOVER */}
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
        </div>
      </div>
    </section>
  );
}
