"use client";

import { Leaf, Wind, Heart } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { TextReveal } from "../ui/TextReveal";
import { TiltCard } from "../ui/TiltCard";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-32 px-6 md:px-12 overflow-hidden"
      style={{ background: "#0d0b08" }}>
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(122,158,126,0.035) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Sticky Image column */}
        <div className="w-full md:w-1/2 md:sticky md:top-32 h-fit">
        <Reveal>
          <div className="relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src="/image/WhatsApp Image 2026-07-03 at 3.59.07 PM.jpeg"
                alt="Seated meditation in a peaceful garden"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ opacity: 0.85 }}
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,9,7,0.55) 0%, transparent 55%)" }} />
            </div>
            {/* Floating stat */}
            <TiltCard
              className="absolute -bottom-4 right-2 md:-bottom-6 md:-right-6 p-4 md:p-6 border backdrop-blur-xl"
              style={{ background: "rgba(20,17,12,0.92)", borderColor: "rgba(196,164,107,0.22)" }}>
              <div className="text-4xl font-bold"
                style={{ fontFamily: "var(--font-heading)", color: "#c4a46b" }}>12+</div>
              <div className="text-xs tracking-[0.15em] uppercase mt-1"
                style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.45)" }}>
                Years of Practice
              </div>
            </TiltCard>
          </div>
        </Reveal>
        </div>

        {/* Text column */}
        <div className="w-full md:w-1/2 md:py-16 flex flex-col justify-center">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: "#c4a46b" }} />
              <span className="text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-sans)", color: "#c4a46b" }}>Our Philosophy</span>
            </div>
          </Reveal>
          <TextReveal 
            text="Where Ancient Wisdom Meets Modern Living"
            className="text-5xl md:text-6xl leading-[1.1] mb-8"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontStyle: "italic", color: "#f5ede0" }}
            delay={0.1}
          />
          <Reveal delay={0.2}>
            <p className="text-base leading-[1.9] mb-5"
              style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.56)" }}>
              Shraddha Se Yoga is built on a singular belief: every body carries an innate intelligence. Our practice doesn&apos;t impose — it reveals. Through breath, movement, and intentional stillness, we guide you back to profound alignment.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-base leading-[1.9] mb-11"
              style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.56)" }}>
              Whether you arrive as a complete beginner or a seasoned practitioner, our lineage-trained instructors meet you exactly where you are — crafting a journey entirely your own.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="grid grid-cols-3 gap-5">
              {[
                { Icon: Leaf, label: "Holistic Approach" },
                { Icon: Wind, label: "Breathwork Focus" },
                { Icon: Heart, label: "Mind-Body Unity" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 flex items-center justify-center border"
                    style={{ borderColor: "rgba(196,164,107,0.3)", color: "#c4a46b" }}>
                    <Icon size={17} />
                  </div>
                  <span className="text-xs tracking-[0.1em] uppercase leading-tight"
                    style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.42)" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
