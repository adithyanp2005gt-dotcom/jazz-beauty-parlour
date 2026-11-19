import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState, useRef } from 'react';
import { transformations } from '../data/content';

function TransformCard({ item }: { item: typeof transformations[0] }) {
  const [sliderX, setSliderX] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderX(Math.max(5, Math.min(95, x)));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updateSlider(e.clientX);
  };
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSlider(e.clientX);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches[0]) updateSlider(e.touches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) updateSlider(e.touches[0].clientX);
  };

  return (
    <div className="space-y-4">
      {/* Slider container with touch-none for flawless mobile swiping */}
      <div
        ref={containerRef}
        className="relative overflow-hidden select-none cursor-ew-resize aspect-[4/5] sm:aspect-[3/4] shadow-xl border border-gold/20 touch-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After image (full width) */}
        <img
          src={item.after}
          alt="After transformation"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderX}%` }}
        >
          <img
            src={item.before}
            alt="Before transformation"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${10000 / sliderX}%`, maxWidth: 'none' }}
            draggable={false}
          />
          <div className="absolute inset-0 bg-espresso/25" />

          {/* Before label */}
          <div className="absolute bottom-4 left-4 z-10">
            <span className="text-[9px] font-sans tracking-widest2 uppercase text-ivory/85 border border-ivory/40 bg-espresso/40 px-2.5 py-1 backdrop-blur-sm">
              Before
            </span>
          </div>
        </div>

        {/* Slider divider line */}
        <div
          className="absolute top-0 bottom-0 w-[1.5px] bg-ivory shadow-2xl z-10 pointer-events-none"
          style={{ left: `${sliderX}%` }}
        >
          {/* Circular drag handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-ivory shadow-2xl flex items-center justify-center border border-gold/40">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#482638" strokeWidth="2.5">
              <path d="M8 5l-5 7 5 7M16 5l5 7-5 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* After label */}
        <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
          <span className="text-[9px] font-sans tracking-widest2 uppercase text-ivory/85 border border-ivory/40 bg-espresso/40 px-2.5 py-1 backdrop-blur-sm">
            After
          </span>
        </div>

        {/* Subtle gradient vignette at sides */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(72,38,56,0.2) 0%, transparent 15%, transparent 85%, rgba(72,38,56,0.2) 100%)',
          }}
        />
      </div>

      <div className="text-center">
        <p className="font-serif text-lg sm:text-xl font-light text-espresso">{item.label}</p>
        <p className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-gold mt-1">
          Drag or swipe to reveal
        </p>
      </div>
    </div>
  );
}

export default function Transformations() {
  const { ref, inView } = useInView(0.08);

  return (
    <section id="transformations" className="relative py-20 sm:py-28 md:py-36 bg-plum/[0.03] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12" ref={ref}>
        {/* Header */}
        <div className="mb-14 sm:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <div className="w-6 sm:w-8 h-px bg-gold" />
            <span className="section-label">The Jazz Effect</span>
            <div className="w-6 sm:w-8 h-px bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="section-title"
          >
            Artistic{' '}
            <span className="italic text-rosewood">Transformations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-sans font-light text-espresso/60 mt-3 sm:mt-4 max-w-md mx-auto text-xs sm:text-sm leading-relaxed"
          >
            Drag or swipe the slider to experience the distinction of Jazz styling.
          </motion.p>
        </div>

        {/* Slider cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-3xl mx-auto"
        >
          {transformations.map((item) => (
            <TransformCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
