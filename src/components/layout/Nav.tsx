"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { AmbientAudio } from "./AmbientAudio";

const NAV_LINKS = ["Philosophy", "Classes", "Instructors", "Schedule", "Pricing"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const goto = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5"
      style={{
        background: scrolled ? "rgba(10,9,7,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(22px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,164,107,0.1)" : "none",
        transition: "background 0.4s ease, border 0.4s ease",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/image/WhatsApp Image 2026-07-03 at 4.08.13 PM.jpeg" alt="Yoga Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
          <span className="text-base md:text-xl tracking-[0.15em] md:tracking-[0.2em] uppercase font-medium"
            style={{ fontFamily: "var(--font-sans)", color: "#c4a46b" }}>
            Shraddha Se Yoga
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => goto(l)}
              className="text-xs tracking-[0.12em] uppercase font-medium transition-colors duration-300"
              style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.58)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c4a46b")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,237,224,0.58)")}>
              {l}
            </button>
          ))}
        </div>

        {/* CTA and Audio */}
        <div className="hidden md:flex items-center gap-6">
          <AmbientAudio />
          <MagneticButton
            className="flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-300 hover:brightness-110"
            style={{ background: "#c4a46b", color: "#0a0907", fontFamily: "var(--font-sans)" }}>
            Begin Journey <ArrowRight size={13} />
          </MagneticButton>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" style={{ color: "#c4a46b" }} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 pb-4 border-t" style={{ borderColor: "rgba(196,164,107,0.15)" }}>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => goto(l)}
              className="block w-full text-left py-3 px-2 text-xs tracking-[0.12em] uppercase font-medium"
              style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.55)" }}>
              {l}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
