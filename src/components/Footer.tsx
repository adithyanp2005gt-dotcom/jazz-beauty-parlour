import { brand, contact, social } from '../data/content';

// SVG social icons (lucide-react dropped some social icons in v1.x)
const InstagramIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const YoutubeIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

const footerLinks = [
  {
    heading: 'Services',
    links: [
      { label: 'Bridal Makeover', href: '#services' },
      { label: 'Hair Artistry', href: '#services' },
      { label: 'Skin Rituals', href: '#services' },
      { label: 'Makeup Artistry', href: '#services' },
      { label: 'Threading & Brows', href: '#services' },
      { label: 'Mehndi Art', href: '#services' },
      { label: 'Beauty & Spa', href: '#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Jazz', href: '#about' },
      { label: 'Why Choose Us', href: '#why-us' },
      { label: 'Lookbook', href: '#lookbook' },
      { label: 'Transformations', href: '#transformations' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, '')}` },
      { label: contact.email, href: `mailto:${contact.email}` },
      { label: 'Radio Junction, Karunagappally', href: contact.mapLink },
      { label: 'Book Consultation', href: '#contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-espresso overflow-hidden">
      {/* Top decorative bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Newsletter / CTA strip */}
      <div className="border-b border-ivory/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-light text-ivory mb-1">
              Your bridal journey begins here.
            </p>
            <p className="font-sans text-xs sm:text-sm font-light text-ivory/50">
              Book your private bridal consultation with Jazz Beauty & Bridal Hub.
            </p>
          </div>
          <a
            href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-shrink-0 group w-full sm:w-auto text-center"
          >
            <span>Book on WhatsApp</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <p className="font-serif text-4xl font-light text-ivory tracking-widest2 mb-1">JAZZ</p>
              <p className="font-sans text-[10px] tracking-widest2 uppercase text-gold/60">
                Beauty Parlour & Bridal Hub
              </p>
            </div>

            <p className="font-sans font-light text-ivory/40 text-sm leading-relaxed mb-4 max-w-xs">
              {brand.tagline} A sanctuary where artistry, elegance and personalised beauty care come together.
            </p>

            <a
              href={contact.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-ivory/50 hover:text-gold text-xs mb-8 max-w-xs leading-relaxed transition-colors duration-300 group"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold flex-shrink-0 mt-0.5">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="group-hover:underline">{contact.address}</span>
            </a>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {[
                { href: social.instagram, Icon: InstagramIcon, label: 'Instagram' },
                { href: social.facebook, Icon: FacebookIcon, label: 'Facebook' },
                { href: social.youtube, Icon: YoutubeIcon, label: 'YouTube' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-ivory/10 flex items-center justify-center text-ivory/40 hover:text-gold hover:border-gold/40 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <p className="font-sans text-[10px] tracking-widest2 uppercase text-gold mb-6">{heading}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-sans text-xs sm:text-sm font-light text-ivory/40 hover:text-ivory/80 transition-colors duration-300 break-all sm:break-normal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-ivory/25">
            © {new Date().getFullYear()} Jazz Beauty Parlour & Bridal Hub. All rights reserved.
          </p>
          <p className="font-sans text-[11px] text-ivory/25">
            Crafted with elegance · {brand.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
