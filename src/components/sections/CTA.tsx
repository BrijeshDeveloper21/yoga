"use client";

import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { MagneticButton } from "../ui/MagneticButton";

export function CTA() {
  return (
    <section className="relative py-40 px-6 overflow-hidden" style={{ background: "#0d0b08" }}>
      <div className="absolute inset-0">
        <img
          src="/image/WhatsApp Image 2026-07-03 at 3.59.17 PM.jpeg"
          alt="Serene yoga studio lit by warm light"
          className="w-full h-full object-cover"
          style={{ opacity: 0.25 }}
        />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, rgba(196,164,107,0.07) 0%, rgba(13,11,8,0.92) 100%)" }} />
      </div>

      {/* Ripple rings */}
      {[1, 2, 3].map((r) => (
        <div key={r} className="absolute rounded-full border"
          style={{
            left: "50%", top: "50%",
            width: r * 220, height: r * 220,
            transform: "translate(-50%, -50%)",
            borderColor: "rgba(196,164,107,0.1)",
            animation: `rippleOut ${r * 2 + 2}s ease-out ${r * 0.6}s infinite`,
          }} />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <Reveal><SectionLabel label="Begin Today" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-5xl md:text-7xl leading-tight mb-8"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontStyle: "italic", color: "#f5ede0" }}>
            Your Practice<br /><span style={{ color: "#c4a46b" }}>Awaits You</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-base leading-[1.9] mb-12 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.52)" }}>
            First class complimentary. No commitment required. Simply arrive, breathe, and discover what movement can offer.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <MagneticButton
              className="group w-full sm:w-auto px-10 py-4 text-xs tracking-[0.15em] uppercase font-bold flex items-center gap-3 justify-center transition-colors duration-500"
              style={{ background: "#c4a46b", color: "#0a0907", fontFamily: "var(--font-sans)", animation: "pulseGlow 3.2s ease-in-out infinite" }}>
              Claim Free Class
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton
              className="w-full sm:w-auto px-10 py-4 text-xs tracking-[0.15em] uppercase border flex items-center gap-2 justify-center transition-colors duration-300"
              style={{ borderColor: "rgba(196,164,107,0.35)", color: "rgba(196,164,107,0.82)", fontFamily: "var(--font-sans)" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}>
              <MapPin size={14} /> View Location
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
