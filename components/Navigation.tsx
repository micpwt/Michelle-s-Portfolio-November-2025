import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Project 1', id: 'project1' },
  { name: 'Project 2', id: 'project2' },
  { name: 'Project 3', id: 'project3' },
  { name: "Let's connect", id: 'lets-connect' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('+601165056363');
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
    <>
      {/* Mobile/Tablet Header Bar (< lg) */}
      <div className="fixed top-0 left-0 w-full z-50 lg:hidden px-4 py-3 flex justify-between items-center pointer-events-none">
        {/* Hamburger Button - Smaller */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="pointer-events-auto bg-white/90 backdrop-blur p-2 rounded-full shadow-lg text-orange-600 border border-orange-100"
          aria-label="Open Menu"
        >
          <Menu size={20} />
        </button>

        {/* Mobile Contact Info - Side by Side */}
        <div className="pointer-events-auto flex flex-row items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-orange-50 max-w-[85%]">
           <button 
            onClick={handlePhoneClick}
            className="flex items-center gap-1.5 text-[10px] xs:text-xs font-bold text-gray-700 hover:text-orange-600 transition-colors"
           >
             {phoneCopied ? <Check size={12} className="text-green-600" /> : <Phone size={12} className="text-orange-500" />}
             <span className="whitespace-nowrap">+60 11 65056363</span>
           </button>

           <div className="w-px h-3 bg-gray-300"></div>

           <a href="mailto:itsmicpwt@gmail.com" className="flex items-center gap-1.5 text-[10px] xs:text-xs font-bold text-gray-700 hover:text-orange-600 transition-colors">
             <Mail size={12} className="text-orange-500" />
             <span className="truncate max-w-[130px]">itsmicpwt@gmail.com</span>
           </a>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#FFFBF4] z-50 flex flex-col p-8 lg:hidden overflow-y-auto"
          >
             <div className="flex justify-end mb-8">
               <button 
                 onClick={() => setIsOpen(false)} 
                 className="bg-orange-100 p-2 rounded-full text-orange-600"
                 aria-label="Close Menu"
               >
                 <X size={32} />
               </button>
             </div>
             <nav className="flex flex-col gap-6 mt-8">
               {navItems.map((item) => (
                 <button 
                   key={item.name}
                   onClick={() => scrollToSection(item.id)}
                   className="text-3xl font-extrabold text-dark text-left hover:text-orange-500 transition-colors"
                 >
                   {item.name}
                 </button>
               ))}
             </nav>
             
             {/* Decorative Star in Menu */}
             <div className="mt-auto pt-10 flex justify-center opacity-50">
                <img 
                  src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200" 
                  alt="Decoration" 
                  className="w-16 h-16 animate-pulse"
                />
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Laptop/Desktop Fixed Header (>= lg) */}
      <div className="hidden lg:block">
        {/* Nav Pill - Top Left */}
        <div className="fixed top-6 left-6 z-40">
          <nav className="flex items-center gap-8 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-sm border border-orange-100">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-bold text-gray-600 hover:text-orange-600 transition-colors duration-300 whitespace-nowrap"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Contact Pill - Top Right */}
        <div className="fixed top-6 right-6 z-40 flex gap-4 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-sm border border-orange-100 text-sm font-medium text-gray-600 transition-all duration-300">
            <button 
              onClick={handlePhoneClick}
              className="flex items-center gap-2 hover:text-orange-600 transition-colors group relative"
            >
              {phoneCopied ? <Check size={16} className="text-green-500" /> : <Phone size={16} />}
              <span>+60 11 65056363</span>
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {phoneCopied ? 'Copied!' : 'Click to copy'}
              </span>
            </button>
            <div className="w-px bg-gray-300 h-5 self-center mx-2"></div>
            <a href="mailto:itsmicpwt@gmail.com" className="flex items-center gap-2 hover:text-orange-600 transition-colors">
              <Mail size={16} />
              itsmicpwt@gmail.com
            </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;