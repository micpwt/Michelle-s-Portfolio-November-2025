import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, ChevronRight } from 'lucide-react';

const ProjectTwo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'reach'>('overview');
  const [showArrow, setShowArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowArrow(scrollWidth > clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  const podcastVideos = [
    {
      id: 'fbODcXBAHEY',
      url: 'https://www.youtube.com/watch?v=fbODcXBAHEY',
      title: '【上集】房地产黑幕曝光！导师割韭菜？课程背后的赚钱套路全公开！Dark Side of Real Estate EXPOSED! The Truth Behind Property Courses'
    },
    {
      id: '2u9WkPS-iJI',
      url: 'https://www.youtube.com/watch?v=2u9WkPS-iJI',
      title: '【下集】房地产黑幕曝光！比Money Game还可怕的套路？Dark Side of Real Estate EXPOSED! The Truth Behind Real Estate Scam'
    },
    {
      id: 'JFDXd0In6hY',
      url: 'https://www.youtube.com/watch?v=JFDXd0In6hY',
      title: '黑幕曝光！这个“保险套路”坑惨了无数家庭?! 看完这个你就明白了！The Dark Side of Insurance Finally EXPOSED!'
    }
  ];

  return (
    <section id="project2" className="w-full max-w-7xl mx-auto px-6 py-12 relative">
      {/* Star Decoration */}
      <div className="absolute right-4 -top-6 hidden lg:block">
        <img 
          src="https://drive.google.com/thumbnail?id=1cu8q7J0IC4s0ASCLm4T9JDElmC51YlKi&sz=w200" 
          alt="Star" 
          className="w-12 h-12 animate-pulse"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Info Panel */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-[#FDF6E9] border border-orange-100 rounded-[40px] p-10 flex flex-col justify-center relative"
        >
           <span className="absolute top-6 left-10 inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-bold">Last updated: 20 Nov 2025</span>

           <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 mt-8">
              Project 2:<br />
              Creating Viral<br />
              Podcast Series
            </h2>

            <div className="bg-white p-6 rounded-3xl mb-6 shadow-sm border border-orange-100">
              <h3 className="text-xl font-bold text-orange-600 mb-2">Responsibilities</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Researching, scripting and SEO titling. Monitor the statistics time to time and engage with audiences.
              </p>
            </div>

            <div className="bg-orange-500 text-white p-8 rounded-3xl text-center shadow-xl shadow-orange-500/30 transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-5xl font-extrabold mb-2">158.8K</h3>
                <p className="font-medium text-lg text-orange-100">Views Gained</p>
                <p className="text-sm text-orange-200 mt-1">(In one single video)</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
               <div className="text-center p-2 bg-white/50 rounded-xl cursor-default group hover:bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                   <p className="font-bold text-black text-xl group-hover:text-green-600 transition-colors">3.3M</p>
                   <p className="text-sm">Impressions</p>
               </div>
               <div className="text-center p-2 bg-white/50 rounded-xl cursor-default group hover:bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                   <p className="font-bold text-black text-xl group-hover:text-green-600 transition-colors">3.1%</p>
                   <p className="text-sm">CTR</p>
               </div>
               <div className="text-center p-2 bg-white/50 rounded-xl cursor-default group hover:bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                   <p className="font-bold text-black text-xl group-hover:text-green-600 transition-colors">25.7K</p>
                   <p className="text-sm">Watch Hours</p>
               </div>
               <div className="text-center p-2 bg-white/50 rounded-xl cursor-default group hover:bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                   <p className="font-bold text-black text-xl group-hover:text-green-600 transition-colors">+4.8K</p>
                   <p className="text-sm">Subscribers</p>
               </div>
            </div>
        </motion.div>

        {/* Right Chart Panel */}
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="lg:col-span-7 bg-white rounded-[40px] p-8 shadow-lg border border-gray-100 flex flex-col"
        >
             <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-lg flex items-center gap-2">
                     <Mic size={20} className="text-orange-500"/>
                     Video analytics
                 </h3>
                 
                 <div className="flex bg-gray-100 rounded-full p-1">
                    <button 
                      onClick={() => setActiveTab('overview')}
                      className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${activeTab === 'overview' ? 'bg-white shadow text-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      Overview
                    </button>
                    <button 
                      onClick={() => setActiveTab('reach')}
                      className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${activeTab === 'reach' ? 'bg-white shadow text-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      Reach
                    </button>
                 </div>
             </div>

             {/* Chart Container: Responsive Aspect Ratio to Remove Excess Space on Mobile */}
             <div className="relative bg-gray-50 rounded-xl overflow-hidden border border-gray-100 aspect-[16/10] lg:aspect-video">
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' ? (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img 
                        src="https://drive.google.com/thumbnail?id=1DnxQhKy45vrnIfZtKtS9Lrre5Uu57uCT&sz=w1000" 
                        alt="Analytics Overview" 
                        className="w-full h-full object-contain" 
                        onError={(e) => { e.currentTarget.src = "https://placehold.co/600x400/png?text=Project2.1.png+Missing"; }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="reach"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img 
                        src="https://drive.google.com/thumbnail?id=1-0U43TRUhbNgwql1wBSD40yS7NzM6tor&sz=w1000" 
                        alt="Analytics Reach" 
                        className="w-full h-full object-contain"
                        onError={(e) => { e.currentTarget.src = "https://placehold.co/600x400/png?text=Project2.2.png+Missing"; }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>

             <div className="mt-8">
                 <div className="flex justify-between items-center mb-4">
                     <p className="font-bold text-lg">Podcast Series:</p>
                     {showArrow && (
                       <button 
                          onClick={scrollRight}
                          className="bg-orange-100 p-2 rounded-full text-orange-600 hover:bg-orange-200 hover:text-orange-700 transition-colors shadow-sm"
                          aria-label="Scroll Next"
                       >
                          <ChevronRight size={20} />
                       </button>
                     )}
                 </div>
                 
                 <div 
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                 >
                     {podcastVideos.map((video, i) => (
                         <a 
                           key={i} 
                           href={video.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="min-w-[200px] w-[200px] space-y-2 block group flex-shrink-0"
                         >
                             <div className="w-full aspect-video rounded-xl bg-gray-800 overflow-hidden relative shadow-md group-hover:shadow-lg transition-all">
                                 <img 
                                   src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                                   alt={video.title}
                                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                                 />
                                 <div className="absolute inset-0 flex items-center justify-center">
                                     <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                         <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[10px] border-l-black border-b-[5px] border-b-transparent ml-1"></div>
                                     </div>
                                 </div>
                             </div>
                             <p className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-orange-600 transition-colors" title={video.title}>
                                {video.title}
                             </p>
                         </a>
                     ))}
                 </div>
             </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ProjectTwo;