import { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqData: FAQItem[];
}

const FAQSection = ({ faqData }: FAQSectionProps) => {
  const [expandedFaq, setExpandedFaq] = useState(0);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about ConnectLift.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index} 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button 
                className="flex justify-between items-center w-full p-5 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium text-left text-gray-900 dark:text-white">{faq.question}</h3>
                <svg 
                  className={`w-5 h-5 transition-transform ${expandedFaq === index ? '' : 'transform rotate-180'}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`bg-white dark:bg-gray-900 px-5 pt-0 pb-5 rounded-b-lg shadow-sm ${expandedFaq === index ? 'block' : 'hidden'}`}>
                <p className="text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
