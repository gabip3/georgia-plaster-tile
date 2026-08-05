'use client';

import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Check, AlertCircle } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import MagneticButton from '@/components/ui/MagneticButton';
import { business } from '@/lib/content';

type Status = 'idle' | 'submitting' | 'sent' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setStatus('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const result = await res.json();
      if (result.success) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-[6px] border border-crystal/12 bg-abyss/60 p-7 backdrop-blur-xl md:p-9"
            >
              {/* Web3Forms config */}
              <input type="hidden" name="access_key" value="c34c796a-cbb6-4261-9757-6946ce365f8b" />
              <input type="hidden" name="subject" value="New estimate request, Georgia Plaster & Tile website" />
              <input type="hidden" name="from_name" value="Georgia Plaster & Tile Website" />
              {/* Honeypot spam trap, must stay empty */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <div className="grid gap-5">
                <Field id="name" label="Full name" placeholder="Jane Anderson" autoComplete="name" required />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="phone" label="Phone" type="tel" placeholder="(770) 000-0000" autoComplete="tel" />
                  <Field id="email" label="Email" type="email" placeholder="you@home.com" autoComplete="email" required />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-[0.7rem] uppercase tracking-[0.16em] text-crystal/60">
                    Project type
                  </label>
                  <select
                    id="service"
                    name="service"
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
                    name="message"
                    rows={3}
                    placeholder="Size, age, what you'd love to change…"
                    className="w-full resize-none rounded-[3px] border border-crystal/15 bg-marine/20 px-4 py-3 text-cloud placeholder:text-crystal/30 outline-none transition-colors focus:border-gold/60"
                  />
                </div>

                {status === 'sent' && (
                  <div className="flex items-center gap-3 rounded-[3px] border border-aqua/40 bg-aqua/10 px-4 py-4 text-sm text-crystal" role="status" aria-live="polite">
                    <Check className="h-5 w-5 shrink-0 text-aqua" />
                    Thank you, we&apos;ll be in touch within one business day.
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-3 rounded-[3px] border border-red-400/40 bg-red-400/10 px-4 py-4 text-sm text-crystal" role="alert" aria-live="assertive">
                    <AlertCircle className="h-5 w-5 shrink-0 text-red-300" />
                    Something went wrong. Please call or email us directly, our info is on the left.
                  </div>
                )}
                {(status === 'idle' || status === 'submitting') && (
                  <MagneticButton type="submit" variant="gold" className="w-full" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Request My Free Estimate'}
                    {status !== 'submitting' && <ArrowRight className="h-4 w-4" />}
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

function Field({
  id, label, type = 'text', placeholder, autoComplete, required,
}: { id: string; label: string; type?: string; placeholder?: string; autoComplete?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[0.7rem] uppercase tracking-[0.16em] text-crystal/60">
        {label}{required && <span className="ml-1 text-gold">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-[3px] border border-crystal/15 bg-marine/20 px-4 py-3 text-cloud placeholder:text-crystal/30 outline-none transition-colors focus:border-gold/60"
      />
    </div>
  );
}
