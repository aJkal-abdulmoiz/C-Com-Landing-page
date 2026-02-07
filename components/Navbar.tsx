"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);
  
  // ✅ Calculate theme using useMemo to avoid setState in useEffect
  const isDark = useMemo(() => {
    if (typeof window === 'undefined' || !mounted) return false;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme ? savedTheme === "dark" : prefersDark;
  }, [mounted]);

  // Set mounted state
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Apply theme class
  useEffect(() => {
    if (mounted) {
      document.documentElement.className = isDark ? "dark" : "light";
    }
  }, [isDark, mounted]);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = !isDark;
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.className = newTheme ? "dark" : "light";
    // Force re-render by toggling mounted
    setMounted(false);
    setTimeout(() => setMounted(true), 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
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
    const sections = ["about", "future-conversational", "framework", "ideas-essays", "pitfalls", "success-stories", "contact"];
    
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const navLinks = [
    { name: "About Me", href: "#about" },
    { name: "Why Change", href: "#future-conversational" },
    { name: "How I Help", href: "#framework" },
    { name: "Insights", href: "#ideas-essays" },
    { name: "Testimonials", href: "#success-stories" },
    { name: "Contact", href: "#contact" },
  ];

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

  // Don't render until mounted
  if (!mounted) return null;

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-all duration-400 ease-in-out ${
          isScrolled ? "top-[65px]" : "top-[52px]"
        }`}
      >
        <div 
          className={`mx-auto px-1 md:px-6 transition-all duration-500 ease-in-out ${
            isScrolled 
              ? "md:max-w-4xl max-w-[95%] backdrop-blur-[10px] rounded-2xl border-0 shadow-xl px-4 md:px-6" 
              : "max-w-[95%] md:max-w-[75rem] bg-transparent"
          }`}
          style={isScrolled ? { backgroundColor: 'var(--navbar-bg)' } : {}}
        >
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center md:-ml-[18px] -ml-[6px]"
              onClick={(e) => handleNavClick(e, "#hero")}
            >
              <div className="bg-transparent relative w-32 h-32 md:w-42 md:h-42 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="c-com.ai logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-sm font-medium transition-colors duration-200`}
                    style={{ 
                      color: isActive ? 'var(--primary-green)' : 'var(--text-primary)' 
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--primary-green)]"
                        transition={{ 
                          type: "spring", 
                          stiffness: 380, 
                          damping: 30,
                          duration: 0.3 
                        }}
                        style={{ originY: 0 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex">
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-5 py-2.5 rounded-[10px] text-sm font-semibold backdrop-blur-[5px] border transition-all duration-300"
                style={{
                  color: isDark ? 'white' : '#1f2937',
                  background: isDark 
                    ? 'linear-gradient(rgba(6, 47, 47, 0.51) 0%, rgba(6, 47, 47, 0.51) 50%, rgba(6, 47, 47, 0.51) 100%)'
                    : 'linear-gradient(rgba(6, 188, 189, 0.15) 0%, rgba(6, 188, 189, 0.25) 50%, rgba(6, 188, 189, 0.15) 100%)',
                  borderColor: 'var(--glow-green)',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  boxShadow: isDark 
                    ? 'rgb(6, 75, 75) 0px 0px 8px 0px inset'
                    : 'rgba(6, 188, 189, 0.3) 0px 0px 12px 0px inset',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = isDark 
                    ? 'rgb(6, 75, 75) 0px 0px 20px 0px inset'
                    : 'rgba(6, 188, 189, 0.5) 0px 0px 20px 0px inset';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = isDark 
                    ? 'rgb(6, 75, 75) 0px 0px 8px 0px inset'
                    : 'rgba(6, 188, 189, 0.3) 0px 0px 12px 0px inset';
                }}
              >
                Get Started
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full backdrop-blur-md transition-all duration-300"
                style={{
                  backgroundColor: isDark ? 'rgba(55, 65, 81, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                  border: isDark ? '1px solid rgba(55, 65, 81, 0.5)' : '1px solid rgba(229, 231, 235, 0.5)'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </motion.button>

              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:text-[var(--primary-green)] transition-colors relative z-50"
                style={{ color: 'var(--text-primary)' }}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden mt-2 mx-auto max-w-[95%] md:max-w-[90%] backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-color)'
              }}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.div key={link.name} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`block py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? "text-[var(--primary-green)] bg-[var(--primary-green)]/10"
                            : "hover:text-[var(--primary-green)] hover:bg-[var(--primary-green)]/10"
                        }`}
                        style={{ color: isActive ? 'var(--primary-green)' : 'var(--text-primary)' }}
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
                    className="block w-full text-center px-5 py-2.5 rounded-[10px] text-sm font-semibold mt-4 backdrop-blur-[5px] border transition-all duration-300"
                    style={{
                      color: isDark ? 'white' : '#1f2937',
                      background: isDark 
                        ? 'linear-gradient(rgba(6, 47, 47, 0.51) 0%, rgba(6, 47, 47, 0.51) 50%, rgba(6, 47, 47, 0.51) 100%)'
                        : 'linear-gradient(rgba(6, 188, 189, 0.15) 0%, rgba(6, 188, 189, 0.25) 50%, rgba(6, 188, 189, 0.15) 100%)',
                      borderColor: 'var(--glow-green)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      boxShadow: isDark 
                        ? 'rgb(6, 75, 75) 0px 0px 8px 0px inset'
                        : 'rgba(6, 188, 189, 0.3) 0px 0px 12px 0px inset',
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

      <motion.button
        onClick={toggleTheme}
        className={`fixed z-50 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 hidden lg:block cursor-pointer ${
          isScrolled ? "top-[81px] right-16 shadow-lg" : "top-[66px] right-16"
        }`}
        style={{
          backgroundColor: isDark ? 'rgba(55, 65, 81, 0.5)' : 'rgba(255, 255, 255, 0.9)',
          border: isDark ? '1px solid rgba(55, 65, 81, 1.2)' : '1px solid rgba(229, 231, 235, 1.2)'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </motion.button>
    </>
  );
}
