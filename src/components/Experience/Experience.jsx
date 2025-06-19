import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import Section from '../UI/Section';
import experienceData from '../../data/experience.json';

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <Section id="experience" title="Work Experience">
      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experienceData.map((job) => (
          <motion.div 
            key={job.id}
            className={`relative pl-8 border-l-4 ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            }`}
            variants={itemVariants}
          >
            {/* Timeline dot */}
            <div 
              className={`absolute left-[-11px] top-0 w-5 h-5 rounded-full ${
                theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
              }`}
            />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className={`text-xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {job.role}
              </h3>
              <span className={`text-sm font-medium px-3 py-1 rounded-full w-fit ${
                theme === 'dark' ? 'bg-blue-900 bg-opacity-30 text-blue-300' : 'bg-blue-100 text-blue-800'
              }`}>
                {job.start_date} - {job.end_date}
              </span>
            </div>
            
            <p className={`text-lg font-medium mb-2 ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>
              {job.company} | {job.location}
            </p>
            
            <p className={`mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {job.description}
            </p>
            
            <div className="mb-6">
              <h4 className={`text-sm font-semibold uppercase mb-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Key Achievements
              </h4>
              <ul className="list-disc list-inside space-y-2">
                {job.achievements.map((achievement, index) => (
                  <li 
                    key={index}
                    className={`${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className={`text-sm font-semibold uppercase mb-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className={`text-xs px-3 py-1 rounded-full ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Experience;