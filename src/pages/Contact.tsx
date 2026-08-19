import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionLabel, PageHeader } from '@/components/SectionLabel';
import { ContactForm } from '@/components/ContactForm';
import { SITE } from '@/data/content';

export function Contact() {
  return (
    <div>
      <PageHeader
        label="Get in Touch"
        title="Let's talk."
        subtitle="Questions about classes, membership, or just want to see the space? Reach out — our team will respond quickly. You can also WhatsApp us directly for a faster reply."
      />

      <section className="relative py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <SectionLabel>Send a Message</SectionLabel>
            <h2 className="display-text text-4xl md:text-5xl mt-8 mb-12 text-bone">
              Drop us a <span className="text-yellow">line.</span>
            </h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="lg:pl-8">
            <SectionLabel>Studio Info</SectionLabel>
            <div className="mt-8 space-y-8">
              <InfoRow icon={<MapPin size={22} className="text-yellow" />} label="Visit Us" value={SITE.address} />
              <InfoRow
                icon={<Phone size={22} className="text-yellow" />}
                label="Call Us"
                value={SITE.phone}
                href={`tel:${SITE.phoneRaw}`}
              />
              <InfoRow
                icon={<Mail size={22} className="text-yellow" />}
                label="Email Us"
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={22} className="text-yellow" />
                  <span className="section-label">Opening Hours</span>
                </div>
                <div className="space-y-2 pl-9">
                  {SITE.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-8 text-bone-muted text-sm">
                      <span>{h.day}</span>
                      <span className="text-bone">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp button */}
            <Reveal delay={0.2}>
              <div className="mt-12 p-8 border border-ink-border rounded-2xl bg-ink-card hover:border-yellow/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center">
                    <MessageCircle size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="display-text text-2xl text-bone">Chat on WhatsApp</h3>
                    <p className="text-bone-muted text-sm">Fastest way to reach us</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi! I'm interested in joining ${SITE.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full mt-4"
                  data-cursor-hover
                >
                  <MessageCircle size={18} /> Start Chat
                </a>
              </div>
            </Reveal>

            {/* Socials */}
            <Reveal delay={0.3}>
              <div className="mt-8">
                <p className="section-label mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {SITE.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-ink-border rounded-full text-sm uppercase tracking-widest text-bone-muted hover:border-yellow hover:text-yellow transition-colors"
                      data-cursor-hover
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Find Us</SectionLabel>
          <h2 className="display-text text-4xl md:text-5xl mt-8 mb-12 text-bone">
            Tirur, <span className="text-yellow">Kerala.</span>
          </h2>
          <div className="relative rounded-2xl overflow-hidden border border-ink-border h-[400px]">
            <iframe
              title="Studio location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.03%2C10.91%2C76.06%2C10.94&amp;layer=mapnik"
              className="w-full h-full grayscale invert opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-ink/40 to-transparent" />
            <div className="absolute bottom-8 left-8 bg-ink-card border border-ink-border rounded-xl p-6 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={18} className="text-yellow" />
                <span className="display-text text-xl text-bone">SKIA MGF Ladies Gym</span>
              </div>
              <p className="text-bone-muted text-sm">{SITE.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <span className="section-label">{label}</span>
      </div>
      {href ? (
        <a href={href} className="text-bone text-lg hover:text-yellow transition-colors block pl-9" data-cursor-hover>
          {value}
        </a>
      ) : (
        <p className="text-bone text-lg pl-9">{value}</p>
      )}
    </div>
  );
}
