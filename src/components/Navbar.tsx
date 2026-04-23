'use client';

import Link from 'next/link';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
          isScrolled ? 'glass py-2 shadow-lg backdrop-blur-md' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/#home"
            aria-label="Back to top"
            className="flex items-center gap-2 group"
          >
            <Code2 className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold tracking-tighter text-white uppercase">
              BHAVIN<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
              className="text-white p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            {/* Dark Backdrop - Click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[85%] bg-[#050505] border-l border-white/5 flex flex-col shadow-2xl"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <span className="text-lg font-black tracking-widest text-primary uppercase">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/50 hover:text-white"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-10 px-8 flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-black text-white/90 hover:text-primary transition-all flex items-center justify-between group"
                    >
                      <span className="uppercase tracking-tighter">{link.name}</span>
                      <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Footer */}
              <div className="p-8 border-t border-white/5 bg-white/[0.01]">
                <div className="flex flex-col gap-4">
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Rajput Bhavin</p>
                  <div className="flex gap-6">
                    <a href="https://github.com/bhavik69600/" className="text-xs font-bold text-white/60 hover:text-primary transition-colors">GITHUB</a>
                    <a href="https://linkedin.com/in/rajput-bhavin-9512a028a" className="text-xs font-bold text-white/60 hover:text-primary transition-colors">LINKEDIN</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
