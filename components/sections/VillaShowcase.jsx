"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";
import { villas } from "@/lib/resortData";
import VillaCard from "@/components/ui/VillaCard";

export default function VillaShowcase() {
  const showcaseRef = useRef(null);
  const villaTrackRef = useRef(null);
  const mobileCardsRef = useRef([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: Horizontal Scroll Pin
      mm.add("(min-width: 768px)", () => {
        // Calculate the total scroll distance based on track width vs viewport width
        const scrollDistance = villaTrackRef.current.scrollWidth - window.innerWidth;

        gsap.to(villaTrackRef.current, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      // Mobile: Vertical Cascade Reveal
      mm.add("(max-width: 767px)", () => {
        mobileCardsRef.current.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: showcaseRef }
  );

  return (
    <section ref={showcaseRef} className="bg-plantation-brown py-16 md:py-0 overflow-hidden relative">
      {/* Desktop Header overlays the scroll track */}
      <div className="md:absolute top-16 left-6 md:left-12 z-10 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-serif text-cream-warm flex flex-col">
          <span>Our Villas</span>
          <span className="text-gold-bamboo italic">& Suites</span>
        </h2>
        <div className="w-16 h-[1px] bg-gold-bamboo mt-4" />
      </div>

      {/* Desktop Track / Mobile Stack */}
      <div className="md:h-screen md:flex md:items-center">
        <div
          ref={villaTrackRef}
          className="flex flex-col md:flex-row gap-8 px-6 md:px-12 md:pl-[30vw] touch-pan-y"
        >
          {villas.map((villa, idx) => (
            <div
              key={villa.id}
              ref={(el) => (mobileCardsRef.current[idx] = el)}
              className="flex-shrink-0"
            >
              <VillaCard {...villa} />
            </div>
          ))}
          {/* Spacer for desktop horizontal scroll padding */}
          <div className="hidden md:block w-[10vw] shrink-0" />
        </div>
      </div>
    </section>
  );
}
