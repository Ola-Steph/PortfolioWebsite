import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Your Name
        </motion.h1>
        <motion.p 
          className="text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          A passionate developer focused on building amazing web experiences.
        </motion.p>
        <motion.a 
          href="#contact"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
