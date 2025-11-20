import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "Content Strategy",
  "Media Creation",
  "Search Engine Optimization",
  "AI-driven Workflows",
  "Audience Analytics",
  "Brand Growth",
  "Video Production"
];

const SkillsTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#FDBA74] py-4 overflow-hidden border-y-2 border-orange-300">
      <div className="flex whitespace-nowrap relative">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-white font-bold text-lg uppercase tracking-wider">
                {skill}
              </span>
              <span className="text-white opacity-70">+</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsTicker;