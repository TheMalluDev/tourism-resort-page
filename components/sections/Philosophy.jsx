"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";
import { philosophy } from "@/lib/resortData";
import ScrollRevealText from "@/components/ui/ScrollRevealText";

export default function Philosophy() {
  const philosophyRef = useRef(null);
  const pullQuoteRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        pullQuoteRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: pullQuoteRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: philosophyRef }
  );

  return (
    <section ref={philosophyRef} className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left: Image */}
        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
          <Image
            src={philosophy.image}
            alt={philosophy.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-3xl md:text-5xl font-serif text-cream-warm">
            {philosophy.headline}
          </h2>

          <ScrollRevealText className="flex flex-col gap-6 text-mist-sage font-light leading-relaxed">
            {philosophy.body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </ScrollRevealText>

          <blockquote
            ref={pullQuoteRef}
            className="border-l-2 border-gold-bamboo pl-6 py-2 mt-4 text-xl md:text-2xl font-serif italic text-gold-bamboo"
          >
            {philosophy.pullQuote}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
