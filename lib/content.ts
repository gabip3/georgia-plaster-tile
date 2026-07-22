import {
  Waves, Gem, Sparkles, Hammer, Mountain, Grid3x3,
  Palmtree, PaintRoller, LifeBuoy, type LucideIcon,
} from 'lucide-react';

// Unsplash placeholder helper (swap these ids for the client's own photography later).
const ux = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

export const business = {
  name: 'Georgia Plaster & Tile',
  short: 'Georgia Plaster & Tile',
  legal: 'Georgia Plaster & Tile',
  tagline: 'Where Craftsmanship Meets Water',
  phone: '(770) 696-0736',
  phoneRaw: '+17706960736',
  email: 'georgiaplastertile@gmail.com',
  areaLabel: 'East Cobb · Greater Atlanta, Georgia',
  region: 'GA',
  locality: 'East Cobb',
  established: 1995,
  url: 'https://www.georgiaplasterandtile.com',
  hours: [
    { d: 'Monday – Friday', h: '8:00 AM – 6:00 PM' },
    { d: 'Saturday', h: '9:00 AM – 4:00 PM' },
    { d: 'Sunday', h: 'Closed' },
  ],
  cities: [
    'East Cobb', 'Marietta', 'Roswell', 'Alpharetta', 'Milton',
    'Sandy Springs', 'Buckhead', 'Johns Creek', 'Dunwoody', 'Vinings',
  ],
};

export const stats = [
  { value: '1995', label: 'Founded in Georgia' },
  { value: '282', label: 'Projects completed' },
  { value: '48', label: 'Sites in progress' },
  { value: '35', label: 'Business partners' },
];

export type Service = {
  slug: string;
  n: string;
  title: string;
  tagline: string;
  desc: string;
  icon: LucideIcon;
  tex: string;
};

export const services: Service[] = [
  {
    slug: 'luxury-pool-tile',
    n: '01',
    title: 'Luxury Pool Tile',
    tagline: 'Waterline artistry',
    desc: 'Hand-set porcelain, glass and natural stone tile that turns the waterline into a jewel, cut, aligned and grouted to a tolerance you can feel underfoot.',
    icon: Gem,
    tex: 'tex-mosaic',
  },
  {
    slug: 'plaster-finishes',
    n: '02',
    title: 'Plaster & Finishes',
    tagline: 'The surface of the water',
    desc: 'From classic white to luxury quartz and iridescent pebble finishes, polished to a flawless, durable skin that defines how your water reads in the light.',
    icon: PaintRoller,
    tex: 'tex-marble',
  },
  {
    slug: 'glass-mosaic',
    n: '03',
    title: 'Glass Mosaic',
    tagline: 'Light, captured',
    desc: 'Iridescent Italian glass mosaics that shimmer beneath the surface, shifting from sapphire to emerald as the sun moves across the yard.',
    icon: Sparkles,
    tex: 'tex-glass',
  },
  {
    slug: 'natural-stone',
    n: '04',
    title: 'Natural Stone & Travertine',
    tagline: 'Grounded in earth',
    desc: 'Travertine decks, coping and stone veneer that carry the pool into the landscape, cool underfoot, timeless in character.',
    icon: Mountain,
    tex: 'tex-travertine',
  },
  {
    slug: 'custom-spa',
    n: '05',
    title: 'Custom Spa',
    tagline: 'A private thermal ritual',
    desc: 'Raised spas and spillways engineered as sculpture, the sound of water and the glow of tile designed to work together, day and night.',
    icon: Waves,
    tex: 'tex-mosaic',
  },
  {
    slug: 'pool-renovation',
    n: '06',
    title: 'Pool Renovation',
    tagline: 'A complete rebirth',
    desc: 'Full remodels that re-imagine a dated pool as a modern resort feature, new tile, finish, coping and lighting, orchestrated as one project.',
    icon: Hammer,
    tex: 'tex-water',
  },
  {
    slug: 'outdoor-living',
    n: '07',
    title: 'Outdoor Living',
    tagline: 'Beyond the water',
    desc: 'Decking, patios and surrounds that extend the finish of the pool into an entire outdoor room, a resort you never have to leave.',
    icon: Palmtree,
    tex: 'tex-stone',
  },
  {
    slug: 'pool-restoration',
    n: '08',
    title: 'Pool Restoration',
    tagline: 'Bringing water back to life',
    desc: 'Structural repair, re-plaster and re-tile that rescue a neglected pool and return it to a flawless, swimmable state, better than the day it was built.',
    icon: LifeBuoy,
    tex: 'tex-marble',
  },
  {
    slug: 'waterline-tile',
    n: '09',
    title: 'Waterline & Detail Tile',
    tagline: 'The line that defines it',
    desc: 'Precision waterline bands, step markers and mosaic accents, the small details that separate a built pool from a crafted one.',
    icon: Grid3x3,
    tex: 'tex-glass',
  },
];

export type Material = {
  key: string;
  name: string;
  origin: string;
  note: string;
  tex: string;
  img: string;
};

