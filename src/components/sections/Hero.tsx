"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { FloatingOrbs } from "../ui/FloatingOrbs";
import { LotusMandala } from "../ui/LotusMandala";
import { MagneticButton } from "../ui/MagneticButton";
import { ZenVideo } from "../ui/ZenVideo";
import { useState } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0a0907" }}>
      {/* Parallax bg photo */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img
          src="/image/WhatsApp Image 2026-07-03 at 3.59.06 PM.jpeg"
          alt="Yoga silhouette at sunrise"
          className="w-full h-full object-cover"
          style={{ opacity: 0.25 }}
        />
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, rgba(10,9,7,0.35) 0%, rgba(10,9,7,0.88) 100%)" }} />

      <FloatingOrbs />
      <LotusMandala />

      {/* Hero copy */}
      <motion.div style={{ opacity: contentOpacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="flex items-center justify-center gap-3 mb-9">
          <div className="h-px w-10" style={{ background: "#c4a46b" }} />
          <span className="text-xs tracking-[0.35em] uppercase font-medium"
            style={{ fontFamily: "var(--font-sans)", color: "#c4a46b" }}>
            Awaken · Flow · Transform
          </span>
          <div className="h-px w-10" style={{ background: "#c4a46b" }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="leading-[1.1] mb-8 tracking-tight"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            fontSize: "clamp(3.6rem, 10vw, 8rem)",
            color: "#f5ede0",
            textShadow: "0 0 90px rgba(196,164,107,0.12)",
          }}>
          Find Your <br />
          <span style={{ color: "#c4a46b", fontStyle: "italic", fontWeight: 600 }}>Sacred</span> <br />
          Balance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85 }}
          whileHover={{ scale: 1.02 }}
          className="text-base md:text-lg max-w-lg mx-auto mb-12 leading-[1.9] transition-transform font-light"
          style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.85)" }}>
          A sanctuary of movement and stillness. Premium yoga instruction crafted for those who seek depth beyond the pose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <MagneticButton
            className="group w-full sm:w-auto flex items-center justify-center gap-3 px-9 py-4 text-xs tracking-[0.15em] uppercase font-bold transition-colors duration-500"
            style={{ background: "#c4a46b", color: "#0a0907", fontFamily: "var(--font-sans)", animation: "pulseGlow 3.2s ease-in-out infinite" }}>
            Begin Your Practice
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
          <MagneticButton
            onClick={() => setIsVideoOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-9 py-4 text-xs tracking-[0.15em] uppercase border transition-colors duration-300"
            style={{ borderColor: "rgba(196,164,107,0.38)", color: "#c4a46b", fontFamily: "var(--font-sans)" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}>
            <Play size={14} /> Watch Film
          </MagneticButton>
        </motion.div>
      </motion.div>

      <ZenVideo isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs tracking-[0.28em] uppercase"
          style={{ fontFamily: "var(--font-sans)", color: "rgba(196,164,107,0.45)" }}>Scroll</span>
        <div className="w-px h-14 overflow-hidden relative" style={{ background: "rgba(196,164,107,0.15)" }}>
          <div className="absolute inset-x-0 top-0 h-1/2" style={{ background: "#c4a46b", animation: "scrollLine 1.6s ease-in-out infinite" }} />
        </div>
      </motion.div>
    </section>
  );
}
