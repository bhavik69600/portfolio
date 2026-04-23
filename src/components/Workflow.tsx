'use client';

import Section from './Section';
import { motion } from 'framer-motion';
import { ClipboardList, Cpu, Zap, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Strategize',
    desc: 'Deep diving into the problem, user goals, and modern technical architecture.',
    icon: ClipboardList,
    color: 'text-blue-500'
  },
  {
    title: 'Architect',
    desc: 'Crafting the blueprint with optimized schemas and high-performance logic.',
    icon: Cpu,
    color: 'text-purple-500'
  },
  {
    title: 'Optimize',
    desc: 'Refining every pixel for accessibility, performance, and elite aesthetics.',
    icon: Zap,
    color: 'text-amber-500'
  },
  {
    title: 'Deploy',
    desc: 'Launching to the cloud with CI/CD pipelines and zero-downtime workflows.',
    icon: Rocket,
    color: 'text-emerald-500'
  }
];

export default function Workflow() {
  return (
    <Section id="workflow" className="py-20">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Process</h2>
        <h3 className="text-3xl md:text-5xl font-black text-white">How I Get <span className="text-gradient">Shit Done</span></h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 md:p-10 rounded-[32px] border border-white/5 relative group hover:neon-border transition-all duration-500"
          >
             <div aria-hidden="true" className="absolute top-0 right-0 p-8 text-4xl font-black text-white/[0.08] italic">0{i+1}</div>
             <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 ${step.color}`}>
                <step.icon className="w-7 h-7" />
             </div>
             <h4 className="text-xl font-black text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h4>
             <p className="text-sm font-medium text-white/70 leading-relaxed">{step.desc}</p>

          </motion.div>
        ))}
      </div>
    </Section>
  );
}
