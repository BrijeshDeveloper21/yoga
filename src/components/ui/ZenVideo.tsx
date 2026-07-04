"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function ZenVideo({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
          animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
          exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-10 right-10 text-white hover:text-[#c4a46b] transition-colors z-10"
          >
            <X size={40} strokeWidth={1} />
          </button>

          {/* Placeholder for video */}
          <div className="text-center">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-4xl md:text-6xl font-light italic text-[#f5ede0] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Sanctuary
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-sm tracking-[0.2em] uppercase text-[#c4a46b]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              ( Cinematic Video Player Placeholder )
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
