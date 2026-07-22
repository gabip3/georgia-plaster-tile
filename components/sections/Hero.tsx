'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown, Star } from 'lucide-react';
import { business, stats } from '@/lib/content';
import MagneticButton from '@/components/ui/MagneticButton';

const words = ['Where', 'Craftsmanship', 'Meets', 'Water.'];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '38%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !glow.current) return;
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    glow.current.style.background = `radial-gradient(40rem 40rem at ${x}% ${y}%, rgba(120,220,214,0.22), transparent 60%)`;
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Water body */}
      <motion.div style={{ scale: scaleBg }} className="absolute inset-0 tex-water" aria-hidden />
      <div className="absolute inset-0 tex-caustics opacity-70" aria-hidden />
      {/* Light following cursor */}
      <div ref={glow} className="absolute inset-0 transition-[background] duration-200" aria-hidden />
      {/* Depth vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_-10%,transparent,rgba(4,20,29,0.55)_60%,rgba(4,20,29,0.95))]" aria-hidden />
      {/* Surface shimmer band */}
      <div className="absolute inset-x-0 top-1/3 h-40 animate-shimmer bg-gradient-to-b from-crystal/10 to-transparent blur-2xl" aria-hidden />

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pt-28 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 flex items-center gap-4"
        >
          <span className="eyebrow text-gold/90">Luxury Pool Tile · Plaster · Stone</span>
          <span className="hidden items-center gap-1.5 text-xs text-crystal/70 md:flex">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            {business.years} years · Greater Atlanta
          </span>
        </motion.div>

        <h1 className="display dsp-hero max-w-5xl text-cloud">
          {words.map((word, i) => (
            <span key={word} className="mr-[0.25em] inline-block overflow-hidden pb-[0.08em] align-top">
              <motion.span
                className={`inline-block ${word === 'Water.' ? 'italic text-gradient-water' : ''}`}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.15 + i * 0.11, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-crystal/80"
        >
          For over two decades, Georgia&apos;s finest homes have trusted us to turn a backyard
          into a private resort, one flawless tile, one glass-smooth finish at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#contact" variant="gold">
            Get a Free Estimate <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#portfolio" variant="ghost">
            View Our Projects
          </MagneticButton>
        </motion.div>

        {/* Floating stat chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-crystal/10 pt-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-3xl text-gradient-gold md:text-4xl">{s.value}</div>
              <div className="mt-1 text-[0.68rem] uppercase tracking-[0.14em] text-crystal/55">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#intro"
        style={{ opacity }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-crystal/60"
        aria-label="Scroll to explore"
        data-hover
      >
        <span className="text-[0.6rem] uppercase tracking-[0.34em]">Dive in</span>
        <ChevronDown className="h-5 w-5 animate-bounce" strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
