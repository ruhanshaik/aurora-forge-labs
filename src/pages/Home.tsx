import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import WhatWeBuild from '@/components/sections/WhatWeBuild';
import Process from '@/components/sections/Process';
import CodePerformance from '@/components/sections/CodePerformance';
import ServicesPreview from '@/components/sections/ServicesPreview';
import Stats from '@/components/sections/Stats';
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
      <Problem />
      <WhatWeBuild />
      <Process />
      <CodePerformance />
      <ServicesPreview />
      <Stats />
      <WhyChoose />
      <FAQ />
      <CTA />
    </motion.div>
  );
};

export default Home;
