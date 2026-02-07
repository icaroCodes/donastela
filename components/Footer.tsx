import React from 'react';
import { motion } from 'framer-motion';
import { SOCIALS, BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="mt-12 pb-12 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <div className="flex justify-center gap-6 mb-8">
        {SOCIALS.map((social) => (
          <motion.a
            key={social.id}
            href={social.url}
            className="text-gray-400 hover:text-luxury-black transition-colors p-2"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={social.label}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
      </div>
      
      <p className="text-xs text-gray-400 font-light tracking-wider">
        © {new Date().getFullYear()} {BRAND_NAME}. Todos os direitos reservados.
      </p>
    </motion.footer>
  );
};

export default Footer;
