"use client";

import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { TiltCard } from "../ui/TiltCard";

const PLANS = [
  { name: "Seeker",   price: 89,  desc: "Begin your journey with guided access.",            featured: false, accent: "rgba(196,164,107,0.6)", features: ["4 classes per month", "Access to Meditation sessions", "Studio community access", "New student orientation"] },
  { name: "Devotee", price: 189, desc: "The full practice for the committed student.",       featured: true,  accent: "#c4a46b",              features: ["Unlimited classes", "Priority booking", "1 private session / month", "Workshop discounts 20%", "Digital practice library"] },
  { name: "Initiate",price: 340, desc: "Complete immersion with personal guidance.",         featured: false, accent: "rgba(122,158,126,0.85)", features: ["Unlimited classes", "4 private sessions / month", "Nutrition consultation", "Personalized practice plan", "Retreat priority access", "Annual retreat 30% off"] },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 md:px-12" style={{ background: "#0a0907" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <SectionLabel label="Memberships" />
          <h2 className="text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontStyle: "italic", color: "#f5ede0" }}>
            Invest in Yourself
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <TiltCard
                className="relative h-full p-8 border flex flex-col"
                style={{ background: p.featured ? "rgba(196,164,107,0.055)" : "#110f0c", borderColor: p.featured ? "rgba(196,164,107,0.42)" : "rgba(196,164,107,0.12)" }}>
                {p.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs tracking-[0.16em] uppercase font-bold"
                    style={{ background: "#c4a46b", color: "#0a0907", fontFamily: "var(--font-sans)" }}>
                    Most Popular
                  </div>
                )}

                <div className="mb-7">
                  <h3 className="text-sm tracking-[0.22em] uppercase mb-3"
                    style={{ fontFamily: "var(--font-sans)", color: p.accent }}>
                    {p.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "#f5ede0" }}>
                      ${p.price}
                    </span>
                    <span className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.38)" }}>
                      / month
                    </span>
                  </div>
                  <p className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.42)" }}>
                    {p.desc}
                  </p>
                </div>

                <ul className="flex-1 space-y-3.5 mb-9">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center border"
                        style={{ borderColor: p.accent }}>
                        <div className="w-1.5 h-1.5" style={{ background: p.accent }} />
                      </div>
                      <span className="text-sm leading-snug"
                        style={{ fontFamily: "var(--font-sans)", color: "rgba(245,237,224,0.57)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-3.5 text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.025]"
                  style={{
                    background: p.featured ? "#c4a46b" : "transparent",
                    color: p.featured ? "#0a0907" : p.accent,
                    border: `1px solid ${p.featured ? "#c4a46b" : p.accent}`,
                    fontFamily: "var(--font-sans)",
                  }}>
                  Begin with {p.name}
                </button>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
