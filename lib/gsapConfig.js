import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const defaultScrub = 1.5;
export const defaultEase = "power3.out";
export { gsap, ScrollTrigger };
