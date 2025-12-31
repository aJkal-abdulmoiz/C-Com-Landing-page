"use client";

import { motion, Variants } from "framer-motion";

export default function ClientSuccessSection() {
  const testimonials = [
    {
      quote:
        "The strategic framework helped me move from services to AI-powered products. I now have clarity on portfolio, go-to-market and how to measure success.",
      author: "Career Coach, Engineering Talent",
    },
    {
      quote:
        "What set this work apart was the focus on organizational readiness, not just technology. We built the skills and operating cadence we needed to scale.",
      author: "General Manager, CPG business",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
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
    <section id="success-stories" className="md:py-18 py-12 px-4 relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[75rem] mx-auto relative">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
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
                Testimonials
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Testimonials
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-center text-sm md:text-base mb-12 max-w-3xl mx-auto"
            style={{ color: 'var(--text-primary)', opacity: 0.7 }}
          >
            Leaders I have worked with achieve measurable results.
          </motion.p>

          {/* Testimonial Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-5 mb-12"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div key={idx} variants={cardVariants} className="testimonial-card">
                {/* Top background pattern with fade */}
                <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 testimonial-pattern" />
                  {/* Fade gradient from bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 testimonial-fade" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Teal Quote icon */}
                  <svg
                    className="w-8 h-8 text-[var(--primary-green)] mb-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>

                  <p className="text-sm md:text-base italic leading-relaxed mb-4" style={{ color: 'var(--text-primary)', opacity: 0.9 }}>
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <p className="text-xs md:text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    — {testimonial.author}
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
