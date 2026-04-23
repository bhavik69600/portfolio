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
      const res = await fetch('https://formspree.io/f/xpqokkpb', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
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
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-6 min-h-[400px]"
              >
                <div className="p-6 bg-accent/10 rounded-full">
                  <CheckCircle2 className="w-16 h-16 text-accent animate-bounce" />
                </div>
                <h3 className="text-4xl font-black text-white leading-tight">Thank You!</h3>
                <p className="text-foreground/60 text-lg font-medium max-w-[280px]">
                  Your message has been delivered. I will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-primary hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {status === 'error' && (
                  <div className="glass p-4 rounded-2xl flex items-center gap-3 border-red-500/20 bg-red-500/5 animate-in slide-in-from-top duration-300">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <p className="text-sm font-bold text-red-500">Something went wrong. Please try again.</p>
                  </div>
                )}

                <div className="space-y-2 group">
                  <label htmlFor="name" className="text-xs font-black uppercase tracking-[0.2em] text-foreground/60 pl-2 group-focus-within:text-primary transition-colors">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/20 group-focus-within:text-primary transition-colors" />
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your Name"
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
                      placeholder="Your Email"
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
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
