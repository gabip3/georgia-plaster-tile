'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { faqs } from '@/lib/content';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-abyss py-28 md:py-36">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-10">
        <Reveal>
          <div>
            <span className="eyebrow text-gold/80">Questions</span>
            <h2 className="display dsp-1 mt-4 text-cloud">Answered<br />with candor.</h2>
            <p className="mt-6 max-w-xs text-sm text-crystal/60">
              Still curious? A conversation is the best place to start. We answer every call
              ourselves.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="divide-y divide-crystal/10 border-y border-crystal/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    data-hover
                  >
                    <span className="font-serif text-xl text-cloud md:text-2xl">{f.q}</span>
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-crystal/20 text-gold transition-transform duration-500 ${isOpen ? 'rotate-45 border-gold/50' : ''}`}>
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-7 text-sm leading-relaxed text-crystal/65">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
