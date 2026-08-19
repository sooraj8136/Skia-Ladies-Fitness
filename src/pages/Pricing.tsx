import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, Minus, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionLabel, PageHeader } from '@/components/SectionLabel';
import { PRICING, FAQS, SITE } from '@/data/content';

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      <PageHeader
        label="Membership & Pricing"
        title="Invest in you."
        subtitle="Three membership options. No hidden fees, no complicated contracts. Pick what fits your life and start training. All plans include full access to our air-conditioned facility."
      />

      {/* Toggle */}
      <section className="relative py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-6">
            <span className={`text-sm uppercase tracking-widest transition-colors ${!annual ? 'text-yellow' : 'text-bone-muted'}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              data-cursor-hover
              className="relative w-16 h-8 rounded-full bg-ink-card border border-ink-border transition-colors duration-300"
              aria-label="Toggle billing period"
            >
              <motion.div
                layout
                className="absolute top-1 w-6 h-6 rounded-full bg-yellow"
                animate={{ left: annual ? 'calc(100% - 28px)' : '4px' }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            </button>
            <span className={`text-sm uppercase tracking-widest transition-colors ${annual ? 'text-yellow' : 'text-bone-muted'}`}>
              Quarterly <span className="text-yellow text-xs ml-1">Best Value</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="relative py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {PRICING.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.1}>
                <div
                  className={`relative h-full p-8 rounded-2xl border transition-all duration-500 ${
                    plan.popular
                      ? 'border-yellow bg-ink-card lg:scale-105 lg:-translate-y-2 shadow-[0_0_40px_rgba(255,212,0,0.1)]'
                      : 'border-ink-border bg-ink-card hover:border-bone-muted/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow px-6 py-1.5 rounded-full">
                      <span className="text-xs uppercase tracking-ultra text-black font-bold">Most Popular</span>
                    </div>
                  )}
                  <h3 className="display-text text-3xl text-bone">{plan.name}</h3>
                  <p className="text-bone-muted text-sm mt-2">{plan.tagline}</p>

                  <div className="mt-8 flex items-baseline gap-2">
                    <motion.span
                      key={annual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="display-text text-6xl text-yellow"
                    >
                      ₹{annual ? plan.annual : plan.monthly}
                    </motion.span>
                    <span className="text-bone-muted text-sm">/ {annual ? 'month, billed quarterly' : 'per month'}</span>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-bone-muted">
                        <Check size={18} className="text-yellow shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`mt-10 w-full inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 ${
                      plan.popular
                        ? 'bg-yellow text-black hover:bg-yellow-pale'
                        : 'border border-bone-muted/30 text-bone hover:border-yellow hover:text-yellow'
                    }`}
                    data-cursor-hover
                  >
                    Get Started
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center border border-ink-border rounded-2xl p-12 bg-ink-card">
          <SectionLabel className="justify-center">Have Questions?</SectionLabel>
          <h2 className="display-text text-3xl md:text-4xl mt-6 text-bone">
            Chat with us on <span className="text-yellow">WhatsApp.</span>
          </h2>
          <p className="text-bone-muted mt-4 max-w-lg mx-auto">
            Not sure which plan is right? Message us on WhatsApp and our trainers will help you figure it out — no sales pressure, just honest advice.
          </p>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi! I have a question about SKIA MGF memberships.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
            data-cursor-hover
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-ink-surface">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="display-text text-5xl md:text-6xl mt-8 mb-16 text-bone">
            Questions? <br />
            <span className="text-yellow">We have answers.</span>
          </h2>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <FAQItem q={faq.q} a={faq.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-ink-border rounded-xl overflow-hidden hover:border-yellow/30 transition-colors duration-300">
      <button
        onClick={() => setOpen(!open)}
        data-cursor-hover
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="display-text text-xl text-bone">{q}</span>
        <span className="text-yellow shrink-0">
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-bone-muted leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
