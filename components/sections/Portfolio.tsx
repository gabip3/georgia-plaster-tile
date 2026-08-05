'use client';

import Reveal from '@/components/ui/Reveal';
import BeforeAfter from '@/components/sections/BeforeAfter';

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-abyss py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="mb-10">
            <span className="eyebrow text-gold/80">Selected Work</span>
            <h2 className="display dsp-1 mt-4 max-w-2xl text-cloud">
              Backyards, reborn<br />as private resorts.
            </h2>
          </div>
        </Reveal>

        {/* Before / After feature */}
        <Reveal>
          <BeforeAfter />
        </Reveal>
      </div>
    </section>
  );
}
