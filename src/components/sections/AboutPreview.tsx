import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionLabel from '../shared/SectionLabel';

const AboutPreview = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <span className="font-comfortaa font-extrabold text-6xl gradient-text">S</span>
                <p className="text-sm text-muted-foreground mt-2">S Mohammed Ruhan</p>
                <p className="text-xs text-muted-foreground">Founder, GMI Tech</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <SectionLabel label="About Us" />
            <h2 className="font-comfortaa font-bold text-3xl md:text-4xl mb-6">
              Crafting Digital <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded by S Mohammed Ruhan, GMI Tech is a digital solutions company based in
              Bangalore and Ballari. We empower startups and small businesses with modern,
              secure, and scalable digital infrastructure.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is to deliver high-quality design, development, and security solutions
              that drive real business growth. Every project we take on is built with precision
              and a deep commitment to excellence.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold hover:bg-secondary transition-all"
            >
              More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
