'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const line = 'We don’t build pools. We compose water, the tile, the finish, the light, the stone, until a backyard becomes a resort you never have to leave.';

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.35'] });
  const wordsArr = line.split(' ');

  return (
    <section id="intro" className="relative bg-abyss py-28 md:py-40">
      <div ref={ref} className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="mb-10">
          <span className="eyebrow text-gold/80">Our Philosophy</span>
        </div>
        <p className="display dsp-1 flex flex-wrap text-cloud/25">
          {wordsArr.map((w, i) => {
            const start = i / wordsArr.length;
            const end = start + 1 / wordsArr.length;
            return <Word key={i} progress={scrollYProgress} range={[start, end]}>{w}</Word>;
          })}
        </p>
      </div>
    </section>
  );
}

function Word({ children, progress, range }: { children: string; progress: any; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ['rgba(232,243,242,0.15)', 'rgba(246,243,236,1)']);
  return (
    <span className="relative mr-[0.28em] mt-[0.1em]">
      <motion.span style={{ opacity, color }}>{children}</motion.span>
    </span>
  );
}
