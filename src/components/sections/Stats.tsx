import { motion } from 'framer-motion';
import AnimatedCounter from '../shared/AnimatedCounter';
import { stats } from '@/data/services';

const Stats = () => {
  return (
    <section className="py-20 md:py-28 section-dark relative overflow-hidden">
      <div className="glow-orb w-64 h-64 bg-primary top-0 left-1/4" />
      <div className="glow-orb w-48 h-48 bg-accent bottom-0 right-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
