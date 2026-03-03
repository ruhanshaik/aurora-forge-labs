import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Bot, ShieldCheck } from 'lucide-react';
import GlassCard from '../shared/GlassCard';
import SectionLabel from '../shared/SectionLabel';

const items = [
  { icon: <Globe size={32} />, title: 'Web Applications', desc: 'Fast, responsive, and built to convert.' },
  { icon: <Smartphone size={32} />, title: 'Mobile Apps', desc: 'Native performance across all devices.' },
  { icon: <Cloud size={32} />, title: 'Cloud Solutions', desc: 'Scalable infrastructure that grows with you.' },
  { icon: <Bot size={32} />, title: 'AI Integrations', desc: 'Smart automation for modern business.' },
  { icon: <ShieldCheck size={32} />, title: 'Secure Systems', desc: 'Enterprise-grade security by default.' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const WhatWeBuild = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      <div className="glow-orb w-80 h-80 bg-primary top-0 right-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
        >
          <SectionLabel label="What We Build" />
          <h2 className="font-syne font-extrabold text-3xl md:text-5xl">
            Engineered for <span className="gradient-text">Performance</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {items.map((card, i) => (
            <motion.div key={i} variants={item}>
              <GlassCard className="h-full text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  {card.icon}
                </div>
                <h3 className="font-syne font-bold text-sm mb-2">{card.title}</h3>
                <p className="text-xs text-muted-foreground font-outfit">{card.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
