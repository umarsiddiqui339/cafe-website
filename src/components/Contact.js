// components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-beige">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="font-display text-4xl font-bold text-darkBrown mb-6">Visit Us</h2>
            <div className="space-y-4 mb-8">
              <div className="flex gap-3 items-start"><MapPin className="text-gold" /><span>123 Brewery Lane, Coffee District, NY 10001</span></div>
              <div className="flex gap-3 items-start"><Clock className="text-gold" /><span>Mon - Fri: 7am - 9pm<br />Sat - Sun: 8am - 10pm</span></div>
              <div className="flex gap-3 items-start"><Phone className="text-gold" /><span>(555) 123-4567</span></div>
              <div className="flex gap-3 items-start"><Mail className="text-gold" /><span>hello@brewhaven.com</span></div>
            </div>
            <div className="h-64 w-full rounded-xl overflow-hidden shadow-lg">
              <iframe title="map" className="w-full h-full" src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="font-display text-2xl font-bold text-darkBrown mb-4">Send us a message</h3>
            <form className="space-y-4">
              <motion.input whileFocus={{ scale: 1.02 }} type="text" placeholder="Your name" className="w-full p-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold" />
              <motion.input whileFocus={{ scale: 1.02 }} type="email" placeholder="Email address" className="w-full p-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold" />
              <motion.textarea whileFocus={{ scale: 1.02 }} rows="4" placeholder="How can we help?" className="w-full p-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold" />
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="bg-gold text-darkBrown px-6 py-3 rounded-full font-semibold w-full">Send Message</motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;