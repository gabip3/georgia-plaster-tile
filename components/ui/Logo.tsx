'use client';

import { useEffect, useRef, useState } from 'react';
import { business } from '@/lib/content';

/**
 * Official brand logo from /public/logo.png (transparent RGBA).
 * On the dark UI it renders in white ("tone: white" -> brightness-0 invert) so it
 * stays crisp and legible with no background box. Use tone="color" on light surfaces.
 * Falls back to a wordmark if the file is missing so nothing breaks.
 */
export default function Logo({
  height = 40,
  tone = 'white',
  className = '',
}: {
  height?: number;
  tone?: 'white' | 'color';
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <span className={`flex items-center gap-3 ${className}`}>
        <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/40">
          <span className="h-4 w-4 rounded-full bg-gradient-to-br from-goldlite to-gold" />
        </span>
        <span className="leading-none">
          <span className="block font-serif text-lg text-cloud">Georgia</span>
          <span className="block text-[0.58rem] uppercase tracking-[0.34em] text-gold/80">
            Plaster &amp; Tile
          </span>
        </span>
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`}
      alt={`${business.name} logo`}
      onError={() => setFailed(true)}
      style={{ height, width: 'auto' }}
      className={`w-auto object-contain ${tone === 'white' ? 'brightness-0 invert' : ''} ${className}`}
    />
  );
}
