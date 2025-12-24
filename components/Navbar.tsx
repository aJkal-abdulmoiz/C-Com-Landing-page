"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px", // Triggers when section is in middle 45% of viewport
      threshold: [0, 0.25, 0.5, 0.75, 1], // Multiple thresholds for better detection
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ["services", "framework", "success-stories", "pitfalls", "about", "contact"];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Framework", href: "#framework" },
    { name: "Insights", href: "#pitfalls" },
    { name: "About", href: "#about" },
    { name: "Results", href: "#success-stories" },
    { name: "Contact", href: "#contact" },
  ];

  // Animation variants for mobile menu container
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for individual menu items
  const itemVariants: Variants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Hamburger icon variants
  const iconVariants = {
    closed: { d: "M4 6h16M4 12h16M4 18h16" },
    open: { d: "M6 18L18 6M6 6l12 12" },
  };

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetTop = element.offsetTop - 120;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-400 ease-in-out ${
        isScrolled ? "top-[65px]" : "top-[50px]"
      }`}
    >
      <div 
        className={`mx-auto px-6 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? "max-w-4xl bg-white/5 backdrop-blur-[10px] rounded-2xl border-0 shadow-xl" 
            : "max-w-[75rem] bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="#hero" 
            className="flex items-center space-x-2"
            onClick={(e) => handleNavClick(e, "#hero")}
          >
            <div className="text-xl md:text-2xl font-extrabold">
              <span className="gradient-text">c-com</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? "text-[var(--primary-green)]" 
                      : "text-white hover:text-[var(--primary-green)]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--primary-green)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Get Started Button - Desktop */}
          <div className="hidden lg:flex">
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-5 py-2.5 rounded-[10px] text-white text-sm font-semibold backdrop-blur-[5px] border border-[var(--glow-green)]/30 transition-all duration-300 hover:border-[var(--glow-green)]/50"
              style={{
                background: 'linear-gradient(rgba(6, 47, 47, 0.51) 0%, rgba(6, 47, 47, 0.51) 50%, rgba(6, 47, 47, 0.51) 100%)',
                boxShadow: 'rgb(6, 75, 75) 0px 0px 8px 0px inset',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'rgb(6, 75, 75) 0px 0px 20px 0px inset';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'rgb(6, 75, 75) 0px 0px 8px 0px inset';
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button with Animation */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-[var(--primary-green)] transition-colors relative z-50"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                variants={iconVariants}
                animate={isMobileMenuOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden mt-2 mx-4 bg-black/95 backdrop-blur-xl rounded-2xl border border-[#06474747]/50 shadow-xl overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.div
                    key={link.name}
                    variants={itemVariants}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? "text-[var(--primary-green)] bg-[var(--primary-green)]/10"
                          : "text-white/90 hover:text-[var(--primary-green)] hover:bg-[var(--primary-green)]/10"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div variants={itemVariants}>
                <Link
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="block w-full text-center px-5 py-2.5 rounded-[10px] text-white text-sm font-semibold mt-4 backdrop-blur-[5px] border border-[var(--glow-green)]/30 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(rgba(6, 47, 47, 0.51) 0%, rgba(6, 47, 47, 0.51) 50%, rgba(6, 47, 47, 0.51) 100%)',
                    boxShadow: 'rgb(6, 75, 75) 0px 0px 8px 0px inset',
                  }}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
