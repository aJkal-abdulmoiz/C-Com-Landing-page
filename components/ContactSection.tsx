"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    details: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="pt-12 pb-20 px-4 relative overflow-hidden bg-[var(--background)]">
      <div className="max-w-3xl mx-auto relative">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,188,189,0.1), transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.5,
          }}
        />

        <div className="relative z-10">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center px-5 py-2 rounded-full border border-[var(--primary-green)]/30 bg-[var(--primary-green)]/5">
              <span className="text-[var(--primary-green)] text-sm font-medium">
                Get In Touch
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
          >
            Let&apos;s Talk
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center text-gray-400 text-sm md:text-base mb-12 max-w-2xl mx-auto"
          >
           Thinking about Conversational Commerce and what comes next? Let&apos;s connect. I work with leaders who want clarity, direction and readiness beyond experimentation.
          </motion.p>

          {/* Form Card */}
          {!isSubmitted ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="border border-[#222] bg-[rgba(10,9,10,0.72)] backdrop-blur-md rounded-2xl p-8 relative overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First Name */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-white -mb-2">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/95 border border-gray-300 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--primary-green)] focus:bg-white focus:ring-4 focus:ring-[var(--primary-green)]/10 transition-all"
                    placeholder="John"
                  />
                </motion.div>

                {/* Last Name */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-white -mb-2">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/95 border border-gray-300 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--primary-green)] focus:bg-white focus:ring-4 focus:ring-[var(--primary-green)]/10 transition-all"
                    placeholder="Doe"
                  />
                </motion.div>

                {/* Company Name */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-white -mb-2">
                    Company name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/95 border border-gray-300 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--primary-green)] focus:bg-white focus:ring-4 focus:ring-[var(--primary-green)]/10 transition-all"
                    placeholder="Your company"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-white -mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/95 border border-gray-300 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--primary-green)] focus:bg-white focus:ring-4 focus:ring-[var(--primary-green)]/10 transition-all"
                    placeholder="name@business.com"
                  />
                  <p className="text-xs text-red-500 mt-1.5">Please provide your business email</p>
                </motion.div>

                {/* Mobile Phone - NOW OPTIONAL */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-white -mb-2">
                    Mobile phone number <span className="text-gray-500 text-xs">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/95 border border-gray-300 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--primary-green)] focus:bg-white focus:ring-4 focus:ring-[var(--primary-green)]/10 transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </motion.div>

                {/* More Details */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-white mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/95 border border-gray-300 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--primary-green)] focus:bg-white focus:ring-4 focus:ring-[var(--primary-green)]/10 transition-all resize-none"
                    placeholder="Tell me about your Conversational AI challenge..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    className="w-full px-5 py-4.5 cursor-pointer bg-gradient-to-br from-[var(--primary-green)] to-[#076b6d] text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(6,188,189,0.3)]"
                  >
                    Start the Conversation
                  </button>
                </motion.div>
              </form>
            </motion.div>
          ) : (
            // Success State
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="border border-[#222] bg-[rgba(10,9,10,0.72)] backdrop-blur-md rounded-2xl p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--primary-green)]/10 border-2 border-[var(--primary-green)] mb-6"
              >
                <svg className="w-10 h-10 text-[var(--primary-green)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    d="M5 13l4 4L19 7"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Thank You!</h3>
              <p className="text-gray-400 text-sm md:text-base mb-6">
                Your message has been received. I&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-[var(--primary-green)] text-sm font-medium hover:underline transition-all"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
