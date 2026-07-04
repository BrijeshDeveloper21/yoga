"use client";

import { Star } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { TextReveal } from "../ui/TextReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { TiltCard } from "../ui/TiltCard";
import { LiquidImage } from "../ui/LiquidImage";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const INSTRUCTORS = [
  { name: "Maya Patel",     title: "Founder & Ashtanga Lead",  spec: "Ashtanga · Pranayama", years: "15 years", photo: "/image/WhatsApp Image 2026-07-03 at 3.59.14 PM.jpeg", bio: "Trained in Mysore, India under Sri K. Pattabhi Jois lineage. Maya brings a devotional approach to the physical practice." },
  { name: "Luca Ferretti",  title: "Vinyasa & Meditation",     spec: "Vinyasa · Meditation",  years: "11 years", photo: "/image/WhatsApp Image 2026-07-03 at 3.59.15 PM.jpeg", bio: "A former competitive athlete, Luca discovered yoga as rehabilitation and never looked back. His classes blend rigor with gentleness." },
  { name: "Amara Osei",     title: "Yin & Restorative",        spec: "Yin · Restorative",     years: "9 years",  photo: "/image/WhatsApp Image 2026-07-03 at 3.59.16 PM.jpeg", bio: "Certified in Traditional Chinese Medicine, Amara weaves meridian theory into her deeply therapeutic Yin practice." },
];

export function Instructors() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]); // Adjust based on number of items

  return (
    <section id="instructors" ref={targetRef} className="relative h-[200vh]" style={{ background: "#0d0b08" }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-24">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center mb-16 flex flex-col items-center">
          <SectionLabel label="The Teachers" />
          <TextReveal 
            text="Learn From Masters"
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontStyle: "italic", color: "#f5ede0" }}
          />
        </div>

        <motion.div style={{ x }} className="flex gap-14 px-6 md:px-32 w-[150vw] md:w-[120vw]">
          {INSTRUCTORS.map((ins, i) => (
            <Reveal key={ins.name} delay={i * 0.14}>
              <TiltCard className="text-center group cursor-pointer w-[320px] md:w-[400px] shrink-0" style={{ background: "transparent" }}>
                {/* Portrait with rotating ring */}
                <div className="relative mx-auto mb-7" style={{ width: 196, height: 196 }}>
                  <div className="absolute inset-0 rounded-full border"
                    style={{ borderColor: "rgba(196,164,107,0.28)", borderStyle: "dashed", animation: "slowSpin 22s linear infinite" }} />
                  <div className="absolute inset-3 rounded-full border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ borderColor: "rgba(196,164,107,0.42)" }} />
                  <div className="absolute inset-[18px] rounded-full overflow-hidden bg-[#110f0c]">
                    <LiquidImage
                      src={ins.photo}
                      alt={ins.name}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 flex items-center justify-center rounded-full"
                    style={{ background: "#c4a46b" }}>
                    <Star size={11} fill="#0a0907" color="#0a0907" />
                  </div>
                </div>

                <h3 className="text-2xl mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "#f5ede0" }}>
                  {ins.name}
                </h3>
                <p className="text-xs tracking-[0.14em] uppercase mb-1"
                  style={{ fontFamily: "var(--font-sans)", color: "#c4a46b" }}>
                  {ins.title}
                </p>
                <p className="text-xs mb-5"
                  style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.3)" }}>
                  {ins.spec}
                </p>
                <p className="text-sm leading-[1.88] px-2"
                  style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.52)" }}>
                  {ins.bio}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
