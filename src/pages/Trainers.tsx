import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Mail } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionLabel, PageHeader } from '@/components/SectionLabel';
import { HoverImageCard } from '@/components/ParallaxImage';
import { TRAINERS } from '@/data/content';

export function Trainers() {
  return (
    <div>
      <PageHeader
        label="The Coaches"
        title="Meet the team."
        subtitle="Six coaches. Six specialties. One standard: every woman who walks through our doors gets better under their watch."
      />

      {/* Trainer grid */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TRAINERS.map((trainer, i) => (
              <Reveal key={trainer.name} delay={i * 0.08}>
                <div className="group">
                  <HoverImageCard
                    src={trainer.image}
                    alt={trainer.name}
                    className="aspect-[3/4] rounded-2xl"
                  >
                    {/* Hover overlay with bio */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                      <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-[400px]">
                        <p className="text-bone-muted text-sm leading-relaxed mb-4">{trainer.bio}</p>
                        <div className="flex gap-3">
                          <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center text-black hover:scale-110 transition-transform"
                            data-cursor-hover
                          >
                            <Instagram size={18} />
                          </a>
                          <a
                            href="mailto:hello@formastudio.com"
                            className="w-10 h-10 rounded-full border border-bone-muted/30 flex items-center justify-center text-bone hover:border-yellow hover:text-yellow transition-colors"
                            data-cursor-hover
                          >
                            <Mail size={18} />
                          </a>
                        </div>
                      </div>
                      <div className="transition-all duration-500">
                        <h3 className="display-text text-3xl text-bone group-hover:text-yellow transition-colors">
                          {trainer.name}
                        </h3>
                        <p className="text-yellow text-xs uppercase tracking-widest mt-2">{trainer.specialty}</p>
                        <p className="text-bone-dim text-xs mt-1">{trainer.cert}</p>
                      </div>
                    </div>
                  </HoverImageCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-ink-surface">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel className="justify-center">Want to Coach Here?</SectionLabel>
          <h2 className="display-text text-5xl md:text-7xl mt-8 text-bone">
            We are always <br />
            <span className="text-yellow">looking for talent.</span>
          </h2>
          <p className="text-bone-muted text-lg mt-8 max-w-xl mx-auto">
            If you are a certified coach who believes in training women for strength and capability — not just aesthetics — we want to talk.
          </p>
          <Link to="/contact" className="btn-primary mt-12 inline-flex" data-cursor-hover>
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
