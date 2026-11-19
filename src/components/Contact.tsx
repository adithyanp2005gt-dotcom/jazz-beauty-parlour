import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { contact } from '../data/content';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { ref, inView } = useInView(0.08);
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Jazz Beauty & Bridal Hub! I would like to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nPreferred Date: ${form.date}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const serviceOptions = [
    'Bridal Makeover',
    'Hair Artistry',
    'Skin Rituals',
    'Makeup Artistry',
    'Threading',
    'Precision Threading & Brow Shaping',
    'Mehndi Art',
    'Beauty & Spa Rituals',
    'Pre-Bridal Consultation',
    'Other Service',
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-28 md:py-36 bg-ivory overflow-hidden" ref={ref}>
      {/* Background split for large screens */}
      <div className="absolute inset-0 hidden lg:flex pointer-events-none">
        <div className="w-1/2 bg-ivory" />
        <div className="w-1/2 bg-plum" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-start">
          {/* Left: Info panel */}
          <div className="lg:pr-14 xl:pr-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <div className="w-6 sm:w-8 h-px bg-gold" />
              <span className="section-label">Connect With Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="section-title mb-5 sm:mb-6"
            >
              Reserve Your{' '}
              <span className="italic text-rosewood">Radiance</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-sans font-light text-espresso/70 text-xs sm:text-sm leading-relaxed mb-8 sm:mb-12 max-w-md"
            >
              Whether you are planning your dream bridal transformation or indulging in signature beauty rituals, our artists are at your service.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-5 sm:space-y-6"
            >
              {[
                { icon: Phone, label: 'Direct Line', value: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, '')}` },
                {
                  icon: MessageCircle,
                  label: 'WhatsApp Chat',
                  value: 'Message our concierge',
                  href: `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`,
                },
                { icon: Mail, label: 'Email Inquiries', value: contact.email, href: `mailto:${contact.email}` },
                { icon: MapPin, label: 'Studio Address', value: contact.address, href: contact.mapLink },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 sm:gap-4 group p-2 -ml-2 rounded-sm transition-colors hover:bg-gold/5"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-plum group-hover:border-plum transition-all duration-300">
                    <item.icon size={15} className="text-gold group-hover:text-ivory transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-gold mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-sans text-xs sm:text-sm font-light text-espresso/80 group-hover:text-plum transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="flex items-start gap-3.5 sm:gap-4 p-2 -ml-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Clock size={15} className="text-gold" />
                </div>
                <div>
                  <p className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-gold mb-0.5">
                    Studio Timings
                  </p>
                  <p className="font-sans text-xs sm:text-sm font-light text-espresso/80">{contact.hours.weekdays}</p>
                  <p className="font-sans text-xs sm:text-sm font-light text-espresso/80">{contact.hours.sunday}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Booking Form Container */}
          <div className="bg-plum p-6 sm:p-10 lg:p-12 xl:p-16 shadow-2xl border border-gold/20 relative rounded-sm">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-6 sm:w-8 h-px bg-gold/50" />
                <span className="text-[9px] sm:text-[10px] font-sans font-medium tracking-widest3 uppercase text-gold">
                  Appointment Request
                </span>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 sm:py-16"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 border border-gold/40 flex items-center justify-center mx-auto mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A477" strokeWidth="1.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-serif text-2xl sm:text-3xl font-light text-ivory mb-2">Request Initiated</p>
                  <p className="font-sans text-xs sm:text-sm font-light text-ivory/60 leading-relaxed max-w-sm mx-auto">
                    Thank you for reaching out. We have prepared your details in WhatsApp to complete your reservation with our concierge.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-gold/80 mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Ananya Sen"
                        required
                        className="w-full bg-ivory/5 border border-ivory/15 focus:border-gold/60 outline-none px-3.5 py-2.5 sm:py-3 font-sans text-base sm:text-sm font-light text-ivory placeholder-ivory/25 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-gold/80 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full bg-ivory/5 border border-ivory/15 focus:border-gold/60 outline-none px-3.5 py-2.5 sm:py-3 font-sans text-base sm:text-sm font-light text-ivory placeholder-ivory/25 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-gold/80 mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full bg-ivory/5 border border-ivory/15 focus:border-gold/60 outline-none px-3.5 py-2.5 sm:py-3 font-sans text-base sm:text-sm font-light text-ivory transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-gold/80 mb-1.5">
                        Service Desired
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-[#3d2030] border border-ivory/15 focus:border-gold/60 outline-none px-3.5 py-2.5 sm:py-3 font-sans text-base sm:text-sm font-light text-ivory transition-colors cursor-pointer"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-gold/80 mb-1.5">
                      Personal Note or Bridal Requirements
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Share details regarding your wedding date, functions or preferred timings..."
                      className="w-full bg-ivory/5 border border-ivory/15 focus:border-gold/60 outline-none px-3.5 py-2.5 sm:py-3 font-sans text-base sm:text-sm font-light text-ivory placeholder-ivory/25 transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="w-full btn-outline justify-center mt-3 gap-2">
                    <span>Send Booking via WhatsApp</span>
                    <Send size={14} className="text-gold" />
                  </button>

                  <p className="text-center font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-ivory/40 mt-2">
                    Quick response guaranteed within 1 hour during business hours
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
