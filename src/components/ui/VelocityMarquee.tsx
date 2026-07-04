"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";

export function VelocityMarquee({ text }: { text: string }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * -0.1 * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    
    // We use a small range like -20 to 0 because we will have 4 copies of text
    // in flex, each taking 25%. Actually, -25 to 0 if 4 copies.
    // If 2 copies, -50 to 0.
    const current = baseX.get();
    let next = current + moveBy * 100;

    // Loop
    if (next <= -50) {
      next = 0;
    } else if (next > 0) {
      next = -50;
    }

    baseX.set(next);
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <div className="overflow-hidden whitespace-nowrap flex py-10 my-16 bg-[#0d0b08] border-y" style={{ borderColor: "rgba(196,164,107,0.1)" }}>
      <motion.div className="flex text-8xl md:text-9xl font-semibold italic opacity-80" style={{ x, fontFamily: "var(--font-heading)", color: "transparent", WebkitTextStroke: "1px #c4a46b" }}>
        <span className="block px-8">{text}</span>
        <span className="block px-8">{text}</span>
        <span className="block px-8">{text}</span>
        <span className="block px-8">{text}</span>
      </motion.div>
    </div>
  );
}
