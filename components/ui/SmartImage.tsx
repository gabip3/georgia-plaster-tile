'use client';

import { useState } from 'react';

/**
 * Real photo layered over a procedural texture fallback.
 * If the remote image 404s or is blocked, the luxe texture shows instead,
 * so the layout never breaks. Swap the URLs in lib/content.ts for the
 * client's own photography later.
 */
export default function SmartImage({
  src,
  alt,
  tex,
  imgClassName = '',
  priority = false,
}: {
  src: string;
  alt: string;
  tex: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <>
      <div className={`absolute inset-0 ${tex}`} aria-hidden />
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </>
  );
}
