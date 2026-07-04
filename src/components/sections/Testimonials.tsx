"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

const TESTIMONIALS = [
  { quote: "Shraddha Se Yoga didn't just teach me yoga — it fundamentally shifted how I inhabit my body. After eight months with Maya, I feel more at home in myself than I have in thirty-seven years.", name: "Isabelle Chen",     title: "Architect · 3 years at Shraddha Se Yoga" },
  { quote: "I came in rigid from a decade of competitive sport. Amara's Yin practice unlocked things I didn't know were locked. The approach here is unlike any studio I've visited globally.", name: "Marcus Adeyemi",   title: "Entrepreneur · 1.5 years at Shraddha Se Yoga" },
  { quote: "The level of attention Luca brings to each person in the room is extraordinary. I have never felt more seen as a student, or more challenged in exactly the right way.", name: "Sophia Lindqvist", title: "Surgeon · 2 years at Shraddha Se Yoga" },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden" style={{ background: "#0d0b08" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(196,164,107,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <SectionLabel label="Testimonials" />
        </Reveal>

        <div className="relative" style={{ minHeight: 300 }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i}
              initial={false}
              animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 18, scale: active === i ? 1 : 0.97 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
              style={{ pointerEvents: active === i ? "auto" : "none" }}>
              <div className="flex gap-1 mb-8">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={13} fill="#c4a46b" color="#c4a46b" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl leading-[1.7] mb-8 max-w-3xl"
                style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", color: "#f5ede0" }}>
                &quot;{t.quote}&quot;
              </p>
              <div className="text-sm tracking-[0.16em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-sans)", color: "#c4a46b" }}>{t.name}</div>
              <div className="text-xs mt-1" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.38)" }}>
                {t.title}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="transition-all duration-400"
              style={{ width: active === i ? 30 : 8, height: 4, background: active === i ? "#c4a46b" : "rgba(196,164,107,0.22)" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
