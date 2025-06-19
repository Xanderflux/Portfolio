import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import Section from '../UI/Section';
import bioData from '../../data/bio.json';

const About = () => {
  const { theme } = useContext(ThemeContext);
  
  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <motion.div 
          className="md:col-span-5 flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Main image */}
            <div className="w-full max-w-sm h-80 rounded-lg overflow-hidden">
              <img
                src="/assets/images/xanderflux.jpg"
                alt="Adesoye Ademola"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience badge */}
            <motion.div
              className={`absolute -bottom-5 -left-5 w-32 h-32 rounded-full flex items-center justify-center shadow-lg ${
                theme === 'dark' ? 'bg-blue-600' : 'bg-blue-500'
              }`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center text-white">
                <p className="text-2xl font-bold">3+</p>
                <p className="text-sm">Years of<br/>Experience</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="md:col-span-7"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Full-Stack Software Developer
          </h3>
          
          <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            {bioData.summary}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                <span className="font-semibold">Name:</span> {bioData.name}
              </p>
            </div>
            <div>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                <span className="font-semibold">Email:</span> {bioData.email}
              </p>
            </div>
            <div>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                <span className="font-semibold">Location:</span> {bioData.location}
              </p>
            </div>
            <div>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                <span className="font-semibold">Availability:</span> Open for opportunities
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href={bioData.social_links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              Connect on LinkedIn
            </a>
            <a 
              href={bioData.resume_download_link} 
              className={`${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
              } font-medium py-3 px-6 rounded-md transition-colors duration-300`}
              download
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;