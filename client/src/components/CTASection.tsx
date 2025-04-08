import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-800 dark:to-indigo-800 text-white">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to supercharge your LinkedIn networking?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already making meaningful connections with ConnectLift.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="px-8 py-4 bg-white text-primary-700 hover:bg-gray-100 font-bold rounded-lg transform hover:scale-105 transition duration-300 shadow-lg"
            >
              Add to Chrome — It's Free
            </Button>
            <Button 
              className="px-8 py-4 bg-primary-800/50 hover:bg-primary-800/80 text-white font-bold rounded-lg border border-white/20 transition"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
