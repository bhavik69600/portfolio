'use client';

import { Code2, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-24 px-6 md:px-12 border-t border-glass-border glass relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <a href="#home" className="flex items-center gap-2 group">
            <Code2 className="w-10 h-10 text-primary group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-black tracking-tighter text-foreground">
              BHAVIN<span className="text-primary">.</span>
            </span>
          </a>
          <p className="text-foreground/60 text-sm font-bold tracking-widest uppercase text-center md:text-left">
            Building the <span className="text-gradient">Future</span> of the Web
          </p>

        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-8">
            <a 
              href="https://github.com/bhavik69600/" 
              target="_blank" 
              aria-label="GitHub Profile"
              className="p-4 glass rounded-[20px] border-white/10 text-white/60 hover:text-white transition-all hover:scale-110 active:scale-90"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rajput-bhavin-9512a028a?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              aria-label="LinkedIn Profile"
              className="p-4 glass rounded-[20px] border-white/10 text-white/60 hover:text-white transition-all hover:scale-110 active:scale-90"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:bhavikr6960@gmail.com" 
              aria-label="Email Me"
              className="p-4 glass rounded-[20px] border-white/10 text-white/60 hover:text-white transition-all hover:scale-110 active:scale-90"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <p className="text-foreground/60 text-xs font-black tracking-[0.3em] uppercase">
            &copy; {currentYear} Bhavin Rajput. All Rights Reserved.
          </p>

        </div>

        <div className="hidden lg:flex flex-col items-end gap-2 text-right">
          <p className="text-foreground/50 text-sm font-bold">Ahmedabad, India</p>
          <p className="text-foreground/30 text-xs uppercase tracking-widest">Available Worldwide</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 text-xs font-black uppercase tracking-widest text-primary hover:underline transition-all"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
