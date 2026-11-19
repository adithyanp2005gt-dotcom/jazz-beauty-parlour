// ============================================================
// JAZZ BEAUTY PARLOUR & BRIDAL HUB — Site Content
// All images are locally hosted in public/images/ for 100% reliability
// ============================================================

export const brand = {
  name: 'JAZZ',
  fullName: 'Jazz Beauty Parlour & Bridal Hub',
  tagline: 'Where Beauty Meets Artistry.',
  description:
    'A sanctuary of beauty and artistry, dedicated to celebrating every woman at her most radiant self.',
};

export const contact = {
  phone: '+91 99617 51627',
  whatsapp: '+919961751627',
  email: 'jazzzbeautyparlour@gmail.com',
  address: 'S.W Thazhava, Thazhava P.O, Radio Junction, Karunagappally, Kollam, Kerala',
  hours: {
    weekdays: 'Monday – Saturday: 9:00 AM – 8:00 PM',
    sunday: 'Sunday: 10:00 AM – 6:00 PM',
  },
  mapLink: 'https://maps.google.com/?q=Radio+Junction+Thazhava+Karunagappally+Kollam+Kerala',
};

export const social = {
  instagram: 'https://instagram.com/jazzbeautyhub', // Replace with actual handle
  facebook: 'https://facebook.com/jazzbeautyhub',   // Replace with actual handle
  youtube: 'https://youtube.com/@jazzbeautyhub',    // Replace with actual handle
  pinterest: 'https://pinterest.com/jazzbeautyhub', // Replace with actual handle
};

export const services = [
  {
    id: 'bridal',
    category: 'Bridal',
    title: 'Bridal Makeover',
    subtitle: 'Complete Bridal Package',
    description:
      'Your wedding day deserves nothing less than perfection. Our expert bridal artists craft timeless looks that honour your heritage while embracing modern elegance.',
    image: '/images/hero-bride.jpg',
    features: ['Pre-bridal consultation', 'Trial session & skin prep', 'Wedding day royal bridal styling', 'Dupatta & jewelry draping'],
  },
  {
    id: 'hair',
    category: 'Hair',
    title: 'Hair Artistry',
    subtitle: 'Cut, Colour & Style',
    description:
      'Transform your hair with our master stylists. From precision cuts to luxurious colour treatments and intricate bridal updos — your hair is our canvas.',
    image: '/images/service-hair.jpg',
    features: ['Precision haircuts', 'Global & balayage colouring', 'Keratin & botox treatments', 'Intricate bridal updos'],
  },
  {
    id: 'skin',
    category: 'Skincare',
    title: 'Skin Rituals',
    subtitle: 'Glow & Radiance Treatments',
    description:
      'Reveal your most luminous skin. Our evidence-based skincare treatments are tailored to your unique complexion for a natural, lasting glow.',
    image: '/images/service-skin.jpg',
    features: ['Hydra-radiance facials', 'Botanical brightening peel', '24k gold leaf firming', 'Pre-bridal glow packages'],
  },
  {
    id: 'makeup',
    category: 'Makeup',
    title: 'Makeup Artistry',
    subtitle: 'From Natural to Dramatic',
    description:
      'Whether you desire a soft everyday glow or a bold editorial statement, our makeup artists sculpt and define your beauty with the finest luxury products.',
    image: '/images/service-makeup.jpg',
    features: ['HD & Airbrush makeup', 'Engagement & reception glam', 'Cocktail party aesthetics', 'Editorial & fashion shoots'],
  },
  {
    id: 'threading',
    category: 'Threading & Brows',
    title: 'Threading & Brow Artistry',
    subtitle: 'Eyebrow Shaping & Facial Definition',
    description:
      'Masterful precision threading using organic antibacterial cotton thread. We sculpt clean, defined arches that complement your facial symmetry while gently caring for sensitive skin.',
    image: '/images/service-threading.jpg',
    features: [
      'Eyebrow arch mapping & shaping',
      'Upper lip, chin & forehead threading',
      'Full face herbal threading',
      'Soothing aloe vera & rose water aftercare',
    ],
  },
  {
    id: 'mehndi',
    category: 'Mehndi',
    title: 'Mehndi Art',
    subtitle: 'Bridal & Festive Designs',
    description:
      'From intricate bridal mehndi patterns to elegant festive designs, our mehndi artists weave stories of love and tradition into every stroke.',
    image: '/images/service-mehndi.jpg',
    features: ['Full bridal hand & feet mehndi', 'Arabic & floral fusion', 'Marwari traditional motifs', 'Organic dark-stain henna'],
  },
  {
    id: 'spa',
    category: 'Wellness',
    title: 'Beauty & Spa',
    subtitle: 'Relax, Restore, Rejuvenate',
    description:
      'Surrender to pure indulgence. Our spa treatments are crafted to restore balance, nourish your body and elevate your spirit.',
    image: '/images/service-spa.jpg',
    features: ['Aromatherapy body polish', 'Paraffin manicure & pedicure', 'Organic fruit body wraps', 'Stress-relief head massage'],
  },
];

