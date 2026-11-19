import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { contact } from '../data/content';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden flex items-center justify-center py-24 sm:py-28 lg:py-32"
    >
      {/* Background cinematic video with parallax — strictly muted with no audio */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0 hero-parallax"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-bride.jpg"
          className="w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/hero_background.mp4" type="video/mp4" />
          {/* Fallback image if video cannot be played */}
          <img
            src="/images/hero-bride.jpg"
            alt="Jazz Bridal Artistry — Background"
            className="w-full h-full object-cover object-center"
          />
        </video>

        {/* Sophisticated layered overlays for editorial contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/65 to-espresso/35 sm:to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-transparent to-espresso/35 pointer-events-none" />
      </motion.div>

      {/* Grain overlay for tactile high-fashion film feel */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-25"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vertical label - editorial detail (large screens) */}
      <div className="absolute left-6 xl:left-10 top-1/2 -translate-y-1/2 z-10 hidden xl:flex items-center gap-3">
        <div className="w-px h-20 bg-gold/40" />
        <span className="writing-vertical text-[9px] font-sans tracking-widest2 uppercase text-gold/60 rotate-180">
          Luxury Beauty & Bridal Studio
        </span>
      </div>

      {/* Scroll indicator (large screens) */}
      <div className="absolute right-6 xl:right-10 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col items-center gap-3">
        <span className="writing-vertical text-[9px] font-sans tracking-widest2 uppercase text-ivory/40 rotate-180">
          Scroll to Explore
        </span>
        <div className="w-px h-20 bg-ivory/20" />
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full"
      >
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8"
          >
            <div className="w-6 sm:w-8 h-px bg-gold" />
            <span className="text-[9px] sm:text-[10px] font-sans font-medium tracking-widest3 uppercase text-gold">
              Where Beauty Meets Artistry
            </span>
          </motion.div>

          {/* Main heading with fluid scaling */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-light text-ivory leading-[1.08] mb-5 sm:mb-6"
            style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5.8rem)' }}
          >
            Where Beauty
            <br />
            <span className="italic text-gold">Meets Artistry.</span>
          </motion.h1>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans font-light text-ivory/80 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg"
          >
            Jazz Beauty Parlour & Bridal Hub — a sanctuary of modern luxury and bespoke bridal styling, celebrating your most radiant self.
          </motion.p>

          {/* CTA buttons - responsive stack on mobile, row on tablet/desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10"
          >
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline group text-center"
            >
              <span>Book Appointment</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#services" className="btn-outline group text-center">
              <span>Explore Services</span>
            </a>
          </motion.div>

          {/* Stats row - completely in normal document flow, eliminating any overlap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-6 sm:pt-8 border-t border-ivory/15 flex flex-wrap items-center gap-8 sm:gap-14"
          >
            {[
              { n: '500+', l: 'Brides Styled' },
              { n: '8+', l: 'Years of Artistry' },
              { n: '5000+', l: 'Happy Clients' },
            ].map((stat) => (
              <div key={stat.l} className="text-left">
                <p className="font-serif text-2xl sm:text-3xl font-light text-gold leading-none">{stat.n}</p>
                <p className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-ivory/60 mt-1.5">{stat.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue (desktop only) */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="text-ivory/40" size={20} />
      </motion.div>
    </section>
  );
}
