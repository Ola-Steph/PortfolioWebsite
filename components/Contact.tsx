import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I'd love to hear from you. Feel free to drop a message below!
        </motion.p>
        <form className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
          <input type="text" placeholder="Name" className="p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500" />
          <input type="email" placeholder="Email" className="p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500" />
          <textarea placeholder="Message" className="p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"></textarea>
          <motion.button 
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
