import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { ThemeContext } from '../../context/ThemeContext';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import ThemeToggle from '../UI/ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';
import bioData from '../../data/bio.json';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { scrollPosition, activeSection } = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on item click for mobile
  const handleMenuItemClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  // Add scrolled class for navbar background change
  const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
    scrollPosition > 50
      ? theme === 'dark'
        ? 'bg-gray-900 bg-opacity-95 shadow-lg'
        : 'bg-white bg-opacity-95 shadow-md'
      : ''
  }`;

  return (
    <motion.nav
      className={navbarClasses}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-bold text-xl"
        >
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {bioData.github_username}<span className="text-blue-600">.dev</span>
          </ScrollLink>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * navItems.indexOf(item) }}
            >
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={`cursor-pointer hover:text-blue-600 transition-colors py-2 px-1 ${
                  activeSection === item.id
                    ? 'text-blue-600 font-medium border-b-2 border-blue-600'
                    : theme === 'dark'
                    ? 'text-gray-300'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </ScrollLink>
            </motion.div>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="ml-4 focus:outline-none text-gray-500 dark:text-gray-300"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`py-4 px-4 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleMenuItemClick}
              className={`block py-3 px-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                activeSection === item.id
                  ? 'text-blue-600 font-medium'
                  : theme === 'dark'
                  ? 'text-gray-300'
                  : 'text-gray-700'
              }`}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;