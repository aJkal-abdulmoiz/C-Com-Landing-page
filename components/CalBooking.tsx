"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

export default function CalBooking() {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Get theme from localStorage
    const theme = localStorage.getItem("theme") as "light" | "dark" | null;
    const htmlClass = document.documentElement.classList.contains("light") ? "light" : "dark";
    const detectedTheme = theme || htmlClass;
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentTheme(detectedTheme);

    // Initialize Cal.com with theme
    (async function () {
      const cal = await getCalApi({ namespace: "c-com" });
      cal("ui", {
        theme: detectedTheme,
        styles: {
          branding: {
            brandColor: "#199fa4",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const newTheme = document.documentElement.classList.contains("light") ? "light" : "dark";
          setCurrentTheme(newTheme);
          
          // Update Cal.com theme
          (async function () {
            const cal = await getCalApi({ namespace: "c-com" });
            cal("ui", {
              theme: newTheme,
              styles: {
                branding: {
                  brandColor: "#199fa4",
                },
              },
            });
          })();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  

  return (
    <section id="meeting" className="md:py-12 py-8 px-4 relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[65rem] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-2 rounded-full border border-[var(--primary-green)]/30 bg-[var(--primary-green)]/5 mb-6">
            <span className="text-[var(--primary-green)] text-sm font-medium uppercase">
              Schedule a Meeting
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Book Your Discovery Call
          </h2>
          
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
            Let&apos;s discuss how Conversational AI can transform your business. Choose a time that works best for you.
          </p>
        </div>

        {/* Cal.com Embed */}
        <div className="contact-form-card rounded-2xl p-6 md:p-4 max-w-4xl mx-auto">
          <Cal
            namespace="c-com"
            calLink="c-com"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "520px",
              overflow: "scroll",
            }}
            config={{
              layout: "month_view",
              theme: currentTheme, // Dynamically set theme
            }}
          />
        </div>
      </div>
    </section>
  );
}
