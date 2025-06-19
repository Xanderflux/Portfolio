import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import { ThemeContext } from '../../context/ThemeContext';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import bioData from '../../data/bio.json';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center pt-16 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full md:w-3/5 order-2 md:order-1">
            <motion.div variants={itemVariants}>
              <h2
                className={`text-xl md:text-2xl font-medium mb-2 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                Hello, I'm
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h1
                className={`text-4xl md:text-6xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {bioData.name}
              </h1>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className={`text-xl md:text-2xl font-medium mb-6 h-16 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              <Typewriter
                options={{
                  strings: [
                    bioData.title,
                    "React Developer",
                    "Django Expert",
                    "API Designer",
                    "Problem Solver"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className={`text-base md:text-lg mb-8 max-w-2xl ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {bioData.tagline}
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center"
                >
                  Get In Touch
                </button>
              </Link>
              
              <a
                href={bioData.social_links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                } font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center`}
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </a>
              
              <a
                href={bioData.social_links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                } font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center`}
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
              
              <a
                href={bioData.resume_download_link}
                download="Adesoye_Ademola_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                } font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center`}
              >
                <FaFileAlt className="mr-2" />
                Resume
              </a>
            </motion.div>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="w-full md:w-2/5 order-1 md:order-2 mb-8 md:mb-0 flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <img
                src="/assets/images/526887.jpg"
                alt={bioData.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;