import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { testimonials } from '../data/content';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const { ref, inView } = useInView(0.08);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 md:py-36 overflow-hidden">
      {/* Background soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory via-ivory to-rosewood/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative" ref={ref}>
        {/* Header */}
        <div className="mb-14 sm:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <div className="w-6 sm:w-8 h-px bg-gold" />
            <span className="section-label">Client Radiance</span>
            <div className="w-6 sm:w-8 h-px bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="section-title"
          >
            Words of{' '}
            <span className="italic text-rosewood">Admiration</span>
          </motion.h2>
        </div>

        {/* Featured testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white border border-gold/15 shadow-md p-6 sm:p-10 md:p-16">
            {/* Large quote watermark */}
            <div className="absolute top-4 sm:top-6 left-6 sm:left-8 font-serif text-6xl sm:text-8xl text-gold/10 leading-none select-none pointer-events-none">
              "
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6 sm:mb-8 relative z-10">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={14} className="text-gold fill-gold" />
              ))}
            </div>

            {/* Quote */}
            <motion.blockquote
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="font-serif text-lg sm:text-xl md:text-2xl font-light text-espresso text-center leading-relaxed italic mb-8 sm:mb-10 px-2 sm:px-6 relative z-10"
            >
              "{testimonials[current].quote}"
            </motion.blockquote>

            {/* Client info with monogram badge - No real photos */}
            <motion.div
              key={`info-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center gap-2.5 relative z-10"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gold/40 flex items-center justify-center shadow-inner"
                style={{ backgroundColor: testimonials[current].avatarColor }}
              >
                <span className="font-serif text-base sm:text-lg font-medium text-ivory tracking-widest">
                  {testimonials[current].initials}
                </span>
              </div>
              <div className="text-center">
                <p className="font-serif text-base sm:text-lg font-light text-plum">{testimonials[current].name}</p>
                <p className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-gold/80 mt-0.5">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 right-2 sm:right-4 flex justify-between pointer-events-none z-20">
              <button
                onClick={prev}
                className="pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 bg-white/90 border border-gold/25 flex items-center justify-center text-gold hover:text-plum hover:border-plum transition-all duration-300 shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 bg-white/90 border border-gold/25 flex items-center justify-center text-gold hover:text-plum hover:border-plum transition-all duration-300 shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5 sm:mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? 'w-6 h-1.5 bg-plum' : 'w-1.5 h-1.5 bg-plum/20'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Responsive grid of smaller testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-12 sm:mt-16">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setCurrent(i)}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className={`text-left p-4 sm:p-5 border transition-all duration-300 cursor-pointer ${
                i === current
                  ? 'border-gold bg-plum text-ivory shadow-lg'
                  : 'border-gold/15 hover:border-gold/40 bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={10}
                      className={i === current ? 'text-gold fill-gold' : 'text-gold/70 fill-gold/70'}
                    />
                  ))}
                </div>
                <span
                  className={`text-[9px] font-serif font-light px-2 py-0.5 rounded-full ${
                    i === current ? 'bg-gold/20 text-gold' : 'bg-plum/10 text-plum'
                  }`}
                >
                  {t.initials}
                </span>
              </div>
              <p
                className={`font-sans font-light text-xs leading-relaxed mb-3 line-clamp-3 ${
                  i === current ? 'text-ivory/80' : 'text-espresso/60'
                }`}
              >
                "{t.quote}"
              </p>
              <p
                className={`font-sans text-[10px] font-medium tracking-widest uppercase ${
                  i === current ? 'text-gold' : 'text-plum/80'
                }`}
              >
                {t.name}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
