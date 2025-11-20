import React from 'react';
import Hero from './components/Hero';
import SkillsTicker from './components/SkillsTicker';
import Achievements from './components/Achievements';
import ProjectOne from './components/ProjectOne';
import ProjectTwo from './components/ProjectTwo';
import ProjectThree from './components/ProjectThree';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Decorations from './components/Decorations';
import Chatbox from './components/Chatbox';

function App() {
  return (
    <main className="min-h-screen selection:bg-orange-200 selection:text-orange-900 relative overflow-hidden">
       {/* Global Background Decorations */}
       <Decorations />
       
       {/* Navigation */}
       <Navigation />
       
       {/* Main Content Flow */}
       <div className="relative w-full">
          <Hero />
          <SkillsTicker />
          <Achievements />
          <ProjectOne />
          <ProjectTwo />
          <ProjectThree />
          <Footer />
       </div>

       {/* Floating Utilities */}
       <Chatbox variant="floating" />
       <ScrollToTop />
    </main>
  );
}

export default App;