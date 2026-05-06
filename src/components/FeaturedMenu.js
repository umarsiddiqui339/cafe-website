// components/FeaturedMenu.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = {
  Coffee: [
    { name: 'Caramel Macchiato', price: '$4.5', desc: 'Espresso, vanilla, caramel drizzle', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop' },
    { name: 'Hazelnut Latte', price: '$4.2', desc: 'Smooth hazelnut & steamed milk', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop' },
  ],
  Desserts: [
    { name: 'Tiramisu', price: '$5.9', desc: 'Classic Italian coffee-infused dessert', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop' },
    { name: 'Cinnamon Roll', price: '$3.8', desc: 'Warm, gooey, cream cheese frosting', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=300&fit=crop' },
  ],
  Specials: [
    { name: 'Affogato', price: '$6.5', desc: 'Vanilla gelato with espresso shot', image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&h=300&fit=crop' },
    { name: 'Golden Turmeric Latte', price: '$5.0', desc: 'Plant-based, honey & spices', image: 'https://images.unsplash.com/photo-1570968915860-54d5c7fa5d70?w=400&h=300&fit=crop' },
  ]
};

const categories = ['Coffee', 'Desserts', 'Specials'];

const FeaturedMenu = () => {
  const [activeCategory, setActiveCategory] = useState('Coffee');

  return (
    <section id="menu" className="py-24 px-6 md:px-12 bg-beige">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-semibold tracking-wider">Sip & Savor</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-darkBrown mt-2">Featured Menu</h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${activeCategory === cat ? 'bg-gold text-darkBrown shadow-lg' : 'bg-white text-brown border border-gold/30'}`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {menuItems[activeCategory].map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 30px -15px rgba(0,0,0,0.2)' }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row"
              >
                <img src={item.image} alt={item.name} className="w-full md:w-40 h-40 object-cover" />
                <div className="p-5 flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-display text-xl font-bold text-darkBrown">{item.name}</h3>
                    <span className="text-gold font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-brown/70 text-sm mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturedMenu;