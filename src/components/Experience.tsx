'use client';

import Section from './Section';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Vassu Infotech',
    period: '6 Months',
    description: 'Developed and maintained full-stack web applications. Built and integrated REST APIs for frontend-backend communication. Worked on real-world projects including web applications and automation systems. Collaborated on debugging, performance optimization, and feature development.',
    tags: ['MERN Stack', 'REST APIs', 'Cloud Architecture'],
  },
  {
    title: 'Web & IT Support',
    company: 'Captain Tractors',
    period: '6 Months',
    description: 'Managed and updated company website with regular monitoring and improvements. Supported data management, backups, and internal IT operations to ensure high system availability.',
    tags: ['Web Maintenance', 'IT Support', 'Data Management'],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white">
          The <span className="text-gradient">Experience</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title + index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                <p className="text-white/40">{exp.company}</p>
              </div>
              <span className="text-sm font-black text-primary px-4 py-1.5 glass rounded-full border border-primary/20">
                {exp.period}
              </span>
            </div>
            <p className="text-white/50 leading-relaxed mb-6">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase font-black tracking-widest text-white/30 px-3 py-1 glass rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
