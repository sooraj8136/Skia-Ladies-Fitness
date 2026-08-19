import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Send } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/data/content';
import { supabase } from '@/lib/supabase';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await supabase.from('newsletter_subscribers').insert({ email });
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="relative bg-ink border-t border-ink-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-glow to-transparent opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
        {/* Newsletter */}
        <div className="grid lg:grid-cols-2 gap-12 pb-16 border-b border-ink-border">
          <div>
            <h3 className="display-text text-4xl md:text-5xl text-bone">
              Join the <span className="text-yellow">movement</span>
            </h3>
            <p className="text-bone-muted mt-4 max-w-md">
              Training tips, class drops, and member stories. No spam — just the good stuff, once a week.
            </p>
          </div>
          <div className="flex items-end">
            {status === 'done' ? (
              <p className="text-yellow text-lg font-semibold flex items-center gap-2">
                You're in. Check your inbox.
              </p>
            ) : (
              <form onSubmit={subscribe} className="w-full flex gap-4 items-end">
                <div className="flex-1">
                  <label className="section-label block mb-3">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="input-field"
                  />
                </div>
                <button type="submit" className="btn-primary" disabled={status === 'loading'} data-cursor-hover>
                  {status === 'loading' ? 'Sending...' : 'Subscribe'}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links */}
        <div className="grid md:grid-cols-4 gap-12 py-16">
          <div className="md:col-span-1">
            <Link to="/" className="display-text text-4xl text-bone hover:text-yellow transition-colors" data-cursor-hover>
              {SITE.name}
            </Link>
            <p className="text-bone-muted mt-4 text-sm leading-relaxed">
              {SITE.tagline}. A fully air-conditioned, ladies-only gym in Tirur, Kerala, with experienced women trainers.
            </p>
          </div>

          <div>
            <h4 className="section-label mb-6">Explore</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-bone-muted hover:text-yellow transition-colors text-sm" data-cursor-hover>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-bone-muted">{SITE.address}</li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-bone-muted hover:text-yellow transition-colors" data-cursor-hover>
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="text-bone-muted hover:text-yellow transition-colors" data-cursor-hover>
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-6">Hours</h4>
            <ul className="space-y-3 text-sm">
              {SITE.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="text-bone-muted">{h.day}</span>
                  <span className="text-bone">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ink-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-bone-dim text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {SITE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone-muted hover:text-yellow transition-colors text-sm flex items-center gap-1"
                data-cursor-hover
              >
                {s.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
