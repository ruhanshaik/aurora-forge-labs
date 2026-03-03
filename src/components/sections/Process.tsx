import { motion } from 'framer-motion';
import SectionLabel from '../shared/SectionLabel';

const steps = [
  { num: '01', title: 'Discover', desc: 'Deep-dive into your goals, workflows, and pain points.' },
  { num: '02', title: 'Architect', desc: 'Design the technical blueprint for scalable success.' },
  { num: '03', title: 'Design', desc: 'Craft pixel-perfect interfaces users love.' },
  { num: '04', title: 'Develop', desc: 'Build with clean code and modern frameworks.' },
  { num: '05', title: 'Deploy', desc: 'Launch with confidence and zero downtime.' },
  { num: '06', title: 'Scale', desc: 'Optimize and grow with your business.' },
];

const Process = () => {
  return (
    <section className="py-24 md:py-36 bg-gmi-surface relative overflow-hidden noise-overlay">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
        >
          <SectionLabel label="The Process" />
          <h2 className="font-syne font-extrabold text-3xl md:text-5xl">
            From Vision to <span className="gradient-text">Reality</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="absolute top-4 right-4 font-syne font-extrabold text-5xl text-primary/5 group-hover:text-primary/10 transition-colors">
                {step.num}
              </span>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-fira text-sm font-bold mb-4">
                {step.num}
              </div>
              <h3 className="font-syne font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-outfit">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
