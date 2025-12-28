"use client";

import { motion, Variants } from "framer-motion";

export default function IdeasEssaysSection() {
  const articles = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Conversational AI needs Brain, not just a Catalog.",
      description: "Product catalogs were built for e-Commerce, not Converversations.",
      link: "https://substack.com/@farazsid/p-180267565",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Are 'LLM Apps' the New App Store?",
      description: "The future of software could be apps that live inside conversations.",
      link: "https://substack.com/@farazsid/p-179617933",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "a-Com is the new e-Com. Here is what you should do.",
      description: "The next generation of commerce will be driven by conversations and contexts.",
      link: "https://substack.com/@farazsid/p-178233888",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="ideas-essays" className="md:py-12 py-8 px-4 relative overflow-hidden bg-[var(--background)]">
      <div className="max-w-[75rem] mx-auto relative">
        {/* Subtle background glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
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
                Thought Leadership
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white text-center"
          >
            Ideas, Essays & Field Notes
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-gray-300 mb-12 max-w-3xl mx-auto text-center"
          >
            Follow me at{" "}
            <a
              href="https://farazsid.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary-green)] hover:underline font-medium"
            >
              farazsid.substack.com
            </a>{" "}
            where I write regularly about Conversational AI, leadership, and the evolving relationship between humans and intelligent systems.
          </motion.p>

          {/* Article Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {articles.map((article, idx) => (
              <motion.a
                key={idx}
                href={article.link}
                variants={cardVariants}
                className="ideas-essay-card"
              >
                {/* Icon header with gradient background */}
                <div className="relative h-24 bg-gradient-to-br from-[var(--primary-green)]/10 to-transparent rounded-t-xl flex items-center justify-center border-b border-gray-800/50">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + idx * 0.1,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-green)]/10 border border-[var(--primary-green)]/30 text-[var(--primary-green)]"
                  >
                    {article.icon}
                  </motion.div>
                </div>

                {/* Content area */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {article.description}
                  </p>

                  {/* Read link with arrow */}
                  <div className="flex items-center gap-2 text-[var(--primary-green)] text-sm font-medium">
                    <span>Read on Substack</span>
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
