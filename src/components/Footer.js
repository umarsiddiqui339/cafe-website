// components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkBrown text-cream py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-6">
          {[Instagram, Facebook, Twitter].map((Icon, i) => (
            <motion.a key={i} whileHover={{ y: -3, scale: 1.1 }} href="#" className="p-2 bg-cream/10 rounded-full hover:bg-gold transition">
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
        <p className="text-sm text-cream/70">© 2025 BrewHaven — Crafted with <Heart className="inline w-4 h-4 text-gold" /> for coffee lovers.</p>
      </div>
    </footer>
  );
};

export default Footer;