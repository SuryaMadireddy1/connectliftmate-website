import React, { useLayoutEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Typed from "typed.js";

const features = [
  { title: "Saved Connection Notes", desc: "Store, manage, and reuse frequently sent connection requests.", icon: "📌" },
  { title: "Personalized AI Messages", desc: "Use your Groq API key to generate custom messages using LLaMA3.", icon: "🧠" },
  { title: "Boolean Search Builder", desc: "Craft advanced LinkedIn Boolean queries with ease.", icon: "🔍" },
  { title: "Job Tracker Dashboard", desc: "Keep track of your job applications in a structured view.", icon: "📊" },
  { title: "Export / Import Data", desc: "Take your data anywhere by exporting or importing JSON files.", icon: "💾" },
  { title: "Gmail Sign-in Access", desc: "Authenticate securely via Gmail to unlock AI features.", icon: "📧" }
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showDemo, setShowDemo] = useState(false);
  const heroRef = useRef(null);
  const typedRef = useRef(null);

  useLayoutEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useLayoutEffect(() => {
    const handle = requestAnimationFrame(() => setLoading(false));
    return () => cancelAnimationFrame(handle);
  }, []);

  useLayoutEffect(() => {
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
        loop: true
      });
      return () => typed.destroy();
    }
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {/* Navbar */}
        <header className={\`fixed top-0 w-full z-50 p-4 backdrop-blur-md bg-white/60 dark:bg-gray-900/70 shadow-sm flex justify-between items-center px-8\`}>
          <h1 className="font-bold text-lg cursor-pointer" onClick={() => scrollToId("hero")}>ConnectLift Mate</h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <button onClick={() => scrollToId("features")}>Features</button>
            <button onClick={() => scrollToId("testimonials")}>Testimonials</button>
            <button onClick={() => scrollToId("pricing")}>Pricing</button>
            <button onClick={() => scrollToId("faq")}>FAQs</button>
            <button onClick={() => setShowDemo(true)}>Live Demo</button>
          </nav>
        </header>

        {/* FAQ SECTION */}
        <section id="faq" className={\`py-20 px-6 \${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}\`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">❓ Frequently Asked Questions</h2>
            <div className="text-left space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-1">Is this extension really free?</h3>
                <p className="text-sm">Yes! All core features are completely free. AI features require your own Groq API key.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Will my data sync across devices?</h3>
                <p className="text-sm">Currently, saved data is local to your browser. We may offer sync support soon.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Can I import/export my notes?</h3>
                <p className="text-sm">Absolutely! Use the Import/Export options in the Settings page.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI DEMO SECTION - MODAL */}
        {showDemo && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className={\`relative w-full max-w-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl p-6 shadow-xl\`}>
              <button
                onClick={() => setShowDemo(false)}
                className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full text-sm shadow-md transition"
              >
                ✖
              </button>
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">🤖 Try Our AI Message Generator</h2>
                <p className="mb-6">Enter a role or profile headline and get a personalized connection message using AI.</p>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                  <input type="text" placeholder="e.g. Senior Software Engineer at Amazon" className="w-full max-w-md px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700" />
                  <Button className="px-6 py-3 bg-blue-600 text-white rounded-md">Generate</Button>
                </div>
                <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-left text-sm">
                  <strong>Sample Output:</strong>
                  <p className="mt-2">Hi [Name], I came across your profile as a Senior Engineer at Amazon and was truly impressed by your journey. I'd love to connect and learn from your experience. 🚀</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default LandingPage;
