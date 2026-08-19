import { type ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <Reveal>
      <div className={`flex items-center gap-4 ${className}`}>
        <div className="h-px w-12 bg-yellow" />
        <span className="section-label">{children}</span>
      </div>
    </Reveal>
  );
}

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-glow to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="display-text text-6xl md:text-8xl lg:text-9xl mt-8 text-bone">
          {title.split(' ').map((word, i) => (
            <span key={i} className={i % 3 === 1 ? 'text-yellow' : ''}>
              {word}{' '}
            </span>
          ))}
        </h1>
        {subtitle && (
          <p className="text-bone-muted text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
