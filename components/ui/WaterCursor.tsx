'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Premium water-drop cursor.
 * - A soft aqua droplet trails the pointer with easing.
 * - Over interactive elements it swells into a ripple ring.
 * - Disabled on touch / reduced-motion, native cursor stays.
 */
export default function WaterCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add('cursor-luxe');

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const drop = { x: pos.x, y: pos.y };
    const ringP = { x: pos.x, y: pos.y };
    let hovering = false;
    let raf = 0;

    const move = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const el = e.target as HTMLElement;
      hovering = !!el.closest('a, button, [data-hover], input, textarea, [role="button"]');
    };

    const render = () => {
      drop.x += (pos.x - drop.x) * 0.35;
      drop.y += (pos.y - drop.y) * 0.35;
      ringP.x += (pos.x - ringP.x) * 0.16;
      ringP.y += (pos.y - ringP.y) * 0.16;

      if (dot.current) {
        dot.current.style.transform = `translate3d(${drop.x}px, ${drop.y}px, 0) translate(-50%, -50%) scale(${hovering ? 0.3 : 1})`;
      }
      if (ring.current) {
        const s = hovering ? 2.4 : 1;
        ring.current.style.transform = `translate3d(${ringP.x}px, ${ringP.y}px, 0) translate(-50%, -50%) scale(${s})`;
        ring.current.style.opacity = hovering ? '0.9' : '0.45';
        ring.current.style.borderColor = hovering ? 'rgba(227,201,141,0.8)' : 'rgba(63,180,176,0.6)';
      }
      raf = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', move, { passive: true });
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      document.documentElement.classList.remove('cursor-luxe');
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <div
        ref={ring}
        className="fixed left-0 top-0 h-9 w-9 rounded-full border border-aqua/60 transition-[opacity] duration-300"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={dot}
        className="fixed left-0 top-0 h-2.5 w-2.5 rounded-full bg-crystal shadow-[0_0_14px_4px_rgba(63,180,176,0.6)]"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
