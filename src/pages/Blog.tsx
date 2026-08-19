import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Clock } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionLabel, PageHeader } from '@/components/SectionLabel';
import { HoverImageCard } from '@/components/ParallaxImage';
import { BLOG_POSTS } from '@/data/content';

const CATEGORIES = ['All', 'Strength', 'Recovery', 'Conditioning', 'Beginners', 'Nutrition', 'Stories'];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <div>
      <PageHeader
        label="Blog & Results"
        title="The journal."
        subtitle="Training tips, member transformations, and studio news from the coaches who actually do the work. No fluff, no recycled content."
      />

      {/* Category filter */}
      <section className="relative py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-cursor-hover
                className={`px-5 py-2.5 rounded-full text-sm uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-yellow text-black font-semibold'
                    : 'border border-ink-border text-bone-muted hover:border-yellow hover:text-yellow'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="relative py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filtered.map((post, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <article
                    onClick={() => setSelectedPost(i)}
                    data-cursor-hover
                    className="group cursor-pointer"
                  >
                    <HoverImageCard
                      src={post.image}
                      alt={post.title}
                      className="aspect-[16/10] rounded-2xl"
                    >
                      <div className="absolute top-4 left-4">
                        <span className="text-xs uppercase tracking-ultra text-black bg-yellow px-3 py-1 rounded-full font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </HoverImageCard>
                    <div className="mt-5">
                      <div className="flex items-center gap-3 text-xs text-bone-dim uppercase tracking-widest">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="display-text text-2xl text-bone mt-3 group-hover:text-yellow transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-bone-muted text-sm mt-2 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center gap-2 mt-4 text-yellow text-sm uppercase tracking-widest">
                        Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Blog post modal */}
      <AnimatePresence>
        {selectedPost !== null && (
          <BlogModal
            post={BLOG_POSTS[selectedPost]}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function BlogModal({ post, onClose }: { post: typeof BLOG_POSTS[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[70] bg-ink/95 backdrop-blur-md overflow-y-auto"
    >
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-3xl mx-auto px-6 md:px-12 py-20"
      >
        <button
          onClick={onClose}
          data-cursor-hover
          className="fixed top-8 right-8 w-12 h-12 rounded-full border border-bone-muted/30 flex items-center justify-center text-bone hover:border-yellow hover:text-yellow transition-colors"
          aria-label="Close article"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-3 text-xs uppercase tracking-ultra text-bone-dim mb-6">
          <span className="text-yellow bg-yellow/10 px-3 py-1 rounded-full border border-yellow/30">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {post.readTime}
          </span>
        </div>

        <h1 className="display-text text-4xl md:text-6xl text-bone leading-[0.95]">{post.title}</h1>

        <div className="mt-8 rounded-2xl overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
        </div>

        <div className="mt-12 space-y-6">
          {post.content.map((para, i) => (
            <p key={i} className="text-bone-muted text-lg leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-ink-border">
          <p className="text-bone-muted">
            Want to train with us? <a href="/contact" className="text-yellow link-underline">Book a free trial →</a>
          </p>
        </div>
      </motion.article>
    </motion.div>
  );
}
