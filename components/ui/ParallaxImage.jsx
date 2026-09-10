"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";

export default function ParallaxImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  priority = false,
  yOffset = 100,
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        imageRef.current,
        { y: -yOffset },
        {
          y: yOffset,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${containerClassName}`}>
      <div ref={imageRef} className={`absolute top-0 left-0 w-full h-[130%] ${className}`}>
        <Image src={src} alt={alt} fill className="object-cover" priority={priority} />
      </div>
    </div>
  );
}
