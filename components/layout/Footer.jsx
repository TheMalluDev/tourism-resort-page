import { resort } from "@/lib/resortData";

export default function Footer() {
  return (
    <footer className="bg-plantation-brown text-mist-sage py-16 px-6 md:px-12 border-t border-mist-sage/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <h2 className="text-cream-warm font-serif text-2xl tracking-wide uppercase">{resort.name}</h2>
          <p className="font-light max-w-sm">{resort.tagline}</p>
        </div>
        
        <div className="flex flex-col gap-2 font-light text-sm md:text-right">
          <p>Munnar, Kerala, India</p>
          <a href={`mailto:${resort.email}`} className="hover:text-gold-bamboo transition-colors">{resort.email}</a>
          <a href={`https://wa.me/${resort.whatsapp.replace(/[^0-9]/g, '')}`} className="hover:text-gold-bamboo transition-colors">{resort.whatsapp}</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-mist-sage/10 text-xs text-center font-light">
        <p>© {new Date().getFullYear()} {resort.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
