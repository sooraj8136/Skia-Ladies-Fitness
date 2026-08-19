import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowDown, ArrowRight, Star, Quote } from 'lucide-react';
import { Reveal, RevealText, RevealLines, Counter } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionLabel';
import { ParallaxImage, HoverImageCard } from '@/components/ParallaxImage';
import { FeatureCard } from '@/components/FeatureCard';
import { MagneticButton } from '@/components/MagneticButton';
import { CLASSES, TRAINERS, TESTIMONIALS, STATS, FEATURES, SITE } from '@/data/content';

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4944006/pexels-photo-4944006.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Woman strength training at SKIA MGF Ladies Gym"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-yellow" />
            <span className="section-label">Ladies Gym · Tirur, Kerala</span>
          </motion.div>

          <h1 className="display-text text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] text-bone leading-[0.85]">
            <RevealLines lines={['YOUR', 'JOURNEY', 'STARTS HERE']} delay={0.5} stagger={0.15} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-bone-muted text-lg md:text-xl mt-8 max-w-xl leading-relaxed"
          >
            Tirur's trusted destination for women's fitness. Fully air-conditioned, experienced ladies trainers, and a safe, comfortable environment. Join today and become the best version of yourself.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <MagneticButton>
              <Link to="/contact" className="btn-primary" data-cursor-hover>
                Book Free Trial <ArrowRight size={18} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="/classes" className="btn-outline" data-cursor-hover>
                View Classes
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-bone-dim text-xs uppercase tracking-ultra">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-yellow">
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* STORY TEASER */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <ParallaxImage
              src="https://images.pexels.com/photos/7674486/pexels-photo-7674486.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Woman strength training"
              className="aspect-[4/5] rounded-2xl"
              speed={0.15}
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow px-8 py-4 rounded-xl hidden md:block">
              <span className="display-text text-3xl text-black">TIRUR</span>
            </div>
          </div>
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="display-text text-5xl md:text-6xl mt-8 text-bone">
              Tirur's trusted <br />
              destination for <br />
              <span className="text-yellow">women's fitness.</span>
            </h2>
            <Reveal delay={0.2}>
              <p className="text-bone-muted text-lg mt-8 leading-relaxed">
                SKIA MGF Ladies Gym was founded with one mission: to give the women of Tirur a fitness space of their own. A place where you feel safe, supported, and motivated. Fully air-conditioned, with experienced ladies trainers who understand your goals and help you achieve them — one workout at a time.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link to="/about" className="link-underline text-yellow text-sm uppercase tracking-widest mt-8 inline-block" data-cursor-hover>
                Read our full story →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-ink-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 className="display-text text-5xl md:text-6xl mt-8 text-bone">
                Not just <br />
                a gym. A <br />
                <span className="text-yellow">movement.</span>
              </h2>
            </div>
            <div className="flex items-end">
              <Reveal delay={0.2}>
                <p className="text-bone-muted text-lg leading-relaxed">
                  Every detail of SKIA MGF — from the fully air-conditioned facility to the experienced ladies trainers to the women-only environment — exists because we listened to what women in Tirur actually needed from a fitness space, and then we built it.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES PREVIEW */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <SectionLabel>Featured Classes</SectionLabel>
              <h2 className="display-text text-5xl md:text-6xl mt-8 text-bone">
                Find your <span className="text-yellow">fit.</span>
              </h2>
            </div>
            <Reveal delay={0.2}>
              <Link to="/classes" className="btn-outline" data-cursor-hover>
                View All Classes <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLASSES.slice(0, 3).map((cls, i) => (
              <Reveal key={cls.slug} delay={i * 0.1}>
                <Link to="/classes" data-cursor-hover>
                  <HoverImageCard
                    src={cls.image}
                    alt={cls.name}
                    className="aspect-[3/4] rounded-2xl group cursor-pointer"
                  >
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs uppercase tracking-ultra text-yellow bg-yellow/10 px-3 py-1 rounded-full border border-yellow/30">
                          {cls.intensity}
                        </span>
                        <span className="text-xs text-bone-muted">{cls.duration}</span>
                      </div>
                      <h3 className="display-text text-3xl text-bone group-hover:text-yellow transition-colors duration-300">
                        {cls.name}
                      </h3>
                      <p className="text-bone-muted text-sm mt-2 line-clamp-2">{cls.description}</p>
                      <div className="flex items-center gap-2 mt-4 text-yellow text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Schedule <ArrowRight size={16} />
                      </div>
                    </div>
                  </HoverImageCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-ink-surface overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-glow rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
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

      {/* TRAINERS PREVIEW */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <SectionLabel>The Coaches</SectionLabel>
              <h2 className="display-text text-5xl md:text-6xl mt-8 text-bone">
                Guided by <br />
                <span className="text-yellow">the best.</span>
              </h2>
            </div>
            <Reveal delay={0.2}>
              <Link to="/trainers" className="btn-outline" data-cursor-hover>
                Meet the Team <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {TRAINERS.slice(0, 4).map((trainer, i) => (
              <Reveal key={trainer.name} delay={i * 0.08}>
                <HoverImageCard
                  src={trainer.image}
                  alt={trainer.name}
                  className="aspect-[3/4] rounded-2xl"
                >
                  <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                    <h3 className="display-text text-xl md:text-2xl text-bone">{trainer.name}</h3>
                    <p className="text-yellow text-xs uppercase tracking-widest mt-1">{trainer.specialty}</p>
                  </div>
                </HoverImageCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialCarousel />

      {/* CTA BANNER */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-ink-surface">
        <motion.div
          animate={{ x: ['0%', '100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-5"
        >
          <div className="display-text text-[20rem] whitespace-nowrap text-yellow leading-none">
            READY · READY · READY ·
          </div>
        </motion.div>
        <div className="relative max-w-4xl mx-auto text-center">
          <SectionLabel className="justify-center" >Ready to Transform?</SectionLabel>
          <h2 className="display-text text-6xl md:text-8xl mt-8 text-bone">
            Join today. <br />
            <span className="text-yellow">Become your best.</span>
          </h2>
          <p className="text-bone-muted text-lg mt-8 max-w-xl mx-auto">
            Your first session is free. No advance payment, no pressure. Just show up and see what SKIA MGF can do for you. Strong Women. Healthy Lives. Confident Futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <MagneticButton>
              <Link to="/contact" className="btn-primary" data-cursor-hover>
                Book Your Free Trial <ArrowRight size={18} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="/pricing" className="btn-outline" data-cursor-hover>
                See Pricing
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}

function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-ink-surface overflow-hidden">
      <div className="absolute top-1/2 left-8 -translate-y-1/2 text-yellow/10 pointer-events-none">
        <Quote size={120} />
      </div>
      <div className="relative max-w-4xl mx-auto">
        <SectionLabel className="justify-center">Member Stories</SectionLabel>
        <div className="mt-12 min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow fill-yellow" />
                ))}
              </div>
              <p className="display-text text-3xl md:text-4xl text-bone leading-tight max-w-3xl mx-auto">
                "{TESTIMONIALS[active].quote}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <img
                  src={TESTIMONIALS[active].image}
                  alt={TESTIMONIALS[active].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow"
                />
                <div className="text-left">
                  <p className="text-bone font-semibold">{TESTIMONIALS[active].name}</p>
                  <p className="text-bone-muted text-sm">{TESTIMONIALS[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              data-cursor-hover
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'w-8 bg-yellow' : 'w-2 bg-bone-muted/30 hover:bg-bone-muted/60'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
