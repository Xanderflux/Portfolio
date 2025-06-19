import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaXTwitter } from 'react-icons/fa6';
import bioData from '../../data/bio.json';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const year = new Date().getFullYear();

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <footer className={`py-10 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div {...fadeInUp} className="mb-6 md:mb-0">
            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {bioData.github_username}<span className="text-blue-600">.dev</span>
            </h3>
            <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Building innovative solutions with modern web technologies
            </p>
          </motion.div>
          
          <motion.div {...fadeInUp} className="flex items-center space-x-4">
            <a 
              href={bioData.social_links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-xl hover:text-blue-600 transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href={bioData.social_links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-xl hover:text-blue-600 transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href={bioData.social_links.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-xl hover:text-blue-600 transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
            <a 
              href={`mailto:${bioData.email}`} 
              className={`text-xl hover:text-blue-600 transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          {...fadeInUp}
          className={`mt-8 pt-6 border-t ${
            theme === 'dark' ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-600'
          } text-center`}
        >
          <p>&copy; {year} Adesoye Ademola. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;