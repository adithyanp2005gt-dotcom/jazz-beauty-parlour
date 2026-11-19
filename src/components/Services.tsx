import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState, useEffect } from 'react';
import { services } from '../data/content';
import { X, ArrowRight } from 'lucide-react';

export default function Services() {
  const { ref, inView } = useInView(0.08);
  const [active, setActive] = useState<string | null>(null);
  const activeService = services.find((s) => s.id === active);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section id="services" className="relative py-20 sm:py-28 md:py-36 bg-espresso overflow-hidden">
      {/* Decorative radial glows */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #C6A477 0%, transparent 50%), radial-gradient(circle at 80% 50%, #A66D78 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12" ref={ref}>
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <div className="w-6 sm:w-8 h-px bg-gold" />
            <span className="text-[9px] sm:text-[10px] font-sans font-medium tracking-widest3 uppercase text-gold">
              Our Signature Services
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 sm:gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-title-light max-w-xl"
            >
              Artistry That{' '}
              <span className="italic text-gold">Transcends</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans font-light text-ivory/50 text-xs sm:text-sm max-w-xs leading-relaxed"
            >
              Every service is crafted with precision, passion and the finest international luxury products.
            </motion.p>
          </div>
        </div>

        {/* Services Grid - responsive 1-col on mobile, 2-col on tablet, 3-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.09 }}
              className="group relative overflow-hidden cursor-pointer bg-plum/20 border border-gold/10 hover:border-gold/30 transition-colors"
              onClick={() => setActive(service.id)}
            >
              {/* Image with subtle zoom */}
              <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] font-sans tracking-widest2 uppercase text-gold border border-gold/30 px-2.5 py-1 backdrop-blur-sm bg-espresso/40">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-ivory mb-1 leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-sans text-[10px] sm:text-[11px] tracking-widest uppercase text-gold/75 mb-2.5">
                    {service.subtitle}
                  </p>
                  <p className="font-sans text-xs sm:text-sm font-light text-ivory/65 leading-relaxed line-clamp-2 mb-3.5">
                    {service.description}
                  </p>

                  {/* Hover/Tap CTA */}
                  <div className="flex items-center gap-2 text-gold text-[10px] sm:text-[11px] font-sans tracking-widest uppercase transition-all duration-300 group-hover:translate-x-1">
                    <span>View Details</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal - optimized for all screen sizes & touch devices */}
      <AnimatePresence>
        {active && activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8"
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-espresso/90 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 25 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 bg-ivory max-w-xl md:max-w-3xl w-full max-h-[92dvh] overflow-y-auto shadow-2xl border border-gold/20"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Service image */}
                <div className="relative h-48 sm:h-64 md:h-full md:min-h-[380px] overflow-hidden">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-plum/20" />
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <span className="section-label block mb-3 sm:mb-4">{activeService.category}</span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-plum mb-1.5">
                      {activeService.title}
                    </h3>
                    <p className="font-sans text-[10px] sm:text-[11px] tracking-widest uppercase text-gold mb-4 sm:mb-6">
                      {activeService.subtitle}
                    </p>
                    <p className="font-sans font-light text-espresso/70 leading-relaxed text-xs sm:text-sm mb-6">
                      {activeService.description}
                    </p>

                    <div className="space-y-2.5">
                      <p className="font-sans text-[10px] tracking-widest uppercase text-espresso/40 mb-3">
                        What's Included
                      </p>
                      {activeService.features.map((f) => (
                        <div key={f} className="flex items-center gap-2.5">
                          <div className="w-3.5 h-px bg-gold flex-shrink-0" />
                          <span className="font-sans text-xs sm:text-sm font-light text-espresso/85">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-4 border-t border-gold/20">
                    <a
                      href="#contact"
                      onClick={() => setActive(null)}
                      className="btn-primary w-full justify-center text-center"
                    >
                      Book This Service
                    </a>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center text-ivory bg-plum/80 hover:bg-plum transition-colors rounded-full shadow-lg z-20"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
