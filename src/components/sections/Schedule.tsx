"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { TiltCard } from "../ui/TiltCard";

const SCHEDULE_DATA = [
  { day: "Monday",    entries: [{ time: "6:30 AM", name: "Ashtanga",     instructor: "Maya",  spots: 8  }, { time: "12:00 PM", name: "Vinyasa Flow", instructor: "Luca",  spots: 4  }, { time: "7:00 PM",  name: "Yin Yoga",     instructor: "Amara", spots: 12 }] },
  { day: "Tuesday",   entries: [{ time: "7:00 AM", name: "Pranayama",    instructor: "Maya",  spots: 15 }, { time: "6:00 PM",  name: "Meditation",   instructor: "Amara", spots: 20 }, { time: "8:00 PM",  name: "Restorative",  instructor: "Luca",  spots: 6  }] },
  { day: "Wednesday", entries: [{ time: "6:30 AM", name: "Vinyasa Flow", instructor: "Luca",  spots: 3  }, { time: "12:00 PM", name: "Yin Yoga",      instructor: "Amara", spots: 10 }, { time: "7:30 PM",  name: "Ashtanga",     instructor: "Maya",  spots: 7  }] },
  { day: "Thursday",  entries: [{ time: "7:00 AM", name: "Meditation",   instructor: "Maya",  spots: 18 }, { time: "6:00 PM",  name: "Pranayama",    instructor: "Amara", spots: 14 }, { time: "7:30 PM",  name: "Vinyasa Flow", instructor: "Luca",  spots: 5  }] },
  { day: "Friday",    entries: [{ time: "6:30 AM", name: "Ashtanga",     instructor: "Maya",  spots: 9  }, { time: "12:00 PM", name: "Restorative",  instructor: "Amara", spots: 12 }, { time: "6:00 PM",  name: "Yin Yoga",     instructor: "Luca",  spots: 8  }] },
];

export function Schedule() {
  const [activeDay, setActiveDay] = useState("Monday");
  const entries = SCHEDULE_DATA.find((s) => s.day === activeDay)?.entries ?? [];

  return (
    <section id="schedule" className="py-32 px-6 md:px-12" style={{ background: "#0a0907" }}>
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <SectionLabel label="Weekly Schedule" />
          <h2 className="text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontStyle: "italic", color: "#f5ede0" }}>
            Reserve Your Space
          </h2>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {SCHEDULE_DATA.map((s) => (
              <button key={s.day} onClick={() => setActiveDay(s.day)}
                className="px-5 py-2.5 text-xs tracking-[0.12em] uppercase font-semibold transition-all duration-300"
                style={{
                  fontFamily: "var(--font-sans)",
                  background: activeDay === s.day ? "#c4a46b" : "transparent",
                  color: activeDay === s.day ? "#0a0907" : "rgba(245,237,224,0.42)",
                  border: `1px solid ${activeDay === s.day ? "#c4a46b" : "rgba(196,164,107,0.2)"}`,
                }}>
                {s.day}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="space-y-3">
          {entries.map((e, i) => (
            <motion.div key={`${activeDay}-${i}`}
              initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.42, delay: i * 0.08 }}>
              <TiltCard
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 p-5 border group cursor-pointer transition-colors duration-300"
                style={{ background: "#110f0c", borderColor: "rgba(196,164,107,0.12)" }}>
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-sm w-20 flex-shrink-0"
                    style={{ color: "#c4a46b", fontFamily: "var(--font-sans)", fontVariantNumeric: "tabular-nums" }}>
                    {e.time}
                  </span>
                  <div>
                    <div className="text-base"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "#f5ede0" }}>
                      {e.name}
                    </div>
                    <div className="text-xs mt-0.5"
                      style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.38)" }}>
                      with {e.instructor}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1.5">
                    <Users size={11} style={{ color: "rgba(245,237,224,0.32)" }} />
                    <span className="text-xs"
                      style={{ fontFamily: "var(--font-sans)", color: e.spots <= 5 ? "#c4a46b" : "rgba(245,237,224,0.32)" }}>
                      {e.spots} left
                    </span>
                  </div>
                  <button
                    className="px-4 py-2 text-xs tracking-[0.1em] uppercase font-semibold opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "#c4a46b", color: "#0a0907", fontFamily: "var(--font-sans)" }}>
                    Book
                  </button>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
