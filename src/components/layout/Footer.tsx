"use client";

import { MapPin } from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
  
  return (
    <footer ref={containerRef} className="relative overflow-hidden bg-[#0a0907]">
      <motion.div style={{ y, borderColor: "rgba(196,164,107,0.1)" }} className="py-16 px-6 md:px-12 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <img src="/image/WhatsApp Image 2026-07-03 at 4.08.13 PM.jpeg" alt="Yoga Logo" className="w-10 h-10 rounded-full object-cover" />
              <span className="text-xl tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-heading)", color: "#c4a46b" }}>Shraddha Se Yoga</span>
            </div>
            <p className="text-sm leading-[1.85] max-w-xs"
              style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.38)" }}>
              A sanctuary for the devoted practitioner. Premium yoga and mindfulness instruction in the heart of the city.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <MapPin size={13} style={{ color: "#c4a46b" }} />
              <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.38)" }}>
                48 Stillwater Lane, New York, NY
              </span>
            </div>
          </div>

          {[
            { title: "Practice", links: ["Vinyasa Flow", "Yin Yoga", "Ashtanga", "Pranayama", "Meditation"] },
            { title: "Studio",   links: ["About Shraddha Se Yoga", "Our Teachers", "Schedule", "Memberships", "Retreats"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-[0.22em] uppercase mb-5"
                style={{ fontFamily: "var(--font-sans)", color: "#c4a46b" }}>
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors duration-300"
                      style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.38)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#c4a46b")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,237,224,0.38)")}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t gap-4"
          style={{ borderColor: "rgba(196,164,107,0.08)" }}>
          <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.22)" }}>
            © 2026 Shraddha Se Yoga. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="text-xs transition-colors duration-300"
                style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.28)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c4a46b")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,237,224,0.28)")}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
      </motion.div>
    </footer>
  );
}
