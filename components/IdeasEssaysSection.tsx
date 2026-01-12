"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function IdeasEssaysSection() {
  const articles = [
    {
      image: "https://substackcdn.com/image/fetch/w_600,h_300,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0bd6d9b8-fccc-4968-b91a-e0c11e6731db_612x306.png",
      title: "Conversational AI needs Brain, not just a Catalog.",
      description: "Product catalogs were built for e-Commerce, not Converversations.",
      link: "https://substack.com/@farazsid/p-180267565",
    },
    {
      image: "https://substackcdn.com/image/fetch/w_600,h_300,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F68db954c-c38f-436d-8533-e8865c4cfe27_1536x488.png",
      title: "Are 'LLM Apps' the New App Store?",
      description: "The future of software could be apps that live inside conversations.",
      link: "https://substack.com/@farazsid/p-179617933",
    },
    {
      image: "https://substackcdn.com/image/fetch/w_600,h_300,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0c5d67a0-0da9-4fcb-aa66-3bebf21753c4_1456x816.png",
      title: "a-Com is the new e-Com. Here is what you should do.",
      description: "The next generation of commerce will be driven by conversations and contexts.",
      link: "https://substack.com/@farazsid/p-178233888",
    },
    {
      image: "https://substackcdn.com/image/fetch/$s_!gW0S!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa75fe2b6-058a-4015-a511-594243cce5f8_1456x816.png",
      title: "Beyond Keywords: How Moments of Meaning will shape Discovery in AI era.",
      description: "How Conversational AI is re-writing the playbook Brands use to win Search.",
      link: "https://farazsid.substack.com/p/beyond-keywords-why-moments-of-meaning",
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
    <section id="ideas-essays" className="md:py-12 py-8 px-4 relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[75rem] mx-auto relative">
        {/* Subtle background glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,188,189,0.1), transparent 70%)",
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
              <span className="text-[var(--primary-green)] text-sm font-medium uppercase">
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Ideas & Essays
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg mb-12 max-w-3xl mx-auto text-center"
            style={{ color: 'var(--text-primary)', opacity: 0.8 }}
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
            where I write regularly about Conversational Commerce and the evolving relationship between humans & agents.
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
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                className="ideas-essay-card group cursor-pointer"
              >
                {/* Image header */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-xl essay-card-border">
                  <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + idx * 0.1,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>

                {/* Content area */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary-green)] transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-primary)', opacity: 0.7 }}>
                    {article.description}
                  </p>

                  {/* Read link with arrow */}
                  <div className="flex items-center gap-2 text-[var(--primary-green)] text-sm font-medium">
                    <span>Read on Substack</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
