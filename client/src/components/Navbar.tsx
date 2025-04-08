import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  scrollToId: (id: string) => void;
  setShowDemo: (show: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode, scrollToId, setShowDemo }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 p-4 backdrop-blur-md ${scrolled ? 'shadow-sm' : ''} ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h1 className="font-bold text-lg cursor-pointer" onClick={() => scrollToId('hero')}>
            ConnectLift Mate
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <button 
            className="hover:text-primary-600 dark:hover:text-primary-400 transition" 
            onClick={() => scrollToId('features')}
          >
            Features
          </button>
          <button 
            className="hover:text-primary-600 dark:hover:text-primary-400 transition" 
            onClick={() => scrollToId('testimonials')}
          >
            Testimonials
          </button>
          <button 
            className="hover:text-primary-600 dark:hover:text-primary-400 transition" 
            onClick={() => scrollToId('pricing')}
          >
            Pricing
          </button>
          <button 
            className="hover:text-primary-600 dark:hover:text-primary-400 transition" 
            onClick={() => scrollToId('faq')}
          >
            FAQs
          </button>
          <button 
            className="hover:text-primary-600 dark:hover:text-primary-400 transition" 
            onClick={() => setShowDemo(true)}
          >
            Live Demo
          </button>
        </nav>
        
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button 
            className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all hover:bg-gray-200 dark:hover:bg-gray-700" 
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {/* Sun icon for dark mode */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            {/* Moon icon for light mode */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1 rounded-md focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 p-4 shadow-md"
        >
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            <button 
              className="hover:text-primary-600 dark:hover:text-primary-400 transition py-2" 
              onClick={() => {
                scrollToId('features');
                setMobileMenuOpen(false);
              }}
            >
              Features
            </button>
            <button 
              className="hover:text-primary-600 dark:hover:text-primary-400 transition py-2" 
              onClick={() => {
                scrollToId('testimonials');
                setMobileMenuOpen(false);
              }}
            >
              Testimonials
            </button>
            <button 
              className="hover:text-primary-600 dark:hover:text-primary-400 transition py-2" 
              onClick={() => {
                scrollToId('pricing');
                setMobileMenuOpen(false);
              }}
            >
              Pricing
            </button>
            <button 
              className="hover:text-primary-600 dark:hover:text-primary-400 transition py-2" 
              onClick={() => {
                scrollToId('faq');
                setMobileMenuOpen(false);
              }}
            >
              FAQs
            </button>
            <button 
              className="hover:text-primary-600 dark:hover:text-primary-400 transition py-2" 
              onClick={() => {
                setShowDemo(true);
                setMobileMenuOpen(false);
              }}
            >
              Live Demo
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
