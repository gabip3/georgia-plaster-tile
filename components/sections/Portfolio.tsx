'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import BeforeAfter from '@/components/sections/BeforeAfter';
import SmartImage from '@/components/ui/SmartImage';
import { projects, projectCategories } from '@/lib/content';

const sizeClass: Record<string, string> = {
  lg: 'sm:col-span-2 sm:row-span-2',
  md: 'sm:col-span-1 sm:row-span-2',
  sm: 'sm:col-span-1 sm:row-span-1',
};

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.cats.includes(filter))),
    [filter]
  );

  return (
    <section id="portfolio" className="relative bg-abyss py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <span className="eyebrow text-gold/80">Selected Work</span>
            <h2 className="display dsp-1 mt-4 max-w-2xl text-cloud">
              Backyards, reborn<br />as private resorts.
            </h2>
          </Reveal>

          {/* Filters */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={filter === cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full border px-4 py-2 text-[0.68rem] uppercase tracking-[0.16em] transition-all duration-300 ${
                    filter === cat
                      ? 'border-gold bg-gold/10 text-gold'
                      : 'border-crystal/15 text-crystal/60 hover:border-crystal/40 hover:text-cloud'
                  }`}
                  data-hover
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Before / After feature */}
        <Reveal>
          <div className="mb-3 grid gap-3 lg:grid-cols-[1.4fr_1fr]">
            <BeforeAfter />
            <div className="flex flex-col justify-center rounded-[4px] border border-crystal/8 bg-marine/25 p-8">
              <span className="eyebrow text-aqua/70">Drag to reveal</span>
              <h3 className="display mt-3 text-3xl text-cloud">From clouded to crystal clear.</h3>
              <p className="mt-4 text-sm leading-relaxed text-crystal/65">
                A full professional cleaning, clearing debris, balancing the water and
                restoring the plaster and stone surround to a bright, swimmable finish.
                Slide the handle to see the transformation.
              </p>
              <div className="mt-6 flex gap-8">
                <div>
                  <div className="font-serif text-3xl text-gradient-gold">1 day</div>
                  <div className="text-[0.62rem] uppercase tracking-[0.16em] text-crystal/50">Turnaround</div>
                </div>
                <div>
                  <div className="font-serif text-3xl text-gradient-gold">1 crew</div>
                  <div className="text-[0.62rem] uppercase tracking-[0.16em] text-crystal/50">In-house artisans</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div layout className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-[4px] tile-edge ${sizeClass[p.size]}`}
                data-hover
              >
                <div className="absolute inset-0 scale-100 transition-transform duration-[1200ms] ease-silk group-hover:scale-110">
                  <SmartImage src={p.img} alt={`${p.title}, luxury ${p.category.toLowerCase()} project in ${p.location}`} tex={p.tex} />
                </div>
                <div className="absolute inset-0 tex-caustics opacity-25" aria-hidden />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/10 to-transparent opacity-80" />

                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="mb-1 translate-y-2 text-[0.6rem] uppercase tracking-[0.2em] text-gold/80 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {p.category} · {p.location}
                  </span>
                  <div className="flex items-end justify-between gap-2">
                    <h3 className="font-serif text-xl leading-tight text-cloud md:text-2xl">{p.title}</h3>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-crystal/30 text-cloud opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
