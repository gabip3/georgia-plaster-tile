'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { materials } from '@/lib/content';

/** A single "smart" tile that slowly morphs through premium materials while hovered. */
function LivingTile({ start, className }: { start: number; className?: string }) {
  const [active, setActive] = useState(start % materials.length);
  const [hover, setHover] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (hover) {
      timer.current = setInterval(() => {
        setActive((a) => (a + 1) % materials.length);
      }, 1100);
    } else if (timer.current) {
      clearInterval(timer.current);
    }
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [hover]);

  const mat = materials[active];

  return (
    <div
      className={`group relative overflow-hidden rounded-[3px] tile-edge ${className ?? ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-hover
    >
      {materials.map((m, i) => (
        <div
          key={m.key}
          className="absolute inset-0 transition-opacity duration-[1100ms] ease-silk"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden
        >
          <div className={`absolute inset-0 ${m.tex}`} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={m.img}
            alt=""
            loading="lazy"
            decoding="async"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ))}
      {/* sheen sweep */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      {/* caption */}
      <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="inline-block rounded-full bg-abyss/70 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-crystal backdrop-blur-md">
          {mat.name}
        </div>
      </div>
      <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-crystal/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

export default function LivingTiles() {
  return (
    <section className="relative bg-abyss pb-28 md:pb-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="eyebrow text-gold/80">Living Surfaces</span>
            <h2 className="display dsp-2 mt-4 max-w-xl text-cloud">
              Hover, and the material comes alive.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-crystal/70">
              Stone, mosaic, Italian porcelain, glass, marble, pool-tone plaster. The same
              surface, endless character. Move across each tile to feel the palette shift.
            </p>
          </Reveal>
        </div>

        {/* Living mosaic grid */}
        <div className="grid h-[520px] grid-cols-4 grid-rows-3 gap-2 md:h-[600px] md:grid-cols-6">
          <LivingTile start={0} className="col-span-2 row-span-2" />
          <LivingTile start={1} className="col-span-2 row-span-1 md:col-span-2" />
          <LivingTile start={2} className="col-span-2 row-span-1 hidden md:block md:col-span-2" />
          <LivingTile start={3} className="col-span-1 row-span-1" />
          <LivingTile start={4} className="col-span-1 row-span-1" />
          <LivingTile start={5} className="col-span-2 row-span-1 md:col-span-2" />
          <LivingTile start={2} className="col-span-2 row-span-1 md:col-span-2" />
          <LivingTile start={3} className="col-span-2 row-span-1 hidden md:block md:col-span-2" />
        </div>
      </div>
    </section>
  );
}
