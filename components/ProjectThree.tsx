import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const ProjectThree: React.FC = () => {
  const videos = [
    { 
      color: "bg-red-900", 
      title: "震撼！全球首例！阿联酋航空让你用加密币买免税品！？旅行方式彻底变了！", 
      icon: "📉", 
      url: "https://www.youtube.com/shorts/c-Z1T_oDusE",
      image: "https://drive.google.com/thumbnail?id=1UBz_4ZdGAvLTG-sfERxQarbIuRH_HiXT&sz=w800" 
    },
    { 
      color: "bg-green-900", 
      title: "巴菲特“空仓”历史最高，他不买任何资产，只留这三样东西…！", 
      icon: "💰", 
      url: "https://www.youtube.com/shorts/mXd_M9mcYgc",
      image: "https://drive.google.com/thumbnail?id=16Q6_s27FziQduznJfC1MxciwRVEsqtPj&sz=w800"
    },
    { 
      color: "bg-blue-900", 
      title: "投资人请注意：比特币下一轮牛市时间曝光？市场预期透露关键信号！", 
      icon: "⚠️", 
      url: "https://www.youtube.com/shorts/xYyaHeHYq6o",
      image: "https://drive.google.com/thumbnail?id=1cWs2htNEvedRCGhIPg9MfUznhNsrlV2y&sz=w800"
    }
  ];

  return (
    <section id="project3" className="w-full max-w-7xl mx-auto px-6 py-12 mb-20 relative">
      {/* Star Decoration */}
      <div className="absolute left-4 bottom-10 hidden lg:block z-20">
        <img 
          src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200" 
          alt="Star" 
          className="w-20 h-20 animate-spin-slow opacity-90"
          style={{ animationDuration: '10s' }}
        />
      </div>

      <div className="bg-orange-500 rounded-[50px] p-8 md:p-16 text-white relative overflow-hidden">
        
        {/* Header & Info Section */}
        <div className="flex flex-col gap-10 mb-16 relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Project 3:<br />
              Short-form Video<br />
              AI Production
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
             {/* Responsibilities - Takes up more space (approx 3/4) */}
             <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 flex-1 md:flex-[3]">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Sparkles size={20} className="text-yellow-300" />
                    Responsibilities
                </h3>
                <p className="text-orange-100 text-base leading-relaxed">
                    Built a workflow using AI tools to scale YouTube Shorts production. Including Google Flow, HeyGen IV, Eleven Labs, ChatGPT, etc.
                </p>
             </div>
             
             {/* 30% Stats - Takes up less space (approx 1/4) */}
             <div className="bg-dark text-white p-8 rounded-3xl flex flex-col justify-center items-center w-full md:flex-[1] text-center border border-white/10 whitespace-nowrap">
                 <p className="text-4xl font-bold text-orange-500 mb-1">30%</p>
                 <p className="text-sm text-gray-400">Production Time Saved</p>
             </div>
          </div>
        </div>

        {/* Phone Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {videos.map((item, idx) => (
                <motion.a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.2 }}
                    whileHover={{ y: -10, rotate: idx % 2 === 0 ? 2 : -2 }}
                    className="block relative aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-dark group cursor-pointer"
                >
                    {/* Thumbnail Image */}
                    <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
                    />
                    
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur p-2 rounded-full">
                        <ArrowUpRight size={16} />
                    </div>

                    <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-black">CB</div>
                            <span className="text-sm font-bold">@coinbureauchinese</span>
                        </div>
                        <p className="text-base font-bold leading-tight mb-4 line-clamp-3">{item.title}</p>
                        <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 w-2/3"></div>
                        </div>
                    </div>
                    
                    {/* Play Icon on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                             <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                         </div>
                    </div>
                </motion.a>
            ))}
        </div>

        {/* Background Decorations */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-400 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-600/50 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default ProjectThree;