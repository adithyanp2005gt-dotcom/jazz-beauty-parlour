import { motion, AnimatePresence } from 'framer-motion';
import { useScrollY } from '../hooks/useInView';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { contact } from '../data/content';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const [_activeSection, _setActiveSection] = useState('');

  const isScrolled = scrollY > 60;

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-gold/20 py-3 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex flex-col leading-none group">
            <span
              className={`font-serif font-light tracking-widest2 transition-all duration-500 ${
                isScrolled ? 'text-plum text-2xl' : 'text-ivory text-3xl'
              }`}
            >
              JAZZ
            </span>
            <span
              className={`font-sans font-light tracking-widest text-[9px] uppercase transition-all duration-500 ${
                isScrolled ? 'text-rosewood' : 'text-gold/80'
              }`}
            >
              Beauty & Bridal Hub
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-sans text-[11px] font-medium tracking-widest uppercase transition-all duration-300 relative group ${
                  isScrolled ? 'text-espresso hover:text-plum' : 'text-ivory/80 hover:text-ivory'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[10px] font-sans font-medium tracking-widest2 uppercase transition-all duration-300 ${
                isScrolled
                  ? 'bg-plum text-ivory hover:bg-espresso'
                  : 'bg-ivory/10 border border-ivory/40 text-ivory hover:bg-ivory/20'
              }`}
            >
              Book Now
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-plum' : 'text-ivory'
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-plum flex flex-col justify-center items-center lg:hidden px-6 py-10 overflow-y-auto"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-ivory/80 hover:text-ivory transition-colors"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>

            <div className="text-center mb-10">
              <p className="font-serif text-4xl sm:text-5xl font-light text-ivory mb-1 tracking-widest2">JAZZ</p>
              <p className="font-sans text-[9px] tracking-widest3 text-gold/80 uppercase">Beauty & Bridal Hub</p>
            </div>

            <nav className="flex flex-col items-center gap-6 sm:gap-7 my-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="font-sans text-sm font-light tracking-widest2 uppercase text-ivory/85 hover:text-gold transition-colors duration-300 py-1"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-gold/20 w-full max-w-xs text-center">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-outline w-full justify-center text-center text-xs"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
