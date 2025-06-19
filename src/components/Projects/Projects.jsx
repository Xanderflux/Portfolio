import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import Section from '../UI/Section';
import projectsData from '../../data/projects.json';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Default images for tags
  const defaultImages = {
    web_app1: "/assets/images/projects/swagger1.png",
    data_analysis: "/assets/images/projects/yashowardhan-singh-cGot2jFpKIM-unsplash.jpg",
    data_analysis2: "/assets/images/projects/markus-winkler-IrRbSND5EUc-unsplash.jpg",
    default: "/assets/images/526887.jpg",
  };

  return (
    <Section id="projects" title="My Projects">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectsData.map((project) => {
          // Determine image to use
          let imageSrc = project.image;
          if (!imageSrc || imageSrc.trim() === "") {
            const tag = project.tag ? project.tag : null;
            imageSrc = (tag && defaultImages[tag]) || defaultImages.default;
          }

          return (
            <motion.div
              key={project.id}
              className={`rounded-lg overflow-hidden shadow-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className={`text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded-md ${
                          theme === 'dark'
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* <p
                  className={`text-sm font-medium mb-4 ${
                    theme === 'dark' ? 'text-green-400' : 'text-green-700'
                  }`}
                >
                  {project.impact}
                </p> */}
                
                <div className="flex space-x-3">
                  {project.link && project.link.trim() !== '' ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 flex items-center"
                    >
                      <FaGithub className="mr-1" />
                      <span>Code</span>
                    </a>
                  ) : (
                    <span
                      className={`flex items-center text-xs px-2 py-1 rounded  ${
                        theme === 'dark' ? 'text-yellow-100 bg-yellow-800' : 'bg-yellow-100 text-yellow-800'
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      <FaGithub className="mr-1" />
                      Private Repo
                    </span>
                  )}
                  {project.live_link && project.live_link.trim() !== '' ? (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 flex items-center"
                    >
                      <FaExternalLinkAlt className="mr-1" />
                      <span>Demo</span>
                    </a>
                  ) : (
                    <span
                      className={`flex items-center text-xs px-2 py-1 rounded bg-gray-200 text-gray-600 ${
                        theme === 'dark' ? 'bg-gray-800 text-gray-100' : ''
                      }`}
                    >
                      <FaExternalLinkAlt className="mr-1" />
                      Demo coming soon 😉
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};

export default Projects;