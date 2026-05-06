// components/LoadingScreen.js
import React from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 bg-darkBrown z-[100] flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
      >
        <Coffee className="text-gold w-20 h-20" />
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '200px' }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        className="h-1 bg-gold rounded-full mt-8"
      />
      <p className="text-cream mt-4 font-display">Pouring perfection...</p>
    </motion.div>
  );
};

export default LoadingScreen;