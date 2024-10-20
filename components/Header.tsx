import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-6 px-10 shadow-lg sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-yellow-300">Your Name</h1>
        <ul className="flex space-x-8 text-lg">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-lime-400 transition-colors duration-300">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
