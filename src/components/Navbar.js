// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Coffee } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 248, 225, 0)', 'rgba(255, 248, 225, 0.95)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(8px)']
  );

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHidden(currentScroll > lastScroll && currentScroll > 150);
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Menu', 'Gallery', 'Contact'];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed w-full z-50 py-4 px-6 md:px-12 transition-all"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <Coffee className="text-gold w-8 h-8" />
          <span className="font-display text-2xl font-bold text-darkBrown">BrewHaven</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: '#C6A43F' }}
              className="text-darkBrown font-medium transition-colors"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-screen w-64 bg-cream shadow-xl p-8 pt-20 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-darkBrown font-display text-xl"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;