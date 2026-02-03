"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const positionRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>(0);

  useEffect(() => {
    // Smooth animation loop using requestAnimationFrame
    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${positionRef.current.x}px`;
        cursorRef.current.style.top = `${positionRef.current.y}px`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    // Track mouse movement - store position only
    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    // Hide cursor when leaving window
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Optimized hover detection with event delegation
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button']") ||
        target.classList.contains("btn-primary") ||
        target.classList.contains("c-com-solution-button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-[9999] rounded-full transition-all duration-200 ease-out ${
        isHovering
          ? "w-8 h-8 bg-transparent border-2 border-[#06bcbd] dark:border-[#06bcbd] "
          : "w-4 h-4 bg-[#06bcbd] dark:bg-[#06bcbd] "
      }`}
      style={{
        transform: "translate(-50%, -50%)",
        willChange: "transform",
        mixBlendMode: "normal",
      }}
    />
  );
}
