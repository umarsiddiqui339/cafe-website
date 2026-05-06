// components/Testimonials.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  { name: 'Emily R.', text: 'Best flat white in town! The ambiance is so cozy, and the staff treats you like family.', rating: 5, image: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'James K.', text: 'Their cold brew changed my mornings. Plus, the pastries are fresh and delicious.', rating: 5, image: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Sophia L.', text: 'A hidden gem! The nitro cold brew and the jazz nights make it my favorite spot.', rating: 5, image: 'https://randomuser.me/api/portraits/women/45.jpg' },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-6 md:px-12 bg-darkBrown text-cream">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold mb-4"
        >
          What Our Guests Say
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative h-80 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <img src={testimonials[index].image} alt={testimonials[index].name} className="w-24 h-24 rounded-full mx-auto border-4 border-gold object-cover" />
              <div className="flex justify-center gap-1 my-4">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-lg italic">"{testimonials[index].text}"</p>
              <h4 className="font-bold mt-4 text-gold">— {testimonials[index].name}</h4>
            </motion.div>
          </AnimatePresence>
          <button onClick={prev} className="absolute left-0 p-2 bg-cream/20 rounded-full hover:bg-gold transition"><ChevronLeft /></button>
          <button onClick={next} className="absolute right-0 p-2 bg-cream/20 rounded-full hover:bg-gold transition"><ChevronRight /></button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;