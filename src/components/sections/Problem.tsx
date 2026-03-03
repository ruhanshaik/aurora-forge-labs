import { motion } from 'framer-motion';

const problems = [
  'Slow websites kill growth.',
  'Poor UX loses customers.',
  'Weak architecture breaks at scale.',
];

const Problem = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-gmi-surface" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-fira text-xs uppercase tracking-[0.2em] text-primary mb-12">The Problem</p>
        </motion.div>

        <div className="space-y-6 mb-16 max-w-3xl mx-auto">
          {problems.map((line, i) => (
            <motion.p
              key={i}
              className="font-syne font-bold text-2xl md:text-4xl text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.h2
          className="font-syne font-extrabold text-4xl md:text-6xl gradient-text"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          We Fix That.
        </motion.h2>

        {/* Gradient divider */}
        <motion.div
          className="mx-auto mt-16 h-px w-48 bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </div>
    </section>
  );
};

export default Problem;
