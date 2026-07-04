"use client";

import { Clock, ArrowRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { TextReveal } from "../ui/TextReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { TiltCard } from "../ui/TiltCard";
import { YogaSymbol } from "../ui/YogaSymbol";

const CLASSES = [
  { name: "Vinyasa Flow",  level: "All Levels",             dur: "60 min", img: "/image/WhatsApp Image 2026-07-03 at 3.59.08 PM.jpeg", accent: "#c4a46b", desc: "Dynamic sequences synchronized with breath. A moving meditation that builds strength, flexibility, and presence." },
  { name: "Yin Yoga",      level: "Beginner–Intermediate",  dur: "75 min", img: "/image/WhatsApp Image 2026-07-03 at 3.59.09 PM.jpeg", accent: "#7a9e7e", desc: "Long-held postures targeting deep connective tissue. Cultivate stillness and profound release." },
  { name: "Ashtanga",      level: "Intermediate",           dur: "90 min", img: "/image/WhatsApp Image 2026-07-03 at 3.59.10 PM.jpeg", accent: "#c4a46b", desc: "The original power yoga. A set series of postures building internal heat and unwavering focus." },
  { name: "Pranayama",     level: "All Levels",             dur: "45 min", img: "/image/WhatsApp Image 2026-07-03 at 3.59.11 PM.jpeg", accent: "#7a9e7e", desc: "Ancient breathwork techniques to expand vital energy, calm the nervous system, and clarify the mind." },
  { name: "Restorative",   level: "Beginner",               dur: "60 min", img: "/image/WhatsApp Image 2026-07-03 at 3.59.12 PM.jpeg", accent: "#c4a46b", desc: "Supported postures with props for complete nervous system restoration. Profound rest as practice." },
  { name: "Meditation",    level: "All Levels",             dur: "30 min", img: "/image/WhatsApp Image 2026-07-03 at 3.59.13 PM.jpeg", accent: "#7a9e7e", desc: "Seated and walking meditation traditions. Cultivate the witness — clear awareness beyond thought." },
];

export function Classes() {
  return (
    <section id="classes" className="relative py-32 px-6 md:px-12 overflow-hidden" style={{ background: "#0a0907" }}>
      <YogaSymbol type="unalome" className="w-[800px] h-[800px] -right-[400px] top-[10%]" />
      <YogaSymbol type="om" className="w-[600px] h-[600px] -left-[300px] bottom-[20%]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <SectionLabel label="The Practice" />
          <TextReveal 
            text="Choose Your Path"
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontStyle: "italic", color: "#f5ede0" }}
            delay={0.1}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLASSES.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.07}>
              <TiltCard
                className="group relative overflow-hidden border cursor-pointer flex flex-col"
                style={{ borderColor: "rgba(196,164,107,0.12)", background: "#110f0c" }}>
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ height: 216 }}>
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.15]"
                    style={{ opacity: 0.85 }}
                  />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, transparent 40%, #110f0c 100%)" }} />
                  <div className="absolute top-4 right-4 px-3 py-1 text-xs tracking-[0.12em] uppercase border"
                    style={{ background: "rgba(10,9,7,0.72)", backdropFilter: "blur(12px)", color: c.accent, borderColor: `${c.accent}30`, fontFamily: "var(--font-sans)" }}>
                    {c.level}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "#f5ede0" }}>
                      {c.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1" style={{ color: "rgba(245,237,224,0.35)" }}>
                      <Clock size={11} />
                      <span className="text-xs" style={{ fontFamily: "var(--font-sans)" }}>{c.dur}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-[1.85] flex-1"
                    style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.48)" }}>
                    {c.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs tracking-[0.12em] uppercase"
                      style={{ fontFamily: "var(--font-sans)", color: c.accent }}>Book Class</span>
                    <ArrowRight size={11} style={{ color: c.accent }} />
                  </div>
                </div>

                {/* Bottom reveal line */}
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: c.accent }} />
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
