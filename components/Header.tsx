import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_NAME, BRAND_TAGLINE, PROFILE_IMAGE } from '../constants';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="text-center pt-12 pb-8 px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gold-500/20 p-1 bg-white shadow-soft"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <img src={PROFILE_IMAGE} alt={BRAND_NAME} className="w-full h-full object-cover rounded-full" />
      </motion.div>

      <motion.h1 
        className="font-serif text-3xl md:text-4xl text-luxury-black tracking-wide mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {BRAND_NAME}
      </motion.h1>

      <motion.div 
        className="flex items-center justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <span className="h-[1px] w-8 bg-gold-400/50 block"></span>
        <p className="text-gray-500 font-sans text-sm tracking-widest uppercase">
          {BRAND_TAGLINE}
        </p>
        <span className="h-[1px] w-8 bg-gold-400/50 block"></span>
      </motion.div>
    </motion.header>
  );
};

export default Header;
