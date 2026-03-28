'use client';

import Section from './Section';
import { motion } from 'framer-motion';
import { Code, Rocket, Brain, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, high-performance websites using Next.js and React with a focus on speed, SEO, and responsiveness.',
    icon: Code,
    color: 'text-blue-500'
  },
  {
    title: 'Full Stack Apps',
    description: 'End-to-end scalable applications using MERN stack, encompassing everything from database design to API logic.',
    icon: Rocket,
    color: 'text-purple-500'
  },
  {
    title: 'AI & Automation',
    description: 'Specialized in building AI-integrated tools like chatbots, data scrapers, and smart automation systems.',
    icon: Brain,
    color: 'text-emerald-500'
  },
  {
    title: 'Mobile Solutions',
    description: 'Building cross-platform mobile experiences with modern databases and real-time features.',
    icon: Smartphone,
    color: 'text-orange-500'
  }
];

export default function Services() {
  return (
    <Section id="services" className="py-20 md:py-32">
      <div className="text-center mb-12 md:mb-20 space-y-4 px-2">
        <h2 className="text-3xl md:text-6xl font-black text-foreground">
          What I <span className="text-gradient underline decoration-white/5 underline-offset-8">Offer</span>
        </h2>
        <p className="text-foreground/50 text-base md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
          Tailored solutions designed to solve real problems and deliver exceptional user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-2">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 md:p-10 rounded-[28px] md:rounded-[40px] border-glass-border hover:neon-border transition-all duration-500 flex flex-col group cursor-default"
          >
            <div className={`p-4 glass rounded-2xl w-fit mb-6 bg-white/5 border-white/5 ${service.color} group-hover:scale-110 transition-transform`}>
              <service.icon className="w-6 h-6 md:w-9 md:h-9" />
            </div>
            <h3 className="text-lg md:text-2xl font-black mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
            <p className="text-sm md:text-base font-medium text-foreground/50 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
