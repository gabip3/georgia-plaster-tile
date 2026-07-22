'use client';

import { useRef, useState } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { beforeAfterSlides } from '@/lib/content';

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const slide = beforeAfterSlides[active];

  const set = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, p)));
  };

  const selectSlide = (i: number) => {
    setActive(i);
    setPos(50);
  };

  return (
    <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
      <div className="flex flex-col gap-3">
        <div
          ref={ref}
          className="relative aspect-[16/11] w-full select-none overflow-hidden rounded-[4px] tile-edge"
          onMouseMove={(e) => dragging.current && set(e.clientX)}
          onMouseDown={(e) => { dragging.current = true; set(e.clientX); }}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchMove={(e) => set(e.touches[0].clientX)}
          data-hover
        >
          {/* After (full) */}
          <div className="absolute inset-0 tex-mosaic" aria-hidden />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={`after-${active}`}
            src={slide.after}
            alt={`${slide.title} — after`}
            loading="lazy"
            decoding="async"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 tex-caustics opacity-15" aria-hidden />
          <span className="absolute right-4 top-4 rounded-full bg-abyss/70 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-crystal backdrop-blur">After</span>

          {/* Before (clipped) */}
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <div className="absolute inset-y-0 left-0" style={{ width: `${10000 / pos}%` }} aria-hidden>
              <div className="tex-stone absolute inset-0" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={`before-${active}`}
                src={slide.before}
                alt={`${slide.title} — before`}
                loading="lazy"
                decoding="async"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                className="absolute inset-0 h-full w-full object-cover grayscale-[35%] contrast-[0.96] brightness-[0.94]"
              />
            </div>
            <div className="absolute inset-0 bg-abyss/15" />
            <span className="absolute left-4 top-4 rounded-full bg-abyss/70 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-crystal/80 backdrop-blur">Before</span>
          </div>

          {/* Handle */}
          <div className="absolute inset-y-0 z-10 w-px bg-gold" style={{ left: `${pos}%` }}>
            <div className="absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/60 bg-abyss/80 text-gold backdrop-blur">
              <MoveHorizontal className="h-5 w-5" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Slide selector */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Before and after examples">
          {beforeAfterSlides.map((s, i) => (
            <button
              key={s.tab}
              role="tab"
              aria-selected={active === i}
              onClick={() => selectSlide(i)}
              className={`rounded-full border px-4 py-2 text-[0.66rem] uppercase tracking-[0.14em] transition-all duration-300 ${
                active === i
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-crystal/15 text-crystal/55 hover:border-crystal/40 hover:text-cloud'
              }`}
              data-hover
            >
              {s.tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center rounded-[4px] border border-crystal/8 bg-marine/25 p-8">
        <span className="eyebrow text-aqua/70">Drag to reveal</span>
        <h3 className="display mt-3 text-3xl text-cloud">{slide.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-crystal/65">{slide.desc}</p>
        <div className="mt-6 flex gap-8">
          <div>
            <div className="font-serif text-3xl text-gradient-gold">{slide.stat1.value}</div>
            <div className="text-[0.62rem] uppercase tracking-[0.16em] text-crystal/50">{slide.stat1.label}</div>
          </div>
          <div>
            <div className="font-serif text-3xl text-gradient-gold">{slide.stat2.value}</div>
            <div className="text-[0.62rem] uppercase tracking-[0.16em] text-crystal/50">{slide.stat2.label}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
