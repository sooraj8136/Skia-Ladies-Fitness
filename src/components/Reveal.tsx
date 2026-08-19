import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({ children, delay = 0, y = 40, className = '', once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function RevealText({ text, className = '', delay = 0, stagger = 0.06, once = true }: RevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: '-50px' });
  const words = text.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            animate={inView ? { y: 0 } : { y: '100%' }}
            transition={{ duration: 0.6, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

interface RevealLinesProps {
  lines: string[];
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function RevealLines({ lines, className = '', delay = 0, stagger = 0.12, once = true }: RevealLinesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-50px' });

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: '100%' }}
            animate={inView ? { y: 0 } : { y: '100%' }}
            transition={{ duration: 0.7, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export function Counter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    let rafId: number | null = null;
    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(start + (value - start) * eased));
      if (progress < 1) rafId = requestAnimationFrame(animate);
      else setCount(value);
    };
    // small randomized stagger to avoid many rAFs firing exactly together
    const timeout = window.setTimeout(() => {
      rafId = requestAnimationFrame(animate);
    }, Math.floor(Math.random() * 120));
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(timeout);
    };
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
