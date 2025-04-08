import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AIDemo from "@/components/AIDemo";

// Feature data
export const features = [
  { title: "Saved Connection Notes", desc: "Store, manage, and reuse frequently sent connection requests.", icon: "📌" },
  { title: "Personalized AI Messages", desc: "Generate custom messages using LLaMA3 with your own Groq API key.", icon: "🧠" },
  { title: "Boolean Search Builder", desc: "Craft advanced LinkedIn Boolean queries with ease.", icon: "🔍" },
  { title: "Job Tracker Dashboard", desc: "Keep track of your job applications in a structured view.", icon: "📊" },
  { title: "Export / Import Data", desc: "Take your data anywhere by exporting or importing JSON files.", icon: "💾" },
  { title: "BYOK (Bring Your Own Key)", desc: "Use your own Groq API key for AI features - no subscription needed!", icon: "🔑" }
];

// Testimonial data
export const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    quote: "The AI message generator has transformed how I approach LinkedIn connections. I'm getting 3x more responses with personalized messages."
  },
  {
    name: "David Chen",
    title: "Software Engineer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    quote: "The Boolean search builder has been a game-changer for finding the right connections. The job tracker also helped me land my current role."
  },
  {
    name: "Maya Patel",
    title: "Career Coach",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    quote: "I recommend ConnectLift to all my clients. The saved templates and AI suggestions have helped them build meaningful professional networks."
  }
];

// FAQ data
export const faqData = [
  {
    question: "Is this extension really free?",
    answer: "Yes! All features are completely free to use, including saving unlimited templates, advanced boolean search, job tracking, and data export/import. AI features require you to provide your own Groq API key."
  },
  {
    question: "Will my data sync across devices?",
    answer: "Currently, saved data is local to your browser. You can manually export your data from one device and import it to another. Cloud synchronization is planned for a future update to make this process seamless."
  },
  {
    question: "How does the AI message generation work?",
    answer: "We use Groq's API with LLaMA3 to generate personalized connection messages based on the profile information you provide. You'll need to provide your own Groq API key to use this feature. We don't charge for AI generations - you only pay for what you use directly with Groq."
  },
  {
    question: "Where do I get a Groq API key?",
    answer: "You can sign up for a free Groq API key at groq.com. They offer generous free tier limits that are sufficient for most users. Once you have your key, simply enter it in the extension settings to enable AI message generation."
  },
  {
    question: "Can I import/export my notes?",
    answer: "Absolutely! Use the Import/Export options in the Settings page to backup your data or transfer it between devices. Your data is exported as a JSON file that you can safely store and import when needed."
  },
  {
    question: "Is my data private and secure?",
    answer: "Your data is stored locally in your browser and never sent to our servers unless you're using the AI features. Even then, we don't store the content of your messages or connection notes. Your privacy is our top priority."
  }
];

// Pricing data
export const pricingData = [
  {
    title: "Free",
    description: "Everything you need to get started",
    price: "0",
    period: "forever",
    features: [
      "Save unlimited connection templates",
      "Advanced Boolean search builder",
      "Export/Import your data",
      "Job tracking dashboard",
      "AI message generation (with your own API key)"
    ],
    disabledFeatures: [],
    buttonText: "Install Free",
    buttonStyle: "w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition shadow-md"
  }
];

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check user preference for dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
    
    // Set loading to false after component mounts
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply dark mode to the body
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Function to scroll to a section
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Accounting for fixed header
        behavior: 'smooth'
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="min-h-screen"
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} scrollToId={scrollToId} setShowDemo={setShowDemo} />
        <HeroSection setShowDemo={setShowDemo} />
        <FeaturesSection features={features} />
        <TestimonialsSection testimonials={testimonials} />
        <PricingSection pricingData={pricingData} />
        <FAQSection faqData={faqData} />
        <CTASection />
        <Footer />
        
        {/* AI Demo Modal */}
        {showDemo && <AIDemo setShowDemo={setShowDemo} />}
      </motion.div>
    </AnimatePresence>
  );
};

export default LandingPage;
