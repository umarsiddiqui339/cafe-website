// components/SignatureExperience.js
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Coffee, Heart, Award } from 'lucide-react';

const features = [
  { icon: Sparkles, title: 'Artisanal Roasts', desc: 'Single-origin beans roasted daily' },
  { icon: Coffee, title: 'Master Baristas', desc: 'Latte art & precision brewing' },
  { icon: Heart, title: 'Cozy Ambiance', desc: 'Warm lighting & live acoustic nights' },
  { icon: Award, title: 'Sustainable Sourcing', desc: 'Direct trade & eco-friendly' },
];

const SignatureExperience = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-cream to-beige relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold tracking-wider">The Craft</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-darkBrown mt-2">
            Beyond the Cup
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ staggerChildren: 0.2 }}
            className="space-y-8"
          >
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="flex gap-4 items-start bg-white/30 backdrop-blur-sm p-5 rounded-xl shadow-sm"
              >
                <feat.icon className="w-10 h-10 text-gold" />
                <div>
                  <h3 className="font-display text-xl font-bold text-darkBrown">{feat.title}</h3>
                  <p className="text-brown/80">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gold/20 rounded-3xl blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Barista pouring latte art"
              className="rounded-2xl shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SignatureExperience;