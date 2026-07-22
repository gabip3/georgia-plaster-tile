'use client';

import { useRef, useState } from 'react';
import { MoveHorizontal } from 'lucide-react';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
const AFTER_SRC = `${base}/pool%20after.jpg`;
const BEFORE_SRC = `${base}/pool%20before.jpeg`;

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const set = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, p)));
  };

  return (
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
        src={AFTER_SRC}
        alt="Georgia Plaster & Tile pool project after renovation, with new spa, waterfall and tile work"
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
            src={BEFORE_SRC}
            alt="Georgia Plaster & Tile pool project before renovation"
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
  );
}
