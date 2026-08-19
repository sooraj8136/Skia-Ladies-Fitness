import { motion } from 'framer-motion';
import { Eye, Flame, Heart, Shield } from 'lucide-react';
import { type ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
  eye: <Eye size={28} strokeWidth={1.5} />,
  flame: <Flame size={28} strokeWidth={1.5} />,
  heart: <Heart size={28} strokeWidth={1.5} />,
  shield: <Shield size={28} strokeWidth={1.5} />,
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-8 border border-ink-border rounded-2xl bg-ink-card hover:border-yellow/40 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-glow rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative">
        <div className="text-yellow mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
          {iconMap[icon]}
        </div>
        <h3 className="font-display text-2xl uppercase text-bone mb-3">{title}</h3>
        <p className="text-bone-muted leading-relaxed text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
