import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { lookbook } from '../data/content';
import { useState } from 'react';

export default function Lookbook() {
  const { ref, inView } = useInView(0.08);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="lookbook" className="relative py-20 sm:py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12" ref={ref}>
        {/* Header */}
        <div className="mb-14 sm:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <div className="w-6 sm:w-8 h-px bg-gold" />
            <span className="section-label">Visual Stories</span>
            <div className="w-6 sm:w-8 h-px bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="section-title"
          >
            Bridal{' '}
            <span className="italic text-rosewood">Lookbook</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-sans font-light text-espresso/60 mt-3 sm:mt-4 max-w-md mx-auto text-xs sm:text-sm leading-relaxed"
          >
            A curated editorial of Jazz's most breathtaking bridal, mehndi and beauty creations.
          </motion.p>
        </div>

        {/* Responsive Grid: 1-col on small mobile, 2-col on sm/md, 3-col masonry on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {lookbook.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`relative overflow-hidden group cursor-pointer aspect-[4/5] ${
                i === 0 ? 'lg:row-span-2 lg:aspect-auto' : ''
              } ${i === 5 ? 'sm:col-span-2 lg:col-span-2 lg:aspect-[16/8]' : ''}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setHovered(hovered === item.id ? null : item.id)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-108"
                loading="lazy"
              />

              {/* Gradient overlay for readability across all screens */}
              <div
                className={`absolute inset-0 transition-all duration-500 bg-gradient-to-t from-espresso/80 via-espresso/25 to-transparent ${
                  hovered === item.id ? 'opacity-95' : 'opacity-60 group-hover:opacity-90'
                }`}
              />

              {/* Caption */}
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5">
                <span className="text-[9px] font-sans tracking-widest2 uppercase text-gold block mb-1">
                  Jazz Lookbook
                </span>
                <p className="font-serif text-lg sm:text-xl font-light text-ivory">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="font-sans text-xs sm:text-sm font-light text-espresso/50 mb-3 sm:mb-4">
            Follow our journey on Instagram for daily inspiration
          </p>
          <a
            href="https://instagram.com/jazzbeautyhub"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark group inline-flex"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <span>@jazzbeautyhub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
