"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";
import { experiences } from "@/lib/resortData";
import ExperienceCard from "@/components/ui/ExperienceCard";

export default function Experiences() {
  const experiencesRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 80, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: {
            trigger: experiencesRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: experiencesRef }
  );

  return (
    <section ref={experiencesRef} className="py-24 md:py-32 bg-forest-deep px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-serif text-cream-warm">
            Curated Experiences
          </h2>
          <div className="w-16 h-[1px] bg-gold-bamboo mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp, idx) => (
            <div key={exp.id} ref={(el) => (cardsRef.current[idx] = el)}>
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
