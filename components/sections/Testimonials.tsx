'use client';

import Reveal from '@/components/ui/Reveal';
import { testimonials, business } from '@/lib/content';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const marquee = [...business.cities, ...business.cities];
  return (
    <section className="relative overflow-hidden bg-deep py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="mb-14 flex items-center gap-4">
            <span className="h-px w-12 bg-gold/50" />
            <span className="eyebrow text-gold/80">Trusted by Atlanta&apos;s Finest Homes</span>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="group flex h-full flex-col rounded-[4px] border border-crystal/8 bg-marine/25 p-8 transition-colors duration-500 hover:border-gold/25">
                <Quote className="h-8 w-8 text-gold/50" strokeWidth={1.2} />
                <blockquote className="mt-5 flex-1 font-serif text-xl italic leading-snug text-cloud/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-crystal/10 pt-5">
                  <span className="text-sm text-crystal/70">{t.author}, {t.place}</span>
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Service-area marquee */}
      <div className="marquee mt-20 flex overflow-hidden border-y border-crystal/8 py-6">
        <div className="marquee-track gap-10">
          {marquee.map((c, i) => (
            <span key={i} className="flex items-center gap-10 font-serif text-2xl text-crystal/25">
              {c} <span className="text-gold/40">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
