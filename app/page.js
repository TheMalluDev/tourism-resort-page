import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import GoldDivider from "@/components/ui/GoldDivider";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Philosophy />
      
      {/* Sections will go here in Phase 3, 4 */}
      <section className="h-screen flex items-center justify-center border-b border-mist-sage/20 bg-plantation-brown">
        <h2 className="text-3xl font-serif text-cream-warm">Villa Showcase (Phase 3)</h2>
      </section>
      <section className="h-screen flex items-center justify-center border-b border-mist-sage/20 bg-forest-deep">
        <h2 className="text-3xl font-serif text-gold-bamboo">Experiences Grid (Phase 3)</h2>
      </section>
      <section className="h-[50vh] flex items-center justify-center">
        <h2 className="text-2xl font-serif text-cream-warm">Lead Capture Drawer (Phase 4)</h2>
      </section>
    </div>
  );
}
