"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";

export default function ScrollRevealText({ children, className = "" }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Split child nodes (assumes children are string or simple elements wrapped in block)
      // Since we don't have SplitText, we'll animate the container or expect the children to be mapped chars/words
      // For a simple paragraph reveal without SplitText plugin:
      gsap.fromTo(
        containerRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
