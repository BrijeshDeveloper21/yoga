import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/sections/Hero";
import { VelocityMarquee } from "@/components/ui/VelocityMarquee";
import { Philosophy } from "@/components/sections/Philosophy";
import { Classes } from "@/components/sections/Classes";
import { Instructors } from "@/components/sections/Instructors";
import { Schedule } from "@/components/sections/Schedule";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full selection:bg-[#c4a46b]/30 selection:text-[#f5ede0]">
      <Nav />
      <Hero />
      <div className="relative z-10 bg-[#0a0907]">
        <VelocityMarquee text="AWAKEN · FLOW · TRANSFORM · " />
      </div>
      <Philosophy />
      <Classes />
      <Instructors />
      <Schedule />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
