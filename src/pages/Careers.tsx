import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Globe, Rocket, Briefcase, GraduationCap } from 'lucide-react';
import SectionLabel from '@/components/shared/SectionLabel';
import GlassCard from '@/components/shared/GlassCard';
import careersHero from '@/assets/careers-hero.jpg';

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

const whyJoin = [
  { icon: <Lightbulb size={28} />, title: 'Innovation Driven Culture', desc: 'We push boundaries daily. Every idea matters and every person drives impact.' },
  { icon: <TrendingUp size={28} />, title: 'Real Ownership & Growth', desc: 'Take ownership of your work and grow with responsibility, not just titles.' },
  { icon: <Globe size={28} />, title: 'Flexible & Remote Friendly', desc: 'Work from anywhere. We trust results, not hours spent at a desk.' },
  { icon: <Rocket size={28} />, title: 'Work on Meaningful Projects', desc: 'Build real products for real businesses — not throwaway prototypes.' },
];

const Careers = () => {
  const [activeTab, setActiveTab] = useState<'internships' | 'fulltime'>('internships');

  return (
    <motion.div {...pageAnim}>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={careersHero} alt="GMI Tech team workspace" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionLabel label="Careers" />
          <h1 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6" style={{ letterSpacing: '-2px' }}>
            Build The Future With{' '}
            <span className="gradient-text">GMI Tech</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-outfit font-light">
            Join a team that values innovation, ownership, and impact. We're building the next generation of digital solutions.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <SectionLabel label="Why Join Us" />
            <h2 className="font-syne font-bold text-3xl md:text-4xl">
              Why <span className="gradient-text">GMI Tech?</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {whyJoin.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <GlassCard className="h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-syne font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-outfit">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-20 md:py-28 section-dark relative overflow-hidden">
        <div className="glow-orb w-64 h-64 bg-primary top-0 right-1/4" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel label="Culture" />
            <h2 className="font-syne font-bold text-3xl md:text-4xl mb-8">
              Why Work <span className="gradient-text">Here?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                { title: 'Learning Culture', desc: 'Continuous skill building through real projects, mentorship, and access to cutting-edge tools.' },
                { title: 'Performance Driven', desc: 'We reward results and initiative. Your growth is directly tied to your impact.' },
                { title: 'Transparent Leadership', desc: 'Open communication, clear goals, and honest feedback — no corporate politics.' },
                { title: 'Startup Agility', desc: 'Move fast, ship often, and see your work make a difference from day one.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <GlassCard>
                    <h3 className="font-syne font-bold text-base mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-outfit">{item.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Tabs */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <SectionLabel label="Openings" />
            <h2 className="font-syne font-bold text-3xl md:text-4xl">
              Explore <span className="gradient-text">Opportunities</span>
            </h2>
          </motion.div>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('internships')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-outfit font-semibold transition-all ${
                activeTab === 'internships'
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg'
                  : 'glass-card text-muted-foreground hover:text-foreground'
              }`}
            >
              <GraduationCap size={18} /> Internships
            </button>
            <button
              onClick={() => setActiveTab('fulltime')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-outfit font-semibold transition-all ${
                activeTab === 'fulltime'
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg'
                  : 'glass-card text-muted-foreground hover:text-foreground'
              }`}
            >
              <Briefcase size={18} /> Full Time
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'internships' ? (
            <motion.div
              key="internships"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <GlassCard className="p-6 md:p-8">
                <h3 className="font-syne font-bold text-xl mb-2 text-center">Internship Application</h3>
                <p className="text-sm text-muted-foreground font-outfit text-center mb-6">
                  Fill out the form below to apply for an internship at GMI Tech.
                </p>
                <div className="w-full rounded-xl overflow-hidden">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdgyptneXcp0ynPhcm58BKUZrrXPMgrcCVXNY-d1rRWB0S02g/viewform?embedded=true"
                    width="100%"
                    height="3517"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    title="GMI Tech Internship Application Form"
                    className="w-full min-h-[600px]"
                    style={{ border: 'none' }}
                  >
                    Loading…
                  </iframe>
                </div>
              </GlassCard>
            </motion.div>
          ) : (
            <motion.div
              key="fulltime"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <GlassCard className="p-8 md:p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Briefcase size={36} className="text-primary" />
                </div>
                <h3 className="font-syne font-bold text-2xl mb-4">No Full-Time Openings Right Now</h3>
                <p className="text-muted-foreground font-outfit leading-relaxed mb-2">
                  Currently, there are no full-time openings available.
                </p>
                <p className="text-muted-foreground font-outfit leading-relaxed">
                  We are growing fast — please check back soon or follow us on social media for updates.
                </p>
              </GlassCard>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Careers;
