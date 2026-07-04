"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function LiquidImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden ${className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="liquid-filter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency={isHovered ? "0.03" : "0.01"} 
            numOctaves="2" 
            result="warp" 
            style={{ transition: "baseFrequency 0.8s ease" }}
          />
          <feDisplacementMap 
            xChannelSelector="R" 
            yChannelSelector="G" 
            scale={isHovered ? "20" : "0"} 
            in="SourceGraphic" 
            in2="warp" 
            style={{ transition: "scale 0.8s ease" }}
          />
        </filter>
      </svg>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        animate={{
          scale: isHovered ? 1.05 : 1,
          filter: isHovered ? "url(#liquid-filter)" : "none"
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
