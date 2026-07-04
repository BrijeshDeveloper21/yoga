"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function YogaSymbol({ className = "", type = "om" }: { className?: string, type?: "om" | "unalome" }) {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div 
      className={`pointer-events-none absolute opacity-5 ${className}`}
      style={{ rotate, color: "#c4a46b" }}
    >
      {type === "om" ? (
        <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
          <path d="M11.66 12.39c-1.39-1.38-2.91-2.08-4.57-2.08-1.57 0-3.05.58-4.17 1.63-1.07 1-1.66 2.37-1.66 3.86 0 1.25.43 2.45 1.2 3.39.77.94 1.83 1.46 2.98 1.46.72 0 1.41-.18 2.05-.53.64-.35 1.18-.86 1.58-1.5a4.24 4.24 0 0 0 1.44.25c1.43 0 2.76-.64 3.73-1.8.96-1.14 1.49-2.65 1.49-4.24 0-1.28-.41-2.5-1.18-3.52-.77-1.02-1.83-1.6-2.99-1.6-1.55 0-3.03.71-4.04 1.94-.53-.2-1.12-.31-1.74-.31-1.65 0-3.21.65-4.38 1.83-1.15 1.16-1.78 2.72-1.78 4.38 0 1.51.52 2.96 1.48 4.08.94 1.1 2.22 1.71 3.6 1.71.9 0 1.77-.25 2.53-.71.74-.46 1.34-1.11 1.77-1.9a5.35 5.35 0 0 0 1.98.37c1.84 0 3.55-.8 4.81-2.25C21.1 14.5 21.8 12.56 21.8 10.45c0-1.92-.68-3.71-1.92-5.04C18.66 4.09 16.94 3.4 15.06 3.4c-1.86 0-3.6.68-4.9 1.91-1.28 1.22-1.99 2.92-1.99 4.79 0 1.33.43 2.61 1.24 3.61.8 1.01 1.91 1.62 3.12 1.72l-.87-3.04z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" width="100%" height="100%">
          <path d="M12 22C12 22 12 18 12 16C12 14 16 14 16 11C16 8 12 8 12 8C12 8 8 8 8 11C8 14 12 14 12 16M12 22V2M12 2C10 2 10 4 12 4C14 4 14 6 12 6" />
        </svg>
      )}
    </motion.div>
  );
}
