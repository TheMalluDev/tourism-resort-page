import Image from "next/image";

export default function ExperienceCard({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  duration,
  icon,
}) {
  return (
    <div className="group relative w-full h-[400px] md:h-[500px] overflow-hidden bg-forest-deep flex flex-col justify-end p-6 border border-mist-sage/10 cursor-pointer">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="text-2xl font-serif text-cream-warm">{title}</h3>
        <p className="text-gold-bamboo italic font-serif text-sm md:text-base">{subtitle}</p>
        
        {/* Hidden description that fades in on hover (or shows naturally on mobile) */}
        <p className="text-mist-sage font-light text-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 line-clamp-3 md:line-clamp-none">
          {description}
        </p>

        <div className="mt-4 pt-4 border-t border-mist-sage/20 text-xs font-light tracking-widest uppercase text-cream-warm">
          {duration}
        </div>
      </div>
    </div>
  );
}
