'use client';

import Reveal from '@/components/ui/Reveal';
import { services } from '@/lib/content';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="relative bg-deep py-28 md:py-40">
      {/* subtle top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="eyebrow text-gold/80">The Craft</span>
            <h2 className="display dsp-1 mt-4 max-w-2xl text-cloud">
              Ten disciplines,<br />one obsession with water.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-crystal/65">
              Every finish, tile and stone is installed by our own artisans, never
              subcontracted, never rushed.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <article
                className="group relative h-full overflow-hidden rounded-[4px] border border-crystal/8 bg-marine/30 p-7 transition-all duration-500 ease-silk hover:border-gold/30 hover:bg-marine/50"
                data-hover
              >
                {/* texture reveal on hover */}
                <div className={`pointer-events-none absolute inset-0 ${s.tex} opacity-0 transition-opacity duration-700 group-hover:opacity-15`} aria-hidden />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-crystal/15 text-aqua transition-all duration-500 group-hover:border-gold/50 group-hover:text-gold">
                      <s.icon className="h-5 w-5" strokeWidth={1.4} />
                    </span>
                    <span className="font-serif text-2xl text-crystal/20 transition-colors duration-500 group-hover:text-gold/50">
                      {s.n}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-1 text-[0.65rem] uppercase tracking-[0.22em] text-aqua/70">{s.tagline}</div>
                    <h3 className="font-serif text-2xl text-cloud">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-crystal/60">{s.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-[0.7rem] uppercase tracking-[0.18em] text-crystal/40 transition-all duration-500 group-hover:gap-2 group-hover:text-gold">
                      Explore <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Featured: hands-on cleaning & maintenance */}
        <Reveal delay={0.1}>
          <div className="mt-3 grid gap-3 overflow-hidden rounded-[4px] border border-crystal/8 bg-marine/25 md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative aspect-[4/5] md:aspect-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/pool-cleaning-service.jpg`}
                alt="Georgia Plaster & Tile technician hand-cleaning a pool waterline"
                loading="lazy"
                decoding="async"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/40 via-transparent to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="eyebrow text-aqua/70">Hands-On, Every Visit</span>
              <h3 className="display mt-3 text-3xl text-cloud">Real crew, real hands, every single visit.</h3>
              <p className="mt-4 text-sm leading-relaxed text-crystal/65">
                Chemistry readers and robots only get you so far. Our own technicians physically
                skim, brush, test and balance every pool we maintain, so nothing gets missed
                between visits.
              </p>
              <div className="mt-6 flex gap-8">
                <div>
                  <div className="font-serif text-3xl text-gradient-gold">By hand</div>
                  <div className="text-[0.62rem] uppercase tracking-[0.16em] text-crystal/50">Skimmed &amp; brushed</div>
                </div>
                <div>
                  <div className="font-serif text-3xl text-gradient-gold">Every visit</div>
                  <div className="text-[0.62rem] uppercase tracking-[0.16em] text-crystal/50">Chemistry tested</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
