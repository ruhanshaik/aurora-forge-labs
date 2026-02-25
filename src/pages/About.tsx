import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionLabel from '@/components/shared/SectionLabel';
import GlassCard from '@/components/shared/GlassCard';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import { timeline } from '@/data/services';
import { Target, Eye, Sparkles, Shield } from 'lucide-react';

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
          <h1 className="font-comfortaa font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
            Building Innovative{' '}
            <span className="gradient-text">Digital Solutions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering startups and small businesses with modern, secure, and scalable digital infrastructure.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center">
                <div className="text-center">
                  <span className="font-comfortaa font-extrabold text-8xl gradient-text">SMR</span>
                  <p className="text-muted-foreground mt-4 font-medium">S Mohammed Ruhan</p>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <SectionLabel label="The Founder" />
              <h2 className="font-comfortaa font-bold text-3xl md:text-4xl mb-6">S Mohammed Ruhan</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A passionate technologist and entrepreneur based in Bangalore and Ballari, 
                S Mohammed Ruhan founded GMI Tech with a clear vision — to bridge the digital 
                gap for startups and small businesses that deserve world-class technology solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With a deep understanding of design, development, and security, Ruhan leads 
                GMI Tech in delivering comprehensive digital solutions that not only look 
                exceptional but perform at the highest standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His commitment to quality and innovation drives every project, ensuring that 
                each client receives personalized attention and results that exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 md:py-28 bg-gmi-surface">
        <div className="container mx-auto px-4 md:px-6">
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
                  <h3 className="font-comfortaa font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
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
            <h2 className="font-comfortaa font-bold text-3xl md:text-4xl">
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
                    <h3 className="font-comfortaa font-bold text-base mt-1 mb-2">{t.title}</h3>
                    <p className="text-sm text-muted-foreground">{t.description}</p>
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
                <p className="text-sm text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-comfortaa font-bold text-3xl md:text-4xl mb-6">
            Ready to Work <span className="gradient-text">Together?</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
