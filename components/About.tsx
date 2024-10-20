import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I'm an experienced developer with expertise in HTML, CSS, JavaScript, React, and more. I help businesses build online presences and web applications that achieve their goals.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
