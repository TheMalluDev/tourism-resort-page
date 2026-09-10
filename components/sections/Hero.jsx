"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";
import { heroData } from "@/lib/resortData";

export default function Hero() {
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);
  const headlineRef = useRef(null);

  useGSAP(
    () => {
      // Background zoom: scale 1 -> 1.1 over full hero scroll
      gsap.to(heroImageRef.current, {
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Headline parallax exit
      gsap.to(headlineRef.current, {
        y: -120,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "20% top",
          end: "80% top",
          scrub: 1,
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          ref={heroImageRef}
          src={heroData.image}
          alt={heroData.imageAlt}
          fill
          priority
          className="object-cover origin-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/30 to-forest-deep/10" />
      </div>

      {/* Content */}
      <div ref={headlineRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-gold-bamboo font-serif italic text-xl md:text-2xl mb-4 tracking-wider">
          {heroData.subHeadline}
        </h2>
        <h1 className="text-cream-warm font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
          {heroData.headline}
        </h1>
        <p className="text-mist-sage text-sm md:text-base tracking-[0.2em] uppercase mb-10">
          {heroData.body}
        </p>
        <button className="border border-gold-bamboo text-gold-bamboo px-8 py-3 tracking-widest text-sm uppercase hover:bg-gold-bamboo hover:text-forest-deep transition-all duration-300">
          {heroData.cta}
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
        <div className="w-[1px] h-12 bg-gold-bamboo/50" />
      </div>
    </section>
  );
}
