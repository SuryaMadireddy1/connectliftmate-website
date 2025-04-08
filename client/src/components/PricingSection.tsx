import { motion } from "framer-motion";

interface PricingPlan {
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  disabledFeatures: string[];
  buttonText: string;
  buttonStyle: string;
  isPopular?: boolean;
}

interface PricingSectionProps {
  pricingData: PricingPlan[];
}

const PricingSection = ({ pricingData }: PricingSectionProps) => {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/20 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block animated-gradient px-6 py-2 rounded-full mb-4">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Simple, Free Forever
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ConnectLift Mate is completely free to use. You only need to supply your own API key for the AI features.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {pricingData.map((plan, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-r from-indigo-100 via-purple-50 to-indigo-100 dark:from-indigo-900/30 dark:via-purple-900/20 dark:to-indigo-900/30 border border-indigo-200 dark:border-indigo-800/50 shadow-xl p-8 rounded-2xl flex flex-col relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.title}</h3>
                    <p className="text-indigo-700 dark:text-indigo-300 mt-1 font-medium">{plan.description}</p>
                  </div>
                  <div className="bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-bold px-4 py-2 rounded-full animate-pulse">
                    FREE FOREVER
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center">
                    <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">${plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">No credit card required</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Included Features
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.2 }}
                        >
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white flex items-center">
                      <span className="text-indigo-500 mr-2">🔑</span> API Key Requirements
                    </h4>
                    <ul className="space-y-3">
                      <motion.li 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">Bring your own Groq API key for AI features</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">Sign up for free at groq.com</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">Easy setup within the extension</span>
                      </motion.li>
                    </ul>
                  </div>
                </div>
                
                <motion.button 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
