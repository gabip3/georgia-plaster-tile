'use client';

import { useRef, type ReactNode, type MouseEvent } from 'react';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'gold' | 'ghost' | 'water';
  className?: string;
  ariaLabel?: string;
};

export default function MagneticButton({
  children, href, onClick, variant = 'gold', className, ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.28}px, ${y * 0.34}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)';
  };

  const base =
    'sheen relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.18em] transition-[transform,background,color] duration-500 ease-silk will-change-transform';
  const variants = {
    gold: 'bg-gradient-to-r from-goldlite via-gold to-goldlite text-abyss hover:shadow-[0_20px_50px_-20px_rgba(195,155,87,0.8)]',
    water: 'bg-aqua/90 text-abyss hover:bg-aqua',
    ghost: 'border border-crystal/25 text-crystal hover:border-gold/60 hover:text-gold',
  };
  const cls = clsx(base, variants[variant], className);

  const inner = <span className="relative z-10 flex items-center gap-2">{children}</span>;

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        aria-label={ariaLabel}
        className={cls}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        data-hover
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      ref={ref}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cls}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      data-hover
    >
      {inner}
    </button>
  );
}
