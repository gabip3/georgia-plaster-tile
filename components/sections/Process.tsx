'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { process } from '@/lib/content';

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.6'] });
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" className="relative overflow-hidden bg-abyss py-28 md:py-40">
      <div className="absolute inset-0 tex-caustics opacity-10" aria-hidden />
      <div className="relative mx-auto max-w-[1100px] px-5 md:px-10">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="eyebrow text-gold/80">How We Work</span>
            <h2 className="display dsp-1 mx-auto mt-4 max-w-2xl text-cloud">
              Five deliberate steps<br />to a flawless result.
            </h2>
          </div>
        </Reveal>

        <div ref={ref} className="relative">
          {/* Track */}
          <div className="absolute left-[26px] top-0 h-full w-px bg-crystal/12 md:left-1/2" aria-hidden />
          <motion.div style={{ height }} className="absolute left-[26px] top-0 w-px bg-gradient-to-b from-gold via-aqua to-teal md:left-1/2" aria-hidden />

          <div className="flex flex-col gap-14">
            {process.map((step, i) => (
              <Reveal key={step.n} delay={0.05}>
                <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Node */}
                  <div className="relative z-10 grid h-[54px] w-[54px] shrink-0 place-items-center rounded-full border border-gold/40 bg-abyss md:absolute md:left-1/2 md:-translate-x-1/2">
                    <span className="font-serif text-lg text-gradient-gold">{step.n}</span>
                    <span className="absolute inset-0 animate-ping rounded-full border border-gold/20" style={{ animationDuration: '3.5s' }} />
                  </div>
                  {/* Content */}
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <h3 className="font-serif text-2xl text-cloud md:text-3xl">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-crystal/65">{step.desc}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
