// components/Gallery.js
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=500&fit=crop',
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-darkBrown">Moments at BrewHaven</h2>
        </motion.div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer break-inside-avoid"
            >
              <img src={img} alt={`Gallery ${i}`} className="w-full h-auto transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                <span className="text-white font-bold">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;