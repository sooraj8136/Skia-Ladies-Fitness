import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ContactFormProps {
  source?: string;
  compact?: boolean;
}

const INTERESTS = [
  'General Inquiry',
  'Strength Training',
  'Cardio Blast',
  'Boxing Fit',
  'Yoga & Flexibility',
  'Weight Loss Program',
  'Personal Training',
  'Membership Question',
];

export function ContactForm({ source = 'contact', compact = false }: ContactFormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'General Inquiry',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Tell us your name';
    if (!form.email.trim()) e.email = 'We need an email to reach you';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'That email does not look right';
    if (!form.consent) e.consent = 'Please agree so we can contact you';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        interest: form.interest,
        message: form.message || null,
        consent: form.consent,
        source,
      });
      if (error) throw error;
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-20 h-20 rounded-full bg-yellow flex items-center justify-center mb-8"
        >
          <Check size={40} className="text-black" strokeWidth={3} />
        </motion.div>
        <h3 className="display-text text-4xl text-bone mb-4">You're in</h3>
        <p className="text-bone-muted max-w-md">
          We received your message. Our team will reach out to you soon — check your inbox or WhatsApp.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${compact ? '' : 'max-w-2xl'}`}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="section-label block mb-3">Name *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="input-field"
            placeholder="Your name"
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-yellow text-xs mt-2 flex items-center gap-1"
              >
                <AlertCircle size={12} /> {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div>
          <label className="section-label block mb-3">Email *</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="input-field"
            placeholder="you@email.com"
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-yellow text-xs mt-2 flex items-center gap-1"
              >
                <AlertCircle size={12} /> {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="section-label block mb-3">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="input-field"
            placeholder="Optional"
          />
        </div>
        <div>
          <label className="section-label block mb-3">Interest</label>
          <select
            value={form.interest}
            onChange={(e) => setForm({ ...form, interest: e.target.value })}
            className="input-field cursor-pointer"
          >
            {INTERESTS.map((i) => (
              <option key={i} value={i} className="bg-ink text-bone">
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="section-label block mb-3">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="input-field resize-none"
          rows={4}
          placeholder="Tell us what you're looking for..."
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer group">
        <div className="relative mt-0.5">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => setForm({ ...form, consent: e.target.checked })}
            className="sr-only"
          />
          <div
            className={`w-5 h-5 rounded border-2 transition-all duration-300 flex items-center justify-center ${
              form.consent ? 'bg-yellow border-yellow' : 'border-bone-muted/40 group-hover:border-yellow'
            }`}
          >
            {form.consent && <Check size={12} className="text-black" strokeWidth={3} />}
          </div>
        </div>
        <span className="text-bone-muted text-sm">
          I agree to be contacted by SKIA MGF about my inquiry.
        </span>
      </label>
      <AnimatePresence>
        {errors.consent && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-yellow text-xs flex items-center gap-1"
          >
            <AlertCircle size={12} /> {errors.consent}
          </motion.p>
        )}
      </AnimatePresence>

      {status === 'error' && (
        <p className="text-yellow text-sm flex items-center gap-2">
          <AlertCircle size={16} /> Something went wrong. Try again or WhatsApp us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full md:w-auto"
        data-cursor-hover
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
