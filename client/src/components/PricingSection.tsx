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
    <section id="pricing" className="py-16 md:py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Start for free and unlock premium features as you need them.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingData.map((plan, index) => (
            <motion.div 
              key={index}
              className={`${plan.isPopular 
                ? 'bg-gradient-to-br from-primary-50 to-indigo-50 dark:from-primary-900/30 dark:to-indigo-900/30 border border-primary-200 dark:border-primary-800 shadow-md relative transform scale-105' 
                : 'bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm'} 
                p-6 rounded-xl flex flex-col`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-bold">{plan.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600 dark:text-gray-400">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.disabledFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-500">
                    <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={plan.buttonStyle}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
