import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 md:py-28 section-dark relative overflow-hidden">
      <div className="glow-orb w-80 h-80 bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
        >
          <h2 className="font-comfortaa font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Let's Build Your{' '}
            <span className="gradient-text">Digital Success</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
            Ready to transform your business with modern digital solutions? Let's start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/919036717885"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-700 text-white font-semibold hover:border-primary/50 hover:bg-white/5 transition-all"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
