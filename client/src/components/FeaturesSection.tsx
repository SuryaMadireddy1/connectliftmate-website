import { motion } from "framer-motion";

interface Feature {
  title: string;
  desc: string;
  icon: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

const FeaturesSection = ({ features }: FeaturesSectionProps) => {
  return (
    <section id="features" className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950/20 transition-colors duration-300">
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
              Powerful Features
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to enhance your LinkedIn networking experience and manage your professional connections.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            // Create different gradient colors for each feature card
            const gradients = [
              "from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/30",
              "from-purple-50 to-pink-50 dark:from-purple-950/40 dark:to-pink-950/30",
              "from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/30",
              "from-violet-50 to-fuchsia-50 dark:from-violet-950/40 dark:to-fuchsia-950/30",
              "from-indigo-50 to-cyan-50 dark:from-indigo-950/40 dark:to-cyan-950/30",
              "from-fuchsia-50 to-rose-50 dark:from-fuchsia-950/40 dark:to-rose-950/30",
            ];
            
            const iconColors = [
              "text-indigo-600 dark:text-indigo-400",
              "text-purple-600 dark:text-purple-400",
              "text-blue-600 dark:text-blue-400",
              "text-violet-600 dark:text-violet-400",
              "text-fuchsia-600 dark:text-fuchsia-400",
              "text-rose-600 dark:text-rose-400",
            ];
            
            return (
              <motion.div 
                key={index}
                className={`bg-gradient-to-br ${gradients[index % gradients.length]} p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`text-4xl mb-4 ${iconColors[index % iconColors.length]}`}>{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 flex-grow">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
