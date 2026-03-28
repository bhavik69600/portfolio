'use client';

import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Send, User, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-black text-foreground">
              Let's <span className="text-gradient underline decoration-primary/20 underline-offset-8">Collaborate</span>.
            </h2>
            <p className="text-foreground/50 text-xl font-medium leading-relaxed max-w-md">
              Whether you have a project in mind or just want to say hello, my inbox is always open.
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 glass p-6 rounded-3xl border-glass-border hover:neon-border transition-all w-fit pr-12">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase text-foreground/60 tracking-widest mb-1">Email Me</span>
                <a href="mailto:bhavikr6960@gmail.com" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                  bhavikr6960@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 glass p-6 rounded-3xl border-glass-border hover:neon-border transition-all w-fit pr-12">
              <div className="p-4 bg-secondary/10 rounded-2xl text-secondary">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase text-foreground/60 tracking-widest mb-1">WhatsApp</span>
                <a href="https://wa.me/916355043103" target="_blank" className="text-lg font-bold text-foreground hover:text-secondary transition-colors">
                  +91 63550 43103
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-10 md:p-14 rounded-[48px] border-glass-border relative overflow-hidden"
        >
          {/* Form Status Overlays */}
          {status === 'success' && (
            <div className="absolute inset-0 bg-background/90 backdrop-blur-3xl z-20 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-500">
              <CheckCircle2 className="w-20 h-20 text-accent mb-6 animate-bounce" />
              <h3 className="text-3xl font-black mb-4">Message Sent!</h3>
              <p className="text-foreground/60 font-medium">Thank you for reaching out. I'll get back to you shortly.</p>
            </div>
          )}

          {status === 'error' && (
            <div className="absolute top-4 left-4 right-4 glass p-4 rounded-2xl z-20 flex items-center gap-3 border-red-500/20 bg-red-500/5 animate-in slide-in-from-top duration-300">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-sm font-bold text-red-500">Something went wrong. Please try again.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2 group">
              <label htmlFor="name" className="text-xs font-black uppercase tracking-[0.2em] text-foreground/60 pl-2 group-focus-within:text-primary transition-colors">Full Name</label>
              <div className="relative">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/20 group-focus-within:text-primary transition-colors" />
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 p-6 pl-16 rounded-[28px] text-lg font-medium text-foreground outline-none focus:neon-border transition-all placeholder:text-foreground/10"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label htmlFor="email" className="text-xs font-black uppercase tracking-[0.2em] text-foreground/60 pl-2 group-focus-within:text-primary transition-colors">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/20 group-focus-within:text-primary transition-colors" />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 p-6 pl-16 rounded-[28px] text-lg font-medium text-foreground outline-none focus:neon-border transition-all placeholder:text-foreground/10"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label htmlFor="message" className="text-xs font-black uppercase tracking-[0.2em] text-foreground/60 pl-2 group-focus-within:text-primary transition-colors">Your Message</label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 p-6 rounded-[28px] text-lg font-medium text-foreground outline-none focus:neon-border transition-all resize-none placeholder:text-foreground/10"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full group relative overflow-hidden p-6 rounded-[28px] font-black text-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] bg-primary text-white neon-glow disabled:opacity-50"
            >
              {status === 'loading' ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Send Message
                  <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
