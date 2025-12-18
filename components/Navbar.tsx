"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Framework", href: "#framework" },
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Insights", href: "#insights" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

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
          <Link href="#hero" className="flex items-center space-x-2">
            <div className="text-xl md:text-2xl font-extrabold">
              <span className="gradient-text">c-com</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#2ecc71] transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Get Started Button - Green Glass Style */}
          <div className="hidden lg:flex">
            <Link
              href="#contact"
              className="px-5 py-2.5 rounded-[10px] text-white text-sm font-semibold backdrop-blur-[5px] border border-[#4cff9a]/30 transition-all duration-300 hover:border-[#4cff9a]/50"
              style={{
                background: 'linear-gradient(rgba(15, 47, 30, 0.51) 0%, rgba(15, 47, 30, 0.51) 50%, rgba(15, 47, 30, 0.51) 100%)',
                boxShadow: 'rgb(25, 85, 50) 0px 0px 8px 0px inset',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'rgb(25, 85, 50) 0px 0px 20px 0px inset';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'rgb(25, 85, 50) 0px 0px 8px 0px inset';
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-[#2ecc71] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden mt-2 mx-4 bg-black/95 backdrop-blur-xl rounded-2xl border border-[#192f24]/50 shadow-xl overflow-hidden"
        >
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/90 hover:text-[#2ecc71] hover:bg-[#2ecc71]/10 transition-all py-3 px-4 rounded-lg text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-5 py-2.5 rounded-[10px] text-white text-sm font-semibold mt-4 backdrop-blur-[5px] border border-[#4cff9a]/30 transition-all duration-300"
              style={{
                background: 'linear-gradient(rgba(15, 47, 30, 0.51) 0%, rgba(15, 47, 30, 0.51) 50%, rgba(15, 47, 30, 0.51) 100%)',
                boxShadow: 'rgb(25, 85, 50) 0px 0px 8px 0px inset',
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
