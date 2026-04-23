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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
          <span className="text-xl font-bold tracking-tighter text-foreground uppercase">
            {/* Branding optimized */}
            BHAVIN<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="text-foreground p-2"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-[100] bg-black flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between py-6 px-6 border-b border-white/5">
              <span className="text-xl font-bold tracking-tighter text-white">
                BHAVIN<span className="text-primary">.</span>
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-black text-white hover:text-primary transition-all active:scale-90 inline-block uppercase tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-10 border-t border-white/5 bg-white/[0.02]">
              <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-6 text-center">Let's Connect</p>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://github.com/bhavik69600/" 
                  className="flex items-center justify-center gap-2 py-4 glass rounded-xl text-xs font-bold text-white/70 hover:text-white"
                >
                  GITHUB
                </a>
                <a 
                  href="https://linkedin.com/in/rajput-bhavin-9512a028a" 
                  className="flex items-center justify-center gap-2 py-4 glass rounded-xl text-xs font-bold text-white/70 hover:text-white"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </nav>
  );
}

