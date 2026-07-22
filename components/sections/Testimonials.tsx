'use client';

import Reveal from '@/components/ui/Reveal';
import { clients, business } from '@/lib/content';

export default function Testimonials() {
  const marquee = [...business.cities, ...business.cities];
  return (
    <section className="relative overflow-hidden bg-deep py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="mb-14 max-w-xl">
            <span className="eyebrow text-gold/80">Trusted Across Georgia</span>
            <h2 className="display dsp-2 mt-4 text-cloud">
              Proud to partner with Atlanta&apos;s leading pool companies and commercial properties.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {clients.map((c) => (
              <div
                key={c}
                className="flex h-28 items-center justify-center rounded-[4px] border border-crystal/8 bg-marine/25 px-3 text-center transition-colors duration-500 hover:border-gold/25"
              >
                <span className="whitespace-nowrap font-serif text-cloud/80 text-[clamp(1rem,2.4vw,1.25rem)]">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
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
