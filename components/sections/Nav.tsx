'use client';

import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { business, nav } from '@/lib/content';
import Logo from '@/components/ui/Logo';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-silk ${
        scrolled
          ? 'bg-abyss/80 py-3 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <a href="#top" className="group flex items-center" aria-label={`${business.name} home`}>
          <Logo height={scrolled ? 68 : 88} className="transition-transform duration-500 group-hover:scale-[1.03]" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[0.78rem] uppercase tracking-[0.2em] text-crystal/75 transition-colors duration-300 hover:text-cloud"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 ease-silk group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${business.phoneRaw}`}
            className="hidden items-center gap-2 text-sm text-crystal/80 transition-colors hover:text-gold md:flex"
            data-hover
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            <span className="tracking-wide">{business.phone}</span>
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-goldlite to-gold px-6 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-abyss transition-transform duration-300 hover:scale-[1.03] md:inline-block"
            data-hover
          >
            Free Estimate
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-crystal/20 text-cloud lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            data-hover
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[70] bg-abyss/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-serif text-xl text-cloud">Menu</span>
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-crystal/20 text-cloud"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-6 flex flex-col px-6" aria-label="Mobile">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-crystal/10 py-5 font-serif text-3xl text-cloud/90 transition-colors hover:text-gold"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${business.phoneRaw}`}
            onClick={() => setOpen(false)}
            className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-goldlite to-gold py-4 text-sm font-semibold uppercase tracking-[0.16em] text-abyss"
          >
            <Phone className="h-4 w-4" /> {business.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
