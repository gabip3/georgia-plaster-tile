'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { materials } from '@/lib/content';
import SmartImage from '@/components/ui/SmartImage';

export default function Materials() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-72%']);

  // On mobile / reduced motion, fall back to a normal horizontal scroll strip.
  if (reduce) {
    return (
      <section id="materials" className="bg-deep py-24">
        <Header />
        <div className="flex gap-4 overflow-x-auto px-5 pb-4 md:px-10">
          {materials.map((m) => <Card key={m.key} m={m} />)}
        </div>
      </section>
    );
  }

  return (
    <section id="materials" ref={ref} className="relative bg-deep" style={{ height: '320vh' }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <Header />
        <motion.div style={{ x }} className="flex gap-6 px-5 md:px-10">
          {materials.map((m) => <Card key={m.key} m={m} />)}
          <div className="flex w-[60vw] shrink-0 items-center md:w-[30vw]">
            <div>
              <div className="font-serif text-4xl text-gradient-gold">Yours next.</div>
              <p className="mt-3 max-w-xs text-crystal/60">
                We&apos;ll bring physical samples to your home and lay them against your light.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="mx-auto mb-10 w-full max-w-[1400px] px-5 md:px-10">
      <div>
        <span className="eyebrow text-gold/80">The Material Library</span>
      </div>
      <h2 className="display dsp-2 mt-4 max-w-2xl text-cloud">
        Real materials. Hover to change the finish &amp; light.
      </h2>
    </div>
  );
}

function Card({ m }: { m: (typeof materials)[number] }) {
  return (
    <article
      className="group relative aspect-[3/4] w-[78vw] shrink-0 overflow-hidden rounded-[4px] tile-edge sm:w-[46vw] md:w-[30vw] lg:w-[24vw]"
      data-hover
    >
      <SmartImage
        src={m.img}
        alt={`${m.name} tile and stone finish sample`}
        tex={m.tex}
        imgClassName="transition-all duration-700 ease-silk group-hover:scale-105 group-hover:brightness-110 group-hover:saturate-125"
      />
      {/* moving light */}
      <div className="pointer-events-none absolute -inset-1 translate-x-[-60%] rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[60%] group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 via-transparent to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="text-[0.62rem] uppercase tracking-[0.2em] text-aqua/80">{m.origin}</div>
        <h3 className="mt-1 font-serif text-2xl text-cloud">{m.name}</h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm text-crystal/70 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
          {m.note}
        </p>
      </div>
      <div className="absolute right-5 top-5 rounded-full border border-crystal/25 px-3 py-1 text-[0.58rem] uppercase tracking-[0.18em] text-crystal/70">
        Sample
      </div>
    </article>
  );
}
