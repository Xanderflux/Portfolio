import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-full focus:outline-none ${
        theme === 'dark' 
          ? 'bg-gray-800 text-yellow-400' 
          : 'bg-gray-100 text-gray-800'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
    </motion.button>
  );
};

export default ThemeToggle;