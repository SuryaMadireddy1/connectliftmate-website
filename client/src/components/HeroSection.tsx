import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Typed from "typed.js";

interface HeroSectionProps {
  setShowDemo: (show: boolean) => void;
}

const HeroSection = ({ setShowDemo }: HeroSectionProps) => {
  const typedRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "personalized messages",
          "automated follow-ups",
          "intelligent connections",
          "smarter networking"
        ],
        typeSpeed: 70,
        backSpeed: 40,
        startDelay: 500,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true,
      });
      
      return () => {
        typed.destroy();
      };
    }
  }, []);
  
  return (
    <section 
      id="hero" 
      className="pt-28 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900/30 dark:to-purple-900/20 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 10,
                delay: 0.2
              }}
              className="inline-block px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-medium shadow-lg"
            >
              <div className="flex items-center space-x-1">
                <span className="animate-pulse">⚡</span>
                <span>LinkedIn Networking Superpower</span>
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              <div className="mb-2">Make meaningful LinkedIn</div>
              <div className="flex flex-wrap items-center">
                <span className="mr-2">connections with</span>
                <span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 inline-block min-w-[200px] md:min-w-[280px]"
                  ref={typedRef}
                >
                  personalized messages
                </span>
              </div>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
              Boost your networking impact with smart connection requests, AI-powered messaging, and organized job tracking.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="xl" variant="gradient" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/30 transition-shadow">
                  <span className="relative z-10">Add to Chrome</span>
                  <span className="absolute right-4 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  size="xl" 
                  variant="white"
                  onClick={() => setShowDemo(true)}
                  className="hover:shadow-lg hover:shadow-gray-300/30 dark:hover:shadow-gray-900/30 transition-shadow"
                >
                  Try Demo
                </Button>
              </motion.div>
            </motion.div>
            <div className="mt-8 space-y-2">
              <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Free forever. No subscriptions or hidden fees.</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>Bring your own Groq API key for AI features</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-xl shadow-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 overflow-hidden" style={{ animation: 'float 4s ease-in-out infinite' }}>
              <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-3 flex items-center">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-sm font-medium text-gray-500 dark:text-gray-400">ConnectLift Chrome Extension</div>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-100 dark:bg-gray-700 p-3">
                    <div className="text-sm font-medium mb-2">🤖 AI Message Generator</div>
                    <div className="mb-2 text-xs text-gray-500 dark:text-gray-400">Enter profile details for a personalized message:</div>
                    <div className="flex mb-3">
                      <input 
                        type="text" 
                        value="Senior Software Engineer at Google" 
                        readOnly
                        className="flex-1 p-2 text-sm border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-900"
                      />
                      <button className="bg-primary-600 text-white px-3 py-2 text-sm rounded-r-md">Generate</button>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-md border border-gray-200 dark:border-gray-600 text-sm">
                      <p>Hi [Name], I noticed your impressive work as a Senior Engineer at Google. Your experience with [specific technology] caught my attention as I'm working on similar projects. Would love to connect and exchange insights!</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-100 dark:bg-gray-700 p-3">
                    <div className="text-sm font-medium mb-2">📌 Saved Connections</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-600">
                        <div className="text-sm">Product Managers</div>
                        <button className="text-xs text-primary-600 dark:text-primary-400">Use</button>
                      </div>
                      <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-600">
                        <div className="text-sm">Startup Founders</div>
                        <button className="text-xs text-primary-600 dark:text-primary-400">Use</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
