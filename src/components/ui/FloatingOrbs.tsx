"use client";

export function FloatingOrbs() {
  const orbs = [
    { w: 420, x: "-8%",  y: "8%",  c: "#c4a46b", delay: "0s",    dur: "9s",  dir: "floatUp"   },
    { w: 320, x: "68%",  y: "4%",  c: "#7a9e7e", delay: "2.5s",  dur: "11s", dir: "floatDown" },
    { w: 200, x: "86%",  y: "58%", c: "#c4a46b", delay: "1.2s",  dur: "7s",  dir: "floatUp"   },
    { w: 260, x: "18%",  y: "68%", c: "#8b6b4a", delay: "3.5s",  dur: "10s", dir: "floatDown" },
    { w: 160, x: "48%",  y: "82%", c: "#7a9e7e", delay: "0.8s",  dur: "6s",  dir: "floatUp"   },
    { w: 190, x: "3%",   y: "48%", c: "#c4a46b", delay: "4.2s",  dur: "12s", dir: "floatDown" },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((o, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: o.w, height: o.w,
            left: o.x, top: o.y,
            background: `radial-gradient(circle, ${o.c}38 0%, transparent 70%)`,
            filter: "blur(48px)",
            animation: `${o.dir} ${o.dur} ease-in-out ${o.delay} infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
