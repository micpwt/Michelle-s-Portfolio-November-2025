import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, X, MessageCircle, Sparkles, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatboxProps {
  variant: 'floating' | 'embedded';
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_INSTRUCTION = `You are an AI assistant for Michelle Peong Wei Ting's portfolio website. Your goal is to answer questions from HR, recruiters, or potential clients about Michelle's skills, experience, and projects based on the portfolio content.

**Tone:** Professional, enthusiastic, concise, and helpful. Act as an extension of Michelle's personal brand.

**Formatting Rules (CRITICAL):**
- **DO NOT use asterisks (*) for bullet points or bold text.** The user dislikes star symbols in the output.
- Use dashes (-) for bullet points.
- Use numbered lists (1., 2.) where appropriate.
- Use double newlines to separate paragraphs for clarity.

**Key Profile Information:**
- **Name:** Michelle Peong Wei Ting
- **Role:** Media Manager & YouTube Growth Strategist.
- **Location:** Based in Selangor, Malaysia. (Experience with clients in Malaysia, Singapore, and Indonesia).
- **LinkedIn:** www.linkedin.com/in/micpwt
- **Contact:** +601165056363, itsmicpwt@gmail.com
- **Portfolio:** http://bit.ly/3W4L0U2

**Summary:**
Media Manager with experience in YouTube growth & AI-powered content creation, specializing in producing digital content & SEO Strategy. Grew a Web3 YouTube channel from 0 to 85K subscribers in nearly 2 years. Experienced in guiding creative teams, optimizing video performance, and driving measurable growth through data-backed decision-making.

**Professional Experience:**

1. **Media Manager, Future Trends FZCO (Oct 2024 - Present)**
   - Scaled CoinBureau Chinese (华语) channel from 0 to 85K subscribers in 2 years (last updated 20/11/2025) through targeted SEO, audience research, and content optimization.
   - Produced high-impact content, with one podcast video achieving 150K views (75x the channel’s average performance) through strategic topic selection and SEO-driven titling.
   - Developed AI-powered short-form video workflow, reducing production time per video by 30% while maintaining quality.
   - Conducted weekly performance reporting, analyzing CTR, audience demographics, and watch time for future strategies.
   - Executed A/B tests for titles & thumbnails, improving CTR and view duration.
   - Used AI and non-AI tools for keyword optimization and trend analysis.
   - Managed all media assets of the channel, ensuring brand consistency across video, graphics, and social platforms.
   - Led a cross-functional media team, guiding members to achieve performance targets and align with strategic goals.
   - Produced storyboards and scripts for both long-form and short-form content, streamlining pre-production workflows.

2. **Senior Video Editor, Future Trends FZCO (Dec 2023 - Oct 2024)**
   - Produced content: advertisements, landing page content videos, and YouTube videos/shorts.
   - Created visual assets: offline event T-shirts, website banners, marketing presentation slides.
   - Contributed to content discussions, brainstorming sessions, and planning for video shoots.

3. **Freelance Video Editor, Fiverr & Freelance (Sep 2021 - Dec 2023)**
   - Delivered end-to-end video production for clients in Malaysia, Singapore, and Indonesia.
   - Edited, captioned, and optimized videos for SEO across YouTube and social platforms.
   - Provided consultation on YouTube SEO for small business and educational clients.

**Education:**
- **Bachelor of Media and Creative Studies (HONS)** - Universiti Tunku Abdul Rahman of Malaysia.

**Certifications:**
- Pro5 Video Editor Certification
- Semrush SEO Crash Course with Brian Dean
- Mastering YouTube Search Trends and SEO Strategies

**Core Skills:**
- YouTube SEO
- AI-Powered Content Production
- Short-Form Video Strategy & Execution
- Keyword Research & SEO Optimization
- Storyboarding & Scriptwriting
- Team Leadership & Cross-Team Collaboration
- A/B Testing (Titles & Thumbnails)
- Data-Driven Content Planning & Analytics

**Behavioral Instructions:**
- If asked about specific projects, provide the numbers and impact from the experience section.
- **IMPORTANT:** If asked a question you are NOT sure about or that is not covered in this context, strictly reply with: "I don't have the specific details for that query. Please reach out to Michelle directly via email at itsmicpwt@gmail.com or phone at +601165056363."
- Always be polite and professional.
`;

const Chatbox: React.FC<ChatboxProps> = ({ variant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Michelle's AI Assistant. Ask me anything about her experience, projects, or skills!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Construct history for context
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history,
      });

      const result = await chat.sendMessage({ message: userMessage });
      const responseText = result.text;

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try again later or contact Michelle directly at itsmicpwt@gmail.com!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Helper to parse links in text
  const formatMessage = (text: string) => {
    // Regex to match emails and phone numbers roughly
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    // Basic regex to catch links including linkedin
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
    
    const parts = text.split(/(\s+)/);

    return parts.map((part, i) => {
      if (emailRegex.test(part)) {
        return <a key={i} href={`mailto:${part}`} className="underline text-blue-600 hover:text-blue-800 font-bold">{part}</a>;
      }
      // Simple check if part looks like the phone number provided in context
      if (part.includes('+601165056363') || part.replace(/\s/g, '') === '+601165056363') {
         return <a key={i} href="tel:+601165056363" className="underline text-blue-600 hover:text-blue-800 font-bold">{part}</a>;
      }
      if (urlRegex.test(part)) {
        const href = part.startsWith('http') ? part : `https://${part}`;
        return <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 font-bold">{part}</a>;
      }
      return part;
    });
  };

  // RENDER: Floating Variant
  if (variant === 'floating') {
    return (
      <>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[350px] h-[500px] bg-white rounded-3xl shadow-2xl border border-orange-100 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-orange-500 p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Sparkles size={18} />
                  <span className="font-bold">Ask AI about Michelle</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:bg-orange-600 p-1 rounded-full">
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 bg-orange-50/50 space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-orange-500 text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 shadow-sm border border-orange-100 rounded-tl-none'
                    }`}>
                      {formatMessage(msg.text)}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-orange-100 flex gap-1">
                      <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}/>
                      <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}/>
                      <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}/>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask a question..."
                  className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 bg-dark text-white p-4 rounded-full shadow-lg hover:bg-gray-900 transition-colors flex items-center justify-center group"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          
          {/* Tooltip */}
          {!isOpen && (
             <span className="absolute right-full mr-3 bg-white text-dark px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
               Ask AI
             </span>
          )}
        </motion.button>
      </>
    );
  }

  // RENDER: Embedded Variant
  return (
    <div className="w-full h-[400px] bg-white rounded-[30px] shadow-lg border border-orange-100 flex flex-col overflow-hidden">
      <div className="bg-gray-900 p-4 text-white flex items-center gap-3">
         <div className="bg-orange-500 p-2 rounded-full">
            <Bot size={20} />
         </div>
         <div>
             <h3 className="font-bold text-base">Chat with Michelle's AI</h3>
             <p className="text-xs text-gray-400">Ask about experience & skills</p>
         </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4 scrollbar-thin">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'model' && (
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-2 flex-shrink-0">
                    <Bot size={14} className="text-orange-600"/>
                </div>
            )}
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
              msg.role === 'user' 
                ? 'bg-orange-500 text-white rounded-tr-none' 
                : 'bg-white text-gray-800 shadow-sm border border-gray-200 rounded-tl-none'
            }`}>
              {formatMessage(msg.text)}
            </div>
            {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-2 flex-shrink-0">
                    <User size={14} className="text-gray-600"/>
                </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start ml-10">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-200 flex gap-1">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}/>
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}/>
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}/>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
        />
        <button 
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default Chatbox;