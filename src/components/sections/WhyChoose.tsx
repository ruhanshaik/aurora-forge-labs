import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, Lock } from 'lucide-react';
import GlassCard from '../shared/GlassCard';
import SectionLabel from '../shared/SectionLabel';
import { whyChoose } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award size={28} />,
  Users: <Users size={28} />,
  Lightbulb: <Lightbulb size={28} />,
  Lock: <Lock size={28} />,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const WhyChoose = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
        >
          <SectionLabel label="Why GMI" />
          <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Why Choose <span className="gradient-text">GMI Tech</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {whyChoose.map((w, i) => (
            <motion.div key={i} variants={item}>
              <GlassCard className="h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {iconMap[w.icon]}
                </div>
                <h3 className="font-syne font-bold text-base mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
