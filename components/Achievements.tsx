import React from 'react';
import { motion } from 'framer-motion';
import { Users, PlaySquare, Eye, FolderOpen } from 'lucide-react';
import { StatCardProps } from '../types';

const StatCard: React.FC<StatCardProps> = ({ title, subtitle, description, icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -10, shadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
    className="bg-white p-6 rounded-3xl shadow-sm border border-orange-100 flex flex-col h-full relative overflow-hidden group"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-3xl font-extrabold text-dark group-hover:text-orange-500 transition-colors">{title}</h3>
        <p className="text-lg font-bold text-gray-800">{subtitle}</p>
      </div>
      <div className="bg-orange-500 p-3 rounded-2xl text-white shadow-lg shadow-orange-500/40">
        {icon}
      </div>
    </div>
    <p className="text-base text-gray-500 mt-auto leading-relaxed">
      {description}
    </p>
    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </motion.div>
);

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="w-full max-w-7xl mx-auto px-6 py-20 relative">
       {/* Star Decoration */}
       <div className="absolute right-0 top-10 hidden lg:block">
        <img 
          src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200" 
          alt="Star" 
          className="w-16 h-16 animate-pulse opacity-80"
        />
       </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-orange-500" />
          <span className="text-orange-600 font-bold uppercase text-xs tracking-widest">Achievements</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <h2 className="text-4xl font-extrabold text-dark">Some of My <br />Accomplishments</h2>
          <p className="text-gray-600 mb-4 max-w-lg text-base md:text-lg">
            I build systems that combine creativity with analytics, so every video not only looks great, but also reaches the right audience.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="85K+" 
          subtitle="Subscribers" 
          description="Grew Coin Bureau Chinese YouTube from 0 to 85K subscribers today."
          icon={<Users size={28} />}
          delay={0.1}
        />
        <StatCard 
          title="90%" 
          subtitle="Videos" 
          description="Achieved 90%+ videos hitting 2,000+ views in Q3 2025."
          icon={<PlaySquare size={28} />}
          delay={0.2}
        />
        <StatCard 
          title="150K+" 
          subtitle="Views" 
          description="Achieved 75x higher views than channel average on a single video."
          icon={<Eye size={28} />}
          delay={0.3}
        />
        <StatCard 
          title="500+" 
          subtitle="Videos" 
          description="Produced 500+ long-form videos & shorts, managing a full media workflow."
          icon={<FolderOpen size={28} />}
          delay={0.4}
        />
      </div>
    </section>
  );
};

export default Achievements;