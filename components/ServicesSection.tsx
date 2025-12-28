"use client";

import { motion, Variants } from "framer-motion";

export default function ServicesSection() {
  const solutions = [
    {
      title: "How I partner with Business Leaders:",
      subtitle:
        "Strategic readiness across conversational AI, organizational alignment, and competitive positioning.",
      features: [
        {
          title: "Executive Discussions",
          desc: "Align vision, priorities, and investment decisions.",
        },
        {
          title: "Organizational Readiness Assessment",
          desc: "Identify capability gaps across people, process, and technology.",
        },
        {
          title: "Strategic Framework",
          desc: "Define vision, prioritize use cases, and align with business outcomes.",
        },
        {
          title: "Ongoing Cadence",
          desc: "Guide implementation, iteration, and scale.",
        },
      ],
    },
    {
      title: "How I support Functional Teams:",
      subtitle:
        "Building conversational capabilities at scale with structure, governance, and adoption.",
      features: [
        {
          title: "Capability Building",
          desc: "Develop skills, operating models, and execution discipline.",
        },
        {
          title: "Change & Adoption",
          desc: "Drive cultural adoption, workflow integration, and behavior change.",
        },
        {
          title: "AI Visibility (GEO, AEO and AIO)",
          desc: "Ensure presence across AI-powered discovery channels.",
        },
        {
          title: "Governance & Risk",
          desc: "Establish guardrails early that evolve with scale.",
        },
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
    <section id="services" className="pt-12 pb-20 px-4 relative overflow-hidden">
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
 

          {/* Cards Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-6 lg:gap-8"
          >
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="c-com-solution-card-compact"
              >
                {/* TOP AREA WITH FULL-WIDTH BACKGROUND IMAGE */}
                <div className="relative h-72 w-full overflow-hidden">
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
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[rgba(11,15,13,1)]" />

                  {/* Content overlay */}
                  <div className="relative h-full w-full px-5 py-4 flex flex-col justify-end">
                    <h3 className="text-3xl md:text-[34px] font-bold text-gray-100 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-[16px] leading-relaxed">
                      {solution.subtitle}
                    </p>
                  </div>
                </div>

                {/* LOWER CONTENT (inside card body) */}
                <div className="relative z-10 flex flex-col h-full px-5 pb-5">
                  {/* Divider with Features label */}
                  <div className="flex items-center mb-4">
                    <div className="h-[1px] bg-[#222] flex-1" />
                    <span className="px-3 text-xs text-gray-600 uppercase tracking-wider">
                      What&apos;s included
                    </span>
                    <div className="h-[1px] bg-[#222] flex-1" />
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-6 flex-1">
                    {solution.features.map((feature, fIdx) => (
                      <motion.div
                        key={fIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + fIdx * 0.1 }}
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
                          <p className="text-white text-sm leading-relaxed">
                            <span className="font-semibold">{feature.title}:</span>{" "}
                            <span className="text-gray-400">{feature.desc}</span>
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
                    Find out more
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
