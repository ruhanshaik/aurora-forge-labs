import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, Code2, Layout, Shield, Brain, CheckCircle2 } from 'lucide-react';
import SectionLabel from '@/components/shared/SectionLabel';
import { services } from '@/data/services';

const pageAnim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4 },
};

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette size={36} className="text-primary" />,
  Code2: <Code2 size={36} className="text-accent" />,
  Layout: <Layout size={36} className="text-primary" />,
  Shield: <Shield size={36} className="text-accent" />,
  Brain: <Brain size={36} className="text-primary" />,
};

const Services = () => {
  return (
    <motion.div {...pageAnim}>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionLabel label="Services" />
          <h1 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
            Comprehensive Digital{' '}
            <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From design to deployment to security — we cover every aspect of your digital journey.
          </p>
        </div>
      </section>

      {/* Tech Marquee */}
      <section className="py-8 border-y border-border overflow-hidden">
        <div className="flex gap-12 tech-marquee whitespace-nowrap">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'TypeScript', 'Android', 'iOS', 'Cloud', 'AI/ML', 'Python', 'Firebase',
            'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'TypeScript', 'Android', 'iOS', 'Cloud', 'AI/ML', 'Python', 'Firebase'].map((t, i) => (
            <span key={i} className="font-fira text-sm text-muted-foreground">{t}</span>
          ))}
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'md:direction-rtl' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
              >
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="mb-4">{iconMap[service.icon]}</div>
                  <h2 className="font-syne font-bold text-2xl md:text-3xl mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm hover:scale-105 transition-all"
                  >
                    Get Started
                  </Link>
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border flex items-center justify-center">
                    <div className="opacity-30">{iconMap[service.icon]}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-dark text-center relative overflow-hidden">
        <div className="glow-orb w-64 h-64 bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="font-syne font-bold text-3xl md:text-4xl text-white mb-6">
            Ready to Get <span className="gradient-text">Started?</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            Let's discuss how we can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:scale-105 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
