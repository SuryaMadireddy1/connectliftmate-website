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
          "Save your best LinkedIn messages.",
          "Connect smarter, not harder.",
          "Track jobs. Automate follow-ups.",
          "Use AI to personalize everything."
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });
      
      return () => {
        typed.destroy();
      };
    }
  }, []);
  
  return (
    <section 
      id="hero" 
      className="pt-28 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm font-medium">
              LinkedIn Networking Superpower ⚡
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span>Make meaningful LinkedIn connections with </span>
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400"
                ref={typedRef}
              >
                personalized messages
              </span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
              Boost your networking impact with smart connection requests, AI-powered messaging, and organized job tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="gradient">
                Add to Chrome
              </Button>
              <Button 
                size="xl" 
                variant="white"
                onClick={() => setShowDemo(true)}
              >
                Try Demo
              </Button>
            </div>
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
            <div className="rounded-xl shadow-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 overflow-hidden" style={{ animation: 'float 3s ease-in-out infinite' }}>
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
