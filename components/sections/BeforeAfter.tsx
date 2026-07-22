'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react';
import { beforeAfterSlides } from '@/lib/content';

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const slide = beforeAfterSlides[active];
  const count = beforeAfterSlides.length;

  const set = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, p)));
  };

  const go = (dir: 1 | -1) => {
    setActive((a) => (a + dir + count) % count);
    setPos(50);
  };

  return (
    <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
      <div className="flex flex-col gap-3">
        <div
          ref={ref}
          data-no-ripple
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

          {/* Prev / next */}
          <button
            type="button"
            aria-label={`Previous example: ${beforeAfterSlides[(active - 1 + count) % count].tab}`}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            className="absolute left-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-crystal/30 bg-abyss/60 text-crystal backdrop-blur transition-colors duration-300 hover:border-gold/60 hover:text-gold"
            data-hover
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Next example: ${beforeAfterSlides[(active + 1) % count].tab}`}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); go(1); }}
            className="absolute right-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-crystal/30 bg-abyss/60 text-crystal backdrop-blur transition-colors duration-300 hover:border-gold/60 hover:text-gold"
            data-hover
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          </button>
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
