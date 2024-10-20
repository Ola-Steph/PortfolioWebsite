import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-semibold mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((project) => (
            <motion.div
              key={project}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-2">Project {project}</h3>
              <p className="text-gray-600">
                This is a brief description of Project {project}. It includes the tools and technologies used.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
