import { Phone, Mail, MapPin } from 'lucide-react';
import { business, nav, services } from '@/lib/content';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-crystal/10 bg-abyss pt-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {/* Big brand line */}
        <div className="mb-16 border-b border-crystal/10 pb-16">
          <h2 className="display text-[clamp(2.4rem,8vw,7rem)] leading-[0.9] text-cloud/90">
            Craftsmanship<br /><span className="italic text-gradient-water">that holds water.</span>
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Logo height={76} />

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-crystal/55">
              East Cobb&apos;s trusted artisans of luxury pool tile, plaster and stone. Transforming
              Atlanta backyards into private resorts for over two decades.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="mb-5 text-[0.66rem] uppercase tracking-[0.22em] text-gold/70">Explore</h3>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-crystal/60 transition-colors hover:text-gold" data-hover>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-5 text-[0.66rem] uppercase tracking-[0.22em] text-gold/70">Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug} className="text-sm text-crystal/60">{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[0.66rem] uppercase tracking-[0.22em] text-gold/70">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li><a href={`tel:${business.phoneRaw}`} className="flex items-center gap-3 text-crystal/60 transition-colors hover:text-gold" data-hover><Phone className="h-4 w-4" /> {business.phone}</a></li>
              <li><a href={`mailto:${business.email}`} className="flex items-center gap-3 text-crystal/60 transition-colors hover:text-gold" data-hover><Mail className="h-4 w-4" /> {business.email}</a></li>
              <li className="flex items-start gap-3 text-crystal/60"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {business.areaLabel}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-crystal/10 py-8 text-[0.72rem] text-crystal/40 md:flex-row">
          <span>© {business.established}–2026 {business.name}. All rights reserved.</span>
          <span className="flex items-center gap-2">Licensed &amp; insured · Family-owned in Georgia</span>
        </div>
      </div>

      {/* Water horizon glow */}
      <div className="pointer-events-none h-24 bg-gradient-to-t from-teal/20 to-transparent" aria-hidden />
    </footer>
  );
}
