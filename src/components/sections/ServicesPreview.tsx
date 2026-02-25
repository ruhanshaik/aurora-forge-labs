import { motion } from 'framer-motion';
import { Palette, Code2, Layout, Shield, Brain } from 'lucide-react';
import GlassCard from '../shared/GlassCard';
import SectionLabel from '../shared/SectionLabel';
import { services } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette size={28} />,
  Code2: <Code2 size={28} />,
  Layout: <Layout size={28} />,
  Shield: <Shield size={28} />,
  Brain: <Brain size={28} />,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const ServicesPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-gmi-surface">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
        >
          <SectionLabel label="Our Services" />
          <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive digital solutions tailored for startups and growing businesses.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <GlassCard className="h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-syne font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
