import Link from "next/link";
import { resort } from "@/lib/resortData";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-forest-deep/60 backdrop-blur-md border-b border-mist-sage/20 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-cream-warm font-serif text-xl md:text-2xl tracking-wide uppercase">
          {resort.name}
        </Link>

        {/* CTA */}
        <button className="bg-gold-bamboo text-forest-deep px-5 py-2 md:px-6 md:py-2.5 rounded-sm font-medium tracking-widest text-xs md:text-sm uppercase hover:bg-cream-warm transition-colors duration-300">
          Reserve
        </button>
      </div>
    </nav>
  );
}
