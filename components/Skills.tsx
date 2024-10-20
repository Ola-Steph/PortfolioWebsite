import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skills = [
    'JavaScript', 
    'React', 
    'Next.js', 
    'TypeScript', 
    'Node.js', 
    'HTML', 
    'CSS', 
    'Redux', 
    'MongoDB'
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>
        <motion.ul 
          className="grid grid-cols-2 md:grid-cols-3 gap-8 text-lg text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {skills.map((skill) => (
            <motion.li
              key={skill}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Skills;
