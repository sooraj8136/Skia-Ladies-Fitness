import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/data/content';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: 'transform' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-ink/95 border-b border-ink-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-20">
          <Link to="/" className="group flex items-center gap-2" data-cursor-hover>
            <span className="display-text text-3xl text-bone group-hover:text-yellow transition-colors duration-300">
              {SITE.name}
            </span>
            <span className="hidden md:inline-block w-2 h-2 bg-yellow rounded-full group-hover:scale-150 transition-transform duration-300" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  data-cursor-hover
                  className={`text-sm uppercase tracking-widest transition-colors duration-300 relative ${
                    active ? 'text-yellow' : 'text-bone-muted hover:text-bone'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-yellow"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="btn-primary hidden sm:inline-flex text-xs px-6 py-3" data-cursor-hover>
              Book Free Trial
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-bone p-2"
              data-cursor-hover
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink flex flex-col"
          >
            <div className="flex items-center justify-between h-20 px-6 md:px-12">
              <span className="display-text text-3xl text-bone">{SITE.name}</span>
              <button onClick={() => setMenuOpen(false)} className="text-bone p-2" aria-label="Close menu" data-cursor-hover>
                <X size={28} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 md:px-12 gap-2">
              {NAV_LINKS.map((link, i) => {
                const active = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.path}
                      className={`display-text text-5xl md:text-7xl transition-colors duration-300 ${
                        active ? 'text-yellow' : 'text-bone hover:text-yellow'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="pb-12 px-6 md:px-12 flex flex-col gap-4">
              <Link to="/contact" className="btn-primary w-full">Book Free Trial</Link>
              <p className="text-bone-muted text-sm">{SITE.email} · {SITE.phone}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
