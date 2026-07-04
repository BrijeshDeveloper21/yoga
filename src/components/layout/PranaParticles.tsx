"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PranaParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number; targetX: number }>>([]);

  useEffect(() => {
    // Generate 20 subtle glowing particles
    const generated = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // random start horizontal %
      y: Math.random() * 100, // random start vertical %
      size: Math.random() * 3 + 1, // 1 to 4px
      duration: Math.random() * 20 + 15, // 15 to 35 seconds to drift up
      delay: Math.random() * -20, // Start at different times
      targetX: (Math.random() - 0.5) * 10, // Pre-calculate for purity
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden mix-blend-screen">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: "-5%", // Start slightly below screen
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle, rgba(196,164,107,0.8) 0%, rgba(196,164,107,0) 70%)",
            filter: "blur(1px)"
          }}
          animate={{
            y: ["0vh", "-110vh"],
            x: ["0vw", `${p.targetX}vw`],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
