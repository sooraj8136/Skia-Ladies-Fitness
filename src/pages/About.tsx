import { motion } from 'framer-motion';
import { Reveal, RevealLines } from '@/components/Reveal';
import { SectionLabel, PageHeader } from '@/components/SectionLabel';
import { ParallaxImage, HoverImageCard } from '@/components/ParallaxImage';
import { STATS, SITE } from '@/data/content';
import { Counter } from '@/components/Reveal';

const TIMELINE = [
  { year: '2023', title: 'The Dream', desc: 'SKIA MGF Ladies Gym opened its doors in Tirur with a simple mission: give women a fitness space of their own. A fully air-conditioned facility near the bus stand, with experienced ladies trainers.' },
  { year: '2024', title: 'Growing Strong', desc: 'Our membership grew quickly as word spread. Women in Tirur were looking for exactly this — a safe, comfortable, ladies-only environment to get fit. We added new classes and equipment.' },
  { year: '2025', title: 'New Programs', desc: 'Introduced boxing-inspired fitness, yoga, and structured weight loss programs. Brought on more certified women trainers to meet growing demand.' },
  { year: '2026', title: "Tirur's Trusted", desc: "SKIA MGF is now Tirur's most trusted destination for women's fitness. Over 500 women trained, and counting. The mission continues: Strong Women. Healthy Lives. Confident Futures." },
];

const VALUES = [
  { title: 'Women Only', desc: 'A safe, comfortable, private environment where women can train with confidence. No staring, no judgment — just women supporting women.' },
  { title: 'Expert Trainers', desc: 'Every trainer at SKIA MGF is a qualified woman who understands your body, your goals, and your challenges. You get real guidance, not just supervision.' },
  { title: 'Fully Air-Conditioned', desc: 'Train in comfort no matter the weather. Our entire facility is fully air-conditioned so you can focus on your workout, not the Tirur heat.' },
  { title: 'Real Results', desc: 'We track your progress, adjust your program, and celebrate every milestone. Whether it is weight loss, strength, or confidence — we measure what matters.' },
];

export function About() {
  return (
    <div>
      <PageHeader
        label="Our Story"
        title="Not a gym. A movement."
        subtitle="SKIA MGF Ladies Gym was born from a simple idea: the women of Tirur deserve a fitness space of their own. A place that is safe, comfortable, and built specifically for women — with experienced ladies trainers who understand your goals."
      />

      {/* Story split */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ParallaxImage
            src="https://images.pexels.com/photos/7674488/pexels-photo-7674488.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Woman training at SKIA MGF"
            className="aspect-[4/5] rounded-2xl"
            speed={0.12}
          />
          <div>
            <SectionLabel>The Beginning</SectionLabel>
            <h2 className="display-text text-4xl md:text-5xl mt-8 text-bone">
              We started with <br />
              <span className="text-yellow">a simple idea.</span>
            </h2>
            <Reveal delay={0.2}>
              <p className="text-bone-muted text-lg mt-8 leading-relaxed">
                Why should women in Tirur have to train in uncomfortable mixed gyms, or settle for walking around the bus stand for exercise? Why should there not be a fully air-conditioned, ladies-only gym with experienced women trainers right here in our town?
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-bone-muted text-lg mt-6 leading-relaxed">
                SKIA MGF was the answer. A gym near Tirur Bus Stand, opposite the petrol pump, built exclusively for women. A place where you can walk in, feel comfortable, and get a real workout with trainers who actually care about your progress.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-ink-surface">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Founder Note</SectionLabel>
          <div className="mt-12">
            <RevealLines
              lines={[
                '"Every woman deserves',
                'a place where she can',
                'train without fear of',
                'judgment. A place that',
                'is truly hers. That is',
                'what we built for Tirur."',
              ]}
              className="display-text text-3xl md:text-5xl text-bone leading-[1.1]"
              stagger={0.1}
            />
          </div>
          <Reveal delay={0.5}>
            <div className="flex items-center gap-4 mt-12">
              <img
                src="https://images.pexels.com/photos/6739128/pexels-photo-6739128.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="SKIA MGF Trainer"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-bone font-semibold text-lg">SKIA MGF</p>
                <p className="text-bone-muted text-sm">Tirur's Trusted Ladies Gym</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>What We Believe</SectionLabel>
          <h2 className="display-text text-5xl md:text-6xl mt-8 mb-16 text-bone">
            Four things <span className="text-yellow">we will not compromise.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="border-l-2 border-yellow pl-8 py-4">
                  <h3 className="display-text text-3xl text-bone mb-3">{v.title}</h3>
                  <p className="text-bone-muted leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-ink-surface">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Milestones</SectionLabel>
          <h2 className="display-text text-5xl md:text-6xl mt-8 mb-20 text-bone">
            Four years. <br />
            <span className="text-yellow">One mission.</span>
          </h2>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-ink-border md:-translate-x-1/2" />
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.05}>
                <div className={`relative flex gap-8 mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                  <div className="hidden md:block w-1/2" />
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-yellow border-4 border-ink-surface z-10 mt-2" />
                  <div className="flex-1 md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <span className="display-text text-5xl text-yellow">{item.year}</span>
                    <h3 className="display-text text-2xl text-bone mt-2">{item.title}</h3>
                    <p className="text-bone-muted mt-3 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1} className="text-center">
                <div className="display-text text-6xl md:text-7xl text-yellow">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="section-label mt-4">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Space gallery */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-ink-surface">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>The Space</SectionLabel>
          <h2 className="display-text text-5xl md:text-6xl mt-8 mb-16 text-bone">
            Where it <span className="text-yellow">happens.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: 'https://images.pexels.com/photos/7674500/pexels-photo-7674500.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Training area', label: 'Training Floor' },
              { src: 'https://images.pexels.com/photos/4753996/pexels-photo-4753996.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Dumbbell area', label: 'Free Weights' },
              { src: 'https://images.pexels.com/photos/4057069/pexels-photo-4057069.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Yoga area', label: 'Yoga & Stretch' },
            ].map((img, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <HoverImageCard src={img.src} alt={img.alt} className="aspect-[3/4] rounded-2xl">
                  <div className="absolute inset-0 p-8 flex items-end">
                    <h3 className="display-text text-2xl text-bone">{img.label}</h3>
                  </div>
                </HoverImageCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
