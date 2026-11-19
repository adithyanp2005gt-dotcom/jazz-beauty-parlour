import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { whyChooseUs } from '../data/content';

export default function WhyChooseUs() {
  const { ref, inView } = useInView(0.08);

  return (
    <section id="why-jazz" className="relative py-20 sm:py-28 md:py-36 bg-plum overflow-hidden">
      {/* Decorative subtle background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6A477' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative" ref={ref}>
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <div className="w-6 sm:w-8 h-px bg-gold" />
            <span className="text-[9px] sm:text-[10px] font-sans font-medium tracking-widest3 uppercase text-gold">
              The Jazz Distinction
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="section-title-light max-w-2xl"
          >
            Why Discerning Brides Choose{' '}
            <span className="italic text-gold">Jazz</span>
          </motion.h2>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Reasons list */}
          <div className="space-y-8 sm:space-y-10">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="flex gap-5 sm:gap-8 group"
              >
                <div className="flex-shrink-0">
                  <span className="font-serif text-4xl sm:text-5xl font-light text-gold/25 group-hover:text-gold/50 transition-colors duration-300">
                    {item.number}
                  </span>
                </div>
                <div className="pt-1.5 sm:pt-2">
                  <div className="w-6 sm:w-8 h-px bg-gold mb-3 sm:mb-4" />
                  <h3 className="font-serif text-lg sm:text-xl font-light text-ivory mb-2 sm:mb-3">{item.title}</h3>
                  <p className="font-sans font-light text-ivory/60 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Large AI bridal jewelry image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative overflow-hidden aspect-[3/4] shadow-2xl">
              <img
                src="/images/why-choose-us.jpg"
                alt="Jazz Beauty — Royal AI Bridal Jewels & Artistry"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/30 to-transparent" />

              {/* Quote overlay */}
              <div className="absolute bottom-6 sm:bottom-8 left-5 sm:left-6 right-5 sm:right-6">
                <div className="w-8 h-px bg-gold mb-3 sm:mb-4" />
                <p className="font-serif text-lg sm:text-xl font-light text-ivory leading-relaxed italic">
                  "Every bride deserves to celebrate her most radiant, timeless elegance."
                </p>
                <p className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-gold mt-2 sm:mt-3">
                  — Jazz Beauty Philosophy
                </p>
              </div>
            </div>

            {/* Decorative border element */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-32 sm:h-32 border border-gold/30 pointer-events-none" />
          </motion.div>
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-14 sm:mt-20 border border-gold/20 p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-plum/40 backdrop-blur-sm"
        >
          <div>
            <p className="font-serif text-xl sm:text-2xl font-light text-ivory mb-1">
              Ready to begin your bridal journey?
            </p>
            <p className="font-sans text-xs sm:text-sm font-light text-ivory/50">
              Schedule an exclusive consultation with our master bridal stylists today.
            </p>
          </div>
          <a href="#contact" className="btn-outline flex-shrink-0 w-full sm:w-auto text-center">
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
