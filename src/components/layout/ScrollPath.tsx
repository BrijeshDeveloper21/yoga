"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export function ScrollPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // The Unalome represents the path to enlightenment.
  // It starts with spirals (struggles) and ends in a straight line (harmony).
  return (
    <div ref={containerRef} className="absolute left-4 md:left-12 top-[100vh] bottom-0 w-24 pointer-events-none z-0 hidden md:block">
      <div className="sticky top-1/4 h-[60vh] flex flex-col items-center">
        <motion.div
          style={{ opacity: scrollYProgress, writingMode: "vertical-rl", textOrientation: "mixed", fontFamily: "var(--font-sans)" }}
          className="text-[#c4a46b] text-xs tracking-[0.4em] mb-4"
        >
          THE JOURNEY
        </motion.div>
        <svg
          viewBox="0 0 50 400"
          fill="none"
          stroke="#c4a46b"
          strokeWidth="1.5"
          className="w-8 h-full opacity-30"
          style={{ filter: "drop-shadow(0px 0px 8px rgba(196,164,107,0.4))" }}
        >
          <motion.path
            d="M25,0 C25,20 40,30 40,50 C40,70 10,80 10,100 C10,120 25,130 25,150 C25,180 40,190 40,210 C40,230 10,240 10,260 C10,280 25,290 25,320 L25,380"
            style={{ pathLength: scrollYProgress }}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Lotus dots at the bottom */}
          <motion.circle cx="25" cy="388" r="2" fill="#c4a46b" style={{ opacity: scrollYProgress }} />
          <motion.circle cx="25" cy="396" r="1.5" fill="#c4a46b" style={{ opacity: scrollYProgress }} />
        </svg>
      </div>
    </div>
  );
}