export const whyChooseUs = [
  {
    number: '01',
    title: 'Master Artistry',
    description:
      'Our team of certified beauty artists brings years of expertise in bridal, editorial and luxury beauty.',
  },
  {
    number: '02',
    title: 'Luxury Formulations',
    description:
      'We use only the finest international beauty brands — hypoallergenic, skin-loving and long-lasting.',
  },
  {
    number: '03',
    title: 'Bespoke Experience',
    description:
      'Every client receives a tailored consultation to ensure their unique vision and aesthetic is brought to life.',
  },
  {
    number: '04',
    title: 'Complete Bridal Sanctuary',
    description:
      'From 6-month pre-bridal skincare regimens to wedding-day artistry, we are your end-to-end bridal partner.',
  },
];

// Testimonials using monogram badges — No real human faces
export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Bride, December 2024',
    quote:
      'Jazz Beauty Parlour made me feel like royalty on my wedding day. The artists were calm, professional, and extraordinarily talented. My bridal look remained immaculate throughout the entire night.',
    rating: 5,
    initials: 'PS',
    avatarColor: '#A66D78', // rosewood
  },
  {
    id: 2,
    name: 'Anjali Menon',
    role: 'Bride, October 2024',
    quote:
      'I had both my trial and wedding day styling done at Jazz. The attention to detail was breathtaking. They captured my aesthetic perfectly — timeless, royal and uniquely me.',
    rating: 5,
    initials: 'AM',
    avatarColor: '#482638', // plum
  },
  {
    id: 3,
    name: 'Meera Nair',
    role: 'Client, Signature Skin Rituals',
    quote:
      'The best salon and spa experience in the city. The tranquil ambience, courteous staff, and visible results after every session make Jazz my ultimate sanctuary.',
    rating: 5,
    initials: 'MN',
    avatarColor: '#C6A477', // gold
  },
  {
    id: 4,
    name: 'Fatima Khan',
    role: 'Bride, January 2025',
    quote:
      'From the intricate mehndi to the dupatta draping and makeup — Jazz handled my complete bridal look with sheer perfection. Every guest was complimenting my look!',
    rating: 5,
    initials: 'FK',
    avatarColor: '#5a2d46', // deep plum variant
  },
];

export const lookbook = [
  {
    id: 1,
    title: 'The Regal Bride',
    image: '/images/hero-bride.jpg',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 2,
    title: 'Golden Radiance',
    image: '/images/lookbook-makeup.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    title: 'Royal Kundan Jewels',
    image: '/images/why-choose-us.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    title: 'Mehndi Elegance',
    image: '/images/lookbook-mehndi.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    title: 'Glass Skin Rituals',
    image: '/images/service-skin.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    title: 'High-Fashion Beauty Art',
    image: '/images/about-beauty.jpg',
    span: 'col-span-2 row-span-1',
  },
];

export const transformations = [
  {
    id: 1,
    before: '/images/transform-before-1.jpg',
    after: '/images/hero-bride.jpg',
    label: 'Bespoke Bridal Transformation',
  },
  {
    id: 2,
    before: '/images/transform-before-2.jpg',
    after: '/images/why-choose-us.jpg',
    label: 'Royal Bridal Adornment',
  },
];

export const stats = [
  { number: '500+', label: 'Brides Styled' },
  { number: '8+', label: 'Years of Artistry' },
  { number: '5000+', label: 'Happy Clients' },
  { number: '15+', label: 'Master Artists' },
];
