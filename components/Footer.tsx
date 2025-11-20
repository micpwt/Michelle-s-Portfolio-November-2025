import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Chatbox from './Chatbox';

const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('itsmicpwt@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('+601165056363');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <footer id="lets-connect" className="w-full max-w-7xl mx-auto px-6 pb-24 relative z-10">
      {/* Star Decoration */}
      <div className="absolute left-10 top-0 hidden lg:block">
        <img 
          src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200" 
          alt="Star" 
          className="w-16 h-16 animate-pulse"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-t-2 border-orange-100 pt-12">
        
        {/* Left Column: Heading & Contact Info */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h2 className="text-4xl font-extrabold text-dark mb-2">micpwt</h2>
          <p className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-400 leading-tight mb-10">
            Hope to Get in Touch<br />
            with You Soon!
          </p>
          
          {/* Contact Buttons - Moved here */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
             <button 
               onClick={copyPhone}
               className="group relative text-orange-500 font-bold text-lg px-4 py-2 rounded-xl border-2 border-orange-100 hover:bg-orange-50 hover:border-orange-200 transition-colors"
             >
               <span className="flex items-center gap-2">
                 {copiedPhone && <Check size={18} className="text-green-500" />}
                 +60 11 65056363
               </span>
               <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg z-20">
                 {copiedPhone ? 'Copied!' : 'Click to copy'}
                 <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></span>
               </span>
             </button>

             <button 
              onClick={copyEmail}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2 transition-all active:scale-95 whitespace-nowrap"
             >
                 {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                 itsmicpwt@gmail.com
             </button>
          </div>
        </div>
        
        {/* Right Column: Embedded Chatbox */}
        <div className="w-full lg:w-[450px] mt-4 lg:mt-0">
           <Chatbox variant="embedded" />
        </div>

      </div>
      
      <div className="text-center mt-16 text-gray-400 text-sm">
         © 2025 Michelle Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;