export const materials: Material[] = [
  { key: 'porcelain', name: 'Italian Porcelain', origin: 'Emilia-Romagna, IT', note: 'Rectified edges, near-zero absorption.', tex: 'tex-marble', img: ux('1584384689201-e0bcbe2c7f1d') },
  { key: 'glass', name: 'Iridescent Glass', origin: 'Murano tradition', note: 'Refracts light into shifting blues.', tex: 'tex-glass', img: ux('1657399179505-12205ea153a9') },
  { key: 'travertine', name: 'Silver Travertine', origin: 'Denizli, TR', note: 'Cool underfoot, honed matte finish.', tex: 'tex-travertine', img: ux('1525468568166-6f2cd17c7ec9') },
  { key: 'stone', name: 'Natural Ledgestone', origin: 'Quarried, US', note: 'Split-face texture, organic tone.', tex: 'tex-stone', img: ux('1603369425250-b276f2006ec0') },
  { key: 'mosaic', name: 'Blue Mosaic', origin: 'Hand-set field', note: 'Depth and movement below the line.', tex: 'tex-mosaic', img: ux('1557459310-ea39155bd081') },
  { key: 'pebble', name: 'Pebble & Quartz Finish', origin: 'Aggregate blend', note: 'Durable plaster with a jeweled surface.', tex: 'tex-water', img: ux('1551918120-9739cb430c6d') },
];

export type Project = {
  title: string;
  location: string;
  category: string;
  cats: string[];
  tex: string;
  size: 'lg' | 'md' | 'sm';
  img: string;
};

export const projectCategories = ['All', 'Pools', 'Spa', 'Tile', 'Outdoor', 'Plaster', 'Deck'];

export const projects: Project[] = [
  { title: 'The Marietta Infinity', location: 'East Cobb, GA', category: 'Pools', cats: ['Pools', 'Tile'], tex: 'tex-mosaic', size: 'lg', img: ux('1571003123894-1f0594d2b5d9') },
  { title: 'Travertine Courtyard', location: 'Milton, GA', category: 'Outdoor', cats: ['Outdoor', 'Deck'], tex: 'tex-travertine', size: 'md', img: ux('1620914695139-9507be60a425') },
  { title: 'Emerald Waterline', location: 'Roswell, GA', category: 'Tile', cats: ['Tile'], tex: 'tex-glass', size: 'md', img: ux('1687160954681-230591e7b494') },
  { title: 'Buckhead Thermal Spa', location: 'Buckhead, GA', category: 'Spa', cats: ['Spa', 'Tile'], tex: 'tex-mosaic', size: 'sm', img: ux('1582719508461-905c673771fd') },
  { title: 'Pearl Quartz Renewal', location: 'Alpharetta, GA', category: 'Plaster', cats: ['Plaster', 'Pools'], tex: 'tex-marble', size: 'md', img: ux('1566305977571-5666677c6e98') },
  { title: 'Sandy Springs Resort', location: 'Sandy Springs, GA', category: 'Pools', cats: ['Pools', 'Outdoor'], tex: 'tex-water', size: 'sm', img: ux('1500815845799-7748ca339f27') },
  { title: 'Ledgestone Grotto', location: 'Johns Creek, GA', category: 'Outdoor', cats: ['Outdoor', 'Deck'], tex: 'tex-stone', size: 'md', img: ux('1456083334823-6e5bc7132162') },
  { title: 'Vinings Glass House', location: 'Vinings, GA', category: 'Tile', cats: ['Tile', 'Spa'], tex: 'tex-glass', size: 'lg', img: ux('1695996472807-bf0763dd23ea') },
];

export const process = [
  { n: '01', title: 'Consultation', desc: 'We walk your yard, understand how you live outdoors, and translate it into a vision for the water.' },
  { n: '02', title: 'Design', desc: 'Finishes, tile lines and lighting are composed together, you see the resort before we build it.' },
  { n: '03', title: 'Material Selection', desc: 'Hand-picked porcelain, glass, stone and plaster, curated to your architecture and light.' },
  { n: '04', title: 'Installation', desc: 'Our own artisans set every tile and trowel every finish, no subcontracted shortcuts.' },
  { n: '05', title: 'Final Inspection', desc: 'A meticulous walkthrough, water balanced and brought to life. We leave only when it is flawless.' },
];

export const faqs = [
  {
    q: 'What makes a luxury pool tile installation different?',
    a: 'It is entirely in the tolerances. Rectified porcelain and hand-cut glass are set with consistent grout lines, level waterlines and mitered corners, the details you feel underfoot and see in the reflection. Our artisans have refined this for over 20 years across Greater Atlanta.',
  },
  {
    q: 'Do you handle full pool renovations, not just tile?',
    a: 'Yes. We re-plaster, re-tile, replace coping, rebuild spas and restore structure as a single orchestrated project, so your finishes, waterline and deck read as one cohesive design.',
  },
  {
    q: 'Which finishes do you offer?',
    a: 'From classic white plaster to premium quartz and iridescent pebble finishes, plus glass mosaic, natural stone, travertine and Italian porcelain tile, selected to match your home and how the light falls on your yard.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We are based in East Cobb and serve the Greater Atlanta area, Marietta, Roswell, Alpharetta, Milton, Sandy Springs, Buckhead, Johns Creek and beyond.',
  },
  {
    q: 'How long does a typical tile or plaster project take?',
    a: 'Most waterline tile and re-plaster projects run one to three weeks depending on scope and weather. Full renovations are scheduled around your season so the pool is ready when you want to use it.',
  },
];

// Real commercial partners, as listed by Georgia Plaster & Tile.
export const clients = ['LA Fitness', 'American Pools', 'Atlanta Pools', 'Sweetwater Pools'];

export const nav = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Materials', href: '#materials' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];
