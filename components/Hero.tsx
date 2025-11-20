import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAchievements = () => {
    const element = document.getElementById('achievements');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="w-full relative overflow-hidden">
      {/* Enhanced Background for Hero Section - Spans Full Width */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Rich Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-[#FFFBF4] to-orange-200/30"></div>
        
        {/* Specific Grain Texture for Hero */}
        <div 
            className="absolute inset-0 opacity-[0.07] mix-blend-multiply"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
        />
        
        {/* Soft Color Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-300/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-300/10 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Content Container - Constrained Width */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-40 relative z-10">
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-1 relative"
          >
            {/* Star Decoration - Top Left */}
            <div className="absolute -top-16 left-10 lg:-left-10 animate-pulse">
              <img 
                src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200" 
                alt="Star" 
                className="w-16 h-16 md:w-20 md:h-20 transform -rotate-12"
              />
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-dark leading-tight mb-6 mt-4">
              Hi There,<br />
              I'm Michelle
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md leading-relaxed mx-auto lg:mx-0">
              YouTube Growth Strategist & Media Manager. Helping channels succeed by blending Content Strategy, SEO, and AI-powered optimization.
            </p>
            
            <motion.button 
              onClick={scrollToAchievements}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-orange-500/30 flex items-center gap-2 mx-auto lg:mx-0 text-lg"
            >
              Learn More Below
              <ArrowRight size={22} />
            </motion.button>
          </motion.div>

          {/* Character / Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center order-2 lg:order-2"
          >
            {/* Decorative Shapes */}
            <div className="hidden lg:block absolute top-10 right-10 bg-white/40 backdrop-blur-md p-4 rounded-2xl shadow-xl rotate-12 z-0">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl">✨</div>
            </div>

            <div className="relative z-10 bg-gradient-to-b from-orange-200 to-orange-50 rounded-full overflow-hidden w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] flex items-end justify-center border-4 border-white shadow-2xl">
              {/* Updated Avatar */}
              <img 
                src="https://drive.google.com/thumbnail?id=19NPwLZPyCRuei6QPVfnsaV767OHNqAjW&sz=w1000" 
                alt="Michelle"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Michelle"; // Fallback if image is missing
                }}
              />
            </div>
            
            {/* Floating UI Badge - Subscribers */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 -left-4 sm:bottom-10 sm:left-0 lg:left-10 bg-white p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="bg-green-100 p-2 rounded-full text-green-600 font-bold text-sm sm:text-lg">
                +85K
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold">Subscribers</p>
                <p className="text-sm sm:text-base font-bold text-dark">Coin Bureau Chinese</p>
              </div>
            </motion.div>

            {/* New Floating UI Badge - Videos Produced */}
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-4 -right-4 sm:top-10 sm:right-0 lg:right-10 bg-white p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="bg-orange-100 p-2 rounded-full text-orange-600 font-bold text-sm sm:text-lg">
                500+
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold">Produced</p>
                <p className="text-sm sm:text-base font-bold text-dark">Videos</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;