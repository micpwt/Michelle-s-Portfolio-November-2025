import React from 'react';
import { motion } from 'framer-motion';

const Decorations: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grain Texture */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.03] mix-blend-multiply pointer-events-none"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Scattered Stars */}
      <div className="absolute inset-0 z-0">
        {/* Hero / Top Area Stars */}
        <motion.img 
            src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200"
            className="absolute top-[5%] left-[15%] w-8 h-8 opacity-40"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
        />
         <motion.img 
            src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200"
            className="absolute top-[12%] right-[8%] w-12 h-12 opacity-30"
            animate={{ rotate: [0, 45, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Middle Sections Stars */}
        <motion.img 
            src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200"
            className="absolute top-[25%] left-[5%] w-16 h-16 opacity-20"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
        />
         <motion.img 
            src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200"
            className="absolute top-[35%] right-[20%] w-6 h-6 opacity-50"
            animate={{ scale: [1, 0.8, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.img 
            src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200"
            className="absolute top-[45%] left-[10%] w-10 h-10 opacity-30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Bottom Sections Stars */}
        <motion.img 
            src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200"
            className="absolute top-[60%] right-[5%] w-14 h-14 opacity-25"
            animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 5, repeat: Infinity }}
        />
         <motion.img 
            src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200"
            className="absolute top-[75%] left-[20%] w-8 h-8 opacity-40"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.img 
            src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200"
            className="absolute top-[85%] right-[15%] w-20 h-20 opacity-20 blur-[1px]"
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.img 
            src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200"
            className="absolute top-[92%] left-[8%] w-10 h-10 opacity-30"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default Decorations;