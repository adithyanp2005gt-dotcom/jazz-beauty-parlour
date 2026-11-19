import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function MidBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} className="relative min-h-[340px] sm:min-h-[380px] h-[48vh] overflow-hidden flex items-center justify-center py-16">
      {/* Parallax image - luxury bridal textiles / henna hand details without face */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img
          src="/images/banner-mehndi.jpg"
          alt="Jazz Bridal Artistry — Henna & Silk"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-plum/75" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="w-10 sm:w-16 h-px bg-gold/40" />
          <span className="text-[9px] sm:text-[10px] font-sans tracking-widest3 uppercase text-gold">
            The Jazz Bridal Sanctuary
          </span>
          <div className="w-10 sm:w-16 h-px bg-gold/40" />
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ivory leading-tight mb-4 sm:mb-6">
          Every Bride Deserves to Feel{' '}
          <span className="italic text-gold">Flawless.</span>
        </h2>

        <p className="font-sans font-light text-ivory/60 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed mb-6 sm:mb-8">
          From the initial trial to the final veil drape on your wedding day — our artists curate every nuance to perfection.
        </p>

        <a href="#contact" className="btn-outline inline-flex text-center">
          Begin Your Bridal Journey
        </a>
      </div>
    </section>
  );
}
