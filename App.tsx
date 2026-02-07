import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import LinkButton from './components/LinkButton';
import { LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-luxury-cream selection:bg-gold-200 selection:text-luxury-black">
      
      {/* Abstract Background Elements - Subtle and Premium */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-gold-100/40 to-transparent rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-gray-200/40 to-transparent rounded-full blur-[120px] opacity-60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow flex flex-col items-center justify-center w-full">
          <AnimatePresence>
            <div className="w-full space-y-4">
              {LINKS.map((link, index) => (
                <LinkButton key={link.id} link={link} index={index} />
              ))}
            </div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>

      {/* Grain texture overlay for that 'paper' feel (Optional) */}
      <div className="fixed inset-0 pointer-events-none z-[50] opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default App;
