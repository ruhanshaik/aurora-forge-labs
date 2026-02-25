import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import ServicesPreview from '@/components/sections/ServicesPreview';
import Stats from '@/components/sections/Stats';
import AboutPreview from '@/components/sections/AboutPreview';
import Features from '@/components/sections/Features';
import WhyChoose from '@/components/sections/WhyChoose';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <ServicesPreview />
      <Stats />
      <AboutPreview />
      <Features />
      <WhyChoose />
      <FAQ />
      <CTA />
    </motion.div>
  );
};

export default Home;
