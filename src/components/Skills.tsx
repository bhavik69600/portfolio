'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import { Globe, Server, Database, Terminal, CheckCircle2 } from 'lucide-react';

/* ── Data ─────────────────────────────────────────────────────────────── */
const ticker = [
  'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB',
  'TypeScript', 'Python', 'Tailwind CSS', 'REST APIs', 'MySQL',
  'JWT Auth', 'Redux', 'Firebase', 'Supabase', 'PostgreSQL',
  'Framer Motion', 'Three.js', 'Docker', 'Git & GitHub', 'Postman',
];

const categories = [
  {
    title: 'Frontend',
    sub: 'UI & UX Engineering',
    icon: Globe,
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 93 },
      { name: 'Tailwind CSS', level: 97 },
      { name: 'TypeScript', level: 85 },
      { name: 'Framer Motion', level: 88 },
      { name: 'Redux', level: 82 },
    ],
    gradient: 'from-blue-600/20 via-blue-500/5 to-transparent',
    glow: 'rgba(59,130,246,0.25)',
    accent: '#3b82f6',
    span: 'lg:col-span-2',
  },
  {
    title: 'Backend',
    sub: 'Server & APIs',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'JWT / Auth', level: 85 },
      { name: 'Python', level: 78 },
      { name: 'Django', level: 72 },
    ],
    gradient: 'from-purple-600/20 via-purple-500/5 to-transparent',
    glow: 'rgba(168,85,247,0.25)',
    accent: '#a855f7',
    span: 'lg:col-span-1',
  },
  {
    title: 'Databases',
    sub: 'Storage & Cloud',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'MySQL', level: 82 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Firebase', level: 80 },
      { name: 'Supabase', level: 76 },
    ],
    gradient: 'from-emerald-600/20 via-emerald-500/5 to-transparent',
    glow: 'rgba(16,185,129,0.25)',
    accent: '#10b981',
    span: 'lg:col-span-1',
  },
  {
    title: 'Core Languages',
    sub: 'Foundations',
    icon: Terminal,
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'Java', level: 75 },
      { name: 'C / C++', level: 72 },
      { name: 'C#', level: 68 },
      { name: 'SQL', level: 82 },
    ],
    gradient: 'from-amber-500/20 via-amber-400/5 to-transparent',
    glow: 'rgba(234,179,8,0.2)',
    accent: '#eab308',
    span: 'lg:col-span-2',
  },
];

/* ── Subcomponents ────────────────────────────────────────────────────── */

function SkillBar({ name, level, accent, index }: { name: string; level: number; accent: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-semibold text-white/80 group-hover:text-white/100 transition-colors">
          {name}
        </span>
        <span className="text-xs font-black tabular-nums" style={{ color: accent }}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 + index * 0.05 }}
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${accent}99, ${accent})` }}
        >
          <span className="absolute right-0 top-0 bottom-0 w-4 rounded-full blur-sm opacity-80"
            style={{ background: accent }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

function CategoryCard({ cat, i }: { cat: typeof categories[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
      className={`relative rounded-3xl overflow-hidden border border-white/[0.07] p-8 flex flex-col gap-7 ${cat.span}
                  hover:border-white/20 transition-all duration-500 group`}
      style={{
        background: 'rgba(10,15,30,0.7)',
        backdropFilter: 'blur(16px)',
        boxShadow: `0 0 60px ${cat.glow}`,
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-60 group-hover:opacity-90 transition-opacity duration-500`} />
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-700"
        style={{ background: cat.accent }} />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] mb-1.5"
            style={{ color: cat.accent }}>{cat.sub}</p>
          <h3 className="text-3xl font-black text-white leading-none">{cat.title}</h3>
        </div>
        <div className="p-3 rounded-2xl border border-white/10 flex-shrink-0"
          style={{ background: `${cat.accent}15` }}>
          <cat.icon className="w-7 h-7" style={{ color: cat.accent }} />
        </div>
      </div>

      <div className="relative flex flex-col gap-4">
        {cat.skills.map((s, si) => (
          <SkillBar key={s.name} name={s.name} level={s.level} accent={cat.accent} index={si} />
        ))}
      </div>
    </motion.div>
  );
}

function Ticker() {
  const items = [...ticker, ...ticker, ...ticker];
  return (
    <div className="relative w-full overflow-hidden my-16 py-10 bg-white/[0.02] border-y border-white/5 backdrop-blur-3xl">
      <motion.div
        className="flex gap-16 whitespace-nowrap px-8"
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        {items.map((tech, idx) => (
          <span
            key={`${tech}-${idx}`}
            className="inline-flex items-center gap-6 text-xl md:text-3xl font-black uppercase tracking-[0.3em] text-white/20 hover:text-primary transition-all cursor-default"
          >
            <CheckCircle2 className="w-6 h-6 text-primary/50 flex-shrink-0" />
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <div id="skills" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 text-center space-y-5">
        <motion.p className="text-xs font-black uppercase tracking-[0.35em] text-primary">Full Stack Toolkit</motion.p>
        <h2 className="text-4xl md:text-6xl font-black text-white">My <span className="text-gradient">Arsenal</span></h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
          Technologies I use daily to craft high-performance, beautifully designed full-stack applications.
        </p>
      </div>

      <Ticker />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
