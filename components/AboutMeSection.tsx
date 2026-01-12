"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
      title: "Advisor to Business Leaders",
      description:
        "Guiding strategic and tactical decisions through shifts in eCommerce, media and digital capabilities.",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Coach to Functional Teams",
      description:
        "Translating technical complexity into executional clarity for middle managers.",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="22 4 12 14.01 9 11.01" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Builder of durable advantage",
      description:
        "Building sustainable advantage through systematic readiness, not demos and pilots.",
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
    <section id="about" className="pt-6 pb-32 px-4 relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6,188,189,0.12), transparent 70%)",
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
            <span className="text-[var(--primary-green)] text-sm font-medium uppercase">
              About Me
            </span>
          </div>
        </motion.div>

        {/* Main content - Grid layout */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-12 items-start mb-12">
          {/* Left: Circular Image + LinkedIn */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto lg:mx-0 flex flex-col items-center gap-4"
          >
            <div className="relative w-64 h-64 lg:w-68 lg:h-68">
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
                  background: "radial-gradient(circle, rgba(6,188,189,0.3), transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
            </div>
            <div className="text-center">
      <div className="flex items-center justify-center gap-2">
          {/* Name */}
          <p
            className="text-base font-semibold leading-none"
            style={{ color: "var(--text-primary)" }}
          >
            Faraz Siddiqui
          </p>
        {/* LinkedIn Icon (smaller) */}
        <Link
          href="https://www.linkedin.com/in/faraz-siddiqui-4189692/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-7 h-7 rounded-sm transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: "#0077B5" }}
          aria-label="Connect on LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </Link>
  </div>

  <p className="text-sm mt-1" style={{ color: "var(--text-primary)", opacity: 0.75 }}>
    Growth &amp; Scale Operator | Global Expertise
  </p>
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
            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
            I build for the shift through experience, not theory.
            </h3>

            <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
              <p>
              <span className="font-bold">I work with leadership teams to turn conversational AI into a real capability.</span> That means moving past demos and pilots, and making AI create value. Tools alone don’t create advantage;  operating models, incentives and decision-making do. 
              </p>
              <p>
              <span className="font-bold">I focus on organizational, strategic and cultural readiness.</span> My background sits at the intersection of business outcomes, technology and human behavior. I’ve seen what happens when these three align, and when they don’t.
              </p>
              <p>
              <span className="font-bold">The leaders I work with aren’t looking to experiment for the sake of it.</span> They want clarity, direction, and durable advantage. 
              </p>
              <p>
              <span className="font-bold">Earlier in my career,</span> I scaled a tech startup. And later built eCommerce into a true competitive advantage inside a large, complex organization. 
              </p>
              <p className="font-medium" style={{ color: 'var(--text-primary)', opacity: 1 }}>
              <span className="font-bold">Today, I’m focused on helping businesses win conversational interfaces</span> as the primary way customers discover, decide and engage. 
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

              <h4 className="text-base md:text-lg font-bold mb-2 leading-tight" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h4>

              <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.7 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
