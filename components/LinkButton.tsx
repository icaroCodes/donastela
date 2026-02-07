import React from 'react';
import { motion } from 'framer-motion';
import { LinkItem } from '../types';
import { ChevronRight } from 'lucide-react';

interface LinkButtonProps {
  link: LinkItem;
  index: number;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link, index }) => {
  const isHighlight = link.highlight;

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full max-w-md mx-auto mb-4 outline-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`
          relative overflow-hidden rounded-2xl p-5 flex items-center justify-between
          transition-all duration-300 ease-out
          border
          ${isHighlight 
            ? 'bg-luxury-black text-white border-luxury-black shadow-lg shadow-gray-400/20' 
            : 'bg-white text-luxury-charcoal border-gray-200 hover:border-gold-400/50 shadow-soft hover:shadow-glow'
          }
        `}
      >
        {/* Background Hover Effect */}
        <div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
            ${isHighlight ? 'bg-gradient-to-r from-gray-800 to-black' : 'bg-gradient-to-r from-gray-50 to-white'}
          `}
        />

        <div className="relative z-10 flex items-center gap-4 w-full">
          {/* Icon Container */}
          <div className={`
            flex items-center justify-center w-12 h-12 rounded-full shrink-0
            transition-colors duration-300
            ${isHighlight ? 'bg-white/10 text-gold-400' : 'bg-gray-50 text-gray-600 group-hover:bg-gold-50 group-hover:text-gold-600'}
          `}>
            <link.icon size={22} strokeWidth={1.5} />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-left">
            <h3 className={`font-medium text-lg leading-tight ${isHighlight ? 'text-white' : 'text-gray-900'}`}>
              {link.title}
            </h3>
            {link.subtitle && (
              <p className={`text-sm mt-1 font-light ${isHighlight ? 'text-gray-400' : 'text-gray-500'}`}>
                {link.subtitle}
              </p>
            )}
          </div>

          {/* Chevron */}
          <div className={`
            opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0
            ${isHighlight ? 'text-white' : 'text-gold-500'}
          `}>
            <ChevronRight size={20} />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default LinkButton;
