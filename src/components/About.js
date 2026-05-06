// components/About.js
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);

  return (
    <section id="about" ref={ref} className="py-24 px-6 md:px-12 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ opacity, x }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gold/20 rounded-2xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Cozy café interior"
              className="rounded-2xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-semibold tracking-wider">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-darkBrown mt-2 mb-6">
              Where Coffee Meets <br /> Craftsmanship
            </h2>
            <p className="text-brown/80 leading-relaxed mb-4">
              Nestled in the heart of the city, BrewHaven is more than just a coffee shop — it's a sanctuary for those who appreciate the art of slow living. Our beans are sourced directly from sustainable farms, roasted in small batches, and brewed with precision.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Every cup tells a story of passion, patience, and perfection. Whether you're here for a morning espresso or an afternoon tea, we invite you to savor the moment.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="mt-8 px-6 py-3 border-2 border-gold text-gold rounded-full font-semibold hover:bg-gold hover:text-darkBrown transition-all"
            >
              Discover More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;