"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!isPlaying) {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.connect(ctx.destination);
        masterGain.gain.value = 0; // Start silent for fade in
        gainNodeRef.current = masterGain;

        // Create a relaxing "singing bowl" drone using multiple oscillators
        const frequencies = [432, 432 * 1.5, 432 * 2]; // Healing frequencies
        frequencies.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          osc.type = "sine";
          osc.frequency.value = freq;

          const lfo = ctx.createOscillator();
          lfo.type = "sine";
          lfo.frequency.value = 0.1 + i * 0.05; // Slow modulation

          const lfoGain = ctx.createGain();
          lfoGain.gain.value = 0.2; // Depth of modulation

          lfo.connect(lfoGain.gain);
          osc.connect(lfoGain);
          lfoGain.connect(masterGain);

          osc.start();
          lfo.start();
        });
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      
      // Fade in
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0.15, audioCtxRef.current.currentTime, 2);
      }
      setIsPlaying(true);
    } else {
      // Fade out
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 1);
        setTimeout(() => {
          audioCtxRef.current?.suspend();
        }, 1000);
      }
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="flex items-center gap-1.5 px-3 py-2 transition-opacity hover:opacity-70"
      aria-label="Toggle ambient sound"
    >
      <span className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-sans)", color: "#c4a46b" }}>
        {isPlaying ? "Sound On" : "Sound Off"}
      </span>
      <div className="flex items-end gap-[2px] h-3 w-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-[2px] bg-[#c4a46b] rounded-t-sm"
            animate={{
              height: isPlaying ? ["20%", "100%", "20%"] : "20%",
            }}
            transition={{
              duration: 1 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </button>
  );
}
