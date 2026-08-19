import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  children?: ReactNode;
}

export function ParallaxImage({ src, alt, className = '', speed = 0.3, children }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
        loading="lazy"
      />
      {children}
    </div>
  );
}

interface HoverImageCardProps {
  src: string;
  alt: string;
  className?: string;
  zoom?: number;
  children?: ReactNode;
  overlay?: boolean;
}

export function HoverImageCard({ src, alt, className = '', zoom = 1.08, children, overlay = true }: HoverImageCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.img
        src={src}
        alt={alt}
        animate={{ scale: hovered ? zoom : 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      )}
      {children}
    </div>
  );
}
