'use client';

import { useEffect, useRef } from 'react';

type Ripple = { x: number; y: number; r: number; max: number; life: number; hue: number; scale: number };

/**
 * Full-page water ripple layer. Every click (and gentle drift on move)
 * sends elegant concentric rings across the surface, as if disturbing water.
 */
export default function RippleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ripples: Ripple[] = [];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const spawn = (x: number, y: number, big = false) => {
      const count = big ? 3 : 1;
      for (let i = 0; i < count; i++) {
        ripples.push({
          x, y,
          r: i * 8,
          max: (big ? 240 : 70) + Math.random() * (big ? 60 : 20),
          life: 1,
          hue: Math.random() > 0.5 ? 178 : 45,
          scale: big ? 1 : 0.35,
        });
      }
      if (ripples.length > 60) ripples.splice(0, ripples.length - 60);
    };

    const onClick = (e: MouseEvent) => spawn(e.clientX, e.clientY, true);
    let last = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now ? performance.now() : Date.now();
      if (now - last > 320) { last = now; spawn(e.clientX, e.clientY, false); }
    };

    window.addEventListener('click', onClick);
    if (!reduce) window.addEventListener('mousemove', onMove, { passive: true });

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += (rp.max - rp.r) * 0.045;
        rp.life -= 0.012;
        if (rp.life <= 0) { ripples.splice(i, 1); continue; }
        const alpha = Math.max(0, rp.life) * 0.5 * rp.scale;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = rp.hue === 45
          ? `rgba(227,201,141,${alpha})`
          : `rgba(120,220,214,${alpha})`;
        ctx.lineWidth = 1.4 * rp.life * rp.scale;
        ctx.stroke();
        // inner soft ring
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(191,233,230,${alpha * 0.4})`;
        ctx.lineWidth = 0.8 * rp.life * rp.scale;
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', onClick);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-screen"
    />
  );
}
