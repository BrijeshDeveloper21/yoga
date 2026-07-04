"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this might wait for images or fonts to load.
    // For this ultra-premium feel, we ensure it shows for at least a dramatic moment.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0a0907]"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Animated Image Reveal */}
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            >
              <img 
                src="/image/WhatsApp Image 2026-07-03 at 4.08.13 PM.jpeg" 
                alt="Shraddha Se Yoga Logo" 
                className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover"
                style={{ border: "1px solid rgba(196,164,107,0.3)" }}
              />
            </motion.div>
          </div>
          
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="text-xs tracking-[0.4em] uppercase font-medium"
              style={{ fontFamily: "var(--font-sans)", color: "#c4a46b" }}
            >
              Shraddha Se Yoga
            </motion.div>
          </div>
          
          {/* Loading line */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-[rgba(196,164,107,0.15)] overflow-hidden">
            <motion.div 
              className="h-full bg-[#c4a46b]"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
