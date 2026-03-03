import { motion } from 'framer-motion';
import { Zap, Shield, TrendingUp } from 'lucide-react';
import AnimatedCounter from '../shared/AnimatedCounter';

const perfStats = [
  { icon: <Zap size={20} />, value: 95, suffix: '+', label: 'Performance Score' },
  { icon: <Shield size={20} />, value: 100, suffix: '%', label: 'Enterprise Security' },
  { icon: <TrendingUp size={20} />, value: 99, suffix: '%', label: 'Uptime Guarantee' },
];

const CodePerformance = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-accent top-1/2 left-0 -translate-y-1/2" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Code animation placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="glass-card p-6 font-fira text-xs leading-relaxed overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <pre className="text-muted-foreground">
{`const app = createApp({
  performance: "optimized",
  security: "enterprise-grade",
  architecture: "scalable",
  testing: "comprehensive"
});

app.deploy({
  target: "production",
  monitoring: true,
  autoScale: true
});

// Built for the future ⚡`}
              </pre>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <h2 className="font-syne font-extrabold text-3xl md:text-5xl mb-4 leading-tight">
              Clean Code.{' '}
              <span className="gradient-text">Lightning Speed.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-outfit font-light mb-4">
              Future-Ready Architecture.
            </p>
            <p className="text-muted-foreground font-outfit leading-relaxed mb-10">
              Every line of code is written with purpose. We build systems that perform
              under pressure and scale without breaking.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {perfStats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex items-center justify-center text-primary mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-syne font-extrabold">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-muted-foreground font-outfit mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodePerformance;
