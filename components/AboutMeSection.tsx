"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function AboutMeSection() {
  const highlights = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="9" cy="7" r="4" strokeWidth="1.6" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
      title: "Advisor to Startups & Leadership Teams",
      description:
        "Guiding through strategic decisions at the intersection of AI capability and business value",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Speaker & Writer on Conversational AI",
      description:
        "Translating technical complexity into strategic clarity for executive audiences",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="22 4 12 14.01 9 11.01" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Focused on Long-Term Value",
      description:
        "Building sustainable advantage through systematic readiness, not short-term demonstrations",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden bg-[var(--background)]">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,188,189,0.12), transparent 70%)",
          filter: "blur(100px)",
          opacity: 0.6,
        }}
      />

      <div className="max-w-[75rem] mx-auto relative z-10">
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
              About Me
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          About Me
        </motion.h2> */}

        {/* Main content - Grid layout */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-12 items-start mb-12">
          {/* Left: Circular Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative w-64 h-64 lg:w-72 lg:h-72">
              {/* Circular image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-[var(--primary-green)]/20">
                <Image
                  src="/faraz-siddiqui.jpeg"
                  alt="Faraz Siddiqui Profile"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow effect */}
              <div
                className="absolute -inset-2 rounded-full -z-10"
                style={{
                  background:
                    "radial-gradient(circle, rgba(6,188,189,0.3), transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Building Readiness, Not Just Hype
            </h3>

            <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
              <p>
                I work with founders, executives, and leadership teams to help them understand, adopt, and govern Conversational AI responsibly and strategically.
              </p>
              <p>
                My experience is at intersection of <b>Tech, </b><b>Business</b> and <b>Human behavior</b>.
              </p>
              <p>
                I focus less on hype and more on organizational, strategic, and cultural readiness.
              </p>
              <p className="text-white font-medium">
                The leaders I work with want more than demos and pilot projects. They want frameworks, governance and sustainable competitive advantage through conversational capabilities.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Three highlight cards - Compact */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-5"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="about-highlight-card-dark"
            >
              {/* Icon with square background */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-green)]/10 border border-[var(--primary-green)]/20 text-[var(--primary-green)] mb-4">
                {item.icon}
              </div>

              <h4 className="text-base md:text-lg font-bold text-white mb-2 leading-tight">
                {item.title}
              </h4>

              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
