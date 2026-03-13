import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import SectionLabel from '@/components/shared/SectionLabel';
import GlassCard from '@/components/shared/GlassCard';
import { portfolioItems, portfolioCategories } from '@/data/portfolio';

import portfolioEnterprise from '@/assets/portfolio-enterprise.jpg';
import portfolioCrm from '@/assets/portfolio-crm.jpg';
import portfolioSaas from '@/assets/portfolio-saas.jpg';
import portfolioMobile from '@/assets/portfolio-mobile.jpg';
import portfolioWebapp from '@/assets/portfolio-webapp.jpg';
import portfolioMarketing from '@/assets/portfolio-marketing.jpg';
import portfolioSocial from '@/assets/portfolio-social.jpg';

const imageMap: Record<string, string> = {
  'portfolio-enterprise': portfolioEnterprise,
  'portfolio-crm': portfolioCrm,
  'portfolio-saas': portfolioSaas,
  'portfolio-mobile': portfolioMobile,
  'portfolio-webapp': portfolioWebapp,
  'portfolio-marketing': portfolioMarketing,
  'portfolio-social': portfolioSocial,
};

const pageAnim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4 },
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

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <GlassCard className="h-full flex flex-col overflow-hidden !p-0">
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={imageMap[item.image]}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block font-fira text-xs uppercase tracking-widest text-primary mb-2">{item.category}</span>
                      <h3 className="font-syne font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-outfit mb-4 line-clamp-2">{item.description}</p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.techStack.map((tech, j) => (
                          <span key={j} className="px-2 py-1 rounded-md text-xs font-fira bg-primary/10 text-primary border border-primary/20">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <p className="text-xs font-syne font-bold gradient-text mb-4">{item.tagline}</p>
                      
                      <div className="mt-auto">
                        <a
                          href="https://wa.me/message/DF2K3DWRYML6G1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-xs hover:scale-105 transition-all font-outfit"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </GlassCard>
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
