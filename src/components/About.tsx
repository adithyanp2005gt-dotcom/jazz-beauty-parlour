import { motion, type Variants } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { stats } from '../data/content';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function About() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="about" className="relative py-20 sm:py-28 md:py-36 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-plum/[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12" ref={ref}>
        {/* Top editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-24">
          {/* Text side */}
          <div>
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0}
              variants={fadeUp}
              className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <div className="w-6 sm:w-8 h-px bg-gold" />
              <span className="section-label">Our Story</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={1}
              variants={fadeUp}
              className="section-title mb-6 sm:mb-8"
            >
              A Sanctuary of{' '}
              <span className="italic text-rosewood">Beauty</span>{' '}
              & Artistry
            </motion.h2>

            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={2}
              variants={fadeUp}
              className="space-y-4 sm:space-y-5 text-espresso/70 font-sans font-light leading-relaxed text-sm sm:text-base"
            >
              <p>
                At Jazz Beauty Parlour & Bridal Hub, we believe that beauty is not about transformation — it is about revelation. We help every woman discover and celebrate the most radiant version of herself.
              </p>
              <p>
                Founded on the principles of artistry, elegance and personalised care, Jazz has become a trusted name for brides, beauty enthusiasts and women who demand nothing but the finest.
              </p>
              <p>
                Our team of certified beauty artists brings together years of expertise across bridal makeup, hair artistry, skincare and wellness — creating experiences that are as memorable as the moments they celebrate.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={3}
              variants={fadeUp}
              className="mt-8 sm:mt-10 flex items-center gap-6"
            >
              <a href="#services" className="btn-outline-dark group">
                <span>Explore Services</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Image side — editorial asymmetric */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative px-2 sm:px-0"
          >
            {/* Main AI beauty editorial image */}
            <div className="relative overflow-hidden rounded-sm aspect-[4/5] shadow-2xl">
              <img
                src="/images/about-beauty.jpg"
                alt="Jazz Beauty Studio — Editorial AI Beauty Art"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/30 via-transparent to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-4 left-4 sm:-bottom-8 sm:-left-6 bg-ivory border border-gold/30 p-4 sm:p-6 shadow-xl max-w-[170px] sm:max-w-[220px]"
            >
              <p className="font-serif text-2xl sm:text-3xl font-light text-plum mb-1">8+</p>
              <p className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-gold mb-2 sm:mb-3">Years of Artistry</p>
              <div className="w-8 h-px bg-gold" />
            </motion.div>

            {/* Decorative frame border */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-20 h-20 sm:w-32 sm:h-32 border border-gold/30 pointer-events-none" />
          </motion.div>
        </div>

        {/* Stats row - fully responsive grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 border border-gold/20 bg-ivory/50"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i}
              variants={fadeUp}
              className={`p-5 sm:p-8 md:p-10 text-center ${
                i % 2 === 0 ? 'border-r border-gold/20' : ''
              } ${
                i >= 2 ? 'border-t border-gold/20 lg:border-t-0' : ''
              } ${
                i < 3 ? 'lg:border-r lg:border-gold/20' : ''
              }`}
            >
              <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-plum mb-1.5">{stat.number}</p>
              <p className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-espresso/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
