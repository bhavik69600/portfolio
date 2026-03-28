'use client';

import Section from './Section';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Database, Search, ShieldCheck, Users, Briefcase } from 'lucide-react';
import Magnetic from './Magnetic';

const projects = [
  {
    title: 'Medicare AI System',
    description: 'Developed an AI-based hospital automation system with chatbot appointment booking using React.js and Node.js.',
    tech: ['React.js', 'Node.js', 'AI', 'Chatbot'],
    icon: ShieldCheck,
    links: { github: '#', live: '#' },
    color: 'text-blue-400'
  },
  {
    title: 'Real Estate Platform',
    description: 'Developed a dynamic property listing system using React.js, Node.js, and MongoDB with user interaction and database integration.',
    tech: ['MERN Stack', 'Redux', 'Cloudinary'],
    icon: Briefcase,
    links: { github: '#', live: '#' },
    color: 'text-purple-400'
  },
  {
    title: 'Places Data Scraper',
    description: 'Built a real-time data extraction tool using React.js and Node.js to fetch business details with keyword-based search and CSV export.',
    tech: ['Node.js', 'Puppeteer', 'React', 'CSV'],
    icon: Search,
    links: { github: '#', live: '#' },
    color: 'text-emerald-400'
  },
  {
    title: 'Security Gate App',
    description: 'Built a visitor and security request management app using Kotlin with Supabase database and Firebase integration.',
    tech: ['Kotlin', 'Supabase', 'Firebase', 'Native'],
    icon: Code2,
    links: { github: '#', live: '#' },
    color: 'text-orange-400'
  },
  {
    title: 'Employee System',
    description: 'Created a full-stack web application with React, Node.js, Express, MongoDB implementing CRUD operations and REST APIs.',
    tech: ['MERN Stack', 'JWT', 'REST API'],
    icon: Users,
    links: { github: '#', live: '#' },
    color: 'text-cyan-400'
  },
  {
    title: 'Visa Consultancy',
    description: 'Designed and developed a responsive visa consultancy platform using React.js and Node.js for client interaction.',
    tech: ['React.js', 'Node.js', 'Responsive Design'],
    icon: Database,
    links: { github: '#', live: '#' },
    color: 'text-amber-400'
  }
];

export default function Projects() {
  return (
    <Section id="projects" className="py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-20 gap-8 px-2">
        <div className="space-y-4">
          <h2 className="text-[10px] md:text-xs font-black tracking-[0.4em] text-primary uppercase">Portfolio</h2>
          <h3 className="text-3xl md:text-6xl font-black text-white leading-tight">Featured <span className="text-gradient">Projects</span></h3>
        </div>
        <p className="max-w-md text-foreground/40 text-base md:text-lg font-medium leading-relaxed">
          Crafting high-performance digital solutions with modern tech stacks and clean code.
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
                  <h4 className="text-xl md:text-3xl font-black text-white leading-tight tracking-tighter group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm md:text-base text-white/50 font-medium leading-relaxed mt-4">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/5">
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
