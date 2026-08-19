import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { SITE } from '@/data/content';

export function WhatsAppButton() {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hi! I'm interested in joining SKIA MGF Ladies Gym`
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor-hover
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-yellow flex items-center justify-center shadow-[0_0_30px_rgba(255,212,0,0.3)] hover:shadow-[0_0_50px_rgba(255,212,0,0.5)] transition-shadow duration-500"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-black" />
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-yellow"
        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />
    </motion.a>
  );
}
