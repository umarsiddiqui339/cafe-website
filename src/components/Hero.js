// components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Parallax Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-black/40 z-10"
        />
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Coffee ambiance"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 drop-shadow-2xl"
        >
          Brewed to <span className="text-gold">Perfection</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-cream/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Artisanal coffee, handcrafted pastries, and a warm ambiance that feels like home.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gold text-darkBrown px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto shadow-xl group"
        >
          Explore Menu
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream"
      >
        <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cream rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;