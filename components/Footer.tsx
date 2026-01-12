'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;

    // initial guess (works on first render)
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme ? savedTheme === "dark" : prefersDark;
  });

  useEffect(() => {
    const html = document.documentElement;

    const syncTheme = () => {
      // Source of truth: <html class="dark"> (Tailwind/common approach)
      setIsDark(html.classList.contains("dark"));
    };

    // Sync immediately on mount
    syncTheme();

    // Watch for class changes on <html>
    const observer = new MutationObserver(syncTheme);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] }); // [web:41]

    return () => observer.disconnect(); // [web:47]
  }, []);

  return (
    <footer
      className="relative backdrop-blur-md overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Top Border - Fades on sides */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-green)]/40 to-transparent"></div>

      {/* Blur Glow Effect */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[100px] rounded-full -translate-y-1/2 pointer-events-none"
        style={{
          background: "var(--primary-green)",
          filter: "blur(100px)",
          opacity: 0.3,
        }}
      ></div>

      <div className="relative max-w-[75rem] mx-auto px-6 py-6">
        <div className="flex md:flex-row flex-col justify-between  items-center md:items-start gap-8">
          {/* Left Side - Logo & Contact */}
          <div className="space-y-4">
            <Link
              href="#hero"
              className="flex items-center md:-ml-[10px]"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="bg-transparent relative w-24 h-24 md:w-32 md:h-32 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="c-com.ai logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <div className="space-y-2 text-sm ">
              <p className="text-gray-400">Remote, Global</p>
              <p className="text-gray-400">New York, USA</p>
              <a
                href="mailto:hello@c-com.ai"
                className="text-gray-300 block hover:text-[var(--primary-green)] transition-colors"
              >
                hello@c-com.ai
              </a>
            </div>
          </div>

          {/* Right Side - Company Links */}
          {/* <div className="flex flex-col justify-end items-start mt-auto">
            <h3
              className="font-semibold mb-4 text-sm"
              style={{ color: "var(--text-primary)" }}
            >
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[var(--primary-green)] transition-colors"
                >
                  Terms & Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[var(--primary-green)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2025 c-com.ai. All rights reserved.</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[var(--primary-green)] transition-colors cursor-pointer"
          >
            <span>Back To Top</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
