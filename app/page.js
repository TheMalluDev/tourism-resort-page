import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import VillaShowcase from "@/components/sections/VillaShowcase";
import Experiences from "@/components/sections/Experiences";
import GoldDivider from "@/components/ui/GoldDivider";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Philosophy />
      <GoldDivider />
      <VillaShowcase />
      <Experiences />
      
      {/* Sections will go here in Phase 4 */}
      <section className="h-[50vh] flex items-center justify-center">
        <h2 className="text-2xl font-serif text-cream-warm">Lead Capture Drawer (Phase 4)</h2>
      </section>
    </div>
  );
}
