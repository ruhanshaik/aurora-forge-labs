import { motion } from 'framer-motion';
import { Monitor, Smartphone, Figma, ShieldCheck } from 'lucide-react';
import GlassCard from '../shared/GlassCard';
import SectionLabel from '../shared/SectionLabel';
import { features } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={28} />,
  Smartphone: <Smartphone size={28} />,
  Figma: <Figma size={28} />,
  ShieldCheck: <ShieldCheck size={28} />,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Features = () => {
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
          <SectionLabel label="Features" />
          <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Why We Stand <span className="gradient-text">Out</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {features.map((f, i) => (
            <motion.div key={i} variants={item}>
              <GlassCard className="h-full text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  {iconMap[f.icon]}
                </div>
                <h3 className="font-syne font-bold text-base mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
