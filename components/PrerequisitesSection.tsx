"use client";

import { motion, Variants } from "framer-motion";

export default function PrerequisitesSection() {
  const prerequisites = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="3" strokeWidth="1.6" />
          <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
      title: "Strategic Readiness",
      description: "Conversational AI cannot exist as isolated experiments. It must align with business strategy.",
      points: [
        "Leaders must bring clarity where AI creates leverage and where it introduces risk.",
        "This means understanding competitive dynamics and identifying high value use cases for conversational capabilities.",
      ],
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="9" cy="7" r="4" strokeWidth="1.6" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
      title: "Organizational Readiness",
      description: "New interfaces demand new skills. Teams must adapt how they build, govern, and trust AI systems.",
      points: [
        "Organizations need structured upskilling programs, new role definitions, and cross-functional collaboration models to bridge technical and business domains.",
      ],
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
    <section id="prerequisites" className="py-20 px-4 relative overflow-hidden bg-[var(--background)]">
      <div className="max-w-[75rem] mx-auto relative">
        {/* Bottom-left highlight behind cards */}
        <div
          className="pointer-events-none absolute -bottom-12 -left-12 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 70%, rgba(6,188,189,0.45), transparent 60%), radial-gradient(circle at 70% 30%, rgba(6,188,189,0.25), transparent 65%)",
            filter: "blur(75px)",
            opacity: 0.85,
          }}
        />

        {/* Top-right highlight behind cards */}
        <div
          className="pointer-events-none absolute -top-12 -right-12 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(6,188,189,0.5), transparent 60%), radial-gradient(circle at 30% 70%, rgba(6,188,189,0.25), transparent 65%)",
            filter: "blur(85px)",
            opacity: 0.85,
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
                Foundational Requirements
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          >
            Pre-requisites to make things Conversational.
          </motion.h2>

          {/* Two-column card grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-6 lg:gap-8"
          >
            {prerequisites.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="c-com-prerequisite-card"
              >
                {/* TOP AREA WITH FULL-WIDTH BACKGROUND IMAGE */}
                <div className="relative h-48 w-full overflow-hidden">
                  {/* Image pattern */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "url('/bg-pattern.webp')",
                      backgroundRepeat: "repeat",
                      backgroundPosition: "left top",
                      backgroundSize: "160px 160px",
                      opacity: 0.6,
                    }}
                  />

                  {/* Bottom fade to card background */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[rgba(10,9,10,0.72)]" />

                  {/* Content overlay */}
                  <div className="relative h-full w-full px-5 py-4 flex flex-col justify-end">
                    {/* Icon circle */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-green)]/10 border border-[var(--primary-green)]/20 text-[var(--primary-green)] mb-3">
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* LOWER CONTENT (inside card body) */}
                <div className="relative z-10 flex flex-col h-full px-5 pb-5">
                  {/* Divider with label */}
                  <div className="flex items-center mb-4">
                    <div className="h-[1px] bg-[#222] flex-1" />
                    <span className="px-3 text-xs text-gray-600 uppercase tracking-wider">
                      Key Points
                    </span>
                    <div className="h-[1px] bg-[#222] flex-1" />
                  </div>

                  {/* Description */}
                  <p className="text-white text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Points list */}
                  <div className="space-y-3 mb-6 flex-1">
                    {item.points.map((point, pIdx) => (
                      <motion.div
                        key={pIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + pIdx * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-[var(--primary-green)]/40 bg-[var(--primary-green)]/5 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-[var(--primary-green)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>

                        <div className="flex-1">
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {point}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Button */}
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="c-com-solution-button"
                  >
                    Let&apos;s Start
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
