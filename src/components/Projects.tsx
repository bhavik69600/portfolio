'use client';

import Section from './Section';
import { motion } from 'framer-motion';
import { Code2, Database, Search, ShieldCheck, Users, Briefcase } from 'lucide-react';

const projects = [
  {
    title: 'Medicare AI System',
    description: 'Developed by Rajput Bhavin, this AI-based hospital automation system uses React.js and Node.js for elite appointment management.',
    tech: ['React.js', 'Node.js', 'AI', 'SaaS'],
    icon: ShieldCheck,
    color: 'text-blue-400'
  },
  {
    title: 'Real Estate Platform',
    description: 'A dynamic property system architected by Rajput Bhavin using the MERN Stack, focusing on seamless database integration and scalability.',
    tech: ['MERN Stack', 'Redux', 'MongoDB'],
    icon: Briefcase,
    color: 'text-purple-400'
  },
  {
    title: 'Places Data Scraper',
    description: 'A specialized Web Automation tool by Rajput Bhavin for real-time extraction using Node.js and Puppeteer with CSV exports.',
    tech: ['Node.js', 'Automation', 'Puppeteer', 'Logic'],
    icon: Search,
    color: 'text-emerald-400'
  },
  {
    title: 'Security Gate App',
    description: 'Custom mobile architecture by Rajput Bhavin using Kotlin and Supabase for high-security visitor request management.',
    tech: ['Kotlin', 'Supabase', 'Firebase', 'Security'],
    icon: Code2,
    color: 'text-orange-400'
  },
  {
    title: 'Employee System',
    description: 'A full-stack CRUD application by Rajput Bhavin featuring secure JWT Authentication and optimized REST API structures.',
    tech: ['MERN Stack', 'JWT', 'REST API', 'Auth'],
    icon: Users,
    color: 'text-cyan-400'
  },
  {
    title: 'Visa Consultancy',
    description: 'Responsive web platform engineered by Rajput Bhavin for efficient consultancy client interaction and data handling.',
    tech: ['React.js', 'Node.js', 'Responsive', 'UX'],
    icon: Database,
    color: 'text-amber-400'
  }
];

export default function Projects() {
  return (
    <Section id="projects" className="py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-20 gap-8 px-2">
        <div className="space-y-4">
          <h2 className="text-[10px] md:text-xs font-black tracking-[0.4em] text-primary uppercase">Rajput Bhavin Projects</h2>
          <h3 className="text-3xl md:text-6xl font-black text-white leading-tight">Featured <span className="text-gradient">Work</span></h3>
        </div>
        <p className="max-w-md text-foreground/70 text-base md:text-lg font-medium leading-relaxed">
          Crafting high-performance SaaS solutions and modern web apps as Rajput Bhavin, Full Stack Developer.
        </p>

      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative glass p-6 md:p-8 rounded-[32px] border border-white/5 hover:border-white/20 hover:neon-border transition-all duration-500 flex flex-col gap-6"
          >
            <div className="flex flex-col md:items-start justify-between gap-6">
              <div className="space-y-4 flex-1">
                <div className={`p-3 md:p-4 rounded-2xl w-fit ${project.color} bg-white/5 border border-white/5`}>
                  <project.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h4 className="text-xl md:text-3xl font-black text-white leading-tight tracking-tighter group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-sm md:text-base text-white/70 font-medium leading-relaxed mt-4">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/60 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {t}
                    </span>
                  ))}

                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
