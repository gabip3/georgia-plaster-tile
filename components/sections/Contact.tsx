'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Check } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import MagneticButton from '@/components/ui/MagneticButton';
import { business } from '@/lib/content';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-deep py-28 md:py-40">
      <div className="absolute inset-0 tex-water opacity-60" aria-hidden />
      <div className="absolute inset-0 tex-caustics opacity-20" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-abyss/60 via-transparent to-abyss" aria-hidden />

      <div className="relative mx-auto max-w-[1300px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          {/* Left: pitch + info */}
          <div>
            <Reveal>
              <span className="eyebrow text-gold/80">Begin Your Project</span>
              <h2 className="display mt-5 text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.95] text-cloud">
                Let&apos;s design the<br /><span className="italic text-gradient-water">resort</span> in your backyard.
              </h2>
              <p className="mt-6 max-w-md text-crystal/70">
                Tell us about your pool. We&apos;ll bring 20+ years of craftsmanship, real material
                samples, and a free, no-pressure estimate.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <InfoRow icon={Phone} label="Call the studio" value={business.phone} href={`tel:${business.phoneRaw}`} />
                <InfoRow icon={Mail} label="Email us" value={business.email} href={`mailto:${business.email}`} />
                <InfoRow icon={MapPin} label="Service area" value={business.areaLabel} />
                <InfoRow icon={Clock} label="Hours" value="Mon–Fri 8–6 · Sat 9–4" />
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-[6px] border border-crystal/12 bg-abyss/60 p-7 backdrop-blur-xl md:p-9"
            >
              <div className="grid gap-5">
                <Field id="name" label="Full name" placeholder="Jane Anderson" autoComplete="name" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="phone" label="Phone" type="tel" placeholder="(770) 000-0000" autoComplete="tel" />
                  <Field id="email" label="Email" type="email" placeholder="you@home.com" autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-[0.7rem] uppercase tracking-[0.16em] text-crystal/60">
                    Project type
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-[3px] border border-crystal/15 bg-marine/20 px-4 py-3 text-cloud outline-none transition-colors focus:border-gold/60"
                  >
                    <option className="bg-abyss">Luxury Pool Tile</option>
                    <option className="bg-abyss">Plaster &amp; Finishes</option>
                    <option className="bg-abyss">Pool Renovation</option>
                    <option className="bg-abyss">Custom Spa</option>
                    <option className="bg-abyss">Natural Stone &amp; Travertine</option>
                    <option className="bg-abyss">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="msg" className="mb-2 block text-[0.7rem] uppercase tracking-[0.16em] text-crystal/60">
                    Tell us about your pool
                  </label>
                  <textarea
                    id="msg"
                    rows={3}
                    placeholder="Size, age, what you'd love to change…"
                    className="w-full resize-none rounded-[3px] border border-crystal/15 bg-marine/20 px-4 py-3 text-cloud placeholder:text-crystal/30 outline-none transition-colors focus:border-gold/60"
                  />
                </div>

                {sent ? (
                  <div className="flex items-center gap-3 rounded-[3px] border border-aqua/40 bg-aqua/10 px-4 py-4 text-sm text-crystal" role="status" aria-live="polite">
                    <Check className="h-5 w-5 text-aqua" />
                    Thank you, we&apos;ll be in touch within one business day.
                  </div>
                ) : (
                  <MagneticButton variant="gold" className="w-full">
                    Request My Free Estimate <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                )}
                <p className="text-center text-[0.66rem] text-crystal/40">
                  No obligation · Family-owned · Fully insured
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="group flex items-start gap-4 rounded-[4px] border border-crystal/8 bg-marine/20 p-4 transition-colors duration-300 hover:border-gold/30">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-crystal/15 text-aqua transition-colors group-hover:border-gold/50 group-hover:text-gold">
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <span>
        <span className="block text-[0.62rem] uppercase tracking-[0.16em] text-crystal/45">{label}</span>
        <span className="mt-0.5 block text-sm text-cloud">{value}</span>
      </span>
    </div>
  );
  return href ? <a href={href} data-hover>{inner}</a> : inner;
}

function Field({ id, label, type = 'text', placeholder, autoComplete }: { id: string; label: string; type?: string; placeholder?: string; autoComplete?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[0.7rem] uppercase tracking-[0.16em] text-crystal/60">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-[3px] border border-crystal/15 bg-marine/20 px-4 py-3 text-cloud placeholder:text-crystal/30 outline-none transition-colors focus:border-gold/60"
      />
    </div>
  );
}
