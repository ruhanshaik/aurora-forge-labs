import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroCanvas = lazy(() => import('../canvas/HeroCanvas'));

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, hsla(217, 91%, 60%, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 60%, hsla(199, 89%, 48%, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 100% 80% at 50% 100%, hsla(217, 91%, 60%, 0.04) 0%, transparent 60%),
            hsl(0 0% 4%)
          `,
        }}
      />

      <Suspense fallback={<div className="absolute inset-0" />}>
        <HeroCanvas />
      </Suspense>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">Design · Dev · Security — Bangalore & Ballari</span>
          </div>

          <h1 className="font-comfortaa font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 max-w-4xl mx-auto">
            Building Digital Solutions{' '}
            <span className="gradient-text">for Your Growth</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We turn ideas into powerful digital products through clean design,
            strong development, and reliable security.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Get Started <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/919036717885"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-secondary transition-all"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>

        {/* Floating Cards */}
        <div className="hidden lg:block">
          <motion.div
            className="absolute left-[8%] top-[40%] glass-card p-4 text-left max-w-[220px] float-animation"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{ transform: 'rotate(-6deg)' }}
          >
            <div className="text-xs font-medium text-green-600 mb-1">✅ Project Delivered</div>
            <div className="text-xs text-muted-foreground">E-Commerce App</div>
            <div className="text-xs text-muted-foreground mt-1">Score: <span className="text-primary font-semibold">98/100</span></div>
          </motion.div>

          <motion.div
            className="absolute right-[8%] top-[35%] glass-card p-4 text-left max-w-[220px] float-animation-delayed"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            style={{ transform: 'rotate(6deg)' }}
          >
            <div className="text-xs font-medium text-primary mb-1">🔒 Security Audit</div>
            <div className="text-xs text-muted-foreground">FinTech Dashboard</div>
            <div className="text-xs text-muted-foreground mt-1">Status: <span className="text-green-600 font-semibold">All Clear ✓</span></div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-xs">Scroll to explore</span>
          <ChevronDown size={18} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
