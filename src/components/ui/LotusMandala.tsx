"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function LotusMandala() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const scrollRotate = useTransform(scrollY, [0, 1000], [0, 90]);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.div
      style={{ 
        animation: "breathe 9s ease-in-out infinite",
        rotate: scrollRotate
      }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      {/* Outer slow spin */}
      <div style={{ animation: "slowSpin 90s linear infinite" }}>
        <svg width="720" height="720" viewBox="0 0 720 720" fill="none">
          <circle cx="360" cy="360" r="340" stroke="#c4a46b" strokeWidth="0.4" strokeDasharray="2 22" opacity="0.25" />
          <circle cx="360" cy="360" r="305" stroke="#c4a46b" strokeWidth="0.3" strokeDasharray="1 18" opacity="0.18" />
          {/* 16-petal outer ring */}
          {Array.from({ length: 16 }).map((_, i) => (
            <ellipse key={`o${i}`} cx="360" cy="140" rx="16" ry="84"
              stroke="#c4a46b" strokeWidth="0.55" opacity="0.22"
              transform={`rotate(${i * 22.5} 360 360)`} />
          ))}
          {/* 12-petal mid ring */}
          {Array.from({ length: 12 }).map((_, i) => (
            <ellipse key={`m${i}`} cx="360" cy="200" rx="13" ry="68"
              stroke="#c4a46b" strokeWidth="0.65" opacity="0.32"
              transform={`rotate(${i * 30 + 15} 360 360)`} />
          ))}
          {/* 8-petal inner ring */}
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse key={`in${i}`} cx="360" cy="268" rx="10" ry="52"
              stroke="#c4a46b" strokeWidth="0.8" opacity="0.44"
              transform={`rotate(${i * 45} 360 360)`} />
          ))}
          {/* Spoke lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`l${i}`} x1="360" y1="65" x2="360" y2="360"
              stroke="#c4a46b" strokeWidth="0.25" opacity="0.12"
              transform={`rotate(${i * 45} 360 360)`} />
          ))}
          {/* Core circles */}
          <circle cx="360" cy="360" r="60"  stroke="#c4a46b" strokeWidth="0.7" opacity="0.38" />
          <circle cx="360" cy="360" r="42"  stroke="#c4a46b" strokeWidth="0.9" opacity="0.48" />
          <circle cx="360" cy="360" r="22"  stroke="#c4a46b" strokeWidth="1"   opacity="0.6"  />
          <circle cx="360" cy="360" r="8"   fill="#c4a46b"                     opacity="0.45" />
        </svg>
      </div>
      {/* Counter-rotating inner */}
      <div className="absolute" style={{ animation: "slowSpin 55s linear infinite reverse" }}>
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none">
          {Array.from({ length: 6 }).map((_, i) => (
            <ellipse key={i} cx="180" cy="72" rx="9" ry="48"
              stroke="#c4a46b" strokeWidth="0.8" opacity="0.5"
              transform={`rotate(${i * 60} 180 180)`} />
          ))}
          <circle cx="180" cy="180" r="24" stroke="#c4a46b" strokeWidth="0.8" opacity="0.4" />
          <circle cx="180" cy="180" r="6"  fill="#c4a46b"                     opacity="0.65" />
        </svg>
      </div>
    </motion.div>
  );
}
