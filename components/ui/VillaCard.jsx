import Image from "next/image";

export default function VillaCard({
  name,
  tagline,
  image,
  imageAlt,
  highlights,
  priceFrom,
  guests,
  size,
}) {
  return (
    <div className="group relative w-[85vw] md:w-[600px] shrink-0 flex flex-col gap-6 p-4 md:p-8 border border-mist-sage/20 bg-forest-deep/50 backdrop-blur-sm">
      {/* Image Container */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 85vw, 600px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 flex-grow">
        <div>
          <h3 className="text-2xl font-serif text-cream-warm">{name}</h3>
          <p className="text-mist-sage italic font-serif text-lg">{tagline}</p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          {highlights.map((highlight, idx) => (
            <span
              key={idx}
              className="text-xs tracking-wider uppercase bg-gold-bamboo/10 text-gold-bamboo border border-gold-bamboo/30 px-3 py-1"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Details & CTA */}
        <div className="mt-auto pt-6 flex flex-wrap justify-between items-end border-t border-mist-sage/20">
          <div className="flex gap-4 text-sm font-light text-mist-sage uppercase tracking-wider">
            <span>{guests}</span>
            <span>·</span>
            <span>{size}</span>
          </div>
          <div className="flex flex-col items-end gap-1 mt-4 md:mt-0">
            <span className="text-xs text-mist-sage uppercase tracking-widest">From</span>
            <span className="text-lg font-serif text-cream-warm">{priceFrom}</span>
          </div>
        </div>

        <button className="w-full mt-4 border border-cream-warm text-cream-warm py-3 uppercase tracking-widest text-sm hover:bg-cream-warm hover:text-forest-deep transition-colors duration-300">
          Enquire Now
        </button>
      </div>
    </div>
  );
}
