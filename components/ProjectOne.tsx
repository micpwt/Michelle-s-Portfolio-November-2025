import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users } from 'lucide-react';

const ProjectOne: React.FC = () => {
  return (
    <section id="project1" className="w-full max-w-7xl mx-auto px-6 py-12 relative">
      {/* Star Decoration */}
      <div className="absolute left-10 top-0 z-20 hidden lg:block">
        <img 
          src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200" 
          alt="Star" 
          className="w-14 h-14 animate-bounce"
          style={{ animationDuration: '3s' }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Info Panel */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-gray-900 text-white rounded-[40px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden"
        >
          {/* Decorative curve */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full -mr-32 -mt-32 opacity-50"></div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 pr-4 relative z-10">
              Project 1:<br />
              Growing Coin Bureau<br />
              Chinese YouTube
            </h2>

            <div className="bg-white text-gray-900 p-6 rounded-3xl mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300 relative z-10">
              <h3 className="text-xl font-bold mb-2">Responsibilities</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Content strategy, SEO-driven title generation, editing supervision, and team collaboration.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center relative z-10 mb-8">
               <motion.div 
                 className="bg-gray-800 p-3 rounded-2xl cursor-default group transition-all duration-300 hover:-translate-y-2"
               >
                 <p className="text-gray-400 text-sm mb-1 group-hover:text-gray-300 transition-colors">Views</p>
                 <p className="font-bold text-xl text-white group-hover:text-green-400 transition-colors">4.7M</p>
               </motion.div>
               <motion.div 
                 className="bg-gray-800 p-3 rounded-2xl cursor-default group transition-all duration-300 hover:-translate-y-2"
               >
                 <p className="text-gray-400 text-sm mb-1 group-hover:text-gray-300 transition-colors">Hours</p>
                 <p className="font-bold text-xl text-white group-hover:text-green-400 transition-colors">174K</p>
               </motion.div>
               <motion.div 
                 className="bg-gray-800 p-3 rounded-2xl cursor-default group transition-all duration-300 hover:-translate-y-2 ring-2 ring-orange-500/20"
               >
                 <p className="text-gray-400 text-sm mb-1 group-hover:text-gray-300 transition-colors">In</p>
                 <p className="font-bold text-xl text-white group-hover:text-green-400 transition-colors">2 Years</p>
               </motion.div>
            </div>
          </div>

          {/* 85K Badge - Moved to Bottom of Left Panel */}
          <div className="bg-white rounded-3xl p-6 flex items-center justify-between shadow-lg relative overflow-hidden group z-10 mt-auto">
             <div className="absolute right-0 bottom-0 w-20 h-20 bg-orange-100 rounded-tl-full opacity-50 translate-x-4 translate-y-4"></div>
             <div>
                <p className="text-3xl md:text-4xl font-extrabold text-dark group-hover:text-orange-500 transition-colors">85K+</p>
                <p className="text-gray-500 text-lg font-medium">Subscribers</p>
             </div>
             <div className="bg-orange-500 p-3 rounded-full text-white shadow-lg shadow-orange-500/30 group-hover:rotate-12 transition-transform duration-300">
                <Trophy size={28} />
             </div>
          </div>
        </motion.div>

        {/* Right Visual Panel */}
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="lg:col-span-7 bg-white border border-gray-200 rounded-[40px] p-8 relative overflow-hidden shadow-sm flex flex-col h-full"
        >
            <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-gray-500 text-base mb-2">Scaled a channel from 0 to 85K subscribers.</p>
                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-bold">Last updated: 1 Oct 2025</span>
                </div>
            </div>

            {/* Screenshot of Channel */}
            <div className="flex-1 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 min-h-[300px]">
               <img 
                src="https://drive.google.com/thumbnail?id=1zjkHBmCwOnT7cNOKlMxkO5h02nTTU-bK&sz=w1000" 
                alt="Coin Bureau Chinese YouTube Channel" 
                className="w-full h-full object-contain object-top"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'; // Hide broken image
                  e.currentTarget.parentElement!.style.backgroundColor = '#f3f4f6'; // Show gray background
                  e.currentTarget.parentElement!.innerHTML += '<div class="flex items-center justify-center h-full text-gray-400">Image: Project 1.png</div>';
                }}
               />
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectOne;