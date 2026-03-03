import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, BarChart3, Cloud, Smartphone, Globe, TrendingUp, Share2, CheckCircle2 } from 'lucide-react';
import SectionLabel from '@/components/shared/SectionLabel';
import GlassCard from '@/components/shared/GlassCard';
import { portfolioItems, portfolioCategories } from '@/data/portfolio';

const pageAnim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4 },
};

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 size={36} className="text-primary" />,
  BarChart3: <BarChart3 size={36} className="text-accent" />,
  Cloud: <Cloud size={36} className="text-primary" />,
  Smartphone: <Smartphone size={36} className="text-accent" />,
  Globe: <Globe size={36} className="text-primary" />,
  TrendingUp: <TrendingUp size={36} className="text-accent" />,
  Share2: <Share2 size={36} className="text-primary" />,
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <motion.div {...pageAnim}>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionLabel label="Portfolio" />
          <h1 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6" style={{ letterSpacing: '-2px' }}>
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-outfit font-light">
            Building Scalable Digital Products That Drive Growth
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-outfit font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg'
                    : 'glass-card hover:border-primary/30 text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Items */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="space-y-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  className={`grid md:grid-cols-2 gap-12 items-center`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65 }}
                >
                  <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                    <span className="inline-block font-fira text-xs uppercase tracking-widest text-primary mb-3">{item.category}</span>
                    <div className="mb-4">{iconMap[item.icon]}</div>
                    <h2 className="font-syne font-bold text-2xl md:text-3xl mb-4">{item.title}</h2>
                    <p className="text-muted-foreground font-outfit leading-relaxed mb-6">{item.description}</p>
                    <ul className="space-y-3 mb-6">
                      {item.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm font-outfit">
                          <CheckCircle2 size={16} className="text-primary shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-syne font-bold gradient-text mb-6">{item.tagline}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm hover:scale-105 transition-all font-outfit"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border flex items-center justify-center overflow-hidden group">
                      <div className="opacity-20 group-hover:opacity-30 transition-opacity group-hover:scale-110 transition-transform duration-500">
                        {iconMap[item.icon]}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 section-dark text-center relative overflow-hidden">
        <div className="glow-orb w-64 h-64 bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <p className="text-lg text-muted-foreground font-outfit mb-4 max-w-2xl mx-auto">
            We don't just build software.
          </p>
          <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-foreground mb-8">
            We build digital ecosystems that{' '}
            <span className="gradient-text">power businesses forward.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:scale-105 transition-all font-outfit"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
