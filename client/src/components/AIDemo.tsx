import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface AIDemoProps {
  setShowDemo: (show: boolean) => void;
}

const AIDemo = ({ setShowDemo }: AIDemoProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Close when clicking outside the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowDemo(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [setShowDemo]);
  
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center transition-opacity">
      <motion.div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl p-6 shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => setShowDemo(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h2 className="text-2xl font-bold">AI Message Generator</h2>
          </div>
          <p className="mb-6">Enter a job title or profile description to generate a personalized connection message using AI.</p>
          <div className="flex flex-col space-y-4">
            <input 
              type="text" 
              placeholder="e.g. Senior Software Engineer at Amazon" 
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900"
            />
            <div className="flex space-x-2">
              <select className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 flex-shrink-0">
                <option>Professional</option>
                <option>Casual</option>
                <option>Direct</option>
              </select>
              <Button className="flex-1 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition">
                Generate Message
              </Button>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-md text-left">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Generated Message</h3>
              <button className="text-primary-600 dark:text-primary-400 text-sm hover:underline">
                Copy
              </button>
            </div>
            <p className="text-gray-800 dark:text-gray-200">
              Hi [Name], I noticed your profile as a Senior Engineer at Amazon and was impressed by your work with cloud infrastructure. As someone passionate about scalable solutions, I'd love to connect and perhaps exchange insights on AWS best practices. Would you be open to connecting?
            </p>
          </div>
          <div className="mt-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-md text-left">
            <h3 className="font-semibold mb-2">Recent Generations</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Product Manager at Google</span>
                <button className="text-primary-600 dark:text-primary-400 hover:underline">Use</button>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Startup Founder in Fintech</span>
                <button className="text-primary-600 dark:text-primary-400 hover:underline">Use</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AIDemo;
