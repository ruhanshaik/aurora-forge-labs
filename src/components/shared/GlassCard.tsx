import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

const GlassCard = ({ children, className = '', dark = false }: GlassCardProps) => {
  return (
    <motion.div
      className={`${dark ? 'dark-glass-card' : 'glass-card'} p-6 ${className}`}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
