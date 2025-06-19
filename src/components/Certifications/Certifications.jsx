import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import Section from '../UI/Section';
import certificationsData from '../../data/certifications.json';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
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

  return (
    <Section id="certifications" title="Certifications">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {certificationsData.map((certification) => (
          <motion.div
            key={certification.id}
            className={`p-6 rounded-lg shadow-md ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex justify-between items-start">
              <h3 className={`text-lg font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {certification.name}
              </h3>
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                theme === 'dark' ? 'bg-blue-900 bg-opacity-30 text-blue-300' : 'bg-blue-100 text-blue-800'
              }`}>
                {certification.date}
              </span>
            </div>
            
            <p className={`text-md font-medium mb-3 ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>
              {certification.issuer}
            </p>
            
            <p className={`mb-4 text-sm ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {certification.description}
            </p>
            
            <a
              href={certification.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-blue-500 hover:text-blue-600 transition-colors"
            >
              <span>View Certificate</span>
              <FaExternalLinkAlt className="ml-1 text-xs" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Certifications;