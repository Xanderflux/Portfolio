import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';

const Section = ({ id, title, children }) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <section 
      id={id} 
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h2>
          <div className="mt-4 flex justify-center">
            <span className="w-24 h-1 bg-blue-600 rounded-full"></span>
          </div>
        </motion.div>
        
        {children}
      </div>
    </section>
  );
};

export default Section;