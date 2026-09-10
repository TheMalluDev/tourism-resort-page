"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";

export default function GoldDivider({ className = "" }) {
  const lineRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: lineRef }
  );

  return (
    <hr
      ref={lineRef}
      className={`border-t border-gold-bamboo/50 my-16 md:my-24 origin-left ${className}`}
    />
  );
}
