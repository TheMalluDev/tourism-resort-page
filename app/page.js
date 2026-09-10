import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import VillaShowcase from "@/components/sections/VillaShowcase";
import Experiences from "@/components/sections/Experiences";
import LeadCapture from "@/components/sections/LeadCapture";
import GoldDivider from "@/components/ui/GoldDivider";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Philosophy />
      <GoldDivider />
      <VillaShowcase />
      <Experiences />
      <LeadCapture />
    </div>
  );
}
