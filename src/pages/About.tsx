import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionLabel from '@/components/shared/SectionLabel';
import GlassCard from '@/components/shared/GlassCard';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import { timeline } from '@/data/services';
import { Target, Eye, Sparkles } from 'lucide-react';

const pageAnim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4 },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const About = () => {
  return (
    <motion.div {...pageAnim}>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionLabel label="About GMI Tech" />
          <h1 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6" style={{ letterSpacing: '-2px' }}>
            Engineering Digital{' '}
            <span className="gradient-text">Excellence</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-outfit font-light">
            Your trusted technology partner for scalable, secure, and high-performance digital solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center overflow-hidden">
                <img
                  src="/favicon.ico"
                  alt="GMI Tech brand identity"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <SectionLabel label="Who We Are" />
              <h2 className="font-syne font-bold text-3xl md:text-4xl mb-6">
                Precision-Built <span className="gradient-text">Digital Solutions</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 font-outfit">
                GMI Tech is a full-service technology company dedicated to empowering startups and small-to-medium
                enterprises with world-class digital infrastructure. We specialize in building modern, secure, and
                scalable software systems that drive measurable business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 font-outfit">
                From custom web and mobile applications to AI-powered automation and enterprise-grade security,
                we deliver comprehensive solutions designed for performance at scale. Our approach combines clean
                architecture, intuitive design, and rigorous testing to ensure every product we ship meets the
                highest standards.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 font-outfit">
                We serve as a complete digital transformation partner — handling everything from initial strategy
                and design to development, deployment, and ongoing optimization. Our clients trust us to build
                systems that not only look exceptional but perform reliably under real-world conditions.
              </p>
              <p className="text-muted-foreground leading-relaxed font-outfit">
                GMI Tech was founded by <strong className="text-foreground">S Mohammed Ruhan</strong> with a vision to bridge the digital gap
                for emerging businesses. Based in Bangalore and Ballari, his commitment to quality and innovation
                drives every project we undertake.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 md:py-28 section-dark relative overflow-hidden">
        <div className="glow-orb w-64 h-64 bg-primary top-0 left-1/4" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {[
              { icon: <Target size={28} />, title: 'Our Mission', text: 'Empower startups and small businesses with secure, scalable digital systems that drive real growth and lasting impact.' },
              { icon: <Eye size={28} />, title: 'Our Vision', text: 'To become the most trusted digital partner for emerging businesses, setting the standard for quality and innovation.' },
              { icon: <Sparkles size={28} />, title: 'Our Values', text: 'Innovation, Quality, Security, and Transparency — the four pillars that guide every decision and deliverable.' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <GlassCard className="h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-syne font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-outfit">{item.text}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <SectionLabel label="Our Journey" />
            <h2 className="font-syne font-bold text-3xl md:text-4xl">
              The <span className="gradient-text">Timeline</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                className={`relative flex items-start gap-6 mb-10 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 z-10" />
                <div className="ml-10 md:ml-0 md:w-1/2">
                  <GlassCard>
                    <span className="font-fira text-xs text-primary font-medium">{t.year}</span>
                    <h3 className="font-syne font-bold text-base mt-1 mb-2">{t.title}</h3>
                    <p className="text-sm text-muted-foreground font-outfit">{t.description}</p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 section-dark relative overflow-hidden">
        <div className="glow-orb w-64 h-64 bg-primary top-0 right-1/4" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { end: 365, suffix: '+', label: 'Days Experience' },
              { end: 30, suffix: '+', label: 'Projects' },
              { end: 38, suffix: '+', label: 'Clients' },
              { end: 100, suffix: '%', label: 'Quality' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl mb-2">
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </div>
                <p className="text-sm text-muted-foreground font-outfit">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-syne font-extrabold text-3xl md:text-4xl mb-6">
            Ready to Work <span className="gradient-text">Together?</span>
          </h2>
          <a
            href="https://wa.me/message/DF2K3DWRYML6G1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 font-outfit"
          >
            Get Started
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
