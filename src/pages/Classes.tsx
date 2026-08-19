import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Flame, TrendingUp } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionLabel, PageHeader } from '@/components/SectionLabel';
import { HoverImageCard } from '@/components/ParallaxImage';
import { CLASSES, WEEKLY_SCHEDULE } from '@/data/content';

export function Classes() {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div>
      <PageHeader
        label="Classes & Programs"
        title="Find your fight."
        subtitle="Six disciplines, one philosophy. Every class is coach-led, capped at 8 women, and programmed to make you measurably stronger — not just sweaty."
      />

      {/* Class catalog */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLASSES.map((cls, i) => (
              <Reveal key={cls.slug} delay={i * 0.08}>
                <HoverImageCard
                  src={cls.image}
                  alt={cls.name}
                  className="aspect-[4/5] rounded-2xl group"
                >
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-xs uppercase tracking-ultra text-black bg-yellow px-3 py-1 rounded-full font-semibold">
                        {cls.level}
                      </span>
                      <span className="text-xs text-bone-muted flex items-center gap-1">
                        <Clock size={12} /> {cls.duration}
                      </span>
                      <span className="text-xs text-bone-muted flex items-center gap-1">
                        <Flame size={12} /> {cls.intensity}
                      </span>
                    </div>
                    <h3 className="display-text text-3xl text-bone group-hover:text-yellow transition-colors duration-300">
                      {cls.name}
                    </h3>
                    <p className="text-bone-muted text-sm mt-3 leading-relaxed">{cls.description}</p>
                    <div className="mt-4 space-y-1">
                      {cls.schedule.map((s) => (
                        <p key={s} className="text-xs text-yellow/80 uppercase tracking-widest">{s}</p>
                      ))}
                    </div>
                  </div>
                </HoverImageCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly schedule */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-ink-surface">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Weekly Schedule</SectionLabel>
          <h2 className="display-text text-5xl md:text-6xl mt-8 mb-12 text-bone">
            Show up. <span className="text-yellow">Every week.</span>
          </h2>

          {/* Day tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {WEEKLY_SCHEDULE.map((day, i) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(i)}
                data-cursor-hover
                className={`px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all duration-300 ${
                  selectedDay === i
                    ? 'bg-yellow text-black font-semibold'
                    : 'border border-ink-border text-bone-muted hover:border-yellow hover:text-yellow'
                }`}
              >
                {day.day}
              </button>
            ))}
          </div>

          {/* Schedule grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {WEEKLY_SCHEDULE[selectedDay].slots.length === 0 ? (
                <p className="text-bone-muted text-lg py-12 text-center">No classes scheduled. Recovery day.</p>
              ) : (
                WEEKLY_SCHEDULE[selectedDay].slots.map((slot, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group grid grid-cols-12 gap-4 items-center p-6 border border-ink-border rounded-xl hover:border-yellow/40 hover:bg-ink-card transition-all duration-300"
                  >
                    <div className="col-span-3 md:col-span-2">
                      <span className="display-text text-2xl text-yellow">{slot.time}</span>
                    </div>
                    <div className="col-span-6 md:col-span-5">
                      <h3 className="display-text text-xl text-bone group-hover:text-yellow transition-colors">{slot.class}</h3>
                    </div>
                    <div className="col-span-3 md:col-span-3 text-bone-muted text-sm">
                      Coach {slot.coach}
                    </div>
                    <div className="hidden md:flex col-span-2 justify-end">
                      <Link to="/contact" className="text-yellow text-sm uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" data-cursor-hover>
                        Book <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel className="justify-center">Not sure where to start?</SectionLabel>
          <h2 className="display-text text-5xl md:text-7xl mt-8 text-bone">
            Book a free <span className="text-yellow">trial.</span>
          </h2>
          <p className="text-bone-muted text-lg mt-8 max-w-xl mx-auto">
            Try any class, no charge. A coach will help you pick the right one based on your goals and experience.
          </p>
          <Link to="/contact" className="btn-primary mt-12 inline-flex" data-cursor-hover>
            Book Your Free Class <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
